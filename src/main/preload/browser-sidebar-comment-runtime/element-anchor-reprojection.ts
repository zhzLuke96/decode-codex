// Restored from ref/.vite/build/comment-preload.js
// Element anchor reprojection helpers for browser sidebar comments.

import type { BrowserSidebarElementAnchor } from "./anchors";
import {
  buildBrowserSidebarElementAnchor,
  isBrowserSidebarElementFixedToRoot,
} from "./element-anchor-builders";
import { getVisibleElementViewportRect } from "./element-geometry";
import {
  clampNumber,
  type BrowserSidebarPoint,
  type BrowserSidebarRect,
  type BrowserSidebarSize,
} from "./geometry";

export type BrowserSidebarElementAnchorState = {
  element: Element | null;
  markerViewportPoint?: BrowserSidebarPoint | null;
  type: "element";
  value: BrowserSidebarElementAnchor;
  viewportSize?: BrowserSidebarSize | null;
};

export function getBrowserSidebarEquivalentElementPoint(
  previousAnchor: BrowserSidebarElementAnchor,
  currentRect: BrowserSidebarRect,
  viewportSize?: BrowserSidebarSize | null,
  markerViewportPoint?: BrowserSidebarPoint | null,
  rootWindow: Window = window,
): BrowserSidebarPoint {
  const previousViewportX =
    markerViewportPoint?.x ??
    (previousAnchor.point.xPercent / 100) *
      (viewportSize?.width ?? rootWindow.innerWidth);
  const xRatio =
    previousAnchor.rect.width === 0
      ? 0.5
      : (previousViewportX - previousAnchor.rect.x) / previousAnchor.rect.width;
  const yRatio =
    previousAnchor.rect.height === 0
      ? 0.5
      : (previousAnchor.point.y - previousAnchor.rect.y) /
        previousAnchor.rect.height;

  return {
    x: currentRect.x + clampNumber(xRatio, 0, 1) * currentRect.width,
    y: currentRect.y + clampNumber(yRatio, 0, 1) * currentRect.height,
  };
}

export function reprojectBrowserSidebarElementAnchor(
  element: Element,
  previousAnchor: BrowserSidebarElementAnchor,
  viewportSize?: BrowserSidebarSize | null,
  markerViewportPoint?: BrowserSidebarPoint | null,
  rootWindow: Window = window,
): BrowserSidebarElementAnchor {
  const currentRect = getVisibleElementViewportRect(element);
  return currentRect == null
    ? previousAnchor
    : buildBrowserSidebarElementAnchor(
        element,
        currentRect,
        getBrowserSidebarEquivalentElementPoint(
          previousAnchor,
          currentRect,
          viewportSize,
          markerViewportPoint,
          rootWindow,
        ),
        isBrowserSidebarElementFixedToRoot(element, rootWindow),
        viewportSize?.width,
        rootWindow,
      );
}

export function resolveBrowserSidebarElementAnchorState(
  state: BrowserSidebarElementAnchorState,
  rootWindow: Window = window,
): BrowserSidebarElementAnchor {
  return state.element == null || !state.element.isConnected
    ? state.value
    : reprojectBrowserSidebarElementAnchor(
        state.element,
        state.value,
        state.viewportSize,
        state.markerViewportPoint,
        rootWindow,
      );
}
