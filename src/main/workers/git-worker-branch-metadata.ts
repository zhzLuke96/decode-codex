// Restored from ref/.vite/build/worker.js
// Git branch metadata resolver for repository-aware worker requests.

import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type BranchMetadata = {
  gitRoot: string | null;
  branch: string | null;
  baseBranch: string | null;
  baseBranchRemote: string | null;
};

type BaseBranch = {
  branch: string;
  remote: string;
};

type SyncedBranchConfig = {
  branch: string;
  lastSyncedTreeRef: string;
};

export async function readBranchMetadata({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<BranchMetadata> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) {
    return emptyBranchMetadata();
  }

  const [currentBranch, baseBranch] = await Promise.all([
    readCurrentBranch(host, metadata.root, signal),
    readBaseBranch(host, metadata.root, signal),
  ]);
  const syncedBranch =
    currentBranch == null
      ? normalizeBranchName(
          (await readSyncedBranchConfig(host, metadata.root, signal))?.branch ??
            null,
        )
      : null;

  return {
    gitRoot: metadata.root,
    branch: currentBranch ?? syncedBranch,
    baseBranch: baseBranch?.branch ?? null,
    baseBranchRemote: baseBranch?.remote ?? null,
  };
}

function emptyBranchMetadata(): BranchMetadata {
  return {
    gitRoot: null,
    branch: null,
    baseBranch: null,
    baseBranchRemote: null,
  };
}

async function readCurrentBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  const branchResult = await runGitCommand({
    args: ["rev-parse", "--abbrev-ref", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  if (
    branchResult.success &&
    branchResult.stdout &&
    branchResult.stdout !== "HEAD"
  ) {
    return branchResult.stdout;
  }

  const symbolicHeadResult = await runGitCommand({
    args: ["symbolic-ref", "--quiet", "--short", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  return symbolicHeadResult.success && symbolicHeadResult.stdout
    ? symbolicHeadResult.stdout
    : null;
}

async function readBaseBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<BaseBranch | null> {
  const remotes = await readOrderedRemotes(host, root, signal);
  for (const remote of remotes) {
    const defaultBranch = await readRemoteDefaultBranch(
      host,
      root,
      remote,
      signal,
    );
    if (defaultBranch != null) return { remote, branch: defaultBranch };

    const fallbackBranch = await readFirstExistingRemoteBranch(
      host,
      root,
      remote,
      ["main", "master"],
      signal,
    );
    if (fallbackBranch != null) return { remote, branch: fallbackBranch };
  }
  return null;
}

async function readOrderedRemotes(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string[]> {
  const result = await runGitCommand({
    args: ["remote"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return [];
  const remotes = result.stdout
    .split("\n")
    .map((remote) => remote.trim())
    .filter((remote) => remote.length > 0);
  return remotes.includes("origin") && remotes.length > 1
    ? ["origin", ...remotes.filter((remote) => remote !== "origin")]
    : remotes;
}

async function readRemoteDefaultBranch(
  host: WorkerExecutionHostClient,
  root: string,
  remote: string,
  signal: AbortSignal,
): Promise<string | null> {
  const locallyKnownResult = await runGitCommand({
    args: ["symbolic-ref", "--quiet", `refs/remotes/${remote}/HEAD`],
    cwd: root,
    host,
    signal,
  });
  if (locallyKnownResult.success && locallyKnownResult.stdout) {
    const parts = locallyKnownResult.stdout.split("/");
    return parts[parts.length - 1] ?? null;
  }

  const remoteShowResult = await runGitCommand({
    args: ["remote", "show", remote],
    cwd: root,
    host,
    signal,
    timeoutMs: 10_000,
  });
  if (!remoteShowResult.success || !remoteShowResult.stdout) return null;
  const branch = /HEAD branch:\s*(.+)/
    .exec(remoteShowResult.stdout)?.[1]
    .trim();
  return branch == null || branch === "(unknown)" ? null : branch;
}

async function readFirstExistingRemoteBranch(
  host: WorkerExecutionHostClient,
  root: string,
  remote: string,
  branches: string[],
  signal: AbortSignal,
): Promise<string | null> {
  for (const branch of branches) {
    const exists = await remoteBranchExists(host, root, remote, branch, signal);
    if (exists) return branch;
  }
  return null;
}

async function remoteBranchExists(
  host: WorkerExecutionHostClient,
  root: string,
  remote: string,
  branch: string,
  signal: AbortSignal,
): Promise<boolean> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: [
      "show-ref",
      "--verify",
      "--quiet",
      `refs/remotes/${remote}/${branch}`,
    ],
    cwd: root,
    host,
    signal,
  });
  return result.code === 0;
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

function normalizeBranchName(branch: string | null): string | null {
  return branch?.startsWith("refs/heads/") ? branch.slice(11) : branch;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
