// Restored from ref/webview/assets/app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js
// Workspace announcement and headline messages fetched for home ambient suggestions.
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useAuth } from "../../auth/use-auth";
import { codexRequest } from "../../runtime/request";
import { useStatsigGate } from "../../runtime/feature-gate-runtime";
import {
  getWorkspaceMessageLastSeenAt,
  markWorkspaceMessageSeenAt,
} from "../../utils/announcement-atoms";
import { useIsHomeAmbientSuggestionsRoute } from "./routes";
import { useWorkspaceMessageLastSeenByAccount } from "./state";

const WORKSPACE_MESSAGES_GATE = "4285716042";
const WORKSPACE_MESSAGES_QUERY_KEY = "codex-workspace-messages";
const WORKSPACE_MESSAGES_REFETCH_INTERVAL_MS = 10_000;
const WORKSPACE_MESSAGES_STALE_TIME_MS = 60_000;

export type WorkspaceMessage = {
  created_at: number;
  message_id: string;
  message_type: "announcement" | "headline" | string;
  [key: string]: unknown;
};

export type WorkspaceMessagesResponse = {
  messages: WorkspaceMessage[];
};

export type WorkspaceAnnouncementState = {
  announcement: { message: WorkspaceMessage } | null;
  dismissAnnouncement: () => void;
  isLoading: boolean;
};

export type WorkspaceHeadlineState = {
  headline: WorkspaceMessage | null;
};

type WorkspaceMessageAuth = ReturnType<typeof useAuth> & {
  accountId?: string | null;
  authMethod?: string | null;
  isLoading?: boolean;
};

const dismissedWorkspaceMessageIdsByAccount = new Map<string, Set<string>>();

export function useWorkspaceAnnouncement(): WorkspaceAnnouncementState {
  const { accountId, data, isLoading, shouldFetch } =
    useWorkspaceMessagesQuery();
  const [dismissRevision, setDismissRevision] = React.useState(0);
  const [lastSeenByAccount, setLastSeenByAccount] =
    useWorkspaceMessageLastSeenByAccount();
  const dismissedMessageIds = getDismissedWorkspaceMessageIds(
    accountId,
    dismissRevision,
  );
  const lastSeenAt = getWorkspaceMessageLastSeenAt(
    lastSeenByAccount ?? {},
    accountId,
  );
  const announcement = shouldFetch
    ? getWorkspaceAnnouncementMessage(data, dismissedMessageIds, lastSeenAt)
    : null;
  const dismissAnnouncement = React.useCallback(() => {
    if (announcement == null || accountId == null) return;
    markWorkspaceMessageDismissed(accountId, announcement);
    setLastSeenByAccount((current) =>
      markWorkspaceMessageSeenAt(
        current ?? {},
        accountId,
        announcement.message.created_at,
      ),
    );
    setDismissRevision((revision) => revision + 1);
  }, [accountId, announcement, setLastSeenByAccount]);

  return React.useMemo(
    () => ({
      announcement,
      dismissAnnouncement,
      isLoading,
    }),
    [announcement, dismissAnnouncement, isLoading],
  );
}

export function useWorkspaceHeadline(): WorkspaceHeadlineState {
  const { data, shouldFetch } = useWorkspaceMessagesQuery();
  const headline = shouldFetch ? getWorkspaceHeadlineMessage(data) : null;

  return React.useMemo(() => ({ headline }), [headline]);
}

export function initWorkspaceMessagesQueryChunk(): void {}

function useWorkspaceMessagesQuery(): {
  accountId: string | null;
  data: WorkspaceMessagesResponse | undefined;
  isLoading: boolean;
  shouldFetch: boolean;
} {
  const {
    accountId = null,
    authMethod,
    isLoading: authIsLoading,
  } = useAuth() as WorkspaceMessageAuth;
  const isHomeRoute = useIsHomeAmbientSuggestionsRoute();
  const isWorkspaceMessagesEnabled = useStatsigGate(WORKSPACE_MESSAGES_GATE);
  const shouldFetch =
    isWorkspaceMessagesEnabled &&
    isHomeRoute &&
    !authIsLoading &&
    authMethod === "chatgpt" &&
    accountId != null;
  const query = useQuery<WorkspaceMessagesResponse>({
    queryKey: [WORKSPACE_MESSAGES_QUERY_KEY, accountId],
    enabled: shouldFetch,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    refetchInterval: WORKSPACE_MESSAGES_REFETCH_INTERVAL_MS,
    refetchIntervalInBackground: true,
    staleTime: WORKSPACE_MESSAGES_STALE_TIME_MS,
    queryFn: fetchWorkspaceMessages,
  });

  return {
    accountId,
    data: query.data,
    isLoading: shouldFetch && query.isLoading,
    shouldFetch,
  };
}

async function fetchWorkspaceMessages(): Promise<WorkspaceMessagesResponse> {
  return (await codexRequest.safeGet("/wham/workspace-messages", {
    additionalHeaders: {
      "Cache-Control": "no-store",
    },
  })) as WorkspaceMessagesResponse;
}

function getWorkspaceAnnouncementMessage(
  data: WorkspaceMessagesResponse | null | undefined,
  dismissedMessageIds: ReadonlySet<string>,
  lastSeenAt: number | null,
): { message: WorkspaceMessage } | null {
  if (data == null) return null;
  const message =
    data.messages.find(
      (candidate) =>
        candidate.message_type === "announcement" &&
        !dismissedMessageIds.has(candidate.message_id) &&
        isWorkspaceMessageNewerThan(candidate, lastSeenAt),
    ) ?? null;

  return message == null ? null : { message };
}

function getWorkspaceHeadlineMessage(
  data: WorkspaceMessagesResponse | null | undefined,
): WorkspaceMessage | null {
  return (
    data?.messages.find((message) => message.message_type === "headline") ??
    null
  );
}

function isWorkspaceMessageNewerThan(
  message: WorkspaceMessage,
  lastSeenAt: number | null,
): boolean {
  return lastSeenAt == null || message.created_at > lastSeenAt;
}

function getDismissedWorkspaceMessageIds(
  accountId: string | null,
  _revision: number,
): ReadonlySet<string> {
  return accountId == null
    ? new Set<string>()
    : (dismissedWorkspaceMessageIdsByAccount.get(accountId) ?? new Set());
}

function markWorkspaceMessageDismissed(
  accountId: string,
  announcement: { message: WorkspaceMessage },
): void {
  const current = dismissedWorkspaceMessageIdsByAccount.get(accountId);
  const next = new Set(current ?? []);
  next.add(announcement.message.message_id);
  dismissedWorkspaceMessageIdsByAccount.set(accountId, next);
}
