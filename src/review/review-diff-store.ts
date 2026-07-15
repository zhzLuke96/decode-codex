// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility barrel for the review diff store, split by state, helpers,
// mode/query atoms, per-file diff queries, and imperative actions.

import { refreshReviewDiff, reviewDiffFilterAtom } from "./review-diff-model";
import { createComputedAtom } from "../runtime/onboarding-scope-runtime";
import {
  threadAtomScope,
  workspaceRootAtom,
} from "../runtime/onboarding-common-runtime";
import {
  isReviewRefreshingAtom,
  reviewBaseBranchOverrideAtom,
  reviewBaseBranchOverrideForScopeAtom,
  reviewCommitShaAtom,
  reviewDiffTargetPathAtom,
  reviewDiffTargetPathReadonlyAtom,
  reviewDiffTargetTextAtom,
} from "./review-diff-target-state";
import {
  isReviewBranchModeAtom,
  isReviewDiffEnabledAtom,
  isReviewIndexModeAtom,
  reviewCurrentBranchAtom,
  reviewDiffSourceAtom,
  reviewGitMetadataReadinessQueryAtom,
  reviewLocationKindAtom,
  reviewRootAtom,
} from "./review-diff-mode-atoms";
import { reviewCwdAtom } from "./thread-review-context";
import {
  reviewBaseBranchAtom,
  reviewBaseBranchQueryAtom,
  reviewBaseBranchQueryFamily,
  reviewBranchCommitsQueryAtom,
  reviewIndexInfoQueryAtom,
  reviewIndexInfoQueryFamily,
  reviewRecentBranchesQueryAtom,
} from "./review-branch-query-atoms";
import { reviewDiffMetricsAtom } from "./review-diff-metrics";
import {
  reviewBranchDiffStatsQueryFamily,
  reviewDiffStatsAtom,
  reviewFilesByDisplayPathAtom,
  reviewSummaryAtom,
  reviewSummaryQueryAtom,
} from "./review-summary-query-atoms";
import {
  reviewDiffTargetParsedAtom,
  reviewFileDiffQueryFamily,
} from "./review-file-diff-query";
import {
  reviewFileDiffModelAtom,
  reviewFileEntriesAtom,
} from "./review-file-entries";
import { workspaceReviewContextAtom } from "./review-git-metadata";
import {
  refetchReviewFileDiff,
  refreshReviewFilesForPaths,
  refreshReviewIndexInfo,
  selectReviewCommit,
  setReviewDiffTarget,
  watchReviewDiffEffect,
} from "./review-diff-actions";
import type { ComputedAtomContext } from "./review-diff-store-types";

export const reviewDiffQueryAtom = reviewSummaryAtom;
export const reviewFileDiffQueryAtom = reviewFileDiffQueryFamily;
export const reviewLastTurnDiffAtom = reviewDiffTargetParsedAtom;
export const reviewSummarySourceAtom = reviewDiffSourceAtom;
export const reviewRepositorySourceAtom = reviewDiffSourceAtom;

export const reviewDiffStateAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const parsedDiff = get(reviewDiffTargetParsedAtom) as {
      diff?: unknown;
      diffBytes?: number | null;
      diffError?: unknown;
      diffText?: string | null;
    };
    const summaryQuery = get(reviewSummaryAtom) as { data?: unknown };
    return {
      diff: parsedDiff.diff ?? null,
      diffBytes: parsedDiff.diffBytes ?? null,
      diffError: parsedDiff.diffError ?? null,
      diffText: parsedDiff.diffText ?? "",
      reviewSummary: summaryQuery.data ?? null,
    };
  },
);

export const reviewDiffActionsAvailableAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean =>
    (get(reviewFileEntriesAtom) as Array<{ canApplyPatchActions?: boolean }>)
      .some((entry) => entry.canApplyPatchActions !== false),
);

export const reviewFilePathsAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): Array<{ path: string }> =>
    (get(reviewFileEntriesAtom) as Array<{ path: string }>).map((entry) => ({
      path: entry.path,
    })),
);

export const reviewWorkspaceRootAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): string | null => {
    const context = get(workspaceReviewContextAtom) as {
      cwd: string | null;
      git: { root?: string | null } | null;
    };
    return (
      context.git?.root ??
      context.cwd ??
      get<string | null>(reviewCwdAtom) ??
      get<string | null>(workspaceRootAtom)
    );
  },
);

export const reviewShowGitRepoEmptyStateAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): boolean =>
    (get(workspaceReviewContextAtom) as { kind?: string }).kind === "plain",
);

export const reviewWorktreeInfoAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const context = get(workspaceReviewContextAtom) as {
      codexHome: string | null;
      cwd: string | null;
      git: { root?: string | null } | null;
      hostId: string | null;
      isCodexWorktree: boolean;
    };
    if (!context.isCodexWorktree || context.git?.root == null) return null;
    return {
      codexHome: context.codexHome,
      cwd: context.cwd,
      hostId: context.hostId,
      root: context.git.root,
    };
  },
);

export function isUncommittedReviewSource(source: unknown): boolean {
  return source === "staged" || source === "unstaged" || source === "last-turn";
}

export function initReviewSourceRuntime(): void {
  // Legacy chunks exposed Rollup initializers; ESM imports initialize the split
  // review source, branch, summary, and per-file query atoms eagerly.
  void reviewDiffFilterAtom;
  void reviewLocationKindAtom;
  void isReviewDiffEnabledAtom;
  void reviewDiffSourceAtom;
  void isReviewBranchModeAtom;
  void isReviewIndexModeAtom;
  void reviewGitMetadataReadinessQueryAtom;
  void reviewRootAtom;
  void reviewCurrentBranchAtom;
  void reviewBaseBranchAtom;
  void reviewBaseBranchQueryAtom;
  void reviewBaseBranchQueryFamily;
  void reviewBranchCommitsQueryAtom;
  void reviewIndexInfoQueryAtom;
  void reviewIndexInfoQueryFamily;
  void reviewRecentBranchesQueryAtom;
  void reviewSummaryQueryAtom;
  void reviewBranchDiffStatsQueryFamily;
  void reviewDiffStatsAtom;
  void reviewSummaryAtom;
  void reviewDiffMetricsAtom;
  void reviewFilesByDisplayPathAtom;
  void reviewFileEntriesAtom;
  void reviewFileDiffModelAtom;
  void reviewFileDiffQueryFamily;
}

export function initReviewDiffStateRuntime(): void {
  void reviewDiffTargetTextAtom;
  void reviewDiffTargetPathAtom;
  void reviewDiffTargetPathReadonlyAtom;
  void reviewCommitShaAtom;
  void reviewBaseBranchOverrideAtom;
  void reviewBaseBranchOverrideForScopeAtom;
  void isReviewRefreshingAtom;
  void reviewDiffTargetParsedAtom;
  void refreshReviewDiff;
  void setReviewDiffTarget;
  void selectReviewCommit;
  void watchReviewDiffEffect;
  void refreshReviewIndexInfo;
  void refreshReviewFilesForPaths;
}

export function initReviewFileListRuntime(): void {
  void reviewFilesByDisplayPathAtom;
  void reviewDiffTargetParsedAtom;
  void reviewFileDiffQueryFamily;
  void refetchReviewFileDiff;
}

export {
  buildReviewSummaryParams,
  buildReviewSummaryQueryParams,
  isIndexDiffFilter,
  mergeQueryResults,
  parseReviewDiff,
  queryKeysShareBaseExceptLast,
  resolveReviewBaseBranch,
  reviewDiffRetryDelay,
  shouldRetryReviewDiff,
  toRepoRelativePaths,
} from "./review-diff-store-helpers";
export {
  isReviewRefreshingAtom,
  reviewBaseBranchOverrideAtom,
  reviewBaseBranchOverrideForScopeAtom,
  reviewCommitShaAtom,
  reviewDiffTargetPathAtom,
  reviewDiffTargetPathReadonlyAtom,
  reviewDiffTargetTextAtom,
} from "./review-diff-target-state";
export {
  isReviewBranchModeAtom,
  isReviewDiffEnabledAtom,
  isReviewIndexModeAtom,
  reviewCurrentBranchAtom,
  reviewDiffSourceAtom,
  reviewGitMetadataReadinessQueryAtom,
  reviewLocationKindAtom,
  reviewRootAtom,
} from "./review-diff-mode-atoms";
export {
  reviewBaseBranchAtom,
  reviewBaseBranchQueryAtom,
  reviewBaseBranchQueryFamily,
  reviewBranchCommitsQueryAtom,
  reviewIndexInfoQueryAtom,
  reviewIndexInfoQueryFamily,
  reviewRecentBranchesQueryAtom,
} from "./review-branch-query-atoms";
export {
  reviewBranchDiffStatsQueryFamily,
  reviewDiffStatsAtom,
  reviewFilesByDisplayPathAtom,
  reviewSummaryAtom,
  reviewSummaryQueryAtom,
} from "./review-summary-query-atoms";
export {
  buildMetricsFromDiffStats,
  buildMetricsFromReviewSummary,
  buildMetricsFromSelectedDiff,
  buildReviewDiffMetrics,
  buildReviewSnapshotMetrics,
  initReviewDiffMetricsChunk,
  reviewDiffMetricsAtom,
  reviewSnapshotMetricsAtom,
} from "./review-diff-metrics";
export {
  reviewDiffTargetParsedAtom,
  reviewFileDiffQueryFamily,
} from "./review-file-diff-query";
export {
  reviewFileDiffModelAtom,
  reviewFileEntriesAtom,
} from "./review-file-entries";
export {
  refetchReviewFileDiff,
  refetchReviewFileDiff as retryReviewFileDiff,
  refreshReviewFilesForPaths,
  refreshReviewFilesForPaths as refreshReviewPathsFast,
  refreshReviewIndexInfo,
  selectReviewCommit,
  setReviewDiffTarget,
  watchReviewDiffEffect,
} from "./review-diff-actions";
export { toGitRelativePathKey } from "../utils/git-relative-display-path";
export type {
  ComputedAtomContext,
  GitMetadata,
  QueryResult,
  ReviewDiffFilter,
  ReviewDiffMetrics,
  ReviewDiffMetricsState,
  ReviewStore,
  ReviewSummaryRequestInput,
} from "./review-diff-store-types";
