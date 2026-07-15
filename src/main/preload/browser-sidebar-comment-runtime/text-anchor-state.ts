// Restored from ref/.vite/build/comment-preload.js
// Text anchor capture and reattachment helpers for browser sidebar comments.

import type {
  BrowserSidebarTextAnchor,
  BrowserSidebarTextLocator,
} from "./anchors";
import {
  buildBrowserSidebarTextAnchorState,
  type BrowserSidebarCapturedTextSelection,
  type BrowserSidebarTextAnchorState,
} from "./text-anchor-builder";
import {
  buildBrowserSidebarFormControlSelection,
  captureBrowserSidebarFormControlSelection,
  getBrowserSidebarDeepActiveElement,
  isBrowserSidebarSelectableFormControl,
} from "./form-control-selection";
import { getBrowserSidebarFrameWindow } from "./frame-path";
import { frameUrlMatchesWindow } from "./page-urls";
import {
  browserSidebarRangeIntersectsSecureText,
  createBrowserSidebarRangeFromTextLocator,
  getBrowserSidebarRangeEndpointPoint,
  getBrowserSidebarRangeFromSelection,
  getBrowserSidebarRangeRects,
  getBrowserSidebarSelectionDirection,
  isBrowserSidebarFixedTextRoot,
} from "./text-ranges";
import {
  getBrowserSidebarTextLocatorRoot,
  getBrowserSidebarTextLocatorRootDescriptor,
  getBrowserSidebarTextOffsetWithinRoot,
  resolveBrowserSidebarTextLocatorTarget,
} from "./text-locators";

export function captureBrowserSidebarActiveTextAnchorState(
  frameWindow?: Window | null,
  rootWindow: Window = window,
): BrowserSidebarTextAnchorState | null {
  const targetWindow =
    frameWindow ?? getBrowserSidebarDeepestActiveFrameWindow(rootWindow);
  if (targetWindow == null) return null;

  const capturedSelection =
    captureBrowserSidebarFormControlSelection(targetWindow) ??
    captureBrowserSidebarDomTextSelection(targetWindow);
  return capturedSelection == null
    ? null
    : buildBrowserSidebarTextAnchorState(capturedSelection, rootWindow);
}

export function restoreBrowserSidebarTextAnchorState(
  anchor: BrowserSidebarTextAnchor,
  rootWindow: Window = window,
): BrowserSidebarTextAnchorState | null {
  const frameWindow = getBrowserSidebarFrameWindow(
    anchor.framePath,
    rootWindow,
  );
  if (
    frameWindow == null ||
    !frameUrlMatchesWindow(anchor.frameUrl, frameWindow)
  ) {
    return null;
  }

  const target = resolveBrowserSidebarTextLocatorTarget(
    frameWindow,
    anchor.textLocator,
  );
  if (target == null) return null;

  let capturedSelection: BrowserSidebarCapturedTextSelection | null;
  switch (anchor.textLocator.kind) {
    case "dom":
      capturedSelection = restoreBrowserSidebarDomTextSelection(
        frameWindow,
        target,
        anchor.textLocator,
        anchor.selectedText,
      );
      break;
    case "form-control":
      capturedSelection =
        isBrowserSidebarSelectableFormControl(target) &&
        target.ownerDocument.defaultView === frameWindow
          ? buildBrowserSidebarFormControlSelection(
              frameWindow,
              target,
              anchor.textLocator.startOffset,
              anchor.textLocator.endOffset,
              anchor.textLocator.direction,
            )
          : null;
      break;
  }

  return capturedSelection == null ||
    capturedSelection.selectedText !== anchor.selectedText
    ? null
    : buildBrowserSidebarTextAnchorState(capturedSelection, rootWindow);
}

export function captureBrowserSidebarDomTextSelection(
  frameWindow: Window,
): BrowserSidebarCapturedTextSelection | null {
  const selection = frameWindow.getSelection();
  if (selection == null || selection.rangeCount === 0) return null;

  const selectedText = selection.toString();
  if (selectedText.trim().length === 0 || selectedText.length > 20_000) {
    return null;
  }

  const range = getBrowserSidebarRangeFromSelection(frameWindow, selection);
  if (range == null) return null;

  const locatorRoot = getBrowserSidebarTextLocatorRoot(
    range.commonAncestorContainer,
  );
  if (
    locatorRoot == null ||
    browserSidebarRangeIntersectsSecureText(range, frameWindow)
  ) {
    return null;
  }

  const locatorRootDescriptor =
    getBrowserSidebarTextLocatorRootDescriptor(locatorRoot);
  if (locatorRootDescriptor == null) return null;

  const startOffset = getBrowserSidebarTextOffsetWithinRoot(
    locatorRoot,
    range.startContainer,
    range.startOffset,
  );
  const endOffset = getBrowserSidebarTextOffsetWithinRoot(
    locatorRoot,
    range.endContainer,
    range.endOffset,
  );
  if (startOffset == null || endOffset == null || endOffset <= startOffset) {
    return null;
  }

  const rects = getBrowserSidebarRangeRects(range);
  if (rects.length === 0) return null;

  const isForwardSelection =
    getBrowserSidebarSelectionDirection(selection, range) === "forward";
  return {
    frameWindow,
    isFixed: isBrowserSidebarFixedTextRoot(locatorRoot, frameWindow),
    locator: {
      ...locatorRootDescriptor,
      kind: "dom",
      direction: isForwardSelection ? "forward" : "backward",
      rangeText: range.toString(),
      startOffset,
      endOffset,
    },
    rects,
    selectedText,
    viewportPoint: getBrowserSidebarRangeEndpointPoint(
      rects,
      isForwardSelection,
    ),
  };
}

export function restoreBrowserSidebarDomTextSelection(
  frameWindow: Window,
  target: Element | ShadowRoot,
  locator: BrowserSidebarTextLocator,
  selectedText: string,
): BrowserSidebarCapturedTextSelection | null {
  const range = createBrowserSidebarRangeFromTextLocator(
    frameWindow,
    target,
    locator,
  );
  if (
    range == null ||
    range.toString() !== locator.rangeText ||
    browserSidebarRangeIntersectsSecureText(range, frameWindow) ||
    selectedText.length > 20_000
  ) {
    return null;
  }

  const rects = getBrowserSidebarRangeRects(range);
  return rects.length === 0
    ? null
    : {
        frameWindow,
        isFixed: isBrowserSidebarFixedTextRoot(target, frameWindow),
        locator,
        rects,
        selectedText,
        viewportPoint: getBrowserSidebarRangeEndpointPoint(
          rects,
          locator.direction === "forward",
        ),
      };
}

function getBrowserSidebarDeepestActiveFrameWindow(
  rootWindow: Window,
): Window | null {
  let currentWindow = rootWindow;

  for (;;) {
    const activeElement = getBrowserSidebarDeepActiveElement(
      currentWindow.document,
    );
    const childWindow = getActiveFrameContentWindow(activeElement);
    if (childWindow == null) return currentWindow;
    currentWindow = childWindow;
  }
}

function getActiveFrameContentWindow(element: Element | null): Window | null {
  if (element == null || element.tagName.toLowerCase() !== "iframe")
    return null;

  try {
    const frameElement = element as HTMLIFrameElement;
    return frameElement.contentWindow == null ||
      frameElement.contentWindow.document == null
      ? null
      : frameElement.contentWindow;
  } catch {
    return null;
  }
}
