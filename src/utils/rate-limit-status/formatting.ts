// Restored from ref/webview/assets/rate-limit-status-CjAYpGEg.js
import {
  DAY_MINUTES,
  MONTH_MINUTES,
  WEEK_MINUTES,
  YEAR_MINUTES,
} from "./windows";
import type { IntlFormatter, RateLimitWindowLabelVariant } from "./types";
const SIXTY_DAYS_IN_MINUTES = 60 * DAY_MINUTES;
export function formatRemainingPercent(remainingPercent: number) {
  if (!Number.isFinite(remainingPercent)) {
    return "\u2013";
  }
  const clampedPercent = Math.min(Math.max(remainingPercent, 0), 100);
  return `${Math.round(clampedPercent)}%`;
}
export function formatRateLimitWindowLabel({
  intl,
  minutes = 0,
  variant = "summary",
}: {
  intl: IntlFormatter;
  minutes?: number;
  variant?: RateLimitWindowLabelVariant;
}) {
  const annualWindows = exactWindowMultiple(minutes, YEAR_MINUTES);
  if (annualWindows != null) {
    return variant === "summary"
      ? intl.formatMessage(
          {
            id: "composer.mode.rateLimit.annualDynamicTitle",
            defaultMessage:
              "{years, plural, one {Annual} other {{years} Years}}",
            description: "Dynamic annual rate limit label (title case)",
          },
          {
            years: annualWindows,
          },
        )
      : intl.formatMessage(
          {
            id: "composer.mode.rateLimit.annualDynamicSentence",
            defaultMessage:
              "{years, plural, one {annual limit} other {{years} year limit}}",
            description: "Dynamic annual rate limit label (sentence case)",
          },
          {
            years: annualWindows,
          },
        );
  }
  const monthlyWindows = exactWindowMultiple(minutes, MONTH_MINUTES);
  if (monthlyWindows != null) {
    return variant === "summary"
      ? intl.formatMessage(
          {
            id: "composer.mode.rateLimit.monthlyDynamicTitle",
            defaultMessage:
              "{months, plural, one {Monthly} other {{months} Months}}",
            description: "Dynamic monthly rate limit label (title case)",
          },
          {
            months: monthlyWindows,
          },
        )
      : intl.formatMessage(
          {
            id: "composer.mode.rateLimit.monthlyDynamicSentence",
            defaultMessage:
              "{months, plural, one {monthly limit} other {{months} month limit}}",
            description: "Dynamic monthly rate limit label (sentence case)",
          },
          {
            months: monthlyWindows,
          },
        );
  }
  if (minutes >= 10079) {
    const weeks = Math.ceil(minutes / WEEK_MINUTES);
    return variant === "summary"
      ? intl.formatMessage(
          {
            id: "composer.mode.rateLimit.weeklyDynamicTitle",
            defaultMessage:
              "{weeks, plural, one {Weekly} other {{weeks} Weeks}}",
            description: "Dynamic weekly rate limit label (title case)",
          },
          {
            weeks,
          },
        )
      : intl.formatMessage(
          {
            id: "composer.mode.rateLimit.weeklyDynamicSentence",
            defaultMessage:
              "{weeks, plural, one {weekly limit} other {{weeks} week limit}}",
            description: "Dynamic weekly rate limit label (sentence case)",
          },
          {
            weeks,
          },
        );
  }
  if (minutes >= 1439) {
    const days = Math.ceil(minutes / DAY_MINUTES);
    return intl.formatMessage(
      {
        id: "composer.mode.rateLimit.day",
        defaultMessage: "{days}d",
        description: "Daily rate limit label",
      },
      {
        days,
      },
    );
  }
  if (minutes >= 60) {
    const hours = Math.ceil(minutes / 60);
    return intl.formatMessage(
      {
        id: "composer.mode.rateLimit.hour",
        defaultMessage: "{hours}h",
        description: "Hourly rate limit label",
      },
      {
        hours,
      },
    );
  }
  if (minutes > 0) {
    const roundedMinutes = Math.ceil(minutes);
    return intl.formatMessage(
      {
        id: "composer.mode.rateLimit.minute",
        defaultMessage: "{minutes}m",
        description: "Minute rate limit label",
      },
      {
        minutes: roundedMinutes,
      },
    );
  }
  return intl.formatMessage({
    id: "composer.mode.rateLimit.heading",
    defaultMessage: "Usage remaining",
    description: "Rate limit summary heading",
  });
}
function exactWindowMultiple(minutes: number, baseMinutes: number) {
  if (!Number.isFinite(minutes) || minutes <= 0) {
    return null;
  }
  const count = Math.max(1, Math.round(minutes / baseMinutes));
  return isWithinFivePercent(minutes, count * baseMinutes) ? count : null;
}
function isWithinFivePercent(value: number, target: number) {
  return value >= target * 0.95 && value <= target * 1.05;
}
export function formatResetDate(resetAt: Date, now: Date = new Date()) {
  const secondsUntilReset = Math.floor(
    (resetAt.getTime() - now.getTime()) / 1000,
  );
  return secondsUntilReset <= 0
    ? new Intl.RelativeTimeFormat(undefined, {
        numeric: "auto",
      }).format(0, "second")
    : secondsUntilReset < SIXTY_DAYS_IN_MINUTES
      ? new Intl.DateTimeFormat(undefined, {
          timeStyle: "short",
        }).format(resetAt)
      : new Intl.DateTimeFormat(undefined, {
          month: "short",
          day: "numeric",
        }).format(resetAt);
}
export function formatDateAndTime(resetAt: Date) {
  return {
    date: new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
    }).format(resetAt),
    time: new Intl.DateTimeFormat(undefined, {
      timeStyle: "short",
    }).format(resetAt),
  };
}
export function formatResetTimestamp(
  intl: Pick<IntlFormatter, "locale">,
  resetAtUnixSeconds: number,
) {
  const now = new Date();
  const resetAt = new Date(resetAtUnixSeconds * 1000);
  return resetAt.getFullYear() === now.getFullYear() &&
    resetAt.getMonth() === now.getMonth() &&
    resetAt.getDate() === now.getDate()
    ? resetAt.toLocaleTimeString(intl.locale, {
        timeStyle: "short",
      })
    : resetAt.toLocaleString(intl.locale, {
        timeStyle: "short",
        dateStyle: "medium",
      });
}
