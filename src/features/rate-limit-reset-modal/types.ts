// Restored from ref/webview/assets/rate-limit-reset-modal-bsUY5-t3.js
// Shared types for the Codex rate limit reset modal.

import type { ReactNode } from "react";
export type RateLimitResetComponentType = "modal" | "card_stack";
export type RateLimitResetModalProps = {
  initialAvailableCount?: number | null;
  isRateLimitReached?: boolean;
  onClose: () => void;
  onResetComplete: (remainingCount: number) => void;
};
export type RateLimitResetControllerProps = RateLimitResetModalProps & {
  componentType: RateLimitResetComponentType;
};
export type RateLimitResetCredit = {
  description?: string | null;
  id: string;
  profile_image_url?: string | null;
  profile_user_id?: string | null;
  status?: string | null;
  title?: string | null;
};
export type RateLimitResetCreditsResponse = {
  available_count?: number | null;
  credits?: RateLimitResetCredit[] | null;
};
export type NormalizedRateLimitResetCard = {
  description: ReactNode;
  id: string;
  profileImageUrl: string | null;
  title: ReactNode;
  username: string;
};
export type ResetRedemptionMethod = "automatic" | "selected_credit";
export type RateLimitResetCreditConsumeResult = {
  code?: string | null;
};
export type ProductLogger = {
  logProductEvent: (event: unknown, payload?: Record<string, unknown>) => void;
};
