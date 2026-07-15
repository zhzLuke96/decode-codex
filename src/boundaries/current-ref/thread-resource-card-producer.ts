// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj-DZ7tupb9.js
// Current bundle producer that combines thread resource card primitives,
// worktree query keys, clsx, and the shared chevron icon.
import clsx from "clsx";
import { initChevronDownIcon } from "../../icons/chevron-icon";
import { initWorktreeQueryKeysChunk } from "../../utils/worktree-query-keys";

export { ChevronIcon } from "../../icons/chevron-icon";
export {
  codexWorktreesQueryKey,
  getCodexWorktreesQueryKey,
  getManagedWorktreeStateQueryKey,
  managedWorktreeStateQueryKey,
} from "../../utils/worktree-query-keys";
export {
  initThreadResourceCardChunk,
  ThreadResourceCard,
  ThreadResourceCardExpandButton,
  ThreadResourceCardHeader,
  ThreadResourceCardHeader as ThreadResourceCardRow,
  ThreadResourceCardPill,
  ThreadResourceCardPill as ThreadResourceCardBadge,
} from "../../ui/thread-resource-card";

export const classNames = clsx;

export function initThreadResourceChevronIconChunk(): void {
  initChevronDownIcon();
}

export function initClassNamesChunk(): void {}

export function initGitWorktreeQueryKeysChunk(): void {
  initWorktreeQueryKeysChunk();
}

export function initWorktreeResourceQueryKeysChunk(): void {
  initGitWorktreeQueryKeysChunk();
}
