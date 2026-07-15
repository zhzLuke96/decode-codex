// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Confirmation dialog shown when an MCP app asks to enqueue a follow-up prompt.
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout as Dialog,
} from "../ui/dialog-layout";

type FollowUpConfirmation = {
  onCancel: () => void;
  onConfirmCurrentThread: (prompt: string) => void;
  onConfirmNewThread: (result: {
    prompt: string;
    type: "new-thread";
  }) => void;
  prompt: string;
  title?: string;
};

type FollowUpConfirmationDialogProps = {
  confirmation: FollowUpConfirmation | null;
};

export function FollowUpConfirmationDialog({
  confirmation,
}: FollowUpConfirmationDialogProps) {
  if (confirmation == null) return null;

  const title =
    confirmation.title ?? (
      <FormattedMessage
        id="mcpApp.followUpConfirmation.title"
        defaultMessage="Send follow-up?"
        description="Title for confirming an MCP app follow-up prompt"
      />
    );

  return (
    <Dialog open={true} onOpenChange={(open) => !open && confirmation.onCancel()}>
      <DialogHeader title={title} />
      <DialogBody className="gap-3">
        <p className="text-size-chat text-token-text-secondary">
          <FormattedMessage
            id="mcpApp.followUpConfirmation.description"
            defaultMessage="Choose where to send this prompt."
            description="Description for confirming an MCP app follow-up prompt"
          />
        </p>
        <pre className="max-h-48 overflow-auto whitespace-pre-wrap rounded-md bg-token-bg-secondary p-3 text-size-chat text-token-foreground">
          {confirmation.prompt}
        </pre>
      </DialogBody>
      <DialogFooter>
        <Button color="ghost" onClick={confirmation.onCancel}>
          <FormattedMessage
            id="mcpApp.followUpConfirmation.cancel"
            defaultMessage="Cancel"
            description="Cancel button for MCP app follow-up confirmation"
          />
        </Button>
        <Button
          color="secondary"
          onClick={() =>
            confirmation.onConfirmNewThread({
              prompt: confirmation.prompt,
              type: "new-thread",
            })
          }
        >
          <FormattedMessage
            id="mcpApp.followUpConfirmation.newThread"
            defaultMessage="New thread"
            description="Button for sending an MCP app follow-up to a new thread"
          />
        </Button>
        <Button
          color="primary"
          onClick={() =>
            confirmation.onConfirmCurrentThread(confirmation.prompt)
          }
        >
          <FormattedMessage
            id="mcpApp.followUpConfirmation.currentThread"
            defaultMessage="Current thread"
            description="Button for sending an MCP app follow-up to the current thread"
          />
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
