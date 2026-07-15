// Restored from ref/.vite/build/worker.js
// Git config and submodule queries.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function readConfigValueForScope({
  host,
  key,
  root,
  scope,
  signal,
}: {
  host: WorkerExecutionHostClient;
  key: string;
  root: string;
  scope: string | null;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: ["config", gitConfigScopeArg(scope), "--get", key],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout : null;
}

export async function setConfigValueForScope({
  host,
  key,
  root,
  scope,
  signal,
  value,
}: {
  host: WorkerExecutionHostClient;
  key: string;
  root: string;
  scope: string | null;
  signal: AbortSignal;
  value: string;
}): Promise<boolean> {
  const args = ["config", gitConfigScopeArg(scope), key, value];
  const result = await runGitCommand({ args, cwd: root, host, signal });
  if (result.success || scope !== "worktree") return result.success;
  if (!result.stderr.toLowerCase().includes("worktreeconfig")) return false;

  const enabledWorktreeConfig = await runGitCommand({
    args: ["config", "extensions.worktreeConfig", "true"],
    cwd: root,
    host,
    signal,
  });
  if (!enabledWorktreeConfig.success) return false;
  return (await runGitCommand({ args, cwd: root, host, signal })).success;
}

export async function readSubmodulePaths({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string[]> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: ["config", "--file", ".gitmodules", "--get-regexp", "path"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return [];
  const paths = result.stdout
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => line.split(/\s+/).at(-1)?.trim() ?? "")
    .filter((path) => path.length > 0);
  return Array.from(new Set(paths));
}

function gitConfigScopeArg(scope: string | null): "--local" | "--worktree" {
  return scope === "local" ? "--local" : "--worktree";
}
