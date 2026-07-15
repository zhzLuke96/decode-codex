// Restored from ref/webview/assets/profile-queries-BWvaDOFi.js
// profile-queries-BWvaDOFi chunk restored from the Codex webview bundle.
export type DailyProfileUsage = {
  credits: number;
  date: string;
};
export type ProfileUsageView = "cumulative" | "daily" | "weekly";
export type ProfileUsageSummary = {
  currentStreakDays: number | null;
  longestStreakDays: number | null;
  longestTaskDurationMs: number | null;
  peakTokens: number | null;
  totalTextTokens: number | null;
};
export type ProfileActivityInsights = {
  fastModePercent: number | null | undefined;
  invocations: unknown;
  reasoningEffort: string | null | undefined;
  reasoningEffortPercent: number | null | undefined;
  skillsExplored: number | null | undefined;
  totalSkillsUsed: number | null | undefined;
  totalThreads: number | null | undefined;
};
export type ProfileUsageData = {
  activityInsights: ProfileActivityInsights;
  dailyUsage: DailyProfileUsage[] | null;
  displayName: string | null;
  hasStatsError: boolean;
  imageUrl: string | null;
  summary: ProfileUsageSummary;
  username: string | null;
};
export type ProfileIdentity = {
  accountId?: string | null;
  userId?: string | null;
};
export type ProfileUsageQueryOptions = ProfileIdentity & {
  enabled: boolean;
};
export type ProfileUpdateInput = {
  displayName?: string | null;
  photo?: File | null;
};
export type ProfileUsernameValidationReason =
  | "empty"
  | "invalidCharacters"
  | "tooLong"
  | "tooShort";
export type ProfileUsernameValidationResult =
  | {
      ok: true;
      username: string;
    }
  | {
      ok: false;
      reason: ProfileUsernameValidationReason;
    };
export type IntlProfileFormatter = {
  formatMessage(
    descriptor: {
      defaultMessage: string;
      description: string;
      id: string;
    },
    values?: Record<string, number>,
  ): string;
  formatNumber(value: number, options: Intl.NumberFormatOptions): string;
};
export type WhamProfileResponse = {
  metadata: {
    stats_error?: string | null;
  };
  profile: {
    display_name?: string | null;
    profile_picture_url?: string | null;
    username?: string | null;
  };
  stats: {
    current_streak_days?: number | null;
    daily_usage_buckets?: Array<{
      start_date: string;
      tokens: number;
    }> | null;
    fast_mode_usage_percentage?: number | null;
    lifetime_tokens?: number | null;
    longest_running_turn_sec?: number | null;
    longest_streak_days?: number | null;
    most_used_reasoning_effort?: string | null;
    most_used_reasoning_effort_percentage?: number | null;
    peak_daily_tokens?: number | null;
    top_invocations?: unknown;
    total_skills_used?: number | null;
    total_threads?: number | null;
    unique_skills_used?: number | null;
  };
};
export type QueryClientLike = {
  getQueryData<T>(queryKey: readonly unknown[]): T | undefined;
  setQueryData<T>(queryKey: readonly unknown[], value: T): void;
};
