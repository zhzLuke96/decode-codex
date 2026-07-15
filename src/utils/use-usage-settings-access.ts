// Restored from ref/webview/assets/use-usage-settings-access-Bq_PKiLc.js
// Computes whether the usage settings entry point should be shown.
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~settings-page~hotkey-window-thread-page~usage~hc2m5m0u-Bxgc6LSO.js

import {
  useGateValue,
  useLayer,
  useStatsigClient,
} from "../vendor/statsig-current-runtime";
import { useAuth } from "../auth/use-auth";
import { useSelectedAccountQuery } from "../runtime/codex-api";
import {
  _vscodeApiO as useVscodeQuery,
  vscodeApiU as queryTimings,
} from "../boundaries/vscode-api";
import { isNonQuorumEnterpriseSku, Sku } from "./skus";
const FREE_GO_USAGE_SETTINGS_LAYER = "1636924626";
const FREE_GO_USAGE_SETTINGS_PARAM = "enable_free_go_usage_settings";
const ENTERPRISE_USAGE_SETTINGS_GATE = "3909937021";
type UsageSettingsAccess = {
  canManageCreditSettings: boolean;
  isUsageSettingsAccessLoading: boolean;
  isUsageSettingsVisible: boolean;
  plan?: string;
};
type AccountInfoResponse = {
  plan?: string;
};
type AccessDecisionInput = {
  authMethod?: string | null;
  isEnterpriseUsageSettingsEnabled?: boolean;
  isFreeGoUsageSettingsEnabled: boolean;
  plan?: string;
};
export function useUsageSettingsAccess(): UsageSettingsAccess {
  const { authMethod, isLoading: isAuthLoading } = useAuth();
  const isChatGptAuth = authMethod === "chatgpt";
  const freeGoUsageSettingsLayer = useLayer(FREE_GO_USAGE_SETTINGS_LAYER);
  const isEnterpriseUsageSettingsEnabled = useGateValue(
    ENTERPRISE_USAGE_SETTINGS_GATE,
  );
  const { isLoading: isStatsigLoading } = useStatsigClient();
  const {
    data: selectedAccount,
    hasEverErrored: hasAccountCheckEverErrored,
    isLoading: isAccountCheckLoading,
  } = useSelectedAccountQuery();
  const accountInfoQuery = useVscodeQuery("account-info", {
    queryConfig: {
      enabled: isChatGptAuth,
      staleTime: queryTimings.ONE_MINUTE,
    },
  });
  const plan =
    (
      selectedAccount as
        | {
            plan_type?: string;
          }
        | undefined
    )?.plan_type ??
    (!isAccountCheckLoading || hasAccountCheckEverErrored
      ? (accountInfoQuery.data as AccountInfoResponse | undefined)?.plan
      : undefined);
  const isFreeOrGoPlan = isFreeOrGoSku(plan);
  const isEnterprisePlan = isNonQuorumEnterpriseSku(plan);
  const isFreeGoUsageSettingsEnabled =
    isChatGptAuth && isFreeOrGoPlan && !isStatsigLoading
      ? freeGoUsageSettingsLayer.get(FREE_GO_USAGE_SETTINGS_PARAM, false)
      : false;
  const accessDecision = resolveUsageSettingsAccess({
    authMethod,
    isEnterpriseUsageSettingsEnabled:
      isChatGptAuth && isEnterprisePlan && isEnterpriseUsageSettingsEnabled,
    isFreeGoUsageSettingsEnabled,
    plan,
  });
  const isLoadingAccountPlan =
    isChatGptAuth && isAccountCheckLoading && !hasAccountCheckEverErrored;
  const isLoadingFreeGoGate =
    isChatGptAuth && isFreeOrGoPlan && isStatsigLoading;
  const isLoadingEnterpriseGate =
    isChatGptAuth && isEnterprisePlan && isStatsigLoading;
  return {
    ...accessDecision,
    isUsageSettingsAccessLoading:
      isAuthLoading ||
      (isChatGptAuth && accountInfoQuery.isLoading) ||
      isLoadingAccountPlan ||
      isLoadingFreeGoGate ||
      isLoadingEnterpriseGate,
    plan,
  };
}
export function initUsageSettingsAccessChunk(): void {}
function resolveUsageSettingsAccess({
  authMethod,
  isEnterpriseUsageSettingsEnabled = false,
  isFreeGoUsageSettingsEnabled,
  plan,
}: AccessDecisionInput) {
  const isChatGptAuth = authMethod === "chatgpt";
  const canManageCreditSettings = isChatGptAuth && isPaidIndividualSku(plan);
  const isFreeGoUsageVisible =
    isChatGptAuth && isFreeOrGoSku(plan) && isFreeGoUsageSettingsEnabled;
  const isEnterpriseUsageVisible =
    isChatGptAuth &&
    isNonQuorumEnterpriseSku(plan) &&
    isEnterpriseUsageSettingsEnabled;
  return {
    canManageCreditSettings,
    isUsageSettingsVisible:
      canManageCreditSettings ||
      isFreeGoUsageVisible ||
      isEnterpriseUsageVisible,
  };
}
function isPaidIndividualSku(plan: string | undefined): boolean {
  return plan === Sku.PLUS || plan === Sku.PRO || plan === Sku.PROLITE;
}
function isFreeOrGoSku(plan: string | undefined): boolean {
  return plan === Sku.FREE || plan === Sku.GO;
}
