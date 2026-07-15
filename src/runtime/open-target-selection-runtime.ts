// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves a preferred browser target for a resource link.
const EXPLICIT_BROWSER_URL_PATTERN = /^(?:https?:\/\/|www\.)/i;

export function useOpenTarget({
  href,
  openTargetIntent = "default",
}: {
  href: string;
  openTargetIntent?: "alternate" | "default" | string;
}): string {
  if (!EXPLICIT_BROWSER_URL_PATTERN.test(href)) return "external-browser";
  return openTargetIntent === "alternate" ? "external-browser" : "in-app-browser";
}

