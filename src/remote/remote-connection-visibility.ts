// Restored from ref/webview/assets/remote-connection-visibility-CzDH6oqC.js
// Remote connection visibility gates and derived remote connection state.
import { readStatsigGateValue } from "../vendor/statsig-current-runtime";
import {
  _appScopeA as useAppScopeQueryValue,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { selectedHostIdSignal } from "../boundaries/thread-context-inputs.facade";
import { userConfigQueryOptions } from "../config/config-queries";
import { selectableRemoteConnectionsSignal } from "./selectable-remote-connections-signal";
const REMOTE_CONNECTIONS_FEATURE_GATE = "4114442250";
const REMOTE_CONTROL_SLINGSHOT_GATE = "1042620455";
type HostConfigWithFeatures = {
  config?: {
    features?: unknown;
    "features.remote_connections"?: boolean;
  } | null;
};
type RemoteConnection = {
  autoConnect?: boolean;
  hostId: string;
  [key: string]: unknown;
};
type RemoteConnectionsState = {
  enabledRemoteHostIdSet: Set<string>;
  remoteConnections: RemoteConnection[];
};
function hasRemoteConnectionsFeatureOverride(
  features: unknown,
  statsigFallback: boolean,
): boolean {
  if (
    typeof features !== "object" ||
    features == null ||
    Array.isArray(features)
  ) {
    return statsigFallback;
  }
  return (
    Object.getOwnPropertyDescriptor(features, "remote_connections")?.value ===
      true || statsigFallback
  );
}
export function useIsRemoteConnectionsVisible(): boolean {
  const selectedHostId = useAppScopeValue(selectedHostIdSignal);
  const { data } = useAppScopeQueryValue(
    userConfigQueryOptions,
    selectedHostId,
  ) as {
    data?: HostConfigWithFeatures | null;
  };
  const statsigFallback = readStatsigGateValue(REMOTE_CONNECTIONS_FEATURE_GATE);
  if (data?.config?.["features.remote_connections"] === true) return true;
  return hasRemoteConnectionsFeatureOverride(
    data?.config?.features,
    statsigFallback,
  );
}
export function isRemoteControlSlingshotEnabled(): boolean {
  return readStatsigGateValue(REMOTE_CONTROL_SLINGSHOT_GATE);
}
export function useSelectableRemoteConnectionsState(): RemoteConnectionsState {
  const remoteConnections =
    (useAppScopeValue(selectableRemoteConnectionsSignal) as
      | RemoteConnection[]
      | null
      | undefined) ?? [];
  return {
    remoteConnections,
    enabledRemoteHostIdSet: new Set(remoteConnections.flatMap(getAutoHostId)),
  };
}
function getAutoHostId(connection: RemoteConnection): string[] {
  return connection.autoConnect ? [connection.hostId] : [];
}
