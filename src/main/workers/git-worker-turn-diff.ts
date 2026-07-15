// Restored from ref/.vite/build/worker.js
// Turn diff capture snapshots backed by refs/codex/turn-diffs.

import { createHash, randomUUID } from "node:crypto";
import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type GitWorkerRequest = {
  method: string;
  params?: unknown;
};

type TurnDiffCapture = {
  baseTreeSha: string;
  baseTurnHeadTreeSha: string | null;
  checkpointRefPrefix: string;
  checkpointScopeRefPrefix: string;
  refPrefix: string;
  root: string;
};

type TurnDiff = {
  type: "success";
  unifiedDiff: string;
  unifiedDiffBytes: number;
};

type TurnDiffError = {
  type: "error";
  error: { type: "diff-too-large"; limitBytes: number } | { type: "unknown" };
};

type TurnDiffCaptureCompleteResult = {
  baseTreeSha: string;
  baseTurnHeadTreeSha: string | null;
  betweenTurnDiff: TurnDiff | TurnDiffError | null;
  diff: TurnDiff | TurnDiffError;
  headTreeSha: string;
};

const captureRefPrefix = "refs/codex/turn-diffs/captures";
const checkpointRefPrefix = "refs/codex/turn-diffs/checkpoints";
const captureTtlMs = 24 * 60 * 60 * 1_000;
const checkpointTtlMs = 7 * 24 * 60 * 60 * 1_000;
const maxTurnDiffBytes = 1024 * 1024;
const emptyTreeSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
const pendingCheckpointWrites = new Map<string, Promise<void>>();

const diffConfigOverrides = [
  "-c",
  "diff.mnemonicPrefix=false",
  "-c",
  "diff.noprefix=false",
  "-c",
  "core.quotePath=false",
];
const diffBaseArgs = [
  "diff",
  "--no-ext-diff",
  "--no-textconv",
  "--color=never",
  "--src-prefix=a/",
  "--dst-prefix=b/",
];

export async function handleTurnDiffCaptureRequest({
  host,
  request,
  signal,
}: {
  host: WorkerExecutionHostClient;
  request: GitWorkerRequest;
  signal: AbortSignal;
}): Promise<TurnDiffCapture | TurnDiffCaptureCompleteResult | null> {
  switch (request.method) {
    case "turn-diff-capture-start":
      return startTurnDiffCapture({
        host,
        params: requireRecordParams(request),
        signal,
      });
    case "turn-diff-capture-complete":
      return completeTurnDiffCapture({
        host,
        params: requireRecordParams(request),
        signal,
      });
    default:
      throw Error(`Unsupported turn diff method '${request.method}'`);
  }
}

async function startTurnDiffCapture({
  host,
  params,
  signal,
}: {
  host: WorkerExecutionHostClient;
  params: Record<string, unknown>;
  signal: AbortSignal;
}): Promise<TurnDiffCapture | null> {
  const cwd = requireStringParam(params, "cwd");
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) return null;

  const baseTreeSha = await writeWorkingTreeSnapshot({
    host,
    root: metadata.root,
    signal,
  });
  const nowMs = Date.now();
  const refPrefix = `${captureRefPrefix}/${nowMs}/${randomUUID()}`;
  const checkpointScopeRefPrefix = `${checkpointRefPrefix}/${hashRefSegment(
    requireStringParam(params, "checkpointKey"),
  )}`;
  const checkpointRefPrefixForTurn = `${checkpointScopeRefPrefix}/${hashRefSegment(
    requireStringParam(params, "turnId"),
  )}`;
  await retainTreeRef({
    host,
    ref: `${refPrefix}/base`,
    root: metadata.root,
    signal,
    treeSha: baseTreeSha,
  });
  await pendingCheckpointWrites
    .get(checkpointScopeKey(metadata.root, checkpointScopeRefPrefix))
    ?.catch(() => undefined);
  await deleteExpiredRefs({
    createdAtPathIndex: 0,
    host,
    nowMs,
    refPrefix: captureRefPrefix,
    root: metadata.root,
    ttlMs: captureTtlMs,
  }).catch(() => undefined);
  await deleteExpiredRefs({
    createdAtPathIndex: 2,
    host,
    nowMs,
    refPrefix: checkpointRefPrefix,
    root: metadata.root,
    ttlMs: checkpointTtlMs,
  }).catch(() => undefined);

  const baseTurnId = optionalStringParam(params, "baseTurnId");
  return {
    baseTreeSha,
    baseTurnHeadTreeSha:
      baseTurnId == null
        ? null
        : await readLatestCheckpointTreeSha({
            host,
            nowMs,
            refPrefix: `${checkpointScopeRefPrefix}/${hashRefSegment(
              baseTurnId,
            )}`,
            root: metadata.root,
          }),
    checkpointRefPrefix: checkpointRefPrefixForTurn,
    checkpointScopeRefPrefix,
    refPrefix,
    root: metadata.root,
  };
}

async function completeTurnDiffCapture({
  host,
  params,
  signal,
}: {
  host: WorkerExecutionHostClient;
  params: Record<string, unknown>;
  signal: AbortSignal;
}): Promise<TurnDiffCaptureCompleteResult> {
  const capture = requireCaptureParam(params);
  const completion = computeTurnDiffCapture({ capture, host, signal });
  const key = checkpointScopeKey(
    capture.root,
    capture.checkpointScopeRefPrefix,
  );
  const write = (pendingCheckpointWrites.get(key) ?? Promise.resolve()).then(
    async () => {
      const result = await completion;
      if (params.retainCheckpoint === true && result.diff.type === "success") {
        await retainCheckpointRef({
          capture,
          headTreeSha: result.headTreeSha,
          host,
          signal,
        });
      }
    },
  );
  const cleanup = write.then(
    () => undefined,
    () => undefined,
  );
  pendingCheckpointWrites.set(key, cleanup);
  return write
    .then(() => completion)
    .finally(() => {
      if (pendingCheckpointWrites.get(key) === cleanup) {
        pendingCheckpointWrites.delete(key);
      }
    });
}

async function computeTurnDiffCapture({
  capture,
  host,
  signal,
}: {
  capture: TurnDiffCapture;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<TurnDiffCaptureCompleteResult> {
  try {
    const headTreeSha = await writeWorkingTreeSnapshot({
      host,
      root: capture.root,
      signal,
    });
    await retainTreeRef({
      host,
      ref: `${capture.refPrefix}/head`,
      root: capture.root,
      signal,
      treeSha: headTreeSha,
    });
    const [diff, betweenTurnDiff] = await Promise.all([
      diffTrees({
        baseTreeSha: capture.baseTreeSha,
        headTreeSha,
        host,
        root: capture.root,
        signal,
      }),
      capture.baseTurnHeadTreeSha == null
        ? null
        : diffTrees({
            baseTreeSha: capture.baseTurnHeadTreeSha,
            headTreeSha: capture.baseTreeSha,
            host,
            root: capture.root,
            signal,
          }),
    ]);
    return {
      baseTreeSha: capture.baseTreeSha,
      baseTurnHeadTreeSha: capture.baseTurnHeadTreeSha,
      betweenTurnDiff,
      diff,
      headTreeSha,
    };
  } finally {
    await Promise.allSettled([
      releaseTreeRef({
        host,
        ref: `${capture.refPrefix}/head`,
        root: capture.root,
      }),
      releaseTreeRef({
        host,
        ref: `${capture.refPrefix}/base`,
        root: capture.root,
      }),
    ]);
  }
}

async function retainCheckpointRef({
  capture,
  headTreeSha,
  host,
  signal,
}: {
  capture: TurnDiffCapture;
  headTreeSha: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<void> {
  const ref = `${capture.checkpointRefPrefix}/${Date.now()}/${randomUUID()}`;
  await retainTreeRef({
    host,
    ref,
    root: capture.root,
    signal,
    treeSha: headTreeSha,
  });
  await deleteRefsExcept({
    exceptRef: ref,
    host,
    refPrefix: capture.checkpointScopeRefPrefix,
    root: capture.root,
  });
}

async function readLatestCheckpointTreeSha({
  host,
  nowMs,
  refPrefix,
  root,
}: {
  host: WorkerExecutionHostClient;
  nowMs: number;
  refPrefix: string;
  root: string;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: [
      "for-each-ref",
      "--sort=-refname",
      "--format=%(refname) %(objectname)",
      refPrefix,
    ],
    cwd: root,
    host,
  });
  if (!result.success) return null;
  for (const line of result.stdout.split("\n")) {
    const [ref, sha] = line.split(" ");
    const createdAt = Number(ref?.slice(refPrefix.length + 1).split("/", 1)[0]);
    if (isGitSha(sha) && Number.isSafeInteger(createdAt)) {
      if (nowMs - createdAt <= checkpointTtlMs) return sha;
    }
  }
  return null;
}

async function diffTrees({
  baseTreeSha,
  headTreeSha,
  host,
  root,
  signal,
}: {
  baseTreeSha: string;
  headTreeSha: string;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<TurnDiff | TurnDiffError> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [0, 1],
    args: [...diffBaseArgs, baseTreeSha, headTreeSha],
    configOverrides: diffConfigOverrides,
    cwd: root,
    host,
    maxOutputBytes: maxTurnDiffBytes,
    signal,
    trim: false,
  });
  if (!result.success || result.outputLimitExceeded) {
    return { type: "error", error: diffError(result) };
  }
  return {
    type: "success",
    unifiedDiff: result.stdout,
    unifiedDiffBytes: byteLength(result.stdout),
  };
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
  const tempIndexPath = `${indexPath}.codex-turn-${randomUUID()}`;
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

async function retainTreeRef({
  host,
  ref,
  root,
  signal,
  treeSha,
}: {
  host: WorkerExecutionHostClient;
  ref: string;
  root: string;
  signal: AbortSignal;
  treeSha: string;
}): Promise<void> {
  const result = await runGitCommand({
    args: ["update-ref", ref, treeSha],
    cwd: root,
    host,
    signal,
  });
  if (!result.success)
    throw Error("Failed to retain a turn diff tree snapshot");
}

async function releaseTreeRef({
  host,
  ref,
  root,
}: {
  host: WorkerExecutionHostClient;
  ref: string;
  root: string;
}): Promise<void> {
  const result = await runGitCommand({
    args: ["update-ref", "-d", ref],
    cwd: root,
    host,
  });
  if (!result.success)
    throw Error("Failed to release a turn diff tree snapshot");
}

async function deleteExpiredRefs({
  createdAtPathIndex,
  host,
  nowMs,
  refPrefix,
  root,
  ttlMs,
}: {
  createdAtPathIndex: number;
  host: WorkerExecutionHostClient;
  nowMs: number;
  refPrefix: string;
  root: string;
  ttlMs: number;
}): Promise<void> {
  const result = await runGitCommand({
    args: ["for-each-ref", "--format=%(refname)", refPrefix],
    cwd: root,
    host,
  });
  if (!result.success) return;
  await Promise.allSettled(
    result.stdout
      .split("\n")
      .filter((ref) => {
        const createdAt = Number(
          ref.slice(refPrefix.length + 1).split("/")[createdAtPathIndex],
        );
        return Number.isSafeInteger(createdAt) && nowMs - createdAt > ttlMs;
      })
      .map((ref) => releaseTreeRef({ host, ref, root })),
  );
}

async function deleteRefsExcept({
  exceptRef,
  host,
  refPrefix,
  root,
}: {
  exceptRef: string;
  host: WorkerExecutionHostClient;
  refPrefix: string;
  root: string;
}): Promise<void> {
  const result = await runGitCommand({
    args: ["for-each-ref", "--format=%(refname)", refPrefix],
    cwd: root,
    host,
  });
  if (!result.success) return;
  await Promise.allSettled(
    result.stdout
      .split("\n")
      .filter((ref) => ref.length > 0 && ref !== exceptRef)
      .map((ref) => releaseTreeRef({ host, ref, root })),
  );
}

function requireCaptureParam(params: Record<string, unknown>): TurnDiffCapture {
  const capture = params.capture;
  if (!isRecord(capture)) {
    throw Error("Git worker parameter 'capture' must be an object");
  }
  return {
    baseTreeSha: requireStringParam(capture, "baseTreeSha"),
    baseTurnHeadTreeSha: optionalStringParam(capture, "baseTurnHeadTreeSha"),
    checkpointRefPrefix: requireStringParam(capture, "checkpointRefPrefix"),
    checkpointScopeRefPrefix: requireStringParam(
      capture,
      "checkpointScopeRefPrefix",
    ),
    refPrefix: requireStringParam(capture, "refPrefix"),
    root: requireStringParam(capture, "root"),
  };
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
): string {
  const value = params[key];
  if (typeof value === "string" && value.length > 0) return value;
  throw Error(`Git worker parameter '${key}' must be a non-empty string`);
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}

function hashRefSegment(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function checkpointScopeKey(
  root: string,
  checkpointScopeRefPrefix: string,
): string {
  return `${root}\0${checkpointScopeRefPrefix}`;
}

function diffError(
  result: GitCommandResult,
): { type: "diff-too-large"; limitBytes: number } | { type: "unknown" } {
  return result.outputLimitExceeded
    ? { type: "diff-too-large", limitBytes: maxTurnDiffBytes }
    : { type: "unknown" };
}

function byteLength(value: string): number {
  return new TextEncoder().encode(value).byteLength;
}

function isGitSha(value: unknown): value is string {
  return typeof value === "string" && /^[0-9a-f]{40}$/i.test(value);
}
