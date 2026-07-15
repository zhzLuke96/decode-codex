// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Localized title and intro copy for the Codex referral invite modal.

import { type ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import type { ReferralRewardType } from "./types";

type ReferralInviteTitleProps = {
  isPersonalAccount: boolean;
};

type ReferralInviteDescriptionProps = {
  grantAmount: number;
  hasReachedReferralLimit: boolean;
  isPersonalAccount: boolean;
  rewardType: ReferralRewardType;
  totalCredits: number;
};

export function ReferralInviteTitle({
  isPersonalAccount,
}: ReferralInviteTitleProps): ReactNode {
  return isPersonalAccount ? (
    <FormattedMessage
      id="codex.referralInviteModal.personalTitle"
      defaultMessage="Invite a friend"
      description="Title for the Codex referral invite modal in a personal account"
    />
  ) : (
    <FormattedMessage
      id="codex.referralInviteModal.workspaceTitle"
      defaultMessage="Invite a coworker"
      description="Title for the Codex referral invite modal in a workspace account"
    />
  );
}

export function ReferralInviteDescription({
  grantAmount,
  hasReachedReferralLimit,
  isPersonalAccount,
  rewardType,
  totalCredits,
}: ReferralInviteDescriptionProps): ReactNode {
  if (hasReachedReferralLimit) {
    return (
      <FormattedMessage
        id="codex.referralInviteModal.referralLimit.inviteDescription"
        defaultMessage="Invite {audience, select, coworkers {coworkers} other {friends}} to start using Codex by email"
        description="Description shown when the inviter or their workspace has reached the referral reward limit"
        values={{
          audience: isPersonalAccount ? "friends" : "coworkers",
        }}
      />
    );
  }

  if (rewardType === "rateLimitReset") {
    return isPersonalAccount ? (
      <FormattedMessage
        id="codex.referralInviteModal.rateLimitDescription.personal"
        defaultMessage="When your friend joins and sends their first message, you\u2019ll each receive {grantAmount, plural, one {a rate limit reset} other {{grantAmount, number} rate limit resets}} that can be redeemed within 30 days."
        description="Description for the Codex referral invite modal in a personal account when both the inviter and friend receive a rate limit reset"
        values={{ grantAmount }}
      />
    ) : (
      <FormattedMessage
        id="codex.referralInviteModal.rateLimitDescription.workspace"
        defaultMessage="When your coworker joins and sends their first message, you\u2019ll each receive {grantAmount, plural, one {a rate limit reset} other {{grantAmount, number} rate limit resets}} that can be redeemed within 30 days."
        description="Description for the Codex referral invite modal in a workspace account when both the inviter and coworker receive a rate limit reset"
        values={{ grantAmount }}
      />
    );
  }

  return isPersonalAccount ? (
    <FormattedMessage
      id="codex.referralInviteModal.creditsDescription.personal"
      defaultMessage="When your friend joins and sends their first message, you\u2019ll each get {credits, number} credits to use in Codex"
      description="Description for the Codex referral invite modal in a personal account when the referral reward is credits"
      values={{
        credits: grantAmount,
      }}
    />
  ) : (
    <FormattedMessage
      id="codex.referralInviteModal.creditsDescription.workspace"
      defaultMessage="When your coworker joins and sends their first message, you\u2019ll each get {credits, number} credits ({totalCredits, number} total) added to the workspace pool"
      description="Description for the Codex referral invite modal in a workspace account when the referral reward is credits"
      values={{
        credits: grantAmount,
        totalCredits,
      }}
    />
  );
}
