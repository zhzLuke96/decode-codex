// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Publishes macOS history swipe-navigation state (back/forward affordances,
// overlay bounds and accent color) to the native window shell.
import { useLayoutEffect } from "react";
import {
  hostBridge,
  useAtomValue,
  useFeatureGate,
  useHostPlatform,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperALowerT as historyCanGoBackAtom,
  worktreeNewThreadOrchestratorCompatSlotUpperJLowerT as historyCanGoForwardAtom,
  worktreeNewThreadOrchestratorCompatSlotUpperNLowerT as historySwipeOverlayBoundsAtom,
  worktreeNewThreadOrchestratorCompatSlotUpperQLowerT as historySwipeThemeAtom,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

const HISTORY_SWIPE_NAVIGATION_ATTR = "data-codex-history-swipe-navigation";

export function HistorySwipeNavigationEffect(): null {
  const { platform } = useHostPlatform() as { platform: string };
  const isMacHistorySwipeEnabled =
    useFeatureGate("1645387566") && platform === "macOS";
  const canGoBack = useAtomValue(historyCanGoBackAtom) as boolean;
  const canGoForward = useAtomValue(historyCanGoForwardAtom) as boolean;
  const overlayBounds = useAtomValue(historySwipeOverlayBoundsAtom);
  const themeAccentRevision = useAtomValue(historySwipeThemeAtom);

  useLayoutEffect(() => {
    document.documentElement.toggleAttribute(
      HISTORY_SWIPE_NAVIGATION_ATTR,
      isMacHistorySwipeEnabled,
    );
    return removeHistorySwipeNavigationAttr;
  }, [isMacHistorySwipeEnabled]);

  useLayoutEffect(() => {
    const accentColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--codex-base-accent")
      .trim();
    hostBridge.windowNavigation?.setHistorySwipeNavigationState({
      canGoBack: isMacHistorySwipeEnabled && canGoBack,
      canGoForward: isMacHistorySwipeEnabled && canGoForward,
      overlayBounds: isMacHistorySwipeEnabled ? overlayBounds : null,
      overlayColor:
        isMacHistorySwipeEnabled && accentColor ? accentColor : null,
    });
  }, [
    themeAccentRevision,
    canGoBack,
    canGoForward,
    isMacHistorySwipeEnabled,
    overlayBounds,
  ]);

  useLayoutEffect(clearHistorySwipeNavigationOnUnmount, []);
  return null;
}

function clearHistorySwipeNavigationOnUnmount(): () => void {
  return clearHistorySwipeNavigationState;
}

function clearHistorySwipeNavigationState(): void {
  hostBridge.windowNavigation?.setHistorySwipeNavigationState({
    canGoBack: false,
    canGoForward: false,
    overlayBounds: null,
    overlayColor: null,
  });
}

function removeHistorySwipeNavigationAttr(): void {
  document.documentElement.removeAttribute(HISTORY_SWIPE_NAVIGATION_ATTR);
}
