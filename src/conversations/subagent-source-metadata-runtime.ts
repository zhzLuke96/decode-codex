// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Subagent source metadata reader shared by conversation background-agent helpers.
import { normalizeConversationId as normalizeConversationIdValue } from "../boundaries/src-l0hb-mz-p";

export type SubagentSourceMetadata = {
  agentNickname?: string | null;
  agentRole?: string | null;
  depth?: number | null;
  parentThreadId?: string | null;
};

export function getSubagentSourceMetadata(
  source: unknown,
): SubagentSourceMetadata | null {
  if (source == null || typeof source === "string" || !isRecord(source))
    return null;
  return parseSubagentMetadata(source.subAgent);
}

function parseSubagentMetadata(
  subAgent: unknown,
): SubagentSourceMetadata | null {
  if (subAgent == null) return null;
  if (typeof subAgent === "string") return createEmptySubagentMetadata();
  if (!isRecord(subAgent) || !isRecord(subAgent.thread_spawn))
    return createEmptySubagentMetadata();

  const threadSpawn = subAgent.thread_spawn;
  return {
    parentThreadId: normalizeConversationIdValue(threadSpawn.parent_thread_id),
    depth: readNullableNumber(threadSpawn.depth),
    agentNickname: readNullableString(threadSpawn.agent_nickname),
    agentRole: readNullableString(threadSpawn.agent_role),
  };
}

function createEmptySubagentMetadata(): SubagentSourceMetadata {
  return {
    parentThreadId: null,
    depth: null,
    agentNickname: null,
    agentRole: null,
  };
}

function readNullableString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function readNullableNumber(value: unknown): number | null {
  return typeof value === "number" ? value : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object";
}
