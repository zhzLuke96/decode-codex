// Restored from ref/.vite/build/worker.js
// Same-host thread handoff request handling and top-level orchestration.

import { readCurrentBranch } from "./git-worker-current-branch";
import { moveThreadToHostWorktree } from "./git-worker-host-handoff";
import { readStableMetadata } from "./git-worker-repo-queries";
import { readStatusSummary } from "./git-worker-status-queries";
import { checkoutBranch } from "./git-worker-thread-handoff-checkout";
import {
  ensureBranchAtCommit,
  isBranchCheckedOutElsewhere,
  readHeadCommitSha,
  removeCreatedWorktree,
} from "./git-worker-thread-handoff-refs";
import { applyStash } from "./git-worker-thread-handoff-stash";
import {
  restoreState,
  rollbackSourceState,
} from "./git-worker-thread-handoff-state";
import type {
  GitCommandExecOutput,
  GitWorkerRequest,
  ThreadHandoffCallbacks,
  ThreadHandoffDirection,
  ThreadHandoffError,
  ThreadHandoffResult,
} from "./git-worker-thread-handoff-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function handleThreadHandoffRequest({
  destinationHost,
  emit,
  host,
  request,
  signal,
}: {
  destinationHost?: WorkerExecutionHostClient;
  emit(event: unknown): void;
  host: WorkerExecutionHostClient;
  request: GitWorkerRequest;
  signal: AbortSignal;
}): Promise<ThreadHandoffResult> {
  const params = requireRecordParams(request);
  switch (request.method) {
    case "move-thread-to-local": {
      const operationId =
        optionalStringParam(params, "operationId") ?? request.id;
      return moveThreadToLocal({
        callbacks: progressCallbacks({
          direction: "to-local",
          emit,
          operationId,
        }),
        host,
        localGitRoot: requireStringParam(params, "localGitRoot"),
        signal,
        sourceBranch: requireStringParam(params, "sourceBranch"),
        sourceWorktreeCwd: requireStringParam(params, "sourceWorktreeCwd"),
        sourceWorktreeRoot: requireStringParam(params, "sourceWorktreeRoot"),
      });
    }
    case "move-thread-to-worktree": {
      const operationId =
        optionalStringParam(params, "operationId") ?? request.id;
      return moveThreadToWorktree({
        callbacks: progressCallbacks({
          direction: "to-worktree",
          emit,
          operationId,
        }),
        createdWorktree: optionalBooleanParam(params, "createdWorktree"),
        defaultBranch: optionalStringParam(params, "defaultBranch"),
        host,
        localCheckoutBranch: optionalStringParam(params, "localCheckoutBranch"),
        localCwd: requireStringParam(params, "localCwd"),
        signal,
        sourceBranch: requireStringParam(params, "sourceBranch"),
        stashTargetWorktree: optionalBooleanParam(
          params,
          "stashTargetWorktree",
        ),
        worktreeCheckoutBranch: optionalStringParam(
          params,
          "worktreeCheckoutBranch",
        ),
        worktreeGitRoot: requireStringParam(params, "worktreeGitRoot"),
        worktreeWorkspaceRoot: requireStringParam(
          params,
          "worktreeWorkspaceRoot",
        ),
      });
    }
    case "move-thread-to-host-worktree": {
      if (destinationHost == null) {
        throw Error("Destination host is required for host worktree handoff");
      }
      const operationId =
        optionalStringParam(params, "operationId") ?? request.id;
      return moveThreadToHostWorktree({
        callbacks: progressCallbacks({
          direction: "to-host-worktree",
          emit,
          operationId,
        }),
        destinationHost,
        options: {
          destinationWorkspaceRoot: requireStringParam(
            params,
            "destinationWorkspaceRoot",
          ),
          destinationWorktreeGitRoot: optionalStringParam(
            params,
            "destinationWorktreeGitRoot",
          ),
          destinationWorktreeWorkspaceRoot: optionalStringParam(
            params,
            "destinationWorktreeWorkspaceRoot",
          ),
          sourceBranch: requireStringParam(params, "sourceBranch"),
          sourceCwd: requireStringParam(params, "sourceCwd"),
          sourceRolloutPath: requireStringParam(params, "sourceRolloutPath"),
          stashDestinationWorktree: optionalBooleanParam(
            params,
            "stashDestinationWorktree",
          ),
        },
        signal,
        sourceHost: host,
      });
    }
    default:
      throw Error(`Unsupported thread handoff method '${request.method}'`);
  }
}

async function moveThreadToLocal({
  callbacks,
  host,
  localGitRoot,
  signal,
  sourceBranch,
  sourceWorktreeCwd,
  sourceWorktreeRoot,
}: {
  callbacks: ThreadHandoffCallbacks;
  host: WorkerExecutionHostClient;
  localGitRoot: string;
  signal: AbortSignal;
  sourceBranch: string;
  sourceWorktreeCwd: string;
  sourceWorktreeRoot: string;
}): Promise<ThreadHandoffResult> {
  const warnings: string[] = [];
  if (sourceBranch.trim().length === 0) {
    return handoffError({
      error: "invalid-params",
      message: "Missing source branch",
      rollbackErrors: [],
      warnings,
    });
  }

  let sourceOriginalBranch: string | null = null;
  let localOriginalBranch: string | null = null;
  let sourceStashRef: string | null = null;
  let sourceDetached = false;
  let localCheckedOut = false;

  try {
    const [sourceMetadata, localMetadata] = await Promise.all([
      readStableMetadata({ cwd: sourceWorktreeCwd, host, signal }),
      readStableMetadata({ cwd: localGitRoot, host, signal }),
    ]);
    if (sourceMetadata == null || localMetadata == null) {
      throw Error("Unable to resolve move-to-local repositories");
    }
    const resolvedSourceWorktreeRoot =
      sourceMetadata.root || sourceWorktreeRoot;

    sourceOriginalBranch = await readCurrentBranch(
      host,
      sourceMetadata.root,
      signal,
    );
    localOriginalBranch = await readCurrentBranch(
      host,
      localMetadata.root,
      signal,
    );

    if (
      await isBranchCheckedOutElsewhere({
        branch: sourceBranch,
        host,
        localGitRoot: localMetadata.root,
        signal,
        sourceWorktreeRoot: resolvedSourceWorktreeRoot,
      })
    ) {
      return handoffError({
        error: "branch-checked-out-elsewhere",
        message: "Branch is already checked out in another worktree",
        rollbackErrors: [],
        warnings,
      });
    }

    const sourceHeadSha = await readHeadCommitSha({
      cwd: sourceMetadata.root,
      host,
      signal,
    });
    if (sourceHeadSha == null) {
      return handoffError({
        error: "source-detach-failed",
        message: "Unable to resolve worktree HEAD commit",
        rollbackErrors: [],
        warnings,
      });
    }

    const detachResult = await checkoutBranch({
      branch: sourceHeadSha,
      callbacks: {
        onCheckoutStatusChange: (status) =>
          callbacks.onProgress?.("detach-worktree-branch", status),
        onStashStatusChange: (status) =>
          callbacks.onProgress?.("stash-source-changes", status),
      },
      cwd: sourceWorktreeCwd,
      host,
      signal,
      stashUncommitted: true,
    });
    if (detachResult.status === "error") {
      return handoffError({
        error: "source-detach-failed",
        message: detachResult.error,
        rollbackErrors: [],
        warnings,
        execOutput: detachResult.execOutput,
      });
    }
    sourceStashRef = detachResult.stashRef;
    sourceDetached = true;

    const localStatus = await readStatusSummary({
      cwd: localMetadata.root,
      host,
      signal,
    });
    if (localStatus.type !== "success") {
      return handoffError({
        error: "local-status-check-failed",
        message: "Failed to read destination local status",
        rollbackErrors: await rollbackSourceState({
          branch: sourceOriginalBranch,
          cwd: sourceWorktreeCwd,
          host,
          signal,
          stashRef: sourceStashRef,
        }),
        warnings,
      });
    }
    if (
      localStatus.stagedCount +
        localStatus.unstagedCount +
        localStatus.untrackedCount >
      0
    ) {
      return handoffError({
        error: "local-destination-has-tracked-changes",
        message:
          "You have uncommitted local changes. Commit or stash them first.",
        rollbackErrors: await rollbackSourceState({
          branch: sourceOriginalBranch,
          cwd: sourceWorktreeCwd,
          host,
          signal,
          stashRef: sourceStashRef,
        }),
        warnings,
      });
    }

    if (localOriginalBranch !== sourceBranch) {
      const branchResult = await ensureBranchAtCommit({
        branch: sourceBranch,
        commitSha: sourceHeadSha,
        cwd: localMetadata.root,
        host,
        signal,
      });
      if (branchResult.status === "error") {
        return handoffError({
          error: "local-branch-head-mismatch",
          message: branchResult.message,
          rollbackErrors: await rollbackSourceState({
            branch: sourceOriginalBranch,
            cwd: sourceWorktreeCwd,
            host,
            signal,
            stashRef: sourceStashRef,
          }),
          warnings,
          execOutput: branchResult.execOutput,
        });
      }

      const checkoutLocalResult = await checkoutBranch({
        branch: sourceBranch,
        callbacks: {
          onCheckoutStatusChange: (status) =>
            callbacks.onProgress?.("checkout-local-branch", status),
        },
        cwd: localMetadata.root,
        host,
        signal,
        stashUncommitted: false,
      });
      if (checkoutLocalResult.status === "error") {
        return handoffError({
          error: "checkout-local-failed",
          message: checkoutLocalResult.error,
          rollbackErrors: await rollbackSourceState({
            branch: sourceOriginalBranch,
            cwd: sourceWorktreeCwd,
            host,
            signal,
            stashRef: sourceStashRef,
          }),
          warnings,
          execOutput: checkoutLocalResult.execOutput,
        });
      }
      localCheckedOut = true;
    } else {
      callbacks.onProgress?.("checkout-local-branch", "skipped");
    }

    if (sourceStashRef != null) {
      callbacks.onProgress?.("apply-changes-to-local", "started");
      const applyResult = await applyStash({
        cwd: localMetadata.root,
        host,
        mode: "apply",
        signal,
        stashRef: sourceStashRef,
      });
      if (applyResult.status === "error") {
        callbacks.onProgress?.("apply-changes-to-local", "failed");
        return handoffError({
          error: "apply-source-stash-failed",
          message: applyResult.error,
          rollbackErrors: [
            ...(localCheckedOut
              ? await restoreState({
                  branch: localOriginalBranch,
                  cwd: localMetadata.root,
                  host,
                  restoreBranchError: "restore-local-branch-failed",
                  restoreStashError: "restore-local-stash-failed",
                  signal,
                  stashRef: null,
                })
              : []),
            ...(await rollbackSourceState({
              branch: sourceOriginalBranch,
              cwd: sourceWorktreeCwd,
              host,
              signal,
              stashRef: sourceStashRef,
            })),
          ],
          warnings,
          execOutput: applyResult.execOutput,
        });
      }
      callbacks.onProgress?.("apply-changes-to-local", "completed");
      const dropResult = await applyStash({
        cwd: localMetadata.root,
        host,
        mode: "drop",
        signal,
        stashRef: sourceStashRef,
      });
      if (dropResult.status === "error") {
        warnings.push("drop-source-stash-failed");
      }
    } else {
      callbacks.onProgress?.("apply-changes-to-local", "skipped");
    }

    return { status: "success", warnings };
  } catch {
    return handoffError({
      error: "unexpected-error",
      message: "Failed to move thread to local",
      rollbackErrors: [
        ...(localCheckedOut
          ? await restoreState({
              branch: localOriginalBranch,
              cwd: localGitRoot,
              host,
              restoreBranchError: "restore-local-branch-failed",
              restoreStashError: "restore-local-stash-failed",
              signal,
              stashRef: null,
            })
          : []),
        ...(sourceDetached
          ? await rollbackSourceState({
              branch: sourceOriginalBranch,
              cwd: sourceWorktreeCwd,
              host,
              signal,
              stashRef: sourceStashRef,
            })
          : []),
      ],
      warnings,
    });
  }
}

async function moveThreadToWorktree({
  callbacks,
  createdWorktree,
  defaultBranch,
  host,
  localCheckoutBranch,
  localCwd,
  signal,
  sourceBranch,
  stashTargetWorktree,
  worktreeCheckoutBranch,
  worktreeGitRoot,
  worktreeWorkspaceRoot,
}: {
  callbacks: ThreadHandoffCallbacks;
  createdWorktree: boolean;
  defaultBranch: string | null;
  host: WorkerExecutionHostClient;
  localCheckoutBranch: string | null;
  localCwd: string;
  signal: AbortSignal;
  sourceBranch: string;
  stashTargetWorktree: boolean;
  worktreeCheckoutBranch: string | null;
  worktreeGitRoot: string;
  worktreeWorkspaceRoot: string;
}): Promise<ThreadHandoffResult> {
  const warnings: string[] = [];
  if (sourceBranch.trim().length === 0) {
    return handoffError({
      error: "invalid-params",
      message: "Missing source branch",
      rollbackErrors: [],
      warnings,
    });
  }

  const targetBranch = (worktreeCheckoutBranch ?? sourceBranch).trim();
  if (targetBranch.length === 0) {
    return handoffError({
      error: "invalid-params",
      message: "Missing worktree checkout branch",
      rollbackErrors: [],
      warnings,
    });
  }
  if (defaultBranch != null && defaultBranch === targetBranch) {
    return handoffError({
      error: "default-branch-blocked",
      message: "Move to worktree is not available on the default branch",
      rollbackErrors: [],
      warnings,
    });
  }

  let sourceStashRef: string | null = null;
  let targetStashRef: string | null = null;
  let localOriginalBranch: string | null = null;
  let localMoved = false;
  let targetCheckedOut = false;
  let sourceApplied = false;

  try {
    const localMetadata = await readStableMetadata({
      cwd: localCwd,
      host,
      signal,
    });
    if (localMetadata == null) {
      throw Error("Unable to resolve move-to-worktree local repository");
    }

    localOriginalBranch = await readCurrentBranch(
      host,
      localMetadata.root,
      signal,
    );
    if (localOriginalBranch == null) {
      return handoffError({
        error: "local-not-on-branch",
        message: "Local repository must be on a branch to move to a worktree",
        rollbackErrors: [],
        warnings,
      });
    }

    if (localOriginalBranch === sourceBranch) {
      const shouldResolveLocalCheckout =
        (defaultBranch != null && sourceBranch === defaultBranch) ||
        targetBranch !== sourceBranch;
      const checkoutBranchName =
        localCheckoutBranch?.trim() ||
        (shouldResolveLocalCheckout ? sourceBranch : null);
      if (checkoutBranchName == null) {
        return handoffError({
          error: "invalid-params",
          message: "Missing local checkout branch",
          rollbackErrors: [],
          warnings,
        });
      }

      const localCheckoutResult = await checkoutBranch({
        branch: checkoutBranchName,
        callbacks: {
          onCheckoutStatusChange: (status) =>
            callbacks.onProgress?.("checkout-local-branch", status),
          onStashStatusChange: (status) =>
            callbacks.onProgress?.("stash-source-changes", status),
        },
        cwd: localMetadata.root,
        host,
        signal,
        stashUncommitted: true,
      });
      if (localCheckoutResult.status === "error") {
        return handoffError({
          error: "checkout-local-failed",
          message: localCheckoutResult.error,
          rollbackErrors: [],
          warnings,
          execOutput: localCheckoutResult.execOutput,
        });
      }
      sourceStashRef = localCheckoutResult.stashRef;
      localMoved = true;
    } else {
      callbacks.onProgress?.("stash-source-changes", "skipped");
      callbacks.onProgress?.("checkout-local-branch", "skipped");
    }

    const worktreeCheckoutResult = await checkoutBranch({
      branch: targetBranch,
      callbacks: {
        onCheckoutStatusChange: (status) =>
          callbacks.onProgress?.("checkout-worktree-branch", status),
        onStashStatusChange: stashTargetWorktree
          ? (status) =>
              callbacks.onProgress?.("stash-target-worktree-changes", status)
          : undefined,
      },
      cwd: worktreeWorkspaceRoot,
      host,
      signal,
      stashUncommitted: stashTargetWorktree,
    });
    if (!stashTargetWorktree) {
      callbacks.onProgress?.("stash-target-worktree-changes", "skipped");
    }
    if (worktreeCheckoutResult.status === "error") {
      const rollbackErrors = localMoved
        ? await restoreState({
            branch: localOriginalBranch,
            cwd: localMetadata.root,
            host,
            restoreBranchError: "restore-local-branch-failed",
            restoreStashError: "restore-local-stash-failed",
            signal,
            stashRef: sourceStashRef,
          })
        : [];
      if (createdWorktree) {
        const cleanupSucceeded = await removeCreatedWorktree({
          host,
          signal,
          worktreeGitRoot,
        });
        if (!cleanupSucceeded) {
          rollbackErrors.push("cleanup-created-worktree-failed");
        }
      }
      return handoffError({
        error: "checkout-worktree-failed",
        message: worktreeCheckoutResult.error,
        rollbackErrors,
        warnings,
        execOutput: worktreeCheckoutResult.execOutput,
      });
    }

    targetStashRef = worktreeCheckoutResult.stashRef;
    targetCheckedOut = true;
    if (targetStashRef != null)
      warnings.push("stashed-target-worktree-changes");

    if (sourceStashRef != null) {
      callbacks.onProgress?.("apply-changes-to-worktree", "started");
      const applyResult = await applyStash({
        cwd: worktreeWorkspaceRoot,
        host,
        mode: "apply",
        signal,
        stashRef: sourceStashRef,
      });
      if (applyResult.status === "error") {
        callbacks.onProgress?.("apply-changes-to-worktree", "failed");
        const rollbackErrors: string[] = [];
        if (
          targetStashRef != null &&
          (
            await applyStash({
              cwd: worktreeWorkspaceRoot,
              host,
              mode: "pop",
              signal,
              stashRef: targetStashRef,
            })
          ).status === "error"
        ) {
          rollbackErrors.push("restore-target-stash-failed");
        }
        if (localMoved) {
          rollbackErrors.push(
            ...(await restoreState({
              branch: localOriginalBranch,
              cwd: localMetadata.root,
              host,
              restoreBranchError: "restore-local-branch-failed",
              restoreStashError: "restore-local-stash-failed",
              signal,
              stashRef: sourceStashRef,
            })),
          );
        }
        if (createdWorktree) {
          const cleanupSucceeded = await removeCreatedWorktree({
            host,
            signal,
            worktreeGitRoot,
          });
          if (!cleanupSucceeded) {
            rollbackErrors.push("cleanup-created-worktree-failed");
          }
        }
        return handoffError({
          error: "apply-source-stash-failed",
          message: applyResult.error,
          rollbackErrors,
          warnings,
          execOutput: applyResult.execOutput,
        });
      }
      callbacks.onProgress?.("apply-changes-to-worktree", "completed");
      sourceApplied = true;
    } else {
      callbacks.onProgress?.("apply-changes-to-worktree", "skipped");
    }

    if (
      targetStashRef != null &&
      (
        await applyStash({
          cwd: worktreeWorkspaceRoot,
          host,
          mode: "drop",
          signal,
          stashRef: targetStashRef,
        })
      ).status === "error"
    ) {
      warnings.push("drop-target-stash-failed");
    }
    if (
      sourceStashRef != null &&
      (
        await applyStash({
          cwd: localMetadata.root,
          host,
          mode: "drop",
          signal,
          stashRef: sourceStashRef,
        })
      ).status === "error"
    ) {
      warnings.push("drop-source-stash-failed");
    }

    return { status: "success", warnings };
  } catch {
    const rollbackErrors: string[] = [];
    if (
      !sourceApplied &&
      targetStashRef != null &&
      (
        await applyStash({
          cwd: worktreeWorkspaceRoot,
          host,
          mode: "pop",
          signal,
          stashRef: targetStashRef,
        })
      ).status === "error"
    ) {
      rollbackErrors.push("restore-target-stash-failed");
    }
    if (localMoved) {
      rollbackErrors.push(
        ...(await restoreState({
          branch: localOriginalBranch,
          cwd: localCwd,
          host,
          restoreBranchError: "restore-local-branch-failed",
          restoreStashError: "restore-local-stash-failed",
          signal,
          stashRef: sourceApplied ? null : sourceStashRef,
        })),
      );
    }
    if (targetCheckedOut && !sourceApplied && createdWorktree) {
      const cleanupSucceeded = await removeCreatedWorktree({
        host,
        signal,
        worktreeGitRoot,
      });
      if (!cleanupSucceeded) {
        rollbackErrors.push("cleanup-created-worktree-failed");
      }
    }
    return handoffError({
      error: "unexpected-error",
      message: "Failed to move thread to worktree",
      rollbackErrors,
      warnings,
    });
  }
}

function progressCallbacks({
  direction,
  emit,
  operationId,
}: {
  direction: ThreadHandoffDirection;
  emit(event: unknown): void;
  operationId: string;
}): ThreadHandoffCallbacks {
  return {
    onProgress(step, status) {
      emit({
        type: "thread-handoff-progress",
        operationId,
        direction,
        step,
        status,
      });
    },
  };
}

function handoffError({
  error,
  execOutput,
  message,
  rollbackErrors,
  warnings,
}: {
  error: string;
  execOutput?: GitCommandExecOutput;
  message: string;
  rollbackErrors: string[];
  warnings: string[];
}): ThreadHandoffError {
  return {
    status: "error",
    error,
    message,
    rollbackErrors,
    warnings,
    ...(execOutput == null ? {} : { execOutput }),
  };
}

function optionalBooleanParam(
  params: Record<string, unknown>,
  key: string,
): boolean {
  const value = params[key];
  if (value == null) return false;
  if (typeof value === "boolean") return value;
  throw Error(`Git worker parameter '${key}' must be a boolean`);
}

function optionalStringParam(
  params: Record<string, unknown>,
  key: string,
): string | null {
  const value = params[key];
  if (value == null) return null;
  if (typeof value === "string") return value;
  throw Error(`Git worker parameter '${key}' must be a string`);
}

function requireRecordParams(
  request: GitWorkerRequest,
): Record<string, unknown> {
  if (isRecord(request.params)) return request.params;
  throw Error(`Git worker method '${request.method}' requires parameters`);
}

function requireStringParam(
  params: Record<string, unknown>,
  key: string,
): string {
  const value = params[key];
  if (typeof value === "string" && value.length > 0) return value;
  throw Error(`Git worker parameter '${key}' must be a non-empty string`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
