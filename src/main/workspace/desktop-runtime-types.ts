// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { app } from "electron";
import { type BuildFlavorValue } from "../logging/file-based-logger";
import { isOwlFeatureEnabled } from "../owl/owl-feature-flags";

export type KeyValueStore = {
  get(key: string): unknown;
  getStored?(key: string): unknown;
  set(key: string, value: unknown): void | Promise<void>;
  update?(
    key: string,
    updater: (value: unknown | null) => unknown | undefined,
  ): void | Promise<void>;
  delete?(key: string): void | Promise<void>;
  flush?(): Promise<void>;
  getStateFilePath?(): string;
};

type DesktopSettingHostStorage =
  | {
      kind: "configuration";
      key: string;
    }
  | {
      kind: "global-state";
      key: string;
    }
  | {
      kind: "persisted-atom";
      key: string;
    };

export type DesktopSettingDefinition = {
  key: string;
  default?: unknown;
  hostStorage: DesktopSettingHostStorage;
  schema?: unknown;
};

export type SettingsConfigClient = {
  readConfig(): Promise<unknown> | unknown;
  batchWriteConfigValues(request: {
    edits: Array<{
      keyPath: string;
      mergeStrategy: "replace";
      value: unknown;
    }>;
  }): Promise<void> | void;
};

export type SettingsStoreBoundary = {
  getStateFilePath(): string;
  getDesktopConfig(): Record<string, unknown>;
  get(key: string): unknown;
  getEffective(key: string): unknown;
  set(key: string, value: unknown): void;
  flush(): Promise<void>;
  initialize(client: SettingsConfigClient): Promise<void>;
};

export type UpdateLifecycleState =
  | "idle"
  | "checking"
  | "downloading"
  | "ready"
  | "installing";

export type RelaunchNotice = {
  deadlineAtMs: number;
  dismissable: boolean;
  reportedAtMs: number;
};

export type InstallUpdatesRequest =
  | {
      quitImmediately?: boolean;
    }
  | undefined;

export type SparkleBridgeHandlers = {
  onDownloadProgressChanged?: (percent: number | null) => void;
  onInstallProgressChanged?: (percent: number | null) => void;
  onInstallUpdatesRequested?: (request?: InstallUpdatesRequest) => void;
  onRelaunchNoticeChanged?: (notice: RelaunchNotice | null) => void;
  onUpdateLifecycleStateChanged?: (state: UpdateLifecycleState) => void;
  onUpdateReadyChanged?: (isReady: boolean) => void;
  isTrustedIpcEvent?: (event: Electron.IpcMainInvokeEvent) => boolean;
};

export type DesktopUpdater = {
  initialize?(): Promise<void>;
  hasUpdater?(): boolean;
  getUnavailableReason?(): string | null;
  getIsUpdateReady?(): boolean;
  checkForUpdates(): Promise<void>;
  installUpdatesIfAvailable(): Promise<void>;
};

export type DesktopUpdateManager = {
  initialize(): Promise<void>;
  hasUpdater(): boolean;
  getUnavailableReason(): string | null;
  getIsUpdateReady(): boolean;
  getInstallProgressPercent(): number | null;
  getDownloadProgressPercent(): number | null;
  getUpdateLifecycleState(): UpdateLifecycleState;
  getRelaunchNotice(): RelaunchNotice | null;
  showRelaunchNoticeForDebug(): void;
  checkForUpdates(): Promise<void>;
  installUpdatesIfAvailable(): Promise<boolean>;
  setAutomaticBackgroundDownloadsEnabled(enabled: boolean): void;
};

export type DesktopUpdateManagerOptions = {
  buildFlavor: BuildFlavorValue;
  enableUpdater: boolean;
  getInternalUpdateCdnRequestHeaders?: (
    feedUrl: string,
  ) => Promise<Record<string, string> | false> | Record<string, string> | false;
  isPackaged: boolean;
  isTrustedIpcEvent(event: Electron.IpcMainInvokeEvent): boolean;
  onDownloadProgressChanged?(percent: number | null): void;
  onInstallProgressChanged?(percent: number | null): void;
  onInstallUpdatesRequested?(request?: InstallUpdatesRequest): void;
  onRelaunchNoticeChanged?(notice: RelaunchNotice | null): void;
  onUpdateLifecycleStateChanged?(state: UpdateLifecycleState): void;
  onUpdateReadyChanged?(isReady: boolean): void;
  useInternalUpdateCdn: boolean;
};

export type WindowsNativeUpdaterAddon = {
  activateStagedPackage(
    packagePath: string,
    onProgress: (percent: number) => void,
  ): Promise<void> | void;
  getCurrentPackageFamily(): string;
  stagePackage(packagePath: string): Promise<void> | void;
  trySilentDownloadAndInstallStoreUpdates?(
    onProgress: (percent: number, state: string) => void,
  ): Promise<WindowsStoreUpdateResult>;
  trySilentDownloadStoreUpdates?(): Promise<WindowsStoreUpdateResult>;
};

type WindowsStoreUpdateResult = {
  canSilentlyDownload: boolean;
  completed: boolean;
  hasUpdate: boolean;
  overallState: string;
};

export type NativeIntl = {
  formatMessage(message: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string;
};

export type NativeIntlLoader = {
  load(repoRoot: string): Promise<NativeIntl>;
  createDefault(): NativeIntl;
};

export type DesktopRuntimeState = {
  startedAtMs: number;
  buildFlavor: BuildFlavorValue;
  desktopSentry: {
    captureException(error: unknown, context?: unknown): void;
  };
  sparkleManager: DesktopUpdateManager;
  queueSecondInstanceArgs(args: string[]): void;
  setSecondInstanceArgsHandler?(handler: (args: string[]) => void): void;
  setSparkleBridgeHandlers?(handlers: SparkleBridgeHandlers): void;
};

export type WorkspaceRootState = {
  activeRoots: string[];
  roots: string[];
  labels: Record<string, string>;
};

export type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

export type DesktopStructuredLogger = {
  log(
    level: string,
    message: string,
    safeDetails?: Record<string, unknown>,
  ): void;
};

export type StateDatabaseRecoveryOptions = {
  databasePath: string | ((error: unknown) => string | null);
  onBackfillWait?: () => void | Promise<void>;
  open(): void | Promise<void>;
  shouldHandleError?: (error: unknown) => boolean;
};

export type BrowserWindowLike = {
  isDestroyed(): boolean;
};

export type DeepLinkRoute =
  | {
      kind: "applyCodexAppConfig";
    }
  | {
      kind: "automations";
    }
  | {
      kind: "connectorOAuthCallback";
      fullRedirectUrl: string;
      returnTo: string | null;
    }
  | {
      kind: "launch";
    }
  | {
      kind: "localConversation";
      [key: string]: unknown;
    }
  | {
      kind: "localPluginDetail";
      hostId: string | null;
      marketplacePath: string;
      pluginName: string;
      openShareDialog: boolean;
    }
  | {
      kind: "newThread";
      originUrl?: string | null;
      path?: string | null;
      prompt?: string;
    }
  | {
      kind: "petInstall";
      description: string | null;
      imageUrl: string;
      name: string;
    }
  | {
      kind: "pluginDetail";
      hostId: string | null;
      pluginId: unknown;
      source: unknown;
    }
  | {
      kind: "pluginInstall";
      marketplaceName: string | undefined;
      pluginName: string;
    }
  | {
      kind: "settings";
      section?: string;
      search?: string;
    }
  | {
      kind: "skills";
    };

export type DeepLinkCoordinatorOptions = {
  app: typeof app;
  isMacOS: boolean;
  ensurePrimaryWindowVisible(): Promise<unknown>;
  navigateToRoute(window: unknown, route: DeepLinkRoute): Promise<void>;
  initialArgv: string[];
  errorReporter: {
    reportNonFatal(error: Error, context: Record<string, unknown>): void;
  };
};

export type DeepLinkCoordinator = {
  registerProtocolClient(): void;
  queueProcessArgs(args: string[]): boolean;
  flushPendingDeepLinks(): Promise<void>;
  queueCodexDeepLinkUrl(url: string, hostId?: string | null): boolean;
};

export type RecoveryErrorPair = {
  originalError: unknown;
  recoveryError: unknown;
};

export type OwlFeatureNameState = {
  enabledFeatureNames: string[];
  disabledFeatureNames: string[];
};

export type OwlFeatureSettingsState = {
  activeFeatureNames: string[];
  activeDisabledFeatureNames: string[];
  pendingFeatureNames: string[];
  pendingDisabledFeatureNames: string[];
  restartRequired: boolean;
};

export type OwlFeatureNativeBinding = {
  isOwlFeatureEnabled(name: string): boolean;
};

export type ProcessWithLinkedBinding = NodeJS.Process & {
  _linkedBinding?: (name: string) => unknown;
};
