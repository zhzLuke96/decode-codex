// Restored from ref/webview/assets/thread-actions-DctPk86-.js
// thread-actions-DctPk86- chunk restored from the Codex webview bundle.
import { useCallback, useMemo } from "react";
import {
  appScopeO as useAppScope,
  appScopeRoot,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import { vscodeApiH as vscodeLogger } from "../../boundaries/vscode-api";
import {
  formatUnknownError,
  moveThreadIdBefore,
} from "../../boundaries/src-l0hb-mz-p";
import { pinnedThreadsQuery } from "../../utils/pinned-threads-query";
import { setPinnedThread } from "../../utils/set-pinned-thread";
import { areThreadKeyArraysEqual } from "./ordering";
import type { AppScopeLike, UsePinnedThreadStateOptions } from "./types";
export function usePinnedThreadState(
  threadId?: string | null,
  { canPin = true }: UsePinnedThreadStateOptions = {},
) {
  const scope = useAppScope(appScopeRoot);
  const { data } = useAppScopeValue(pinnedThreadsQuery);
  const pinnedThreadIds = data?.threadIds ?? [];
  const isPinned =
    canPin && threadId != null && pinnedThreadIds.includes(threadId);
  const togglePin = useCallback(() => {
    if (!canPin || threadId == null) return;
    void setPinnedThreadOptimistically(scope, threadId, !isPinned);
  }, [canPin, isPinned, scope, threadId]);
  return useMemo(
    () => ({
      isPinned,
      togglePin,
    }),
    [isPinned, togglePin],
  );
}
export async function setPinnedThreadOptimistically(
  scope: AppScopeLike,
  threadId: string,
  pinned: boolean,
  beforeThreadId?: string | null,
) {
  const pinnedThreadsSnapshot = scope.query.snapshot(pinnedThreadsQuery);
  const previousPinnedThreads = pinnedThreadsSnapshot.getData();
  const optimisticPinnedThreads =
    previousPinnedThreads == null
      ? null
      : {
          threadIds: pinned
            ? moveThreadIdBefore({
                threadIds: previousPinnedThreads.threadIds,
                threadId,
                beforeThreadId: beforeThreadId ?? null,
              })
            : previousPinnedThreads.threadIds.filter(
                (currentThreadId: string) => currentThreadId !== threadId,
              ),
        };
  if (optimisticPinnedThreads != null) {
    pinnedThreadsSnapshot.setData(optimisticPinnedThreads);
  }
  try {
    if (beforeThreadId === undefined) {
      await setPinnedThread(threadId, pinned);
    } else {
      await setPinnedThread(threadId, pinned, beforeThreadId);
    }
  } catch (error) {
    const currentPinnedThreads = pinnedThreadsSnapshot.getData();
    if (
      optimisticPinnedThreads != null &&
      currentPinnedThreads != null &&
      areThreadKeyArraysEqual(
        currentPinnedThreads.threadIds,
        optimisticPinnedThreads.threadIds,
      )
    ) {
      pinnedThreadsSnapshot.setData(previousPinnedThreads);
    }
    vscodeLogger.error("Failed to update sidebar thread membership", {
      safe: {},
      sensitive: {
        error: formatUnknownError(error),
      },
    });
  }
}
export function initThreadPinningRuntimeChunk(): void {}
