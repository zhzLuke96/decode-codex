// Restored from ref/.vite/build/src-CoIhwwHr.js
// Runtime object and app-server file helpers for ambient suggestions.

import type { AmbientAppServerConnection } from "../types";

export async function readAppServerTextFile(
  client: AmbientAppServerConnection,
  filePath: string,
): Promise<string> {
  const contents = await client.readFile(filePath);
  if (typeof contents === "string") return contents;
  if (contents instanceof ArrayBuffer) {
    return Buffer.from(contents).toString("utf8");
  }
  if (ArrayBuffer.isView(contents)) {
    return Buffer.from(
      contents.buffer,
      contents.byteOffset,
      contents.byteLength,
    ).toString("utf8");
  }
  if (typeof Blob !== "undefined" && contents instanceof Blob) {
    return contents.text();
  }
  return String(contents);
}

export function assertSinglePathSegment(value: string): string {
  const trimmed = value.trim();
  if (
    trimmed.length === 0 ||
    trimmed === "." ||
    trimmed === ".." ||
    trimmed.includes("/") ||
    trimmed.includes("\\")
  ) {
    throw Error("Expected a single path segment.");
  }
  return trimmed;
}

export function getStringProperty(
  value: Record<string, unknown>,
  key: string,
): string {
  const item = value[key];
  if (typeof item !== "string" || item.trim().length === 0) {
    throw Error(`Expected ${key} to be a non-empty string.`);
  }
  return item;
}

export function getRecordProperty(value: unknown, key: string): unknown {
  return parseRecordOrNull(value)?.[key];
}

export function parseRecord(value: unknown): Record<string, unknown> {
  if (typeof value === "object" && value != null && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  throw Error("Expected object.");
}

export function parseRecordOrNull(
  value: unknown,
): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
