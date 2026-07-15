// Restored from ref/.vite/build/worker.js
// OpenIn target system launch helpers.

import { existsSync, readdirSync, statSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { buildZedArgs } from "./launch-editors";
import { findExistingAncestor } from "./launch-paths";
import { spawnOpenInTargetCommand } from "./launch-spawn";
import type { OpenInTargetOpenContext } from "./types";

export async function openMacDefault(
  path: string,
  appPath?: string | null,
): Promise<void> {
  await spawnOpenInTargetCommand(
    "open",
    appPath == null ? [path] : ["-a", appPath, path],
  );
}

export async function openWithElectronShell(path: string): Promise<void> {
  const { shell } = await import("electron");
  const error = await shell.openPath(path);
  if (error) throw Error(error);
}

export async function openWindowsFileManagerPath(path: string): Promise<void> {
  const { shell } = await import("electron");
  const existingPath = findExistingAncestor(path);
  if (existingPath != null && statSync(existingPath).isFile()) {
    shell.showItemInFolder(existingPath);
    return;
  }
  const error = await shell.openPath(existingPath ?? path);
  if (error) throw Error(error);
}

export async function openWindowsStartTarget(
  command: string,
  args: string[],
): Promise<void> {
  await spawnOpenInTargetCommand(
    "cmd.exe",
    ["/d", "/s", "/c", "start", "", command, ...args],
    { env: createWindowsAppsPathEnv() },
  );
}

export async function openXcodePath({
  command,
  path,
  location,
}: OpenInTargetOpenContext): Promise<void> {
  if (basename(command) === "xed") {
    const containerPath = findXcodeContainer(path);
    const args: string[] = [];
    if (containerPath != null) args.push("--project", containerPath);
    if (location != null) args.push("--line", location.line.toString());
    args.push(path);
    await spawnOpenInTargetCommand(command, args);
    return;
  }
  await spawnOpenInTargetCommand("open", ["-a", command, path]);
}

export async function openZedPath({
  command,
  path,
  location,
  hostConfig,
  remoteWorkspaceRoot,
  remotePath,
}: OpenInTargetOpenContext): Promise<void> {
  const args = buildZedArgs(
    path,
    location,
    hostConfig,
    remoteWorkspaceRoot,
    remotePath,
  );
  const firstTarget = args[0] ?? path;
  const appPath = macApplicationPathFromExecutable(command);
  if (appPath != null) {
    const unlocatedTarget =
      location == null
        ? firstTarget
        : (buildZedArgs(
            path,
            null,
            hostConfig,
            remoteWorkspaceRoot,
            remotePath,
          )[0] ?? firstTarget);
    await spawnOpenInTargetCommand("open", ["-a", appPath, unlocatedTarget]);
    if (location == null) return;
    try {
      await spawnOpenInTargetCommand(command, args);
    } catch {}
    return;
  }
  await spawnOpenInTargetCommand(command, args);
}

function createWindowsAppsPathEnv(): NodeJS.ProcessEnv {
  const windowsAppsDir = join(
    process.env.LOCALAPPDATA ??
      join(process.env.USERPROFILE ?? "", "AppData", "Local"),
    "Microsoft",
    "WindowsApps",
  );
  const pathKey = process.env.Path == null ? "PATH" : "Path";
  const entries = (process.env[pathKey] ?? "").split(";").filter(Boolean);
  if (
    !entries.some(
      (entry) => entry.toLowerCase() === windowsAppsDir.toLowerCase(),
    )
  ) {
    entries.unshift(windowsAppsDir);
  }
  return {
    ...process.env,
    [pathKey]: entries.join(";"),
  };
}

function findXcodeContainer(path: string): string | null {
  let directory =
    existsSync(path) && statSync(path).isDirectory() ? path : dirname(path);
  let packageDirectory: string | null = null;
  for (;;) {
    let entries: string[];
    try {
      entries = readdirSync(directory);
    } catch {
      entries = [];
    }
    const workspace = entries.find((entry) => entry.endsWith(".xcworkspace"));
    if (workspace != null) return join(directory, workspace);
    const project = entries.find((entry) => entry.endsWith(".xcodeproj"));
    if (project != null) return join(directory, project);
    if (packageDirectory == null && entries.includes("Package.swift")) {
      packageDirectory = directory;
    }
    const parent = dirname(directory);
    if (parent === directory) return packageDirectory;
    directory = parent;
  }
}

function macApplicationPathFromExecutable(command: string): string | null {
  const marker = ".app/Contents/MacOS/";
  const index = command.indexOf(marker);
  return index === -1 ? null : command.slice(0, index + ".app".length);
}
