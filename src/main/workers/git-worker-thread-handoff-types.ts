// Restored from ref/.vite/build/worker.js
// Shared types for same-host thread handoff Git operations.

import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export type GitWorkerRequest = {
  id: string;
  method: string;
  params?: unknown;
};

export type GitCommandExecOutput = {
  command: string[];
  output: string;
};

export type ThreadHandoffDirection =
  | "to-host-worktree"
  | "to-local"
  | "to-worktree";
export type ThreadHandoffProgressStatus =
  | "started"
  | "completed"
  | "failed"
  | "skipped";
export type ThreadHandoffProgressStep =
  | "stash-source-changes"
  | "detach-worktree-branch"
  | "checkout-local-branch"
  | "apply-changes-to-local"
  | "prepare-host-transfer"
  | "transfer-host-artifacts"
  | "create-new-worktree"
  | "stash-target-worktree-changes"
  | "checkout-worktree-branch"
  | "apply-changes-to-worktree";

export type ThreadHandoffCallbacks = {
  onProgress?(
    step: ThreadHandoffProgressStep,
    status: ThreadHandoffProgressStatus,
  ): void;
};

export type ThreadHandoffSuccess =
  | {
      status: "success";
      warnings: string[];
    }
  | {
      status: "success";
      rolloutPath: string;
      worktreeGitRoot: string;
      worktreeWorkspaceRoot: string;
    };

export type ThreadHandoffError = {
  status: "error";
  error: string;
  message: string;
  rollbackErrors?: string[];
  warnings?: string[];
  execOutput?: GitCommandExecOutput;
};

export type ThreadHandoffResult = ThreadHandoffSuccess | ThreadHandoffError;

export type CheckoutBranchResult =
  | {
      status: "success";
      branch: string;
      stashRef: string | null;
    }
  | {
      status: "error";
      error: string;
      errorType: string;
      conflictedPaths?: string[];
      execOutput?: GitCommandExecOutput;
    };

export type ApplyStashResult =
  | {
      status: "success";
      stashRef: string;
      mode: "apply" | "drop" | "pop";
    }
  | {
      status: "error";
      error: string;
      execOutput: GitCommandExecOutput;
    };

export type RestoreStateOptions = {
  branch: string | null;
  cwd: string;
  host: WorkerExecutionHostClient;
  restoreBranchError: string;
  restoreStashError: string;
  signal: AbortSignal;
  stashRef: string | null;
};
