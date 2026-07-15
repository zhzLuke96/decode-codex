// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pill shown on a sent user message for a pull request merge task.
import { FormattedMessage } from "../vendor/react-intl";
import { AttachmentPill } from "../composer/user-message-attachment-pills";
import { PullRequestIcon } from "../icons/pull-request-icon";

export interface PullRequestMergeTaskPillProps {
  pullRequestNumber: number;
}

export function PullRequestMergeTaskPill({
  pullRequestNumber,
}: PullRequestMergeTaskPillProps) {
  return (
    <AttachmentPill Icon={PullRequestIcon}>
      <FormattedMessage
        id="codex.userMessage.pullRequestMergeTask"
        defaultMessage="PR #{number}"
        description="Pill shown on a user message for a pull request merge task"
        values={{ number: pullRequestNumber }}
      />
    </AttachmentPill>
  );
}
