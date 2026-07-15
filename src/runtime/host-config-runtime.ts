// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Host config helper initialization.
import {
  createAppScopedDerivedSignalFamily,
  initAppScopeSignalRuntime,
  type ScopedSignalGetter,
} from "./app-scope-runtime";
import { useScopedValue } from "./app-scope-hooks";
import {
  initRemoteHostConfigRuntime,
  readSharedObjectValueWithReader,
  type SharedObjectValueReader,
} from "./shared-object-host-runtime";

export type HostConfigRecord = {
  id: string;
  kind?: string;
} & Record<string, unknown>;

type RemoteConnectionRecord = {
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
  source?: string;
  sshAlias?: string;
  sshHost?: string;
  sshPort?: number;
};

const HOST_CONFIG_KEY = "host_config";
const REMOTE_SSH_CONNECTIONS_KEY = "remote_ssh_connections";
const REMOTE_WSL_CONNECTIONS_KEY = "remote_wsl_connections";
const REMOTE_CONTROL_CONNECTIONS_KEY = "remote_control_connections";
const LOCAL_HOST_CONFIG: HostConfigRecord = {
  display_name: "Local",
  id: "local",
  kind: "local",
};

function readSharedObjectValue<TValue>(
  get: ScopedSignalGetter["get"],
  key: string,
): TValue | undefined {
  return readSharedObjectValueWithReader(
    get as SharedObjectValueReader<TValue | undefined>,
    key,
  );
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
}): Array<string | undefined> {
  const trimmedAlias = alias?.trim();
  if (trimmedAlias) return [trimmedAlias];

  const args: Array<string | undefined> = [];
  if (identity) args.push("-i", identity);
  if (sshPort != null) args.push("-p", String(sshPort));
  args.push(hostname);
  return args;
}

function normalizeRemoteConnectionToHostConfig(
  connection: RemoteConnectionRecord,
): HostConfigRecord {
  if (connection.source === "remote-control") {
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
      kind: "remote-control",
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
      terminal_command: ["wsl.exe", "-d", connection.distro],
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

function findHostConfigById(
  hostId: string,
  remoteConnections: RemoteConnectionRecord[] | undefined,
): HostConfigRecord {
  const remoteConnection = remoteConnections?.find(
    (connection) => connection.hostId === hostId,
  );
  return remoteConnection == null
    ? LOCAL_HOST_CONFIG
    : normalizeRemoteConnectionToHostConfig(remoteConnection);
}

export const hostConfigByIdSignal = createAppScopedDerivedSignalFamily<
  string,
  HostConfigRecord
>((hostId, { get }) => {
  const currentHostConfig =
    readSharedObjectValue<HostConfigRecord | null>(get, HOST_CONFIG_KEY) ??
    null;

  if (currentHostConfig != null && currentHostConfig.id === hostId) {
    return currentHostConfig;
  }

  const remoteConnections = [
    ...(readSharedObjectValue<RemoteConnectionRecord[]>(
      get,
      REMOTE_SSH_CONNECTIONS_KEY,
    ) ?? []),
    ...(readSharedObjectValue<RemoteConnectionRecord[]>(
      get,
      REMOTE_WSL_CONNECTIONS_KEY,
    ) ?? []),
    ...(readSharedObjectValue<RemoteConnectionRecord[]>(
      get,
      REMOTE_CONTROL_CONNECTIONS_KEY,
    ) ?? []),
  ];

  return findHostConfigById(hostId, remoteConnections);
});

export function initHostConfigRuntime(): void {
  initAppScopeSignalRuntime();
  initRemoteHostConfigRuntime();
}

export function initLocalHostConstantsRuntime(): void {
  // The original local-host constants initializer is a no-op in this bundle.
}

export function getHostConfigKey(hostConfig: HostConfigRecord): string {
  return hostConfig.id;
}

export function useHostConfigById<THostConfig extends HostConfigRecord>(
  hostId: string,
): THostConfig {
  return useScopedValue<THostConfig>(hostConfigByIdSignal, hostId);
}
