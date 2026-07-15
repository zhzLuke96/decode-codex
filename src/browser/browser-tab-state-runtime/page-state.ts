// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser page metadata and open/close state helpers.
import { activeBrowserTabSignal } from "../browser-commons-runtime";
import {
  featureFlagQuery,
  persistedBrowserTabsGateId,
} from "../browser-sidebar-state-runtime";
import { clearBrowserSidebarOpenSource } from "../browser-sidebar-open-source/metadata";
import {
  clearQueuedBrowserSidebarTab,
  getBrowserSidebarInitiator,
  peekBrowserSidebarSource,
  rememberBrowserSidebarOpenSource,
  upsertBrowserSidebarTabSource,
} from "../browser-sidebar-open-source";
import {
  browserSidebarTabManager,
  multiBrowserTabsEnabledAtom,
} from "../browser-tab-runtime";
import type { BrowserOpenSourceOptions, StoreLike } from "./types";

export function ensureBrowserPageState(
  conversationId: string,
  browserTabId: string,
  options: BrowserOpenSourceOptions = {},
): void {
  rememberBrowserSidebarOpenSource(conversationId, browserTabId, options);
  upsertBrowserSidebarTabSource(conversationId, {
    browserTabId,
    ...options,
  });
}

export function removeBrowserPageState(
  conversationId: string,
  browserTabId: string,
): void {
  clearQueuedBrowserSidebarTab(conversationId, browserTabId);
  clearBrowserSidebarOpenSource(conversationId, browserTabId);
}

export function handleBrowserTabActivated(
  store: StoreLike,
  conversationId: string,
  browserTabId: string,
): void {
  browserSidebarTabManager.getBrowserStorageId(conversationId, browserTabId);
  store.set?.(activeBrowserTabSignal, {
    browserTabId,
    conversationId,
    tabId: browserTabId,
  });
}

export function cleanupBrowserTabOnClose(
  store: StoreLike,
  conversationId: string,
  browserTabId: string,
): void {
  const activeTab = store.get?.<{ tabId?: string | null } | null>(
    activeBrowserTabSignal,
  );
  if (activeTab?.tabId === browserTabId) {
    store.set?.(activeBrowserTabSignal, null);
  }
  removeBrowserPageState(conversationId, browserTabId);
}

export function getPagePersistenceContext(store: StoreLike): boolean {
  const featureState = store.get?.<boolean | { data?: unknown }>(
    featureFlagQuery,
    persistedBrowserTabsGateId,
  );
  if (typeof featureState === "boolean") return featureState;
  if (typeof featureState?.data === "boolean") return featureState.data;
  return true;
}

export function getPendingBrowserOpenReason(
  conversationId?: string | null,
  browserTabId?: string | null,
): string | null {
  if (conversationId == null || browserTabId == null) return null;
  const reason = getBrowserSidebarInitiator(conversationId, browserTabId);
  return typeof reason === "string" ? reason : null;
}

export function getPendingBrowserOpenSource(
  conversationId?: string | null,
  browserTabId?: string | null,
): string | null {
  if (conversationId == null || browserTabId == null) return null;
  const source = peekBrowserSidebarSource(conversationId, browserTabId);
  return typeof source === "string" ? source : null;
}

export function shouldRemoveSourceBrowserStateWhenEmpty(
  store: StoreLike,
  sourceConversationId: string,
): boolean {
  if (!store.get?.<boolean>(multiBrowserTabsEnabledAtom)) return true;
  return (
    browserSidebarTabManager.getConversationBrowserTabIds(sourceConversationId)
      .length <= 1
  );
}
