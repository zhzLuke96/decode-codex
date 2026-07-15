// Restored from ref/.vite/build/comment-preload.js
// Scroll-delta helpers used while reprojecting browser sidebar anchors.

import type { BrowserSidebarCommentAnchor } from "./anchors";
import type { BrowserSidebarPoint } from "./geometry";

export function getBrowserSidebarAnchorScrollDelta(
  anchor: BrowserSidebarCommentAnchor,
  frameWindow: Window,
): BrowserSidebarPoint {
  let scrollLeft = 0;
  let scrollTop = 0;

  for (const scrollContainer of anchor.scrollContainers ?? []) {
    const element = frameWindow.document.querySelector(
      scrollContainer.selector,
    );
    if (isScrollableElement(element)) {
      scrollLeft += element.scrollLeft - scrollContainer.scrollLeft;
      scrollTop += element.scrollTop - scrollContainer.scrollTop;
    }
  }

  return { x: scrollLeft, y: scrollTop };
}

export function getTextAnchorHorizontalScrollOffset(
  anchor: BrowserSidebarCommentAnchor,
  frameWindow: Window,
): number {
  return anchor.kind === "text" && !anchor.isFixed ? frameWindow.scrollX : 0;
}

function isScrollableElement(value: unknown): value is Element & {
  scrollLeft: number;
  scrollTop: number;
} {
  return (
    typeof value === "object" &&
    value != null &&
    "scrollLeft" in value &&
    "scrollTop" in value
  );
}
