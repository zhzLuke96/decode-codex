// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Host-message subscriptions and comment synchronization effects for BrowserSidebar.

import { useEffect } from "react";
import { vscodeApiF } from "../boundaries/vscode-api";
import { browserSidebarMode } from "./browser-sidebar-state";
import { FOCUS_MODE } from "./browser-sidebar-host-utils";
import {
  browserNavigatedEvent,
  browserPanelOpenedEvent,
  extractBrowserComments,
  isBrowserTabMatch,
  isCommentForBrowserTab,
  openBrowserPanelForTab,
  setBrowserFindState,
  toBrowserCommentAttachment,
  toastControllerToken,
  trackScopedAnalyticsEvent,
  useHostMessageSubscription,
} from "../boundaries/onboarding-commons-externals.facade";

export function useBrowserSidebarMessageEffects(context: Record<string, any>) {
  const {
    activeBrowserTabId,
    activeFindTarget,
    browserTabId,
    conversationId,
    dispatchBrowserCommand,
    dispatchBrowserCommandEvent,
    dispatchZoomCommandRef,
    focusBrowserAddressBar,
    hasBrowserPage,
    intl,
    isBrowserManaged,
    isCommentMode,
    isTweaksEnabled,
    isVisible,
    openBrowserFindPanel,
    originalViewEnabledRef,
    panelTarget,
    pendingAnnotationCount,
    pendingOpenInitiatorRef,
    pendingOpenSourceRef,
    previewInteractionMode,
    setComments,
    snapshot,
    store,
    suppressCommentSyncRef,
    viewportContainerRef,
    webviewElementRef,
    isChromeHoveredRef,
  } = context;
  useHostMessageSubscription(
    "browser-sidebar-command",
    (message: {
      conversationId: string;
      browserTabId?: string;
      command: { type: string; interactionMode?: string };
    }) => {
      if (
        message.conversationId !== conversationId ||
        !isBrowserTabMatch(
          message.browserTabId,
          activeBrowserTabId,
          browserTabId,
        )
      ) {
        return;
      }
      switch (message.command.type) {
        case "open-find":
          openBrowserFindPanel();
          break;
        case "focus-address":
          focusBrowserAddressBar();
          break;
        case "step-zoom":
        case "set-zoom-percent":
        case "reset-zoom":
          dispatchZoomCommandRef.current?.(message.command);
          break;
        case "set-interaction-mode":
          previewInteractionMode(
            message.command.interactionMode!,
            message.command.interactionMode === browserSidebarMode.COMMENT
              ? FOCUS_MODE.FOCUS
              : FOCUS_MODE.NONE,
          );
          break;
        default:
          break;
      }
    },
    [activeBrowserTabId, browserTabId, conversationId],
  );
  useHostMessageSubscription(
    "electron-window-focus-changed",
    (message: { isFocused: boolean }) => {
      if (!message.isFocused) {
        isChromeHoveredRef.current = false;
        return;
      }
      if (!isVisible || !isCommentMode || !hasBrowserPage) return;
      isChromeHoveredRef.current =
        viewportContainerRef.current?.matches(":hover") === true ||
        webviewElementRef.current?.matches(":hover") === true;
      dispatchBrowserCommand({ type: "refresh-cursor" });
    },
    [browserTabId, conversationId, hasBrowserPage, isCommentMode, isVisible],
  );
  useHostMessageSubscription(
    "browser-sidebar-find-state",
    (message: {
      conversationId: string;
      browserTabId?: string;
      state: unknown;
    }) => {
      if (
        message.conversationId !== conversationId ||
        !isBrowserTabMatch(
          message.browserTabId,
          activeBrowserTabId,
          browserTabId,
        ) ||
        activeFindTarget?.conversationId !== conversationId ||
        activeFindTarget.browserTabId !== browserTabId
      ) {
        return;
      }
      setBrowserFindState(store, message.state);
    },
    [
      activeBrowserTabId,
      browserTabId,
      activeFindTarget?.browserTabId,
      activeFindTarget?.conversationId,
      conversationId,
      store,
    ],
  );
  useHostMessageSubscription(
    "toggle-browser-panel",
    (message: {
      conversationId?: string;
      browserTabId?: string;
      source?: string;
      open?: boolean;
      url?: string | null;
      initiator?: string;
    }) => {
      if (
        (message.conversationId != null &&
          message.conversationId !== conversationId) ||
        !isBrowserTabMatch(
          message.browserTabId,
          activeBrowserTabId,
          browserTabId,
        ) ||
        message.source == null
      ) {
        return;
      }
      if (message.open === false) {
        pendingOpenInitiatorRef.current = null;
        pendingOpenSourceRef.current = null;
        return;
      }
      if (isVisible && (message.open === true || message.url != null)) {
        const initiator = message.initiator ?? "panel_visibility_effect";
        pendingOpenInitiatorRef.current = null;
        pendingOpenSourceRef.current = null;
        trackScopedAnalyticsEvent(store, browserPanelOpenedEvent, {
          initiator,
          panelTarget,
          source: message.source,
          hasUrl: message.url == null ? undefined : true,
          panelWasAlreadyVisible: true,
        });
        return;
      }
      pendingOpenInitiatorRef.current = message.initiator ?? null;
      pendingOpenSourceRef.current = message.source;
      if (!isBrowserManaged) {
        openBrowserPanelForTab(conversationId, browserTabId, {
          initiator: message.initiator,
          source: message.source,
        });
      }
    },
    [
      activeBrowserTabId,
      browserTabId,
      conversationId,
      isBrowserManaged,
      isVisible,
      panelTarget,
      store,
    ],
  );
  useHostMessageSubscription(
    "browser-sidebar-usage",
    (message: {
      conversationId: string;
      browserTabId?: string;
      kind?: string;
      initiator?: string;
      source?: string;
      urlKind?: string;
    }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      if (message.kind === "navigated") {
        trackScopedAnalyticsEvent(store, browserNavigatedEvent, {
          initiator: message.initiator,
          panelTarget,
          source: message.source,
          urlKind: message.urlKind,
        });
      }
    },
    [browserTabId, conversationId, panelTarget, store],
  );
  useHostMessageSubscription(
    "browser-sidebar-screenshot-copied",
    (message: { conversationId: string; browserTabId?: string }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      store.get(toastControllerToken).success(
        intl.formatMessage({
          id: "thread.browser.screenshot.copied",
          defaultMessage: "Screenshot saved to clipboard",
          description:
            "Success toast shown after capturing the visible browser viewport to the clipboard",
        }),
      );
    },
    [browserTabId, conversationId, intl, store],
  );
  useHostMessageSubscription(
    "browser-sidebar-url-copied",
    (message: { conversationId: string; browserTabId?: string }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      store.get(toastControllerToken).success(
        intl.formatMessage({
          id: "thread.browser.url.copied",
          defaultMessage: "URL copied to clipboard",
          description:
            "Success toast shown after copying the current in-app browser URL to the clipboard with the keyboard shortcut",
        }),
      );
    },
    [browserTabId, conversationId, intl, store],
  );
  useHostMessageSubscription(
    "browser-sidebar-screenshot-copy-failed",
    (message: { conversationId: string; browserTabId?: string }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "thread.browser.screenshot.copyFailed",
          defaultMessage: "Unable to capture screenshot",
          description:
            "Error toast shown when capturing the visible browser viewport fails",
        }),
      );
    },
    [browserTabId, conversationId, intl, store],
  );

  useEffect(() => {
    if (snapshot == null) return;
    const nextComments = extractBrowserComments(
      snapshot.comments,
      isTweaksEnabled,
    );
    suppressCommentSyncRef.current = true;
    setComments((previous) => [
      ...previous.filter(
        (comment) => !isCommentForBrowserTab(comment, browserTabId),
      ),
      ...nextComments.map((comment, index) =>
        toBrowserCommentAttachment(comment, index + 1, browserTabId),
      ),
    ]);
  }, [browserTabId, isTweaksEnabled, setComments, snapshot]);

  useEffect(() => {
    const nextComments =
      snapshot == null
        ? []
        : extractBrowserComments(snapshot.comments, isTweaksEnabled);
    if (suppressCommentSyncRef.current) {
      suppressCommentSyncRef.current = false;
      return;
    }
    if (
      snapshot != null &&
      nextComments.length > 0 &&
      pendingAnnotationCount === 0
    ) {
      dispatchBrowserCommandEvent({ type: "clear-comments" });
    }
  }, [pendingAnnotationCount, conversationId, isTweaksEnabled, snapshot]);

  useEffect(
    () => () => {
      if (originalViewEnabledRef.current) {
        vscodeApiF.dispatchMessage("browser-sidebar-command", {
          conversationId,
          command: { type: "set-original-view-enabled", enabled: false },
        });
        originalViewEnabledRef.current = false;
      }
    },
    [conversationId],
  );
}
