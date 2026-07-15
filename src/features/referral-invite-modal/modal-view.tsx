// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Presentational shell for the Codex referral invite modal.

import { type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import {
  DialogDescription,
  DialogLayout,
  DialogTitle,
} from "../../ui/dialog-layout";
import { FormattedMessage } from "../../vendor/react-intl";
import { HeaderArtwork, ReferralModalBackdrop } from "./artwork";
import { ReferralInviteDescription, ReferralInviteTitle } from "./copy";
import { EmailInputBox } from "./email-field";
import { OptionalRows, ReferralLimitCard } from "./referral-details";
import { referralModalClasses } from "./styles";
import { SuccessPanel } from "./success-panel";
import { ReferralInviteSuccessTitle } from "./success-copy";
import type {
  FeedbackState,
  IntlFormatter,
  ReferralEligibilityTimeFrameRule,
  ReferralLimitScope,
  ReferralRewardType,
} from "./types";
type ReferralInviteModalViewProps = {
  confirmedConsent: boolean;
  consentCheckboxId: string;
  descriptionId: string;
  eligibilityRules: string[];
  eligibilityRulesId: string;
  emailInput: string;
  emailInputId: string;
  emails: string[];
  feedback: FeedbackState;
  feedbackMessage: string | null;
  hasEligibilityRules: boolean;
  hasFeedbackError: boolean;
  hasReachedReferralLimit: boolean;
  intl: IntlFormatter;
  invalidEmailSet: Set<string>;
  isAtMaxEmails: boolean;
  isBusyBeforeSuccess: boolean;
  isEligibilityExpanded: boolean;
  isFormDisabled: boolean;
  isInteractionLocked: boolean;
  isPersonalAccount: boolean;
  isSendAnimating: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
  limitScope: ReferralLimitScope;
  onCloseClick: () => void;
  onConfirmedConsentChange: (checked: boolean) => void;
  onDoneClick: () => void;
  onEmailBlur: () => void;
  onEmailChange: (value: string) => void;
  onEmailKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onEmailPaste: (event: ClipboardEvent<HTMLInputElement>) => void;
  onPaperPlaneAnimationEnd: () => void;
  onRemoveEmail: (email: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onToggleEligibility: () => void;
  reachedLimitRule?: ReferralEligibilityTimeFrameRule;
  redemptionAction?: string;
  rewardAmount: number;
  rewardType: ReferralRewardType;
  showConsentRow: boolean;
  statusMessageId?: string;
  submitDisabled: boolean;
  totalCredits: number;
};
export function ReferralInviteModalView({
  confirmedConsent,
  consentCheckboxId,
  descriptionId,
  eligibilityRules,
  eligibilityRulesId,
  emailInput,
  emailInputId,
  emails,
  feedback,
  feedbackMessage,
  hasEligibilityRules,
  hasFeedbackError,
  hasReachedReferralLimit,
  intl,
  invalidEmailSet,
  isAtMaxEmails,
  isBusyBeforeSuccess,
  isEligibilityExpanded,
  isFormDisabled,
  isInteractionLocked,
  isPersonalAccount,
  isSendAnimating,
  isSubmitting,
  isSuccess,
  limitScope,
  onCloseClick,
  onConfirmedConsentChange,
  onDoneClick,
  onEmailBlur,
  onEmailChange,
  onEmailKeyDown,
  onEmailPaste,
  onPaperPlaneAnimationEnd,
  onRemoveEmail,
  onSubmit,
  onToggleEligibility,
  reachedLimitRule,
  redemptionAction,
  rewardAmount,
  rewardType,
  showConsentRow,
  statusMessageId,
  submitDisabled,
  totalCredits,
}: ReferralInviteModalViewProps): JSX.Element {
  const formIsHidden = isSendAnimating || isSuccess;
  const shouldShowOptionalRows = showConsentRow || hasEligibilityRules;
  const formDescriptionId = isSuccess ? undefined : descriptionId;
  const successDescriptionId = isSuccess ? descriptionId : undefined;
  const successCount =
    feedback?.type === "success" ? feedback.emails.length : 1;
  const handleOpenChange = (open: boolean) => {
    if (!open) onCloseClick();
  };
  const handleEscapeKeyDown = (event: Event) => {
    if (isBusyBeforeSuccess) event.preventDefault();
  };
  return (
    <DialogLayout
      open={true}
      onOpenChange={handleOpenChange}
      shouldIgnoreClickOutside={isBusyBeforeSuccess}
      size="default"
      overlayClassName="!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_64%,transparent)]"
      contentClassName="max-h-[calc(100dvh_-_32px)] !overflow-x-hidden !overflow-y-auto !rounded-[24px] !bg-transparent !p-0 !shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] !ring-0 !backdrop-blur-none"
      contentProps={{
        "aria-describedby": descriptionId,
        onEscapeKeyDown: handleEscapeKeyDown,
      }}
      showDialogClose={false}
    >
      <section
        className={clsx(
          referralModalClasses.modal,
          "relative isolate min-h-[448px] w-full overflow-hidden rounded-[inherit] bg-[var(--referral-modal-surface)] text-[var(--referral-modal-primary)] transition-colors duration-300",
        )}
      >
        <ReferralModalBackdrop expanded={formIsHidden} success={isSuccess} />
        <DialogTitle asChild>
          <h2 className="sr-only">
            {isSuccess && feedback?.type === "success" ? (
              <ReferralInviteSuccessTitle />
            ) : (
              <ReferralInviteTitle isPersonalAccount={isPersonalAccount} />
            )}
          </h2>
        </DialogTitle>
        <HeaderArtwork
          intl={intl}
          isSendAnimating={isSendAnimating}
          isSubmitting={isSubmitting}
          isSuccess={isSuccess}
          onCloseClick={onCloseClick}
          onPaperPlaneAnimationEnd={onPaperPlaneAnimationEnd}
        />
        <form
          aria-hidden={formIsHidden}
          className={clsx(
            referralModalClasses.form,
            "relative z-[1] flex flex-col gap-5 px-8 pb-6 pt-[41px]",
            formIsHidden && "pointer-events-none",
            formIsHidden && referralModalClasses.formHidden,
          )}
          noValidate={true}
          onSubmit={onSubmit}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="heading-base m-0 font-semibold text-[var(--referral-modal-primary)]">
              <ReferralInviteTitle isPersonalAccount={isPersonalAccount} />
            </h2>
            <DialogDescription
              className="m-0 w-full text-sm leading-[21px] tracking-normal text-[var(--referral-modal-secondary)]"
              id={formDescriptionId}
            >
              <ReferralInviteDescription
                grantAmount={rewardAmount}
                hasReachedReferralLimit={hasReachedReferralLimit}
                isPersonalAccount={isPersonalAccount}
                rewardType={rewardType}
                totalCredits={totalCredits}
              />
            </DialogDescription>
          </div>
          <div className="flex flex-col">
            <label className="sr-only" htmlFor={emailInputId}>
              <FormattedMessage
                id="codex.referralInviteModal.emailLabel"
                defaultMessage="Email"
                description="Label for the email field in the Codex referral invite modal"
              />
            </label>
            <EmailInputBox
              emails={emails}
              emailInput={emailInput}
              emailInputId={emailInputId}
              hasFeedbackError={hasFeedbackError}
              intl={intl}
              invalidEmailSet={invalidEmailSet}
              isAtMaxEmails={isAtMaxEmails}
              isInteractionLocked={isInteractionLocked}
              onEmailBlur={onEmailBlur}
              onEmailChange={onEmailChange}
              onEmailKeyDown={onEmailKeyDown}
              onEmailPaste={onEmailPaste}
              onRemoveEmail={onRemoveEmail}
              statusMessageId={statusMessageId}
            />
            {feedbackMessage == null ? null : (
              <p
                aria-live="polite"
                className={clsx(
                  "m-0 text-xs leading-normal",
                  hasFeedbackError
                    ? "text-token-error-foreground"
                    : "text-[var(--referral-modal-secondary)]",
                )}
                id={statusMessageId}
              >
                {feedbackMessage}
              </p>
            )}
            <Button
              className="mt-5 h-9 w-full justify-center rounded-full border-0 bg-[var(--referral-modal-button-background)] text-[var(--referral-modal-button-foreground)] hover:bg-[color-mix(in_srgb,var(--referral-modal-button-background)_80%,transparent)]"
              disabled={submitDisabled}
              loading={isSubmitting}
              type="submit"
            >
              <FormattedMessage
                id="codex.referralInviteModal.send"
                defaultMessage="Send"
                description="Send button label in the Codex referral invite modal"
              />
            </Button>
            {hasReachedReferralLimit ? (
              <ReferralLimitCard
                limitScope={limitScope}
                reachedLimitRule={reachedLimitRule}
                rewardType={rewardType}
              />
            ) : null}
            {shouldShowOptionalRows ? (
              <OptionalRows
                checked={confirmedConsent}
                consentCheckboxId={consentCheckboxId}
                disabled={isInteractionLocked}
                eligibilityRules={eligibilityRules}
                eligibilityRulesId={eligibilityRulesId}
                hasEligibilityRules={hasEligibilityRules}
                intl={intl}
                isEligibilityExpanded={isEligibilityExpanded}
                isFormDisabled={isFormDisabled}
                onCheckedChange={onConfirmedConsentChange}
                onToggleEligibility={onToggleEligibility}
                recipientCount={emails.length}
                showConsentRow={showConsentRow}
              />
            ) : null}
          </div>
        </form>
        <SuccessPanel
          count={successCount}
          descriptionId={successDescriptionId}
          isPersonalAccount={isPersonalAccount}
          isSuccess={isSuccess}
          onDoneClick={onDoneClick}
          redemptionAction={redemptionAction}
          rewardAmount={rewardAmount}
          rewardType={rewardType}
          usesRewardNeutralCopy={hasReachedReferralLimit}
        />
      </section>
    </DialogLayout>
  );
}
