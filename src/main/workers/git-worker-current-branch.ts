// Restored from ref/.vite/build/worker.js
// Current Git branch resolver shared by worker branch handlers.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function readCurrentBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  const branchResult = await runGitCommand({
    args: ["rev-parse", "--abbrev-ref", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  if (
    branchResult.success &&
    branchResult.stdout &&
    branchResult.stdout !== "HEAD"
  ) {
    return branchResult.stdout;
  }

  const symbolicHeadResult = await runGitCommand({
    args: ["symbolic-ref", "--quiet", "--short", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  return symbolicHeadResult.success && symbolicHeadResult.stdout
    ? symbolicHeadResult.stdout
    : null;
}
