// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Webview, layout, and browser-open synchronization effects for BrowserSidebar.

import * as React from "react";
import { useEffect, useLayoutEffect } from "react";
import { vscodeApiF } from "../boundaries/vscode-api";
import { browserSidebarManager } from "./sidebar-manager";
import type { BrowserSidebarBoundsRect } from "./browser-sidebar-host-utils";
import {
  ANNOTATION_SETTLE_ANIMATION,
  browserDeviceToolbarLayoutAtom,
  browserPanelOpenedEvent,
  browserToolbarActionEvent,
  browserToolbarActionType,
  getPendingBrowserOpenReason,
  getPendingBrowserOpenSource,
  markBrowserToolbarInteracted,
  resetBrowserChromeAutoHide,
  setBrowserChromeForceVisible,
  syncBrowserOpenState,
  trackScopedAnalyticsEvent,
} from "../boundaries/onboarding-commons-externals.facade";

export function useBrowserSidebarSyncEffects(context: Record<string, any>) {
  const {
    bottomPanelAnimation,
    browserTabId,
    conversationId,
    cwd,
    deviceToolbar,
    effectiveLocale,
    emulatedViewport,
    hasBrowserPage,
    hasSnapshot,
    hasTrackedPanelOpenRef,
    hostKind,
    intl,
    isAgentControllingBrowser,
    isAnnotationModeEnabled,
    isCommentMode,
    isDesignModifierPressed,
    isVisible,
    isWebviewHostActive,
    lastBoundsRef,
    panelTarget,
    pendingOpenInitiatorRef,
    pendingOpenSourceRef,
    persistedTabsEnabled,
    prefersReducedMotion,
    rightPanelLayoutTick,
    scaledBounds,
    setHasSettledOpen,
    setIsMenuOpen,
    setPanelBounds,
    store,
    stringMessages,
    tabSnapshot,
    themeVariant,
    viewportContainerRef,
    viewportScale,
    webviewElementRef,
    webviewKey,
    windowZoom,
    isChromeHoveredRef,
  } = context;
  const syncWebview = React.useEffectEvent(
    (
      overrides: {
        visible?: boolean;
        bounds?: BrowserSidebarBoundsRect | null;
      } = {},
    ) => {
      const visible = overrides.visible ?? isVisible;
      const bounds = overrides.bounds ?? lastBoundsRef.current;
      const presented = visible && isWebviewHostActive && bounds != null;
      const pendingTransfer =
        browserSidebarManager.consumePendingElectronTransfer(
          conversationId,
          browserTabId,
        );
      const mountGeneration = browserSidebarManager.getMountGeneration(
        conversationId,
        browserTabId,
      );
      const pagePersistence = browserSidebarManager.getPagePersistence(
        conversationId,
        browserTabId,
        persistedTabsEnabled,
      );
      vscodeApiF.dispatchMessage("browser-sidebar-sync", {
        payload: {
          conversationId,
          pagePersistence,
          browserTabId,
          hostKind,
          cwd,
          transferSourceBrowserTabId: pendingTransfer?.sourceBrowserTabId,
          transferSourceConversationId: pendingTransfer?.sourceConversationId,
          mountGeneration,
          presented,
          visible,
          bounds: visible ? bounds : null,
          ...(isAnnotationModeEnabled ? {} : { annotationModeEnabled: false }),
          emulatedViewportSize: deviceToolbar.isEnabled
            ? { width: deviceToolbar.width, height: deviceToolbar.height }
            : null,
          viewportScale,
          themeVariant,
          isAgentControllingBrowser,
          runtimeIntlConfig: {
            defaultLocale: intl.defaultLocale,
            locale: effectiveLocale,
            messages: stringMessages,
          },
        },
      });
    },
  );
  const syncBrowserOpenStateEvent = React.useEffectEvent(
    (visible: boolean = isVisible) => {
      syncBrowserOpenState(store, conversationId, browserTabId, {
        isOpen: visible,
        url: tabSnapshot.url,
      });
    },
  );

  useLayoutEffect(() => {
    const viewportContainer = viewportContainerRef.current;
    if (!viewportContainer) {
      setPanelBounds(null);
      return;
    }
    let rafHandle: number | null = null;
    const measureBounds = () => {
      const rect = viewportContainer.getBoundingClientRect();
      const nextBounds = {
        x: rect.x / windowZoom,
        y: rect.y / windowZoom,
        width: rect.width / windowZoom,
        height: rect.height / windowZoom,
      };
      setPanelBounds((previous) =>
        previous &&
        previous.x === nextBounds.x &&
        previous.y === nextBounds.y &&
        previous.width === nextBounds.width &&
        previous.height === nextBounds.height
          ? previous
          : nextBounds,
      );
    };
    const scheduleMeasure = () => {
      rafHandle ??= window.requestAnimationFrame(() => {
        rafHandle = null;
        measureBounds();
      });
    };
    const resizeObserver = new ResizeObserver(() => {
      measureBounds();
    });
    resizeObserver.observe(viewportContainer);
    measureBounds();
    if (isVisible) scheduleMeasure();
    const unsubscribeLayoutTick =
      panelTarget === "bottom"
        ? bottomPanelAnimation.on("change", scheduleMeasure)
        : rightPanelLayoutTick.on("change", scheduleMeasure);
    window.addEventListener("resize", measureBounds);
    return () => {
      if (rafHandle != null) window.cancelAnimationFrame(rafHandle);
      unsubscribeLayoutTick();
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureBounds);
    };
  }, [
    bottomPanelAnimation,
    isVisible,
    panelTarget,
    rightPanelLayoutTick,
    windowZoom,
  ]);

  useLayoutEffect(() => {
    if (panelTarget === "right") {
      store.set(browserDeviceToolbarLayoutAtom, emulatedViewport);
      return () => {
        store.set(browserDeviceToolbarLayoutAtom, null);
      };
    }
  }, [panelTarget, emulatedViewport, store]);

  useEffect(() => {
    if (!isVisible) {
      setHasSettledOpen(false);
      return;
    }
    if (prefersReducedMotion) {
      setHasSettledOpen(true);
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setHasSettledOpen(true);
    }, ANNOTATION_SETTLE_ANIMATION.duration * 1000);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isVisible, prefersReducedMotion]);

  useEffect(() => {
    if (!isVisible) {
      isChromeHoveredRef.current = false;
      return;
    }
    const viewportContainer = viewportContainerRef.current;
    const webviewElement = webviewElementRef.current;
    const handlePointerEnter = () => {
      isChromeHoveredRef.current = true;
    };
    const handlePointerLeave = () => {
      isChromeHoveredRef.current = false;
    };
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    const handleWebviewFocus = () => {
      closeMenu();
      resetBrowserChromeAutoHide(store);
      markBrowserToolbarInteracted(store, hostKind);
      setBrowserChromeForceVisible(store, false);
    };
    viewportContainer?.addEventListener("pointerenter", handlePointerEnter);
    viewportContainer?.addEventListener("pointerleave", handlePointerLeave);
    webviewElement?.addEventListener("pointerenter", handlePointerEnter);
    webviewElement?.addEventListener("pointerleave", handlePointerLeave);
    webviewElement?.addEventListener("focus", handleWebviewFocus);
    webviewElement?.addEventListener("pointerdown", closeMenu);
    if (document.activeElement === webviewElement) handleWebviewFocus();
    window.addEventListener("blur", handlePointerLeave);
    return () => {
      viewportContainer?.removeEventListener(
        "pointerenter",
        handlePointerEnter,
      );
      viewportContainer?.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      webviewElement?.removeEventListener("pointerenter", handlePointerEnter);
      webviewElement?.removeEventListener("pointerleave", handlePointerLeave);
      webviewElement?.removeEventListener("focus", handleWebviewFocus);
      webviewElement?.removeEventListener("pointerdown", closeMenu);
      window.removeEventListener("blur", handlePointerLeave);
      isChromeHoveredRef.current = false;
    };
  }, [conversationId, isVisible, hostKind, store, isWebviewHostActive]);

  useEffect(() => {
    syncBrowserOpenStateEvent();
  }, [tabSnapshot.url, browserTabId, conversationId, isVisible]);

  useEffect(() => {
    syncWebview();
  }, [
    deviceToolbar.height,
    deviceToolbar.isEnabled,
    deviceToolbar.width,
    isAnnotationModeEnabled,
    scaledBounds?.height,
    scaledBounds?.width,
    scaledBounds?.x,
    scaledBounds?.y,
    browserTabId,
    tabSnapshot.tabType,
    viewportScale,
    tabSnapshot.url,
    themeVariant,
    conversationId,
    cwd,
    hasBrowserPage,
    hasSnapshot,
    webviewKey,
    intl.defaultLocale,
    isAgentControllingBrowser,
    isVisible,
    hostKind,
    persistedTabsEnabled,
    effectiveLocale,
  ]);

  useEffect(() => {
    const pressed =
      hasBrowserPage && isVisible && isCommentMode && isDesignModifierPressed;
    vscodeApiF.dispatchMessage("browser-sidebar-command", {
      conversationId,
      command: { type: "set-design-modifier-pressed", pressed },
    });
  }, [
    conversationId,
    hasBrowserPage,
    isCommentMode,
    isDesignModifierPressed,
    isVisible,
  ]);

  useEffect(
    () => () => {
      syncBrowserOpenStateEvent(false);
      syncWebview({ visible: false, bounds: null });
    },
    [browserTabId, conversationId],
  );

  useEffect(() => {
    if (!isVisible) {
      hasTrackedPanelOpenRef.current = false;
      return;
    }
    if (hasTrackedPanelOpenRef.current) return;
    hasTrackedPanelOpenRef.current = true;
    const pendingSource = getPendingBrowserOpenSource(
      conversationId,
      browserTabId,
    );
    const pendingReason = getPendingBrowserOpenReason(
      conversationId,
      browserTabId,
    );
    const source = pendingOpenSourceRef.current ?? pendingSource ?? "manual";
    const initiator =
      pendingOpenInitiatorRef.current ??
      pendingReason ??
      "panel_visibility_effect";
    pendingOpenInitiatorRef.current = null;
    pendingOpenSourceRef.current = null;
    trackScopedAnalyticsEvent(store, browserPanelOpenedEvent, {
      initiator,
      panelTarget,
      source,
    });
  }, [browserTabId, conversationId, isVisible, panelTarget, store]);
}
