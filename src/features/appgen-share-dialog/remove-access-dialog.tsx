// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// appgen-share-dialog-DXPJlTmi chunk restored from the Codex webview bundle.
import React, { type FormEvent } from "react";
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
import { noop } from "./share-target-options";
import type { RemoveAccessDialogProps } from "./types";
export function RemoveAccessDialog({
  label,
  onClose = noop,
  onConfirm,
  siteTitle,
}: RemoveAccessDialogProps) {
  const [isRemoving, setIsRemoving] = React.useState(false);
  const showCloseButton = !isRemoving;
  const handleOpenChange = (open: boolean) => {
    if (!open && !isRemoving) onClose();
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isRemoving) return;
    setIsRemoving(true);
    onConfirm().then(onClose, () => {
      setIsRemoving(false);
    });
  };
  const title = (
    <DialogTitle className="contents">
      <FormattedMessage
        id="appgenShareDialog.removeDialog.title"
        defaultMessage="Remove {label}?"
        description="Title for dialog confirming removal of a person's or group's site access"
        values={{
          label,
        }}
      />
    </DialogTitle>
  );
  const highlightedLabel = (
    <span
      key="remove-access-label"
      className="font-medium text-token-text-primary"
    >
      {label}
    </span>
  );
  const subtitle = (
    <DialogDescription className="contents">
      <FormattedMessage
        id="appgenShareDialog.removeDialog.description"
        defaultMessage="{label} will no longer be able to visit {siteTitle}"
        description="Warning shown when removing a person or group from a site's access list"
        values={{
          label: highlightedLabel,
          siteTitle,
        }}
      />
    </DialogDescription>
  );
  return (
    <DialogLayout
      open={true}
      shouldIgnoreClickOutside={isRemoving}
      showDialogClose={showCloseButton}
      size="compact"
      onOpenChange={handleOpenChange}
    >
      <DialogBody as="form" className="gap-4 px-4 py-3" onSubmit={handleSubmit}>
        <DialogHeader
          title={title}
          titleClassName="truncate pr-8"
          subtitle={subtitle}
        />
        <DialogSection>
          <DialogFooter>
            <Button color="secondary" disabled={isRemoving} onClick={onClose}>
              <FormattedMessage
                id="appgenShareDialog.removeDialog.cancel"
                defaultMessage="Cancel"
                description="Cancel button label for access removal confirmation dialog"
              />
            </Button>
            <Button color="danger" loading={isRemoving} type="submit">
              <FormattedMessage
                id="appgenShareDialog.removeDialog.confirm"
                defaultMessage="Remove"
                description="Confirm button label for removing site access"
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
