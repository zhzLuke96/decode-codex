// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~hotkey-window-thread-pa~ewq0bkmq-DIvcDvEQ.js.
import { createPersistedSignal } from "../runtime/persisted-signal";

const HAS_SEEN_GIFT_CREDITS_HOME_BANNER_KEY =
  "has-seen-gift-credits-home-banner";
const GIFT_CREDITS_PROFILE_COACHMARK_PENDING_KEY =
  "gift-credits-profile-coachmark-pending";

export const hasSeenGiftCreditsHomeBannerSignal = createPersistedSignal(
  HAS_SEEN_GIFT_CREDITS_HOME_BANNER_KEY,
  false,
);

export const giftCreditsProfileCoachmarkPendingSignal = createPersistedSignal(
  GIFT_CREDITS_PROFILE_COACHMARK_PENDING_KEY,
  false,
);

export function initGiftCreditsSignalsChunk(): void {}
