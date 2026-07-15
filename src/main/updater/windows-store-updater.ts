// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { app, dialog, net } from "electron";
import { windowsStoreUpdaterLogger } from "../logging/scoped-runtime-logger";
import { WindowsStoreUpdaterOptions } from "./desktop-updater-types";
import {
  compareBuildVersions,
  isBuildVersionComparable,
} from "./update-version";
import {
  DesktopUpdater,
  UpdateLifecycleState,
} from "../workspace/desktop-runtime-types";

export class WindowsStoreUpdater implements DesktopUpdater {
  private inFlightCheck: Promise<void> | null = null;
  private inFlightInstall: Promise<void> | null = null;
  private installProgressPercent: number | null = null;
  private isUpdateReady = false;
  private lastStoreDetectionAttemptAtMs: number | null = null;
  private lastUnavailableReason: string | null = null;
  constructor(private readonly options: WindowsStoreUpdaterOptions) {}
  async initialize(): Promise<void> {
    if (!app.isPackaged) {
      this.lastUnavailableReason = "dev build";
      return;
    }
    if (!this.options.storeProductId.trim()) {
      this.lastUnavailableReason = "missing windows store product id";
      return;
    }
    if (!this.options.storeUpdateManifestUrl.trim()) {
      this.lastUnavailableReason = "missing windows store update manifest url";
      return;
    }
    if (!this.options.packageIdentity.trim()) {
      this.lastUnavailableReason = "missing packaged windows package identity";
      return;
    }
    try {
      resolveStoreManifestUrl(this.options.storeUpdateManifestUrl);
    } catch {
      this.lastUnavailableReason = "invalid windows store update manifest url";
      return;
    }
    if (!this.options.nativeAddon.getCurrentPackageFamily().trim()) {
      this.lastUnavailableReason = "missing current windows package family";
      return;
    }
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
    await this.runCheck().catch(() => undefined);
  }
  async checkForUpdatesInBackground(): Promise<void> {
    await this.checkForUpdates();
  }
  async installUpdatesIfAvailable(): Promise<void> {
    if (this.inFlightInstall) {
      await this.inFlightInstall;
      return;
    }
    const installPromise = this.performInstall();
    this.inFlightInstall = installPromise;
    try {
      await installPromise;
    } catch (error) {
      this.setInstallProgressPercent(null);
      windowsStoreUpdaterLogger().error(
        "Failed to install Windows Store update",
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
  private async runCheck(): Promise<void> {
    const checkPromise = this.inFlightCheck ?? this.performCheck();
    this.inFlightCheck = checkPromise;
    try {
      await checkPromise;
    } catch (error) {
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      windowsStoreUpdaterLogger().error(
        "Failed to check for Windows Store updates",
        {
          safe: {},
          sensitive: {
            error,
          },
        },
      );
      throw error;
    } finally {
      if (this.inFlightCheck === checkPromise) this.inFlightCheck = null;
    }
  }
  private async performCheck(): Promise<void> {
    if (!this.isUpdateReady) this.setUpdateLifecycleState("checking");
    const manifest = await fetchWindowsStoreManifest({
      fetch: (url) => net.fetch(url),
      storeUpdateManifestUrl: this.options.storeUpdateManifestUrl,
    });
    if (!isBuildVersionComparable(this.options.buildVersion)) {
      windowsStoreUpdaterLogger().warning(
        "Local Windows Store build version is unavailable; bypassing manifest version gate.",
        {
          safe: {
            buildVersion: this.options.buildVersion,
            manifestBuildVersion: manifest?.buildVersion ?? null,
            packageIdentity: this.options.packageIdentity,
          },
          sensitive: {},
        },
      );
    }
    const state = resolveWindowsStoreUpdateState({
      buildVersion: this.options.buildVersion,
      isUpdateReady: this.isUpdateReady,
      lastStoreDetectionAttemptAtMs: this.lastStoreDetectionAttemptAtMs,
      manifest,
      nowMs: Date.now(),
      packageIdentity: this.options.packageIdentity,
      storeProductId: this.options.storeProductId,
    });
    if (state === "up-to-date") {
      this.setUpdateReady(false);
      this.setUpdateLifecycleState("idle");
      return;
    }
    if (state !== "should-check-store") {
      this.setUpdateLifecycleState(state === "update-ready" ? "ready" : "idle");
      return;
    }
    this.lastStoreDetectionAttemptAtMs = Date.now();
    windowsStoreUpdaterLogger().info?.(
      "Checking Windows Store for package updates",
      {
        safe: {
          buildVersion: this.options.buildVersion,
          manifestBuildVersion: manifest?.buildVersion ?? null,
          packageIdentity: this.options.packageIdentity,
        },
        sensitive: {},
      },
    );
    this.setUpdateLifecycleState("downloading");
    const result =
      await this.options.nativeAddon.trySilentDownloadStoreUpdates?.();
    if (result == null) {
      throw Error(
        "Windows Store updater native addon is missing download API.",
      );
    }
    windowsStoreUpdaterLogger().info?.(
      "Windows Store package update check completed",
      {
        safe: {
          canSilentlyDownload: result.canSilentlyDownload,
          completed: result.completed,
          hasUpdate: result.hasUpdate,
          overallState: result.overallState,
        },
        sensitive: {},
      },
    );
    if (!result.hasUpdate || !result.canSilentlyDownload) {
      this.setUpdateReady(false);
      this.setUpdateLifecycleState("idle");
      return;
    }
    if (!result.completed) {
      this.setUpdateReady(false);
      this.setUpdateLifecycleState("idle");
      throw Error(
        `Windows Store update download failed with state '${result.overallState}'.`,
      );
    }
    this.setUpdateReady(true);
    this.setUpdateLifecycleState("ready");
  }
  private async performInstall(): Promise<void> {
    if (!this.isUpdateReady) return;
    this.setUpdateReady(false);
    this.setInstallProgressPercent(0);
    let installRequested = false;
    const notifyInstallRequested = (): void => {
      if (installRequested) return;
      installRequested = true;
      this.options.onInstallUpdatesRequested?.();
    };
    const result =
      await this.options.nativeAddon.trySilentDownloadAndInstallStoreUpdates?.(
        (percent, state) => {
          this.setInstallProgressPercent(percent);
          if (state === "Deploying") notifyInstallRequested();
        },
      );
    if (result == null) {
      throw Error("Windows Store updater native addon is missing install API.");
    }
    this.setUpdateReady(result.hasUpdate);
    if (!result.hasUpdate || !result.canSilentlyDownload) {
      this.setInstallProgressPercent(null);
      return;
    }
    if (result.completed) {
      this.setUpdateReady(false);
      this.setInstallProgressPercent(100);
      notifyInstallRequested();
      return;
    }
    this.setInstallProgressPercent(null);
    throw Error(
      `Windows Store update install failed with state '${result.overallState}'.`,
    );
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

function resolveStoreManifestUrl(storeUpdateManifestUrl: string): string {
  const url = new URL(storeUpdateManifestUrl.trim());
  if (url.protocol !== "https:") {
    throw Error("Windows Store update manifest URL must use https transport.");
  }
  return url.toString();
}

async function fetchWindowsStoreManifest({
  fetch,
  storeUpdateManifestUrl,
}: {
  fetch(url: string): Promise<Response>;
  storeUpdateManifestUrl: string;
}): Promise<{
  buildVersion: string;
  packageIdentity: string;
  schemaVersion: number;
  storeProductId: string;
} | null> {
  const manifestUrl = resolveStoreManifestUrl(storeUpdateManifestUrl);
  const response = await fetch(manifestUrl);
  if (response.status === 404) return null;
  if (!response.ok) {
    throw Error(
      `Windows Store update manifest request failed (${response.status} ${response.statusText})`,
    );
  }
  const resolvedUrl = response.url.trim() || manifestUrl;
  if (new URL(resolvedUrl).protocol !== "https:") {
    throw Error("Windows Store update manifest must use https transport.");
  }
  const parsed = JSON.parse(await response.text()) as Record<string, unknown>;
  if (
    typeof parsed.schemaVersion !== "number" ||
    typeof parsed.buildVersion !== "string" ||
    typeof parsed.storeProductId !== "string" ||
    typeof parsed.packageIdentity !== "string"
  ) {
    throw Error("Windows Store update manifest is missing required fields.");
  }
  return {
    buildVersion: parsed.buildVersion.trim(),
    packageIdentity: parsed.packageIdentity.trim(),
    schemaVersion: parsed.schemaVersion,
    storeProductId: parsed.storeProductId.trim(),
  };
}

function resolveWindowsStoreUpdateState({
  buildVersion,
  isUpdateReady,
  lastStoreDetectionAttemptAtMs,
  manifest,
  nowMs,
  packageIdentity,
  storeProductId,
}: {
  buildVersion: string;
  isUpdateReady: boolean;
  lastStoreDetectionAttemptAtMs: number | null;
  manifest: {
    buildVersion: string;
    packageIdentity: string;
    storeProductId: string;
  } | null;
  nowMs: number;
  packageIdentity: string;
  storeProductId: string;
}): "up-to-date" | "update-ready" | "waiting-for-store" | "should-check-store" {
  const hasComparableLocalVersion = isBuildVersionComparable(buildVersion);
  const recentlyCheckedStore =
    lastStoreDetectionAttemptAtMs != null &&
    nowMs - lastStoreDetectionAttemptAtMs < 30 * 60 * 1000;
  if (manifest == null) {
    return hasComparableLocalVersion
      ? "up-to-date"
      : isUpdateReady
        ? "update-ready"
        : recentlyCheckedStore
          ? "waiting-for-store"
          : "should-check-store";
  }
  if (manifest.storeProductId !== storeProductId) {
    throw Error(
      `Windows Store update manifest targets product '${manifest.storeProductId}' instead of '${storeProductId}'.`,
    );
  }
  if (manifest.packageIdentity !== packageIdentity) {
    throw Error(
      `Windows Store update manifest targets package identity '${manifest.packageIdentity}' instead of '${packageIdentity}'.`,
    );
  }
  if (!isBuildVersionComparable(manifest.buildVersion)) {
    throw Error(
      `Windows Store update manifest has invalid build version '${manifest.buildVersion}'.`,
    );
  }
  return hasComparableLocalVersion &&
    compareBuildVersions(manifest.buildVersion, buildVersion) <= 0
    ? "up-to-date"
    : isUpdateReady
      ? "update-ready"
      : recentlyCheckedStore
        ? "waiting-for-store"
        : "should-check-store";
}
