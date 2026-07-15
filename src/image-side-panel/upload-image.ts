// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Upload an image (from a data: URL) to the files service + Azure blob storage,
// returning an `image_asset_pointer` for use as a composer attachment.
import { encodeBase64Bytes } from "../utils/base64";
import {
  filesApiClient,
  azureBlobStorageClient,
  azureBlobUploadHeaderName,
  logger,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ImageAssetPointer {
  type: "image_asset_pointer";
  asset_pointer: string;
  width: number;
  height: number;
  size_bytes: number;
}

interface ParsedDataUrl {
  base64Payload: string;
  bytes: Uint8Array;
  contentType: string;
}

function assetPointerUrl(fileId: string): string {
  return fileId.startsWith("file_")
    ? `sediment://${fileId}`
    : `file-service://${fileId}`;
}

function parseDataUrl(dataUrl: string): ParsedDataUrl {
  if (!dataUrl.startsWith("data:"))
    throw Error("Malformed data URL (not a data: URL)");
  const commaIndex = dataUrl.indexOf(",");
  if (commaIndex === -1) throw Error("Malformed data URL (no comma)");
  const header = dataUrl.substring(5, commaIndex);
  const payload = dataUrl.substring(commaIndex + 1);
  const contentType = header.match(/^[^;]+/)?.[0] || "image/png";
  const isBase64 = /;base64/i.test(header);
  if (!payload) throw Error("Malformed data URL (missing payload)");

  if (isBase64) {
    const decoded = atob(payload);
    const bytes = new Uint8Array(decoded.length);
    for (let index = 0; index < decoded.length; index++)
      bytes[index] = decoded.charCodeAt(index);
    return { base64Payload: payload, bytes, contentType };
  }

  const decoded = decodeURIComponent(payload);
  const bytes = new TextEncoder().encode(decoded);
  return { base64Payload: encodeBase64Bytes(bytes), bytes, contentType };
}

function dataUrlToFile(
  dataUrl: string,
  filename: string,
): { base64Payload: string; file: File } {
  const { base64Payload, bytes, contentType } = parseDataUrl(dataUrl);
  const name = filename.trim().length > 0 ? filename.trim() : "image.png";
  return {
    base64Payload,
    file: new File([new Uint8Array(bytes)], name, { type: contentType }),
  };
}

function getImageDimensions(
  src: string,
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve({ width: image.naturalWidth, height: image.naturalHeight });
    };
    image.onerror = () => {
      reject(Error("Failed to load image"));
    };
    image.src = src;
  });
}

function extractEmbeddedUploadUrl(url: string): string | null {
  try {
    return (
      new URL(url, window.location.origin).searchParams.get("upload_url") ??
      null
    );
  } catch {
    return null;
  }
}

async function requestFileUpload(
  fileName: string,
  fileSize: number,
): Promise<{ file_id: string; upload_url: string }> {
  const { file_id, upload_url } = await filesApiClient.safePost("/files", {
    requestBody: {
      file_name: fileName,
      file_size: fileSize,
      use_case: "codex",
      timezone_offset_min: new Date().getTimezoneOffset(),
      reset_rate_limits: false,
    },
  });
  return { file_id, upload_url };
}

async function putToBlobStorage(
  uploadUrl: string,
  file: File,
  base64Payload: string,
): Promise<void> {
  try {
    await azureBlobStorageClient.getInstance().put(uploadUrl, base64Payload, {
      "Content-Type": file.type || "application/octet-stream",
      "x-ms-blob-type": "BlockBlob",
      "x-ms-version": "2020-04-08",
      [azureBlobUploadHeaderName]: "1",
      ...(file.type ? { "x-ms-blob-content-type": file.type } : {}),
    });
  } catch (error) {
    const status = (error as { status?: unknown })?.status;
    if (typeof status === "number" && status >= 200 && status < 300) return;
    throw error;
  }
}

function resolveAzureUploadUrl(uploadUrl: string): string {
  if (!uploadUrl.toLowerCase().includes("estuary")) return uploadUrl;
  const embedded = extractEmbeddedUploadUrl(uploadUrl);
  if (!embedded)
    throw Error("Combined upload URL missing embedded Azure upload_url");
  return embedded;
}

async function finalizeFileUpload(fileId: string): Promise<void> {
  try {
    await filesApiClient.safePost("/files/{file_id}/uploaded", {
      parameters: { path: { file_id: fileId } },
      requestBody: {},
    });
  } catch (error) {
    logger.error("Finalize upload failed for file", {
      safe: { fileId },
      sensitive: { error },
    });
  }
}

export async function uploadImageFromDataUrl(
  dataUrl: string,
  filename: string,
): Promise<ImageAssetPointer> {
  const { base64Payload, file } = dataUrlToFile(dataUrl, filename);
  const { width, height } = await getImageDimensions(dataUrl);
  const { file_id, upload_url } = await requestFileUpload(file.name, file.size);
  await putToBlobStorage(
    resolveAzureUploadUrl(upload_url),
    file,
    base64Payload,
  );
  await finalizeFileUpload(file_id);
  return {
    type: "image_asset_pointer",
    asset_pointer: assetPointerUrl(file_id),
    width,
    height,
    size_bytes: file.size,
  };
}

export interface ImageAttachmentUpload {
  pointer: ImageAssetPointer;
  uploadStatus: "ready";
}

export async function createImageAttachmentUpload({
  dataUrl,
  filename,
}: {
  dataUrl: string;
  filename: string;
}): Promise<ImageAttachmentUpload> {
  const pointer = await uploadImageFromDataUrl(dataUrl, filename);
  return {
    pointer: { ...pointer, size_bytes: pointer.size_bytes ?? 0 },
    uploadStatus: "ready",
  };
}

export function initImageUploadChunk(): void {
  void createImageAttachmentUpload;
}
