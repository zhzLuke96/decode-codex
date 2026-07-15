// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builders for the host payload used by composer start/steer turn requests.
import { buildImageInputItems } from "./build-image-input-items";
import type { ComposerScope, ConversationManager } from "./composer-turn-types";
import {
  buildAttachmentsPayload,
  buildThreadPermissions,
  conversationTurnsAtom,
  getComposerPromptText,
  getPermissionOverrides,
  LOCAL_HOST_ID,
  mergeFileAttachments,
  parentConversationAtom,
  resolveRuntimeWorkspaceRoots,
  serializePermissionPolicy,
  toImageAttachmentInputs,
} from "../boundaries/onboarding-commons-externals.facade";

const EMPTY_WORKSPACE_ROOTS: string[] = [];

export function isClosedAgentConversation(
  scope: ComposerScope,
  conversationId: string,
): boolean {
  const parentConversationId = scope.get(
    parentConversationAtom,
    conversationId,
  );
  if (parentConversationId == null) return false;
  const turns = scope.get(conversationTurnsAtom, parentConversationId);
  if (turns == null) return false;

  let isClosed = false;
  for (const turn of turns) {
    if (turn.items == null) continue;
    for (const item of turn.items) {
      if (
        item.type === "collabAgentToolCall" &&
        item.receiverThreadIds.includes(conversationId) &&
        item.tool !== "wait"
      ) {
        isClosed = item.tool === "closeAgent";
      }
    }
  }
  return isClosed;
}

export function buildComposerTurnPayload({
  context,
  hostId,
}: {
  context: any;
  hostId: string;
}) {
  const imageInputs = toImageAttachmentInputs(context.imageAttachments);
  return {
    attachments: buildAttachmentsPayload([
      ...mergeFileAttachments(
        context.fileAttachments,
        context.pastedTextAttachments,
      ),
      ...context.addedFiles,
      ...imageInputs,
    ]),
    input: [
      {
        type: "text",
        text: getComposerPromptText(context),
        text_elements: [],
      },
      ...buildImageInputItems(context, hostId !== LOCAL_HOST_ID, {
        shouldRestrictRemoteHostImageSize: false,
      }),
    ],
  };
}

export async function buildPermissionRequestFields({
  agentMode,
  context,
  cwd,
  manager,
  permissionProfileId,
  shouldSendPermissionOverrides,
}: {
  agentMode: unknown;
  context: any;
  cwd: string;
  manager: ConversationManager;
  permissionProfileId: string | null;
  shouldSendPermissionOverrides: boolean;
}): Promise<Record<string, unknown>> {
  const permissionOverrides = shouldSendPermissionOverrides
    ? await getPermissionOverrides(manager.requestClient, cwd)
    : null;
  const permissions =
    permissionOverrides == null
      ? null
      : buildThreadPermissions(
          agentMode,
          context.workspaceRoots ?? EMPTY_WORKSPACE_ROOTS,
          permissionOverrides,
        );

  if (permissions == null) {
    return shouldSendPermissionOverrides
      ? {}
      : { useAppServerPermissionDefault: true };
  }

  if (permissionProfileId != null) {
    permissions.activePermissionProfile = {
      id: permissionProfileId,
      extends: null,
    };
    permissions.runtimeWorkspaceRoots =
      context.workspaceRoots ?? EMPTY_WORKSPACE_ROOTS;
  }

  return {
    approvalPolicy: permissions.approvalPolicy,
    approvalsReviewer: permissions.approvalsReviewer,
    ...serializePermissionPolicy(permissions),
    ...(permissions.activePermissionProfile == null
      ? {}
      : {
          runtimeWorkspaceRoots: resolveRuntimeWorkspaceRoots(permissions),
        }),
  };
}
