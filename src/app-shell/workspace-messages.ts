// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// ChatGPT workspace-message headline query used by the Electron app shell.
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../auth/use-auth";
import { codexRequest } from "../runtime/request";
import { useStatsigGate } from "../runtime/feature-gate-runtime";
import { matchPath, useLocation } from "../vendor/react-router";

const WORKSPACE_MESSAGES_GATE = "4285716042";
const WORKSPACE_MESSAGES_QUERY_KEY = "codex-workspace-messages";
const WORKSPACE_MESSAGES_REFETCH_INTERVAL_MS = 10_000;
const WORKSPACE_MESSAGES_STALE_TIME_MS = 60_000;
const WORKSPACE_MESSAGE_ROUTE_PATTERNS = ["/", "/local/:conversationId"];

export type WorkspaceMessage = {
  message_type: string;
  [key: string]: unknown;
};

export type WorkspaceMessagesResponse = {
  messages: WorkspaceMessage[];
};

type WorkspaceMessageAuth = ReturnType<typeof useAuth> & {
  accountId?: string | null;
};

export type WorkspaceMessagesHeadlineState = {
  headline: WorkspaceMessage | null;
};

export function useWorkspaceMessagesHeadline(): WorkspaceMessagesHeadlineState {
  const { accountId, authMethod, isLoading } =
    useAuth() as WorkspaceMessageAuth;
  const location = useLocation();
  const isWorkspaceMessageRoute = WORKSPACE_MESSAGE_ROUTE_PATTERNS.some(
    (path) => matchPath({ path, end: true }, location.pathname) != null,
  );
  const isWorkspaceMessagesEnabled = useStatsigGate(WORKSPACE_MESSAGES_GATE);
  const shouldFetch =
    isWorkspaceMessagesEnabled &&
    isWorkspaceMessageRoute &&
    !isLoading &&
    authMethod === "chatgpt" &&
    accountId != null;
  const { data } = useQuery({
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
    headline: shouldFetch ? getWorkspaceHeadlineMessage(data) : null,
  };
}

async function fetchWorkspaceMessages(): Promise<WorkspaceMessagesResponse> {
  return (await codexRequest.safeGet("/wham/workspace-messages", {
    additionalHeaders: {
      "Cache-Control": "no-store",
    },
  })) as WorkspaceMessagesResponse;
}

function getWorkspaceHeadlineMessage(
  data: WorkspaceMessagesResponse | null | undefined,
): WorkspaceMessage | null {
  return (
    data?.messages.find((message) => message.message_type === "headline") ??
    null
  );
}

export function initWorkspaceMessagesHeadlineChunk(): void {}
