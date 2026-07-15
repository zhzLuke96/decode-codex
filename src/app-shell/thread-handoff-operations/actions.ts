// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// React action hook for app-shell thread handoff operations.
import { useCallback } from "react";

import { createThreadHandoffOperationId } from "./ids";
import {
  applyThreadHandoffOperationUpdate,
  createQueuedThreadHandoffOperation,
} from "./operations";
import {
  clearActiveThreadHandoffOperation,
  setThreadHandoffOperationsState,
} from "./store";
import type {
  ThreadHandoffOperation,
  ThreadHandoffOperationInput,
  ThreadHandoffOperationUpdate,
} from "./types";

export function useThreadHandoffOperationActions() {
  const addToWorktreeOperation = useCallback(
    (input: ThreadHandoffOperationInput) =>
      appendThreadHandoffOperation({
        id: createThreadHandoffOperationId(),
        direction: "to-worktree",
        sourceConversationId: input.sourceConversationId,
        sourceBranch: input.sourceBranch ?? null,
        localBranch: input.localBranch ?? null,
        worktreeBranch: input.worktreeBranch ?? null,
        stepIds: input.stepIds,
        request: input.request,
        composerViewState: input.composerViewState,
      }),
    [],
  );

  const addToLocalOperation = useCallback(
    (input: ThreadHandoffOperationInput) =>
      appendThreadHandoffOperation({
        id: createThreadHandoffOperationId(),
        direction: "to-local",
        sourceConversationId: input.sourceConversationId,
        sourceBranch: input.sourceBranch ?? null,
        localBranch: input.localBranch ?? null,
        worktreeBranch: null,
        stepIds: input.stepIds,
        request: input.request,
        composerViewState: input.composerViewState,
      }),
    [],
  );

  const addToHostWorktreeOperation = useCallback(
    (input: ThreadHandoffOperationInput) =>
      appendThreadHandoffOperation({
        id: createThreadHandoffOperationId(),
        direction: "to-host-worktree",
        sourceConversationId: input.sourceConversationId,
        sourceBranch: input.sourceBranch ?? null,
        localBranch: null,
        worktreeBranch: null,
        stepIds: input.stepIds,
        request: input.request,
        composerViewState: input.composerViewState,
      }),
    [],
  );

  const updateOperation = useCallback(
    (operationId: string, update: ThreadHandoffOperationUpdate) => {
      setThreadHandoffOperationsState((state) => ({
        ...state,
        operations: state.operations.map((operation) =>
          operation.id === operationId
            ? applyThreadHandoffOperationUpdate(operation, update)
            : operation,
        ),
      }));
    },
    [],
  );

  const removeOperation = useCallback((operationId: string) => {
    setThreadHandoffOperationsState((state) => ({
      activeOperationId:
        state.activeOperationId === operationId
          ? null
          : state.activeOperationId,
      operations: state.operations.filter(
        (operation) => operation.id !== operationId,
      ),
    }));
  }, []);

  const openOperation = useCallback((operationId: string) => {
    setThreadHandoffOperationsState((state) => ({
      activeOperationId: operationId,
      operations: state.operations.map((operation) =>
        operation.id === operationId
          ? { ...operation, hasUnseenTerminalState: false }
          : operation,
      ),
    }));
  }, []);

  const closeActiveOperation = useCallback(() => {
    setThreadHandoffOperationsState(clearActiveThreadHandoffOperation);
  }, []);

  return {
    addToWorktreeOperation,
    addToLocalOperation,
    addToHostWorktreeOperation,
    updateOperation,
    removeOperation,
    openOperation,
    closeActiveOperation,
  };
}

function appendThreadHandoffOperation(
  operation: Omit<
    ThreadHandoffOperation,
    | "status"
    | "targetConversationId"
    | "steps"
    | "errorMessage"
    | "warningMessage"
    | "execOutput"
    | "hasUnseenTerminalState"
  >,
) {
  const queuedOperation = createQueuedThreadHandoffOperation(
    operation,
  ) as ThreadHandoffOperation;

  setThreadHandoffOperationsState((state) => ({
    activeOperationId: null,
    operations: [...state.operations, queuedOperation],
  }));

  return queuedOperation;
}
