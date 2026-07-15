// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Image-preview side-panel tab controller helpers.

import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import { focusSidePanelLayout } from "../app-shell/side-panel-runtime";
import type {
  AppShellPanelId,
  AppShellStore,
  AppShellTabController,
} from "../app-shell/app-shell-tab-controller/types";

export const previewTabManager = rightAppShellTabController;

export function getPreviewTabPanel(
  side: string | null | undefined,
): AppShellTabController {
  return side === "bottom"
    ? bottomAppShellTabController
    : rightAppShellTabController;
}

export function findPreviewTabPanelSide(
  store: AppShellStore,
  tabId: string,
): AppShellPanelId | null {
  return (
    (["right", "bottom"] as const).find(
      (side) => store.get(getPreviewTabPanel(side).tabById$, tabId) != null,
    ) ?? null
  );
}

export function focusPreviewTabComposer(store: AppShellStore): boolean {
  return focusSidePanelLayout(store, "right");
}
