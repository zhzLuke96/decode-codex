// Restored from ref/webview/assets/automations-page-CXHLOmAw.js
import type { IntlShape } from "../vendor/react-intl";

export type AutomationRelativeTimestampFormatter = Pick<
  IntlShape,
  "formatDate" | "formatMessage"
>;

export function formatAutomationRelativeTimestamp({
  timestamp,
  intl,
}: {
  timestamp: string | number | Date;
  intl: AutomationRelativeTimestampFormatter;
}): string {
  const date = new Date(timestamp);
  const dayOffset = getCalendarDayOffset(date, new Date());
  const time = intl.formatDate(date, {
    timeStyle: "short",
  });

  if (dayOffset === 0) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.pastToday",
        defaultMessage: "Today at {time}",
        description: "Relative last-run label for a time earlier today",
      },
      { time },
    );
  }

  if (dayOffset === -1) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.yesterday",
        defaultMessage: "Yesterday at {time}",
        description: "Relative last-run label for a time yesterday",
      },
      { time },
    );
  }

  if (dayOffset < -1 && dayOffset > -7) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.pastWeekday",
        defaultMessage: "{weekday} at {time}",
        description: "Relative last-run label for a day earlier this week",
      },
      {
        weekday: intl.formatDate(date, {
          weekday: "long",
        }),
        time,
      },
    );
  }

  return intl.formatDate(date, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function getCalendarDayOffset(date: Date, referenceDate: Date): number {
  const dateDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const referenceDay = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
  );

  return Math.round((dateDay.getTime() - referenceDay.getTime()) / 86400000);
}
