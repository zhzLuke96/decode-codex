// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Aggregates per-file additions/deletions across review summary results, and
// computes the line stats for a single normalized file path.

import sumBy from "lodash/sumBy";

interface ReviewSummaryFile {
  path: string;
  previousPath?: string | null;
  additions?: number | null;
  deletions?: number | null;
}

type ReviewSummaryResult =
  | { type: "success"; files: ReviewSummaryFile[] }
  | { type: "error" }
  | null
  | undefined;

export interface ChangedFileSummary {
  files: Array<{ path: string; additions: number; deletions: number }>;
  totalAdditions: number;
  totalDeletions: number;
}

export function aggregateChangedFileSummary(
  results: ReviewSummaryResult[],
): ChangedFileSummary | null {
  const files = results.flatMap((result) =>
    result?.type === "success" ? result.files : [],
  );
  if (files.length === 0) {
    return null;
  }
  return {
    files: files.map((file) => ({
      path: file.path,
      additions: file.additions ?? 0,
      deletions: file.deletions ?? 0,
    })),
    totalAdditions: sumBy(files, (file) => file.additions ?? 0),
    totalDeletions: sumBy(files, (file) => file.deletions ?? 0),
  };
}

export function computeFileLineStats(
  path: string,
  results: ReviewSummaryResult[],
): { linesAdded: number; linesRemoved: number } | null {
  const normalizedTarget = normalizeDiffPath(path);
  const matchingFiles = results.flatMap((result) =>
    result?.type === "success"
      ? result.files.filter((file) =>
          [file.path, file.previousPath].some(
            (candidate) =>
              candidate != null &&
              normalizeDiffPath(candidate) === normalizedTarget,
          ),
        )
      : [],
  );
  if (matchingFiles.length === 0) {
    return null;
  }
  return {
    linesAdded: sumBy(matchingFiles, (file) => file.additions ?? 0),
    linesRemoved: sumBy(matchingFiles, (file) => file.deletions ?? 0),
  };
}

export function normalizeDiffPath(path: string): string {
  const trimmed = path.trim();
  const unquoted =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed;
  const withoutDotSlash = unquoted.startsWith("./")
    ? unquoted.slice(2)
    : unquoted;
  return withoutDotSlash.startsWith("a/") || withoutDotSlash.startsWith("b/")
    ? withoutDotSlash.slice(2)
    : withoutDotSlash;
}

export function initDiffSelectionSummaryChunk(): void {
  void sumBy;
}
