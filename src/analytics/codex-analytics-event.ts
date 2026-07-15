// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Submission of Codex analytics events (turn rating / action / turn diff) to the
// wham analytics-events endpoint for ChatGPT-authenticated sessions. Turn-diff
// payloads that exceed the request size limit are first stripped of their tree
// shas / between-turn diff and, if still oversized, skipped.
import { appLogger as logger } from "../runtime/app-logger";
import {
  analyticsApiClient,
  buildAnalyticsRequestInit,
} from "../boundaries/onboarding-commons-externals.facade";

const ANALYTICS_EVENTS_PATH = "/wham/analytics-events/events";
const MAX_ANALYTICS_REQUEST_BYTES = 1048576;

export type CodexTurnRatingAnalyticsEvent = {
  eventKind: "turn_rating";
  threadId: string;
  turnId: string;
  rating: unknown;
};

export type CodexActionAnalyticsEvent = {
  eventKind: "action";
  threadId: string;
  turnId: string;
  action: unknown;
  metadata: unknown;
};

export type CodexTurnDiffAnalyticsEvent = {
  eventKind: "turn_diff";
  threadId: string;
  sessionId: string;
  turnId: string;
  baseTurnId: string | null;
  baseTurnHeadTreeSha: string | null;
  betweenTurnDiff: string | null;
  completedAtMs: number;
  status: string;
  diffFormat: string;
  baseTreeSha: string | null;
  headTreeSha: string | null;
  diff: string;
};

export type CodexAnalyticsEvent =
  | CodexTurnRatingAnalyticsEvent
  | CodexActionAnalyticsEvent
  | CodexTurnDiffAnalyticsEvent;

type CodexAnalyticsEventEnvelope = {
  event_type: string;
  event_params: Record<string, unknown>;
};

export async function submitCodexAnalyticsEvent(
  event: CodexAnalyticsEvent,
): Promise<void> {
  try {
    switch (event.eventKind) {
      case "turn_rating":
        await postSingleCodexAnalyticsEvent({
          event_type: "codex_turn_rating_event",
          event_params: {
            thread_id: event.threadId,
            turn_id: event.turnId,
            rating: event.rating,
            created_at: Math.floor(Date.now() / 1e3),
          },
        });
        return;
      case "action":
        await postSingleCodexAnalyticsEvent({
          event_type: "codex_action_event",
          event_params: {
            thread_id: event.threadId,
            turn_id: event.turnId,
            action: event.action,
            metadata: JSON.stringify(event.metadata),
            created_at: Math.floor(Date.now() / 1e3),
          },
        });
        return;
      case "turn_diff": {
        const envelope: CodexAnalyticsEventEnvelope = {
          event_type: "codex_turn_diff_event",
          event_params: {
            thread_id: event.threadId,
            session_id: event.sessionId,
            turn_id: event.turnId,
            base_turn_id: event.baseTurnId,
            base_turn_head_tree_sha: event.baseTurnHeadTreeSha,
            between_turn_diff: event.betweenTurnDiff,
            completed_at: Math.floor(event.completedAtMs / 1e3),
            status: event.status,
            diff_format: event.diffFormat,
            base_tree_sha: event.baseTreeSha,
            head_tree_sha: event.headTreeSha,
            diff: event.diff,
          },
        };
        let serialized = serializeCodexAnalyticsEvents(envelope);
        if (
          new TextEncoder().encode(serialized).byteLength >
            MAX_ANALYTICS_REQUEST_BYTES &&
          (envelope.event_params.base_turn_head_tree_sha != null ||
            envelope.event_params.between_turn_diff != null)
        ) {
          envelope.event_params.base_turn_head_tree_sha = null;
          envelope.event_params.between_turn_diff = null;
          serialized = serializeCodexAnalyticsEvents(envelope);
        }
        if (
          new TextEncoder().encode(serialized).byteLength >
          MAX_ANALYTICS_REQUEST_BYTES
        ) {
          logger.warning("Skipping oversized Codex analytics event", {
            safe: {
              eventKind: event.eventKind,
              maxRequestBytes: MAX_ANALYTICS_REQUEST_BYTES,
            },
            sensitive: {},
          });
          return;
        }
        await postSerializedCodexAnalyticsEvents(serialized);
        return;
      }
    }
  } catch (error) {
    logger.warning("Failed to submit Codex analytics event", {
      safe: summarizeCodexAnalyticsEventForLog(event),
      sensitive: { error },
    });
  }
}

function summarizeCodexAnalyticsEventForLog(
  event: CodexAnalyticsEvent,
): Record<string, unknown> | undefined {
  switch (event.eventKind) {
    case "turn_rating":
      return { eventKind: event.eventKind, rating: event.rating };
    case "action":
      return { eventKind: event.eventKind, action: event.action };
    case "turn_diff":
      return { eventKind: event.eventKind, status: event.status };
  }
}

async function postSingleCodexAnalyticsEvent(
  envelope: CodexAnalyticsEventEnvelope,
): Promise<void> {
  await postSerializedCodexAnalyticsEvents(
    serializeCodexAnalyticsEvents(envelope),
  );
}

function serializeCodexAnalyticsEvents(
  envelope: CodexAnalyticsEventEnvelope,
): string {
  return JSON.stringify({ events: [envelope] });
}

async function postSerializedCodexAnalyticsEvents(
  serialized: string,
): Promise<void> {
  await analyticsApiClient
    .getInstance()
    .post(ANALYTICS_EVENTS_PATH, serialized, buildAnalyticsRequestInit());
}
