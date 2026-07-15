// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Remote and local right-panel chrome for thread side-panel tabs.
import type { ReactNode } from "react";
import { BrowserTabTitleSynchronizer } from "./browser-tab-title-synchronizer";
import { HeaderPanelToggleButton } from "./header-panel-toggle-button";
import { SidePanelIcon } from "./icons";
import { RightPanelEmptyState } from "./new-tab-empty-state";
import { PanelTabList } from "./panel-tab-list";
import { ThreadPanelOpenTabDropdown } from "./thread-panel-open-tab-dropdown";
import type {
  BrowserTabTitleUpdate,
  PanelTab,
  ThreadPanelNewTabModelOptions,
  ThreadPanelOutletRenderProps,
} from "./types";

export interface RemoteThreadRightPanelChromeProps {
  activeRightTabId?: string | null;
  browserConversationId?: string | null;
  labels?: {
    toggle?: ReactNode;
  };
  onSyncBrowserTabTitle?: (update: BrowserTabTitleUpdate) => void;
  onToggleSidePanel?: () => void;
  renderRightPanelOutlet?: (props: ThreadPanelOutletRenderProps) => ReactNode;
  rightPanelOpen?: boolean;
  rightTabs?: readonly PanelTab[];
  toggleDisabled?: boolean;
}

export function RemoteThreadRightPanelChrome({
  activeRightTabId,
  browserConversationId,
  labels,
  onSyncBrowserTabTitle,
  onToggleSidePanel,
  renderRightPanelOutlet,
  rightPanelOpen = false,
  rightTabs = [],
  toggleDisabled = false,
}: RemoteThreadRightPanelChromeProps) {
  return (
    <>
      <BrowserTabTitleSynchronizer
        browserConversationId={browserConversationId}
        bottomTabs={[]}
        onSyncBrowserTabTitle={onSyncBrowserTabTitle}
        rightTabs={rightTabs}
      />
      {renderRightPanelOutlet?.({
        activeTabId: activeRightTabId,
        tabs: rightTabs,
        target: "right",
      }) ?? <PanelTabList tabs={rightTabs} activeTabId={activeRightTabId} />}
      <HeaderPanelToggleButton
        label={labels?.toggle ?? "Toggle side panel"}
        disabled={toggleDisabled}
        pressed={rightPanelOpen}
        onClick={onToggleSidePanel}
      >
        <SidePanelIcon className="icon-sm rotate-180" />
      </HeaderPanelToggleButton>
    </>
  );
}

export interface LocalThreadRightPanelChromeProps
  extends Omit<ThreadPanelNewTabModelOptions, "target"> {
  activeRightTabId?: string | null;
  browserConversationId?: string | null;
  labels?: {
    openTab?: ReactNode;
    toggle?: ReactNode;
  };
  onSyncBrowserTabTitle?: (update: BrowserTabTitleUpdate) => void;
  onToggleSidePanel?: () => void;
  renderRightPanelOutlet?: (props: ThreadPanelOutletRenderProps) => ReactNode;
  rightPanelOpen?: boolean;
  rightTabs?: readonly PanelTab[];
}

export function LocalThreadRightPanelChrome({
  activeRightTabId,
  browserConversationId,
  labels,
  onSyncBrowserTabTitle,
  onToggleSidePanel,
  renderRightPanelOutlet,
  rightPanelOpen = false,
  rightTabs = [],
  ...newTabOptions
}: LocalThreadRightPanelChromeProps) {
  return (
    <>
      <BrowserTabTitleSynchronizer
        browserConversationId={browserConversationId}
        bottomTabs={[]}
        onSyncBrowserTabTitle={onSyncBrowserTabTitle}
        rightTabs={rightTabs}
      />
      {renderRightPanelOutlet?.({
        activeTabId: activeRightTabId,
        tabs: rightTabs,
        target: "right",
      }) ?? <PanelTabList tabs={rightTabs} activeTabId={activeRightTabId} />}
      {rightTabs.length === 0 ? (
        <RightPanelEmptyState {...newTabOptions} />
      ) : (
        <ThreadPanelOpenTabDropdown
          target="right"
          title={labels?.openTab ?? "Open side panel tab"}
          {...newTabOptions}
        />
      )}
      <HeaderPanelToggleButton
        label={labels?.toggle ?? "Toggle side panel"}
        pressed={rightPanelOpen}
        onClick={onToggleSidePanel}
      >
        <SidePanelIcon className="icon-sm rotate-180" />
      </HeaderPanelToggleButton>
    </>
  );
}
