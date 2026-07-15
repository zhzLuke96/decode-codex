// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Remote host selection state, predicates, and icon renderer.
import type { ComponentPropsWithoutRef, ReactElement } from "react";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";

export type RemoteConnectionKind = "ssh" | "wsl" | string;

export interface RemoteHostConnection {
  arch?: string | null;
  connectionAnalyticsId?: string | null;
  displayName?: string | null;
  distro?: string | null;
  hostId: string;
  kind?: RemoteConnectionKind | null;
  os?: string | null;
  source?: "codex-managed" | "discovered" | string | null;
  sshAlias?: string | null;
  sshHost?: string | null;
  state?: string | null;
  status?: string | null;
  type?: RemoteConnectionKind | null;
}

export interface RemoteConnectionsState {
  remoteConnections: RemoteHostConnection[];
  selectedRemoteHostId: string | null;
}

const REMOTE_HOST_COLORS = [
  "#4577d4",
  "#0f9f6e",
  "#b86b00",
  "#b24592",
  "#667085",
  "#0f766e",
] as const;

export const remoteConnectionsStateSignal =
  appScopeUnderscore<RemoteConnectionsState>(appScopeRoot, () => ({
    remoteConnections: [],
    selectedRemoteHostId: null,
  }));

export function isSshConnection(
  connection: RemoteHostConnection | null | undefined,
): boolean {
  const kind = connection?.kind ?? connection?.type;
  return (
    kind === "ssh" ||
    kind === "remote-ssh" ||
    connection?.sshAlias != null ||
    connection?.sshHost != null
  );
}

export function isWslConnection(
  connection: RemoteHostConnection | null | undefined,
): boolean {
  const kind = connection?.kind ?? connection?.type;
  return (
    kind === "wsl" ||
    kind === "windows-subsystem-linux" ||
    connection?.distro != null
  );
}

export function getSelectableRemoteHosts(
  remoteConnections: readonly RemoteHostConnection[] | null | undefined,
): RemoteHostConnection[] {
  if (!Array.isArray(remoteConnections)) return [];
  return remoteConnections.filter((connection) => {
    const state = connection.state ?? connection.status ?? null;
    return (
      connection.hostId.trim().length > 0 &&
      (connection.displayName?.trim().length ?? 0) > 0 &&
      (state == null || state === "connected" || state === "ready")
    );
  });
}

function getRemoteHostColor(
  hostId: string,
  hostIdsForColorAssignment?: readonly string[],
): string {
  const index = hostIdsForColorAssignment?.indexOf(hostId) ?? -1;
  const colorIndex =
    index >= 0
      ? index
      : Array.from(hostId).reduce(
          (sum, character) => sum + character.charCodeAt(0),
          0,
        );
  return REMOTE_HOST_COLORS[colorIndex % REMOTE_HOST_COLORS.length];
}

export interface RemoteHostIconProps extends ComponentPropsWithoutRef<"svg"> {
  hostId: string;
  hostIdsForColorAssignment?: readonly string[];
}

export function RemoteHostIcon({
  hostId,
  hostIdsForColorAssignment,
  style,
  ...props
}: RemoteHostIconProps): ReactElement {
  const color = getRemoteHostColor(hostId, hostIdsForColorAssignment);
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 16 16"
      style={{ color, ...style }}
      {...props}
    >
      <circle cx="8" cy="8" r="6.5" fill="currentColor" opacity="0.18" />
      <path
        d="M4.5 9.5h7M5.25 6.5h5.5M8 3.75v8.5M4 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.15"
      />
    </svg>
  );
}
