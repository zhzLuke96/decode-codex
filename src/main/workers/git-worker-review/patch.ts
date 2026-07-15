// Restored from ref/.vite/build/worker.js
// Whole-review patch diff reader.

import type { GitCommandResult } from "../git-worker-commands";
import type { WorkerExecutionHostClient } from "../worker-execution-host-client";
import { createReviewDiffPlan } from "./diff-plan";
import { runReviewDiffCommand } from "./diff-command";

type ReviewSource = "branch" | "commit" | "staged" | "unstaged";
type ReviewDiffError =
  | { type: "diff-too-large"; limitBytes: number }
  | { type: "unknown" };

const maxDiffBytes = 32 * 1024 * 1024;

export async function readReviewPatch({
  baseBranch = null,
  commitSha = null,
  cwd,
  host,
  signal,
  source,
}: {
  baseBranch?: string | null;
  commitSha?: string | null;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  source: ReviewSource;
}) {
  const plan = await createReviewDiffPlan({
    baseBranch,
    commitSha,
    cwd,
    host,
    includeUntrackedFiles: true,
    signal,
    source,
  });
  if (plan == null) return { source, diff: unknownPatchDiff() };

  const result = await runReviewDiffCommand({
    args: plan.diffArgs,
    cwd: plan.root,
    host,
    maxOutputBytes: maxDiffBytes,
    signal,
  });
  return result.success
    ? {
        source,
        diff: {
          type: "success" as const,
          unifiedDiff: result.stdout,
          unifiedDiffBytes: byteLength(result.stdout),
        },
      }
    : { source, diff: { type: "error" as const, error: diffError(result) } };
}

function unknownPatchDiff() {
  return { type: "error" as const, error: { type: "unknown" as const } };
}

function diffError(result: GitCommandResult): ReviewDiffError {
  return result.outputLimitExceeded
    ? { type: "diff-too-large", limitBytes: maxDiffBytes }
    : { type: "unknown" };
}

function byteLength(value: string): number {
  return new TextEncoder().encode(value).byteLength;
}
