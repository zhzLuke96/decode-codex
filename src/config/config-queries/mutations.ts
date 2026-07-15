// Restored from ref/webview/assets/config-queries-C2OQQYPH.js
// Mutations for writing MCP server config and toggling server enabled state.
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiUnderscore as useMutation,
} from "../../boundaries/vscode-api";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
import { patchMcpServerEnabled } from "./config-layer-utils";
import {
  LAYERED_CONFIG_RESPONSE_QUERY_KEY,
  MCP_SERVERS_CONFIG_QUERY_KEY,
  MCP_SERVER_STATUS_QUERY_KEY,
} from "./keys";
import type {
  HostId,
  LayeredConfigResponse,
  QueryClientLike,
  QueryKey,
} from "./types";
type ToggleMcpServerEnabledContext = {
  previousConfigResponses?: Array<[QueryKey, LayeredConfigResponse]>;
};
export function useWriteMcpServerConfigMutation(options?: { hostId?: HostId }) {
  const hostId = options?.hostId ?? LOCAL_HOST_ID;
  const invalidateQueries = invalidateQueriesAndBroadcast();
  return useMutation({
    mutationFn: ({
      filePath,
      key,
      value,
    }: {
      filePath: string | null;
      key: string;
      value: unknown;
    }) =>
      sendAppServerRequest("batch-write-config-value", {
        hostId,
        edits: [
          {
            keyPath: `mcp_servers.${key}`,
            value,
            mergeStrategy: "replace",
          },
        ],
        filePath,
        expectedVersion: null,
      }),
    onError: logMcpServerConfigWriteError,
    onSuccess: async () => {
      await invalidateConfigQueriesForHost(hostId, invalidateQueries);
    },
  });
}
function logMcpServerConfigWriteError(error: unknown): void {
  vscodeLogger.error("Failed to write MCP server config", {
    safe: {},
    sensitive: {
      error,
    },
  });
}
export function useToggleMcpServerEnabledMutation(options?: {
  hostId?: HostId;
}) {
  const hostId = options?.hostId ?? LOCAL_HOST_ID;
  const queryClient = useQueryClient();
  const invalidateQueries = invalidateQueriesAndBroadcast();
  const mcpServersQueryKey = [...MCP_SERVERS_CONFIG_QUERY_KEY, hostId];
  const layeredConfigQueryKey = [...LAYERED_CONFIG_RESPONSE_QUERY_KEY, hostId];
  return useMutation({
    mutationFn: ({ key, enabled }: { enabled: boolean; key: string }) =>
      sendAppServerRequest("write-config-value", {
        hostId,
        keyPath: `mcp_servers.${key}.enabled`,
        value: enabled,
        mergeStrategy: "upsert",
        filePath: null,
        expectedVersion: null,
      }),
    onMutate: async ({ key, enabled }: { enabled: boolean; key: string }) => {
      await Promise.all([
        queryClient.cancelQueries({
          queryKey: mcpServersQueryKey,
        }),
        queryClient.cancelQueries({
          queryKey: layeredConfigQueryKey,
        }),
      ]);
      const previousConfigResponses = [
        ...getPresentQueryData(queryClient, mcpServersQueryKey),
        ...getPresentQueryData(queryClient, layeredConfigQueryKey),
      ];
      for (const [queryKey, configResponse] of previousConfigResponses) {
        queryClient.setQueryData(
          queryKey,
          patchMcpServerEnabled(configResponse, key, enabled),
        );
      }
      return {
        previousConfigResponses,
      };
    },
    onError: (
      error: unknown,
      _variables: { enabled: boolean; key: string },
      context?: unknown,
    ) => {
      const rollbackContext = context as
        | ToggleMcpServerEnabledContext
        | undefined;
      vscodeLogger.error("Failed to update MCP server enabled state", {
        safe: {},
        sensitive: {
          error,
        },
      });
      for (const [
        queryKey,
        previousConfigResponse,
      ] of rollbackContext?.previousConfigResponses ?? []) {
        queryClient.setQueryData(queryKey, previousConfigResponse);
      }
    },
    onSettled: async () => {
      await invalidateConfigQueriesForHost(hostId, invalidateQueries);
    },
  });
}
function getPresentQueryData(
  queryClient: QueryClientLike,
  queryKey: QueryKey,
): Array<[QueryKey, LayeredConfigResponse]> {
  return queryClient
    .getQueriesData({
      queryKey,
    })
    .flatMap(([matchedQueryKey, queryData]) =>
      queryData == null ? [] : [[matchedQueryKey, queryData]],
    );
}
async function invalidateConfigQueriesForHost(
  hostId: HostId,
  invalidateQueries: (queryKey: unknown[]) => Promise<unknown>,
): Promise<void> {
  await invalidateQueries([...LAYERED_CONFIG_RESPONSE_QUERY_KEY, hostId]);
  await Promise.all([
    invalidateQueries([...MCP_SERVERS_CONFIG_QUERY_KEY, hostId]),
    invalidateQueries([...MCP_SERVER_STATUS_QUERY_KEY, hostId]),
  ]);
}
