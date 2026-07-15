// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Syncs side-panel browser tab metadata from the live browser-tab snapshot.
import { createElement, useEffect, useSyncExternalStore } from "react";
import {
  browserSidebarTabManager,
  BrowserHighlightedTabIcon,
  BrowserTabTrailingIndicators,
  deriveBrowserTabDisplay,
  FaviconImage,
  getDefaultBrowserTabId,
  getSidePanelTabControllerForTarget,
  GlobeFallbackIcon,
  routeAtom,
  useStore,
} from "../boundaries/onboarding-commons-externals.facade";
import type { AppStore, SidePanelTarget } from "./side-panel-browser-tab-types";

interface BrowserTabMetadataSyncEffectProps {
  browserConversationId: string;
  browserTabFallbackTitle: string;
  browserTabId?: string;
  existingTabTitle?: string | null;
  target?: SidePanelTarget;
}

export function BrowserTabMetadataSyncEffect({
  browserConversationId,
  browserTabFallbackTitle,
  browserTabId,
  existingTabTitle,
  target = "right",
}: BrowserTabMetadataSyncEffectProps): null {
  const store = useStore(routeAtom) as AppStore;
  const resolvedBrowserTabId =
    browserTabId ?? getDefaultBrowserTabId(browserConversationId);

  const browserSnapshot = useSyncExternalStore(
    browserSidebarTabManager.subscribe,
    () =>
      browserSidebarTabManager.getSnapshot(
        browserConversationId,
        resolvedBrowserTabId,
      ),
    () =>
      browserSidebarTabManager.getSnapshot(
        browserConversationId,
        resolvedBrowserTabId,
      ),
  );
  const isBrowserUseTab = useSyncExternalStore(
    browserSidebarTabManager.subscribe,
    () =>
      browserSidebarTabManager.isBrowserUseTab(
        browserConversationId,
        resolvedBrowserTabId,
      ),
    () =>
      browserSidebarTabManager.isBrowserUseTab(
        browserConversationId,
        resolvedBrowserTabId,
      ),
  );
  const isBrowserUseActive = useSyncExternalStore(
    browserSidebarTabManager.subscribe,
    () =>
      browserSidebarTabManager.isBrowserUseActive(
        browserConversationId,
        resolvedBrowserTabId,
      ),
    () =>
      browserSidebarTabManager.isBrowserUseActive(
        browserConversationId,
        resolvedBrowserTabId,
      ),
  );
  const display = deriveBrowserTabDisplay({
    browserSnapshot,
    browserTabFallbackTitle,
    isBrowserUseActive,
    isBrowserUseTab,
  });
  const controller = getSidePanelTabControllerForTarget(target);

  useEffect(() => {
    const title =
      display.preserveExistingTitle && existingTabTitle != null
        ? existingTabTitle
        : display.title;
    controller.updateTab(store, resolvedBrowserTabId, {
      highlightedIcon: createElement(BrowserHighlightedTabIcon, {
        className: "size-4",
      }),
      icon: createElement(FaviconImage, {
        alt: "",
        className: "size-full rounded-2xs",
        logoUrl: display.faviconUrl,
        fallback: createElement(GlobeFallbackIcon, { className: "size-full" }),
      }),
      isHighlighted: display.isHighlighted,
      trailingContent:
        display.isCapturingUserMedia || display.isAudible
          ? createElement(BrowserTabTrailingIndicators, {
              isAudible: display.isAudible,
              isCapturingUserMedia: display.isCapturingUserMedia,
            })
          : undefined,
      title,
    });
  }, [
    controller,
    display.faviconUrl,
    display.isAudible,
    display.isCapturingUserMedia,
    display.isHighlighted,
    display.preserveExistingTitle,
    display.title,
    existingTabTitle,
    resolvedBrowserTabId,
    store,
  ]);

  return null;
}
