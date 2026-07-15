// Restored from ref/.vite/build/comment-preload.js
// DOM element visibility and viewport geometry helpers for browser sidebar anchors.

import type { BrowserSidebarPoint, BrowserSidebarRect } from "./geometry";

type BrowserSidebarCheckVisibilityElement = Element & {
  checkVisibility?: (options: {
    checkOpacity: boolean;
    checkVisibilityCSS: boolean;
  }) => boolean;
};

export function isBrowserSidebarElement(value: unknown): value is Element {
  if (typeof value !== "object" || value == null) return false;

  const element = value as Partial<Element>;
  const ownerWindow = element.ownerDocument?.defaultView;
  const HTMLElementCtor =
    ownerWindow?.HTMLElement ??
    (typeof globalThis.HTMLElement === "undefined"
      ? null
      : globalThis.HTMLElement);
  if (HTMLElementCtor != null && value instanceof HTMLElementCtor) return true;

  const NodeCtor =
    ownerWindow?.Node ??
    (typeof globalThis.Node === "undefined" ? null : globalThis.Node);
  return (
    NodeCtor != null &&
    element.nodeType === NodeCtor.ELEMENT_NODE &&
    element.ownerDocument != null &&
    typeof element.getBoundingClientRect === "function" &&
    typeof element.tagName === "string"
  );
}

export function getVisibleElementViewportRect(
  element: Element,
): BrowserSidebarRect | null {
  if (!element.isConnected || !isElementVisibleForBrowserSidebar(element)) {
    return null;
  }

  const ownerWindow = getElementOwnerWindow(element);
  const elementRect = element.getBoundingClientRect();
  if (elementRect.width <= 0 || elementRect.height <= 0) return null;

  const frameOffset = getWindowFrameOffset(ownerWindow);
  return {
    x: elementRect.left + frameOffset.x,
    y: elementRect.top + frameOffset.y,
    width: elementRect.width,
    height: elementRect.height,
  };
}

export function isElementVisibleForBrowserSidebar(element: Element): boolean {
  for (
    let currentElement: Element | null = element;
    currentElement != null;
    currentElement = currentElement.parentElement
  ) {
    const style =
      getElementOwnerWindow(currentElement).getComputedStyle(currentElement);
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.visibility === "collapse" ||
      Number.parseFloat(style.opacity) === 0
    ) {
      return false;
    }
  }

  const checkVisibility = (element as BrowserSidebarCheckVisibilityElement)
    .checkVisibility;
  return (
    typeof checkVisibility !== "function" ||
    checkVisibility.call(element, {
      checkOpacity: true,
      checkVisibilityCSS: true,
    })
  );
}

export function getElementOwnerWindow(element: Element): Window {
  return element.ownerDocument.defaultView ?? window;
}

function getWindowFrameOffset(frameWindow: Window): BrowserSidebarPoint {
  const rootWindow = typeof window === "undefined" ? frameWindow : window;
  if (frameWindow === rootWindow) {
    return { x: 0, y: 0 };
  }

  const frameElement = getFrameElement(frameWindow);
  if (!isBrowserSidebarFrameElement(frameElement)) {
    return { x: 0, y: 0 };
  }

  const parentWindow = frameElement.ownerDocument.defaultView;
  if (parentWindow == null) {
    return { x: 0, y: 0 };
  }

  const parentFrameOffset = getWindowFrameOffset(parentWindow);
  const frameRect = frameElement.getBoundingClientRect();
  return {
    x: parentFrameOffset.x + frameRect.left,
    y: parentFrameOffset.y + frameRect.top,
  };
}

function getFrameElement(frameWindow: Window): Element | null {
  try {
    return frameWindow.frameElement;
  } catch {
    return null;
  }
}

function isBrowserSidebarFrameElement(
  value: unknown,
): value is HTMLIFrameElement {
  if (typeof value !== "object" || value == null) return false;

  const element = value as Partial<HTMLIFrameElement>;
  const IFrameCtor =
    element.ownerDocument?.defaultView?.HTMLIFrameElement ??
    (typeof globalThis.HTMLIFrameElement === "undefined"
      ? null
      : globalThis.HTMLIFrameElement);

  return IFrameCtor != null && value instanceof IFrameCtor
    ? true
    : element.tagName?.toLowerCase() === "iframe" && "contentWindow" in element;
}
