// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { useHostConfigO as useHostConfigValue } from "../../boundaries/use-host-config.facade";
import type { PendingWorktree, PendingWorktreePhase } from "./types";
const EMPTY_PENDING_WORKTREES: PendingWorktree[] = [];
export function isPendingWorktreeInProgress(phase: PendingWorktreePhase) {
  switch (phase) {
    case "queued":
    case "creating":
    case "setting-up":
      return true;
    case "worktree-ready":
    case "failed":
      return false;
  }
}
export function usePendingWorktrees() {
  const [pendingWorktrees] = useHostConfigValue("pending_worktrees") as [
    PendingWorktree[] | undefined,
  ];
  return pendingWorktrees ?? EMPTY_PENDING_WORKTREES;
}
export function usePendingWorktree(pendingWorktreeId: string | null) {
  const [pendingWorktrees] = useHostConfigValue("pending_worktrees") as [
    PendingWorktree[] | undefined,
  ];
  if (!pendingWorktreeId) return null;
  if (pendingWorktrees === undefined) return undefined;
  return pendingWorktrees.find((item) => item.id === pendingWorktreeId) ?? null;
}
