// Restored from ref/webview/assets/rate-limit-status-CjAYpGEg.js
export type RateLimitWindow = {
  used_percent?: number | null;
  reset_at?: number | null;
};
export type RateLimitBucket = {
  usedPercent?: number | null;
  windowDurationMins?: number | null;
  resetsAt?: number | null;
};
export type RateLimitStatusPayload = {
  account_id?: string | null;
  plan_type?: string | null;
  rate_limit_reached_type?: {
    type?: string | null;
  } | null;
  rate_limit?: {
    allowed?: boolean | null;
    limit_reached?: boolean | null;
    primary_window?: RateLimitWindow | null;
    secondary_window?: RateLimitWindow | null;
  } | null;
  credits?: {
    unlimited?: boolean | null;
    has_credits?: boolean | null;
  } | null;
  spend_control?: {
    reached?: boolean | null;
    individual_limit?: {
      limit?: number | string | null;
      used_percent?: number | null;
    } | null;
  } | null;
  effective_monthly_limit?: {
    enforcement_mode?: string | null;
    limit?: number | string | null;
  } | null;
  current_month_usage?: number | string | null;
};
export type RateLimitAlert = {
  severity: "blocked" | "warning";
  usedPercent: number;
  remainingPercent: number;
  windowMinutes: number;
  resetsAt: number | null;
};
export type MonthlySpendLimitUsage = {
  limit: number;
  used: number;
  usedPercent: number;
  remainingPercent: number;
};
export type FormatMessageDescriptor = {
  id: string;
  defaultMessage: string;
  description: string;
};
export type IntlFormatter = {
  formatMessage(
    descriptor: FormatMessageDescriptor,
    values?: Record<string, number>,
  ): string;
  locale?: string;
};
export type RateLimitWindowLabelVariant = "summary" | "sentence";
