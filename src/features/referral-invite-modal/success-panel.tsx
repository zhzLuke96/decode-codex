// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Success panel shown after referral invite submission.

import clsx from "clsx";
import { CheckLgIcon } from "../../icons/check-lg-icon";
import { Button } from "../../ui/button";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  ReferralInviteSuccessDescription,
  ReferralInviteSuccessTitle,
} from "./success-copy";
import { referralModalClasses } from "./styles";
import type { ReferralRewardType } from "./types";
type SuccessPanelProps = {
  count: number;
  descriptionId?: string;
  isPersonalAccount: boolean;
  isSuccess: boolean;
  onDoneClick: () => void;
  redemptionAction?: string;
  rewardAmount: number;
  rewardType: ReferralRewardType;
  usesRewardNeutralCopy: boolean;
};
export function SuccessPanel({
  count,
  descriptionId,
  isPersonalAccount,
  isSuccess,
  onDoneClick,
  redemptionAction,
  rewardAmount,
  rewardType,
  usesRewardNeutralCopy,
}: SuccessPanelProps): JSX.Element {
  return (
    <div
      aria-hidden={!isSuccess}
      aria-live="polite"
      className={clsx(
        referralModalClasses.successPanel,
        "pointer-events-none absolute inset-0 z-[2] flex size-full flex-col items-center justify-start gap-3 px-6 pt-28 pb-6",
        isSuccess && referralModalClasses.successPanelVisible,
      )}
    >
      <div
        className={clsx(
          referralModalClasses.successIcon,
          "flex size-10 items-center justify-center rounded-full bg-[var(--referral-modal-button-background)] text-[var(--referral-modal-button-foreground)]",
          isSuccess && referralModalClasses.successIconVisible,
        )}
        aria-hidden="true"
      >
        <CheckLgIcon className="size-5" />
      </div>
      <h2
        className={clsx(
          referralModalClasses.successTitle,
          "heading-base m-0 w-[min(100%,400px)] text-center font-semibold text-[var(--referral-modal-primary)]",
          isSuccess && referralModalClasses.successTitleVisible,
        )}
      >
        {isSuccess ? <ReferralInviteSuccessTitle /> : null}
      </h2>
      <p
        className={clsx(
          referralModalClasses.successDescription,
          "m-0 w-[min(100%,400px)] text-center text-base leading-normal tracking-normal text-[var(--referral-modal-secondary)]",
          isSuccess && referralModalClasses.successDescriptionVisible,
        )}
        id={descriptionId}
      >
        <ReferralInviteSuccessDescription
          count={count}
          credits={rewardAmount}
          grantAmount={rewardAmount}
          isPersonalAccount={isPersonalAccount}
          redemptionAction={redemptionAction}
          rewardType={rewardType}
          usesRewardNeutralCopy={usesRewardNeutralCopy}
        />
      </p>
      <Button
        className={clsx(
          referralModalClasses.successButton,
          "mt-auto h-10 w-full justify-center border-0 bg-[var(--referral-modal-button-background)] text-[var(--referral-modal-button-foreground)] hover:bg-[color-mix(in_srgb,var(--referral-modal-button-background)_80%,transparent)]",
          isSuccess ? "pointer-events-auto" : "pointer-events-none",
          isSuccess && referralModalClasses.successButtonVisible,
        )}
        onClick={onDoneClick}
        type="button"
      >
        <FormattedMessage
          id="codex.referralInviteModal.done"
          defaultMessage="Done"
          description="Button label for closing the Codex referral invite success modal"
        />
      </Button>
    </div>
  );
}
