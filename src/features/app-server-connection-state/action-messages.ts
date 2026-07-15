// Restored from ref/webview/assets/app-server-connection-state-DiMba98f.js
// app-server-connection-state-DiMba98f chunk restored from the Codex webview bundle.
import { defineMessages } from "../../vendor/react-intl";
export const appServerConnectionActionMessages = defineMessages({
  restartNow: {
    id: "threadPage.remoteConnectionStatusBadge.restartNow",
    defaultMessage: "Restart now",
    description:
      "Action label shown when remote Codex has a newer installed version and can be restarted",
  },
  restartNowTooltip: {
    id: "threadPage.remoteConnectionStatusBadge.restartNowTooltip",
    defaultMessage:
      "Restarting will kill the currently running Codex process and stop any ongoing chats on this remote host",
    description: "Tooltip warning for a remote Codex restart action",
  },
  login: {
    id: "threadPage.remoteConnectionStatusBadge.login",
    defaultMessage: "Log in to Codex",
    description: "Action label shown when a remote connection needs login",
  },
  installCodex: {
    id: "threadPage.remoteConnectionStatusBadge.installCodex",
    defaultMessage: "Install Codex",
    description:
      "Action label shown when the Codex CLI is missing from an SSH remote connection",
  },
  installingCodex: {
    id: "threadPage.remoteConnectionStatusBadge.installingCodex",
    defaultMessage: "Installing…",
    description:
      "Action label shown while Codex is being installed on an SSH remote connection",
  },
  updateCodex: {
    id: "threadPage.remoteConnectionStatusBadge.updateCodex",
    defaultMessage: "Update Codex",
    description:
      "Action label shown when an SSH remote connection needs a newer Codex version",
  },
  updatingCodex: {
    id: "threadPage.remoteConnectionStatusBadge.updatingCodex",
    defaultMessage: "Updating…",
    description:
      "Action label shown while Codex is being updated on an SSH remote connection",
  },
  goToSettings: {
    id: "threadPage.remoteConnectionStatusBadge.goToSettings",
    defaultMessage: "See Settings to connect",
    description: "Label shown for a remote connection settings action",
  },
});
