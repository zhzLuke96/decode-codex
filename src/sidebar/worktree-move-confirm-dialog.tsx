// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Confirmation dialog shown before moving a chat out of a worktree-backed
// project. Submitting closes the dialog and runs the move; the visible title /
// subtitle are duplicated as sr-only elements for the accessible dialog name.
import type { FormEvent } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import {
  Button,
  Dialog,
  DialogDescription,
  DialogFooterRow,
  DialogPanel,
  DialogSection,
  DialogTitle,
  DialogTitleBlock,
} from "../boundaries/onboarding-commons-externals.facade";

export interface WorktreeMoveConfirmDialogProps {
  onClose: () => void;
  onConfirm: () => void;
  sourceProjectLabel: string;
}

export function WorktreeMoveConfirmDialog({
  onClose,
  onConfirm,
  sourceProjectLabel,
}: WorktreeMoveConfirmDialogProps) {
  const title = (
    <FormattedMessage
      id="sidebar.worktreeMoveConfirm.title"
      defaultMessage="Move chat out of worktree?"
      description="Title for the confirmation dialog shown before moving a chat out of a worktree-backed project"
    />
  );
  const subtitle = (
    <FormattedMessage
      id="sidebar.worktreeMoveConfirm.subtitle"
      defaultMessage="This chat will leave {projectLabel}. Its existing worktree will stay there and may be cleaned up later"
      description="Subtitle for the confirmation dialog shown before moving a chat out of a worktree-backed project"
      values={{ projectLabel: sourceProjectLabel }}
    />
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onClose();
    onConfirm();
  };

  return (
    <Dialog open onOpenChange={onClose} size="compact">
      <DialogPanel as="form" onSubmit={handleSubmit}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{subtitle}</DialogDescription>
        <DialogSection>
          <DialogTitleBlock title={title} subtitle={subtitle} />
        </DialogSection>
        <DialogSection>
          <DialogFooterRow>
            <Button color="ghost" type="button" onClick={onClose}>
              <FormattedMessage
                id="sidebar.worktreeMoveConfirm.cancel"
                defaultMessage="Cancel"
                description="Cancel button label for moving a chat out of a worktree-backed project"
              />
            </Button>
            <Button type="submit">
              <FormattedMessage
                id="sidebar.worktreeMoveConfirm.confirm"
                defaultMessage="Move chat"
                description="Confirm button label for moving a chat out of a worktree-backed project"
              />
            </Button>
          </DialogFooterRow>
        </DialogSection>
      </DialogPanel>
    </Dialog>
  );
}
