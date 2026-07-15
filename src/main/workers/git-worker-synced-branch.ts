// Restored from ref/.vite/build/worker.js
// Synced-branch state reader for Git worker branch synchronization UI.

import { runGitCommand } from "./git-worker-commands";
import { readCurrentBranch } from "./git-worker-current-branch";
import { writeWorkingTreeSnapshot } from "./git-worker-diff-stats";
import { readStableMetadata } from "./git-worker-repo-queries";
import { listWorktrees } from "./git-worker-worktrees";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type SyncedBranchState = {
  branch: string | null;
  base: string | null;
  hasConflicts: boolean;
};

type SyncedBranchConfig = {
  branch: string;
  lastSyncedTreeRef: string;
};

type SyncedBranchDiffStats = {
  leftRef: string;
  rightRef: string;
  filesChanged: number;
  linesAdded: number;
  linesRemoved: number;
};

type SyncedBranchDetailedState = {
  branch: string;
  worktreeSnapshot: {
    root: string;
    headCommitSha: string;
    workingTreeRef?: string;
  };
  branchSnapshot:
    | {
        checkedOut: true;
        snapshot: {
          root: string;
          headCommitSha: string;
          workingTreeRef?: string;
        };
      }
    | {
        checkedOut: false;
        headCommitSha: string;
      };
  localCommitsAhead: number;
  worktreeCommitsAhead: number;
  localUncommittedDiffStats: SyncedBranchDiffStats;
  worktreeUncommittedDiffStats: SyncedBranchDiffStats;
};

export async function readSyncedBranch({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<SyncedBranchState> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return emptySyncedBranchState();

  const config = await readSyncedBranchConfig(host, metadata.root, signal);
  if (config == null) return emptySyncedBranchState();

  return {
    branch: normalizeBranchName(config.branch),
    base: config.lastSyncedTreeRef,
    hasConflicts: await hasMergeConflicts(host, metadata.root, signal),
  };
}

export async function readSyncedBranchDetailedState({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<SyncedBranchDetailedState> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) {
    throw Error("Unable to resolve git root for synced branch status.");
  }

  const config = await readSyncedBranchConfig(host, metadata.root, signal);
  if (config == null) {
    throw Error("No synced branch config found for the current worktree.");
  }

  const normalizedBranch = normalizeBranchName(config.branch);
  const [
    branchWorktreeRoot,
    currentWorktreeHead,
    currentWorktreeSnapshot,
    branchHead,
    currentBranch,
  ] = await Promise.all([
    findWorktreeRootForBranch({
      branch: normalizedBranch,
      cwd: metadata.root,
      host,
      signal,
    }),
    readHeadCommitSha(host, metadata.root, signal),
    writeWorkingTreeSnapshot({
      host,
      includeUntrackedFiles: true,
      root: metadata.root,
      signal,
    }),
    readRequiredRefSha(host, metadata.root, config.branch, signal),
    readCurrentBranch(host, metadata.root, signal),
  ]);

  if (currentBranch != null) throw Error("Worktree has a branch checked out.");
  if (currentWorktreeHead == null) {
    throw Error("Unable to resolve worktree head state.");
  }
  if (branchHead == null) {
    throw Error("Unable to resolve synced branch head SHA.");
  }

  const branchSnapshot =
    branchWorktreeRoot == null
      ? null
      : await writeWorkingTreeSnapshot({
          host,
          includeUntrackedFiles: true,
          root: branchWorktreeRoot,
          signal,
        });
  const commitState = await readLeftRightCommitCounts({
    host,
    leftRef: branchHead,
    rightRef: currentWorktreeHead,
    root: metadata.root,
    signal,
  });

  const makeEmptyStats = (ref: string): SyncedBranchDiffStats => ({
    leftRef: ref,
    rightRef: ref,
    filesChanged: 0,
    linesAdded: 0,
    linesRemoved: 0,
  });
  const worktreeUncommittedDiffStats =
    currentWorktreeSnapshot == null
      ? makeEmptyStats(currentWorktreeHead)
      : {
          ...(await readDiffStats({
            host,
            leftRef: currentWorktreeHead,
            rightRef: currentWorktreeSnapshot,
            root: metadata.root,
            signal,
          })),
          leftRef: currentWorktreeHead,
          rightRef: currentWorktreeSnapshot,
        };
  const localUncommittedDiffStats =
    branchWorktreeRoot != null && branchSnapshot != null
      ? {
          ...(await readDiffStats({
            host,
            leftRef: branchHead,
            rightRef: branchSnapshot,
            root: branchWorktreeRoot,
            signal,
          })),
          leftRef: branchHead,
          rightRef: branchSnapshot,
        }
      : makeEmptyStats(branchHead);

  return {
    branch: config.branch,
    worktreeSnapshot: {
      root: metadata.root,
      headCommitSha: currentWorktreeHead,
      ...(currentWorktreeSnapshot == null
        ? {}
        : { workingTreeRef: currentWorktreeSnapshot }),
    },
    branchSnapshot:
      branchWorktreeRoot == null
        ? {
            checkedOut: false,
            headCommitSha: branchHead,
          }
        : {
            checkedOut: true,
            snapshot: {
              root: branchWorktreeRoot,
              headCommitSha: branchHead,
              ...(branchSnapshot == null
                ? {}
                : { workingTreeRef: branchSnapshot }),
            },
          },
    localCommitsAhead: commitState?.leftAhead ?? 0,
    worktreeCommitsAhead: commitState?.rightAhead ?? 0,
    localUncommittedDiffStats,
    worktreeUncommittedDiffStats,
  };
}

function emptySyncedBranchState(): SyncedBranchState {
  return {
    branch: null,
    base: null,
    hasConflicts: false,
  };
}

async function hasMergeConflicts(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<boolean> {
  const result = await runGitCommand({
    args: ["ls-files", "-u"],
    cwd: root,
    host,
    signal,
  });
  return result.success ? result.stdout.trim().length > 0 : false;
}

async function findWorktreeRootForBranch({
  branch,
  cwd,
  host,
  signal,
}: {
  branch: string;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<string | null> {
  return (
    (await listWorktrees({ cwd, host, signal })).find((worktree) =>
      worktree.headRef.type === "branch"
        ? worktree.headRef.string === branch
        : false,
    )?.root ?? null
  );
}

async function readHeadCommitSha(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  return readRequiredRefSha(host, root, "HEAD", signal);
}

async function readRequiredRefSha(
  host: WorkerExecutionHostClient,
  root: string,
  ref: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-parse", "--verify", "--quiet", ref],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const sha = result.stdout.trim();
  if (!isGitSha(sha)) throw Error(`Unexpected ${ref} SHA: ${sha}`);
  return sha;
}

async function readLeftRightCommitCounts({
  host,
  leftRef,
  rightRef,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  leftRef: string;
  rightRef: string;
  root: string;
  signal: AbortSignal;
}): Promise<{ leftAhead: number; rightAhead: number } | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-list", "--left-right", "--count", `${leftRef}...${rightRef}`],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const [rawLeft, rawRight] = result.stdout.trim().split(/\s+/);
  const leftAhead = Number.parseInt(rawLeft ?? "", 10);
  const rightAhead = Number.parseInt(rawRight ?? "", 10);
  return Number.isFinite(leftAhead) && Number.isFinite(rightAhead)
    ? { leftAhead, rightAhead }
    : null;
}

async function readDiffStats({
  host,
  leftRef,
  rightRef,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  leftRef: string;
  rightRef: string;
  root: string;
  signal: AbortSignal;
}): Promise<Omit<SyncedBranchDiffStats, "leftRef" | "rightRef">> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: ["diff", "--numstat", leftRef, rightRef],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout
    ? parseDiffNumstat(result.stdout)
    : emptyDiffStats();
}

function parseDiffNumstat(
  value: string,
): Omit<SyncedBranchDiffStats, "leftRef" | "rightRef"> {
  let filesChanged = 0;
  let linesAdded = 0;
  let linesRemoved = 0;
  for (const line of value.trim().split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const [rawAdded, rawRemoved, ...pathParts] = trimmed.split("\t");
    if (rawAdded == null || rawRemoved == null || pathParts.length === 0) {
      continue;
    }
    filesChanged += 1;
    linesAdded += parseNumstatCount(rawAdded);
    linesRemoved += parseNumstatCount(rawRemoved);
  }
  return { filesChanged, linesAdded, linesRemoved };
}

function emptyDiffStats(): Omit<SyncedBranchDiffStats, "leftRef" | "rightRef"> {
  return {
    filesChanged: 0,
    linesAdded: 0,
    linesRemoved: 0,
  };
}

function parseNumstatCount(value: string): number {
  if (value === "-") return 0;
  const count = Number.parseInt(value, 10);
  return Number.isFinite(count) ? count : 0;
}

async function readSyncedBranchConfig(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<SyncedBranchConfig | null> {
  const gitDir = await readGitDir(host, root, signal);
  if (gitDir == null) return null;

  const pathApi = await host.platformPath();
  const configPath = pathApi.join(gitDir, "codex-synced-branch.json");
  try {
    const contents = await new Response(
      (await host.readFile(configPath)) as unknown as BodyInit,
    ).text();
    return parseSyncedBranchConfig(contents);
  } catch {
    return null;
  }
}

async function readGitDir(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-dir"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;

  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.join(root, result.stdout);
}

function parseSyncedBranchConfig(value: string): SyncedBranchConfig | null {
  try {
    const parsed: unknown = JSON.parse(value);
    if (!isRecord(parsed)) return null;
    const { branch, lastSyncedTreeRef } = parsed;
    return typeof branch === "string" && typeof lastSyncedTreeRef === "string"
      ? { branch, lastSyncedTreeRef }
      : null;
  } catch {
    return null;
  }
}

function normalizeBranchName(branch: string): string {
  return branch.startsWith("refs/heads/") ? branch.slice(11) : branch;
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
