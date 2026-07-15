// Restored from ref/.vite/build/worker.js
// Git worktree list reader and porcelain parser.

import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type GitWorktreeHeadRef =
  | {
      sha: string;
      type: "branch";
      string: string;
    }
  | {
      sha: string;
      type: "detached";
    };

export type GitWorktreeEntry = {
  root: string;
  prunable: boolean;
  locked: boolean;
  headRef: GitWorktreeHeadRef;
};

export type CodexWorktreeEntry = {
  dir: string;
  gitDir: string | null;
};

const SHORT_WORKTREE_PARENT_PATTERN = /^[0-9a-f]{4}$/i;
const TIMESTAMPED_WORKTREE_DIR_PATTERN = /^\d{6}-\d{4}-[0-9a-f]{8}$/i;

export async function listWorktrees({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<GitWorktreeEntry[]> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return [];

  const result = await runGitCommand({
    args: ["worktree", "list", "--porcelain"],
    cwd: metadata.root,
    host,
    signal,
  });
  if (!result.success) {
    throw Error(
      result.stderr ||
        result.stdout ||
        "Failed to list worktrees for repository",
    );
  }
  return parseWorktreePorcelain(result.stdout ?? "");
}

export async function listCodexWorktrees({
  host,
  signal,
}: {
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<CodexWorktreeEntry[]> {
  const [codexHome, pathApi] = await Promise.all([
    host.codexHome(),
    host.platformPath(),
  ]);
  if (typeof codexHome !== "string" || codexHome.length === 0) return [];

  const worktreesRoot = pathApi.join(codexHome, "worktrees");
  const parentEntries = await host
    .readDirectory(worktreesRoot)
    .catch(() => null);
  if (parentEntries == null) return [];

  const worktreeCandidates: string[] = [];
  const parentDirectories = parentEntries.filter(isDirectoryEntry);
  const childEntryGroups = await Promise.all(
    parentDirectories.map(async (parentEntry) => {
      const parentPath = pathApi.join(worktreesRoot, parentEntry.name);
      try {
        return {
          parentName: parentEntry.name,
          parentPath,
          entries: await host.readDirectory(parentPath),
        };
      } catch {
        return null;
      }
    }),
  );

  for (const group of childEntryGroups) {
    if (group == null) continue;
    const acceptsAnyChildName = SHORT_WORKTREE_PARENT_PATTERN.test(
      group.parentName,
    );
    for (const childEntry of group.entries) {
      if (!isDirectoryEntry(childEntry)) continue;
      if (
        !acceptsAnyChildName &&
        !TIMESTAMPED_WORKTREE_DIR_PATTERN.test(childEntry.name)
      ) {
        continue;
      }
      const worktreePath = pathApi.join(group.parentPath, childEntry.name);
      if (worktreePath.length > 0) worktreeCandidates.push(worktreePath);
    }
  }

  return Promise.all(
    worktreeCandidates.map(async (dir) => ({
      dir,
      gitDir: await readGitDir({ host, root: dir, signal }),
    })),
  );
}

function parseWorktreePorcelain(value: string): GitWorktreeEntry[] {
  const worktrees: GitWorktreeEntry[] = [];
  let current: GitWorktreeEntry | null = null;

  for (const line of value.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed.length === 0) {
      if (current != null) {
        worktrees.push(current);
        current = null;
      }
      continue;
    }

    if (trimmed.startsWith("worktree ")) {
      if (current != null) worktrees.push(current);
      const root = trimmed.slice("worktree ".length).trim();
      current =
        root.length === 0
          ? null
          : {
              root,
              prunable: false,
              locked: false,
              headRef: {
                sha: "",
                type: "detached",
              },
            };
      continue;
    }

    if (current == null) continue;
    if (trimmed.startsWith("HEAD ")) {
      current.headRef = {
        sha: trimmed.slice("HEAD ".length).trim(),
        type: "detached",
      };
      continue;
    }
    if (trimmed.startsWith("branch ")) {
      const branchRef = trimmed.slice("branch ".length).trim();
      current.headRef = {
        sha: current.headRef.sha,
        type: "branch",
        string: branchRef.startsWith("refs/heads/")
          ? branchRef.slice("refs/heads/".length)
          : branchRef,
      };
      continue;
    }
    if (trimmed === "detached") {
      current.headRef = {
        sha: current.headRef.sha,
        type: "detached",
      };
      continue;
    }
    if (trimmed.startsWith("prunable")) {
      current.prunable = true;
      continue;
    }
    if (trimmed.startsWith("locked")) {
      current.locked = true;
    }
  }

  if (current != null) worktrees.push(current);
  return worktrees;
}

async function readGitDir({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
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

function isDirectoryEntry(
  entry: unknown,
): entry is { name: string; isDirectory(): boolean } {
  if (typeof entry !== "object" || entry == null) return false;
  const record = entry as Record<string, unknown>;
  if (typeof record.name !== "string") return false;
  const isDirectory = record.isDirectory;
  return typeof isDirectory === "function" && isDirectory.call(entry) === true;
}
