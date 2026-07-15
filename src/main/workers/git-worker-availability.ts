// Restored from ref/.vite/build/worker.js
// Git executable availability checks and request allow-list.

import { spawnSync } from "node:child_process";
import { accessSync, constants } from "node:fs";
import { posix, win32 } from "node:path";

type GitAvailabilityCacheEntry = {
  key: string;
  expiresAt: number;
  value: boolean;
};

export const GIT_UNAVAILABLE_MESSAGE = "Git is unavailable";

const DEFAULT_WINDOWS_EXECUTABLE_EXTENSIONS = ".COM;.EXE;.BAT;.CMD";
const SYSTEM_MACOS_GIT_PATH = "/usr/bin/git";
const availabilityCacheTtlMs = 10_000;
const gitAllowedWhenUnavailableSources = new Set([
  "async_task_starting_state_dropdown",
  "commit_modal",
  "composer_branch_switcher",
  "composer_worktree_source",
  "create_pull_request_modal",
  "local_conversation_git_actions",
]);
const gitAllowedWhenUnavailableMethods = new Set([
  "git-checkout-branch",
  "git-create-branch",
  "git-init-repo",
]);
let gitAvailabilityCache: GitAvailabilityCacheEntry | null = null;

export function isAllowedWhenGitUnavailable(
  method: string,
  operationSource: unknown,
): boolean {
  return (
    gitAllowedWhenUnavailableMethods.has(method) ||
    (typeof operationSource === "string" &&
      gitAllowedWhenUnavailableSources.has(operationSource))
  );
}

export function isGitAvailableForHost({
  env,
  hostIsLocal,
  platform,
  spawnInsideWsl,
}: {
  env: NodeJS.ProcessEnv;
  hostIsLocal: boolean;
  platform: NodeJS.Platform;
  spawnInsideWsl: boolean;
}): boolean {
  if (!hostIsLocal) return true;
  if (platform === "win32" && spawnInsideWsl) return true;
  return cachedLocalGitAvailable(env, platform);
}

export function isGitUnavailableError(error: unknown): boolean {
  return error instanceof Error && error.message === GIT_UNAVAILABLE_MESSAGE;
}

function cachedLocalGitAvailable(
  env: NodeJS.ProcessEnv,
  platform: NodeJS.Platform,
): boolean {
  const pathValue = getEnvironmentValue(env, "PATH");
  const pathExtValue = getEnvironmentValue(env, "PATHEXT");
  const key = JSON.stringify([pathValue, pathExtValue, platform]);
  const now = Date.now();
  if (
    gitAvailabilityCache != null &&
    gitAvailabilityCache.key === key &&
    gitAvailabilityCache.expiresAt > now
  ) {
    return gitAvailabilityCache.value;
  }
  const value = computeLocalGitAvailable(pathValue, pathExtValue, platform);
  gitAvailabilityCache = {
    key,
    expiresAt: now + availabilityCacheTtlMs,
    value,
  };
  return value;
}

function computeLocalGitAvailable(
  pathValue: string | undefined,
  pathExtValue: string | undefined,
  platform: NodeJS.Platform,
): boolean {
  const gitPath = findGitExecutable(pathValue, pathExtValue, platform);
  if (gitPath == null) return false;
  if (platform !== "darwin") return true;
  return posix.normalize(gitPath) !== SYSTEM_MACOS_GIT_PATH
    ? true
    : readAppleDeveloperDirectory() != null;
}

function findGitExecutable(
  pathValue: string | undefined,
  pathExtValue: string | undefined,
  platform: NodeJS.Platform,
): string | null {
  if (pathValue == null) return null;
  const pathApi = platform === "win32" ? win32 : posix;
  const executableExtensions =
    platform === "win32"
      ? [
          "",
          ...(pathExtValue ?? DEFAULT_WINDOWS_EXECUTABLE_EXTENSIONS).split(";"),
        ]
      : [""];
  for (const rawDirectory of pathValue.split(pathApi.delimiter)) {
    const directory = rawDirectory.trim().replace(/^"|"$/g, "");
    if (directory.length === 0) continue;
    for (const extension of executableExtensions) {
      const candidate = pathApi.join(directory, `git${extension}`);
      try {
        accessSync(
          candidate,
          platform === "win32" ? constants.F_OK : constants.X_OK,
        );
        return candidate;
      } catch {}
    }
  }
  return null;
}

function readAppleDeveloperDirectory(): string | null {
  const result = spawnSync("/usr/bin/xcode-select", ["-p"], {
    encoding: "utf8",
    env: process.env,
    timeout: 1_000,
  });
  const directory = result.stdout?.trim();
  return result.status === 0 && directory ? directory : null;
}

function getEnvironmentValue(
  env: NodeJS.ProcessEnv,
  key: string,
): string | undefined {
  return (
    env[
      Object.keys(env).find(
        (candidate) => candidate.toLowerCase() === key.toLowerCase(),
      ) ?? ""
    ]?.trim() || undefined
  );
}
