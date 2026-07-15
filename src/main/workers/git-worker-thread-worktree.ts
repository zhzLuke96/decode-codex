// Restored from ref/.vite/build/worker.js
// Resolve Codex-managed Git worktrees for a conversation owner thread.

import { posix } from "node:path";
import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import { readStatusSummary } from "./git-worker-status-queries";
import { readWorktreeOwnerThread } from "./git-worker-worktree-thread";
import { listWorktrees } from "./git-worker-worktrees";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type ThreadWorktreeResolution = {
  worktreeGitRoot: string | null;
  worktreeWorkspaceRoot: string | null;
  hasUncommittedChanges: boolean;
};

type StableGitMetadata = {
  commonDir: string;
  root: string;
};

type WorktreeCandidate = {
  sortTimestamp: number;
  worktreeGitRoot: string;
  worktreeWorkspaceRoot: string;
};

const defaultCodexHome = "/.codex";

export async function resolveWorktreeForThread({
  conversationId,
  cwd,
  host,
  signal,
  threadCwd,
}: {
  conversationId: string;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  threadCwd: string | null;
}): Promise<ThreadWorktreeResolution> {
  const repositoryMetadata = await readStableMetadata({ cwd, host, signal });
  if (repositoryMetadata == null) return emptyThreadWorktreeResolution();

  const codexHome = await readRemoteCodexHome(host);
  const pathApi = await host.platformPath();
  const rootRelativeCwd = await readRootRelativeCwd({
    cwd,
    host,
    signal,
  });

  if (threadCwd != null && (host.isLocal || codexHome != null)) {
    const directWorktree = await resolveDirectThreadCwdWorktree({
      codexHome,
      cwdMetadata: repositoryMetadata,
      host,
      pathApi,
      rootRelativeCwd,
      signal,
      threadCwd,
    });
    if (directWorktree != null) {
      return readThreadWorktreeResolution({
        host,
        signal,
        worktreeGitRoot: directWorktree.root,
        worktreeWorkspaceRoot: directWorktree.workspaceRoot,
      });
    }
  }

  const matchingWorktrees = (
    await Promise.all(
      (await listWorktrees({ cwd, host, signal })).map(async (worktree) => {
        if (!host.isLocal && codexHome == null) return null;
        if (!isInsideCodexWorktrees(worktree.root, codexHome)) return null;

        const ownerThread = await readWorktreeOwnerThread({
          host,
          signal,
          worktree: worktree.root,
        });
        if (ownerThread?.ownerThreadId !== conversationId) return null;

        return {
          worktreeGitRoot: worktree.root,
          worktreeWorkspaceRoot:
            rootRelativeCwd.length > 0
              ? pathApi.join(worktree.root, rootRelativeCwd)
              : worktree.root,
          sortTimestamp: await readWorktreeSortTimestamp(host, worktree.root),
        };
      }),
    )
  ).filter((candidate): candidate is WorktreeCandidate => candidate != null);

  if (matchingWorktrees.length === 0) return emptyThreadWorktreeResolution();

  matchingWorktrees.sort((left, right) =>
    left.sortTimestamp === right.sortTimestamp
      ? right.worktreeGitRoot.localeCompare(left.worktreeGitRoot)
      : right.sortTimestamp - left.sortTimestamp,
  );

  const bestWorktree = matchingWorktrees[0];
  return readThreadWorktreeResolution({
    host,
    signal,
    worktreeGitRoot: bestWorktree.worktreeGitRoot,
    worktreeWorkspaceRoot: bestWorktree.worktreeWorkspaceRoot,
  });
}

async function resolveDirectThreadCwdWorktree({
  codexHome,
  cwdMetadata,
  host,
  pathApi,
  rootRelativeCwd,
  signal,
  threadCwd,
}: {
  codexHome: string | null;
  cwdMetadata: StableGitMetadata;
  host: WorkerExecutionHostClient;
  pathApi: Awaited<ReturnType<WorkerExecutionHostClient["platformPath"]>>;
  rootRelativeCwd: string;
  signal: AbortSignal;
  threadCwd: string;
}): Promise<{ root: string; workspaceRoot: string } | null> {
  const threadMetadata = await readStableMetadata({
    cwd: threadCwd,
    host,
    signal,
  });
  if (
    threadMetadata == null ||
    threadMetadata.commonDir !== cwdMetadata.commonDir ||
    !isInsideCodexWorktrees(threadMetadata.root, codexHome)
  ) {
    return null;
  }

  return {
    root: threadMetadata.root,
    workspaceRoot:
      rootRelativeCwd.length > 0
        ? pathApi.join(threadMetadata.root, rootRelativeCwd)
        : threadMetadata.root,
  };
}

async function readThreadWorktreeResolution({
  host,
  signal,
  worktreeGitRoot,
  worktreeWorkspaceRoot,
}: {
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  worktreeGitRoot: string;
  worktreeWorkspaceRoot: string;
}): Promise<ThreadWorktreeResolution> {
  const status = await readStatusSummary({
    cwd: worktreeGitRoot,
    host,
    signal,
  });
  return {
    worktreeGitRoot,
    worktreeWorkspaceRoot,
    hasUncommittedChanges:
      status.type === "success" &&
      status.stagedCount + status.unstagedCount + status.untrackedCount > 0,
  };
}

async function readRootRelativeCwd({
  cwd,
  host,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<string> {
  const result = await runGitCommand({
    args: ["rev-parse", "--show-prefix"],
    cwd,
    host,
    signal,
  });
  if (result.success) return result.stdout.replace(/\/+$/, "");
  throw Error(
    `Failed to resolve git-root-relative cwd: ${
      result.stderr || result.stdout || "Unknown error"
    }`,
  );
}

async function readWorktreeSortTimestamp(
  host: WorkerExecutionHostClient,
  worktreeRoot: string,
): Promise<number> {
  try {
    const metadata = await host.stat(worktreeRoot);
    const birthtimeMs = Number(metadata.birthtimeMs);
    if (birthtimeMs > 0) return birthtimeMs;
    const mtimeMs = Number(metadata.mtimeMs);
    return mtimeMs > 0 ? mtimeMs : 0;
  } catch {
    return 0;
  }
}

async function readRemoteCodexHome(
  host: WorkerExecutionHostClient,
): Promise<string | null> {
  if (host.isLocal) return null;
  try {
    const codexHome = await host.codexHome();
    return typeof codexHome === "string" && codexHome.length > 0
      ? codexHome
      : null;
  } catch {
    return null;
  }
}

function isInsideCodexWorktrees(
  candidatePath: string,
  codexHome: string | null,
): boolean {
  if (candidatePath.length === 0) return false;
  const codexWorktreesRoot = normalizeCodexPath(
    posix.join(
      normalizeCodexPath(codexHome ?? readLocalCodexHome()),
      "worktrees",
    ),
  );
  return normalizeCodexPath(candidatePath).includes(codexWorktreesRoot);
}

function readLocalCodexHome(): string {
  if (process.env.CODEX_HOME != null && process.env.CODEX_HOME.length > 0) {
    return normalizePosixPath(process.env.CODEX_HOME);
  }
  if (process.env.HOME != null && process.env.HOME.length > 0) {
    return posix.join(normalizePosixPath(process.env.HOME), ".codex");
  }
  return defaultCodexHome;
}

function normalizeCodexPath(value: string): string {
  const normalized = normalizePosixPath(value);
  return isWindowsLikePath(value) ? normalized.toLowerCase() : normalized;
}

function normalizePosixPath(value: string): string {
  return posix.normalize(value.replaceAll("\\", "/"));
}

function isWindowsLikePath(value: string): boolean {
  return (
    /^[a-zA-Z]:[\\/]/.test(value) ||
    value.startsWith("//") ||
    value.startsWith("\\\\")
  );
}

function emptyThreadWorktreeResolution(): ThreadWorktreeResolution {
  return {
    worktreeGitRoot: null,
    worktreeWorkspaceRoot: null,
    hasUncommittedChanges: false,
  };
}
