// Restored from ref/webview/assets/thread-actions-DctPk86-.js
// thread-actions-DctPk86- chunk restored from the Codex webview bundle.
import {
  getSidebarThreadEntityId,
  parseSidebarThreadKey,
} from "../sidebar-thread-keys";
import type {
  PendingVisibleThreadOrder,
  ThreadMoveTarget,
  ThreadTaskLike,
} from "./types";
export function getSidebarThreadEntityIds(
  sidebarThreadKeys: readonly (string | null | undefined)[],
): string[] {
  return sidebarThreadKeys.flatMap((threadKey) => {
    const entityId = getSidebarThreadEntityId(threadKey);
    return entityId == null ? [] : [entityId];
  });
}
export function getResolvedVisibleThreadOrder({
  visibleThreadKeys,
  pendingVisibleThreadOrder,
}: {
  pendingVisibleThreadOrder?: PendingVisibleThreadOrder | null;
  visibleThreadKeys: string[];
}): string[] {
  return pendingVisibleThreadOrder == null ||
    !areThreadKeyArraysEqual(
      pendingVisibleThreadOrder.previousVisibleThreadKeys,
      visibleThreadKeys,
    ) ||
    !hasSameThreadKeySet(
      pendingVisibleThreadOrder.nextVisibleThreadKeys,
      visibleThreadKeys,
    )
    ? visibleThreadKeys
    : pendingVisibleThreadOrder.nextVisibleThreadKeys;
}
export function areThreadKeyArraysEqual(
  leftThreadKeys: readonly string[],
  rightThreadKeys: readonly string[],
): boolean {
  return leftThreadKeys.length === rightThreadKeys.length
    ? leftThreadKeys.every(
        (threadKey, index) => threadKey === rightThreadKeys[index],
      )
    : false;
}
export function getThreadTaskKeys<TThread extends ThreadTaskLike>(
  threads: readonly TThread[],
): string[] {
  return threads.flatMap((thread) =>
    thread.task.kind === "pending-worktree" ? [] : [thread.task.key],
  );
}
export function getSidebarThreadKeyFromValue(value: unknown): string | null {
  const parsedThreadKey = parseSidebarThreadKey(String(value));
  switch (parsedThreadKey?.kind) {
    case "local":
    case "remote":
    case "pending-worktree":
      return parsedThreadKey.key;
    case undefined:
      return null;
  }
}
export function mergeVisibleThreadIdsIntoThreadOrder({
  threadIds,
  visibleThreadIds,
  nextVisibleThreadIds,
}: {
  nextVisibleThreadIds: string[];
  threadIds: string[];
  visibleThreadIds: string[];
}): string[] {
  const visibleThreadIdSet = new Set(visibleThreadIds);
  let nextVisibleThreadIndex = 0;
  const mergedThreadIds: string[] = [];
  for (const threadId of threadIds) {
    if (!visibleThreadIdSet.has(threadId)) {
      mergedThreadIds.push(threadId);
      continue;
    }
    const nextVisibleThreadId = nextVisibleThreadIds[nextVisibleThreadIndex];
    if (nextVisibleThreadId != null) mergedThreadIds.push(nextVisibleThreadId);
    nextVisibleThreadIndex += 1;
  }
  return mergedThreadIds;
}
export function sortThreadTasksByPinnedOrder<TThread extends ThreadTaskLike>(
  threads: readonly TThread[],
  pinnedThreadKeys: readonly string[],
): TThread[] {
  const pinnedOrderByThreadKey = new Map(
    pinnedThreadKeys.map((threadKey, index) => [threadKey, index]),
  );
  const getSortIndex = (thread: TThread, fallbackIndex: number) => {
    const threadKey = getSortableThreadTaskKey(thread);
    return threadKey == null
      ? fallbackIndex
      : (pinnedOrderByThreadKey.get(threadKey) ?? fallbackIndex);
  };
  return threads
    .map((thread, index) => [thread, index] as const)
    .sort(
      ([leftThread, leftIndex], [rightThread, rightIndex]) =>
        getSortIndex(leftThread, leftIndex) -
          getSortIndex(rightThread, rightIndex) || leftIndex - rightIndex,
    )
    .map(([thread]) => thread);
}
export function getThreadMoveTarget({
  visibleThreadKeys,
  activeThreadKey,
  overThreadKey,
}: {
  activeThreadKey?: string | null;
  overThreadKey?: string | null;
  visibleThreadKeys: string[];
}): ThreadMoveTarget | null {
  if (
    activeThreadKey == null ||
    overThreadKey == null ||
    activeThreadKey === overThreadKey
  ) {
    return null;
  }
  const activeThreadIndex = visibleThreadKeys.indexOf(activeThreadKey);
  const overThreadIndex = visibleThreadKeys.indexOf(overThreadKey);
  return activeThreadIndex === -1 || overThreadIndex === -1
    ? null
    : {
        beforeThreadKey:
          visibleThreadKeys[
            activeThreadIndex < overThreadIndex
              ? overThreadIndex + 1
              : overThreadIndex
          ] ?? null,
      };
}
function hasSameThreadKeySet(
  leftThreadKeys: readonly string[],
  rightThreadKeys: readonly string[],
): boolean {
  if (leftThreadKeys.length !== rightThreadKeys.length) return false;
  const rightThreadKeySet = new Set(rightThreadKeys);
  return leftThreadKeys.every((threadKey) => rightThreadKeySet.has(threadKey));
}
function getSortableThreadTaskKey(thread: ThreadTaskLike): string | null {
  return thread.task.kind === "pending-worktree" ? null : thread.task.key;
}
