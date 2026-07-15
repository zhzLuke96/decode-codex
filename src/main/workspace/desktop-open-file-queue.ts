// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as path from "node:path";
import { app } from "electron";

export const OPEN_PROJECT_ARG = "--open-project";

let queuedOpenPaths: string[] = [];

let openPathsHandler: ((paths: string[]) => void) | null = null;

let openFileListener: ((event: Event, filePath: string) => void) | null = null;

export function isSupportedDesktopOpenFile(filePath: string): boolean {
  return new Set([".csv", ".tsv", ".xls", ".xlsm", ".xlsx"]).has(
    path.extname(filePath).toLowerCase(),
  );
}

export function extractDesktopOpenFileArgs(
  argv: string[],
  platform: NodeJS.Platform | string = process.platform,
): string[] {
  return argv
    .slice(1)
    .filter(
      (arg) =>
        !arg.startsWith("-") && !arg.toLowerCase().startsWith("codex://"),
    )
    .map((arg) =>
      arg.toLowerCase().startsWith("file://") ? new URL(arg).pathname : arg,
    )
    .filter((arg) =>
      platform === "win32"
        ? path.win32.isAbsolute(arg)
        : path.posix.isAbsolute(arg),
    )
    .filter(isSupportedDesktopOpenFile);
}

export function initializeOpenFileQueue(isMacOS: boolean): () => void {
  if (!isMacOS || openFileListener) return () => {};
  openFileListener = (event: Event, filePath: string) => {
    event.preventDefault();
    queueDesktopOpenPaths([filePath]);
  };
  app.on("open-file", openFileListener as never);
  return () => {
    if (!openFileListener) return;
    app.removeListener("open-file", openFileListener as never);
    openFileListener = null;
  };
}

export function queueDesktopOpenPaths(pathsToOpen: string[]): boolean {
  if (pathsToOpen.length === 0) return false;
  if (openPathsHandler) {
    openPathsHandler(pathsToOpen);
  } else {
    queuedOpenPaths.push(...pathsToOpen);
  }
  return true;
}

export function createDesktopOpenPathHandler({
  handlePaths,
}: {
  handlePaths?: (pathsToOpen: string[]) => void;
} = {}): () => void {
  openPathsHandler =
    handlePaths ?? ((pathsToOpen) => queuedOpenPaths.push(...pathsToOpen));
  const pending = queuedOpenPaths.splice(0, queuedOpenPaths.length);
  if (pending.length > 0) openPathsHandler(pending);
  return () => {
    openPathsHandler = null;
  };
}
