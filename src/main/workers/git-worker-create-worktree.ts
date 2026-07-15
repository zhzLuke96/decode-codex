// Restored from ref/.vite/build/worker.js
// Git worktree creation request handling and top-level orchestration.

import { runGitCommand } from "./git-worker-commands";
import { randomUUID } from "node:crypto";
import { readDefaultBranch } from "./git-worker-branch-base";
import { readCurrentBranch } from "./git-worker-current-branch";
import {
  copyAgentsOverrideFiles,
  copyRelativeFilesIntoWorktree,
  readWorktreeIncludePaths,
  WORKTREE_INCLUDE_FILE_NAME,
} from "./git-worker-create-worktree-files";
import {
  removeGitPath,
  readSafeAttributeFilterOverrides,
  readTreeSha,
  removeFailedWorktree,
  storeConfigValueForScope,
  writeJsonToGitPath,
} from "./git-worker-create-worktree-git";
import { createWorkingTreeSnapshotCommit } from "./git-worker-create-worktree-snapshot";
import { readLocalEnvironmentConfig } from "./git-worker-local-environment-config";
import {
  LOCAL_ENVIRONMENT_CONFIG_KEY,
  NO_LOCAL_ENVIRONMENT_CONFIG_VALUE,
  SHELL_ENVIRONMENT_GIT_PATH,
  SOURCE_TREE_ENV_VAR,
  WORKTREE_ENV_VAR,
} from "./git-worker-local-environment-types";
import { runLocalEnvironmentSetup } from "./git-worker-local-environment";
import type {
  CreateWorktreeResult,
  CreateWorktreeStartingState,
  GitMetadata,
  WorktreeCreationCallbacks,
} from "./git-worker-create-worktree-types";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type GitWorkerRequest = {
  id: string;
  method: string;
  params?: unknown;
};

type WorktreePathAllocation = {
  success: true;
  worktreeGitRoot: string;
  worktreeWorkspaceRoot: string;
};

const textEncoder = new TextEncoder();

export async function handleCreateWorktreeRequest({
  emit,
  host,
  request,
  signal,
}: {
  emit(event: unknown): void;
  host: WorkerExecutionHostClient;
  request: GitWorkerRequest;
  signal: AbortSignal;
}): Promise<CreateWorktreeResult> {
  const params = requireRecordParams(request);
  const streamId = optionalStringParam(params, "streamId") ?? request.id;

  return createWorktree({
    allowSetupFailure: optionalBooleanParam(params, "allowSetupFailure"),
    callbacks: {
      onLog: (stream, data) => {
        if (signal.aborted) return;
        emit({
          type: "create-worktree-stream",
          streamId,
          stream,
          data,
        });
      },
      onSetupStart: () => {
        if (signal.aborted) return;
        emit({ type: "create-worktree-setup-started", streamId });
      },
      onWorktreePathAllocated: (worktreeGitRoot) => {
        if (signal.aborted) return;
        emit({
          type: "create-worktree-path",
          hostId: host.id,
          streamId,
          worktreeGitRoot,
        });
      },
    },
    host,
    localEnvironmentConfigPath: optionalStringParam(
      params,
      "localEnvironmentConfigPath",
    ),
    setUpSyncedBranch: params.setUpSyncedBranch !== false,
    signal,
    startingState: requireStartingState(params.startingState),
    workspaceRoot: requireStringParam(params, "cwd"),
  });
}

export async function createWorktree({
  allowSetupFailure,
  callbacks,
  host,
  localEnvironmentConfigPath,
  setUpSyncedBranch,
  signal,
  startingState,
  workspaceRoot,
}: {
  allowSetupFailure: boolean;
  callbacks: WorktreeCreationCallbacks;
  host: WorkerExecutionHostClient;
  localEnvironmentConfigPath: string | null;
  setUpSyncedBranch: boolean;
  signal: AbortSignal;
  startingState: CreateWorktreeStartingState;
  workspaceRoot: string;
}): Promise<CreateWorktreeResult> {
  if (signal.aborted) return failedCreateWorktree("Request canceled");

  const metadata = await readStableMetadata({
    cwd: workspaceRoot,
    host,
    signal,
  });
  if (metadata == null) return failedCreateWorktree("Not a git repository");
  if (signal.aborted) return failedCreateWorktree("Request canceled");

  const [startingBranch, defaultBranch] = await Promise.all([
    resolveStartingBranchName({
      host,
      metadata,
      signal,
      startingState,
    }),
    readDefaultBranch(host, metadata.root, signal).catch(() => null),
  ]);
  const shouldSetUpSyncedBranch =
    setUpSyncedBranch &&
    startingBranch != null &&
    defaultBranch != null &&
    startingBranch !== defaultBranch;

  await ensureWorktreeRoot(host);
  const allocation = await allocateWorktreePath({
    host,
    sourceGitRoot: metadata.root,
    workspaceRoot,
    signal,
  });
  if (!allocation.success) {
    return failedCreateWorktree("Failed to compute worktree path");
  }
  if (signal.aborted) return failedCreateWorktree("Request canceled");

  callbacks.onWorktreePathAllocated?.(allocation.worktreeGitRoot);
  const addResult = await addWorktree({
    callbacks,
    host,
    metadata,
    signal,
    startingState,
    worktreeGitRoot: allocation.worktreeGitRoot,
  });
  if (!addResult.success) return addResult;
  if (signal.aborted) return failedCreateWorktree("Request canceled");

  if (host.isLocal) {
    await copyAgentsOverrideFiles({
      callbacks,
      host,
      sourceGitRoot: metadata.root,
      worktreeGitRoot: allocation.worktreeGitRoot,
    });
    const worktreeIncludePaths = await readWorktreeIncludePaths({
      host,
      sourceGitRoot: metadata.root,
      signal,
    });
    await copyRelativeFilesIntoWorktree({
      callbacks,
      host,
      label: WORKTREE_INCLUDE_FILE_NAME,
      relativePaths: worktreeIncludePaths,
      sourceGitRoot: metadata.root,
      worktreeGitRoot: allocation.worktreeGitRoot,
    });
  }

  if (shouldSetUpSyncedBranch && startingBranch != null) {
    await writeSyncedBranchConfig({
      branch: refNameForBranch(startingBranch),
      host,
      root: allocation.worktreeGitRoot,
      signal,
      sourceRoot: metadata.root,
    }).catch(() => undefined);
  }

  logInfo(
    callbacks,
    `Worktree created at ${allocation.worktreeWorkspaceRoot}\n`,
  );

  const storedConfig = await storeConfigValueForScope({
    cwd: allocation.worktreeWorkspaceRoot,
    host,
    key: LOCAL_ENVIRONMENT_CONFIG_KEY,
    scope: "worktree",
    signal,
    value: localEnvironmentConfigPath ?? NO_LOCAL_ENVIRONMENT_CONFIG_VALUE,
  });
  if (!storedConfig) {
    logStderr(
      callbacks,
      "Failed to store selected environment in git config\n",
    );
  }

  if (localEnvironmentConfigPath == null) {
    logInfo(callbacks, "No local environment selected\n");
    return {
      success: true,
      worktreeGitRoot: allocation.worktreeGitRoot,
      worktreeWorkspaceRoot: allocation.worktreeWorkspaceRoot,
      setupResult: null,
      setupError: null,
    };
  }

  callbacks.onSetupStart?.();
  const localEnvironment = await readLocalEnvironmentConfig(
    localEnvironmentConfigPath,
    host,
  );
  if (localEnvironment.type === "error") {
    logStderr(callbacks, `${localEnvironment.error.message}\n`);
    if (!allowSetupFailure) {
      return { success: false, error: localEnvironment.error };
    }
    return {
      success: true,
      worktreeGitRoot: allocation.worktreeGitRoot,
      worktreeWorkspaceRoot: allocation.worktreeWorkspaceRoot,
      setupResult: null,
      setupError: localEnvironment.error.message,
    };
  }

  logInfo(callbacks, `Running setup script ${localEnvironment.configPath}\n`);
  const setup = await runLocalEnvironmentSetup({
    host,
    injectedEnvironment: {
      [SOURCE_TREE_ENV_VAR]: workspaceRoot,
      [WORKTREE_ENV_VAR]: allocation.worktreeWorkspaceRoot,
    },
    localEnvironment,
    onLog: (stream, data) => callbacks.onLog?.(stream, data),
    signal,
    workspaceRoot: allocation.worktreeGitRoot,
  });
  if (signal.aborted) return failedCreateWorktree("Request canceled");

  const setupResult = setup?.setupResult ?? null;
  if (setupResult?.status === "failed") {
    const setupError = Error(setupResult.error ?? "Setup script failed");
    logStderr(callbacks, `${setupResult.error ?? "Setup script failed"}\n`);
    if (!allowSetupFailure) return { success: false, error: setupError };
    return {
      success: true,
      worktreeGitRoot: allocation.worktreeGitRoot,
      worktreeWorkspaceRoot: allocation.worktreeWorkspaceRoot,
      setupResult,
      setupError: setupError.message,
    };
  }

  if (setupResult?.status === "succeeded") {
    logInfo(callbacks, "Setup script completed\n");
  }

  try {
    if (setup?.shellEnvironment == null) {
      await removeGitPath({
        host,
        path: SHELL_ENVIRONMENT_GIT_PATH,
        root: allocation.worktreeGitRoot,
        signal,
      });
    } else {
      await writeJsonToGitPath({
        contents: setup.shellEnvironment,
        host,
        path: SHELL_ENVIRONMENT_GIT_PATH,
        root: allocation.worktreeGitRoot,
        signal,
      });
    }
  } catch (error) {
    logStderr(
      callbacks,
      `Failed to store worktree shell environment: ${String(error)}\n`,
    );
  }

  return {
    success: true,
    worktreeGitRoot: allocation.worktreeGitRoot,
    worktreeWorkspaceRoot: allocation.worktreeWorkspaceRoot,
    setupResult,
    setupError: null,
  };
}

async function addWorktree({
  callbacks,
  host,
  metadata,
  signal,
  startingState,
  worktreeGitRoot,
}: {
  callbacks: WorktreeCreationCallbacks;
  host: WorkerExecutionHostClient;
  metadata: GitMetadata;
  signal: AbortSignal;
  startingState: CreateWorktreeStartingState;
  worktreeGitRoot: string;
}): Promise<CreateWorktreeResult> {
  try {
    const startingRef = await resolveStartingRef({
      host,
      metadata,
      signal,
      startingState,
    });
    const configOverrides = await readSafeAttributeFilterOverrides({
      host,
      root: metadata.root,
      signal,
    });
    const result = await runGitCommand({
      args: ["worktree", "add", "--detach", worktreeGitRoot, startingRef],
      configOverrides,
      cwd: metadata.root,
      host,
      signal,
      trim: false,
    });
    emitCommandOutput(callbacks, result.stdout, result.stderr);
    if (!result.success) {
      await removeFailedWorktree(host, worktreeGitRoot);
      return failedCreateWorktree(
        `git worktree add failed: ${result.stderr || result.stdout}`,
      );
    }
    return {
      success: true,
      worktreeGitRoot,
      worktreeWorkspaceRoot: worktreeGitRoot,
      setupResult: null,
      setupError: null,
    };
  } catch (error) {
    await removeFailedWorktree(host, worktreeGitRoot);
    return {
      success: false,
      error: error instanceof Error ? error : Error(String(error)),
    };
  }
}

async function resolveStartingRef({
  host,
  metadata,
  signal,
  startingState,
}: {
  host: WorkerExecutionHostClient;
  metadata: GitMetadata;
  signal: AbortSignal;
  startingState: CreateWorktreeStartingState;
}): Promise<string> {
  if (startingState.type === "branch") {
    return startingState.branchName === "HEAD"
      ? ((await readCurrentBranch(host, metadata.root, signal)) ?? "HEAD")
      : startingState.branchName;
  }
  return createWorkingTreeSnapshotCommit({ host, metadata, signal });
}

async function resolveStartingBranchName({
  host,
  metadata,
  signal,
  startingState,
}: {
  host: WorkerExecutionHostClient;
  metadata: GitMetadata;
  signal: AbortSignal;
  startingState: CreateWorktreeStartingState;
}): Promise<string | null> {
  if (startingState.type === "branch") {
    if (startingState.branchName === "HEAD") {
      return readCurrentBranch(host, metadata.root, signal);
    }
    return startingState.branchName;
  }
  return readCurrentBranch(host, metadata.root, signal);
}

async function ensureWorktreeRoot(
  host: WorkerExecutionHostClient,
): Promise<void> {
  if (!host.isLocal) return;
  const [codexHome, platformOs, pathApi] = await Promise.all([
    host.codexHome(),
    host.platformOs(),
    host.platformPath(),
  ]);
  const worktreesRoot = pathApi.join(String(codexHome), "worktrees");
  await host.createDirectory(worktreesRoot, { recursive: true });
  if (platformOs === "macos") {
    await host
      .writeFile(pathApi.join(worktreesRoot, ".metadata_never_index"), "")
      .catch(() => undefined);
  }
}

async function allocateWorktreePath({
  host,
  signal,
  sourceGitRoot,
  workspaceRoot,
}: {
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  sourceGitRoot: string;
  workspaceRoot: string;
}): Promise<WorktreePathAllocation | { success: false }> {
  const metadata = await readStableMetadata({
    cwd: workspaceRoot,
    host,
    signal,
  });
  if (metadata?.root == null) return { success: false };

  const pathApi = await host.platformPath();
  const codexWorktreesRoot = pathApi.join(
    String(await host.codexHome()),
    "worktrees",
  );
  const shortId = randomUUID().split("-")[0]?.slice(0, 4) ?? "0000";
  const sourceName = pathApi.basename(sourceGitRoot);
  const worktreeGitRoot = pathApi.join(codexWorktreesRoot, shortId, sourceName);
  const rootRelativeCwd = await readRootRelativeCwd({
    cwd: workspaceRoot,
    host,
    root: metadata.root,
    signal,
  });
  return {
    success: true,
    worktreeGitRoot,
    worktreeWorkspaceRoot:
      rootRelativeCwd.length === 0
        ? worktreeGitRoot
        : pathApi.join(worktreeGitRoot, rootRelativeCwd),
  };
}

async function readRootRelativeCwd({
  cwd,
  host,
  root,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string> {
  const result = await runGitCommand({
    args: ["rev-parse", "--show-prefix"],
    cwd,
    host,
    signal,
  });
  if (!result.success) {
    throw Error(
      result.stderr ||
        result.stdout ||
        "Failed to resolve git-root-relative cwd",
    );
  }
  void root;
  return result.stdout.replace(/\/+$/, "");
}

async function writeSyncedBranchConfig({
  branch,
  host,
  root,
  signal,
  sourceRoot,
}: {
  branch: string;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
  sourceRoot: string;
}): Promise<void> {
  const lastSyncedTreeRef = await readTreeSha({
    host,
    ref: branch,
    root: sourceRoot,
    signal,
  });
  await writeJsonToGitPath({
    contents: { branch, lastSyncedTreeRef },
    host,
    path: "codex-synced-branch.json",
    root,
    signal,
  });
}

function emitCommandOutput(
  callbacks: WorktreeCreationCallbacks,
  stdout: string,
  stderr: string,
): void {
  if (stdout.length > 0)
    callbacks.onLog?.("stdout", textEncoder.encode(stdout));
  if (stderr.length > 0)
    callbacks.onLog?.("stderr", textEncoder.encode(stderr));
}

function logInfo(callbacks: WorktreeCreationCallbacks, message: string): void {
  callbacks.onLog?.("info", textEncoder.encode(message));
}

function logStderr(
  callbacks: WorktreeCreationCallbacks,
  message: string,
): void {
  callbacks.onLog?.("stderr", textEncoder.encode(message));
}

function refNameForBranch(branch: string): string {
  return branch.startsWith("refs/") ? branch : `refs/heads/${branch}`;
}

function failedCreateWorktree(message: string): CreateWorktreeResult {
  return { success: false, error: Error(message) };
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

function requireStartingState(value: unknown): CreateWorktreeStartingState {
  if (!isRecord(value)) {
    throw Error("Git worker parameter 'startingState' must be an object");
  }
  if (value.type === "working-tree") return { type: "working-tree" };
  if (value.type === "branch") {
    const branchName = value.branchName;
    if (typeof branchName === "string" && branchName.length > 0) {
      return { type: "branch", branchName };
    }
  }
  throw Error("Git worker parameter 'startingState' is invalid");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
