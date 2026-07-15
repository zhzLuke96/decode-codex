// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Also covers ref/webview/assets/app-initial~app-main~projects-index-page~remote-connections-settings~local-conversation-pag~goqedmh7-DWWP2MF3.js
// Remote app-server connection status text and action model helpers.
import { once } from "../../runtime/commonjs-interop";
import {
  initIntlMessageRuntime,
  initReactIntlRuntime,
} from "../../runtime/project-hover-card-runtime";
import {
  getRemoteConnectionMessage,
  getRemoteConnectionStateMessage,
} from "./messages";
import type {
  IntlShape,
  MessageDescriptor,
  RemoteConnectionError,
  RemoteConnectionState,
  RemoteConnectionStatusModel,
  RemoteConnectionStatusSurface,
} from "./types";

export function formatAppServerConnectionErrorMessage(
  intl: IntlShape,
  error: RemoteConnectionError,
) {
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

export const initRemoteConnectionStatusModelChunk = once(() => {});

export function getRemoteConnectionStatusBadgeModel(
  intl: IntlShape,
  {
    canLogin,
    error,
    hostKind,
    state,
    surface,
  }: {
    canLogin: boolean;
    error?: RemoteConnectionError | null;
    hostKind?: string;
    state: RemoteConnectionState;
    surface: RemoteConnectionStatusSurface;
  },
): RemoteConnectionStatusModel {
  const label = intl.formatMessage(
    getRemoteConnectionStatusDescriptor(state, error),
  );

  if (state === "error" && error != null) {
    const message = formatAppServerConnectionErrorMessage(intl, error);
    switch (error.code) {
      case "login-required":
        return getLoginRequiredStatus({
          canLogin,
          intl,
          label,
          message,
          surface,
        });
      case "remote-codex-not-found":
        return {
          action: {
            kind: "install-codex",
            label: intl.formatMessage(
              getRemoteConnectionMessage("installCodex"),
            ),
            loadingLabel: intl.formatMessage(
              getRemoteConnectionMessage("installingCodex"),
            ),
          },
          label,
          message,
        };
      case "restart-required":
        return {
          action: {
            kind: "restart",
            label: intl.formatMessage(getRemoteConnectionMessage("restartNow")),
            tooltipText: intl.formatMessage(
              getRemoteConnectionMessage("restartNowTooltip"),
            ),
          },
          label,
          message,
        };
      case "update-required":
        return getUpdateRequiredStatus({
          error,
          hostKind,
          intl,
          label,
          message,
          surface,
        });
      case "connection-failed":
        return { action: null, label, message };
    }
  }

  return { action: null, label, message: label };
}

function getLoginRequiredStatus({
  canLogin,
  intl,
  label,
  message,
  surface,
}: {
  canLogin: boolean;
  intl: IntlShape;
  label: string;
  message: string;
  surface: RemoteConnectionStatusSurface;
}): RemoteConnectionStatusModel {
  if (canLogin) {
    return {
      action: {
        kind: "login",
        label: intl.formatMessage(getRemoteConnectionMessage("login")),
      },
      label,
      message,
    };
  }
  if (surface === "connection-status-badge") {
    const settingsLabel = intl.formatMessage(
      getRemoteConnectionMessage("goToSettings"),
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
  return { action: null, label, message };
}

function getUpdateRequiredStatus({
  error,
  hostKind,
  intl,
  label,
  message,
  surface,
}: {
  error: Extract<RemoteConnectionError, { code: "update-required" }>;
  hostKind?: string;
  intl: IntlShape;
  label: string;
  message: string;
  surface: RemoteConnectionStatusSurface;
}): RemoteConnectionStatusModel {
  if (hostKind === "wsl") {
    return {
      action: null,
      label,
      message: intl.formatMessage(
        getRemoteConnectionMessage("updateWslCodexMessage"),
        {
          currentVersion: error.currentVersion,
          minRequiredVersion: error.minRequiredVersion,
        },
      ),
    };
  }
  if (surface === "connections-row") {
    return {
      action: {
        kind: "install-codex",
        label: intl.formatMessage(getRemoteConnectionMessage("updateCodex")),
        loadingLabel: intl.formatMessage(
          getRemoteConnectionMessage("updatingCodex"),
        ),
        tooltipText: intl.formatMessage(
          getRemoteConnectionMessage("restartNowTooltip"),
        ),
      },
      label,
      message,
    };
  }
  return {
    action: {
      kind: "settings",
      label: intl.formatMessage(getRemoteConnectionMessage("goToSettings")),
    },
    label,
    message,
  };
}

function getRemoteConnectionStatusDescriptor(
  state: RemoteConnectionState,
  error?: RemoteConnectionError | null,
): MessageDescriptor {
  if (state === "error" && error != null) {
    switch (error.code) {
      case "login-required":
        return getRemoteConnectionMessage("login-required");
      case "remote-codex-not-found":
        return getRemoteConnectionMessage("remote-codex-not-found");
      case "update-required":
        return getRemoteConnectionMessage("update-required");
      case "restart-required":
        return getRemoteConnectionMessage("restart-required");
      case "connection-failed":
        return getRemoteConnectionMessage("error");
    }
  }

  return getRemoteConnectionStateMessage(state);
}

export const initRemoteConnectionStatusMessagesChunk = once(() => {
  initIntlMessageRuntime();
  initReactIntlRuntime();
  initRemoteConnectionStatusModelChunk();
});
