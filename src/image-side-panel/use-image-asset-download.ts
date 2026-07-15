// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// React hook that downloads an image asset (file-service:// / sediment:// pointer)
// as bytes, exposes a transient object URL, and tracks loading/error state.
import { useEffect, useState } from "react";
import { appLogger as logger } from "../runtime/app-logger";
import { queryDurations as DURATIONS } from "../runtime/host-query-runtime";
import { useQuery } from "../runtime/query-client/react-query-runtime";
import { codexRequest as filesApiClient } from "../runtime/request";
import { vscodeApiL as httpClient } from "../boundaries/vscode-api";

export interface ImageAssetDownloadRequest {
  downloadUrl: string;
  requestHeaders?: Record<string, string>;
}

export interface ImageAssetResolver {
  cacheKey?: readonly string[];
  getDownloadRequest: (fileId: string) => Promise<ImageAssetDownloadRequest>;
}

export interface ImageAssetDownloadResult {
  src: string | null;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

const FILE_SERVICE_SCHEME = "file-service://";
const SEDIMENT_SCHEME = "sediment://";

export function initImageAssetDownloadRuntimeChunk(): void {}

export function isImageAssetPointer(pointer: string): boolean {
  return (
    pointer.startsWith(FILE_SERVICE_SCHEME) ||
    pointer.startsWith(SEDIMENT_SCHEME)
  );
}

export function stripAssetPointerScheme(pointer: string): string {
  if (pointer.startsWith(FILE_SERVICE_SCHEME))
    return pointer.replace(FILE_SERVICE_SCHEME, "");
  if (pointer.startsWith(SEDIMENT_SCHEME))
    return pointer.replace(SEDIMENT_SCHEME, "");
  return pointer;
}

function getAssetPointerScheme(pointer: string): string {
  try {
    return new URL(pointer).protocol.replace(/:$/, "") || "unknown";
  } catch {
    return "unknown";
  }
}

function parseDownloadUrlResponse(
  value: unknown,
): { download_url?: string; status?: string } | null {
  if (typeof value !== "object" || !value) return null;
  const entries = Object.fromEntries(Object.entries(value));
  const downloadUrl = entries.download_url;
  const status = entries.status;
  return {
    ...(typeof downloadUrl === "string" ? { download_url: downloadUrl } : {}),
    ...(typeof status === "string" ? { status } : {}),
  };
}

function extractDownloadUrl(value: unknown): string {
  const parsed = parseDownloadUrlResponse(value);
  if (
    parsed == null ||
    (parsed.status != null && parsed.status !== "success") ||
    !parsed.download_url
  )
    throw Error("Failed to get download URL");
  return parsed.download_url;
}

async function fetchDefaultDownloadRequest(
  fileId: string,
): Promise<ImageAssetDownloadRequest> {
  return {
    downloadUrl: extractDownloadUrl(
      await filesApiClient.safeGet("/files/download/{file_id}", {
        parameters: { path: { file_id: fileId } },
      }),
    ),
  };
}

async function fetchImageAssetBlob(
  request: ImageAssetDownloadRequest,
  signal?: AbortSignal,
): Promise<Blob> {
  const { body } = await httpClient
    .getInstance()
    .get(request.downloadUrl, request.requestHeaders, signal);
  const parsed = parseDownloadedImageResponse(body);
  const decoded = atob(parsed.base64);
  const bytes = new Uint8Array(decoded.length);
  for (let index = 0; index < decoded.length; index++)
    bytes[index] = decoded.charCodeAt(index);
  return new Blob([bytes], {
    type: parsed.contentType || "application/octet-stream",
  });
}

function parseDownloadedImageResponse(body: unknown): {
  base64: string;
  contentType?: string;
} {
  if (typeof body !== "object" || body == null) {
    throw Error("Invalid image download response");
  }
  const record = body as Record<string, unknown>;
  if (typeof record.base64 !== "string") {
    throw Error("Invalid image download response");
  }
  return {
    base64: record.base64,
    ...(typeof record.contentType === "string"
      ? { contentType: record.contentType }
      : {}),
  };
}

function revokeObjectUrlSoon(objectUrl: string): void {
  if (objectUrl.startsWith("blob:") === true)
    window.setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 0);
}

export function useImageAssetDownload(
  assetPointer: string,
  resolver?: ImageAssetResolver,
): ImageAssetDownloadResult {
  const enabled = !!assetPointer;
  const cacheKey = resolver?.cacheKey ?? ["codex"];
  const queryKey = ["file", "image-src", assetPointer, ...cacheKey];

  const queryFn = async (): Promise<Blob> => {
    const fileId = stripAssetPointerScheme(assetPointer);
    const resolverKind = resolver == null ? "codex" : "custom";
    const pointerScheme = getAssetPointerScheme(assetPointer);
    try {
      logger.debug("Image asset download diagnostic: started", {
        safe: { pointerScheme, resolverKind },
        sensitive: { assetPointer, fileId },
      });
      const request =
        resolver == null
          ? await fetchDefaultDownloadRequest(fileId)
          : await resolver.getDownloadRequest(fileId);
      logger.debug("Image asset download diagnostic: URL resolved", {
        safe: { pointerScheme, resolverKind },
        sensitive: { downloadUrl: request.downloadUrl, fileId },
      });
      const blob = await fetchImageAssetBlob(request);
      logger.debug("Image asset download diagnostic: bytes fetched", {
        safe: { pointerScheme, resolverKind },
        sensitive: { fileId },
      });
      return blob;
    } catch (caught) {
      const error = caught;
      logger.warning("Image asset download failed", {
        safe: { pointerScheme, resolverKind },
        sensitive: { assetPointer, error, fileId },
      });
      throw error;
    }
  };

  const { data, isLoading, isError, refetch } = useQuery({
    enabled,
    queryKey,
    queryFn,
    staleTime: DURATIONS.FIVE_MINUTES,
  });

  const [resolvedBlob, setResolvedBlob] = useState<{
    blob: Blob;
    objectUrl: string;
  } | null>(null);

  useEffect(() => {
    if (data == null) return;
    let objectUrl: string | null = null;
    const timeoutId = window.setTimeout(() => {
      objectUrl = URL.createObjectURL(data);
      setResolvedBlob({ blob: data, objectUrl });
    }, 0);
    return () => {
      window.clearTimeout(timeoutId);
      if (objectUrl != null) revokeObjectUrlSoon(objectUrl);
    };
  }, [data]);

  const src =
    resolvedBlob != null && resolvedBlob.blob === data
      ? resolvedBlob.objectUrl
      : null;
  const isLoadingResolved = isLoading || (data != null && src == null);

  return {
    src,
    isLoading: isLoadingResolved,
    isError,
    refetch: () => {
      refetch();
    },
  };
}
