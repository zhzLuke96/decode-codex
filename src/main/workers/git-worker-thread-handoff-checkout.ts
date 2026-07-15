// Restored from ref/.vite/build/worker.js
// Branch checkout with optional stash handling for thread handoff operations.

import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import type {
  CheckoutBranchResult,
  GitCommandExecOutput,
  ThreadHandoffProgressStatus,
} from "./git-worker-thread-handoff-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

const stashMessage = "Stashed Codex worktree changes";
const noLocalChangesMessage = "No local changes to save";

export async function checkoutBranch({
  branch,
  callbacks,
  cwd,
  host,
  signal,
  stashUncommitted,
}: {
  branch: string;
  callbacks: {
    onCheckoutStatusChange?: (status: ThreadHandoffProgressStatus) => void;
    onStashStatusChange?: (status: ThreadHandoffProgressStatus) => void;
  };
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  stashUncommitted: boolean;
}): Promise<CheckoutBranchResult> {
  const workspaceRoot = cwd.trim();
  if (workspaceRoot.length === 0) {
    return {
      status: "error",
      error: "No workspace available for branch checkout",
      errorType: "unknown",
    };
  }
  const targetBranch = branch.trim();
  if (targetBranch.length === 0) {
    return {
      status: "error",
      error: "Branch name is required",
      errorType: "unknown",
    };
  }

  let stashRef: string | null = null;
  let rollbackStashRef: string | null = null;
  if (stashUncommitted) {
    callbacks.onStashStatusChange?.("started");
    const stashResult = await runGitCommand({
      args: ["stash", "push", "--include-untracked", "-m", stashMessage],
      cwd: workspaceRoot,
      host,
      signal,
      trim: false,
    });
    const noLocalChanges =
      stashResult.stdout.includes(noLocalChangesMessage) ||
      stashResult.stderr.includes(noLocalChangesMessage);
    if (!noLocalChanges && !stashResult.success) {
      callbacks.onStashStatusChange?.("failed");
      const error =
        stashResult.stderr || stashResult.stdout || "Failed to stash changes";
      return {
        status: "error",
        error,
        errorType: "failed-to-stash-changes",
        execOutput: commandExecOutput(stashResult, error),
      };
    }
    if (noLocalChanges) {
      callbacks.onStashStatusChange?.("skipped");
    } else {
      rollbackStashRef = "stash@{0}";
      const stashRefResult = await runGitCommand({
        args: ["rev-parse", "--verify", "refs/stash"],
        cwd: workspaceRoot,
        host,
        signal,
      });
      if (!stashRefResult.success || stashRefResult.stdout.length === 0) {
        callbacks.onStashStatusChange?.("failed");
        const error =
          stashRefResult.stderr ||
          stashRefResult.stdout ||
          "Failed to resolve stash reference";
        const rollbackError = await popRollbackStash({
          cwd: workspaceRoot,
          host,
          stashRollbackRef: rollbackStashRef,
        });
        const message = rollbackError ? `${error}\n${rollbackError}` : error;
        return {
          status: "error",
          error: message,
          errorType: "failed-to-stash-changes",
          execOutput: commandExecOutput(stashRefResult, message),
        };
      }
      stashRef = stashRefResult.stdout.trim();
      callbacks.onStashStatusChange?.("completed");
    }
  } else {
    callbacks.onStashStatusChange?.("skipped");
  }

  callbacks.onCheckoutStatusChange?.("started");
  const checkoutResult = await runGitCommand({
    args: ["checkout", targetBranch],
    cwd: workspaceRoot,
    host,
    signal,
  });
  if (!checkoutResult.success) {
    callbacks.onCheckoutStatusChange?.("failed");
    const rollbackError = await popRollbackStash({
      cwd: workspaceRoot,
      host,
      stashRollbackRef: rollbackStashRef,
    });
    const checkoutError =
      checkoutResult.stderr ||
      checkoutResult.stdout ||
      "Failed to checkout branch";
    const conflict = parseCheckoutConflict(
      `${checkoutResult.stdout}\n${checkoutResult.stderr}`,
    );
    const message = rollbackError
      ? `${checkoutError}\n${rollbackError}`
      : checkoutError;
    return {
      status: "error",
      error: message,
      errorType: conflict.errorType,
      conflictedPaths:
        conflict.conflictedPaths.length > 0
          ? conflict.conflictedPaths
          : undefined,
      execOutput: commandExecOutput(checkoutResult, message),
    };
  }

  callbacks.onCheckoutStatusChange?.("completed");
  return { status: "success", branch: targetBranch, stashRef };
}

async function popRollbackStash({
  cwd,
  host,
  stashRollbackRef,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  stashRollbackRef: string | null;
}): Promise<string | null> {
  if (stashRollbackRef == null) return null;
  const result = await runGitCommand({
    args: ["stash", "pop", stashRollbackRef],
    cwd,
    host,
  });
  return result.success
    ? null
    : result.stderr || result.stdout || "Failed to restore stashed changes";
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

function parseCheckoutConflict(output: string): {
  errorType: "blocked-by-working-tree-changes" | "unknown";
  conflictedPaths: string[];
} {
  const lines = output.split(/\r?\n/);
  const conflictHeader =
    /^(error:\s*)?.*\bwould be overwritten by checkout:\s*$/i;
  const conflictedPaths = new Set<string>();
  let foundHeader = false;
  let inConflictBlock = false;
  for (const line of lines) {
    const trimmed = line.replace(/\r$/, "").trim();
    if (!inConflictBlock) {
      if (conflictHeader.test(trimmed)) {
        foundHeader = true;
        inConflictBlock = true;
      }
      continue;
    }
    if (trimmed.length === 0) continue;
    const lower = trimmed.toLowerCase();
    if (
      lower.startsWith("please ") ||
      lower.startsWith("error:") ||
      lower === "aborting"
    ) {
      break;
    }
    conflictedPaths.add(trimmed);
  }
  return foundHeader || conflictedPaths.size > 0
    ? {
        errorType: "blocked-by-working-tree-changes",
        conflictedPaths: [...conflictedPaths],
      }
    : { errorType: "unknown", conflictedPaths: [] };
}
