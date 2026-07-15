// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import type {
  AgentMode,
  NonFullAccessModeState,
  PermissionProfileId,
} from "./types";

export function canAgentModeUseOverrides(
  agentMode: AgentMode | null,
  availableAgentModes: AgentMode[],
  permissionProfileId: PermissionProfileId = null,
): boolean {
  return (agentMode === "custom" && permissionProfileId != null) ||
    agentMode == null ||
    !availableAgentModes.includes(agentMode)
    ? false
    : agentMode === "guardian-approvals" ||
        agentMode === "full-access" ||
        agentMode === "custom";
}

export function shouldWaitForPermissionModeSelection(
  hasSelection: boolean,
  threadStatus: string,
): boolean {
  return (
    !hasSelection && threadStatus !== "not-thread" && threadStatus !== "empty"
  );
}

export function getDefaultWorkspaceWriteMode({
  defaultWorkspaceWriteMode,
  isWindowsSandboxRequired,
}: {
  defaultWorkspaceWriteMode: AgentMode;
  isWindowsSandboxRequired: boolean;
}): AgentMode {
  return isWindowsSandboxRequired ? "read-only" : defaultWorkspaceWriteMode;
}

export function selectFallbackAgentMode(
  availableAgentModes: AgentMode[],
  preferredDefaultMode: AgentMode | null | undefined,
  fallbackMode: AgentMode,
  explicitMode: AgentMode | null = null,
  priorityMode: AgentMode | null = null,
): AgentMode {
  return priorityMode != null && availableAgentModes.includes(priorityMode)
    ? priorityMode
    : explicitMode != null && availableAgentModes.includes(explicitMode)
      ? explicitMode
      : availableAgentModes.includes("custom")
        ? "custom"
        : !hasNonPrivilegedAgentMode(availableAgentModes) &&
            availableAgentModes.includes("full-access")
          ? "full-access"
          : preferredDefaultMode != null &&
              availableAgentModes.includes(preferredDefaultMode)
            ? preferredDefaultMode
            : fallbackMode;
}

export function resolveNextFallbackAgentMode(
  currentAgentMode: AgentMode | null,
  explicitAgentMode: AgentMode | null | undefined,
  fallbackMode: AgentMode,
  availableAgentModes: AgentMode[],
  permissionProfileId: PermissionProfileId = null,
  preferredNonFullAccessMode: AgentMode,
  shouldPreferNonFullAccessMode: boolean,
  priorityMode: AgentMode | null = null,
): AgentMode | null {
  return priorityMode != null && availableAgentModes.includes(priorityMode)
    ? currentAgentMode === priorityMode
      ? null
      : priorityMode
    : explicitAgentMode == null
      ? canAgentModeUseOverrides(
          currentAgentMode,
          availableAgentModes,
          permissionProfileId,
        )
        ? null
        : shouldPreferNonFullAccessMode &&
            availableAgentModes.includes(preferredNonFullAccessMode) &&
            currentAgentMode !== "guardian-approvals" &&
            currentAgentMode !== "full-access" &&
            currentAgentMode !== "custom"
          ? currentAgentMode === preferredNonFullAccessMode
            ? null
            : preferredNonFullAccessMode
          : !hasNonPrivilegedAgentMode(availableAgentModes) &&
              availableAgentModes.includes("full-access")
            ? currentAgentMode === "full-access"
              ? null
              : "full-access"
            : permissionProfileId == null &&
                availableAgentModes.includes("custom")
              ? currentAgentMode === "custom"
                ? null
                : "custom"
              : currentAgentMode === fallbackMode
                ? null
                : fallbackMode
      : currentAgentMode === explicitAgentMode
        ? null
        : explicitAgentMode;
}

function hasNonPrivilegedAgentMode(agentModes: AgentMode[]) {
  return agentModes.some(
    (agentMode) => agentMode !== "full-access" && agentMode !== "custom",
  );
}

export function initPermissionModeSelectionChunk(): void {
  void canAgentModeUseOverrides;
  void shouldWaitForPermissionModeSelection;
  void getDefaultWorkspaceWriteMode;
  void selectFallbackAgentMode;
  void resolveNextFallbackAgentMode;
  void resolveNonFullAccessAgentMode;
}

function getValidPreferredNonFullAccessMode(
  preferredMode: AgentMode | null | undefined,
  availableAgentModes: AgentMode[],
  isGuardianModeAvailable: boolean,
  configNonFullAccessMode: AgentMode,
): AgentMode | null {
  return preferredMode == null ||
    (configNonFullAccessMode === "granular" && preferredMode === "auto") ||
    (configNonFullAccessMode === "auto" && preferredMode === "granular") ||
    !availableAgentModes.includes(preferredMode) ||
    (preferredMode === "guardian-approvals" && !isGuardianModeAvailable)
    ? null
    : preferredMode;
}

export function resolveNonFullAccessAgentMode({
  availableAgentModes,
  preferredNonFullAccessMode,
  isGuardianModeAvailable,
  isConfigDataPending,
  configNonFullAccessMode,
}: {
  availableAgentModes: AgentMode[];
  preferredNonFullAccessMode?: AgentMode | null;
  isGuardianModeAvailable: boolean;
  isConfigDataPending: boolean;
  configNonFullAccessMode: AgentMode;
}): NonFullAccessModeState {
  const validPreferredMode = getValidPreferredNonFullAccessMode(
    preferredNonFullAccessMode,
    availableAgentModes,
    isGuardianModeAvailable,
    configNonFullAccessMode,
  );
  return {
    canSelectGuardianMode: isGuardianModeAvailable,
    resolvedNonFullAccessMode: validPreferredMode ?? configNonFullAccessMode,
    validPreferredNonFullAccessMode: validPreferredMode,
    shouldClearPreferredNonFullAccessMode:
      !isConfigDataPending &&
      ((preferredNonFullAccessMode != null && validPreferredMode == null) ||
        (!availableAgentModes.includes("custom") &&
          validPreferredMode != null &&
          validPreferredMode === configNonFullAccessMode)),
  };
}
