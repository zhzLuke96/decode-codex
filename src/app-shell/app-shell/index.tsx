// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public AppShell compound component. Assembles the declarative slot components
// into a single namespaced API (AppShell.Root, AppShell.Header, AppShell.RightPanel,
// AppShell.BottomPanel, ...) so feature pages can describe their shell layout as
// JSX children.
import { memo } from "react";
import {
  AppShellBottomPanelOutletSlot,
  AppShellBottomPanelSlot,
  AppShellBottomPanelTabListAfterSlot,
  AppShellBottomPanelTabListAfterStickySlot,
  AppShellBottomPanelTabsEmptyStateSlot,
  AppShellBottomPanelTabsSlot,
  AppShellContent,
  AppShellHeaderActionSlot,
  AppShellHeaderContextMenuItemSlot,
  AppShellHeaderSlot,
  AppShellLeftPanelSlot,
  AppShellMainContentLayout,
  AppShellRightPanelOutletSlot,
  AppShellRightPanelSlot,
  AppShellRightPanelTabListAfterSlot,
  AppShellRightPanelTabListAfterStickySlot,
  AppShellRightPanelTabListBeforeSlot,
  AppShellRightPanelTabsEmptyStateSlot,
  AppShellRightPanelTabsSlot,
  AppShellRoot,
} from "../app-shell-slots";

export const AppShell = {
  Root: memo(AppShellRoot),
  LeftPanel: AppShellLeftPanelSlot,
  Content: memo(AppShellContent),
  Header: memo(AppShellHeaderSlot),
  HeaderAction: memo(AppShellHeaderActionSlot),
  HeaderContextMenuItem: memo(AppShellHeaderContextMenuItemSlot),
  MainContentLayout: memo(AppShellMainContentLayout),
  BottomPanel: AppShellBottomPanelSlot,
  BottomPanelTabs: memo(AppShellBottomPanelTabsSlot),
  BottomPanelTabsEmptyState: memo(AppShellBottomPanelTabsEmptyStateSlot),
  BottomPanelTabListAfter: memo(AppShellBottomPanelTabListAfterSlot),
  BottomPanelTabListAfterSticky: memo(
    AppShellBottomPanelTabListAfterStickySlot,
  ),
  BottomPanelOutlet: memo(AppShellBottomPanelOutletSlot),
  RightPanel: AppShellRightPanelSlot,
  RightPanelTabs: memo(AppShellRightPanelTabsSlot),
  RightPanelTabsEmptyState: memo(AppShellRightPanelTabsEmptyStateSlot),
  RightPanelTabListAfter: memo(AppShellRightPanelTabListAfterSlot),
  RightPanelTabListAfterSticky: memo(AppShellRightPanelTabListAfterStickySlot),
  RightPanelTabListBefore: memo(AppShellRightPanelTabListBeforeSlot),
  RightPanelOutlet: memo(AppShellRightPanelOutletSlot),
};

export function initAppShellCompoundChunk(): void {}
