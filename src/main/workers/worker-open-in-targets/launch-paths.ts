// Restored from ref/.vite/build/worker.js
// OpenIn target path and terminal argument helpers.

import { existsSync, statSync } from "node:fs";
import { dirname } from "node:path";

export function buildFileManagerArgs(path: string): string[] {
  if (process.platform === "darwin") return ["-R", path];
  if (process.platform === "win32") {
    const existingPath = findExistingAncestor(path);
    if (existingPath == null) return [path];
    return statSync(existingPath).isFile()
      ? ["/select,", existingPath]
      : [existingPath];
  }
  return [path];
}

export function getDirectoryToOpen(path: string): string {
  return existsSync(path) && statSync(path).isDirectory()
    ? path
    : dirname(path);
}

export function buildWindowsTerminalArgs(path: string): string[] {
  return ["-d", getDirectoryToOpen(path)];
}

export function buildWslTerminalArgs(path: string): string[] {
  const directory = windowsPathToWslPath(getDirectoryToOpen(path));
  return directory.startsWith("\\\\")
    ? [...buildWindowsTerminalArgs(path), "wsl.exe"]
    : [...buildWindowsTerminalArgs(path), "wsl.exe", "--cd", directory];
}

export function windowsPathToWslPath(path: string): string {
  const driveUnc = path.match(/^(?:\\\\|\/\/)\?[\\/]([a-zA-Z]):[\\/](.*)$/);
  if (driveUnc != null) {
    return `/mnt/${driveUnc[1].toLowerCase()}/${driveUnc[2].replace(/\\/g, "/")}`;
  }
  if (/^(\\\\|\/\/)(wsl\$|wsl\.localhost)/i.test(path)) {
    const parts = path
      .replace(/^((\\\\|\/\/)(wsl\$|wsl\.localhost)[\\/]+)/i, "")
      .split(/[\\/]/);
    parts.shift();
    const wslPath = parts.join("/").replace(/\\/g, "/");
    if (wslPath.length === 0) return "/";
    return wslPath.startsWith("/") ? wslPath : `/${wslPath}`;
  }
  if (path.startsWith("\\\\") || path.startsWith("//")) {
    return path.replace(/\//g, "\\");
  }
  if (path.startsWith("/")) return path;
  const drivePath = path.match(/^([a-zA-Z]):[\\/](.*)$/);
  return drivePath == null
    ? path.replace(/\\/g, "/")
    : `/mnt/${drivePath[1].toLowerCase()}/${drivePath[2].replace(/\\/g, "/")}`;
}

export function findExistingAncestor(path: string): string | null {
  let candidate = path;
  for (;;) {
    if (existsSync(candidate)) return candidate;
    const parent = dirname(candidate);
    if (parent === candidate) return null;
    candidate = parent;
  }
}
