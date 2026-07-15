// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Ordered step identifiers used while moving a thread between local, worktree,
// and host-worktree contexts.

export const THREAD_HANDOFF_OPERATION_STEP_IDS = [
  "prepare-host-transfer",
  "transfer-host-artifacts",
  "create-new-worktree",
  "reuse-existing-worktree",
  "stash-source-changes",
  "detach-worktree-branch",
  "checkout-local-branch",
  "stash-target-worktree-changes",
  "checkout-worktree-branch",
  "apply-changes-to-worktree",
  "apply-changes-to-local",
  "switching-thread",
];

export function initThreadHandoffOperationStepsChunk(): void {
  void THREAD_HANDOFF_OPERATION_STEP_IDS;
}
