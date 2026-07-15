// Restored from ref/.vite/build/worker.js
// Shared types for Git worktree creation helpers.

import type { LocalEnvironmentScriptResult } from "./git-worker-local-environment-types";

export type CreateWorktreeStartingState =
  | {
      type: "branch";
      branchName: string;
    }
  | {
      type: "working-tree";
    };

export type CreateWorktreeResult =
  | {
      success: true;
      worktreeGitRoot: string;
      worktreeWorkspaceRoot: string;
      setupResult: LocalEnvironmentScriptResult | null;
      setupError: string | null;
    }
  | {
      success: false;
      error: Error;
    };

export type WorktreeCreationCallbacks = {
  onLog?(stream: "info" | "stderr" | "stdout", data: Uint8Array): void;
  onSetupStart?(): void;
  onWorktreePathAllocated?(worktreeGitRoot: string): void;
};

export type GitMetadata = {
  root: string;
  commonDir: string;
};
