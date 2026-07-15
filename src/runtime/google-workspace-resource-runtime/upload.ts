// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Uploads local Office files through the Google Drive connector.

import { vscodeApiL as VscodeFetchBridge } from "../../boundaries/vscode-api";
import {
  CODEX_BASE64_HEADER,
  decodeBase64Bytes,
  encodeBase64Bytes,
} from "../../utils/base64";
import { getPathBasename } from "../path-basename-runtime";
import { sendHostRequest } from "../host-request-runtime";
import { getOpenAIRequestHeaders } from "../request";
import {
  getGoogleWorkspaceExportTarget,
  getGoogleWorkspaceMimeType,
} from "./target";

const googleDriveUploadUrl = "/wham/apps/google_drive/upload";
const googleWorkspaceUrlPattern =
  /https?:\/\/(?:docs|drive)\.google\.com\/[^\s"'<>),]+/iu;

export class GoogleDriveConnectorAuthError extends Error {
  constructor() {
    super("Google Drive connector authentication is required.");
    this.name = "GoogleDriveConnectorAuthError";
  }
}

function extractGoogleWorkspaceUrl(value: unknown): string | null {
  return typeof value === "string"
    ? ((value.match(googleWorkspaceUrlPattern)?.[0] ?? null)?.replace(
        /[.;:!?]+$/u,
        "",
      ) ?? null)
    : null;
}

export function extractGoogleDriveUploadUrl(response: unknown): string | null {
  const connectorResult =
    typeof response === "object" && response != null
      ? (response as { connector_result?: unknown }).connector_result
      : null;
  if (typeof connectorResult !== "object" || connectorResult == null)
    return null;
  const structuredContent = (connectorResult as { structuredContent?: unknown })
    .structuredContent;
  if (
    typeof structuredContent === "object" &&
    structuredContent != null &&
    !Array.isArray(structuredContent)
  ) {
    const record = structuredContent as Record<string, unknown>;
    const url =
      extractGoogleWorkspaceUrl(record.url) ??
      extractGoogleWorkspaceUrl(record.webViewLink);
    if (url != null) return url;
  }
  const content = (connectorResult as { content?: unknown }).content;
  if (Array.isArray(content)) {
    for (const item of content) {
      if (
        typeof item !== "object" ||
        item == null ||
        Array.isArray(item) ||
        (item as { type?: unknown }).type !== "text"
      ) {
        continue;
      }
      const url = extractGoogleWorkspaceUrl((item as { text?: unknown }).text);
      if (url != null) return url;
    }
  }
  return null;
}

function hasGoogleDriveAuthFailure(connectorResult: unknown): boolean {
  if (typeof connectorResult !== "object" || connectorResult == null)
    return false;
  const meta = (connectorResult as { _meta?: unknown })._meta;
  if (typeof meta !== "object" || meta == null || Array.isArray(meta))
    return false;
  const codexApps = (meta as { _codex_apps?: unknown })._codex_apps;
  if (
    typeof codexApps !== "object" ||
    codexApps == null ||
    Array.isArray(codexApps)
  ) {
    return false;
  }
  const authFailure = (codexApps as { connector_auth_failure?: unknown })
    .connector_auth_failure;
  return (
    typeof authFailure === "object" &&
    authFailure != null &&
    !Array.isArray(authFailure) &&
    (authFailure as { is_auth_failure?: unknown }).is_auth_failure === true
  );
}

function sanitizeMultipartFilename(filename: string): string {
  return filename.replace(/[\r\n"]/g, "_");
}

function concatBytes(parts: Uint8Array[]): Uint8Array {
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

function buildGoogleDriveUploadBody({
  fileBytes,
  filename,
  mimeType,
  title,
}: {
  fileBytes: Uint8Array;
  filename: string;
  mimeType: string;
  title: string;
}): { body: Uint8Array; boundary: string } {
  const boundary = `----codex-google-drive-${Math.random().toString(36).slice(2)}`;
  const encoder = new TextEncoder();
  const parts: Uint8Array[] = [];
  const append = (value: string) => {
    parts.push(encoder.encode(value));
  };
  append(
    `--${boundary}\r\nContent-Disposition: form-data; name="arguments"\r\n\r\n${JSON.stringify({ title })}\r\n`,
  );
  append(
    `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${sanitizeMultipartFilename(filename)}"\r\nContent-Type: ${mimeType}\r\n\r\n`,
  );
  parts.push(fileBytes);
  append(`\r\n--${boundary}--\r\n`);
  return { body: concatBytes(parts), boundary };
}

export async function uploadGoogleWorkspaceFile({
  hostId,
  path,
  title,
}: {
  hostId: string;
  path: string;
  title?: string | null;
}): Promise<unknown> {
  if (getGoogleWorkspaceExportTarget(path) == null) {
    throw Error("Unsupported file type. Expected one of: .docx, .pptx, .xlsx.");
  }
  const fileResponse = await sendHostRequest<{
    contentsBase64?: string | null;
  }>("read-file-binary", {
    params: { hostId, path },
  });
  if (fileResponse.contentsBase64 == null) {
    throw Error("File contents are unavailable.");
  }
  const filename = getPathBasename(path);
  const upload = buildGoogleDriveUploadBody({
    fileBytes: decodeBase64Bytes(fileResponse.contentsBase64),
    filename,
    mimeType: getGoogleWorkspaceMimeType(path),
    title: title ?? filename,
  });
  const response = await VscodeFetchBridge.getInstance().post<unknown>(
    googleDriveUploadUrl,
    encodeBase64Bytes(upload.body),
    {
      "Content-Type": `multipart/form-data; boundary=${upload.boundary}`,
      [CODEX_BASE64_HEADER]: "1",
      ...getOpenAIRequestHeaders(),
    },
  );
  const connectorResult =
    typeof response.body === "object" && response.body != null
      ? (response.body as { connector_result?: unknown }).connector_result
      : null;
  if (hasGoogleDriveAuthFailure(connectorResult)) {
    throw new GoogleDriveConnectorAuthError();
  }
  if (
    typeof connectorResult === "object" &&
    connectorResult != null &&
    (connectorResult as { isError?: unknown }).isError === true
  ) {
    throw Error("Google Drive could not open this file.");
  }
  return response.body;
}
