// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Core turn lifecycle for the composer: start a fresh turn, steer an
// in-progress one, and fall back when steering races with a completed turn.
import {
  buildComposerTurnPayload,
  buildPermissionRequestFields,
  isClosedAgentConversation,
} from "./composer-turn-request-builder";
import type {
  SendRestoreMessageArgs,
  StartComposerTurnArgs,
} from "./composer-turn-types";
import { createRestoreMessage } from "./restore-message";
import { isSteerTurnInactiveError } from "./steer-turn-inactive-error";
import {
  CLOSED_AGENT_ERROR_MESSAGE,
  MULTI_AGENT_MODE,
  prepareConversationForTurn,
  resumableConversationAtom,
  conversationTurnsAtom,
  sendHostRequest,
} from "../boundaries/onboarding-commons-externals.facade";

export type { SendRestoreMessageArgs, StartComposerTurnArgs };

export function initStartComposerTurnChunk(): void {}

export function startComposerTurn(
  args: StartComposerTurnArgs,
): Promise<string> {
  return startTurn(args);
}

export function sendRestoreMessage(
  args: SendRestoreMessageArgs,
): Promise<string> {
  return steerTurn(args);
}

async function maybeResumeConversation({
  activeCollaborationMode,
  context,
  cwd,
  manager,
  scope,
  serviceTier,
  targetConversationId,
}: Pick<
  StartComposerTurnArgs,
  | "activeCollaborationMode"
  | "context"
  | "cwd"
  | "manager"
  | "scope"
  | "serviceTier"
  | "targetConversationId"
>): Promise<string | null> {
  if (!scope.get(resumableConversationAtom, targetConversationId)) {
    return null;
  }

  return (
    await sendHostRequest("maybe-resume-conversation", {
      hostId: manager.getHostId(),
      conversationId: targetConversationId,
      model: null,
      serviceTier,
      reasoningEffort: null,
      workspaceRoots: context.workspaceRoots ?? [cwd],
      collaborationMode: context.collaborationMode ?? activeCollaborationMode,
    })
  ).activeTurnId;
}

function assertConversationOpen(
  scope: StartComposerTurnArgs["scope"],
  conversationId: string,
): void {
  if (isClosedAgentConversation(scope, conversationId)) {
    throw Error(CLOSED_AGENT_ERROR_MESSAGE);
  }
}

async function startTurn(
  {
    scope,
    manager,
    hostId,
    context,
    targetConversationId,
    cwd,
    agentMode,
    permissionProfileId,
    serviceTier,
    shouldSendPermissionOverrides,
    activeCollaborationMode,
    restoreMessage,
  }: StartComposerTurnArgs,
  forceStart = false,
): Promise<string> {
  assertConversationOpen(scope, targetConversationId);

  const activeTurnId = forceStart
    ? null
    : await maybeResumeConversation({
        activeCollaborationMode,
        context,
        cwd,
        manager,
        scope,
        serviceTier,
        targetConversationId,
      });

  const latestTurn = scope.get(conversationTurnsAtom, targetConversationId)?.at(
    -1,
  );
  if (!forceStart && (activeTurnId != null || latestTurn?.status === "inProgress")) {
    return steerTurn({
      scope,
      manager,
      hostId,
      targetConversationId,
      agentMode,
      permissionProfileId,
      serviceTier,
      shouldSendPermissionOverrides,
      activeCollaborationMode,
      restoreMessage: restoreMessage ?? createRestoreMessage({ context, cwd }),
    });
  }

  await prepareConversationForTurn(scope, {
    conversationId: targetConversationId,
    cwd,
    hostId,
  });

  const { attachments, input } = buildComposerTurnPayload({
    context,
    hostId,
  });
  const permissionFields = await buildPermissionRequestFields({
    agentMode,
    context,
    cwd,
    manager,
    permissionProfileId,
    shouldSendPermissionOverrides,
  });

  return (
    await sendHostRequest("start-turn-for-host", {
      hostId: manager.getHostId(),
      conversationId: targetConversationId,
      params: {
        input,
        commentAttachments: context.commentAttachments,
        cwd,
        model: null,
        effort: null,
        multiAgentMode: MULTI_AGENT_MODE,
        serviceTier,
        ...permissionFields,
        attachments,
        collaborationMode: context.collaborationMode ?? activeCollaborationMode,
      },
    })
  ).turn.id;
}

async function steerTurn({
  scope,
  manager,
  hostId,
  targetConversationId,
  agentMode,
  permissionProfileId,
  serviceTier,
  shouldSendPermissionOverrides,
  activeCollaborationMode,
  restoreMessage,
}: SendRestoreMessageArgs): Promise<string> {
  const { cwd, context } = restoreMessage;
  assertConversationOpen(scope, targetConversationId);

  await maybeResumeConversation({
    activeCollaborationMode,
    context,
    cwd,
    manager,
    scope,
    serviceTier,
    targetConversationId,
  });

  const { attachments, input } = buildComposerTurnPayload({
    context,
    hostId,
  });

  try {
    return (
      await sendHostRequest("steer-turn-for-host", {
        hostId: manager.getHostId(),
        conversationId: targetConversationId,
        input,
        restoreMessage,
        serviceTier,
        attachments,
      })
    ).turnId;
  } catch (error) {
    if (!isSteerTurnInactiveError(error)) throw error;
    return startTurn(
      {
        scope,
        manager,
        hostId,
        context,
        targetConversationId,
        cwd,
        agentMode,
        permissionProfileId,
        serviceTier,
        shouldSendPermissionOverrides,
        activeCollaborationMode,
        restoreMessage,
      },
      false,
    );
  }
}
