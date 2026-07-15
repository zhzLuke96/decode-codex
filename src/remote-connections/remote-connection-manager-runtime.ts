// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Remote host manager registry and connection-state atoms used by the
// remote-connection bootstrap effect.
import { appScopeL, appScopeUnderscore } from "../boundaries/app-scope";
import { appStoreScope } from "../runtime/onboarding-scope-runtime";
import { sendHostRequest } from "../runtime/host-request-runtime";
import {
  findRemoteHostConfigById,
  readSharedObjectValueWithReader,
  type RemoteConnection,
  type RemoteHostConfig,
  type SharedObjectValueReader,
} from "../runtime/shared-object-host-runtime";

type RemoteConnectionState = {
  error?: unknown;
  progress?: unknown;
  source?: string;
  state: string;
};

type StoreLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, keyOrValue: unknown, value?: unknown): void;
};

export type RemoteHostManager = {
  config?: RemoteHostConfig;
  hostId: string;
  refreshRecentConversations(): Promise<unknown>;
};

const LOCAL_HOST_ID = "local";
const REMOTE_SSH_CONNECTIONS_KEY = "remote_ssh_connections";
const REMOTE_WSL_CONNECTIONS_KEY = "remote_wsl_connections";
const REMOTE_CONTROL_CONNECTIONS_KEY = "remote_control_connections";

const managerRegistryVersionAtom = appScopeUnderscore(appStoreScope, () => 0);
const remoteConnectionStateAtom = appScopeUnderscore<
  RemoteConnectionState | undefined
>(appStoreScope, () => undefined);
const remoteManagerRegistrySingleton = createRemoteManagerRegistry();

export const currentHostIdSignal = appScopeUnderscore(
  appStoreScope,
  () => LOCAL_HOST_ID,
);
export const allRemoteHostIdsAtom = appScopeUnderscore<string[]>(
  appStoreScope,
  () => [],
);
export const remoteHostConfigAtom = appScopeL(appStoreScope, (hostId, store) =>
  readRemoteHostConfig(
    store.get.bind(store) as SharedObjectValueReader<unknown>,
    typeof hostId === "string" ? hostId : LOCAL_HOST_ID,
  ),
);

function readSharedObjectValue<TValue>(
  reader: SharedObjectValueReader<unknown>,
  key: string,
): TValue | undefined {
  return readSharedObjectValueWithReader(
    reader as SharedObjectValueReader<TValue | undefined>,
    key,
  );
}

function readRemoteConnections(
  reader: SharedObjectValueReader<unknown>,
): RemoteConnection[] {
  return [
    ...(readSharedObjectValue<RemoteConnection[]>(
      reader,
      REMOTE_SSH_CONNECTIONS_KEY,
    ) ?? []),
    ...(readSharedObjectValue<RemoteConnection[]>(
      reader,
      REMOTE_WSL_CONNECTIONS_KEY,
    ) ?? []),
    ...(readSharedObjectValue<RemoteConnection[]>(
      reader,
      REMOTE_CONTROL_CONNECTIONS_KEY,
    ) ?? []),
  ];
}

function readRemoteHostConfig(
  reader: SharedObjectValueReader<unknown>,
  hostId: string,
): RemoteHostConfig {
  const currentHostConfig =
    readSharedObjectValue<RemoteHostConfig | null>(reader, "host_config") ??
    null;
  if (currentHostConfig?.id === hostId) return currentHostConfig;
  return findRemoteHostConfigById(hostId, readRemoteConnections(reader));
}

function createRemoteManagerRegistry() {
  const managers = new Map<string, RemoteHostManager>();
  return {
    addManager(manager: RemoteHostManager): void {
      managers.set(manager.hostId, manager);
    },
    deleteManager(hostId: string): void {
      managers.delete(hostId);
    },
    getImplForHostId(hostId: string): RemoteHostManager | undefined {
      return managers.get(hostId);
    },
    notifyRegistryChanged(): void {
      // Consumers subscribe to the atom identity rather than this object.
    },
  };
}

function addRemoteHostId(store: StoreLike, hostId: string): void {
  store.set(allRemoteHostIdsAtom, (hostIds: string[] | undefined) => {
    const current = hostIds ?? [];
    return current.includes(hostId) ? current : [...current, hostId];
  });
}

function defaultConnectionState(): RemoteConnectionState {
  return { state: "disconnected" };
}

export function initializeRemoteConnectionManagers(store: StoreLike): void {
  const reader = store.get.bind(store) as SharedObjectValueReader<unknown>;
  const hostIds = readRemoteConnections(reader).flatMap((connection) =>
    typeof connection.hostId === "string" ? [connection.hostId] : [],
  );
  store.set(allRemoteHostIdsAtom, [
    ...new Set([store.get(currentHostIdSignal), ...hostIds]),
  ]);
}

export function useRemoteManagerRegistry() {
  // Touch the version atom so React callers depend on registry invalidations.
  void managerRegistryVersionAtom;
  return remoteManagerRegistrySingleton;
}

export function createRemoteHostManager(
  _store: StoreLike,
  hostId: string,
  config?: RemoteHostConfig,
): RemoteHostManager {
  return {
    config,
    hostId,
    refreshRecentConversations: () =>
      sendRemoteHostRequest("refresh-recent-conversations-for-host", {
        hostId,
      }),
  };
}

export function getRemoteConnectionState(
  store: StoreLike,
  hostId: string,
): RemoteConnectionState {
  return (
    store.get<RemoteConnectionState | undefined>(
      remoteConnectionStateAtom,
      hostId,
    ) ?? defaultConnectionState()
  );
}

export function setRemoteConnectionProgress(
  store: StoreLike,
  hostId: string,
  progress: unknown,
): void {
  const current = getRemoteConnectionState(store, hostId);
  store.set(remoteConnectionStateAtom, hostId, { ...current, progress });
}

export function updateRemoteConnectionState(
  store: StoreLike,
  update: RemoteConnectionState & { hostId: string },
): void {
  const { hostId, ...state } = update;
  store.set(remoteConnectionStateAtom, hostId, {
    ...getRemoteConnectionState(store, hostId),
    ...state,
  });
  if (state.state !== "disconnected") addRemoteHostId(store, hostId);
}

export function isReservedRemoteHostId(hostId: string): boolean {
  return (
    hostId === LOCAL_HOST_ID ||
    hostId === "default" ||
    hostId.startsWith("cloud:")
  );
}

export function sendRemoteHostRequest<TResponse = unknown>(
  method: string,
  params: Record<string, unknown> = {},
): Promise<TResponse> {
  return sendHostRequest<TResponse>(method, { params });
}

export function disposeRemoteControlConnection(hostId: string): void {
  void sendRemoteHostRequest("dispose-remote-control-connection", {
    hostId,
  }).catch(() => {});
}
