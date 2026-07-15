// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Localized schedule-summary helpers that were shared through the onboarding facade.
import {
  parseRruleSchedule,
  scheduleFormToRruleString,
  type ParsedRruleSchedule,
  type ScheduleForm,
} from "../settings/automations/schedule-form";
import { RRule } from "../settings/automations/schedule-rrule-helpers";
import {
  formatTimeLabel,
  formatWeekdaysLabel,
  normalizeWeekdays,
  weekdaySetsEqual,
  type ScheduleIntl,
  type WeekdayToken,
} from "../settings/automations/schedule-weekdays";

export const MINUTES_PER_HOUR = 60;
export const MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;
export const MINUTES_PER_WEEK = 7 * MINUTES_PER_DAY;
export const MINUTES_PER_MONTH = 30 * MINUTES_PER_DAY;
export const MINUTES_PER_YEAR = 365 * MINUTES_PER_DAY;

const BUSINESS_DAYS: WeekdayToken[] = ["MO", "TU", "WE", "TH", "FR"];
const WEEKEND_DAYS: WeekdayToken[] = ["SU", "SA"];

export function formatIntervalLabel(
  intervalMinutes: number,
  intl: ScheduleIntl,
): string {
  if (intervalMinutes === 1) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalMinute",
      defaultMessage: "Every minute",
      description: "Automation schedule summary for one-minute interval",
    });
  }

  if (intervalMinutes === MINUTES_PER_HOUR) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalHourly",
      defaultMessage: "Hourly",
      description: "Automation schedule summary for hourly interval",
    });
  }

  if (intervalMinutes === MINUTES_PER_DAY) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalDaily",
      defaultMessage: "Daily",
      description: "Automation schedule summary for daily interval",
    });
  }

  if (intervalMinutes === MINUTES_PER_WEEK) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalWeekly",
      defaultMessage: "Weekly",
      description: "Automation schedule summary for weekly interval",
    });
  }

  if (intervalMinutes % MINUTES_PER_HOUR === 0) {
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.interval",
        defaultMessage: "Every {count}h",
        description: "Automation schedule summary for hourly interval",
      },
      { count: intervalMinutes / MINUTES_PER_HOUR },
    );
  }

  return intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalMinutes",
      defaultMessage: "Every {count}m",
      description: "Automation schedule summary for minute interval",
    },
    { count: intervalMinutes },
  );
}

export function formatScheduleSummary({
  intervalLabel,
  intl,
  isEveryDay,
  weekdays,
}: {
  intervalLabel: string;
  intl: ScheduleIntl;
  isEveryDay: boolean;
  weekdays: WeekdayToken[];
}): string | null {
  if (isEveryDay) return intervalLabel;
  const daysLabel = formatWeekdaysLabel(
    weekdays,
    intl,
    weekdaySetsEqual(weekdays, BUSINESS_DAYS),
    weekdaySetsEqual(weekdays, WEEKEND_DAYS),
    "short",
  );
  return daysLabel == null
    ? null
    : intl.formatMessage(
        {
          id: "settings.automations.scheduleSummary.intervalDays",
          defaultMessage: "{interval} on {days}",
          description:
            "Automation schedule summary for interval schedule with weekday selection",
        },
        { interval: intervalLabel, days: daysLabel },
      );
}

export function summarizeMinuteInterval({
  intervalMinutes,
  intl,
  isEveryDay,
  weekdays,
}: {
  intervalMinutes: number;
  intl: ScheduleIntl;
  isEveryDay: boolean;
  weekdays: WeekdayToken[];
}): string | null {
  return formatScheduleSummary({
    intervalLabel: formatIntervalLabel(intervalMinutes, intl),
    intl,
    isEveryDay,
    weekdays,
  });
}

export function summarizeTimeOfDay({
  intl,
  isEveryDay,
  timeLabel,
  weekdays,
}: {
  intl: ScheduleIntl;
  isEveryDay: boolean;
  timeLabel: string;
  weekdays: WeekdayToken[];
}): string | null {
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

  if (weekdaySetsEqual(weekdays, BUSINESS_DAYS)) {
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

  if (weekdaySetsEqual(weekdays, WEEKEND_DAYS)) {
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

  const daysLabel = formatWeekdaysLabel(weekdays, intl, false, false, "long");
  return daysLabel == null
    ? null
    : intl.formatMessage(
        {
          id: "settings.automations.scheduleSummary.weekly",
          defaultMessage: "{days} at {time}",
          description: "Automation schedule summary for weekly schedule",
        },
        { days: daysLabel, time: timeLabel },
      );
}

export function formatRruleSummary({
  rrule,
  intl,
  fallbackMessage,
}: {
  fallbackMessage: string | null;
  intl: ScheduleIntl;
  rrule?: string | null;
}): string | null {
  return rrule
    ? (summarizeParsedSchedule(parseRruleSchedule(rrule), intl) ??
        fallbackMessage)
    : null;
}

export function summarizeScheduleForm(
  form: ScheduleForm,
  intl: ScheduleIntl,
): string | null {
  return summarizeParsedSchedule(
    parseRruleSchedule(scheduleFormToRruleString(form)),
    intl,
  );
}

function summarizeParsedSchedule(
  parsed: ParsedRruleSchedule | null,
  intl: ScheduleIntl,
): string | null {
  if (!parsed || parsed.hasMultipleTimeValues) return null;
  const weekdays = normalizeWeekdays(parsed.weekdays);
  const isEveryDay = weekdays.length === 7;

  if (parsed.freq === RRule.MINUTELY) {
    return summarizeMinuteInterval({
      intervalMinutes: parsed.interval,
      intl,
      isEveryDay,
      weekdays,
    });
  }

  if (parsed.freq === RRule.HOURLY) {
    return formatScheduleSummary({
      intervalLabel: formatIntervalLabel(
        parsed.interval * MINUTES_PER_HOUR,
        intl,
      ),
      intl,
      isEveryDay,
      weekdays,
    });
  }

  if (parsed.freq !== RRule.DAILY && parsed.freq !== RRule.WEEKLY) return null;
  const timeLabel = formatTimeLabel(parsed.time, intl);
  return timeLabel
    ? summarizeTimeOfDay({ intl, isEveryDay, timeLabel, weekdays })
    : null;
}
