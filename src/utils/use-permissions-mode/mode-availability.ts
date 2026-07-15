// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import { readStatsigGateValue } from "../../vendor/statsig-current-runtime";
import {
  getAllowedAgentModes,
  getAllowedBaseAgentModes,
  getConfigApprovalsReviewer,
  getFirstNonCustomAgentMode,
  isAgentModeAllowedByRequirements,
  isGuardianApprovalFeatureEnabled,
  isGuardianApprovalsReviewer,
  resolveConfigDefaultAgentMode,
} from "../../boundaries/src-l0hb-mz-p";
import {
  CONFIG_DRIVEN_PERMISSION_MODE_UI_GATE,
  CONFIG_DRIVEN_PERMISSION_STATE_GATE,
  DANGER_FULL_ACCESS_PERMISSION_PROFILE_ID,
  READ_ONLY_PERMISSION_PROFILE_ID,
  WORKSPACE_PERMISSION_PROFILE_ID,
} from "./constants";
import type {
  AgentMode,
  AvailablePermissionModeState,
  ConfigRequirements,
  PermissionConfigData,
  ThreadDetailLevel,
} from "./types";

function getFirstAvailableNonCustomMode(agentModes: AgentMode[]): AgentMode {
  const firstMode = getFirstNonCustomAgentMode(agentModes);
  return firstMode === "custom" ? "read-only" : firstMode;
}

export function getAvailablePermissionModeState({
  isConfigDataPending,
  requirements,
  resolvedConfig,
  isGuardianApprovalEnabledByStatsig,
  hasAuthoritativeGuardianApprovalDefault = false,
  defaultWorkspaceWriteMode = "auto",
}: PermissionConfigData & {
  hasAuthoritativeGuardianApprovalDefault?: boolean;
  defaultWorkspaceWriteMode?: AgentMode;
}): AvailablePermissionModeState {
  const allowedAgentModes = isConfigDataPending
    ? ([
        "read-only",
        "auto",
        "granular",
        "full-access",
        "custom",
      ] as AgentMode[])
    : (getAllowedAgentModes(requirements, resolvedConfig) as AgentMode[]);
  const isGuardianFeatureEnabled =
    isGuardianApprovalFeatureEnabled(resolvedConfig ?? undefined) ?? true;
  const modesWithoutGuardian = allowedAgentModes.filter(
    (agentMode) => agentMode !== "guardian-approvals",
  );
  const isGuardianTheOnlyMode =
    allowedAgentModes.includes("guardian-approvals") &&
    modesWithoutGuardian.length === 0;
  const canShowGuardianOption =
    isGuardianApprovalEnabledByStatsig ||
    hasAuthoritativeGuardianApprovalDefault;
  const availableAgentModes =
    (canShowGuardianOption && isGuardianFeatureEnabled) || isGuardianTheOnlyMode
      ? allowedAgentModes
      : modesWithoutGuardian;
  const isGuardianModeAvailable =
    availableAgentModes.includes("guardian-approvals");
  const modesWithoutCustom = availableAgentModes.filter(
    (agentMode) => agentMode !== "custom",
  );
  const configuredDefaultMode = resolveConfigDefaultAgentMode(
    resolvedConfig ?? undefined,
    defaultWorkspaceWriteMode,
  ) as AgentMode | null;
  const configNonFullAccessFallback =
    configuredDefaultMode === "full-access" ? null : configuredDefaultMode;
  const shouldUseGuardianAsCustomEquivalent =
    isGuardianModeAvailable &&
    configuredDefaultMode === "auto" &&
    isGuardianApprovalsReviewer(
      getConfigApprovalsReviewer(resolvedConfig ?? undefined),
    );
  let configNonFullAccessMode =
    getFirstAvailableNonCustomMode(modesWithoutCustom);
  if (shouldUseGuardianAsCustomEquivalent) {
    configNonFullAccessMode = "guardian-approvals";
  } else if (
    configNonFullAccessFallback != null &&
    modesWithoutCustom.includes(configNonFullAccessFallback)
  ) {
    configNonFullAccessMode = configNonFullAccessFallback;
  }
  return {
    availableAgentModes,
    canShowCustom: availableAgentModes.includes("custom"),
    canUnlock: availableAgentModes.includes("full-access"),
    customEquivalentMode: shouldUseGuardianAsCustomEquivalent
      ? "guardian-approvals"
      : configuredDefaultMode,
    isGuardianModeAvailable,
    isConfigDataPending,
    configNonFullAccessMode,
    showGuardianOption: canShowGuardianOption,
  };
}

export function permissionProfileIdToAgentMode(
  permissionProfileId: string | null | undefined,
  defaultWorkspaceWriteMode: AgentMode,
): AgentMode | null {
  switch (permissionProfileId) {
    case READ_ONLY_PERMISSION_PROFILE_ID:
      return "read-only";
    case WORKSPACE_PERMISSION_PROFILE_ID:
      return defaultWorkspaceWriteMode;
    case DANGER_FULL_ACCESS_PERMISSION_PROFILE_ID:
      return "full-access";
    case null:
    case undefined:
    default:
      return null;
  }
}

export function getDetailLevelDefaultAgentMode(
  detailLevel: ThreadDetailLevel,
  { requirements, resolvedConfig }: PermissionConfigData,
): AgentMode {
  switch (detailLevel) {
    case "STEPS_PROSE":
      return isAgentModeAllowedByRequirements("granular", requirements) &&
        resolveConfigDefaultAgentMode(
          resolvedConfig ?? undefined,
          "granular",
        ) === "granular"
        ? "granular"
        : "auto";
    case "STEPS_COMMANDS":
    case "STEPS_EXECUTION":
    default:
      return "auto";
  }
}

export function canUseWorkspaceWriteOnRequest(
  requirements: ConfigRequirements,
) {
  if (requirements == null) {
    return true;
  }
  const allowsWorkspaceProfile =
    (requirements.allowedPermissionProfiles == null ||
      requirements.allowedPermissionProfiles[
        WORKSPACE_PERMISSION_PROFILE_ID
      ] === true) &&
    (requirements.allowedSandboxModes == null ||
      requirements.allowedSandboxModes.includes("workspace-write"));
  const allowsOnRequestApproval =
    requirements.allowedApprovalPolicies == null ||
    requirements.allowedApprovalPolicies.includes("on-request");
  const allowsUserReviewer =
    requirements.allowedApprovalsReviewers == null ||
    requirements.allowedApprovalsReviewers.includes("user") ||
    requirements.allowedApprovalsReviewers.includes("auto_review");
  return (
    allowsWorkspaceProfile && allowsOnRequestApproval && allowsUserReviewer
  );
}

export function getConfigAwareDefaultAgentMode(
  detailLevel: ThreadDetailLevel,
  configData: PermissionConfigData,
) {
  const detailDefaultMode = getDetailLevelDefaultAgentMode(
    detailLevel,
    configData,
  );
  if (canUseWorkspaceWriteOnRequest(configData.requirements)) {
    return detailDefaultMode;
  }
  const allowedBaseModes = getAllowedBaseAgentModes(
    configData.requirements,
  ) as AgentMode[];
  return (
    allowedBaseModes.find((agentMode) => agentMode !== "full-access") ??
    (allowedBaseModes.includes("full-access")
      ? "full-access"
      : detailDefaultMode)
  );
}

export function resolveDefaultAgentModeForHost(
  hostId: string,
  agentModeByHostId: Record<string, AgentMode | null | undefined>,
  fallbackMode: AgentMode,
) {
  const savedMode = agentModeByHostId[hostId];
  return savedMode === "auto" || savedMode === "granular"
    ? fallbackMode
    : (savedMode ?? fallbackMode);
}

export function isConfigDrivenPermissionStateEnabled() {
  return readStatsigGateValue(CONFIG_DRIVEN_PERMISSION_STATE_GATE);
}

export function isConfigDrivenPermissionModeUiEnabled() {
  return readStatsigGateValue(CONFIG_DRIVEN_PERMISSION_MODE_UI_GATE);
}
