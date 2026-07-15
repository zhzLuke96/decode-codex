// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import { useStatsigLoading } from "../../vendor/statsig-current-runtime";
import {
  appScopeA as useAppScopeFamilyValue,
  appScopeS as useAppScopeValue,
} from "../../boundaries/app-scope";
import { useHostConfigO as useHostConfigValue } from "../../boundaries/use-host-config.facade";
import {
  A as conversationCwdSignal,
  n as threadWorkspaceContextSignal,
} from "../../boundaries/thread-context-inputs.facade";
import {
  isAgentModeAllowedByRequirements,
  isGuardianApprovalFeatureEnabled,
} from "../../boundaries/src-l0hb-mz-p";
import {
  configRequirementsQueryOptions,
  useEffectiveConfigQuery,
} from "../../config/config-queries";
import type {
  ConfigRequirements,
  HostId,
  PermissionConfigData,
  QueryResult,
  ResolvedConfig,
  StatsigDefaultEnableFeatures,
  WorkspaceContext,
} from "./types";
export function usePermissionsConfigData({
  conversationId,
  hostId,
  cwdOverride,
}: {
  conversationId?: string | null;
  cwdOverride?: string | null;
  hostId: HostId;
}): PermissionConfigData {
  const conversationCwd = useAppScopeFamilyValue(
    conversationCwdSignal,
    conversationId,
  ) as string | null | undefined;
  const { data: workspaceContext } = useAppScopeValue(
    threadWorkspaceContextSignal,
  ) as QueryResult<WorkspaceContext>;
  const hasExplicitCwdOverride = cwdOverride !== undefined;
  const cwd = hasExplicitCwdOverride
    ? (cwdOverride ?? null)
    : (conversationCwd ?? workspaceContext?.roots?.[0] ?? null);
  const isCwdRequiredButMissing = hasExplicitCwdOverride && cwd == null;
  const [defaultEnableFeatures] = useHostConfigValue(
    "statsig_default_enable_features",
  ) as [StatsigDefaultEnableFeatures | undefined];
  const isStatsigLoading = useStatsigLoading();
  const cwdMode = hasExplicitCwdOverride
    ? "preserve-null"
    : "fallback-to-workspace";
  const effectiveConfigQuery = useEffectiveConfigQuery(cwd, {
    hostId,
    cwdMode,
    enabled: !isCwdRequiredButMissing,
  }) as QueryResult<{
    config?: ResolvedConfig;
  }>;
  const configRequirementsQuery = useAppScopeFamilyValue(
    configRequirementsQueryOptions,
    {
      hostId,
    },
  ) as QueryResult<{
    requirements?: ConfigRequirements;
  }>;
  const requirements = configRequirementsQuery.data?.requirements ?? null;
  const resolvedConfig = effectiveConfigQuery.data?.config ?? null;
  const needsGuardianFeatureResolution =
    configRequirementsQuery.isPending === true ||
    isAgentModeAllowedByRequirements("auto", requirements) ||
    isAgentModeAllowedByRequirements("guardian-approvals", requirements);
  const isGuardianFeaturePending =
    needsGuardianFeatureResolution &&
    isGuardianApprovalFeatureEnabled(resolvedConfig ?? undefined) !== false &&
    (defaultEnableFeatures === undefined || isStatsigLoading);
  return {
    isConfigDataPending:
      isCwdRequiredButMissing ||
      configRequirementsQuery.isPending === true ||
      effectiveConfigQuery.isPending === true ||
      isGuardianFeaturePending,
    isGuardianApprovalEnabledByStatsig:
      defaultEnableFeatures?.guardian_approval === true,
    requirements,
    resolvedConfig,
  };
}
