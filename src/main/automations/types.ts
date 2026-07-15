// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared automation scheduler helper types.

export type AutomationScheduleKind = "interval" | "wall_clock";

export type AutomationLike = {
  id: string;
  lastRunAt?: number | null;
  prompt: string;
  rrule?: string | null;
  targetThreadId?: string | null;
};

export type AutomationThreadLike = {
  updatedAt?: number | null;
};

export type AutomationScheduleSnapshot = {
  intervalMs: number | null;
  nextScheduledRunAt: number | null;
  scheduleKind: AutomationScheduleKind;
};

export type ParseAutomationIntervalMs = (
  rrule: string | null | undefined,
) => number | null;

export type ResolveNextWallClockRunAt = (options: {
  automation?: AutomationLike;
  now: number;
  rrule: string | null | undefined;
}) => number | null;

export type DeveloperInstructionWrapper = (options: {
  baseInstructions?: string | null;
}) => string;

export type CollaborationModeWithSettings = {
  settings: Record<string, unknown> & {
    developer_instructions?: string | null;
  };
};

export type HeartbeatRendererState = {
  isEligible: boolean;
  reason?: string | null;
  updatedAtMs: number;
};

export type ThreadActiveStatus = {
  activeFlags: string[];
  type: "active";
};

export type ThreadStatusLike = ThreadActiveStatus | { type: string };

export type HeartbeatThreadBlockReason =
  | "active_recent_rollout_activity"
  | "active_with_flags"
  | "active_without_rollout_path"
  | "active_without_terminal_event"
  | "waiting_on_approval"
  | "waiting_on_user_input";

export type RolloutTerminalEvent =
  | "event_msg"
  | "item"
  | "response_item"
  | "task_complete"
  | "unknown"
  | string;
