// Restored from ref/webview/assets/thread-panel-state-_Pmf_86i.js
// thread-panel-state-_Pmf_86i chunk restored from the Codex webview bundle.
import {
  activeAppShellFocusAreaSignal,
  bottomPanelPreviousFocusAreaSignal,
  setActiveAppShellFocusArea,
  setBottomPanelOpen,
  setRightPanelOpen,
  setRightPanelOpenWithOptions,
} from "./app-shell-state";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "./app-shell-tab-controller";
import { focusComposerInput } from "../composer/focus-composer";
import type {
  AppShellStore,
  AppShellTabController,
} from "./app-shell-tab-controller/types";
type ThreadPanelId = "bottom" | "right";
type OpenThreadPanelOptions = {
  activateFallbackTab?: boolean;
  allowEmpty?: boolean;
};
const THREAD_PANEL_IDS: ThreadPanelId[] = ["right", "bottom"];
function getThreadPanelController(
  panelId: ThreadPanelId,
): AppShellTabController {
  return panelId === "bottom"
    ? bottomAppShellTabController
    : rightAppShellTabController;
}
function findPanelForTab(
  store: AppShellStore,
  tabId: string,
): ThreadPanelId | null {
  return (
    THREAD_PANEL_IDS.find(
      (panelId) =>
        store.get(getThreadPanelController(panelId).tabById$, tabId) != null,
    ) ?? null
  );
}
function openThreadPanel(
  store: AppShellStore,
  panelId: ThreadPanelId,
  { activateFallbackTab, allowEmpty }: OpenThreadPanelOptions = {},
): boolean {
  const controller = getThreadPanelController(panelId);
  const tabs = store.get<
    Array<{
      tabId: string;
    }>
  >(controller.tabs$);
  let focusAreaToRestore: unknown = null;
  if (panelId === "bottom") {
    const activeFocusArea = store.get(activeAppShellFocusAreaSignal);
    focusAreaToRestore =
      activeFocusArea === "bottom-panel" ? null : activeFocusArea;
  }
  return tabs.length === 0 && allowEmpty !== true
    ? false
    : (activateFallbackTab === true &&
        store.get(controller.activeTab$) == null &&
        controller.activateTab(store, tabs[0]?.tabId ?? null),
      panelId === "bottom"
        ? (focusAreaToRestore != null &&
            store.set(bottomPanelPreviousFocusAreaSignal, focusAreaToRestore),
          setBottomPanelOpen(store, true),
          setActiveAppShellFocusArea(store, "bottom-panel"))
        : (setRightPanelOpen(store, true),
          setActiveAppShellFocusArea(store, "right-panel")),
      true);
}
function closeThreadPanel(store: AppShellStore, panelId: ThreadPanelId): void {
  if (panelId === "bottom") {
    const focusAreaToRestore =
      store.get(activeAppShellFocusAreaSignal) === "bottom-panel"
        ? store.get(bottomPanelPreviousFocusAreaSignal)
        : null;
    setBottomPanelOpen(store, false);
    if (focusAreaToRestore != null) {
      setActiveAppShellFocusArea(store, focusAreaToRestore);
    }
    focusComposerInput();
    return;
  }
  setRightPanelOpenWithOptions(store, false, {
    restoreFullWidthOnNextOpen: true,
  });
}
function activateThreadPanelTab(
  store: AppShellStore,
  panelId: ThreadPanelId,
  tabId: string,
): boolean {
  const controller = getThreadPanelController(panelId);
  return store.get(controller.tabById$, tabId) == null
    ? false
    : (controller.activateTab(store, tabId), openThreadPanel(store, panelId));
}

function initThreadPanelStateRuntime(): void {
  void THREAD_PANEL_IDS;
  void getThreadPanelController;
}

export {
  findPanelForTab,
  getThreadPanelController,
  activateThreadPanelTab,
  openThreadPanel,
  closeThreadPanel,
  THREAD_PANEL_IDS,
  initThreadPanelStateRuntime,
};
