// Restored from ref/.vite/build/worker.js
// File-copy helpers for Codex-created Git worktrees.

import { runGitCommand } from "./git-worker-commands";
import type { WorktreeCreationCallbacks } from "./git-worker-create-worktree-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export const WORKTREE_INCLUDE_FILE_NAME = ".worktreeinclude";

const agentsOverrideFileName = "AGENTS.override.md";
const copiedFilesConcurrency = 16;
const textEncoder = new TextEncoder();

export async function copyAgentsOverrideFiles({
  callbacks,
  host,
  sourceGitRoot,
  worktreeGitRoot,
}: {
  callbacks: WorktreeCreationCallbacks;
  host: WorkerExecutionHostClient;
  sourceGitRoot: string;
  worktreeGitRoot: string;
}): Promise<void> {
  const result = await runGitCommand({
    args: [
      "ls-files",
      "--others",
      "--ignored",
      "--exclude-standard",
      "-z",
      "--",
      `:(glob)**/${agentsOverrideFileName}`,
    ],
    cwd: sourceGitRoot,
    host,
    trim: false,
  });
  if (!result.success) {
    throw Error(`git ls-files failed while locating ${agentsOverrideFileName}`);
  }
  const relativePaths = Array.from(
    new Set(
      splitNulList(result.stdout).filter(
        (path) =>
          path === agentsOverrideFileName ||
          path.endsWith(`/${agentsOverrideFileName}`),
      ),
    ),
  );
  await copyRelativeFilesIntoWorktree({
    callbacks,
    host,
    label: agentsOverrideFileName,
    relativePaths,
    sourceGitRoot,
    worktreeGitRoot,
  });
}

export async function readWorktreeIncludePaths({
  host,
  signal,
  sourceGitRoot,
}: {
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  sourceGitRoot: string;
}): Promise<string[]> {
  const pathApi = await host.platformPath();
  const includePath = pathApi.join(sourceGitRoot, WORKTREE_INCLUDE_FILE_NAME);
  try {
    await host.stat(includePath);
  } catch (error) {
    if (isMissingPathError(error)) return [];
    throw error;
  }
  const [standardIgnored, includedIgnored] = await Promise.all([
    runGitCommand({
      args: ["ls-files", "--others", "--ignored", "--exclude-standard", "-z"],
      cwd: sourceGitRoot,
      host,
      signal,
      trim: false,
    }),
    runGitCommand({
      args: [
        "ls-files",
        "--others",
        "--ignored",
        `--exclude-from=${WORKTREE_INCLUDE_FILE_NAME}`,
        "-z",
      ],
      cwd: sourceGitRoot,
      host,
      signal,
      trim: false,
    }),
  ]);
  if (!standardIgnored.success || !includedIgnored.success) {
    throw Error(
      `git ls-files failed while locating ${WORKTREE_INCLUDE_FILE_NAME} files`,
    );
  }
  const standardIgnoredSet = new Set(splitNulList(standardIgnored.stdout));
  return Array.from(
    new Set(
      splitNulList(includedIgnored.stdout).filter((path) =>
        standardIgnoredSet.has(path),
      ),
    ),
  );
}

export async function copyRelativeFilesIntoWorktree({
  callbacks,
  host,
  label,
  relativePaths,
  sourceGitRoot,
  worktreeGitRoot,
}: {
  callbacks: WorktreeCreationCallbacks;
  host: WorkerExecutionHostClient;
  label: string;
  relativePaths: string[];
  sourceGitRoot: string;
  worktreeGitRoot: string;
}): Promise<number> {
  if (relativePaths.length === 0) return 0;
  const pathApi = await host.platformPath();
  let copiedCount = 0;
  const pendingPaths = [...relativePaths];
  const workers = Array.from(
    { length: Math.min(copiedFilesConcurrency, pendingPaths.length) },
    async () => {
      while (pendingPaths.length > 0) {
        const relativePath = pendingPaths.shift();
        if (relativePath == null) return;
        if (
          await copyRelativeFile({
            host,
            label,
            pathApi,
            relativePath,
            sourceGitRoot,
            worktreeGitRoot,
          })
        ) {
          copiedCount += 1;
        }
      }
    },
  );
  await Promise.all(workers);
  if (copiedCount > 0) {
    logInfo(
      callbacks,
      `Copied ${copiedCount} file${copiedCount === 1 ? "" : "s"} from ${label}\n`,
    );
  }
  return copiedCount;
}

async function copyRelativeFile({
  host,
  label,
  pathApi,
  relativePath,
  sourceGitRoot,
  worktreeGitRoot,
}: {
  host: WorkerExecutionHostClient;
  label: string;
  pathApi: Awaited<ReturnType<WorkerExecutionHostClient["platformPath"]>>;
  relativePath: string;
  sourceGitRoot: string;
  worktreeGitRoot: string;
}): Promise<boolean> {
  const sourcePath = pathApi.join(sourceGitRoot, relativePath);
  const destinationPath = pathApi.join(worktreeGitRoot, relativePath);
  try {
    if (
      !isFileMetadata(await host.stat(sourcePath, { followSymlinks: false }))
    ) {
      return false;
    }
  } catch (error) {
    if (isMissingPathError(error)) return false;
    throw error;
  }
  await ensureDestinationDirectoryInsideWorktree({
    host,
    label,
    pathApi,
    worktreeGitRoot,
    destinationDirectory: pathApi.dirname(destinationPath),
  });
  try {
    await host.copyFile(sourcePath, destinationPath, { exclusive: true });
    return true;
  } catch (error) {
    if (isAlreadyExistsError(error)) return false;
    if (
      !String(error instanceof Error ? error.message : error).includes(
        "Exclusive copy",
      )
    ) {
      throw error;
    }
    try {
      await host.stat(destinationPath, { followSymlinks: false });
      return false;
    } catch (statError) {
      if (!isMissingPathError(statError)) throw statError;
    }
    await host.copyFile(sourcePath, destinationPath);
    return true;
  }
}

async function ensureDestinationDirectoryInsideWorktree({
  destinationDirectory,
  host,
  label,
  pathApi,
  worktreeGitRoot,
}: {
  destinationDirectory: string;
  host: WorkerExecutionHostClient;
  label: string;
  pathApi: Awaited<ReturnType<WorkerExecutionHostClient["platformPath"]>>;
  worktreeGitRoot: string;
}): Promise<void> {
  let current = worktreeGitRoot;
  const relative = pathApi.relative(worktreeGitRoot, destinationDirectory);
  for (const part of relative.split(pathApi.sep).filter(Boolean)) {
    current = pathApi.join(current, part);
    try {
      if (
        isSymbolicLinkMetadata(
          await host.stat(current, { followSymlinks: false }),
        )
      ) {
        throw Error(`Cannot copy ${label} through a symlinked workspace path`);
      }
    } catch (error) {
      if (!isMissingPathError(error)) throw error;
      await host.createDirectory(destinationDirectory, { recursive: true });
      return;
    }
  }
  await host.createDirectory(destinationDirectory, { recursive: true });
}

function logInfo(callbacks: WorktreeCreationCallbacks, message: string): void {
  callbacks.onLog?.("info", textEncoder.encode(message));
}

function splitNulList(value: string): string[] {
  return value.split("\0").filter((entry) => entry.length > 0);
}

function isFileMetadata(metadata: Record<string, unknown>): boolean {
  const isFile = metadata.isFile;
  return typeof isFile === "function"
    ? isFile.call(metadata) === true
    : isFile === true;
}

function isSymbolicLinkMetadata(metadata: Record<string, unknown>): boolean {
  const isSymbolicLink = metadata.isSymbolicLink;
  return typeof isSymbolicLink === "function"
    ? isSymbolicLink.call(metadata) === true
    : isSymbolicLink === true;
}

function isMissingPathError(error: unknown): boolean {
  if (isRecord(error)) {
    return error.code === "ENOENT" || error.code === "ENOTDIR";
  }
  return (
    error instanceof Error &&
    (error.message.includes("ENOENT") ||
      error.message.includes("ENOTDIR") ||
      error.message.includes("No such file") ||
      error.message.includes("not a directory"))
  );
}

function isAlreadyExistsError(error: unknown): boolean {
  return isRecord(error)
    ? error.code === "EEXIST"
    : error instanceof Error && error.message.includes("EEXIST");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
