// Restored from ref/webview/assets/app-shell-tab-controller-CVKUvgYM.js
// App shell tab analytics classification and product events.
import {
  PERSISTED_PANEL_KIND,
  isBrowserPanelLocation,
} from "../../runtime/persisted-signal";
import {
  ___productLoggerT as logProductEvent,
  _productLoggerVr as threadSidePanelTabViewedEvent,
} from "../../analytics/product-logger";
import type { AppShellStore, AppShellTabRecord } from "./types";
export function getAppShellTabAnalyticsKind(
  tab: AppShellTabRecord | null | undefined,
): string | null {
  if (tab == null) return null;
  if (isBrowserPanelLocation(tab)) return "browser";
  const tabId = tab.tabId;
  return tabId === PERSISTED_PANEL_KIND.DIFF
    ? "review"
    : tabId === PERSISTED_PANEL_KIND.MCP_APP ||
        tabId.startsWith(`${PERSISTED_PANEL_KIND.MCP_APP}:`)
      ? "mcp_app"
      : tabId.startsWith("artifact:")
        ? "artifact"
        : tabId.startsWith("automation:")
          ? "automation"
          : tabId.startsWith("file:")
            ? "file"
            : tabId.startsWith("pull-request:")
              ? "pull_request"
              : "other";
}
export function getRouteKindForTabAnalytics(routeKind: string): string {
  switch (routeKind) {
    case "chatgpt-thread":
      return "chatgpt_thread";
    case "client-local-thread":
      return "local_thread";
    case "home":
      return "home";
    case "local-thread":
      return "local_thread";
    case "new-thread-panel":
      return "new_thread_panel";
    case "other":
      return "other";
    case "remote-thread":
      return "remote_thread";
    default:
      return routeKind;
  }
}
export function logAppShellTabSelection(
  store: AppShellStore,
  tab: AppShellTabRecord | null | undefined,
): void {
  const tabKind = getAppShellTabAnalyticsKind(tab);
  if (tabKind == null) return;
  logProductEvent(store, threadSidePanelTabViewedEvent, {
    routeKind: getRouteKindForTabAnalytics(store.value.routeKind),
    tab: tabKind,
  });
}

export function initAppShellTabControllerAnalyticsChunk(): void {
  void getAppShellTabAnalyticsKind;
  void getRouteKindForTabAnalytics;
  void logAppShellTabSelection;
}
