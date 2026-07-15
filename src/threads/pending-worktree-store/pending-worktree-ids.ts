// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
import { uuidV4 } from "../../utils/uuid-v4";
export function createPendingWorktreeId(hostId: string) {
  return `${hostId}:${String(uuidV4())}`;
}
export function getHostIdFromPendingWorktreeId(pendingWorktreeId: string) {
  const separatorIndex = pendingWorktreeId.lastIndexOf(":");
  return separatorIndex <= 0 || separatorIndex === pendingWorktreeId.length - 1
    ? LOCAL_HOST_ID
    : pendingWorktreeId.slice(0, separatorIndex);
}
