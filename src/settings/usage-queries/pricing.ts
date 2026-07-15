// Restored from ref/webview/assets/usage-queries-CItzwIo9.js
// Pricing and subscription update helpers.

import {
  vscodeApiU as queryTimings,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import { queryOptions } from "../../utils/query-options";
import {
  AUTO_TOP_UP_PRICING_QUERY_KEY,
  PLAN_PRICING_QUERY_KEY,
  SUBSCRIPTION_UPDATE_PREVIEW_QUERY_KEY,
} from "./query-keys";
import type {
  CheckoutPricingConfigResponse,
  CurrencyConfig,
  EnabledQueryInput,
} from "./types";
type BillingCurrencyInput = EnabledQueryInput & {
  billingCurrency?: string | null;
};
type SubscriptionPlanInput = {
  accountId: string;
  updatedPlan: string;
};
export function useAutoTopUpPricingQuery({
  billingCurrency = null,
  enabled,
}: BillingCurrencyInput) {
  return useQuery({
    queryKey: [...AUTO_TOP_UP_PRICING_QUERY_KEY, billingCurrency],
    enabled: enabled && billingCurrency != null,
    staleTime: queryTimings.INFINITE,
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: async () => {
      if (billingCurrency == null) return null;
      const response = await fetchCheckoutPricingConfig(billingCurrency);
      const amountPerCredit = response.currency_config?.amount_per_credit;
      return amountPerCredit == null || amountPerCredit <= 0
        ? null
        : {
            amountPerCredit,
            currencyCode:
              response.currency_config?.symbol_code ?? billingCurrency,
            minorUnitExponent:
              response.currency_config?.minor_unit_exponent ?? null,
          };
    },
  });
}
export function usePlanPricingQuery({
  billingCurrency = "US",
  enabled,
}: {
  billingCurrency?: string;
  enabled: boolean;
}) {
  return useQuery({
    queryKey: [...PLAN_PRICING_QUERY_KEY, billingCurrency],
    enabled: enabled && billingCurrency !== undefined,
    staleTime: queryTimings.INFINITE,
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: async () => {
      const currencyConfig = (await fetchCheckoutPricingConfig(billingCurrency))
        .currency_config;
      if (currencyConfig?.symbol_code == null) return null;
      const businessCurrencyConfig =
        await resolveBusinessCurrencyConfig(currencyConfig);
      return {
        currencyCode: currencyConfig.symbol_code,
        businessCurrencyCode:
          businessCurrencyConfig?.symbol_code ?? currencyConfig.symbol_code,
        minorUnitExponent: currencyConfig.minor_unit_exponent ?? null,
        businessMinorUnitExponent:
          businessCurrencyConfig?.minor_unit_exponent ?? null,
        monthlyAmounts: {
          free: currencyConfig.free?.month?.amount ?? null,
          go: currencyConfig.go?.month?.amount ?? null,
          plus: currencyConfig.plus?.month?.amount ?? null,
          prolite: currencyConfig.prolite?.month?.amount ?? null,
          pro: currencyConfig.pro?.month?.amount ?? null,
          business: businessCurrencyConfig?.business?.year?.amount ?? null,
        },
      };
    },
  });
}
export function subscriptionUpdatePreviewQueryOptions({
  accountId,
  updatedPlan,
}: SubscriptionPlanInput) {
  return queryOptions({
    queryKey: [
      ...SUBSCRIPTION_UPDATE_PREVIEW_QUERY_KEY,
      accountId,
      updatedPlan,
    ],
    queryFn: () =>
      codexRequest.safeGet("/subscriptions/update/preview", {
        parameters: {
          query: {
            account_id: accountId,
            updated_plan: updatedPlan,
          },
        },
      }),
    staleTime: queryTimings.FIVE_MINUTES,
  });
}
export function updateSubscriptionPlan({
  accountId,
  updatedPlan,
}: SubscriptionPlanInput): Promise<unknown> {
  return codexRequest.safePost("/subscriptions/update", {
    requestBody: {
      account_id: accountId,
      updated_plan: updatedPlan,
    },
  });
}
export function cancelPendingSubscriptionUpdate({
  accountId,
}: {
  accountId: string;
}): Promise<unknown> {
  return codexRequest.safePost("/subscriptions/update/cancel_pending", {
    requestBody: {
      account_id: accountId,
    },
  });
}
function fetchCheckoutPricingConfig(
  countryCode: string,
): Promise<CheckoutPricingConfigResponse> {
  return codexRequest.safeGet(
    "/checkout_pricing_config/configs/{country_code}",
    {
      parameters: {
        path: {
          country_code: countryCode,
        },
      },
    },
  );
}
async function resolveBusinessCurrencyConfig(
  currencyConfig: CurrencyConfig,
): Promise<CurrencyConfig | null | undefined> {
  const override = currencyConfig.business_currency_override;
  if (override == null || override === currencyConfig.symbol_code) {
    return currencyConfig;
  }
  return (await fetchCheckoutPricingConfig(override)).currency_config;
}
