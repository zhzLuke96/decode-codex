// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { randomUUID } from "node:crypto";
import { renameSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import * as path from "node:path";

export const requireFromWorkspaceBoundary = createRequire(import.meta.url);

export function writeFileAtomically(filePath: string, data: string): void {
  const tempPath = path.join(
    path.dirname(filePath),
    `.${path.basename(filePath)}.tmp-${Date.now()}-${randomUUID()}`,
  );
  try {
    writeFileSync(tempPath, data, "utf8");
    renameSync(tempPath, filePath);
  } catch (error) {
    rmSync(tempPath, {
      force: true,
    });
    throw error;
  }
}

export function arrayOfStrings(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}

export function isNodeErrorCode(error: unknown, code: string): boolean {
  return isRecord(error) && error.code === code;
}

export function filterStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item) => typeof item === "string")
    : [];
}

export function filterStringRecord(value: unknown): Record<string, string> {
  if (typeof value !== "object" || value == null || Array.isArray(value))
    return {};
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => typeof item === "string"),
  ) as Record<string, string>;
}
