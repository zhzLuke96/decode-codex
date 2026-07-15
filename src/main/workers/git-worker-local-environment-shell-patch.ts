// Restored from ref/.vite/build/worker.js
// Captured shell environment diffing for local-environment setup scripts.

import { readHostTextFile } from "./git-worker-local-environment-io";
import type {
  LocalEnvironmentPlatform,
  ShellEnvironmentPatch,
} from "./git-worker-local-environment-types";
import {
  SOURCE_TREE_ENV_VAR,
  WORKTREE_ENV_VAR,
} from "./git-worker-local-environment-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

const ignoredShellEnvironmentNames = new Set([
  SOURCE_TREE_ENV_VAR,
  WORKTREE_ENV_VAR,
  "CODEX_SETUP_EXIT_CODE",
  "OLDPWD",
  "PWD",
  "SHELLOPTS",
  "SHLVL",
  "_",
  "CODEX_SHELL",
]);

export async function readShellEnvironmentPatch({
  beforeEnvironmentPath,
  capturedEnvironmentPath,
  host,
  platform,
}: {
  beforeEnvironmentPath: string;
  capturedEnvironmentPath: string;
  host: WorkerExecutionHostClient;
  platform: LocalEnvironmentPlatform;
}): Promise<ShellEnvironmentPatch | null> {
  try {
    const [beforeText, capturedText] = await Promise.all([
      readHostTextFile(host, beforeEnvironmentPath),
      readHostTextFile(host, capturedEnvironmentPath),
    ]);
    return diffShellEnvironment(
      parseEnvironmentCapture(beforeText),
      parseEnvironmentCapture(capturedText),
      platform,
    );
  } catch {
    return null;
  }
}

function parseEnvironmentCapture(text: string): Record<string, string> {
  const env: Record<string, string> = {};
  for (const line of text.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    if (line.length === 0) continue;
    const equalsIndex = line.indexOf("=");
    if (equalsIndex <= 0) continue;
    env[line.slice(0, equalsIndex)] = line.slice(equalsIndex + 1);
  }
  return env;
}

function diffShellEnvironment(
  before: Record<string, string>,
  after: Record<string, string>,
  platform: LocalEnvironmentPlatform,
): ShellEnvironmentPatch | null {
  const beforeMap = normalizedEnvironmentMap(before, platform);
  const afterMap = normalizedEnvironmentMap(after, platform);
  const names = new Set([...beforeMap.keys(), ...afterMap.keys()]);
  const set: Record<string, string> = {};
  const exclude: string[] = [];

  for (const normalizedName of names) {
    const beforeValue = beforeMap.get(normalizedName);
    const afterValue = afterMap.get(normalizedName);
    const originalName = afterValue?.key ?? beforeValue?.key;
    if (
      originalName == null ||
      shouldIgnoreShellEnvironmentName(originalName, platform) ||
      hasLineBreak(beforeValue?.value) ||
      hasLineBreak(afterValue?.value)
    ) {
      continue;
    }
    if (afterValue == null) {
      exclude.push(originalName);
    } else if (beforeValue?.value !== afterValue.value) {
      set[originalName] = afterValue.value;
    }
  }

  if (exclude.length === 0 && Object.keys(set).length === 0) return null;
  exclude.sort();
  return {
    version: 1,
    set: Object.fromEntries(
      Object.entries(set).sort(([left], [right]) => left.localeCompare(right)),
    ),
    exclude,
  };
}

function normalizedEnvironmentMap(
  env: Record<string, string>,
  platform: LocalEnvironmentPlatform,
): Map<string, { key: string; value: string }> {
  const map = new Map<string, { key: string; value: string }>();
  for (const [key, value] of Object.entries(env)) {
    if (value != null) {
      map.set(normalizedEnvironmentName(key, platform), { key, value });
    }
  }
  return map;
}

function normalizedEnvironmentName(
  name: string,
  platform: LocalEnvironmentPlatform,
): string {
  return platform === "win32" ? name.toUpperCase() : name;
}

function shouldIgnoreShellEnvironmentName(
  name: string,
  platform: LocalEnvironmentPlatform,
): boolean {
  const normalizedName = normalizedEnvironmentName(name, platform);
  return (
    ignoredShellEnvironmentNames.has(normalizedName) ||
    normalizedName.startsWith("BASH_FUNC_")
  );
}

function hasLineBreak(value: string | undefined): boolean {
  return value == null ? false : value.includes("\n") || value.includes("\r");
}
