// Restored from ref/webview/assets/pull-request-status-vGvycRDN.js
// Pull request button label extracted from the pull-request status runtime.
import { FormattedMessage } from "react-intl";

interface PullRequestButtonLabelProps {
  number?: number | null;
}

function PullRequestButtonLabel({ number }: PullRequestButtonLabelProps) {
  return number == null ? (
    <FormattedMessage
      id="localConversationPage.pullRequestButtonLabel"
      defaultMessage="PR"
      description="Label for the pull request button when the PR number is unavailable"
    />
  ) : (
    <FormattedMessage
      id="localConversationPage.pullRequestButtonLabel.withNumber"
      defaultMessage="PR {number}"
      description="Label for the pull request button when the PR number is known"
      values={{
        number,
      }}
    />
  );
}

export { PullRequestButtonLabel };
