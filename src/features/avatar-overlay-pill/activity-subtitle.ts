// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Activity subtitle extraction for avatar overlay pill notifications.
import {
  markdownToSearchText,
  parseHeartbeatMessage,
} from "../../boundaries/use-host-config.facade";
import { activityMessages } from "./activity-messages";
import type { IntlShapeLike } from "./types";

export function getLatestAvatarOverlayActivitySubtitle(
  items: any[],
  intl: IntlShapeLike,
): string | null {
  for (let index = items.length - 1; index >= 0; --index) {
    const item = items[index];
    if (item?.type === "reasoning") {
      for (
        let summaryIndex = item.summary.length - 1;
        summaryIndex >= 0;
        --summaryIndex
      ) {
        const summary = normalizeActivityText(item.summary[summaryIndex]);
        if (summary != null) return summary;
      }
    }

    if (item?.type === "agentMessage") {
      const heartbeat = parseHeartbeatMessage(item.text);
      const summary =
        heartbeat?.decision === "DONT_NOTIFY"
          ? null
          : normalizeActivityText(
              heartbeat?.notificationMessage ??
                heartbeat?.visibleText ??
                item.text,
            );
      if (summary != null) return summary;
    }
  }

  for (let index = items.length - 1; index >= 0; --index) {
    const summary = formatActivityItemSummary(items[index], intl);
    if (summary != null) return summary;
  }

  return null;
}

export function getAutomationConversationSubtitle(items: any[]): string | null {
  for (let index = items.length - 1; index >= 0; --index) {
    const item = items[index];
    if (item?.type !== "agentMessage") continue;

    const heartbeat = parseHeartbeatMessage(item.text);
    if (heartbeat != null) {
      return heartbeat.decision === "DONT_NOTIFY"
        ? null
        : normalizeActivityText(
            heartbeat.notificationMessage ?? heartbeat.visibleText,
          );
    }

    if (item.phase !== "commentary") {
      const summary = normalizeActivityText(item.text);
      if (summary != null) return summary;
    }
  }

  return null;
}

function formatActivityItemSummary(
  item: any,
  intl: IntlShapeLike,
): string | null {
  if (item == null) return null;

  if (item.type === "commandExecution") {
    const lastAction = item.commandActions.at(-1);
    const isRunning = item.status === "inProgress";
    if (lastAction == null) {
      return isRunning
        ? intl.formatMessage(activityMessages.runningCommand)
        : intl.formatMessage(activityMessages.ranCommand);
    }

    switch (lastAction.type) {
      case "read":
        return isRunning
          ? intl.formatMessage(activityMessages.readingFile, {
              fileName: lastAction.name,
            })
          : intl.formatMessage(activityMessages.readFile, {
              fileName: lastAction.name,
            });
      case "listFiles":
        return isRunning
          ? intl.formatMessage(activityMessages.listingFiles)
          : intl.formatMessage(activityMessages.listedFiles);
      case "search": {
        const query = normalizeActivityText(lastAction.query ?? "");
        return query == null
          ? isRunning
            ? intl.formatMessage(activityMessages.searchingFiles)
            : intl.formatMessage(activityMessages.searchedFiles)
          : isRunning
            ? intl.formatMessage(activityMessages.searchingQuery, { query })
            : intl.formatMessage(activityMessages.searchedQuery, { query });
      }
      case "unknown":
        return isRunning
          ? intl.formatMessage(activityMessages.runningCommand)
          : intl.formatMessage(activityMessages.ranCommand);
    }
  }

  if (item.type === "fileChange") {
    const fileCount = item.changes.length;
    return item.status === "inProgress"
      ? intl.formatMessage(activityMessages.editingFiles, { fileCount })
      : intl.formatMessage(activityMessages.editedFiles, { fileCount });
  }

  if (item.type === "mcpToolCall") {
    const isRunning = item.status === "inProgress";
    const toolName = normalizeActivityText(item.tool.replace(/[_-]+/g, " "));
    return toolName == null
      ? isRunning
        ? intl.formatMessage(activityMessages.callingTool)
        : intl.formatMessage(activityMessages.calledTool)
      : isRunning
        ? intl.formatMessage(activityMessages.callingToolName, { toolName })
        : intl.formatMessage(activityMessages.calledToolName, { toolName });
  }

  if (item.type === "webSearch") {
    const query = normalizeActivityText(item.query);
    return query == null
      ? intl.formatMessage(activityMessages.searchedWeb)
      : intl.formatMessage(activityMessages.searchedQuery, { query });
  }

  return null;
}

function normalizeActivityText(
  value: string | null | undefined,
): string | null {
  const normalizedText = String(markdownToSearchText(value ?? "") ?? "")
    .replace(/^\s{0,3}#{1,6}\s+/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return normalizedText.length > 0 ? normalizedText : null;
}
