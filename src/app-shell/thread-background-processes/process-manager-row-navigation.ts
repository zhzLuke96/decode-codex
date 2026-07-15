// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Keyboard navigation and focus management for the process manager table rows.
import type { KeyboardEvent } from "react";

const PROCESS_MANAGER_ROW_SELECTOR = "[data-process-manager-row='true']";
const DEFAULT_PAGE_SIZE = 5;

type RowFocusDirection =
  | "first"
  | "ArrowDown"
  | "ArrowUp"
  | "PageDown"
  | "PageUp";

export function focusFirstRowRef(element: HTMLElement | null): void {
  if (element == null) return;
  requestAnimationFrame(() => {
    if (element.isConnected) moveRowFocus(element, "first");
  });
}

export function focusHighlightedRowRef(element: HTMLElement | null): void {
  if (element == null) return;
  requestAnimationFrame(() => {
    if (element.isConnected) {
      element.focus();
      element.scrollIntoView({ block: "nearest" });
    }
  });
}

export function handleProcessManagerScrollKeyDown(
  event: KeyboardEvent<HTMLElement>,
): void {
  if (
    event.key === "ArrowDown" ||
    event.key === "ArrowUp" ||
    event.key === "PageDown" ||
    event.key === "PageUp"
  ) {
    event.preventDefault();
    moveRowFocus(event.currentTarget, event.key);
  }
}

function moveRowFocus(
  container: HTMLElement,
  direction: RowFocusDirection,
): void {
  const rowElements = Array.from(
    container.querySelectorAll<HTMLElement>(PROCESS_MANAGER_ROW_SELECTOR),
  );
  if (rowElements.length === 0) return;

  const activeElement = container.ownerDocument.activeElement;
  const activeRow =
    activeElement instanceof HTMLElement
      ? activeElement.closest<HTMLElement>(PROCESS_MANAGER_ROW_SELECTOR)
      : null;
  const currentIndex =
    activeRow == null || !container.contains(activeRow)
      ? -1
      : rowElements.indexOf(activeRow);

  const nextRow =
    rowElements[
      computeNextFocusIndex(
        currentIndex,
        getPageSize(rowElements[0]),
        rowElements.length,
        direction,
      )
    ];
  nextRow.focus();
  nextRow.scrollIntoView({ block: "nearest" });
}

function computeNextFocusIndex(
  currentIndex: number,
  pageSize: number,
  rowCount: number,
  direction: RowFocusDirection,
): number {
  if (direction === "first") return 0;
  if (currentIndex === -1) {
    return direction === "ArrowUp" || direction === "PageUp" ? rowCount - 1 : 0;
  }
  return direction === "ArrowDown"
    ? Math.min(rowCount - 1, currentIndex + 1)
    : direction === "ArrowUp"
      ? Math.max(0, currentIndex - 1)
      : direction === "PageDown"
        ? Math.min(rowCount - 1, currentIndex + pageSize)
        : Math.max(0, currentIndex - pageSize);
}

function getPageSize(rowElement: HTMLElement): number {
  const scrollContainer = rowElement.closest("[data-process-manager-scroll]");
  if (!(scrollContainer instanceof HTMLElement)) return DEFAULT_PAGE_SIZE;

  const rowHeight = rowElement.getBoundingClientRect().height;
  return rowHeight <= 0
    ? DEFAULT_PAGE_SIZE
    : Math.max(
        1,
        Math.floor(scrollContainer.getBoundingClientRect().height / rowHeight) -
          1,
      );
}
