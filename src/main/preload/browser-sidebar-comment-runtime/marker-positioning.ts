// Restored from ref/.vite/build/comment-preload.js
// Marker point helpers for browser sidebar comment overlays.

import type { BrowserSidebarCommentAnchor } from "./anchors";
import {
  getFrameElementContentWindow,
  getBrowserSidebarFrameWindow,
  getBrowserSidebarWindowFrameOffset,
  resolveBrowserSidebarFrameElement,
} from "./frame-path";
import {
  clampNumber,
  type BrowserSidebarPoint,
  type BrowserSidebarSize,
} from "./geometry";
import {
  applyBrowserSidebarViewportSizeOverride,
  BROWSER_SIDEBAR_MARKER_POINT_INSET,
  getBrowserSidebarViewportScrollState,
  type BrowserSidebarViewportScrollState,
} from "./overlay-layout";
import {
  getBrowserSidebarAnchorScrollDelta,
  getTextAnchorHorizontalScrollOffset,
} from "./anchor-scroll";

export type BrowserSidebarMarkerPointOptions = {
  includeElementFrameScroll?: boolean;
  markerPointInset?: number;
  rootWindow?: Window;
};

export type BrowserSidebarClampedMarkerPointOptions = {
  rootWindow?: Window;
  viewportSize?: BrowserSidebarSize | null;
};

export type BrowserSidebarScaledMarkerPointOptions = {
  includeElementFrameScroll?: boolean;
  rootWindow?: Window;
  viewportSize?: BrowserSidebarSize | null;
};

export function getBrowserSidebarMarkerPoint(
  anchor: BrowserSidebarCommentAnchor,
  viewport: BrowserSidebarViewportScrollState = getBrowserSidebarViewportScrollState(),
  {
    includeElementFrameScroll = false,
    markerPointInset = BROWSER_SIDEBAR_MARKER_POINT_INSET,
    rootWindow = window,
  }: BrowserSidebarMarkerPointOptions = {},
): BrowserSidebarPoint {
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
      x: clampNumber(
        frameOffset.x +
          (anchor.point.xPercent / 100) * frameWindow.innerWidth -
          horizontalCorrection,
        markerPointInset,
        viewport.width - markerPointInset,
      ),
      y:
        frameOffset.y +
        anchor.point.y -
        (anchor.isFixed ? 0 : frameWindow.scrollY) -
        scrollDelta.y,
    };
  }

  const elementFrameScrollY =
    includeElementFrameScroll &&
    anchor.kind === "element" &&
    frameWindow != null &&
    frameWindow !== rootWindow
      ? frameWindow.scrollY
      : 0;

  return {
    x: clampNumber(
      (anchor.point.xPercent / 100) * viewport.width - horizontalCorrection,
      markerPointInset,
      viewport.width - markerPointInset,
    ),
    y:
      (anchor.isFixed
        ? anchor.point.y
        : anchor.point.y - viewport.scrollY - elementFrameScrollY) -
      scrollDelta.y,
  };
}

export function isBrowserSidebarMarkerPointInsideFramePath(
  anchor: BrowserSidebarCommentAnchor,
  markerPoint: BrowserSidebarPoint = getBrowserSidebarMarkerPoint(anchor),
  rootDocument: Document = document,
  rootWindow: Window = window,
): boolean {
  if (anchor.framePath.length === 0) return true;

  let currentDocument = rootDocument;
  let currentWindow = rootWindow;

  for (const frameSelector of anchor.framePath) {
    const frameElement = resolveBrowserSidebarFrameElement(
      currentDocument,
      frameSelector,
    );
    if (frameElement == null) return false;

    const frameOffset = getBrowserSidebarWindowFrameOffset(
      currentWindow,
      rootWindow,
    );
    const frameRect = frameElement.getBoundingClientRect();
    const frameBounds = {
      left: frameOffset.x + frameRect.left,
      top: frameOffset.y + frameRect.top,
      right: frameOffset.x + frameRect.right,
      bottom: frameOffset.y + frameRect.bottom,
    };

    if (
      markerPoint.x < frameBounds.left ||
      markerPoint.x > frameBounds.right ||
      markerPoint.y < frameBounds.top ||
      markerPoint.y > frameBounds.bottom
    ) {
      return false;
    }

    const childWindow = getFrameElementContentWindow(frameElement);
    if (childWindow == null) return false;
    currentWindow = childWindow;
    currentDocument = childWindow.document;
  }

  return true;
}

export function getBrowserSidebarClampedMarkerPoint(
  anchor: BrowserSidebarCommentAnchor,
  zoomFactor: number,
  {
    rootWindow = window,
    viewportSize,
  }: BrowserSidebarClampedMarkerPointOptions = {},
): BrowserSidebarPoint {
  const viewport = applyBrowserSidebarViewportSizeOverride(
    getBrowserSidebarViewportScrollState(rootWindow),
    viewportSize,
  );
  const markerPointInset = BROWSER_SIDEBAR_MARKER_POINT_INSET / zoomFactor;
  const markerPoint = getBrowserSidebarMarkerPoint(anchor, viewport, {
    markerPointInset,
    rootWindow,
  });

  return {
    x: markerPoint.x,
    y: clampNumber(
      markerPoint.y,
      markerPointInset,
      viewport.height - markerPointInset,
    ),
  };
}

export function getBrowserSidebarZoomedMarkerPoint(
  anchor: BrowserSidebarCommentAnchor,
  zoomFactor: number,
  {
    includeElementFrameScroll = false,
    rootWindow = window,
    viewportSize,
  }: BrowserSidebarScaledMarkerPointOptions = {},
): BrowserSidebarPoint {
  const markerPoint = getBrowserSidebarMarkerPoint(
    anchor,
    applyBrowserSidebarViewportSizeOverride(
      getBrowserSidebarViewportScrollState(rootWindow),
      viewportSize,
    ),
    {
      includeElementFrameScroll,
      markerPointInset: BROWSER_SIDEBAR_MARKER_POINT_INSET / zoomFactor,
      rootWindow,
    },
  );

  return {
    x: markerPoint.x * zoomFactor,
    y: markerPoint.y * zoomFactor,
  };
}
