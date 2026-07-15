// Restored from ref/webview/assets/use-workspace-users-BuMotENr.js
// Primary and cancel actions for sharing dialogs.
import type { ComponentProps, ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import { Spinner } from "../../ui/spinner";
import type {
  ShareDialogActionConfig,
  ShareDialogPrimaryAction,
} from "./types";
type ButtonSize = ComponentProps<typeof Button>["size"];
type ShareDialogPrimaryActionsProps = {
  actions: Record<ShareDialogPrimaryAction, ShareDialogActionConfig>;
  cancelAction?: {
    onClick?: () => void;
  } | null;
  disabled?: boolean;
  hasPendingAccessChange: boolean;
  hasPendingInvitees: boolean;
  idleActions?: ReactNode;
  isSaving?: boolean;
  savingAriaLabel?: string;
  size?: ButtonSize;
  spinnerClassName?: string;
};
function ShareDialogPrimaryActions({
  actions,
  cancelAction,
  disabled,
  hasPendingAccessChange,
  hasPendingInvitees,
  idleActions,
  isSaving,
  savingAriaLabel,
  size,
  spinnerClassName,
}: ShareDialogPrimaryActionsProps) {
  const primaryAction = getPrimaryShareDialogAction({
    hasPendingAccessChange,
    hasPendingInvitees,
  });
  if (primaryAction == null) return idleActions ?? null;
  const cancelButton =
    cancelAction == null ? null : (
      <Button
        color="secondary"
        disabled={disabled || isSaving}
        size={size}
        onClick={cancelAction.onClick}
      >
        <FormattedMessage
          id="shareDialog.primaryAction.cancel"
          defaultMessage="Cancel"
          description="Button label for cancelling staged changes in a share dialog"
        />
      </Button>
    );
  const action = actions[primaryAction];
  const actionContents = isSaving ? (
    <Spinner className={spinnerClassName} />
  ) : (
    (action.label ?? <DefaultPrimaryActionLabel action={primaryAction} />)
  );
  return (
    <>
      {cancelButton}
      <Button
        aria-label={isSaving ? savingAriaLabel : undefined}
        color="primary"
        disabled={disabled || isSaving}
        size={size}
        onClick={action.onClick}
        type={action.type}
      >
        {actionContents}
      </Button>
    </>
  );
}
function DefaultPrimaryActionLabel({
  action,
}: {
  action: ShareDialogPrimaryAction;
}) {
  switch (action) {
    case "invite":
      return (
        <FormattedMessage
          id="shareDialog.primaryAction.invite"
          defaultMessage="Invite"
          description="Button label for inviting selected people or groups in a share dialog"
        />
      );
    case "share":
      return (
        <FormattedMessage
          id="shareDialog.primaryAction.save"
          defaultMessage="Save"
          description="Button label for saving a share dialog access change"
        />
      );
  }
}
function getPrimaryShareDialogAction({
  hasPendingAccessChange,
  hasPendingInvitees,
}: {
  hasPendingAccessChange: boolean;
  hasPendingInvitees: boolean;
}): ShareDialogPrimaryAction | null {
  return !hasPendingAccessChange && !hasPendingInvitees
    ? null
    : hasPendingAccessChange && !hasPendingInvitees
      ? "share"
      : "invite";
}
export { ShareDialogPrimaryActions };
