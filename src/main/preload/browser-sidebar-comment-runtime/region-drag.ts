// Restored from ref/.vite/build/comment-preload.js
// Region drag helpers for browser sidebar comment creation.

import {
  hasPointMovedPastThreshold,
  isPointInsideViewportSize,
  rectBetweenPoints,
  type BrowserSidebarPoint,
  type BrowserSidebarRect,
} from "./geometry";

export type BrowserSidebarRegionDragState = {
  current: BrowserSidebarPoint;
  isDraggingRegion: boolean;
  rect: BrowserSidebarRect;
  start: BrowserSidebarPoint;
};

export type BrowserSidebarViewportSizeWindow = {
  innerHeight: number;
  innerWidth: number;
};

export const BROWSER_SIDEBAR_REGION_DRAG_THRESHOLD = 4;

export function isPointInsideCurrentBrowserSidebarViewport(
  point: BrowserSidebarPoint,
  viewportWindow: BrowserSidebarViewportSizeWindow = window,
): boolean {
  return isPointInsideViewportSize(point, {
    height: viewportWindow.innerHeight,
    width: viewportWindow.innerWidth,
  });
}

export function hasBrowserSidebarRegionDragStarted(
  startPoint: BrowserSidebarPoint,
  currentPoint: BrowserSidebarPoint,
  threshold: number = BROWSER_SIDEBAR_REGION_DRAG_THRESHOLD,
): boolean {
  return hasPointMovedPastThreshold(startPoint, currentPoint, threshold);
}

export function rectBetweenBrowserSidebarRegionDragPoints(
  startPoint: BrowserSidebarPoint,
  currentPoint: BrowserSidebarPoint,
): BrowserSidebarRect {
  return rectBetweenPoints(startPoint, currentPoint);
}

export function updateBrowserSidebarRegionDragState(
  state: BrowserSidebarRegionDragState,
  currentPoint: BrowserSidebarPoint,
): BrowserSidebarRegionDragState {
  const isDraggingRegion =
    state.isDraggingRegion ||
    hasBrowserSidebarRegionDragStarted(state.start, currentPoint);

  return {
    ...state,
    current: currentPoint,
    isDraggingRegion,
    rect: isDraggingRegion
      ? rectBetweenBrowserSidebarRegionDragPoints(state.start, currentPoint)
      : state.rect,
  };
}
