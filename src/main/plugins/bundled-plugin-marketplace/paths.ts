// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Safe path helpers for bundled plugin cache roots.

import * as pathModule from "node:path";
import type { ExecutionHostPath } from "./types";

export function getBundledPluginCacheRoot({
  bundledPluginName,
  codexHome,
  executionHostPath,
  marketplaceName,
}: {
  bundledPluginName: string;
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  marketplaceName: string;
}): string {
  return safeExecutionHostPath({
    executionHostPath,
    label: "bundled plugin cache",
    path: bundledPluginName,
    root: executionHostPath.join(
      codexHome,
      "plugins",
      "cache",
      marketplaceName,
    ),
  });
}

export function getBundledPluginCacheVersionRoot({
  version,
  ...cacheOptions
}: {
  bundledPluginName: string;
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  marketplaceName: string;
  version: string;
}): string {
  return safeExecutionHostPath({
    executionHostPath: cacheOptions.executionHostPath,
    label: "bundled plugin cache version",
    path: version,
    root: getBundledPluginCacheRoot(cacheOptions),
  });
}

export function getBundledPluginLatestCacheRoot(cacheOptions: {
  bundledPluginName: string;
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  marketplaceName: string;
}): string {
  return safeExecutionHostPath({
    executionHostPath: cacheOptions.executionHostPath,
    label: "bundled plugin latest cache",
    path: "latest",
    root: getBundledPluginCacheRoot(cacheOptions),
  });
}

export function isInsideExecutionHostRoot({
  executionHostPath,
  path,
  root,
}: {
  executionHostPath: ExecutionHostPath;
  path: string;
  root: string;
}): boolean {
  const normalizedRoot = executionHostPath.join(root);
  const normalizedPath = executionHostPath.join(path);
  return (
    normalizedPath === normalizedRoot ||
    normalizedPath.startsWith(`${normalizedRoot}/`) ||
    normalizedPath.startsWith(`${normalizedRoot}\\`)
  );
}

export function assertPathInsideMarketplaceRoot({
  label,
  path,
  root,
}: {
  label: string;
  path: string;
  root: string;
}): void {
  const normalizedRoot = executionHostPathResolve(root);
  const normalizedPath = executionHostPathResolve(path);
  if (
    normalizedPath !== normalizedRoot &&
    !normalizedPath.startsWith(`${normalizedRoot}${nativePathSeparator()}`)
  ) {
    throw Error(`${label} path escapes marketplace root: ${normalizedPath}`);
  }
}

export function resolveExecutionHostPathInsideMarketplaceRoot({
  executionHostPath,
  label,
  path,
  root,
}: {
  executionHostPath: ExecutionHostPath;
  label: string;
  path: string;
  root: string;
}): string {
  const normalizedRoot = executionHostPath.resolve(root);
  const normalizedPath = executionHostPath.resolve(normalizedRoot, path);
  if (
    !isInsideExecutionHostResolvedRoot({
      executionHostPath,
      path: normalizedPath,
      root: normalizedRoot,
    })
  ) {
    throw Error(`${label} path escapes marketplace root: ${normalizedPath}`);
  }
  return normalizedPath;
}

export function isInsideExecutionHostResolvedRoot({
  executionHostPath,
  path,
  root,
}: {
  executionHostPath: Pick<ExecutionHostPath, "sep">;
  path: string;
  root: string;
}): boolean {
  const rootPrefix = root.endsWith(executionHostPath.sep)
    ? root
    : `${root}${executionHostPath.sep}`;
  return path === root || path.startsWith(rootPrefix);
}

function safeExecutionHostPath({
  executionHostPath,
  label,
  path,
  root,
}: {
  executionHostPath: ExecutionHostPath;
  label: string;
  path: string;
  root: string;
}): string {
  if (path.length === 0 || path === "." || path === "..") {
    throw Error(`${label} path must be a single path segment`);
  }
  if (path.includes("/") || path.includes("\\")) {
    throw Error(`${label} path must not contain separators`);
  }
  return executionHostPath.join(root, path);
}

function executionHostPathResolve(path: string): string {
  return pathModule.resolve(path);
}

function nativePathSeparator(): string {
  return pathModule.sep;
}
