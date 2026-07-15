// Restored from ref/webview/assets/use-rate-limit-DfBgdYGx.js
import type {
  NormalizedPlanType,
  RateLimitSnapshot,
  RawCredits,
  RawRateLimit,
  RawRateLimitWindow,
  RateLimitResponse,
} from "./types";

const SECONDS_PER_MINUTE = 60;
const CORE_LIMIT_NAME = "codex";

function normalizeWindow(window: RawRateLimitWindow | null | undefined) {
  return window == null
    ? null
    : {
        usedPercent: window.used_percent ?? 0,
        windowMinutes:
          window.limit_window_seconds == null
            ? null
            : window.limit_window_seconds / SECONDS_PER_MINUTE,
        resetAt: window.reset_at ?? null,
      };
}

function normalizeBucket(window: RawRateLimitWindow | null | undefined) {
  const normalized = normalizeWindow(window);
  return normalized == null
    ? null
    : {
        usedPercent: normalized.usedPercent,
        windowDurationMins: normalized.windowMinutes,
        resetsAt: normalized.resetAt,
      };
}

function normalizeCredits(credits: RawCredits | null | undefined) {
  return credits
    ? {
        hasCredits: credits.has_credits,
        unlimited: credits.unlimited,
        balance: credits.balance ?? null,
      }
    : null;
}

function normalizePlanType(
  planType: string | null | undefined,
): NormalizedPlanType | null {
  if (!planType) {
    return null;
  }

  switch (planType) {
    case "free":
    case "plus":
    case "pro":
      return planType;
    case "team":
    case "self_serve_business_usage_based":
      return "team";
    case "business":
    case "enterprise_cbp_usage_based":
      return "business";
    case "enterprise":
    case "edu":
      return planType;
    case "hc":
      return "enterprise";
    case "education":
    case "k12":
      return "edu";
    case "go":
    case "guest":
    case "free_workspace":
    case "quorum":
      return "unknown";
    default:
      return "unknown";
  }
}

function buildRateLimitSnapshot(
  rateLimit: RawRateLimit | null | undefined,
  credits: RawCredits | null | undefined,
  planType: string | null | undefined,
  limitName: string | null = null,
): RateLimitSnapshot {
  return {
    limitId: null,
    limitName,
    primary: normalizeBucket(rateLimit?.primary_window),
    secondary: normalizeBucket(rateLimit?.secondary_window),
    credits: normalizeCredits(credits),
    individualLimit: null,
    planType: normalizePlanType(planType),
    rateLimitReachedType: null,
  };
}

function getRateLimitName(status: RateLimitResponse | null | undefined) {
  if (status == null) {
    return null;
  }

  const rawName = status.rate_limit_name;
  if (rawName == null) {
    return null;
  }

  const trimmedName = rawName.trim();
  return trimmedName.length > 0 ? trimmedName : null;
}

function normalizeLimitName(limitName: string | null | undefined) {
  if (limitName == null) {
    return null;
  }

  const normalizedName = limitName
    .trim()
    .toLowerCase()
    .replace(/[_\s.]+/g, "-");
  return normalizedName.length > 0 ? normalizedName : null;
}

function isCoreLimitName(limitName: string | null | undefined) {
  return limitName == null
    ? true
    : limitName.trim().toLowerCase() === CORE_LIMIT_NAME;
}

export {
  buildRateLimitSnapshot,
  getRateLimitName,
  isCoreLimitName,
  normalizeLimitName,
};
