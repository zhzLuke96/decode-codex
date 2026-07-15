// Restored from ref/webview/assets/usage-queries-CItzwIo9.js
// Workspace monthly usage and admin request queries.

import {
  vscodeApiA as useQueryClient,
  vscodeApiU as queryTimings,
  vscodeApiUnderscore as useMutation,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import { parseCodexApiErrorDetail } from "../../utils/codex-api-error";
import { useUsageAccountId } from "./account";
import {
  ACCOUNT_SETTINGS_QUERY_KEY,
  WORKSPACE_ADMIN_REQUESTS_QUERY_KEY,
  WORKSPACE_MONTHLY_USAGE_QUERY_KEY,
} from "./query-keys";
import type {
  AccountScopedQueryInput,
  SaveWorkspaceAdminRequestInput,
  WorkspaceAdminRequest,
  WorkspaceAdminRequestsPage,
} from "./types";
export function useWorkspaceMonthlyUsageQuery({
  accountId,
  enabled,
}: AccountScopedQueryInput) {
  const accountLookup = useUsageAccountId({
    enabled: enabled && accountId == null,
  });
  const resolvedAccountId = accountId ?? accountLookup.accountId;
  const isLoadingAccount = accountId == null && accountLookup.isLoading;
  return useQuery({
    queryKey: [...WORKSPACE_MONTHLY_USAGE_QUERY_KEY, resolvedAccountId],
    enabled: enabled && !isLoadingAccount && resolvedAccountId != null,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
    refetchInterval: queryTimings.ONE_MINUTE,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: "always",
    retry: false,
    queryFn: () => fetchWorkspaceMonthlyUsage(resolvedAccountId),
  });
}
export function useUsageLimitIncreaseRequestQuery({
  accountId,
  enabled,
}: AccountScopedQueryInput) {
  const accountLookup = useUsageAccountId({
    enabled: enabled && accountId == null,
  });
  const resolvedAccountId = accountId ?? accountLookup.accountId;
  const isLoadingAccount = accountId == null && accountLookup.isLoading;
  const query = useQuery({
    queryKey: [...ACCOUNT_SETTINGS_QUERY_KEY, resolvedAccountId],
    enabled: enabled && !isLoadingAccount && resolvedAccountId != null,
    staleTime: queryTimings.ONE_MINUTE,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: () =>
      resolvedAccountId == null
        ? null
        : codexRequest.safeGet("/accounts/{account_id}/settings", {
            parameters: {
              path: {
                account_id: resolvedAccountId,
              },
            },
          }),
    select: (
      response: {
        usage_limit_increase_request?: unknown;
      } | null,
    ) =>
      response?.usage_limit_increase_request ?? {
        kind: "openai_native",
      },
  });
  return {
    data: enabled && !query.isError ? query.data : undefined,
    isError: enabled && query.isError,
    isLoading: enabled && query.isLoading,
    refetch: query.refetch,
  };
}
export function useWorkspaceAdminRequestsQuery({
  enabled,
}: {
  enabled: boolean;
}) {
  const { accountId, isLoading } = useUsageAccountId({
    enabled,
  });
  return useQuery({
    queryKey: [...WORKSPACE_ADMIN_REQUESTS_QUERY_KEY, accountId],
    enabled: enabled && !isLoading && accountId != null,
    staleTime: queryTimings.ONE_MINUTE,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    retry: false,
    queryFn: () =>
      accountId == null ? null : fetchWorkspaceAdminRequests(accountId),
  });
}
export function useSaveWorkspaceAdminRequestMutation() {
  const queryClient = useQueryClient();
  const { accountId } = useUsageAccountId({
    enabled: true,
  });
  return useMutation({
    mutationKey: [...WORKSPACE_ADMIN_REQUESTS_QUERY_KEY, accountId, "save"],
    mutationFn: async ({
      justification,
      requestId,
    }: SaveWorkspaceAdminRequestInput) => {
      if (accountId == null) {
        throw Error("Cannot save workspace admin request without account");
      }
      if (requestId == null) {
        return codexRequest.safePost(
          "/accounts/{account_id}/workspace_admin_requests",
          {
            parameters: {
              path: {
                account_id: accountId,
              },
            },
            requestBody: {
              justification,
            },
          },
        );
      }
      return codexRequest.safePatch(
        "/accounts/{account_id}/workspace_admin_requests/{request_id}",
        {
          parameters: {
            path: {
              account_id: accountId,
              request_id: requestId,
            },
          },
          requestBody: {
            justification,
          },
        },
      );
    },
    onSuccess: (request: WorkspaceAdminRequest) => {
      queryClient.setQueryData(
        [...WORKSPACE_ADMIN_REQUESTS_QUERY_KEY, accountId],
        (page: WorkspaceAdminRequestsPage | undefined) =>
          upsertWorkspaceAdminRequest(page, request),
      );
      queryClient.invalidateQueries({
        queryKey: [...WORKSPACE_ADMIN_REQUESTS_QUERY_KEY, accountId],
      });
    },
  });
}
async function fetchWorkspaceMonthlyUsage(
  accountId: string | null | undefined,
): Promise<unknown | null> {
  if (accountId == null) return null;
  try {
    return await codexRequest.safeGet(
      "/accounts/{account_id}/spend-controls/current-user/monthly-usage",
      {
        parameters: {
          path: {
            account_id: accountId,
          },
        },
        additionalHeaders: {
          "Cache-Control": "no-store",
          Pragma: "no-cache",
        },
      },
    );
  } catch (error) {
    if (
      error instanceof Error &&
      parseCodexApiErrorDetail(error)?.message ===
        "Current user monthly cap is not available."
    ) {
      return null;
    }
    throw error;
  }
}
async function fetchWorkspaceAdminRequests(
  accountId: string,
): Promise<WorkspaceAdminRequestsPage> {
  const items: WorkspaceAdminRequest[] = [];
  const seenCursors = new Set<string>();
  let cursor: string | null = null;
  for (;;) {
    const page = (await codexRequest.safeGet(
      "/accounts/{account_id}/workspace_admin_requests",
      {
        parameters: {
          path: {
            account_id: accountId,
          },
          query: {
            cursor,
            limit: 100,
          },
        },
      },
    )) as WorkspaceAdminRequestsPage;
    items.push(...(page.items ?? []));
    const nextCursor = page.cursor ?? null;
    if (nextCursor == null || seenCursors.has(nextCursor)) {
      return {
        items,
        cursor: nextCursor,
      };
    }
    seenCursors.add(nextCursor);
    cursor = nextCursor;
  }
}
function upsertWorkspaceAdminRequest(
  page: WorkspaceAdminRequestsPage | undefined,
  request: WorkspaceAdminRequest,
): WorkspaceAdminRequestsPage {
  if (page == null) {
    return {
      items: [request],
      cursor: null,
    };
  }
  const requestIndex = page.items.findIndex((item) => item.id === request.id);
  if (requestIndex === -1) {
    return {
      ...page,
      items: [request, ...page.items],
    };
  }
  return {
    ...page,
    items: page.items.map((item, index) =>
      index === requestIndex ? request : item,
    ),
  };
}
