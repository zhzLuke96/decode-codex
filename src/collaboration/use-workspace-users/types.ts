// Restored from ref/webview/assets/use-workspace-users-BuMotENr.js
// Shared types for workspace user and group sharing controls.
import type {
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";
export type WorkspaceUser = {
  account_user_id: string;
  email?: string | null;
  id: string;
  name?: string | null;
};
export type WorkspaceGroup = {
  email?: string | null;
  id: string;
  name?: string | null;
};
export type ShareTargetOption = {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  chipLabel?: ReactNode;
  id: string;
  label: ReactNode;
  secondaryLabel?: ReactNode;
};
export type ShareTargetOptionSection = {
  id: string;
  label: ReactNode;
  options: ShareTargetOption[];
};
export type WorkspaceAccessOption<TValue extends string = string> = {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  tooltipText?: ReactNode;
  value: TValue;
};
export type ShareDialogPrimaryAction = "invite" | "share";
export type ShareDialogActionConfig = {
  label?: ReactNode;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};
export type FilterWorkspaceUsersOptions = {
  currentAccountUserId: string;
  existingAccountUserIds: readonly string[];
  selectedAccountUserIds: readonly string[];
  workspaceUsers?: readonly WorkspaceUser[] | null;
};
