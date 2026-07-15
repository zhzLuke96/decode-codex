// Restored from ref/webview/assets/usage-queries-CItzwIo9.js
// Account-scoped usage query helpers.

import {
  _vscodeApiO as useVscodeQuery,
  vscodeApiU as queryTimings,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { useSelectedAccountQuery } from "../../runtime/codex-api";
import { codexRequest } from "../../runtime/request";
import { ACCOUNTS_CHECK_QUERY_KEY } from "./query-keys";
import type { EnabledQueryInput } from "./types";
type AccountCheckResponse = {
  accounts?: Record<
    string,
    {
      entitlement?: {
        billing_currency?: string | null;
      } | null;
      last_active_subscription?: {
        purchase_origin_platform?: string | null;
      } | null;
    }
  >;
};
type AccountInfoResponse = {
  accountId?: string;
};
export function useBillingCurrencyQuery({ enabled }: EnabledQueryInput) {
  const { data: account, isLoading } = useSelectedAccountQuery();
  const accountId = account?.id ?? null;
  return useQuery({
    queryKey: [...ACCOUNTS_CHECK_QUERY_KEY, "v4-2023-04-27", accountId],
    enabled: enabled && !isLoading && account != null,
    staleTime: queryTimings.INFINITE,
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: fetchAccountsCheck,
    select: (response: AccountCheckResponse) =>
      account
        ? (response.accounts?.[account.id]?.entitlement?.billing_currency ??
          null)
        : null,
  });
}
export function usePurchaseOriginPlatformQuery({ enabled }: EnabledQueryInput) {
  const { data: account, isLoading } = useSelectedAccountQuery();
  const accountId = account?.id ?? null;
  return useQuery({
    queryKey: [...ACCOUNTS_CHECK_QUERY_KEY, "v4-2023-04-27", accountId],
    enabled: enabled && !isLoading && account != null,
    staleTime: queryTimings.INFINITE,
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: fetchAccountsCheck,
    select: (response: AccountCheckResponse) =>
      account
        ? (response.accounts?.[account.id]?.last_active_subscription
            ?.purchase_origin_platform ?? null)
        : null,
  });
}
export function useUsageAccountId({ enabled }: EnabledQueryInput): {
  accountId?: string;
  isLoading: boolean;
} {
  const {
    data: account,
    hasEverErrored,
    isLoading,
  } = useSelectedAccountQuery();
  const shouldUseFallback =
    account?.id == null && (!isLoading || hasEverErrored);
  const accountInfoQuery = useVscodeQuery("account-info", {
    queryConfig: {
      enabled: enabled && shouldUseFallback,
      staleTime: queryTimings.ONE_MINUTE,
    },
  });
  if (account?.id != null) {
    return {
      accountId: account.id,
      isLoading: false,
    };
  }
  if (!shouldUseFallback) {
    return {
      accountId: undefined,
      isLoading: true,
    };
  }
  return {
    accountId: (accountInfoQuery.data as AccountInfoResponse | undefined)
      ?.accountId,
    isLoading: Boolean(accountInfoQuery.isLoading),
  };
}
function fetchAccountsCheck(): Promise<AccountCheckResponse> {
  return codexRequest.safeGet("/accounts/check/{version}", {
    parameters: {
      path: {
        version: "v4-2023-04-27",
      },
    },
  });
}
