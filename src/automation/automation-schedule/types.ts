// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Shared types for scheduled task RRULE editing and summaries.

export const AUTOMATION_WEEKDAYS = [
  "SU",
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
] as const;

export const AUTOMATION_BUSINESS_DAYS = ["MO", "TU", "WE", "TH", "FR"] as const;

export const AUTOMATION_WEEKEND_DAYS = ["SA", "SU"] as const;

export type AutomationWeekday = (typeof AUTOMATION_WEEKDAYS)[number];

export type AutomationScheduleMode =
  | "hourly"
  | "daily"
  | "weekdays"
  | "weekly"
  | "custom";

export type AutomationScheduleConfig = {
  mode: AutomationScheduleMode;
  intervalHours: number;
  intervalMinutes: number | null;
  weekdays: AutomationWeekday[];
  time: string;
  customRrule: string;
};

export type AutomationScheduleTime = {
  hour: number;
  minute: number;
};

export type AutomationIntl = {
  formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string;
  formatList?(value: string[], options?: Intl.ListFormatOptions): string;
  formatMessage(
    descriptor: {
      id: string;
      defaultMessage: string;
      description?: string;
    },
    values?: Record<string, unknown>,
  ): string;
  formatTime?(value: Date, options?: Intl.DateTimeFormatOptions): string;
};

export type AutomationScheduleSummaryOptions = {
  rrule?: string | null;
  intl: AutomationIntl;
  fallbackMessage?: string;
};

export type AutomationForAnalytics = {
  kind: "cron" | "heartbeat";
  rrule?: string | null;
  model?: unknown;
  reasoningEffort?: string | null;
  status?: "ACTIVE" | "PAUSED" | "DELETED" | string;
  cwds?: unknown[];
  executionEnvironment?: "worktree" | "local" | string;
  localEnvironmentConfigPath?: string | null;
};
