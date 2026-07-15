// Restored from ref/webview/assets/mcp-capability-signals-Ef9PGr3z.js
// App-scope signals exposing MCP capability catalogs and app entrypoints.
import { featureGateSignal as statsigGateSignal } from "../../runtime/feature-gate-runtime";
import {
  _appScopeC as createComputedSignal,
  _appScopeL as createComputedSignalFamily,
  appScopeP as createAppScopeQueryFamily,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { useHostConfigR as currentHostIdSignal } from "../../boundaries/use-host-config.facade";
import { MCP_SERVER_STATUS_QUERY_KEY } from "../../config/config-queries";
import {
  buildFileMcpAppEntrypoints,
  buildMcpAppEntrypoints,
  listCapabilityCatalog,
  listCapabilityMentionServers,
} from "./catalog";
import type {
  HostId,
  McpAppEntrypoint,
  McpCapabilityCatalogServer,
  McpCapabilityMentionServer,
  McpFileAppEntrypoint,
} from "./types";
const MCP_APPS_CAPABILITY_GATE = "3669474837";
interface QueryResult<T> {
  data?: T;
}
interface AppScopeGetter {
  get<Value>(signal: unknown, key?: unknown): Value;
}
const capabilityCatalogQuery = createAppScopeQueryFamily(
  appScopeRoot,
  (hostId: HostId) => ({
    queryFn: () => listCapabilityCatalog(hostId),
    queryKey: [...MCP_SERVER_STATUS_QUERY_KEY, hostId, "capability-catalog"],
    staleTime: 0,
  }),
);
export const localMcpCapabilityCatalogSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: AppScopeGetter): McpCapabilityCatalogServer[] =>
    get<boolean>(statsigGateSignal, MCP_APPS_CAPABILITY_GATE)
      ? (get<QueryResult<McpCapabilityCatalogServer[]>>(
          capabilityCatalogQuery,
          "local",
        ).data ?? [])
      : [],
);
const capabilityMentionServersQuery = createAppScopeQueryFamily(
  appScopeRoot,
  (hostId: HostId) => ({
    queryFn: () => listCapabilityMentionServers(hostId),
    queryKey: [
      ...MCP_SERVER_STATUS_QUERY_KEY,
      hostId,
      "capability-mention-servers",
    ],
    staleTime: 0,
  }),
);
export const capabilityMentionServersSignal = createComputedSignalFamily(
  appScopeRoot,
  (hostId: HostId, { get }: AppScopeGetter): McpCapabilityMentionServer[] =>
    get<boolean>(statsigGateSignal, MCP_APPS_CAPABILITY_GATE)
      ? (get<QueryResult<McpCapabilityMentionServer[]>>(
          capabilityMentionServersQuery,
          hostId,
        ).data ?? [])
      : [],
);
export const currentHostCapabilityMentionServersSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: AppScopeGetter): McpCapabilityMentionServer[] =>
    get(capabilityMentionServersSignal, currentHostIdSignal),
);
export const fileMcpAppEntrypointsSignal = createComputedSignalFamily(
  appScopeRoot,
  (hostId: HostId, { get }: AppScopeGetter): McpFileAppEntrypoint[] =>
    get<boolean>(statsigGateSignal, MCP_APPS_CAPABILITY_GATE)
      ? buildFileMcpAppEntrypoints(
          get<QueryResult<McpCapabilityCatalogServer[]>>(
            capabilityCatalogQuery,
            hostId,
          ).data ?? [],
        )
      : [],
);
export const currentHostFileMcpAppEntrypointsSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: AppScopeGetter): McpFileAppEntrypoint[] =>
    get(fileMcpAppEntrypointsSignal, currentHostIdSignal),
);
export const mcpAppEntrypointsSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: AppScopeGetter): McpAppEntrypoint[] =>
    buildMcpAppEntrypoints(get(localMcpCapabilityCatalogSignal)),
);
export const globalMcpAppEntrypointsSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: AppScopeGetter): McpAppEntrypoint[] =>
    get<McpAppEntrypoint[]>(mcpAppEntrypointsSignal).filter(
      (entrypoint) => entrypoint.entrypoint === "global",
    ),
);
