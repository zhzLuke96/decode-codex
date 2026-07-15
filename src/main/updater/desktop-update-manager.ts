// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as path from "node:path";
import { app, ipcMain } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  readPackageMetadataField,
} from "../logging/file-based-logger";
import {
  logScopedMessage,
  sparkleLogger,
} from "../logging/scoped-runtime-logger";
import { requireFromWorkspaceBoundary } from "../runtime/desktop-runtime-utils";
import { loadWindowsUpdaterNativeAddon } from "./desktop-update-service";
import {
  NativeSparkleAddon,
  OwlUpdatePolicies,
  RelaunchPolicy,
  WindowsUpdaterCallbacks,
} from "./desktop-updater-types";
import {
  loadOwlUpdatePolicies,
  parseRelaunchPolicy,
  resolveRelaunchDeadline,
} from "./update-relaunch-policy";
import { resolveUpdateCheckIntervalMs } from "./update-version";
import { WindowsMsixUpdater } from "./windows-msix-updater";
import { WindowsStoreUpdater } from "./windows-store-updater";
import {
  DesktopUpdateManager,
  DesktopUpdateManagerOptions,
  DesktopUpdater,
  RelaunchNotice,
  UpdateLifecycleState,
  WindowsNativeUpdaterAddon,
} from "../workspace/desktop-runtime-types";

export class DesktopUpdateManagerImpl implements DesktopUpdateManager {
  private automaticBackgroundDownloadsEnabled = false;
  private downloadProgressPercent: number | null = null;
  private forcedUpdateInstallStarted = false;
  private forcedUpdateRetryAtMs: number | null = null;
  private forcedUpdateTimer: NodeJS.Timeout | null = null;
  private installProgressPercent: number | null = null;
  private isUpdateReady = false;
  private lastUnavailableReason: string | null = null;
  private owlUpdatePolicies: OwlUpdatePolicies | null = null;
  private relaunchNotice: RelaunchNotice | null = null;
  private setAutomaticBackgroundDownloadsEnabledForMac:
    | ((enabled: boolean) => void)
    | null = null;
  private updateDownloadedAtMs: number | null = null;
  private updateLifecycleState: UpdateLifecycleState = "idle";
  private updater: DesktopUpdater | null = null;
  private updateIpcRegistered = false;
  constructor(private readonly options: DesktopUpdateManagerOptions) {}
  async initialize(): Promise<void> {
    if (!this.options.enableUpdater) {
      this.lastUnavailableReason =
        process.platform !== "darwin" && process.platform !== "win32"
          ? "unsupported platform"
          : `disabled for build flavor (${this.options.buildFlavor})`;
      return;
    }
    try {
      if (process.platform === "win32") {
        await this.initializeWindowsUpdater();
      } else {
        await this.initializeMacSparkle();
      }
      this.registerCheckForUpdatesIpc();
      if (this.hasUpdater()) {
        this.observeRelaunchNotificationPolicy();
        return;
      }
      sparkleLogger().warning("Updater unavailable after init.", {
        safe: {
          platform: process.platform,
          packaged: this.options.isPackaged,
          reason: this.lastUnavailableReason,
        },
        sensitive: {},
      });
    } catch (error) {
      sparkleLogger().error("Failed to set up updater", {
        safe: {},
        sensitive: {
          error,
        },
      });
      this.lastUnavailableReason = "updater initialization failed";
      this.updater = null;
    }
  }
  hasUpdater(): boolean {
    return this.updater != null;
  }
  getUnavailableReason(): string | null {
    return this.lastUnavailableReason;
  }
  getIsUpdateReady(): boolean {
    return this.isUpdateReady;
  }
  getInstallProgressPercent(): number | null {
    return this.installProgressPercent;
  }
  getDownloadProgressPercent(): number | null {
    return this.downloadProgressPercent;
  }
  getUpdateLifecycleState(): UpdateLifecycleState {
    return this.updateLifecycleState;
  }
  getRelaunchNotice(): RelaunchNotice | null {
    return this.relaunchNotice == null
      ? null
      : this.createRelaunchNotice(this.relaunchNotice.deadlineAtMs);
  }
  showRelaunchNoticeForDebug(): void {
    this.setRelaunchNotice(Date.now() + 5 * 60 * 60 * 1000);
  }
  async checkForUpdates(): Promise<void> {
    if (!this.updater) {
      sparkleLogger().warning(
        "Update check request ignored (updater unavailable).",
      );
      return;
    }
    try {
      await this.updater.checkForUpdates();
    } catch (error) {
      if (this.updateLifecycleState === "checking" && !this.isUpdateReady) {
        this.setUpdateLifecycleState("idle");
      }
      sparkleLogger().error("Failed to check for updates", {
        safe: {},
        sensitive: {
          error,
        },
      });
    }
  }
  async installUpdatesIfAvailable(): Promise<boolean> {
    if (!this.updater) {
      sparkleLogger().warning(
        "Update install request ignored (updater unavailable).",
      );
      return false;
    }
    try {
      if (this.isUpdateReady && process.platform !== "darwin") {
        this.setUpdateLifecycleState("installing");
      }
      await this.updater.installUpdatesIfAvailable();
      return true;
    } catch (error) {
      this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      sparkleLogger().error("Failed to install update", {
        safe: {},
        sensitive: {
          error,
        },
      });
      return false;
    }
  }
  setAutomaticBackgroundDownloadsEnabled(enabled: boolean): void {
    if (this.automaticBackgroundDownloadsEnabled === enabled) return;
    this.automaticBackgroundDownloadsEnabled = enabled;
    this.setAutomaticBackgroundDownloadsEnabledForMac?.(enabled);
  }
  private registerCheckForUpdatesIpc(): void {
    if (this.updateIpcRegistered) return;
    this.updateIpcRegistered = true;
    try {
      ipcMain.handle("codex_desktop:check-for-updates", async (event) => {
        if (this.options.isTrustedIpcEvent(event)) {
          await this.checkForUpdates();
        }
      });
    } catch (error) {
      sparkleLogger().warning("Failed to register updater IPC handler", {
        safe: {},
        sensitive: {
          error,
        },
      });
    }
  }
  private async initializeWindowsUpdater(): Promise<void> {
    const nativeAddon =
      loadWindowsUpdaterNativeAddon() as WindowsNativeUpdaterAddon | null;
    if (!nativeAddon) {
      this.lastUnavailableReason = "failed to load native windows updater";
      return;
    }
    const sharedOptions: WindowsUpdaterCallbacks = {
      checkIntervalMs: resolveUpdateCheckIntervalMs(),
      nativeAddon,
      onInstallProgressChanged: (percent) => {
        this.setInstallProgressPercent(percent);
      },
      onInstallUpdatesRequested: this.options.onInstallUpdatesRequested,
      onUpdateLifecycleStateChanged: (state) => {
        this.setUpdateLifecycleState(state);
      },
      onUpdateReadyChanged: (isReady) => {
        this.setUpdateReady(isReady);
      },
    };
    const storeConfig =
      typeof BuildFlavor.getWindowsStoreConfig === "function"
        ? BuildFlavor.getWindowsStoreConfig(this.options.buildFlavor)
        : null;
    const updater =
      storeConfig != null
        ? new WindowsStoreUpdater({
            ...sharedOptions,
            buildVersion: this.resolveWindowsStoreBuildVersion(),
            packageIdentity:
              readPackageMetadataField("codexWindowsPackageIdentity")?.trim() ??
              "",
            storeProductId: storeConfig.storeProductId,
            storeUpdateManifestUrl: storeConfig.storeUpdateManifestUrl,
          })
        : this.createWindowsMsixUpdater(sharedOptions);
    if (!updater) return;
    await updater.initialize?.();
    if (updater.hasUpdater?.() === false) {
      this.lastUnavailableReason = updater.getUnavailableReason?.() ?? null;
      return;
    }
    this.lastUnavailableReason = null;
    this.updater = updater;
    this.setUpdateReady(updater.getIsUpdateReady?.() === true);
    this.setInstallProgressPercent(null);
  }
  private createWindowsMsixUpdater(
    callbacks: WindowsUpdaterCallbacks,
  ): WindowsMsixUpdater | null {
    const manifestUrl = this.resolveWindowsUpdateUrl();
    if (!manifestUrl) return null;
    return new WindowsMsixUpdater({
      ...callbacks,
      buildVersion: this.resolveBuildVersion(),
      manifestUrl,
      packageIdentity:
        readPackageMetadataField("codexWindowsPackageIdentity")?.trim() ?? "",
      packagePublisher:
        readPackageMetadataField("codexWindowsPackagePublisher")?.trim() ?? "",
    });
  }
  private async initializeMacSparkle(): Promise<void> {
    if (process.platform !== "darwin") {
      this.lastUnavailableReason = "unsupported platform";
      return;
    }
    if (!this.options.isPackaged) {
      this.lastUnavailableReason = "dev build";
      return;
    }
    const publicFeedUrl = this.resolveMacSparkleFeedUrl();
    if (!publicFeedUrl) return;
    const internalFeedUrl = this.options.useInternalUpdateCdn
      ? this.resolveMacSparkleInternalCdnFeedUrl()
      : null;
    let feedUrl = internalFeedUrl ?? publicFeedUrl;
    let fallbackFeedUrl = internalFeedUrl ? publicFeedUrl : null;
    let requestHeaders = internalFeedUrl
      ? await this.getInternalUpdateCdnRequestHeaders(feedUrl)
      : undefined;
    if (requestHeaders === false) {
      feedUrl = publicFeedUrl;
      fallbackFeedUrl = null;
    }
    let nativeSparkle: NativeSparkleAddon | null = null;
    let loadError: unknown;
    try {
      nativeSparkle = requireFromWorkspaceBoundary(
        path.join(process.resourcesPath, "native", "sparkle.node"),
      ) as NativeSparkleAddon;
    } catch (error) {
      loadError = error;
    }
    if (!nativeSparkle) {
      sparkleLogger().error("Failed to load native Sparkle addon", {
        safe: {},
        sensitive: {
          error: loadError,
        },
      });
      this.lastUnavailableReason = "failed to load native sparkle addon";
      return;
    }
    const hasLifecycleSink =
      typeof nativeSparkle.setUpdateLifecycleStateSink === "function";
    try {
      nativeSparkle.setLogSink?.((level, message) => {
        logScopedMessage(
          sparkleLogger(),
          this.decodeNativeLogLevel(level) ?? "info",
          message,
        );
      });
      nativeSparkle.setInstallUpdatesRequestedSink?.(() => {
        this.options.onInstallUpdatesRequested?.({
          quitImmediately: false,
        });
      });
      nativeSparkle.setDownloadProgressSink?.((percent) => {
        this.setDownloadProgressPercent(percent);
      });
      nativeSparkle.setUpdateReadySink?.((isReady) => {
        this.setUpdateReady(isReady);
      });
      nativeSparkle.setUpdateDownloadedSink?.((isDownloaded) => {
        this.setUpdateDownloaded(isDownloaded);
      });
      nativeSparkle.setUpdateLifecycleStateSink?.((state) => {
        this.setUpdateLifecycleState(state);
      });
      nativeSparkle.setAutomaticBackgroundDownloadsEnabled?.(
        this.automaticBackgroundDownloadsEnabled,
      );
      if (requestHeaders === false || requestHeaders === undefined) {
        nativeSparkle.init(feedUrl);
      } else if (fallbackFeedUrl) {
        nativeSparkle.init(feedUrl, requestHeaders, fallbackFeedUrl);
      } else {
        nativeSparkle.init(feedUrl, requestHeaders);
      }
      this.lastUnavailableReason = null;
    } catch (error) {
      sparkleLogger().error("Failed to initialize Sparkle addon", {
        safe: {},
        sensitive: {
          error,
        },
      });
      this.lastUnavailableReason = "failed to initialize sparkle addon";
      return;
    }
    const checkInBackground = (): void => {
      try {
        if (
          hasLifecycleSink &&
          !this.isUpdateReady &&
          this.updateLifecycleState === "idle"
        ) {
          this.setUpdateLifecycleState("checking");
        }
        nativeSparkle.checkForUpdatesInBackground?.();
      } catch (error) {
        if (!this.isUpdateReady) this.setUpdateLifecycleState("idle");
        sparkleLogger().error("Failed to check for updates in background", {
          safe: {},
          sensitive: {
            error,
          },
        });
      }
    };
    this.setAutomaticBackgroundDownloadsEnabledForMac = (enabled) => {
      nativeSparkle.setAutomaticBackgroundDownloadsEnabled?.(enabled);
      if (enabled) checkInBackground();
    };
    const thisManager = this;
    this.updater = {
      async checkForUpdates() {
        if (
          hasLifecycleSink &&
          !thisManager.isUpdateReady &&
          thisManager.updateLifecycleState === "idle"
        ) {
          thisManager.setUpdateLifecycleState("checking");
        }
        nativeSparkle.checkForUpdates();
      },
      async installUpdatesIfAvailable() {
        if (typeof nativeSparkle.installLatestUpdate === "function") {
          nativeSparkle.installLatestUpdate();
          return;
        }
        if (thisManager.isUpdateReady) {
          thisManager.options.onInstallUpdatesRequested?.();
        }
        nativeSparkle.installUpdatesIfAvailable?.();
      },
    };
    const intervalMs = resolveUpdateCheckIntervalMs();
    if (intervalMs > 0) setInterval(checkInBackground, intervalMs).unref();
    checkInBackground();
  }
  private resolveMacSparkleFeedUrl(): string | null {
    const value = readPackageMetadataField("codexSparkleFeedUrl")?.trim() ?? "";
    if (value) return value;
    this.lastUnavailableReason = "missing packaged sparkle feed url";
    return null;
  }
  private resolveMacSparkleInternalCdnFeedUrl(): string | null {
    const value =
      readPackageMetadataField("codexSparkleInternalCdnFeedUrl")?.trim() ?? "";
    if (!value) return null;
    try {
      if (new URL(value).protocol === "https:") return value;
    } catch {}
    sparkleLogger().warning("Ignoring invalid internal update CDN feed URL");
    return null;
  }
  private async getInternalUpdateCdnRequestHeaders(
    feedUrl: string,
  ): Promise<Record<string, string> | false> {
    if (!this.options.getInternalUpdateCdnRequestHeaders) {
      this.lastUnavailableReason = "sparkle update access is unavailable";
      return false;
    }
    try {
      const headers =
        await this.options.getInternalUpdateCdnRequestHeaders(feedUrl);
      if (headers) return headers;
      this.lastUnavailableReason = "sparkle update access was not authorized";
      return false;
    } catch (error) {
      sparkleLogger().error("Failed to authorize Sparkle update access", {
        safe: {},
        sensitive: {
          error,
        },
      });
      this.lastUnavailableReason = "sparkle update access is unavailable";
      return false;
    }
  }
  private resolveWindowsUpdateUrl(): string | null {
    const value =
      readPackageMetadataField("codexWindowsUpdateUrl")?.trim() ?? "";
    if (!value) {
      this.lastUnavailableReason = "missing packaged windows update url";
      return null;
    }
    try {
      const url = new URL(value);
      if (url.protocol === "https:") return url.toString();
      this.lastUnavailableReason =
        "windows update url must use https transport";
      return null;
    } catch {
      this.lastUnavailableReason = "invalid packaged windows update url";
      return null;
    }
  }
  private resolveBuildVersion(): string {
    return (
      readPackageMetadataField("codexBuildNumber")?.trim() ?? app.getVersion()
    );
  }
  private resolveWindowsStoreBuildVersion(): string {
    const appVersion = app.getVersion().trim();
    const normalizeVersion = sharedRuntime.windowsVersionFromBuildVersion as
      | ((value: string) => string)
      | undefined;
    try {
      return normalizeVersion ? normalizeVersion(appVersion) : appVersion;
    } catch (error) {
      sparkleLogger().warning(
        "Failed to normalize Windows Store build version from app version; using raw app version.",
        {
          safe: {
            appVersion,
          },
          sensitive: {
            error,
          },
        },
      );
      return appVersion;
    }
  }
  private setUpdateReady(isReady: boolean): void {
    if (isReady) {
      this.setUpdateLifecycleState("ready");
    } else if (
      this.updateLifecycleState === "ready" ||
      this.updateLifecycleState === "installing"
    ) {
      this.setUpdateLifecycleState("idle");
    }
    if (this.isUpdateReady === isReady) return;
    this.isUpdateReady = isReady;
    if (isReady && process.platform !== "darwin") {
      this.setUpdateDownloaded(true);
    } else if (!isReady) {
      this.setUpdateDownloaded(false);
    }
    this.scheduleForcedUpdateInstall();
    this.options.onUpdateReadyChanged?.(isReady);
  }
  private setUpdateDownloaded(isDownloaded: boolean): void {
    if (isDownloaded) {
      if (this.updateDownloadedAtMs != null) return;
      this.updateDownloadedAtMs = Date.now();
    } else {
      if (this.updateDownloadedAtMs == null) return;
      this.updateDownloadedAtMs = null;
      this.forcedUpdateInstallStarted = false;
      this.forcedUpdateRetryAtMs = null;
    }
    this.scheduleForcedUpdateInstall();
  }
  private observeRelaunchNotificationPolicy(): void {
    this.owlUpdatePolicies = loadOwlUpdatePolicies();
    this.owlUpdatePolicies?.on("relaunch-notification-policy-changed", () => {
      this.scheduleForcedUpdateInstall();
    });
    if (this.owlUpdatePolicies) this.scheduleForcedUpdateInstall();
  }
  private scheduleForcedUpdateInstall(): void {
    if (this.forcedUpdateTimer) {
      clearTimeout(this.forcedUpdateTimer);
      this.forcedUpdateTimer = null;
    }
    const policy = this.getRelaunchNotificationPolicy();
    if (
      !this.isUpdateReady ||
      this.updateDownloadedAtMs == null ||
      policy?.relaunchNotification !== 2 ||
      this.forcedUpdateInstallStarted
    ) {
      this.setRelaunchNotice(null);
      return;
    }
    const deadlineAtMs = resolveRelaunchDeadline(
      this.updateDownloadedAtMs,
      policy,
    );
    const noticeAtMs =
      this.updateDownloadedAtMs +
      Math.ceil(Math.max(0, deadlineAtMs - this.updateDownloadedAtMs) / 3);
    this.setRelaunchNotice(Date.now() < noticeAtMs ? null : deadlineAtMs);
    this.scheduleForcedUpdateInstallAt(
      Math.max(deadlineAtMs, this.forcedUpdateRetryAtMs ?? deadlineAtMs),
      deadlineAtMs,
      noticeAtMs,
    );
  }
  private scheduleForcedUpdateInstallAt(
    installAtMs: number,
    deadlineAtMs: number,
    noticeAtMs: number,
  ): void {
    const nowMs = Date.now();
    const dayBeforeDeadlineMs = deadlineAtMs - 24 * 60 * 60 * 1000;
    const delayMs = Math.max(
      0,
      (nowMs < noticeAtMs
        ? Math.min(installAtMs, noticeAtMs)
        : nowMs < dayBeforeDeadlineMs
          ? Math.min(installAtMs, dayBeforeDeadlineMs)
          : installAtMs) - nowMs,
    );
    this.forcedUpdateTimer = setTimeout(
      () => {
        this.forcedUpdateTimer = null;
        const currentMs = Date.now();
        if (currentMs < installAtMs) {
          this.setRelaunchNotice(currentMs < noticeAtMs ? null : deadlineAtMs);
          this.scheduleForcedUpdateInstallAt(
            installAtMs,
            deadlineAtMs,
            noticeAtMs,
          );
          return;
        }
        void this.installForcedUpdate();
      },
      Math.min(delayMs, 2147483647),
    );
    this.forcedUpdateTimer.unref();
  }
  private getRelaunchNotificationPolicy(): RelaunchPolicy | null {
    return this.owlUpdatePolicies
      ? parseRelaunchPolicy(
          this.owlUpdatePolicies.getRelaunchNotificationPolicy(),
        )
      : null;
  }
  private async installForcedUpdate(): Promise<void> {
    if (this.forcedUpdateInstallStarted || !this.isUpdateReady) return;
    this.forcedUpdateInstallStarted = true;
    this.setRelaunchNotice(null);
    sparkleLogger().info(
      "Installing update required by managed relaunch policy.",
    );
    if (!(await this.installUpdatesIfAvailable()) && this.isUpdateReady) {
      this.forcedUpdateInstallStarted = false;
      this.forcedUpdateRetryAtMs = Date.now() + 60_000;
      this.scheduleForcedUpdateInstall();
    }
  }
  private setInstallProgressPercent(percent: number | null): void {
    if (percent == null) {
      if (this.updateLifecycleState === "installing") {
        this.setUpdateLifecycleState(this.isUpdateReady ? "ready" : "idle");
      }
    } else {
      this.setUpdateLifecycleState("installing");
    }
    if (this.installProgressPercent === percent) return;
    this.installProgressPercent = percent;
    this.options.onInstallProgressChanged?.(percent);
  }
  private setDownloadProgressPercent(percent: number | null): void {
    if (this.downloadProgressPercent === percent) return;
    this.downloadProgressPercent = percent;
    this.options.onDownloadProgressChanged?.(percent);
  }
  private createRelaunchNotice(deadlineAtMs: number): RelaunchNotice {
    const reportedAtMs = Date.now();
    return {
      deadlineAtMs,
      dismissable: deadlineAtMs - reportedAtMs > 24 * 60 * 60 * 1000,
      reportedAtMs,
    };
  }
  private setRelaunchNotice(deadlineAtMs: number | null): void {
    if (deadlineAtMs == null) {
      if (this.relaunchNotice == null) return;
      this.relaunchNotice = null;
      this.options.onRelaunchNoticeChanged?.(null);
      return;
    }
    const notice = this.createRelaunchNotice(deadlineAtMs);
    if (
      this.relaunchNotice?.deadlineAtMs === notice.deadlineAtMs &&
      this.relaunchNotice.dismissable === notice.dismissable
    ) {
      return;
    }
    this.relaunchNotice = notice;
    this.options.onRelaunchNoticeChanged?.(notice);
  }
  private setUpdateLifecycleState(state: UpdateLifecycleState): void {
    if (this.updateLifecycleState === state) return;
    this.updateLifecycleState = state;
    if (state === "ready" && process.platform !== "darwin") {
      this.setUpdateDownloaded(true);
    } else if (state === "idle" && !this.isUpdateReady) {
      this.setUpdateDownloaded(false);
    }
    this.options.onUpdateLifecycleStateChanged?.(state);
  }
  private decodeNativeLogLevel(value: number): string | null {
    switch (value) {
      case 1:
        return "trace";
      case 2:
        return "debug";
      case 3:
        return "info";
      case 4:
        return "warning";
      case 5:
        return "error";
      default:
        return null;
    }
  }
}
