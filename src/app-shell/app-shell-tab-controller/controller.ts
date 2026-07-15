// Restored from ref/webview/assets/app-shell-tab-controller-CVKUvgYM.js
// App shell tab controller behavior and tab lifecycle operations.
import React from "react";
import {
  _appScopeC as createComputedSignal,
  appScopeUnderscore as createSignalFamily,
  createAppScopeSignal,
} from "../../boundaries/app-scope";
import { setActiveAppShellFocusArea as markActiveAppShellSurface } from "../app-shell-state";
import { threadScope } from "../../runtime/persisted-signal";
import { logAppShellTabSelection } from "./analytics";
import {
  createTabDndId,
  exitFullscreenForTabPanel,
  filterActivationHistory,
  focusTabPanel,
  getAdjacentTabId,
  getNeighborTabId,
  getTabInsertionIndex,
  resolveComponentTabId,
  scrollTabButtonIntoView,
  tabStillOwnsFocus,
} from "./dom";
import type {
  AppShellPanelId,
  AppShellStore,
  AppShellTabComponent,
  AppShellTabController,
  AppShellTabRecord,
  AppShellTabState,
  MovedAppShellTab,
  OpenAppShellTabOptions,
  ReceiveMovedTabOptions,
} from "./types";
type CreateControllerOptions = {
  panelId: AppShellPanelId;
  panelOpenSignal: unknown;
  setPanelOpen(store: AppShellStore, open: boolean): void;
};
type TabStateUpdater = (previousValue: unknown) => unknown;
export function createAppShellTabController({
  panelId,
  panelOpenSignal,
  setPanelOpen,
}: CreateControllerOptions): AppShellTabController {
  const tabIdsSignal = createAppScopeSignal(threadScope, []);
  const tabByIdSignal = createSignalFamily(threadScope, () => null);
  const tabsSignal = createComputedSignal(
    threadScope,
    ({ get }: { get: AppShellStore["get"] }) =>
      get<string[]>(tabIdsSignal)
        .map((tabId) => get<AppShellTabRecord | null>(tabByIdSignal, tabId))
        .filter((tab): tab is AppShellTabRecord => tab != null),
  );
  const tabStateByIdSignal = createSignalFamily(threadScope, () => null);
  const activeTabIdSignal = createAppScopeSignal(threadScope, null);
  const activationHistorySignal = createAppScopeSignal(threadScope, []);
  const activeTabSignal = createComputedSignal(
    threadScope,
    ({ get }: { get: AppShellStore["get"] }) => {
      const activeTabId = get<string | null>(activeTabIdSignal);
      const tabIds = get<string[]>(tabIdsSignal);
      return activeTabId == null
        ? null
        : (get<AppShellTabRecord | null>(tabByIdSignal, activeTabId) ??
            (get<boolean>(panelOpenSignal) && tabIds[0] != null
              ? get<AppShellTabRecord | null>(tabByIdSignal, tabIds[0])
              : null));
    },
  );
  const activeTabReactKeySignal = createComputedSignal(
    threadScope,
    ({ get }: { get: AppShellStore["get"] }) => {
      const activeTab = get<AppShellTabRecord | null>(activeTabSignal);
      if (activeTab == null) return null;
      const tabState = get<AppShellTabState>(
        tabStateByIdSignal,
        activeTab.tabId,
      );
      const { tabId, kind } = activeTab;
      return `${kind ?? tabId}-${tabState?.key ?? null}`;
    },
  );
  function openTab(
    store: AppShellStore,
    Component: AppShellTabComponent,
    options: OpenAppShellTabOptions,
  ): string {
    const {
      activate = true,
      contextMenuItems,
      defaultState,
      hasExternalFocus,
      highlightedIcon,
      icon,
      id,
      insertAfterTabId,
      isClosable,
      isHighlighted = false,
      isLabel = false,
      isPreview = false,
      kind,
      onActivate,
      onBeforeClose,
      onClose,
      onMove,
      props = {},
      title,
      tooltip,
      trailingContent,
    } = options;
    const tabId = resolveComponentTabId(Component, id);
    const storedState = store.get<AppShellTabState>(tabStateByIdSignal, tabId);
    const initialState = storedState?.value ?? defaultState?.();
    const existingTab = store.get<AppShellTabRecord | null>(
      tabByIdSignal,
      tabId,
    );
    if (storedState == null && defaultState != null) {
      store.set(tabStateByIdSignal, tabId, {
        key: 0,
        value: initialState,
      });
    }
    const tab: AppShellTabRecord = {
      Component,
      contextMenuItems,
      defaultState,
      dndId: existingTab?.dndId ?? createTabDndId(),
      hasExternalFocus,
      highlightedIcon,
      icon,
      isClosable: !isLabel && (isClosable ?? true),
      isHighlighted,
      isLabel,
      isPreview,
      kind,
      onActivate,
      onBeforeClose,
      onClose,
      onMove,
      props,
      renderPanel: createRenderPanel(Component, tabId, props, initialState),
      tabId,
      title,
      tooltip,
      trailingContent,
    };
    registerTab(store, tab, insertAfterTabId);
    if (activate) {
      activateTab(store, tabId);
      setPanelOpen(store, true);
      requestAnimationFrame(() => {
        focusTabPanel(panelId, tab.tabId);
      });
    }
    return tabId;
  }
  function updateTab(
    store: AppShellStore,
    tabId: string,
    updates: Partial<AppShellTabRecord>,
  ): void {
    const existingTab = store.get<AppShellTabRecord | null>(
      tabByIdSignal,
      tabId,
    );
    if (existingTab == null) return;
    const nextUpdates =
      updates.isPreview && !existingTab.isPreview
        ? {
            ...updates,
            isPreview: false,
          }
        : updates;
    store.set(tabByIdSignal, tabId, {
      ...existingTab,
      ...nextUpdates,
    });
  }
  function registerTab(
    store: AppShellStore,
    tab: AppShellTabRecord,
    insertAfterTabId: string | null | undefined,
  ): void {
    const existingTab = store.get<AppShellTabRecord | null>(
      tabByIdSignal,
      tab.tabId,
    );
    const tabToStore =
      tab.isPreview && existingTab != null
        ? {
            ...tab,
            isPreview: existingTab.isPreview,
          }
        : tab;
    if (tabToStore.isPreview && existingTab == null) {
      closeCurrentPreviewTab(store);
    }
    store.set(tabByIdSignal, tab.tabId, tabToStore);
    if (existingTab == null) {
      store.set(tabIdsSignal, (currentTabIds: string[]) => {
        const insertAfterIndex =
          insertAfterTabId == null
            ? -1
            : currentTabIds.indexOf(insertAfterTabId);
        return insertAfterIndex === -1
          ? [...currentTabIds, tabToStore.tabId]
          : [
              ...currentTabIds.slice(0, insertAfterIndex + 1),
              tabToStore.tabId,
              ...currentTabIds.slice(insertAfterIndex + 1),
            ];
      });
    }
  }
  function closeCurrentPreviewTab(store: AppShellStore): void {
    const currentPreview =
      store.get<AppShellTabRecord[]>(tabsSignal).find((tab) => tab.isPreview) ??
      null;
    if (currentPreview == null) return;
    finishClosingTab(store, currentPreview);
    store.set(tabByIdSignal, currentPreview.tabId, null);
    store.set(tabIdsSignal, (tabIds: string[]) =>
      tabIds.filter((tabId) => tabId !== currentPreview.tabId),
    );
    store.set(activationHistorySignal, (tabIds: string[]) =>
      tabIds.filter((tabId) => tabId !== currentPreview.tabId),
    );
  }
  function activateTab(store: AppShellStore, tabId: string | null): void {
    const nextTab =
      tabId == null
        ? null
        : store.get<AppShellTabRecord | null>(tabByIdSignal, tabId);
    if (tabId != null && nextTab == null) return;
    const previousActiveTabId =
      store.get<AppShellTabRecord | null>(activeTabSignal)?.tabId ?? null;
    const previousActiveTab =
      previousActiveTabId == null
        ? null
        : store.get<AppShellTabRecord | null>(
            tabByIdSignal,
            previousActiveTabId,
          );
    const shouldRefocusPanel =
      previousActiveTabId != null &&
      previousActiveTabId !== tabId &&
      tabStillOwnsFocus(panelId, previousActiveTab);
    setActiveTab(store, tabId, true);
    if (nextTab != null) {
      markActiveAppShellSurface(
        store,
        panelId === "bottom" ? "bottom-panel" : "right-panel",
      );
      if (shouldRefocusPanel) {
        requestAnimationFrame(() => {
          focusTabPanel(panelId, nextTab.tabId);
        });
      }
    }
  }
  function activateAdjacentTab(
    store: AppShellStore,
    direction: "next" | "previous",
  ): boolean {
    const adjacentTabId = getAdjacentTabId(
      store.get<AppShellTabRecord[]>(tabsSignal).map((tab) => tab.tabId),
      store.get<AppShellTabRecord | null>(activeTabSignal)?.tabId ?? null,
      direction,
    );
    return !store.get<boolean>(panelOpenSignal) || adjacentTabId == null
      ? false
      : (activateTab(store, adjacentTabId), true);
  }
  function reorderTab(
    store: AppShellStore,
    tabId: string,
    targetTabId: string,
  ): void {
    const tabIds = store.get<string[]>(tabIdsSignal);
    const tabIndex = tabIds.indexOf(tabId);
    const targetIndex = tabIds.indexOf(targetTabId);
    if (tabIndex === -1 || targetIndex === -1 || tabIndex === targetIndex) {
      return;
    }
    const reorderedTabIds = [...tabIds];
    const [movedTabId] = reorderedTabIds.splice(tabIndex, 1);
    if (movedTabId != null) {
      reorderedTabIds.splice(targetIndex, 0, movedTabId);
      store.set(tabIdsSignal, reorderedTabIds);
    }
  }
  function moveTabTo(
    store: AppShellStore,
    tabId: string,
    targetController: AppShellTabController,
    insertAfterTabId: string | null,
    options: ReceiveMovedTabOptions = {},
  ): void {
    if (
      targetController === controller ||
      store.get<AppShellTabRecord | null>(targetController.tabById$, tabId) !=
        null
    ) {
      return;
    }
    const movedTab = removeTabForMove(store, tabId);
    if (movedTab != null) {
      targetController.receiveMovedTab(
        store,
        movedTab,
        insertAfterTabId,
        options,
      );
    }
  }
  function removeTabForMove(
    store: AppShellStore,
    tabId: string,
  ): MovedAppShellTab | null {
    const tabIds = store.get<string[]>(tabIdsSignal);
    const tabIndex = tabIds.indexOf(tabId);
    const tab = store.get<AppShellTabRecord | null>(tabByIdSignal, tabId);
    if (tabIndex === -1 || tab == null) return null;
    const tabState = store.get<AppShellTabState>(tabStateByIdSignal, tabId);
    const remainingTabIds = tabIds.filter((id) => id !== tabId);
    const activationHistory = filterActivationHistory(
      store,
      activationHistorySignal,
      remainingTabIds,
    );
    exitFullscreenForTabPanel(panelId, tab.tabId);
    store.set(tabByIdSignal, tabId, null);
    store.set(tabIdsSignal, remainingTabIds);
    store.set(activationHistorySignal, activationHistory);
    store.set(tabStateByIdSignal, tabId, null);
    if (store.get<string | null>(activeTabIdSignal) === tabId) {
      setActiveTab(
        store,
        activationHistory[0] ?? getNeighborTabId(remainingTabIds, tabIndex),
        false,
      );
    }
    return {
      state: tabState,
      tab,
    };
  }
  function receiveMovedTab(
    store: AppShellStore,
    movedTab: MovedAppShellTab,
    insertAfterTabId: string | null,
    {
      activate = true,
      insertionPlacement = "before",
    }: ReceiveMovedTabOptions = {},
  ): void {
    if (
      store.get<AppShellTabRecord | null>(tabByIdSignal, movedTab.tab.tabId) !=
      null
    ) {
      return;
    }
    const { tab } = movedTab;
    if (tab.isPreview) closeCurrentPreviewTab(store);
    store.set(tabStateByIdSignal, tab.tabId, movedTab.state);
    const movedPatch = tab.onMove?.(store, controller);
    const props = movedPatch?.props ?? tab.props;
    const nextTab: AppShellTabRecord = {
      ...tab,
      ...movedPatch,
      props,
      renderPanel: createRenderPanel(
        tab.Component,
        tab.tabId,
        props,
        movedTab.state?.value ?? tab.defaultState?.(),
      ),
    };
    const tabIds = store.get<string[]>(tabIdsSignal);
    const insertIndex = getTabInsertionIndex(
      tabIds,
      insertAfterTabId,
      insertionPlacement,
    );
    store.set(tabByIdSignal, nextTab.tabId, nextTab);
    store.set(tabIdsSignal, [
      ...tabIds.slice(0, insertIndex),
      nextTab.tabId,
      ...tabIds.slice(insertIndex),
    ]);
    if (activate) {
      activateTab(store, nextTab.tabId);
      setPanelOpen(store, true);
      requestAnimationFrame(() => {
        focusTabPanel(panelId, nextTab.tabId);
      });
    }
  }
  function closeTab(store: AppShellStore, tabId: string): void {
    const tabIds = store.get<string[]>(tabIdsSignal);
    const tabIndex = tabIds.indexOf(tabId);
    if (tabIndex === -1) return;
    const tab = store.get<AppShellTabRecord | null>(tabByIdSignal, tabId);
    if (tab?.onBeforeClose?.(store) === false) return;
    const hadFocus = tabStillOwnsFocus(panelId, tab);
    if (tab != null) finishClosingTab(store, tab);
    const remainingTabIds = tabIds.filter((id) => id !== tabId);
    store.set(tabByIdSignal, tabId, null);
    store.set(tabIdsSignal, remainingTabIds);
    if (remainingTabIds.length === 0) setPanelOpen(store, false);
    const activationHistory = filterActivationHistory(
      store,
      activationHistorySignal,
      remainingTabIds,
    );
    store.set(activationHistorySignal, activationHistory);
    if (store.get<string | null>(activeTabIdSignal) === tabId) {
      setActiveTab(
        store,
        activationHistory[0] ?? getNeighborTabId(remainingTabIds, tabIndex),
        false,
      );
      if (hadFocus) {
        requestAnimationFrame(() => {
          focusTabPanel(
            panelId,
            store.get<AppShellTabRecord | null>(activeTabSignal)?.tabId ?? null,
          );
        });
      }
    }
  }
  function pinTab(store: AppShellStore, tabId: string): void {
    updateTab(store, tabId, {
      isPreview: false,
    });
  }
  function finishClosingTab(
    store: AppShellStore,
    tab: AppShellTabRecord,
  ): void {
    exitFullscreenForTabPanel(panelId, tab.tabId);
    tab.onClose?.(store, panelId);
    store.set(tabStateByIdSignal, tab.tabId, null);
  }
  function closeActiveTab(store: AppShellStore): boolean {
    const activeTab = store.get<AppShellTabRecord | null>(activeTabSignal);
    return !store.get<boolean>(panelOpenSignal) ||
      activeTab == null ||
      !activeTab.isClosable
      ? false
      : (closeTab(store, activeTab.tabId), true);
  }
  function closeOtherTabs(store: AppShellStore, tabId: string): void {
    const closableTabIds = store
      .get<AppShellTabRecord[]>(tabsSignal)
      .filter((tab) => tab.tabId !== tabId && tab.isClosable)
      .map((tab) => tab.tabId)
      .reverse();
    for (const closableTabId of closableTabIds) {
      closeTab(store, closableTabId);
    }
    if (store.get<AppShellTabRecord | null>(tabByIdSignal, tabId) != null) {
      activateTab(store, tabId);
    }
  }
  function closeTabsToRight(store: AppShellStore, tabId: string): void {
    const tabIds = store.get<string[]>(tabIdsSignal);
    const tabIndex = tabIds.indexOf(tabId);
    if (tabIndex === -1) return;
    const closableTabIds = tabIds
      .slice(tabIndex + 1)
      .map((id) => store.get<AppShellTabRecord | null>(tabByIdSignal, id))
      .filter((tab): tab is AppShellTabRecord => tab != null && tab.isClosable)
      .map((tab) => tab.tabId)
      .reverse();
    for (const closableTabId of closableTabIds) {
      closeTab(store, closableTabId);
    }
  }
  function setActiveTab(
    store: AppShellStore,
    tabId: string | null,
    updateHistory: boolean,
  ): void {
    const previousActiveTabId = store.get<string | null>(activeTabIdSignal);
    const activeChanged = previousActiveTabId !== tabId;
    if (updateHistory && previousActiveTabId !== tabId) {
      store.set(activationHistorySignal, (history: string[]) => [
        ...(previousActiveTabId == null ? [] : [previousActiveTabId]),
        ...history.filter(
          (historyTabId) =>
            historyTabId !== previousActiveTabId && historyTabId !== tabId,
        ),
      ]);
    }
    store.set(activeTabIdSignal, tabId);
    if (tabId == null) return;
    const tab = store.get<AppShellTabRecord | null>(tabByIdSignal, tabId);
    tab?.onActivate?.(store);
    if (panelId === "right" && activeChanged) {
      logAppShellTabSelection(store, tab);
    }
    requestAnimationFrame(() => {
      scrollTabButtonIntoView(panelId, tabId);
    });
  }
  function resetTabState(store: AppShellStore, tabId: string): void {
    const tab = store.get<AppShellTabRecord | null>(tabByIdSignal, tabId);
    store.set(tabStateByIdSignal, tabId, (previousState: AppShellTabState) => ({
      key: (previousState?.key ?? 0) + 1,
      value: tab?.defaultState?.() ?? null,
    }));
  }
  const controller: AppShellTabController = {
    activateAdjacentTab,
    activeTab$: activeTabSignal,
    activeTabReactKey$: activeTabReactKeySignal,
    activateTab,
    closeActiveTab,
    closeOtherTabs,
    closeTab,
    closeTabsToRight,
    moveTabTo,
    openTab,
    panelId,
    pinTab,
    receiveMovedTab,
    reorderTab,
    resetTabState,
    tabById$: tabByIdSignal,
    tabIds$: tabIdsSignal,
    tabs$: tabsSignal,
    updateTab,
  };
  return controller;
  function createRenderPanel(
    Component: AppShellTabComponent,
    tabId: string,
    initialProps: Record<string, unknown>,
    initialState: unknown,
  ): AppShellTabRecord["renderPanel"] {
    return (store, onClose) => {
      const setTabState = (nextState: unknown | TabStateUpdater) => {
        store.set(
          tabStateByIdSignal,
          tabId,
          (previousState: AppShellTabState) => {
            const previousValue =
              previousState == null ? initialState : previousState.value;
            const nextValue =
              typeof nextState === "function"
                ? nextState(previousValue)
                : nextState;
            return Object.is(nextValue, previousValue)
              ? previousState
              : {
                  key: previousState?.key ?? 0,
                  value: nextValue,
                };
          },
        );
      };
      const currentTab = store.get<AppShellTabRecord | null>(
        tabByIdSignal,
        tabId,
      );
      const currentState = store.get<AppShellTabState>(
        tabStateByIdSignal,
        tabId,
      );
      return React.createElement(Component, {
        ...(currentTab?.props ?? initialProps),
        isActive:
          store.get<AppShellTabRecord | null>(activeTabSignal)?.tabId === tabId,
        onClose,
        setTabState,
        tabId,
        tabState: currentState == null ? initialState : currentState.value,
      });
    };
  }
}
