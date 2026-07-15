// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Opens an existing side-panel browser tab, focuses it, and completes panel reveal.
import {
  bottomPanelAnimationSignal,
  focusSidePanelTab,
  getBrowserTabPlacement,
  resolveActiveBrowserConversationId,
  rightPanelAnimationSignal,
} from "../boundaries/onboarding-commons-externals.facade";
import type {
  AppStore,
  OpenBrowserTabOptions,
  SidePanelTarget,
} from "./side-panel-browser-tab-types";
import { resolveSidePanelBrowserTabId } from "./browser-tab-id-resolution";
import { openBrowserTab } from "./side-panel-browser-tab-commands";

interface PanelRevealAnimation {
  set(value: number): void;
  stop(): void;
}

export function openExistingBrowserTab(
  store: AppStore,
  options: OpenBrowserTabOptions = {},
  target: SidePanelTarget = "right",
): boolean {
  const conversationId =
    options.browserConversationId ?? resolveActiveBrowserConversationId(store);
  if (conversationId == null) return false;

  const browserTabId = resolveSidePanelBrowserTabId(
    store,
    conversationId,
    options.browserTabId,
  );
  const resolvedTarget =
    getBrowserTabPlacement(store, conversationId, browserTabId, target)
      ?.target ?? target;

  if (
    !openBrowserTab(
      store,
      false,
      { ...options, browserConversationId: conversationId, browserTabId },
      resolvedTarget,
    ) ||
    !focusSidePanelTab(store, resolvedTarget, browserTabId)
  ) {
    return false;
  }

  const panelRevealAnimation = store.get(
    resolvedTarget === "bottom"
      ? bottomPanelAnimationSignal
      : rightPanelAnimationSignal,
  ) as PanelRevealAnimation;
  panelRevealAnimation.stop();
  panelRevealAnimation.set(1);
  return true;
}
