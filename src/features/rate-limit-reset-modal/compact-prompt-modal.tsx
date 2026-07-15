// Restored from ref/webview/assets/rate-limit-reset-modal-bsUY5-t3.js
// Compact reset prompt shown when the card-stack experiment is disabled.

import React from "react";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogDescription,
  DialogLayout,
  DialogTitle,
} from "../../ui/dialog-layout";
import { XIcon } from "../../icons/x-icon";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { codexAppImageUrl, referralModalBackgroundImageUrl } from "./assets";
type CompactRateLimitResetPromptModalProps = {
  availableCount: number;
  errorMessage: string | null;
  isResetDisabled: boolean;
  isResetting: boolean;
  onClose: () => void;
  onReset: () => void;
};
export function CompactRateLimitResetPromptModal({
  availableCount,
  errorMessage,
  isResetDisabled,
  isResetting,
  onClose,
  onReset,
}: CompactRateLimitResetPromptModalProps) {
  const intl = useIntl();
  const descriptionId = React.useId();
  function handleOpenChange(open: boolean) {
    if (!open) onClose();
  }
  function handleEscapeKeyDown(event: Event) {
    if (isResetting) event.preventDefault();
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onReset();
  }
  return (
    <DialogLayout
      open={true}
      onOpenChange={handleOpenChange}
      shouldIgnoreClickOutside={isResetting}
      overlayClassName="!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_64%,transparent)]"
      contentProps={{
        "aria-describedby": descriptionId,
        onEscapeKeyDown: handleEscapeKeyDown,
      }}
      showDialogClose={false}
      size="default"
    >
      <DialogBody
        as="form"
        className="relative overflow-hidden !p-0 text-token-foreground"
        onSubmit={handleSubmit}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 size-full object-cover"
            draggable={false}
            src={referralModalBackgroundImageUrl}
          />
          <img
            alt=""
            className="absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_16px_rgba(44,94,201,0.28)]"
            draggable={false}
            src={codexAppImageUrl}
          />
          <button
            type="button"
            disabled={isResetting}
            onClick={onClose}
            aria-label={intl.formatMessage({
              id: "codex.rateLimitResetPromptModal.close",
              defaultMessage: "Close",
              description:
                "Aria label for closing the Codex reset usage prompt modal",
            })}
            className="absolute top-5 right-5 inline-flex size-9 cursor-interaction items-center justify-center rounded-full border-0 bg-white/60 text-[#5d5d5d] transition-colors hover:bg-white/80 hover:text-[#202123] disabled:pointer-events-none disabled:opacity-30"
          >
            <XIcon className="size-4 stroke-[2.4]" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-5 px-8 pt-8 pb-8 text-center">
          <DialogTitle asChild>
            <h2 className="heading-base m-0 font-semibold text-token-text-primary">
              <FormattedMessage
                id="codex.rateLimitResetPromptModal.heading"
                defaultMessage="Do you want to reset your usage?"
                description="Heading for the compact Codex rate limit reset prompt modal"
              />
            </h2>
          </DialogTitle>
          <DialogDescription
            className="m-0 max-w-[400px] text-base leading-normal tracking-normal text-token-text-secondary"
            id={descriptionId}
          >
            <FormattedMessage
              id="codex.rateLimitResetPromptModal.description"
              defaultMessage="Keep working uninterrupted when you reset your rate limits. You have {availableCount, plural, one {# reset} other {# resets}} available."
              description="Description for the compact Codex rate limit reset prompt modal"
              values={{
                availableCount,
              }}
            />
          </DialogDescription>
          <Button
            className="mt-2 h-10 w-full justify-center border-0"
            disabled={isResetDisabled}
            loading={isResetting}
            size="large"
            type="submit"
          >
            <FormattedMessage
              id="codex.rateLimitResetPromptModal.resetUsage"
              defaultMessage="Reset usage"
              description="Button label for redeeming a reset in the compact Codex rate limit reset prompt modal"
            />
          </Button>
          {errorMessage == null ? null : (
            <p
              aria-live="polite"
              className="m-0 text-sm leading-normal text-token-error-foreground"
            >
              {errorMessage}
            </p>
          )}
        </div>
      </DialogBody>
    </DialogLayout>
  );
}
