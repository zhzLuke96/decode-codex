// Restored from ref/webview/assets/thread-handoff-store-sg9zWCDG.js
import * as React from "react";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai/react";
import { _appScopeX as createAtom } from "../boundaries/app-scope";
import { produceImmutableUpdate } from "../boundaries/thread-context-inputs.facade";
import { uuidV4 } from "../utils/uuid-v4";
type ThreadHandoffDirection = "to-host-worktree" | "to-local" | "to-worktree";
type ThreadHandoffStep = {
  id: string;
  status: string;
};
type ThreadHandoffOperationStatus = string;
type ThreadHandoffOperation = {
  composerViewState?: unknown;
  direction: ThreadHandoffDirection;
  errorMessage: string | null;
  execOutput: unknown | null;
  hasUnseenTerminalState: boolean;
  id: string;
  localBranch: string | null;
  request: unknown;
  sourceBranch: string | null;
  sourceConversationId: string;
  status: ThreadHandoffOperationStatus;
  stepIds: string[];
  steps: ThreadHandoffStep[];
  targetConversationId: string | null;
  warningMessage: string | null;
  worktreeBranch: string | null;
};
type ThreadHandoffStoreState = {
  activeOperationId: string | null;
  operations: ThreadHandoffOperation[];
};
type QueueThreadHandoffOperationInput = {
  composerViewState?: unknown;
  direction: ThreadHandoffDirection;
  id?: string;
  localBranch: string | null;
  request: unknown;
  sourceBranch: string | null;
  sourceConversationId: string;
  stepIds: string[];
  worktreeBranch: string | null;
};
type AddThreadHandoffOperationInput = {
  composerViewState?: unknown;
  localBranch?: string | null;
  request: unknown;
  sourceBranch: string | null;
  sourceConversationId: string;
  stepIds: string[];
  worktreeBranch?: string | null;
};
type ThreadHandoffActions = {
  addToHostWorktreeOperation(
    input: AddThreadHandoffOperationInput,
  ): ThreadHandoffOperation;
  addToLocalOperation(
    input: AddThreadHandoffOperationInput,
  ): ThreadHandoffOperation;
  addToWorktreeOperation(
    input: AddThreadHandoffOperationInput,
  ): ThreadHandoffOperation;
  closeActiveOperation(): void;
  openOperation(operationId: string): void;
  removeOperation(operationId: string): void;
  updateOperation(
    operationId: string,
    updater: (draft: ThreadHandoffOperation) => void,
  ): void;
};
const threadHandoffStoreAtom = createAtom({
  activeOperationId: null,
  operations: [],
} satisfies ThreadHandoffStoreState);
function createQueuedThreadHandoffOperation({
  id = uuidV4(),
  ...input
}: QueueThreadHandoffOperationInput): ThreadHandoffOperation {
  return {
    ...input,
    id,
    status: "queued",
    targetConversationId: null,
    steps: createPendingThreadHandoffSteps(input.stepIds),
    errorMessage: null,
    warningMessage: null,
    execOutput: null,
    hasUnseenTerminalState: false,
  };
}
function useThreadHandoffStore(): ThreadHandoffStoreState {
  return useAtomValue(threadHandoffStoreAtom);
}
function useThreadHandoffOperationForConversation(
  conversationId: string | null | undefined,
): ThreadHandoffOperation | null {
  const { operations } = useThreadHandoffStore();
  if (conversationId == null) return null;
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
function useThreadHandoffActions(): ThreadHandoffActions {
  const [, setStore] = useAtom(threadHandoffStoreAtom);
  const appendOperation = React.useCallback(
    (operation: ThreadHandoffOperation) => {
      setStore((state) => ({
        activeOperationId: null,
        operations: [...state.operations, operation],
      }));
      return operation;
    },
    [setStore],
  );
  const addToWorktreeOperation = React.useCallback(
    (input: AddThreadHandoffOperationInput) =>
      appendOperation(
        createQueuedThreadHandoffOperation({
          direction: "to-worktree",
          sourceConversationId: input.sourceConversationId,
          sourceBranch: input.sourceBranch,
          localBranch: input.localBranch ?? null,
          worktreeBranch: input.worktreeBranch ?? null,
          stepIds: input.stepIds,
          request: input.request,
          composerViewState: input.composerViewState,
        }),
      ),
    [appendOperation],
  );
  const addToLocalOperation = React.useCallback(
    (input: AddThreadHandoffOperationInput) =>
      appendOperation(
        createQueuedThreadHandoffOperation({
          direction: "to-local",
          sourceConversationId: input.sourceConversationId,
          sourceBranch: input.sourceBranch,
          localBranch: input.localBranch ?? null,
          worktreeBranch: null,
          stepIds: input.stepIds,
          request: input.request,
          composerViewState: input.composerViewState,
        }),
      ),
    [appendOperation],
  );
  const addToHostWorktreeOperation = React.useCallback(
    (input: AddThreadHandoffOperationInput) =>
      appendOperation(
        createQueuedThreadHandoffOperation({
          direction: "to-host-worktree",
          sourceConversationId: input.sourceConversationId,
          sourceBranch: input.sourceBranch,
          localBranch: null,
          worktreeBranch: null,
          stepIds: input.stepIds,
          request: input.request,
          composerViewState: input.composerViewState,
        }),
      ),
    [appendOperation],
  );
  const updateOperation = React.useCallback(
    (operationId: string, updater: (draft: ThreadHandoffOperation) => void) => {
      setStore((state) => ({
        ...state,
        operations: state.operations.map((operation) =>
          operation.id === operationId
            ? produceImmutableUpdate(operation, updater)
            : operation,
        ),
      }));
    },
    [setStore],
  );
  const removeOperation = React.useCallback(
    (operationId: string) => {
      setStore((state) => ({
        activeOperationId:
          state.activeOperationId === operationId
            ? null
            : state.activeOperationId,
        operations: state.operations.filter(
          (operation) => operation.id !== operationId,
        ),
      }));
    },
    [setStore],
  );
  const openOperation = React.useCallback(
    (operationId: string) => {
      setStore((state) => ({
        activeOperationId: operationId,
        operations: state.operations.map((operation) =>
          operation.id === operationId
            ? {
                ...operation,
                hasUnseenTerminalState: false,
              }
            : operation,
        ),
      }));
    },
    [setStore],
  );
  const closeActiveOperation = React.useCallback(() => {
    setStore(closeActiveThreadHandoffOperation);
  }, [setStore]);
  return React.useMemo(
    () => ({
      addToWorktreeOperation,
      addToLocalOperation,
      addToHostWorktreeOperation,
      updateOperation,
      removeOperation,
      openOperation,
      closeActiveOperation,
    }),
    [
      addToHostWorktreeOperation,
      addToLocalOperation,
      addToWorktreeOperation,
      closeActiveOperation,
      openOperation,
      removeOperation,
      updateOperation,
    ],
  );
}
function closeActiveThreadHandoffOperation(
  state: ThreadHandoffStoreState,
): ThreadHandoffStoreState {
  return {
    ...state,
    activeOperationId: null,
  };
}
function createPendingThreadHandoffSteps(
  stepIds: string[],
): ThreadHandoffStep[] {
  return stepIds.map((id) => ({
    id,
    status: "pending",
  }));
}
export {
  useThreadHandoffStore,
  useThreadHandoffActions,
  useThreadHandoffOperationForConversation,
  createQueuedThreadHandoffOperation,
};
