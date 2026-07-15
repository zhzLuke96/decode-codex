// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-BgNrphm6.js
// Manual, timestamp, and attention-based ordering for flat project sidebar rows.
import type {
  SidebarAttentionState,
  SidebarTask,
  SidebarThreadKey,
  SidebarThreadOrder,
} from "./types";

export function applySidebarChatOrder({
  order,
  tasks,
}: {
  order: SidebarThreadOrder | null | undefined;
  tasks: readonly SidebarTask[];
}): SidebarTask[] {
  if (order == null) return [...tasks];
  const normalizedOrder =
    order.sortKey == null ? order : buildTimestampOrder(tasks, order.sortKey);
  const tasksByThreadId = groupTasksByThreadId(tasks);
  const orderedIds = filterKnownOrder(
    normalizedOrder.threadIds,
    tasksByThreadId,
  );
  const orderedIdSet = new Set(orderedIds);
  const emittedIds = new Set<string>();
  const result: SidebarTask[] = [];
  let orderedIndex = 0;

  for (const task of tasks) {
    const threadId = getTaskThreadId(task);
    if (threadId == null || !orderedIdSet.has(threadId)) {
      result.push(task);
      continue;
    }
    if (emittedIds.has(threadId)) continue;
    emittedIds.add(threadId);
    const orderedId = orderedIds[orderedIndex];
    orderedIndex += 1;
    if (orderedId != null) {
      result.push(...(tasksByThreadId.get(orderedId) ?? []));
    }
  }

  return result;
}

export function deriveNextSidebarChatOrder({
  nextVisibleThreadIds,
  order,
  tasks,
}: {
  nextVisibleThreadIds?: readonly SidebarThreadKey[];
  order: SidebarThreadOrder | null | undefined;
  tasks: readonly SidebarTask[];
  visibleThreadIds?: readonly SidebarThreadKey[];
}): SidebarThreadOrder {
  const baseOrder =
    order == null
      ? { threadIds: collectTaskThreadIds(tasks) }
      : order.sortKey == null
        ? reconcileSidebarChatOrder({ order, tasks })
        : buildTimestampOrder(tasks, order.sortKey);
  return {
    threadIds: mergeVisibleThreadOrder({
      nextVisibleThreadIds,
      threadIds: baseOrder.threadIds,
    }),
  };
}

export function moveThreadInSidebarChatOrder({
  beforeThreadId,
  order,
  tasks,
  threadId,
}: {
  beforeThreadId?: SidebarThreadKey | null;
  order: SidebarThreadOrder | null | undefined;
  tasks: readonly SidebarTask[];
  threadId: SidebarThreadKey;
}): SidebarThreadOrder {
  const currentIds =
    order == null
      ? collectTaskThreadIds(tasks)
      : reconcileSidebarChatOrder({ order, tasks }).threadIds;
  const withoutThread = currentIds.filter((id) => id !== threadId);
  const insertionIndex =
    beforeThreadId == null ? 0 : withoutThread.indexOf(beforeThreadId);
  const targetIndex =
    insertionIndex === -1 ? withoutThread.length : insertionIndex;
  const nextThreadIds = [
    ...withoutThread.slice(0, targetIndex),
    threadId,
    ...withoutThread.slice(targetIndex),
  ];
  return arraysEqual(currentIds, nextThreadIds)
    ? { threadIds: currentIds }
    : { threadIds: nextThreadIds };
}

export function sortSidebarItemsByAttention<
  TItem extends {
    attentionState: SidebarAttentionState;
    recencyAt: number;
  },
>(items: readonly TItem[]): TItem[] {
  const rank: Record<SidebarAttentionState, number> = {
    active: 2,
    idle: 3,
    unread: 1,
    waiting: 0,
  };
  return [...items].sort(
    (left, right) =>
      rank[left.attentionState] - rank[right.attentionState] ||
      right.recencyAt - left.recencyAt,
  );
}

export function initSidebarChatOrderRuntimeChunk(): void {}

export function initAttentionSortRuntimeChunk(): void {}

export function initSidebarAttentionOrderChunk(): void {}

function reconcileSidebarChatOrder({
  order,
  tasks,
}: {
  order: SidebarThreadOrder;
  tasks: readonly SidebarTask[];
}): SidebarThreadOrder {
  const nextThreadIds = appendMissingThreadIds(
    order.threadIds,
    collectTaskThreadIds(tasks),
  );
  return nextThreadIds === order.threadIds
    ? order
    : { threadIds: nextThreadIds };
}

function buildTimestampOrder(
  tasks: readonly SidebarTask[],
  sortKey: "created_at" | "updated_at",
): SidebarThreadOrder {
  return {
    threadIds: collectTaskThreadIds(
      tasks
        .flatMap((task, index) => {
          const threadId = getTaskThreadId(task);
          return threadId == null
            ? []
            : [{ index, task, timestamp: getTaskTimestamp(task, sortKey) }];
        })
        .sort(
          (left, right) =>
            right.timestamp - left.timestamp || left.index - right.index,
        )
        .map(({ task }) => task),
    ),
  };
}

function groupTasksByThreadId(
  tasks: readonly SidebarTask[],
): Map<SidebarThreadKey, SidebarTask[]> {
  const tasksByThreadId = new Map<SidebarThreadKey, SidebarTask[]>();
  for (const task of tasks) {
    const threadId = getTaskThreadId(task);
    if (threadId == null) continue;
    const group = tasksByThreadId.get(threadId);
    if (group == null) {
      tasksByThreadId.set(threadId, [task]);
    } else {
      group.push(task);
    }
  }
  return tasksByThreadId;
}

function collectTaskThreadIds(
  tasks: readonly SidebarTask[],
): SidebarThreadKey[] {
  const threadIds: SidebarThreadKey[] = [];
  const seenThreadIds = new Set<SidebarThreadKey>();
  for (const task of tasks) {
    const threadId = getTaskThreadId(task);
    if (threadId == null || seenThreadIds.has(threadId)) continue;
    seenThreadIds.add(threadId);
    threadIds.push(threadId);
  }
  return threadIds;
}

function getTaskThreadId(task: SidebarTask): SidebarThreadKey | null {
  switch (task.kind) {
    case "local":
      return task.conversation.id;
    case "remote":
      return task.task.id;
    case "pending-worktree":
      return null;
  }
}

function getTaskTimestamp(
  task: SidebarTask,
  sortKey: "created_at" | "updated_at",
): number {
  switch (task.kind) {
    case "local":
      return sortKey === "updated_at"
        ? (task.conversation.recencyAt ?? task.conversation.updatedAt)
        : task.conversation.createdAt;
    case "remote":
      return (
        ((sortKey === "updated_at"
          ? (task.task.updated_at ?? task.task.created_at)
          : (task.task.created_at ?? task.task.updated_at)) ?? 0) * 1000
      );
    case "pending-worktree":
      return 0;
  }
}

function appendMissingThreadIds(
  orderedThreadIds: readonly SidebarThreadKey[],
  visibleThreadIds: readonly SidebarThreadKey[],
): readonly SidebarThreadKey[] {
  const orderedSet = new Set(orderedThreadIds);
  const missingThreadIds = visibleThreadIds.filter(
    (threadId) => !orderedSet.has(threadId),
  );
  return missingThreadIds.length === 0
    ? orderedThreadIds
    : [...orderedThreadIds, ...missingThreadIds];
}

function filterKnownOrder(
  threadIds: readonly SidebarThreadKey[],
  knownTasksByThreadId: ReadonlyMap<SidebarThreadKey, readonly SidebarTask[]>,
): SidebarThreadKey[] {
  const seenThreadIds = new Set<SidebarThreadKey>();
  return threadIds.filter((threadId) => {
    if (!knownTasksByThreadId.has(threadId) || seenThreadIds.has(threadId)) {
      return false;
    }
    seenThreadIds.add(threadId);
    return true;
  });
}

function mergeVisibleThreadOrder({
  nextVisibleThreadIds,
  threadIds,
}: {
  nextVisibleThreadIds?: readonly SidebarThreadKey[];
  threadIds: readonly SidebarThreadKey[];
}): SidebarThreadKey[] {
  if (nextVisibleThreadIds == null) return [...threadIds];
  const nextVisibleSet = new Set(nextVisibleThreadIds);
  return [
    ...threadIds.filter((threadId) => nextVisibleSet.has(threadId)),
    ...nextVisibleThreadIds.filter((threadId) => !threadIds.includes(threadId)),
  ];
}

function arraysEqual<TValue>(
  left: readonly TValue[],
  right: readonly TValue[],
): boolean {
  return (
    left.length === right.length &&
    left.every((value, index) => value === right[index])
  );
}
