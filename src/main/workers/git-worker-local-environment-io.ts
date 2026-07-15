// Restored from ref/.vite/build/worker.js
// Shared local-environment host IO and stream helpers.

import type { ReadableStream } from "node:stream/web";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function readHostTextFile(
  host: WorkerExecutionHostClient,
  path: string,
): Promise<string> {
  return new Response((await host.readFile(path)) as BodyInit).text();
}

export async function readStream(
  stream: ReadableStream<unknown>,
  onChunk: (chunk: Uint8Array) => void,
): Promise<void> {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      onChunk(chunkToBytes(value));
    }
  } finally {
    reader.releaseLock();
  }
}

export async function readStreamAsText(
  stream: ReadableStream<unknown>,
): Promise<string> {
  const chunks: Uint8Array[] = [];
  await readStream(stream, (chunk) => chunks.push(chunk));
  return new TextDecoder().decode(concatBytes(chunks));
}

export function normalizeWaitResult(value: unknown): {
  code: number | null;
  signal: string | null;
} {
  if (!isRecord(value)) return { code: null, signal: null };
  return {
    code: typeof value.code === "number" ? value.code : null,
    signal: typeof value.signal === "string" ? value.signal : null,
  };
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function chunkToBytes(chunk: unknown): Uint8Array {
  if (chunk instanceof Uint8Array) return chunk;
  if (Array.isArray(chunk)) return Uint8Array.from(chunk.map(Number));
  if (chunk instanceof ArrayBuffer) return new Uint8Array(chunk);
  if (ArrayBuffer.isView(chunk)) {
    return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  }
  if (typeof chunk === "string") return new TextEncoder().encode(chunk);
  if (chunk == null) return new Uint8Array();
  return new TextEncoder().encode(String(chunk));
}

function concatBytes(chunks: Uint8Array[]): Uint8Array {
  const byteLength = chunks.reduce(
    (total, chunk) => total + chunk.byteLength,
    0,
  );
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}
