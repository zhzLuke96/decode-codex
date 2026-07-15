// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Controller-side singletons for starting and aborting conversational
// onboarding conversations.
import { sendHostRequest } from "../runtime/host-request-runtime";
import type { ActiveConversationalOnboardingConversation } from "./conversational-onboarding-conversation-state";
import {
  clearConversationalOnboardingConversationIds,
  readConversationalOnboardingConversationIds,
} from "./conversational-onboarding-conversation-state";
import { initConversationalOnboardingTaskCompletionStateChunk } from "./conversational-onboarding-task-completion-state";

export const conversationalOnboardingHostStartGenerations = new Map<
  string,
  number
>();

export function initConversationalOnboardingControllerChunk(): void {
  initConversationalOnboardingTaskCompletionStateChunk();
  void conversationalOnboardingHostStartGenerations;
}

export function abortActiveConversationalOnboardingConversation(
  conversation: ActiveConversationalOnboardingConversation,
): void {
  conversation.abortController?.abort();
  conversation.abort?.();
}

export async function archiveConversationalOnboardingConversationsForHost(
  hostId: string,
): Promise<void> {
  await Promise.all(
    readConversationalOnboardingConversationIds().map((conversationId) =>
      sendHostRequest("archive-conversation", {
        params: {
          conversationId,
          hostId,
          source: "conversational-onboarding-complete",
        },
      }),
    ),
  );
  clearConversationalOnboardingConversationIds();
}
