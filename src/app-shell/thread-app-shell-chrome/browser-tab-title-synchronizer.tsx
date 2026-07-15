// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Synchronizes restored browser panel tab titles across right and bottom panels.
import { useEffect } from "react";
import type { BrowserTabTitleUpdate, PanelTab, PanelTarget } from "./types";

export interface BrowserTabTitleSynchronizerProps {
  bottomTabs?: readonly PanelTab[];
  browserConversationId?: string | null;
  onSyncBrowserTabTitle?: (update: BrowserTabTitleUpdate) => void;
  rightTabs?: readonly PanelTab[];
}

export function BrowserTabTitleSynchronizer({
  bottomTabs = [],
  browserConversationId,
  onSyncBrowserTabTitle,
  rightTabs = [],
}: BrowserTabTitleSynchronizerProps) {
  useEffect(() => {
    if (browserConversationId == null || onSyncBrowserTabTitle == null) return;
    const tabsByTarget: Record<PanelTarget, readonly PanelTab[]> = {
      bottom: bottomTabs,
      right: rightTabs,
    };

    for (const target of Object.keys(tabsByTarget) as PanelTarget[]) {
      for (const tab of tabsByTarget[target]) {
        if (tab.browserConversationId !== browserConversationId) continue;
        onSyncBrowserTabTitle({
          browserConversationId,
          browserTabId: tab.browserTabId ?? tab.tabId,
          existingTabTitle: tab.title,
          fallbackTitle: "New tab",
          target,
        });
      }
    }
  }, [bottomTabs, browserConversationId, onSyncBrowserTabTitle, rightTabs]);

  return null;
}
