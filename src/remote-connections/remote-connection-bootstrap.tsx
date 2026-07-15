// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless effect that bootstraps remote host connection managers: it mirrors the
// active remote connections into the manager registry, hydrates each host's initial
// app-server connection state, auto-connects eligible hosts, and tears down managers
// for hosts that are no longer connected.
import { useEffect } from "react";
import {
  allRemoteHostIdsAtom,
  appStore,
  createRemoteHostManager,
  currentHostIdSignal,
  disposeRemoteControlConnection,
  getRemoteConnectionState,
  getRemoteControlConnections,
  initializeRemoteConnectionManagers,
  invokeAppServerRequest,
  isReservedRemoteHostId,
  logger,
  oneToOnePairingGate,
  remoteHostConfigAtom,
  resolveRemoteControlConnections,
  sendRemoteHostRequest,
  setRemoteConnectionProgress,
  updateRemoteConnectionState,
  useFeatureGate,
  usePersistedValue,
  useRemoteConnections,
  useRemoteManagerRegistry,
  useSharedStateValue,
  useStore,
  ProjectStorageKey,
} from "../boundaries/onboarding-commons-externals.facade";

const BOOTSTRAP_LOG_LABEL = "[remote-connections/bootstrap]";

// Remote-control hosts that have already had their auto-connect kicked off, so we
// only refresh a host once per authorized session.
const autoConnectedHostIds = new Set<string>();

interface RemoteConnection {
  hostId: string;
  autoConnect: boolean;
  source: string;
}

interface RemoteControlConnectionsState {
  clientAuthorized?: boolean;
  available?: boolean;
}

function getConnectionHostId(connection: { hostId: string }): string {
  return connection.hostId;
}

function ignoreError(): void {}

export function RemoteConnectionBootstrapEffect(): null {
  const store = useStore(appStore);
  const registry = useRemoteManagerRegistry();
  const connections = useRemoteConnections() as RemoteConnection[];
  const oneToOnePairingEnabled = useFeatureGate(oneToOnePairingGate);
  const [remoteControlState] = useSharedStateValue(
    "remote_control_connections_state",
  ) as [RemoteControlConnectionsState | null | undefined];
  const { data: addedRemoteControlEnvIds } = usePersistedValue(
    ProjectStorageKey.ADDED_REMOTE_CONTROL_ENV_IDS,
  );

  useEffect(() => {
    initializeRemoteConnectionManagers(store);
  }, [store]);

  useEffect(() => {
    if (remoteControlState?.clientAuthorized !== true)
      autoConnectedHostIds.clear();

    const expectedRemoteControlHostIds = new Set<string>(
      resolveRemoteControlConnections({
        addedRemoteControlEnvIds,
        oneToOnePairingInAppEnabled: oneToOnePairingEnabled,
        remoteControlConnections: getRemoteControlConnections(connections),
      }).map(getConnectionHostId),
    );

    logger.info(`${BOOTSTRAP_LOG_LABEL} shared_object_synced`, {
      safe: { connectionCount: connections.length },
      sensitive: {},
    });

    for (const connection of connections) {
      const existingManager = registry.getImplForHostId(connection.hostId);
      const manager =
        existingManager ??
        createRemoteHostManager(
          store,
          connection.hostId,
          store.get(remoteHostConfigAtom, connection.hostId),
        );
      if (existingManager == null) registry.addManager(manager);

      const previousState = getRemoteConnectionState(store, connection.hostId);
      invokeAppServerRequest("app-server-connection-state", {
        params: { hostId: connection.hostId },
      })
        .then(
          (value: { state?: string; progress?: unknown; error?: unknown }) => {
            const { state, progress, error } = value;
            if (registry.getImplForHostId(connection.hostId) !== manager) {
              logger.info(
                `${BOOTSTRAP_LOG_LABEL} initial_connection_state_ignored_for_stale_manager`,
                {
                  safe: { state: state ?? "disconnected" },
                  sensitive: { hostId: connection.hostId },
                },
              );
              return;
            }
            const latestState = getRemoteConnectionState(
              store,
              connection.hostId,
            );
            if (
              latestState.state === previousState.state &&
              latestState.error === previousState.error &&
              latestState.progress === previousState.progress
            ) {
              setRemoteConnectionProgress(store, connection.hostId, progress);
              updateRemoteConnectionState(store, {
                error,
                hostId: connection.hostId,
                source: "bootstrap_connection_state_fetch",
                state: state ?? "disconnected",
              });
              registry.notifyRegistryChanged();
            } else {
              logger.info(
                `${BOOTSTRAP_LOG_LABEL} initial_connection_state_ignored_for_newer_state`,
                {
                  safe: {
                    fetchedState: state ?? "disconnected",
                    fetchedProgress: progress,
                    currentState: latestState.state,
                    currentProgress: latestState.progress,
                  },
                  sensitive: { hostId: connection.hostId },
                },
              );
            }
          },
        )
        .catch((error: unknown) => {
          logger.warning(
            `${BOOTSTRAP_LOG_LABEL} initial_connection_state_failed`,
            { safe: {}, sensitive: { error, hostId: connection.hostId } },
          );
        });

      const shouldAutoConnect =
        connection.source === "remote-control"
          ? remoteControlState?.clientAuthorized === true &&
            expectedRemoteControlHostIds.has(connection.hostId) &&
            !autoConnectedHostIds.has(connection.hostId)
          : existingManager == null;
      if (connection.autoConnect && shouldAutoConnect) {
        if (connection.source === "remote-control")
          autoConnectedHostIds.add(connection.hostId);
        sendRemoteHostRequest("refresh-recent-conversations-for-host", {
          hostId: connection.hostId,
        }).catch(ignoreError);
      }
    }

    const localHostId = store.get(currentHostIdSignal);
    for (const hostId of store.get(allRemoteHostIdsAtom) as string[]) {
      if (
        hostId !== localHostId &&
        !isReservedRemoteHostId(hostId) &&
        (!hostId.startsWith("remote-control:") ||
          remoteControlState?.available === true) &&
        !connections.some((connection) => connection.hostId === hostId)
      ) {
        autoConnectedHostIds.delete(hostId);
        if (hostId.startsWith("remote-control:"))
          disposeRemoteControlConnection(hostId);
        registry.deleteManager(hostId);
      }
    }
  }, [
    registry,
    connections,
    oneToOnePairingEnabled,
    remoteControlState,
    addedRemoteControlEnvIds,
    store,
  ]);

  return null;
}
