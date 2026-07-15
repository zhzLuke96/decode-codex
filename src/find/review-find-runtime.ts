// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review-search DOM highlight and text-snippet helpers.
import {
  activeContentSearchMatchClassName,
  clearContentSearchHighlights,
  findContentSearchMatchElement,
  searchContentForMatches,
  setContentSearchMatchId,
} from "./dom-content-search";
import { collectSearchRoots } from "./dom-content-search/roots";
import {
  findCaseInsensitiveMatchOffsets,
  sliceMatchWithContext,
} from "./find-match-offsets";

export const activeFindMatchClassName = activeContentSearchMatchClassName;

export const clearFindHighlights = clearContentSearchHighlights;
export const findMatchesInElement = searchContentForMatches;
export const findSearchMatchElement = findContentSearchMatchElement;
export const findTextMatchOffsets = findCaseInsensitiveMatchOffsets;

export function applyMatchHighlight({
  element,
  matchId,
}: {
  element: Element;
  matchId: string;
}): void {
  setContentSearchMatchId({ element, matchId });
}

export function buildSearchSnippet(
  text: string,
  start: number,
  end: number,
): ReturnType<typeof sliceMatchWithContext> {
  return sliceMatchWithContext(text, start, end);
}

export function diffSearchMatchId(location: {
  hunkId: string;
  path: string;
  start: number;
}): string {
  return `diff:${location.path}:${location.hunkId}:${location.start}`;
}

export function findLineElement({
  container,
  includeShadowRoots,
  lineNumber,
  side,
}: {
  container: ParentNode;
  includeShadowRoots: boolean;
  lineNumber: number;
  side?: string;
}): Element | null {
  const selectors = buildLineSelectors(lineNumber, side);
  for (const root of collectSearchRoots(container, { includeShadowRoots })) {
    for (const selector of selectors) {
      const element = root.querySelector(selector);
      if (element != null) return element;
    }
  }
  return null;
}

function buildLineSelectors(lineNumber: number, side?: string): string[] {
  const escapedLine = CSS.escape(String(lineNumber));
  const sideSelectors =
    side === "additions"
      ? [`[data-line-new-num="${escapedLine}"]`]
      : side === "deletions"
        ? [`[data-line-old-num="${escapedLine}"]`]
        : [];
  return [
    ...sideSelectors,
    `[data-line="${escapedLine}"]`,
    `[data-line-number="${escapedLine}"]`,
    `[data-line-num="${escapedLine}"]`,
  ];
}
