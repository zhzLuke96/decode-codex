// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// appgen-share-dialog-DXPJlTmi chunk restored from the Codex webview bundle.
import { type ComponentType, type SVGProps } from "react";
import { defineMessages, FormattedMessage } from "../../vendor/react-intl";
import { BuildingIcon } from "../../icons/building-icon";
import { GlobeIcon } from "../../icons/globe-icon";
import { LockIcon } from "../../icons/lock-icon";
import {
  WorkspaceAccessSelect,
  type WorkspaceAccessOption,
} from "../../collaboration/use-workspace-users";
import { getAppgenAccessModeOptions } from "../../utils/appgen-access";
import type { AccessModeSelectProps, AppgenAccessMode } from "./types";
const accessModeMessages = defineMessages({
  admins_only: {
    id: "appgenAccess.state.ownerOnly",
    defaultMessage: "Just me",
    description: "Label for a site whose access is limited to its owner",
  },
  custom: {
    id: "appgenAccess.state.privatelyShared",
    defaultMessage: "Only those invited",
    description: "Label for a site shared privately with invited people",
  },
  public: {
    id: "appgenAccess.state.public",
    defaultMessage: "Anyone on the Internet",
    description: "Label for a site shared publicly on the internet",
  },
  workspace_all: {
    id: "appgenAccess.state.workspaceAll",
    defaultMessage: "Anyone in this workspace with the link",
    description: "Label for a site shared with anyone in the workspace",
  },
});
export function AccessModeSelect({
  availableAccessModes,
  currentAccessMode,
  isWorkspaceAccount,
  selectedAccessMode,
  onAccessModeChange,
}: AccessModeSelectProps) {
  const options = getAppgenAccessModeOptions({
    availableAccessModes,
    currentAccessMode,
    isWorkspaceAccount,
  }).map(accessModeOptionToWorkspaceOption);
  return (
    <WorkspaceAccessSelect
      options={options}
      value={selectedAccessMode}
      renderLabel={renderAccessModeLabel}
      onChange={onAccessModeChange}
    />
  );
}
function renderAccessModeLabel(accessMode: AppgenAccessMode) {
  const message =
    accessModeMessages[accessMode as keyof typeof accessModeMessages];
  return message == null ? accessMode : <FormattedMessage {...message} />;
}
function accessModeOptionToWorkspaceOption({
  disabled,
  value,
}: {
  disabled: boolean;
  value: AppgenAccessMode;
}): WorkspaceAccessOption<AppgenAccessMode> {
  return {
    disabled,
    Icon: getAccessModeIcon(value),
    value,
  };
}
function getAccessModeIcon(
  accessMode: AppgenAccessMode,
): ComponentType<SVGProps<SVGSVGElement>> | undefined {
  switch (accessMode) {
    case "admins_only":
    case "custom":
      return LockIcon;
    case "workspace_all":
      return BuildingIcon;
    case "public":
      return GlobeIcon;
  }
}
