// Restored from ref/.vite/build/worker.js
// Rollback helpers for thread handoff branch and stash state.

import { checkoutBranch } from "./git-worker-thread-handoff-checkout";
import { applyStash } from "./git-worker-thread-handoff-stash";
import type { RestoreStateOptions } from "./git-worker-thread-handoff-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function restoreState(
  options: RestoreStateOptions,
): Promise<string[]> {
  const errors: string[] = [];
  if (options.branch == null) {
    if (
      options.stashRef != null &&
      (
        await applyStash({
          cwd: options.cwd,
          host: options.host,
          mode: "pop",
          signal: options.signal,
          stashRef: options.stashRef,
        })
      ).status === "error"
    ) {
      errors.push(options.restoreStashError);
    }
    return errors;
  }

  const branchResult = await checkoutBranch({
    branch: options.branch,
    callbacks: {},
    cwd: options.cwd,
    host: options.host,
    signal: options.signal,
    stashUncommitted: false,
  });
  if (branchResult.status === "error") errors.push(options.restoreBranchError);
  if (
    options.stashRef != null &&
    (
      await applyStash({
        cwd: options.cwd,
        host: options.host,
        mode: "pop",
        signal: options.signal,
        stashRef: options.stashRef,
      })
    ).status === "error"
  ) {
    errors.push(options.restoreStashError);
  }
  return errors;
}

export function rollbackSourceState({
  branch,
  cwd,
  host,
  signal,
  stashRef,
}: {
  branch: string | null;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  stashRef: string | null;
}): Promise<string[]> {
  return restoreState({
    branch,
    cwd,
    host,
    restoreBranchError: "restore-source-branch-failed",
    restoreStashError: "restore-source-stash-failed",
    signal,
    stashRef,
  });
}
