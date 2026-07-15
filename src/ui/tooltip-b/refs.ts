// Restored from ref/webview/assets/tooltip-B-u9JAuV.js

import type React from "react";
export function mergeDescribedBy(
  existingId?: string,
  tooltipId?: string,
): string | undefined {
  return existingId == null
    ? tooltipId
    : tooltipId == null
      ? existingId
      : `${existingId} ${tooltipId}`;
}
export function isFocusVisible(event: React.FocusEvent<HTMLElement>): boolean {
  try {
    return event.currentTarget.matches(":focus-visible");
  } catch {
    return false;
  }
}
export function triggerHasOverflow(element: HTMLElement | null): boolean {
  const overflowTarget =
    element?.querySelector("[data-tooltip-overflow-target]") ?? element;
  return (
    overflowTarget != null &&
    (overflowTarget.scrollWidth > overflowTarget.clientWidth ||
      overflowTarget.scrollHeight > overflowTarget.clientHeight)
  );
}
export function assignRef<T>(ref: React.Ref<T> | undefined, value: T): void {
  if (ref != null) {
    if (typeof ref === "function") {
      ref(value);
      return;
    }
    ref.current = value;
  }
}
export function assignButtonRef(
  ref: React.Ref<HTMLButtonElement> | undefined,
  value: HTMLElement | null,
): void {
  if (ref != null && !(value != null && !isHtmlButtonElement(value))) {
    if (typeof ref === "function") {
      ref(value);
      return;
    }
    ref.current = value;
  }
}
export function isHtmlElement(element: Element | null): element is HTMLElement {
  const ownerWindow = element?.ownerDocument.defaultView;
  return ownerWindow == null
    ? element instanceof HTMLElement
    : element instanceof ownerWindow.HTMLElement;
}
function isHtmlButtonElement(
  element: Element | null,
): element is HTMLButtonElement {
  const ownerWindow = element?.ownerDocument.defaultView;
  return ownerWindow == null
    ? element instanceof HTMLButtonElement
    : element instanceof ownerWindow.HTMLButtonElement;
}
