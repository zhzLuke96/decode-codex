// Restored from ref/webview/assets/app-shell-tab-controller-CVKUvgYM.js
// Types for app shell tab controller state and operations.
import type { ComponentType, ReactNode } from "react";
export type AppShellPanelId = "bottom" | "right";
export type AppShellTabDirection = "next" | "previous";
export type AppShellTabInsertionPlacement = "after" | "before";
export type AppShellStore = {
  value: {
    routeKind: string;
  };
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, valueOrKey: unknown, valueOrUpdater?: unknown): void;
};
export type AppShellTabState = {
  key: number;
  value: unknown;
} | null;
export type AppShellTabComponent = ComponentType<Record<string, unknown>>;
export type AppShellTabMovePatch = Partial<AppShellTabRecord> & {
  props?: Record<string, unknown>;
};
export type AppShellTabRecord = {
  Component: AppShellTabComponent;
  contextMenuItems?: unknown;
  defaultState?: () => unknown;
  dndId: string;
  hasExternalFocus?: () => boolean;
  highlightedIcon?: ReactNode;
  icon?: ReactNode;
  isClosable: boolean;
  isHighlighted: boolean;
  isLabel: boolean;
  isPreview: boolean;
  kind?: string;
  onActivate?: (store: AppShellStore) => void;
  onBeforeClose?: (store: AppShellStore) => boolean | void;
  onClose?: (store: AppShellStore, panelId: AppShellPanelId) => void;
  onMove?: (
    store: AppShellStore,
    targetController: AppShellTabController,
  ) => AppShellTabMovePatch | void;
  props: Record<string, unknown>;
  renderPanel: (store: AppShellStore, onClose: () => void) => ReactNode;
  tabId: string;
  title?: ReactNode;
  tooltip?: ReactNode;
  trailingContent?: ReactNode;
};
export type OpenAppShellTabOptions = {
  activate?: boolean;
  contextMenuItems?: unknown;
  defaultState?: () => unknown;
  hasExternalFocus?: () => boolean;
  highlightedIcon?: ReactNode;
  icon?: ReactNode;
  id?: string | null;
  insertAfterTabId?: string | null;
  isClosable?: boolean;
  isHighlighted?: boolean;
  isLabel?: boolean;
  isPreview?: boolean;
  kind?: string;
  onActivate?: (store: AppShellStore) => void;
  onBeforeClose?: (store: AppShellStore) => boolean | void;
  onClose?: (store: AppShellStore, panelId: AppShellPanelId) => void;
  onMove?: (
    store: AppShellStore,
    targetController: AppShellTabController,
  ) => AppShellTabMovePatch | void;
  props?: Record<string, unknown>;
  title?: ReactNode;
  tooltip?: ReactNode;
  trailingContent?: ReactNode;
};
export type MovedAppShellTab = {
  state: AppShellTabState;
  tab: AppShellTabRecord;
};
export type ReceiveMovedTabOptions = {
  activate?: boolean;
  insertionPlacement?: AppShellTabInsertionPlacement;
};
export type AppShellTabController = {
  activateAdjacentTab(
    store: AppShellStore,
    direction: AppShellTabDirection,
  ): boolean;
  activeTab$: unknown;
  activeTabReactKey$: unknown;
  activateTab(store: AppShellStore, tabId: string | null): void;
  closeActiveTab(store: AppShellStore): boolean;
  closeOtherTabs(store: AppShellStore, tabId: string): void;
  closeTab(store: AppShellStore, tabId: string): void;
  closeTabsToRight(store: AppShellStore, tabId: string): void;
  moveTabTo(
    store: AppShellStore,
    tabId: string,
    targetController: AppShellTabController,
    insertAfterTabId: string | null,
    options?: ReceiveMovedTabOptions,
  ): void;
  openTab(
    store: AppShellStore,
    Component: AppShellTabComponent,
    options: OpenAppShellTabOptions,
  ): string;
  panelId: AppShellPanelId;
  pinTab(store: AppShellStore, tabId: string): void;
  receiveMovedTab(
    store: AppShellStore,
    movedTab: MovedAppShellTab,
    insertAfterTabId: string | null,
    options?: ReceiveMovedTabOptions,
  ): void;
  reorderTab(store: AppShellStore, tabId: string, targetTabId: string): void;
  resetTabState(store: AppShellStore, tabId: string): void;
  tabById$: unknown;
  tabIds$: unknown;
  tabs$: unknown;
  updateTab(
    store: AppShellStore,
    tabId: string,
    updates: Partial<AppShellTabRecord>,
  ): void;
};
