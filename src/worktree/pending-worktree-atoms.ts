// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Atoms + lookup for pending worktrees: a refresh-token atom plus a parametric
// atom that resolves the pending worktree for a given client thread id.
import {
  appStoreScope,
  createScopedAtom,
  createParametricAtom,
  readPersistedSignalSnapshot,
} from "../boundaries/onboarding-commons-externals.facade";

export interface PendingWorktree {
  clientThreadId: string;
  phase?: string;
  [key: string]: unknown;
}

export const pendingWorktreesRefreshAtom = createScopedAtom(
  appStoreScope,
  Symbol(),
);

export function initPendingWorktreeAtomsRuntime(): void {
  void pendingWorktreesRefreshAtom;
  void pendingWorktreeByClientThreadIdAtom;
}

export function refreshPendingWorktrees(store: {
  set(atom: unknown, value: unknown): void;
}): void {
  store.set(pendingWorktreesRefreshAtom, Symbol());
}

export function findPendingWorktreeByClientThreadId(
  pendingWorktrees: PendingWorktree[],
  clientThreadId: string,
): PendingWorktree | null {
  return (
    pendingWorktrees.find(
      (worktree) => worktree.clientThreadId === clientThreadId,
    ) ?? null
  );
}

export const pendingWorktreeByClientThreadIdAtom = createParametricAtom(
  appStoreScope,
  (
    clientThreadId: string,
    { get }: { get: (...args: unknown[]) => unknown },
  ) => {
    const pendingWorktrees = readPersistedSignalSnapshot(
      get,
      "pending_worktrees",
    ) as PendingWorktree[] | undefined;
    return pendingWorktrees === undefined
      ? undefined
      : findPendingWorktreeByClientThreadId(pendingWorktrees, clientThreadId);
  },
);
