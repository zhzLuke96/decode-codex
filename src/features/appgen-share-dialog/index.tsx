// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// Updated with exports from ref/webview/assets/appgen-share-dialog-BQA5qyJU.js.
// Sharing dialog for Codex-generated sites.

import React from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  _appScopeA as useAppScopeQueryValue,
  _appScopeO as useAppScopeContext,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  ai as updateAppgenProjectAccessMutation,
  ii as appgenProjectQuery,
  ti as appgenAccessGroupsQuery,
} from "../../boundaries/thread-context-inputs.facade";
import { useAuth } from "../../auth/use-auth";
import { useSelectedAccountQuery } from "../../runtime/codex-api";
import { Spinner } from "../../ui/spinner";
import { toastApiSignal } from "../../ui/toast-signal";
import { useDebouncedValue } from "../../utils/use-debounced-value";
import { openModalControllerModal } from "../../ui/modal-controller-state";
import {
  DialogBody,
  DialogHeader,
  DialogLayout,
  DialogSection,
  DialogTitle,
} from "../../ui/dialog-layout";
import {
  buildAppgenAccessPolicyUpdate,
  buildAppgenAccessPolicyWithoutGroup,
  buildAppgenAccessPolicyWithoutUser,
} from "../../utils/appgen-access";
import {
  filterAvailableWorkspaceUsers,
  ShareTargetAutocomplete,
  useWorkspaceUsersQuery,
  type WorkspaceUser,
} from "../../collaboration/use-workspace-users";
import { AccessList } from "./access-list";
import { ShareDialogFooter } from "./footer";
import { RemoveAccessDialog } from "./remove-access-dialog";
import {
  accessGroupToShareTargetOption,
  getAccessUserDisplayName,
  getAccountUserId,
  getGroupId,
  getUserEmail,
  getWorkspaceAccountUserId,
  mergeAccessGroupResponses,
  normalizeAccessGroups,
  workspaceUserToAppgenShareOption,
} from "./share-target-options";
import { SiteSummary } from "./site-summary";
import type {
  AppgenAccessGroup,
  AppgenAccessGroupsResponse,
  AppgenAccessMode,
  AppgenProject,
  AppgenShareDialogProps,
  AppgenShareTarget,
  AppgenShareTargetOption,
  MutationResult,
  QueryResult,
  SelectedAccount,
} from "./types";
export function AppgenShareDialog({
  onClose,
  projectId,
}: AppgenShareDialogProps) {
  const intl = useIntl();
  const appScope = useAppScopeContext(appScopeRoot);
  const { email } = useAuth();
  const { data: selectedAccount } = useSelectedAccountQuery();
  const account = selectedAccount as SelectedAccount | undefined;
  const isWorkspaceAccount = account?.structure === "workspace";
  const accountUserId = account?.account_user_id;
  const projectResult = useAppScopeQueryValue(
    appgenProjectQuery,
    projectId,
  ) as QueryResult<AppgenProject>;
  const updateAccess = useAppScopeQueryValue(
    updateAppgenProjectAccessMutation,
    projectId,
  ) as MutationResult<unknown>;
  const [shareQuery, setShareQuery] = React.useState("");
  const [selectedUsers, setSelectedUsers] = React.useState<WorkspaceUser[]>([]);
  const [selectedGroups, setSelectedGroups] = React.useState<
    AppgenAccessGroup[]
  >([]);
  const [stagedAccessMode, setStagedAccessMode] =
    React.useState<AppgenAccessMode | null>(null);
  const trimmedShareQuery = shareQuery.trim();
  const debouncedShareQuery = useDebouncedValue(trimmedShareQuery, 200);
  const workspaceUsersQuery = useWorkspaceUsersQuery(
    isWorkspaceAccount ? shareQuery : "",
  );
  const searchedGroupsQuery = useAppScopeQueryValue(
    appgenAccessGroupsQuery,
    isWorkspaceAccount ? debouncedShareQuery : null,
  ) as QueryResult<AppgenAccessGroupsResponse>;
  const allGroupsQuery = useAppScopeQueryValue(
    appgenAccessGroupsQuery,
    isWorkspaceAccount ? "" : null,
  ) as QueryResult<AppgenAccessGroupsResponse>;
  const project = projectResult.data;
  const accessPolicy = project?.access_policy ?? null;
  const activeAccessMode =
    stagedAccessMode ?? accessPolicy?.access_mode ?? null;
  const canManageInvitees = isWorkspaceAccount && activeAccessMode !== "public";
  const allowedUsers = accessPolicy?.allowed_users ?? [];
  const allowedGroups = accessPolicy?.allowed_groups ?? [];
  const searchedAccessGroups = normalizeAccessGroups(searchedGroupsQuery.data);
  const knownAccessGroups = normalizeAccessGroups(
    mergeAccessGroupResponses(searchedGroupsQuery.data, allGroupsQuery.data),
  );
  const existingAccountUserIds = new Set(allowedUsers.map(getAccountUserId));
  const availableWorkspaceUsers = filterAvailableWorkspaceUsers({
    currentAccountUserId: accountUserId ?? "",
    existingAccountUserIds,
    selectedAccountUserIds: selectedUsers.map(getWorkspaceAccountUserId),
    workspaceUsers: workspaceUsersQuery.data,
  });
  const activeAccessGroupIds = new Set(allowedGroups.map(getGroupId));
  const removableAccessGroupIds = new Set(knownAccessGroups.map(getGroupId));
  const availableGroups = searchedAccessGroups.filter(
    (group) =>
      !activeAccessGroupIds.has(group.id) &&
      !selectedGroups.some((selectedGroup) => selectedGroup.id === group.id),
  );
  const availableOptions =
    debouncedShareQuery !== trimmedShareQuery ||
    searchedGroupsQuery.data == null ||
    allGroupsQuery.data == null ||
    availableWorkspaceUsers == null
      ? undefined
      : [
          ...availableGroups.map((group) =>
            accessGroupToShareTargetOption(group, intl),
          ),
          ...availableWorkspaceUsers.map(workspaceUserToAppgenShareOption),
        ];
  const selectedOptions = [
    ...selectedGroups.map((group) =>
      accessGroupToShareTargetOption(group, intl),
    ),
    ...selectedUsers.map(workspaceUserToAppgenShareOption),
  ];
  const title =
    project == null ? (
      <FormattedMessage
        id="appgenShareDialog.title"
        defaultMessage="Share"
        description="Title for the site sharing dialog"
      />
    ) : (
      <FormattedMessage
        id="appgenShareDialog.projectTitle"
        defaultMessage="Share {siteTitle}"
        description="Title for the site sharing dialog including the site title"
        values={{
          siteTitle: project.title,
        }}
      />
    );
  const showSaveError = () => {
    appScope.get(toastApiSignal).danger(
      intl.formatMessage({
        id: "appgenShareDialog.save.error",
        defaultMessage: "Unable to save sharing settings",
        description:
          "Error toast shown when saving site sharing settings fails",
      }),
    );
  };
  const resetStagedChanges = () => {
    setSelectedUsers([]);
    setSelectedGroups([]);
    setStagedAccessMode(null);
  };
  const handleAccessModeChange = (nextAccessMode: AppgenAccessMode) => {
    setStagedAccessMode(nextAccessMode);
    if (nextAccessMode === "public") {
      setShareQuery("");
      setSelectedUsers([]);
      setSelectedGroups([]);
    }
  };
  const saveAccessUpdate = (accessUpdate: unknown) =>
    updateAccess.mutateAsync(accessUpdate).then(noop, (error) => {
      showSaveError();
      throw error;
    });
  const removeAccessTarget = (target: AppgenShareTarget): Promise<unknown> => {
    if (accessPolicy == null) return Promise.resolve();
    switch (target.kind) {
      case "user":
        return saveAccessUpdate(
          buildAppgenAccessPolicyWithoutUser(
            accessPolicy,
            target.user.account_user_id,
          ),
        );
      case "group":
        return saveAccessUpdate(
          buildAppgenAccessPolicyWithoutGroup({
            accessGroups: searchedAccessGroups,
            accessPolicy,
            group: target.group,
            knownAccessGroups,
          }),
        );
    }
  };
  const openRemoveAccessDialog = (target: AppgenShareTarget) => {
    if (project == null) return;
    openModalControllerModal(appScope, RemoveAccessDialog, {
      label:
        target.kind === "group"
          ? target.group.name
          : getAccessUserDisplayName(target.user),
      onConfirm: () => removeAccessTarget(target),
      siteTitle: project.title,
    });
  };
  const handleDone = () => {
    if (accessPolicy == null || activeAccessMode == null) {
      onClose();
      return;
    }
    const accessUpdate = buildAppgenAccessPolicyUpdate({
      accessGroups: searchedAccessGroups,
      accessMode: activeAccessMode,
      allowedUserEmails: [...allowedUsers, ...selectedUsers].map(getUserEmail),
      canManageInvitees,
      existingGroups: allowedGroups,
      knownAccessGroups,
      selectedGroups,
    });
    updateAccess.mutateAsync(accessUpdate).then(
      () => {
        resetStagedChanges();
      },
      () => {
        showSaveError();
      },
    );
  };
  const handleOpenChange = (open: boolean) => {
    if (!open) onClose();
  };
  const header = (
    <div className="flex w-full flex-col">
      <DialogTitle className="sr-only">{title}</DialogTitle>
      <DialogHeader title={title} titleClassName="truncate pr-8" />
    </div>
  );
  const bodyContent =
    projectResult.isLoading === true ? (
      <DialogSection className="py-12">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </DialogSection>
    ) : projectResult.isError === true ||
      project == null ||
      accessPolicy == null ? (
      <DialogSection className="py-10">
        <div className="text-center text-sm font-medium text-token-text-secondary">
          <FormattedMessage
            id="appgenShareDialog.error"
            defaultMessage="Unable to load sharing settings"
            description="Error state title in the site share dialog"
          />
        </div>
      </DialogSection>
    ) : (
      <>
        <DialogSection>
          <SiteSummary
            liveUrl={project.current_live_url}
            title={project.title}
          />
        </DialogSection>
        {canManageInvitees ? (
          <DialogSection>
            <ShareTargetAutocomplete
              ariaLabel={intl.formatMessage({
                id: "appgenShareDialog.workspaceUserSearch",
                defaultMessage: "Add people or groups",
                description:
                  "Accessible label for searching workspace users and groups in the site share dialog",
              })}
              emptyMessage={
                <FormattedMessage
                  id="appgenShareDialog.noWorkspaceUsers"
                  defaultMessage="No matching people or groups"
                  description="Empty state shown when no workspace users or groups match the site share dialog autocomplete query"
                />
              }
              options={availableOptions}
              placeholder={intl.formatMessage({
                id: "appgenShareDialog.workspaceUserPlaceholder",
                defaultMessage: "Add people or groups",
                description:
                  "Placeholder for the site share dialog workspace user and group autocomplete",
              })}
              query={shareQuery}
              selectedOptions={selectedOptions}
              onQueryChange={setShareQuery}
              onRemoveOption={(option) => {
                const { target } = option as AppgenShareTargetOption;
                switch (target.kind) {
                  case "group":
                    setSelectedGroups((groups) =>
                      groups.filter((group) => group.id !== target.group.id),
                    );
                    break;
                  case "user":
                    setSelectedUsers((users) =>
                      users.filter(
                        (user) =>
                          user.account_user_id !== target.user.account_user_id,
                      ),
                    );
                    break;
                }
              }}
              onSelectOption={(option) => {
                const { target } = option as AppgenShareTargetOption;
                switch (target.kind) {
                  case "group":
                    setSelectedGroups((groups) => [...groups, target.group]);
                    break;
                  case "user":
                    setSelectedUsers((users) => [
                      ...users,
                      target.user as WorkspaceUser,
                    ]);
                    break;
                }
              }}
              getRemoveLabel={(option) =>
                intl.formatMessage(
                  {
                    id: "appgenShareDialog.removeSelectedUser",
                    defaultMessage: "Remove {name}",
                    description:
                      "Accessible label for removing a selected workspace user from the site share dialog",
                  },
                  {
                    name: option.chipLabel ?? option.label,
                  },
                )
              }
            />
          </DialogSection>
        ) : null}
        <AccessList
          accessPolicy={accessPolicy}
          activeAccessGroups={allowedGroups}
          activeAccessUsers={allowedUsers}
          availableAccessModes={project.available_access_modes}
          canManageInvitees={canManageInvitees}
          isWorkspaceAccount={isWorkspaceAccount}
          removableAccessGroupIds={removableAccessGroupIds}
          selectedAccessMode={activeAccessMode}
          ownerEmail={email}
          ownerId={accountUserId}
          onAccessModeChange={handleAccessModeChange}
          onRemoveAccessUser={(user) => {
            openRemoveAccessDialog({
              kind: "user",
              user,
            });
          }}
          onRemoveAccessGroup={(group) => {
            openRemoveAccessDialog({
              kind: "group",
              group,
            });
          }}
        />
      </>
    );
  const liveUrl =
    projectResult.isLoading === true ||
    projectResult.isError === true ||
    project == null ||
    accessPolicy == null
      ? undefined
      : project.current_live_url;
  const footer = (
    <ShareDialogFooter
      accessMode={activeAccessMode}
      hasPendingAccessChange={
        accessPolicy != null && activeAccessMode !== accessPolicy.access_mode
      }
      hasPendingInvitees={canManageInvitees && selectedOptions.length > 0}
      isSaving={updateAccess.isPending}
      liveUrl={liveUrl}
      onCancelChanges={resetStagedChanges}
      onDone={handleDone}
    />
  );
  return (
    <DialogLayout
      open={true}
      size="compact"
      contentClassName="!overflow-visible"
      contentProps={{
        "aria-describedby": undefined,
      }}
      onOpenChange={handleOpenChange}
    >
      <DialogBody className="px-4 py-3">
        {header}
        {bodyContent}
        {footer}
      </DialogBody>
    </DialogLayout>
  );
}
function noop() {}

export function initAppgenShareDialogChunk() {}
