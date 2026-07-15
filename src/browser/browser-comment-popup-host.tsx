// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Host that owns the floating browser-comment popup window: it opens/reuses the popup,
// mirrors host styles into it, and portals the comment overlay into the popup document.
import { useEffect, useRef, useState } from "react";
import { createPortal, flushSync } from "react-dom";
import { useIntl } from "../vendor/react-intl";
import { BrowserSidebarCommentOverlay } from "./browser-sidebar-comment-overlay";
import type { BrowserCommentSession } from "./browser-comment-overlay-types";
import {
  applyBrowserCommentPopupShake,
  resolveLightDismissBehavior,
} from "./browser-comment-popup-shake";
import { CommandKeymapStateListener } from "../composer/command-keymap-state-listener";
import type { DesignDraftGroup } from "./browser-comment-design-draft";
import {
  annotationScreenshotsModeAtom,
  appMessenger,
  appStoreScope,
  browserCommentSubmittedEvent,
  COMMENT_POPUP_ROOT_ID,
  ensureCommentPopupRoot,
  isBlankText,
  markBrowserCommentOverlayMounted,
  openCommentPopup,
  trackScopedAnalyticsEvent,
  useHostMessageSubscription,
  useScopedStore,
  useScopedValue,
  type CommentPopupHandle,
} from "../boundaries/onboarding-commons-externals.facade";

type CommentAnchorState = {
  anchor: { kind: string };
};

export type BrowserCommentPopupSession = BrowserCommentSession & {
  anchorState: CommentAnchorState;
  defaultDesignEditorOpen?: boolean;
  target: { mode: "create" | "edit" | "design"; commentId?: string };
};

export type BrowserCommentOverlayMessage = {
  browserTabId: string;
  conversationId: string;
  visible: boolean;
  shouldPrewarm?: boolean;
  session: BrowserCommentPopupSession;
  editorFrame: { x: number; y: number; width: number; height: number };
  overlayWindowBounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

type ActiveOverlay = {
  message: BrowserCommentOverlayMessage;
  root: HTMLElement;
  popupWindow: Window;
};

type SurfaceSize = { width: number; height: number };

export type BrowserCommentPopupHostProps = {
  browserTabId: string;
  conversationId: string;
  defaultCreateSubmitMode?: "saved" | "direct";
  onActiveEditorDismissRequestChange?: (
    requestDismiss: (() => boolean) | null,
  ) => void;
  showAdjustEntry?: boolean;
};

export function BrowserCommentPopupHost({
  browserTabId,
  conversationId,
  defaultCreateSubmitMode = "saved",
  onActiveEditorDismissRequestChange,
  showAdjustEntry = true,
}: BrowserCommentPopupHostProps) {
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const annotationScreenshotsMode = useScopedValue(
    annotationScreenshotsModeAtom,
  );

  const popupRef = useRef<CommentPopupHandle | null>(null);
  const pagehideCleanupRef = useRef<(() => void) | null>(null);
  const editorWrapperRef = useRef<HTMLDivElement | null>(null);
  const shakeAnimationFrameRef = useRef<number | null>(null);
  const activeSessionIdRef = useRef<string | null>(null);
  const submittedSessionIdRef = useRef<string | null>(null);
  const backdropPointerDownRef = useRef(false);

  const [isLightDismissible, setIsLightDismissible] = useState(true);
  const [isLightDismissArmed, setIsLightDismissArmed] = useState(false);
  const [mountedSessionId, setMountedSessionId] = useState<string | null>(null);
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(
    null,
  );

  const windowTitle = intl.formatMessage({
    id: "browserSidebarCommentOverlay.windowTitle",
    defaultMessage: "Browser comment",
    description: "Title for the floating browser comment editor window",
  });

  const handleMounted = (
    sessionId: string,
    surfaceSize: SurfaceSize,
    placementSurfaceSize?: unknown,
  ) => {
    markBrowserCommentOverlayMounted();
    setMountedSessionId(sessionId);
    appMessenger.dispatchMessage("browser-sidebar-comment-overlay-mounted", {
      browserTabId,
      conversationId,
      sessionId,
      placementSurfaceSize,
      surfaceSize,
    });
  };

  const triggerShake = () => {
    applyBrowserCommentPopupShake({
      animationFrameRef: shakeAnimationFrameRef,
      animationWindow: window,
      editorWrapper: editorWrapperRef.current,
    });
  };

  const handleLightDismissibilityChange = (value: boolean) => {
    setIsLightDismissible(value);
    setIsLightDismissArmed(false);
  };

  const handleOverlaySession = (message: BrowserCommentOverlayMessage) => {
    const clearOverlay = (rootToClear?: HTMLElement | null) => {
      flushSync(() => {
        setActiveOverlay(null);
        setMountedSessionId(null);
      });
      rootToClear?.replaceChildren();
    };

    if (
      message.browserTabId !== browserTabId ||
      message.conversationId !== conversationId
    ) {
      return;
    }

    if (!message.visible && !message.shouldPrewarm) {
      clearOverlay(
        popupRef.current?.window.document.getElementById(COMMENT_POPUP_ROOT_ID),
      );
      activeSessionIdRef.current = null;
      submittedSessionIdRef.current = null;
      return;
    }

    if (submittedSessionIdRef.current != null && message.visible) {
      if (
        submittedSessionIdRef.current === message.session.sessionId &&
        message.session.target.mode === "create"
      ) {
        return;
      }
      submittedSessionIdRef.current = null;
    }

    const isDifferentSession =
      activeSessionIdRef.current != null &&
      activeSessionIdRef.current !== message.session.sessionId;
    if (isDifferentSession && popupRef.current != null) {
      flushSync(() => {
        setActiveOverlay(null);
      });
      pagehideCleanupRef.current?.();
      pagehideCleanupRef.current = null;
      const previousWindow = popupRef.current.window;
      popupRef.current = null;
      if (!previousWindow.closed) previousWindow.close();
    }

    const popup = openCommentPopup({
      browserTabId,
      conversationId,
      openerWindow: window,
      existingPopup: popupRef.current,
      message,
    });
    if (popup == null) return;

    const { window: popupWindow } = popup;
    if (popupRef.current?.window !== popupWindow) {
      pagehideCleanupRef.current?.();
      const handlePagehide = () => {
        if (popupRef.current?.window === popupWindow) {
          popupRef.current = null;
          setActiveOverlay(null);
        }
      };
      popupWindow.addEventListener("pagehide", handlePagehide);
      pagehideCleanupRef.current = () => {
        popupWindow.removeEventListener("pagehide", handlePagehide);
      };
    }
    popupRef.current = popup;

    const root = ensureCommentPopupRoot(popupWindow, document, windowTitle);
    if (!message.visible || isDifferentSession) setMountedSessionId(null);
    root.style.visibility =
      !message.visible || isDifferentSession ? "hidden" : "";
    if (!message.visible || isDifferentSession) clearOverlay(root);
    if (!message.visible && !message.shouldPrewarm) {
      submittedSessionIdRef.current = null;
      return;
    }

    if (activeSessionIdRef.current !== message.session.sessionId) {
      if (shakeAnimationFrameRef.current != null) {
        popupWindow.cancelAnimationFrame(shakeAnimationFrameRef.current);
        shakeAnimationFrameRef.current = null;
      }
      editorWrapperRef.current?.classList.remove("browser-comment-popup-shake");
      activeSessionIdRef.current = message.session.sessionId;
      submittedSessionIdRef.current = null;
      setIsLightDismissible(
        message.session.target.mode === "edit" ||
          (isBlankText(message.session.body) &&
            (message.session.attachedImages?.length ?? 0) === 0),
      );
      setIsLightDismissArmed(false);
    }

    flushSync(() => {
      setActiveOverlay({ message, root, popupWindow });
    });
  };

  useHostMessageSubscription(
    "browser-sidebar-comment-overlay-session",
    handleOverlaySession,
    [browserTabId, conversationId, windowTitle],
  );

  const requestDismiss = (): boolean => {
    if (activeOverlay == null) return false;
    const sessionId = activeOverlay.message.session.sessionId;
    if (
      activeOverlay.message.session.target.mode === "design" ||
      resolveLightDismissBehavior({
        isLightDismissible,
        isLightDismissArmed,
      }) === "dismiss"
    ) {
      setActiveOverlay(null);
      submittedSessionIdRef.current = null;
      appMessenger.dispatchMessage("browser-sidebar-comment-overlay-close", {
        browserTabId,
        conversationId,
        sessionId,
      });
      return true;
    }
    setIsLightDismissArmed(true);
    activeOverlay.popupWindow.focus();
    triggerShake();
    return false;
  };

  useEffect(() => {
    if (onActiveEditorDismissRequestChange == null) return;
    if (
      activeOverlay == null ||
      !activeOverlay.message.visible ||
      activeOverlay.message.session.surfaceMode !== "editor"
    ) {
      onActiveEditorDismissRequestChange(null);
      return;
    }
    onActiveEditorDismissRequestChange(requestDismiss);
    return () => {
      onActiveEditorDismissRequestChange(null);
    };
  }, [onActiveEditorDismissRequestChange, activeOverlay, requestDismiss]);

  useEffect(
    () => () => {
      const popupWindow = popupRef.current?.window ?? null;
      if (shakeAnimationFrameRef.current != null) {
        window.cancelAnimationFrame(shakeAnimationFrameRef.current);
      }
      pagehideCleanupRef.current?.();
      pagehideCleanupRef.current = null;
      popupRef.current = null;
      if (popupWindow != null && !popupWindow.closed) popupWindow.close();
    },
    [],
  );

  if (activeOverlay == null) return null;

  const { message, root, popupWindow } = activeOverlay;
  const sessionId = message.session.sessionId;
  const isPreview = message.session.surfaceMode === "preview";
  const isHiddenSession = !message.visible || mountedSessionId !== sessionId;
  const designChange = message.session.designChange;
  const allowDesignTweaks =
    showAdjustEntry &&
    (message.session.designEditorState != null || designChange != null);

  const closeOverlay = () => {
    setActiveOverlay(null);
    submittedSessionIdRef.current = null;
    appMessenger.dispatchMessage("browser-sidebar-comment-overlay-close", {
      browserTabId,
      conversationId,
      sessionId,
    });
  };

  const dismissOrShake = () => {
    if (
      resolveLightDismissBehavior({
        isLightDismissible,
        isLightDismissArmed,
      }) === "dismiss"
    ) {
      closeOverlay();
      return;
    }
    setIsLightDismissArmed(true);
    popupWindow.focus();
    triggerShake();
  };

  const submitComment = (
    payload: {
      body: string;
      attachedImages?: unknown;
      designChange?: DesignDraftGroup | null;
    },
    options?: { submitDirectly?: boolean },
  ) => {
    const { body, attachedImages, designChange: payloadDesignChange } = payload;
    const { submitDirectly = false } = options ?? {};
    if (submittedSessionIdRef.current === sessionId) return;
    setActiveOverlay(null);
    if (message.session.target.mode !== "edit") {
      trackScopedAnalyticsEvent(store, browserCommentSubmittedEvent, {
        commentType: message.session.anchorState.anchor.kind,
        submitMode: submitDirectly ? "direct" : "saved",
        includesDesignTweak:
          (payloadDesignChange === undefined
            ? message.session.designChange
            : payloadDesignChange) != null,
      });
    }
    const screenshotsMode = annotationScreenshotsMode ?? "always";
    const cropScreenshotToRegion =
      message.session.anchorState.anchor.kind !== "element" &&
      screenshotsMode === "necessary";
    submittedSessionIdRef.current = sessionId;
    appMessenger.dispatchMessage("browser-sidebar-comment-overlay-submit", {
      browserTabId,
      conversationId,
      sessionId,
      body,
      attachedImages,
      designChange: payloadDesignChange,
      ...(cropScreenshotToRegion ? { cropScreenshotToRegion: true } : {}),
      ...(submitDirectly ? { submitDirectly: true } : {}),
    });
  };

  const handleAttachmentPreviewOpenChange = (previewOpen: boolean) => {
    appMessenger.dispatchMessage(
      "browser-sidebar-comment-overlay-preview-open-changed",
      {
        browserTabId,
        conversationId,
        sessionId,
        previewOpen,
      },
    );
  };

  const overlayStyle = isHiddenSession
    ? ({ visibility: "hidden" } as const)
    : undefined;

  const handleBackdropMouseDownCapture = () => {
    backdropPointerDownRef.current = false;
  };
  const handleBackdropMouseUp = () => {
    backdropPointerDownRef.current = false;
  };

  const keymapStateListener = (
    <CommandKeymapStateListener keyboardEventTarget={popupWindow} />
  );

  const backdrop = isPreview ? null : (
    <div
      className="absolute inset-0 bg-transparent"
      onMouseDown={(event) => {
        event.preventDefault();
        backdropPointerDownRef.current = true;
      }}
      onMouseUp={(event) => {
        event.preventDefault();
        if (backdropPointerDownRef.current) {
          backdropPointerDownRef.current = false;
          dismissOrShake();
        }
      }}
    />
  );

  const overlayFrameStyle = {
    left: message.editorFrame.x,
    top: message.editorFrame.y,
    width: message.editorFrame.width,
    height: message.editorFrame.height,
  };

  const overlayCreateSubmitMode =
    message.session.target.mode === "design"
      ? "saved"
      : defaultCreateSubmitMode;
  const overlayDefaultDesignEditorOpen =
    message.session.defaultDesignEditorOpen === true;

  const handleDirectSubmit = (payload: {
    body: string;
    attachedImages?: unknown;
    designChange?: DesignDraftGroup | null;
  }) => {
    submitComment(payload, { submitDirectly: true });
  };

  const handleDesignChangeUpdate = allowDesignTweaks
    ? (group: DesignDraftGroup | null) => {
        appMessenger.dispatchMessage("browser-sidebar-design-overlay-update", {
          conversationId,
          sessionId,
          group,
        });
      }
    : undefined;

  const handleDesignScrubPropertyChange = allowDesignTweaks
    ? (property: string | null) => {
        appMessenger.dispatchMessage(
          "browser-sidebar-comment-overlay-design-scrub-changed",
          {
            conversationId,
            sessionId,
            property,
          },
        );
      }
    : undefined;

  const handleDesignChangeDelete = allowDesignTweaks
    ? (groupId: string) => {
        setActiveOverlay(null);
        appMessenger.dispatchMessage("browser-sidebar-design-overlay-delete", {
          conversationId,
          sessionId,
          groupId,
        });
      }
    : undefined;

  const handleTweaksEditorOpenChange = (open: boolean) => {
    appMessenger.dispatchMessage(
      "browser-sidebar-comment-overlay-tweaks-open-changed",
      {
        conversationId,
        sessionId,
        open,
      },
    );
  };

  const handleDelete = (commentId: string) => {
    setActiveOverlay(null);
    appMessenger.dispatchMessage("browser-sidebar-comment-overlay-delete", {
      browserTabId,
      conversationId,
      sessionId,
      commentId,
    });
  };

  const handleEscape =
    message.session.target.mode === "design" ? closeOverlay : dismissOrShake;

  const overlay = (
    <BrowserSidebarCommentOverlay
      key={sessionId}
      allowDirectSubmit
      defaultCreateSubmitMode={overlayCreateSubmitMode}
      defaultDesignEditorOpen={overlayDefaultDesignEditorOpen}
      session={message.session}
      showAdjustEntry={showAdjustEntry}
      windowHeight={message.editorFrame.height}
      keyboardEventTarget={popupWindow}
      onSubmit={(payload) => submitComment(payload)}
      onDirectSubmit={handleDirectSubmit}
      onDesignChangeUpdate={handleDesignChangeUpdate}
      onDesignScrubPropertyChange={handleDesignScrubPropertyChange}
      onDesignChangeDelete={handleDesignChangeDelete}
      onTweaksEditorOpenChange={handleTweaksEditorOpenChange}
      onDelete={handleDelete}
      onCancel={closeOverlay}
      onEscape={handleEscape}
      onMounted={handleMounted}
      onAttachmentPreviewOpenChange={handleAttachmentPreviewOpenChange}
      onLightDismissibilityChange={handleLightDismissibilityChange}
    />
  );

  const overlayWrapper = (
    <div
      ref={editorWrapperRef}
      className="pointer-events-none absolute"
      style={overlayFrameStyle}
    >
      {overlay}
    </div>
  );

  const popupSurface = (
    <div
      className="relative h-screen w-screen overflow-hidden bg-transparent text-token-foreground"
      style={overlayStyle}
      onMouseDownCapture={handleBackdropMouseDownCapture}
      onMouseUp={handleBackdropMouseUp}
    >
      {keymapStateListener}
      {backdrop}
      {overlayWrapper}
    </div>
  );

  return createPortal(popupSurface, root);
}
