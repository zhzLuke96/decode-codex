// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Detects chrome:// internal pages and chrome-extension:// URLs so the browser
// panel can adopt an existing WebContents instead of navigating a fresh webview.

export function isChromeInternalOrExtensionUrl(
  url: string | null | undefined,
): boolean {
  return (
    url?.startsWith("chrome://extensions") === true ||
    url?.startsWith("chrome://policy") === true ||
    url?.startsWith("chrome-extension://") === true
  );
}
