// Restored from ref/webview/assets/rpc-BF_evcbU.js
// RPC runtime boundary facade.
// The full RPC runtime remains an open boundary; these declarations cover the
// window-command surface consumed by smaller restored chunks.
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as zodRuntime from "./src-l0hb-mz-p";

const { srcXa: zLiteral } = zodRuntime;

export type WindowRpcAction = {
  type: string;
  windowId?: string;
  [key: string]: any;
};

type AppHostBoundary = {
  dispatchWindowRpcAction?: (
    action: WindowRpcAction,
    options?: unknown,
  ) => unknown;
};

export const currentWindowId = "current";
export const currentWindowIdSchema = zLiteral(currentWindowId);
export const appHost: AppHostBoundary = {};
export const appServices: Record<string, unknown> = {};

export function dispatchWindowRpcAction(
  action: WindowRpcAction,
  options?: any,
): any {
  return appHost.dispatchWindowRpcAction?.(action, options);
}

export function initializeAppHostServices(): any {
  return appServices;
}

export function normalizeFilesystemPath(path: string): string {
  return path.replace(/\\/g, "/").replace(/\/+/g, "/");
}

export function toComparableFilesystemPath(path: string): string {
  const normalizedPath = normalizeFilesystemPath(path);
  return /^[a-z]:/i.test(normalizedPath)
    ? normalizedPath.toLowerCase()
    : normalizedPath;
}

export function joinFilesystemPath(
  basePath: string,
  relativePath: string,
): string {
  if (isAbsoluteFilesystemPath(relativePath)) {
    return normalizeFilesystemPath(relativePath);
  }
  return normalizeFilesystemPath(
    `${basePath.replace(/[\\/]+$/u, "")}/${relativePath.replace(/^[\\/]+/u, "")}`,
  );
}

export function isAbsoluteFilesystemPath(path: string): boolean {
  return /^(?:[a-z]:[\\/]|\/|\\\\)/i.test(path);
}

export function formatWorkspaceRelativePath(args: {
  root: string;
  relativePath: string;
  includeWorkspaceRootLabel: boolean;
}): string {
  if (!args.includeWorkspaceRootLabel) return args.relativePath;
  const normalizedRoot = normalizeFilesystemPath(args.root).replace(/\/$/u, "");
  const rootLabel = normalizedRoot.split("/").pop() ?? normalizedRoot;
  return joinFilesystemPath(rootLabel, args.relativePath);
}

export function joinHostFilesystemPath(
  root: string,
  relativePath: string,
  isWindowsHost: boolean,
): string {
  const separator = isWindowsHost ? "\\" : "/";
  if (isAbsoluteFilesystemPath(relativePath)) return relativePath;
  return `${root.replace(/[\\/]+$/u, "")}${separator}${relativePath.replace(/^[\\/]+/u, "")}`;
}
