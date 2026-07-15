// Restored from ref/.vite/build/comment-preload.js
// Frame-path and nested iframe helpers for browser sidebar anchors.

import { getBrowserSidebarElementSelector } from "./element-selectors";
import type { BrowserSidebarPoint } from "./geometry";

export const BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX = "shadow:";
export const BROWSER_SIDEBAR_SHADOW_FRAME_PATH_SEPARATOR = ">>>";

export function getBrowserSidebarFrameWindow(
  framePath: readonly string[],
  rootWindow: Window = window,
): Window | null {
  let currentWindow = rootWindow;
  let currentDocument = rootWindow.document;

  for (const frameSelector of framePath) {
    const frameElement = resolveBrowserSidebarFrameElement(
      currentDocument,
      frameSelector,
    );
    if (frameElement == null) return null;

    const childWindow = getFrameElementContentWindow(frameElement);
    if (childWindow == null) return null;

    currentWindow = childWindow;
    currentDocument = childWindow.document;
  }

  return currentWindow;
}

export function getBrowserSidebarFramePath(
  frameWindow: Window | null | undefined,
  rootWindow: Window = window,
): string[] | null {
  if (frameWindow == null) return null;

  const framePath: string[] = [];
  let currentWindow = frameWindow;

  while (currentWindow !== rootWindow) {
    const frameElement = getFrameElement(currentWindow);
    if (!isBrowserSidebarFrameElement(frameElement)) return null;

    const frameSelector =
      getBrowserSidebarShadowAwareFrameSelector(frameElement);
    if (frameSelector == null) return null;
    framePath.unshift(frameSelector);

    const parentWindow = frameElement.ownerDocument.defaultView;
    if (parentWindow == null) return null;
    currentWindow = parentWindow;
  }

  return framePath;
}

export function getBrowserSidebarFramePathForElement(
  element: Element,
  rootWindow: Window = window,
): string[] | null {
  return getBrowserSidebarFramePath(
    element.ownerDocument.defaultView,
    rootWindow,
  );
}

export function getBrowserSidebarFrameDocument(
  framePath: readonly string[],
  rootWindow: Window = window,
): Document | null {
  return getBrowserSidebarFrameWindow(framePath, rootWindow)?.document ?? null;
}

export function resolveBrowserSidebarFrameElement(
  root: Document | ShadowRoot,
  frameSelector: string,
): HTMLIFrameElement | null {
  const selectorPath = frameSelector.startsWith(
    BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX,
  )
    ? frameSelector
        .slice(BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX.length)
        .split(BROWSER_SIDEBAR_SHADOW_FRAME_PATH_SEPARATOR)
    : [frameSelector];
  let currentRoot: Document | ShadowRoot = root;

  for (const [index, selector] of selectorPath.entries()) {
    const element = currentRoot.querySelector(selector);
    if (index === selectorPath.length - 1) {
      return isBrowserSidebarFrameElement(element) ? element : null;
    }
    if (!isElementWithShadowRoot(element)) return null;
    currentRoot = element.shadowRoot;
  }

  return null;
}

export function getBrowserSidebarWindowFrameOffset(
  frameWindow: Window,
  rootWindow: Window = window,
): BrowserSidebarPoint {
  if (frameWindow === rootWindow) return { x: 0, y: 0 };

  const frameElement = getFrameElement(frameWindow);
  if (!isBrowserSidebarFrameElement(frameElement)) return { x: 0, y: 0 };

  const parentWindow = frameElement.ownerDocument.defaultView;
  if (parentWindow == null) return { x: 0, y: 0 };

  const parentFrameOffset = getBrowserSidebarWindowFrameOffset(
    parentWindow,
    rootWindow,
  );
  const frameRect = frameElement.getBoundingClientRect();
  return {
    x: parentFrameOffset.x + frameRect.left,
    y: parentFrameOffset.y + frameRect.top,
  };
}

export function getFrameElementContentWindow(
  frameElement: HTMLIFrameElement,
): Window | null {
  try {
    return frameElement.contentWindow == null ||
      frameElement.contentWindow.document == null
      ? null
      : frameElement.contentWindow;
  } catch {
    return null;
  }
}

function getFrameElement(frameWindow: Window): Element | null {
  try {
    return frameWindow.frameElement;
  } catch {
    return null;
  }
}

function getBrowserSidebarShadowAwareFrameSelector(
  frameElement: HTMLIFrameElement,
): string | null {
  const selectorPath: string[] = [];
  let currentElement: Element = frameElement;

  for (;;) {
    const selector = getBrowserSidebarElementSelector(currentElement, {
      requireUnique: true,
    });
    if (selector == null) return null;
    selectorPath.unshift(selector);

    const root = currentElement.getRootNode();
    if (isBrowserSidebarDocumentRoot(root)) break;
    if (!isBrowserSidebarShadowRoot(root)) return null;
    currentElement = root.host;
  }

  return selectorPath.length === 1
    ? (selectorPath[0] ?? null)
    : `${BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX}${selectorPath.join(
        BROWSER_SIDEBAR_SHADOW_FRAME_PATH_SEPARATOR,
      )}`;
}

function isBrowserSidebarDocumentRoot(root: Node): boolean {
  const NodeCtor =
    root.ownerDocument?.defaultView?.Node ??
    (typeof Node === "undefined" ? null : Node);
  return NodeCtor != null && root.nodeType === NodeCtor.DOCUMENT_NODE;
}

function isBrowserSidebarShadowRoot(
  root: Node,
): root is ShadowRoot & { host: Element } {
  const NodeCtor =
    root.ownerDocument?.defaultView?.Node ??
    (typeof Node === "undefined" ? null : Node);
  return (
    NodeCtor != null &&
    root.nodeType === NodeCtor.DOCUMENT_FRAGMENT_NODE &&
    "host" in root &&
    isElementWithShadowRoot(root.host) &&
    root.host.shadowRoot === root
  );
}

function isElementWithShadowRoot(
  value: Element | null,
): value is Element & { shadowRoot: ShadowRoot } {
  return value != null && value.shadowRoot != null;
}

function isBrowserSidebarFrameElement(
  value: unknown,
): value is HTMLIFrameElement {
  if (typeof value !== "object" || value == null) return false;

  const element = value as Partial<HTMLIFrameElement>;
  const IFrameCtor =
    element.ownerDocument?.defaultView?.HTMLIFrameElement ??
    (typeof HTMLIFrameElement === "undefined" ? null : HTMLIFrameElement);

  return IFrameCtor != null && value instanceof IFrameCtor
    ? true
    : element.tagName?.toLowerCase() === "iframe" && "contentWindow" in element;
}
