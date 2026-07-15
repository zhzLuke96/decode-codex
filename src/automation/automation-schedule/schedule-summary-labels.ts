// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Localized time and weekday labels for automation schedule summaries.

import {
  AUTOMATION_WEEKDAYS,
  type AutomationIntl,
  type AutomationWeekday,
} from "./types";
import { sortAutomationWeekdays } from "./rrule-parser";
import { parseAutomationTime } from "./schedule-time";

export function formatScheduleTimeLabel(
  time: string,
  intl: AutomationIntl,
): string | null {
  const parsedTime = parseAutomationTime(time);
  if (!parsedTime) return null;

  const date = new Date(2024, 0, 7, parsedTime.hour, parsedTime.minute);
  return intl.formatTime
    ? intl.formatTime(date, { hour: "numeric", minute: "2-digit" })
    : `${parsedTime.hour}:${String(parsedTime.minute).padStart(2, "0")}`;
}

export function formatWeekdayList(
  weekdays: AutomationWeekday[],
  intl: AutomationIntl,
  width: "long" | "short",
): string | null {
  const sortedWeekdays = sortAutomationWeekdays(weekdays);

  if (sortedWeekdays.length === 1) {
    const onlyWeekday = sortedWeekdays[0];
    return onlyWeekday ? formatPluralWeekday(onlyWeekday, intl) : null;
  }

  const labels = sortedWeekdays.map((weekday) =>
    formatWeekday(weekday, intl, width),
  );

  return intl.formatList
    ? intl.formatList(labels, { type: "conjunction" })
    : labels.join(", ");
}

function formatPluralWeekday(
  weekday: AutomationWeekday,
  intl: AutomationIntl,
): string {
  switch (weekday) {
    case "SU":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.sundaysLabel",
        defaultMessage: "Sundays",
        description: "Plural Sunday label for schedule summaries",
      });
    case "MO":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.mondaysLabel",
        defaultMessage: "Mondays",
        description: "Plural Monday label for schedule summaries",
      });
    case "TU":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.tuesdaysLabel",
        defaultMessage: "Tuesdays",
        description: "Plural Tuesday label for schedule summaries",
      });
    case "WE":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.wednesdaysLabel",
        defaultMessage: "Wednesdays",
        description: "Plural Wednesday label for schedule summaries",
      });
    case "TH":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.thursdaysLabel",
        defaultMessage: "Thursdays",
        description: "Plural Thursday label for schedule summaries",
      });
    case "FR":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.fridaysLabel",
        defaultMessage: "Fridays",
        description: "Plural Friday label for schedule summaries",
      });
    case "SA":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.saturdaysLabel",
        defaultMessage: "Saturdays",
        description: "Plural Saturday label for schedule summaries",
      });
  }
}

function formatWeekday(
  weekday: AutomationWeekday,
  intl: AutomationIntl,
  width: "long" | "short",
): string {
  return intl.formatDate(
    new Date(2024, 0, 7 + AUTOMATION_WEEKDAYS.indexOf(weekday)),
    {
      weekday: width,
    },
  );
}
