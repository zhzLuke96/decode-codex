// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Connected modal that confirms reverting review diff changes, offering a
// "Don't ask again" checkbox plus Cancel and Confirm (danger) actions wired
// through the review patch-action atoms.

import type { FormEvent } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  DialogLayout,
  DialogBody,
  DialogSection,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog-layout";
import {
  useStore,
  useAtomValue,
  routeAtom,
  Checkbox,
  revertConfirmDialogOpenAtom,
  revertConfirmDialogSkipCheckedAtom,
  closeRevertConfirmDialog,
  confirmRevertChanges,
  setRevertConfirmDialogSkipChecked,
} from "../boundaries/onboarding-commons-externals.facade";

export function RevertConfirmDialog() {
  const store = useStore(routeAtom);
  const isOpen = useAtomValue<boolean>(revertConfirmDialogOpenAtom);
  const isSkipChecked = useAtomValue<boolean>(
    revertConfirmDialogSkipCheckedAtom,
  );

  const handleOpenChange = (open: boolean) => {
    if (!open) closeRevertConfirmDialog(store);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    confirmRevertChanges(store);
  };

  const handleSkipChange = (checked: boolean) => {
    setRevertConfirmDialogSkipChecked(store, checked);
  };

  const handleCancel = () => {
    closeRevertConfirmDialog(store);
  };

  return (
    <DialogLayout
      open={isOpen}
      onOpenChange={handleOpenChange}
      contentProps={{ "aria-describedby": undefined }}
    >
      <DialogBody as="form" onSubmit={handleSubmit}>
        <DialogSection>
          <DialogHeader
            title={
              <DialogTitle>
                <FormattedMessage
                  id="codex.review.revertDialog.title"
                  defaultMessage="Revert changes?"
                  description="Title for the revert confirmation dialog in review diffs"
                />
              </DialogTitle>
            }
            subtitle={
              <FormattedMessage
                id="codex.review.revertDialog.message"
                defaultMessage="This action removes all of these changes."
                description="Description explaining that reverting a hunk, file, or section removes the changes"
              />
            }
          />
        </DialogSection>
        <DialogSection>
          <label className="relative flex items-center gap-2 text-token-text-primary">
            <Checkbox
              checked={isSkipChecked}
              onCheckedChange={handleSkipChange}
            />
            <FormattedMessage
              id="codex.review.revertDialog.skip"
              defaultMessage="Don't ask again"
              description="Label for checkbox that disables the revert confirmation dialog"
            />
          </label>
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button color="ghost" type="button" onClick={handleCancel}>
              <FormattedMessage
                id="codex.review.revertDialog.cancel"
                defaultMessage="Cancel"
                description="Cancel button label for revert confirmation dialog"
              />
            </Button>
            <Button autoFocus color="danger" type="submit">
              <FormattedMessage
                id="codex.review.revertDialog.confirm"
                defaultMessage="Confirm"
                description="Confirm button label for revert confirmation dialog"
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
