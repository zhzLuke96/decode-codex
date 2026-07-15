// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Heartbeat renderer state and rollout activity helpers.

import { open } from "node:fs/promises";
import {
  HEARTBEAT_RENDERER_STATE_TTL_MS,
  RECENT_ROLLOUT_ACTIVITY_EVENTS,
  ROLLOUT_TAIL_READ_BYTES,
  ROLLOUT_TERMINAL_EVENTS,
} from "./constants";
import type {
  HeartbeatRendererState,
  HeartbeatThreadBlockReason,
  RolloutTerminalEvent,
  ThreadStatusLike,
} from "./types";

export function getFreshHeartbeatRendererState({
  maxAgeMs = HEARTBEAT_RENDERER_STATE_TTL_MS,
  now = Date.now(),
  rendererStates,
  threadId,
}: {
  maxAgeMs?: number;
  now?: number;
  rendererStates: Map<string, HeartbeatRendererState>;
  threadId: string;
}): HeartbeatRendererState | null {
  const state = rendererStates.get(threadId);
  if (state == null) return null;
  if (now - state.updatedAtMs <= maxAgeMs) return state;
  rendererStates.delete(threadId);
  return null;
}

export function getHeartbeatRendererBlockReason({
  expectedThreadId,
  now = Date.now(),
  rendererStates,
}: {
  expectedThreadId: string;
  now?: number;
  rendererStates: Map<string, HeartbeatRendererState>;
}): string | null {
  const state = getFreshHeartbeatRendererState({
    now,
    rendererStates,
    threadId: expectedThreadId,
  });
  return state == null || state.isEligible
    ? null
    : (state.reason ?? "renderer_ineligible");
}

export function getHeartbeatCollaborationMode<T>(
  collaborationModes: Map<string, T>,
  threadId: string,
): T | null {
  return collaborationModes.get(threadId) ?? null;
}

export async function classifyHeartbeatThreadState({
  readLastRolloutEvent = readLastRolloutTerminalEvent,
  rolloutPath,
  status,
}: {
  readLastRolloutEvent?: (
    rolloutPath: string,
  ) => Promise<RolloutTerminalEvent | null>;
  rolloutPath?: string | null;
  status: ThreadStatusLike;
}): Promise<HeartbeatThreadBlockReason | null> {
  if (status.type !== "active") return null;
  const activeFlags = Array.isArray(
    (status as { activeFlags?: unknown }).activeFlags,
  )
    ? ((status as { activeFlags: string[] }).activeFlags ?? [])
    : [];
  if (activeFlags.includes("waitingOnUserInput"))
    return "waiting_on_user_input";
  if (activeFlags.includes("waitingOnApproval")) return "waiting_on_approval";
  if (activeFlags.length > 0) return "active_with_flags";
  if (rolloutPath == null || rolloutPath.trim().length === 0) {
    return "active_without_rollout_path";
  }
  const lastEvent = await readLastRolloutEvent(rolloutPath);
  if (lastEvent == null) return "active_without_terminal_event";
  if (lastEvent === "task_complete") return null;
  return RECENT_ROLLOUT_ACTIVITY_EVENTS.has(lastEvent)
    ? "active_recent_rollout_activity"
    : "active_without_terminal_event";
}

export async function readLastRolloutTerminalEvent(
  rolloutPath: string,
): Promise<RolloutTerminalEvent | null> {
  let file: Awaited<ReturnType<typeof open>> | null = null;
  try {
    file = await open(rolloutPath, "r");
    const stats = await file.stat();
    if (stats.size === 0) return null;
    const bytesToRead = Math.min(stats.size, ROLLOUT_TAIL_READ_BYTES);
    const buffer = Buffer.alloc(bytesToRead);
    await file.read(buffer, 0, bytesToRead, stats.size - bytesToRead);
    const lines = buffer.toString("utf8").split("\n");
    if (stats.size > bytesToRead) lines.shift();
    let lastEvent: RolloutTerminalEvent | null = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        const parsed = JSON.parse(trimmed) as { event?: unknown };
        if (
          typeof parsed.event === "string" &&
          ROLLOUT_TERMINAL_EVENTS.has(parsed.event)
        ) {
          lastEvent = parsed.event;
        }
      } catch {}
    }
    return lastEvent;
  } catch {
    return null;
  } finally {
    await file?.close().catch(() => undefined);
  }
}
