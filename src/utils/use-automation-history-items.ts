// Restored from ref/webview/assets/use-automation-history-items-B6uja7Kv.js
// Updated against ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
import React from "react";
import { _appScopeS, _appScopeT } from "../boundaries/app-scope";
import {
  _vscodeApiA,
  vscodeApiA,
  vscodeApiF,
  vscodeApiR,
  vscodeApiU,
} from "../boundaries/vscode-api";
type AutomationHistoryItem = {
  automationId?: string | null;
  id: string;
  readAt: number | null;
  status?: string;
  threadId?: string | null;
  [key: string]: any;
};
type AutomationHistoryData = {
  items: AutomationHistoryItem[];
  unreadRunCounts?: {
    automationIds: any[];
    total: number;
    unreadRuns?: Array<{
      automationId: string;
      threadId: string;
    }>;
    [key: string]: any;
  };
  [key: string]: any;
};
type AutomationHistoryQueryResult = {
  data?: AutomationHistoryData;
  isLoading: boolean;
};
const inboxItemsParams = {
  limit: 200,
};
const inboxItemsQueryKey = vscodeApiR("inbox-items", inboxItemsParams);
const inboxItemsQuery = _vscodeApiA(_appScopeT, "inbox-items", {
  enabled: true,
  params: inboxItemsParams,
  refetchInterval: vscodeApiU.ONE_MINUTE,
  staleTime: vscodeApiU.ONE_MINUTE,
});

function isUnreadAutomationRunStatus(status: string | undefined): boolean {
  return status === "PENDING_REVIEW" || status === "ACCEPTED";
}

function updateAutomationItemReadState(
  data: AutomationHistoryData,
  id: string,
  isRead: boolean,
  readAt = Date.now(),
): AutomationHistoryData {
  const item = data.items.find((item) => item.id === id);
  if (item == null || (item.readAt != null) === isRead) return data;

  let unreadRunCounts = data.unreadRunCounts;
  if (
    item.automationId != null &&
    item.threadId != null &&
    isUnreadAutomationRunStatus(item.status)
  ) {
    const previousUnreadRuns = unreadRunCounts?.unreadRuns ?? [];
    const unreadRuns = isRead
      ? previousUnreadRuns.filter((run) => run.threadId !== item.threadId)
      : [
          ...previousUnreadRuns.filter((run) => run.threadId !== item.threadId),
          {
            automationId: item.automationId,
            threadId: item.threadId,
          },
        ];

    unreadRunCounts = {
      ...unreadRunCounts,
      total: unreadRuns.length,
      automationIds: [...new Set(unreadRuns.map((run) => run.automationId))],
      unreadRuns,
    };
  }

  return {
    ...data,
    items: data.items.map((candidate) =>
      candidate === item
        ? {
            ...candidate,
            readAt: isRead ? readAt : null,
          }
        : candidate,
    ),
    unreadRunCounts,
  };
}

export function useAutomationHistoryItems() {
  const queryClient = vscodeApiA();
  const inboxItemsResult = _appScopeS(
    inboxItemsQuery,
  ) as AutomationHistoryQueryResult;
  const markRead = React.useCallback(
    (id: string) => {
      queryClient.setQueryData(
        inboxItemsQueryKey,
        (data: AutomationHistoryData | undefined) =>
          data == null ? data : updateAutomationItemReadState(data, id, true),
      );
      vscodeApiF.dispatchMessage("inbox-item-set-read-state", {
        id,
        isRead: true,
      });
    },
    [queryClient],
  );
  const markUnread = React.useCallback(
    (id: string) => {
      queryClient.setQueryData(
        inboxItemsQueryKey,
        (data: AutomationHistoryData | undefined) =>
          data == null ? data : updateAutomationItemReadState(data, id, false),
      );
      vscodeApiF.dispatchMessage("inbox-item-set-read-state", {
        id,
        isRead: false,
      });
    },
    [queryClient],
  );
  const markAllRead = React.useCallback(() => {
    const readAt = Date.now();
    queryClient.setQueryData(
      inboxItemsQueryKey,
      (data: AutomationHistoryData | undefined) =>
        data == null
          ? data
          : {
              ...data,
              items: data.items.map((item) =>
                item.readAt == null &&
                (item.status === "PENDING_REVIEW" ||
                  item.status === "ACCEPTED" ||
                  item.status === "ARCHIVED")
                  ? {
                      ...item,
                      readAt,
                    }
                  : item,
              ),
              unreadRunCounts: {
                total: 0,
                automationIds: [],
                unreadRuns: [],
              },
            },
    );
    vscodeApiF.dispatchMessage("inbox-automation-runs-mark-all-read", {
      readAt,
    });
  }, [queryClient]);
  return {
    items: inboxItemsResult.data?.items ?? [],
    isLoading: inboxItemsResult.isLoading,
    markAllRead,
    markRead,
    markUnread,
    unreadRunCounts: inboxItemsResult.data?.unreadRunCounts,
  };
}

export const useAutomationItems = useAutomationHistoryItems;

export function initAutomationHistoryItemsChunk(): void {}
