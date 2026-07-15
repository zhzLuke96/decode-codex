// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the 1-based source line number for a rendered diff column element,
// reading the `data-column-number`, ancestor `data-line`, or inner line-number
// text in that order. Shared by the git-blame and file-change gutter renderers.

export function parseDiffColumnLineNumber(element: Element): number | null {
  const raw =
    (element as HTMLElement).dataset?.columnNumber ||
    element.closest("[data-line]")?.getAttribute("data-line") ||
    element.querySelector("[data-line-number-content]")?.textContent;
  if (raw == null) return null;
  const lineNumber = Number.parseInt(raw, 10);
  return Number.isNaN(lineNumber) ? null : lineNumber;
}
