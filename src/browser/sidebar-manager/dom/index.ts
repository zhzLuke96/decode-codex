// Restored from ref/webview/assets/browser-sidebar-manager-DZM0wpKX.js
// browser-sidebar-manager-DZM0wpKX chunk restored from the Codex webview bundle.
import { appShellStateExportKAlias as APP_SHELL_FOCUS_AREA_ATTRIBUTE } from "../../../app-shell/app-shell-state";
import { constants as MAX_Z_INDEX } from "../../../utils/constants";
import type {
  BrowserSidebarBounds,
  BrowserSidebarHostKind,
  BrowserSidebarSize,
  BrowserSidebarWebviewElement,
  BrowserSidebarWebviewRef,
} from "../types";
export const BLANK_WEBVIEW_URL = "about:blank";
export const CONVERSATION_ID_ATTRIBUTE = "data-browser-sidebar-conversation-id";
export const BROWSER_TAB_ID_ATTRIBUTE = "data-browser-sidebar-browser-tab-id";
export const WEBVIEW_HOST_ROOT_ATTRIBUTE =
  "data-browser-sidebar-webview-host-root";
export const CURSOR_OVERLAY_HOST_ATTRIBUTE =
  "data-browser-sidebar-cursor-overlay-host";
export const RETAINED_WEBVIEW_ATTRIBUTE =
  "data-browser-sidebar-retained-webview";
export const ADOPTION_LEASE_ATTRIBUTE = "owl-webcontents-adoption-lease";
export const ADOPTED_WEB_CONTENTS_ID_ATTRIBUTE =
  "owl-webcontents-adopted-web-contents-id";
export const ADOPTED_INITIAL_URL_ATTRIBUTE =
  "data-browser-sidebar-adopted-initial-url";
export const DEFAULT_WEBVIEW_BOUNDS: BrowserSidebarBounds = {
  x: 0,
  y: 0,
  width: 1280,
  height: 720,
};
const ELECTRON_WEBVIEW_BACKGROUND =
  "var(--color-token-editor-background, var(--color-token-main-surface-primary, #fff))";
const RETAINED_WEBVIEW_BACKGROUND = "#fff";
const STAGED_WEBVIEW_OPACITY = "0.001";
const PARKED_WEBVIEW_OPACITY = "0.001";
export function setBrowserSidebarHostKindAttribute(
  element: HTMLElement | null | undefined,
  hostKind: BrowserSidebarHostKind,
): void {
  const focusArea = getAppShellFocusAreaForHostKind(hostKind);
  if (focusArea == null) {
    element?.removeAttribute(APP_SHELL_FOCUS_AREA_ATTRIBUTE);
    return;
  }
  element?.setAttribute(APP_SHELL_FOCUS_AREA_ATTRIBUTE, focusArea);
}
export function getAppShellFocusAreaForHostKind(
  hostKind: BrowserSidebarHostKind,
): string | null {
  switch (hostKind) {
    case "bottom-panel":
      return "bottom-panel";
    case "right-panel":
      return "right-panel";
    case "hidden-browser-use":
      return null;
  }
}
export function getVisibleWebviewBounds({
  bounds,
  isVisible,
  lastVisibleBounds,
}: {
  bounds: BrowserSidebarBounds | null;
  isVisible: boolean;
  lastVisibleBounds: BrowserSidebarBounds | null;
}): BrowserSidebarBounds | null {
  return isVisible
    ? bounds != null && bounds.width > 0 && bounds.height > 0
      ? bounds
      : (lastVisibleBounds ?? DEFAULT_WEBVIEW_BOUNDS)
    : null;
}
export function getElectronBrowserUseBounds({
  browserUseCaptureSurfaceSize,
  browserUseViewportSize,
  isBrowserUseActive,
  lastVisibleBounds,
}: {
  browserUseCaptureSurfaceSize: BrowserSidebarSize | null;
  browserUseViewportSize: BrowserSidebarSize | null;
  isBrowserUseActive: boolean;
  lastVisibleBounds: BrowserSidebarBounds | null;
}): BrowserSidebarBounds | null {
  return isBrowserUseActive
    ? browserUseCaptureSurfaceSize == null
      ? browserUseViewportSize == null
        ? (lastVisibleBounds ?? DEFAULT_WEBVIEW_BOUNDS)
        : sizeToDefaultOriginBounds(browserUseViewportSize)
      : sizeToDefaultOriginBounds(browserUseCaptureSurfaceSize)
    : null;
}
export function getRetainedWebviewBounds({
  bounds,
  browserUseCaptureSurfaceSize,
  browserUseViewportSize,
  hasBrowserUsePaintHost,
  isVisible,
  lastVisibleBounds,
}: {
  bounds: BrowserSidebarBounds | null;
  browserUseCaptureSurfaceSize: BrowserSidebarSize | null;
  browserUseViewportSize: BrowserSidebarSize | null;
  hasBrowserUsePaintHost: boolean;
  isVisible: boolean;
  lastVisibleBounds: BrowserSidebarBounds | null;
}): BrowserSidebarBounds | null {
  return browserUseCaptureSurfaceSize == null
    ? isVisible && bounds != null && bounds.width > 0 && bounds.height > 0
      ? bounds
      : isVisible && lastVisibleBounds != null
        ? lastVisibleBounds
        : !isVisible && hasBrowserUsePaintHost
          ? browserUseViewportSize == null
            ? (lastVisibleBounds ?? DEFAULT_WEBVIEW_BOUNDS)
            : sizeToDefaultOriginBounds(browserUseViewportSize)
          : null
    : sizeToDefaultOriginBounds(browserUseCaptureSurfaceSize);
}
export function applyVisibleWebviewStyle(
  container: HTMLElement,
  webview: HTMLElement,
  cursorOverlayHost: HTMLElement,
  bounds: BrowserSidebarBounds,
  scale: number,
  windowZoom: number,
): void {
  const effectiveScale = scale * windowZoom;
  Object.assign(container.style, {
    contain: "",
    height: `${Math.round(bounds.height * effectiveScale)}px`,
    left: `${bounds.x * windowZoom}px`,
    opacity: "1",
    overflow: "hidden",
    pointerEvents: "auto",
    position: "fixed",
    top: `${bounds.y * windowZoom}px`,
    transform: "",
    transformOrigin: "",
    visibility: "visible",
    willChange: "",
    width: `${Math.round(bounds.width * effectiveScale)}px`,
    zIndex: "",
  });
  Object.assign(webview.style, {
    height: `${bounds.height}px`,
    transform: effectiveScale === 1 ? "" : `scale(${effectiveScale})`,
    transformOrigin: "top left",
    willChange: effectiveScale === 1 ? "" : "transform",
    width: `${bounds.width}px`,
  });
  applyCursorOverlayStyle(cursorOverlayHost, bounds, effectiveScale);
}
export function applyParkedWebviewStyle(
  container: HTMLElement,
  webview: HTMLElement,
  cursorOverlayHost: HTMLElement,
  bounds: BrowserSidebarBounds,
): void {
  Object.assign(container.style, {
    contain: "layout paint size style",
    height: `${bounds.height}px`,
    left: "0px",
    opacity: PARKED_WEBVIEW_OPACITY,
    overflow: "",
    pointerEvents: "none",
    position: "fixed",
    top: "0px",
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "",
    visibility: "visible",
    willChange: "transform",
    width: `${bounds.width}px`,
    zIndex: String(MAX_Z_INDEX),
  });
  resetWebviewScaleStyle(webview);
  applyCursorOverlayStyle(cursorOverlayHost, bounds);
}
export function applyHiddenVisibleWebviewStyle(
  container: HTMLElement,
  webview: HTMLElement,
  cursorOverlayHost: HTMLElement,
  bounds: BrowserSidebarBounds,
  scale: number,
  windowZoom: number,
): void {
  applyVisibleWebviewStyle(
    container,
    webview,
    cursorOverlayHost,
    bounds,
    scale,
    windowZoom,
  );
  Object.assign(container.style, {
    pointerEvents: "none",
    visibility: "hidden",
  });
}
export function applyStagedWebviewStyle(
  container: HTMLElement,
  webview: HTMLElement,
  cursorOverlayHost: HTMLElement,
  bounds: BrowserSidebarBounds,
  scale: number,
  windowZoom: number,
): void {
  applyVisibleWebviewStyle(
    container,
    webview,
    cursorOverlayHost,
    bounds,
    scale,
    windowZoom,
  );
  Object.assign(container.style, {
    opacity: STAGED_WEBVIEW_OPACITY,
    pointerEvents: "none",
  });
}
export function applyRetainedVisibleWebviewStyle(
  container: HTMLElement,
  webview: HTMLElement,
  cursorOverlayHost: HTMLElement,
  bounds: BrowserSidebarBounds,
  scale: number,
  windowZoom: number,
): void {
  const effectiveScale = scale * windowZoom;
  Object.assign(container.style, {
    contain: "",
    height: `${Math.round(bounds.height * effectiveScale)}px`,
    left: `${bounds.x * windowZoom}px`,
    opacity: "1",
    overflow: "hidden",
    pointerEvents: "",
    position: "fixed",
    top: `${bounds.y * windowZoom}px`,
    transform: "",
    transformOrigin: "",
    visibility: "visible",
    willChange: "",
    width: `${Math.round(bounds.width * effectiveScale)}px`,
    zIndex: "",
  });
  Object.assign(webview.style, {
    height: `${bounds.height}px`,
    transform: effectiveScale === 1 ? "" : `scale(${effectiveScale})`,
    transformOrigin: "top left",
    willChange: effectiveScale === 1 ? "" : "transform",
    width: `${bounds.width}px`,
  });
  applyCursorOverlayStyle(cursorOverlayHost, bounds, effectiveScale);
}
export function applyRetainedHiddenWebviewStyle(
  container: HTMLElement,
  webview: HTMLElement,
  cursorOverlayHost: HTMLElement,
  lastVisibleBounds: BrowserSidebarBounds | null,
  browserUseViewportSize: BrowserSidebarSize | null,
  shouldKeepPaintHost: boolean,
): void {
  if (shouldKeepPaintHost) {
    applyRetainedParkedWebviewStyle(
      container,
      webview,
      cursorOverlayHost,
      lastVisibleBounds ??
        (browserUseViewportSize == null
          ? DEFAULT_WEBVIEW_BOUNDS
          : sizeToDefaultOriginBounds(browserUseViewportSize)),
    );
    return;
  }
  Object.assign(container.style, {
    contain: "",
    height: "1px",
    left: "-10000px",
    opacity: "0",
    overflow: "",
    pointerEvents: "none",
    position: "fixed",
    top: "0",
    transform: "",
    transformOrigin: "",
    visibility: "hidden",
    willChange: "",
    width: "1px",
    zIndex: "",
  });
  resetWebviewScaleStyle(webview);
  applyCursorOverlayStyle(cursorOverlayHost, {
    width: 1,
    height: 1,
    x: 0,
    y: 0,
  });
}
export function applyRetainedParkedWebviewStyle(
  container: HTMLElement,
  webview: HTMLElement,
  cursorOverlayHost: HTMLElement,
  bounds: BrowserSidebarBounds,
): void {
  Object.assign(container.style, {
    contain: "layout paint size style",
    height: `${bounds.height}px`,
    left: `${DEFAULT_WEBVIEW_BOUNDS.x}px`,
    opacity: PARKED_WEBVIEW_OPACITY,
    overflow: "",
    pointerEvents: "none",
    position: "fixed",
    top: `${DEFAULT_WEBVIEW_BOUNDS.y}px`,
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "",
    visibility: "visible",
    willChange: "transform",
    width: `${bounds.width}px`,
    zIndex: String(MAX_Z_INDEX),
  });
  resetWebviewScaleStyle(webview);
  applyCursorOverlayStyle(cursorOverlayHost, bounds);
}
export function resetWebviewScaleStyle(webview: HTMLElement): void {
  Object.assign(webview.style, {
    height: "",
    transform: "",
    transformOrigin: "",
    willChange: "",
    width: "",
  });
}
export function applyCursorOverlayStyle(
  cursorOverlayHost: HTMLElement,
  bounds: BrowserSidebarSize,
  scale: number = 1,
): void {
  Object.assign(cursorOverlayHost.style, {
    height: `${bounds.height}px`,
    left: "0",
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    top: "0",
    transform: scale === 1 ? "" : `scale(${scale})`,
    transformOrigin: "top left",
    willChange: scale === 1 ? "" : "transform",
    width: `${bounds.width}px`,
    zIndex: "1",
  });
}
export function shouldFocusVisibleWebview(webview: HTMLElement): boolean {
  const activeElement = document.activeElement;
  return (
    activeElement == null ||
    activeElement === document.body ||
    activeElement === document.documentElement ||
    (activeElement.tagName === "WEBVIEW" && activeElement !== webview)
  );
}
export function getWebviewLayerRoot(): HTMLElement {
  const existingRoot = document.querySelector<HTMLElement>(
    `[${WEBVIEW_HOST_ROOT_ATTRIBUTE}]`,
  );
  if (existingRoot != null) return existingRoot;
  const root = document.createElement("div");
  root.setAttribute(WEBVIEW_HOST_ROOT_ATTRIBUTE, "");
  Object.assign(root.style, {
    inset: "0",
    overflow: "visible",
    pointerEvents: "none",
    position: "fixed",
  });
  document.body.append(root);
  return root;
}
export function updateWebviewRef(
  webviewRef: BrowserSidebarWebviewRef,
  visibleWebview: BrowserSidebarWebviewElement | null,
  ownedWebview?: BrowserSidebarWebviewElement | null,
): void {
  if (ownedWebview != null && webviewRef.current === ownedWebview) {
    webviewRef.current = null;
  }
  if (visibleWebview != null) {
    webviewRef.current = visibleWebview;
  }
}
export function destroyWebviewIfPossible(
  webview: BrowserSidebarWebviewElement | null | undefined,
): void {
  if (canDestroyWebview(webview)) {
    webview.destroy();
  }
}
export function canDestroyWebview(
  webview: BrowserSidebarWebviewElement | null | undefined,
): webview is BrowserSidebarWebviewElement & {
  destroy: () => void;
} {
  return (
    webview != null &&
    "destroy" in webview &&
    typeof webview.destroy === "function"
  );
}
export function createPartitionName(storageKey: string): string {
  return `persist:codex-browser-app-route:${encodeURIComponent(storageKey)}`;
}
export function sizeToDefaultOriginBounds(
  size: BrowserSidebarSize,
): BrowserSidebarBounds {
  return {
    x: DEFAULT_WEBVIEW_BOUNDS.x,
    y: DEFAULT_WEBVIEW_BOUNDS.y,
    width: size.width,
    height: size.height,
  };
}
export function setDefaultWebviewAttributes(
  webview: BrowserSidebarWebviewElement,
  {
    browserTabId,
    conversationId,
    partition,
  }: {
    browserTabId: string;
    conversationId: string;
    partition: string;
  },
): void {
  webview.className = "h-full w-full";
  webview.style.backgroundColor = ELECTRON_WEBVIEW_BACKGROUND;
  webview.setAttribute(CONVERSATION_ID_ATTRIBUTE, conversationId);
  webview.setAttribute(BROWSER_TAB_ID_ATTRIBUTE, browserTabId);
  webview.setAttribute("partition", partition);
  webview.setAttribute("webviewrole", "tab");
}
export function setRetainedWebviewAttributes(
  webview: BrowserSidebarWebviewElement,
  {
    browserTabId,
    conversationId,
    partition,
  }: {
    browserTabId: string;
    conversationId: string;
    partition: string;
  },
): void {
  webview.className = "h-full w-full";
  webview.style.backgroundColor = RETAINED_WEBVIEW_BACKGROUND;
  webview.setAttribute(CONVERSATION_ID_ATTRIBUTE, conversationId);
  webview.setAttribute(BROWSER_TAB_ID_ATTRIBUTE, browserTabId);
  webview.setAttribute(RETAINED_WEBVIEW_ATTRIBUTE, "");
  webview.setAttribute("partition", partition);
  webview.setAttribute("webviewrole", "tab");
}
export function resetElectronWebviewBackground(
  webview: BrowserSidebarWebviewElement,
): void {
  webview.style.backgroundColor = ELECTRON_WEBVIEW_BACKGROUND;
}
export function resetRetainedWebviewBackground(
  webview: BrowserSidebarWebviewElement,
): void {
  webview.style.backgroundColor = RETAINED_WEBVIEW_BACKGROUND;
}
