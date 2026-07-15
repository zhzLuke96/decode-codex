// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Automation schedule form state <-> RRULE-string conversion and parsing helpers.

import type { ScheduleForm, ScheduleFormMode } from "./schedule-form-types";
import {
  detectScheduleMode,
  hourlyIntervalRruleString,
  minuteIntervalRruleString,
  normalizeIntervalHours,
  normalizeIntervalMinutes,
  parseRruleSchedule,
  scheduleIntervalMinutes,
  weeklyRruleString,
} from "./schedule-rrule";
import {
  ALL_WEEKDAYS,
  DEFAULT_SCHEDULE_TIME,
  WEEKDAYS_MONDAY_TO_FRIDAY,
  representativeWeekday,
  parseScheduleTime,
  isValidRruleText,
} from "./schedule-rrule-helpers";

export type {
  ParsedRruleSchedule,
  ScheduleForm,
  ScheduleFormMode,
} from "./schedule-form-types";
export {
  detectScheduleMode,
  hasOnlyKnownOptions,
  hourlyIntervalRruleString,
  minuteIntervalRruleString,
  normalizeIntervalHours,
  normalizeIntervalMinutes,
  parseRruleSchedule,
  scheduleIntervalMinutes,
  weeklyRruleString,
} from "./schedule-rrule";

export function createDefaultDailyScheduleForm(): ScheduleForm {
  return {
    mode: "daily",
    intervalHours: 24,
    intervalMinutes: null,
    weekdays: ALL_WEEKDAYS,
    time: DEFAULT_SCHEDULE_TIME,
    customRrule: "",
  };
}

export function createDefaultHourlyScheduleForm(): ScheduleForm {
  return {
    ...createDefaultDailyScheduleForm(),
    mode: "hourly",
    intervalHours: 1,
    intervalMinutes: 30,
    weekdays: ALL_WEEKDAYS,
    customRrule: "",
  };
}

export function scheduleFormToRruleString(form: ScheduleForm): string {
  switch (form.mode) {
    case "hourly":
      return form.intervalMinutes == null
        ? hourlyIntervalRruleString(form.intervalHours)
        : minuteIntervalRruleString(form.intervalMinutes);
    case "daily":
      return weeklyRruleString({ time: form.time, weekdays: ALL_WEEKDAYS });
    case "weekdays":
      return weeklyRruleString({
        time: form.time,
        weekdays: Array.from(WEEKDAYS_MONDAY_TO_FRIDAY),
      });
    case "weekly":
      return weeklyRruleString({
        time: form.time,
        weekdays: [representativeWeekday(form.weekdays)],
      });
    case "custom":
      return form.customRrule.trim();
  }
}

export function scheduleFormFromRrule(
  rruleText: string | null | undefined,
): ScheduleForm {
  const form = createDefaultDailyScheduleForm();
  const parsed = parseRruleSchedule(rruleText);
  if (!parsed) return form;
  const mode = detectScheduleMode(parsed);
  return {
    ...form,
    mode,
    intervalHours: parsed.interval,
    intervalMinutes: null,
    weekdays: parsed.weekdays,
    time: parsed.time,
    customRrule: mode === "custom" ? parsed.rruleText : "",
  };
}

export function hourlyScheduleFormFromRrule(
  rruleText: string | null | undefined,
): ScheduleForm {
  const form = createDefaultHourlyScheduleForm();
  const parsed = parseRruleSchedule(rruleText);
  if (!parsed) return form;
  const intervalMinutes = scheduleIntervalMinutes(parsed);
  if (intervalMinutes == null) {
    const mode = detectScheduleMode(parsed);
    return mode === "daily" || mode === "weekdays" || mode === "weekly"
      ? { ...form, mode, weekdays: parsed.weekdays, time: parsed.time }
      : mode === "custom"
        ? { ...form, mode, customRrule: parsed.rruleText }
        : form;
  }
  return {
    ...form,
    intervalHours: Math.max(1, Math.round(intervalMinutes / 60)),
    intervalMinutes,
  };
}

export function isScheduleFormValid(form: ScheduleForm): boolean {
  switch (form.mode) {
    case "hourly":
      return form.intervalMinutes == null
        ? normalizeIntervalHours(form.intervalHours) != null
        : normalizeIntervalMinutes(form.intervalMinutes) != null;
    case "daily":
    case "weekdays":
    case "weekly":
      return parseScheduleTime(form.time) != null;
    case "custom":
      return isValidRruleText(form.customRrule.trim());
  }
}

export function convertScheduleFormMode(
  form: ScheduleForm,
  mode: ScheduleFormMode,
): ScheduleForm {
  if (mode === "custom") {
    return {
      ...form,
      mode: "custom",
      customRrule:
        form.mode === "custom" && form.customRrule.trim()
          ? form.customRrule
          : scheduleFormToRruleString(form),
    };
  }
  if (mode === "hourly") {
    return {
      ...form,
      mode: "hourly",
      intervalHours:
        form.mode === "hourly"
          ? (normalizeIntervalHours(form.intervalHours) ?? 1)
          : 1,
      intervalMinutes:
        form.intervalMinutes == null
          ? null
          : (normalizeIntervalMinutes(form.intervalMinutes) ?? 30),
    };
  }
  if (mode === "daily") {
    return { ...form, mode: "daily", weekdays: ALL_WEEKDAYS };
  }
  if (mode === "weekdays") {
    return {
      ...form,
      mode: "weekdays",
      weekdays: Array.from(WEEKDAYS_MONDAY_TO_FRIDAY),
    };
  }
  return {
    ...form,
    mode: "weekly",
    weekdays: [representativeWeekday(form.weekdays)],
  };
}
