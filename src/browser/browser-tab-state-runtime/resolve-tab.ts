// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves app-shell tab records back to browser tab ids.
import { SidePanelTabKind } from "../../app-shell/side-panel-runtime";
import { getDefaultBrowserTabId } from "../browser-tab-runtime";

export function resolveBrowserTabId(
  activeTab: unknown,
  conversationId: string | null | undefined,
): string | null {
  if (
    conversationId == null ||
    activeTab == null ||
    typeof activeTab !== "object"
  ) {
    return null;
  }
  const record = activeTab as {
    kind?: unknown;
    props?: { browserTabId?: unknown };
    tabId?: unknown;
  };
  if (typeof record.props?.browserTabId === "string") {
    return record.props.browserTabId;
  }
  if (typeof record.tabId !== "string") return null;
  if (record.kind === SidePanelTabKind.BROWSER) return record.tabId;
  if (record.tabId.startsWith("browser:")) return record.tabId;
  return record.tabId === getDefaultBrowserTabId(conversationId)
    ? record.tabId
    : null;
}
