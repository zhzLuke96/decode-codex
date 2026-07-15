// Restored from ref/.vite/build/comment-preload.js
// DOM Range helpers for browser sidebar text anchors.

import type { BrowserSidebarTextLocator } from "./anchors";
import { isBrowserSidebarElement } from "./element-geometry";
import type { BrowserSidebarPoint, BrowserSidebarRect } from "./geometry";
import {
  getBrowserSidebarShadowHost,
  isBrowserSidebarShadowRoot,
  resolveBrowserSidebarTextPositionAtOffset,
} from "./text-locators";

export type BrowserSidebarTextSelectionDirection = "backward" | "forward";

type BrowserSidebarSelectionWithDirection = Selection & {
  direction?: string;
  getComposedRanges?: (options: { shadowRoots: ShadowRoot[] }) => StaticRange[];
};

export function getBrowserSidebarRangeFromSelection(
  frameWindow: Window,
  selection: Selection,
): Range | null {
  const range = selection.getRangeAt(0);
  if (
    !range.collapsed &&
    browserSidebarSelectionEndpointsMatchRange(selection, range)
  ) {
    return range;
  }

  const selectionWithComposedRanges =
    selection as BrowserSidebarSelectionWithDirection;
  if (!hasBrowserSidebarComposedRanges(selectionWithComposedRanges)) {
    return null;
  }

  const composedRange = selectionWithComposedRanges.getComposedRanges({
    shadowRoots: collectBrowserSidebarShadowRoots(frameWindow.document),
  })[0];
  if (composedRange == null) return null;

  const restoredRange = frameWindow.document.createRange();
  restoredRange.setStart(
    composedRange.startContainer,
    composedRange.startOffset,
  );
  restoredRange.setEnd(composedRange.endContainer, composedRange.endOffset);
  return restoredRange.collapsed ? null : restoredRange;
}

export function getBrowserSidebarSelectionDirection(
  selection: Selection,
  range: Range,
): BrowserSidebarTextSelectionDirection {
  const selectionWithDirection =
    selection as BrowserSidebarSelectionWithDirection;
  return selection.anchorNode === range.startContainer &&
    selection.anchorOffset === range.startOffset
    ? "forward"
    : (selection.focusNode === range.startContainer &&
          selection.focusOffset === range.startOffset) ||
        selectionWithDirection.direction === "backward"
      ? "backward"
      : "forward";
}

export function createBrowserSidebarRangeFromTextLocator(
  frameWindow: Window,
  root: Element | ShadowRoot,
  locator: BrowserSidebarTextLocator,
): Range | null {
  const startPosition = resolveBrowserSidebarTextPositionAtOffset(
    root,
    locator.startOffset,
  );
  const endPosition = resolveBrowserSidebarTextPositionAtOffset(
    root,
    locator.endOffset,
  );
  if (startPosition == null || endPosition == null) return null;

  const range = frameWindow.document.createRange();
  range.setStart(startPosition.node, startPosition.offset);
  range.setEnd(endPosition.node, endPosition.offset);
  return range;
}

export function isBrowserSidebarFixedTextRoot(
  root: Element | ShadowRoot,
  frameWindow: Window,
): boolean {
  let currentElement = isBrowserSidebarElement(root)
    ? root
    : getBrowserSidebarShadowHost(root);

  while (
    currentElement != null &&
    currentElement !== frameWindow.document.body
  ) {
    const position = frameWindow.getComputedStyle(currentElement).position;
    if (position === "fixed" || position === "sticky") return true;
    currentElement =
      currentElement.parentElement ??
      getBrowserSidebarShadowHost(currentElement.getRootNode());
  }

  return false;
}

export function browserSidebarRangeIntersectsSecureText(
  range: Range,
  frameWindow: Window,
): boolean {
  const commonAncestor = range.commonAncestorContainer;
  const NodeCtor =
    frameWindow.Node ?? (typeof Node === "undefined" ? null : Node);
  if (NodeCtor != null && commonAncestor.nodeType === NodeCtor.TEXT_NODE) {
    return (
      commonAncestor.parentElement != null &&
      isBrowserSidebarSecureTextElement(
        commonAncestor.parentElement,
        frameWindow,
      )
    );
  }

  const textWalker = frameWindow.document.createTreeWalker(
    commonAncestor,
    NodeFilter.SHOW_TEXT,
  );
  let textNode = textWalker.nextNode();
  while (textNode != null) {
    if (
      range.intersectsNode(textNode) &&
      textNode.parentElement != null &&
      isBrowserSidebarSecureTextElement(textNode.parentElement, frameWindow)
    ) {
      return true;
    }
    textNode = textWalker.nextNode();
  }

  return false;
}

export function getBrowserSidebarRangeRects(
  range: Range,
): BrowserSidebarRect[] {
  if (typeof range.getClientRects !== "function") return [];

  const clientRects = range.getClientRects();
  return clientRects.length > 1_000
    ? []
    : Array.from(clientRects)
        .filter((rect) => rect.width > 0 && rect.height > 0)
        .map((rect) => ({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        }));
}

export function getBrowserSidebarNonEmptyBoundingRect(
  rects: readonly BrowserSidebarRect[],
): BrowserSidebarRect {
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

export function getBrowserSidebarRangeEndpointPoint(
  rects: readonly BrowserSidebarRect[],
  isForwardSelection: boolean,
): BrowserSidebarPoint {
  const endpointRect = isForwardSelection ? rects.at(-1) : rects[0];
  return endpointRect == null
    ? { x: 0, y: 0 }
    : {
        x: isForwardSelection
          ? endpointRect.x + endpointRect.width
          : endpointRect.x,
        y: endpointRect.y + endpointRect.height / 2,
      };
}

function browserSidebarSelectionEndpointsMatchRange(
  selection: Selection,
  range: Range,
): boolean {
  return (
    (selection.anchorNode === range.startContainer &&
      selection.anchorOffset === range.startOffset &&
      selection.focusNode === range.endContainer &&
      selection.focusOffset === range.endOffset) ||
    (selection.focusNode === range.startContainer &&
      selection.focusOffset === range.startOffset &&
      selection.anchorNode === range.endContainer &&
      selection.anchorOffset === range.endOffset)
  );
}

function hasBrowserSidebarComposedRanges(
  selection: BrowserSidebarSelectionWithDirection,
): selection is BrowserSidebarSelectionWithDirection & {
  getComposedRanges: NonNullable<
    BrowserSidebarSelectionWithDirection["getComposedRanges"]
  >;
} {
  return typeof selection.getComposedRanges === "function";
}

function collectBrowserSidebarShadowRoots(
  root: Document | ShadowRoot,
): ShadowRoot[] {
  const shadowRoots: ShadowRoot[] = [];
  for (const element of root.querySelectorAll("*")) {
    if (isBrowserSidebarElement(element) && element.shadowRoot != null) {
      shadowRoots.push(
        element.shadowRoot,
        ...collectBrowserSidebarShadowRoots(element.shadowRoot),
      );
    }
  }
  return shadowRoots;
}

function isBrowserSidebarSecureTextElement(
  element: Element,
  frameWindow: Window,
): boolean {
  const textSecurity = frameWindow
    .getComputedStyle(element)
    .getPropertyValue("-webkit-text-security");
  return textSecurity.length > 0 && textSecurity !== "none";
}
