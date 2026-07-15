// Restored from ref/webview/assets/profile-queries-BWvaDOFi.js
// profile-queries-BWvaDOFi chunk restored from the Codex webview bundle.
import type {
  IntlProfileFormatter,
  ProfileUsernameValidationReason,
  ProfileUsernameValidationResult,
} from "./types";
const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 20;
const USERNAME_PATTERN = /^[a-z0-9._-]+$/;
const WHITESPACE_PATTERN = /\s/g;
const PLAN_LABELS: Record<string, string> = {
  business: "Enterprise",
  enterprise: "Enterprise",
  enterprise_cbp_automation: "Enterprise",
  enterprise_cbp_usage_based: "Enterprise",
  free: "Free",
  free_workspace: "Free",
  go: "Go",
  guest: "Free",
  plus: "Plus",
  pro: "Pro",
  prolite: "Pro",
  self_serve_business_usage_based: "Business",
  team: "Business",
};
export class ProfileUsernameValidationError extends Error {
  reason: ProfileUsernameValidationReason;
  constructor(reason: ProfileUsernameValidationReason) {
    super(reason);
    this.reason = reason;
  }
}
export function getProfileInitials(value: string | null | undefined) {
  const words = normalizeDisplayString(value)?.split(/\s+/) ?? [];
  const initials =
    `${words[0]?.charAt(0) ?? ""}${words.length > 1 ? (words.at(-1)?.charAt(0) ?? "") : ""}`.toUpperCase();
  return initials.length > 0 ? initials : "?";
}
export function formatProfilePlanLabel(plan: string | null | undefined) {
  const normalizedPlan = normalizeDisplayString(plan);
  if (normalizedPlan == null) return null;
  return (
    PLAN_LABELS[normalizedPlan.toLowerCase()] ??
    normalizedPlan
      .split(/[_-]+/)
      .filter((part) => part.length > 0)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}
export function formatProfileDuration(
  intl: IntlProfileFormatter,
  durationMs: number,
) {
  const seconds = Math.max(0, Math.round(durationMs / 1000));
  if (seconds >= 3600) {
    const minutes = Math.round(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes === 0
      ? intl.formatMessage(
          {
            id: "profile.stats.durationHours",
            defaultMessage: "{hours}h",
            description: "Formatted profile duration with hours",
          },
          {
            hours,
          },
        )
      : intl.formatMessage(
          {
            id: "profile.stats.durationHoursMinutes",
            defaultMessage: "{hours}h {minutes}m",
            description: "Formatted profile duration with hours and minutes",
          },
          {
            hours,
            minutes: remainingMinutes,
          },
        );
  }
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return remainingSeconds === 0
      ? intl.formatMessage(
          {
            id: "profile.stats.durationMinutes",
            defaultMessage: "{minutes}m",
            description: "Formatted profile duration with minutes",
          },
          {
            minutes,
          },
        )
      : intl.formatMessage(
          {
            id: "profile.stats.durationMinutesSeconds",
            defaultMessage: "{minutes}m {seconds}s",
            description: "Formatted profile duration with minutes and seconds",
          },
          {
            minutes,
            seconds: remainingSeconds,
          },
        );
  }
  return intl.formatMessage(
    {
      id: "profile.stats.durationSeconds",
      defaultMessage: "{seconds}s",
      description: "Formatted profile duration with seconds",
    },
    {
      seconds,
    },
  );
}
export function formatCompactProfileNumber(
  intl: IntlProfileFormatter,
  value: number | null | undefined,
) {
  return intl.formatNumber(Math.max(0, Math.round(value ?? 0)), {
    maximumFractionDigits: 1,
    notation: "compact",
  });
}
export function formatDayStreakValue(
  intl: IntlProfileFormatter,
  days: number | null | undefined,
) {
  return intl.formatMessage(
    {
      id: "profile.stats.dayStreakValue",
      defaultMessage: "{days, plural, one {# day} other {# days}}",
      description: "Formatted day count for profile streak stats",
    },
    {
      days: Math.max(0, Math.round(days ?? 0)),
    },
  );
}
export function resolveProfilePlanLabel({
  accountStructure,
  plan,
  workspaceName,
}: {
  accountStructure?: string | null;
  plan?: string | null;
  workspaceName?: string | null;
}) {
  const normalizedWorkspaceName = normalizeDisplayString(workspaceName);
  return normalizedWorkspaceName != null &&
    accountStructure?.toLowerCase() === "workspace"
    ? normalizedWorkspaceName
    : formatProfilePlanLabel(plan);
}
export function resolveProfileDisplayName({
  accountName,
  displayName,
  username,
}: {
  accountName?: string | null;
  displayName?: string | null;
  username?: string | null;
}) {
  return displayName ?? username ?? accountName ?? null;
}
export function stripUsernamePrefix(value: string) {
  const trimmedValue = value.trim();
  return trimmedValue.startsWith("@")
    ? trimmedValue.slice(1).trim()
    : trimmedValue;
}
export function normalizeUsernameInput(value: string) {
  return value.replace(WHITESPACE_PATTERN, "").slice(0, MAX_USERNAME_LENGTH);
}
export function validateProfileUsername(
  value: string,
): ProfileUsernameValidationResult {
  const username = stripUsernamePrefix(value);
  if (username.length === 0)
    return {
      ok: false,
      reason: "empty",
    };
  if (username.length < MIN_USERNAME_LENGTH) {
    return {
      ok: false,
      reason: "tooShort",
    };
  }
  if (username.length > MAX_USERNAME_LENGTH) {
    return {
      ok: false,
      reason: "tooLong",
    };
  }
  return USERNAME_PATTERN.test(username)
    ? {
        ok: true,
        username,
      }
    : {
        ok: false,
        reason: "invalidCharacters",
      };
}
function normalizeDisplayString(value: string | null | undefined) {
  const trimmedValue = value?.trim();
  return trimmedValue == null || trimmedValue.length === 0
    ? null
    : trimmedValue;
}

export function initProfileQueriesFormattingChunk(): void {}
