// Restored from ref/.vite/build/comment-preload.js
// Form-control text selection helpers for browser sidebar anchors.

import type { BrowserSidebarTextLocator } from "./anchors";
import type { BrowserSidebarRect } from "./geometry";
import { measureBrowserSidebarFormControlSelectionRects } from "./form-control-measurement";
import {
  getBrowserSidebarRangeEndpointPoint,
  isBrowserSidebarFixedTextRoot,
} from "./text-ranges";
import { getBrowserSidebarTextLocatorRootDescriptor } from "./text-locators";

export type BrowserSidebarFormControlSelection = {
  frameWindow: Window;
  isFixed: boolean;
  locator: BrowserSidebarTextLocator;
  rects: BrowserSidebarRect[];
  selectedText: string;
  viewportPoint: { x: number; y: number };
};

const BROWSER_SIDEBAR_SELECTABLE_INPUT_TYPES = new Set([
  "email",
  "search",
  "tel",
  "text",
  "url",
]);

export type BrowserSidebarSelectableFormControl =
  | HTMLInputElement
  | HTMLTextAreaElement;

export function getBrowserSidebarDeepActiveElement(
  rootDocument: Document,
): Element | null {
  let activeElement = rootDocument.activeElement;
  while (activeElement?.shadowRoot?.activeElement != null) {
    activeElement = activeElement.shadowRoot.activeElement;
  }
  return activeElement;
}

export function captureBrowserSidebarFormControlSelection(
  frameWindow: Window,
): BrowserSidebarFormControlSelection | null {
  const activeElement = getBrowserSidebarDeepActiveElement(
    frameWindow.document,
  );
  if (
    !isBrowserSidebarSelectableFormControl(activeElement) ||
    isBrowserSidebarSecureFormControl(activeElement, frameWindow)
  ) {
    return null;
  }

  let selectionStart = activeElement.selectionStart;
  let selectionEnd = activeElement.selectionEnd;
  if (selectionStart == null || selectionEnd == null) {
    const selectedText = frameWindow.getSelection()?.toString() ?? "";
    selectionStart = activeElement.value.indexOf(selectedText);
    selectionEnd = selectionStart + selectedText.length;
    if (
      selectedText.length === 0 ||
      selectionStart === -1 ||
      activeElement.value.indexOf(selectedText, selectionStart + 1) !== -1
    ) {
      return null;
    }
  }

  return selectionEnd <= selectionStart ||
    activeElement.value.slice(selectionStart, selectionEnd).trim().length === 0
    ? null
    : buildBrowserSidebarFormControlSelection(
        frameWindow,
        activeElement,
        selectionStart,
        selectionEnd,
        activeElement.selectionDirection === "backward"
          ? "backward"
          : "forward",
      );
}

export function buildBrowserSidebarFormControlSelection(
  frameWindow: Window,
  element: BrowserSidebarSelectableFormControl,
  startOffset: number,
  endOffset: number,
  direction: string | null,
): BrowserSidebarFormControlSelection | null {
  const locatorRoot = getBrowserSidebarTextLocatorRootDescriptor(element);
  const selectedText = element.value.slice(startOffset, endOffset);
  if (
    locatorRoot == null ||
    locatorRoot.selector == null ||
    isBrowserSidebarSecureFormControl(element, frameWindow) ||
    selectedText.trim().length === 0 ||
    selectedText.length > 20_000
  ) {
    return null;
  }

  const rects = measureBrowserSidebarFormControlSelectionRects(
    element,
    startOffset,
    endOffset,
  );
  return rects.length === 0
    ? null
    : {
        frameWindow,
        isFixed: isBrowserSidebarFixedTextRoot(element, frameWindow),
        locator: {
          ...locatorRoot,
          selector: locatorRoot.selector,
          kind: "form-control",
          direction,
          startOffset,
          endOffset,
        },
        rects,
        selectedText,
        viewportPoint: getBrowserSidebarRangeEndpointPoint(
          rects,
          direction === "forward",
        ),
      };
}

export function isBrowserSidebarSelectableFormControl(
  value: unknown,
): value is BrowserSidebarSelectableFormControl {
  if (value == null) return false;

  const element = value as Partial<HTMLInputElement & HTMLTextAreaElement>;
  const frameWindow = element.ownerDocument?.defaultView;
  const InputElement = frameWindow?.HTMLInputElement;
  const TextAreaElement = frameWindow?.HTMLTextAreaElement;
  return TextAreaElement != null && value instanceof TextAreaElement
    ? true
    : InputElement != null &&
        value instanceof InputElement &&
        BROWSER_SIDEBAR_SELECTABLE_INPUT_TYPES.has(element.type ?? "");
}

function isBrowserSidebarSecureFormControl(
  element: Element,
  frameWindow: Window,
): boolean {
  const textSecurity = frameWindow
    .getComputedStyle(element)
    .getPropertyValue("-webkit-text-security");
  return textSecurity.length > 0 && textSecurity !== "none";
}
