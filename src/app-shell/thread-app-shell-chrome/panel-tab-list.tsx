// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Minimal semantic tab-list fallback for restored panel outlet render props.
import type { PanelTab } from "./types";

export interface PanelTabListProps {
  activeTabId?: string | null;
  tabs: readonly PanelTab[];
}

export function PanelTabList({ activeTabId, tabs }: PanelTabListProps) {
  if (tabs.length === 0) return null;

  return (
    <div className="flex min-w-0 items-center gap-1" role="tablist">
      {tabs.map((tab) => (
        <div
          key={tab.tabId}
          className="max-w-48 truncate rounded-md px-2 py-1 text-sm data-[active=true]:bg-token-bg-secondary"
          aria-selected={tab.tabId === activeTabId}
          data-active={tab.tabId === activeTabId}
          role="tab"
        >
          {tab.title ?? tab.tabId}
        </div>
      ))}
    </div>
  );
}
