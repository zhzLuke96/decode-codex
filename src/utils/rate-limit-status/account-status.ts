// Restored from ref/webview/assets/rate-limit-status-CjAYpGEg.js
import { isEnterpriseLikeSku } from "../skus";
import type { MonthlySpendLimitUsage, RateLimitStatusPayload } from "./types";
import { remainingUsagePercent } from "./windows";
function getCredits(status: RateLimitStatusPayload | null | undefined) {
  return status?.credits ?? null;
}
function getNumericValue(value: number | string | null | undefined) {
  if (value == null) {
    return null;
  }
  const numericValue = typeof value === "number" ? value : Number(value);
  return Number.isFinite(numericValue) ? numericValue : null;
}
function getHardMonthlyLimit(
  status: RateLimitStatusPayload | null | undefined,
) {
  return status?.effective_monthly_limit?.enforcement_mode === "HARD_CAP"
    ? getNumericValue(status.effective_monthly_limit.limit)
    : null;
}
function isWorkspaceMonthlyLimitReached(
  status: RateLimitStatusPayload | null | undefined,
) {
  const hardLimit = getHardMonthlyLimit(status);
  const usage = getNumericValue(status?.current_month_usage);
  return hardLimit != null && usage != null && usage >= hardLimit;
}
function isSpendControlReached(
  status: RateLimitStatusPayload | null | undefined,
) {
  return status?.spend_control?.reached === true;
}
function hasMatchingWorkspaceHardCap(
  accountStatus: RateLimitStatusPayload | null | undefined,
  workspaceStatus: RateLimitStatusPayload | null | undefined,
) {
  const workspaceHardLimit = getHardMonthlyLimit(workspaceStatus);
  const individualLimit = getNumericValue(
    accountStatus?.spend_control?.individual_limit?.limit ?? null,
  );
  return (
    workspaceHardLimit != null &&
    (individualLimit == null || individualLimit === workspaceHardLimit)
  );
}
export function getSpendControlWarningThreshold(
  status: RateLimitStatusPayload | null | undefined,
) {
  if (isSpendControlReached(status)) {
    return null;
  }
  const usedPercent = status?.spend_control?.individual_limit?.used_percent;
  return usedPercent == null || usedPercent < 70
    ? null
    : usedPercent >= 85
      ? 85
      : 70;
}
export function getMonthlySpendLimitUsage(
  status: RateLimitStatusPayload | null | undefined,
): MonthlySpendLimitUsage | null {
  const limit = getNumericValue(status?.effective_monthly_limit?.limit);
  const used = getNumericValue(status?.current_month_usage);
  if (limit == null || used == null || limit < 0) {
    return null;
  }
  const usedPercent =
    limit === 0 ? 100 : Math.min(Math.max((used / limit) * 100, 0), 100);
  return {
    limit,
    used,
    usedPercent,
    remainingPercent: remainingUsagePercent(usedPercent),
  };
}
export function isSpendControlBlockedByWorkspaceCap(
  accountStatus: RateLimitStatusPayload | null | undefined,
  workspaceStatus: RateLimitStatusPayload | null | undefined,
) {
  return !isSpendControlReached(accountStatus) ||
    !isWorkspaceMonthlyLimitReached(workspaceStatus)
    ? false
    : hasMatchingWorkspaceHardCap(accountStatus, workspaceStatus);
}
export function isSpendControlNearWorkspaceCap(
  accountStatus: RateLimitStatusPayload | null | undefined,
  workspaceStatus: RateLimitStatusPayload | null | undefined,
) {
  return (
    getSpendControlWarningThreshold(accountStatus) != null &&
    hasMatchingWorkspaceHardCap(accountStatus, workspaceStatus)
  );
}
export function hasCredits(status: RateLimitStatusPayload | null | undefined) {
  const credits = getCredits(status);
  return credits?.unlimited === true || credits?.has_credits === true;
}
export function hasBasicRateLimitReached(
  status: RateLimitStatusPayload | null | undefined,
) {
  const rateLimit = status?.rate_limit;
  return rateLimit?.limit_reached === true || rateLimit?.allowed === false;
}
export function hasRateLimitReached(
  status: RateLimitStatusPayload | null | undefined,
) {
  if (status?.rate_limit_reached_type != null) {
    return true;
  }
  const rateLimit = status?.rate_limit;
  const hasNoEnterpriseCredits =
    isEnterpriseLikeSku(status?.plan_type) &&
    status?.credits?.unlimited === false &&
    status?.credits?.has_credits === false;
  return !!(
    hasBasicRateLimitReached(status) ||
    hasNoEnterpriseCredits ||
    isSpendControlReached(status)
  );
}
export function isWorkspaceCreditsExhausted({
  rateLimitStatus,
  isWorkspaceAccount,
}: {
  rateLimitStatus: RateLimitStatusPayload | null | undefined;
  isWorkspaceAccount: boolean;
}) {
  const reachedType = rateLimitStatus?.rate_limit_reached_type?.type;
  const hasSpecificReachedType =
    reachedType != null && reachedType !== "rate_limit_reached";
  return (
    isWorkspaceAccount &&
    hasCredits(rateLimitStatus) &&
    !isSpendControlReached(rateLimitStatus) &&
    !hasSpecificReachedType
  );
}
export function isWorkspaceSpendControlReached({
  rateLimitStatus,
  isWorkspaceAccount,
}: {
  rateLimitStatus: RateLimitStatusPayload | null | undefined;
  isWorkspaceAccount: boolean;
}) {
  return isWorkspaceAccount && isSpendControlReached(rateLimitStatus);
}
export function shouldUseCreditsRateLimitDisplay({
  rateLimitStatus,
  isWorkspaceAccount,
  isCreditsEnabled,
}: {
  rateLimitStatus: RateLimitStatusPayload | null | undefined;
  isWorkspaceAccount: boolean;
  isCreditsEnabled: boolean;
}) {
  const isPersonalAccountWithCredits =
    !isWorkspaceAccount && hasCredits(rateLimitStatus);
  return (
    isCreditsEnabled &&
    !isWorkspaceSpendControlReached({
      rateLimitStatus,
      isWorkspaceAccount,
    }) &&
    hasRateLimitReached(rateLimitStatus) &&
    !isPersonalAccountWithCredits &&
    !isWorkspaceCreditsExhausted({
      rateLimitStatus,
      isWorkspaceAccount,
    })
  );
}
