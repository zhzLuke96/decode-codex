// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Formats the "next run" / "last run" timestamps shown for an automation in the
// inbox detail rail, using friendly relative labels (Today / Tomorrow / weekday)
// for runs within the next week and absolute dates beyond that.
import type { IntlShape } from "../vendor/react-intl";

const RELATIVE_DATE_WINDOW_DAYS = 7;

export type AutomationStatus = "ACTIVE" | "PAUSED" | "DELETED" | string;

export interface FormatNextRunOptions {
  intl: IntlShape;
  nextRunAt: number | null;
  status: AutomationStatus;
}

export interface FormatRelativeRunTimeOptions {
  intl: IntlShape;
  timestamp: number;
}

function differenceInCalendarDays(target: Date, reference: Date): number {
  const targetMidnight = new Date(
    target.getFullYear(),
    target.getMonth(),
    target.getDate(),
  );
  const referenceMidnight = new Date(
    reference.getFullYear(),
    reference.getMonth(),
    reference.getDate(),
  );
  return Math.round(
    (targetMidnight.getTime() - referenceMidnight.getTime()) / 86_400_000,
  );
}

export function formatRelativeRunTime({
  intl,
  timestamp,
}: FormatRelativeRunTimeOptions): string {
  const runDate = new Date(timestamp);
  const dayOffset = differenceInCalendarDays(runDate, new Date());
  const time = intl.formatDate(runDate, { timeStyle: "short" });

  if (dayOffset === 0) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.today",
        defaultMessage: "Today at {time}",
        description: "Relative next-run label for a time later today",
      },
      { time },
    );
  }
  if (dayOffset === 1) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.tomorrow",
        defaultMessage: "Tomorrow at {time}",
        description: "Relative next-run label for a time tomorrow",
      },
      { time },
    );
  }
  if (dayOffset > 1 && dayOffset < RELATIVE_DATE_WINDOW_DAYS) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.weekday",
        defaultMessage: "{weekday} at {time}",
        description: "Relative next-run label for a day later this week",
      },
      {
        weekday: intl.formatDate(runDate, { weekday: "long" }),
        time,
      },
    );
  }
  return intl.formatDate(runDate, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function formatAutomationNextRun({
  intl,
  nextRunAt,
  status,
}: FormatNextRunOptions): string {
  if (status === "PAUSED") {
    return "-";
  }
  if (nextRunAt == null) {
    return intl.formatMessage({
      id: "inbox.automations.nextRun.none",
      defaultMessage: "Not scheduled",
      description:
        "Fallback label when an automation does not have a next run time",
    });
  }
  return formatRelativeRunTime({ intl, timestamp: nextRunAt });
}
