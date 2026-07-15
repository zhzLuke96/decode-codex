// Restored from ref/.vite/build/worker.js
// Branch-level Git diff statistics for worker review summaries.

import { randomUUID } from "node:crypto";
import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type BranchDiffStats = {
  additions: number;
  deletions: number;
  fileCount: number;
};

type BaseBranch = {
  branch: string;
  remote: string;
};

type ParsedNumstatEntry = {
  additions: number | null;
  deletions: number | null;
  path: string;
  previousPath: string | null;
};

const emptyTreeSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
const repositoryBusyGitPaths = [
  "index.lock",
  "MERGE_HEAD",
  "CHERRY_PICK_HEAD",
  "REVERT_HEAD",
  "REBASE_HEAD",
  "rebase-merge",
  "rebase-apply",
  "sequencer",
];

export async function readBranchDiffStats({
  baseBranch,
  cwd,
  hideWhitespace,
  host,
  includeUntrackedFiles,
  signal,
}: {
  baseBranch: string | null;
  cwd: string;
  hideWhitespace: boolean;
  host: WorkerExecutionHostClient;
  includeUntrackedFiles: boolean;
  signal: AbortSignal;
}): Promise<BranchDiffStats | null> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return null;
  if (await hasRepositoryOperationInProgress(metadata.root, host, signal)) {
    return null;
  }

  const baseCommit = await resolveBranchDiffBase({
    baseBranch,
    host,
    root: metadata.root,
    signal,
  });
  if (baseCommit == null) return null;

  const workingTree = await writeWorkingTreeSnapshot({
    host,
    includeUntrackedFiles,
    root: metadata.root,
    signal,
  });
  if (workingTree == null) return null;

  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: [
      "diff",
      baseCommit,
      workingTree,
      ...(hideWhitespace ? ["--ignore-all-space"] : []),
      "--find-renames",
      "--numstat",
      "-z",
    ],
    cwd: metadata.root,
    host,
    signal,
    trim: false,
  });
  if (!result.success) return null;

  const entries = parseNumstat(result.stdout);
  if (entries.length === 0) return null;

  return entries.reduce<BranchDiffStats>(
    (totals, entry) => ({
      additions: totals.additions + (entry.additions ?? 0),
      deletions: totals.deletions + (entry.deletions ?? 0),
      fileCount: totals.fileCount + 1,
    }),
    { additions: 0, deletions: 0, fileCount: 0 },
  );
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

async function hasRepositoryOperationInProgress(
  root: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<boolean> {
  const paths = await Promise.all(
    repositoryBusyGitPaths.map((gitPath) =>
      readGitPath(root, gitPath, host, signal),
    ),
  );
  const states = await Promise.all(
    paths
      .filter((path): path is string => path != null)
      .map((path) => statPathState(host, path)),
  );
  return states.some((state) => state !== "missing");
}

export async function writeWorkingTreeSnapshot({
  host,
  includeUntrackedFiles,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  includeUntrackedFiles: boolean;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const indexPath = await readGitPath(root, "index", host, signal);
  if (indexPath == null) return null;

  const tempIndexPath = `${indexPath}.codex-${randomUUID()}`;
  const env = { GIT_INDEX_FILE: tempIndexPath };
  try {
    await initializeTemporaryIndex({ host, indexPath, root, signal, env });
    const addResult = await runGitCommand({
      args: ["add", includeUntrackedFiles ? "-A" : "-u"],
      cwd: root,
      env,
      host,
      signal,
    });
    if (!addResult.success) return null;

    const writeTreeResult = await runGitCommand({
      args: ["write-tree"],
      cwd: root,
      env,
      host,
      signal,
    });
    return writeTreeResult.success && isGitSha(writeTreeResult.stdout)
      ? writeTreeResult.stdout
      : null;
  } finally {
    await host.remove(tempIndexPath, { force: true }).catch(() => {});
  }
}

async function initializeTemporaryIndex({
  env,
  host,
  indexPath,
  root,
  signal,
}: {
  env: Record<string, string>;
  host: WorkerExecutionHostClient;
  indexPath: string;
  root: string;
  signal: AbortSignal;
}): Promise<void> {
  try {
    await host.copyFile(indexPath, env.GIT_INDEX_FILE);
  } catch {
    const readTreeResult = await runGitCommand({
      args: ["read-tree", "HEAD"],
      cwd: root,
      env,
      host,
      signal,
    });
    if (!readTreeResult.success) {
      await runGitCommand({
        args: ["read-tree", emptyTreeSha],
        cwd: root,
        env,
        host,
        signal,
      });
    }
  }
}

async function readGitPath(
  root: string,
  gitPath: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-path", gitPath],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;

  const pathApi = await host.platformPath();
  if (pathApi.isAbsolute(result.stdout)) return result.stdout;
  if (result.stdout.startsWith(".git/")) {
    return pathApi.join(root, result.stdout);
  }

  const gitDir = await readGitDir(root, host, signal);
  return gitDir == null ? null : pathApi.join(gitDir, result.stdout);
}

async function readGitDir(
  root: string,
  host: WorkerExecutionHostClient,
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

async function statPathState(
  host: WorkerExecutionHostClient,
  path: string,
): Promise<"exists" | "missing" | "unknown"> {
  try {
    await host.stat(path, { bypassCache: true });
    return "exists";
  } catch (error) {
    return isMissingPathError(error) ? "missing" : "unknown";
  }
}

function parseNumstat(stdout: string): ParsedNumstatEntry[] {
  const parts = stdout.split("\0").filter((part) => part.length > 0);
  const entries: ParsedNumstatEntry[] = [];
  for (let index = 0; index < parts.length; index += 1) {
    const [rawAdditions, rawDeletions, path = ""] =
      parts[index]?.split("\t") ?? [];
    if (rawAdditions == null || rawDeletions == null) continue;

    if (path.length > 0) {
      entries.push({
        additions: parseNumstatCount(rawAdditions),
        deletions: parseNumstatCount(rawDeletions),
        path,
        previousPath: null,
      });
      continue;
    }

    const previousPath = parts[index + 1];
    const renamedPath = parts[index + 2];
    if (previousPath == null || renamedPath == null) break;
    entries.push({
      additions: parseNumstatCount(rawAdditions),
      deletions: parseNumstatCount(rawDeletions),
      path: renamedPath,
      previousPath,
    });
    index += 2;
  }
  return entries;
}

function parseNumstatCount(value: string): number | null {
  if (value === "-") return null;
  const count = Number.parseInt(value, 10);
  return Number.isFinite(count) ? count : null;
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}

function isMissingPathError(error: unknown): boolean {
  return error instanceof Error
    ? ("code" in error &&
        (error.code === "ENOENT" || error.code === "ENOTDIR")) ||
        error.message.includes("ENOENT") ||
        error.message.includes("No such file or directory") ||
        error.message.includes("Not a directory")
    : false;
}
