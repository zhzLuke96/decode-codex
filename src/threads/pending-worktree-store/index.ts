// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import {
  createPendingWorktreeInDesktop,
  isPendingWorktreeInProgress,
  usePendingWorktree,
  usePendingWorktreeStore,
  usePendingWorktrees,
} from "./pending-worktree-store";
import {
  getPendingWorktreeConversationStartActions,
  usePendingWorktreeConversationStarts,
} from "./pending-worktree-conversation-starts";
import {
  cleanupMaterializedThreadGoal,
  cleanupThreadGoalDraftPastedTextAttachments,
  clearThreadGoal,
  materializeThreadGoalDraft,
  readMaterializedThreadGoalObjective,
  setThreadGoal,
  setThreadGoalStatus,
} from "./thread-goal";
export {
  usePendingWorktrees,
  cleanupMaterializedThreadGoal,
  readMaterializedThreadGoalObjective,
  clearThreadGoal,
  usePendingWorktreeStore,
  cleanupThreadGoalDraftPastedTextAttachments,
  setThreadGoalStatus,
  isPendingWorktreeInProgress,
  getPendingWorktreeConversationStartActions,
  setThreadGoal,
  usePendingWorktree,
  usePendingWorktreeConversationStarts,
  createPendingWorktreeInDesktop,
  materializeThreadGoalDraft,
};

export function initPendingWorktreeStoreRuntime(): void {
  // Legacy chunks exposed a Rollup initializer; ESM imports initialize these
  // restored pending-worktree modules eagerly.
  void usePendingWorktrees;
  void cleanupMaterializedThreadGoal;
  void readMaterializedThreadGoalObjective;
  void clearThreadGoal;
  void usePendingWorktreeStore;
  void cleanupThreadGoalDraftPastedTextAttachments;
  void setThreadGoalStatus;
  void isPendingWorktreeInProgress;
  void getPendingWorktreeConversationStartActions;
  void setThreadGoal;
  void usePendingWorktree;
  void usePendingWorktreeConversationStarts;
  void createPendingWorktreeInDesktop;
  void materializeThreadGoalDraft;
}
