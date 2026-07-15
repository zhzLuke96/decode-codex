// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Narrow hook that exposes only the `createPendingWorktree` action from the
// pending-worktree store. The home composer uses this to enqueue a pending
// worktree when starting a new-thread conversation in its own worktree.
import { usePendingWorktreeStore } from "./pending-worktree-store/pending-worktree-store-actions";
import type { CreatePendingWorktreeInput } from "./pending-worktree-store/types";

export interface UseCreatePendingWorktreeResult {
  createPendingWorktree: (input: CreatePendingWorktreeInput) => string;
}

export function useCreatePendingWorktree(): UseCreatePendingWorktreeResult {
  const { createPendingWorktree } = usePendingWorktreeStore();
  return { createPendingWorktree };
}
