// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Feedback dialog: wraps the shared FeedbackFormDialog with the feedback
// category options and an "include session logs" checkbox.
import { useState } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { FeedbackFormDialog } from "../ui/feedback-form-dialog";
import { FormRow } from "../ui/dialog-layout";
import { Checkbox } from "../utils/checkbox";
import { FEEDBACK_CATEGORY_OPTIONS } from "./feedback-categories";

export interface FeedbackDialogSubmission {
  classification: string;
  description: string;
  includeLogs: boolean;
}

export interface FeedbackDialogProps {
  onClose: () => void;
  onSubmit: (
    submission: FeedbackDialogSubmission,
  ) => boolean | void | Promise<boolean | void>;
}

export function FeedbackDialog({ onClose, onSubmit }: FeedbackDialogProps) {
  const [includeLogs, setIncludeLogs] = useState(true);

  const handleSubmit = ({
    details,
    selectedOptionId,
  }: {
    details: string;
    selectedOptionId: string;
  }) =>
    onSubmit({
      classification: selectedOptionId,
      description: details,
      includeLogs,
    });

  const includeLogsField = (
    <FormRow className="relative text-token-description-foreground">
      <Checkbox
        id="feedback-include-logs"
        checked={includeLogs}
        onCheckedChange={setIncludeLogs}
      />
      <label htmlFor="feedback-include-logs">
        <FormattedMessage
          id="feedback.dialog.includeLogsLabel"
          defaultMessage="Include current Codex session logs"
          description="Label for the checkbox that toggles including session logs"
        />
      </label>
    </FormRow>
  );

  return (
    <FeedbackFormDialog
      closeOnSubmit="immediate"
      freeformFeedbackRequired
      onClose={onClose}
      onSubmit={handleSubmit}
      options={FEEDBACK_CATEGORY_OPTIONS}
      belowFreeformContent={includeLogsField}
    />
  );
}
