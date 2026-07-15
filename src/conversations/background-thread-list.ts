// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lists recent background threads across connected thread managers.
import { hostConnectionStatusSignal } from "../composer/local-conversation-composer-bridge";
import { parseConversationId } from "../runtime/thread-delegation-runtime";
import {
  threadManagerListSignal,
  type BackgroundThreadAppScope,
  type BackgroundThreadManager,
  type ListedBackgroundThread,
} from "./background-thread-types";

function getConnectedThreadManagers(
  scope: BackgroundThreadAppScope,
): BackgroundThreadManager[] {
  return (
    (scope.get(threadManagerListSignal) as BackgroundThreadManager[] | null) ??
    []
  ).filter((manager) => {
    const hostId = manager.getHostId();
    return (
      hostId === "local" ||
      scope.get(hostConnectionStatusSignal, hostId) === "connected"
    );
  });
}

function hasUnreadTurn(
  manager: BackgroundThreadManager,
  threadId: string,
): boolean {
  const conversationId = parseConversationId(threadId);
  return (
    manager.getConversation?.(conversationId)?.hasUnreadTurn ??
    manager
      .getThreadSummaries?.()
      .find((summary) => summary.conversationId === conversationId)
      ?.hasUnreadTurn ??
    false
  );
}

async function listThreadsForManager(
  manager: BackgroundThreadManager,
): Promise<{
  threads: ListedBackgroundThread[];
  unavailableHost?: { hostId: string; reason: string };
}> {
  try {
    return {
      threads: (await manager.listAllThreads({ modelProviders: null })).map(
        (thread) => ({
          hasUnreadTurn: hasUnreadTurn(manager, thread.id),
          hostId: manager.getHostId(),
          thread,
        }),
      ),
    };
  } catch {
    return {
      threads: [],
      unavailableHost: {
        hostId: manager.getHostId(),
        reason: "thread_list_unavailable",
      },
    };
  }
}

function scoreText(value: string | null | undefined, query: string): number {
  const normalized = value?.toLowerCase() ?? "";
  const needle = query.toLowerCase();
  if (needle.length === 0) return 0;
  const index = normalized.indexOf(needle);
  if (index === 0) return 3;
  if (index > 0) return 2;
  return normalized.split(/\s+/).some((part) => part.startsWith(needle))
    ? 1
    : 0;
}

function filterAndSortThreads(
  threads: ListedBackgroundThread[],
  query: string,
  limit: number,
): ListedBackgroundThread[] {
  if (query.length === 0) {
    return [...threads]
      .sort(
        (left, right) =>
          (right.thread.recencyAt ?? right.thread.updatedAt) -
          (left.thread.recencyAt ?? left.thread.updatedAt),
      )
      .slice(0, limit);
  }

  return threads
    .map((entry) => {
      const titleScore = scoreText(
        entry.thread.name?.trim() || entry.thread.preview,
        query,
      );
      const branchScore = scoreText(entry.thread.branch, query);
      const cwdScore = scoreText(entry.thread.cwd, query);
      return {
        entry,
        score: Math.max(titleScore * 3, branchScore * 2, cwdScore),
      };
    })
    .filter(({ score }) => score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        (right.entry.thread.recencyAt ?? right.entry.thread.updatedAt) -
          (left.entry.thread.recencyAt ?? left.entry.thread.updatedAt),
    )
    .slice(0, limit)
    .map(({ entry }) => entry);
}

function serializeThreadSummary({
  hasUnreadTurn,
  hostId,
  thread,
}: ListedBackgroundThread) {
  const title = thread.name?.trim() || thread.preview.trim() || thread.id;
  return {
    id: thread.id,
    hostId,
    title,
    preview: thread.preview,
    status: thread.status.type,
    hasUnreadTurn,
    cwd: thread.cwd,
    createdAt: thread.createdAt,
    updatedAt: thread.updatedAt,
  };
}

export async function listBackgroundThreads({
  scope,
  limit,
  query,
}: {
  scope: BackgroundThreadAppScope;
  limit: number;
  query?: string | null;
}) {
  const normalizedQuery = query?.trim() ?? "";
  const pages = await Promise.all(
    getConnectedThreadManagers(scope).map(listThreadsForManager),
  );
  const threads = pages.flatMap((page) => page.threads);
  const unavailableHosts = pages.flatMap((page) =>
    page.unavailableHost == null ? [] : [page.unavailableHost],
  );
  return {
    schemaVersion: 1,
    query: normalizedQuery.length > 0 ? normalizedQuery : null,
    threads: filterAndSortThreads(threads, normalizedQuery, limit).map(
      serializeThreadSummary,
    ),
    unavailableHosts,
  };
}
