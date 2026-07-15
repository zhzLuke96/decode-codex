// Restored from ref/webview/assets/usage-queries-CItzwIo9.js
// Shared usage settings query types.

export type EnabledQueryInput = {
  enabled: boolean;
};
export type AccountScopedQueryInput = EnabledQueryInput & {
  accountId?: string | null;
};
export type AutoTopUpSettings = {
  isEnabled: boolean;
  rechargeMonthlyLimit: number | null;
  rechargeTarget: number | null;
  rechargeThreshold: number | null;
};
export type AutoTopUpSettingsResponse = {
  immediate_top_up_status?: string;
  is_enabled: boolean;
  recharge_monthly_limit?: number | null;
  recharge_target?: number | null;
  recharge_threshold?: number | null;
};
export type AutoTopUpUpdateInput = {
  recharge_monthly_limit?: number | null;
  recharge_target?: number | null;
  recharge_threshold?: number | null;
};
export type CurrencyAmountConfig = {
  amount?: number | null;
};
export type CurrencyConfig = {
  amount_per_credit?: number | null;
  business?: {
    year?: CurrencyAmountConfig | null;
  } | null;
  business_currency_override?: string | null;
  free?: {
    month?: CurrencyAmountConfig | null;
  } | null;
  go?: {
    month?: CurrencyAmountConfig | null;
  } | null;
  minor_unit_exponent?: number | null;
  plus?: {
    month?: CurrencyAmountConfig | null;
  } | null;
  pro?: {
    month?: CurrencyAmountConfig | null;
  } | null;
  prolite?: {
    month?: CurrencyAmountConfig | null;
  } | null;
  symbol_code?: string | null;
};
export type CheckoutPricingConfigResponse = {
  currency_config?: CurrencyConfig | null;
};
export type WorkspaceAdminRequest = {
  id: string;
  [key: string]: unknown;
};
export type WorkspaceAdminRequestsPage = {
  cursor: string | null;
  items: WorkspaceAdminRequest[];
};
export type SaveWorkspaceAdminRequestInput = {
  justification: string;
  requestId?: string | null;
};
