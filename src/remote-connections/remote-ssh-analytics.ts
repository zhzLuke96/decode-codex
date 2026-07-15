// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Remote SSH analytics enums and product-event logging helper.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import type { RemoteHostConnection } from "./remote-host-runtime";

type RemoteSshAnalyticsLogger = {
  flush?: () => Promise<void> | void;
  logProductEvent?: (descriptor: unknown, payload: unknown) => void;
  submitCodexAnalyticsEvent?: unknown;
  trackCounter?: (...args: unknown[]) => Promise<void> | void;
};

type RemoteSshConnectionEventPayload = {
  connection?: RemoteHostConnection | null;
  connectionError?: { code?: string | null } | null;
  connectionState?: string | null;
  errorCategory?: string | null;
  [key: string]: unknown;
};

const REMOTE_SSH_CONNECTION_EVENT_DESCRIPTOR = {
  $type: "protobuf_analytics_events.v1.CodexRemoteSshConnectionEvent",
} as const;

export const RemoteSshConnectionAction = {
  CODEX_REMOTE_SSH_CONNECTION_ACTION_UNSPECIFIED:
    "CODEX_REMOTE_SSH_CONNECTION_ACTION_UNSPECIFIED",
  CODEX_REMOTE_SSH_CONNECTION_ACTION_REFRESH:
    "CODEX_REMOTE_SSH_CONNECTION_ACTION_REFRESH",
  CODEX_REMOTE_SSH_CONNECTION_ACTION_SAVE_CONNECTION:
    "CODEX_REMOTE_SSH_CONNECTION_ACTION_SAVE_CONNECTION",
  CODEX_REMOTE_SSH_CONNECTION_ACTION_CONNECT:
    "CODEX_REMOTE_SSH_CONNECTION_ACTION_CONNECT",
  CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT:
    "CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT",
  CODEX_REMOTE_SSH_CONNECTION_ACTION_STATE_CHANGED:
    "CODEX_REMOTE_SSH_CONNECTION_ACTION_STATE_CHANGED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const RemoteSshConnectionResult = {
  CODEX_REMOTE_SSH_CONNECTION_RESULT_UNSPECIFIED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_UNSPECIFIED",
  CODEX_REMOTE_SSH_CONNECTION_RESULT_STARTED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_STARTED",
  CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED",
  CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const RemoteSshConnectionEventSource = {
  CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_UNSPECIFIED:
    "CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_UNSPECIFIED",
  CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS:
    "CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS",
  CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP:
    "CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP",
  CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_CONNECTION_MANAGER:
    "CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_CONNECTION_MANAGER",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const RemoteSshConnectionErrorCategory = {
  CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNSPECIFIED:
    "CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNSPECIFIED",
  CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN:
    "CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN",
  CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_CONNECTION_FAILED:
    "CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_CONNECTION_FAILED",
  CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_LOGIN_REQUIRED:
    "CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_LOGIN_REQUIRED",
  CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UPDATE_REQUIRED:
    "CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UPDATE_REQUIRED",
  CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_RESTART_REQUIRED:
    "CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_RESTART_REQUIRED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

const RemoteSshConnectionSource = {
  CODEX_REMOTE_SSH_CONNECTION_SOURCE_CODEX_MANAGED:
    "CODEX_REMOTE_SSH_CONNECTION_SOURCE_CODEX_MANAGED",
  CODEX_REMOTE_SSH_CONNECTION_SOURCE_DISCOVERED:
    "CODEX_REMOTE_SSH_CONNECTION_SOURCE_DISCOVERED",
} as const;

const RemoteSshConnectionState = {
  CODEX_REMOTE_SSH_CONNECTION_STATE_DISCONNECTED:
    "CODEX_REMOTE_SSH_CONNECTION_STATE_DISCONNECTED",
  CODEX_REMOTE_SSH_CONNECTION_STATE_CONNECTING:
    "CODEX_REMOTE_SSH_CONNECTION_STATE_CONNECTING",
  CODEX_REMOTE_SSH_CONNECTION_STATE_ERROR:
    "CODEX_REMOTE_SSH_CONNECTION_STATE_ERROR",
  CODEX_REMOTE_SSH_CONNECTION_STATE_CONNECTED:
    "CODEX_REMOTE_SSH_CONNECTION_STATE_CONNECTED",
  CODEX_REMOTE_SSH_CONNECTION_STATE_UNSPECIFIED:
    "CODEX_REMOTE_SSH_CONNECTION_STATE_UNSPECIFIED",
} as const;

const emptyRemoteSshAnalyticsLogger: RemoteSshAnalyticsLogger = {
  logProductEvent: () => {},
  trackCounter: async () => {},
  flush: async () => {},
  submitCodexAnalyticsEvent: null,
};

export const remoteSshConnectionAnalyticsSignal =
  appScopeUnderscore<RemoteSshAnalyticsLogger>(
    appScopeRoot,
    () => emptyRemoteSshAnalyticsLogger,
  );

function getConnectionSource(source?: string | null): string | undefined {
  switch (source) {
    case "codex-managed":
      return RemoteSshConnectionSource.CODEX_REMOTE_SSH_CONNECTION_SOURCE_CODEX_MANAGED;
    case "discovered":
      return RemoteSshConnectionSource.CODEX_REMOTE_SSH_CONNECTION_SOURCE_DISCOVERED;
    default:
      return undefined;
  }
}

function getConnectionState(state?: string | null): string | undefined {
  switch (state) {
    case "disconnected":
      return RemoteSshConnectionState.CODEX_REMOTE_SSH_CONNECTION_STATE_DISCONNECTED;
    case "connecting":
    case "restarting":
      return RemoteSshConnectionState.CODEX_REMOTE_SSH_CONNECTION_STATE_CONNECTING;
    case "error":
      return RemoteSshConnectionState.CODEX_REMOTE_SSH_CONNECTION_STATE_ERROR;
    case "connected":
      return RemoteSshConnectionState.CODEX_REMOTE_SSH_CONNECTION_STATE_CONNECTED;
    case null:
      return RemoteSshConnectionState.CODEX_REMOTE_SSH_CONNECTION_STATE_UNSPECIFIED;
    default:
      return undefined;
  }
}

function getErrorCategory(
  error?: { code?: string | null } | null,
): string | undefined {
  switch (error?.code) {
    case "connection-failed":
    case "remote-codex-not-found":
      return RemoteSshConnectionErrorCategory.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_CONNECTION_FAILED;
    case "login-required":
      return RemoteSshConnectionErrorCategory.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_LOGIN_REQUIRED;
    case "update-required":
      return RemoteSshConnectionErrorCategory.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UPDATE_REQUIRED;
    case "restart-required":
      return RemoteSshConnectionErrorCategory.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_RESTART_REQUIRED;
    default:
      return undefined;
  }
}

export function logRemoteSshConnectionEvent(
  analytics: RemoteSshAnalyticsLogger | null | undefined,
  {
    connection,
    connectionState,
    connectionError,
    errorCategory,
    ...event
  }: RemoteSshConnectionEventPayload,
): void {
  if (analytics == null) return;
  const payload = {
    ...event,
    ...(connection == null
      ? {}
      : {
          connectionAnalyticsId: connection.connectionAnalyticsId ?? undefined,
          connectionSource: getConnectionSource(connection.source),
        }),
    connectionState: getConnectionState(connectionState),
    errorCategory: errorCategory ?? getErrorCategory(connectionError),
  };
  analytics.logProductEvent?.(REMOTE_SSH_CONNECTION_EVENT_DESCRIPTOR, payload);
}
