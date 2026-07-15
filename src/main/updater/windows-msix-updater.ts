// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { createHash } from "node:crypto";
import * as fsPromises from "node:fs/promises";
import * as path from "node:path";
import { Readable } from "node:stream";
import { app, dialog, net } from "electron";
import { windowsUpdaterLogger } from "../logging/scoped-runtime-logger";
import { isNodeErrorCode, isRecord } from "../runtime/desktop-runtime-utils";
import {
  WindowsMsixPreparedUpdate,
  WindowsMsixUpdateManifest,
  WindowsMsixUpdaterOptions,
} from "./desktop-updater-types";
import { compareBuildVersions } from "./update-version";
import {
  DesktopUpdater,
  UpdateLifecycleState,
} from "../workspace/desktop-runtime-types";

export class WindowsMsixUpdater implements DesktopUpdater {
  private inFlightCheck: Promise<"up-to-date" | "update-ready"> | null = null;
  private inFlightInstall: Promise<void> | null = null;
  private installProgressPercent: number | null = null;
  private isUpdateReady = false;
  private lastUnavailableReason: string | null = null;
  private stateRoot = "";
  constructor(private readonly options: WindowsMsixUpdaterOptions) {}
  async initialize(): Promise<void> {
    if (!app.isPackaged) {
      this.lastUnavailableReason = "dev build";
      return;
    }
    if (!this.options.manifestUrl.trim()) {
      this.lastUnavailableReason = "missing packaged windows update url";
      return;
    }
    if (!this.options.packageIdentity.trim()) {
      this.lastUnavailableReason = "missing packaged windows package identity";
      return;
    }
    if (!this.options.packagePublisher.trim()) {
      this.lastUnavailableReason = "missing packaged windows package publisher";
      return;
    }
    const packageFamily = this.options.nativeAddon
      .getCurrentPackageFamily()
      .trim();
    if (!packageFamily) {
      this.lastUnavailableReason = "missing current windows package family";
      return;
    }
    this.stateRoot = path.join(
      app.getPath("userData"),
      "windows-msix-updater",
      packageFamily,
    );
    await fsPromises.mkdir(this.stateRoot, {
      recursive: true,
    });
    this.stateRoot = await fsPromises.realpath(this.stateRoot);
    await this.reconcileLocalPreparedState();
    if (this.options.checkIntervalMs > 0) {
      setInterval(() => {
        void this.checkForUpdatesInBackground();
      }, this.options.checkIntervalMs).unref();
    }
    void this.checkForUpdatesInBackground();
  }
  hasUpdater(): boolean {
    return this.lastUnavailableReason == null;
  }
  getUnavailableReason(): string | null {
    return this.lastUnavailableReason;
  }
  getIsUpdateReady(): boolean {
    return this.isUpdateReady;
  }
  async checkForUpdates(): Promise<void> {
    await this.runCheck({
      manual: true,
    }).catch(() => undefined);
  }
  async checkForUpdatesInBackground(): Promise<void> {
    await this.runCheck({
      manual: false,
    }).catch(() => undefined);
  }
  async installUpdatesIfAvailable(): Promise<void> {
    if (this.inFlightInstall) {
      await this.inFlightInstall;
      return;
    }
    const installPromise = this.installPreparedUpdate();
    this.inFlightInstall = installPromise;
    try {
      await installPromise;
    } catch (error) {
      this.setInstallProgressPercent(null);
      windowsUpdaterLogger().error(
        "Failed to install prepared Windows update",
        {
          safe: {},
          sensitive: {
            error,
          },
        },
      );
      await this.showActionError({
        message: `Unable to install the ${app.getName()} update.`,
        detail: "Try checking for updates again.",
      });
    } finally {
      if (this.inFlightInstall === installPromise) this.inFlightInstall = null;
    }
  }
  private async runCheck({
    manual,
  }: {
    manual: boolean;
  }): Promise<"up-to-date" | "update-ready"> {
    const checkPromise = this.inFlightCheck ?? this.performCheck();
    this.inFlightCheck = checkPromise;
    try {
      const result = await checkPromise;
      if (manual) await this.showManualCheckResult(result);
      return result;
    } catch (error) {
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      windowsUpdaterLogger().error("Failed to check for Windows updates", {
        safe: {},
        sensitive: {
          error,
        },
      });
      if (manual) {
        await this.showActionError({
          message: `Unable to check for ${app.getName()} updates.`,
          detail: error instanceof Error ? error.message : String(error),
        });
      }
      throw error;
    } finally {
      if (this.inFlightCheck === checkPromise) this.inFlightCheck = null;
    }
  }
  private async fetchManifest(): Promise<WindowsMsixUpdateManifest> {
    const response = await net.fetch(this.options.manifestUrl);
    if (!response.ok) {
      throw Error(
        `Windows update manifest request failed (${response.status} ${response.statusText})`,
      );
    }
    this.assertFetchedHttpsUrl(
      response.url,
      this.options.manifestUrl,
      "manifest",
    );
    const parsed = JSON.parse(await response.text()) as Record<string, unknown>;
    if (
      typeof parsed.buildVersion !== "string" ||
      typeof parsed.packageIdentity !== "string" ||
      typeof parsed.packagePublisher !== "string"
    ) {
      throw Error("Windows update manifest is missing required fields.");
    }
    return {
      buildVersion: parsed.buildVersion.trim(),
      packageIdentity: parsed.packageIdentity.trim(),
      packagePublisher: parsed.packagePublisher.trim(),
      ...this.selectManifestPackage(parsed),
    };
  }
  private selectManifestPackage(
    manifest: Record<string, unknown>,
  ): Pick<WindowsMsixUpdateManifest, "length" | "packageUrl" | "sha256"> {
    if (Array.isArray(manifest.packages)) {
      const packageForArch = manifest.packages.find((item) => {
        return isRecord(item) && item.arch === process.arch;
      });
      if (packageForArch == null) {
        throw Error(
          `Windows update manifest is missing a package for ${process.arch}.`,
        );
      }
      return this.validateManifestPackage(packageForArch);
    }
    return this.validateManifestPackage(manifest);
  }
  private validateManifestPackage(
    manifestPackage: unknown,
  ): Pick<WindowsMsixUpdateManifest, "length" | "packageUrl" | "sha256"> {
    if (
      !isRecord(manifestPackage) ||
      typeof manifestPackage.packageUrl !== "string" ||
      typeof manifestPackage.sha256 !== "string" ||
      typeof manifestPackage.length !== "number"
    ) {
      throw Error("Windows update manifest is missing required fields.");
    }
    const packageUrl = new URL(manifestPackage.packageUrl.trim());
    if (packageUrl.protocol !== "https:") {
      throw Error("Windows update package URL must use https transport.");
    }
    return {
      length: manifestPackage.length,
      packageUrl: packageUrl.toString(),
      sha256: manifestPackage.sha256.trim().toLowerCase(),
    };
  }
  private async downloadUpdatePackage(
    manifest: Pick<
      WindowsMsixUpdateManifest,
      "length" | "packageUrl" | "sha256"
    >,
  ): Promise<string> {
    const packageUrl = manifest.packageUrl;
    const packageFilename = decodeURIComponent(
      path.posix.basename(new URL(packageUrl).pathname),
    ).trim();
    if (
      packageFilename === "" ||
      !packageFilename.toLowerCase().endsWith(".msix")
    ) {
      throw Error(`Invalid Windows update package URL '${packageUrl}'.`);
    }
    const packagePath = path.join(this.stateRoot, packageFilename);
    const downloadPath = `${packagePath}.download`;
    await this.cleanupDownloadedPackages(downloadPath);
    const response = await net.fetch(packageUrl);
    if (!response.ok || response.body == null) {
      throw Error(
        `Windows update download failed (${response.status} ${response.statusText})`,
      );
    }
    this.assertFetchedHttpsUrl(response.url, packageUrl, "package");
    const hash = createHash("sha256");
    let byteLength = 0;
    const bodyStream = Readable.fromWeb(response.body);
    const fileHandle = await fsPromises.open(downloadPath, "w");
    try {
      for await (const chunk of bodyStream) {
        const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        byteLength += buffer.length;
        hash.update(buffer);
        await fileHandle.write(buffer);
      }
    } finally {
      await fileHandle.close();
    }
    const digest = hash.digest("hex").toLowerCase();
    if (byteLength !== manifest.length) {
      await fsPromises.rm(downloadPath, {
        force: true,
      });
      throw Error(
        `Downloaded MSIX length mismatch (expected ${manifest.length}, got ${byteLength}).`,
      );
    }
    if (digest !== manifest.sha256) {
      await fsPromises.rm(downloadPath, {
        force: true,
      });
      throw Error(
        `Downloaded MSIX checksum mismatch (expected ${manifest.sha256}, got ${digest}).`,
      );
    }
    await fsPromises.rename(downloadPath, packagePath);
    return packagePath;
  }
  private async installPreparedUpdate(): Promise<void> {
    const stagedUpdate = await this.readStageState();
    if (stagedUpdate == null) {
      throw Error("Install requested without a staged Windows update.");
    }
    this.setUpdateReady(false);
    this.setInstallProgressPercent(0);
    let installRequested = false;
    const notifyInstallRequested = (): void => {
      if (installRequested) return;
      installRequested = true;
      this.options.onInstallUpdatesRequested?.();
    };
    const activation = this.options.nativeAddon.activateStagedPackage(
      stagedUpdate.packagePath,
      (percent) => {
        this.setInstallProgressPercent(percent);
        if (percent > 0) notifyInstallRequested();
      },
    );
    try {
      await activation;
      notifyInstallRequested();
    } catch (error) {
      await this.runCheck({
        manual: false,
      }).catch((resyncError) => {
        windowsUpdaterLogger().error("Failed to resync Windows updater state", {
          safe: {},
          sensitive: {
            error: resyncError,
          },
        });
      });
      this.setInstallProgressPercent(null);
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      throw error;
    }
  }
  private async showManualCheckResult(
    result: "up-to-date" | "update-ready",
  ): Promise<void> {
    if (result === "update-ready") {
      await dialog.showMessageBox({
        type: "info",
        buttons: ["OK"],
        defaultId: 0,
        noLink: true,
        message: `${app.getName()} update is ready to install.`,
        detail: "Use the Update button to restart into the new version.",
      });
      return;
    }
    await dialog.showMessageBox({
      type: "info",
      buttons: ["OK"],
      defaultId: 0,
      noLink: true,
      message: `${app.getName()} is up to date.`,
    });
  }
  private async reconcileLocalPreparedState(): Promise<void> {
    const stagedUpdate = await this.readStageState();
    if (stagedUpdate == null) {
      this.setUpdateReady(false);
      return;
    }
    if (
      compareBuildVersions(
        stagedUpdate.buildVersion,
        this.options.buildVersion,
      ) <= 0
    ) {
      await this.discardPreparedUpdate();
      return;
    }
    this.setUpdateReady(true);
    this.setUpdateLifecycleState("ready");
  }
  private async readStageState(): Promise<WindowsMsixPreparedUpdate | null> {
    const statePath = this.getStageStatePath();
    try {
      const parsed = JSON.parse(
        await fsPromises.readFile(statePath, "utf8"),
      ) as Record<string, unknown>;
      if (
        typeof parsed.buildVersion !== "string" ||
        typeof parsed.length !== "number" ||
        typeof parsed.packagePath !== "string" ||
        typeof parsed.sha256 !== "string"
      ) {
        throw Error("missing required fields");
      }
      const packageName = decodeURIComponent(path.basename(parsed.packagePath));
      const packagePath = path.join(this.stateRoot, packageName);
      return {
        buildVersion: parsed.buildVersion.trim(),
        length: parsed.length,
        packagePath,
        sha256: parsed.sha256.trim().toLowerCase(),
      };
    } catch (error) {
      if (isNodeErrorCode(error, "ENOENT")) return null;
      windowsUpdaterLogger().warning(
        "Discarding invalid Windows updater staged state.",
        {
          safe: {},
          sensitive: {
            error,
            statePath,
          },
        },
      );
      await fsPromises.rm(statePath, {
        force: true,
      });
      return null;
    }
  }
  private async cleanupDownloadedPackages(keepPath?: string): Promise<void> {
    const entries = await fsPromises.readdir(this.stateRoot, {
      withFileTypes: true,
    });
    await Promise.all(
      entries
        .filter((entry) => {
          if (!entry.isFile()) return false;
          const name = entry.name.toLowerCase();
          return name.endsWith(".msix") || name.endsWith(".download");
        })
        .map((entry) => {
          const filePath = path.join(this.stateRoot, entry.name);
          if (keepPath != null && filePath === keepPath)
            return Promise.resolve();
          return fsPromises.rm(filePath, {
            force: true,
          });
        }),
    );
  }
  private assertFetchedHttpsUrl(
    fetchedUrl: string,
    requestedUrl: string,
    resourceName: string,
  ): void {
    const resolvedUrl = fetchedUrl.trim() || requestedUrl;
    if (new URL(resolvedUrl).protocol !== "https:") {
      throw Error(
        `Windows update ${resourceName} URL must use https transport.`,
      );
    }
  }
  private async performCheck(): Promise<"up-to-date" | "update-ready"> {
    if (!this.isUpdateReady) this.setUpdateLifecycleState("checking");
    const manifest = await this.fetchManifest();
    if (manifest.packageIdentity !== this.options.packageIdentity) {
      throw Error(
        `Windows update manifest targets package identity '${manifest.packageIdentity}' instead of '${this.options.packageIdentity}'.`,
      );
    }
    if (manifest.packagePublisher !== this.options.packagePublisher) {
      throw Error(
        `Windows update manifest targets package publisher '${manifest.packagePublisher}' instead of '${this.options.packagePublisher}'.`,
      );
    }
    if (
      compareBuildVersions(manifest.buildVersion, this.options.buildVersion) <=
      0
    ) {
      await this.discardPreparedUpdate();
      this.setUpdateLifecycleState("idle");
      return "up-to-date";
    }
    const stagedUpdate = await this.readStageState();
    if (
      stagedUpdate != null &&
      stagedUpdate.buildVersion === manifest.buildVersion &&
      stagedUpdate.length === manifest.length &&
      stagedUpdate.sha256 === manifest.sha256
    ) {
      this.setUpdateReady(true);
      this.setUpdateLifecycleState("ready");
      return "update-ready";
    }
    if (stagedUpdate != null) await this.discardPreparedUpdate();
    this.setUpdateLifecycleState("downloading");
    const packagePath = await this.downloadUpdatePackage(manifest);
    await this.options.nativeAddon.stagePackage(packagePath);
    const statePath = this.getStageStatePath();
    await fsPromises.writeFile(
      `${statePath}.tmp`,
      JSON.stringify(
        {
          buildVersion: manifest.buildVersion,
          length: manifest.length,
          packagePath,
          sha256: manifest.sha256,
        },
        null,
        2,
      ),
    );
    await fsPromises.rename(`${statePath}.tmp`, statePath);
    this.setUpdateReady(true);
    this.setUpdateLifecycleState("ready");
    return "update-ready";
  }
  private getStageStatePath(): string {
    return path.join(this.stateRoot, "staged-msix.json");
  }
  private async discardPreparedUpdate(): Promise<void> {
    await fsPromises.rm(this.getStageStatePath(), {
      force: true,
    });
    await this.cleanupDownloadedPackages();
    this.setUpdateReady(false);
  }
  private setUpdateReady(isReady: boolean): void {
    if (this.isUpdateReady === isReady) return;
    this.isUpdateReady = isReady;
    this.options.onUpdateReadyChanged?.(isReady);
  }
  private setUpdateLifecycleState(state: UpdateLifecycleState): void {
    this.options.onUpdateLifecycleStateChanged?.(state);
  }
  private setInstallProgressPercent(percent: number | null): void {
    if (this.installProgressPercent === percent) return;
    this.installProgressPercent = percent;
    this.options.onInstallProgressChanged?.(percent);
  }
  private async showActionError({
    message,
    detail,
  }: {
    message: string;
    detail: string;
  }): Promise<void> {
    await dialog.showMessageBox({
      type: "error",
      buttons: ["OK"],
      defaultId: 0,
      noLink: true,
      message,
      detail,
    });
  }
}
