// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Semantic wrappers for app-shell tab actions.
import {
  findBrowserPanelTab,
  getBrowserPanelTabs,
} from "./thread-browser-panel-tabs";
import { activateThreadPanelTab, findPanelForTab } from "./thread-panel-state";
import {
  focusThreadReviewPath,
  selectThreadReviewBaseBranch,
  selectThreadReviewView,
  type ThreadReviewPanelView,
} from "./thread-review-panel-state";
import { getActiveThreadHostId as getRouteActiveThreadHostId } from "./thread-route-context";
import {
  getDefaultThreadTerminalPanelPlacement,
  getOpenThreadTerminalPanelTabIds,
  getThreadTerminalPanelTabId,
  isThreadTerminalPanelTabAvailable,
  openThreadTerminalPanelTab,
} from "./thread-terminal-tabs";
import type { AppShellStore } from "./app-shell-tab-controller/types";

export type WindowsTabsOpenPlacement = "right" | "bottom";
export type WindowsTabsOpenReviewView = ThreadReviewPanelView;

type AppShellActionScope = {
  get: <TValue>(state: unknown, key?: unknown) => TValue;
};

type BrowserPanelTabMatch = {
  browserTabId: string;
  target: WindowsTabsOpenPlacement;
};

export function getActiveThreadHostId(
  scope: AppShellActionScope,
): string | null | undefined {
  return getRouteActiveThreadHostId(scope);
}

export function getBrowserPanelTabsForThread(
  scope: AppShellActionScope,
  threadId: string,
): BrowserPanelTabMatch[] {
  return getBrowserPanelTabs(asAppShellStore(scope), threadId).map(
    ({ browserTabId, target }) => ({
      browserTabId,
      target,
    }),
  );
}

export function getBrowserPanelTabForThread(
  scope: AppShellActionScope,
  threadId: string,
  browserTabId: string,
): BrowserPanelTabMatch | null {
  let browserPanelTab = findBrowserPanelTab(
    asAppShellStore(scope),
    threadId,
    browserTabId,
  );
  return browserPanelTab == null
    ? null
    : {
        browserTabId: browserPanelTab.browserTabId,
        target: browserPanelTab.target,
      };
}

export function getDefaultTerminalPanelPlacement(
  scope: AppShellActionScope,
): WindowsTabsOpenPlacement {
  return getDefaultThreadTerminalPanelPlacement(scope);
}

export function getExistingTerminalTabIds(
  scope: AppShellActionScope,
): string[] {
  return getOpenThreadTerminalPanelTabIds(scope);
}

export function getTerminalPanelTabId(sessionId: string): string {
  return getThreadTerminalPanelTabId(sessionId);
}

export function getPanelPlacementForTab(
  scope: AppShellActionScope,
  tabId: string,
): WindowsTabsOpenPlacement | null {
  return findPanelForTab(asAppShellStore(scope), tabId);
}

export function activateExistingPanelTab(
  scope: AppShellActionScope,
  placement: WindowsTabsOpenPlacement,
  tabId: string,
): boolean {
  return activateThreadPanelTab(asAppShellStore(scope), placement, tabId);
}

export function isTerminalTabAvailableForThread(
  scope: AppShellActionScope,
): boolean {
  return isThreadTerminalPanelTabAvailable(scope);
}

export function openTerminalTabForThread(
  scope: AppShellActionScope,
  sessionId: string | undefined,
  placement: WindowsTabsOpenPlacement,
): string | null {
  return openThreadTerminalPanelTab(scope, sessionId, placement);
}

export function selectReviewBaseBranch(
  scope: AppShellActionScope,
  threadId: string | null,
  baseBranch: string,
): void {
  selectThreadReviewBaseBranch(scope, threadId, baseBranch);
}

export function selectReviewView(
  scope: AppShellActionScope,
  view: WindowsTabsOpenReviewView,
): void {
  selectThreadReviewView(scope, view);
}

export function focusReviewPath(
  scope: AppShellActionScope,
  path: string,
): void {
  focusThreadReviewPath(scope, path);
}

function asAppShellStore(scope: AppShellActionScope): AppShellStore {
  return scope as AppShellStore;
}
