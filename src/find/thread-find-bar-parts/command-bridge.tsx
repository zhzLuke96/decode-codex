// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Host command bridge for opening and synchronizing the thread find bar.
import React from "react";

import {
  bottomPanelOpenSignal,
  rightPanelOpenSignal,
} from "../../app-shell/app-shell-state";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../../app-shell/app-shell-tab-controller";
import type { AppShellTabRecord } from "../../app-shell/app-shell-tab-controller/types";
import { THREAD_PANEL_IDS } from "../../app-shell/thread-panel-state";
import {
  getRouteConversationId,
  localConversationRouteScope,
  reviewSourceWorkspaceRootSignal,
  useScope,
  useSignalValue,
} from "../../conversations/local-conversation-page-runtime";
import {
  getBrowserTabConversationKey,
  type BrowserPanelLocation,
} from "../../runtime/persisted-signal";
import { vscodeApiP } from "../../boundaries/vscode-api";
import { useRegisterCommand } from "../../utils/use-register-command";
import {
  findActiveDomainAtom,
  findBrowserTargetAtom,
  findQueryAtom,
  type ThreadFindBrowserTarget,
  type ThreadFindDomain,
} from "../thread-find-atoms";
import {
  applyThreadFindBrowserStatus,
  openThreadFind,
  setThreadFindBrowserTarget,
  setThreadFindDomain,
  setThreadFindQuery,
} from "../thread-find-store";
import { dispatchBrowserFindCommand } from "./browser-commands";
import type { BrowserFindStateMessage, ThreadFindScope } from "./types";

type ThreadPanelId = (typeof THREAD_PANEL_IDS)[number];

type PanelFindState = {
  activeTabs: Record<ThreadPanelId, AppShellTabRecord | null>;
  browserConversationId?: string | null;
  openPanels: Record<ThreadPanelId, boolean>;
  tabs: Record<ThreadPanelId, AppShellTabRecord[]>;
};

function getBrowserTabIdForPanelLocation(
  panelLocation: AppShellTabRecord | null,
  conversationId?: string | null,
): string | null {
  if (conversationId == null) return null;
  return getBrowserTabConversationKey(
    panelLocation as BrowserPanelLocation,
    conversationId,
  );
}

function toBrowserTarget(
  browserConversationId: string | null | undefined,
  browserTabId: string | null,
): ThreadFindBrowserTarget {
  return browserConversationId == null || browserTabId == null
    ? null
    : { browserTabId, conversationId: browserConversationId };
}

function resolveFocusedBrowserTarget({
  activeTabs,
  browserConversationId,
  openPanels,
}: PanelFindState): ThreadFindBrowserTarget {
  if (browserConversationId == null || typeof document === "undefined") {
    return null;
  }
  const activeElement = document.activeElement;
  if (!(activeElement instanceof HTMLElement)) return null;

  for (const panelId of THREAD_PANEL_IDS) {
    if (!openPanels[panelId]) continue;
    const browserTabId = getBrowserTabIdForPanelLocation(
      activeTabs[panelId],
      browserConversationId,
    );
    if (browserTabId == null) continue;

    const isFocusedWebview =
      activeElement.tagName.toLowerCase() === "webview" &&
      activeElement.getAttribute("data-browser-sidebar-conversation-id") ===
        browserConversationId &&
      (activeElement.getAttribute("data-browser-sidebar-browser-tab-id") ??
        browserTabId) === browserTabId;
    const isWithinPanel =
      activeElement.closest(`[data-app-shell-focus-area="${panelId}-panel"]`) !=
      null;
    if (isFocusedWebview || isWithinPanel) {
      return { browserTabId, conversationId: browserConversationId };
    }
  }
  return null;
}

function resolveAvailableBrowserTarget({
  activeTabs,
  browserConversationId,
  openPanels,
  tabs,
}: PanelFindState): ThreadFindBrowserTarget {
  if (browserConversationId == null) return null;

  for (const panelId of THREAD_PANEL_IDS) {
    if (!openPanels[panelId]) continue;
    const browserTabId = getBrowserTabIdForPanelLocation(
      activeTabs[panelId],
      browserConversationId,
    );
    const target = toBrowserTarget(browserConversationId, browserTabId);
    if (target != null) return target;
  }

  for (const panelId of THREAD_PANEL_IDS) {
    if (!openPanels[panelId]) continue;
    for (const tab of tabs[panelId]) {
      const browserTabId = getBrowserTabIdForPanelLocation(
        tab,
        browserConversationId,
      );
      const target = toBrowserTarget(browserConversationId, browserTabId);
      if (target != null) return target;
    }
  }

  return null;
}

function getValidFindDomain(
  currentDomain: ThreadFindDomain,
  {
    hasBrowserTarget,
    hasDiffSource,
  }: {
    hasBrowserTarget: boolean;
    hasDiffSource: boolean;
  },
): ThreadFindDomain {
  if (currentDomain === "browser" && hasBrowserTarget) return "browser";
  if (currentDomain === "diff" && hasDiffSource) return "diff";
  return "conversation";
}

function isThreadFindInputFocused(): boolean {
  return (
    typeof document !== "undefined" &&
    document.activeElement?.id === "content-search-input"
  );
}

function getSelectedFindQuery(): string | undefined {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return undefined;
  }
  const activeElement = document.activeElement;
  let selection: string | undefined;
  if (
    activeElement instanceof HTMLInputElement ||
    activeElement instanceof HTMLTextAreaElement
  ) {
    if (
      activeElement.selectionStart != null &&
      activeElement.selectionEnd != null
    ) {
      selection = activeElement.value.slice(
        activeElement.selectionStart,
        activeElement.selectionEnd,
      );
    }
  } else {
    selection = window.getSelection?.()?.toString();
  }
  const trimmedSelection = selection?.trim();
  if (!trimmedSelection || /[\r\n]/.test(trimmedSelection)) return undefined;
  return trimmedSelection;
}

function focusThreadFindInput(): void {
  if (typeof document === "undefined") return;
  const input = document.getElementById("content-search-input");
  if (input instanceof HTMLInputElement) {
    input.focus();
    input.select();
  }
}

function shouldForwardNativeFindToEditor(): boolean {
  if (typeof document === "undefined") return false;
  let activeElement = document.activeElement;
  if (activeElement?.closest("[data-pierre-editor-surface]") == null) {
    return false;
  }
  while (activeElement?.shadowRoot?.activeElement != null) {
    activeElement = activeElement.shadowRoot.activeElement;
  }
  activeElement?.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      composed: true,
      ctrlKey:
        typeof navigator === "undefined"
          ? true
          : !/mac|darwin/i.test(navigator.platform),
      key: "f",
      metaKey:
        typeof navigator !== "undefined" &&
        /mac|darwin/i.test(navigator.platform),
    }),
  );
  return true;
}

export function ThreadFindCommandBridge() {
  const scope = useScope<ThreadFindScope>(localConversationRouteScope);
  const activeDomain = useSignalValue<ThreadFindDomain>(findActiveDomainAtom);
  const query = useSignalValue<string>(findQueryAtom);
  const browserTarget = useSignalValue<ThreadFindBrowserTarget>(
    findBrowserTargetAtom,
  );
  const hasDiffSource = Boolean(
    useSignalValue(reviewSourceWorkspaceRootSignal),
  );
  const bottomActiveTab = useSignalValue<AppShellTabRecord | null>(
    bottomAppShellTabController.activeTab$,
  );
  const rightActiveTab = useSignalValue<AppShellTabRecord | null>(
    rightAppShellTabController.activeTab$,
  );
  const bottomTabs = useSignalValue<AppShellTabRecord[]>(
    bottomAppShellTabController.tabs$,
  );
  const rightTabs = useSignalValue<AppShellTabRecord[]>(
    rightAppShellTabController.tabs$,
  );
  const isBottomPanelOpen = useSignalValue<boolean>(bottomPanelOpenSignal);
  const isRightPanelOpen = useSignalValue<boolean>(rightPanelOpenSignal);
  const browserConversationId = getRouteConversationId(scope);
  const panelFindState = React.useMemo<PanelFindState>(
    () => ({
      activeTabs: {
        bottom: bottomActiveTab,
        right: rightActiveTab,
      },
      browserConversationId,
      openPanels: {
        bottom: isBottomPanelOpen,
        right: isRightPanelOpen,
      },
      tabs: {
        bottom: bottomTabs,
        right: rightTabs,
      },
    }),
    [
      bottomActiveTab,
      bottomTabs,
      browserConversationId,
      isBottomPanelOpen,
      isRightPanelOpen,
      rightActiveTab,
      rightTabs,
    ],
  );
  const availableBrowserTarget = React.useMemo(
    () => resolveAvailableBrowserTarget(panelFindState),
    [panelFindState],
  );

  React.useEffect(() => {
    setThreadFindBrowserTarget(scope, availableBrowserTarget);
  }, [availableBrowserTarget, scope]);

  const openFind = React.useCallback(() => {
    if (shouldForwardNativeFindToEditor()) return;
    const inputFocused = isThreadFindInputFocused();
    const selectedQuery = inputFocused ? undefined : getSelectedFindQuery();
    const focusedBrowserTarget = inputFocused
      ? null
      : resolveFocusedBrowserTarget(panelFindState);
    const nextBrowserTarget = focusedBrowserTarget ?? browserTarget;
    let nextDomain = activeDomain;

    if (inputFocused) {
      nextDomain = getValidFindDomain(activeDomain, {
        hasBrowserTarget: nextBrowserTarget != null,
        hasDiffSource,
      });
    } else if (focusedBrowserTarget != null) {
      setThreadFindBrowserTarget(scope, focusedBrowserTarget);
      nextDomain = "browser";
    } else if (activeDomain === "diff" && !hasDiffSource) {
      nextDomain = "conversation";
    } else if (activeDomain === "browser" && nextBrowserTarget == null) {
      nextDomain = hasDiffSource ? "diff" : "conversation";
    }

    setThreadFindDomain(scope, nextDomain);
    if (selectedQuery != null) {
      setThreadFindQuery(scope, selectedQuery);
    }
    openThreadFind(scope);

    if (nextDomain === "browser") {
      const browserQuery = selectedQuery ?? query;
      if (browserQuery.length > 0) {
        dispatchBrowserFindCommand(nextBrowserTarget, {
          type: "set-find-query",
          query: browserQuery,
        });
      }
    }
    window.requestAnimationFrame(focusThreadFindInput);
  }, [
    activeDomain,
    browserTarget,
    hasDiffSource,
    panelFindState,
    query,
    scope,
  ]);

  useRegisterCommand("findInThread", openFind, { enabled: true });
  vscodeApiP("find-in-thread", openFind, [openFind]);
  vscodeApiP<BrowserFindStateMessage>(
    "browser-sidebar-find-state",
    (message) => {
      const currentTarget = scope.get<ThreadFindBrowserTarget>(
        findBrowserTargetAtom,
      );
      if (
        message.conversationId !== currentTarget?.conversationId ||
        message.browserTabId !== currentTarget?.browserTabId ||
        message.state == null
      ) {
        return;
      }
      applyThreadFindBrowserStatus(scope, message.state);
    },
    [scope],
  );

  return null;
}
