// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Analytics for the app-shell side panel: classify an activated tab and record a "tab viewed" product event.

import {
  recordProductEvent,
  isKnownBrowserTab,
  SidePanelTabId,
  sidePanelTabViewedEvent,
} from "../boundaries/onboarding-commons-externals.facade";

type RouteKind =
  | "chatgpt-thread"
  | "client-local-thread"
  | "home"
  | "local-thread"
  | "new-thread-panel"
  | "other"
  | "remote-thread";

type PanelTabCategory =
  | "browser"
  | "review"
  | "mcp_app"
  | "artifact"
  | "automation"
  | "file"
  | "pull_request"
  | "other";

type AnalyticsRouteValue =
  | "chatgpt_thread"
  | "local_thread"
  | "home"
  | "new_thread_panel"
  | "other"
  | "remote_thread";

interface PanelTabDescriptor {
  tabId: string;
}

interface RouteScope {
  value: { routeKind: RouteKind };
}

function classifyPanelTabCategory(
  tab: PanelTabDescriptor | null | undefined,
): PanelTabCategory | null {
  if (tab == null) return null;
  if (isKnownBrowserTab(tab)) return "browser";
  const tabId = tab.tabId;
  if (tabId === SidePanelTabId.DIFF) return "review";
  if (
    tabId === SidePanelTabId.MCP_APP ||
    tabId.startsWith(`${SidePanelTabId.MCP_APP}:`)
  )
    return "mcp_app";
  if (tabId.startsWith("artifact:")) return "artifact";
  if (tabId.startsWith("automation:")) return "automation";
  if (tabId.startsWith("file:")) return "file";
  if (tabId.startsWith("pull-request:")) return "pull_request";
  return "other";
}

function routeKindToAnalyticsValue(
  routeKind: RouteKind,
): AnalyticsRouteValue | undefined {
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
  }
}

export function recordPanelTabViewed(
  routeScope: RouteScope,
  tab: PanelTabDescriptor | null | undefined,
): void {
  const category = classifyPanelTabCategory(tab);
  if (category != null) {
    recordProductEvent(routeScope, sidePanelTabViewedEvent, {
      routeKind: routeKindToAnalyticsValue(routeScope.value.routeKind),
      tab: category,
    });
  }
}
