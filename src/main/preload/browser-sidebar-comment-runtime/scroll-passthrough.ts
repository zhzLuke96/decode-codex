// Restored from ref/.vite/build/comment-preload.js
// Wheel delta and scroll passthrough helpers for browser sidebar comments.

import { isBrowserSidebarElement } from "./element-geometry";
import type { BrowserSidebarPoint } from "./geometry";
import { getBrowserSidebarElementAtPointOutsideOverlay } from "./hit-testing";

export type BrowserSidebarWheelDeltaWindow = Pick<
  Window,
  "innerHeight" | "innerWidth"
>;

export function scrollBrowserSidebarElementAtPoint(
  point: BrowserSidebarPoint,
  delta: BrowserSidebarPoint,
  rootHost: HTMLElement,
): boolean {
  const targetElement = getBrowserSidebarElementAtPointOutsideOverlay(
    point.x,
    point.y,
    rootHost,
  );
  if (targetElement == null) return false;
  if (scrollGoogleWorkspaceGrid(targetElement, delta)) return true;

  const frameWindow = targetElement.ownerDocument.defaultView ?? window;
  const scrollableElement = findScrollableBrowserSidebarAncestor(
    targetElement,
    delta,
    frameWindow,
  );
  if (scrollableElement == null) {
    if (frameWindow === window) return false;
    frameWindow.scrollBy(delta.x, delta.y);
    return true;
  }

  scrollableElement.scrollLeft += delta.x;
  scrollableElement.scrollTop += delta.y;
  return true;
}

export function getBrowserSidebarWheelDelta(
  event: Pick<WheelEvent, "deltaMode" | "deltaX" | "deltaY">,
  frameWindow: BrowserSidebarWheelDeltaWindow = window,
): BrowserSidebarPoint {
  return event.deltaMode === WheelEvent.DOM_DELTA_LINE
    ? {
        x: event.deltaX * 16,
        y: event.deltaY * 16,
      }
    : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
      ? {
          x: event.deltaX * frameWindow.innerWidth,
          y: event.deltaY * frameWindow.innerHeight,
        }
      : {
          x: event.deltaX,
          y: event.deltaY,
        };
}

export function findScrollableBrowserSidebarAncestor(
  element: Element,
  delta: BrowserSidebarPoint,
  frameWindow: Window,
): Element | null {
  let currentElement: Element | null = element;

  while (
    currentElement != null &&
    currentElement !== frameWindow.document.body &&
    currentElement !== frameWindow.document.documentElement
  ) {
    if (canBrowserSidebarElementScroll(currentElement, delta, frameWindow)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }

  return null;
}

function scrollGoogleWorkspaceGrid(
  element: Element,
  delta: BrowserSidebarPoint,
): boolean {
  const gridContainer = element.closest("#waffle-grid-container");
  if (!isBrowserSidebarElement(gridContainer)) return false;

  const horizontalScrollbar = gridContainer.querySelector(
    ".native-scrollbar-x",
  );
  const verticalScrollbar = gridContainer.querySelector(".native-scrollbar-y");
  let didScroll = false;
  if (isBrowserSidebarElement(horizontalScrollbar) && delta.x !== 0) {
    horizontalScrollbar.scrollLeft += delta.x;
    didScroll = true;
  }
  if (isBrowserSidebarElement(verticalScrollbar) && delta.y !== 0) {
    verticalScrollbar.scrollTop += delta.y;
    didScroll = true;
  }
  return didScroll;
}

function canBrowserSidebarElementScroll(
  element: Element,
  delta: BrowserSidebarPoint,
  frameWindow: Window,
): boolean {
  const style = frameWindow.getComputedStyle(element);
  return (
    (isScrollableOverflowValue(style.overflowY) &&
      canScrollAxis(
        delta.y,
        element.scrollTop,
        element.clientHeight,
        element.scrollHeight,
      )) ||
    (isScrollableOverflowValue(style.overflowX) &&
      canScrollAxis(
        delta.x,
        element.scrollLeft,
        element.clientWidth,
        element.scrollWidth,
      ))
  );
}

function canScrollAxis(
  delta: number,
  currentScroll: number,
  clientSize: number,
  scrollSize: number,
): boolean {
  return delta < 0
    ? currentScroll > 0
    : delta > 0
      ? currentScroll < scrollSize - clientSize
      : false;
}

function isScrollableOverflowValue(value: string): boolean {
  return value === "auto" || value === "scroll" || value === "overlay";
}
