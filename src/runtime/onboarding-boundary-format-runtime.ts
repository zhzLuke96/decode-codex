// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Small formatting and enum helpers shared through the onboarding commons facade.

import type { IntlShape } from "../vendor/react-intl";

export const composerAttachmentLayoutValues = ["card", "pill"] as const;

export function capitalizeWord(word: string): string {
  return word.length === 0 ? word : word[0].toUpperCase() + word.slice(1);
}

export function formatUsageLimitResetDate(
  intl: Pick<IntlShape, "locale">,
  resetAtSeconds: number,
): string {
  const now = new Date();
  const resetDate = new Date(resetAtSeconds * 1000);
  if (
    resetDate.getFullYear() === now.getFullYear() &&
    resetDate.getMonth() === now.getMonth() &&
    resetDate.getDate() === now.getDate()
  ) {
    return resetDate.toLocaleTimeString(intl.locale, { timeStyle: "short" });
  }
  return resetDate.toLocaleString(intl.locale, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
