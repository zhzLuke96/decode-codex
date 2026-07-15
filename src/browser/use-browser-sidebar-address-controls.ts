// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Address-bar, find-panel, and visibility lifecycle controls for BrowserSidebar.

import * as React from "react";
import { useEffect, useLayoutEffect } from "react";
import { flushSync } from "react-dom";
import { vscodeApiF } from "../boundaries/vscode-api";
import { browserSidebarMode } from "./browser-sidebar-state";
import { browserSidebarManager } from "./sidebar-manager";
import { canDismissActiveEditor } from "./browser-sidebar-host-utils";
import {
  annotationFlowKind,
  browserAnnotationModeChangedEvent,
  browserAnnotationTakeoverEvent,
  clearBrowserFindFocus,
  clearBrowserPendingNavigation,
  clearBrowserPendingOpen,
  emptyBrowserFindState,
  getDefaultBrowserTabId,
  getPendingBrowserAddressOverride,
  isElementFocusWithin,
  isEventWithinElement,
  markBrowserTabVisited,
  normalizeBrowserUrl,
  openBrowserFind,
  setActiveBrowserFindTarget,
  setActiveSidePanelKind,
  setBrowserFindState,
  trackScopedAnalyticsEvent,
  useNamedKeyboardShortcut,
} from "../boundaries/onboarding-commons-externals.facade";

export function useBrowserSidebarAddressControls(context: Record<string, any>) {
  const {
    addressValue,
    activeFindTarget,
    activeEditorDismissRef,
    activeSidePanelKind,
    addressBarContainerRef,
    addressInputRef,
    annotationEditorModeLabel,
    annotationFlowKeyRef,
    autoFocusOnOpen,
    browserTabId,
    committedAddressRef,
    conversationId,
    currentUrl,
    buildBrowserCommandPayload,
    dispatchBrowserCommand,
    findFocusRequest,
    findState,
    hasBrowserPage,
    hasEditedAddressRef,
    hasPendingAnnotations,
    hasQueuedTweaks,
    hasSettledOpen,
    hasTrackedPanelOpenRef,
    isAddressEditing,
    isAnnotationSessionTakeoverActive,
    isAnnotationTakeoverVisible,
    isChromeHoveredRef,
    isFindActiveForTab,
    isManualOpen,
    isOpenedByAgent,
    isSecurityPopoverOpen,
    isSidePanelVisible,
    isStoppingAddressEditingRef,
    isVisible,
    isVisibleRef,
    isWebviewHostActive,
    panelTarget,
    pendingNavigationSnapshot,
    pendingOpenInitiatorRef,
    pendingOpenSourceRef,
    previousAnnotationStateRef,
    previousInteractionModeRef,
    previousTabIdentityRef,
    resolveAnnotationEntrySource,
    rootElementRef,
    setAddressValue,
    setIsAddressEditing,
    setIsAnnotateHoverSuppressed,
    setIsDownloadsOpen,
    setIsMenuOpen,
    setIsSecurityPopoverOpen,
    setPendingInteractionModeTransition,
    setPendingNavigationSnapshot,
    setShouldAnimateAddressExpansion,
    setShouldFocusWebviewAfterLoad,
    setViewportResizeScale,
    shouldFocusWebviewAfterLoad,
    shouldKeepAddressSelectedRef,
    snapshot,
    store,
    tabSnapshot,
    takeoverActiveKeyRef,
    viewportContainerRef,
    wasVisibleForUrlRef,
    wasVisibleRef,
    webviewElementRef,
  } = context;
  const resetAddressScroll = () => {
    const input = addressInputRef.current;
    if (!isVisibleRef.current || input == null) return;
    input.scrollLeft = 0;
  };
  const selectAddressText = () => {
    const input = addressInputRef.current;
    if (
      !isVisibleRef.current ||
      input == null ||
      hasEditedAddressRef.current ||
      !shouldKeepAddressSelectedRef.current
    ) {
      return;
    }
    input.setSelectionRange(0, input.value.length, "forward");
    resetAddressScroll();
  };
  const focusAddressInput = ({
    shouldSelectAddress,
  }: {
    shouldSelectAddress: boolean;
  }) => {
    const input = addressInputRef.current;
    if (shouldSelectAddress) shouldKeepAddressSelectedRef.current = true;
    input?.focus();
    resetAddressScroll();
    if (shouldSelectAddress) {
      selectAddressText();
      requestAnimationFrame(() => {
        resetAddressScroll();
        selectAddressText();
      });
    }
  };
  const beginAddressEditing = ({
    shouldSelectAddress,
  }: {
    shouldSelectAddress: boolean;
  }) => {
    isStoppingAddressEditingRef.current = false;
    if (!isAddressEditing) {
      hasEditedAddressRef.current = false;
      committedAddressRef.current = currentUrl;
      flushSync(() => {
        setAddressValue(tabSnapshot.url);
        setShouldAnimateAddressExpansion(hasSettledOpen);
        setIsAddressEditing(true);
      });
    }
    focusAddressInput({ shouldSelectAddress });
  };
  const focusBrowserAddressBar = () => {
    beginAddressEditing({ shouldSelectAddress: true });
  };
  const cancelAddressEditing = () => {
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    setAddressValue(tabSnapshot.url);
    setIsAddressEditing(false);
  };
  const stopAddressEditing = () => {
    if (isStoppingAddressEditingRef.current) return;
    isStoppingAddressEditingRef.current = true;
    cancelAddressEditing();
    const input = addressInputRef.current;
    if (input != null && input === document.activeElement) input.blur();
  };
  const stopAddressEditingEvent = React.useEffectEvent(stopAddressEditing);
  const ensureAddressEditing = () => {
    if (isAddressEditing) return;
    isStoppingAddressEditingRef.current = false;
    hasEditedAddressRef.current = false;
    committedAddressRef.current = currentUrl;
    if (tabSnapshot.url.length > 0) shouldKeepAddressSelectedRef.current = true;
    setAddressValue(tabSnapshot.url);
    setShouldAnimateAddressExpansion(hasSettledOpen);
    setIsAddressEditing(true);
    requestAnimationFrame(() => {
      resetAddressScroll();
      selectAddressText();
    });
  };
  const focusContentSearchInput = () => {
    window.requestAnimationFrame(() => {
      const searchInput = document.getElementById("content-search-input");
      if (searchInput instanceof HTMLInputElement) {
        searchInput.focus();
        searchInput.select();
      }
    });
  };
  const focusWebviewOrRoot = () => {
    window.requestAnimationFrame(() => {
      webviewElementRef.current?.focus();
      if (document.activeElement !== webviewElementRef.current) {
        rootElementRef.current?.focus();
      }
    });
  };

  useEffect(() => {
    if (
      findFocusRequest?.conversationId !== conversationId ||
      findFocusRequest.browserTabId !== browserTabId
    ) {
      return;
    }
    focusWebviewOrRoot();
    clearBrowserFindFocus(store);
  }, [
    browserTabId,
    findFocusRequest?.browserTabId,
    findFocusRequest?.conversationId,
    conversationId,
    store,
  ]);

  const closeBrowserFind = React.useEffectEvent(
    ({
      targetBrowserTabId = browserTabId,
      shouldRestoreFocus = true,
      targetConversationId = conversationId,
    }: {
      targetBrowserTabId?: string;
      shouldRestoreFocus?: boolean;
      targetConversationId?: string;
    } = {}) => {
      if (
        activeFindTarget?.conversationId === targetConversationId &&
        activeFindTarget.browserTabId === targetBrowserTabId
      ) {
        if (isSidePanelVisible && activeSidePanelKind === "browser") {
          setActiveBrowserFindTarget(store, null);
        }
        setBrowserFindState(store, emptyBrowserFindState);
      }
      vscodeApiF.dispatchMessage(
        "browser-sidebar-command",
        buildBrowserCommandPayload({
          command: { type: "close-find" },
          targetBrowserTabId,
          targetConversationId,
        }),
      );
      if (shouldRestoreFocus) focusWebviewOrRoot();
    },
  );
  const openBrowserFindPanel = () => {
    setActiveBrowserFindTarget(store, { browserTabId, conversationId });
    setActiveSidePanelKind(store, "browser");
    openBrowserFind(store);
    focusContentSearchInput();
  };

  useEffect(() => {
    if (!shouldFocusWebviewAfterLoad || !isWebviewHostActive) return;
    const handle = requestAnimationFrame(() => {
      webviewElementRef.current?.focus();
      setShouldFocusWebviewAfterLoad(false);
    });
    return () => {
      cancelAnimationFrame(handle);
    };
  }, [shouldFocusWebviewAfterLoad, isWebviewHostActive]);

  useEffect(() => {
    const shouldKeepSelectedOnUpdate =
      isAddressEditing &&
      addressInputRef.current === document.activeElement &&
      !hasEditedAddressRef.current &&
      currentUrl.length > 0;
    if (
      isAddressEditing &&
      addressInputRef.current === document.activeElement &&
      hasEditedAddressRef.current
    ) {
      if (currentUrl !== committedAddressRef.current) stopAddressEditingEvent();
      return;
    }
    if (pendingNavigationSnapshot !== undefined) {
      if (snapshot === pendingNavigationSnapshot) return;
      setPendingNavigationSnapshot(undefined);
    }
    hasEditedAddressRef.current = false;
    if (shouldKeepSelectedOnUpdate) shouldKeepAddressSelectedRef.current = true;
    setAddressValue(currentUrl);
  }, [pendingNavigationSnapshot, currentUrl, isAddressEditing, snapshot]);

  useLayoutEffect(() => {
    const previous = previousTabIdentityRef.current;
    if (
      previous.browserTabId === browserTabId &&
      previous.conversationId === conversationId
    ) {
      return;
    }
    clearBrowserPendingNavigation(
      previous.conversationId,
      previous.browserTabId,
    );
    clearBrowserPendingOpen(previous.conversationId, previous.browserTabId);
    const input = addressInputRef.current;
    if (input != null && input === document.activeElement) input.blur();
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    isStoppingAddressEditingRef.current = false;
    isChromeHoveredRef.current = false;
    previousInteractionModeRef.current = tabSnapshot.interactionMode;
    pendingOpenInitiatorRef.current = null;
    pendingOpenSourceRef.current = null;
    hasTrackedPanelOpenRef.current = false;
    annotationFlowKeyRef.current = null;
    takeoverActiveKeyRef.current = null;
    setAddressValue(currentUrl);
    setPendingNavigationSnapshot(undefined);
    setViewportResizeScale(null);
    setIsAddressEditing(false);
    setIsMenuOpen(false);
    setIsSecurityPopoverOpen(false);
    setIsDownloadsOpen(false);
    setIsAnnotateHoverSuppressed(false);
    setPendingInteractionModeTransition(null);
    setShouldAnimateAddressExpansion(false);
    setShouldFocusWebviewAfterLoad(false);
  }, [
    currentUrl,
    tabSnapshot.interactionMode,
    tabSnapshot.url,
    browserTabId,
    conversationId,
  ]);

  useEffect(() => {
    if (!isVisible && wasVisibleForUrlRef.current) {
      markBrowserTabVisited(conversationId, browserTabId);
    }
    if (!isVisible) {
      shouldKeepAddressSelectedRef.current = false;
      isStoppingAddressEditingRef.current = false;
      setShouldAnimateAddressExpansion(false);
      setIsAddressEditing(false);
      setIsSecurityPopoverOpen(false);
    }
    if (isVisible && tabSnapshot.url.length > 0) {
      markBrowserTabVisited(conversationId, browserTabId);
      clearBrowserPendingNavigation(conversationId, browserTabId);
      clearBrowserPendingOpen(conversationId, browserTabId);
    }
    wasVisibleForUrlRef.current = isVisible;
  }, [tabSnapshot.url, browserTabId, conversationId, isVisible]);

  useEffect(() => {
    const previous = previousTabIdentityRef.current;
    previousTabIdentityRef.current = {
      browserTabId,
      conversationId,
      url: tabSnapshot.url,
    };
    if (
      isVisible &&
      hasBrowserPage &&
      previous.browserTabId === browserTabId &&
      previous.conversationId === conversationId &&
      previous.url === tabSnapshot.url
    ) {
      return;
    }
    const wasActiveFindTarget =
      activeFindTarget?.conversationId === previous.conversationId &&
      activeFindTarget.browserTabId === previous.browserTabId;
    const wasBrowserFindOpen =
      isSidePanelVisible &&
      activeSidePanelKind === "browser" &&
      wasActiveFindTarget;
    const hasFindContext = findState.query.length > 0 || wasBrowserFindOpen;
    if (wasActiveFindTarget && hasFindContext) {
      closeBrowserFind({
        shouldRestoreFocus: false,
        targetBrowserTabId: previous.browserTabId,
        targetConversationId: previous.conversationId,
      });
    }
  }, [
    browserTabId,
    tabSnapshot.url,
    conversationId,
    findState.query.length,
    activeFindTarget?.browserTabId,
    activeFindTarget?.conversationId,
    hasBrowserPage,
    isSidePanelVisible,
    isFindActiveForTab,
    activeSidePanelKind,
    isVisible,
  ]);

  useEffect(() => {
    const previous = previousAnnotationStateRef.current;
    previousAnnotationStateRef.current = {
      browserTabId,
      conversationId,
      interactionMode: tabSnapshot.interactionMode,
      isAnnotationSessionTakeoverActive: isAnnotationTakeoverVisible,
      isVisible,
    };
    if (
      previous.isVisible &&
      previous.interactionMode === browserSidebarMode.COMMENT &&
      !previous.isAnnotationSessionTakeoverActive &&
      !(
        isVisible &&
        previous.browserTabId === browserTabId &&
        previous.conversationId === conversationId
      ) &&
      canDismissActiveEditor(activeEditorDismissRef.current)
    ) {
      vscodeApiF.dispatchMessage("browser-sidebar-command", {
        conversationId: previous.conversationId,
        ...(previous.browserTabId ===
        getDefaultBrowserTabId(previous.conversationId)
          ? {}
          : { browserTabId: previous.browserTabId }),
        command: {
          type: "set-interaction-mode",
          interactionMode: browserSidebarMode.BROWSE,
        },
      });
    }
  }, [
    tabSnapshot.interactionMode,
    browserTabId,
    conversationId,
    isAnnotationTakeoverVisible,
    isVisible,
  ]);

  useEffect(() => {
    if (!isVisible || (!isAddressEditing && !isSecurityPopoverOpen)) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      setIsSecurityPopoverOpen(false);
      if (
        isAddressEditing &&
        target instanceof Node &&
        !addressBarContainerRef.current?.contains(target) &&
        !(
          target instanceof Element &&
          target.closest("[data-browser-sidebar-skip-address-commit='true']") !=
            null
        )
      ) {
        stopAddressEditingEvent();
      }
    };
    const handleContainerPointerDown = () => {
      setIsSecurityPopoverOpen(false);
      if (isAddressEditing) stopAddressEditingEvent();
    };
    const handleWindowFocus = () => {
      setIsSecurityPopoverOpen(false);
    };
    const viewportContainer = viewportContainerRef.current;
    const webviewElement = webviewElementRef.current;
    window.addEventListener("pointerdown", handlePointerDown, true);
    viewportContainer?.addEventListener(
      "pointerdown",
      handleContainerPointerDown,
    );
    webviewElement?.addEventListener("pointerdown", handleContainerPointerDown);
    webviewElement?.addEventListener("focus", handleContainerPointerDown);
    window.addEventListener("focus", handleWindowFocus);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown, true);
      viewportContainer?.removeEventListener(
        "pointerdown",
        handleContainerPointerDown,
      );
      webviewElement?.removeEventListener(
        "pointerdown",
        handleContainerPointerDown,
      );
      webviewElement?.removeEventListener("focus", handleContainerPointerDown);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [isAddressEditing, isSecurityPopoverOpen, isVisible]);

  useEffect(() => {
    if (snapshot == null) {
      annotationFlowKeyRef.current = null;
      return;
    }
    const annotationFlowKey = `${tabSnapshot.interactionMode}:${tabSnapshot.annotationFlow ?? annotationFlowKind.BATCH}`;
    const previousKey = annotationFlowKeyRef.current;
    annotationFlowKeyRef.current = annotationFlowKey;
    if (
      !isVisible ||
      previousKey == null ||
      previousKey === annotationFlowKey
    ) {
      return;
    }
    const entrySource =
      tabSnapshot.interactionMode === browserSidebarMode.COMMENT
        ? resolveAnnotationEntrySource(tabSnapshot.annotationModeEntrySource)
        : undefined;
    trackScopedAnalyticsEvent(store, browserAnnotationModeChangedEvent, {
      enabled: tabSnapshot.interactionMode === browserSidebarMode.COMMENT,
      hasPendingAnnotations,
      hasQueuedDesignTweaks: hasQueuedTweaks,
      annotationEditorMode: annotationEditorModeLabel,
      entrySource,
    });
  }, [
    annotationEditorModeLabel,
    tabSnapshot.annotationFlow,
    tabSnapshot.annotationModeEntrySource,
    tabSnapshot.interactionMode,
    hasPendingAnnotations,
    hasQueuedTweaks,
    isVisible,
    store,
    snapshot,
  ]);

  useEffect(() => {
    if (snapshot == null) {
      takeoverActiveKeyRef.current = null;
      return;
    }
    const previousKey = takeoverActiveKeyRef.current;
    takeoverActiveKeyRef.current = isAnnotationSessionTakeoverActive;
    if (
      !isVisible ||
      previousKey == null ||
      previousKey === isAnnotationSessionTakeoverActive
    ) {
      return;
    }
    trackScopedAnalyticsEvent(store, browserAnnotationTakeoverEvent, {
      enabled: isAnnotationSessionTakeoverActive,
      hasPendingAnnotations,
      hasQueuedDesignTweaks: hasQueuedTweaks,
    });
  }, [
    hasPendingAnnotations,
    hasQueuedTweaks,
    isAnnotationSessionTakeoverActive,
    isVisible,
    store,
    snapshot,
  ]);

  useEffect(() => {
    const previousInteractionMode = previousInteractionModeRef.current;
    previousInteractionModeRef.current = tabSnapshot.interactionMode;
    if (
      isVisible &&
      isFindActiveForTab &&
      previousInteractionMode === browserSidebarMode.COMMENT &&
      tabSnapshot.interactionMode === browserSidebarMode.BROWSE
    ) {
      focusContentSearchInput();
    }
  }, [tabSnapshot.interactionMode, isFindActiveForTab, isVisible]);

  useLayoutEffect(() => {
    selectAddressText();
  }, [addressValue, isAddressEditing]);

  useLayoutEffect(() => {
    const wasVisible = wasVisibleRef.current;
    const becameVisible = isVisible && !wasVisible;
    wasVisibleRef.current = isVisible;
    if (!autoFocusOnOpen || !becameVisible) return;
    const pendingOverride = getPendingBrowserAddressOverride(
      conversationId,
      browserTabId,
    );
    const currentSnapshot = browserSidebarManager.getSnapshot(
      conversationId,
      browserTabId,
    );
    let resolvedUrl = pendingOverride ?? "";
    if (currentSnapshot != null) {
      resolvedUrl =
        normalizeBrowserUrl(currentSnapshot.url).length === 0
          ? (pendingOverride ?? currentSnapshot.url)
          : currentSnapshot.url;
    }
    const shouldFocusAddress =
      !isOpenedByAgent && normalizeBrowserUrl(resolvedUrl).length === 0;
    if (!shouldFocusAddress && !(isManualOpen && !shouldFocusAddress)) return;
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    if (shouldFocusAddress) {
      flushSync(() => {
        setAddressValue("");
        setShouldAnimateAddressExpansion(false);
        setIsAddressEditing(true);
      });
      addressInputRef.current?.focus();
    }
    const handle = requestAnimationFrame(() => {
      if (isVisibleRef.current) {
        if (shouldFocusAddress) {
          addressInputRef.current?.focus();
          return;
        }
        webviewElementRef.current?.focus();
      }
    });
    return () => {
      cancelAnimationFrame(handle);
    };
  }, [
    autoFocusOnOpen,
    browserTabId,
    conversationId,
    isOpenedByAgent,
    isManualOpen,
    isVisible,
  ]);

  useNamedKeyboardShortcut("focusBrowserAddressBar", focusBrowserAddressBar, {
    enabled: isVisible,
    isActive: (state: {
      originPanel?: string | null;
      keyboardOrigin?: string;
    }) =>
      state?.originPanel == null
        ? state?.keyboardOrigin === "browser-web-contents"
          ? true
          : isElementFocusWithin(rootElementRef.current)
        : state.originPanel === panelTarget,
    keyboardHandler: (
      event: KeyboardEvent,
      options?: { keyboardOrigin?: string },
    ) => {
      if (
        !isEventWithinElement(
          event,
          rootElementRef.current,
          options?.keyboardOrigin,
        )
      ) {
        return false;
      }
    },
  });
  const navigationKeyboardHandler = (event: KeyboardEvent) => {
    const target = event.target;
    if (
      event.defaultPrevented ||
      (target instanceof Element &&
        target.closest(
          "input,textarea,select,[contenteditable='true'],[data-codex-composer],[data-codex-terminal]",
        ) != null)
    ) {
      return false;
    }
  };
  useNamedKeyboardShortcut(
    "navigateBrowserBack",
    () => {
      dispatchBrowserCommand({ type: "go-back" });
    },
    { enabled: isVisible, keyboardHandler: navigationKeyboardHandler },
  );
  useNamedKeyboardShortcut(
    "navigateBrowserForward",
    () => {
      dispatchBrowserCommand({ type: "go-forward" });
    },
    { enabled: isVisible, keyboardHandler: navigationKeyboardHandler },
  );

  return {
    beginAddressEditing,
    cancelAddressEditing,
    ensureAddressEditing,
    focusBrowserAddressBar,
    openBrowserFindPanel,
    stopAddressEditing,
  };
}
