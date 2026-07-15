// Restored from ref/.vite/build/worker.js
// Read-only Git branch discovery, ancestry, and commit history helpers.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type BranchCommit = {
  committedAt: string;
  sha: string;
  subject: string;
};

type LeftRightCommitCounts = {
  leftAhead: number;
  rightAhead: number;
  state: "diverged" | "equal" | "left-ahead" | "right-ahead";
};

export async function readBranchCommits({
  baseBranch,
  host,
  root,
  signal,
}: {
  baseBranch: string | null;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<BranchCommit[]> {
  const mergeBase = await resolveBranchCommitBase({
    baseBranch,
    host,
    root,
    signal,
  });
  if (mergeBase == null) return [];

  const result = await runGitCommand({
    args: ["log", "--format=%H%x00%cI%x00%s", `${mergeBase}..HEAD`],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return [];

  return result.stdout
    .split("\n")
    .map(parseBranchCommitLine)
    .filter((commit): commit is BranchCommit => commit != null);
}

export async function readNearestAncestorBranch({
  candidates,
  currentBranch,
  host,
  root,
  signal,
}: {
  candidates: string[];
  currentBranch: string | null;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const filteredCandidates = normalizeNearestAncestorCandidates(
    candidates,
    currentBranch,
  );
  const candidateDistances = await Promise.all(
    filteredCandidates.map(async (branch) => {
      const counts = await readLeftRightCommitCounts(
        host,
        root,
        branch,
        "HEAD",
        signal,
      );
      return counts?.state === "right-ahead" && counts.rightAhead > 0
        ? { branch, distance: counts.rightAhead }
        : null;
    }),
  );

  let nearestBranch: string | null = null;
  let nearestDistance: number | null = null;
  for (const candidate of candidateDistances) {
    if (
      candidate != null &&
      (nearestDistance == null || candidate.distance < nearestDistance)
    ) {
      nearestBranch = candidate.branch;
      nearestDistance = candidate.distance;
    }
  }
  return nearestBranch;
}

async function resolveBranchCommitBase({
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
  if (baseBranch != null) {
    return resolveBranchishHeadMergeBase(host, root, baseBranch, signal);
  }

  const base = await readBaseBranch(host, root, signal);
  if (base == null) return null;
  const branch = base.branch.includes("/")
    ? base.branch
    : `${base.remote}/${base.branch}`;
  return resolveBranchishHeadMergeBase(host, root, branch, signal);
}

async function resolveBranchishHeadMergeBase(
  host: WorkerExecutionHostClient,
  root: string,
  branchish: string,
  signal: AbortSignal,
): Promise<string | null> {
  const trimmedBranchish = branchish.trim();
  if (!trimmedBranchish) return null;

  const remotes = await readOrderedRemotes(host, root, signal);
  const upstream = await readLocalBranchUpstream(
    host,
    root,
    trimmedBranchish,
    signal,
  );
  const candidates = branchishMergeBaseCandidates(
    trimmedBranchish,
    upstream,
    remotes,
  );

  for (const candidate of candidates) {
    const mergeBase = await readHeadMergeBase(host, root, candidate, signal);
    if (mergeBase != null) return mergeBase;
  }
  return null;
}

function branchishMergeBaseCandidates(
  branchish: string,
  upstream: string | null,
  remotes: string[],
): string[] {
  const candidates: string[] = [];
  const seen = new Set<string>();
  const addCandidate = (candidate: string | null | undefined): void => {
    const trimmed = candidate?.trim();
    if (!trimmed || seen.has(trimmed)) return;
    seen.add(trimmed);
    candidates.push(trimmed);
  };

  addCandidate(branchish);

  const firstSlash = branchish.indexOf("/");
  const branchishRemote =
    firstSlash > 0 ? branchish.slice(0, firstSlash) : null;
  const branchishRemoteTail =
    branchishRemote != null && firstSlash + 1 < branchish.length
      ? branchish.slice(firstSlash + 1)
      : null;
  const knownRemote =
    branchishRemote != null && remotes.includes(branchishRemote)
      ? branchishRemote
      : null;

  for (const remote of remotes) {
    if (knownRemote != null && remote === knownRemote) {
      addCandidate(
        branchishRemoteTail == null
          ? null
          : `refs/remotes/${remote}/${branchishRemoteTail}`,
      );
      continue;
    }
    addCandidate(`${remote}/${branchish}`);
    addCandidate(`refs/remotes/${remote}/${branchish}`);
  }

  addCandidate(upstream);
  return candidates;
}

async function readLocalBranchUpstream(
  host: WorkerExecutionHostClient,
  root: string,
  branch: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: [
      "for-each-ref",
      "--format=%(upstream:short)",
      `refs/heads/${branch}`,
    ],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout.trim() : null;
}

function normalizeNearestAncestorCandidates(
  candidates: string[],
  currentBranch: string | null,
): string[] {
  const normalized: string[] = [];
  const seen = new Set<string>();
  for (const candidate of candidates) {
    const branch = candidate.trim();
    if (!branch || branch === currentBranch || seen.has(branch)) continue;
    seen.add(branch);
    normalized.push(branch);
  }
  return normalized;
}

async function readBaseBranch(
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

async function readLeftRightCommitCounts(
  host: WorkerExecutionHostClient,
  root: string,
  leftRef: string,
  rightRef: string,
  signal: AbortSignal,
): Promise<LeftRightCommitCounts | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-list", "--left-right", "--count", `${leftRef}...${rightRef}`],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;

  const counts = parseLeftRightCounts(result.stdout);
  if (counts == null) return null;

  let state: LeftRightCommitCounts["state"] = "equal";
  if (counts.leftAhead > 0 && counts.rightAhead > 0) {
    state = "diverged";
  } else if (counts.leftAhead > 0) {
    state = "left-ahead";
  } else if (counts.rightAhead > 0) {
    state = "right-ahead";
  }
  return {
    leftAhead: counts.leftAhead,
    rightAhead: counts.rightAhead,
    state,
  };
}

function parseBranchCommitLine(line: string): BranchCommit | null {
  const [sha, committedAt, subject] = line.split("\0");
  if (!sha || !committedAt || subject == null || !isGitSha(sha)) return null;
  return { committedAt, sha, subject };
}

function parseLeftRightCounts(
  value: string,
): { leftAhead: number; rightAhead: number } | null {
  const parts = value.trim().split(/\s+/);
  if (parts.length < 2) return null;
  const leftAhead = Number.parseInt(parts[0] ?? "", 10);
  const rightAhead = Number.parseInt(parts[1] ?? "", 10);
  return Number.isFinite(leftAhead) && Number.isFinite(rightAhead)
    ? { leftAhead, rightAhead }
    : null;
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}
