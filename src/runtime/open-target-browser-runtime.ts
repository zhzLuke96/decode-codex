// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser-openability predicates for open-target flows.
const EXPLICIT_BROWSER_URL_PATTERN = /^(?:https?:\/\/|www\.)/i;
const SPECIAL_EXTERNAL_PROTOCOL_PATTERN = /^(?:mailto|sms|tel):/i;

export function isBrowserOpenableUrl(href: string): boolean {
  return (
    EXPLICIT_BROWSER_URL_PATTERN.test(href) ||
    SPECIAL_EXTERNAL_PROTOCOL_PATTERN.test(href)
  );
}

export function shouldOfferOpenTargets({
  href,
  isBrowserSidebarEnabled,
}: {
  href: string;
  isBrowserSidebarEnabled: boolean;
}): boolean {
  return isBrowserSidebarEnabled && EXPLICIT_BROWSER_URL_PATTERN.test(href);
}

