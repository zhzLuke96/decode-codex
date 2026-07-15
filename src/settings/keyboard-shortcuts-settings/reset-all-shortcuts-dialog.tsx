// Restored from ref/webview/assets/keyboard-shortcuts-settings-BuLGCo4B.js
import { FormattedMessage } from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  DialogTitle,
} from "../../ui/dialog-layout";

export function ResetAllShortcutsDialog({
  error,
  isPending,
  onConfirm,
  onOpenChange,
  open,
}: {
  error: string | null;
  isPending: boolean;
  onConfirm(): void;
  onOpenChange(open: boolean): void;
  open: boolean;
}) {
  const title = (
    <FormattedMessage
      id="settings.keyboardShortcuts.resetAllConfirm.title"
      defaultMessage="Reset all keyboard shortcuts?"
      description="Title for the dialog confirming reset of all customized keyboard shortcuts"
    />
  );
  const description = (
    <FormattedMessage
      id="settings.keyboardShortcuts.resetAllConfirm.description"
      defaultMessage="This will discard all custom shortcuts and restore the defaults"
      description="Warning shown before resetting all customized keyboard shortcuts"
    />
  );
  return (
    <DialogLayout
      open={open}
      onOpenChange={onOpenChange}
      showDialogClose={false}
      size="compact"
    >
      <DialogBody
        as="form"
        onSubmit={(event) => {
          event.preventDefault();
          onConfirm();
        }}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>
        <DialogSection>
          <DialogHeader title={title} subtitle={description} />
        </DialogSection>
        {error == null ? null : (
          <DialogSection className="text-token-error-foreground">
            {error}
          </DialogSection>
        )}
        <DialogSection>
          <DialogFooter>
            <Button
              color="secondary"
              onClick={() => {
                onOpenChange(false);
              }}
            >
              <FormattedMessage
                id="settings.keyboardShortcuts.resetAllConfirm.cancel"
                defaultMessage="Cancel"
                description="Cancel button label for resetting all customized keyboard shortcuts"
              />
            </Button>
            <Button color="danger" loading={isPending} type="submit">
              <FormattedMessage
                id="settings.keyboardShortcuts.resetAllConfirm.confirm"
                defaultMessage="Reset all"
                description="Confirmation button label for resetting all customized keyboard shortcuts"
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
