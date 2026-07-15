// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import type { PendingWorktree, PendingWorktreeMetadataUpdate } from "./types";
export function applyPendingWorktreeMetadataUpdates(
  pendingWorktree: PendingWorktree,
  updates: PendingWorktreeMetadataUpdate[],
) {
  return updates.reduce<PendingWorktree>((current, update) => {
    switch (update.type) {
      case "isPinned":
        return {
          ...current,
          isPinned: update.isPinned,
        };
      case "pinnedBeforeThreadId":
        return {
          ...current,
          pinnedBeforeThreadId: update.beforeThreadId,
        };
      case "label":
        return {
          ...current,
          label: update.label,
        };
      case "labelEdited":
        return {
          ...current,
          labelEdited: update.labelEdited,
        };
      case "needsAttention":
        return {
          ...current,
          needsAttention: update.needsAttention,
        };
    }
  }, pendingWorktree);
}
