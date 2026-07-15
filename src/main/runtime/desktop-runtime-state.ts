// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import * as path from "node:path";
import { app } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  readPackageMetadataField,
  type BuildFlavorValue,
} from "../logging/file-based-logger";
import {
  getAppearanceThemeSettingKey,
  getDesktopFirstSeenAtMsKey,
  getRunCodexInWslSettingKey,
} from "../settings/desktop-setting-keys";
import {
  FileBackedGlobalStateStore,
  FileBackedSettingsStoreBoundary,
} from "../settings/desktop-settings-store";
import { DesktopUpdateManagerImpl } from "../updater/desktop-update-manager";
import { applyNativeThemeSource } from "../updater/desktop-update-service";
import {
  DesktopRuntimeState,
  InstallUpdatesRequest,
  KeyValueStore,
  RelaunchNotice,
  SettingsStoreBoundary,
  SparkleBridgeHandlers,
  UpdateLifecycleState,
} from "../workspace/desktop-runtime-types";

export const codexAppSessionId = randomUUID();

const desktopReleaseMetadata = {
  codexAppSessionId,
  buildFlavor: BuildFlavor.resolve(),
  buildNumber:
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    readPackageMetadataField("codexBuildNumber"),
  appVersion: app.getVersion(),
};

let desktopRuntimeState: DesktopRuntimeState | null = null;

export function createDesktopRuntimePaths({
  moduleDir,
}: {
  moduleDir: string;
}): {
  codexHome: string;
  preloadPath: string;
  desktopRoot: string;
  repoRoot: string;
  globalState: KeyValueStore;
  settingsStore: SettingsStoreBoundary;
} {
  (sharedRuntime.openDesktopStateDatabase as (() => void) | undefined)?.();
  const codexHome = (sharedRuntime.resolveCodexHome as () => string)();
  const desktopRoot = path.join(moduleDir, "..", "..");
  const repoRoot = path.join(desktopRoot, "..");
  const globalStatePath = path.join(codexHome, ".codex-global-state.json");
  const globalState = new FileBackedGlobalStateStore(globalStatePath);
  if (!existsSync(globalStatePath) && !existsSync(`${globalStatePath}.bak`)) {
    globalState.set(getDesktopFirstSeenAtMsKey(), Date.now());
  }
  const settingsStore = new FileBackedSettingsStoreBoundary(
    path.join(codexHome, "config.toml"),
    globalState,
  );
  const shouldSpawnInsideWsl =
    process.platform === "win32" &&
    process.env.WSL_DISTRO_NAME == null &&
    settingsStore.getEffective(getRunCodexInWslSettingKey()) === true &&
    (
      sharedRuntime.resolveDefaultWslDistro as
        | (() => unknown | null)
        | undefined
    )?.() != null;
  (
    sharedRuntime.registerShouldSpawnInsideWsl as
      | ((callback: () => boolean) => void)
      | undefined
  )?.(() => shouldSpawnInsideWsl);
  applyNativeThemeSource(
    String(
      settingsStore.getEffective(getAppearanceThemeSettingKey()) ?? "system",
    ),
  );
  return {
    codexHome,
    preloadPath: path.join(moduleDir, "preload.js"),
    desktopRoot,
    repoRoot,
    globalState,
    settingsStore,
  };
}

export function getDesktopRuntimeState(
  buildFlavor: BuildFlavorValue = BuildFlavor.resolve(),
): DesktopRuntimeState {
  if (desktopRuntimeState) return desktopRuntimeState;
  const startedAtMs = Date.now();
  const queuedSecondInstanceArgs: string[][] = [];
  let secondInstanceArgsHandler: ((args: string[]) => void) | null = null;
  let onInstallUpdatesRequested = (_request?: InstallUpdatesRequest): void => {
    if (process.platform === "win32" && app.isPackaged) {
      app.exit(0);
      return;
    }
    app.quit();
  };
  let onUpdateLifecycleStateChanged = (
    _state: UpdateLifecycleState,
  ): void => {};
  let onRelaunchNoticeChanged = (_notice: RelaunchNotice | null): void => {};
  let onUpdateReadyChanged = (_isReady: boolean): void => {};
  let onInstallProgressChanged = (_percent: number | null): void => {};
  let onDownloadProgressChanged = (_percent: number | null): void => {};
  let isTrustedIpcEvent = (_event: Electron.IpcMainInvokeEvent): boolean =>
    false;
  desktopRuntimeState ??= {
    startedAtMs,
    buildFlavor,
    desktopSentry: {
      captureException() {},
    },
    sparkleManager: new DesktopUpdateManagerImpl({
      buildFlavor,
      enableUpdater:
        typeof BuildFlavor.shouldIncludeUpdater === "function"
          ? BuildFlavor.shouldIncludeUpdater(
              buildFlavor,
              process.platform,
              process.env,
            )
          : false,
      getInternalUpdateCdnRequestHeaders: undefined,
      isPackaged: app.isPackaged,
      isTrustedIpcEvent: (event) => isTrustedIpcEvent(event),
      onDownloadProgressChanged: (percent) => {
        onDownloadProgressChanged(percent);
      },
      onInstallProgressChanged: (percent) => {
        onInstallProgressChanged(percent);
      },
      onInstallUpdatesRequested: (request) => {
        onInstallUpdatesRequested(request);
      },
      onRelaunchNoticeChanged: (notice) => {
        onRelaunchNoticeChanged(notice);
      },
      onUpdateLifecycleStateChanged: (state) => {
        onUpdateLifecycleStateChanged(state);
      },
      onUpdateReadyChanged: (isReady) => {
        onUpdateReadyChanged(isReady);
      },
      useInternalUpdateCdn: false,
    }),
    queueSecondInstanceArgs(args: string[]): void {
      if (secondInstanceArgsHandler) {
        secondInstanceArgsHandler(args);
      } else {
        queuedSecondInstanceArgs.push(args);
      }
    },
    setSecondInstanceArgsHandler(handler: (args: string[]) => void): void {
      secondInstanceArgsHandler = handler;
      for (const args of queuedSecondInstanceArgs) handler(args);
      queuedSecondInstanceArgs.length = 0;
    },
    setSparkleBridgeHandlers(handlers: SparkleBridgeHandlers): void {
      if (handlers.onInstallUpdatesRequested) {
        onInstallUpdatesRequested = handlers.onInstallUpdatesRequested;
      }
      if (handlers.onUpdateLifecycleStateChanged) {
        onUpdateLifecycleStateChanged = handlers.onUpdateLifecycleStateChanged;
      }
      if (handlers.onRelaunchNoticeChanged) {
        onRelaunchNoticeChanged = handlers.onRelaunchNoticeChanged;
      }
      if (handlers.onUpdateReadyChanged) {
        onUpdateReadyChanged = handlers.onUpdateReadyChanged;
      }
      if (handlers.onInstallProgressChanged) {
        onInstallProgressChanged = handlers.onInstallProgressChanged;
      }
      if (handlers.onDownloadProgressChanged) {
        onDownloadProgressChanged = handlers.onDownloadProgressChanged;
      }
      if (handlers.isTrustedIpcEvent) {
        isTrustedIpcEvent = handlers.isTrustedIpcEvent;
      }
    },
  };
  return desktopRuntimeState;
}
