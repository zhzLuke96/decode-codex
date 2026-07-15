// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Right-side thread panel visibility toggling plus open/close analytics.
import {
  logProductEvent,
  threadSidePanelClosedEvent,
  threadSidePanelOpenedEvent,
} from "../analytics/product-logger";
import { rightPanelExpandedSignal } from "./app-shell-state";
import {
  getAppShellTabAnalyticsKind,
  getRouteKindForTabAnalytics,
} from "./app-shell-tab-controller/analytics";
import { rightAppShellTabController } from "./app-shell-tab-controller";
import type {
  AppShellStore,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";
import { closeThreadPanel, openThreadPanel } from "./thread-panel-state";

export function setThreadSidePanelExpanded(
  store: AppShellStore,
  expanded?: boolean,
): void {
  const wasExpanded = store.get<boolean>(rightPanelExpandedSignal);
  if (!(expanded ?? !wasExpanded)) {
    if (wasExpanded) {
      logThreadSidePanelClosed(store, getActiveRightPanelTabId(store));
    }
    closeThreadPanel(store, "right");
    return;
  }

  if (
    store.get<AppShellTabRecord[]>(rightAppShellTabController.tabs$).length ===
    0
  ) {
    openThreadPanel(store, "right", { allowEmpty: true });
    logThreadSidePanelOpenedAfterExpand(store, wasExpanded);
    return;
  }

  openThreadPanel(store, "right", { activateFallbackTab: true });
  logThreadSidePanelOpenedAfterExpand(store, wasExpanded);
}

function getActiveRightPanelTabId(store: AppShellStore): string | null {
  return (
    store.get<AppShellTabRecord | null>(rightAppShellTabController.activeTab$)
      ?.tabId ?? null
  );
}

function logThreadSidePanelOpenedAfterExpand(
  store: AppShellStore,
  wasExpanded: boolean,
): void {
  if (!wasExpanded && store.get<boolean>(rightPanelExpandedSignal)) {
    logThreadSidePanelOpened(store, getActiveRightPanelTabId(store));
  }
}

function logThreadSidePanelOpened(
  store: AppShellStore,
  activeTabId: string | null,
): void {
  logThreadSidePanelVisibilityEvent(
    store,
    threadSidePanelOpenedEvent,
    activeTabId,
  );
}

function logThreadSidePanelClosed(
  store: AppShellStore,
  activeTabId: string | null,
): void {
  logThreadSidePanelVisibilityEvent(
    store,
    threadSidePanelClosedEvent,
    activeTabId,
  );
}

function logThreadSidePanelVisibilityEvent(
  store: AppShellStore,
  event: typeof threadSidePanelOpenedEvent | typeof threadSidePanelClosedEvent,
  activeTabId: string | null,
): void {
  logProductEvent(store, event, {
    activeTab: getActiveRightPanelTabAnalyticsKind(store, activeTabId),
    routeKind: getRouteKindForTabAnalytics(String(store.value.routeKind)),
  });
}

function getActiveRightPanelTabAnalyticsKind(
  store: AppShellStore,
  activeTabId: string | null,
): string {
  if (!store.get<boolean>(rightPanelExpandedSignal)) return "none";
  const activeTab = store.get<AppShellTabRecord | null>(
    rightAppShellTabController.activeTab$,
  );
  return (
    getAppShellTabAnalyticsKind(
      activeTab?.tabId === activeTabId ? activeTab : null,
    ) ?? "none"
  );
}
