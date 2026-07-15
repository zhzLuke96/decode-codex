// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Current avatar overlay pill activity list and subtitle helpers.
import {
  getLatestTurn,
  getLatestWaitingRequest,
  getThreadTitle,
  getThreadTurnCount,
  getThreadTurns,
  hasWaitingApprovalRequest,
  isSubAgentThread,
} from "../../boundaries/use-host-config.facade";
import { buildCompactWaitingRequest } from "../avatar-overlay-realtime-voice-button/waiting-request";
import { activityMessages } from "./activity-messages";
import {
  getAutomationConversationSubtitle,
  getLatestAvatarOverlayActivitySubtitle,
} from "./activity-subtitle";
import type {
  AvatarOverlayActivityItem,
  AvatarOverlayActivityStatus,
  BuildAvatarOverlayPillActivityItemsOptions,
  IntlShapeLike,
} from "./types";

export function buildAvatarOverlayPillActivityItems({
  excludedConversationId,
  includeCompactWaitingRequests,
  includeMcpElicitationCancelAction = false,
  intl,
  localConversations,
  remoteTasks,
}: BuildAvatarOverlayPillActivityItemsOptions): AvatarOverlayActivityItem[] {
  const items: AvatarOverlayActivityItem[] = [];
  const seenKeys = new Set<string>();

  for (const conversation of localConversations) {
    const item = buildLocalConversationActivityItem({
      conversation,
      excludedConversationId,
      includeCompactWaitingRequests,
      includeMcpElicitationCancelAction,
      intl,
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
}: {
  conversation: any;
  excludedConversationId?: string | null;
  includeCompactWaitingRequests: boolean;
  includeMcpElicitationCancelAction: boolean;
  intl: IntlShapeLike;
}): AvatarOverlayActivityItem | null {
  if (isSubAgentThread(conversation)) return null;

  const hostId = conversation.hostId ?? "local";
  const source = hostId === "local" ? "local" : "remote-host";
  const status = getLocalConversationActivityStatus(conversation);
  const isAutomationThread = conversation.threadSource === "automation";
  const turnItems = getLatestTurn(conversation)?.items ?? [];
  const subtitle = isAutomationThread
    ? getAutomationConversationSubtitle(turnItems)
    : getConversationSubtitle(conversation, intl);
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
    showInNotificationTray:
      !isAutomationThread ||
      status === "waiting" ||
      status === "failed" ||
      subtitle != null,
    sortAtMs:
      getLatestTurn(conversation)?.turnStartedAtMs ?? conversation.updatedAt,
    source,
    status,
    subtitle,
    title:
      getThreadTitle(conversation) ??
      intl.formatMessage(activityMessages.newThread),
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
    showInNotificationTray: true,
    sortAtMs: updatedAtMs,
    source: "cloud",
    status: getCloudTaskActivityStatus(task),
    subtitle: null,
    title: task.title?.trim() || intl.formatMessage(activityMessages.newThread),
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

export function initAvatarOverlayPillActivityItemsChunk(): void {}
