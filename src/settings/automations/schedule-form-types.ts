// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared schedule form and parsed RRULE types for automation scheduling.
import type { WeekdayToken } from "./schedule-weekdays";

export type ScheduleFormMode =
  | "hourly"
  | "daily"
  | "weekdays"
  | "weekly"
  | "custom";

export interface ScheduleForm {
  mode: ScheduleFormMode;
  intervalHours: number;
  intervalMinutes: number | null;
  weekdays: WeekdayToken[];
  time: string;
  customRrule: string;
}

export interface ParsedRruleSchedule {
  freq: number;
  isStandaloneRrule: boolean;
  hasMultipleTimeValues: boolean;
  interval: number;
  minute: number | null;
  origOptions: Record<string, unknown>;
  rruleText: string;
  time: string;
  weekdays: WeekdayToken[];
}
