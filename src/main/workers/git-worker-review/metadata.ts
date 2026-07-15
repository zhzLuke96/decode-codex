// Restored from ref/.vite/build/worker.js
// Review summary metadata: file list, stats, stage counts, and revisions.

import { posix } from "node:path";
import { runGitCommand } from "../git-worker-commands";
import { readStatusSummary } from "../git-worker-status-queries";
import type { WorkerExecutionHostClient } from "../worker-execution-host-client";
import { createReviewDiffPlan } from "./diff-plan";
import { runReviewDiffCommand } from "./diff-command";

type ReviewSource = "branch" | "commit" | "staged" | "unstaged";
type ReviewFileChangeKind =
  | "added"
  | "copied"
  | "deleted"
  | "modified"
  | "renamed"
  | "type-changed"
  | "unmerged"
  | "untracked";

type RawDiffEntry = {
  newOid: string;
  oldOid: string;
  path: string;
  previousPath: string | null;
  status: string;
};

export async function readReviewSummary({
  baseBranch = null,
  commitSha = null,
  cwd,
  hideWhitespace = false,
  host,
  includeUntrackedFiles = true,
  signal,
  source,
}: {
  baseBranch?: string | null;
  commitSha?: string | null;
  cwd: string;
  hideWhitespace?: boolean;
  host: WorkerExecutionHostClient;
  includeUntrackedFiles?: boolean;
  signal: AbortSignal;
  source: ReviewSource;
}) {
  const plan = await createReviewDiffPlan({
    baseBranch,
    commitSha,
    cwd,
    host,
    includeUntrackedFiles,
    signal,
    source,
  });
  if (plan == null) return { type: "error" as const, source };

  const [files, statusSummary] = await Promise.all([
    readReviewFiles({
      diffArgs: plan.diffArgs,
      hideWhitespace,
      host,
      root: plan.root,
      signal,
      source,
      untrackedPathSet: plan.untrackedPathSet,
    }),
    readStatusSummary({ cwd: plan.root, host, signal }),
  ]);

  if (files == null || statusSummary.type !== "success") {
    return { type: "error" as const, source };
  }

  return {
    type: "success" as const,
    files,
    source,
    stageCounts: {
      stagedFileCount: statusSummary.stagedCount,
      unstagedFileCount: statusSummary.unstagedCount,
      untrackedFileCount: includeUntrackedFiles
        ? plan.untrackedPathSet.size || statusSummary.untrackedCount
        : 0,
    },
  };
}

async function readReviewFiles({
  diffArgs,
  hideWhitespace,
  host,
  root,
  signal,
  source,
  untrackedPathSet,
}: {
  diffArgs: string[];
  hideWhitespace: boolean;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
  source: ReviewSource;
  untrackedPathSet: Set<string>;
}) {
  const whitespaceArgs = hideWhitespace ? ["--ignore-all-space"] : [];
  const [nameStatus, numstat, raw] = await Promise.all([
    runReviewDiffCommand({
      args: [
        ...diffArgs,
        ...whitespaceArgs,
        "--find-renames",
        "--name-status",
        "-z",
      ],
      cwd: root,
      host,
      signal,
    }),
    runReviewDiffCommand({
      args: [
        ...diffArgs,
        ...whitespaceArgs,
        "--find-renames",
        "--numstat",
        "-z",
      ],
      cwd: root,
      host,
      signal,
    }),
    runReviewDiffCommand({
      args: [...diffArgs, ...whitespaceArgs, "--find-renames", "--raw", "-z"],
      cwd: root,
      host,
      signal,
    }),
  ]);
  if (!nameStatus.success || !numstat.success || !raw.success) return null;

  const statsByPath = new Map(
    parseNumstat(numstat.stdout).map((entry) => [
      pathKey(entry.path, entry.previousPath),
      entry,
    ]),
  );
  const rawEntries = parseRawDiffEntries(raw.stdout);
  const rawByPath = new Map(
    rawEntries.map((entry) => [pathKey(entry.path, entry.previousPath), entry]),
  );
  const files = coalesceFileChanges(
    parseNameStatus(nameStatus.stdout).map((file) => {
      const stats = statsByPath.get(pathKey(file.path, file.previousPath));
      return {
        ...file,
        changeKind:
          file.previousPath == null && untrackedPathSet.has(file.path)
            ? ("untracked" as const)
            : file.changeKind,
        additions: stats?.additions ?? null,
        deletions: stats?.deletions ?? null,
      };
    }),
  );
  const hashes = await readContentHashes({
    filePaths: files.flatMap((file) =>
      source === "staged" || file.changeKind === "deleted" ? [] : [file.path],
    ),
    host,
    root,
    signal,
  });

  return Promise.all(
    files.map(async (file) => ({
      ...file,
      revision:
        file.changeKind === "untracked"
          ? await untrackedRevision({
              contentHash: hashes.get(file.path),
              filePath: file.path,
              host,
              root,
            })
          : readRevision({
              contentHash: hashes.get(file.path),
              file,
              rawEntry: rawByPath.get(pathKey(file.path, file.previousPath)),
              source,
            }),
    })),
  );
}

function parseNameStatus(stdout: string) {
  const parts = stdout.split("\0").filter((part) => part.length > 0);
  const entries: Array<{
    changeKind: ReviewFileChangeKind;
    path: string;
    previousPath: string | null;
  }> = [];
  for (let index = 0; index < parts.length; index += 1) {
    const status = parts[index]?.[0];
    if (status == null) continue;
    const changeKind = changeKindForStatus(status);
    if (status === "R" || status === "C") {
      const previousPath = parts[index + 1];
      const path = parts[index + 2];
      if (previousPath == null || path == null) break;
      entries.push({ changeKind, path, previousPath });
      index += 2;
      continue;
    }
    const path = parts[index + 1];
    if (path == null) break;
    entries.push({ changeKind, path, previousPath: null });
    index += 1;
  }
  return entries;
}

function parseNumstat(stdout: string) {
  const parts = stdout.split("\0").filter((part) => part.length > 0);
  const entries: Array<{
    additions: number | null;
    deletions: number | null;
    path: string;
    previousPath: string | null;
  }> = [];
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

function parseRawDiffEntries(stdout: string): RawDiffEntry[] {
  const parts = stdout.split("\0").filter((part) => part.length > 0);
  const entries: RawDiffEntry[] = [];
  for (let index = 0; index < parts.length; index += 1) {
    const line = parts[index];
    if (line == null) break;
    const match = /^:\d{6} \d{6} ([0-9a-f]+) ([0-9a-f]+) ([A-Z])(?:\d+)?$/.exec(
      line,
    );
    if (match == null) continue;
    const [, oldOid, newOid, status] = match;
    if (oldOid == null || newOid == null || status == null) continue;
    if (status === "R" || status === "C") {
      const previousPath = parts[index + 1];
      const path = parts[index + 2];
      if (previousPath == null || path == null) break;
      entries.push({ newOid, oldOid, path, previousPath, status });
      index += 2;
      continue;
    }
    const path = parts[index + 1];
    if (path == null) break;
    entries.push({ newOid, oldOid, path, previousPath: null, status });
    index += 1;
  }
  return entries;
}

function coalesceFileChanges<
  T extends {
    path: string;
    previousPath: string | null;
    changeKind: ReviewFileChangeKind;
  },
>(files: T[]): T[] {
  const byPath = new Map<string, T>();
  for (const file of files) {
    const key = pathKey(file.path, file.previousPath);
    if (byPath.get(key)?.changeKind !== "unmerged") byPath.set(key, file);
  }
  return [...byPath.values()];
}

async function readContentHashes({
  filePaths,
  host,
  root,
  signal,
}: {
  filePaths: string[];
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<Map<string, string>> {
  const uniquePaths = [...new Set(filePaths)];
  if (uniquePaths.length === 0) return new Map();
  const result = await runGitCommand({
    args: ["hash-object", "--no-filters", "--", ...uniquePaths],
    cwd: root,
    host,
    signal,
  });
  if (!result.success) return new Map();
  const hashes = result.stdout.split("\n").filter((hash) => hash.length > 0);
  return hashes.length === uniquePaths.length
    ? new Map(uniquePaths.map((path, index) => [path, hashes[index] ?? ""]))
    : new Map();
}

function readRevision({
  contentHash,
  file,
  rawEntry,
  source,
}: {
  contentHash: string | undefined;
  file: {
    changeKind: ReviewFileChangeKind;
    path: string;
    previousPath: string | null;
  };
  rawEntry: RawDiffEntry | undefined;
  source: ReviewSource;
}): string {
  if (rawEntry == null) {
    return `${source}:${file.changeKind}:${file.previousPath ?? ""}:${file.path}`;
  }
  if (source === "staged" || rawEntry.status === "D") {
    return `${source}:${rawEntry.status}:${rawEntry.oldOid}:${rawEntry.newOid}`;
  }
  return contentHash != null && contentHash.length > 0
    ? `${source}:${rawEntry.status}:${rawEntry.oldOid}:worktree:${contentHash}`
    : `${source}:${rawEntry.status}:${rawEntry.oldOid}:${rawEntry.newOid}`;
}

async function untrackedRevision({
  contentHash,
  filePath,
  host,
  root,
}: {
  contentHash: string | undefined;
  filePath: string;
  host: WorkerExecutionHostClient;
  root: string;
}): Promise<string> {
  if (contentHash != null && contentHash.length > 0) {
    return `untracked:${contentHash}`;
  }
  try {
    const metadata = await host.stat(posix.join(root, filePath), {
      bypassCache: true,
    });
    const size = typeof metadata.size === "number" ? metadata.size : 0;
    const mtimeMs =
      typeof metadata.mtimeMs === "number" ? Math.floor(metadata.mtimeMs) : 0;
    return `untracked:${size}:${mtimeMs}`;
  } catch {
    return `untracked:${filePath}`;
  }
}

function parseNumstatCount(value: string): number | null {
  if (value === "-") return null;
  const count = Number.parseInt(value, 10);
  return Number.isFinite(count) ? count : null;
}

function changeKindForStatus(status: string): ReviewFileChangeKind {
  switch (status) {
    case "A":
      return "added";
    case "D":
      return "deleted";
    case "R":
      return "renamed";
    case "C":
      return "copied";
    case "T":
      return "type-changed";
    case "U":
      return "unmerged";
    default:
      return "modified";
  }
}

function pathKey(path: string, previousPath: string | null): string {
  return `${previousPath ?? ""}\0${path}`;
}
