// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review file-entry atoms: convert review summaries or pasted/cloud diffs into the
// ordered file models consumed by the review diff list.

import {
  createComputedAtom,
  createParametricAtom,
  normalizePath,
  threadAtomScope,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  isReviewDiffEnabledAtom,
  reviewLocationKindAtom,
  reviewRootAtom,
} from "./review-diff-mode-atoms";
import { reviewDiffFilterAtom } from "./review-diff-model";
import {
  reviewDiffTargetParsedAtom,
  reviewFileDiffQueryFamily,
} from "./review-file-diff-query";
import { reviewDiffTargetPathAtom } from "./review-diff-target-state";
import type { ComputedAtomContext } from "./review-diff-store-types";
import {
  buildReviewEntriesFromParsedDiff,
  buildReviewEntriesFromSummary,
  buildReviewFileEntry,
  findReviewSummaryFileByPath,
  resolvePathRelativeToCwd,
} from "./review-file-entry-builders";
import type {
  ReviewDiffQueryResult,
  ReviewFileEntry,
} from "./review-file-entry-types";
import { reviewGitMetadataQueryAtom } from "./review-git-metadata";
import { reviewSummaryAtom } from "./review-summary-query-atoms";
import { reviewCwdAtom } from "./thread-review-context";

export const reviewFileEntriesAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): ReviewFileEntry[] => {
    if (get(isReviewDiffEnabledAtom)) {
      return buildReviewEntriesFromSummary({
        cwd: get(reviewCwdAtom),
        gitRoot: get(reviewGitMetadataQueryAtom).data?.root ?? null,
        reviewSummary: get(reviewSummaryAtom).data,
      });
    }

    const useTargetRoot =
      get(reviewLocationKindAtom) === "cloud" ||
      get(reviewDiffFilterAtom) === "last-turn";
    const gitRoot = useTargetRoot
      ? get(reviewRootAtom)
      : (get(reviewGitMetadataQueryAtom).data?.root ?? null);
    const cwd = useTargetRoot
      ? (get(reviewDiffTargetPathAtom) ?? get(reviewCwdAtom))
      : get(reviewCwdAtom);

    return buildReviewEntriesFromParsedDiff({
      cwd: cwd == null ? null : normalizePath(cwd),
      gitRoot,
      parsedDiffs: get(reviewDiffTargetParsedAtom).diff,
    });
  },
);

export const reviewFileDiffModelAtom = createParametricAtom(
  threadAtomScope,
  (path: string, { get }: { get: (atom: unknown, arg?: unknown) => any }) => {
    if (get(isReviewDiffEnabledAtom)) {
      const gitRoot = get(reviewGitMetadataQueryAtom).data?.root ?? null;
      const reviewFile =
        findReviewSummaryFileByPath(
          get(reviewSummaryAtom).data,
          path,
          gitRoot,
        ) ?? null;
      if (reviewFile == null) return null;
      const query = get(
        reviewFileDiffQueryFamily,
        path,
      ) as ReviewDiffQueryResult;
      return buildReviewFileEntry({
        cwd: get(reviewCwdAtom),
        gitRoot,
        reviewDiffEntry: query.data,
        reviewDiffError: query.isError ? query.error : null,
        reviewDiffIsFetching: query.isFetching,
        reviewDiffIsPlaceholderData: query.isPlaceholderData,
        reviewFile,
      });
    }

    const relativeGitPath = resolvePathRelativeToCwd(path, get(reviewCwdAtom));
    return (
      (get(reviewFileEntriesAtom) as ReviewFileEntry[]).find(
        (entry) => entry.path === path || entry.gitPath === relativeGitPath,
      ) ?? null
    );
  },
);
