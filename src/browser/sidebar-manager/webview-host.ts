// Restored from ref/webview/assets/browser-sidebar-manager-DZM0wpKX.js
// browser-sidebar-manager-DZM0wpKX chunk restored from the Codex webview bundle.
import { vscodeApiH as vscodeLogger } from "../../boundaries/vscode-api";
import {
  ADOPTED_INITIAL_URL_ATTRIBUTE,
  ADOPTED_WEB_CONTENTS_ID_ATTRIBUTE,
  ADOPTION_LEASE_ATTRIBUTE,
  BLANK_WEBVIEW_URL,
  BROWSER_TAB_ID_ATTRIBUTE,
  CONVERSATION_ID_ATTRIBUTE,
  CURSOR_OVERLAY_HOST_ATTRIBUTE,
  applyHiddenVisibleWebviewStyle,
  applyParkedWebviewStyle,
  applyRetainedHiddenWebviewStyle,
  applyRetainedParkedWebviewStyle,
  applyRetainedVisibleWebviewStyle,
  applyStagedWebviewStyle,
  applyVisibleWebviewStyle,
  destroyWebviewIfPossible,
  getElectronBrowserUseBounds,
  getRetainedWebviewBounds,
  getVisibleWebviewBounds,
  getWebviewLayerRoot,
  resetElectronWebviewBackground,
  resetRetainedWebviewBackground,
  setBrowserSidebarHostKindAttribute,
  setDefaultWebviewAttributes,
  setRetainedWebviewAttributes,
  shouldFocusVisibleWebview,
  updateWebviewRef,
} from "./dom";
import type {
  BrowserSidebarBounds,
  BrowserSidebarHostKind,
  BrowserSidebarRetainedWebviewCreateOptions,
  BrowserSidebarSize,
  BrowserSidebarWebviewCreateOptions,
  BrowserSidebarWebviewElement,
  BrowserSidebarWebviewRef,
  BrowserSidebarWebviewState,
} from "./types";
type SyncResult = "bootstrap" | "hidden" | "staged" | "visible";
export class ElectronBrowserSidebarWebviewHost {
  private browserTabId: string;
  private browserUseCaptureSurfaceSize: BrowserSidebarSize | null = null;
  private browserUseViewportSize: BrowserSidebarSize | null = null;
  private container: HTMLElement | null;
  private conversationId: string;
  private cursorOverlayHost: HTMLElement | null;
  private hasBrowserUsePaintHost = false;
  private hostKind: BrowserSidebarHostKind;
  private isAttached = false;
  private isBrowserUseActive = false;
  private isDisposed = false;
  private isInteractionBlocked = false;
  private isStaged = false;
  private isTabCaptureActive = false;
  private lastVisibleBounds: BrowserSidebarBounds | null = null;
  private shouldDetachWhenInactive = false;
  private state: BrowserSidebarWebviewState = {
    bounds: null,
    isVisible: false,
    mountGeneration: 0,
    scale: 1,
    shouldPaint: true,
    windowZoom: 1,
  };
  private webview: BrowserSidebarWebviewElement | null;
  private webviewRef: BrowserSidebarWebviewRef | null = null;
  constructor({
    adoptionLease,
    adoptedWebContentsId,
    browserTabId,
    conversationId,
    elementKey,
    hostKind,
    initialUrl,
    partition,
  }: BrowserSidebarWebviewCreateOptions) {
    const container = document.createElement("div");
    const cursorOverlayHost = document.createElement("div");
    const webview = document.createElement(
      "webview",
    ) as BrowserSidebarWebviewElement;
    this.browserTabId = browserTabId;
    this.conversationId = conversationId;
    this.container = container;
    this.cursorOverlayHost = cursorOverlayHost;
    this.hostKind = hostKind;
    this.webview = webview;
    container.dataset.browserSidebarWebview = elementKey;
    setBrowserSidebarHostKindAttribute(container, hostKind);
    cursorOverlayHost.setAttribute(CURSOR_OVERLAY_HOST_ATTRIBUTE, elementKey);
    setDefaultWebviewAttributes(webview, {
      browserTabId,
      conversationId,
      partition,
    });
    this.setAdoptionAttributes(
      adoptionLease ?? null,
      adoptedWebContentsId ?? null,
      initialUrl,
    );
    webview.setAttribute("src", BLANK_WEBVIEW_URL);
    const finishPendingDetach = () => {
      this.finishPendingDetach();
    };
    webview.addEventListener("did-attach", () => {
      this.isAttached = true;
    });
    webview.addEventListener("did-stop-loading", finishPendingDetach);
    webview.addEventListener("did-fail-load", finishPendingDetach);
    webview.addEventListener("render-process-gone", finishPendingDetach);
    webview.addEventListener("destroyed", () => {
      this.isAttached = false;
      this.finishPendingDetach();
    });
    container.append(webview, cursorOverlayHost);
  }
  setHostKind(hostKind: BrowserSidebarHostKind): void {
    if (this.hostKind === hostKind) return;
    this.hostKind = hostKind;
    setBrowserSidebarHostKindAttribute(this.container, hostKind);
  }
  detach(webviewRef: BrowserSidebarWebviewRef, mountGeneration?: number): void {
    const webview = this.webview;
    if (this.isDisposed || webview == null) {
      updateWebviewRef(webviewRef, null, webview ?? undefined);
      return;
    }
    if (
      mountGeneration != null &&
      mountGeneration !== this.state.mountGeneration
    ) {
      return;
    }
    if (this.webviewRef != null && this.webviewRef !== webviewRef) {
      updateWebviewRef(webviewRef, null, webview);
      return;
    }
    const wasVisible = this.state.isVisible;
    this.webviewRef = webviewRef;
    this.isInteractionBlocked = false;
    this.isStaged = false;
    this.state = {
      bounds: this.state.bounds,
      isVisible: false,
      mountGeneration: this.state.mountGeneration,
      scale: this.state.scale,
      shouldPaint: this.state.shouldPaint,
      windowZoom: this.state.windowZoom,
    };
    resetElectronWebviewBackground(webview);
    updateWebviewRef(webviewRef, null, webview);
    const isLoading = this.isAttached && webview.isLoading?.() === true;
    if (this.isTabCaptureActive || isLoading) {
      this.shouldDetachWhenInactive = true;
      this.syncContainerStyle();
    } else {
      this.detachFromDom();
    }
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer backgrounded browser sidebar webview",
      {
        safe: {
          browserTabId: this.browserTabId,
          conversationId: this.conversationId,
          currentMountGeneration: this.state.mountGeneration,
          isLoading,
          requestedMountGeneration: mountGeneration ?? null,
          wasVisible,
        },
      },
    );
  }
  releaseRef(
    webviewRef: BrowserSidebarWebviewRef,
    mountGeneration?: number,
  ): void {
    const webview = this.webview;
    if (
      webview == null ||
      (mountGeneration != null &&
        mountGeneration !== this.state.mountGeneration)
    ) {
      return;
    }
    updateWebviewRef(webviewRef, null, webview);
  }
  sync(
    state: BrowserSidebarWebviewState,
    webviewRef: BrowserSidebarWebviewRef,
  ): void {
    const webview = this.webview;
    if (this.isDisposed || webview == null) {
      updateWebviewRef(webviewRef, null, webview ?? undefined);
      return;
    }
    this.webviewRef = webviewRef;
    this.isInteractionBlocked = false;
    this.isStaged = false;
    this.shouldDetachWhenInactive = false;
    this.state = {
      ...state,
      mountGeneration: state.mountGeneration ?? this.state.mountGeneration,
    };
    resetElectronWebviewBackground(webview);
    const isVisible = this.syncContainerStyle() === "visible";
    updateWebviewRef(webviewRef, isVisible ? webview : null, webview);
    if (isVisible && shouldFocusVisibleWebview(webview)) {
      webview.focus();
    }
  }
  stage(
    state: BrowserSidebarWebviewState,
    webviewRef: BrowserSidebarWebviewRef,
  ): void {
    const webview = this.webview;
    if (this.isDisposed || webview == null) {
      updateWebviewRef(webviewRef, null, webview ?? undefined);
      return;
    }
    this.webviewRef = webviewRef;
    this.isInteractionBlocked = false;
    this.isStaged = true;
    this.shouldDetachWhenInactive = false;
    this.state = {
      ...state,
      mountGeneration: state.mountGeneration ?? this.state.mountGeneration,
    };
    resetElectronWebviewBackground(webview);
    this.syncContainerStyle();
    this.bringToFront();
    updateWebviewRef(webviewRef, null, webview);
  }
  reveal(webviewRef: BrowserSidebarWebviewRef): void {
    const webview = this.webview;
    if (this.isDisposed || webview == null) {
      updateWebviewRef(webviewRef, null, webview ?? undefined);
      return;
    }
    this.webviewRef = webviewRef;
    this.isInteractionBlocked = false;
    this.isStaged = false;
    this.shouldDetachWhenInactive = false;
    this.bringToFront();
    const isVisible = this.syncContainerStyle() === "visible";
    updateWebviewRef(webviewRef, isVisible ? webview : null, webview);
    if (isVisible && shouldFocusVisibleWebview(webview)) {
      webview.focus();
    }
  }
  blockInteraction(): void {
    this.isInteractionBlocked = true;
    if (this.container?.isConnected === true) {
      this.container.style.pointerEvents = "none";
    }
  }
  restoreInteraction(): void {
    this.isInteractionBlocked = false;
    const container = this.container;
    if (container != null && this.isPainted()) {
      container.style.pointerEvents = "auto";
    }
  }
  bringToFront(): void {
    const container = this.container;
    if (
      container?.isConnected === true &&
      container.nextElementSibling != null
    ) {
      getWebviewLayerRoot().append(container);
    }
  }
  listenForDidAttach(listener: () => void): () => void {
    const webview = this.webview;
    webview?.addEventListener("did-attach", listener);
    return () => {
      webview?.removeEventListener("did-attach", listener);
    };
  }
  getBrowserTabId(): string {
    return this.browserTabId;
  }
  getConversationId(): string {
    return this.conversationId;
  }
  getMountGeneration(): number {
    return this.state.mountGeneration ?? 0;
  }
  isConnected(): boolean {
    return this.container?.isConnected === true;
  }
  isPainted(): boolean {
    return this.isConnected() && this.container?.style.visibility === "visible";
  }
  get disposed(): boolean {
    return this.isDisposed;
  }
  getCursorOverlayHost(): HTMLElement | null {
    return this.cursorOverlayHost;
  }
  shouldDestroyForHostRequest({
    mountGeneration,
    reason,
  }: {
    mountGeneration?: number;
    reason: string;
  }): boolean {
    return (
      reason === "closed" ||
      (this.state.mountGeneration === mountGeneration && !this.state.isVisible)
    );
  }
  setBrowserUseCaptureSurfaceSize(size: BrowserSidebarSize | null): void {
    this.browserUseCaptureSurfaceSize = size;
    if (
      size != null &&
      this.container?.isConnected !== true &&
      !this.state.isVisible
    ) {
      return;
    }
    this.syncContainerStyle();
    this.applyBlockedInteractionStyle();
  }
  setBrowserUseActive(isActive: boolean): void {
    if (isActive) this.hasBrowserUsePaintHost = true;
    this.isBrowserUseActive = isActive;
    if (
      isActive &&
      this.container?.isConnected !== true &&
      !this.state.isVisible
    ) {
      return;
    }
    this.syncContainerStyle();
  }
  setTabCaptureActive(isActive: boolean): void {
    if (this.isTabCaptureActive === isActive) return;
    this.isTabCaptureActive = isActive;
    if (!isActive && this.shouldDetachWhenInactive) {
      this.finishPendingDetach();
      return;
    }
    if (isActive && !this.state.isVisible) {
      this.shouldDetachWhenInactive = true;
    }
    this.syncContainerStyle();
    this.applyBlockedInteractionStyle();
  }
  setBrowserUseViewportSize(size: BrowserSidebarSize | null): void {
    this.browserUseViewportSize = size;
    if (
      size != null &&
      this.container?.isConnected !== true &&
      !this.state.isVisible
    ) {
      return;
    }
    this.syncContainerStyle();
  }
  releaseBrowserUse(): void {
    this.browserUseCaptureSurfaceSize = null;
    this.browserUseViewportSize = null;
    this.hasBrowserUsePaintHost = false;
    this.isBrowserUseActive = false;
    this.syncContainerStyle();
  }
  setAdoptionAttributes(
    adoptionLease: string | null,
    adoptedWebContentsId: number | null,
    initialUrl: string,
  ): void {
    if (this.webview == null) return;
    if (adoptionLease == null || adoptedWebContentsId == null) {
      this.webview.removeAttribute(ADOPTION_LEASE_ATTRIBUTE);
      this.webview.removeAttribute(ADOPTED_WEB_CONTENTS_ID_ATTRIBUTE);
      this.webview.removeAttribute(ADOPTED_INITIAL_URL_ATTRIBUTE);
      return;
    }
    this.webview.setAttribute(ADOPTION_LEASE_ATTRIBUTE, adoptionLease);
    this.webview.setAttribute(
      ADOPTED_WEB_CONTENTS_ID_ATTRIBUTE,
      adoptedWebContentsId.toString(),
    );
    this.webview.setAttribute(ADOPTED_INITIAL_URL_ATTRIBUTE, initialUrl);
  }
  resync(): void {
    const container = this.container;
    if (container != null && container.isConnected) {
      this.syncContainerStyle();
      this.applyBlockedInteractionStyle();
    }
  }
  transfer({
    browserTabId,
    conversationId,
    elementKey,
    partition,
  }: {
    browserTabId: string;
    conversationId: string;
    elementKey: string;
    partition: string;
  }): void {
    const container = this.container;
    const cursorOverlayHost = this.cursorOverlayHost;
    const webview = this.webview;
    if (container == null || cursorOverlayHost == null || webview == null) {
      return;
    }
    container.dataset.browserSidebarWebview = elementKey;
    cursorOverlayHost.setAttribute(CURSOR_OVERLAY_HOST_ATTRIBUTE, elementKey);
    webview.setAttribute(CONVERSATION_ID_ATTRIBUTE, conversationId);
    webview.setAttribute(BROWSER_TAB_ID_ATTRIBUTE, browserTabId);
    webview.setAttribute("partition", partition);
    this.browserTabId = browserTabId;
    this.conversationId = conversationId;
  }
  dispose(): void {
    if (this.isDisposed) return;
    this.isDisposed = true;
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer disposed browser sidebar webview",
      {
        safe: {
          browserTabId: this.browserTabId,
          conversationId: this.conversationId,
        },
      },
    );
    const webview = this.webview;
    this.detachFromDom();
    if (this.webviewRef != null) {
      updateWebviewRef(this.webviewRef, null, webview ?? undefined);
    }
    destroyWebviewIfPossible(webview);
    this.container?.replaceChildren();
    this.container = null;
    this.cursorOverlayHost = null;
    this.webview = null;
    this.webviewRef = null;
  }
  syncContainerStyle(): SyncResult {
    const container = this.container;
    const cursorOverlayHost = this.cursorOverlayHost;
    const webview = this.webview;
    if (container == null || cursorOverlayHost == null || webview == null) {
      return "hidden";
    }
    const shouldBootstrap = this.state.shouldBootstrap === true;
    const visibleBounds = getVisibleWebviewBounds({
      bounds: this.state.bounds,
      isVisible: this.state.isVisible || shouldBootstrap,
      lastVisibleBounds: this.lastVisibleBounds,
    });
    if (visibleBounds != null && this.browserUseCaptureSurfaceSize == null) {
      this.lastVisibleBounds = visibleBounds;
      this.attachToDom();
      const browserUseBounds = this.state.isVisible
        ? null
        : getElectronBrowserUseBounds({
            browserUseCaptureSurfaceSize: null,
            browserUseViewportSize: this.browserUseViewportSize,
            isBrowserUseActive:
              this.isBrowserUseActive || this.isTabCaptureActive,
            lastVisibleBounds: visibleBounds,
          });
      if (browserUseBounds == null) {
        if (shouldBootstrap || this.state.shouldPaint === false) {
          applyHiddenVisibleWebviewStyle(
            container,
            webview,
            cursorOverlayHost,
            visibleBounds,
            this.state.scale,
            this.state.windowZoom ?? 1,
          );
          return "bootstrap";
        }
        if (this.isStaged) {
          applyStagedWebviewStyle(
            container,
            webview,
            cursorOverlayHost,
            visibleBounds,
            this.state.scale,
            this.state.windowZoom ?? 1,
          );
          return "staged";
        }
        applyVisibleWebviewStyle(
          container,
          webview,
          cursorOverlayHost,
          visibleBounds,
          this.state.scale,
          this.state.windowZoom ?? 1,
        );
        return "visible";
      }
      applyParkedWebviewStyle(
        container,
        webview,
        cursorOverlayHost,
        browserUseBounds,
      );
      return "hidden";
    }
    const browserUseBounds = getElectronBrowserUseBounds({
      browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSize,
      browserUseViewportSize: this.browserUseViewportSize,
      isBrowserUseActive:
        this.hasBrowserUsePaintHost || this.isTabCaptureActive,
      lastVisibleBounds: this.lastVisibleBounds,
    });
    if (browserUseBounds == null) {
      this.parkInDom();
      return "hidden";
    }
    this.attachToDom();
    applyParkedWebviewStyle(
      container,
      webview,
      cursorOverlayHost,
      browserUseBounds,
    );
    return "hidden";
  }
  private applyBlockedInteractionStyle(): void {
    if (this.isInteractionBlocked && this.container?.isConnected === true) {
      this.container.style.pointerEvents = "none";
    }
  }
  private finishPendingDetach(): void {
    if (
      this.shouldDetachWhenInactive &&
      !this.isTabCaptureActive &&
      !(this.isAttached && this.webview?.isLoading?.() === true)
    ) {
      this.shouldDetachWhenInactive = false;
      if (this.hasBrowserUsePaintHost) {
        this.syncContainerStyle();
        this.applyBlockedInteractionStyle();
        return;
      }
      this.detachFromDom();
    }
  }
  private attachToDom(): void {
    const container = this.container;
    if (container != null && !container.isConnected) {
      getWebviewLayerRoot().append(container);
    }
  }
  private parkInDom(): void {
    const container = this.container;
    const cursorOverlayHost = this.cursorOverlayHost;
    const webview = this.webview;
    if (container == null || cursorOverlayHost == null || webview == null) {
      return;
    }
    this.attachToDom();
    applyHiddenVisibleWebviewStyle(
      container,
      webview,
      cursorOverlayHost,
      this.lastVisibleBounds ?? DEFAULT_RETAINED_FALLBACK_BOUNDS,
      this.state.scale,
      this.state.windowZoom ?? 1,
    );
  }
  private detachFromDom(): void {
    this.container?.remove();
  }
}
const DEFAULT_RETAINED_FALLBACK_BOUNDS: BrowserSidebarBounds = {
  x: 0,
  y: 0,
  width: 1280,
  height: 720,
};
export class RetainedBrowserSidebarWebviewHost {
  private browserTabId: string;
  private browserUseCaptureSurfaceSize: BrowserSidebarSize | null;
  private browserUseViewportSize: BrowserSidebarSize | null;
  private container = document.createElement("div");
  private conversationId: string;
  private cursorOverlayHost = document.createElement("div");
  private hasBrowserUsePaintHost: boolean;
  private hostKind: BrowserSidebarHostKind;
  private isAttached = false;
  private isBrowserUseActive: boolean;
  private isTabCaptureActive = false;
  private lastVisibleBounds: BrowserSidebarBounds | null = null;
  private state: BrowserSidebarWebviewState = {
    bounds: null,
    isVisible: false,
    scale: 1,
    windowZoom: 1,
  };
  private webview = document.createElement(
    "webview",
  ) as BrowserSidebarWebviewElement;
  private webviewRef: BrowserSidebarWebviewRef | null = null;
  constructor({
    browserTabId,
    browserUseCaptureSurfaceSize,
    browserUseViewportSize,
    conversationId,
    elementKey,
    hostKind,
    initialUrl,
    isBrowserUseActive,
    partition,
  }: BrowserSidebarRetainedWebviewCreateOptions) {
    this.browserTabId = browserTabId;
    this.conversationId = conversationId;
    this.browserUseCaptureSurfaceSize = browserUseCaptureSurfaceSize;
    this.browserUseViewportSize = browserUseViewportSize;
    this.hostKind = hostKind;
    this.hasBrowserUsePaintHost =
      isBrowserUseActive || browserUseViewportSize != null;
    this.isBrowserUseActive = isBrowserUseActive;
    this.container.dataset.browserSidebarWebview = elementKey;
    setBrowserSidebarHostKindAttribute(this.container, hostKind);
    this.cursorOverlayHost.setAttribute(
      CURSOR_OVERLAY_HOST_ATTRIBUTE,
      elementKey,
    );
    applyRetainedHiddenWebviewStyle(
      this.container,
      this.webview,
      this.cursorOverlayHost,
      null,
      browserUseViewportSize,
      this.isBrowserUseActive || browserUseViewportSize != null,
    );
    setRetainedWebviewAttributes(this.webview, {
      browserTabId,
      conversationId,
      partition,
    });
    this.webview.setAttribute(
      "src",
      initialUrl.length === 0 ? BLANK_WEBVIEW_URL : initialUrl,
    );
    this.container.append(this.webview, this.cursorOverlayHost);
    document.body.append(this.container);
  }
  setHostKind(hostKind: BrowserSidebarHostKind): void {
    if (this.hostKind === hostKind) return;
    this.hostKind = hostKind;
    setBrowserSidebarHostKindAttribute(this.container, hostKind);
  }
  getCursorOverlayHost(): HTMLElement | null {
    return this.cursorOverlayHost;
  }
  detach(webviewRef: BrowserSidebarWebviewRef): void {
    if (
      this.isAttached &&
      this.webviewRef != null &&
      this.webviewRef !== webviewRef
    ) {
      updateWebviewRef(webviewRef, null, this.webview);
      return;
    }
    this.isAttached = false;
    this.webviewRef = webviewRef;
    this.state = {
      bounds: this.state.bounds,
      isVisible: false,
      scale: this.state.scale,
      windowZoom: this.state.windowZoom,
    };
    resetRetainedWebviewBackground(this.webview);
    updateWebviewRef(webviewRef, null, this.webview);
    this.syncContainerStyle();
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer detached retained browser sidebar webview",
      {
        safe: {
          browserTabId: this.browserTabId,
          conversationId: this.conversationId,
        },
      },
    );
  }
  sync(
    state: BrowserSidebarWebviewState,
    webviewRef: BrowserSidebarWebviewRef,
  ): void {
    this.isAttached = true;
    this.webviewRef = webviewRef;
    this.state = state;
    resetRetainedWebviewBackground(this.webview);
    updateWebviewRef(webviewRef, this.webview);
    this.syncContainerStyle();
  }
  stage(
    state: BrowserSidebarWebviewState,
    webviewRef: BrowserSidebarWebviewRef,
  ): void {
    this.sync(state, webviewRef);
  }
  reveal(webviewRef: BrowserSidebarWebviewRef): void {
    updateWebviewRef(webviewRef, this.webview);
    this.syncContainerStyle();
  }
  releaseRef(webviewRef: BrowserSidebarWebviewRef): void {
    updateWebviewRef(webviewRef, null, this.webview);
  }
  shouldDestroyForHostRequest({ reason }: { reason: string }): boolean {
    return reason === "closed";
  }
  setBrowserUseActive(isActive: boolean): void {
    if (isActive) this.hasBrowserUsePaintHost = true;
    this.isBrowserUseActive = isActive;
    this.syncContainerStyle();
  }
  setTabCaptureActive(isActive: boolean): void {
    if (this.isTabCaptureActive === isActive) return;
    this.isTabCaptureActive = isActive;
    this.syncContainerStyle();
  }
  setBrowserUseViewportSize(size: BrowserSidebarSize | null): void {
    this.browserUseViewportSize = size;
    if (size != null) this.hasBrowserUsePaintHost = true;
    this.syncContainerStyle();
  }
  setBrowserUseCaptureSurfaceSize(size: BrowserSidebarSize | null): void {
    this.browserUseCaptureSurfaceSize = size;
    this.syncContainerStyle();
  }
  releaseBrowserUse(): void {
    this.browserUseCaptureSurfaceSize = null;
    this.browserUseViewportSize = null;
    this.hasBrowserUsePaintHost = false;
    this.isBrowserUseActive = false;
    this.syncContainerStyle();
  }
  resync(): void {
    if (this.isAttached) this.syncContainerStyle();
  }
  transfer({
    browserTabId,
    conversationId,
    elementKey,
    partition,
  }: {
    browserTabId: string;
    conversationId: string;
    elementKey: string;
    partition: string;
  }): void {
    this.container.dataset.browserSidebarWebview = elementKey;
    this.cursorOverlayHost.setAttribute(
      CURSOR_OVERLAY_HOST_ATTRIBUTE,
      elementKey,
    );
    this.webview.setAttribute(CONVERSATION_ID_ATTRIBUTE, conversationId);
    this.webview.setAttribute(BROWSER_TAB_ID_ATTRIBUTE, browserTabId);
    this.webview.setAttribute("partition", partition);
    this.browserTabId = browserTabId;
    this.conversationId = conversationId;
  }
  dispose(): void {
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer disposed retained browser sidebar webview",
      {
        safe: {
          browserTabId: this.browserTabId,
          conversationId: this.conversationId,
        },
      },
    );
    this.container.remove();
  }
  syncContainerStyle(): void {
    const bounds = getRetainedWebviewBounds({
      bounds: this.state.bounds,
      browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSize,
      browserUseViewportSize: this.browserUseViewportSize,
      hasBrowserUsePaintHost:
        this.hasBrowserUsePaintHost || this.isTabCaptureActive,
      isVisible: this.state.isVisible,
      lastVisibleBounds: this.lastVisibleBounds,
    });
    if (bounds == null) {
      applyRetainedHiddenWebviewStyle(
        this.container,
        this.webview,
        this.cursorOverlayHost,
        this.lastVisibleBounds,
        this.browserUseViewportSize,
        this.isBrowserUseActive ||
          this.browserUseViewportSize != null ||
          this.isTabCaptureActive,
      );
      return;
    }
    if (this.browserUseCaptureSurfaceSize != null) {
      applyRetainedParkedWebviewStyle(
        this.container,
        this.webview,
        this.cursorOverlayHost,
        bounds,
      );
      return;
    }
    if (this.state.isVisible) {
      this.lastVisibleBounds = bounds;
      applyRetainedVisibleWebviewStyle(
        this.container,
        this.webview,
        this.cursorOverlayHost,
        bounds,
        this.state.scale,
        this.state.windowZoom ?? 1,
      );
      return;
    }
    applyRetainedParkedWebviewStyle(
      this.container,
      this.webview,
      this.cursorOverlayHost,
      bounds,
    );
  }
  blockInteraction(): void {
    this.container.style.pointerEvents = "none";
  }
  restoreInteraction(): void {
    this.container.style.pointerEvents = "";
  }
  bringToFront(): void {
    if (this.container.nextElementSibling != null) {
      document.body.append(this.container);
    }
  }
  listenForDidAttach(listener: () => void): () => void {
    this.webview.addEventListener("did-attach", listener);
    return () => {
      this.webview.removeEventListener("did-attach", listener);
    };
  }
  getBrowserTabId(): string {
    return this.browserTabId;
  }
  getConversationId(): string {
    return this.conversationId;
  }
  getMountGeneration(): number {
    return this.state.mountGeneration ?? 0;
  }
  isConnected(): boolean {
    return this.container.isConnected;
  }
  isPainted(): boolean {
    return this.container.style.visibility === "visible";
  }
}
