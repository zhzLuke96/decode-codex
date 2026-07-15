// Restored from ref/webview/assets/config-queries-C2OQQYPH.js
// Query hooks/options for config requirements, local agents, MCP status, and MCP resources.
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
  vscodeApiH as vscodeLogger,
  vscodeApiO as useAppServerQuery,
  vscodeApiU as queryTimes,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import {
  CONFIG_REQUIREMENTS_QUERY_KEY,
  MCP_RESOURCE_QUERY_KEY,
  MCP_SERVER_STATUS_QUERY_KEY,
} from "./keys";
import type { HostId, WorkspaceRootsContext } from "./types";
export const configRequirementsQueryOptions = createAppScopeQueryFamily(
  appScopeRoot,
  (params: unknown) => {
    const { authMethod, hostId } = params as {
      authMethod?: string | null;
      hostId: HostId;
    };
    return buildConfigRequirementsQueryOptions({
      authMethod,
      hostId,
    });
  },
);
export function buildConfigRequirementsQueryKey({
  authMethod,
  hostId,
}: {
  authMethod?: string | null;
  hostId: HostId;
}) {
  return [...CONFIG_REQUIREMENTS_QUERY_KEY, hostId, "auth", authMethod ?? null];
}
function buildConfigRequirementsQueryOptions({
  authMethod,
  hostId,
}: {
  authMethod?: string | null;
  hostId: HostId;
}) {
  return {
    queryKey: buildConfigRequirementsQueryKey({
      authMethod,
      hostId,
    }),
    queryFn: async () => {
      try {
        return await sendAppServerRequest("get-config-requirements-for-host", {
          hostId,
        });
      } catch (error) {
        vscodeLogger.error("Failed to load config requirements", {
          safe: {},
          sensitive: {
            error,
          },
        });
        return {
          requirements: null,
        };
      }
    },
    staleTime: queryTimes.FIVE_MINUTES,
  };
}
export function useLocalCustomAgents(
  roots?: string[],
  enabled: boolean = true,
) {
  const { data } = useAppScopeValue<WorkspaceRootsContext>(
    threadWorkspaceContextSignal,
  );
  const resolvedRoots = roots ?? data?.roots ?? [];
  return useAppServerQuery("local-custom-agents", {
    params: {
      roots: resolvedRoots,
    },
    queryConfig: {
      enabled,
      staleTime: queryTimes.FIVE_MINUTES,
    },
    select: (response: any) => ({
      roles: response.agents,
    }),
  } as any);
}
export const mcpServerStatusFullQueryOptions = createAppScopeQueryFamily(
  appScopeRoot,
  (hostId: unknown) =>
    buildMcpServerStatusQueryOptions(hostId as HostId, "full"),
);
export const mcpServerStatusToolsAndAuthQueryOptions =
  createAppScopeQueryFamily(appScopeRoot, (hostId: unknown) =>
    buildMcpServerStatusQueryOptions(hostId as HostId, "toolsAndAuthOnly"),
  );
function buildMcpServerStatusQueryOptions(hostId: HostId, detail: string) {
  return {
    queryKey: [...MCP_SERVER_STATUS_QUERY_KEY, hostId, detail],
    queryFn: async () =>
      sendAppServerRequest("list-mcp-server-status", {
        hostId,
        cursor: null,
        limit: 100,
        detail,
      }),
    staleTime: queryTimes.FIVE_MINUTES,
  };
}
export function useMcpResourceQuery({
  hostId = LOCAL_HOST_ID,
  server,
  threadId,
  uri = "",
  enabled = true,
}: {
  enabled?: boolean;
  hostId?: HostId;
  server: string;
  threadId: string;
  uri?: string | null;
}) {
  return useQuery({
    queryKey: [...MCP_RESOURCE_QUERY_KEY, hostId, threadId, server, uri ?? ""],
    queryFn: async () =>
      sendAppServerRequest("read-mcp-resource", {
        hostId,
        server,
        threadId,
        uri: uri ?? "",
      }).catch((error: unknown) => {
        vscodeLogger.error("Failed to read MCP resource", {
          safe: {
            server,
            threadId,
            uri,
          },
          sensitive: {
            error,
          },
        });
        throw error;
      }),
    staleTime: queryTimes.FIVE_MINUTES,
    enabled: enabled && uri != null,
  });
}
