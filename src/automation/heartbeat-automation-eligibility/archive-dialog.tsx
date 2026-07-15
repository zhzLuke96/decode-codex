// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-Dgn7MiTN.js.
import type { FormEvent } from "react";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "../../ui/dialog-layout";
import { FormattedMessage } from "../../vendor/react-intl";
type ArchiveThreadConfirmDialogProps = {
  heartbeatAutomationName?: string | null;
  onConfirm(): void;
  onOpenChange(open: boolean): void;
  open: boolean;
};
type DialogOpenAutoFocusEvent = {
  currentTarget?: {
    querySelector(selector: string): {
      focus(): void;
    } | null;
  } | null;
  preventDefault(): void;
};
export function ArchiveThreadConfirmDialog({
  heartbeatAutomationName = null,
  onConfirm,
  onOpenChange,
  open,
}: ArchiveThreadConfirmDialogProps) {
  const hasHeartbeatAutomation = heartbeatAutomationName != null;
  const hasNamedHeartbeatAutomation =
    heartbeatAutomationName != null &&
    heartbeatAutomationName.trim().length > 0;
  const title = hasHeartbeatAutomation ? (
    <FormattedMessage
      id="threadHeader.archiveConfirmHeartbeatTitle"
      defaultMessage="Archive chat and remove automation?"
      description="Title for archive chat confirmation dialog when the chat has an active heartbeat automation"
    />
  ) : (
    <FormattedMessage
      id="threadHeader.archiveConfirmTitle"
      defaultMessage="Archive chat?"
      description="Title for archive chat confirmation dialog"
    />
  );
  const subtitle = hasHeartbeatAutomation ? (
    hasNamedHeartbeatAutomation ? (
      <FormattedMessage
        id="threadHeader.archiveConfirmHeartbeatSubtitleNamed"
        defaultMessage="This chat has an active heartbeat automation, {name}. Archiving the chat will also remove it and stop future runs."
        description="Subtitle for archive chat confirmation dialog when the chat has a named active heartbeat automation"
        values={{
          name: (
            <strong
              key="automation-name"
              className="font-semibold text-token-text-primary"
            >
              {heartbeatAutomationName}
            </strong>
          ),
        }}
      />
    ) : (
      <FormattedMessage
        id="threadHeader.archiveConfirmHeartbeatSubtitleUnnamed"
        defaultMessage="This chat has an active heartbeat automation. Archiving the chat will also remove it and stop future runs."
        description="Subtitle for archive chat confirmation dialog when the chat has an unnamed active heartbeat automation"
      />
    )
  ) : (
    <FormattedMessage
      id="threadHeader.archiveConfirmSubtitle"
      defaultMessage="You can find it later in your archived chats."
      description="Subtitle for archive chat confirmation dialog"
    />
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onConfirm();
  };
  return (
    <DialogRoot
      open={open}
      onOpenChange={onOpenChange}
      size="compact"
      contentProps={{
        "aria-describedby": undefined,
        onOpenAutoFocus: focusArchiveConfirmButton,
        onEscapeKeyDown: () => {
          onOpenChange(false);
        },
      }}
    >
      <DialogContent as="form" onSubmit={handleSubmit}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogBody>
          <DialogHeader title={title} subtitle={subtitle} />
        </DialogBody>
        <DialogBody>
          <DialogFooter>
            <Button
              color="ghost"
              type="button"
              onClick={() => {
                onOpenChange(false);
              }}
            >
              <FormattedMessage
                id="threadHeader.archiveConfirmCancel"
                defaultMessage="Cancel"
                description="Cancel button label for archive thread confirmation dialog"
              />
            </Button>
            <Button
              data-archive-confirm-button={true}
              color="danger"
              type="submit"
            >
              {hasHeartbeatAutomation ? (
                <FormattedMessage
                  id="threadHeader.archiveConfirmHeartbeatConfirm"
                  defaultMessage="Archive and remove"
                  description="Confirm button label for archive chat confirmation dialog when the chat has an active heartbeat automation"
                />
              ) : (
                <FormattedMessage
                  id="threadHeader.archiveConfirmConfirm"
                  defaultMessage="Archive"
                  description="Confirm button label for archive chat confirmation dialog"
                />
              )}
            </Button>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
function focusArchiveConfirmButton(event: DialogOpenAutoFocusEvent): void {
  event.preventDefault();
  event.currentTarget?.querySelector("[data-archive-confirm-button]")?.focus();
}

export function initArchiveThreadConfirmDialogChunk(): void {}
