// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Native-pipe path allocation and stale socket cleanup.

import { randomUUID } from "node:crypto";
import { chmodSync, existsSync, unlinkSync } from "node:fs";
import { lstat, mkdir, unlink } from "node:fs/promises";
import net from "node:net";
import { platform } from "node:os";
import path from "node:path";

const STALE_PIPE_CONNECT_TIMEOUT_MS = 200;

export async function resolveNativePipePath(
  nativePipeDirectory?: string,
): Promise<string> {
  const basePath =
    nativePipeDirectory ??
    (platform() === "win32"
      ? "\\\\.\\pipe\\codex-browser-use"
      : "/tmp/codex-browser-use");
  if (platform() === "win32") return `${basePath}-${randomUUID()}`;
  await ensureNativePipeDirectory(basePath);
  return path.join(basePath, `${randomUUID()}.sock`);
}

export async function ensureNativePipeDirectory(
  directoryPath: string,
): Promise<void> {
  try {
    await mkdir(directoryPath, { recursive: true });
    return;
  } catch (error) {
    if (
      !(error instanceof Error && "code" in error && error.code === "EEXIST")
    ) {
      throw error;
    }
  }

  const stat = await lstat(directoryPath);
  if (stat.isDirectory()) return;
  if (!stat.isSocket()) {
    throw Error(
      "Browser-use native pipe directory path exists and is not a directory",
    );
  }
  if (await canConnectToPipe(directoryPath)) {
    throw Error("Browser-use native pipe directory path is already in use");
  }
  await unlink(directoryPath);
  await mkdir(directoryPath, { recursive: true });
}

export async function prepareNativePipePath(pipePath: string): Promise<void> {
  if (platform() === "win32" || !existsSync(pipePath)) return;
  if (await canConnectToPipe(pipePath)) {
    throw Error("Browser-use native pipe is already in use");
  }
  unlinkSync(pipePath);
}

export function removeNativePipePath(pipePath: string): void {
  if (platform() !== "win32" && existsSync(pipePath)) unlinkSync(pipePath);
}

export function chmodOwnerReadWrite(pipePath: string): void {
  chmodSync(pipePath, 0o600);
}

async function canConnectToPipe(pipePath: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection(pipePath);
    let settled = false;
    const timeout = setTimeout(
      () => settle(true),
      STALE_PIPE_CONNECT_TIMEOUT_MS,
    );
    timeout.unref();
    const settle = (value: boolean | Error): void => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      socket.destroy();
      if (value instanceof Error) reject(value);
      else resolve(value);
    };
    socket.once("connect", () => settle(true));
    socket.once("error", (error: NodeJS.ErrnoException) => {
      if (error.code === "ECONNREFUSED" || error.code === "ENOENT") {
        settle(false);
        return;
      }
      settle(error);
    });
  });
}
