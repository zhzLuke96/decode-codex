// Restored from ref/.vite/build/worker.js
// Shared review diff command wrapper with Codex's stable diff options.

import { runGitCommand } from "../git-worker-commands";
import type { WorkerExecutionHostClient } from "../worker-execution-host-client";

const diffConfigOverrides = [
  "-c",
  "diff.mnemonicPrefix=false",
  "-c",
  "diff.noprefix=false",
  "-c",
  "core.quotePath=false",
];

export function runReviewDiffCommand({
  args,
  cwd,
  host,
  maxOutputBytes,
  signal,
}: {
  args: string[];
  cwd: string;
  host: WorkerExecutionHostClient;
  maxOutputBytes?: number;
  signal: AbortSignal;
}) {
  return runGitCommand({
    allowedNonZeroExitCodes: [0, 1],
    args: ["diff", "--no-ext-diff", "--no-textconv", "--color=never", ...args],
    configOverrides: diffConfigOverrides,
    cwd,
    host,
    maxOutputBytes,
    signal,
    trim: false,
  });
}
