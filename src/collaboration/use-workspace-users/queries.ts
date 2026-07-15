// Restored from ref/webview/assets/use-workspace-users-BuMotENr.js
// Workspace user and group lookup helpers used by sharing dialogs.
import { useAuth } from "../../auth/use-auth";
import {
  vscodeApiU as queryTimes,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import { useDebouncedValue } from "../../utils/use-debounced-value";
import type {
  FilterWorkspaceUsersOptions,
  ShareTargetOption,
  WorkspaceGroup,
  WorkspaceUser,
} from "./types";
type WorkspaceUsersResponse = {
  items: WorkspaceUser[];
};
type WorkspaceGroupsResponse = {
  items: WorkspaceGroup[];
};
function getWorkspaceUserDisplayName(workspaceUser: WorkspaceUser): string {
  return workspaceUser.name ?? workspaceUser.email ?? workspaceUser.id;
}
function workspaceUserToShareTargetOption(
  workspaceUser: WorkspaceUser,
): ShareTargetOption {
  return {
    chipLabel: workspaceUser.email ?? undefined,
    id: `user:${workspaceUser.account_user_id}`,
    label: getWorkspaceUserDisplayName(workspaceUser),
    secondaryLabel: workspaceUser.email ?? undefined,
  };
}
function filterAvailableWorkspaceUsers({
  currentAccountUserId,
  existingAccountUserIds,
  selectedAccountUserIds,
  workspaceUsers,
}: FilterWorkspaceUsersOptions): WorkspaceUser[] | undefined {
  const existingUsers = new Set(existingAccountUserIds);
  const selectedUsers = new Set(selectedAccountUserIds);
  return workspaceUsers?.filter(
    (workspaceUser) =>
      workspaceUser.account_user_id !== currentAccountUserId &&
      !existingUsers.has(workspaceUser.account_user_id) &&
      !selectedUsers.has(workspaceUser.account_user_id),
  );
}
function useWorkspaceUsersQuery(query: string) {
  const { accountId, authMethod } = useAuth();
  const trimmedQuery = query.trim();
  const debouncedQuery = useDebouncedValue(trimmedQuery, 200);
  const queryKey = ["workspace-users", accountId, debouncedQuery];
  const enabled =
    authMethod === "chatgpt" && accountId != null && debouncedQuery.length > 0;
  const queryFn = async () => {
    if (accountId == null) throw Error("account id is required");
    return (
      (await codexRequest.safeGet("/accounts/{account_id}/users", {
        parameters: {
          path: {
            account_id: accountId,
          },
          query: {
            limit: 10,
            offset: 0,
            query: debouncedQuery,
          },
        },
      })) as WorkspaceUsersResponse
    ).items;
  };
  return useQuery({
    queryKey,
    enabled,
    queryFn,
    staleTime: queryTimes.ONE_MINUTE,
  });
}
function useWorkspaceGroupsQuery(query: string) {
  const { accountId, authMethod } = useAuth();
  const trimmedQuery = query.trim();
  const debouncedQuery = useDebouncedValue(trimmedQuery, 200);
  const queryKey = ["workspace-groups", accountId, debouncedQuery];
  const enabled =
    authMethod === "chatgpt" && accountId != null && debouncedQuery.length > 0;
  const queryFn = async () => {
    if (accountId == null) throw Error("account id is required");
    return (
      (await codexRequest.safeGet("/accounts/{account_id}/groups", {
        parameters: {
          path: {
            account_id: accountId,
          },
          query: {
            limit: 10,
            offset: 0,
            query: debouncedQuery,
          },
        },
      })) as WorkspaceGroupsResponse
    ).items;
  };
  return useQuery({
    queryKey,
    enabled,
    queryFn,
    staleTime: queryTimes.ONE_MINUTE,
  });
}
export {
  filterAvailableWorkspaceUsers,
  getWorkspaceUserDisplayName,
  useWorkspaceGroupsQuery,
  useWorkspaceUsersQuery,
  workspaceUserToShareTargetOption,
};
