// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure builders for conversation-backed review models.

export interface ConversationReviewModel {
  id: string;
  title: string | null;
  turns: unknown[];
  latestTurn: unknown | null;
  source: "conversation" | "parent";
}

export function buildConversationReviewModel({
  id,
  title,
  turns,
}: {
  id: string;
  title?: string | null;
  turns?: unknown[] | null;
}): ConversationReviewModel | null {
  const resolvedTurns = Array.isArray(turns) ? turns : [];
  if (resolvedTurns.length === 0) return null;
  return {
    id,
    title: title ?? null,
    turns: resolvedTurns,
    latestTurn: resolvedTurns.at(-1) ?? null,
    source: "conversation",
  };
}

export function buildParentConversationReviewModel(
  conversationId: string,
  parentTurns?: unknown[] | null,
): ConversationReviewModel | null {
  const model = buildConversationReviewModel({
    id: conversationId,
    title: null,
    turns: parentTurns,
  });
  return model == null ? null : { ...model, source: "parent" };
}
