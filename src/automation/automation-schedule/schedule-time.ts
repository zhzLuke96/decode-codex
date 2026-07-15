// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Basic time and interval normalizers for automation RRULE forms.

import type { AutomationScheduleTime } from "./types";

export const DEFAULT_AUTOMATION_TIME = "09:00";
export const DEFAULT_AUTOMATION_WEEKDAY = "MO";

export function normalizeIntervalHours(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const interval = Math.round(value);
  return interval < 1 ? null : interval;
}

export function normalizeIntervalMinutes(value: number): number | null {
  if (!Number.isFinite(value)) return null;
  const interval = Math.round(value);
  return interval < 1 ? null : interval;
}

export function parseAutomationTime(
  time: string,
): AutomationScheduleTime | null {
  const [hourText, minuteText] = time.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return null;
  }

  return { hour, minute };
}

export function formatAutomationTime(hour: number, minute: number): string {
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}
