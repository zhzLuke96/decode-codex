// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared status shapes and sentinel values for managed-worktree inspection.

type WorktreeStatus =
  | { kind: "available" }
  | { kind: "restorable"; worktreePath: string | null; [key: string]: unknown }
  | { kind: "gone"; worktreePath: string | null }
  | {
      kind: "unavailable";
      reason?: string;
      worktreePath: string | null;
    };

interface WorktreeStatusTarget {
  conversationId: string;
  cwd: string | null;
  hostId: string;
}

interface QueryStateHandle {
  query: {
    getOrFetch<T>(atom: unknown, params: unknown): Promise<T>;
    invalidate(
      atom: unknown,
      params: unknown,
      options?: { exact?: boolean },
    ): Promise<void>;
    fetch<T>(atom: unknown, params: unknown): Promise<T>;
  };
  queryClient: {
    invalidateQueries(filter: { queryKey: unknown }): Promise<void>;
  };
}

const AVAILABLE_STATUS: WorktreeStatus = { kind: "available" };
const INSPECTION_FAILED_STATUS: WorktreeStatus = {
  kind: "unavailable",
  reason: "inspection-failed",
  worktreePath: null,
};

const WORKTREE_RESTORE_REQUIRED = "worktree_restore_required";
const WORKTREE_GONE = "worktree_gone";
const WORKTREE_STATUS_UNAVAILABLE = "worktree_status_unavailable";

export {
  AVAILABLE_STATUS,
  INSPECTION_FAILED_STATUS,
  WORKTREE_GONE,
  WORKTREE_RESTORE_REQUIRED,
  WORKTREE_STATUS_UNAVAILABLE,
};
export type { QueryStateHandle, WorktreeStatus, WorktreeStatusTarget };
