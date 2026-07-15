// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Native pipe message framing helpers.

import { existsSync, unlinkSync } from "node:fs";
import { endianness, platform } from "node:os";

const LENGTH_PREFIX_BYTES = 4;
const MAX_NATIVE_PIPE_MESSAGE_BYTES = 8 * 1024 * 1024;

export function encodeNativePipeMessage(message: string): Buffer {
  const payload = Buffer.from(message, "utf8");
  const frame = Buffer.alloc(LENGTH_PREFIX_BYTES + payload.length);
  if (endianness() === "LE") {
    frame.writeUInt32LE(payload.length, 0);
  } else {
    frame.writeUInt32BE(payload.length, 0);
  }
  payload.copy(frame, LENGTH_PREFIX_BYTES);
  return frame;
}

export function decodeNativePipeMessages(data: Buffer): {
  messages: string[];
  remainingData: Buffer;
} | null {
  const messages: string[] = [];
  let offset = 0;
  while (data.length - offset >= LENGTH_PREFIX_BYTES) {
    const payloadLength =
      endianness() === "LE"
        ? data.readUInt32LE(offset)
        : data.readUInt32BE(offset);
    if (payloadLength > MAX_NATIVE_PIPE_MESSAGE_BYTES) return null;
    const frameLength = LENGTH_PREFIX_BYTES + payloadLength;
    if (data.length - offset < frameLength) break;
    messages.push(
      data
        .subarray(offset + LENGTH_PREFIX_BYTES, offset + frameLength)
        .toString("utf8"),
    );
    offset += frameLength;
  }
  return { messages, remainingData: data.subarray(offset) };
}

export function removeStaleNativePipePath(pipePath: string): void {
  if (platform() !== "win32" && existsSync(pipePath)) unlinkSync(pipePath);
}

export function removeNativePipePath(pipePath: string): void {
  if (platform() !== "win32" && existsSync(pipePath)) unlinkSync(pipePath);
}
