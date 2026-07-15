// Restored from ref/.vite/build/worker.js
// Base/upstream branch resolution and ahead-count helpers for Git worker requests.

import { readCurrentBranch } from "./git-worker-current-branch";
import { readRecentBranches } from "./git-worker-branch-search";
import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function readUpstreamBranchResult(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<{ branch: string | null; upstream: { branch: string } | null }> {
  const branch = await readCurrentBranch(host, root, signal);
  const upstreamBranch = await readUpstreamBranch(
    host,
    root,
    branch ?? "HEAD",
    signal,
  );
  return upstreamBranch
    ? { branch, upstream: { branch: upstreamBranch } }
    : { branch, upstream: null };
}

export async function readDefaultBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  return (
    (await readBaseBranch(host, root, signal))?.branch ??
    (await readRecentBranches({ host, limit: 10, root, signal })).find(
      (branch) => branch === "main" || branch === "master",
    ) ??
    null
  );
}

export async function readBaseBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<{ remote: string; branch: string } | null> {
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

export async function readBranchAheadCount(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<number> {
  const baseBranch = await readBaseBranch(host, root, signal);
  const remotes = await readOrderedRemotes(host, root, signal);
  const remote = baseBranch?.remote ?? remotes[0] ?? null;
  const currentBranch = await readCurrentBranch(host, root, signal);
  const upstreamBranch = await readUpstreamBranch(
    host,
    root,
    currentBranch ?? "HEAD",
    signal,
  );

  const [aheadOfUpstream, aheadOfRemote, aheadOfBase] = await Promise.all([
    upstreamBranch == null
      ? Promise.resolve(0)
      : readCommitCount(host, root, [`${upstreamBranch}..HEAD`], signal).then(
          (count) => count ?? 0,
        ),
    remote == null
      ? Promise.resolve(null)
      : readCommitCount(
          host,
          root,
          ["HEAD", "--not", `--remotes=${remote}`],
          signal,
        ),
    (async () => {
      if (baseBranch == null) return 0;
      const candidate = baseBranch.branch.includes("/")
        ? baseBranch.branch
        : remote != null
          ? `${remote}/${baseBranch.branch}`
          : baseBranch.branch;
      const mergeBase = await readHeadMergeBase(host, root, candidate, signal);
      return mergeBase == null
        ? 0
        : ((await readCommitCount(
            host,
            root,
            [`${mergeBase}..HEAD`],
            signal,
          )) ?? 0);
    })(),
  ]);

  if (aheadOfRemote == null) {
    return upstreamBranch != null ? aheadOfUpstream : aheadOfBase;
  }
  return aheadOfRemote;
}

async function readUpstreamBranch(
  host: WorkerExecutionHostClient,
  root: string,
  branch: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: [
      "rev-parse",
      "--abbrev-ref",
      "--symbolic-full-name",
      `${branch}@{u}`,
    ],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout : null;
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

async function readHeadMergeBase(
  host: WorkerExecutionHostClient,
  root: string,
  ref: string,
  signal: AbortSignal,
): Promise<string | null> {
  const resolvedRef = await resolveGitRef(host, root, ref, signal);
  if (resolvedRef == null) return null;
  const result = await runGitCommand({
    args: ["merge-base", "HEAD", ref],
    cwd: root,
    host,
    signal,
  });
  return result.success && isGitSha(result.stdout) ? result.stdout : null;
}

async function resolveGitRef(
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
  return result.success && isGitSha(result.stdout) ? result.stdout : null;
}

async function readCommitCount(
  host: WorkerExecutionHostClient,
  root: string,
  args: string[],
  signal: AbortSignal,
): Promise<number | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-list", "--count", ...args],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const count = Number.parseInt(result.stdout, 10);
  return Number.isNaN(count) ? null : count;
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}
