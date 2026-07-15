// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// appgen-share-dialog-DXPJlTmi chunk restored from the Codex webview bundle.
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { DialogSection } from "../../ui/dialog-layout";
import {
  ShareTargetRow,
  WorkspaceAccessDropdown,
} from "../../collaboration/use-workspace-users";
import { AccessModeSelect } from "./access-mode";
import {
  findOwnerAccessUser,
  getAccessUserAvatarLabel,
  getAccessUserDisplayName,
  getAccessUserSecondaryLabel,
} from "./share-target-options";
import type { AccessListProps, AccessPermissionDropdownProps } from "./types";
const VISIT_PERMISSION_OPTIONS = [
  {
    value: "visit",
  },
] as const;
export function AccessList({
  activeAccessGroups,
  activeAccessUsers,
  accessPolicy,
  availableAccessModes,
  canManageInvitees,
  isWorkspaceAccount,
  removableAccessGroupIds,
  selectedAccessMode,
  ownerEmail,
  ownerId,
  onAccessModeChange,
  onRemoveAccessGroup,
  onRemoveAccessUser,
}: AccessListProps) {
  const intl = useIntl();
  const ownerUser = findOwnerAccessUser({
    activeAccessUsers,
    currentAccountUserId: ownerId,
    currentUserEmail: ownerEmail,
  });
  const nonOwnerUsers = activeAccessUsers.filter(
    (user) => user.account_user_id !== ownerUser?.account_user_id,
  );
  return (
    <DialogSection className="gap-3">
      <div className="text-sm font-medium text-token-foreground">
        <FormattedMessage
          id="appgenShareDialog.access.title"
          defaultMessage="Who has access"
          description="Heading for access information in the site share dialog"
        />
      </div>
      <AccessModeSelect
        key={`${accessPolicy.revision}:${accessPolicy.access_mode}`}
        availableAccessModes={availableAccessModes}
        currentAccessMode={accessPolicy.access_mode}
        isWorkspaceAccount={isWorkspaceAccount}
        selectedAccessMode={selectedAccessMode}
        onAccessModeChange={onAccessModeChange}
      />
      <div className="vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto">
        {ownerUser == null ? null : (
          <ShareTargetRow
            avatarLabel={getAccessUserAvatarLabel(ownerUser)}
            label={getAccessUserDisplayName(ownerUser)}
            secondaryLabel={getAccessUserSecondaryLabel(ownerUser)}
            trailingContent={
              <span className="text-sm text-token-description-foreground">
                <FormattedMessage
                  id="appgenShareDialog.permission.owner"
                  defaultMessage="Owner"
                  description="Label for the owner in the site share dialog"
                />
              </span>
            }
          />
        )}
        {nonOwnerUsers.map((user) => (
          <ShareTargetRow
            key={user.account_user_id}
            avatarLabel={getAccessUserAvatarLabel(user)}
            label={getAccessUserDisplayName(user)}
            secondaryLabel={getAccessUserSecondaryLabel(user)}
            trailingContent={
              <AccessPermissionDropdown
                onRemoveAccess={
                  canManageInvitees
                    ? () => {
                        onRemoveAccessUser(user);
                      }
                    : undefined
                }
              />
            }
          />
        ))}
        {activeAccessGroups.map((group) => (
          <ShareTargetRow
            key={group.id}
            label={group.name}
            secondaryLabel={intl.formatMessage(
              {
                id: "appgenShareDialog.access.groupSize",
                defaultMessage:
                  "{count, plural, one {# member} other {# members}}",
                description:
                  "Member count shown for a group in the site share dialog",
              },
              {
                count: group.size,
              },
            )}
            trailingContent={
              <AccessPermissionDropdown
                onRemoveAccess={
                  canManageInvitees && removableAccessGroupIds.has(group.id)
                    ? () => {
                        onRemoveAccessGroup(group);
                      }
                    : undefined
                }
              />
            }
          />
        ))}
      </div>
    </DialogSection>
  );
}
function AccessPermissionDropdown({
  onRemoveAccess,
}: AccessPermissionDropdownProps) {
  return (
    <WorkspaceAccessDropdown
      options={VISIT_PERMISSION_OPTIONS}
      removeLabel={
        <FormattedMessage
          id="appgenShareDialog.permission.remove"
          defaultMessage="Remove access"
          description="Menu item for removing a person's site access"
        />
      }
      value="visit"
      renderLabel={renderVisitPermissionLabel}
      onRemoveAccess={onRemoveAccess}
    />
  );
}
function renderVisitPermissionLabel() {
  return <VisitPermissionLabel />;
}
function VisitPermissionLabel() {
  return (
    <FormattedMessage
      id="appgenShareDialog.permission.visit"
      defaultMessage="Can visit"
      description="Visitor permission label in the site share dialog"
    />
  );
}
