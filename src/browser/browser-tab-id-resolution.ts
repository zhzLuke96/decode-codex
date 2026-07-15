// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Browser tab id resolution for side-panel browser commands.
import type { AppStore } from "./side-panel-browser-tab-types";
import {
  browserSidebarTabManager,
  getActiveBrowserTabId,
  getBrowserTabPlacement,
  getDefaultBrowserTabId,
  isKnownBrowserTab,
  multiBrowserTabsEnabledAtom,
  toBrowserTabId,
} from "../boundaries/onboarding-commons-externals.facade";

export function resolveSidePanelBrowserTabId(
  store: AppStore,
  conversationId: string,
  browserTabId?: string,
): string {
  const summaryTabId =
    browserSidebarTabManager.getBrowserUseSummaryBrowserTabId(conversationId);
  if (store.get(multiBrowserTabsEnabledAtom)) {
    return browserTabId ?? toBrowserTabId(crypto.randomUUID());
  }
  if (
    browserTabId != null &&
    (isKnownBrowserTab(store, conversationId, browserTabId) ||
      (browserSidebarTabManager.isBrowserUseTab(conversationId, browserTabId) &&
        summaryTabId === browserTabId))
  ) {
    return browserTabId;
  }
  return (
    resolveExistingBrowserTabId(store, conversationId, browserTabId) ??
    getDefaultBrowserTabId(conversationId)
  );
}

function resolveExistingBrowserTabId(
  store: AppStore,
  conversationId: string,
  browserTabId?: string,
): string | null {
  return browserTabId != null &&
    getBrowserTabPlacement(store, conversationId, browserTabId) != null
    ? browserTabId
    : getActiveBrowserTabId(store, conversationId);
}
