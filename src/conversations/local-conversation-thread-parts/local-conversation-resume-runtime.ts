// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Runtime helpers for resuming local conversations.
import {
  useCollaborationMode,
  type CollaborationMode,
} from "../../collaboration/use-collaboration-mode";
import { readServiceTierForRequest } from "../../utils/read-service-tier-for-request";

export type ProfileConversationAgentModeState = {
  activeMode?: CollaborationMode | null;
};

export function useProfileConversationAgentMode(
  conversationId: string | null | undefined,
): ProfileConversationAgentModeState {
  return useCollaborationMode(conversationId);
}

export function resolveConversationServiceTier(
  scope: unknown,
  hostId: unknown,
  model: unknown,
): Promise<unknown> {
  return typeof hostId === "string"
    ? readServiceTierForRequest(
        scope as Parameters<typeof readServiceTierForRequest>[0],
        hostId,
        typeof model === "string" ? model : null,
      )
    : Promise.resolve(null);
}

export function initConversationResumeRuntime(): void {}
