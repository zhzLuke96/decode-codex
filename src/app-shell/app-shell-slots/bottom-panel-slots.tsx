// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { BottomPanelTabBar } from "../bottom-panel-tab-bar";
import {
  appStoreScope,
  bottomPanelAfterListSignal,
  bottomPanelAfterListStickySignal,
  bottomPanelEmptyStateSignal,
  bottomPanelFallbackContentSignal,
  useAppScope,
} from "../../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "../app-shell-tab-controller/types";
import { useRegisterSlotSignal } from "./slot-registration";
import type { AppShellSlotProps } from "./slot-types";

export function AppShellBottomPanelTabsSlot() {
  return <BottomPanelTabBar />;
}

export function AppShellBottomPanelTabsEmptyStateSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelEmptyStateSignal,
    children,
  );
  return null;
}

export function AppShellBottomPanelTabListAfterSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelAfterListSignal,
    children,
  );
  return null;
}

export function AppShellBottomPanelTabListAfterStickySlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelAfterListStickySignal,
    children,
  );
  return null;
}

export function AppShellBottomPanelOutletSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelFallbackContentSignal,
    children,
  );
  return null;
}
