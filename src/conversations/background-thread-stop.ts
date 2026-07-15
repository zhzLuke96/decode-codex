// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Boolean checks and collection helpers for stoppable background threads.
import { normalizeConversationId } from "../boundaries/src-l0hb-mz-p";

function getConversationTurns(conversation: any): any[] {
  return conversation?.turns ?? [];
}

function getConversationProgress(
  conversation: any,
): "inProgress" | "notInProgress" | "unknown" {
  if (conversation == null) return "unknown";
  const turns = getConversationTurns(conversation);
  if (turns.length === 0) return "unknown";
  return turns.at(-1)?.status === "inProgress" ? "inProgress" : "notInProgress";
}

function getReceiverThreadsMap(item: any): Map<string, any> {
  return new Map(
    (item.receiverThreads ?? []).map((thread: any) => [
      thread.threadId,
      thread.thread,
    ]),
  );
}

function getThreadMemberships(
  conversation: any,
): Array<{ conversationId: string; thread: any }> {
  if (conversation == null) return [];
  const seen = new Map<string, { conversationId: string; thread: any }>();
  for (const turn of getConversationTurns(conversation)) {
    for (const item of turn?.items ?? []) {
      if (item.type !== "collabAgentToolCall" || item.tool !== "spawnAgent")
        continue;
      const threadsById = getReceiverThreadsMap(item);
      for (const threadId of item.receiverThreadIds ?? []) {
        const conversationId = normalizeConversationId(threadId);
        if (!seen.has(conversationId)) {
          seen.set(conversationId, {
            conversationId,
            thread: threadsById.get(threadId) ?? null,
          });
        }
      }
    }
  }
  return Array.from(seen.values());
}

function canStopItem(row: any, conversation: any): boolean {
  return row == null
    ? getConversationProgress(conversation) === "inProgress"
    : row.status !== "done";
}

export interface CanStopBackgroundThreadParams {
  conversationId: string;
  rowsByConversationId: Map<string, any>;
  getConversation: (conversationId: string) => { turns: any[] } | null;
}

export function canStopBackgroundThread(
  params: CanStopBackgroundThreadParams,
): boolean {
  const conversation = params.getConversation(params.conversationId);
  if (
    canStopItem(
      params.rowsByConversationId.get(params.conversationId),
      conversation,
    )
  ) {
    return true;
  }
  return getThreadMemberships(conversation).some((membership) =>
    canStopBackgroundThread({
      ...params,
      conversationId: membership.conversationId,
    }),
  );
}

export interface CollectStoppableBackgroundThreadsParams {
  memberships: Array<{ conversationId: string }>;
  rowsByConversationId: Map<string, any>;
  getConversation: (conversationId: string) => { turns: any[] } | null;
}

export function collectStoppableBackgroundThreads(
  params: CollectStoppableBackgroundThreadsParams,
): string[] {
  const result: string[] = [];
  for (const membership of params.memberships) {
    const conversation = params.getConversation(membership.conversationId);
    if (
      canStopItem(
        params.rowsByConversationId.get(membership.conversationId),
        conversation,
      )
    ) {
      result.push(membership.conversationId);
    } else {
      result.push(
        ...collectStoppableBackgroundThreads({
          ...params,
          memberships: getThreadMemberships(conversation),
        }),
      );
    }
  }
  return result;
}
