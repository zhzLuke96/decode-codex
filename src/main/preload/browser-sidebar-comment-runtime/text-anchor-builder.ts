// Restored from ref/.vite/build/comment-preload.js
// Text anchor state builder for browser sidebar comments.

import type {
  BrowserSidebarTextAnchor,
  BrowserSidebarTextLocator,
} from "./anchors";
import {
  getBrowserSidebarFramePath,
  getBrowserSidebarWindowFrameOffset,
} from "./frame-path";
import type {
  BrowserSidebarPoint,
  BrowserSidebarRect,
  BrowserSidebarSize,
} from "./geometry";
import { getBrowserSidebarViewportSize } from "./overlay-layout";
import { getBrowserSidebarScrollContainerSnapshotsAtPoint } from "./scroll-containers";
import { getBrowserSidebarNonEmptyBoundingRect } from "./text-ranges";

export type BrowserSidebarCapturedTextSelection = {
  frameWindow: Window;
  isFixed: boolean;
  locator: BrowserSidebarTextLocator;
  rects: BrowserSidebarRect[];
  selectedText: string;
  viewportPoint: BrowserSidebarPoint;
};

export type BrowserSidebarTextAnchorState = {
  anchor: BrowserSidebarTextAnchor;
  themeVariant: "dark" | "light";
  viewportPoint: BrowserSidebarPoint;
  viewportRect: BrowserSidebarRect;
  viewportSize: BrowserSidebarSize;
};

export function buildBrowserSidebarTextAnchorState(
  selection: BrowserSidebarCapturedTextSelection,
  rootWindow: Window = window,
): BrowserSidebarTextAnchorState | null {
  const framePath = getBrowserSidebarFramePath(
    selection.frameWindow,
    rootWindow,
  );
  if (framePath == null) return null;

  const frameOffset = getBrowserSidebarWindowFrameOffset(
    selection.frameWindow,
    rootWindow,
  );
  const viewportRect = getBrowserSidebarNonEmptyBoundingRect(selection.rects);
  const horizontalScroll = selection.isFixed
    ? 0
    : selection.frameWindow.scrollX;
  const selectionRects = selection.rects.map((rect) => ({
    ...rect,
    x: rect.x + horizontalScroll,
    y: selection.isFixed ? rect.y : rect.y + selection.frameWindow.scrollY,
  }));
  const anchorRect = getBrowserSidebarNonEmptyBoundingRect(selectionRects);
  const scrollContainers = getBrowserSidebarScrollContainerSnapshotsAtPoint(
    selection.frameWindow,
    selection.viewportPoint,
  );
  const viewportPoint = {
    x: selection.viewportPoint.x + frameOffset.x,
    y: selection.viewportPoint.y + frameOffset.y,
  };

  return {
    anchor: {
      kind: "text",
      pageUrl: rootWindow.location.href,
      frameUrl:
        selection.frameWindow === rootWindow
          ? null
          : selection.frameWindow.location.href,
      title: "Selected text",
      elementPath: "browser text selection",
      point: {
        xPercent:
          ((selection.viewportPoint.x + horizontalScroll) /
            selection.frameWindow.innerWidth) *
          100,
        y: selection.isFixed
          ? selection.viewportPoint.y
          : selection.viewportPoint.y + selection.frameWindow.scrollY,
      },
      rect: anchorRect,
      isFixed: selection.isFixed,
      role: null,
      name: null,
      selector: null,
      framePath,
      nearbyText: null,
      selectedText: selection.selectedText,
      selectionRects,
      textLocator: selection.locator,
      ...(scrollContainers.length === 0 ? {} : { scrollContainers }),
    },
    themeVariant: rootWindow.matchMedia?.("(prefers-color-scheme: dark)")
      ?.matches
      ? "dark"
      : "light",
    viewportRect: {
      ...viewportRect,
      x: viewportRect.x + frameOffset.x,
      y: viewportRect.y + frameOffset.y,
    },
    viewportPoint,
    viewportSize: getBrowserSidebarViewportSize(rootWindow),
  };
}
