// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Core engine that applies a review stage/unstage/revert patch via the git host RPC:
// builds the relevant unified-diff slice (section/file/hunk), handles the two-step
// staged-revert flow, refreshes affected paths + git queries, and reports outcome.

import {
  getRpcClient,
  sendHostRequest,
  workspaceRootToCwd,
  invalidateReviewDiffQueries,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  buildFilePatch,
  buildHunkPatch,
  buildSectionPatch,
  collectDiffPaths,
  extractFilePatchText,
  resolvePatchTarget,
  type PatchActionParams,
  type ReviewFileDiff,
  type StageFilter,
} from "./diff-patch-builder";
import {
  recordPatchActionEvent,
  showPatchActionToast,
  showPatchMissingToast,
  type PatchActionStatus,
} from "./review-patch-toasts";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
  queryClient: unknown;
};

interface PatchResult {
  status: PatchActionStatus;
  errorCode?: string;
  appliedPaths?: string[];
  skippedPaths?: string[];
  conflictedPaths?: string[];
}

interface ApplyReviewPatchArgs {
  scope: AppScope;
  cwd: string | null;
  diffText: string;
  hostConfig: unknown;
  params: PatchActionParams;
  reviewFiles: ReviewFileDiff[];
  refetchGitChanges: () => void;
  refreshPathsFast: (paths: string[]) => Promise<void>;
  selectedFileDiff: ReviewFileDiff | null;
  selectedFileDiffText: string | null;
  stageFilter: StageFilter;
}

interface ApplyPatchArgs {
  cwd: string;
  diff: string;
  hostConfig: unknown;
  queryClient: unknown;
  refreshPathsFast: (paths: string[]) => Promise<void>;
  refetchGitChanges: () => void;
  revert: boolean;
  target: "staged" | "unstaged" | "staged-and-unstaged";
}

export async function applyReviewPatch({
  scope,
  cwd,
  diffText,
  hostConfig,
  params,
  reviewFiles,
  refetchGitChanges,
  refreshPathsFast,
  selectedFileDiff,
  selectedFileDiffText,
  stageFilter,
}: ApplyReviewPatchArgs): Promise<void> {
  if (!cwd) return;

  if (params.scope === "section") {
    const result: PatchResult = await getRpcClient("git").request({
      method: "apply-review-section-changes",
      params: {
        action: params.action,
        cwd: workspaceRootToCwd(cwd),
        files: reviewFiles,
        hostConfig,
        operationSource: "review_patch",
        source: stageFilter,
      },
    });
    refetchGitChanges();
    invalidateReviewDiffQueries({
      cwd,
      hostConfig,
      operationSource: "review_patch",
      queryClient: scope.queryClient,
    });
    showPatchActionToast(scope, result.status, params, result.errorCode);
    recordPatchActionEvent(scope, params, result.status);
    return;
  }

  const baseDiff =
    selectedFileDiffText ??
    (selectedFileDiff == null ? null : buildSectionPatch([selectedFileDiff])) ??
    diffText;
  if (baseDiff == null) return;

  const patch =
    params.scope === "file"
      ? (extractFilePatchText(baseDiff, params.path) ??
        buildFilePatch(baseDiff, params.path))
      : buildHunkPatch(baseDiff, params.path, params.hunkIndex ?? 0);
  if (!patch) {
    showPatchMissingToast(scope, params.scope ?? "hunk");
    return;
  }

  const resolved = resolvePatchTarget(params, stageFilter);

  if (params.action === "revert" && stageFilter === "staged") {
    let stagedReverted = false;
    try {
      const stagedResult = await applyPatchWithRefresh({
        cwd,
        diff: patch,
        hostConfig,
        queryClient: scope.queryClient,
        refreshPathsFast,
        refetchGitChanges,
        revert: resolved.revert,
        target: "staged",
      });
      if (stagedResult.status !== "success") {
        showPatchActionToast(
          scope,
          stagedResult.status,
          params,
          stagedResult.errorCode,
        );
        recordPatchActionEvent(scope, params, stagedResult.status);
        return;
      }
      stagedReverted = true;
      const unstagedResult = await applyPatchWithRefresh({
        cwd,
        diff: patch,
        hostConfig,
        queryClient: scope.queryClient,
        refreshPathsFast,
        refetchGitChanges,
        revert: resolved.revert,
        target: "unstaged",
      });
      const status =
        unstagedResult.status === "success" ? "success" : "partial-success";
      showPatchActionToast(scope, status, params);
      recordPatchActionEvent(scope, params, status);
      return;
    } catch {
      const status = stagedReverted ? "partial-success" : "error";
      showPatchActionToast(scope, status, params);
      recordPatchActionEvent(scope, params, status);
      return;
    }
  }

  try {
    const result = await applyPatchWithRefresh({
      cwd,
      diff: patch,
      hostConfig,
      queryClient: scope.queryClient,
      refreshPathsFast,
      refetchGitChanges,
      revert: resolved.revert,
      target: resolved.target,
    });
    showPatchActionToast(scope, result.status, params, result.errorCode);
    recordPatchActionEvent(scope, params, result.status);
  } catch {
    showPatchActionToast(scope, "error", params);
    recordPatchActionEvent(scope, params, "error");
  }
}

export async function applyPatchWithRefresh({
  cwd,
  diff,
  hostConfig,
  queryClient,
  refreshPathsFast,
  refetchGitChanges,
  revert,
  target,
}: ApplyPatchArgs): Promise<PatchResult> {
  let result: PatchResult | undefined;
  try {
    const response: PatchResult = await sendHostRequest("apply-patch", {
      source: "review_patch",
      params: {
        cwd,
        diff,
        atomic: true,
        hostConfig,
        revert,
        target,
      },
    });
    result = response;
    return response;
  } finally {
    await refreshPathsAfterPatch({
      cwd,
      diff,
      hostConfig,
      queryClient,
      refreshPathsFast,
      refetchGitChanges,
      result,
    });
  }
}

interface RefreshAfterPatchArgs {
  cwd: string;
  diff: string;
  hostConfig: unknown;
  queryClient: unknown;
  refreshPathsFast: (paths: string[]) => Promise<void>;
  refetchGitChanges: () => void;
  result: PatchResult | undefined;
}

export async function refreshPathsAfterPatch({
  cwd,
  diff,
  hostConfig,
  queryClient,
  refreshPathsFast,
  refetchGitChanges,
  result,
}: RefreshAfterPatchArgs): Promise<void> {
  const affectedPaths = new Set<string>([
    ...(result?.appliedPaths ?? []),
    ...(result?.skippedPaths ?? []),
    ...(result?.conflictedPaths ?? []),
  ]);
  if (affectedPaths.size === 0) {
    for (const path of collectDiffPaths(diff)) affectedPaths.add(path);
  }
  if (affectedPaths.size > 0) {
    await refreshPathsFast(Array.from(affectedPaths));
  }
  refetchGitChanges();
  await invalidateReviewDiffQueries({
    cwd,
    hostConfig,
    operationSource: "review_patch",
    queryClient,
  });
}
