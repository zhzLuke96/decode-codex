// Restored from ref/webview/assets/app-shell-tab-controller-CVKUvgYM.js
// App shell tab controller public API.
import {
  bottomPanelOpenSignal,
  rightPanelOpenSignal,
  setBottomPanelOpen,
  setRightPanelOpen,
} from "../app-shell-state";
import {
  getAppShellTabAnalyticsKind,
  getRouteKindForTabAnalytics,
  logAppShellTabSelection,
} from "./analytics";
import { createAppShellTabController } from "./controller";
import { getTabInsertionIndex } from "./dom";
import type { AppShellStore, AppShellTabRecord } from "./types";
const rightAppShellTabController = createAppShellTabController({
  panelId: "right",
  panelOpenSignal: rightPanelOpenSignal,
  setPanelOpen: setRightPanelOpen,
});
const bottomAppShellTabController = createAppShellTabController({
  panelId: "bottom",
  panelOpenSignal: bottomPanelOpenSignal,
  setPanelOpen: setBottomPanelOpen,
});
function getAllAppShellTabs(
  store: AppShellStore,
  {
    excludeTab,
  }: {
    excludeTab?: {
      panelId: "bottom" | "right";
      tabId: string;
    };
  } = {},
): AppShellTabRecord[] {
  return [
    ...store
      .get<AppShellTabRecord[]>(rightAppShellTabController.tabs$)
      .filter(
        (tab) =>
          excludeTab?.panelId !== "right" || tab.tabId !== excludeTab.tabId,
      ),
    ...store
      .get<AppShellTabRecord[]>(bottomAppShellTabController.tabs$)
      .filter(
        (tab) =>
          excludeTab?.panelId !== "bottom" || tab.tabId !== excludeTab.tabId,
      ),
  ];
}
export {
  logAppShellTabSelection,
  getTabInsertionIndex,
  getAllAppShellTabs,
  getAppShellTabAnalyticsKind,
  rightAppShellTabController,
  getRouteKindForTabAnalytics,
  bottomAppShellTabController,
};
