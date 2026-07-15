// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Bottom panel launcher, outlet, tab dropdown, and close controls.
import type { ReactNode } from "react";
import { HeaderPanelToggleButton } from "./header-panel-toggle-button";
import { BottomPanelClosedIcon, BottomPanelOpenIcon, CloseIcon } from "./icons";
import { PanelTabList } from "./panel-tab-list";
import { ThreadPanelOpenTabDropdown } from "./thread-panel-open-tab-dropdown";
import type {
  PanelTab,
  ThreadPanelNewTabModelOptions,
  ThreadPanelOutletRenderProps,
} from "./types";

const bottomPanelTabPanelSelector =
  '[role="tabpanel"][data-app-shell-tab-panel-controller="bottom"]';

export interface ThreadBottomPanelChromeProps
  extends Omit<ThreadPanelNewTabModelOptions, "target"> {
  actionIdPrefix: string;
  activeBottomTabId?: string | null;
  bottomPanelLauncherVisible?: boolean;
  bottomPanelOpen?: boolean;
  bottomTabs?: readonly PanelTab[];
  labels?: {
    close?: ReactNode;
    openTab?: ReactNode;
    toggle?: ReactNode;
  };
  renderBottomPanelOutlet?: (props: ThreadPanelOutletRenderProps) => ReactNode;
}

export function ThreadBottomPanelChrome({
  actionIdPrefix,
  activeBottomTabId,
  bottomPanelLauncherVisible = true,
  bottomPanelOpen = false,
  bottomTabs = [],
  labels,
  onCloseBottomPanel,
  onToggleBottomPanel,
  onToggleBottomPanelLauncher,
  renderBottomPanelOutlet,
  ...newTabOptions
}: ThreadBottomPanelChromeProps) {
  const toggleBottomPanel = () => {
    onToggleBottomPanel?.();
    if (!bottomPanelOpen) scrollBottomPanelIntoView();
  };

  return (
    <>
      <BottomPanelLauncherContextMenuItem
        checked={bottomPanelLauncherVisible}
        onSelect={() =>
          onToggleBottomPanelLauncher?.(!bottomPanelLauncherVisible)
        }
      />
      <section data-app-shell-bottom-panel="" data-open={bottomPanelOpen}>
        {renderBottomPanelOutlet?.({
          activeTabId: activeBottomTabId,
          tabs: bottomTabs,
          target: "bottom",
        }) ?? (
          <PanelTabList tabs={bottomTabs} activeTabId={activeBottomTabId} />
        )}
      </section>
      <ThreadPanelOpenTabDropdown
        target="bottom"
        title={labels?.openTab ?? "Open bottom panel tab"}
        {...newTabOptions}
      />
      <button
        type="button"
        className="flex h-token-button-composer items-center justify-center rounded-lg px-2 py-0 text-token-text-tertiary hover:bg-token-list-hover-background"
        title={typeof labels?.close === "string" ? labels.close : "Close"}
        onClick={onCloseBottomPanel}
      >
        <CloseIcon className="icon-xs" />
      </button>
      <HeaderPanelToggleButton
        label={labels?.toggle ?? "Toggle bottom panel"}
        pressed={bottomPanelOpen}
        onClick={toggleBottomPanel}
      >
        {bottomPanelOpen ? (
          <BottomPanelOpenIcon className="icon-sm" />
        ) : (
          <BottomPanelClosedIcon className="icon-sm" />
        )}
      </HeaderPanelToggleButton>
      <span hidden data-action-id={`${actionIdPrefix}-bottom-panel-toggle`} />
    </>
  );
}

export function scrollBottomPanelIntoView() {
  requestAnimationFrame(() => {
    const tabPanel = document.querySelector(bottomPanelTabPanelSelector);
    tabPanel?.scrollIntoView({ block: "nearest" });
  });
}

interface BottomPanelLauncherContextMenuItemProps {
  checked: boolean;
  onSelect?: () => void;
}

function BottomPanelLauncherContextMenuItem({
  checked,
  onSelect,
}: BottomPanelLauncherContextMenuItemProps) {
  return (
    <button
      type="button"
      hidden
      aria-checked={checked}
      data-context-menu-item="toggle-bottom-panel-launcher"
      role="menuitemcheckbox"
      onClick={onSelect}
    >
      Bottom panel
    </button>
  );
}
