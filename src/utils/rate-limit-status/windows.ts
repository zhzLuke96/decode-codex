// Restored from ref/webview/assets/rate-limit-status-CjAYpGEg.js
import type {
  RateLimitAlert,
  RateLimitBucket,
  RateLimitStatusPayload,
  RateLimitWindow,
} from "./types";
import { initSkuRuntimeChunk } from "../skus";
export const DAY_MINUTES = 1440;
export const WEEK_MINUTES = 7 * DAY_MINUTES;
export const MONTH_MINUTES = 30 * DAY_MINUTES;
export const YEAR_MINUTES = 365 * DAY_MINUTES;
const RATE_LIMIT_ALERT_THRESHOLD_PERCENT = 90;
export function hasRateLimitWindow(bucket: RateLimitBucket | null | undefined) {
  return bucket != null && (bucket.windowDurationMins ?? 0) > 0;
}
export function remainingUsagePercent(usedPercent: number) {
  return Number.isFinite(usedPercent)
    ? Math.min(Math.max(100 - usedPercent, 0), 100)
    : 100;
}
export function parseUnixSeconds(
  unixSeconds: number | null | undefined,
): Date | null {
  if (unixSeconds == null || !Number.isFinite(unixSeconds)) {
    return null;
  }
  const timestampMs = unixSeconds * 1000;
  return Number.isFinite(timestampMs) ? new Date(timestampMs) : null;
}
export function secondsUntilUnixSeconds(
  unixSeconds: number | null | undefined,
  now: Date = new Date(),
) {
  const resetAt = parseUnixSeconds(unixSeconds);
  return resetAt
    ? Math.floor((resetAt.getTime() - now.getTime()) / 1000)
    : null;
}
export function selectRateLimitAlert(
  rateLimit:
    | {
        primary?: RateLimitBucket | null;
        secondary?: RateLimitBucket | null;
      }
    | null
    | undefined,
): RateLimitAlert | null {
  const { primary, secondary } = rateLimit ?? {
    primary: null,
    secondary: null,
  };
  const primaryUsedPercent = primary?.usedPercent ?? 0;
  const secondaryUsedPercent = secondary?.usedPercent ?? 0;
  const primaryWindowMinutes = primary?.windowDurationMins ?? 0;
  const secondaryWindowMinutes = secondary?.windowDurationMins ?? 0;
  const maxUsedPercent = Math.max(primaryUsedPercent, secondaryUsedPercent);
  if (maxUsedPercent < RATE_LIMIT_ALERT_THRESHOLD_PERCENT) {
    return null;
  }
  if (
    secondaryUsedPercent > primaryUsedPercent ||
    (primaryUsedPercent === secondaryUsedPercent &&
      secondaryWindowMinutes > primaryWindowMinutes)
  ) {
    return {
      severity: maxUsedPercent >= 100 ? "blocked" : "warning",
      usedPercent: secondaryUsedPercent,
      remainingPercent: remainingUsagePercent(secondaryUsedPercent),
      windowMinutes: secondaryWindowMinutes,
      resetsAt: secondary?.resetsAt ?? null,
    };
  }
  return maxUsedPercent === primaryUsedPercent
    ? {
        severity: maxUsedPercent >= 100 ? "blocked" : "warning",
        usedPercent: primaryUsedPercent,
        remainingPercent: remainingUsagePercent(primaryUsedPercent),
        windowMinutes: primaryWindowMinutes,
        resetsAt: primary?.resetsAt ?? null,
      }
    : null;
}
function getRateLimit(status: RateLimitStatusPayload | null | undefined) {
  return status?.rate_limit ?? null;
}
function getRateLimitWindows(
  status: RateLimitStatusPayload | null | undefined,
) {
  const rateLimit = getRateLimit(status);
  const windows: Array<RateLimitWindow> = [];
  if (rateLimit?.primary_window) {
    windows.push(rateLimit.primary_window);
  }
  if (rateLimit?.secondary_window) {
    windows.push(rateLimit.secondary_window);
  }
  return windows;
}
function getHighestUsageWindow(
  status: RateLimitStatusPayload | null | undefined,
) {
  const windows = getRateLimitWindows(status);
  return windows.length === 0
    ? null
    : windows.reduce((selected: RateLimitWindow | null, window) =>
        !selected || (window.used_percent ?? 0) > (selected.used_percent ?? 0)
          ? window
          : (window.used_percent ?? 0) < (selected.used_percent ?? 0)
            ? selected
            : (window.reset_at ?? 0) > (selected.reset_at ?? 0)
              ? window
              : selected,
      );
}
export function getLatestRateLimitResetAt(
  status: RateLimitStatusPayload | null | undefined,
) {
  return getHighestUsageWindow(status)?.reset_at ?? null;
}
export function hasServerRateLimitReached(
  status: RateLimitStatusPayload | null | undefined,
) {
  const rateLimit = getRateLimit(status);
  return rateLimit?.limit_reached === true || rateLimit?.allowed === false;
}

export function initRateLimitStatusChunk(): void {}

export function initRateLimitStatusDependenciesChunk(): void {
  initRateLimitStatusChunk();
  initSkuRuntimeChunk();
}
