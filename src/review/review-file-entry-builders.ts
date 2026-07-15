// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure builders that normalize review-summary and parsed-diff data into review file entries.

import nodePath from "node:path";
import {
  isAbsolutePath,
  normalizePath,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  toAbsoluteGitPath,
  toRepoRelativeDisplayPath,
} from "../utils/git-relative-display-path";
import { parseReviewDiff } from "./review-diff-store-helpers";
import { orderReviewFileEntries } from "./review-file-entry-order";
import type {
  ParsedReviewDiffFile,
  ReviewDiffLoadStatus,
  ReviewDiffQueryData,
  ReviewFileEntry,
  ReviewSummaryFile,
  ReviewSummarySuccess,
} from "./review-file-entry-types";

export function buildReviewEntriesFromSummary({
  cwd,
  gitRoot,
  reviewSummary,
}: {
  cwd: string | null;
  gitRoot: string | null;
  reviewSummary: unknown;
}): ReviewFileEntry[] {
  return isReviewSummarySuccess(reviewSummary)
    ? orderReviewFileEntries(
        reviewSummary.files.map((reviewFile) =>
          buildReviewFileEntry({
            cwd,
            gitRoot,
            reviewDiffIsFetching: true,
            reviewFile,
          }),
        ),
      )
    : [];
}

export function buildReviewEntriesFromParsedDiff({
  cwd,
  gitRoot,
  parsedDiffs,
}: {
  cwd: string | null;
  gitRoot: string | null;
  parsedDiffs: unknown;
}): ReviewFileEntry[] {
  return orderReviewFileEntries(
    asParsedReviewDiffFiles(parsedDiffs).map((diff) => {
      const normalizedDiff = normalizeParsedDiffPaths(diff, gitRoot);
      const gitPath = normalizePath(normalizedDiff.metadata.name);
      const path = toAbsoluteGitPath({ gitRoot, gitPath });
      return {
        canApplyPatchActions: true,
        displayPath:
          cwd == null ? gitPath : toRepoRelativeDisplayPath({ cwd, path }),
        diff: normalizedDiff,
        diffRevision: null,
        diffLoadStatus: "loaded",
        gitPath,
        path,
        summary: null,
      };
    }),
  );
}

export function buildReviewFileEntry({
  cwd,
  gitRoot,
  reviewDiffEntry,
  reviewDiffError = null,
  reviewDiffIsFetching,
  reviewDiffIsPlaceholderData = false,
  reviewFile,
}: {
  cwd: string | null;
  gitRoot: string | null;
  reviewDiffEntry?: ReviewDiffQueryData;
  reviewDiffError?: unknown;
  reviewDiffIsFetching: boolean;
  reviewDiffIsPlaceholderData?: boolean;
  reviewFile: ReviewSummaryFile;
}): ReviewFileEntry {
  const gitPath = normalizePath(reviewFile.path);
  const path = toAbsoluteGitPath({ gitRoot, gitPath });
  const diffText =
    reviewDiffEntry?.type === "success" ? reviewDiffEntry.diff : "";
  const hasDiffText = diffText.trim().length > 0;
  const parsedDiff = hasDiffText ? parseFirstReviewDiff(diffText) : null;
  let diffLoadStatus: ReviewDiffLoadStatus = "loading";

  if (parsedDiff == null) {
    if (reviewDiffEntry?.type === "success") {
      diffLoadStatus = "loaded";
    } else if (
      !reviewDiffIsFetching &&
      (reviewDiffError != null ||
        reviewDiffEntry?.type === "error" ||
        hasDiffText)
    ) {
      diffLoadStatus = "error";
    }
  } else {
    diffLoadStatus = "loaded";
  }

  return {
    canApplyPatchActions:
      !reviewDiffIsFetching && reviewDiffEntry?.type === "success",
    displayPath: toRepoRelativeDisplayPath({ cwd, path }),
    diff: parsedDiff,
    diffRevision:
      reviewDiffEntry?.type === "success" && !reviewDiffIsPlaceholderData
        ? (reviewFile.revision ?? null)
        : null,
    diffLoadStatus,
    gitPath,
    path,
    summary: reviewFile,
  };
}

export function findReviewSummaryFileByPath(
  reviewSummary: unknown,
  path: string,
  gitRoot: string | null,
): ReviewSummaryFile | null {
  if (!isReviewSummarySuccess(reviewSummary)) return null;
  for (const reviewFile of reviewSummary.files) {
    const absolutePath = toAbsoluteGitPath({
      gitRoot,
      gitPath: reviewFile.path,
    });
    if (absolutePath === path) return reviewFile;
  }
  return null;
}

export function resolvePathRelativeToCwd(
  path: string,
  cwd: string | null,
): string {
  return normalizePath(
    cwd != null && isAbsolutePath(path)
      ? nodePath.relative(normalizePath(cwd), path)
      : path,
  );
}

function isReviewSummarySuccess(value: unknown): value is ReviewSummarySuccess {
  return (
    value != null &&
    typeof value === "object" &&
    (value as { type?: unknown }).type === "success" &&
    Array.isArray((value as { files?: unknown }).files)
  );
}

function parseFirstReviewDiff(diffText: string): ParsedReviewDiffFile | null {
  return asParsedReviewDiffFiles(parseReviewDiff(diffText).diff)[0] ?? null;
}

function asParsedReviewDiffFiles(value: unknown): ParsedReviewDiffFile[] {
  return Array.isArray(value) ? (value as ParsedReviewDiffFile[]) : [];
}

function normalizeParsedDiffPaths(
  diff: ParsedReviewDiffFile,
  gitRoot: string | null,
): ParsedReviewDiffFile {
  if (gitRoot == null) return diff;

  const toGitPath = (path: string): string =>
    path === "/dev/null" || !isAbsolutePath(path)
      ? normalizePath(path)
      : normalizePath(nodePath.relative(normalizePath(gitRoot), path));

  return {
    ...diff,
    metadata: {
      ...diff.metadata,
      name: toGitPath(diff.metadata.name),
      prevName:
        diff.metadata.prevName == null
          ? undefined
          : toGitPath(diff.metadata.prevName),
    },
    newPath: toGitPath(diff.newPath),
    oldPath: toGitPath(diff.oldPath),
  };
}
