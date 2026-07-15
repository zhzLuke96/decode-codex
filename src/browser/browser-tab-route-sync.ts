// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Persists the active browser tab + route kind into a store-scoped route entry.
import {
  activeBrowserTabSignal,
  browserCommentRouteKey,
  browserDesignRouteKey,
  isBrowserSidebarEnabledSignal,
  normalizeBrowserActiveTab,
  normalizeBrowserRouteKind,
  persistBrowserRouteEntry,
} from "../boundaries/onboarding-commons-externals.facade";

type BrowserRouteStore = {
  get<TValue = unknown>(signal: unknown): TValue;
  value: { routeKind: unknown };
};

export function syncBrowserCommentTabRoute(
  store: BrowserRouteStore,
  activeTabId: string | null,
): void {
  persistBrowserTabRoute(store, browserCommentRouteKey, activeTabId);
}

export function syncBrowserDesignTabRoute(
  store: BrowserRouteStore,
  activeTabId: string | null,
): void {
  persistBrowserTabRoute(store, browserDesignRouteKey, activeTabId);
}

function persistBrowserTabRoute(
  store: BrowserRouteStore,
  routeKey: unknown,
  activeTabId: string | null,
): void {
  persistBrowserRouteEntry(store, routeKey, {
    activeTab: resolveActiveBrowserTab(store, activeTabId),
    routeKind: normalizeBrowserRouteKind(store.value.routeKind),
  });
}

function resolveActiveBrowserTab(
  store: BrowserRouteStore,
  activeTabId: string | null,
): string {
  if (!store.get(isBrowserSidebarEnabledSignal)) return "none";
  const activeTab = store.get<{ tabId?: string } | null>(
    activeBrowserTabSignal,
  );
  return (
    normalizeBrowserActiveTab(
      activeTab?.tabId === activeTabId ? activeTab : null,
    ) ?? "none"
  );
}
