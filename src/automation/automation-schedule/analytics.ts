// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Product analytics attributes derived from scheduled task records.

import {
  automationKindValues,
  automationStatusValues,
  executionEnvironmentValues,
  reasoningEffortValues,
  scheduleFrequencyValues,
} from "../../runtime/automation-schedule-runtime";
import { isAutomationReasoningEffort } from "./model-defaults";
import { parseAutomationRruleForAnalytics } from "./schedule";
import type { AutomationForAnalytics } from "./types";

export function getAutomationAnalyticsProperties(
  automation: AutomationForAnalytics,
): Record<string, unknown> {
  const reasoningEffort = mapReasoningEffort(automation.reasoningEffort);
  const scheduleFreq = mapScheduleFrequency(automation.rrule);
  const properties: Record<string, unknown> = {
    kind: mapAutomationKind(automation.kind),
    ...(automation.status == null
      ? {}
      : { status: mapAutomationStatus(automation.status) }),
    ...(scheduleFreq == null ? {} : { scheduleFreq }),
    hasModel: automation.model != null,
    ...(reasoningEffort == null ? {} : { reasoningEffort }),
  };

  if (automation.kind !== "cron") return properties;

  return {
    ...properties,
    cwdCount: automation.cwds?.length ?? 0,
    executionEnvironment: mapExecutionEnvironment(
      automation.executionEnvironment,
    ),
    ...(automation.localEnvironmentConfigPath === undefined
      ? {}
      : {
          hasLocalEnvironmentConfig:
            automation.localEnvironmentConfigPath != null,
        }),
  };
}

function mapAutomationKind(kind: AutomationForAnalytics["kind"]): unknown {
  switch (kind) {
    case "cron":
      return automationKindValues.CODEX_AUTOMATION_KIND_CRON;
    case "heartbeat":
      return automationKindValues.CODEX_AUTOMATION_KIND_HEARTBEAT;
  }
}

function mapAutomationStatus(status: string): unknown {
  switch (status) {
    case "ACTIVE":
      return automationStatusValues.CODEX_AUTOMATION_STATUS_ACTIVE;
    case "PAUSED":
      return automationStatusValues.CODEX_AUTOMATION_STATUS_PAUSED;
    case "DELETED":
      return automationStatusValues.CODEX_AUTOMATION_STATUS_DELETED;
  }
}

function mapReasoningEffort(reasoningEffort: unknown): unknown {
  if (!isAutomationReasoningEffort(reasoningEffort)) return undefined;

  switch (reasoningEffort) {
    case "none":
      return reasoningEffortValues.CODEX_AUTOMATION_REASONING_EFFORT_NONE;
    case "minimal":
      return reasoningEffortValues.CODEX_AUTOMATION_REASONING_EFFORT_MINIMAL;
    case "low":
      return reasoningEffortValues.CODEX_AUTOMATION_REASONING_EFFORT_LOW;
    case "medium":
      return reasoningEffortValues.CODEX_AUTOMATION_REASONING_EFFORT_MEDIUM;
    case "high":
      return reasoningEffortValues.CODEX_AUTOMATION_REASONING_EFFORT_HIGH;
    case "xhigh":
      return reasoningEffortValues.CODEX_AUTOMATION_REASONING_EFFORT_XHIGH;
    case "max":
      return reasoningEffortValues.CODEX_AUTOMATION_REASONING_EFFORT_MAX;
  }
}

function mapExecutionEnvironment(
  executionEnvironment: AutomationForAnalytics["executionEnvironment"],
): unknown {
  switch (executionEnvironment) {
    case "worktree":
      return executionEnvironmentValues.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_WORKTREE;
    case "local":
      return executionEnvironmentValues.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_LOCAL;
  }
}

function mapScheduleFrequency(rrule: AutomationForAnalytics["rrule"]): unknown {
  switch (parseAutomationRruleForAnalytics(rrule)) {
    case "SECONDLY":
      return scheduleFrequencyValues.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_SECONDLY;
    case "MINUTELY":
      return scheduleFrequencyValues.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MINUTELY;
    case "HOURLY":
      return scheduleFrequencyValues.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_HOURLY;
    case "DAILY":
      return scheduleFrequencyValues.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_DAILY;
    case "WEEKLY":
      return scheduleFrequencyValues.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_WEEKLY;
    case "MONTHLY":
      return scheduleFrequencyValues.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MONTHLY;
    case "YEARLY":
      return scheduleFrequencyValues.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_YEARLY;
  }
}
