// Restored from ref/.vite/build/worker.js
// Working-tree snapshot commit creation for create-worktree.

import { randomUUID } from "node:crypto";
import { runGitCommand } from "./git-worker-commands";
import type { GitMetadata } from "./git-worker-create-worktree-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

const emptyTreeSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";

export async function createWorkingTreeSnapshotCommit({
  host,
  metadata,
  signal,
}: {
  host: WorkerExecutionHostClient;
  metadata: GitMetadata;
  signal: AbortSignal;
}): Promise<string> {
  const indexPath = await readGitPath({
    host,
    path: "index",
    root: metadata.root,
    signal,
  });
  if (indexPath == null) throw Error("Failed to resolve git index path");
  const tempIndexPath = `${indexPath}.codex-create-worktree-${randomUUID()}`;
  const env = { GIT_INDEX_FILE: tempIndexPath };
  try {
    await initializeTemporaryIndex({
      env,
      host,
      indexPath,
      root: metadata.root,
      signal,
    });
    const addResult = await runGitCommand({
      args: ["add", "-A"],
      cwd: metadata.root,
      env,
      host,
      signal,
    });
    if (!addResult.success) {
      throw Error(
        addResult.stderr ||
          addResult.stdout ||
          "Failed to stage working tree snapshot",
      );
    }
    const treeResult = await runGitCommand({
      args: ["write-tree"],
      cwd: metadata.root,
      env,
      host,
      signal,
    });
    if (!treeResult.success || !isGitSha(treeResult.stdout)) {
      throw Error(
        treeResult.stderr ||
          treeResult.stdout ||
          "Failed to write working tree snapshot",
      );
    }
    const headSha = await readRefSha({
      host,
      ref: "HEAD",
      root: metadata.root,
      signal,
    });
    const commitArgs = ["commit-tree", treeResult.stdout.trim()];
    if (headSha != null) commitArgs.push("-p", headSha);
    commitArgs.push("-m", "Codex create-worktree working tree snapshot");
    const commitResult = await runGitCommand({
      args: commitArgs,
      cwd: metadata.root,
      host,
      signal,
    });
    if (!commitResult.success || !isGitSha(commitResult.stdout)) {
      throw Error(
        commitResult.stderr ||
          commitResult.stdout ||
          "Failed to create working tree snapshot commit",
      );
    }
    return commitResult.stdout.trim();
  } finally {
    await host.remove(tempIndexPath, { force: true }).catch(() => undefined);
  }
}

async function readRefSha({
  host,
  ref,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  ref: string;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-parse", "--verify", "--quiet", ref],
    cwd: root,
    host,
    signal,
  });
  const sha = result.success ? result.stdout.trim() : "";
  if (!sha) return null;
  if (!isGitSha(sha)) throw Error(`Unexpected ${ref} SHA: ${sha}`);
  return sha;
}

async function readGitPath({
  host,
  path,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  path: string;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-path", path],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const pathApi = await host.platformPath();
  if (pathApi.isAbsolute(result.stdout)) return result.stdout;
  if (result.stdout.startsWith(".git/"))
    return pathApi.join(root, result.stdout);
  const gitDir = await readGitDir({ host, root, signal });
  return gitDir == null ? null : pathApi.join(gitDir, result.stdout);
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
    const readHeadResult = await runGitCommand({
      args: ["read-tree", "HEAD"],
      cwd: root,
      env,
      host,
      signal,
    });
    if (!readHeadResult.success) {
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

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}
