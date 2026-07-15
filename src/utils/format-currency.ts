// Restored from ref/webview/assets/format-currency-CMEP8JPI.js

type NumberFormatIntl = {
  locale: string;
  formatNumber(
    value: number,
    options: {
      style: "currency";
      currency: string;
      minimumFractionDigits: number;
      maximumFractionDigits: number;
    },
  ): string;
  formatters: {
    getNumberFormat(
      locale: string,
      options: {
        style: "currency";
        currency: string;
      },
    ): Intl.NumberFormat;
  };
};
type StatsigLayerLike = {
  get(parameterName: string, fallback: boolean): boolean;
};
type StatsigClientLike = {
  getLayer(
    layerName: string,
    options?: {
      disableExposureLog?: boolean;
    },
  ): StatsigLayerLike;
};
const CHATGPT_CODEX_URL = "https://chatgpt.com/codex";
const CHATGPT_CODEX_ORIGIN = new URL(CHATGPT_CODEX_URL);
const CHATGPT_PURCHASE_PATH_PREFIX = `${CHATGPT_CODEX_ORIGIN.pathname}/purchase/`;
const LOGGED_IN_PURCHASE_LAYER_ID = "3800100299";
function addLoginHintToChatGptPurchaseUrl({
  loginHint,
  statsigClient,
  url,
}: {
  loginHint: string | null | undefined;
  statsigClient: StatsigClientLike;
  url: string;
}) {
  if (loginHint == null) return url;
  const purchaseUrl = new URL(url);
  const shouldUseLoginHint =
    purchaseUrl.origin === CHATGPT_CODEX_ORIGIN.origin &&
    purchaseUrl.pathname.startsWith(CHATGPT_PURCHASE_PATH_PREFIX) &&
    statsigClient
      .getLayer(LOGGED_IN_PURCHASE_LAYER_ID, {
        disableExposureLog: false,
      })
      .get("enabled", false);
  if (!shouldUseLoginHint) return url;
  purchaseUrl.searchParams.set("login_hint", loginHint);
  return purchaseUrl.toString();
}
function formatCurrency({
  intl,
  amount,
  currencyCode,
  currencyFractionDigits,
}: {
  intl: NumberFormatIntl;
  amount: number;
  currencyCode: string;
  currencyFractionDigits?: number | null;
}) {
  const fractionDigits =
    currencyFractionDigits ??
    getCurrencyFractionDigits({
      intl,
      currencyCode,
    });
  return intl.formatNumber(amount, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}
function getCurrencyFractionDigits({
  intl,
  currencyCode,
}: {
  intl: NumberFormatIntl;
  currencyCode: string;
}) {
  return (
    intl.formatters
      .getNumberFormat(intl.locale, {
        style: "currency",
        currency: currencyCode,
      })
      .resolvedOptions().maximumFractionDigits ?? 0
  );
}
export { addLoginHintToChatGptPurchaseUrl, formatCurrency };
