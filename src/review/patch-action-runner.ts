// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Orchestrates a review patch action from intent to execution: begins (and optionally
// confirms) the pending request, gathers the current review filter / host config /
// git metadata / per-file diff queries, validates that the target file revision still
// matches, then delegates to applyReviewPatch and clears the in-flight flag.

import { workspaceRootAtom } from "../runtime/onboarding-common-runtime";
import { refetchReviewGitChanges } from "./git-actions-runtime";
import {
  refreshReviewPathsFast,
  reviewDiffStateAtom,
  reviewFileDiffQueryAtom,
  reviewSummaryQueryAtom,
  toGitRelativePathKey,
} from "./review-diff-store";
import { reviewGitMetadataQueryAtom } from "./review-git-metadata";
import { reviewHostConfigAtom } from "./thread-review-context";
import { reviewDiffFilterAtom } from "./review-diff-model";
import { reviewFileDiffModelAtom } from "./review-file-entries";
import {
  beginPatchAction,
  clearPendingPatchAction,
  confirmPatchAction,
  isApplyingPatchAtom,
  patchConfirmationVisibleAtom,
  pendingPatchActionAtom,
  stageFilterFromReviewFilter,
} from "./patch-action-confirm-atoms";
import { applyReviewPatch } from "./apply-review-patch";
import { showPatchActionToast } from "./review-patch-toasts";
import type { PatchActionParams, ReviewFileDiff } from "./diff-patch-builder";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
  queryClient: unknown;
};

interface ReviewSummaryFile {
  path: string;
  previousPath?: string | null;
  revision?: string | null;
}

interface ReviewSummaryData {
  type: "success" | "error" | "loading" | string;
  files?: ReviewSummaryFile[];
}

export async function startPatchAction(
  scope: AppScope,
  params: PatchActionParams,
): Promise<void> {
  if (scope.get<boolean>(isApplyingPatchAtom)) return;
  beginPatchAction(scope, {
    params,
    reviewFiles: collectSectionReviewFiles(scope, params),
    revision: resolveTargetRevision(scope, params),
  });
  if (!scope.get<boolean>(patchConfirmationVisibleAtom)) {
    await runPendingPatchAction(scope);
  }
}

export async function confirmAndRunPatchAction(scope: AppScope): Promise<void> {
  if (scope.get<boolean>(isApplyingPatchAtom)) return;
  confirmPatchAction(scope);
  if (scope.get(pendingPatchActionAtom) != null) {
    await runPendingPatchAction(scope);
  }
}

export async function runPendingPatchAction(scope: AppScope): Promise<void> {
  const pending = scope.get<{
    params: PatchActionParams;
    reviewFiles: ReviewFileDiff[] | null;
    revision: string | null;
  } | null>(pendingPatchActionAtom);
  if (pending == null) return;

  const { params, reviewFiles, revision } = pending;
  const reviewFilter = scope.get<string>(reviewDiffFilterAtom);
  const workspaceRoot = scope.get<string | null>(workspaceRootAtom);
  const hostConfig = scope.get<unknown>(reviewHostConfigAtom);
  const diffState = scope.get<{ diffText: string }>(reviewDiffStateAtom);
  const gitRoot =
    scope.get<{ data?: { root?: string | null } }>(reviewGitMetadataQueryAtom)
      .data?.root ?? null;
  const summaryData = scope.get<{ data?: ReviewSummaryData }>(
    reviewSummaryQueryAtom,
  ).data;

  if (
    (params.scope === "section" ? reviewFiles == null : revision == null) ||
    !isTargetRevisionCurrent(summaryData, params, revision)
  ) {
    clearPendingPatchAction(scope);
    showPatchActionToast(scope, "error", params);
    refetchReviewGitChanges(scope);
    return;
  }

  const pathKey =
    params.scope === "section"
      ? null
      : toGitRelativePathKey({ gitRoot, gitPath: params.path });
  const stageFilter = stageFilterFromReviewFilter(reviewFilter);

  clearPendingPatchAction(scope);
  scope.set(isApplyingPatchAtom, true);
  try {
    let diffQuery =
      pathKey == null
        ? null
        : scope.get<{
            isPlaceholderData?: boolean;
            data?: { type: string; diff?: string };
            refetch: (options: { cancelRefetch: boolean }) => Promise<{
              isPlaceholderData?: boolean;
              data?: { type: string; diff?: string };
            }>;
          }>(reviewFileDiffQueryAtom, pathKey);

    if (diffQuery?.isPlaceholderData) {
      diffQuery = await diffQuery.refetch({ cancelRefetch: false });
      const refreshedSummary = scope.get<{ data?: ReviewSummaryData }>(
        reviewSummaryQueryAtom,
      ).data;
      if (!isTargetRevisionCurrent(refreshedSummary, params, revision)) {
        showPatchActionToast(scope, "error", params);
        refetchReviewGitChanges(scope);
        return;
      }
      if (diffQuery.isPlaceholderData || diffQuery.data?.type !== "success") {
        showPatchActionToast(scope, "error", params);
        refetchReviewGitChanges(scope);
        return;
      }
    }

    const selectedFileDiffModel =
      pathKey == null
        ? null
        : scope.get<{ diff?: ReviewFileDiff | null }>(
            reviewFileDiffModelAtom,
            pathKey,
          );
    const diffQueryData = diffQuery?.data ?? null;
    const reviewFilesForApply =
      params.scope === "section"
        ? reviewFiles
        : summaryData?.type === "success"
          ? (summaryData.files as unknown as ReviewFileDiff[])
          : [];
    if (reviewFilesForApply == null)
      throw new Error("Expected reviewed section files");

    await applyReviewPatch({
      scope,
      cwd: workspaceRoot,
      diffText: diffState.diffText,
      hostConfig,
      params,
      reviewFiles: reviewFilesForApply,
      refetchGitChanges: () => {
        refetchReviewGitChanges(scope);
      },
      refreshPathsFast: (paths) => refreshReviewPathsFast(scope, paths),
      selectedFileDiff: selectedFileDiffModel?.diff ?? null,
      selectedFileDiffText:
        diffQueryData?.type === "success" ? (diffQueryData.diff ?? null) : null,
      stageFilter,
    });
  } finally {
    scope.set(isApplyingPatchAtom, false);
  }
}

function isTargetRevisionCurrent(
  summaryData: ReviewSummaryData | undefined,
  params: PatchActionParams,
  revision: string | null,
): boolean {
  if (params.scope === "section") return true;
  if (revision == null) return false;
  return (
    summaryData?.type === "success" &&
    (summaryData.files ?? []).some(
      (file) =>
        (file.path === params.path || file.previousPath === params.path) &&
        file.revision === revision,
    )
  );
}

function resolveTargetRevision(
  scope: AppScope,
  params: PatchActionParams,
): string | null {
  if (params.scope === "section") return null;
  const summaryData = scope.get<{ data?: ReviewSummaryData }>(
    reviewSummaryQueryAtom,
  ).data;
  return summaryData?.type === "success"
    ? ((summaryData.files ?? []).find(
        (file) =>
          file.path === params.path || file.previousPath === params.path,
      )?.revision ?? null)
    : null;
}

function collectSectionReviewFiles(
  scope: AppScope,
  params: PatchActionParams,
): ReviewFileDiff[] | null {
  if (params.scope !== "section") return null;
  const summaryData = scope.get<{ data?: ReviewSummaryData }>(
    reviewSummaryQueryAtom,
  ).data;
  return summaryData?.type === "success"
    ? (summaryData.files as unknown as ReviewFileDiff[])
    : null;
}
