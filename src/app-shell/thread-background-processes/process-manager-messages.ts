// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Localized strings for the background chat-process manager popover (header, columns,
// row status, and row action menu). Shared by the popover shell and the table panel.
import { defineMessages } from "../../vendor/react-intl";

export const processManagerMessages = defineMessages({
  actionsColumn: {
    id: "codex.processManager.actionsColumn",
    defaultMessage: "Actions",
    description: "Actions column header in the process manager popover",
  },
  backgroundTerminalTabTitle: {
    id: "codex.processManager.backgroundTerminalTabTitle",
    defaultMessage: "Background terminal",
    description:
      "Title for a background terminal output tab opened from the process manager when the command text is unavailable",
  },
  close: {
    id: "codex.processManager.close",
    defaultMessage: "Close",
    description: "Accessible label for closing the process manager popover",
  },
  commandColumn: {
    id: "codex.processManager.commandColumn",
    defaultMessage: "Command",
    description: "Command column header in the process manager popover",
  },
  chatColumn: {
    id: "codex.processManager.chatColumn",
    defaultMessage: "Chat",
    description: "Chat column header in the process manager popover",
  },
  cpuColumn: {
    id: "codex.processManager.cpuColumn",
    defaultMessage: "CPU",
    description: "CPU column header in the process manager popover",
  },
  description: {
    id: "codex.processManager.description",
    defaultMessage: "Processes started by Codex chats",
    description: "Accessible description for the process manager popover",
  },
  memoryColumn: {
    id: "codex.processManager.memoryColumn",
    defaultMessage: "Memory",
    description: "Memory column header in the process manager popover",
  },
  pidColumn: {
    id: "codex.processManager.pidColumn",
    defaultMessage: "PID",
    description: "Process id column header in the process manager popover",
  },
  runtimeColumn: {
    id: "codex.processManager.runtimeColumn",
    defaultMessage: "Runtime",
    description: "Runtime column header in the process manager popover",
  },
  openOutput: {
    id: "codex.processManager.openOutput",
    defaultMessage: "Open output",
    description:
      "Menu item label to open the output associated with a process manager row",
  },
  start: {
    id: "codex.processManager.start",
    defaultMessage: "Start",
    description: "Menu item label to start a stopped chat-started process",
  },
  restart: {
    id: "codex.processManager.restart",
    defaultMessage: "Restart",
    description: "Menu item label to restart a chat-started process",
  },
  resizeColumn: {
    id: "codex.processManager.resizeColumn",
    defaultMessage: "Resize {column} column",
    description:
      "Accessible label for a process manager table column resize handle",
  },
  restartMissingProcessTooltip: {
    id: "codex.processManager.restartMissingProcessTooltip",
    defaultMessage: "Restart needs a live process id",
    description:
      "Tooltip explaining that a process cannot restart because it has no live process id",
  },
  restartMissingWorkspaceTooltip: {
    id: "codex.processManager.restartMissingWorkspaceTooltip",
    defaultMessage: "Needs the original workspace path",
    description:
      "Tooltip explaining that a process cannot be started without a workspace path",
  },
  restartStartingTooltip: {
    id: "codex.processManager.restartStartingTooltip",
    defaultMessage: "Process is starting",
    description:
      "Tooltip explaining that a process restart is already in progress",
  },
  restartStoppingTooltip: {
    id: "codex.processManager.restartStoppingTooltip",
    defaultMessage: "Process is stopping",
    description:
      "Tooltip explaining that a process restart is waiting on a stop operation",
  },
  rowActions: {
    id: "codex.processManager.rowActions",
    defaultMessage: "Process actions",
    description: "Aria label for a process manager row actions menu",
  },
  runningStatus: {
    id: "codex.processManager.runningStatus",
    defaultMessage: "Running",
    description: "Status for a running process in the process manager",
  },
  stop: {
    id: "codex.processManager.stop",
    defaultMessage: "Stop",
    description: "Menu item label to stop a chat-started process",
  },
  stoppedStatus: {
    id: "codex.processManager.stoppedStatus",
    defaultMessage: "Stopped",
    description: "Status for a stopped process in the process manager",
  },
  startingStatus: {
    id: "codex.processManager.startingStatus",
    defaultMessage: "Starting…",
    description:
      "Status shown while restarting a process in the process manager",
  },
  stoppingStatus: {
    id: "codex.processManager.stoppingStatus",
    defaultMessage: "Stopping…",
    description: "Status shown while stopping a process in the process manager",
  },
  title: {
    id: "codex.processManager.title",
    defaultMessage: "Process Manager",
    description: "Title for the process manager popover",
  },
});
