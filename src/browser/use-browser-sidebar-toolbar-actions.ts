// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Toolbar labels and action handlers for BrowserSidebar.

import * as React from "react";
import { useCallback, useEffect } from "react";
import { vscodeApiF } from "../boundaries/vscode-api";
import { browserSidebarManager } from "./sidebar-manager";
import {
  canDismissActiveEditor,
  createDefaultDesignHoldState,
  isSpaceOrEnterKey,
  splitCertificateErrorScheme,
} from "./browser-sidebar-host-utils";
import {
  browserOpenedInExternalEvent,
  browserToolbarActionEvent,
  browserToolbarActionType,
  discardBrowserAnnotationsModalConfig,
  floatingComposerMessages,
  formatBrowserAddressDisplay,
  getResponsiveViewportSize,
  normalizeBrowserUrl,
  openExternalLink,
  openScopedConfirmModal,
  resolveBrowserNavigationUrl,
  rotateDeviceToolbarState,
  trackScopedAnalyticsEvent,
} from "../boundaries/onboarding-commons-externals.facade";

export function useBrowserSidebarToolbarActions(context: Record<string, any>) {
  const {
    activeEditorDismissRef,
    addressValue,
    browserTabId,
    conversationId,
    designHoldStateForConversation,
    deviceToolbar,
    dispatchBrowserCommand,
    goLinksConfig,
    hasBrowserPage,
    hasEditedAddressRef,
    hasQueuedTweaks,
    intl,
    isAddressEditing,
    isAnnotationSessionTakeoverActive,
    isFloatingComposerToggleVisible,
    isFloatingComposerVisible,
    isOwlPermissionsEnabled,
    isVisible,
    originalViewEnabledRef,
    panelBounds,
    setAddressValue,
    setDesignHoldState,
    setPendingNavigationSnapshot,
    setShouldFocusWebviewAfterLoad,
    shouldKeepAddressSelectedRef,
    snapshot,
    store,
    tabSnapshot,
  } = context;
  const commitAddress = ({
    value,
    shouldNavigateUnchanged,
  }: {
    value: string;
    shouldNavigateUnchanged?: boolean;
  }) => {
    const nextUrl = resolveBrowserNavigationUrl(value, goLinksConfig);
    const currentNormalized = resolveBrowserNavigationUrl(
      tabSnapshot.url,
      goLinksConfig,
    );
    const isUnchanged =
      normalizeBrowserUrl(nextUrl) === normalizeBrowserUrl(currentNormalized);
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    setAddressValue(nextUrl);
    if (nextUrl.length !== 0 && !(!shouldNavigateUnchanged && isUnchanged)) {
      setPendingNavigationSnapshot(snapshot);
      setShouldFocusWebviewAfterLoad(true);
      if (isUnchanged) {
        reloadPage();
        return;
      }
      dispatchBrowserCommand({
        type: "navigate",
        url: nextUrl,
        source: "manual",
        initiator: "address_bar",
      });
    }
  };
  const backLabel = intl.formatMessage({
    id: "thread.browser.back",
    defaultMessage: "Back",
    description: "Button label to navigate back in the inline browser",
  });
  const forwardLabel = intl.formatMessage({
    id: "thread.browser.next",
    defaultMessage: "Next",
    description: "Button label to navigate forward in the inline browser",
  });
  const stopLoadingLabel = intl.formatMessage({
    id: "thread.browser.stopLoading",
    defaultMessage: "Stop loading",
    description: "Tooltip text for stopping an in-flight browser navigation",
  });
  const reloadLabel = intl.formatMessage({
    id: "thread.browser.reload",
    defaultMessage: "Reload page",
    description: "Tooltip text for reloading the browser page",
  });
  const addressPlaceholder = intl.formatMessage({
    id: "thread.browser.addressPlaceholder",
    defaultMessage: "Enter a URL",
    description: "Placeholder text for the browser address bar",
  });
  const openExternalBrowserLabel = intl.formatMessage({
    id: "thread.browser.openExternalBrowser",
    defaultMessage: "Open in external browser",
    description:
      "Tooltip text for opening the current inline browser URL outside the app",
  });
  const commentModeUnavailableLabel = intl.formatMessage({
    id: "thread.browser.commentModeUnavailableForSite",
    defaultMessage: "Annotating is disabled for this website",
    description:
      "Tooltip shown when annotating is disabled for the current website",
  });
  const captureScreenshotLabel = intl.formatMessage({
    id: "thread.browser.captureScreenshot",
    defaultMessage: "Take a screenshot",
    description:
      "Tooltip text for capturing the visible browser viewport to the clipboard",
  });
  const certificateErrorSchemeParts =
    !isAddressEditing &&
    isOwlPermissionsEnabled &&
    tabSnapshot.securityState === "certificate-error"
      ? splitCertificateErrorScheme(addressValue)
      : null;
  let displayUrl = formatBrowserAddressDisplay(addressValue);
  if (isAddressEditing || certificateErrorSchemeParts != null) {
    displayUrl = addressValue;
  }
  const hasDisplayUrl = displayUrl.trim().length > 0;

  useEffect(() => {
    if (isAnnotationSessionTakeoverActive && hasQueuedTweaks) return;
    setDesignHoldState((previous) =>
      previous.conversationId !== conversationId || !previous.isHeld
        ? previous
        : createDefaultDesignHoldState(conversationId),
    );
  }, [conversationId, hasQueuedTweaks, isAnnotationSessionTakeoverActive]);
  const isOriginalViewEnabled =
    isAnnotationSessionTakeoverActive &&
    hasQueuedTweaks &&
    designHoldStateForConversation.isHeld;
  useEffect(() => {
    if (originalViewEnabledRef.current !== isOriginalViewEnabled) {
      originalViewEnabledRef.current = isOriginalViewEnabled;
      vscodeApiF.dispatchMessage("browser-sidebar-command", {
        conversationId,
        command: {
          type: "set-original-view-enabled",
          enabled: isOriginalViewEnabled,
        },
      });
    }
  }, [conversationId, isOriginalViewEnabled]);

  const discardAnnotations = () => {
    dispatchBrowserCommand({ type: "discard-pending-annotations" });
  };
  const addAnnotationsToComposer = () => {
    dispatchBrowserCommand({ type: "add-annotations-to-composer" });
  };
  const setActiveEditorDismissHandler = useCallback(
    (handler: (() => boolean) | null) => {
      activeEditorDismissRef.current = handler;
    },
    [],
  );
  const exitAnnotationTakeover = () => {
    if (canDismissActiveEditor(activeEditorDismissRef.current)) {
      addAnnotationsToComposer();
    }
  };
  const confirmDiscardAnnotations = () => {
    openScopedConfirmModal(store, discardBrowserAnnotationsModalConfig, {
      onConfirm: discardAnnotations,
    });
  };
  const holdOriginalView = () => {
    setDesignHoldState({ conversationId, isHeld: true });
  };
  const releaseOriginalView = () => {
    setDesignHoldState((previous) =>
      previous.conversationId === conversationId && previous.isHeld
        ? { ...previous, isHeld: false }
        : previous,
    );
  };
  const handleOriginalViewPointerDown = (event: React.PointerEvent) => {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    holdOriginalView();
  };
  const handleOriginalViewKeyDown = (event: React.KeyboardEvent) => {
    if (!isSpaceOrEnterKey(event.key) || event.repeat) return;
    event.preventDefault();
    holdOriginalView();
  };
  const handleOriginalViewPointerUp = (event: React.PointerEvent) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId) === true) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    releaseOriginalView();
  };
  const handleOriginalViewKeyUp = (event: React.KeyboardEvent) => {
    if (isSpaceOrEnterKey(event.key)) {
      event.preventDefault();
      releaseOriginalView();
    }
  };
  const handleOriginalViewPointerCancel = (event: React.PointerEvent) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId) === true) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDesignHoldState(createDefaultDesignHoldState(conversationId));
  };
  const getResponsiveViewportSizeForState = ({
    responsiveViewportSize,
  }: {
    responsiveViewportSize?: unknown;
  }) => responsiveViewportSize ?? getResponsiveViewportSize(panelBounds);
  const setDeviceToolbarTabState = (
    updater: (previous: {
      toolbarState: unknown;
      responsiveViewportSize?: unknown;
    }) => unknown,
  ) => {
    browserSidebarManager.setDeviceToolbarTabState(
      conversationId,
      browserTabId,
      updater,
    );
  };
  const handleDeviceToolbarStateChange = (
    nextToolbarState: { presetId?: string; height: number; width: number },
    options: { shouldResetPageZoom?: boolean } = {},
  ) => {
    setDeviceToolbarTabState((previous) =>
      nextToolbarState.presetId === "responsive"
        ? {
            responsiveViewportSize: {
              height: nextToolbarState.height,
              width: nextToolbarState.width,
            },
            toolbarState: nextToolbarState,
          }
        : { ...previous, toolbarState: nextToolbarState },
    );
    if (options.shouldResetPageZoom === true) {
      dispatchBrowserCommand({ type: "set-zoom-percent", zoomPercent: 100 });
    }
  };
  const toggleDeviceToolbar = () => {
    if (!deviceToolbar.isEnabled) {
      trackScopedAnalyticsEvent(store, browserToolbarActionEvent, {
        action:
          browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_MODE_ENTERED,
      });
    }
    setDeviceToolbarTabState((previous) => {
      const toolbarState = previous.toolbarState;
      return toolbarState.isEnabled
        ? { ...previous, toolbarState: { ...toolbarState, isEnabled: false } }
        : toolbarState.presetId === "responsive"
          ? {
              ...previous,
              toolbarState: {
                ...toolbarState,
                ...getResponsiveViewportSizeForState(previous),
                isEnabled: true,
              },
            }
          : { ...previous, toolbarState: { ...toolbarState, isEnabled: true } };
    });
  };
  const rotateDeviceToolbar = () => {
    setDeviceToolbarTabState((previous) => {
      const rotated = rotateDeviceToolbarState(previous.toolbarState);
      return rotated.presetId === "responsive"
        ? {
            responsiveViewportSize: {
              height: rotated.height,
              width: rotated.width,
            },
            toolbarState: rotated,
          }
        : { ...previous, toolbarState: rotated };
    });
  };
  const openInExternalBrowser = (value: string) => {
    if (value.trim().length === 0) return;
    trackScopedAnalyticsEvent(store, browserToolbarActionEvent, {});
    trackScopedAnalyticsEvent(store, browserOpenedInExternalEvent, {
      action:
        browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_OPENED_IN_EXTERNAL_BROWSER,
    });
    openExternalLink({
      href: resolveBrowserNavigationUrl(value, goLinksConfig),
      initiator: "open_in_browser_bridge",
      openTarget: "external-browser",
    });
  };
  const preventDefaultAndStop = (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const reloadPage = (ignoreCache = false) => {
    dispatchBrowserCommand(
      ignoreCache ? { type: "reload", ignoreCache: true } : { type: "reload" },
    );
  };
  const reloadOrStop = () => {
    if (tabSnapshot.isLoading) {
      dispatchBrowserCommand({ type: "stop" });
      return;
    }
    reloadPage();
  };
  const isFloatingComposerToggleAvailable =
    isVisible &&
    isFloatingComposerToggleVisible &&
    hasBrowserPage &&
    !deviceToolbar.isEnabled;
  const floatingComposerToggleLabel = isFloatingComposerVisible
    ? intl.formatMessage(floatingComposerMessages.hideFloatingComposer)
    : intl.formatMessage(floatingComposerMessages.showFloatingComposer);

  return {
    addAnnotationsToComposer,
    addressPlaceholder,
    backLabel,
    captureScreenshotLabel,
    certificateErrorSchemeParts,
    commentModeUnavailableLabel,
    commitAddress,
    confirmDiscardAnnotations,
    displayUrl,
    exitAnnotationTakeover,
    floatingComposerToggleLabel,
    forwardLabel,
    handleDeviceToolbarStateChange,
    handleOriginalViewKeyDown,
    handleOriginalViewKeyUp,
    handleOriginalViewPointerCancel,
    handleOriginalViewPointerDown,
    handleOriginalViewPointerUp,
    hasDisplayUrl,
    isFloatingComposerToggleAvailable,
    isOriginalViewEnabled,
    openExternalBrowserLabel,
    openInExternalBrowser,
    preventDefaultAndStop,
    releaseOriginalView,
    reloadLabel,
    reloadOrStop,
    reloadPage,
    rotateDeviceToolbar,
    setActiveEditorDismissHandler,
    stopLoadingLabel,
    toggleDeviceToolbar,
  };
}
