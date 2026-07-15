// Restored from ref/webview/assets/rate-limit-reset-modal-bsUY5-t3.js
// Full-screen card-stack redemption modal.

import React from "react";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogDescription,
  DialogLayout,
  DialogTitle,
} from "../../ui/dialog-layout";
import { XIcon } from "../../icons/x-icon";
import { useRateLimitResetCreditsQuery } from "../../runtime/codex-api";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  RateLimitResetCreditCard,
  isAvailableRateLimitResetCredit,
  normalizeRateLimitResetCard,
  selectVisibleRateLimitResetCards,
} from "./credits";
import type { RateLimitResetCreditsResponse } from "./types";
type RateLimitResetCardStackModalProps = {
  errorMessage: string | null;
  initialAvailableCount?: number | null;
  isRateLimitReached?: boolean;
  isResetting: boolean;
  onClose: () => void;
  onReset: (creditId?: string, availableCount?: number) => void;
};
export function RateLimitResetCardStackModal({
  errorMessage,
  initialAvailableCount,
  isRateLimitReached = false,
  isResetting,
  onClose,
  onReset,
}: RateLimitResetCardStackModalProps) {
  const intl = useIntl();
  const descriptionId = React.useId();
  const [selectedCreditId, setSelectedCreditId] = React.useState<string | null>(
    null,
  );
  const creditsQuery = useRateLimitResetCreditsQuery();
  const creditsData = creditsQuery.data as
    | RateLimitResetCreditsResponse
    | undefined;
  const availableCount =
    creditsData?.available_count ?? initialAvailableCount ?? 0;
  const availableCredits = (creditsData?.credits ?? []).filter(
    isAvailableRateLimitResetCredit,
  );
  const cards = React.useMemo(
    () =>
      availableCredits.map((credit) =>
        normalizeRateLimitResetCard(credit, intl),
      ),
    [availableCredits, intl],
  );
  const selectedCardId =
    cards.find((card) => card.id === selectedCreditId)?.id ?? cards[0]?.id;
  const visibleCards = selectVisibleRateLimitResetCards(cards, selectedCardId);
  const isSubmitDisabled =
    creditsQuery.isLoading ||
    isResetting ||
    availableCount === 0 ||
    selectedCardId == null;
  function handleOpenChange(open: boolean) {
    if (!open && !isResetting) onClose();
  }
  function handleEscapeKeyDown(event: Event) {
    if (isResetting) event.preventDefault();
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedCardId != null) onReset(selectedCardId, availableCount);
  }
  return (
    <DialogLayout
      open={true}
      onOpenChange={handleOpenChange}
      shouldIgnoreClickOutside={isResetting}
      contentClassName="fixed inset-0 !top-0 !left-0 !z-[var(--max-app-overlay-z-index)] h-[100dvh] w-screen max-w-none !translate-x-0 !translate-y-0 overflow-y-auto rounded-none bg-token-bg-primary p-0 shadow-none ring-0 backdrop-blur-none"
      contentProps={{
        "aria-describedby": descriptionId,
        onEscapeKeyDown: handleEscapeKeyDown,
      }}
      showDialogClose={false}
      unstyledContent={true}
      viewportSized={true}
    >
      <DialogBody
        as="form"
        className="relative min-h-full items-center overflow-x-hidden bg-token-bg-primary !px-6 !py-8 text-token-foreground"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          disabled={isResetting}
          onClick={onClose}
          aria-label={intl.formatMessage({
            id: "codex.rateLimitResetModal.close",
            defaultMessage: "Close",
            description:
              "Aria label for closing the Codex rate limit reset modal",
          })}
          className="no-drag absolute top-7 right-7 z-[2] inline-flex size-7 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent text-token-text-secondary transition-colors hover:text-token-text-primary disabled:pointer-events-none disabled:opacity-40"
        >
          <XIcon className="size-4 stroke-[2.2]" />
        </button>
        <div className="my-auto flex w-full flex-col items-center text-center">
          <DialogTitle asChild>
            <h2 className="heading-base m-0 font-semibold text-token-text-primary">
              {isRateLimitReached ? (
                <FormattedMessage
                  id="codex.rateLimitResetModal.heading.rateLimitReached"
                  defaultMessage="You're out of Codex messages"
                  description="Heading for the Codex rate limit reset modal when the user has reached their usage limit"
                />
              ) : (
                <FormattedMessage
                  id="codex.rateLimitResetModal.heading.available"
                  defaultMessage="You have {availableCount, plural, one {# rate limit reset} other {# rate limit resets}}"
                  description="Heading for the Codex rate limit reset modal opened from available saved resets"
                  values={{
                    availableCount,
                  }}
                />
              )}
            </h2>
          </DialogTitle>
          <DialogDescription
            className="mt-3 max-w-[640px] text-sm leading-5 text-token-text-secondary"
            id={descriptionId}
          >
            {isRateLimitReached ? (
              <FormattedMessage
                id="codex.rateLimitResetModal.description.rateLimitReached"
                defaultMessage="Use one now to build uninterrupted"
                description="Description shown when Codex rate limit resets are available after reaching a usage limit"
              />
            ) : (
              <FormattedMessage
                id="codex.rateLimitResetModal.description.available"
                defaultMessage="Use one now to continue building uninterrupted."
                description="Description shown when the rate limit reset modal is opened from saved resets"
              />
            )}
          </DialogDescription>
          <div className="relative mt-8 min-h-[316px] w-full max-w-[min(calc(100vw-48px),1180px)]">
            {creditsQuery.isLoading ? (
              <div className="mx-8 h-[276px] animate-pulse rounded-2xl bg-token-bg-secondary" />
            ) : creditsQuery.data == null &&
              creditsQuery.error != null ? null : cards.length === 0 ? (
              <div className="mx-8 flex h-[276px] items-center justify-center rounded-2xl bg-token-bg-secondary px-6 text-sm text-token-text-secondary shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                <FormattedMessage
                  id="codex.rateLimitResetModal.noResets"
                  defaultMessage="No rate limit resets are available"
                  description="Empty state shown when no Codex rate limit resets are available"
                />
              </div>
            ) : (
              <div
                className="relative z-10 flex min-w-full select-none justify-center overflow-x-auto px-4 pt-2 pb-10"
                aria-label={intl.formatMessage(
                  {
                    id: "codex.rateLimitResetModal.expandResetCards",
                    defaultMessage: "Show all {count} rate limit reset cards",
                    description: "Label for expanding rate limit reset cards",
                  },
                  {
                    count: visibleCards.length,
                  },
                )}
              >
                <div className="flex gap-3">
                  {visibleCards.map((card) => (
                    <RateLimitResetCreditCard
                      key={card.id}
                      card={card}
                      isSelected={card.id === selectedCardId}
                      onSelect={setSelectedCreditId}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 flex w-full max-w-[272px] flex-col items-center gap-4">
            <Button
              className="h-10 w-full justify-center border-0"
              disabled={isSubmitDisabled}
              loading={isResetting}
              size="large"
              type="submit"
            >
              <FormattedMessage
                id="codex.rateLimitResetModal.resetRateLimit"
                defaultMessage="Reset rate limit"
                description="Button label for redeeming a Codex rate limit reset"
              />
            </Button>
            <button
              type="button"
              disabled={isResetting}
              onClick={onClose}
              className="cursor-interaction border-0 bg-transparent p-0 text-sm leading-5 font-normal text-token-text-primary underline decoration-current underline-offset-4 transition-colors hover:text-token-text-secondary disabled:pointer-events-none disabled:opacity-40"
            >
              <FormattedMessage
                id="codex.rateLimitResetModal.saveForLater"
                defaultMessage="Save for later"
                description="Button label for closing the Codex rate limit reset modal without redeeming"
              />
            </button>
            {creditsQuery.error == null ? null : (
              <p
                aria-live="polite"
                className="m-0 text-sm leading-normal text-token-error-foreground"
              >
                <FormattedMessage
                  id="codex.rateLimitResetModal.loadError"
                  defaultMessage="Couldn't load rate limit resets. Please try again"
                  description="Error shown when loading Codex rate limit resets fails"
                />
              </p>
            )}
            {errorMessage == null ? null : (
              <p
                aria-live="polite"
                className="m-0 text-sm leading-normal text-token-error-foreground"
              >
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </DialogBody>
    </DialogLayout>
  );
}
