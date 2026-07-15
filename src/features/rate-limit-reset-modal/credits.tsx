// Restored from ref/webview/assets/rate-limit-reset-modal-bsUY5-t3.js
// Credit normalization and card rendering helpers.

import clsx from "clsx";
import { CodexIcon } from "../../icons/codex-icon";
import { FormattedMessage } from "../../vendor/react-intl";
import { codexAppImageUrl, referralModalBackgroundImageUrl } from "./assets";
import type {
  NormalizedRateLimitResetCard,
  RateLimitResetCredit,
} from "./types";
const VISIBLE_CREDIT_CARD_LIMIT = 10;
type RateLimitResetIntl = {
  formatMessage: (
    descriptor: {
      defaultMessage: string;
      description: string;
      id: string;
    },
    values?: Record<string, unknown>,
  ) => string;
};
export function isAvailableRateLimitResetCredit(
  credit: RateLimitResetCredit,
): boolean {
  return credit.status === "available";
}
export function normalizeRateLimitResetCard(
  credit: RateLimitResetCredit,
  intl: RateLimitResetIntl,
): NormalizedRateLimitResetCard {
  const rawProfileImageUrl = credit.profile_image_url?.trim();
  const rawProfileUserId = credit.profile_user_id?.trim();
  const rawTitle = credit.title?.trim();
  const rawDescription = credit.description?.trim();
  return {
    id: credit.id,
    profileImageUrl:
      rawProfileImageUrl == null || rawProfileImageUrl.length === 0
        ? null
        : rawProfileImageUrl,
    username:
      rawProfileUserId == null || rawProfileUserId.length === 0
        ? "Codex Team"
        : rawProfileUserId.startsWith("@")
          ? rawProfileUserId
          : `@${rawProfileUserId}`,
    title:
      rawTitle == null || rawTitle.length === 0
        ? intl.formatMessage({
            id: "codex.rateLimitResetModal.cardFallbackTitle",
            defaultMessage: "One rate limit reset",
            description:
              "Fallback title for a Codex rate limit reset card when the backend omits one",
          })
        : rawTitle,
    description:
      rawDescription == null || rawDescription.length === 0
        ? intl.formatMessage({
            id: "codex.rateLimitResetModal.cardFallbackDescription",
            defaultMessage:
              "You have one rate limit reset ready to be redeemed",
            description:
              "Fallback description for a Codex rate limit reset card when the backend omits one",
          })
        : rawDescription,
  };
}
export function selectVisibleRateLimitResetCards(
  cards: NormalizedRateLimitResetCard[],
  selectedCreditId: string | null,
): NormalizedRateLimitResetCard[] {
  if (cards.length <= 1 || selectedCreditId == null) {
    return cards.slice(0, VISIBLE_CREDIT_CARD_LIMIT);
  }
  const selectedIndex = cards.findIndex((card) => card.id === selectedCreditId);
  if (selectedIndex <= 0) return cards.slice(0, VISIBLE_CREDIT_CARD_LIMIT);
  return [
    cards[selectedIndex],
    ...cards.slice(0, selectedIndex),
    ...cards.slice(selectedIndex + 1),
  ].slice(0, VISIBLE_CREDIT_CARD_LIMIT);
}
type RateLimitResetCardProps = {
  card: NormalizedRateLimitResetCard;
  isSelected: boolean;
  onSelect: (creditId: string) => void;
};
export function RateLimitResetCreditCard({
  card,
  isSelected,
  onSelect,
}: RateLimitResetCardProps) {
  const initials = card.username.replace(/^@/, "").slice(0, 2).toUpperCase();
  return (
    <button
      type="button"
      className={clsx(
        "w-[224px] max-w-[calc(100vw-72px)] shrink-0 rounded-2xl bg-token-bg-primary p-3 text-left shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition duration-150",
        "cursor-interaction focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
        isSelected
          ? "ring-2 ring-token-focus-border"
          : "ring-1 ring-token-border/40 hover:-translate-y-1 hover:ring-token-border",
      )}
      aria-pressed={isSelected}
      onClick={() => onSelect(card.id)}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          {card.profileImageUrl == null ? (
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-[9px] font-medium text-token-foreground">
              {initials}
            </span>
          ) : (
            <img
              alt=""
              className="size-5 shrink-0 rounded-full object-cover"
              draggable={false}
              src={card.profileImageUrl}
            />
          )}
          <div className="truncate text-sm leading-5 font-medium text-token-text-primary">
            {card.username}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 text-xs font-normal text-token-text-secondary">
          <span>
            <FormattedMessage
              id="codex.rateLimitResetModal.cardBrand"
              defaultMessage="Codex"
              description="Brand label shown on a Codex rate limit reset card"
            />
          </span>
          <CodexIcon className="size-4 text-token-text-secondary opacity-70" />
        </div>
      </div>
      <div className="relative h-[164px] overflow-hidden rounded-xl bg-[#49c5ef]">
        <img
          alt=""
          className="absolute inset-0 size-full object-cover opacity-80"
          draggable={false}
          src={referralModalBackgroundImageUrl}
        />
        <img
          alt=""
          className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_16px_rgba(44,94,201,0.28)]"
          draggable={false}
          src={codexAppImageUrl}
        />
      </div>
      <h3 className="mt-3 mb-0 text-sm leading-5 font-medium text-token-text-primary">
        {card.title}
      </h3>
      <p className="mt-1 mb-0 text-sm leading-5 font-normal text-token-text-secondary">
        {card.description}
      </p>
    </button>
  );
}
