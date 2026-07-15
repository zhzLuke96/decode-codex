// Restored from ref/webview/assets/persisted-signal-Djfqb095.js
// persisted-signal-Djfqb095 chunk restored from the Codex webview bundle.
import type { BrowserPanelLocation } from "./types";
const BROWSER_TAB_PREFIX = "browser:";
export const PERSISTED_PANEL_KIND = {
  BROWSER: "browser",
  DIFF: "diff",
  MCP_APP: "mcp-app",
  SANDBOX: "sandbox",
  TIMELINE: "timeline",
} as const;
export function getBrowserTabLegacyKey(browserTabId: string): string {
  return normalizeBrowserTabId(`${browserTabId}:legacy`);
}
export function getBrowserTabConversationKey(
  panelLocation: BrowserPanelLocation,
  fallbackBrowserTabId?: string | null,
): string | null {
  if (panelLocation == null) {
    return null;
  }
  const { tabId } = panelLocation;
  return tabId === PERSISTED_PANEL_KIND.BROWSER
    ? fallbackBrowserTabId == null
      ? null
      : getBrowserTabLegacyKey(fallbackBrowserTabId)
    : (parseBrowserConversationId(tabId) ??
        (panelLocation.kind === PERSISTED_PANEL_KIND.BROWSER
          ? normalizeBrowserTabId(tabId)
          : null));
}
export function isBrowserPanelLocation(
  panelLocation: BrowserPanelLocation,
): boolean {
  if (panelLocation == null) {
    return false;
  }
  if (panelLocation.kind === PERSISTED_PANEL_KIND.BROWSER) {
    return true;
  }
  const { tabId } = panelLocation;
  return tabId === PERSISTED_PANEL_KIND.BROWSER || isBrowserTabId(tabId);
}
function normalizeBrowserTabId(browserTabId: string): string {
  return browserTabId;
}
function isBrowserTabId(tabId: string): boolean {
  return tabId?.startsWith(BROWSER_TAB_PREFIX) ?? false;
}
function parseBrowserConversationId(tabId: string): string | null {
  return isBrowserTabId(tabId)
    ? normalizeBrowserTabId(tabId.slice(BROWSER_TAB_PREFIX.length))
    : null;
}
