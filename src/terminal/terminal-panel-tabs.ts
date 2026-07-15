// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative actions that open a new embedded-terminal session as a side-panel
// tab for the conversation currently targeted by the app scope.
import {
  getTerminalPanelTarget,
  registerTerminalPanelSubscription,
  syncTerminalPanelTabs,
  terminalSessionManager,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  bottomPanelOpenSignal,
  rightPanelOpenSignal,
} from "../app-shell/app-shell-state";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import { closeThreadPanel } from "../app-shell/thread-panel-state";

type TerminalPanelPlacement = "bottom" | "right";
type TerminalPanelTab = { tabId: string };
type TerminalConversationSnapshot = {
  activeSessionId?: string | null;
  sessionIds?: string[];
};
type TerminalSessionManager = {
  addSessionForConversation(conversationId: string): string;
  getConversationSnapshot(
    conversationId: string,
  ): TerminalConversationSnapshot | null;
};

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

const TERMINAL_TAB_ID_PREFIX = "terminal:";

export function openTerminalPanel(
  scope: AppScope,
  placement: TerminalPanelPlacement,
): void {
  const target = getTerminalPanelTarget(scope);
  if (target == null) {
    return;
  }
  const sessionId = getTerminalSessionManager().addSessionForConversation(
    target.conversationId,
  );
  registerTerminalPanelSubscription(scope, target, placement);
  syncTerminalPanelTabs(scope, target, sessionId, true, placement, sessionId);
}

export function openTerminalPanelAtBottom(scope: AppScope): void {
  openTerminalPanel(scope, "bottom");
}

export function hasTerminalPanelTarget(scope: AppScope): boolean {
  return getTerminalPanelTarget(scope) != null;
}

export function toggleTerminalPanel(
  scope: AppScope,
  placement: TerminalPanelPlacement = "right",
): void {
  if (isTerminalPanelOpen(scope, placement)) {
    closeThreadPanel(scope, placement);
    return;
  }

  const target = getTerminalPanelTarget(scope);
  if (target == null) {
    return;
  }

  const sessionId =
    findActiveTerminalSessionId(scope, placement) ??
    getTerminalSessionManager().getConversationSnapshot(target.conversationId)
      ?.activeSessionId ??
    getTerminalSessionManager().addSessionForConversation(
      target.conversationId,
    );
  registerTerminalPanelSubscription(scope, target, placement);
  syncTerminalPanelTabs(scope, target, sessionId, true, placement, sessionId);
}

function isTerminalPanelOpen(
  scope: AppScope,
  placement: TerminalPanelPlacement,
): boolean {
  const panelOpenSignal =
    placement === "bottom" ? bottomPanelOpenSignal : rightPanelOpenSignal;
  return (
    scope.get<boolean>(panelOpenSignal) &&
    findActiveTerminalSessionId(scope, placement) != null
  );
}

function findActiveTerminalSessionId(
  scope: AppScope,
  placement: TerminalPanelPlacement,
): string | null {
  const controller =
    placement === "bottom"
      ? bottomAppShellTabController
      : rightAppShellTabController;
  const activeTab = scope.get<TerminalPanelTab | null>(controller.activeTab$);
  return activeTab?.tabId.startsWith(TERMINAL_TAB_ID_PREFIX)
    ? activeTab.tabId.slice(TERMINAL_TAB_ID_PREFIX.length)
    : null;
}

function getTerminalSessionManager(): TerminalSessionManager {
  return terminalSessionManager as TerminalSessionManager;
}
