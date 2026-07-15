// Restored from ref/.vite/build/comment-preload.js
// Scroll-container snapshot capture for browser sidebar anchor reprojection.

import type { BrowserSidebarScrollContainerSnapshot } from "./anchors";
import { isBrowserSidebarElement } from "./element-geometry";
import type { BrowserSidebarPoint } from "./geometry";
import { getBrowserSidebarElementSelector } from "./element-selectors";

export function getBrowserSidebarScrollContainerSnapshotsAtPoint(
  frameWindow: Window,
  point: BrowserSidebarPoint,
): BrowserSidebarScrollContainerSnapshot[] {
  if (typeof frameWindow.document.elementFromPoint !== "function") return [];

  const hitElement = frameWindow.document.elementFromPoint(point.x, point.y);
  const snapshots: BrowserSidebarScrollContainerSnapshot[] = [];
  let currentElement = isBrowserSidebarElement(hitElement) ? hitElement : null;

  while (
    currentElement != null &&
    currentElement !== frameWindow.document.body &&
    currentElement !== frameWindow.document.documentElement
  ) {
    if (isScrollableBrowserSidebarElement(currentElement, frameWindow)) {
      const selector = getBrowserSidebarElementSelector(currentElement);
      if (selector != null) {
        snapshots.push({
          selector,
          scrollLeft: currentElement.scrollLeft,
          scrollTop: currentElement.scrollTop,
        });
      }
    }

    currentElement = currentElement.parentElement;
  }

  return snapshots;
}

function isScrollableBrowserSidebarElement(
  element: Element,
  frameWindow: Window,
): boolean {
  const style = frameWindow.getComputedStyle(element);
  const scrollsVertically =
    element.scrollHeight > element.clientHeight &&
    isScrollableOverflowValue(style.overflowY);
  const scrollsHorizontally =
    element.scrollWidth > element.clientWidth &&
    isScrollableOverflowValue(style.overflowX);

  return scrollsVertically || scrollsHorizontally;
}

function isScrollableOverflowValue(value: string): boolean {
  return value === "auto" || value === "scroll" || value === "overlay";
}
