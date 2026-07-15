// Restored from ref/webview/assets/chat-reply-plus-HRBzDa8r.js
// chat-reply-plus-HRBzDa8r chunk restored from the Codex webview bundle.
import {
  conversationHostIdByConversationIdSignal,
  latestCollaborationModeByConversationIdSignal,
  localThreadSummaryByConversationIdSignal,
} from "../../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { vscodeApiH as vscodeLogger } from "../../boundaries/vscode-api";
import { toastApiSignal } from "../../ui/toast-signal";
import { appIntlSignal } from "../../utils/app-intl-signal";
import { threadActionMessages } from "../thread-actions";
import type {
  AppScopeReader,
  ForkConversationSource,
  IntlShapeLike,
  MessageDescriptorLike,
  ToastApiLike,
} from "./types";
export async function forkConversationFromLatest(
  appScope: AppScopeReader,
  { sourceConversationId, sourceWorkspaceRoot }: ForkConversationSource,
) {
  if (sourceConversationId == null) return null;
  try {
    const hostId = appScope.get<string>(
      conversationHostIdByConversationIdSignal,
      sourceConversationId,
    );
    const collaborationMode = getSourceCollaborationMode(
      appScope,
      sourceConversationId,
    );
    return await sendAppServerRequest("fork-conversation-from-latest", {
      hostId,
      conversationId: sourceConversationId,
      cwd: sourceWorkspaceRoot ?? undefined,
      workspaceRoots:
        sourceWorkspaceRoot == null ? undefined : [sourceWorkspaceRoot],
      collaborationMode,
    });
  } catch (error) {
    vscodeLogger.error("Error forking local task", {
      safe: {},
      sensitive: {
        error,
      },
    });
    showThreadActionError(appScope, threadActionMessages.forkThreadError);
    return null;
  }
}
export function getSourceCollaborationMode(
  appScope: AppScopeReader,
  conversationId: string,
) {
  return appScope.get(
    localThreadSummaryByConversationIdSignal,
    conversationId,
  ) == null
    ? appScope.get(
        latestCollaborationModeByConversationIdSignal,
        conversationId,
      )
    : null;
}
export function showThreadActionError(
  appScope: AppScopeReader,
  message: MessageDescriptorLike,
) {
  const toastApi = appScope.get<ToastApiLike>(toastApiSignal);
  const intl = appScope.get<IntlShapeLike>(appIntlSignal);
  toastApi.danger(intl.formatMessage(message));
}
