// Restored from ref/webview/assets/use-rate-limit-DfBgdYGx.js
import type {
  RateLimitAlert,
  RateLimitBucket,
  RateLimitStatusPayload,
} from "../rate-limit-status";

export type { RateLimitAlert, RateLimitBucket, RateLimitStatusPayload };

export type RawRateLimitWindow = {
  used_percent?: number | null;
  limit_window_seconds?: number | null;
  reset_at?: number | null;
};

export type RawRateLimit = {
  primary_window?: RawRateLimitWindow | null;
  secondary_window?: RawRateLimitWindow | null;
};

export type RawCredits = {
  has_credits?: boolean | null;
  unlimited?: boolean | null;
  balance?: number | null;
};

export type RawAdditionalRateLimit = RateLimitStatusPayload & {
  limit_name?: string | null;
  rate_limit?: RawRateLimit | null;
};

export type RateLimitResponse = RateLimitStatusPayload & {
  rate_limit_name?: string | null;
  rate_limit?: RawRateLimit | null;
  credits?: RawCredits | null;
  additional_rate_limits?: Array<RawAdditionalRateLimit | null> | null;
};

export type NormalizedCredits = {
  hasCredits?: boolean | null;
  unlimited?: boolean | null;
  balance: number | null;
};

export type NormalizedPlanType =
  | "free"
  | "plus"
  | "pro"
  | "team"
  | "business"
  | "enterprise"
  | "edu"
  | "unknown";

export type RateLimitSnapshot = {
  limitId: null;
  limitName: string | null;
  primary: RateLimitBucket | null;
  secondary: RateLimitBucket | null;
  credits: NormalizedCredits | null;
  individualLimit: null;
  planType: NormalizedPlanType | null;
  rateLimitReachedType: null;
};

export type RateLimitEntry = {
  limitName: string | null;
  snapshot: RateLimitSnapshot;
  blocked: boolean;
};

export type LimitSelection = {
  activeLimitName?: string | null;
  selectedModel?: string | null;
};

export type RateLimitCtaState = {
  coreRateLimitBlocked: boolean;
  selectedModelRateLimitReached: boolean;
};
