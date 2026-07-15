// Restored from ref/webview/assets/use-is-plugins-enabled-Dn_J-WZf.js
// use-is-plugins-enabled-Dn_J-WZf chunk restored from the Codex webview bundle.
import React from "react";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import {
  _vscodeApiO as useVscodeQuery,
  vscodeApiU as queryTimes,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { AuthContext } from "../../auth/use-auth";
import { codexRequest } from "../../runtime/request";
import { isEnterpriseLikeSku } from "../../utils/skus";
import { usePlatform } from "../../utils/use-platform";
import { useExperimentalFeatureAvailability } from "./experimental-feature";
import {
  COMPUTER_USE_FEATURE_NAME,
  COMPUTER_USE_GATE,
  type AccountInfoResponse,
  type AccountSettingsResponse,
  type AccountsCheckResponse,
  type ComputerUseAvailabilityOptions,
  type ComputerUseReason,
  type FeatureAvailability,
  type WindowType,
} from "./types";
function isComputerUseSupportedPlatform(platform: string): boolean {
  return platform === "macOS" || platform === "windows";
}
function useWindowsComputerUseAccountSetting({
  enabled,
}: {
  enabled: boolean;
}): FeatureAvailability {
  const isChatGptAuth = React.useContext(AuthContext)?.authMethod === "chatgpt";
  const accountsCheckQuery = useQuery({
    queryKey: ["accounts", "check"],
    queryFn: fetchAccountsCheck,
    staleTime: queryTimes.ONE_MINUTE,
    enabled: enabled && isChatGptAuth,
  }) as {
    data?: AccountsCheckResponse;
    errorUpdatedAt: number;
    isLoading: boolean;
  };
  const primaryAccountId = accountsCheckQuery.data?.account_ordering?.[0];
  const primaryAccount = accountsCheckQuery.data?.accounts?.find(
    (account) => account.id === primaryAccountId,
  );
  const shouldFallbackToAccountInfo =
    primaryAccount == null &&
    (!accountsCheckQuery.isLoading || accountsCheckQuery.errorUpdatedAt !== 0);
  const accountInfoQuery = useVscodeQuery("account-info", {
    queryConfig: {
      enabled: enabled && isChatGptAuth && shouldFallbackToAccountInfo,
      staleTime: queryTimes.ONE_MINUTE,
    },
  }) as {
    data?: AccountInfoResponse;
    isLoading: boolean;
  };
  const accountId =
    primaryAccount?.id ??
    (shouldFallbackToAccountInfo
      ? accountInfoQuery.data?.accountId
      : undefined);
  const plan =
    primaryAccount?.plan_type ??
    (shouldFallbackToAccountInfo ? accountInfoQuery.data?.plan : undefined);
  const enterpriseLikePlan = isEnterpriseLikeSku(
    isChatGptAuth ? plan : undefined,
  );
  const accountSettingsQuery = useQuery({
    queryKey: ["accounts", "settings", accountId],
    enabled:
      enabled && accountId != null && enterpriseLikePlan && isChatGptAuth,
    queryFn: () =>
      codexRequest.safeGet("/accounts/{account_id}/settings", {
        parameters: {
          path: {
            account_id: accountId ?? "",
          },
        },
      }) as Promise<AccountSettingsResponse>,
    staleTime: queryTimes.ONE_MINUTE,
  }) as {
    data?: AccountSettingsResponse;
    isLoading: boolean;
  };
  const accountAllowsWindowsComputerUse =
    !isChatGptAuth ||
    (plan != null &&
      (!enterpriseLikePlan ||
        (accountSettingsQuery.data?.beta_settings?.windows_computer_use ??
          false)));
  const isLoading =
    enabled &&
    isChatGptAuth &&
    ((accountsCheckQuery.isLoading && !shouldFallbackToAccountInfo) ||
      accountInfoQuery.isLoading ||
      accountSettingsQuery.isLoading);
  return {
    enabled: accountAllowsWindowsComputerUse,
    isLoading,
  };
}
async function fetchAccountsCheck(): Promise<AccountsCheckResponse> {
  return codexRequest.safeGet(
    "/wham/accounts/check",
  ) as Promise<AccountsCheckResponse>;
}
function resolveComputerUseReason({
  areRequiredFeaturesEnabled,
  enabled,
  isAnyFeatureLoading,
  isComputerUseGateEnabled,
  isHostCompatiblePlatform,
  isPlatformLoading,
  windowType,
}: {
  areRequiredFeaturesEnabled: boolean;
  enabled: boolean;
  isAnyFeatureLoading: boolean;
  isComputerUseGateEnabled: boolean;
  isHostCompatiblePlatform: boolean;
  isPlatformLoading: boolean;
  windowType: WindowType;
}): ComputerUseReason {
  if (!enabled) return "disabled";
  if (windowType !== "electron") return "window-type-disabled";
  if (!isComputerUseGateEnabled) return "statsig-disabled";
  if (isPlatformLoading) return "loading";
  if (!isHostCompatiblePlatform) return "unsupported-platform";
  if (isAnyFeatureLoading) return "loading";
  return areRequiredFeaturesEnabled
    ? "available"
    : "config-requirement-disabled";
}
function useComputerUseAvailability({
  enabled = true,
  hostId,
}: ComputerUseAvailabilityOptions) {
  const { isLoading: isPlatformLoading, platform } = usePlatform();
  const isComputerUseGateEnabled = useGateValue(COMPUTER_USE_GATE);
  const computerUseFeature = useExperimentalFeatureAvailability({
    featureName: COMPUTER_USE_FEATURE_NAME,
    hostId,
  });
  const shouldCheckWindowsAccount =
    platform === "windows" && !isPlatformLoading;
  const windowsAccountSetting = useWindowsComputerUseAccountSetting({
    enabled: enabled && shouldCheckWindowsAccount,
  });
  const isAnyFeatureLoading =
    computerUseFeature.isLoading ||
    (shouldCheckWindowsAccount && windowsAccountSetting.isLoading);
  const areRequiredFeaturesEnabled =
    computerUseFeature.enabled &&
    (!shouldCheckWindowsAccount || windowsAccountSetting.enabled);
  const reason = resolveComputerUseReason({
    areRequiredFeaturesEnabled,
    enabled,
    isAnyFeatureLoading,
    isComputerUseGateEnabled,
    isHostCompatiblePlatform: isComputerUseSupportedPlatform(platform),
    isPlatformLoading,
    windowType: "electron",
  });
  return {
    available: reason === "available",
    isFetching: reason === "loading" && isAnyFeatureLoading,
    isLoading: reason === "loading",
    reason,
  };
}
export { useComputerUseAvailability };
