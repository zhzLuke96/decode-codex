// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Localized summaries for automation RRULE schedules.

import { once } from "../../runtime/commonjs-interop";
import {
  AUTOMATION_BUSINESS_DAYS,
  AUTOMATION_WEEKDAYS,
  AUTOMATION_WEEKEND_DAYS,
  type AutomationIntl,
  type AutomationScheduleConfig,
  type AutomationScheduleSummaryOptions,
  type AutomationWeekday,
} from "./types";
import { serializeAutomationScheduleConfig } from "./schedule-config";
import {
  parseAutomationRrule,
  sameWeekdays,
  sortAutomationWeekdays,
  type ParsedAutomationRrule,
} from "./rrule-parser";
import {
  formatHourIntervalSummary,
  formatMinuteIntervalSummary,
} from "./schedule-summary-intervals";
import {
  formatScheduleTimeLabel,
  formatWeekdayList,
} from "./schedule-summary-labels";

export function formatScheduleConfigSummary(
  config: AutomationScheduleConfig,
  intl: AutomationIntl,
): string | null {
  return (
    formatParsedSchedule(
      parseAutomationRrule(serializeAutomationScheduleConfig(config)),
      intl,
    ) ?? null
  );
}

export function formatAutomationScheduleSummary({
  rrule,
  intl,
  fallbackMessage,
}: AutomationScheduleSummaryOptions): string | null {
  if (!rrule) return null;
  return (
    formatParsedSchedule(parseAutomationRrule(rrule), intl) ??
    fallbackMessage ??
    null
  );
}

export const initAutomationScheduleSummaryFormatter = once(() => {});

function formatParsedSchedule(
  parsed: ParsedAutomationRrule | null,
  intl: AutomationIntl,
): string | null {
  if (!parsed || parsed.hasMultipleTimeValues) return null;

  const weekdays = sortAutomationWeekdays(parsed.weekdays);
  const isEveryDay = sameWeekdays(weekdays, AUTOMATION_WEEKDAYS);

  if (parsed.freq === "MINUTELY") {
    return formatMinuteIntervalSummary({
      intervalMinutes: parsed.interval,
      intl,
      isEveryDay,
      weekdays,
    });
  }

  if (parsed.freq === "HOURLY") {
    return formatHourIntervalSummary({
      intervalHours: parsed.interval,
      intl,
      isEveryDay,
      weekdays,
    });
  }

  if (parsed.freq !== "DAILY" && parsed.freq !== "WEEKLY") return null;

  const timeLabel = formatScheduleTimeLabel(parsed.time, intl);
  return timeLabel
    ? formatDailySummary({ intl, isEveryDay, timeLabel, weekdays })
    : null;
}

function formatDailySummary({
  intl,
  isEveryDay,
  timeLabel,
  weekdays,
}: {
  intl: AutomationIntl;
  isEveryDay: boolean;
  timeLabel: string;
  weekdays: AutomationWeekday[];
}): string | null {
  const isBusinessDays = sameWeekdays(weekdays, AUTOMATION_BUSINESS_DAYS);
  const isWeekendDays = sameWeekdays(weekdays, AUTOMATION_WEEKEND_DAYS);

  if (isEveryDay) {
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.daily",
        defaultMessage: "Daily at {time}",
        description: "Automation schedule summary for daily schedule every day",
      },
      { time: timeLabel },
    );
  }

  if (isBusinessDays) {
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekdays",
        defaultMessage: "Weekdays at {time}",
        description:
          "Automation schedule summary for daily schedule on weekdays",
      },
      { time: timeLabel },
    );
  }

  if (isWeekendDays) {
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekends",
        defaultMessage: "Weekends at {time}",
        description:
          "Automation schedule summary for daily schedule on weekends",
      },
      { time: timeLabel },
    );
  }

  const daysLabel = formatWeekdayList(weekdays, intl, "long");
  return daysLabel
    ? intl.formatMessage(
        {
          id: "settings.automations.scheduleSummary.weekly",
          defaultMessage: "{days} at {time}",
          description: "Automation schedule summary for weekly schedule",
        },
        { days: daysLabel, time: timeLabel },
      )
    : null;
}
