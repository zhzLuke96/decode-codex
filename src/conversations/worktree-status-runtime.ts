// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Managed-worktree status query atoms and refresh helpers.

import {
  worktreeStatusForConversationAtom,
  worktreeStatusKindAtom,
  worktreeStatusQueryAtom,
} from "./worktree-status-runtime/atoms";
import {
  ensureWorktreeAvailable,
  invalidateWorktreeStatusForHost,
  refreshWorktreeStatus,
} from "./worktree-status-runtime/refresh";

export * from "./worktree-status-runtime/atoms";
export * from "./worktree-status-runtime/refresh";
export type {
  QueryStateHandle,
  WorktreeStatus,
  WorktreeStatusTarget,
} from "./worktree-status-runtime/status-types";

export function initWorktreeStatusRuntimeChunk(): void {
  void worktreeStatusQueryAtom;
  void worktreeStatusForConversationAtom;
  void worktreeStatusKindAtom;
  void refreshWorktreeStatus;
  void invalidateWorktreeStatusForHost;
  void ensureWorktreeAvailable;
}
