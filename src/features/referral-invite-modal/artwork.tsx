// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Header artwork and background layers for the referral invite modal.

import clsx from "clsx";
import { XIcon } from "../../icons/x-icon";
import {
  referralModalClasses,
  referralModalFlowerBackgroundUrl,
  referralModalPaperPlaneUrl,
} from "./styles";
import type { IntlFormatter } from "./types";
type ReferralModalBackdropProps = {
  expanded: boolean;
  success: boolean;
};
type HeaderArtworkProps = {
  intl: IntlFormatter;
  isSendAnimating: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
  onCloseClick: () => void;
  onPaperPlaneAnimationEnd: () => void;
};
export function ReferralModalBackdrop({
  expanded,
  success,
}: ReferralModalBackdropProps): JSX.Element {
  return (
    <>
      <div
        aria-hidden={true}
        className={clsx(
          referralModalClasses.backdrop,
          "pointer-events-none absolute inset-0 z-0 bg-[var(--referral-modal-surface)]",
          expanded && referralModalClasses.backdropExpanded,
          success && referralModalClasses.backdropSuccess,
        )}
      >
        <div
          className={clsx(
            referralModalClasses.backdropImage,
            "w-full",
            expanded && referralModalClasses.backdropImageExpanded,
          )}
          style={{
            backgroundImage: `url(${referralModalFlowerBackgroundUrl})`,
          }}
        />
      </div>
      <div
        aria-hidden={true}
        className={clsx(
          referralModalClasses.successBackdrop,
          "pointer-events-none absolute inset-0 z-0 bg-[var(--referral-modal-surface)]",
          success && referralModalClasses.successBackdropVisible,
        )}
      />
    </>
  );
}
export function HeaderArtwork({
  intl,
  isSendAnimating,
  isSubmitting,
  isSuccess,
  onCloseClick,
  onPaperPlaneAnimationEnd,
}: HeaderArtworkProps): JSX.Element {
  return (
    <div className="relative z-[1] h-48" aria-hidden={true}>
      <div
        className={clsx(
          referralModalClasses.mark,
          "absolute left-[calc(50%_-_62px)] top-[55px] size-[124px]",
          isSubmitting && referralModalClasses.markSubmitting,
          isSendAnimating && referralModalClasses.markSendAnimating,
          isSuccess && referralModalClasses.markSuccess,
        )}
      >
        <img
          alt=""
          className={clsx(
            referralModalClasses.render,
            "block size-full object-contain drop-shadow-[0_2px_5px_rgba(44,94,201,0.23)]",
            isSubmitting && referralModalClasses.renderSubmitting,
            isSendAnimating && referralModalClasses.renderSendAnimating,
          )}
          draggable={false}
          onAnimationEnd={onPaperPlaneAnimationEnd}
          src={referralModalPaperPlaneUrl}
        />
      </div>
      {isSendAnimating ? null : (
        <button
          type="button"
          disabled={isSubmitting}
          onClick={onCloseClick}
          aria-label={intl.formatMessage({
            id: "codex.referralInviteModal.close",
            defaultMessage: "Close",
            description:
              "Aria label for closing the Codex referral invite modal",
          })}
          className={clsx(
            "cursor-interaction absolute right-5 top-5 z-[3] inline-flex size-9 items-center justify-center rounded-full border border-[rgba(13,13,13,0.05)] bg-[rgba(255,255,255,0.3)] text-[#5d5d5d] backdrop-blur-[12px] transition-[opacity,background-color,color] duration-100 disabled:pointer-events-none disabled:opacity-30",
            isSuccess
              ? "text-token-text-secondary hover:bg-token-bg-primary/60 hover:text-token-text-primary"
              : "hover:bg-[rgba(255,255,255,0.48)] hover:text-[#202123]",
          )}
        >
          <XIcon className="size-4 stroke-[2.4]" />
        </button>
      )}
    </div>
  );
}
