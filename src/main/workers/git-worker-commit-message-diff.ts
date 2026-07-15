// Restored from ref/.vite/build/worker.js
// Commit-message modal diff collection for staged and tracked working-tree changes.

import { writeWorkingTreeSnapshot } from "./git-worker-diff-stats";
import { readStableMetadata } from "./git-worker-repo-queries";
import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type CommitMessageDiff =
  | {
      type: "success";
      unifiedDiff: string;
      unifiedDiffBytes: number;
    }
  | {
      type: "error";
      error:
        | { type: "diff-too-large"; limitBytes: number }
        | { type: "unknown" };
    };

const maxDiffBytes = 32 * 1024 * 1024;
const diffConfigOverrides = [
  "-c",
  "diff.mnemonicPrefix=false",
  "-c",
  "diff.noprefix=false",
  "-c",
  "core.quotePath=false",
];
const emptyTreeSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
const diffCommandPrefix = [
  "diff",
  "--no-ext-diff",
  "--no-textconv",
  "--color=never",
  "--src-prefix=a/",
  "--dst-prefix=b/",
];

export async function readCommitMessageDiff({
  cwd,
  host,
  includeUnstaged,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  includeUnstaged: boolean;
  signal: AbortSignal;
}): Promise<CommitMessageDiff> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return unknownDiffError();

  if (!includeUnstaged) {
    return readUnifiedDiff({
      args: ["--cached"],
      cwd: metadata.root,
      host,
      signal,
    });
  }

  const workingTree = await writeWorkingTreeSnapshot({
    host,
    includeUntrackedFiles: false,
    root: metadata.root,
    signal,
  });
  if (workingTree == null) return unknownDiffError();
  const headTree = await readHeadOrEmptyTree(metadata.root, host, signal);

  return readUnifiedDiff({
    args: [headTree, workingTree],
    cwd: metadata.root,
    host,
    signal,
  });
}

async function readUnifiedDiff({
  args,
  cwd,
  host,
  signal,
}: {
  args: string[];
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<CommitMessageDiff> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [0, 1],
    args: [...diffCommandPrefix, ...args],
    configOverrides: diffConfigOverrides,
    cwd,
    host,
    maxOutputBytes: maxDiffBytes,
    signal,
    trim: false,
  });
  if (!result.success) return { type: "error", error: diffError(result) };
  return {
    type: "success",
    unifiedDiff: result.stdout,
    unifiedDiffBytes: byteLength(result.stdout),
  };
}

async function readHeadOrEmptyTree(
  root: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-parse", "--verify", "--quiet", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout : emptyTreeSha;
}

function diffError(
  result: GitCommandResult,
): { type: "diff-too-large"; limitBytes: number } | { type: "unknown" } {
  return result.outputLimitExceeded
    ? { type: "diff-too-large", limitBytes: maxDiffBytes }
    : { type: "unknown" };
}

function unknownDiffError(): CommitMessageDiff {
  return { type: "error", error: { type: "unknown" } };
}

function byteLength(value: string): number {
  return new TextEncoder().encode(value).byteLength;
}
