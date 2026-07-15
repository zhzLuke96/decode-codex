// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d4gukj65-CzTWbFLy.js
// Composer permission-mode option visibility helpers.
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
} from "../../runtime/app-host-services-runtime";
import type { AgentMode } from "./types";

export type PermissionModeVisibility = Readonly<
  Partial<Record<AgentMode, boolean>>
>;

export type PermissionModeVisibilityUpdate = {
  mode: AgentMode;
  settings?: PermissionModeVisibility | null;
  visible: boolean;
};

export type PermissionModeVisibilityOptionInput = {
  canSelectGuardianMode: boolean;
  canShowConfigCustom: boolean;
  canShowConfigFullAccess: boolean;
  canShowDefaultPermissions: boolean;
  canShowGuardianOption: boolean;
  selectionAgentModes: readonly AgentMode[];
  visibleAgentModes: readonly AgentMode[];
};

export type PermissionModeVisibilityOptionState = {
  canShowCustom: boolean;
  canShowFullAccess: boolean;
  optionCount: number;
  showGuardianOption: boolean;
};

export const DEFAULT_PERMISSION_MODE_VISIBILITY: PermissionModeVisibility = {
  "guardian-approvals": true,
  "full-access": true,
};

export const composerPermissionModeVisibilitySignal =
  createPersistentSignal<PermissionModeVisibility>(
    "composer-permission-mode-visibility",
    DEFAULT_PERMISSION_MODE_VISIBILITY,
  );

export function initComposerPermissionModeVisibilityChunk(): void {
  initPersistentSignalRuntime();
}

export function resolvePermissionModeVisibility(
  settings?: PermissionModeVisibility | null,
): PermissionModeVisibility {
  return settings ?? DEFAULT_PERMISSION_MODE_VISIBILITY;
}

export function setPermissionModeVisibility({
  mode,
  settings,
  visible,
}: PermissionModeVisibilityUpdate): PermissionModeVisibility {
  return {
    ...resolvePermissionModeVisibility(settings),
    [mode]: visible,
  };
}

export function getPermissionModeVisibilityOptionState({
  canSelectGuardianMode,
  canShowConfigCustom,
  canShowConfigFullAccess,
  canShowDefaultPermissions,
  canShowGuardianOption,
  selectionAgentModes,
  visibleAgentModes,
}: PermissionModeVisibilityOptionInput): PermissionModeVisibilityOptionState {
  const canShowFullAccess =
    canShowConfigFullAccess && visibleAgentModes.includes("full-access");
  const canShowCustom =
    canShowConfigCustom && selectionAgentModes.includes("custom");

  return {
    canShowCustom,
    canShowFullAccess,
    optionCount:
      (canShowDefaultPermissions ? 1 : 0) +
      (canShowGuardianOption && canSelectGuardianMode ? 1 : 0) +
      (canShowFullAccess ? 1 : 0) +
      (canShowCustom ? 1 : 0),
    showGuardianOption: canShowGuardianOption,
  };
}

export function filterVisiblePermissionModes({
  availableAgentModes,
  visibility,
}: {
  availableAgentModes: readonly AgentMode[];
  visibility: PermissionModeVisibility;
}): AgentMode[] {
  return availableAgentModes.filter((agentMode) => {
    switch (agentMode) {
      case "guardian-approvals":
        return Boolean(visibility["guardian-approvals"]);
      case "full-access":
        return Boolean(visibility["full-access"]);
      case "custom":
        return false;
      case "auto":
      case "granular":
      case "read-only":
        return true;
    }
  });
}

export function appendCustomPermissionMode({
  availableAgentModes,
  visibleAgentModes,
}: {
  availableAgentModes: readonly AgentMode[];
  visibleAgentModes: readonly AgentMode[];
}): AgentMode[] {
  return availableAgentModes.includes("custom")
    ? [...visibleAgentModes, "custom"]
    : [...visibleAgentModes];
}
