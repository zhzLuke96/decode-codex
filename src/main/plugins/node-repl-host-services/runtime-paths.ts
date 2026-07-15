// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Runtime path selection for node_repl browser/computer-use thread config.

import { accessSync, constants, existsSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import {
  CODEX_BROWSER_USE_NODE_PATH_ENV,
  CODEX_CLI_PATH_ENV,
  CODEX_NODE_REPL_PATH_ENV,
} from "./constants";
import type { NodeReplRuntimePaths, RuntimePathResolution } from "./types";

export function resolveNodeReplRuntimePaths({
  env = process.env,
  isPackaged = true,
  platform = process.platform,
  repoRoot = process.cwd(),
  runtimeVersion = "stable",
  resolveBundledCodexPath,
  resolveBundledNodeModuleDirs,
  resolveBundledNodePath,
  resolveBundledNodeReplPath,
  resolvePrimaryRuntimeNodePath = resolveWindowsPrimaryRuntimeNodePath,
  resourcesPath = process.resourcesPath,
}: {
  env?: NodeJS.ProcessEnv;
  isPackaged?: boolean;
  platform?: string;
  repoRoot?: string;
  runtimeVersion?: string;
  resolveBundledCodexPath(resourcesPath: string): string | null;
  resolveBundledNodeModuleDirs(resourcesPath: string): string[];
  resolveBundledNodePath(resourcesPath: string): string | null;
  resolveBundledNodeReplPath(resourcesPath: string): string | null;
  resolvePrimaryRuntimeNodePath?(
    platform: string,
    runtimeVersion: string,
  ): string | null;
  resourcesPath?: string;
}): NodeReplRuntimePaths {
  const primaryRuntimeNodePath = resolvePrimaryRuntimeNodePath(
    platform,
    runtimeVersion,
  );
  const codexCliPath =
    resolveEnvPath({
      platform,
      rawValue: env[CODEX_CLI_PATH_ENV],
      resolveWindowsAppsPath: resolveBundledCodexPath,
    }) ??
    resolveRuntimePath({
      devRelativePathSegments: ["extension", "bin", "codex"],
      isPackaged,
      platform,
      repoRoot,
      resolveBundledPath: resolveBundledCodexPath,
      resourcesPath,
    });
  const bundledNodePath = resolveRuntimePath({
    devRelativePathSegments: null,
    isPackaged,
    platform,
    repoRoot,
    resolveBundledPath: resolveBundledNodePath,
    resourcesPath,
  });
  const nodePath =
    resolveEnvPath({
      platform,
      rawValue: env[CODEX_BROWSER_USE_NODE_PATH_ENV],
      resolveWindowsAppsPath: resolveBundledNodePath,
    }) ??
    (bundledNodePath.path == null && primaryRuntimeNodePath != null
      ? { path: primaryRuntimeNodePath, source: "primary-runtime" }
      : bundledNodePath);
  const nodeReplPath =
    resolveEnvPath({
      platform,
      rawValue: env[CODEX_NODE_REPL_PATH_ENV],
      resolveWindowsAppsPath: resolveBundledNodeReplPath,
    }) ??
    resolveRuntimePath({
      devRelativePathSegments: null,
      isPackaged,
      platform,
      repoRoot,
      resolveBundledPath: resolveBundledNodeReplPath,
      resourcesPath,
    });

  return {
    codexCliPath: codexCliPath.path,
    codexCliPathSource: codexCliPath.source,
    nodeModuleDirs: resolveBundledNodeModuleDirs(resourcesPath),
    nodePath: nodePath.path,
    nodePathSource: nodePath.source,
    nodeReplPath: nodeReplPath.path,
    nodeReplPathSource: nodeReplPath.source,
    platform,
  };
}

export function resolveRuntimePath({
  devRelativePathSegments,
  isPackaged,
  platform,
  repoRoot,
  resolveBundledPath,
  resourcesPath,
}: {
  devRelativePathSegments: string[] | null;
  isPackaged: boolean;
  platform: string;
  repoRoot: string;
  resolveBundledPath(resourcesPath: string): string | null;
  resourcesPath: string;
}): RuntimePathResolution {
  const resolvedPath = resolveRuntimePathValue({
    devRelativePathSegments,
    isPackaged,
    platform,
    repoRoot,
    resolveBundledPath,
    resourcesPath,
  });
  return {
    path: resolvedPath,
    source: resolvedPath == null ? "missing" : "bundled-or-dev",
  };
}

export function resolveEnvPath({
  platform,
  rawValue,
  resolveWindowsAppsPath,
}: {
  platform: string;
  rawValue?: string;
  resolveWindowsAppsPath(resourcesPath: string): string | null;
}): RuntimePathResolution | null {
  if (rawValue == null) return null;
  const trimmed = rawValue.trim();
  if (!trimmed) return null;
  if (platform === "win32" && isWindowsAppsPath(trimmed)) {
    const relocatedPath = resolveWindowsAppsPath(path.dirname(trimmed));
    return relocatedPath == null
      ? null
      : { path: relocatedPath, source: "env-override-relocated" };
  }
  return { path: trimmed, source: "env-override" };
}

export function resolveWindowsPrimaryRuntimeNodePath(
  platform: string,
  runtimeVersion: string = "stable",
): string | null {
  if (platform !== "win32") return null;
  const nodePath = path.join(
    homedir(),
    ".cache",
    "codex-runtimes",
    runtimeVersion,
    "dependencies",
    "node",
    "bin",
    "node.exe",
  );
  return isExecutableFile(nodePath) ? nodePath : null;
}

export function isExecutableFile(filePath: string): boolean {
  if (!existsSync(filePath)) return false;
  try {
    if (!statSync(filePath).isFile()) return false;
    if (process.platform !== "win32") accessSync(filePath, constants.X_OK);
    return true;
  } catch {
    return false;
  }
}

export function isWindowsAppsPath(filePath: string): boolean {
  return filePath
    .replaceAll("/", "\\")
    .toLowerCase()
    .includes("\\program files\\windowsapps\\");
}

function resolveRuntimePathValue({
  devRelativePathSegments,
  isPackaged,
  platform,
  repoRoot,
  resolveBundledPath,
  resourcesPath,
}: {
  devRelativePathSegments: string[] | null;
  isPackaged: boolean;
  platform: string;
  repoRoot: string;
  resolveBundledPath(resourcesPath: string): string | null;
  resourcesPath: string;
}): string | null {
  const bundledPath = resolveBundledPath(resourcesPath);
  if (
    isPackaged ||
    platform === "win32" ||
    bundledPath != null ||
    devRelativePathSegments == null
  ) {
    return bundledPath;
  }
  const devPath = path.join(repoRoot, ...devRelativePathSegments);
  return isExecutableFile(devPath) ? devPath : null;
}
