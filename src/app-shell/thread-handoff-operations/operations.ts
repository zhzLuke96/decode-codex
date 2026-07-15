// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-BwqxraHe.js
// Operation creation, lookup, and update helpers for thread handoff state.
import { getThreadHandoffOperationsState } from "./store";
import type {
  ThreadHandoffOperation,
  ThreadHandoffOperationUpdate,
  ThreadHandoffStep,
} from "./types";

export function createQueuedThreadHandoffOperation<
  Operation extends { stepIds: string[] },
>(operation: Operation) {
  return {
    ...operation,
    status: "queued",
    targetConversationId: null,
    steps: createPendingThreadHandoffSteps(operation.stepIds),
    errorMessage: null,
    warningMessage: null,
    execOutput: null,
    hasUnseenTerminalState: false,
  } as Operation & {
    status: "queued";
    targetConversationId: null;
    steps: ThreadHandoffStep[];
    errorMessage: null;
    warningMessage: null;
    execOutput: null;
    hasUnseenTerminalState: false;
  };
}

export function getThreadHandoffOperationForConversation(
  conversationId: string | null | undefined,
) {
  if (conversationId == null) {
    return null;
  }

  const { operations } = getThreadHandoffOperationsState();
  for (let index = operations.length - 1; index >= 0; --index) {
    const operation = operations[index];
    if (
      operation.sourceConversationId === conversationId ||
      operation.targetConversationId === conversationId
    ) {
      return operation;
    }
  }

  return null;
}

export function applyThreadHandoffOperationUpdate(
  operation: ThreadHandoffOperation,
  update: ThreadHandoffOperationUpdate,
) {
  return typeof update === "function"
    ? produceThreadHandoffOperationUpdate(operation, update)
    : { ...operation, ...update };
}

export function initThreadHandoffOperationUpdateChunk(): void {}

export function produceThreadHandoffOperationUpdate(
  operation: ThreadHandoffOperation,
  update: ThreadHandoffOperationUpdate,
) {
  if (typeof update !== "function") {
    return { ...operation, ...update };
  }

  const draft: ThreadHandoffOperation = {
    ...operation,
    steps: operation.steps.map((step) => ({ ...step })),
  };
  const result = update(draft);
  return result ?? draft;
}

function createPendingThreadHandoffSteps(stepIds: string[]) {
  return stepIds.map((id) => ({
    id,
    status: "pending",
  }));
}
