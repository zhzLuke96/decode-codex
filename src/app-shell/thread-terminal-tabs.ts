// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Thread terminal side-panel helpers backed by the current projects app bundle.
import {
  Ds as openTerminalPanelTab,
  Ts as isTerminalPanelTabAvailable,
  js as defaultTerminalPanelPlacementSignal,
} from "../vendor/projects-app-shared-runtime";
import {
  getThreadPanelController,
  THREAD_PANEL_IDS,
} from "./thread-panel-state";

export type ThreadTerminalPanelPlacement = "right" | "bottom";

type ThreadTerminalScope = {
  get<TValue>(state: unknown, key?: unknown): TValue;
};

const THREAD_TERMINAL_TAB_PREFIX = "terminal:";

export function getDefaultThreadTerminalPanelPlacement(
  scope: ThreadTerminalScope,
): ThreadTerminalPanelPlacement {
  return scope.get<ThreadTerminalPanelPlacement>(
    defaultTerminalPanelPlacementSignal,
  );
}

export function getThreadTerminalPanelTabId(sessionId: string): string {
  return `${THREAD_TERMINAL_TAB_PREFIX}${sessionId}`;
}

export function getOpenThreadTerminalPanelTabIds(
  scope: ThreadTerminalScope,
): string[] {
  return THREAD_PANEL_IDS.flatMap((panelId) =>
    scope.get<string[]>(getThreadPanelController(panelId).tabIds$),
  ).filter(isThreadTerminalPanelTabId);
}

export function isThreadTerminalPanelTabAvailable(
  scope: ThreadTerminalScope,
): boolean {
  return isTerminalPanelTabAvailable(scope);
}

export function openThreadTerminalPanelTab(
  scope: ThreadTerminalScope,
  sessionId: string | undefined,
  placement: ThreadTerminalPanelPlacement,
): string | null {
  return openTerminalPanelTab(scope, sessionId, placement);
}

function isThreadTerminalPanelTabId(tabId: string): boolean {
  return tabId.startsWith(THREAD_TERMINAL_TAB_PREFIX);
}
