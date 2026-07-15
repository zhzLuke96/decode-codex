// Restored from ref/.vite/build/worker.js
// Git worktree deletion and snapshot restoration handlers.

import { createHash, randomUUID } from "node:crypto";
import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import { readConfigValueForScope } from "./git-worker-create-worktree-git";
import { readLocalEnvironmentConfig } from "./git-worker-local-environment-config";
import {
  LOCAL_ENVIRONMENT_CONFIG_KEY,
  NO_LOCAL_ENVIRONMENT_CONFIG_VALUE,
} from "./git-worker-local-environment-types";
import { runLocalEnvironmentCleanup } from "./git-worker-local-environment";
import { readStableMetadata } from "./git-worker-repo-queries";
import { GitWorkerRepoWatchManager } from "./git-worker-repo-watch";
import { setWorktreeOwnerThread } from "./git-worker-worktree-thread";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";
import { SimpleSemaphore } from "./worker-runtime-utils";

type GitWorkerRequest = {
  method: string;
  params?: unknown;
};

type DeleteWorktreeResult = {
  success: true;
  worktreeId: string;
};

type RestoreWorktreeResult = {
  success: boolean;
};

const snapshotRefPrefix = "refs/codex/snapshots";
const emptyTreeSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
const deleteSemaphoresByHost = new Map<string, SimpleSemaphore>();
const deletePromisesByKey = new Map<string, Promise<string>>();
const restorePromisesByKey = new Map<string, Promise<boolean>>();

export async function handleWorktreeMutationRequest({
  host,
  repoWatchManager,
  request,
  signal,
}: {
  host: WorkerExecutionHostClient;
  repoWatchManager: GitWorkerRepoWatchManager;
  request: GitWorkerRequest;
  signal: AbortSignal;
}): Promise<DeleteWorktreeResult | RestoreWorktreeResult> {
  const params = requireRecordParams(request);
  switch (request.method) {
    case "delete-worktree": {
      const worktree = requireStringParam(params, "worktree");
      const worktreeId = await scheduleWorktreeDelete({
        force: optionalBooleanParam(params, "force"),
        host,
        reason: requireStringParam(params, "reason", { allowEmpty: true }),
        signal,
        worktree,
      });
      repoWatchManager.unwatchRepo(worktree, host);
      return { success: true, worktreeId };
    }
    case "restore-worktree": {
      const worktreePath = requireStringParam(params, "worktreePath");
      const success = await scheduleWorktreeRestore({
        conversationId: optionalStringParam(params, "conversationId"),
        host,
        repoRoot: requireStringParam(params, "repoRoot"),
        signal,
        worktreePath,
      });
      return { success };
    }
    default:
      throw Error(`Unsupported worktree mutation method '${request.method}'`);
  }
}

async function scheduleWorktreeDelete({
  force,
  host,
  reason,
  signal,
  worktree,
}: {
  force: boolean;
  host: WorkerExecutionHostClient;
  reason: string;
  signal: AbortSignal;
  worktree: string;
}): Promise<string> {
  const key = `${host.id}|${worktree}`;
  const existing = deletePromisesByKey.get(key);
  if (existing != null) return existing;
  const promise = deleteWorktreeWithSnapshot({
    force,
    host,
    reason,
    signal,
    worktree,
  });
  deletePromisesByKey.set(key, promise);
  try {
    return await promise;
  } finally {
    deletePromisesByKey.delete(key);
  }
}

async function scheduleWorktreeRestore({
  conversationId,
  host,
  repoRoot,
  signal,
  worktreePath,
}: {
  conversationId: string | null;
  host: WorkerExecutionHostClient;
  repoRoot: string;
  signal: AbortSignal;
  worktreePath: string;
}): Promise<boolean> {
  const key = `${host.id}|${worktreePath}`;
  const existing = restorePromisesByKey.get(key);
  if (existing != null) return existing;
  const promise = restoreWorktreeFromSnapshot({
    conversationId,
    host,
    repoRoot,
    signal,
    worktreePath,
  });
  restorePromisesByKey.set(key, promise);
  try {
    return await promise;
  } finally {
    restorePromisesByKey.delete(key);
  }
}

async function deleteWorktreeWithSnapshot({
  force,
  host,
  reason,
  signal,
  worktree,
}: {
  force: boolean;
  host: WorkerExecutionHostClient;
  reason: string;
  signal: AbortSignal;
  worktree: string;
}): Promise<string> {
  const worktreeId = sha1Hex(worktree);
  try {
    await snapshotWorktree({ host, reason, signal, worktree });
  } catch (error) {
    if (reason !== "settings-delete-targeted") throw error;
  }
  await removeWorktree({ force, host, signal, worktree, worktreeId });
  return worktreeId;
}

async function snapshotWorktree({
  host,
  reason,
  signal,
  worktree,
}: {
  host: WorkerExecutionHostClient;
  reason: string;
  signal: AbortSignal;
  worktree: string;
}): Promise<{
  snapshotRef: string;
  worktreeId: string;
  repoRoot: string;
  commonDir: string;
  commitSha: string;
}> {
  const metadata = await readStableMetadata({ cwd: worktree, host, signal });
  if (metadata == null) throw Error(`Not in a git repository: ${worktree}`);

  const worktreeId = sha1Hex(worktree);
  const snapshotRef = snapshotRefForWorktreeId(worktreeId);
  const workingTreeSha = await writeWorkingTreeSnapshot({
    host,
    root: metadata.root,
    signal,
  });
  const headCommitSha = await readRefSha({
    host,
    ref: "HEAD",
    root: metadata.root,
    signal,
  });

  let commitSha = headCommitSha;
  if (headCommitSha != null) {
    const headTreeSha = await readTreeSha({
      host,
      ref: headCommitSha,
      root: metadata.root,
      signal,
    });
    if (headTreeSha.trim() !== workingTreeSha) {
      commitSha = await createSnapshotCommit({
        host,
        message: snapshotMessage(reason),
        parentSha: headCommitSha,
        root: metadata.root,
        signal,
        treeSha: workingTreeSha,
      });
    }
  } else {
    commitSha = await createSnapshotCommit({
      host,
      message: snapshotMessage(reason),
      root: metadata.root,
      signal,
      treeSha: workingTreeSha,
    });
  }

  if (commitSha == null) throw Error("Failed to compute snapshot commit");
  const updateResult = await runGitCommand({
    args: ["update-ref", snapshotRef, commitSha],
    cwd: metadata.root,
    env: { GIT_TERMINAL_PROMPT: "0" },
    host,
    signal,
  });
  if (!updateResult.success) throw Error("Failed to update ref");

  return {
    snapshotRef,
    worktreeId,
    repoRoot: metadata.root,
    commonDir: metadata.commonDir,
    commitSha,
  };
}

async function restoreWorktreeFromSnapshot({
  conversationId,
  host,
  repoRoot,
  signal,
  worktreePath,
}: {
  conversationId: string | null;
  host: WorkerExecutionHostClient;
  repoRoot: string;
  signal: AbortSignal;
  worktreePath: string;
}): Promise<boolean> {
  const snapshotRef = snapshotRefForWorktreeId(sha1Hex(worktreePath));
  const result = await runGitCommand({
    args: ["worktree", "add", "--detach", worktreePath, snapshotRef],
    cwd: repoRoot,
    env: { GIT_TERMINAL_PROMPT: "0" },
    host,
    signal,
  });
  if (!result.success) {
    throw Error(result.stderr || result.stdout || "Failed to restore worktree");
  }
  if (conversationId != null) {
    await setWorktreeOwnerThread({
      conversationId,
      host,
      signal,
      worktree: worktreePath,
    }).catch(() => undefined);
  }
  return true;
}

async function removeWorktree({
  force,
  host,
  signal,
  worktree,
  worktreeId,
}: {
  force: boolean;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  worktree: string;
  worktreeId: string;
}): Promise<void> {
  const semaphore = deleteSemaphoreForHost(host);
  await semaphore.acquire();
  try {
    await runStoredLocalEnvironmentCleanup({
      host,
      signal,
      worktree,
    });
    const args = ["worktree", "remove"];
    if (force) args.push("--force");
    args.push(worktree);
    const result = await runGitCommand({
      args,
      cwd: worktree,
      host,
      signal,
    });
    if (!result.success && !force) {
      throw Error(
        result.stderr || result.stdout || "Failed to remove worktree",
      );
    }
    if (result.success || force) await cleanupWorktreeDirectory(host, worktree);
    void worktreeId;
  } finally {
    semaphore.release();
  }
}

async function runStoredLocalEnvironmentCleanup({
  host,
  signal,
  worktree,
}: {
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  worktree: string;
}): Promise<void> {
  const configPath = await readConfigValueForScope({
    cwd: worktree,
    host,
    key: LOCAL_ENVIRONMENT_CONFIG_KEY,
    scope: "worktree",
    signal,
  });
  if (configPath == null || configPath === NO_LOCAL_ENVIRONMENT_CONFIG_VALUE) {
    return;
  }

  const localEnvironment = await readLocalEnvironmentConfig(configPath, host);
  if (localEnvironment.type === "error") return;
  if (localEnvironment.environment.cleanup == null) return;

  const cleanupResult = await runLocalEnvironmentCleanup({
    host,
    localEnvironment,
    signal,
    workspaceRoot: worktree,
  });
  if (cleanupResult?.status === "failed") {
    throw Error(cleanupResult.error ?? "Cleanup script failed");
  }
}

async function cleanupWorktreeDirectory(
  host: WorkerExecutionHostClient,
  worktree: string,
): Promise<void> {
  const pathApi = await host.platformPath();
  await host.remove(worktree, { recursive: true, force: true }).catch(() => {});
  const parent = pathApi.dirname(worktree);
  if (parent === worktree) return;
  try {
    if ((await host.readDirectory(parent)).length === 0) {
      await host.remove(parent, { recursive: true, force: true });
    }
  } catch {}
}

async function writeWorkingTreeSnapshot({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string> {
  const indexPath = await readGitPath(root, "index", host, signal);
  if (indexPath == null) throw Error("Failed to resolve git index path");
  const tempIndexPath = `${indexPath}.codex-worktree-${randomUUID()}`;
  const env = { GIT_INDEX_FILE: tempIndexPath };
  try {
    await initializeTemporaryIndex({ env, host, indexPath, root, signal });
    const addResult = await runGitCommand({
      args: ["add", "-A"],
      cwd: root,
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
    const writeTreeResult = await runGitCommand({
      args: ["write-tree"],
      cwd: root,
      env,
      host,
      signal,
    });
    if (!writeTreeResult.success || !isGitSha(writeTreeResult.stdout)) {
      throw Error(
        writeTreeResult.stderr ||
          writeTreeResult.stdout ||
          "Failed to write working tree snapshot",
      );
    }
    return writeTreeResult.stdout;
  } finally {
    await host.remove(tempIndexPath, { force: true }).catch(() => undefined);
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

async function readGitPath(
  root: string,
  path: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
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

async function readTreeSha({
  host,
  ref,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  ref: string;
  root: string;
  signal: AbortSignal;
}): Promise<string> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [128],
    args: ["rev-parse", `${ref}^{tree}`],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) {
    throw Error(result.stderr || result.stdout || "Failed to resolve tree");
  }
  return result.stdout;
}

async function createSnapshotCommit({
  host,
  message,
  parentSha,
  root,
  signal,
  treeSha,
}: {
  host: WorkerExecutionHostClient;
  message: string;
  parentSha?: string;
  root: string;
  signal: AbortSignal;
  treeSha: string;
}): Promise<string> {
  const args = ["commit-tree", treeSha];
  if (parentSha != null) args.push("-p", parentSha);
  args.push("-m", message, "-m", "Co-authored-by: Codex");
  const result = await runGitCommand({
    args,
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) {
    throw Error("Failed to create synthetic commit");
  }
  return result.stdout.trim();
}

function deleteSemaphoreForHost(
  host: WorkerExecutionHostClient,
): SimpleSemaphore {
  let semaphore = deleteSemaphoresByHost.get(host.id);
  if (semaphore == null) {
    semaphore = new SimpleSemaphore(3);
    deleteSemaphoresByHost.set(host.id, semaphore);
  }
  return semaphore;
}

function snapshotRefForWorktreeId(worktreeId: string): string {
  return `${snapshotRefPrefix}/${worktreeId}`;
}

function snapshotMessage(reason: string): string {
  return `Codex worktree snapshot: ${reason}`;
}

function sha1Hex(value: string): string {
  return createHash("sha1").update(value).digest("hex");
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}

function requireRecordParams(
  request: GitWorkerRequest,
): Record<string, unknown> {
  if (isRecord(request.params)) return request.params;
  throw Error(`Git worker method '${request.method}' requires parameters`);
}

function requireStringParam(
  params: Record<string, unknown>,
  key: string,
  options: { allowEmpty?: boolean } = {},
): string {
  const value = params[key];
  if (
    typeof value === "string" &&
    (options.allowEmpty === true || value.length > 0)
  ) {
    return value;
  }
  const requirement =
    options.allowEmpty === true ? "a string" : "a non-empty string";
  throw Error(`Git worker parameter '${key}' must be ${requirement}`);
}

function optionalStringParam(
  params: Record<string, unknown>,
  key: string,
): string | null {
  const value = params[key];
  if (value == null) return null;
  if (typeof value === "string") return value;
  throw Error(`Git worker parameter '${key}' must be a string`);
}

function optionalBooleanParam(
  params: Record<string, unknown>,
  key: string,
): boolean {
  const value = params[key];
  if (value == null) return false;
  if (typeof value === "boolean") return value;
  throw Error(`Git worker parameter '${key}' must be a boolean`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
