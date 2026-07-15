// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// appgen-share-dialog-DXPJlTmi chunk restored from the Codex webview bundle.
import {
  workspaceUserToShareTargetOption,
  type WorkspaceUser,
} from "../../collaboration/use-workspace-users";
import type {
  AppgenAccessGroup,
  AppgenAccessGroupsResponse,
  AppgenAccessUser,
  AppgenRawAccessGroup,
  AppgenShareTargetOption,
  IntlLike,
} from "./types";
export function normalizeAccessGroups(
  response: AppgenAccessGroupsResponse | null | undefined,
): AppgenAccessGroup[] {
  return [
    ...(response?.workspace_groups?.map((group) => ({
      ...group,
      source: "workspace" as const,
    })) ?? []),
    ...(response?.tenant_groups?.map((group) => ({
      ...group,
      source: "tenant" as const,
    })) ?? []),
  ];
}
export function mergeAccessGroupResponses(
  ...responses: Array<AppgenAccessGroupsResponse | null | undefined>
): AppgenAccessGroupsResponse {
  return {
    tenant_groups: uniqueAccessGroupsById(
      responses.flatMap((response) => response?.tenant_groups ?? []),
    ),
    workspace_groups: uniqueAccessGroupsById(
      responses.flatMap((response) => response?.workspace_groups ?? []),
    ),
  };
}
function uniqueAccessGroupsById(
  groups: AppgenRawAccessGroup[],
): AppgenRawAccessGroup[] {
  return Array.from(new Map(groups.map((group) => [group.id, group])).values());
}
export function accessGroupToShareTargetOption(
  group: AppgenAccessGroup,
  intl: IntlLike,
): AppgenShareTargetOption {
  return {
    chipLabel: group.name,
    id: `group:${group.source}:${group.id}`,
    label: group.name,
    secondaryLabel: intl.formatMessage(
      {
        id: "appgenShareDialog.access.groupSize",
        defaultMessage: "{count, plural, one {# member} other {# members}}",
        description: "Member count shown for a group in the site share dialog",
      },
      {
        count: group.size,
      },
    ),
    target: {
      kind: "group",
      group,
    },
  };
}
export function workspaceUserToAppgenShareOption(
  workspaceUser: WorkspaceUser,
): AppgenShareTargetOption {
  const option = workspaceUserToShareTargetOption(workspaceUser);
  return {
    ...option,
    target: {
      kind: "user",
      user: workspaceUser,
    },
  };
}
export function findOwnerAccessUser({
  activeAccessUsers,
  currentAccountUserId,
  currentUserEmail,
}: {
  activeAccessUsers: AppgenAccessUser[];
  currentAccountUserId?: string;
  currentUserEmail?: string | null;
}): AppgenAccessUser | null {
  const normalizedEmail = currentUserEmail?.trim().toLowerCase();
  if (normalizedEmail != null && normalizedEmail.length > 0) {
    const matchingEmailUser = activeAccessUsers.find(
      (user) => user.email?.trim().toLowerCase() === normalizedEmail,
    );
    if (matchingEmailUser != null) return matchingEmailUser;
  }
  return currentAccountUserId == null
    ? null
    : (activeAccessUsers.find(
        (user) => user.account_user_id === currentAccountUserId,
      ) ?? null);
}
export function getAccessUserDisplayName(user: AppgenAccessUser): string {
  return user.name ?? user.email ?? user.account_user_id;
}
export function getAccessUserAvatarLabel(user: AppgenAccessUser): string {
  return user.name ?? user.email ?? user.account_user_id.replace(/[-_]/g, " ");
}
export function getAccessUserSecondaryLabel(user: AppgenAccessUser) {
  return user.name == null ? null : user.email;
}
export function getUserEmail(user: { email?: string | null }) {
  return user.email;
}
export function getGroupId(group: { id: string }) {
  return group.id;
}
export function getAccountUserId(user: AppgenAccessUser) {
  return user.account_user_id;
}
export function getWorkspaceAccountUserId(user: WorkspaceUser) {
  return user.account_user_id;
}
export function noop() {}
