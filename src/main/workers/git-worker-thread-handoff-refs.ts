// Restored from ref/.vite/build/worker.js
// Branch/ref and worktree helpers for thread handoff operations.

import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import { listWorktrees } from "./git-worker-worktrees";
import type { GitCommandExecOutput } from "./git-worker-thread-handoff-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type BranchEnsureResult =
  | { status: "ok" }
  | {
      status: "error";
      message: string;
      execOutput: GitCommandExecOutput;
    };

export async function ensureBranchAtCommit({
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
}): Promise<BranchEnsureResult> {
  const existing = await readBranchCommit({
    branch,
    commitSha,
    cwd,
    host,
    signal,
  });
  if (existing.status === "same-commit") return { status: "ok" };
  if (existing.status === "different-commit") {
    return {
      status: "error",
      message: existing.message,
      execOutput: existing.execOutput,
    };
  }

  const result = await runGitCommand({
    args: ["branch", branch, commitSha],
    cwd,
    host,
    signal,
  });
  if (result.success) return { status: "ok" };
  const error = result.stderr || result.stdout || "Failed to create branch";
  return {
    status: "error",
    message: error,
    execOutput: commandExecOutput(result, error),
  };
}

export async function readHeadCommitSha({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "HEAD"],
    cwd,
    host,
    signal,
  });
  const commitSha = result.success ? result.stdout.trim() : "";
  if (!commitSha) return null;
  if (!isGitSha(commitSha)) throw Error(`Unexpected HEAD SHA: ${commitSha}`);
  return commitSha;
}

export async function isBranchCheckedOutElsewhere({
  branch,
  host,
  localGitRoot,
  signal,
  sourceWorktreeRoot,
}: {
  branch: string;
  host: WorkerExecutionHostClient;
  localGitRoot: string;
  signal: AbortSignal;
  sourceWorktreeRoot: string;
}): Promise<boolean> {
  const pathApi = await host.platformPath();
  const localRoot = pathApi.normalize(pathApi.resolve(localGitRoot));
  const sourceRoot = pathApi.normalize(pathApi.resolve(sourceWorktreeRoot));
  return (await listWorktrees({ cwd: localGitRoot, host, signal })).some(
    (worktree) => {
      if (
        worktree.headRef.type !== "branch" ||
        worktree.headRef.string !== branch
      ) {
        return false;
      }
      const root = pathApi.normalize(pathApi.resolve(worktree.root));
      return root !== localRoot && root !== sourceRoot;
    },
  );
}

export async function removeCreatedWorktree({
  host,
  signal,
  worktreeGitRoot,
}: {
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  worktreeGitRoot: string;
}): Promise<boolean> {
  const result = await runGitCommand({
    args: ["worktree", "remove", "--force", worktreeGitRoot],
    cwd: worktreeGitRoot,
    host,
    signal,
  }).catch(() => null);
  await host
    .remove(worktreeGitRoot, { recursive: true, force: true })
    .catch(() => {});
  return result == null || result.success;
}

async function readBranchCommit({
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
  | { status: "missing" }
  | { status: "same-commit" }
  | {
      status: "different-commit";
      message: string;
      execOutput: GitCommandExecOutput;
    }
> {
  const ref = refNameForBranch(branch);
  const showRefResult = await runGitCommand({
    args: ["show-ref", "--verify", ref],
    cwd,
    host,
    signal,
  });
  if (showRefResult.success && showRefResult.code === 0) {
    const refResult = await runGitCommand({
      args: ["rev-parse", ref],
      cwd,
      host,
      signal,
    });
    if (refResult.success && refResult.stdout.trim() === commitSha) {
      return { status: "same-commit" };
    }
    const message = `Branch ${branch} already exists at a different commit`;
    return {
      status: "different-commit",
      message,
      execOutput: commandExecOutput(refResult, message),
    };
  }
  return { status: "missing" };
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

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}
