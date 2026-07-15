// Restored from ref/.vite/build/comment-preload.js
// DOM hit-testing and wheel scrolling helpers for browser sidebar comments.

import { findBrowserSidebarAnchorTargetElement } from "./element-anchor-targets";
import { isBrowserSidebarElement } from "./element-geometry";
import {
  BROWSER_SIDEBAR_COMMENTS_ROOT_ID,
  BROWSER_SIDEBAR_INTERACTION_BLOCKER_ATTRIBUTE,
  isBrowserSidebarOverlayElement,
} from "./event-interactions";
import { getFrameElementContentWindow } from "./frame-path";
import type { BrowserSidebarPoint } from "./geometry";

export const BROWSER_SIDEBAR_COMMENT_ROOT_ATTRIBUTE =
  "data-browser-comment-root";
export const BROWSER_SIDEBAR_INTERACTION_LAYER_ATTRIBUTE =
  "data-browser-comment-interaction-layer";

export function getBrowserSidebarAnchorTargetAtPoint(
  x: number,
  y: number,
  rootHost?: HTMLElement | null,
): Element | null {
  const hitElement =
    rootHost == null
      ? getBrowserSidebarDeepElementFromPoint(window, x, y)
      : getBrowserSidebarElementAtPointOutsideOverlay(x, y, rootHost);

  return hitElement == null
    ? null
    : normalizeBrowserSidebarAnchorTarget(hitElement);
}

export function getBrowserSidebarAnchorTargetFromEventPath(event: {
  composedPath(): EventTarget[];
}): Element | null {
  const pathElement = event
    .composedPath()
    .find((pathItem) => pathItem instanceof HTMLElement);
  return pathElement instanceof HTMLElement
    ? normalizeBrowserSidebarAnchorTarget(pathElement)
    : null;
}

export function normalizeBrowserSidebarAnchorTarget(
  element: Element,
): Element | null {
  if (isBrowserSidebarOverlayElement(element)) return null;
  if (isDocumentRootElement(element)) return element;

  const targetElement = findBrowserSidebarAnchorTargetElement(element);
  return targetElement == null ||
    isDocumentRootElement(targetElement) ||
    isBrowserSidebarOverlayElement(targetElement)
    ? null
    : targetElement;
}

export function getBrowserSidebarAnchorTargetFromPoint(
  point: BrowserSidebarPoint | null | undefined,
  rootHost?: HTMLElement | null,
): Element | null {
  return point == null
    ? null
    : getBrowserSidebarAnchorTargetAtPoint(point.x, point.y, rootHost);
}

export function getBrowserSidebarElementAtPointOutsideOverlay(
  x: number,
  y: number,
  rootHost: HTMLElement,
): Element | null {
  const rootElement = rootHost.shadowRoot?.querySelector(
    `[${BROWSER_SIDEBAR_COMMENT_ROOT_ATTRIBUTE}]`,
  );
  if (!(rootElement instanceof HTMLElement)) {
    return getBrowserSidebarDeepElementFromPoint(window, x, y);
  }

  const interactionBlocker = rootHost.shadowRoot?.querySelector(
    `[${BROWSER_SIDEBAR_INTERACTION_BLOCKER_ATTRIBUTE}]`,
  );
  const interactionLayer = rootHost.shadowRoot?.querySelector(
    `[${BROWSER_SIDEBAR_INTERACTION_LAYER_ATTRIBUTE}]`,
  );
  const previousHostPointerEvents = rootHost.style.pointerEvents;
  const previousRootPointerEvents = rootElement.style.pointerEvents;
  const previousLayerPointerEvents =
    interactionLayer instanceof HTMLElement
      ? interactionLayer.style.pointerEvents
      : undefined;
  const previousBlockerPointerEvents =
    interactionBlocker instanceof HTMLElement
      ? interactionBlocker.style.pointerEvents
      : undefined;

  rootHost.style.pointerEvents = "none";
  rootElement.style.pointerEvents = "none";
  if (interactionLayer instanceof HTMLElement) {
    interactionLayer.style.pointerEvents = "none";
  }
  if (interactionBlocker instanceof HTMLElement) {
    interactionBlocker.style.pointerEvents = "none";
  }

  try {
    return getBrowserSidebarDeepElementFromPoint(window, x, y);
  } finally {
    rootHost.style.pointerEvents = previousHostPointerEvents;
    rootElement.style.pointerEvents = previousRootPointerEvents;
    if (interactionLayer instanceof HTMLElement) {
      interactionLayer.style.pointerEvents = previousLayerPointerEvents ?? "";
    }
    if (interactionBlocker instanceof HTMLElement) {
      interactionBlocker.style.pointerEvents =
        previousBlockerPointerEvents ?? "";
    }
  }
}

export function getBrowserSidebarDeepElementFromPoint(
  frameWindow: Window,
  x: number,
  y: number,
): Element | null {
  let hitElement = frameWindow.document.elementFromPoint(x, y);
  if (hitElement == null) return null;

  while (hitElement.shadowRoot != null) {
    const shadowElement = hitElement.shadowRoot.elementFromPoint(x, y);
    if (
      !isBrowserSidebarElement(shadowElement) ||
      shadowElement === hitElement
    ) {
      break;
    }
    hitElement = shadowElement;
  }

  if (isFrameElement(hitElement)) {
    const childWindow = getFrameElementContentWindow(hitElement);
    if (childWindow != null) {
      const frameRect = hitElement.getBoundingClientRect();
      const childHitElement = getBrowserSidebarDeepElementFromPoint(
        childWindow,
        x - frameRect.left,
        y - frameRect.top,
      );
      if (childHitElement != null) return childHitElement;
    }
  }

  return hitElement;
}

function isDocumentRootElement(element: Element): boolean {
  return element === document.documentElement || element === document.body;
}

function isFrameElement(element: Element): element is HTMLIFrameElement {
  const IFrameElement =
    element.ownerDocument.defaultView?.HTMLIFrameElement ??
    (typeof HTMLIFrameElement === "undefined" ? null : HTMLIFrameElement);
  return IFrameElement != null && element instanceof IFrameElement
    ? true
    : element.tagName.toLowerCase() === "iframe" && "contentWindow" in element;
}
