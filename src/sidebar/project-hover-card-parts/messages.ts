// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Also covers ref/webview/assets/app-initial~app-main~projects-index-page~remote-connections-settings~local-conversation-pag~goqedmh7-DWWP2MF3.js
// Message descriptors used by project hover card status, actions, and remote connection labels.
import { defineMessages } from "../../runtime/project-hover-card-runtime";
import type { MessageDescriptor, RemoteConnectionState } from "./types";

type RemoteConnectionMessageKey =
  | "connected"
  | "connecting"
  | "disconnected"
  | "error"
  | "goToSettings"
  | "installCodex"
  | "installingCodex"
  | "login"
  | "login-required"
  | "remote-codex-not-found"
  | "restart-required"
  | "restartNow"
  | "restartNowTooltip"
  | "restarting"
  | "update-required"
  | "updateCodex"
  | "updateWslCodexMessage"
  | "updatingCodex";

type ProjectHoverCardMessageKey =
  | "activeCount"
  | "chatCount"
  | "pinProject"
  | "renameError"
  | "statusSeparator"
  | "unpinProject"
  | "unreadCount"
  | "waitingCount";

const remoteConnectionMessages = defineMessages({
  connecting: {
    id: "threadPage.remoteConnectionStatusBadge.connecting",
    defaultMessage: "Connecting",
    description: "Label shown when remote connection is in progress",
  },
  restarting: {
    id: "threadPage.remoteConnectionStatusBadge.restarting",
    defaultMessage: "Restarting",
    description:
      "Label shown when a remote connection is restarting after a user action",
  },
  "login-required": {
    id: "threadPage.remoteConnectionStatusBadge.unauthed",
    defaultMessage: "Login required",
    description: "Label shown when remote connection needs authentication",
  },
  "remote-codex-not-found": {
    id: "threadPage.remoteConnectionStatusBadge.remoteCodexNotFound",
    defaultMessage: "Codex not installed",
    description:
      "Label shown when the Codex CLI is missing from an SSH remote connection",
  },
  "update-required": {
    id: "threadPage.remoteConnectionStatusBadge.updateRequired",
    defaultMessage: "Update required",
    description:
      "Label shown when remote connection needs a newer Codex version",
  },
  "restart-required": {
    id: "threadPage.remoteConnectionStatusBadge.restartRequired",
    defaultMessage: "Restart required",
    description:
      "Label shown when remote connection needs a restart to use a newer Codex version",
  },
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
    defaultMessage: "Installing\u2026",
    description:
      "Action label shown while Codex is being installed on an SSH remote connection",
  },
  updateCodex: {
    id: "threadPage.remoteConnectionStatusBadge.updateCodex",
    defaultMessage: "Update Codex",
    description:
      "Action label shown when an SSH remote connection needs a newer Codex version",
  },
  updateWslCodexMessage: {
    id: "threadPage.remoteConnectionStatusBadge.updateWslCodexMessage",
    defaultMessage:
      "Codex in WSL is out of date. Open your WSL distro and update Codex to {minRequiredVersion} or newer. Current version: {currentVersion}",
    description:
      "Tooltip message shown when a WSL connection needs a newer Codex version",
  },
  updatingCodex: {
    id: "threadPage.remoteConnectionStatusBadge.updatingCodex",
    defaultMessage: "Updating\u2026",
    description:
      "Action label shown while Codex is being updated on an SSH remote connection",
  },
  goToSettings: {
    id: "threadPage.remoteConnectionStatusBadge.goToSettings",
    defaultMessage: "See Settings to connect",
    description: "Label shown for a remote connection settings action",
  },
  connected: {
    id: "threadPage.remoteConnectionStatusBadge.connected",
    defaultMessage: "Connected",
    description: "Label shown when remote connection is established",
  },
  disconnected: {
    id: "threadPage.remoteConnectionStatusBadge.disconnected",
    defaultMessage: "Disconnected",
    description: "Label shown when remote connection is unavailable",
  },
  error: {
    id: "threadPage.remoteConnectionStatusBadge.error",
    defaultMessage: "Error",
    description: "Label shown when remote connection is in error",
  },
}) as Record<string, MessageDescriptor>;

const remoteConnectionStateMessages: Record<
  Exclude<RemoteConnectionState, "error"> | "error",
  MessageDescriptor
> = {
  connecting: remoteConnectionMessages.connecting,
  restarting: remoteConnectionMessages.restarting,
  connected: remoteConnectionMessages.connected,
  disconnected: remoteConnectionMessages.disconnected,
  error: remoteConnectionMessages.error,
};

const projectHoverCardMessages = defineMessages({
  activeCount: {
    id: "sidebarElectron.projectHoverCard.activeCount",
    defaultMessage: "{count}\u00a0active",
    description: "Inline active chat count in the project hover card summary",
  },
  chatCount: {
    id: "sidebarElectron.projectHoverCard.chatCount",
    defaultMessage: "{count, plural, one {#\u00a0chat} other {#\u00a0chats}}",
    description: "Inline chat count in the project hover card summary",
  },
  renameError: {
    id: "sidebarElectron.projectHoverCard.renameError",
    defaultMessage: "Failed to rename project",
    description:
      "Toast shown when renaming a project from the hover card fails",
  },
  pinProject: {
    id: "sidebarElectron.projectHoverCard.pinProject",
    defaultMessage: "Pin project",
    description:
      "Accessible label for pinning a project from the project hover card",
  },
  statusSeparator: {
    id: "sidebarElectron.projectHoverCard.statusSeparator",
    defaultMessage: "\u00b7",
    description:
      "Middle dot separator between inline project hover card status labels",
  },
  unpinProject: {
    id: "sidebarElectron.projectHoverCard.unpinProject",
    defaultMessage: "Unpin project",
    description:
      "Accessible label for unpinning a project from the project hover card",
  },
  unreadCount: {
    id: "sidebarElectron.projectHoverCard.unreadCount",
    defaultMessage: "{count}\u00a0unread",
    description: "Inline unread chat count in the project hover card summary",
  },
  waitingCount: {
    id: "sidebarElectron.projectHoverCard.waitingCount",
    defaultMessage: "{count}\u00a0waiting",
    description: "Inline waiting chat count in the project hover card summary",
  },
}) as Record<string, MessageDescriptor>;

export function getRemoteConnectionMessage(
  key: RemoteConnectionMessageKey,
): MessageDescriptor {
  return remoteConnectionMessages[key];
}

export function getRemoteConnectionStateMessage(
  state: Exclude<RemoteConnectionState, "error"> | "error",
): MessageDescriptor {
  return remoteConnectionStateMessages[state];
}

export function getProjectHoverCardMessage(
  key: ProjectHoverCardMessageKey,
): MessageDescriptor {
  return projectHoverCardMessages[key];
}
