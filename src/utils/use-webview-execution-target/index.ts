// Restored from ref/webview/assets/use-webview-execution-target-DSM6vyid.js
// Derives the active webview execution cwd/host target from conversation and remote-project state.
import {
  _appScopeA as useScopedSignalValue,
  _appScopeC as createComputedSignal,
  appScopeRoot,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import { globalSettingKeys } from "../../boundaries/src-l0hb-mz-p";
import {
  A as conversationCwdSignal,
  appServerConnectionStateSignal,
  getGlobalStateValue,
  N as activeWorkspaceRootsQuery,
  T as activeLocalWorkspaceRootSignal,
  ta as writeGlobalSetting,
  V as conversationHostIdSignal,
} from "../../boundaries/thread-context-inputs.facade";
import {
  _useHostConfigMt as getHostConfigById,
  LOCAL_HOST_ID,
  useHostConfigO as useHostConfigValue,
} from "../../boundaries/use-host-config.facade";
import { vscodeApiH as productLogger } from "../../boundaries/vscode-api";
import {
  selectableRemoteConnectionsLoadingSignal,
  selectableRemoteConnectionsSignal,
} from "../../remote/selectable-remote-connections-signal";
import {
  useRemoteProjects,
  type RemoteProject,
} from "../../features/remote-projects";
type AppScopeStoreLike = {
  watch(
    callback: (context: {
      get: <TValue = unknown>(signal: unknown) => TValue;
    }) => void,
  ): unknown;
};
type RemoteConnection = {
  hostId: string;
  [key: string]: unknown;
};
type ConnectionState =
  | "connected"
  | "restarting"
  | "error"
  | "connecting"
  | "disconnected";
type RemoteConnectionSelectionState = {
  isRemoteConnectionsLoading: boolean;
  persistedSelectedRemoteHostId: string | null;
  remoteConnections: RemoteConnection[];
  selectedRemoteConnection: RemoteConnection | null;
  selectedRemoteHostId: string | null;
  sortedRemoteConnections: RemoteConnection[];
};
type ExecutionTargetParams = {
  activeLocalProjectCwd?: string | null;
  conversationCwd?: string | null;
  conversationHostId?: string | null;
  selectedRemoteProject?: RemoteProject | null;
};
export type WebviewExecutionTarget = {
  cwd?: string | null;
  hostId: string;
};
export type WebviewExecutionTargetState = WebviewExecutionTarget & {
  activeWorkspaceRoot: string | null;
  hostConfig: unknown;
  isActiveWorkspaceRootLoading: boolean | undefined;
};
const connectionStateRank: Record<ConnectionState, number> = {
  connected: 0,
  restarting: 1,
  error: 2,
  connecting: 3,
  disconnected: 4,
};
function sortRemoteConnectionsByState(
  remoteConnections: RemoteConnection[],
  stateByHostId: Record<string, ConnectionState | undefined>,
): RemoteConnection[] {
  return [...remoteConnections]
    .map((connection, index) => ({
      connection,
      index,
    }))
    .sort((first, second) => {
      const firstRank =
        connectionStateRank[
          stateByHostId[first.connection.hostId] ?? "disconnected"
        ];
      const secondRank =
        connectionStateRank[
          stateByHostId[second.connection.hostId] ?? "disconnected"
        ];
      return firstRank === secondRank
        ? first.index - second.index
        : firstRank - secondRank;
    })
    .map(({ connection }) => connection);
}
const remoteConnectionSelectionSignal = createComputedSignal(
  appScopeRoot,
  ({
    get,
  }: {
    get: <TValue = unknown>(signal: unknown, params?: unknown) => TValue;
  }): RemoteConnectionSelectionState => {
    const isRemoteConnectionsLoading = get<boolean>(
      selectableRemoteConnectionsLoadingSignal,
    );
    const remoteConnections =
      get<RemoteConnection[] | undefined>(selectableRemoteConnectionsSignal) ??
      [];
    const sortedRemoteConnections = sortRemoteConnectionsByState(
      remoteConnections,
      Object.fromEntries(
        remoteConnections.map((connection) => [
          connection.hostId,
          get<ConnectionState | undefined>(
            appServerConnectionStateSignal,
            connection.hostId,
          ),
        ]),
      ),
    );
    const persistedSelectedRemoteHostId =
      (getGlobalStateValue(get, globalSettingKeys.SELECTED_REMOTE_HOST_ID) as
        | string
        | null
        | undefined) ?? null;
    const selectedRemoteHostId = isRemoteConnectionsLoading
      ? persistedSelectedRemoteHostId
      : (sortedRemoteConnections.find(
          (connection) => connection.hostId === persistedSelectedRemoteHostId,
        )?.hostId ??
        sortedRemoteConnections[0]?.hostId ??
        null);
    return {
      isRemoteConnectionsLoading,
      persistedSelectedRemoteHostId,
      remoteConnections,
      selectedRemoteConnection:
        sortedRemoteConnections.find(
          (connection) => connection.hostId === selectedRemoteHostId,
        ) ?? null,
      selectedRemoteHostId,
      sortedRemoteConnections,
    };
  },
);
function reconcilePersistedRemoteHostSelection(
  appScopeStore: AppScopeStoreLike,
) {
  let pendingPersistedHostId: string | undefined;
  return appScopeStore.watch(({ get }) => {
    const selectionState = get<RemoteConnectionSelectionState>(
      remoteConnectionSelectionSignal,
    );
    if (
      pendingPersistedHostId === selectionState.persistedSelectedRemoteHostId
    ) {
      pendingPersistedHostId = undefined;
    }
    if (
      selectionState.isRemoteConnectionsLoading ||
      selectionState.persistedSelectedRemoteHostId ===
        selectionState.selectedRemoteHostId ||
      selectionState.sortedRemoteConnections.length === 0 ||
      pendingPersistedHostId === selectionState.selectedRemoteHostId
    ) {
      return;
    }
    productLogger.info(
      `${"[remote-connections/selection]"} persisted_selection_reconciled`,
      {
        safe: {
          availableConnectionCount:
            selectionState.sortedRemoteConnections.length,
          selectedConnectionState:
            selectionState.selectedRemoteConnection == null
              ? "cleared"
              : "selected",
        },
        sensitive: {
          persistedSelectedRemoteHostId:
            selectionState.persistedSelectedRemoteHostId,
          selectedRemoteHostId: selectionState.selectedRemoteHostId,
        },
      },
    );
    const nextSelectedRemoteHostId = selectionState.selectedRemoteHostId;
    pendingPersistedHostId = nextSelectedRemoteHostId ?? undefined;
    writeGlobalSetting(
      appScopeStore,
      globalSettingKeys.SELECTED_REMOTE_HOST_ID,
      nextSelectedRemoteHostId ?? undefined,
    ).catch((error: unknown) => {
      if (pendingPersistedHostId === nextSelectedRemoteHostId) {
        pendingPersistedHostId = undefined;
      }
      throw error;
    });
  });
}
function resolveWebviewExecutionTarget({
  activeLocalProjectCwd,
  conversationCwd,
  conversationHostId,
  selectedRemoteProject,
}: ExecutionTargetParams): WebviewExecutionTarget {
  if (conversationCwd || conversationHostId != null) {
    return {
      cwd: conversationCwd === "~" ? null : conversationCwd,
      hostId: conversationHostId ?? "local",
    };
  }
  if (selectedRemoteProject == null) {
    return {
      cwd: activeLocalProjectCwd,
      hostId: LOCAL_HOST_ID as string,
    };
  }
  return {
    cwd: selectedRemoteProject.remotePath,
    hostId: selectedRemoteProject.hostId,
  };
}
function useWebviewExecutionTarget(
  conversationId?: string | null,
): WebviewExecutionTargetState {
  const conversationKey = conversationId === undefined ? null : conversationId;
  const conversationCwd = useScopedSignalValue<string | null | undefined>(
    conversationCwdSignal,
    conversationKey,
  );
  const conversationHostId = useScopedSignalValue<string | null | undefined>(
    conversationHostIdSignal,
    conversationKey,
  );
  const {
    data: activeWorkspaceRoots,
    isLoading: isActiveWorkspaceRootLoading,
  } = useAppScopeValue(activeWorkspaceRootsQuery) as {
    data?: {
      roots?: string[];
    } | null;
    isLoading?: boolean;
  };
  const activeLocalProjectCwd = useAppScopeValue<string | null | undefined>(
    activeLocalWorkspaceRootSignal,
  );
  const { remoteConnections } = useAppScopeValue(
    remoteConnectionSelectionSignal,
  ) as RemoteConnectionSelectionState;
  const { selectedRemoteProject } = useRemoteProjects();
  const [currentHostConfig] = useHostConfigValue("host_config") as [unknown?];
  const activeWorkspaceRoot = activeWorkspaceRoots?.roots?.[0] ?? null;
  const executionTarget = resolveWebviewExecutionTarget({
    activeLocalProjectCwd,
    conversationCwd,
    conversationHostId,
    selectedRemoteProject,
  });
  const hostConfig =
    currentHostConfig != null &&
    executionTarget.hostId ===
      (
        currentHostConfig as {
          id?: string | null;
        }
      ).id
      ? currentHostConfig
      : getHostConfigById(executionTarget.hostId, remoteConnections);
  return {
    activeWorkspaceRoot,
    isActiveWorkspaceRootLoading,
    hostConfig,
    ...executionTarget,
  };
}
function initWebviewExecutionTargetChunk(): void {
  void remoteConnectionSelectionSignal;
  void connectionStateRank;
}
export {
  initWebviewExecutionTargetChunk,
  reconcilePersistedRemoteHostSelection,
  useWebviewExecutionTarget,
  remoteConnectionSelectionSignal,
  resolveWebviewExecutionTarget,
};
