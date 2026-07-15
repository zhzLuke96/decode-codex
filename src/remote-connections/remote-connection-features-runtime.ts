// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Feature gates, remote-control connection selection, and shared-query helpers
// consumed by the remote connection bridge effects.
import { useMemo } from "react";

import { appScopeL, useAppScopeValue } from "../boundaries/app-scope";
import { appStoreScope } from "../runtime/onboarding-scope-runtime";
import {
  type QueryOptions,
  type QueryResult,
} from "../runtime/query-client/react-query-runtime";
import { queryDurations } from "../runtime/host-query-runtime";
import { useStatsigClient } from "../vendor/statsig-current-runtime";
import { getAddedRemoteControlConnections } from "../remote/selectable-remote-connections-signal";
import { remoteHostConfigAtom } from "./remote-connection-manager-runtime";

type RemoteConnection = {
  autoConnect?: boolean;
  clientType?: string | null;
  envId?: string;
  hostId: string;
  installationId?: string | null;
  source?: string;
  [key: string]: unknown;
};

type RemoteControlConnection = RemoteConnection & {
  envId: string;
};

type RemoteControlSelectionInput = {
  addedRemoteControlEnvIds?: readonly string[] | null;
  oneToOnePairingInAppEnabled: boolean;
  remoteControlConnections: readonly RemoteControlConnection[];
};

type SharedQueryResult<TData> = QueryResult<TData>;

const ONE_TO_ONE_PAIRING_GATE = "2055603567";

export const oneToOnePairingGate = ONE_TO_ONE_PAIRING_GATE;

export const remoteHostConfigQuery = appScopeL(
  appStoreScope,
  (hostId, store) => {
    const resolvedHostId = typeof hostId === "string" ? hostId : "local";
    const hostConfig = store.get(remoteHostConfigAtom, resolvedHostId);
    return {
      initialData: { config: hostConfig },
      queryFn: () => ({
        config: store.get(remoteHostConfigAtom, resolvedHostId),
      }),
      queryKey: ["remote-host-config", resolvedHostId],
      staleTime: queryDurations.FIVE_SECONDS,
    } satisfies QueryOptions<{ config: unknown }>;
  },
);

function isQueryOptions(value: unknown): value is QueryOptions<unknown> {
  return (
    typeof value === "object" &&
    value != null &&
    ("queryKey" in value || "queryFn" in value)
  );
}

function fallbackQueryOptions<TData>(
  query: unknown,
  key: unknown,
  data: TData | undefined,
): Pick<QueryOptions<TData>, "initialData" | "queryKey"> {
  return {
    initialData: data,
    queryKey: ["shared-query", String(query), key],
  };
}

export function useSharedQuery<TData = unknown>(
  query: unknown,
  key?: unknown,
): SharedQueryResult<TData> {
  const signalValue = useAppScopeValue<unknown>(query, key);
  const queryValue =
    (query as { read?: unknown })?.read != null ? signalValue : query;
  const data = isQueryOptions(queryValue)
    ? (queryValue.initialData as TData | undefined)
    : (queryValue as TData | undefined);
  return useMemo(
    () => buildSharedQueryResult(fallbackQueryOptions(query, key, data)),
    [data, key, query],
  );
}

function buildSharedQueryResult<TData>({
  initialData,
}: Pick<QueryOptions<TData>, "initialData" | "queryKey">): QueryResult<TData> {
  const status = initialData === undefined ? "pending" : "success";
  return {
    data: initialData,
    error: null,
    fetchStatus: "idle",
    isError: false,
    isFetching: false,
    isLoading: false,
    isPending: status === "pending",
    isSuccess: status === "success",
    promise: Promise.resolve(initialData),
    refetch: async () => ({ data: initialData }),
    status,
  };
}

function dedupeRemoteControlConnectionsByInstallation(
  remoteControlConnections: readonly RemoteControlConnection[],
): RemoteControlConnection[] {
  const connectionByInstallationId = new Map<string, RemoteControlConnection>();
  const connectionsWithoutInstallationId: RemoteControlConnection[] = [];

  for (const connection of remoteControlConnections) {
    if (connection.installationId == null) {
      connectionsWithoutInstallationId.push(connection);
      continue;
    }
    const previousConnection = connectionByInstallationId.get(
      connection.installationId,
    );
    if (
      previousConnection == null ||
      (previousConnection.clientType !== "CODEX_DESKTOP_APP" &&
        connection.clientType === "CODEX_DESKTOP_APP")
    ) {
      connectionByInstallationId.set(connection.installationId, connection);
    }
  }

  return [
    ...connectionByInstallationId.values(),
    ...connectionsWithoutInstallationId,
  ];
}

export function getRemoteControlConnections(
  connections: readonly RemoteConnection[],
): RemoteControlConnection[] {
  return connections.filter(
    (connection): connection is RemoteControlConnection =>
      connection.source === "remote-control" &&
      typeof connection.envId === "string",
  );
}

export function resolveRemoteControlConnections({
  addedRemoteControlEnvIds,
  oneToOnePairingInAppEnabled,
  remoteControlConnections,
}: RemoteControlSelectionInput): RemoteControlConnection[] {
  if (oneToOnePairingInAppEnabled) {
    return dedupeRemoteControlConnectionsByInstallation(
      remoteControlConnections,
    );
  }

  return getAddedRemoteControlConnections({
    addedRemoteControlEnvIds: addedRemoteControlEnvIds ?? [],
    remoteControlConnections,
  });
}

function readFeatureValue(features: unknown, key: string): boolean | undefined {
  if (typeof features !== "object" || features == null) return undefined;
  const value = Object.getOwnPropertyDescriptor(features, key)?.value;
  return typeof value === "boolean" ? value : undefined;
}

export function isWslConnectionsEnabledInConfig(config: unknown): boolean {
  if (typeof config !== "object" || config == null) return false;
  const record = config as Record<string, unknown>;
  if (record["features.remote_wsl_connections"] === true) return true;

  const features = record.features;
  return (
    readFeatureValue(features, "remote_wsl_connections") ??
    readFeatureValue(features, "wsl_connections") ??
    readFeatureValue(features, "wsl") ??
    false
  );
}

export function useFeatureGateClient() {
  const statsigClient = useStatsigClient();
  return {
    ...statsigClient,
    checkGate: (gateName: string) => statsigClient.checkGate(gateName),
  };
}
