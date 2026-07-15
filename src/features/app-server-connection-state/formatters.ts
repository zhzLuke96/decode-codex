// Restored from ref/webview/assets/app-server-connection-state-DiMba98f.js
// app-server-connection-state-DiMba98f chunk restored from the Codex webview bundle.
import { appServerConnectionActionMessages } from "./action-messages";
import { appServerConnectionStateMessages } from "./state-messages";
import type {
  AppServerConnectionError,
  AppServerConnectionStateName,
  AppServerConnectionStatusCopy,
  IntlLike,
  ResolveAppServerConnectionStatusInput,
} from "./types";
const defaultStateMessages: Record<AppServerConnectionStateName, unknown> = {
  connecting: appServerConnectionStateMessages.connecting,
  restarting: appServerConnectionStateMessages.restarting,
  connected: appServerConnectionStateMessages.connected,
  disconnected: appServerConnectionStateMessages.disconnected,
  error: appServerConnectionStateMessages.error,
};
export function resolveAppServerConnectionStatus(
  intl: IntlLike,
  { canLogin, error, state, surface }: ResolveAppServerConnectionStatusInput,
): AppServerConnectionStatusCopy {
  const label = intl.formatMessage(getStatusMessage(state, error));
  if (state === "error" && error != null) {
    const message = formatAppServerConnectionError(intl, error);
    switch (error.code) {
      case "login-required":
        if (canLogin) {
          return {
            action: {
              kind: "login",
              label: intl.formatMessage(
                appServerConnectionActionMessages.login,
              ),
            },
            label,
            message,
          };
        }
        if (surface === "connection-status-badge") {
          const settingsLabel = intl.formatMessage(
            appServerConnectionActionMessages.goToSettings,
          );
          return {
            action: {
              kind: "settings",
              label: settingsLabel,
            },
            label,
            message: `${message} ${settingsLabel}`,
          };
        }
        return {
          action: null,
          label,
          message,
        };
      case "remote-codex-not-found":
        return {
          action: {
            kind: "install-codex",
            label: intl.formatMessage(
              appServerConnectionActionMessages.installCodex,
            ),
            loadingLabel: intl.formatMessage(
              appServerConnectionActionMessages.installingCodex,
            ),
          },
          label,
          message,
        };
      case "restart-required":
        return {
          action: {
            kind: "restart",
            label: intl.formatMessage(
              appServerConnectionActionMessages.restartNow,
            ),
            tooltipText: intl.formatMessage(
              appServerConnectionActionMessages.restartNowTooltip,
            ),
          },
          label,
          message,
        };
      case "update-required":
        return surface === "connections-row"
          ? {
              action: {
                kind: "install-codex",
                label: intl.formatMessage(
                  appServerConnectionActionMessages.updateCodex,
                ),
                loadingLabel: intl.formatMessage(
                  appServerConnectionActionMessages.updatingCodex,
                ),
                tooltipText: intl.formatMessage(
                  appServerConnectionActionMessages.restartNowTooltip,
                ),
              },
              label,
              message,
            }
          : {
              action: {
                kind: "settings",
                label: intl.formatMessage(
                  appServerConnectionActionMessages.goToSettings,
                ),
              },
              label,
              message,
            };
      case "connection-failed":
        return {
          action: null,
          label,
          message,
        };
    }
  }
  return {
    action: null,
    label,
    message: label,
  };
}
export function formatAppServerConnectionError(
  intl: IntlLike,
  error: AppServerConnectionError,
): string | undefined {
  switch (error.code) {
    case "remote-codex-not-found":
      return intl.formatMessage({
        id: "appServer.error.remoteCodexNotFound",
        defaultMessage: "Codex is not installed on this remote machine",
        description:
          "Error shown when an SSH remote connection is reachable but the Codex CLI is missing",
      });
    case "login-required":
      return intl.formatMessage({
        id: "appServer.error.loginRequired",
        defaultMessage: "You are currently logged out.",
        description:
          "Error shown when a remote app-server connection requires the user to authenticate",
      });
    case "restart-required":
      return error.currentVersion == null || error.installedVersion == null
        ? intl.formatMessage({
            id: "appServer.error.genericRestartRequired",
            defaultMessage:
              "Something went wrong connecting to Codex. Try restarting",
            description:
              "Generic error shown when an app-server connection requires restarting but exact version details are unavailable",
          })
        : intl.formatMessage(
            {
              id: "appServer.error.restartAvailable",
              defaultMessage:
                "Restart now to update to {installedVersion}. Currently running {currentVersion}",
              description:
                "Error shown when a remote Codex update has been installed and the remote app-server needs a restart",
            },
            {
              currentVersion: error.currentVersion,
              installedVersion: error.installedVersion,
            },
          );
    case "update-required":
      return intl.formatMessage(
        {
          id: "appServer.error.unsupportedVersion",
          defaultMessage:
            "Codex on this environment is out of date. Update to {minVersion} or newer. Current version: {currentVersion}",
          description:
            "Error shown when an app-server connection is rejected because the remote Codex version is too old",
        },
        {
          minVersion: error.minRequiredVersion,
          currentVersion: error.currentVersion,
        },
      );
    case "connection-failed":
      return error.message;
  }
}
function getStatusMessage(
  state: AppServerConnectionStateName,
  error: AppServerConnectionError | null | undefined,
): unknown {
  if (state === "error" && error != null) {
    switch (error.code) {
      case "login-required":
        return appServerConnectionStateMessages["login-required"];
      case "remote-codex-not-found":
        return appServerConnectionStateMessages["remote-codex-not-found"];
      case "update-required":
        return appServerConnectionStateMessages["update-required"];
      case "restart-required":
        return appServerConnectionStateMessages["restart-required"];
      case "connection-failed":
        return appServerConnectionStateMessages.error;
    }
  }
  return defaultStateMessages[state];
}
