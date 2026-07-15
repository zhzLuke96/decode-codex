// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { useLayoutEffect } from "react";
import { RightPanelTabBar } from "../right-panel-tab-bar";
import {
  appStoreScope,
  getDefaultRightPanelStorageKey,
  rightPanelAfterListSignal,
  rightPanelAfterListStickySignal,
  rightPanelBeforeListSignal,
  rightPanelEmptyStateSignal,
  rightPanelFallbackContentSignal,
  rightPanelWidthConfigSignal,
  useAppScope,
} from "../../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "../app-shell-tab-controller/types";
import { useRegisterSlotSignal } from "./slot-registration";
import type {
  AppShellRightPanelOutletProps,
  AppShellSlotProps,
} from "./slot-types";

export function AppShellRightPanelTabsSlot() {
  return <RightPanelTabBar />;
}

export function AppShellRightPanelTabsEmptyStateSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelEmptyStateSignal,
    children,
  );
  return null;
}

export function AppShellRightPanelOutletSlot({
  children,
  defaultWidth = 600,
  widthStorageKey,
}: AppShellRightPanelOutletProps): null {
  const store = useAppScope(appStoreScope) as AppShellStore & {
    value: { routeTemplate: string };
  };
  const storageKey =
    widthStorageKey ??
    getDefaultRightPanelStorageKey(store.value.routeTemplate);
  useRegisterSlotSignal(store, rightPanelFallbackContentSignal, children);
  useLayoutEffect(() => {
    if (defaultWidth === 600 && widthStorageKey == null) return;
    store.set(rightPanelWidthConfigSignal, { defaultWidth, storageKey });
    return () => {
      store.set(rightPanelWidthConfigSignal, null);
    };
  }, [defaultWidth, storageKey, store, widthStorageKey]);
  return null;
}

export function AppShellRightPanelTabListAfterSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelAfterListSignal,
    children,
  );
  return null;
}

export function AppShellRightPanelTabListBeforeSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelBeforeListSignal,
    children,
  );
  return null;
}

export function AppShellRightPanelTabListAfterStickySlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelAfterListStickySignal,
    children,
  );
  return null;
}
