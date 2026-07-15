// Restored from ref/.vite/build/comment-preload.js
// Element target selection helpers for browser sidebar comment anchors.

import { getBrowserSidebarElementAccessibleName } from "./element-text";
import type { BrowserSidebarRect } from "./geometry";

export function findBrowserSidebarAnchorTargetElement(
  element: Element,
  rootDocument: Document = document,
): Element | null {
  let currentElement: Element | null = element;
  let fallbackElement: Element | null = null;

  while (currentElement != null && currentElement !== rootDocument.body) {
    const elementRect = currentElement.getBoundingClientRect();
    if (elementRect.width > 0 && elementRect.height > 0) {
      fallbackElement ??= currentElement;
      if (isPreferredBrowserSidebarAnchorTarget(currentElement, elementRect)) {
        return currentElement;
      }
      if (elementRect.width >= 48 && elementRect.height >= 24) {
        fallbackElement = currentElement;
      }
    }

    currentElement = currentElement.parentElement;
  }

  return fallbackElement;
}

export function isPreferredBrowserSidebarAnchorTarget(
  element: Element,
  rect: BrowserSidebarRect,
): boolean {
  const tagName = element.tagName.toLowerCase();
  return [
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "label",
    "img",
  ].includes(tagName) || element.getAttribute("role") != null
    ? true
    : getBrowserSidebarElementAccessibleName(element) != null &&
        rect.width >= 24 &&
        rect.height >= 16;
}
