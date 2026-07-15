// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Stateful Codex referral invite modal.

import React from "react";
import { useAppScopeValue } from "../../boundaries/app-scope";
import {
  _r as productLoggerSignal,
  productLoggerQn as referralInviteModalAction,
  productLoggerXn as referralInviteModalEvent,
} from "../../analytics/product-logger";
import {
  useReferralEligibilityRulesQuery,
  useReferralInviteMutation,
  useSelectedAccountQuery,
} from "../../runtime/codex-api";
import { useIntl } from "../../vendor/react-intl";
import { parseReferralInviteBackendError } from "./backend-error";
import {
  formatFailedInviteError,
  formatInvalidEmailsError,
  formatMaxEmailsError,
} from "./form-errors";
import {
  getInvalidEmails,
  isValidEmail,
  normalizeEmailKey,
  splitEmailInput,
} from "./email-utils";
import { ReferralInviteModalView } from "./modal-view";
import type {
  FeedbackState,
  ProductLogger,
  ReferralEligibilityRulesResponse,
  ReferralGrantType,
  ReferralInviteEventPayload,
  ReferralInviteModalProps,
  ReferralInviteMutationResult,
  ReferralLimitScope,
  ReferralRewardType,
  SubmissionState,
} from "./types";
type SelectedAccount = {
  structure?: string | null;
};
export function ReferralInviteModalIcon(
  props: ReferralInviteModalProps,
): JSX.Element {
  const {
    grantAmount,
    hasReachedReferralLimit = false,
    hasReachedWorkspaceReferralLimit = false,
    isPersonalAccount,
    onClose,
    referralBeaconType,
    referralGrantType,
    referralKey,
    referralRedemptionAction,
    remainingReferrals,
  } = props;
  const intl = useIntl();
  const productLogger = useAppScopeValue(productLoggerSignal) as ProductLogger;
  const selectedAccountQuery = useSelectedAccountQuery();
  const selectedAccount = selectedAccountQuery.data as
    | SelectedAccount
    | undefined;
  const eligibilityRulesQuery = useReferralEligibilityRulesQuery({
    referralKey,
  });
  const eligibilityRulesData = eligibilityRulesQuery.data as
    | ReferralEligibilityRulesResponse
    | undefined;
  const inviteMutation = useReferralInviteMutation();
  const emailInputId = React.useId();
  const consentCheckboxId = React.useId();
  const descriptionId = React.useId();
  const eligibilityRulesId = React.useId();
  const statusMessageId = `${emailInputId}-status`;
  const [emailInput, setEmailInput] = React.useState("");
  const [emails, setEmails] = React.useState<string[]>([]);
  const [invalidEmails, setInvalidEmails] = React.useState<string[]>([]);
  const [confirmedConsent, setConfirmedConsent] = React.useState(false);
  const [isEligibilityExpanded, setIsEligibilityExpanded] =
    React.useState(false);
  const [submissionState, setSubmissionState] =
    React.useState<SubmissionState>("idle");
  const [feedback, setFeedback] = React.useState<FeedbackState>(null);
  const selectedAccountIsPersonal =
    selectedAccount?.structure?.toLowerCase() === "personal";
  const resolvedIsPersonalAccount =
    isPersonalAccount ?? selectedAccountIsPersonal;
  const rewardType = normalizeReferralRewardType(referralGrantType);
  const rewardAmount =
    grantAmount ?? (rewardType === "rateLimitReset" ? 1 : 100);
  const totalCredits = rewardAmount * 2;
  const maxEmails =
    remainingReferrals != null && remainingReferrals > 0
      ? Math.min(remainingReferrals, 5)
      : 5;
  const isAtMaxEmails = !(emails.length < maxEmails);
  const isSubmitting =
    Boolean(inviteMutation.isPending) || submissionState === "submitting";
  const isSendAnimating = submissionState === "sendAnimation";
  const isSuccess = submissionState === "success";
  const isBusyBeforeSuccess = isSubmitting || isSendAnimating;
  const isInteractionLocked = isBusyBeforeSuccess || isSuccess;
  const isFormDisabled = isSubmitting || isSendAnimating || isSuccess;
  const hasFeedbackError = feedback?.type === "error";
  const requiresExplicitConfirmation =
    eligibilityRulesData?.requires_explicit_confirmation !== false;
  const allEmailsValid = emails.length > 0 && emails.every(isValidEmail);
  const showConsentRow = requiresExplicitConfirmation && allEmailsValid;
  const eligibilityRules = Array.isArray(eligibilityRulesData?.rules)
    ? eligibilityRulesData.rules
    : [];
  const hasEligibilityRules = eligibilityRules.length > 0;
  const limitScope: ReferralLimitScope = hasReachedWorkspaceReferralLimit
    ? "workspace"
    : "user";
  const reachedLimitRule = hasReachedReferralLimit
    ? eligibilityRulesData?.time_frame_rules?.find(
        (rule) =>
          rule.type === limitScope && rule.invites_sent >= rule.invites_total,
      )
    : undefined;
  const invalidEmailSet = React.useMemo(
    () => new Set(invalidEmails),
    [invalidEmails],
  );
  const trackReferralInviteEvent = React.useCallback(
    (payload: ReferralInviteEventPayload) => {
      productLogger.logProductEvent(referralInviteModalEvent, {
        ...payload,
        referralBeaconType: referralBeaconType ?? undefined,
        referralKey,
        referralRewardType: rewardType,
      });
    },
    [productLogger, referralBeaconType, referralKey, rewardType],
  );
  const trackReferralInviteEventRef = React.useRef(trackReferralInviteEvent);
  trackReferralInviteEventRef.current = trackReferralInviteEvent;
  React.useEffect(() => {
    trackReferralInviteEventRef.current({
      action:
        referralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_SHOWN,
    });
  }, []);
  const feedbackMessage =
    feedback?.type === "error"
      ? feedback.message
      : isAtMaxEmails
        ? formatMaxEmailsError(intl, resolvedIsPersonalAccount, maxEmails)
        : null;
  const describedById = feedbackMessage == null ? undefined : statusMessageId;
  const submitDisabled =
    !allEmailsValid ||
    (requiresExplicitConfirmation && !confirmedConsent) ||
    isInteractionLocked;
  function appendEmails(rawInput: string): {
    blockedByLimit: boolean;
    emails: string[];
  } {
    const parsedEmails = splitEmailInput(rawInput);
    if (parsedEmails.length === 0) {
      return {
        blockedByLimit: false,
        emails,
      };
    }
    const seenEmails = new Set(emails.map(normalizeEmailKey));
    const uniqueNewEmails = parsedEmails.filter((email) => {
      const emailKey = normalizeEmailKey(email);
      if (seenEmails.has(emailKey)) return false;
      seenEmails.add(emailKey);
      return true;
    });
    const remainingSlots = maxEmails - emails.length;
    const acceptedEmails = uniqueNewEmails.slice(0, remainingSlots);
    const overflowEmails = uniqueNewEmails.slice(remainingSlots);
    const nextEmails = [...emails, ...acceptedEmails];
    const nextInvalidEmails = getInvalidEmails(nextEmails);
    setEmails(nextEmails);
    setEmailInput(overflowEmails.join(", "));
    setConfirmedConsent(false);
    setInvalidEmails(nextInvalidEmails);
    if (nextInvalidEmails.length > 0) {
      setFeedback({
        message: formatInvalidEmailsError(intl, nextInvalidEmails),
        reason: "invalidEmails",
        type: "error",
      });
    } else if (overflowEmails.length > 0) {
      setFeedback({
        message: formatMaxEmailsError(
          intl,
          resolvedIsPersonalAccount,
          maxEmails,
        ),
        reason: "maxEmails",
        type: "error",
      });
    } else {
      setFeedback(null);
    }
    return {
      blockedByLimit: overflowEmails.length > 0,
      emails: nextEmails,
    };
  }
  function removeEmail(emailToRemove: string): void {
    const nextEmails = emails.filter((email) => email !== emailToRemove);
    const nextInvalidEmails = getInvalidEmails(nextEmails);
    setEmails(nextEmails);
    setConfirmedConsent(false);
    setInvalidEmails(nextInvalidEmails);
    setFeedback(
      nextInvalidEmails.length > 0
        ? {
            message: formatInvalidEmailsError(intl, nextInvalidEmails),
            reason: "invalidEmails",
            type: "error",
          }
        : null,
    );
  }
  async function submitInvites(): Promise<void> {
    if (requiresExplicitConfirmation && !confirmedConsent) return;
    setFeedback(null);
    setInvalidEmails([]);
    const pendingInput = emailInput.trim();
    const appendResult =
      pendingInput.length > 0
        ? appendEmails(emailInput)
        : {
            blockedByLimit: false,
            emails,
          };
    if (appendResult.blockedByLimit) return;
    const submitEmails = appendResult.emails;
    if (submitEmails.length === 0) return;
    const invalidSubmitEmails = getInvalidEmails(submitEmails);
    if (invalidSubmitEmails.length > 0) {
      setInvalidEmails(invalidSubmitEmails);
      setFeedback({
        message: formatInvalidEmailsError(intl, invalidSubmitEmails),
        reason: "invalidEmails",
        type: "error",
      });
      return;
    }
    trackReferralInviteEvent({
      action:
        referralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_SEND_CLICKED,
      emailCount: submitEmails.length,
    });
    setSubmissionState("submitting");
    try {
      const result = (await inviteMutation.mutateAsync({
        emails: submitEmails,
        referralKey,
      })) as ReferralInviteMutationResult;
      trackReferralInviteEvent({
        action:
          referralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_SEND_SUCCEEDED,
        emailCount: result.invites.length,
      });
      setFeedback({
        emails: result.invites.map((invite) => invite.email),
        type: "success",
      });
      setSubmissionState("sendAnimation");
    } catch (error) {
      const backendError = parseReferralInviteBackendError(error);
      const failedEmails =
        backendError?.failedEmails != null &&
        backendError.failedEmails.length > 0
          ? backendError.failedEmails
          : submitEmails;
      setSubmissionState("idle");
      setInvalidEmails(failedEmails);
      if (backendError != null) {
        trackReferralInviteEvent({
          action:
            referralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_BACKEND_ERROR,
          emailCount: submitEmails.length,
          errorResponsibility:
            backendError.backendErrorAnalytics.errorResponsibility,
          errorType: backendError.backendErrorAnalytics.errorType,
          failedEmailCount: failedEmails.length,
          hasBackendDetail: backendError.backendErrorAnalytics.hasBackendDetail,
          httpStatus: backendError.backendErrorAnalytics.httpStatus,
        });
      }
      setFeedback({
        message: formatFailedInviteError(
          intl,
          failedEmails,
          backendError?.message,
        ),
        reason: "failedInvite",
        type: "error",
      });
    }
  }
  function handleCloseClick(): void {
    if (isBusyBeforeSuccess) return;
    trackReferralInviteEvent({
      action:
        referralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_CLOSE_CLICKED,
    });
    onClose();
  }
  function handleDoneClick(): void {
    trackReferralInviteEvent({
      action:
        referralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_DONE_CLICKED,
    });
    onClose();
  }
  function handleEmailInputChange(nextValue: string): void {
    setEmailInput(nextValue);
    setConfirmedConsent(false);
    if (isAtMaxEmails && nextValue.trim().length > 0) {
      setFeedback({
        message: formatMaxEmailsError(
          intl,
          resolvedIsPersonalAccount,
          maxEmails,
        ),
        reason: "maxEmails",
        type: "error",
      });
    } else if (feedback?.type === "error" && feedback.reason === "maxEmails") {
      setFeedback(null);
    }
  }
  function handleEmailKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void {
    if (event.key === "Enter") {
      event.preventDefault();
      if (splitEmailInput(emailInput).length === 0) {
        void submitInvites();
        return;
      }
      appendEmails(emailInput);
      return;
    }
    if (event.key === ",") {
      event.preventDefault();
      appendEmails(emailInput);
      return;
    }
    if (event.key === "Backspace" && emailInput.length === 0) {
      const lastEmail = emails[emails.length - 1];
      if (lastEmail != null) removeEmail(lastEmail);
    }
  }
  function handleEmailPaste(
    event: React.ClipboardEvent<HTMLInputElement>,
  ): void {
    const pastedText = event.clipboardData.getData("text");
    if (splitEmailInput(pastedText).length > 1) {
      event.preventDefault();
      appendEmails(pastedText);
    }
  }
  function handlePaperPlaneAnimationEnd(): void {
    if (submissionState === "sendAnimation") {
      setSubmissionState("success");
    }
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    void submitInvites();
  }
  return (
    <ReferralInviteModalView
      confirmedConsent={confirmedConsent}
      consentCheckboxId={consentCheckboxId}
      descriptionId={descriptionId}
      eligibilityRules={eligibilityRules}
      eligibilityRulesId={eligibilityRulesId}
      emailInput={emailInput}
      emailInputId={emailInputId}
      emails={emails}
      feedback={feedback}
      feedbackMessage={feedbackMessage}
      hasEligibilityRules={hasEligibilityRules}
      hasFeedbackError={hasFeedbackError}
      hasReachedReferralLimit={hasReachedReferralLimit}
      intl={intl}
      invalidEmailSet={invalidEmailSet}
      isAtMaxEmails={isAtMaxEmails}
      isBusyBeforeSuccess={isBusyBeforeSuccess}
      isEligibilityExpanded={isEligibilityExpanded}
      isFormDisabled={isFormDisabled}
      isInteractionLocked={isInteractionLocked}
      isPersonalAccount={resolvedIsPersonalAccount}
      isSendAnimating={isSendAnimating}
      isSubmitting={isSubmitting}
      isSuccess={isSuccess}
      limitScope={limitScope}
      maxEmails={maxEmails}
      onCloseClick={handleCloseClick}
      onConfirmedConsentChange={setConfirmedConsent}
      onDoneClick={handleDoneClick}
      onEmailBlur={() => appendEmails(emailInput)}
      onEmailChange={handleEmailInputChange}
      onEmailKeyDown={handleEmailKeyDown}
      onEmailPaste={handleEmailPaste}
      onPaperPlaneAnimationEnd={handlePaperPlaneAnimationEnd}
      onRemoveEmail={removeEmail}
      onSubmit={handleSubmit}
      onToggleEligibility={() =>
        setIsEligibilityExpanded((expanded) => !expanded)
      }
      reachedLimitRule={reachedLimitRule}
      redemptionAction={referralRedemptionAction}
      rewardAmount={rewardAmount}
      rewardType={rewardType}
      showConsentRow={showConsentRow}
      statusMessageId={describedById}
      submitDisabled={submitDisabled}
      totalCredits={totalCredits}
    />
  );
}
function normalizeReferralRewardType(
  referralGrantType: ReferralGrantType,
): ReferralRewardType {
  switch (referralGrantType) {
    case "rate_limit_reset_credit":
      return "rateLimitReset";
    case "workspace_credits":
    case null:
    case undefined:
      return "credits";
  }
}
