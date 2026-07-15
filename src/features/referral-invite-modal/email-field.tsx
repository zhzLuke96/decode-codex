// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Chip-style email input used by the referral invite modal.

import { type ClipboardEvent, type KeyboardEvent } from "react";
import clsx from "clsx";
import { XIcon } from "../../icons/x-icon";
import type { IntlFormatter } from "./types";
type EmailInputBoxProps = {
  emailInput: string;
  emailInputId: string;
  emails: string[];
  hasFeedbackError: boolean;
  intl: IntlFormatter;
  invalidEmailSet: Set<string>;
  isAtMaxEmails: boolean;
  isInteractionLocked: boolean;
  onEmailBlur: () => void;
  onEmailChange: (value: string) => void;
  onEmailKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onEmailPaste: (event: ClipboardEvent<HTMLInputElement>) => void;
  onRemoveEmail: (email: string) => void;
  statusMessageId?: string;
};
type EmailChipProps = {
  disabled: boolean;
  email: string;
  intl: IntlFormatter;
  invalid: boolean;
  onRemove: (email: string) => void;
};
export function EmailInputBox({
  emails,
  emailInput,
  emailInputId,
  hasFeedbackError,
  intl,
  invalidEmailSet,
  isAtMaxEmails,
  isInteractionLocked,
  onEmailBlur,
  onEmailChange,
  onEmailKeyDown,
  onEmailPaste,
  onRemoveEmail,
  statusMessageId,
}: EmailInputBoxProps): JSX.Element {
  const placeholder = isAtMaxEmails
    ? intl.formatMessage({
        id: "codex.referralInviteModal.maxEmailsPlaceholder",
        defaultMessage: "Maximum reached",
        description:
          "Placeholder shown when the Codex referral invite modal email input has reached the maximum number of emails",
      })
    : emails.length > 0
      ? undefined
      : intl.formatMessage({
          id: "codex.referralInviteModal.emailPlaceholder",
          defaultMessage: "Add emails",
          description:
            "Placeholder for the email field in the Codex referral invite modal",
        });
  return (
    <div className="flex flex-col gap-2">
      <div
        aria-invalid={hasFeedbackError}
        className={clsx(
          "flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-lg border border-[var(--referral-modal-border)] bg-[var(--referral-modal-input-background)] px-3 py-1 outline-none focus-within:border-[var(--referral-modal-focus)]",
          hasFeedbackError &&
            "border-token-error-foreground shadow-[0_0_0_2px_color-mix(in_srgb,var(--color-token-error-foreground)_18%,transparent)]",
        )}
      >
        {emails.map((email) => (
          <EmailChip
            key={email}
            disabled={isInteractionLocked}
            email={email}
            intl={intl}
            invalid={invalidEmailSet.has(email)}
            onRemove={onRemoveEmail}
          />
        ))}
        <input
          autoFocus={true}
          aria-describedby={statusMessageId}
          aria-invalid={hasFeedbackError}
          className="h-8 min-w-[120px] flex-[1_1_140px] border-0 bg-transparent px-1 py-0 text-sm leading-5 text-[var(--referral-modal-primary)] caret-[var(--referral-modal-primary)] outline-none placeholder:text-[var(--referral-modal-input-placeholder)] disabled:opacity-70"
          disabled={isInteractionLocked}
          id={emailInputId}
          inputMode="email"
          onBlur={onEmailBlur}
          onChange={(event) => onEmailChange(event.target.value)}
          onKeyDown={onEmailKeyDown}
          onPaste={onEmailPaste}
          placeholder={placeholder}
          type="text"
          value={emailInput}
        />
      </div>
    </div>
  );
}
function EmailChip({
  disabled,
  email,
  intl,
  invalid,
  onRemove,
}: EmailChipProps): JSX.Element {
  return (
    <span
      className={clsx(
        "inline-flex min-h-7 max-w-full items-center gap-1.5 rounded-lg bg-[color-mix(in_srgb,var(--referral-modal-primary)_7%,transparent)] py-0 pl-2.5 pr-1.5 text-sm leading-5 text-[var(--referral-modal-primary)]",
        invalid &&
          "bg-[color-mix(in_srgb,var(--color-token-error-foreground)_12%,transparent)] text-token-error-foreground shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-token-error-foreground)_30%,transparent)]",
      )}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {email}
      </span>
      <button
        aria-label={intl.formatMessage(
          {
            id: "codex.referralInviteModal.removeEmail",
            defaultMessage: "Remove {email}",
            description:
              "Aria label for removing an email from the Codex referral invite modal",
          },
          {
            email,
          },
        )}
        className="cursor-interaction inline-flex size-[18px] items-center justify-center rounded-full border-0 bg-transparent p-0 text-current disabled:cursor-default disabled:opacity-50"
        disabled={disabled}
        onClick={() => onRemove(email)}
        type="button"
      >
        <XIcon className="size-3.5 stroke-[2.4]" />
      </button>
    </span>
  );
}
