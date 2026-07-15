// Restored from ref/.vite/build/worker.js
// Stash apply/drop/pop helpers for thread handoff operations.

import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import type {
  ApplyStashResult,
  GitCommandExecOutput,
} from "./git-worker-thread-handoff-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function applyStash({
  cwd,
  host,
  mode = "apply",
  signal,
  stashRef,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  mode?: "apply" | "drop" | "pop";
  signal: AbortSignal;
  stashRef: string;
}): Promise<ApplyStashResult> {
  const workspaceRoot = cwd.trim();
  if (workspaceRoot.length === 0) {
    return {
      status: "error",
      error: "No workspace available for stash apply",
      execOutput: {
        command: ["git", "stash", mode],
        output: "No workspace available for stash apply",
      },
    };
  }
  const normalizedStashRef = stashRef.trim();
  if (normalizedStashRef.length === 0) {
    return {
      status: "error",
      error: "Stash reference is required",
      execOutput: {
        command: ["git", "stash", mode],
        output: "Stash reference is required",
      },
    };
  }
  const resolvedStashRef = await resolveStashRef({
    cwd: workspaceRoot,
    host,
    signal,
    stashRef: normalizedStashRef,
  });
  const result = await runGitCommand({
    args: ["stash", mode, resolvedStashRef],
    cwd: workspaceRoot,
    host,
    signal,
  });
  if (!result.success) {
    const error = result.stderr || result.stdout || "Failed to apply stash";
    return {
      status: "error",
      error,
      execOutput: commandExecOutput(result, error),
    };
  }
  return { status: "success", stashRef: normalizedStashRef, mode };
}

async function resolveStashRef({
  cwd,
  host,
  signal,
  stashRef,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  stashRef: string;
}): Promise<string> {
  if (!isGitSha(stashRef)) return stashRef;
  const result = await runGitCommand({
    args: ["stash", "list", "--format=%H %gd"],
    cwd,
    host,
    signal,
  });
  if (!result.success || result.stdout.length === 0) return stashRef;
  for (const line of result.stdout.split(/\r?\n/)) {
    const [sha, reflogName] = line.trim().split(/\s+/, 2);
    if (sha === stashRef && reflogName != null) return reflogName;
  }
  return stashRef;
}

function commandExecOutput(
  result: GitCommandResult,
  fallbackOutput = result.stdout ||
    result.stderr ||
    "An unknown error occurred",
): GitCommandExecOutput {
  const output = [result.stdout, result.stderr]
    .filter((value) => value.length > 0)
    .join("\n");
  return {
    command: result.command,
    output: output || fallbackOutput,
  };
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}
