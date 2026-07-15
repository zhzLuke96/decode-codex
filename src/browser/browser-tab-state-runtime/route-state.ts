// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Normalizes browser route context and records the active tab route payload.
import { SidePanelTabKind } from "../../app-shell/side-panel-runtime";
import { trackScopedAnalyticsEvent } from "../../runtime/onboarding-common-runtime";
import type { BrowserRouteEntry, StoreLike } from "./types";

const persistedBrowserRouteEntries = new WeakMap<
  object,
  Map<unknown, BrowserRouteEntry>
>();

export function normalizeBrowserActiveTab(activeTab: unknown): string | null {
  if (activeTab == null) return null;
  if (typeof activeTab === "string") return normalizeTabId(activeTab);
  if (typeof activeTab !== "object") return null;
  const record = activeTab as { kind?: unknown; tabId?: unknown };
  if (record.kind === SidePanelTabKind.BROWSER) return "browser";
  return typeof record.tabId === "string" ? normalizeTabId(record.tabId) : null;
}

function normalizeTabId(tabId: string): string {
  if (tabId === SidePanelTabKind.BROWSER || tabId.startsWith("browser:")) {
    return "browser";
  }
  if (tabId === SidePanelTabKind.DIFF) return "review";
  if (tabId === SidePanelTabKind.MCP_APP || tabId.startsWith("mcp-app:")) {
    return "mcp_app";
  }
  if (tabId.startsWith("artifact:")) return "artifact";
  if (tabId.startsWith("automation:")) return "automation";
  if (tabId.startsWith("file:")) return "file";
  if (tabId.startsWith("pull-request:")) return "pull_request";
  return "other";
}

export function normalizeBrowserRouteKind(
  routeKind: unknown,
): string | undefined {
  switch (routeKind) {
    case "chatgpt-thread":
      return "chatgpt_thread";
    case "client-local-thread":
    case "local-thread":
      return "local_thread";
    case "home":
      return "home";
    case "new-thread-panel":
      return "new_thread_panel";
    case "other":
      return "other";
    case "remote-thread":
      return "remote_thread";
    default:
      return undefined;
  }
}

export function persistBrowserRouteEntry(
  store: StoreLike,
  routeKey: unknown,
  entry: BrowserRouteEntry,
): void {
  if (typeof store === "object" && store != null) {
    let entries = persistedBrowserRouteEntries.get(store);
    if (entries == null) {
      entries = new Map();
      persistedBrowserRouteEntries.set(store, entries);
    }
    entries.set(routeKey, entry);
  }
  trackScopedAnalyticsEvent(store, routeKey as never, entry);
}
