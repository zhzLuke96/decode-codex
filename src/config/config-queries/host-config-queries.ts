// Restored from ref/webview/assets/config-queries-C2OQQYPH.js
// Query hooks for layered host config, user config, and analytics config.
import {
  appScopeP as createAppScopeQueryFamily,
  appScopeRoot,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../../boundaries/use-host-config.facade";
import { n as threadWorkspaceContextSignal } from "../../boundaries/thread-context-inputs.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiU as queryTimes,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import {
  collectServerOrigins,
  getUserLayerWriteTarget,
  normalizeMcpServers,
  resolveConfigWriteTarget,
} from "./config-layer-utils";
import {
  ANALYTICS_CONFIG_QUERY_KEY,
  EFFECTIVE_CONFIG_QUERY_KEY,
  LAYERED_CONFIG_RESPONSE_QUERY_KEY,
  MCP_SERVERS_CONFIG_QUERY_KEY,
  READ_CONFIG_RESPONSE_QUERY_KEY,
  USER_CONFIG_QUERY_KEY,
} from "./keys";
import type {
  ConfigWriteTarget,
  HostId,
  QueryClientLike,
  WorkspaceRootsContext,
} from "./types";
import { EMPTY_LAYERED_CONFIG_RESPONSE } from "./types";
export function useMcpServersConfigQuery(
  cwd?: string | null,
  options?: {
    enabled?: boolean;
    hostId?: HostId;
    useActiveWorkspaceRoot?: boolean;
  },
) {
  const hostId = options?.hostId ?? LOCAL_HOST_ID;
  const { data } = useAppScopeValue<WorkspaceRootsContext>(
    threadWorkspaceContextSignal,
  );
  const useActiveWorkspaceRoot =
    options?.useActiveWorkspaceRoot ?? hostId === LOCAL_HOST_ID;
  const resolvedCwd =
    cwd ?? (useActiveWorkspaceRoot ? (data?.roots?.[0] ?? null) : null);
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [...MCP_SERVERS_CONFIG_QUERY_KEY, hostId, resolvedCwd],
    queryFn: () => fetchLayeredConfigResponse(queryClient, hostId, resolvedCwd),
    staleTime: queryTimes.FIVE_MINUTES,
    enabled: options?.enabled ?? true,
    select: selectMcpServersConfig,
  });
}
function selectMcpServersConfig(configResponse: any) {
  const { config, origins, layers } = configResponse;
  const servers = normalizeMcpServers(config);
  return {
    servers,
    configWriteTarget: resolveConfigWriteTarget({
      layers,
      origins,
      keyPath: "mcp_servers",
    }),
    serverOrigins: collectServerOrigins({
      origins,
      rootKey: "mcp_servers",
      childKeys: Object.keys(servers),
      probeFields: ["enabled", "command", "url"],
    }),
  };
}
export const userConfigQueryOptions = createAppScopeQueryFamily(
  appScopeRoot,
  (hostId: unknown, context: unknown) => {
    const { queryClient } = context as {
      queryClient: QueryClientLike;
    };
    return {
      queryKey: [...USER_CONFIG_QUERY_KEY, hostId],
      queryFn: async () => {
        try {
          return await readConfigForHost(
            queryClient,
            hostId as HostId,
            null,
            true,
          );
        } catch (error) {
          vscodeLogger.error("Failed to load config", {
            safe: {},
            sensitive: {
              error,
            },
          });
          return EMPTY_LAYERED_CONFIG_RESPONSE;
        }
      },
      staleTime: queryTimes.FIVE_MINUTES,
      select: ({ config, layers }: any) => ({
        config,
        configWriteTarget: getUserLayerWriteTarget(layers),
      }),
    };
  },
);
export function useAnalyticsEnabledQuery(enabled: boolean = true) {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [...ANALYTICS_CONFIG_QUERY_KEY, LOCAL_HOST_ID],
    queryFn: () => readConfigForHost(queryClient, LOCAL_HOST_ID, null, false),
    staleTime: Infinity,
    enabled,
    select: ({ config }: any) => config.analytics?.enabled !== false,
  });
}
export function useEffectiveConfigQuery(
  cwd?: string | null,
  options?: {
    cwdMode?: "preserve-null";
    enabled?: boolean;
    hostId?: HostId;
  },
) {
  const hostId = options?.hostId ?? LOCAL_HOST_ID;
  const { data } = useAppScopeValue<WorkspaceRootsContext>(
    threadWorkspaceContextSignal,
  );
  const resolvedCwd =
    options?.cwdMode === "preserve-null"
      ? (cwd ?? null)
      : (cwd ?? data?.roots?.[0] ?? null);
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [...EFFECTIVE_CONFIG_QUERY_KEY, hostId, resolvedCwd],
    queryFn: () => fetchLayeredConfigResponse(queryClient, hostId, resolvedCwd),
    staleTime: queryTimes.FIVE_MINUTES,
    enabled: options?.enabled ?? true,
    select: ({ config, origins, layers }: any) => ({
      config,
      origins,
      layers,
    }),
  });
}
function fetchLayeredConfigResponse(
  queryClient: QueryClientLike,
  hostId: HostId,
  cwd: string | null,
) {
  return queryClient.fetchQuery({
    queryKey: [...LAYERED_CONFIG_RESPONSE_QUERY_KEY, hostId, cwd],
    queryFn: async () => {
      try {
        return await readConfigForHost(queryClient, hostId, cwd, true);
      } catch (error) {
        vscodeLogger.error("Failed to load layered config", {
          safe: {},
          sensitive: {
            error,
          },
        });
        return EMPTY_LAYERED_CONFIG_RESPONSE;
      }
    },
    staleTime: queryTimes.FIVE_MINUTES,
  });
}
export function readConfigForHost(
  queryClient: QueryClientLike,
  hostId: HostId,
  cwd: string | null,
  includeLayers: boolean,
) {
  return queryClient.fetchQuery({
    queryKey: [...READ_CONFIG_RESPONSE_QUERY_KEY, hostId, cwd, includeLayers],
    queryFn: () =>
      sendAppServerRequest("read-config-for-host", {
        hostId,
        includeLayers,
        cwd,
      }),
    staleTime: 0,
  });
}
export async function getUserConfigWriteTargetFromQueryClient(
  queryClient: QueryClientLike,
  hostId: HostId,
): Promise<ConfigWriteTarget> {
  const { layers } = await readConfigForHost(queryClient, hostId, null, true);
  return getUserLayerWriteTarget(layers);
}
