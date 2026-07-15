// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File opening helpers shared by conversation attachments and source viewers.

import * as React from "react";
import { sendHostRequest } from "./host-request-runtime";

export type HostRequestMutation<TParams = unknown, TResponse = unknown> = {
  isPending: boolean;
  mutate(params: TParams): Promise<TResponse>;
  mutateAsync(params: TParams): Promise<TResponse>;
};

export function useHostRequest<TParams = unknown, TResponse = unknown>(
  method: string,
  options?: Record<string, unknown> & {
    onError?: (error: Error, params: TParams) => void;
    onSuccess?: (response: TResponse, params: TParams) => void;
  },
): HostRequestMutation<TParams, TResponse> {
  const optionsRef = React.useRef(options);
  optionsRef.current = options;
  const [pendingCount, setPendingCount] = React.useState(0);
  const mutateAsync = React.useCallback(
    async (params: TParams) => {
      const { onError, onSuccess, ...requestOptions } =
        optionsRef.current ?? {};
      setPendingCount((count) => count + 1);
      try {
        const response = await sendHostRequest<TResponse>(method, {
          ...requestOptions,
          params: params as Record<string, unknown>,
        });
        onSuccess?.(response, params);
        return response;
      } catch (error) {
        const normalizedError =
          error instanceof Error ? error : new Error(String(error));
        onError?.(normalizedError, params);
        throw normalizedError;
      } finally {
        setPendingCount((count) => Math.max(0, count - 1));
      }
    },
    [method],
  );
  return React.useMemo(
    () => ({
      isPending: pendingCount > 0,
      mutate: mutateAsync,
      mutateAsync,
    }),
    [mutateAsync, pendingCount],
  );
}

export async function openFileAtLine({
  column,
  cwd,
  endLine,
  hostConfig,
  hostId,
  line,
  modifiedClick,
  openFile,
  openInSidePanel,
  path,
}: {
  column?: number;
  cwd?: string | null;
  endLine?: number | null;
  hostConfig?: unknown;
  hostId?: string | null;
  line?: number | null;
  modifiedClick?: boolean;
  openFile?: (params: Record<string, unknown>) => Promise<unknown> | void;
  openInSidePanel?: boolean;
  path: string;
  scope?: unknown;
}): Promise<unknown> {
  const params = {
    column,
    cwd,
    endLine,
    hostConfig,
    hostId,
    line,
    modifiedClick,
    openInSidePanel,
    path,
  };
  if (openFile != null) return openFile(params);
  return sendHostRequest("open-file", { params });
}

export function getFileExtension(path: string): string | null {
  const filename = path.split(/[\\/]/).pop() ?? path;
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex > 0 && dotIndex < filename.length - 1
    ? filename.slice(dotIndex + 1).toLowerCase()
    : null;
}

export function initFileOpenRuntimeChunk(): void {}
