// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversation selector helpers and keyed transient atoms shared by UI slices.
import {
  appScopeL,
  appScopeRoot,
  appScopeUnderscore,
} from "../boundaries/app-scope";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
} from "./conversation-state-runtime";
import { routeAtom } from "./onboarding-scope-runtime";

type StoreLike = {
  get?<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  value?: unknown;
};

type RouteLike = {
  clientThreadId?: string | null;
  conversationId?: string | null;
  threadId?: string | null;
};

export const conversationHostIdByIdSignal = conversationHostIdSignal;

export const conversationManagerAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const conversationTurnUnifiedDiffAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const conversationTurnDiffCwdAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const activeConversationCwdAtom = appScopeL(
  appScopeRoot,
  (_key, store) => {
    const conversationId = getActiveConversationId(store as StoreLike);
    return conversationId == null
      ? null
      : (store.get<string | null>(conversationCwdSignal, conversationId) ??
          null);
  },
);

export function getActiveConversationId(
  store?: StoreLike | null,
): string | null {
  const route = resolveRouteValue(store);
  return (
    normalizeConversationId(route?.conversationId) ??
    normalizeConversationId(route?.threadId) ??
    normalizeConversationId(route?.clientThreadId)
  );
}

export function getConversationTurns(conversation: unknown): unknown[] {
  if (conversation == null || typeof conversation !== "object") return [];
  const record = conversation as Record<string, unknown>;
  const directTurns = asTurnArray(record.turns);
  if (directTurns != null) return directTurns;

  const thread = record.thread;
  if (thread != null && typeof thread === "object") {
    const threadTurns = asTurnArray((thread as Record<string, unknown>).turns);
    if (threadTurns != null) return threadTurns;
  }

  const nestedConversation = record.conversation;
  if (nestedConversation != null && typeof nestedConversation === "object") {
    const nestedTurns = asTurnArray(
      (nestedConversation as Record<string, unknown>).turns,
    );
    if (nestedTurns != null) return nestedTurns;
  }

  return [];
}

function resolveRouteValue(store?: StoreLike | null): RouteLike | null {
  const directValue = asRoute(store?.value);
  if (directValue != null) return directValue;

  try {
    const scopedRoute = asRoute(store?.get?.(routeAtom));
    if (scopedRoute != null) return scopedRoute;
  } catch {
    return null;
  }

  return null;
}

function asRoute(value: unknown): RouteLike | null {
  if (value == null || typeof value !== "object") return null;
  const record = value as { value?: unknown };
  if (record.value != null && typeof record.value === "object") {
    return record.value as RouteLike;
  }
  return value as RouteLike;
}

function normalizeConversationId(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function asTurnArray(value: unknown): unknown[] | null {
  return Array.isArray(value) ? value : null;
}
