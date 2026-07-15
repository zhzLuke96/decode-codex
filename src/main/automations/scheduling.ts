// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Automation interval and wall-clock scheduling helpers.

import { HEARTBEAT_RESCHEDULE_DELAY_MS } from "./constants";
import type {
  AutomationLike,
  AutomationScheduleSnapshot,
  AutomationThreadLike,
  ParseAutomationIntervalMs,
  ResolveNextWallClockRunAt,
} from "./types";

export function getMostRecentAutomationActivityMs({
  lastRunAt,
  threadUpdatedAt,
}: {
  lastRunAt?: number | null;
  threadUpdatedAt?: number | null;
}): number | null {
  const candidates = [lastRunAt, threadUpdatedAt].filter(
    (value): value is number => value != null && Number.isFinite(value),
  );
  return candidates.length === 0 ? null : Math.max(...candidates);
}

export function getIntervalHeartbeatCooldownRunAt({
  automation,
  parseIntervalMs,
  thread,
}: {
  automation: AutomationLike;
  parseIntervalMs: ParseAutomationIntervalMs;
  thread: AutomationThreadLike;
}): number | null {
  const intervalMs = parseIntervalMs(automation.rrule);
  if (intervalMs == null) return null;
  const lastActivityAt = getMostRecentAutomationActivityMs({
    lastRunAt: automation.lastRunAt,
    threadUpdatedAt:
      typeof thread.updatedAt === "number" && Number.isFinite(thread.updatedAt)
        ? Number(thread.updatedAt) * 1000
        : null,
  });
  return lastActivityAt == null ? null : lastActivityAt + intervalMs;
}

export function getNextAutomationRunAt({
  automation,
  now,
  parseIntervalMs,
  resolveNextWallClockRunAt,
}: {
  automation: AutomationLike;
  now: number;
  parseIntervalMs: ParseAutomationIntervalMs;
  resolveNextWallClockRunAt: ResolveNextWallClockRunAt;
}): number | null {
  const intervalMs = parseIntervalMs(automation.rrule);
  return intervalMs == null
    ? resolveNextWallClockRunAt({ automation, now, rrule: automation.rrule })
    : now + intervalMs;
}

export function getNextHeartbeatWakeAt({
  nextScheduledRunAt,
  now,
}: {
  nextScheduledRunAt?: number | null;
  now: number;
}): number {
  return nextScheduledRunAt == null
    ? now + HEARTBEAT_RESCHEDULE_DELAY_MS
    : Math.min(nextScheduledRunAt, now + HEARTBEAT_RESCHEDULE_DELAY_MS);
}

export function classifyAutomationSchedule({
  now,
  parseIntervalMs,
  resolveNextWallClockRunAt,
  rrule,
}: {
  now: number;
  parseIntervalMs: ParseAutomationIntervalMs;
  resolveNextWallClockRunAt: ResolveNextWallClockRunAt;
  rrule: string | null | undefined;
}): AutomationScheduleSnapshot {
  const intervalMs = parseIntervalMs(rrule);
  return {
    intervalMs,
    nextScheduledRunAt:
      intervalMs == null
        ? resolveNextWallClockRunAt({ now, rrule })
        : now + intervalMs,
    scheduleKind: intervalMs == null ? "wall_clock" : "interval",
  };
}
