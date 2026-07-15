// Restored from ref/webview/assets/use-connected-remote-connections-BhOWSTjG.js
// Hooks for deriving connected remote connection lists from app-server state.
import {
  _appScopeA as useScopedSignalValue,
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import { appServerConnectionStateSignal } from "../boundaries/thread-context-inputs.facade";
import { sortBy } from "../utils/sort-by";
export type RemoteConnectionWithHostId = {
  hostId: string;
};
type AppServerConnectionStateByHostId = Record<string, unknown>;
const remoteConnectionStateByHostIdSignal = createComputedSignalFamily(
  appScopeRoot,
  (
    hostIds: readonly string[] | undefined,
    {
      get,
    }: {
      get: (signal: unknown, key: string) => unknown;
    },
  ): AppServerConnectionStateByHostId | undefined => {
    if (hostIds == null) return undefined;
    return Object.fromEntries(
      hostIds.map((hostId) => [
        hostId,
        get(appServerConnectionStateSignal, hostId),
      ]),
    );
  },
);
export function useRemoteConnectionStateByHostId(
  remoteConnections?: readonly RemoteConnectionWithHostId[] | null,
): AppServerConnectionStateByHostId | undefined {
  const sortedHostIds =
    remoteConnections == null
      ? undefined
      : sortBy(remoteConnections.map(getRemoteConnectionHostId));
  return useScopedSignalValue(
    remoteConnectionStateByHostIdSignal,
    sortedHostIds,
  );
}
export function useConnectedRemoteConnections<
  RemoteConnection extends RemoteConnectionWithHostId,
>(
  remoteConnections?: readonly RemoteConnection[] | null,
): RemoteConnection[] | undefined {
  const stateByHostId = useRemoteConnectionStateByHostId(remoteConnections);
  if (remoteConnections == null || stateByHostId == null) return undefined;
  return remoteConnections.filter(
    (remoteConnection) =>
      stateByHostId[remoteConnection.hostId] === "connected",
  );
}
function getRemoteConnectionHostId(
  remoteConnection: RemoteConnectionWithHostId,
): string {
  return remoteConnection.hostId;
}

export function initRemoteConnectionStateByHostIdChunk(): void {
  void remoteConnectionStateByHostIdSignal;
  void useRemoteConnectionStateByHostId;
  void useConnectedRemoteConnections;
}
