// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// Windows sandbox app-server queries and config mutation helpers.
import * as React from "react";

import {
  initAppServerRequestRuntime,
  sendAppServerRequest,
} from "../../runtime/app-server-request";
import { appMainLogger } from "../../runtime/app-main-host-runtime";
import { useSignalValue } from "../../runtime/app-scope-hooks";
import { queryDurations } from "../../runtime/host-query-runtime";
import {
  initReactQueryRuntimeChunk,
  useMutation,
  useQuery,
  useQueryClient,
  type MutationResult,
  type QueryOptions,
} from "../../runtime/query-client/react-query-runtime";
import {
  initInvalidateQueriesAndBroadcastChunk,
  invalidateQueriesAndBroadcast,
} from "../../utils/invalidate-queries-and-broadcast";
import { currentRouteHostIdSignal } from "../../runtime/window-chrome-runtime";
import {
  zodEnumSchema,
  zodObjectSchema,
  initZodRuntimeChunk,
} from "../../boundaries/src-l0hb/zod-runtime";
import type {
  WindowsSandboxMode,
  WindowsSandboxReadinessStatus,
} from "./types";
import {
  WINDOWS_SANDBOX_MODE_QUERY_ROOT,
  WINDOWS_SANDBOX_READINESS_QUERY_ROOT,
} from "./types";
import {
  initWindowsSandboxConfigQueryRuntime,
  readHostConfigForHost,
} from "./config";
import { initOsInfoRuntimeChunk } from "./os-info";

export type WindowsSandboxModeMutationContext = {
  previousMode: WindowsSandboxMode | null | undefined;
};

const windowsSandboxModeSchema = zodObjectSchema({
  sandbox: zodEnumSchema(["elevated", "unelevated"]).optional(),
}).passthrough();

export function getWindowsSandboxModeQueryKey(
  hostId: string,
): readonly unknown[] {
  return [...WINDOWS_SANDBOX_MODE_QUERY_ROOT, hostId];
}

export function getWindowsSandboxReadinessQueryKey(
  hostId: string,
): readonly unknown[] {
  return [...WINDOWS_SANDBOX_READINESS_QUERY_ROOT, hostId];
}

export function parseWindowsSandboxMode(
  windowsConfig: unknown,
): WindowsSandboxMode | null {
  const result = windowsSandboxModeSchema.safeParse(windowsConfig);
  return result.success ? (result.data.sandbox ?? null) : null;
}

export function useWindowsSandboxModeQuery(hostId?: string) {
  const currentHostId = useSignalValue<string>(currentRouteHostIdSignal);
  const resolvedHostId = hostId ?? currentHostId;
  const queryClient = useQueryClient();

  return useQuery<WindowsSandboxMode | null>({
    queryKey: getWindowsSandboxModeQueryKey(resolvedHostId),
    queryFn: async () => {
      try {
        const response = await readHostConfigForHost(
          queryClient,
          resolvedHostId,
          null,
          false,
        );
        return parseWindowsSandboxMode(response.config.windows);
      } catch (error) {
        appMainLogger.error("Failed to load Windows sandbox mode", {
          safe: { error: String(error) },
          sensitive: {},
        });
        return null;
      }
    },
    staleTime: queryDurations.ONE_MINUTE,
  });
}

async function getWindowsSandboxReadinessForHost(
  hostId: string,
): Promise<WindowsSandboxReadinessStatus> {
  try {
    const response = await sendAppServerRequest<{
      status: WindowsSandboxReadinessStatus;
    }>("get-windows-sandbox-readiness-for-host", { hostId });
    return response.status;
  } catch (error) {
    appMainLogger.error("Failed to load Windows sandbox readiness", {
      safe: {},
      sensitive: { error },
    });
    throw error;
  }
}

export function useWindowsSandboxReadinessQuery(options?: {
  enabled?: boolean;
  hostId?: string;
}) {
  const currentHostId = useSignalValue<string>(currentRouteHostIdSignal);
  const resolvedHostId = options?.hostId ?? currentHostId;

  return useQuery<WindowsSandboxReadinessStatus>({
    enabled: options?.enabled ?? true,
    queryFn: () => getWindowsSandboxReadinessForHost(resolvedHostId),
    queryKey: getWindowsSandboxReadinessQueryKey(resolvedHostId),
    retry: false,
    retryOnMount: false,
    staleTime: queryDurations.INFINITE,
  } as QueryOptions<WindowsSandboxReadinessStatus>);
}

export function useUpdateWindowsSandboxModeMutation(
  hostId?: string,
): MutationResult<WindowsSandboxMode | null, unknown> {
  const currentHostId = useSignalValue<string>(currentRouteHostIdSignal);
  const resolvedHostId = hostId ?? currentHostId;
  const queryClient = useQueryClient();
  const invalidateAndBroadcast = invalidateQueriesAndBroadcast();
  const modeQueryKey = React.useMemo(
    () => getWindowsSandboxModeQueryKey(resolvedHostId),
    [resolvedHostId],
  );
  const readinessQueryKey = React.useMemo(
    () => getWindowsSandboxReadinessQueryKey(resolvedHostId),
    [resolvedHostId],
  );

  return useMutation<WindowsSandboxMode | null, unknown>({
    mutationFn: (value) =>
      sendAppServerRequest("batch-write-config-value-for-host", {
        edits: [
          {
            keyPath: "windows.sandbox",
            mergeStrategy: value == null ? "replace" : "upsert",
            value,
          },
        ],
        expectedVersion: null,
        filePath: null,
        hostId: resolvedHostId,
      }),
    onMutate: (value) => {
      const previousMode =
        queryClient.getQueryData?.<WindowsSandboxMode | null>(modeQueryKey);
      queryClient.setQueryData?.(modeQueryKey, value);
      return { previousMode } satisfies WindowsSandboxModeMutationContext;
    },
    onError: (error, _value, context) => {
      appMainLogger.error("Failed to update Windows sandbox mode", {
        safe: { error: String(error) },
        sensitive: {},
      });
      const mutationContext = context as
        | WindowsSandboxModeMutationContext
        | undefined;
      if (mutationContext?.previousMode !== undefined) {
        queryClient.setQueryData?.(modeQueryKey, mutationContext.previousMode);
      }
    },
    onSettled: async () => {
      await Promise.all([
        invalidateAndBroadcast(modeQueryKey),
        invalidateAndBroadcast(readinessQueryKey),
      ]);
    },
  });
}

export function initWindowsSandboxModeRuntime(): void {
  initAppServerRequestRuntime();
  initInvalidateQueriesAndBroadcastChunk();
  initOsInfoRuntimeChunk();
  initReactQueryRuntimeChunk();
  initWindowsSandboxConfigQueryRuntime();
  initZodRuntimeChunk();
}
