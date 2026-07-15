// Restored from ref/webview/assets/selectable-remote-connections-signal-DIsHsJK7.js
// Signals for selectable SSH, WSL, and remote-control connections.
import {
  _appScopeC as createComputedSignal,
  appScopeRoot,
} from "../boundaries/app-scope";
import { globalSettingKeys } from "../boundaries/src-l0hb-mz-p";
import { getGlobalStateValue } from "../boundaries/thread-context-inputs.facade";
import { _useHostConfigS as readHostConfigValue } from "../boundaries/use-host-config.facade";
type RemoteConnection = {
  envId?: string;
  hostId?: string;
  installationId?: string | null;
  clientType?: string | null;
  [key: string]: unknown;
};
type RemoteControlConnection = RemoteConnection & {
  envId: string;
};
type SelectableRemoteConnectionsInput = {
  addedRemoteControlEnvIds: readonly string[];
  remoteControlConnections: readonly RemoteControlConnection[];
};
type CombinedRemoteConnectionsInput = SelectableRemoteConnectionsInput & {
  remoteSshConnections: readonly RemoteConnection[];
  remoteWslConnections: readonly RemoteConnection[];
};
export function getAddedRemoteControlConnections({
  addedRemoteControlEnvIds,
  remoteControlConnections,
}: SelectableRemoteConnectionsInput): RemoteControlConnection[] {
  const addedEnvIds = new Set(addedRemoteControlEnvIds);
  const addedInstallationIds = new Set(
    remoteControlConnections.flatMap((connection) =>
      addedEnvIds.has(connection.envId) && connection.installationId != null
        ? [connection.installationId]
        : [],
    ),
  );
  return dedupeRemoteControlConnectionsByInstallation({
    remoteControlConnections,
  }).filter(
    (connection) =>
      addedEnvIds.has(connection.envId) ||
      (connection.installationId != null &&
        addedInstallationIds.has(connection.installationId)),
  );
}
export const selectableRemoteConnectionsSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: { get: (signal: unknown, key: string) => unknown }) => {
    const remoteSshConnections = readHostConfigValue(
      get,
      "remote_ssh_connections",
    ) as readonly RemoteConnection[] | null | undefined;
    const remoteWslConnections = readHostConfigValue(
      get,
      "remote_wsl_connections",
    ) as readonly RemoteConnection[] | null | undefined;
    if (remoteSshConnections == null) return undefined;
    return combineSelectableRemoteConnections({
      addedRemoteControlEnvIds:
        (getGlobalStateValue(
          get,
          globalSettingKeys.ADDED_REMOTE_CONTROL_ENV_IDS,
        ) as readonly string[] | null | undefined) ?? [],
      remoteSshConnections,
      remoteWslConnections: remoteWslConnections ?? [],
      remoteControlConnections:
        (readHostConfigValue(get, "remote_control_connections") as
          | readonly RemoteControlConnection[]
          | null
          | undefined) ?? [],
    });
  },
);
export function getRemainingRemoteControlConnections({
  addedRemoteControlEnvIds,
  remoteControlConnections,
}: SelectableRemoteConnectionsInput): RemoteControlConnection[] {
  const addedConnections = getAddedRemoteControlConnections({
    addedRemoteControlEnvIds,
    remoteControlConnections,
  });
  const addedEnvIds = new Set(
    addedConnections.map((connection) => connection.envId),
  );
  const addedInstallationIds = new Set(
    addedConnections.flatMap((connection) =>
      connection.installationId == null ? [] : [connection.installationId],
    ),
  );
  return dedupeRemoteControlConnectionsByInstallation({
    remoteControlConnections,
  }).filter(
    (connection) =>
      !addedEnvIds.has(connection.envId) &&
      (connection.installationId == null ||
        !addedInstallationIds.has(connection.installationId)),
  );
}
export const selectableRemoteConnectionsLoadingSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: { get: (signal: unknown, key: string) => unknown }) =>
    readHostConfigValue(get, "remote_ssh_connections") == null ||
    readHostConfigValue(get, "remote_control_connections") == null,
);
function combineSelectableRemoteConnections({
  addedRemoteControlEnvIds,
  remoteControlConnections,
  remoteSshConnections,
  remoteWslConnections,
}: CombinedRemoteConnectionsInput): RemoteConnection[] {
  return [
    ...remoteSshConnections,
    ...remoteWslConnections,
    ...getAddedRemoteControlConnections({
      addedRemoteControlEnvIds,
      remoteControlConnections,
    }),
  ];
}
function dedupeRemoteControlConnectionsByInstallation({
  remoteControlConnections,
}: {
  remoteControlConnections: readonly RemoteControlConnection[];
}): RemoteControlConnection[] {
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
