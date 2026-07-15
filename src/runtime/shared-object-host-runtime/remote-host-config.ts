// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js
// Remote connection list and host_config helpers.
import { useMemo } from "react";

import {
  initSharedObjectStateRuntime,
  readSharedObjectSnapshotValue,
  useSharedObjectState,
} from "./shared-object-state";

export type RemoteConnection = {
  appServerVersion?: string;
  arch?: string;
  busy?: boolean;
  displayName?: string;
  distro?: string;
  envId?: string;
  environmentKind?: string;
  hostId: string;
  hostName?: string;
  identity?: string;
  lastSeenAt?: string;
  online?: boolean;
  os?: string;
  source?: "codex-managed" | "discovered" | "remote-control" | "wsl" | string;
  sshAlias?: string;
  sshHost?: string;
  sshPort?: number;
};

export type RemoteHostConfig = {
  app_server_version?: string;
  arch?: string;
  busy?: boolean;
  codex_cli_command: string[];
  display_name?: string;
  distro?: string;
  env_id?: string;
  environment_kind?: string;
  host_name?: string;
  id: string;
  kind: "local" | "remote-control" | "ssh" | "wsl" | string;
  last_seen_at?: string;
  online?: boolean;
  os?: string;
  terminal_command: string[];
};

export type RemoteHostConfigOptions = {
  waitForRemoteSshConnections?: boolean;
};

const REMOTE_CONTROL_HOST_KIND = "remote-control";

export const localHostKind = "local";
export const localHostKindAlias = localHostKind;

const localHostConfig: RemoteHostConfig = {
  codex_cli_command: [],
  display_name: "Local",
  id: localHostKind,
  kind: localHostKind,
  terminal_command: [],
};

export function initLocalHostKindRuntime(): void {}

export function initRemoteConnectionListRuntime(): void {
  initSharedObjectStateRuntime();
}

export function initRemoteHostConfigRuntime(): void {
  initRemoteConnectionListRuntime();
}

export function initSharedObjectHostRuntime(): void {
  initRemoteHostConfigRuntime();
}

function buildSshTerminalArguments({
  alias,
  hostname,
  identity,
  sshPort,
}: {
  alias?: string;
  hostname?: string;
  identity?: string;
  sshPort?: number;
}) {
  const trimmedAlias = alias?.trim();
  if (trimmedAlias) return [trimmedAlias];

  const args: string[] = [];
  if (identity) args.push("-i", identity);
  if (sshPort != null) args.push("-p", String(sshPort));
  if (hostname) args.push(hostname);
  return args;
}

export function normalizeRemoteConnectionToHostConfig(
  connection: RemoteConnection,
): RemoteHostConfig {
  if (connection.source === REMOTE_CONTROL_HOST_KIND) {
    return {
      app_server_version: connection.appServerVersion,
      arch: connection.arch,
      busy: connection.busy,
      codex_cli_command: [],
      display_name: connection.displayName,
      env_id: connection.envId,
      environment_kind: connection.environmentKind,
      host_name: connection.hostName,
      id: connection.hostId,
      kind: REMOTE_CONTROL_HOST_KIND,
      last_seen_at: connection.lastSeenAt,
      online: connection.online,
      os: connection.os,
      terminal_command: [],
    };
  }

  if (connection.source === "wsl") {
    return {
      codex_cli_command: [],
      display_name: connection.displayName,
      distro: connection.distro,
      id: connection.hostId,
      kind: "wsl",
      terminal_command: ["wsl.exe", "-d", connection.distro ?? ""],
    };
  }

  return {
    codex_cli_command: [],
    display_name: connection.displayName,
    id: connection.hostId,
    kind: "ssh",
    terminal_command: [
      "ssh",
      ...buildSshTerminalArguments({
        alias: connection.sshAlias,
        hostname: connection.sshHost,
        identity: connection.identity,
        sshPort: connection.sshPort,
      }),
    ],
  };
}

export function useRemoteHostConfigs({
  waitForRemoteSshConnections = false,
}: RemoteHostConfigOptions = {}): RemoteConnection[] | undefined {
  const [remoteSshConnections] = useSharedObjectState<RemoteConnection[]>(
    "remote_ssh_connections",
  );
  const [remoteWslConnections] = useSharedObjectState<RemoteConnection[]>(
    "remote_wsl_connections",
  );
  const [remoteControlConnections] = useSharedObjectState<RemoteConnection[]>(
    "remote_control_connections",
  );

  return useMemo(() => {
    if (waitForRemoteSshConnections && remoteSshConnections == null) {
      return undefined;
    }
    return [
      ...(remoteSshConnections ?? []),
      ...(remoteWslConnections ?? []),
      ...(remoteControlConnections ?? []),
    ];
  }, [
    remoteControlConnections,
    remoteSshConnections,
    remoteWslConnections,
    waitForRemoteSshConnections,
  ]);
}

export function useSharedObjectHostConfigById<
  THostConfig extends RemoteHostConfig = RemoteHostConfig,
>(hostId: string): THostConfig {
  const remoteHostConfigs = useRemoteHostConfigs();
  const [currentHostConfig] =
    useSharedObjectState<RemoteHostConfig>("host_config");

  if (hostId === currentHostConfig?.id) {
    return (currentHostConfig ?? localHostConfig) as THostConfig;
  }

  return findRemoteHostConfigById(hostId, remoteHostConfigs) as THostConfig;
}

export function findRemoteHostConfigById<
  THostConfig extends RemoteHostConfig = RemoteHostConfig,
>(
  hostId: string,
  remoteHostConfigs: RemoteConnection[] | undefined,
): THostConfig {
  const remoteConnection = remoteHostConfigs?.find(
    (connection) => connection.hostId === hostId,
  );
  return (
    remoteConnection == null
      ? localHostConfig
      : normalizeRemoteConnectionToHostConfig(remoteConnection)
  ) as THostConfig;
}

export function isCurrentHostLocal(hostId: string): boolean {
  if (typeof window === "undefined") return hostId === localHostKind;

  const currentHostConfig =
    (readSharedObjectSnapshotValue("host_config") as
      | RemoteHostConfig
      | null
      | undefined) ?? null;

  return currentHostConfig == null
    ? hostId === localHostKind
    : currentHostConfig.id === hostId &&
        currentHostConfig.kind === localHostKind;
}
