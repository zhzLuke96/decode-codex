// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers for comparing persisted automation records against derived payloads
// to detect whether a saved automation is still in sync with local state.
import { isHeartbeatAutomation } from "../boundaries/src-l0hb-mz-p";

type AutomationKind = "cron" | "heartbeat";
type AutomationStatus = "ACTIVE" | "PAUSED" | "DELETED" | string;

interface AutomationRecord {
  id: string;
  kind: AutomationKind;
  name: string;
  prompt: string;
  status: AutomationStatus;
  rrule: string | null;
  cwds: string[];
  executionEnvironment: string | null;
  localEnvironmentConfigPath: string | null;
  targetThreadId: string | null;
  model: string | null;
  reasoningEffort: string | null;
}

interface AutomationComparable {
  id: string;
  kind: AutomationKind;
  name: string;
  prompt: string;
  status: AutomationStatus;
  rrule: string | null;
  cwds?: string[];
  executionEnvironment?: string | null;
  localEnvironmentConfigPath?: string | null;
  targetThreadId?: string | null;
  model?: string | null;
  reasoningEffort?: string | null;
}

export function toAutomationRecordWithStatus(
  automation: AutomationRecord,
  status: AutomationStatus,
): AutomationComparable {
  return isHeartbeatAutomation(automation)
    ? {
        id: automation.id,
        kind: "heartbeat",
        name: automation.name,
        prompt: automation.prompt,
        status,
        targetThreadId: automation.targetThreadId,
        model: null,
        reasoningEffort: null,
        rrule: automation.rrule,
      }
    : {
        id: automation.id,
        kind: "cron",
        name: automation.name,
        prompt: automation.prompt,
        status,
        cwds: automation.cwds,
        executionEnvironment: automation.executionEnvironment,
        localEnvironmentConfigPath: automation.localEnvironmentConfigPath,
        model: automation.model,
        reasoningEffort: automation.reasoningEffort,
        rrule: automation.rrule,
      };
}

export function areAutomationRecordsEqual(
  left: AutomationComparable | null,
  right: AutomationComparable | null,
): boolean {
  if (left == null || right == null) {
    return left === right;
  }

  if (
    left.id !== right.id ||
    left.kind !== right.kind ||
    left.name !== right.name ||
    left.prompt !== right.prompt ||
    left.status !== right.status ||
    left.rrule !== right.rrule
  ) {
    return false;
  }

  if (left.kind === "heartbeat") {
    return (
      right.kind === "heartbeat" && left.targetThreadId === right.targetThreadId
    );
  }

  return (
    left.model === right.model &&
    left.reasoningEffort === right.reasoningEffort &&
    right.kind === "cron" &&
    left.executionEnvironment === right.executionEnvironment &&
    left.localEnvironmentConfigPath === right.localEnvironmentConfigPath &&
    (left.cwds?.length ?? 0) === (right.cwds?.length ?? 0) &&
    (left.cwds ?? []).every((cwd, index) => cwd === right.cwds?.[index])
  );
}

export function isAutomationRecordInSync(
  automation: AutomationRecord,
  saved: AutomationComparable,
): boolean {
  return saved.status === "DELETED"
    ? false
    : areAutomationRecordsEqual(
        toAutomationRecordWithStatus(automation, saved.status),
        saved,
      );
}
