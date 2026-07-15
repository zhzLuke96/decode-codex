// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Localized error formatting for referral invite form validation.

import type { IntlFormatter } from "./types";

export function formatMaxEmailsError(
  intl: IntlFormatter,
  isPersonalAccount: boolean,
  maxEmails: number,
): string {
  return isPersonalAccount
    ? intl.formatMessage(
        {
          id: "codex.referralInviteModal.maxEmailsError.personal",
          defaultMessage:
            "You can invite up to {maxEmails, plural, one {# friend} other {# friends}} at a time. Remove one to add another.",
          description:
            "Inline message shown when the Codex referral invite modal in a personal account reaches the maximum number of emails",
        },
        { maxEmails },
      )
    : intl.formatMessage(
        {
          id: "codex.referralInviteModal.maxEmailsError.workspace",
          defaultMessage:
            "You can invite up to {maxEmails, plural, one {# coworker} other {# coworkers}} at a time. Remove one to add another.",
          description:
            "Inline message shown when the Codex referral invite modal in a workspace account reaches the maximum number of emails",
        },
        { maxEmails },
      );
}

export function formatInvalidEmailsError(
  intl: IntlFormatter,
  invalidEmails: string[],
): string {
  return intl.formatMessage(
    {
      id: "codex.referralInviteModal.invalidEmailsError",
      defaultMessage: "Fix these emails: {emails}",
      description:
        "Error shown when one or more entered referral invite emails are invalid",
    },
    {
      emails: invalidEmails.join(", "),
    },
  );
}

export function formatFailedInviteError(
  intl: IntlFormatter,
  failedEmails: string[],
  backendMessage?: string,
): string {
  if (backendMessage == null) {
    return intl.formatMessage(
      {
        id: "codex.referralInviteModal.failedEmailsError",
        defaultMessage: "Couldn\u2019t send invites to: {emails}",
        description:
          "Error shown when one or more Codex referral invite emails fail to send",
      },
      {
        emails: failedEmails.join(", "),
      },
    );
  }

  return intl.formatMessage(
    {
      id: "codex.referralInviteModal.failedEmailsDetailedError",
      defaultMessage: "{message}: {emails}",
      description:
        "Error shown when the backend returns a specific reason that one or more Codex referral invite emails failed",
    },
    {
      emails: failedEmails.join(", "),
      message: backendMessage,
    },
  );
}
