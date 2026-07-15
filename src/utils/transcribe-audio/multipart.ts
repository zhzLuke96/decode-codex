// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
import { vscodeApiL as VscodeFetchBridge } from "../../boundaries/vscode-api";
import * as appRuntime from "../../boundaries/src-l0hb-mz-p";
import { getOpenAIRequestHeaders } from "../../runtime/request";
import { encodeBase64Bytes } from "../base64";
import type { TranscribeAudioOptions } from "./types";

export function initTranscribeAudioMultipartChunk(): void {
  void transcribeAudio;
}

export async function transcribeAudio(
  blob: Blob,
  options: TranscribeAudioOptions = {},
) {
  const contentType =
    options.contentType ??
    (blob.type && blob.type.trim().length > 0 ? blob.type : "audio/webm");
  const extension = contentType.split(/[/;]/)[1] ?? "webm";
  const filename = sanitizeMultipartFilename(
    options.filename ?? `codex.${extension}`,
  );
  const boundary = createMultipartBoundary();
  const body = encodeBase64Bytes(
    await buildMultipartBody({
      blob,
      boundary,
      filename,
      contentType,
      language: options.language,
    }),
  );
  const headers = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`,
    [appRuntime.srcSn]: "1",
    ...getOpenAIRequestHeaders(),
  };
  return (
    await VscodeFetchBridge.getInstance().post("/transcribe", body, headers)
  ).body.text as string;
}
async function buildMultipartBody({
  blob,
  boundary,
  filename,
  contentType,
  language,
}: {
  blob: Blob;
  boundary: string;
  filename: string;
  contentType: string;
  language?: string;
}) {
  const encoder = new TextEncoder();
  const parts: Uint8Array[] = [];
  const fileBytes = new Uint8Array(await blob.arrayBuffer());
  parts.push(encoder.encode(`--${boundary}\r\n`));
  parts.push(
    encoder.encode(
      `Content-Disposition: form-data; name="file"; filename="${filename}"\r\n`,
    ),
  );
  parts.push(encoder.encode(`Content-Type: ${contentType}\r\n\r\n`));
  parts.push(fileBytes);
  parts.push(encoder.encode("\r\n"));
  if (language) {
    parts.push(encoder.encode(`--${boundary}\r\n`));
    parts.push(
      encoder.encode('Content-Disposition: form-data; name="language"\r\n\r\n'),
    );
    parts.push(encoder.encode(`${language}\r\n`));
  }
  parts.push(encoder.encode(`--${boundary}--\r\n`));
  return concatBytes(parts);
}
function sanitizeMultipartFilename(filename: string) {
  return filename.replace(/"/g, "");
}
function createMultipartBoundary() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? `----codex-transcribe-${crypto.randomUUID()}`
    : `----codex-transcribe-${Math.random().toString(36).slice(2)}`;
}
function concatBytes(parts: Uint8Array[]) {
  let byteLength = 0;
  for (const part of parts) byteLength += part.byteLength;
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const part of parts) {
    bytes.set(part, offset);
    offset += part.byteLength;
  }
  return bytes;
}
