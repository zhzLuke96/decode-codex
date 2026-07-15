// Restored from ref/webview/assets/sidebar-thread-keys-Ch_amVKz.js

type SidebarThreadKey =
  | {
      kind: "local";
      key: string;
      conversationId: string;
    }
  | {
      kind: "remote";
      key: string;
      taskId: string;
    }
  | {
      kind: "pending-worktree";
      key: string;
      pendingWorktreeId: string;
    };
const LOCAL_THREAD_KEY_PREFIX = "local:";
const REMOTE_THREAD_KEY_PREFIX = "remote:";
const PENDING_WORKTREE_THREAD_KEY_PREFIX = "pending-worktree:";
function normalizeConversationId(conversationId: string) {
  return conversationId;
}
function getLocalThreadPath(conversationId: string) {
  return `/local/${conversationId}`;
}
function getRemoteTaskPath(taskId: string) {
  return `/remote/${taskId}`;
}
function getPendingWorktreePath(pendingWorktreeId: string) {
  return `/worktree-init-v2/${pendingWorktreeId}`;
}
function makeLocalSidebarThreadKey(conversationId: string) {
  return `${LOCAL_THREAD_KEY_PREFIX}${conversationId}`;
}
function makeRemoteSidebarThreadKey(taskId: string) {
  return `${REMOTE_THREAD_KEY_PREFIX}${taskId}`;
}
function makePendingWorktreeSidebarThreadKey(pendingWorktreeId: string) {
  return `${PENDING_WORKTREE_THREAD_KEY_PREFIX}${pendingWorktreeId}`;
}
function parseSidebarThreadKey(
  key: string | null | undefined,
): SidebarThreadKey | null {
  if (key == null) return null;
  if (key.startsWith(LOCAL_THREAD_KEY_PREFIX)) {
    const conversationId = normalizeConversationId(
      key.slice(LOCAL_THREAD_KEY_PREFIX.length),
    );
    return {
      kind: "local",
      key: makeLocalSidebarThreadKey(conversationId),
      conversationId,
    };
  }
  if (key.startsWith(REMOTE_THREAD_KEY_PREFIX)) {
    const taskId = key.slice(REMOTE_THREAD_KEY_PREFIX.length);
    return {
      kind: "remote",
      key: makeRemoteSidebarThreadKey(taskId),
      taskId,
    };
  }
  if (key.startsWith(PENDING_WORKTREE_THREAD_KEY_PREFIX)) {
    const pendingWorktreeId = key.slice(
      PENDING_WORKTREE_THREAD_KEY_PREFIX.length,
    );
    return {
      kind: "pending-worktree",
      key: makePendingWorktreeSidebarThreadKey(pendingWorktreeId),
      pendingWorktreeId,
    };
  }
  return null;
}
function makeSidebarThreadKey({
  localId,
  remoteId,
  pendingId,
}: {
  localId?: string | null;
  remoteId?: string | null;
  pendingId?: string | null;
}) {
  return localId
    ? makeLocalSidebarThreadKey(normalizeConversationId(localId))
    : remoteId
      ? makeRemoteSidebarThreadKey(remoteId)
      : pendingId
        ? makePendingWorktreeSidebarThreadKey(pendingId)
        : null;
}
function getLocalConversationIdFromSidebarThreadKey(
  key: string | null | undefined,
) {
  const parsed = parseSidebarThreadKey(key);
  return parsed?.kind === "local" ? parsed.conversationId : null;
}
function getSidebarThreadEntityId(key: string | null | undefined) {
  const parsed = parseSidebarThreadKey(key);
  switch (parsed?.kind) {
    case "local":
      return parsed.conversationId;
    case "remote":
      return parsed.taskId;
    case "pending-worktree":
    case undefined:
      return null;
  }
}
function getSidebarThreadRoutePath(key: string | null | undefined) {
  const parsed = parseSidebarThreadKey(key);
  switch (parsed?.kind) {
    case "local":
      return getLocalThreadPath(parsed.conversationId);
    case "remote":
      return getRemoteTaskPath(parsed.taskId);
    case "pending-worktree":
      return getPendingWorktreePath(parsed.pendingWorktreeId);
    case undefined:
      throw Error("Invalid sidebar thread key");
  }
}
function initSidebarThreadKeysRuntimeChunk(): void {}
export {
  initSidebarThreadKeysRuntimeChunk,
  getSidebarThreadEntityId,
  parseSidebarThreadKey,
  getLocalConversationIdFromSidebarThreadKey,
  makePendingWorktreeSidebarThreadKey,
  makeSidebarThreadKey,
  makeRemoteSidebarThreadKey,
  getSidebarThreadRoutePath,
  makeLocalSidebarThreadKey,
};
