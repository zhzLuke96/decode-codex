// Restored from ref/.vite/build/worker.js
// Cross-host Git bundle, rollout transfer, and cleanup helpers for thread moves.

import { randomUUID } from "node:crypto";
import { readDefaultBranch } from "./git-worker-branch-base";
import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import { createWorktree } from "./git-worker-create-worktree";
import {
  copyBetweenHosts,
  createHostHandoffSnapshotCommit,
  destinationHasCommit,
  findSharedBaseForHandoff,
  hostHandoffDir,
} from "./git-worker-host-handoff-transfer";
import { readCurrentBranch } from "./git-worker-current-branch";
import { readStableMetadata } from "./git-worker-repo-queries";
import { checkoutBranch } from "./git-worker-thread-handoff-checkout";
import {
  ensureBranchAtCommit,
  readHeadCommitSha,
  removeCreatedWorktree,
} from "./git-worker-thread-handoff-refs";
import { applyStash } from "./git-worker-thread-handoff-stash";
import type {
  GitCommandExecOutput,
  ThreadHandoffCallbacks,
  ThreadHandoffError,
  ThreadHandoffResult,
} from "./git-worker-thread-handoff-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type MoveThreadToHostWorktreeOptions = {
  destinationWorkspaceRoot: string;
  destinationWorktreeGitRoot: string | null;
  destinationWorktreeWorkspaceRoot: string | null;
  sourceBranch: string;
  sourceCwd: string;
  sourceRolloutPath: string;
  stashDestinationWorktree: boolean;
};

type BranchCommitState =
  | { status: "missing" }
  | { status: "same-commit" }
  | {
      status: "different-commit";
      message: string;
      execOutput: GitCommandExecOutput;
    };

type DestinationCheckoutSwitch =
  | { previousBranch: string | null }
  | { error: ThreadHandoffError };

export async function moveThreadToHostWorktree({
  callbacks,
  destinationHost,
  options,
  signal,
  sourceHost,
}: {
  callbacks: ThreadHandoffCallbacks;
  destinationHost: WorkerExecutionHostClient;
  options: MoveThreadToHostWorktreeOptions;
  signal: AbortSignal;
  sourceHost: WorkerExecutionHostClient;
}): Promise<ThreadHandoffResult> {
  if (options.sourceRolloutPath.trim().length === 0) {
    return hostHandoffError({
      error: "invalid-params",
      message: "Missing source rollout path",
    });
  }
  if (options.sourceBranch.trim().length === 0) {
    return hostHandoffError({
      error: "invalid-params",
      message: "Missing source branch",
    });
  }
  if (
    (options.destinationWorktreeGitRoot == null) !==
    (options.destinationWorktreeWorkspaceRoot == null)
  ) {
    return hostHandoffError({
      error: "invalid-params",
      message: "Destination worktree roots must be provided together",
    });
  }

  const transferId = randomUUID();
  const [sourceMetadata, destinationMetadata] = await Promise.all([
    readStableMetadata({ cwd: options.sourceCwd, host: sourceHost, signal }),
    readStableMetadata({
      cwd: options.destinationWorkspaceRoot,
      host: destinationHost,
      signal,
    }),
  ]);
  if (sourceMetadata == null) {
    return hostHandoffError({
      error: "source-not-in-repository",
      message: "Source thread is not in a git repository",
    });
  }
  if (destinationMetadata == null) {
    return hostHandoffError({
      error: "destination-not-in-repository",
      message: "Destination workspace is not in a git repository",
    });
  }

  const sourceHandoffDir = await hostHandoffDir(sourceHost, transferId);
  const destinationHandoffDir = await hostHandoffDir(
    destinationHost,
    transferId,
  );
  const sourcePath = await sourceHost.platformPath();
  const destinationPath = await destinationHost.platformPath();
  const sourceBundlePath = sourcePath.join(sourceHandoffDir, "handoff.bundle");
  const destinationBundlePath = destinationPath.join(
    destinationHandoffDir,
    "handoff.bundle",
  );
  const destinationRolloutPath = destinationPath.join(
    destinationHandoffDir,
    "rollout.jsonl",
  );
  const sourceRef = `refs/codex/handoff/source/${transferId}`;
  const destinationRef = `refs/codex/handoff/destination/${transferId}`;
  const sameHandoffDir =
    sourceHost.id === destinationHost.id &&
    sourceHandoffDir === destinationHandoffDir;
  const usingExistingWorktree =
    options.destinationWorktreeGitRoot != null &&
    options.destinationWorktreeWorkspaceRoot != null;

  let succeeded = false;
  let worktreeGitRoot = options.destinationWorktreeGitRoot;
  let worktreeWorkspaceRoot = options.destinationWorktreeWorkspaceRoot;
  let reusedWorktreePreviousCheckout: string | null = null;
  let reusedWorktreeStashRef: string | null = null;
  let destinationCheckoutPreviousBranch: string | null = null;

  try {
    callbacks.onProgress?.("prepare-host-transfer", "started");
    const sourceHeadSha = await readHeadCommitSha({
      cwd: sourceMetadata.root,
      host: sourceHost,
      signal,
    });
    if (sourceHeadSha == null) {
      return hostHandoffError({
        error: "snapshot-failed",
        message: "Unable to resolve source HEAD commit",
      });
    }

    const destinationBranchState = await readBranchCommitState({
      branch: options.sourceBranch,
      commitSha: sourceHeadSha,
      cwd: destinationMetadata.root,
      host: destinationHost,
      signal,
    });
    if (
      destinationBranchState.status === "different-commit" &&
      !usingExistingWorktree
    ) {
      return hostHandoffError({
        error: "destination-branch-exists",
        execOutput: destinationBranchState.execOutput,
        message: destinationBranchState.message,
      });
    }

    const snapshotCommitSha = await createHostHandoffSnapshotCommit({
      headSha: sourceHeadSha,
      host: sourceHost,
      root: sourceMetadata.root,
      signal,
    });
    const updateSourceRef = await runGitCommand({
      args: ["update-ref", sourceRef, snapshotCommitSha],
      cwd: sourceMetadata.root,
      host: sourceHost,
      signal,
    });
    if (!updateSourceRef.success) {
      return gitFailure(
        "snapshot-failed",
        "Failed to prepare host handoff snapshot ref",
        updateSourceRef,
      );
    }

    await Promise.all([
      sourceHost.createDirectory(sourceHandoffDir, { recursive: true }),
      destinationHost.createDirectory(destinationHandoffDir, {
        recursive: true,
      }),
    ]);

    if (
      await destinationHasCommit({
        commitSha: snapshotCommitSha,
        cwd: destinationMetadata.root,
        host: destinationHost,
        signal,
      })
    ) {
      const updateDestinationRef = await runGitCommand({
        args: ["update-ref", destinationRef, snapshotCommitSha],
        cwd: destinationMetadata.root,
        host: destinationHost,
        signal,
      });
      if (!updateDestinationRef.success) {
        return gitFailure(
          "bundle-import-failed",
          "Failed to prepare destination handoff ref",
          updateDestinationRef,
        );
      }
      callbacks.onProgress?.("prepare-host-transfer", "completed");
      callbacks.onProgress?.("transfer-host-artifacts", "started");
    } else {
      const sharedBaseSha = await findSharedBaseForHandoff({
        destinationGitRoot: destinationMetadata.root,
        destinationHost,
        headSha: sourceHeadSha,
        signal,
        sourceGitRoot: sourceMetadata.root,
        sourceHost,
      });
      if (sharedBaseSha == null) {
        return hostHandoffError({
          error: "bundle-export-failed",
          message: "Could not find a shared Git base on the destination host",
        });
      }
      const bundleResult = await runGitCommand({
        args: [
          "bundle",
          "create",
          sourceBundlePath,
          sourceRef,
          `^${sharedBaseSha}`,
        ],
        cwd: sourceMetadata.root,
        host: sourceHost,
        signal,
      });
      if (!bundleResult.success) {
        return gitFailure(
          "bundle-export-failed",
          "Failed to export git handoff bundle",
          bundleResult,
        );
      }
      callbacks.onProgress?.("prepare-host-transfer", "completed");
      callbacks.onProgress?.("transfer-host-artifacts", "started");
      await copyBetweenHosts({
        destinationHost,
        destinationPath: destinationBundlePath,
        signal,
        sourceHost,
        sourcePath: sourceBundlePath,
      });
      const fetchResult = await runGitCommand({
        args: [
          "fetch",
          destinationBundlePath,
          `${sourceRef}:${destinationRef}`,
        ],
        cwd: destinationMetadata.root,
        host: destinationHost,
        signal,
      });
      if (!fetchResult.success) {
        return gitFailure(
          "bundle-import-failed",
          "Failed to import git handoff bundle",
          fetchResult,
        );
      }
    }

    await copyBetweenHosts({
      destinationHost,
      destinationPath: destinationRolloutPath,
      signal,
      sourceHost,
      sourcePath: options.sourceRolloutPath,
    });
    callbacks.onProgress?.("transfer-host-artifacts", "completed");

    if (worktreeGitRoot == null || worktreeWorkspaceRoot == null) {
      callbacks.onProgress?.("create-new-worktree", "started");
      const created = await createWorktree({
        allowSetupFailure: false,
        callbacks: {},
        host: destinationHost,
        localEnvironmentConfigPath: null,
        setUpSyncedBranch: false,
        signal,
        startingState: { type: "branch", branchName: destinationRef },
        workspaceRoot: options.destinationWorkspaceRoot,
      });
      if (!created.success) {
        return hostHandoffError({
          error: "create-worktree-failed",
          message: created.error.message,
        });
      }
      worktreeGitRoot = created.worktreeGitRoot;
      worktreeWorkspaceRoot = created.worktreeWorkspaceRoot;
      callbacks.onProgress?.("create-new-worktree", "completed");
    } else {
      reusedWorktreePreviousCheckout =
        (await readCurrentBranch(destinationHost, worktreeGitRoot, signal)) ??
        (await readHeadCommitSha({
          cwd: worktreeGitRoot,
          host: destinationHost,
          signal,
        }));
      const checkoutDestinationRef = await checkoutBranch({
        branch: destinationRef,
        callbacks: {},
        cwd: worktreeWorkspaceRoot,
        host: destinationHost,
        signal,
        stashUncommitted: options.stashDestinationWorktree,
      });
      if (checkoutDestinationRef.status === "error") {
        return hostHandoffError({
          error: "restore-worktree-state-failed",
          execOutput: checkoutDestinationRef.execOutput,
          message: checkoutDestinationRef.error,
        });
      }
      reusedWorktreeStashRef = checkoutDestinationRef.stashRef;
    }

    callbacks.onProgress?.("apply-changes-to-worktree", "started");
    const resetResult = await runGitCommand({
      args: ["reset", "--mixed", sourceHeadSha],
      cwd: worktreeGitRoot,
      host: destinationHost,
      signal,
    });
    if (!resetResult.success) {
      await rollbackHostWorktreeState({
        createdWorktree: !usingExistingWorktree,
        destinationCheckoutGitRoot: destinationMetadata.root,
        destinationCheckoutPreviousBranch,
        host: destinationHost,
        reusedWorktreePreviousCheckout,
        reusedWorktreeStashRef,
        signal,
        worktreeGitRoot,
        worktreeWorkspaceRoot,
      });
      return gitFailure(
        "restore-worktree-state-failed",
        "Failed to restore transferred git state in the worktree",
        resetResult,
      );
    }

    const destinationSwitch = await switchDestinationCheckoutOffBranch({
      branch: options.sourceBranch,
      cwd: destinationMetadata.root,
      host: destinationHost,
      signal,
    });
    if ("error" in destinationSwitch) {
      await rollbackHostWorktreeState({
        createdWorktree: !usingExistingWorktree,
        destinationCheckoutGitRoot: destinationMetadata.root,
        destinationCheckoutPreviousBranch,
        host: destinationHost,
        reusedWorktreePreviousCheckout,
        reusedWorktreeStashRef,
        signal,
        worktreeGitRoot,
        worktreeWorkspaceRoot,
      });
      return destinationSwitch.error;
    }
    destinationCheckoutPreviousBranch = destinationSwitch.previousBranch;

    const branchResult = usingExistingWorktree
      ? await forceBranchAtCommit({
          branch: options.sourceBranch,
          commitSha: sourceHeadSha,
          cwd: worktreeGitRoot,
          host: destinationHost,
          signal,
        })
      : await ensureBranchAtCommit({
          branch: options.sourceBranch,
          commitSha: sourceHeadSha,
          cwd: worktreeGitRoot,
          host: destinationHost,
          signal,
        });
    if (branchResult.status === "error") {
      await rollbackHostWorktreeState({
        createdWorktree: !usingExistingWorktree,
        destinationCheckoutGitRoot: destinationMetadata.root,
        destinationCheckoutPreviousBranch,
        host: destinationHost,
        reusedWorktreePreviousCheckout,
        reusedWorktreeStashRef,
        signal,
        worktreeGitRoot,
        worktreeWorkspaceRoot,
      });
      return hostHandoffError({
        error: "restore-worktree-state-failed",
        execOutput: branchResult.execOutput,
        message: branchResult.message,
      });
    }

    const checkoutBranchResult = await checkoutBranch({
      branch: options.sourceBranch,
      callbacks: {},
      cwd: worktreeGitRoot,
      host: destinationHost,
      signal,
      stashUncommitted: false,
    });
    if (checkoutBranchResult.status === "error") {
      await rollbackHostWorktreeState({
        createdWorktree: !usingExistingWorktree,
        destinationCheckoutGitRoot: destinationMetadata.root,
        destinationCheckoutPreviousBranch,
        host: destinationHost,
        reusedWorktreePreviousCheckout,
        reusedWorktreeStashRef,
        signal,
        worktreeGitRoot,
        worktreeWorkspaceRoot,
      });
      return hostHandoffError({
        error: "restore-worktree-state-failed",
        execOutput: checkoutBranchResult.execOutput,
        message: checkoutBranchResult.error,
      });
    }

    if (reusedWorktreeStashRef != null) {
      await applyStash({
        cwd: worktreeWorkspaceRoot,
        host: destinationHost,
        mode: "drop",
        signal,
        stashRef: reusedWorktreeStashRef,
      }).catch(() => undefined);
    }

    callbacks.onProgress?.("apply-changes-to-worktree", "completed");
    succeeded = true;
    return {
      status: "success",
      rolloutPath: destinationRolloutPath,
      worktreeGitRoot,
      worktreeWorkspaceRoot,
    };
  } catch (error) {
    return hostHandoffError({
      error: "unexpected-error",
      message: error instanceof Error ? error.message : String(error),
    });
  } finally {
    await Promise.allSettled([
      deleteRef({
        cwd: sourceMetadata.root,
        host: sourceHost,
        ref: sourceRef,
        signal,
      }),
      deleteRef({
        cwd: destinationMetadata.root,
        host: destinationHost,
        ref: destinationRef,
        signal,
      }),
      sameHandoffDir && succeeded
        ? Promise.resolve()
        : sourceHost.remove(sourceHandoffDir, { recursive: true, force: true }),
      succeeded
        ? destinationHost.remove(destinationBundlePath, {
            recursive: false,
            force: true,
          })
        : destinationHost.remove(destinationHandoffDir, {
            recursive: true,
            force: true,
          }),
    ]);
  }
}

export async function cleanupHostHandoffTransfer({
  host,
  rolloutPath,
}: {
  host: WorkerExecutionHostClient;
  rolloutPath: string;
}): Promise<{ success: true }> {
  const pathApi = await host.platformPath();
  const rolloutDir = pathApi.dirname(rolloutPath);
  const handoffsRoot = pathApi.join(String(await host.codexHome()), "handoffs");
  const relativeDir = pathApi.relative(handoffsRoot, rolloutDir);

  if (
    pathApi.basename(rolloutPath) !== "rollout.jsonl" ||
    relativeDir.length === 0 ||
    relativeDir === ".." ||
    relativeDir.startsWith(`..${pathApi.sep}`) ||
    pathApi.isAbsolute(relativeDir) ||
    relativeDir.includes(pathApi.sep)
  ) {
    throw Error("Host handoff cleanup requires a copied rollout path");
  }

  await host.remove(rolloutDir, { recursive: true, force: true });
  return { success: true };
}

async function switchDestinationCheckoutOffBranch({
  branch,
  cwd,
  host,
  signal,
}: {
  branch: string;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<DestinationCheckoutSwitch> {
  const currentBranch = await readCurrentBranch(host, cwd, signal);
  if (currentBranch !== branch) return { previousBranch: null };
  const defaultBranch = await readDefaultBranch(host, cwd, signal);
  if (defaultBranch == null || defaultBranch === branch) {
    return {
      error: hostHandoffError({
        error: "restore-worktree-state-failed",
        message:
          "Destination checkout is already using the handoff branch, and Codex could not switch it to a default branch",
      }),
    };
  }
  const checkoutResult = await checkoutBranch({
    branch: defaultBranch,
    callbacks: {},
    cwd,
    host,
    signal,
    stashUncommitted: false,
  });
  return checkoutResult.status === "error"
    ? {
        error: hostHandoffError({
          error: "restore-worktree-state-failed",
          execOutput: checkoutResult.execOutput,
          message: checkoutResult.error,
        }),
      }
    : { previousBranch: currentBranch };
}

async function rollbackHostWorktreeState({
  createdWorktree,
  destinationCheckoutGitRoot,
  destinationCheckoutPreviousBranch,
  host,
  reusedWorktreePreviousCheckout,
  reusedWorktreeStashRef,
  signal,
  worktreeGitRoot,
  worktreeWorkspaceRoot,
}: {
  createdWorktree: boolean;
  destinationCheckoutGitRoot: string;
  destinationCheckoutPreviousBranch: string | null;
  host: WorkerExecutionHostClient;
  reusedWorktreePreviousCheckout: string | null;
  reusedWorktreeStashRef: string | null;
  signal: AbortSignal;
  worktreeGitRoot: string;
  worktreeWorkspaceRoot: string;
}): Promise<void> {
  if (createdWorktree) {
    await removeCreatedWorktree({ host, signal, worktreeGitRoot }).catch(
      () => false,
    );
  } else {
    if (reusedWorktreePreviousCheckout != null) {
      await checkoutBranch({
        branch: reusedWorktreePreviousCheckout,
        callbacks: {},
        cwd: worktreeWorkspaceRoot,
        host,
        signal,
        stashUncommitted: false,
      }).catch(() => undefined);
    }
    if (reusedWorktreeStashRef != null) {
      await applyStash({
        cwd: worktreeWorkspaceRoot,
        host,
        mode: "pop",
        signal,
        stashRef: reusedWorktreeStashRef,
      }).catch(() => undefined);
    }
  }
  if (destinationCheckoutPreviousBranch != null) {
    await checkoutBranch({
      branch: destinationCheckoutPreviousBranch,
      callbacks: {},
      cwd: destinationCheckoutGitRoot,
      host,
      signal,
      stashUncommitted: false,
    }).catch(() => undefined);
  }
}

async function readBranchCommitState({
  branch,
  commitSha,
  cwd,
  host,
  signal,
}: {
  branch: string;
  commitSha: string;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<BranchCommitState> {
  const ref = refNameForBranch(branch);
  const showRef = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: ["show-ref", "--verify", ref],
    cwd,
    host,
    signal,
  });
  if (!showRef.success || showRef.code !== 0) return { status: "missing" };
  const revParse = await runGitCommand({
    args: ["rev-parse", ref],
    cwd,
    host,
    signal,
  });
  if (revParse.success && revParse.stdout.trim() === commitSha) {
    return { status: "same-commit" };
  }
  const message = `Branch ${branch} already exists at a different commit`;
  return {
    status: "different-commit",
    message,
    execOutput: commandExecOutput(revParse, message),
  };
}

async function forceBranchAtCommit({
  branch,
  commitSha,
  cwd,
  host,
  signal,
}: {
  branch: string;
  commitSha: string;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<
  | { status: "ok" }
  | { status: "error"; message: string; execOutput: GitCommandExecOutput }
> {
  const result = await runGitCommand({
    args: ["branch", "-f", branch, commitSha],
    cwd,
    host,
    signal,
  });
  if (result.success) return { status: "ok" };
  const message = result.stderr || result.stdout || "Failed to update branch";
  return {
    status: "error",
    message,
    execOutput: commandExecOutput(result, message),
  };
}

async function deleteRef({
  cwd,
  host,
  ref,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  ref: string;
  signal: AbortSignal;
}): Promise<void> {
  await runGitCommand({
    args: ["update-ref", "-d", ref],
    cwd,
    host,
    signal,
  }).catch(() => undefined);
}

function gitFailure(
  error: string,
  message: string,
  result: GitCommandResult,
): ThreadHandoffError {
  return hostHandoffError({
    error,
    execOutput: commandExecOutput(result),
    message,
  });
}

function hostHandoffError({
  error,
  execOutput,
  message,
}: {
  error: string;
  execOutput?: GitCommandExecOutput;
  message: string;
}): ThreadHandoffError {
  return {
    status: "error",
    error,
    message,
    ...(execOutput == null ? {} : { execOutput }),
  };
}

function commandExecOutput(
  result: GitCommandResult,
  fallbackOutput = result.stdout ||
    result.stderr ||
    "An unknown error occurred",
): GitCommandExecOutput {
  const output = [result.stdout, result.stderr]
    .filter((value) => value.length > 0)
    .join("\n");
  return {
    command: result.command,
    output: output || fallbackOutput,
  };
}

function refNameForBranch(branch: string): string {
  return branch.startsWith("refs/") ? branch : `refs/heads/${branch}`;
}
