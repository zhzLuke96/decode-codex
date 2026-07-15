// Restored from ref/.vite/build/worker.js
// Applies, unstages, or reverts selected review section diffs.

import {
  applyGitPatch,
  type GitPatchApplyResult,
} from "./git-worker-apply-changes";
import { readStableMetadata } from "./git-worker-repo-queries";
import { readReviewDiff } from "./git-worker-review/file-diff";
import { readReviewSummary } from "./git-worker-review/metadata";
import { normalizeReviewPath } from "./git-worker-review/path-utils";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type ReviewSource = "branch" | "commit" | "staged" | "unstaged";
type ApplyReviewSectionAction = "revert" | "stage" | "unstage";
type ReviewFileChangeKind =
  | "added"
  | "copied"
  | "deleted"
  | "modified"
  | "renamed"
  | "type-changed"
  | "unmerged"
  | "untracked";
type ReviewSectionFile = {
  changeKind?: ReviewFileChangeKind;
  path: string;
  previousPath?: string | null;
  revision: string;
};
type ApplyReviewSectionChangesResult =
  | GitPatchApplyResult
  | {
      status: "error";
      appliedPaths: string[];
      skippedPaths: string[];
      conflictedPaths: string[];
      errorCode?: "not-git-repo";
    };

export async function applyReviewSectionChanges({
  action,
  cwd,
  files,
  host,
  signal,
  source,
}: {
  action: ApplyReviewSectionAction;
  cwd: string;
  files: ReviewSectionFile[];
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  source: ReviewSource;
}): Promise<ApplyReviewSectionChangesResult> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return applyReviewError("not-git-repo");

  const pathApi = await host.platformPath();
  const requestedFiles = files.map((file) => ({
    ...file,
    path: normalizeReviewPath({
      cwd,
      filePath: file.path,
      pathApi,
      root: metadata.root,
    }),
    previousPath:
      file.previousPath == null
        ? null
        : normalizeReviewPath({
            cwd,
            filePath: file.previousPath,
            pathApi,
            root: metadata.root,
          }),
  }));
  if (requestedFiles.length === 0) return applyReviewError();

  const revisionMap = await readCurrentReviewRevisions({
    cwd: metadata.root,
    host,
    signal,
    source,
  });
  if (
    revisionMap == null ||
    requestedFiles.some((file) => revisionMap.get(file.path) !== file.revision)
  ) {
    return applyReviewError();
  }

  const reviewDiff = await readReviewDiff({
    binary: true,
    cwd: metadata.root,
    files: requestedFiles.map((file) => ({
      path: file.path,
      previousPath: file.previousPath ?? null,
    })),
    host,
    signal,
    source,
  });
  const diffParts = requestedFiles.flatMap((file) => {
    const diff = reviewDiff.diffs[file.path];
    return diff?.type === "success" ? [diff.diff] : [];
  });
  const patch = diffParts.join("");
  if (diffParts.length !== requestedFiles.length || patch.trim().length === 0) {
    return applyReviewError();
  }

  switch (action) {
    case "stage":
      return applyGitPatch({
        atomic: true,
        diff: patch,
        host,
        root: metadata.root,
        signal,
        target: "staged",
      });
    case "unstage":
      return applyGitPatch({
        atomic: true,
        diff: patch,
        host,
        revert: true,
        root: metadata.root,
        signal,
        target: "staged",
      });
    case "revert":
      return revertReviewPatch({
        host,
        patch,
        root: metadata.root,
        signal,
        source,
      });
  }
}

async function revertReviewPatch({
  host,
  patch,
  root,
  signal,
  source,
}: {
  host: WorkerExecutionHostClient;
  patch: string;
  root: string;
  signal: AbortSignal;
  source: ReviewSource;
}): Promise<GitPatchApplyResult> {
  if (source !== "staged") {
    return applyGitPatch({
      atomic: true,
      diff: patch,
      host,
      revert: true,
      root,
      signal,
      target: "unstaged",
    });
  }

  const stagedResult = await applyGitPatch({
    atomic: true,
    diff: patch,
    host,
    revert: true,
    root,
    signal,
    target: "staged",
  });
  if (stagedResult.status !== "success") return stagedResult;

  const worktreeResult = await applyGitPatch({
    atomic: true,
    diff: patch,
    host,
    revert: true,
    root,
    signal,
    target: "unstaged",
  });
  return worktreeResult.status === "success"
    ? worktreeResult
    : { ...worktreeResult, status: "partial-success" };
}

async function readCurrentReviewRevisions({
  cwd,
  host,
  signal,
  source,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  source: ReviewSource;
}): Promise<Map<string, string> | null> {
  const summary = await readReviewSummary({
    cwd,
    host,
    includeUntrackedFiles: true,
    signal,
    source,
  });
  if (summary.type !== "success") return null;
  return new Map(summary.files.map((file) => [file.path, file.revision]));
}

function applyReviewError(
  errorCode?: "not-git-repo",
): ApplyReviewSectionChangesResult {
  return {
    status: "error",
    appliedPaths: [],
    skippedPaths: [],
    conflictedPaths: [],
    errorCode,
  };
}
