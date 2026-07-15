// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Predicate gating the browser sidebar "adjust design" entry point.

export type DesignAdjustEntryInput = {
  canEditDesign: boolean;
  showAdjustEntry: boolean;
};

export function canShowDesignAdjustEntry({
  canEditDesign,
  showAdjustEntry,
}: DesignAdjustEntryInput): boolean {
  return showAdjustEntry && canEditDesign;
}
