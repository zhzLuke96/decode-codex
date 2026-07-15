// Restored from ref/.vite/build/worker.js
// Build Git diff argument plans for review sources.

import { writeWorkingTreeSnapshot } from "../git-worker-diff-stats";
import { runGitCommand } from "../git-worker-commands";
import { readStableMetadata } from "../git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "../worker-execution-host-client";

type ReviewSource = "branch" | "commit" | "staged" | "unstaged";

const emptyTreeSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";

export async function createReviewDiffPlan({
  baseBranch,
  commitSha,
  cwd,
  host,
  includeUntrackedFiles,
  signal,
  source,
}: {
  baseBranch?: string | null;
  commitSha?: string | null;
  cwd: string;
  host: WorkerExecutionHostClient;
  includeUntrackedFiles: boolean;
  signal: AbortSignal;
  source: ReviewSource;
}) {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return null;

  switch (source) {
    case "branch": {
      const baseCommit = await resolveBranchDiffBase({
        baseBranch: baseBranch ?? null,
        host,
        root: metadata.root,
        signal,
      });
      const workingTree = await writeWorkingTreeSnapshot({
        host,
        includeUntrackedFiles,
        root: metadata.root,
        signal,
      });
      if (baseCommit == null || workingTree == null) return null;
      return {
        diffArgs: [baseCommit, workingTree],
        root: metadata.root,
        source,
        untrackedPathSet: includeUntrackedFiles
          ? await readUntrackedPathSet(metadata.root, host, signal)
          : new Set<string>(),
      };
    }
    case "commit": {
      if (commitSha == null) return null;
      return {
        diffArgs: [
          await readCommitParentOrEmptyTree({
            commitSha,
            host,
            root: metadata.root,
            signal,
          }),
          commitSha,
        ],
        root: metadata.root,
        source,
        untrackedPathSet: new Set<string>(),
      };
    }
    case "staged":
      return {
        diffArgs: ["--cached"],
        root: metadata.root,
        source,
        untrackedPathSet: new Set<string>(),
      };
    case "unstaged": {
      const indexTree = await writeCurrentIndexTree({
        host,
        root: metadata.root,
        signal,
      });
      const workingTree = await writeWorkingTreeSnapshot({
        host,
        includeUntrackedFiles,
        root: metadata.root,
        signal,
      });
      if (indexTree == null || workingTree == null) return null;
      return {
        diffArgs: [indexTree, workingTree],
        root: metadata.root,
        source,
        untrackedPathSet: includeUntrackedFiles
          ? await readUntrackedPathSet(metadata.root, host, signal)
          : new Set<string>(),
      };
    }
  }
}

async function resolveBranchDiffBase({
  baseBranch,
  host,
  root,
  signal,
}: {
  baseBranch: string | null;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  if (baseBranch != null && baseBranch.trim().length > 0) {
    return resolveBranchishHeadMergeBase(host, root, baseBranch, signal);
  }

  for (const candidate of [
    "@{upstream}",
    "origin/main",
    "origin/master",
    "main",
    "master",
  ]) {
    const mergeBase = await resolveBranchishHeadMergeBase(
      host,
      root,
      candidate,
      signal,
    );
    if (mergeBase != null) return mergeBase;
  }
  return null;
}

async function resolveBranchishHeadMergeBase(
  host: WorkerExecutionHostClient,
  root: string,
  branchish: string,
  signal: AbortSignal,
): Promise<string | null> {
  const ref = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-parse", "--verify", "--quiet", branchish],
    cwd: root,
    host,
    signal,
  });
  if (!ref.success || !isGitSha(ref.stdout)) return null;

  const mergeBase = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: ["merge-base", "HEAD", ref.stdout],
    cwd: root,
    host,
    signal,
  });
  return mergeBase.success && isGitSha(mergeBase.stdout)
    ? mergeBase.stdout
    : null;
}

async function readCommitParentOrEmptyTree({
  commitSha,
  host,
  root,
  signal,
}: {
  commitSha: string;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-parse", "--verify", "--quiet", `${commitSha}^`],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout : emptyTreeSha;
}

async function writeCurrentIndexTree({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: ["write-tree"],
    cwd: root,
    host,
    signal,
  });
  return result.success && isGitSha(result.stdout) ? result.stdout : null;
}

async function readUntrackedPathSet(
  root: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<Set<string>> {
  const result = await runGitCommand({
    args: ["ls-files", "--others", "--exclude-standard", "-z"],
    cwd: root,
    host,
    signal,
    trim: false,
  });
  return new Set(
    result.success
      ? result.stdout.split("\0").filter((path) => path.length > 0)
      : [],
  );
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}
