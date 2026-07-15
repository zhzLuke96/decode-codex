// Restored from ref/webview/assets/patch-diff-stats-DBMgLllB.js
// patch-diff-stats-DBMgLllB chunk restored from the Codex webview bundle.
import { useCallback, useState } from "react";
import type { RefCallback } from "react";
import { parseDiff } from "./parse-diff";
import { useResizeObserverRef } from "./use-resize-observer";
export type PatchDiffOpenLocation = {
  line: number;
  path: string;
};
export type PatchDiffStats = {
  added: number;
  deleted: number;
  openLocation: PatchDiffOpenLocation;
};
type PatchDiffLineCounts = {
  added: number;
  deleted: number;
};
export function usePatchDiffContentHeight() {
  const [elementHeightPx, setElementHeightPx] = useState(0);
  const setElementHeight = useCallback((nextHeightPx: number) => {
    setElementHeightPx((currentHeightPx) =>
      currentHeightPx === nextHeightPx ? currentHeightPx : nextHeightPx,
    );
  }, []);
  const resizeObserverRef = useResizeObserverRef((entry) => {
    setElementHeight(getResizeObserverBlockSize(entry));
  });
  const elementRef = useCallback<RefCallback<HTMLElement>>(
    (element) => {
      if (element != null) setElementHeight(element.scrollHeight);
      resizeObserverRef(element);
    },
    [resizeObserverRef, setElementHeight],
  );
  return {
    elementHeightPx,
    elementRef,
  };
}
export function getPatchDiffStats(
  diffText: string | null | undefined,
  path: string,
): PatchDiffStats | null {
  if (!diffText) return null;
  const fallbackStats = countChangedLines(diffText);
  const parsedFile = parseDiff(diffText)[0];
  if (
    parsedFile != null &&
    (parsedFile.additions > 0 ||
      parsedFile.deletions > 0 ||
      (fallbackStats.added === 0 && fallbackStats.deleted === 0))
  ) {
    return {
      added: parsedFile.additions,
      deleted: parsedFile.deletions,
      openLocation: {
        path,
        line: parsedFile.firstAdditionLine ?? parsedFile.firstDeletionLine ?? 1,
      },
    };
  }
  if (fallbackStats.added === 0 && fallbackStats.deleted === 0) return null;
  return {
    ...fallbackStats,
    openLocation: {
      path,
      line: 1,
    },
  };
}
function getResizeObserverBlockSize(entry: ResizeObserverEntry) {
  if (!entry.borderBoxSize) return entry.contentRect.height;
  const borderBoxSize = Array.isArray(entry.borderBoxSize)
    ? entry.borderBoxSize[0]
    : entry.borderBoxSize;
  return borderBoxSize?.blockSize ?? entry.contentRect.height;
}
function countChangedLines(diffText: string): PatchDiffLineCounts {
  let added = 0;
  let deleted = 0;
  for (const line of diffText.split(/\r?\n/)) {
    if (line.startsWith("+++") || line.startsWith("---")) continue;
    if (line.startsWith("+")) {
      added += 1;
    } else if (line.startsWith("-")) {
      deleted += 1;
    }
  }
  return {
    added,
    deleted,
  };
}
