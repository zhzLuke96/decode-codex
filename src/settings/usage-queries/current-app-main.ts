// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~byb29nd9-CzUWNPuT.js
// Current app-main usage, checkout, and auto top-up runtime aliases.
import {
  cancelPendingSubscriptionUpdate,
  isImmediateTopUpFailureStatus,
  subscriptionUpdatePreviewQueryOptions,
  updateSubscriptionPlan,
  useAddCreditsNudgeEmailMutation,
  useAutoTopUpMutations,
  useAutoTopUpPricingQuery,
  useAutoTopUpSettingsQuery,
  useBillingCurrencyQuery,
  usePlanPricingQuery,
  usePurchaseOriginPlatformQuery,
  useSaveWorkspaceAdminRequestMutation,
  useUsageLimitIncreaseRequestQuery,
  useWorkspaceAdminRequestsQuery,
  useWorkspaceMonthlyUsageQuery,
} from "./index";

export {
  cancelPendingSubscriptionUpdate,
  isImmediateTopUpFailureStatus,
  subscriptionUpdatePreviewQueryOptions,
  updateSubscriptionPlan,
  useAddCreditsNudgeEmailMutation,
  useAutoTopUpMutations,
  useAutoTopUpPricingQuery,
  useAutoTopUpSettingsQuery,
  useBillingCurrencyQuery,
  usePlanPricingQuery,
  usePurchaseOriginPlatformQuery,
  useSaveWorkspaceAdminRequestMutation,
  useUsageLimitIncreaseRequestQuery,
  useWorkspaceAdminRequestsQuery,
  useWorkspaceMonthlyUsageQuery,
};

type StatsigLike = {
  getLayer?(
    layerName: string,
    options?: { disableExposureLog?: boolean },
  ): {
    get?(key: string, fallback: boolean): boolean;
  };
};

type IntlLike = {
  formatNumber(
    value: number,
    options: {
      currency: string;
      maximumFractionDigits: number;
      minimumFractionDigits: number;
      style: "currency";
    },
  ): string;
};

type CreditPricingInfo = {
  amountPerCredit: number;
  currencyCode: string;
  minorUnitExponent?: number | null;
};

type CheckoutOpenInput = {
  event?: { preventDefault?: () => void } | null;
  intent: "auto-reload" | "purchase";
  isAutoReloadEnabled?: boolean;
  isCustomCheckoutEnabled?: boolean;
  legacyUrl: string;
  openLegacyAutoReload?: () => void;
  source?: string;
};

const CREDIT_PURCHASE_URL =
  "https://chatgpt.com/purchase/credits?quantity=1000";
const CUSTOM_CHECKOUT_LAYER_BY_AUDIENCE = {
  personal: "2336405413",
  workspace: "3431030460",
} as const;

export function appendLoginHintToCheckoutUrl({
  loginHint,
  statsigClient,
  url,
}: {
  loginHint?: string | null;
  statsigClient?: StatsigLike | null;
  url: string;
}): string {
  void statsigClient;
  if (loginHint == null || loginHint.length === 0) return url;
  try {
    const checkoutUrl = new URL(url);
    if (!checkoutUrl.pathname.includes("/purchase/")) return url;
    checkoutUrl.searchParams.set("login_hint", loginHint);
    return checkoutUrl.toString();
  } catch {
    return url;
  }
}

export function isCustomCheckoutEnabled(
  statsigClient: StatsigLike | null | undefined,
  audience: "personal" | "workspace",
): boolean {
  return Boolean(
    statsigClient
      ?.getLayer?.(CUSTOM_CHECKOUT_LAYER_BY_AUDIENCE[audience], {
        disableExposureLog: false,
      })
      ?.get?.("is_custom_checkout_enabled", false),
  );
}

export function recordCustomCheckoutExposure(
  productLoggerScope: unknown,
  eventPayload: {
    audience: "personal" | "workspace";
    checkoutKind: string;
    entryPoint: string;
  },
): void {
  void productLoggerScope;
  void eventPayload;
}

export function recordWorkspaceCustomCheckoutExposure(
  productLoggerScope: unknown,
): void {
  recordCustomCheckoutExposure(productLoggerScope, {
    audience: "workspace",
    checkoutKind: "custom-checkout",
    entryPoint: "usage",
  });
}

export function logCreditCheckoutOpened(
  productLoggerScope: unknown,
  eventPayload: {
    audience: "personal" | "workspace";
    checkoutKind: string;
    entryPoint: string;
  },
): void {
  recordCustomCheckoutExposure(productLoggerScope, eventPayload);
}

export function openExternalCheckoutUrl(
  url: string,
  event?: { preventDefault?: () => void } | null,
): void {
  event?.preventDefault?.();
  globalThis.open?.(url, "_blank", "noopener,noreferrer");
}

export function openChatGptPricing(
  event?: { preventDefault?: () => void } | null,
): void {
  openExternalCheckoutUrl(CREDIT_PURCHASE_URL, event);
}

export function formatCurrencyAmount({
  amount,
  currencyCode,
  currencyFractionDigits,
  intl,
}: {
  amount: number;
  currencyCode: string;
  currencyFractionDigits?: number | null;
  intl: IntlLike;
}): string {
  const fractionDigits = currencyFractionDigits ?? 0;
  return intl.formatNumber(amount, {
    currency: currencyCode,
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    style: "currency",
  });
}

export function formatCreditPurchaseAmount({
  creditQuantity,
  intl,
  pricingInfo,
}: {
  creditQuantity: number;
  intl: IntlLike;
  pricingInfo: CreditPricingInfo;
}): string | null {
  if (!Number.isFinite(creditQuantity)) return null;
  return formatCurrencyAmount({
    amount: creditQuantity * pricingInfo.amountPerCredit,
    currencyCode: pricingInfo.currencyCode,
    currencyFractionDigits: Number.isInteger(
      creditQuantity * pricingInfo.amountPerCredit,
    )
      ? 0
      : pricingInfo.minorUnitExponent,
    intl,
  });
}

export function useOpenCreditPurchaseFlow(): (
  input: CheckoutOpenInput,
) => void {
  return (input) => {
    if (input.intent === "purchase") {
      openExternalCheckoutUrl(
        input.isCustomCheckoutEnabled ? CREDIT_PURCHASE_URL : input.legacyUrl,
        input.event,
      );
      return;
    }
    input.openLegacyAutoReload?.();
  };
}

export function initCheckoutLoginHintChunk(): void {}

export function initCreditCheckoutRoutingChunk(): void {}

export function initUsageQueriesRuntimeChunk(): void {}

export function initCurrencyFormatterChunk(): void {}

export function initCreditAmountFormattingChunk(): void {}

export function initCheckoutBehaviorRuntimeChunk(): void {}

export function initUsageSettingsQueryRuntimeChunk(): void {}
