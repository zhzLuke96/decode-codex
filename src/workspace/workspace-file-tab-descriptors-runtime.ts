// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Collects open workspace-file tab descriptors from the app-shell side panels.

import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import type {
  AppShellPanelId,
  AppShellStore,
  AppShellTabController,
  AppShellTabRecord,
} from "../app-shell/app-shell-tab-controller/types";

interface CollectOptions {
  excludeTab?: { panelId: unknown; tabId: string };
}

function tabControllerForPanel(panelId: AppShellPanelId): AppShellTabController {
  return panelId === "bottom"
    ? bottomAppShellTabController
    : rightAppShellTabController;
}

export function collectWorkspaceFileTabDescriptors(
  store: AppShellStore,
  options: CollectOptions = {},
): Array<{ kind?: string; props: Record<string, unknown> }> {
  return (["right", "bottom"] as const).flatMap((panelId) =>
    store
      .get<AppShellTabRecord[]>(tabControllerForPanel(panelId).tabs$)
      .filter(
        (tab) =>
          options.excludeTab?.panelId !== panelId ||
          options.excludeTab.tabId !== tab.tabId,
      )
      .map((tab) => ({
        kind: tab.kind,
        props: tab.props,
      })),
  );
}
