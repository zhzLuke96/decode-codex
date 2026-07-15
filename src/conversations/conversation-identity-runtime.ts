// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversation identity helpers and lightweight comment state used by review surfaces.

import { useCallback, useMemo, useState } from "react";

type ConversationCommentsState = {
  comments: unknown;
  modelComments: unknown;
};

const commentsByConversationKey = new Map<string, ConversationCommentsState>();

function stringId(value: unknown): string {
  if (typeof value === "string") return value;
  if (value == null) return "";
  return String(value);
}

export function encodeConversationId(conversationId: unknown): string {
  return `conversation:${stringId(conversationId)}`;
}

export function encodeLocalConversationId(localConversationId: unknown): string {
  return `local:${stringId(localConversationId)}`;
}

export function toConversationKey(conversationId: unknown): string {
  return stringId(conversationId);
}

export function buildEntrypointConversationId({
  entrypoint,
}: {
  entrypoint: string;
}): string {
  return `entrypoint:${entrypoint}`;
}

export function conversationIdFromRoute(route: unknown): string | null {
  if (route == null || typeof route !== "object") return null;
  const record = route as Record<string, unknown>;
  const conversationId =
    record.conversationId ?? record.threadId ?? record.localConversationId;
  return typeof conversationId === "string" && conversationId.length > 0
    ? conversationId
    : null;
}

export function useConversationComments(
  conversationId: unknown,
  localConversationId?: unknown,
): {
  comments: unknown;
  modelComments: unknown;
  setComments: (nextComments: unknown) => void;
} {
  const key = useMemo(
    () =>
      localConversationId == null
        ? encodeConversationId(conversationId)
        : encodeLocalConversationId(localConversationId),
    [conversationId, localConversationId],
  );
  const [state, setState] = useState<ConversationCommentsState>(
    () =>
      commentsByConversationKey.get(key) ?? {
        comments: undefined,
        modelComments: undefined,
      },
  );

  const setComments = useCallback(
    (nextComments: unknown) => {
      setState((currentState) => {
        const resolvedComments =
          typeof nextComments === "function"
            ? (nextComments as (current: unknown) => unknown)(
                currentState.comments,
              )
            : nextComments;
        const nextState = {
          ...currentState,
          comments: resolvedComments,
        };
        commentsByConversationKey.set(key, nextState);
        return nextState;
      });
    },
    [key],
  );

  return {
    comments: state.comments,
    modelComments: state.modelComments,
    setComments,
  };
}
