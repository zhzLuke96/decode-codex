// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import {
  InstallUpdatesRequest,
  UpdateLifecycleState,
  WindowsNativeUpdaterAddon,
} from "../workspace/desktop-runtime-types";

export type WindowsUpdaterCallbacks = {
  checkIntervalMs: number;
  nativeAddon: WindowsNativeUpdaterAddon;
  onInstallProgressChanged?(percent: number | null): void;
  onInstallUpdatesRequested?(request?: InstallUpdatesRequest): void;
  onUpdateLifecycleStateChanged?(state: UpdateLifecycleState): void;
  onUpdateReadyChanged?(isReady: boolean): void;
};

export type WindowsMsixUpdateManifest = {
  buildVersion: string;
  length: number;
  packageIdentity: string;
  packagePublisher: string;
  packageUrl: string;
  sha256: string;
};

export type WindowsMsixPreparedUpdate = {
  buildVersion: string;
  length: number;
  packagePath: string;
  sha256: string;
};

export type WindowsMsixUpdaterOptions = WindowsUpdaterCallbacks & {
  buildVersion: string;
  manifestUrl: string;
  packageIdentity: string;
  packagePublisher: string;
};

export type WindowsStoreUpdaterOptions = WindowsUpdaterCallbacks & {
  buildVersion: string;
  packageIdentity: string;
  storeProductId: string;
  storeUpdateManifestUrl: string;
};

export type NativeSparkleAddon = {
  init(
    feedUrl: string,
    requestHeaders?: Record<string, string>,
    fallbackFeedUrl?: string,
  ): void;
  checkForUpdates(): void;
  checkForUpdatesInBackground?(): void;
  installLatestUpdate?(): void;
  installUpdatesIfAvailable?(): void;
  setAutomaticBackgroundDownloadsEnabled?(enabled: boolean): void;
  setDownloadProgressSink?(sink: (percent: number | null) => void): void;
  setInstallUpdatesRequestedSink?(sink: () => void): void;
  setLogSink?(sink: (level: number, message: string) => void): void;
  setUpdateDownloadedSink?(sink: (isDownloaded: boolean) => void): void;
  setUpdateLifecycleStateSink?(
    sink: (state: UpdateLifecycleState) => void,
  ): void;
  setUpdateReadySink?(sink: (isReady: boolean) => void): void;
};

export type OwlUpdatePolicies = {
  getRelaunchNotificationPolicy(): unknown;
  on(eventName: string, listener: () => void): void;
};

export type RelaunchWindowEntry = {
  duration_mins: number | null;
  start: {
    hour: number | null;
    minute: number | null;
  };
};

export type RelaunchPolicy = {
  relaunchFastIfOutdatedDays: number | null;
  relaunchNotification: number | null;
  relaunchNotificationPeriodMs: number | null;
  relaunchWindow?: {
    entries?: RelaunchWindowEntry[];
  } | null;
};
