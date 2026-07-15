// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Local plugin image path resolution and query-client based inlining.

import path from "node:path";
import {
  vscodeApiH as vscodeLogger,
  vscodeApiN as callCodexVscodeApi,
  vscodeApiR as createVscodeQueryKey,
  vscodeApiU as queryTimes,
} from "../../boundaries/vscode-api";
import {
  isAbsoluteFilesystemPath,
  normalizeFilesystemPath,
} from "../../boundaries/rpc.facade";
import type { QueryClientLike } from "./types";
const IMAGE_MIME_TYPES: Record<string, string> = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
};
type ReadFileBinaryResponse = {
  contentsBase64?: string | null;
};
export async function inlineLocalPluginImageDataUrl(
  imagePath: string | null | undefined,
  hostId: string,
  queryClient: QueryClientLike,
): Promise<string | null> {
  const resolvedImagePath = resolveLocalImagePath(imagePath);
  if (resolvedImagePath == null) return null;
  try {
    const requestParams = {
      path: resolvedImagePath,
      hostId,
    };
    const response = await queryClient.fetchQuery<ReadFileBinaryResponse>({
      queryFn: ({ signal }) =>
        callCodexVscodeApi("read-file-binary", {
          params: requestParams,
          signal,
        }) as Promise<ReadFileBinaryResponse>,
      queryKey: createVscodeQueryKey("read-file-binary", requestParams),
      retry: false,
      gcTime: Infinity,
      staleTime: queryTimes.INFINITE,
    });
    return response.contentsBase64
      ? `data:${getImageMimeType(resolvedImagePath)};base64,${response.contentsBase64}`
      : null;
  } catch (error) {
    vscodeLogger.warning("Failed to inline local image", {
      safe: {},
      sensitive: {
        error,
        resolvedImagePath,
      },
    });
    return null;
  }
}
export function resolveLocalImagePath(
  imagePath: string | null | undefined,
): string | null {
  if (imagePath == null) return null;
  const trimmedPath = imagePath.trim();
  if (trimmedPath.length === 0) return null;
  const lowerPath = trimmedPath.toLowerCase();
  if (
    lowerPath.startsWith("data:") ||
    lowerPath.startsWith("http:") ||
    lowerPath.startsWith("https:") ||
    lowerPath.startsWith("file:") ||
    lowerPath.startsWith("vscode-resource:") ||
    lowerPath.startsWith("vscode-webview:") ||
    lowerPath.startsWith("vscode-file:")
  ) {
    return null;
  }
  const normalizedPath = normalizeFilesystemPath(trimmedPath);
  return isAbsoluteFilesystemPath(normalizedPath) ? normalizedPath : null;
}
function getImageMimeType(imagePath: string): string {
  return (
    IMAGE_MIME_TYPES[path.posix.extname(imagePath).toLowerCase()] ??
    "application/octet-stream"
  );
}
