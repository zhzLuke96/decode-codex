// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
import {
  getLatestTurn,
  getLatestWaitingRequest,
  getThreadTitle,
  getThreadTurnCount,
  getThreadTurns,
  hasWaitingApprovalRequest,
  isSubAgentThread,
  markdownToSearchText,
  parseHeartbeatMessage,
} from "../../boundaries/use-host-config.facade";
import { defineMessages } from "../../vendor/react-intl";
import { buildCompactWaitingRequest } from "./waiting-request";
import type {
  AvatarOverlayActivityItem,
  AvatarOverlayActivityStatus,
  IntlShapeLike,
} from "./types";
const sessionActivityMessages = defineMessages({
  calledTool: {
    id: "avatarOverlay.session.calledTool",
    defaultMessage: "Called tool",
    description:
      "Avatar overlay activity subtitle for a completed generic tool call",
  },
  calledToolName: {
    id: "avatarOverlay.session.calledToolName",
    defaultMessage: "Called {toolName}",
    description:
      "Avatar overlay activity subtitle for a completed named tool call",
  },
  callingTool: {
    id: "avatarOverlay.session.callingTool",
    defaultMessage: "Calling tool",
    description:
      "Avatar overlay activity subtitle for a running generic tool call",
  },
  callingToolName: {
    id: "avatarOverlay.session.callingToolName",
    defaultMessage: "Calling {toolName}",
    description:
      "Avatar overlay activity subtitle for a running named tool call",
  },
  editedFiles: {
    id: "avatarOverlay.session.editedFiles",
    defaultMessage: "Edited {fileCount, plural, one {# file} other {# files}}",
    description: "Avatar overlay activity subtitle for completed file edits",
  },
  editingFiles: {
    id: "avatarOverlay.session.editingFiles",
    defaultMessage: "Editing {fileCount, plural, one {# file} other {# files}}",
    description: "Avatar overlay activity subtitle for running file edits",
  },
  listedFiles: {
    id: "avatarOverlay.session.listedFiles",
    defaultMessage: "Listed files",
    description:
      "Avatar overlay activity subtitle for a completed file listing command",
  },
  listingFiles: {
    id: "avatarOverlay.session.listingFiles",
    defaultMessage: "Listing files",
    description:
      "Avatar overlay activity subtitle for a running file listing command",
  },
  newThread: {
    id: "avatarOverlay.session.newThread",
    defaultMessage: "New chat",
    description:
      "Avatar overlay fallback title for a thread without a generated title",
  },
  ranCommand: {
    id: "avatarOverlay.session.ranCommand",
    defaultMessage: "Ran command",
    description:
      "Avatar overlay activity subtitle for a completed shell command",
  },
  readFile: {
    id: "avatarOverlay.session.readFile",
    defaultMessage: "Read {fileName}",
    description: "Avatar overlay activity subtitle for a completed file read",
  },
  readingFile: {
    id: "avatarOverlay.session.readingFile",
    defaultMessage: "Reading {fileName}",
    description: "Avatar overlay activity subtitle for a running file read",
  },
  runningCommand: {
    id: "avatarOverlay.session.runningCommand",
    defaultMessage: "Running command",
    description: "Avatar overlay activity subtitle for a running shell command",
  },
  searchedFiles: {
    id: "avatarOverlay.session.searchedFiles",
    defaultMessage: "Searched files",
    description:
      "Avatar overlay activity subtitle for a completed file search command without a query",
  },
  searchedQuery: {
    id: "avatarOverlay.session.searchedQuery",
    defaultMessage: 'Searched "{query}"',
    description:
      "Avatar overlay activity subtitle for a completed search with a query",
  },
  searchedWeb: {
    id: "avatarOverlay.session.searchedWeb",
    defaultMessage: "Searched web",
    description: "Avatar overlay activity subtitle for a completed web search",
  },
  searchingFiles: {
    id: "avatarOverlay.session.searchingFiles",
    defaultMessage: "Searching files",
    description:
      "Avatar overlay activity subtitle for a running file search command without a query",
  },
  searchingQuery: {
    id: "avatarOverlay.session.searchingQuery",
    defaultMessage: 'Searching "{query}"',
    description:
      "Avatar overlay activity subtitle for a running search with a query",
  },
});
export type BuildAvatarOverlayActivityItemsOptions = {
  includeCompactWaitingRequests: boolean;
  includeMcpElicitationCancelAction?: boolean;
  intl: IntlShapeLike;
  localConversations: any[];
  realtimeConversationId?: string | null;
  remoteTasks: any[];
};
export function buildAvatarOverlayActivityItems({
  includeCompactWaitingRequests,
  includeMcpElicitationCancelAction = false,
  intl,
  localConversations,
  realtimeConversationId,
  remoteTasks,
}: BuildAvatarOverlayActivityItemsOptions): AvatarOverlayActivityItem[] {
  const items: AvatarOverlayActivityItem[] = [];
  const seenKeys = new Set<string>();
  for (const conversation of localConversations) {
    const item = buildLocalConversationActivityItem({
      conversation,
      includeCompactWaitingRequests,
      includeMcpElicitationCancelAction,
      intl,
      realtimeConversationId,
    });
    if (item == null || seenKeys.has(item.key)) continue;
    seenKeys.add(item.key);
    items.push(item);
  }
  for (const task of remoteTasks) {
    const item = buildCloudTaskActivityItem(task, intl);
    if (seenKeys.has(item.key)) continue;
    seenKeys.add(item.key);
    items.push(item);
  }
  return items;
}
function buildLocalConversationActivityItem({
  conversation,
  includeCompactWaitingRequests,
  includeMcpElicitationCancelAction,
  intl,
  realtimeConversationId,
}: {
  conversation: any;
  includeCompactWaitingRequests: boolean;
  includeMcpElicitationCancelAction: boolean;
  intl: IntlShapeLike;
  realtimeConversationId?: string | null;
}): AvatarOverlayActivityItem | null {
  if (isSubAgentThread(conversation)) return null;
  const hostId = conversation.hostId ?? "local";
  const source = hostId === "local" ? "local" : "remote-host";
  const status = getLocalConversationActivityStatus(conversation);
  if (
    (conversation.threadSource === "realtime_voice" ||
      conversation.id === realtimeConversationId) &&
    status !== "waiting" &&
    status !== "failed"
  ) {
    return null;
  }
  const waitingRequest =
    includeCompactWaitingRequests && status === "waiting"
      ? getLatestWaitingRequest(conversation)
      : null;
  return {
    actionPath: "/local/" + conversation.id,
    controlTarget: {
      type: "app-server-conversation",
      conversationId: conversation.id,
    },
    hostId,
    key: source + ":" + hostId + ":" + conversation.id,
    localConversationId: conversation.id,
    source,
    sortAtMs:
      getLatestTurn(conversation)?.turnStartedAtMs ?? conversation.updatedAt,
    status,
    subtitle: getConversationSubtitle(conversation, intl),
    title:
      getThreadTitle(conversation) ??
      intl.formatMessage(sessionActivityMessages.newThread),
    turnKey: String(getThreadTurnCount(conversation)),
    updatedAtMs: conversation.updatedAt,
    waitingRequest: buildCompactWaitingRequest(waitingRequest, intl, {
      includeMcpElicitationCancelAction,
      planStartCollaborationMode: {
        mode: "default",
        settings: {
          ...conversation.latestCollaborationMode.settings,
          developer_instructions: null,
        },
      },
    }),
  };
}
function buildCloudTaskActivityItem(
  task: any,
  intl: IntlShapeLike,
): AvatarOverlayActivityItem {
  const updatedAtMs = (task.updated_at ?? task.created_at ?? 0) * 1000;
  const turnId =
    task.task_status_display?.latest_turn_status_display?.turn_id ?? null;
  return {
    actionPath: "/remote/" + task.id,
    controlTarget:
      turnId == null
        ? null
        : {
            type: "cloud-task",
            taskId: task.id,
            turnId,
          },
    hostId: null,
    key: "cloud:" + task.id,
    localConversationId: null,
    source: "cloud",
    sortAtMs: updatedAtMs,
    status: getCloudTaskActivityStatus(task),
    subtitle: null,
    title:
      task.title?.trim() ||
      intl.formatMessage(sessionActivityMessages.newThread),
    turnKey: turnId,
    updatedAtMs,
    waitingRequest: null,
  };
}
function getConversationSubtitle(
  conversation: any,
  intl: IntlShapeLike,
): string | null {
  return getLatestAvatarOverlayActivitySubtitle(
    getLatestTurn(conversation)?.items ?? [],
    intl,
  );
}
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
        ? intl.formatMessage(sessionActivityMessages.runningCommand)
        : intl.formatMessage(sessionActivityMessages.ranCommand);
    }
    switch (lastAction.type) {
      case "read":
        return isRunning
          ? intl.formatMessage(sessionActivityMessages.readingFile, {
              fileName: lastAction.name,
            })
          : intl.formatMessage(sessionActivityMessages.readFile, {
              fileName: lastAction.name,
            });
      case "listFiles":
        return isRunning
          ? intl.formatMessage(sessionActivityMessages.listingFiles)
          : intl.formatMessage(sessionActivityMessages.listedFiles);
      case "search": {
        const query = normalizeActivityText(lastAction.query ?? "");
        return query == null
          ? isRunning
            ? intl.formatMessage(sessionActivityMessages.searchingFiles)
            : intl.formatMessage(sessionActivityMessages.searchedFiles)
          : isRunning
            ? intl.formatMessage(sessionActivityMessages.searchingQuery, {
                query,
              })
            : intl.formatMessage(sessionActivityMessages.searchedQuery, {
                query,
              });
      }
      case "unknown":
        return isRunning
          ? intl.formatMessage(sessionActivityMessages.runningCommand)
          : intl.formatMessage(sessionActivityMessages.ranCommand);
    }
  }
  if (item.type === "fileChange") {
    const fileCount = item.changes.length;
    return item.status === "inProgress"
      ? intl.formatMessage(sessionActivityMessages.editingFiles, {
          fileCount,
        })
      : intl.formatMessage(sessionActivityMessages.editedFiles, {
          fileCount,
        });
  }
  if (item.type === "mcpToolCall") {
    const isRunning = item.status === "inProgress";
    const toolName = normalizeActivityText(item.tool.replace(/[_-]+/g, " "));
    return toolName == null
      ? isRunning
        ? intl.formatMessage(sessionActivityMessages.callingTool)
        : intl.formatMessage(sessionActivityMessages.calledTool)
      : isRunning
        ? intl.formatMessage(sessionActivityMessages.callingToolName, {
            toolName,
          })
        : intl.formatMessage(sessionActivityMessages.calledToolName, {
            toolName,
          });
  }
  if (item.type === "webSearch") {
    const query = normalizeActivityText(item.query);
    return query == null
      ? intl.formatMessage(sessionActivityMessages.searchedWeb)
      : intl.formatMessage(sessionActivityMessages.searchedQuery, {
          query,
        });
  }
  return null;
}
function normalizeActivityText(value: string): string | null {
  const normalizedText = String(markdownToSearchText(value) ?? "")
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
function getLocalConversationActivityStatus(
  conversation: any,
): AvatarOverlayActivityStatus {
  const resumedRuntimeStatus =
    conversation.resumeState === "needs_resume"
      ? conversation.threadRuntimeStatus
      : null;
  const isRunning =
    conversation.resumeState === "needs_resume"
      ? resumedRuntimeStatus?.type === "active"
      : conversation.resumeState === "resuming" ||
        getLatestTurn(conversation)?.status === "inProgress";
  const isWaitingForUserInput =
    conversation.resumeState === "needs_resume"
      ? resumedRuntimeStatus?.type === "active" &&
        resumedRuntimeStatus.activeFlags.includes("waitingOnUserInput")
      : conversation.requests.some(
          (request: any) => request.method === "item/tool/requestUserInput",
        );
  const isImplementingPlan = getThreadTurns(conversation).some((turn: any) =>
    turn.items.some(
      (item: any) => item.type === "planImplementation" && !item.isCompleted,
    ),
  );
  const hasFailed =
    conversation.resumeState === "needs_resume"
      ? resumedRuntimeStatus?.type === "systemError"
      : getLatestTurn(conversation)?.status === "failed";
  return hasWaitingApprovalRequest(conversation) ||
    isWaitingForUserInput ||
    isImplementingPlan
    ? "waiting"
    : hasFailed
      ? "failed"
      : isRunning
        ? "running"
        : conversation.hasUnreadTurn
          ? "review"
          : "idle";
}
function getCloudTaskActivityStatus(task: any): AvatarOverlayActivityStatus {
  if (task.archived) return "idle";
  const latestTurnStatus =
    task.task_status_display?.latest_turn_status_display?.turn_status;
  return latestTurnStatus === "failed" || latestTurnStatus === "cancelled"
    ? "failed"
    : latestTurnStatus === "in_progress" || latestTurnStatus === "pending"
      ? "running"
      : task.has_unread_turn
        ? "review"
        : "idle";
}
