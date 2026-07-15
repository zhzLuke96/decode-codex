// Restored from ref/.vite/build/worker.js
// Per-file review unified diff reader.

import type { GitCommandResult } from "../git-worker-commands";
import { readStableMetadata } from "../git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "../worker-execution-host-client";
import { createReviewDiffPlan } from "./diff-plan";
import { runReviewDiffCommand } from "./diff-command";
import { parseDiffHeaderPaths } from "./parsers";
import { normalizeReviewPath } from "./path-utils";

type ReviewSource = "branch" | "commit" | "staged" | "unstaged";
type ReviewDiffResult =
  | { type: "success"; diff: string; diffBytes: number }
  | { type: "error"; error: ReviewDiffError };
type ReviewDiffError =
  | { type: "diff-too-large"; limitBytes: number }
  | { type: "unknown" };

const maxDiffBytes = 32 * 1024 * 1024;

export async function readReviewDiff({
  baseBranch = null,
  binary = false,
  commitSha = null,
  cwd,
  files,
  hideWhitespace = false,
  host,
  signal,
  source,
}: {
  baseBranch?: string | null;
  binary?: boolean;
  commitSha?: string | null;
  cwd: string;
  files: Array<{ path: string; previousPath?: string | null }>;
  hideWhitespace?: boolean;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  source: ReviewSource;
}) {
  const metadata = await readStableMetadata({ cwd, host, signal });
  if (metadata == null) {
    return errorDiffResponse(
      source,
      files.map((file) => file.path),
    );
  }

  const pathApi = await host.platformPath();
  const requestedFiles = files.map((file) => ({
    path: normalizeReviewPath({
      cwd,
      filePath: file.path,
      pathApi,
      root: metadata.root,
    }),
    previousPath:
      file.previousPath == null
        ? null
        : normalizeReviewPath({
            cwd,
            filePath: file.previousPath,
            pathApi,
            root: metadata.root,
          }),
    requestPath: file.path,
  }));
  const plan = await createReviewDiffPlan({
    baseBranch,
    commitSha,
    cwd,
    host,
    includeUntrackedFiles: true,
    signal,
    source,
  });
  if (plan == null) {
    return errorDiffResponse(
      source,
      requestedFiles.map((file) => file.requestPath),
    );
  }

  const paths = [
    ...new Set(
      requestedFiles.flatMap((file) =>
        file.previousPath == null
          ? [file.path]
          : [file.previousPath, file.path],
      ),
    ),
  ];
  const diffs = await readPathDiffs({
    binary,
    diffArgs: plan.diffArgs,
    hideWhitespace,
    host,
    paths,
    root: plan.root,
    signal,
  });

  return {
    source,
    diffs: Object.fromEntries(
      requestedFiles.map((file) => [
        file.requestPath,
        diffs.get(file.path) ?? errorReviewDiffResult(),
      ]),
    ),
  };
}

async function readPathDiffs({
  binary,
  diffArgs,
  hideWhitespace,
  host,
  paths,
  root,
  signal,
}: {
  binary: boolean;
  diffArgs: string[];
  hideWhitespace: boolean;
  host: WorkerExecutionHostClient;
  paths: string[];
  root: string;
  signal: AbortSignal;
}): Promise<Map<string, ReviewDiffResult>> {
  if (paths.length === 0) return new Map();
  const result = await runReviewDiffCommand({
    args: [
      ...diffArgs,
      ...(binary ? ["--binary"] : []),
      ...(hideWhitespace ? ["--ignore-all-space"] : []),
      "--find-renames",
      "--",
      ...paths,
    ],
    cwd: root,
    host,
    maxOutputBytes: maxDiffBytes,
    signal,
  });
  if (!result.success) {
    return new Map(
      paths.map((path) => [path, { type: "error", error: diffError(result) }]),
    );
  }

  const diffs = parseUnifiedDiffs(result.stdout);
  if (hideWhitespace) {
    for (const path of paths) {
      if (!diffs.has(path)) {
        diffs.set(path, { type: "success", diff: "", diffBytes: 0 });
      }
    }
  }
  return diffs;
}

function parseUnifiedDiffs(stdout: string): Map<string, ReviewDiffResult> {
  const diffMap = new Map<string, ReviewDiffResult>();
  const headers = Array.from(
    stdout.matchAll(/^diff --(?:git|cc|combined) .*$/gm),
  );
  for (let index = 0; index < headers.length; index += 1) {
    const header = headers[index];
    const paths = parseDiffHeaderPaths(header[0]);
    if (paths == null) continue;
    const start = header.index ?? 0;
    const end =
      index + 1 < headers.length
        ? (headers[index + 1].index ?? stdout.length)
        : stdout.length;
    const diff = stdout.slice(start, end);
    const result: ReviewDiffResult = {
      type: "success",
      diff,
      diffBytes: byteLength(diff),
    };
    diffMap.set(paths.oldPath, result);
    diffMap.set(paths.newPath, result);
  }
  return diffMap;
}

function errorDiffResponse(source: ReviewSource, paths: string[]) {
  return {
    source,
    diffs: Object.fromEntries(
      paths.map((path) => [path, errorReviewDiffResult()]),
    ),
  };
}

function errorReviewDiffResult(): ReviewDiffResult {
  return { type: "error", error: { type: "unknown" } };
}

function diffError(result: GitCommandResult): ReviewDiffError {
  return result.outputLimitExceeded
    ? { type: "diff-too-large", limitBytes: maxDiffBytes }
    : { type: "unknown" };
}

function byteLength(value: string): number {
  return new TextEncoder().encode(value).byteLength;
}
