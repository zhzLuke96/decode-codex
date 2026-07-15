// Restored from ref/.vite/build/comment-preload.js
// Anchor viewport rect helpers for browser sidebar overlays.

import type {
  BrowserSidebarCommentAnchor,
  BrowserSidebarTextAnchor,
} from "./anchors";
import {
  getBrowserSidebarFrameWindow,
  getBrowserSidebarWindowFrameOffset,
} from "./frame-path";
import type { BrowserSidebarRect } from "./geometry";
import {
  getBrowserSidebarAnchorScrollDelta,
  getTextAnchorHorizontalScrollOffset,
} from "./anchor-scroll";

export function getBrowserSidebarAnchorViewportRect(
  anchor: BrowserSidebarCommentAnchor | null | undefined,
  rootWindow: Window = window,
): BrowserSidebarRect | null {
  if (anchor == null) return null;

  const frameWindow = getBrowserSidebarFrameWindow(
    anchor.framePath,
    rootWindow,
  );
  const positioningWindow = frameWindow ?? rootWindow;
  const scrollDelta = getBrowserSidebarAnchorScrollDelta(
    anchor,
    positioningWindow,
  );
  const horizontalCorrection =
    scrollDelta.x +
    getTextAnchorHorizontalScrollOffset(anchor, positioningWindow);

  if (
    anchor.kind !== "element" &&
    frameWindow != null &&
    frameWindow !== rootWindow
  ) {
    const frameOffset = getBrowserSidebarWindowFrameOffset(
      frameWindow,
      rootWindow,
    );
    return {
      x: anchor.rect.x + frameOffset.x - horizontalCorrection,
      y:
        anchor.rect.y +
        frameOffset.y -
        (anchor.isFixed ? 0 : frameWindow.scrollY) -
        scrollDelta.y,
      width: anchor.rect.width,
      height: anchor.rect.height,
    };
  }

  return {
    x: anchor.rect.x - horizontalCorrection,
    y:
      (anchor.isFixed ? anchor.rect.y : anchor.rect.y - rootWindow.scrollY) -
      scrollDelta.y,
    width: anchor.rect.width,
    height: anchor.rect.height,
  };
}

export function getBrowserSidebarTextSelectionViewportRects(
  anchor: BrowserSidebarTextAnchor,
  rootWindow: Window = window,
): BrowserSidebarRect[] {
  return anchor.selectionRects.flatMap((selectionRect) => {
    const viewportRect = getBrowserSidebarAnchorViewportRect(
      { ...anchor, rect: selectionRect },
      rootWindow,
    );
    return viewportRect == null ? [] : [viewportRect];
  });
}

export function getBrowserSidebarBoundingRect(
  rects: readonly BrowserSidebarRect[],
): BrowserSidebarRect | null {
  if (rects.length === 0) return null;

  const left = Math.min(...rects.map((rect) => rect.x));
  const top = Math.min(...rects.map((rect) => rect.y));
  const right = Math.max(...rects.map((rect) => rect.x + rect.width));
  const bottom = Math.max(...rects.map((rect) => rect.y + rect.height));
  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
  };
}
