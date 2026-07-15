// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the "thinking" fallback indicator state for an in-progress conversation turn.
import { isConversationItemInProgress } from "./local-conversation-thread-parts/conversation-item-in-progress";
import { isAssistantContentStreaming } from "../boundaries/onboarding-commons-externals.facade";

type ConversationTimelineItem =
  | {
      type: string;
      completed?: boolean;
      [key: string]: unknown;
    }
  | null
  | undefined;

export type ThinkingFallbackState =
  | { type: "thinking"; isVisible: boolean }
  | { type: "exploring" }
  | { type: "planning" }
  | { type: "none" };

export type ResolveThinkingFallbackStateInput = {
  isTurnInProgress: boolean;
  assistantItem: ConversationTimelineItem;
  proposedPlanItem: ConversationTimelineItem;
  isExploring: boolean;
  hasActiveWebSearch: boolean;
  hasActiveDynamicToolCallSummary: boolean;
  isAnyNonExploringAgentItemInProgress: boolean;
  hasBlockingRequest: boolean;
  forceThinking: boolean;
};

export function initThinkingFallbackStateChunk(): void {
  void resolveThinkingFallbackState;
}

export function resolveThinkingFallbackState({
  isTurnInProgress,
  assistantItem,
  proposedPlanItem,
  isExploring,
  hasActiveWebSearch,
  hasActiveDynamicToolCallSummary,
  isAnyNonExploringAgentItemInProgress,
  hasBlockingRequest,
  forceThinking,
}: ResolveThinkingFallbackStateInput): ThinkingFallbackState {
  if (forceThinking) {
    return { type: "thinking", isVisible: true };
  }
  if (!isTurnInProgress) {
    return { type: "none" };
  }
  if (isExploring) {
    return { type: "exploring" };
  }
  if (isConversationItemInProgress(proposedPlanItem)) {
    return { type: "planning" };
  }
  if (
    hasBlockingRequest ||
    isAssistantContentStreaming(assistantItem) ||
    hasActiveWebSearch ||
    hasActiveDynamicToolCallSummary
  ) {
    return { type: "none" };
  }
  if (isConversationItemInProgress(assistantItem)) {
    return { type: "thinking", isVisible: true };
  }
  if (isAnyNonExploringAgentItemInProgress) {
    return { type: "none" };
  }
  return { type: "thinking", isVisible: true };
}
