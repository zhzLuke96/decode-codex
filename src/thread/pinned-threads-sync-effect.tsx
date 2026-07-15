// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Keeps the host's pinned-thread list in sync with the local pinned-threads
// query, and hydrates pinned thread contents once recent conversations load.
import { useEffect, useEffectEvent } from "react";
import {
  LOCAL_HOST_ID,
  useAtomValue,
} from "../boundaries/onboarding-commons-externals.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { pullRequestNewThreadCompatSlotUpperD as useRecentConversationsQuery } from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import { pinnedThreadsQuery as pinnedThreadsForHostQueryAtom } from "../utils/pinned-threads-query";

interface PinnedThreadsQueryResult {
  data?: { threadIds?: string[] } | null;
  isFetched: boolean;
}

export function PinnedThreadsSyncEffect(): null {
  const { isFetched: recentConversationsFetched } =
    useRecentConversationsQuery() as { isFetched: boolean };
  const { data: pinnedThreadsData, isFetched: pinnedThreadsFetched } =
    useAtomValue(pinnedThreadsForHostQueryAtom) as PinnedThreadsQueryResult;
  const pinnedThreadIds = pinnedThreadsData?.threadIds;
  const pinnedThreadIdsKey =
    pinnedThreadIds == null ? null : [...pinnedThreadIds].sort().join("|");

  const pushPinnedThreadIds = useEffectEvent(() => {
    if (pinnedThreadIds != null) {
      void sendAppServerRequest("set-pinned-thread-ids-for-host", {
        hostId: LOCAL_HOST_ID,
        threadIds: pinnedThreadIds,
      });
    }
  });
  const hydratePinnedThreads = useEffectEvent(async () => {
    if (pinnedThreadIds != null) {
      await sendAppServerRequest("hydrate-pinned-threads", {
        hostId: LOCAL_HOST_ID,
        threadIds: pinnedThreadIds,
      });
    }
  });

  useEffect(() => {
    if (!pinnedThreadsFetched || pinnedThreadIds == null) return;
    pushPinnedThreadIds();
    if (
      recentConversationsFetched &&
      pinnedThreadIdsKey != null &&
      pinnedThreadIdsKey !== ""
    ) {
      void hydratePinnedThreads();
    }
  }, [
    pinnedThreadsFetched,
    recentConversationsFetched,
    pinnedThreadIdsKey,
    pinnedThreadIds,
  ]);
  return null;
}
