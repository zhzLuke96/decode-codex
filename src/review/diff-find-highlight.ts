// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Applies in-page find/search highlights onto a rendered file-diff element:
// groups search matches by conversation unit or diff path, then maps each match
// onto the corresponding DOM range (preferring per-line targeting).
import {
  useAtomValue,
  activeReviewSearchMatchAtom,
  activeReviewDiffSearchResultAtom,
  composeTurnUnitKey,
  clearFindHighlights,
  findMatchesInElement,
  applyMatchHighlight,
  findLineElement,
  activeFindMatchClassName,
} from "../boundaries/onboarding-commons-externals.facade";

export function initReviewDiffFindHighlightChunk(): void {}

interface ReviewSearchMatch {
  id: string;
  location:
    | {
        domain: "conversation";
        turnKey: string;
        unitId: string;
      }
    | {
        domain: "diff";
        path: string;
        hunkId?: string;
        side?: string;
        lineStart: number;
        lineEnd: number;
      };
}

interface ReviewDiffSearchResult {
  query: string;
  matches: ReviewSearchMatch[];
}

export function groupReviewMatchesByConversationUnit(
  matches: ReviewSearchMatch[],
): Map<string, ReviewSearchMatch[]> {
  const grouped = new Map<string, ReviewSearchMatch[]>();
  for (const match of matches) {
    if (match.location.domain !== "conversation") continue;
    const key = composeTurnUnitKey(
      match.location.turnKey,
      match.location.unitId,
    );
    const list = grouped.get(key) ?? [];
    list.push(match);
    grouped.set(key, list);
  }
  return grouped;
}

export function groupReviewMatchesByDiffPath(
  matches: ReviewSearchMatch[],
): Map<string, ReviewSearchMatch[]> {
  const grouped = new Map<string, ReviewSearchMatch[]>();
  for (const match of matches) {
    if (match.location.domain !== "diff") continue;
    const list = grouped.get(match.location.path) ?? [];
    list.push(match);
    grouped.set(match.location.path, list);
  }
  return grouped;
}

export interface UseApplyDiffFindHighlightParams {
  path: string;
  skipFindHighlight: boolean;
}

export function useApplyDiffFindHighlight({
  path,
  skipFindHighlight,
}: UseApplyDiffFindHighlightParams): (fileDiffElement: HTMLElement) => void {
  const activeDiffResult = useAtomValue(
    activeReviewDiffSearchResultAtom,
  ) as ReviewDiffSearchResult | null;
  const activeMatchId =
    (useAtomValue(activeReviewSearchMatchAtom) as { id: string } | null)?.id ??
    null;
  return (fileDiffElement) => {
    applyDiffFindHighlight({
      activeDiffResult,
      activeMatchId,
      fileDiffElement,
      path,
      skipFindHighlight,
    });
  };
}

interface ApplyDiffFindHighlightParams {
  activeDiffResult: ReviewDiffSearchResult | null;
  activeMatchId: string | null;
  fileDiffElement: HTMLElement;
  path: string;
  skipFindHighlight: boolean;
}

export function applyDiffFindHighlight({
  activeDiffResult,
  activeMatchId,
  fileDiffElement,
  path,
  skipFindHighlight,
}: ApplyDiffFindHighlightParams): void {
  clearFindHighlights(fileDiffElement, { includeShadowRoots: true });
  if (skipFindHighlight || activeDiffResult == null) return;
  const pathMatches = groupReviewMatchesByDiffPath(
    activeDiffResult.matches,
  ).get(path);
  if (pathMatches == null || pathMatches.length === 0) return;
  if (
    applyHunkLineHighlights({
      activeMatchId,
      fileDiffElement,
      query: activeDiffResult.query,
      sourceMatches: pathMatches,
    })
  ) {
    return;
  }
  findMatchesInElement({
    target: fileDiffElement,
    query: activeDiffResult.query,
    maxMatches: pathMatches.length,
    includeShadowRoots: true,
  }).matches.forEach((element: HTMLElement, index: number) => {
    const match = pathMatches[index];
    if (match == null) return;
    applyMatchHighlight({ element, matchId: match.id });
    if (match.id === activeMatchId) {
      element.classList.add(activeFindMatchClassName);
    }
  });
}

interface ApplyHunkLineHighlightsParams {
  activeMatchId: string | null;
  fileDiffElement: HTMLElement;
  query: string;
  sourceMatches: ReviewSearchMatch[];
}

interface HunkLineGroup {
  lineNumber: number;
  side: string | undefined;
  matches: ReviewSearchMatch[];
}

function applyHunkLineHighlights({
  activeMatchId,
  fileDiffElement,
  query,
  sourceMatches,
}: ApplyHunkLineHighlightsParams): boolean {
  if (
    sourceMatches.some(
      (match) =>
        match.location.domain === "diff" && match.location.hunkId === "path",
    )
  ) {
    return false;
  }
  const groupsByLine = new Map<string, HunkLineGroup>();
  for (const match of sourceMatches) {
    if (
      match.location.domain !== "diff" ||
      match.location.lineStart !== match.location.lineEnd
    ) {
      continue;
    }
    const key = `${match.location.side ?? "unified"}:${match.location.lineStart}`;
    const group = groupsByLine.get(key) ?? {
      lineNumber: match.location.lineStart,
      side: match.location.side,
      matches: [],
    };
    group.matches.push(match);
    groupsByLine.set(key, group);
  }
  let sawAnyGroup = false;
  let sawLineElement = false;
  for (const group of groupsByLine.values()) {
    sawAnyGroup = true;
    const lineElement = findLineElement({
      container: fileDiffElement,
      lineNumber: group.lineNumber,
      side: group.side,
      includeShadowRoots: true,
    });
    if (lineElement == null) continue;
    sawLineElement = true;
    findMatchesInElement({
      target: lineElement,
      query,
      maxMatches: group.matches.length,
      includeShadowRoots: false,
    }).matches.forEach((element: HTMLElement, index: number) => {
      const match = group.matches[index];
      if (match == null) return;
      applyMatchHighlight({ element, matchId: match.id });
      if (match.id === activeMatchId) {
        element.classList.add(activeFindMatchClassName);
      }
    });
  }
  return (
    sawLineElement ||
    (sawAnyGroup &&
      (fileDiffElement.matches("[data-line]") ||
        fileDiffElement.querySelector("[data-line]") != null))
  );
}
