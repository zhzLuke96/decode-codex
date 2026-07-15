// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Opens, updates, activates, and closes terminal side-panel tabs for sessions.
import React, { type ComponentType } from "react";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabRecord,
} from "../app-shell/app-shell-tab-controller/types";
import { focusTerminalTextarea } from "../composer/focus-composer";
import { TerminalIcon } from "../icons/terminal-icon";
import { getPathBasename } from "../runtime/path-basename-runtime";
import { terminalSessionManager } from "../runtime/terminal-session-manager-runtime";
import type { TerminalConversationSnapshot } from "../runtime/terminal-session-types";
import { TerminalSessionTab } from "./terminal-session-tab";
import {
  getTerminalPanelTarget,
  type TerminalPanelPlacement,
  type TerminalPanelScope,
  type TerminalPanelTarget,
} from "./terminal-panel-target-runtime";

const TERMINAL_TAB_ID_PREFIX = "terminal:";

export function syncTerminalPanelTabs(
  scope: TerminalPanelScope,
  target: TerminalPanelTarget,
  activeSessionId: string,
  activate: boolean,
  placement: TerminalPanelPlacement,
  requestedSessionId?: string | null,
): void {
  const snapshot = terminalSessionManager.getConversationSnapshot(
    target.conversationId,
  );
  const sessionIds = snapshot?.sessionIds ?? [];
  closeTerminalTabsNotInSnapshot(scope, placement, sessionIds);

  const orderedSessionIds = getTerminalSessionsToShow(
    scope,
    placement,
    sessionIds,
    requestedSessionId,
  );
  const controller = getTerminalPanelController(placement);
  const existingTabsById = new Map(
    scope
      .get<AppShellTabRecord[]>(controller.tabs$)
      .map((tab) => [tab.tabId, tab]),
  );

  orderedSessionIds.forEach((sessionId, index) => {
    const tabId = getTerminalTabId(sessionId);
    const title = resolveTerminalTitle(
      snapshot,
      target,
      sessionId,
      index,
      orderedSessionIds.length,
    );
    const existingTab = existingTabsById.get(tabId);
    if (existingTab != null) {
      if (existingTab.title !== title) {
        controller.updateTab(scope, tabId, { title });
      }
      return;
    }

    controller.openTab(
      scope,
      TerminalSessionTab as ComponentType<Record<string, unknown>>,
      {
        activate: false,
        icon: React.createElement(TerminalIcon, {
          className: "icon-xs shrink-0",
        }),
        id: tabId,
        kind: "terminal",
        onActivate: (store) => {
          activateTerminalSession(
            store as TerminalPanelScope,
            target,
            sessionId,
            placement,
          );
        },
        onClose: () => {
          terminalSessionManager.closeSessionForConversation(
            target.conversationId,
            sessionId,
          );
        },
        onMove: (_store, targetController) => {
          if (
            targetController.panelId !== "bottom" &&
            targetController.panelId !== "right"
          ) {
            return;
          }
          const nextPlacement = targetController.panelId;
          return {
            onActivate: (store: AppShellStore) => {
              activateTerminalSession(
                store as TerminalPanelScope,
                target,
                sessionId,
                nextPlacement,
              );
            },
            props: buildTerminalTabProps(target, sessionId, nextPlacement),
          };
        },
        props: buildTerminalTabProps(target, sessionId, placement),
        title,
        tooltip: title,
      },
    );
  });

  if (activate) {
    controller.activateTab(scope, getTerminalTabId(activeSessionId));
    requestAnimationFrame(() => {
      focusTerminalTextarea();
    });
  }
}

function activateTerminalSession(
  scope: TerminalPanelScope,
  target: TerminalPanelTarget,
  sessionId: string,
  placement: TerminalPanelPlacement,
): void {
  if (
    !terminalSessionManager
      .getConversationSnapshot(target.conversationId)
      ?.sessionIds.includes(sessionId)
  ) {
    getTerminalPanelController(placement).closeTab(
      scope,
      getTerminalTabId(sessionId),
    );
    return;
  }
  terminalSessionManager.setActiveSessionForConversation(
    target.conversationId,
    sessionId,
  );
  syncTerminalPanelTabs(scope, target, sessionId, false, placement);
  requestAnimationFrame(() => {
    focusTerminalTextarea();
  });
}

function buildTerminalTabProps(
  target: TerminalPanelTarget,
  sessionId: string,
  placement: TerminalPanelPlacement,
): Record<string, unknown> {
  return {
    ...target,
    onNewTerminalTab:
      placement === "bottom" ? openNewBottomTerminalTab : openNewRightTerminalTab,
    sessionId,
  };
}

function openNewBottomTerminalTab(scope: TerminalPanelScope): void {
  openNewTerminalTab(scope, "bottom");
}

function openNewRightTerminalTab(scope: TerminalPanelScope): void {
  openNewTerminalTab(scope, "right");
}

function openNewTerminalTab(
  scope: TerminalPanelScope,
  placement: TerminalPanelPlacement,
): void {
  const target = getTerminalPanelTarget(scope);
  if (target == null) return;
  const sessionId = terminalSessionManager.addSessionForConversation(
    target.conversationId,
  );
  syncTerminalPanelTabs(scope, target, sessionId, true, placement, sessionId);
}

function getTerminalSessionsToShow(
  scope: TerminalPanelScope,
  placement: TerminalPanelPlacement,
  sessionIds: string[],
  requestedSessionId?: string | null,
): string[] {
  const validSessionIds = new Set(sessionIds);
  const controller = getTerminalPanelController(placement);
  const openSessionIds = scope
    .get<AppShellTabRecord[]>(controller.tabs$)
    .flatMap((tab) => {
      const sessionId = getSessionIdFromTerminalTabId(tab.tabId);
      return sessionId != null && validSessionIds.has(sessionId)
        ? [sessionId]
        : [];
    });
  return requestedSessionId == null ||
    !validSessionIds.has(requestedSessionId) ||
    openSessionIds.includes(requestedSessionId)
    ? openSessionIds
    : [...openSessionIds, requestedSessionId];
}

function closeTerminalTabsNotInSnapshot(
  scope: TerminalPanelScope,
  placement: TerminalPanelPlacement,
  sessionIds: string[],
): void {
  const controller = getTerminalPanelController(placement);
  const validTabIds = new Set(sessionIds.map(getTerminalTabId));
  for (const tab of scope.get<AppShellTabRecord[]>(controller.tabs$)) {
    if (isTerminalTabId(tab.tabId) && !validTabIds.has(tab.tabId)) {
      controller.closeTab(scope, tab.tabId);
    }
  }
}

function getTerminalPanelController(
  placement: TerminalPanelPlacement,
): AppShellTabController {
  return placement === "bottom"
    ? bottomAppShellTabController
    : rightAppShellTabController;
}

function getTerminalTabId(sessionId: string): string {
  return `${TERMINAL_TAB_ID_PREFIX}${sessionId}`;
}

function getSessionIdFromTerminalTabId(
  tabId: string | null | undefined,
): string | null {
  return tabId?.startsWith(TERMINAL_TAB_ID_PREFIX)
    ? tabId.slice(TERMINAL_TAB_ID_PREFIX.length)
    : null;
}

function isTerminalTabId(tabId: string): boolean {
  return tabId.startsWith(TERMINAL_TAB_ID_PREFIX);
}

function resolveTerminalTitle(
  snapshot: TerminalConversationSnapshot | null,
  target: TerminalPanelTarget,
  sessionId: string,
  index: number,
  count: number,
): string {
  const explicitTitle = snapshot?.tabTitlesBySessionId[sessionId]?.trim();
  if (explicitTitle) return explicitTitle;
  const cwd = snapshot?.cwdBySessionId[sessionId] || target.cwd;
  if (cwd != null && cwd.trim().length > 0) {
    const directoryName = getPathBasename(cwd) || cwd;
    return count > 1 ? `${directoryName} ${index + 1}` : directoryName;
  }
  return `Terminal ${index + 1}`;
}
