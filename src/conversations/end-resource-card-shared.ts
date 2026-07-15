// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared styling helpers for end-of-turn resource cards.

import clsx from "clsx";

export const OVERLAY_BUTTON_CLASS_NAME =
  "peer/end-resource absolute inset-0 cursor-interaction bg-transparent group-hover/end-resource:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset";

export const HOVER_REVEAL_CLASS_NAME =
  "peer-hover/end-resource:[&_.end-resource-default-subtitle]:hidden peer-hover/end-resource:[&_.end-resource-hover-subtitle]:inline-flex";

export function headerClassName(isMenuOpen: boolean): string {
  return clsx(
    "pointer-events-none relative z-10",
    !isMenuOpen && HOVER_REVEAL_CLASS_NAME,
  );
}
