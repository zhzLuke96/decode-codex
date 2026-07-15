// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Resolve the active local conversation target for terminal side-panel actions.
import type { AppShellStore } from "../app-shell/app-shell-tab-controller/types";
import { getActiveConversationId } from "../runtime/conversation-helpers-runtime";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
  conversationTitleSignal,
} from "../runtime/conversation-state-runtime";

export type TerminalPanelPlacement = "bottom" | "right";

export type TerminalPanelScope = AppShellStore & {
  value?: Record<string, unknown> | null;
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, valueOrKey: unknown, valueOrUpdater?: unknown): void;
};

export type TerminalPanelTarget = {
  conversationId: string;
  conversationTitle: string | null;
  cwd?: string | null;
  hostId?: string | null;
};

export function getTerminalPanelTarget(
  scope: TerminalPanelScope,
): TerminalPanelTarget | null {
  const route = scope.value ?? {};
  const routeKind = route.routeKind;
  if (
    routeKind === "new-thread-panel" ||
    routeKind === "chatgpt-thread" ||
    routeKind === "client-local-thread" ||
    routeKind === "remote-thread" ||
    routeKind === "other"
  ) {
    return null;
  }

  const conversationId = getActiveConversationId(scope);
  if (conversationId == null) return null;
  return {
    conversationId,
    conversationTitle: readScopedValue(
      scope,
      conversationTitleSignal,
      conversationId,
    ),
    cwd: readScopedValue(scope, conversationCwdSignal, conversationId),
    hostId: readScopedValue(scope, conversationHostIdSignal, conversationId),
  };
}

function readScopedValue<TValue>(
  scope: TerminalPanelScope,
  signal: unknown,
  key: string,
): TValue | null {
  try {
    return scope.get<TValue | null>(signal, key) ?? null;
  } catch {
    return null;
  }
}
