// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Mounted signal family that loads source-linked background subagent threads.
import {
  createAppScopedSignalFamily,
  type ScopedSignalGetter,
  type ScopedSignalMountContext,
} from "../runtime/app-scope-runtime";
import {
  conversationAppServerManagerSignal,
  conversationCreatedAtSignal,
  conversationMetaEventSignal,
} from "../runtime/conversation-state-runtime";
import { normalizeConversationId as normalizeConversationIdValue } from "../boundaries/src-l0hb-mz-p";
import { getSubagentSourceMetadata } from "./subagent-source-metadata-runtime";
import type {
  CachedConversation,
  SourceLinkedThread,
} from "./background-agent-types";

export type SourceLinkedSubagentThreadsSignal = {
  readonly __signalFamilyKey?: string | null;
  readonly __signalFamilyValue?: readonly SourceLinkedThread[] | null;
};

type ConversationAppServerManager = {
  getCachedConversations(): readonly CachedConversation[];
  getHostId(): string;
  sendRequest(
    method: string,
    params: Record<string, unknown>,
  ): Promise<ThreadListResponse>;
};
type ThreadListResponse = {
  data?: readonly SourceLinkedThread[];
  nextCursor?: string | null;
};
type WatchableSignalMountContext<TKey> = ScopedSignalMountContext<TKey> & {
  watch(
    callback: (context: {
      get: ScopedSignalGetter["get"];
    }) => void | (() => void),
  ): () => void;
};

export function createSourceLinkedSubagentThreadsSignal(): SourceLinkedSubagentThreadsSignal {
  return createAppScopedSignalFamily<
    string | null,
    readonly SourceLinkedThread[] | null
  >(() => null, {
    onMount: mountSourceLinkedSubagentThreadsSignal,
  }) as SourceLinkedSubagentThreadsSignal;
}

function mountSourceLinkedSubagentThreadsSignal(
  setValue: (value: readonly SourceLinkedThread[] | null) => void,
  context: ScopedSignalMountContext<string | null>,
): void | (() => void) {
  const parentConversationId = context.key;
  if (parentConversationId == null) return;

  const watch = (context as WatchableSignalMountContext<string | null>).watch;
  if (typeof watch !== "function") return;

  let activeRequestVersion = 0;
  let isLoading = false;
  let pendingLoad:
    | (() => Promise<readonly SourceLinkedThread[] | null>)
    | null = null;
  let previousAppServerManager: ConversationAppServerManager | null = null;
  let previousParentCreatedAtMs: number | null = null;

  const flushPendingLoad = async (): Promise<void> => {
    if (isLoading) return;
    isLoading = true;

    try {
      while (pendingLoad != null) {
        const load = pendingLoad;
        const requestVersion = activeRequestVersion;
        pendingLoad = null;

        let threads: readonly SourceLinkedThread[] | null;
        try {
          threads = await load();
        } catch {
          threads = null;
        }

        if (activeRequestVersion === requestVersion) setValue(threads);
      }
    } finally {
      isLoading = false;
      if (pendingLoad != null) void flushPendingLoad();
    }
  };

  return watch(({ get }) => {
    const appServerManager = get<ConversationAppServerManager | null>(
      conversationAppServerManagerSignal,
      parentConversationId,
    );
    const parentCreatedAtMs = readFiniteNumber(
      get(conversationCreatedAtSignal, parentConversationId),
    );
    const metaEvent = get<{ hostId?: string | null } | null>(
      conversationMetaEventSignal,
    );
    const requestChanged =
      appServerManager !== previousAppServerManager ||
      parentCreatedAtMs !== previousParentCreatedAtMs;

    previousAppServerManager = appServerManager;
    previousParentCreatedAtMs = parentCreatedAtMs;

    if (appServerManager == null || parentCreatedAtMs == null) {
      activeRequestVersion += 1;
      pendingLoad = null;
      setValue(null);
      return;
    }

    if (!requestChanged && metaEvent?.hostId !== appServerManager.getHostId()) {
      return;
    }

    const requestVersion = activeRequestVersion + 1;
    activeRequestVersion = requestVersion;
    pendingLoad = () =>
      loadSourceLinkedSubagentThreads({
        appServerManager,
        parentConversationId,
        parentCreatedAtMs,
        shouldContinue: () => activeRequestVersion === requestVersion,
      });
    void flushPendingLoad();
  });
}

async function loadSourceLinkedSubagentThreads({
  appServerManager,
  parentConversationId,
  parentCreatedAtMs,
  shouldContinue,
}: {
  appServerManager: ConversationAppServerManager;
  parentConversationId: string;
  parentCreatedAtMs: number;
  shouldContinue: () => boolean;
}): Promise<readonly SourceLinkedThread[]> {
  const sourceLinkedThreads: SourceLinkedThread[] = [];
  const parentQueue = [parentConversationId];
  const seenConversationIds = new Set(parentQueue);
  const parentCreatedAtSeconds = Math.floor(parentCreatedAtMs / 1000);

  for (const currentParentConversationId of parentQueue) {
    let cursor: string | null = null;

    for (;;) {
      if (!shouldContinue()) return sourceLinkedThreads;

      const response = await appServerManager.sendRequest("thread/list", {
        archived: false,
        cursor,
        limit: 200,
        modelProviders: null,
        parentThreadId: currentParentConversationId,
        sortDirection: "desc",
        sortKey: "created_at",
        sourceKinds: ["subAgentThreadSpawn"],
        useStateDbOnly: true,
      });
      const threads = Array.isArray(response.data) ? response.data : [];

      for (const thread of threads) {
        const threadParentConversationId = readSourceThreadParentId(thread);
        const conversationId = normalizeConversationIdValue(thread.id);

        if (
          threadParentConversationId === currentParentConversationId &&
          !seenConversationIds.has(conversationId)
        ) {
          sourceLinkedThreads.push(thread);
          seenConversationIds.add(conversationId);
          parentQueue.push(conversationId);
        }
      }

      if (
        response.nextCursor == null ||
        threads.some(
          (thread) =>
            readThreadCreatedAtSeconds(thread) < parentCreatedAtSeconds,
        )
      ) {
        break;
      }

      cursor = response.nextCursor;
    }
  }

  return sourceLinkedThreads;
}

function readSourceThreadParentId(thread: SourceLinkedThread): string | null {
  const parentThreadId = readString(
    (thread as SourceLinkedThread & { parentThreadId?: unknown })
      .parentThreadId,
  );
  return parentThreadId == null
    ? (getSubagentSourceMetadata(thread.source)?.parentThreadId ?? null)
    : normalizeConversationIdValue(parentThreadId);
}

function readThreadCreatedAtSeconds(thread: SourceLinkedThread): number {
  const createdAt = Number(thread.createdAt);
  return Number.isFinite(createdAt) ? createdAt : Number.POSITIVE_INFINITY;
}

function readFiniteNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function readString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}
