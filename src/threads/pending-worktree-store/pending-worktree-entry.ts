// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import type { CreatePendingWorktreeInput, PendingWorktree } from "./types";
export function createPendingWorktreeEntry(
  id: string,
  input: CreatePendingWorktreeInput,
): PendingWorktree {
  const baseEntry = {
    id,
    hostId: input.hostId,
    createdAt: Date.now(),
    attempt: 1,
    phase: "queued" as const,
    labelEdited: false,
    outputText: "",
    worktreeOutputText: "",
    setupOutputText: "",
    errorMessage: null,
    worktreeWorkspaceRoot: null,
    worktreeGitRoot: null,
    needsAttention: false,
    isPinned: false,
    pinnedBeforeThreadId: null,
    label: input.label,
    initialThreadTitle: input.initialThreadTitle,
    browserTransferSourceBrowserTabId: input.browserTransferSourceBrowserTabId,
    browserTransferSourceBrowserTabIds:
      input.browserTransferSourceBrowserTabIds,
    browserTransferSourceConversationId:
      input.browserTransferSourceConversationId,
    clientThreadId: input.clientThreadId,
    sourceWorkspaceRoot: input.sourceWorkspaceRoot,
    startingState: input.startingState,
    localEnvironmentConfigPath: input.localEnvironmentConfigPath,
    prompt: input.prompt,
  };
  switch (input.launchMode) {
    case "create-stable-worktree":
      return {
        ...baseEntry,
        launchMode: "create-stable-worktree",
        startConversationParamsInput: null,
        sourceConversationId: null,
        sourceCollaborationMode: null,
      };
    case "fork-conversation":
      return {
        ...baseEntry,
        launchMode: "fork-conversation",
        startConversationParamsInput: null,
        sourceConversationId: input.sourceConversationId ?? null,
        sourceCollaborationMode: input.sourceCollaborationMode,
        targetTurnId: input.targetTurnId,
        threadSource: input.threadSource,
      };
    case "start-conversation":
      return {
        ...baseEntry,
        launchMode: "start-conversation",
        startConversationParamsInput: input.startConversationParamsInput,
        threadStartHostId: input.threadStartHostId,
        threadGoalDraft: input.threadGoalDraft,
        sourceConversationId: null,
        sourceCollaborationMode: null,
      };
  }
}
export function createPendingWorktreeRequest(
  id: string,
  input: CreatePendingWorktreeInput,
) {
  return {
    id,
    ...input,
  };
}
