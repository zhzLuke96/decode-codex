// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds human-readable summary strings for automation schedules (from a form or a raw RRULE).

import { RRule } from "rrule";
import {
  normalizeWeekdays,
  formatTimeLabel,
  WEEKDAY_ORDER,
  type ScheduleIntl,
  type WeekdayToken,
} from "./schedule-weekdays";
import {
  parseRruleSchedule,
  scheduleFormToRruleString,
  type ParsedRruleSchedule,
  type ScheduleForm,
} from "./schedule-form";
import {
  MINUTES_PER_HOUR,
  formatIntervalLabel,
  formatScheduleSummary,
  summarizeMinuteInterval,
  summarizeTimeOfDay,
} from "../../boundaries/onboarding-commons-externals.facade";

function summarizeHourlyInterval({
  intervalHours,
  intl,
  isEveryDay,
  weekdays,
}: {
  intervalHours: number;
  intl: ScheduleIntl;
  isEveryDay: boolean;
  weekdays: WeekdayToken[];
}): string | null {
  return formatScheduleSummary({
    intervalLabel: formatIntervalLabel(intervalHours * MINUTES_PER_HOUR, intl),
    intl,
    isEveryDay,
    weekdays,
  });
}

export function summarizeParsedSchedule(
  parsed: ParsedRruleSchedule | null,
  intl: ScheduleIntl,
): string | null {
  if (!parsed || parsed.hasMultipleTimeValues) return null;
  const weekdays = normalizeWeekdays(parsed.weekdays);
  const isEveryDay = weekdays.length === WEEKDAY_ORDER.length;
  if (parsed.freq === RRule.MINUTELY) {
    return summarizeMinuteInterval({
      intervalMinutes: parsed.interval,
      intl,
      isEveryDay,
      weekdays,
    });
  }
  if (parsed.freq === RRule.HOURLY) {
    return summarizeHourlyInterval({
      intervalHours: parsed.interval,
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

export function summarizeScheduleForm(
  form: ScheduleForm,
  intl: ScheduleIntl,
): string | null {
  return (
    summarizeParsedSchedule(
      parseRruleSchedule(scheduleFormToRruleString(form)),
      intl,
    ) ?? null
  );
}

export function summarizeRrule({
  rrule,
  intl,
  fallbackMessage,
}: {
  rrule: string | null | undefined;
  intl: ScheduleIntl;
  fallbackMessage: string | null;
}): string | null {
  return rrule
    ? (summarizeParsedSchedule(parseRruleSchedule(rrule), intl) ??
        fallbackMessage)
    : null;
}
