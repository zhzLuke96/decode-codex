// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Maps automation definitions to analytics/telemetry property objects (with protobuf enum encoding).

import { RRule } from "rrule";
import { parseRruleSchedule } from "./schedule-form";
import {
  AutomationKindProto,
  AutomationStatusProto,
  ReasoningEffortProto,
  ExecutionEnvironmentProto,
  ScheduleFrequencyProto,
  isKnownReasoningEffort,
} from "../../boundaries/onboarding-commons-externals.facade";

export type AutomationKind = "cron" | "heartbeat";
export type AutomationStatus = "ACTIVE" | "PAUSED" | "DELETED";
export type ReasoningEffort =
  | "none"
  | "minimal"
  | "low"
  | "medium"
  | "high"
  | "xhigh"
  | "max"
  | "ultra";
export type ExecutionEnvironment = "worktree" | "local";

export interface AutomationTelemetryInput {
  kind: AutomationKind;
  status?: AutomationStatus;
  rrule: string | null | undefined;
  model?: unknown;
  reasoningEffort?: ReasoningEffort | null;
  cwds: unknown[];
  executionEnvironment: ExecutionEnvironment;
  localEnvironmentConfigPath?: string | null;
}

export function toAutomationKindProto(
  kind: AutomationKind,
): number | undefined {
  switch (kind) {
    case "cron":
      return AutomationKindProto.CODEX_AUTOMATION_KIND_CRON;
    case "heartbeat":
      return AutomationKindProto.CODEX_AUTOMATION_KIND_HEARTBEAT;
  }
}

export function toAutomationStatusProto(
  status: AutomationStatus,
): number | undefined {
  switch (status) {
    case "ACTIVE":
      return AutomationStatusProto.CODEX_AUTOMATION_STATUS_ACTIVE;
    case "PAUSED":
      return AutomationStatusProto.CODEX_AUTOMATION_STATUS_PAUSED;
    case "DELETED":
      return AutomationStatusProto.CODEX_AUTOMATION_STATUS_DELETED;
  }
}

export function toReasoningEffortProto(
  reasoningEffort: ReasoningEffort,
): number | undefined {
  if (isKnownReasoningEffort(reasoningEffort)) {
    switch (reasoningEffort) {
      case "none":
        return ReasoningEffortProto.CODEX_AUTOMATION_REASONING_EFFORT_NONE;
      case "minimal":
        return ReasoningEffortProto.CODEX_AUTOMATION_REASONING_EFFORT_MINIMAL;
      case "low":
        return ReasoningEffortProto.CODEX_AUTOMATION_REASONING_EFFORT_LOW;
      case "medium":
        return ReasoningEffortProto.CODEX_AUTOMATION_REASONING_EFFORT_MEDIUM;
      case "high":
        return ReasoningEffortProto.CODEX_AUTOMATION_REASONING_EFFORT_HIGH;
      case "xhigh":
        return ReasoningEffortProto.CODEX_AUTOMATION_REASONING_EFFORT_XHIGH;
      case "max":
        return ReasoningEffortProto.CODEX_AUTOMATION_REASONING_EFFORT_MAX;
      case "ultra":
        return;
    }
  }
}

export function toExecutionEnvironmentProto(
  environment: ExecutionEnvironment,
): number | undefined {
  switch (environment) {
    case "worktree":
      return ExecutionEnvironmentProto.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_WORKTREE;
    case "local":
      return ExecutionEnvironmentProto.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_LOCAL;
  }
}

export function toScheduleFrequencyProto(freq: number): number | undefined {
  switch (freq) {
    case RRule.SECONDLY:
      return ScheduleFrequencyProto.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_SECONDLY;
    case RRule.MINUTELY:
      return ScheduleFrequencyProto.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MINUTELY;
    case RRule.HOURLY:
      return ScheduleFrequencyProto.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_HOURLY;
    case RRule.DAILY:
      return ScheduleFrequencyProto.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_DAILY;
    case RRule.WEEKLY:
      return ScheduleFrequencyProto.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_WEEKLY;
    case RRule.MONTHLY:
      return ScheduleFrequencyProto.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MONTHLY;
    case RRule.YEARLY:
      return ScheduleFrequencyProto.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_YEARLY;
  }
}

export function rruleScheduleFrequencyProperty(
  rruleText: string | null | undefined,
): { scheduleFreq?: number } {
  const parsed = parseRruleSchedule(rruleText);
  if (parsed == null) return {};
  const scheduleFreq = toScheduleFrequencyProto(parsed.freq);
  return scheduleFreq == null ? {} : { scheduleFreq };
}

export function getAutomationTelemetryProperties(
  automation: AutomationTelemetryInput,
): Record<string, unknown> {
  const reasoningEffort =
    automation.reasoningEffort == null
      ? undefined
      : toReasoningEffortProto(automation.reasoningEffort);
  const baseProperties: Record<string, unknown> = {
    kind: toAutomationKindProto(automation.kind),
    ...("status" in automation && automation.status !== undefined
      ? { status: toAutomationStatusProto(automation.status) }
      : {}),
    ...rruleScheduleFrequencyProperty(automation.rrule),
    hasModel: automation.model != null,
    reasoningEffort,
  };
  if (automation.kind !== "cron") return baseProperties;
  const cronProperties: Record<string, unknown> = {
    ...baseProperties,
    cwdCount: automation.cwds.length,
    executionEnvironment: toExecutionEnvironmentProto(
      automation.executionEnvironment,
    ),
  };
  if (automation.localEnvironmentConfigPath !== undefined) {
    cronProperties.hasLocalEnvironmentConfig =
      automation.localEnvironmentConfigPath != null;
  }
  return cronProperties;
}
