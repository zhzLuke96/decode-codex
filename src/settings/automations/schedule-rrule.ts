// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// RRULE parsing and formatting helpers for automation schedule forms.

import {
  sortWeekdays,
  weekdaySetsEqual,
  type WeekdayToken,
} from "./schedule-weekdays";
import type {
  ParsedRruleSchedule,
  ScheduleFormMode,
} from "./schedule-form-types";
import {
  ALL_WEEKDAYS,
  DAILY_WEEKLY_STANDALONE_OPTION_KEYS,
  DEFAULT_SCHEDULE_TIME,
  formatRruleTime,
  HOURLY_STANDALONE_OPTION_KEYS,
  MINUTELY_STANDALONE_OPTION_KEYS,
  normalizeRruleMinute,
  parseScheduleTime,
  RRULE_WEEKDAY_BY_TOKEN,
  RRule,
  WEEKDAYS_MONDAY_TO_FRIDAY,
  weekdaysFromByweekday,
  weekdaysFromRruleText,
  currentTimeZoneId,
  rrulestr,
} from "./schedule-rrule-helpers";

export function normalizeIntervalHours(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const rounded = Math.round(value);
  return rounded < 1 ? null : rounded;
}

export function normalizeIntervalMinutes(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const rounded = Math.round(value);
  return rounded < 1 ? null : rounded;
}

export function hourlyIntervalRruleString(intervalHours: number): string {
  const interval = normalizeIntervalHours(intervalHours) ?? 1;
  return new RRule({
    freq: RRule.HOURLY,
    interval,
    byminute: 0,
    byweekday: ALL_WEEKDAYS.map(
      (token: WeekdayToken) => RRULE_WEEKDAY_BY_TOKEN[token],
    ),
  }).toString();
}

export function minuteIntervalRruleString(intervalMinutes: number): string {
  const interval = normalizeIntervalMinutes(intervalMinutes) ?? 30;
  return new RRule({ freq: RRule.MINUTELY, interval }).toString();
}

export function weeklyRruleString({
  time,
  weekdays,
}: {
  time: string;
  weekdays: WeekdayToken[];
}): string {
  const parsedTime =
    parseScheduleTime(time) ?? parseScheduleTime(DEFAULT_SCHEDULE_TIME);
  return parsedTime
    ? new RRule({
        freq: RRule.WEEKLY,
        byhour: parsedTime.hour,
        byminute: parsedTime.minute,
        byweekday: sortWeekdays(weekdays).map(
          (token) => RRULE_WEEKDAY_BY_TOKEN[token],
        ),
      }).toString()
    : "";
}

export function parseRruleSchedule(
  rruleText: string | null | undefined,
): ParsedRruleSchedule | null {
  if (!rruleText) return null;
  try {
    const ruleSet = rrulestr(rruleText, {
      forceset: true,
      tzid: currentTimeZoneId() ?? undefined,
    });
    const firstRule = ruleSet.rrules()[0];
    if (!firstRule) return null;
    const options = firstRule.options;
    const weekdays =
      weekdaysFromByweekday(options.byweekday) ??
      weekdaysFromRruleText(rruleText) ??
      ALL_WEEKDAYS;
    return {
      freq: options.freq,
      isStandaloneRrule:
        firstRule.origOptions.dtstart == null &&
        ruleSet.rrules().length === 1 &&
        ruleSet.rdates().length === 0 &&
        ruleSet.exrules().length === 0 &&
        ruleSet.exdates().length === 0,
      hasMultipleTimeValues:
        (Array.isArray(options.byhour) && options.byhour.length > 1) ||
        (Array.isArray(options.byminute) && options.byminute.length > 1),
      interval: Math.max(1, Math.round(options.interval ?? 1)),
      minute: normalizeRruleMinute(options.byminute),
      origOptions: firstRule.origOptions as Record<string, unknown>,
      rruleText,
      time: formatRruleTime(options.byhour, options.byminute, options),
      weekdays,
    };
  } catch {
    return null;
  }
}

export function hasOnlyKnownOptions(
  parsed: ParsedRruleSchedule,
  allowedKeys: Set<string>,
): boolean {
  return (
    parsed.isStandaloneRrule &&
    Object.keys(parsed.origOptions).every((key) => allowedKeys.has(key))
  );
}

export function scheduleIntervalMinutes(
  parsed: ParsedRruleSchedule,
): number | null {
  if (parsed.hasMultipleTimeValues) return null;
  if (
    parsed.freq === RRule.MINUTELY &&
    hasOnlyKnownOptions(parsed, MINUTELY_STANDALONE_OPTION_KEYS)
  ) {
    return normalizeIntervalMinutes(parsed.interval) ?? 30;
  }
  if (
    parsed.freq === RRule.HOURLY &&
    hasOnlyKnownOptions(parsed, HOURLY_STANDALONE_OPTION_KEYS) &&
    (parsed.minute == null || parsed.minute === 0) &&
    weekdaySetsEqual(parsed.weekdays, ALL_WEEKDAYS)
  ) {
    return (normalizeIntervalHours(parsed.interval) ?? 1) * 60;
  }
  return null;
}

export function detectScheduleMode(
  parsed: ParsedRruleSchedule,
): ScheduleFormMode {
  if (parsed.hasMultipleTimeValues) return "custom";
  if (
    parsed.freq === RRule.HOURLY &&
    hasOnlyKnownOptions(parsed, HOURLY_STANDALONE_OPTION_KEYS) &&
    parsed.interval === 1 &&
    parsed.minute === 0 &&
    weekdaySetsEqual(parsed.weekdays, ALL_WEEKDAYS)
  ) {
    return "hourly";
  }
  if (
    hasOnlyKnownOptions(parsed, DAILY_WEEKLY_STANDALONE_OPTION_KEYS) &&
    parsed.interval === 1 &&
    (parsed.freq === RRule.DAILY || parsed.freq === RRule.WEEKLY)
  ) {
    if (weekdaySetsEqual(parsed.weekdays, ALL_WEEKDAYS)) return "daily";
    if (weekdaySetsEqual(parsed.weekdays, WEEKDAYS_MONDAY_TO_FRIDAY)) {
      return "weekdays";
    }
    if (parsed.weekdays.length === 1) return "weekly";
  }
  return "custom";
}
