// Restored from ref/webview/assets/settings-host-context-DiRourTr.js
// Settings host selection state for local and connected remote hosts.
import React from "react";
import {
  _appScopeO as useAppScope,
  appScopeRoot,
  createAppScopeSignal,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import { selectableRemoteConnectionsSignal } from "../remote/selectable-remote-connections-signal";
import {
  type RemoteConnectionWithHostId,
  useConnectedRemoteConnections,
} from "../remote/use-connected-remote-connections";
type AppScopeHandle = {
  set: (signal: unknown, value: string) => void;
};
export type SettingsHostProject = {
  projectKind: "local" | "remote";
  hostId?: string | null;
  [key: string]: unknown;
};
export type SettingsHostContextValue = {
  connectedRemoteConnections: readonly RemoteConnectionWithHostId[] | undefined;
  remoteConnectionHostIds: string[] | undefined;
  selectedHostId: string;
  setSelectedHostId: (hostId: string) => void;
};
const selectedSettingsHostIdSignal = createAppScopeSignal(
  appScopeRoot,
  LOCAL_HOST_ID,
);
export function getValidSettingsHostId(
  selectedHostId: string,
  connectedRemoteConnections?: readonly RemoteConnectionWithHostId[] | null,
): string {
  return connectedRemoteConnections == null ||
    selectedHostId === LOCAL_HOST_ID ||
    connectedRemoteConnections.some(
      (connection) => connection.hostId === selectedHostId,
    )
    ? selectedHostId
    : LOCAL_HOST_ID;
}
export function useSettingsHostContext(): SettingsHostContextValue {
  const appScope = useAppScope(appScopeRoot) as AppScopeHandle;
  const selectableRemoteConnections = useAppScopeValue(
    selectableRemoteConnectionsSignal,
  ) as readonly RemoteConnectionWithHostId[] | undefined;
  const connectedRemoteConnections = useConnectedRemoteConnections(
    selectableRemoteConnections,
  );
  const selectedHostId = useAppScopeValue(
    selectedSettingsHostIdSignal,
  ) as string;
  const remoteConnectionHostIds = selectableRemoteConnections?.map(
    getRemoteConnectionHostId,
  );
  const validSelectedHostId = getValidSettingsHostId(
    selectedHostId,
    connectedRemoteConnections,
  );
  const setSelectedHostId = React.useCallback(
    (hostId: string) => {
      setSettingsSelectedHostId(appScope, hostId);
    },
    [appScope],
  );
  return {
    connectedRemoteConnections,
    remoteConnectionHostIds,
    selectedHostId: validSelectedHostId,
    setSelectedHostId,
  };
}
export function filterProjectsForSettingsHost<
  Project extends SettingsHostProject,
>(projects: readonly Project[], selectedHostId: string): Project[] {
  return projects.filter((project) =>
    selectedHostId === LOCAL_HOST_ID
      ? project.projectKind === "local"
      : project.projectKind === "remote" && project.hostId === selectedHostId,
  );
}
export function setSettingsSelectedHostId(
  appScope: AppScopeHandle,
  selectedHostId: string,
): void {
  appScope.set(selectedSettingsHostIdSignal, selectedHostId);
}
function getRemoteConnectionHostId(
  remoteConnection: RemoteConnectionWithHostId,
): string {
  return remoteConnection.hostId;
}
export function initSettingsHostProjectFilterChunk(): void {
  void getValidSettingsHostId;
  void filterProjectsForSettingsHost;
}

export function initSettingsHostContextRuntimeChunk(): void {
  initSettingsHostProjectFilterChunk();
  void useSettingsHostContext;
  void setSettingsSelectedHostId;
}
