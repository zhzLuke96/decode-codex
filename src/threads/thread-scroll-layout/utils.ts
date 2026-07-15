// Restored from ref/webview/assets/thread-scroll-layout-BNp7nttn.js
// Shared helpers for the thread scroll layout restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import {
  getScrollDistanceFromBottomPx,
  setScrollDistanceFromBottomPx,
} from "../../utils/reverse-scroll-distance";

export { getScrollDistanceFromBottomPx, setScrollDistanceFromBottomPx };

type MotionLikeValue = {
  get(): unknown;
  on(eventName: "change", listener: () => void): () => void;
};

export const SCROLLED_FROM_BOTTOM_THRESHOLD_PX = 24;
export const TOP_LOAD_MORE_THRESHOLD_PX = 64;
export const SCROLL_TO_BOTTOM_DURATION_MS = 260;
export const USER_SCROLL_LISTENER_WINDOW_MS = 1_000;
export const timelineScrollAttributes = {
  "data-app-action-timeline-scroll": "",
};

const WHEEL_LINE_HEIGHT_PX = 16;
const DOM_DELTA_LINE_MODE = 1;
const DOM_DELTA_PAGE_MODE = 2;

export const threadScrollContainerClassName = clsx(
  "thread-scroll-container relative h-full overflow-x-hidden overflow-y-auto [overflow-anchor:none] [scroll-padding-bottom:var(--thread-scroll-padding-bottom,0px)] electron:[scrollbar-gutter:stable_both-edges] pt-(--thread-content-top-inset) [container-name:thread-content] [container-type:inline-size]",
  "focus:outline-none",
  "[&:has([data-thread-scroll-footer='true']:focus-within)]:[scroll-padding-bottom:0px]",
  "flex flex-col-reverse",
);

export function getThreadScrollViewportClassName(
  hasLiveMcpAppFrame: boolean,
): string {
  return clsx(
    "relative h-full flex-1",
    hasLiveMcpAppFrame
      ? "[content-visibility:visible]"
      : "[content-visibility:auto]",
  );
}

export function getDistanceFromBottom(element: HTMLElement): number {
  return getScrollDistanceFromBottomPx(element);
}

export function setDistanceFromBottom(
  element: HTMLElement,
  distancePx: number,
): void {
  setScrollDistanceFromBottomPx(element, distancePx);
}

export function isScrolledToBottom(element: HTMLElement): boolean {
  return getDistanceFromBottom(element) <= SCROLLED_FROM_BOTTOM_THRESHOLD_PX;
}

export function isAtTopLoadMoreThreshold(element: HTMLElement): boolean {
  return getDistanceToTop(element) <= TOP_LOAD_MORE_THRESHOLD_PX;
}

export function getDistanceToTop(element: HTMLElement): number {
  return (
    element.scrollHeight - element.clientHeight - getDistanceFromBottom(element)
  );
}

export function normalizeWheelDelta(
  event: WheelEvent,
  viewportHeightPx: number,
): number {
  if (event.deltaMode === DOM_DELTA_LINE_MODE) {
    return event.deltaY * WHEEL_LINE_HEIGHT_PX;
  }
  if (event.deltaMode === DOM_DELTA_PAGE_MODE) {
    return event.deltaY * viewportHeightPx;
  }
  return event.deltaY;
}

export function useWideBlockInlineShift(contentX: unknown): string {
  const [inlineShift, setInlineShift] = React.useState(() =>
    formatWideBlockInlineShift(contentX),
  );

  React.useEffect(() => {
    setInlineShift(formatWideBlockInlineShift(contentX));
    if (!isMotionLikeValue(contentX)) return undefined;
    return contentX.on("change", () => {
      setInlineShift(formatWideBlockInlineShift(contentX));
    });
  }, [contentX]);

  return inlineShift;
}

function formatWideBlockInlineShift(contentX: unknown): string {
  return `${Math.abs(readMotionValueAsNumber(contentX))}px`;
}

function readMotionValueAsNumber(contentX: unknown): number {
  const value = isMotionLikeValue(contentX) ? contentX.get() : contentX;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function isMotionLikeValue(value: unknown): value is MotionLikeValue {
  return (
    typeof value === "object" &&
    value != null &&
    "get" in value &&
    typeof value.get === "function" &&
    "on" in value &&
    typeof value.on === "function"
  );
}
