// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Task-completion selectors from the current app-main/onboarding chunk.
import {
  conversationTurnsSignal,
  initConversationStateRuntime,
} from "../runtime/conversation-state-runtime";
import { appScopeL, appScopeRoot } from "../boundaries/app-scope";
import {
  parseAcceptedConversationalOnboardingPluginTaskResult,
  type ConversationalOnboardingPluginTaskOutput,
} from "./conversational-onboarding-plugin-task-output";

type DynamicToolCallItem = {
  contentItems?: Array<{ type: string; text?: string }> | null;
  namespace?: string;
  status?: string;
  success?: boolean;
  tool?: string;
  type?: string;
};

type ConversationTurn = {
  items?: Array<DynamicToolCallItem | null | undefined>;
  status?: string;
};

function findConversationalOnboardingTaskCompletion(
  turns: ConversationTurn[] | null | undefined,
): ConversationalOnboardingPluginTaskOutput | null {
  if (turns == null) return null;
  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    const turn = turns[turnIndex];
    if (turn == null) continue;
    const items = turn.items ?? [];
    for (let itemIndex = items.length - 1; itemIndex >= 0; --itemIndex) {
      const item = items[itemIndex];
      if (
        item?.type !== "dynamicToolCall" ||
        item.namespace !== "codex_app" ||
        item.tool !== "complete_conversational_onboarding_task" ||
        item.status !== "completed" ||
        item.success !== true
      ) {
        continue;
      }
      const completion = parseAcceptedConversationalOnboardingPluginTaskResult(
        item.contentItems,
      );
      if (completion != null) return completion;
    }
  }
  return null;
}

export const conversationalOnboardingTaskCompletionSignal = appScopeL(
  appScopeRoot,
  (conversationId: unknown, { get }) =>
    conversationId == null
      ? null
      : findConversationalOnboardingTaskCompletion(
          get(conversationTurnsSignal, conversationId) as
            | ConversationTurn[]
            | null
            | undefined,
        ),
);

export const conversationalOnboardingTaskCompletionMissingSignal = appScopeL(
  appScopeRoot,
  (conversationId: unknown, { get }) => {
    if (conversationId == null) return false;
    const turns = get(conversationTurnsSignal, conversationId) as
      | ConversationTurn[]
      | null
      | undefined;
    const lastTurn = turns?.at(-1);
    return (
      lastTurn != null &&
      lastTurn.status !== "inProgress" &&
      get(conversationalOnboardingTaskCompletionSignal, conversationId) == null
    );
  },
);

export function initConversationalOnboardingTaskCompletionStateChunk(): void {
  initConversationStateRuntime();
  void conversationalOnboardingTaskCompletionSignal;
  void conversationalOnboardingTaskCompletionMissingSignal;
}
