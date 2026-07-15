// Restored from ref/.vite/build/worker.js
// Applies a source tree diff into a destination worktree.

import { randomUUID } from "node:crypto";
import type { ReadableStream } from "node:stream/web";
import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type ApplyChangesResult =
  | { status: "success" }
  | { status: "command-error"; execOutput?: GitCommandExecOutput }
  | {
      status: "partial-success";
      appliedPaths: string[];
      skippedPaths: string[];
      conflictedPaths: string[];
    };

export type GitCommandExecOutput = {
  command: string | string[];
  output: string;
};

type ParsedApplyOutput = {
  appliedPaths: string[];
  skippedPaths: string[];
  conflictedPaths: string[];
};
export type GitPatchApplyResult =
  | ({ status: "success" } & ParsedApplyOutput & {
        execOutput: GitCommandExecOutput;
      })
  | ({ status: "partial-success" } & ParsedApplyOutput & {
        execOutput: GitCommandExecOutput;
      })
  | ({ status: "error" } & ParsedApplyOutput & {
        execOutput: GitCommandExecOutput;
      });
export type GitPatchApplyTarget = "staged" | "staged-and-unstaged" | "unstaged";

const maxDiffBytes = 32 * 1024 * 1024;
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

export async function applyChangesToDestination({
  destinationHeadRef,
  destinationRoot,
  host,
  signal,
  sourceHeadRef,
  sourceTreeRef,
}: {
  destinationHeadRef: string;
  destinationRoot: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  sourceHeadRef: string;
  sourceTreeRef: string;
}): Promise<ApplyChangesResult> {
  const mergeBase = await resolveMergeBase({
    destinationHeadRef,
    destinationRoot,
    host,
    signal,
    sourceHeadRef,
  });
  if (mergeBase == null) return { status: "command-error" };

  const diffResult = await runGitCommand({
    allowedNonZeroExitCodes: [0, 1],
    args: [...diffBaseArgs, "--binary", mergeBase, sourceTreeRef],
    configOverrides: diffConfigOverrides,
    cwd: destinationRoot,
    host,
    maxOutputBytes: maxDiffBytes,
    signal,
    trim: false,
  });
  if (diffResult.outputLimitExceeded || !diffResult.success) {
    return {
      status: "command-error",
      execOutput: commandExecOutput(diffResult),
    };
  }
  if (!diffResult.stdout) return { status: "success" };

  const applyResult = await applyGitPatch({
    atomic: false,
    diff: diffResult.stdout,
    host,
    root: destinationRoot,
    signal,
    target: "unstaged",
  });
  if (applyResult.status === "error") {
    return { status: "command-error", execOutput: applyResult.execOutput };
  }
  if (applyResult.status === "partial-success") {
    return {
      status: "partial-success",
      appliedPaths: applyResult.appliedPaths,
      skippedPaths: applyResult.skippedPaths,
      conflictedPaths: applyResult.conflictedPaths,
    };
  }
  return { status: "success" };
}

async function resolveMergeBase({
  destinationHeadRef,
  destinationRoot,
  host,
  signal,
  sourceHeadRef,
}: {
  destinationHeadRef: string;
  destinationRoot: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  sourceHeadRef: string;
}): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: ["merge-base", sourceHeadRef, destinationHeadRef],
    cwd: destinationRoot,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const mergeBase = result.stdout.trim();
  return mergeBase ? mergeBase : null;
}

export async function applyGitPatch({
  atomic = false,
  diff,
  host,
  revert = false,
  root,
  signal,
  stageCurrentPathsForUnstaged = true,
  target = "unstaged",
}: {
  atomic?: boolean;
  diff: string;
  host: WorkerExecutionHostClient;
  revert?: boolean;
  root: string;
  signal: AbortSignal;
  stageCurrentPathsForUnstaged?: boolean;
  target?: GitPatchApplyTarget;
}): Promise<GitPatchApplyResult> {
  const tempDir = await createTemporaryDirectory(host, "codex-apply-", signal);
  const pathApi = await host.platformPath();
  const patchPath = pathApi.join(tempDir, "patch.diff");
  await host.writeFile(patchPath, diff, { signal });

  try {
    let env: Record<string, string> | null = null;
    if (target === "unstaged" && !atomic && stageCurrentPathsForUnstaged) {
      env = await createTemporaryIndexEnvironment({
        host,
        root,
        signal,
        tempDir,
      });
    }
    if (env != null && stageCurrentPathsForUnstaged) {
      const stageResult = await stageTouchedPaths({
        diff,
        env,
        host,
        root,
        signal,
      });
      void stageResult;
    }

    const args = ["apply"];
    if (revert) args.push("-R");
    args.push("--binary");
    if (!atomic) args.push("--3way");
    if (target === "staged") {
      args.push("--cached");
    } else if (target === "staged-and-unstaged") {
      args.push("--index");
    }
    args.push(patchPath);

    const result = await runGitCommand({
      allowedNonZeroExitCodes: [1],
      args,
      cwd: root,
      env: env ?? undefined,
      host,
      signal,
      trim: false,
    });
    const metadata = parseApplyOutput(result.stdout, result.stderr);
    const execOutput = commandExecOutput({
      ...result,
      command: args.join(" "),
    });

    if (signal.aborted || result.code == null) {
      return { status: "error", ...metadata, execOutput };
    }
    if (result.code === 0) {
      return { status: "success", ...metadata, execOutput };
    }
    if (result.code === 1 && !atomic) {
      return { status: "partial-success", ...metadata, execOutput };
    }
    return { status: "error", ...metadata, execOutput };
  } finally {
    await host.remove(tempDir, { recursive: true, force: true });
  }
}

async function createTemporaryIndexEnvironment({
  host,
  root,
  signal,
  tempDir,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
  tempDir: string;
}): Promise<Record<string, string> | null> {
  const indexPath = await readGitPath(root, "index", host, signal);
  if (indexPath == null) return null;

  const pathApi = await host.platformPath();
  const tempIndexPath = pathApi.join(tempDir, "index");
  await copyFileIfPresent(indexPath, tempIndexPath, host);

  const sharedIndexPath = await readSharedIndexPath(root, host, signal);
  if (sharedIndexPath != null) {
    await copyFileIfPresent(
      sharedIndexPath,
      pathApi.join(tempDir, pathApi.basename(sharedIndexPath)),
      host,
    );
  }

  return { GIT_INDEX_FILE: tempIndexPath };
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

async function readSharedIndexPath(
  root: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--shared-index-path"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;

  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.resolve(root, result.stdout);
}

async function copyFileIfPresent(
  sourcePath: string,
  destinationPath: string,
  host: WorkerExecutionHostClient,
): Promise<void> {
  try {
    await host.copyFile(sourcePath, destinationPath);
  } catch (error) {
    if (!isMissingPathError(error)) throw error;
  }
}

async function stageTouchedPaths({
  diff,
  env,
  host,
  root,
  signal,
}: {
  diff: string;
  env: Record<string, string>;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<GitCommandResult | null> {
  const paths = extractDiffPaths(diff);
  if (paths.length === 0) return null;

  const existingPaths = await existingDiffPaths(root, paths, host);
  if (existingPaths.length === 0) return null;

  return runGitCommand({
    args: ["add", "--", ...existingPaths],
    cwd: root,
    env,
    host,
    signal,
  });
}

function extractDiffPaths(diff: string): string[] {
  const paths = new Set<string>();
  const pattern = /^diff --git a\/(.*?) b\/(.*)$/gm;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(diff)) != null) {
    const oldPath = match[1];
    const newPath = match[2];
    if (oldPath && oldPath !== "/dev/null") paths.add(oldPath);
    if (newPath && newPath !== "/dev/null") paths.add(newPath);
  }
  return Array.from(paths);
}

async function existingDiffPaths(
  root: string,
  paths: string[],
  host: WorkerExecutionHostClient,
): Promise<string[]> {
  const pathApi = await host.platformPath();
  const existing: string[] = [];
  await Promise.all(
    paths.map(async (path) => {
      try {
        await host.stat(pathApi.join(root, path));
        existing.push(path);
      } catch {
        return;
      }
    }),
  );
  return existing;
}

async function createTemporaryDirectory(
  host: WorkerExecutionHostClient,
  prefix: string,
  signal: AbortSignal,
): Promise<string> {
  signal.throwIfAborted();
  if ((await host.platformFamily()) === "windows") {
    const result = await runHostProcess({
      args: ["cmd.exe", "/d", "/s", "/c", "echo %TEMP%"],
      cwd: "C:\\",
      host,
      signal,
      timeoutMs: 10_000,
    });
    const tempRoot = result.stdout.trim();
    if (result.code !== 0 || tempRoot.length === 0 || tempRoot === "%TEMP%") {
      throw Error(
        `failed to find Windows temporary directory: ${
          result.stderr || result.stdout
        }`.trim(),
      );
    }
    const pathApi = await host.platformPath();
    const tempDir = pathApi.join(tempRoot, `${prefix}${randomUUID()}`);
    signal.throwIfAborted();
    await host.createDirectory(tempDir, { recursive: true });
    return tempDir;
  }

  const result = await runHostProcess({
    args: ["sh", "-c", 'mktemp -d "${TMPDIR:-/tmp}/$1XXXXXX"', "sh", prefix],
    cwd: "/",
    host,
    signal,
    timeoutMs: 10_000,
  });
  if (result.code !== 0 || result.stdout.trim().length === 0) {
    throw Error(
      `failed to create temporary directory: ${
        result.stderr || result.stdout
      }`.trim(),
    );
  }
  return result.stdout.trim();
}

async function runHostProcess({
  args,
  cwd,
  host,
  signal,
  timeoutMs,
}: {
  args: string[];
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  timeoutMs: number;
}): Promise<{ code: number | null; stdout: string; stderr: string }> {
  const processHandle = await host.spawn({
    args,
    cwd,
    signal,
    timeoutMs,
  });
  await processHandle.stdin.close().catch(() => {});
  const [waitResult, stdout, stderr] = await Promise.all([
    processHandle.wait(),
    readStreamAsText(processHandle.stdout),
    readStreamAsText(processHandle.stderr),
  ]);
  return {
    code: normalizeWaitCode(waitResult),
    stdout,
    stderr,
  };
}

function parseApplyOutput(stdout: string, stderr: string): ParsedApplyOutput {
  const appliedPaths = new Set<string>();
  const skippedPaths = new Set<string>();
  const conflictedPaths = new Set<string>();
  let lastPath: string | null = null;
  const output = [stdout, stderr].filter(Boolean).join("\n");
  const addPath = (target: Set<string>, value: string | undefined) => {
    let path = (value ?? "").trim();
    if (!path) return;
    const first = path.charAt(0);
    const last = path.charAt(path.length - 1);
    if (
      (first === "'" || first === '"') &&
      last === first &&
      path.length >= 2
    ) {
      path = path.slice(1, -1);
    }
    if (path) target.add(path);
  };
  const firstGroup = (
    groups: Record<string, string | undefined> | undefined,
    keys: string[],
  ) => {
    for (const key of keys) if (groups?.[key]) return groups[key];
    return undefined;
  };

  const appliedCleanly =
    /^(?:Applied patch(?: to)?\s+(?:(["'])(?<qpath>.+?)\1|(?<path>.+?))\s+cleanly\.?)$/i;
  const appliedWithConflicts =
    /^(?:Applied patch(?: to)?\s+(?:(["'])(?<qpath>.+?)\1|(?<path>.+?))\s+with conflicts\.?)$/i;
  const applyingWithRejects =
    /^(?:Applying patch\s+(?:(["'])(?<qpath>.+?)\1|(?<path>.+?))\s+with\s+\d+\s+rejects?\.{0,3})$/i;
  const checkingPatch =
    /^(?:Checking patch\s+(?:(["'])(?<qpath>.+?)\1|(?<path>.+?))\.\.\.)$/i;
  const threeWay =
    /^(?:Performing three-way merge|Falling back to three-way merge)\.\.\.$/i;
  const failedThreeWay = /^Failed to perform three-way merge\.\.\.$/i;
  const directApplication = /^Falling back to direct application\.\.\.$/i;
  const unmerged = /^U\s+(?<path>.+)$/;
  const patchFailed =
    /^error:\s+patch failed:\s+(?<path>.+?)(?::\d+)?(?:\s|$)/i;
  const patchDoesNotApply = /^error:\s+(?<path>.+?):\s+patch does not apply$/i;
  const lacksBlob =
    /^(?:error: )?repository lacks the necessary blob to (?:perform|fall back on) 3-?way merge\.?$/i;
  const doesNotMatchIndex = /^error:\s+(?<path>.+?):\s+does not match index\b/i;
  const missingFromIndex =
    /^error:\s+(?<path>.+?):\s+does not exist in index\b/i;
  const alreadyExists =
    /^error:\s+(?<path>.+?)\s+already exists in (?:the )?working directory\b/i;
  const patchFailedFileExists =
    /^error:\s+patch failed:\s+(?<path>.+?)\s+File exists/i;
  const renamedDeleted =
    /^error:\s+path\s+(?<path>.+?)\s+has been renamed\/deleted/i;
  const binaryWithoutFullIndex =
    /^error:\s+cannot apply binary patch to\s+['"]?(?<path>.+?)['"]?\s+without full index line$/i;
  const binaryPatchDoesNotApply =
    /^error:\s+binary patch does not apply to\s+['"]?(?<path>.+?)['"]?$/i;
  const binaryPatchIncorrectResult =
    /^error:\s+binary patch to\s+['"]?(?<path>.+?)['"]?\s+creates incorrect result\b/i;
  const cannotReadContents =
    /^error:\s+cannot read the current contents of\s+['"]?(?<path>.+?)['"]?$/i;
  const skippedPatch = /^Skipped patch\s+['"]?(?<path>.+?)['"]\.$/i;
  const cannotMergeBinary =
    /^warning:\s*Cannot merge binary files:\s+(?<path>.+?)\s+\(ours\s+vs\.\s+theirs\)/i;

  for (const line of output.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    let match: RegExpMatchArray | null;

    if ((match = trimmed.match(appliedCleanly))) {
      const path = firstGroup(match.groups, ["qpath", "path"]);
      addPath(appliedPaths, path);
      lastPath = path ?? lastPath;
      conflictedPaths.delete(path ?? "");
      skippedPaths.delete(path ?? "");
      continue;
    }
    if ((match = trimmed.match(appliedWithConflicts))) {
      const path = firstGroup(match.groups, ["qpath", "path"]);
      addPath(conflictedPaths, path);
      lastPath = path ?? lastPath;
      appliedPaths.delete(path ?? "");
      skippedPaths.delete(path ?? "");
      continue;
    }
    if ((match = trimmed.match(applyingWithRejects))) {
      const path = firstGroup(match.groups, ["qpath", "path"]);
      addPath(conflictedPaths, path);
      lastPath = path ?? lastPath;
      appliedPaths.delete(path ?? "");
      skippedPaths.delete(path ?? "");
      continue;
    }
    if ((match = trimmed.match(unmerged))) {
      const path = match.groups?.path;
      addPath(conflictedPaths, path);
      lastPath = path ?? lastPath;
      appliedPaths.delete(path ?? "");
      skippedPaths.delete(path ?? "");
      continue;
    }
    if ((match = trimmed.match(checkingPatch))) {
      lastPath = firstGroup(match.groups, ["qpath", "path"]) ?? lastPath;
      continue;
    }
    if (
      (match = trimmed.match(patchFailed)) ||
      (match = trimmed.match(patchDoesNotApply))
    ) {
      addPath(skippedPaths, match.groups?.path);
      lastPath = match.groups?.path ?? lastPath;
      continue;
    }
    if (!(threeWay.test(trimmed) || directApplication.test(trimmed))) {
      if (failedThreeWay.test(trimmed) || lacksBlob.test(trimmed)) {
        if (lastPath != null) {
          addPath(skippedPaths, lastPath);
          appliedPaths.delete(lastPath);
          conflictedPaths.delete(lastPath);
        }
        continue;
      }
      if (
        (match = trimmed.match(doesNotMatchIndex)) ||
        (match = trimmed.match(missingFromIndex)) ||
        (match = trimmed.match(alreadyExists)) ||
        (match = trimmed.match(patchFailedFileExists)) ||
        (match = trimmed.match(renamedDeleted)) ||
        (match = trimmed.match(binaryWithoutFullIndex)) ||
        (match = trimmed.match(binaryPatchDoesNotApply)) ||
        (match = trimmed.match(binaryPatchIncorrectResult)) ||
        (match = trimmed.match(cannotReadContents)) ||
        (match = trimmed.match(skippedPatch))
      ) {
        addPath(skippedPaths, match.groups?.path);
        lastPath = match.groups?.path ?? lastPath;
        appliedPaths.delete(match.groups?.path ?? "");
        conflictedPaths.delete(match.groups?.path ?? "");
        continue;
      }
      if ((match = trimmed.match(cannotMergeBinary))) {
        addPath(conflictedPaths, match.groups?.path);
        lastPath = match.groups?.path ?? lastPath;
        appliedPaths.delete(match.groups?.path ?? "");
        skippedPaths.delete(match.groups?.path ?? "");
        continue;
      }
    }
  }

  for (const path of conflictedPaths) {
    appliedPaths.delete(path);
    skippedPaths.delete(path);
  }
  for (const path of appliedPaths) skippedPaths.delete(path);

  return {
    appliedPaths: Array.from(appliedPaths).sort(),
    skippedPaths: Array.from(skippedPaths).sort(),
    conflictedPaths: Array.from(conflictedPaths).sort(),
  };
}

function commandExecOutput(
  result: {
    command: string | string[];
    stdout: string;
    stderr: string;
  },
  fallbackOutput = result.stdout ||
    result.stderr ||
    "An unknown error occurred",
): GitCommandExecOutput {
  return {
    command: result.command,
    output:
      [result.stdout, result.stderr].filter(Boolean).join("\n") ||
      fallbackOutput,
  };
}

async function readStreamAsText(
  stream: ReadableStream<unknown>,
): Promise<string> {
  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(chunkToBytes(value));
    }
  } finally {
    reader.releaseLock();
  }
  return new TextDecoder("utf-8", { ignoreBOM: true }).decode(
    concatBytes(chunks),
  );
}

function chunkToBytes(chunk: unknown): Uint8Array {
  if (chunk instanceof Uint8Array) return chunk;
  if (Array.isArray(chunk)) return Uint8Array.from(chunk.map(Number));
  if (chunk instanceof ArrayBuffer) return new Uint8Array(chunk);
  if (ArrayBuffer.isView(chunk)) {
    return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  }
  if (typeof chunk === "string") return new TextEncoder().encode(chunk);
  if (chunk == null) return new Uint8Array();
  return new TextEncoder().encode(String(chunk));
}

function concatBytes(chunks: Uint8Array[]): Uint8Array {
  const byteLength = chunks.reduce(
    (total, chunk) => total + chunk.byteLength,
    0,
  );
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function normalizeWaitCode(value: unknown): number | null {
  return isRecord(value) && typeof value.code === "number" ? value.code : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
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
