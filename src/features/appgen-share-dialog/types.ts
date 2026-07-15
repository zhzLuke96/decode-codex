// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// appgen-share-dialog-DXPJlTmi chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import type {
  ShareTargetOption,
  WorkspaceUser,
} from "../../collaboration/use-workspace-users";
export type AppgenShareDialogProps = {
  onClose: () => void;
  projectId: string;
};
export type QueryResult<TData> = {
  data?: TData | null;
  isError?: boolean;
  isLoading?: boolean;
};
export type MutationResult<TVariables> = {
  isPending: boolean;
  mutateAsync: (variables: TVariables) => Promise<unknown>;
};
export type SelectedAccount = {
  account_user_id?: string;
  structure?: string;
};
export type AppgenAccessMode =
  | "admins_only"
  | "custom"
  | "public"
  | "workspace_all"
  | string;
export type AppgenAccessGroupSource = "tenant" | "workspace";
export type AppgenRawAccessGroup = {
  id: string;
  name: string;
  size: number;
};
export type AppgenAccessGroup = AppgenRawAccessGroup & {
  source: AppgenAccessGroupSource;
};
export type AppgenAccessGroupsResponse = {
  tenant_groups?: AppgenRawAccessGroup[];
  workspace_groups?: AppgenRawAccessGroup[];
};
export type AppgenAccessUser = {
  account_user_id: string;
  email?: string | null;
  name?: string | null;
};
export type AppgenAccessPolicy = {
  access_mode: AppgenAccessMode;
  allowed_account_user_ids: string[];
  allowed_groups: AppgenAccessGroup[];
  allowed_tenant_group_ids: string[];
  allowed_users: AppgenAccessUser[];
  allowed_workspace_group_ids: string[];
  revision: string | number;
};
export type AppgenProject = {
  access_policy?: AppgenAccessPolicy | null;
  available_access_modes?: AppgenAccessMode[] | null;
  current_live_url?: string | null;
  title: string;
};
export type AppgenShareTarget =
  | {
      group: AppgenAccessGroup;
      kind: "group";
    }
  | {
      kind: "user";
      user: AppgenAccessUser | WorkspaceUser;
    };
export type AppgenShareTargetOption = ShareTargetOption & {
  target: AppgenShareTarget;
};
export type RemoveAccessDialogProps = {
  label: ReactNode;
  onClose?: () => void;
  onConfirm: () => Promise<unknown>;
  siteTitle: string;
};
export type SiteSummaryProps = {
  liveUrl?: string | null;
  title: string;
};
export type AccessListProps = {
  accessPolicy: AppgenAccessPolicy;
  activeAccessGroups: AppgenAccessGroup[];
  activeAccessUsers: AppgenAccessUser[];
  availableAccessModes?: AppgenAccessMode[] | null;
  canManageInvitees: boolean;
  isWorkspaceAccount: boolean;
  onAccessModeChange: (accessMode: AppgenAccessMode) => void;
  onRemoveAccessGroup: (group: AppgenAccessGroup) => void;
  onRemoveAccessUser: (user: AppgenAccessUser) => void;
  ownerEmail?: string | null;
  ownerId?: string;
  removableAccessGroupIds: Set<string>;
  selectedAccessMode: AppgenAccessMode;
};
export type AccessPermissionDropdownProps = {
  onRemoveAccess?: () => void;
};
export type AccessModeSelectProps = {
  availableAccessModes?: AppgenAccessMode[] | null;
  currentAccessMode: AppgenAccessMode;
  isWorkspaceAccount: boolean;
  onAccessModeChange: (accessMode: AppgenAccessMode) => void;
  selectedAccessMode: AppgenAccessMode;
};
export type ShareDialogFooterProps = {
  accessMode: AppgenAccessMode | null;
  hasPendingAccessChange: boolean;
  hasPendingInvitees: boolean;
  isSaving: boolean;
  liveUrl?: string | null;
  onCancelChanges: () => void;
  onDone: () => void;
};
export type IntlLike = {
  formatMessage: (
    descriptor: {
      defaultMessage: string;
      description?: string;
      id: string;
    },
    values?: Record<string, unknown>,
  ) => string;
};
