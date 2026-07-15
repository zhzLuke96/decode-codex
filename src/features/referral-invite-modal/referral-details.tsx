// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Referral limits, consent, and eligibility rule rows.

import { type ReactNode } from "react";
import clsx from "clsx";
import { vscodeApiF as vscodeBridge } from "../../boundaries/vscode-api";
import { ChevronIcon } from "../../icons/chevron-icon";
import { Checkbox } from "../../utils/checkbox";
import { FormattedMessage } from "../../vendor/react-intl";
import { referralModalClasses, ReferralLimitMarkIcon } from "./styles";
import type {
  IntlFormatter,
  ReferralEligibilityTimeFrameRule,
  ReferralLimitScope,
  ReferralRewardType,
} from "./types";
type ReferralLimitCardProps = {
  limitScope: ReferralLimitScope;
  reachedLimitRule?: ReferralEligibilityTimeFrameRule;
  rewardType: ReferralRewardType;
};
type OptionalRowsProps = {
  checked: boolean;
  consentCheckboxId: string;
  disabled: boolean;
  eligibilityRules: string[];
  eligibilityRulesId: string;
  hasEligibilityRules: boolean;
  intl: IntlFormatter;
  isEligibilityExpanded: boolean;
  isFormDisabled: boolean;
  onCheckedChange: (checked: boolean) => void;
  onToggleEligibility: () => void;
  recipientCount: number;
  showConsentRow: boolean;
};
export function ReferralLimitCard({
  limitScope,
  reachedLimitRule,
  rewardType,
}: ReferralLimitCardProps): JSX.Element {
  return (
    <div className="mt-6 rounded-xl border border-[var(--referral-modal-border)] bg-[var(--referral-modal-input-background)] p-4 shadow-sm">
      <div aria-hidden={true} className="mb-3 flex items-center gap-1">
        {reachedLimitRule == null ? (
          <ReferralLimitMarkIcon className="size-5" />
        ) : (
          Array.from(
            {
              length: reachedLimitRule.invites_total,
            },
            (_, index) => (
              <ReferralLimitMarkIcon key={index} className="size-5" />
            ),
          )
        )}
      </div>
      <p className="m-0 text-sm leading-5 font-semibold text-[var(--referral-modal-primary)]">
        {reachedLimitRule == null ? (
          <FormattedMessage
            id="codex.referralInviteModal.referralLimit.fallbackTitle"
            defaultMessage="{scope, select, workspace {Your workspace reached its invite limit} other {You reached your invite limit}}"
            description="Fallback title shown when the inviter or their workspace has reached a referral invite reward limit and the exact count is unavailable"
            values={{
              scope: limitScope,
            }}
          />
        ) : (
          <FormattedMessage
            id="codex.referralInviteModal.referralLimit.title"
            defaultMessage="{scope, select, workspace {Your workspace has sent} other {You\u2019ve sent}} {inviteLimit, plural, one {# or more invite} other {# or more invites}}"
            description="Title shown when the inviter or their workspace has reached a referral invite reward limit"
            values={{
              inviteLimit: reachedLimitRule.invites_total,
              scope: limitScope,
            }}
          />
        )}
      </p>
      <p className="mt-1 mb-0 text-sm leading-5 text-[var(--referral-modal-secondary)]">
        <FormattedMessage
          id="codex.referralInviteModal.referralLimit.description"
          defaultMessage="You can still invite {scope, select, workspace {coworkers} other {friends}} to Codex, but {scope, select, workspace {your workspace won\u2019t} other {you won\u2019t}} receive {rewardType, select, credits {credits} other {rate limit resets}}"
          description="Explanation shown when the inviter or their workspace has no rewarded referrals remaining"
          values={{
            rewardType,
            scope: limitScope,
          }}
        />
      </p>
    </div>
  );
}
export function OptionalRows({
  checked,
  consentCheckboxId,
  disabled,
  eligibilityRules,
  eligibilityRulesId,
  hasEligibilityRules,
  intl,
  isEligibilityExpanded,
  isFormDisabled,
  onCheckedChange,
  onToggleEligibility,
  recipientCount,
  showConsentRow,
}: OptionalRowsProps): JSX.Element {
  return (
    <div
      className={clsx(
        referralModalClasses.optionalRows,
        isFormDisabled && referralModalClasses.optionalRowsHidden,
      )}
    >
      <div
        className={clsx(
          referralModalClasses.optionalRowsContent,
          "flex flex-col",
        )}
      >
        <div
          aria-hidden={!showConsentRow}
          className={clsx(
            referralModalClasses.consentRow,
            showConsentRow && referralModalClasses.consentRowVisible,
          )}
        >
          <div className={referralModalClasses.consentRowContent}>
            <div className="relative flex items-start gap-3">
              <Checkbox
                id={consentCheckboxId}
                className="mt-0.5 cursor-interaction"
                checked={checked}
                disabled={!showConsentRow || disabled}
                onCheckedChange={onCheckedChange}
              />
              <label
                className="cursor-interaction text-sm leading-5 text-[var(--referral-modal-primary)]"
                htmlFor={consentCheckboxId}
              >
                {recipientCount <= 1 ? (
                  <FormattedMessage
                    id="codex.referralInviteModal.consent.single"
                    defaultMessage="I have the consent of this person to send them this invite"
                    description="Consent confirmation for sending a Codex referral invite to one recipient"
                  />
                ) : (
                  <FormattedMessage
                    id="codex.referralInviteModal.consent.multiple"
                    defaultMessage="I have the consent of these people to send them this invite"
                    description="Consent confirmation for sending Codex referral invites to multiple recipients"
                  />
                )}
              </label>
            </div>
          </div>
        </div>
        {hasEligibilityRules ? (
          <EligibilityRules
            eligibilityRules={eligibilityRules}
            eligibilityRulesId={eligibilityRulesId}
            intl={intl}
            isEligibilityExpanded={isEligibilityExpanded}
            onToggleEligibility={onToggleEligibility}
          />
        ) : null}
      </div>
    </div>
  );
}
function EligibilityRules({
  eligibilityRules,
  eligibilityRulesId,
  intl,
  isEligibilityExpanded,
  onToggleEligibility,
}: {
  eligibilityRules: string[];
  eligibilityRulesId: string;
  intl: IntlFormatter;
  isEligibilityExpanded: boolean;
  onToggleEligibility: () => void;
}): JSX.Element {
  return (
    <div className="border-t border-[var(--referral-modal-border)] pt-3">
      <div className="relative flex w-full items-center justify-between gap-3 rounded-sm p-3 text-sm text-[var(--referral-modal-secondary)] hover:bg-token-list-hover-background">
        <button
          aria-controls={eligibilityRulesId}
          aria-expanded={isEligibilityExpanded}
          aria-label={intl.formatMessage({
            id: "codex.referralInviteModal.eligibilityCriteria",
            defaultMessage: "Eligibility criteria",
            description:
              "Expandable section label for Codex referral invite eligibility rules",
          })}
          className="absolute inset-0 cursor-interaction rounded-sm bg-transparent"
          onClick={onToggleEligibility}
          type="button"
        />
        <div className="flex min-w-0 items-center gap-1">
          <span aria-hidden={true}>
            <FormattedMessage
              id="codex.referralInviteModal.eligibilityCriteria"
              defaultMessage="Eligibility criteria"
              description="Expandable section label for Codex referral invite eligibility rules"
            />
          </span>
          <a
            className="relative z-[1] cursor-interaction px-1 hover:text-[var(--referral-modal-primary)]"
            href="https://help.openai.com/articles/20001271"
            onClick={openReferralTerms}
          >
            <FormattedMessage
              id="codex.referralInviteModal.viewFullTerms"
              defaultMessage="(<terms>view full terms</terms>)"
              description="Link to the full Codex referral invite terms"
              values={{
                terms: renderTermsText,
              }}
            />
          </a>
        </div>
        <ChevronIcon
          aria-hidden={true}
          className={clsx(
            "icon-2xs shrink-0 transition-transform duration-200",
            isEligibilityExpanded && "rotate-180",
          )}
        />
      </div>
      {isEligibilityExpanded ? (
        <div id={eligibilityRulesId} className="overflow-hidden">
          <ol className="m-0 flex list-decimal flex-col gap-2 pt-3 pl-5 text-sm leading-5 text-[var(--referral-modal-secondary)]">
            {eligibilityRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
function openReferralTerms(event: { preventDefault: () => void }): void {
  event.preventDefault();
  vscodeBridge.dispatchMessage("open-in-browser", {
    url: "https://help.openai.com/articles/20001271",
  });
}
function renderTermsText(chunks: ReactNode): ReactNode {
  return (
    <span className="underline decoration-current decoration-[0.5px] underline-offset-2">
      {chunks}
    </span>
  );
}
