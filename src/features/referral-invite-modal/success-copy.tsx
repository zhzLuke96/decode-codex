// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Localized success copy for the Codex referral invite modal.

import { type ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import type { ReferralRewardType } from "./types";

type ReferralInviteSuccessDescriptionProps = {
  count: number;
  credits: number;
  grantAmount: number;
  isPersonalAccount: boolean;
  redemptionAction?: string;
  rewardType: ReferralRewardType;
  usesRewardNeutralCopy: boolean;
};

type RateLimitResetRewardProps = {
  grantAmount: number;
};

export function ReferralInviteSuccessTitle(): ReactNode {
  return (
    <FormattedMessage
      id="codex.referralInviteModal.successTitle"
      defaultMessage="Invite sent"
      description="Success message shown after one or more Codex referral invites are sent"
    />
  );
}

export function ReferralInviteSuccessDescription({
  count,
  credits,
  grantAmount,
  isPersonalAccount,
  redemptionAction,
  rewardType,
  usesRewardNeutralCopy,
}: ReferralInviteSuccessDescriptionProps): ReactNode {
  if (usesRewardNeutralCopy) {
    return isPersonalAccount ? (
      <FormattedMessage
        id="codex.referralInviteModal.rewardNeutral.successDescription.personal"
        defaultMessage="Your {count, plural, one {friend will get} other {friends will each get}} an email with a link to start using Codex"
        description="Reward-neutral description shown after sending one or more Codex friend invites"
        values={{ count }}
      />
    ) : (
      <FormattedMessage
        id="codex.referralInviteModal.rewardNeutral.successDescription.workspace"
        defaultMessage="Your {count, plural, one {coworker will get} other {coworkers will each get}} an email with a link to start using Codex"
        description="Reward-neutral description shown after sending one or more Codex coworker invites"
        values={{ count }}
      />
    );
  }

  if (rewardType === "rateLimitReset") {
    const reward = <RateLimitResetReward grantAmount={grantAmount} />;
    if (redemptionAction === "codex_login") {
      return isPersonalAccount ? (
        <FormattedMessage
          id="codex.referralInviteModal.rateLimitSuccessDescription.personal.codexLogin"
          defaultMessage="Once your {count, plural, one {friend logs} other {friends log}} into Codex, you\u2019ll each get {reward} so you can get even more work done"
          description="Description shown after a Codex referral invite is sent in a personal account when the referral reward is a rate limit reset and the friend needs to log into Codex"
          values={{ count, reward }}
        />
      ) : (
        <FormattedMessage
          id="codex.referralInviteModal.rateLimitSuccessDescription.workspace.codexLogin"
          defaultMessage="Once your {count, plural, one {coworker logs} other {coworkers log}} into Codex, you\u2019ll each get {reward} so you can get even more work done"
          description="Description shown after a Codex referral invite is sent in a workspace account when the referral reward is a rate limit reset and the coworker needs to log into Codex"
          values={{ count, reward }}
        />
      );
    }

    return isPersonalAccount ? (
      <FormattedMessage
        id="codex.referralInviteModal.rateLimitSuccessDescription.personal"
        defaultMessage="Once your {count, plural, one {friend joins and sends} other {friends join and send}} their first message, you\u2019ll each get {reward} so you can get even more work done"
        description="Description shown after a Codex referral invite is sent in a personal account when the referral reward is a rate limit reset"
        values={{ count, reward }}
      />
    ) : (
      <FormattedMessage
        id="codex.referralInviteModal.rateLimitSuccessDescription.workspace"
        defaultMessage="Once your {count, plural, one {coworker joins and sends} other {coworkers join and send}} their first message, you\u2019ll each get {reward} so you can get even more work done"
        description="Description shown after a Codex referral invite is sent in a workspace account when the referral reward is a rate limit reset"
        values={{ count, reward }}
      />
    );
  }

  return isPersonalAccount ? (
    <FormattedMessage
      id="codex.referralInviteModal.creditsSuccessDescription.personal"
      defaultMessage="Once your friend joins and sends their first message, you\u2019ll each get {credits, number} credits to use in Codex"
      description="Description shown after a Codex referral invite is sent in a personal account when the referral reward is credits"
      values={{ credits }}
    />
  ) : (
    <FormattedMessage
      id="codex.referralInviteModal.creditsSuccessDescription.workspace"
      defaultMessage="Once your coworker joins and sends their first message, you\u2019ll each get {credits, number} credits added to the workspace pool"
      description="Description shown after a Codex referral invite is sent in a workspace account when the referral reward is credits"
      values={{ credits }}
    />
  );
}

function RateLimitResetReward({
  grantAmount,
}: RateLimitResetRewardProps): ReactNode {
  return (
    <FormattedMessage
      id="codex.referralInviteModal.rateLimitResetReward"
      defaultMessage="{grantAmount, plural, one {one rate limit reset} other {{grantAmount, number} rate limit resets}}"
      description="Rate limit reset reward amount in the Codex referral invite success modal"
      values={{ grantAmount }}
    />
  );
}
