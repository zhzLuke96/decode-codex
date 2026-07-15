// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";

export function getDesktopFirstSeenAtMsKey(): string {
  const desktopStateKeys = sharedRuntime.desktopGlobalStateKeys as
    | {
        DESKTOP_FIRST_SEEN_AT_MS?: string;
      }
    | undefined;
  return (
    desktopStateKeys?.DESKTOP_FIRST_SEEN_AT_MS ?? "desktop-first-seen-at-ms"
  );
}

export function getWorkspaceRootOptionsKey(): string {
  const desktopStateKeys = sharedRuntime.desktopGlobalStateKeys as
    | {
        WORKSPACE_ROOT_OPTIONS?: string;
      }
    | undefined;
  return (
    desktopStateKeys?.WORKSPACE_ROOT_OPTIONS ?? "electron-saved-workspace-roots"
  );
}

export function getAppearanceThemeSettingKey(): string {
  const appearanceSettings = sharedRuntime.appearanceSettingDefinitions as
    | {
        theme?: {
          key?: string;
        };
      }
    | undefined;
  return appearanceSettings?.theme?.key ?? "appearanceTheme";
}

export function getRunCodexInWslSettingKey(): string {
  const composerSettings = sharedRuntime.desktopPreferenceSettingDefinitions as
    | {
        runCodexInWsl?: {
          key?: string;
        };
      }
    | undefined;
  return (
    composerSettings?.runCodexInWsl?.key ?? "runCodexInWindowsSubsystemForLinux"
  );
}

export function getFollowUpQueueModeSettingKey(): string {
  const composerSettings = sharedRuntime.desktopPreferenceSettingDefinitions as
    | {
        followUpQueueMode?: {
          key?: string;
        };
      }
    | undefined;
  return composerSettings?.followUpQueueMode?.key ?? "followUpQueueMode";
}

export function getComposerEnterBehaviorSettingKey(): string {
  const composerSettings = sharedRuntime.desktopPreferenceSettingDefinitions as
    | {
        composerEnterBehavior?: {
          key?: string;
        };
      }
    | undefined;
  return (
    composerSettings?.composerEnterBehavior?.key ?? "composerEnterBehavior"
  );
}

export function getKeepRemoteControlAwakeSettingKey(): string {
  const composerSettings = sharedRuntime.desktopPreferenceSettingDefinitions as
    | {
        keepRemoteControlAwakeWhilePluggedIn?: {
          key?: string;
        };
      }
    | undefined;
  return (
    composerSettings?.keepRemoteControlAwakeWhilePluggedIn?.key ??
    "keepRemoteControlAwakeWhilePluggedIn"
  );
}

export function getPreventSleepWhileRunningSettingKey(): string {
  const composerSettings = sharedRuntime.desktopPreferenceSettingDefinitions as
    | {
        preventSleepWhileRunning?: {
          key?: string;
        };
      }
    | undefined;
  return (
    composerSettings?.preventSleepWhileRunning?.key ??
    "preventSleepWhileRunning"
  );
}

export function getDefaultServiceTierSettingKey(): string {
  const serviceTierSettings = sharedRuntime.persistedAtomSettingDefinitions as
    | {
        defaultServiceTier?: {
          key?: string;
        };
      }
    | undefined;
  return serviceTierSettings?.defaultServiceTier?.key ?? "default-service-tier";
}
