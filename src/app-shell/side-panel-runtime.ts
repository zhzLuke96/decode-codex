// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Side-panel tab identifiers and controller helpers.
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "./app-shell-tab-controller";
import {
  activateThreadPanelTab,
  closeThreadPanel,
  openThreadPanel,
} from "./thread-panel-state";
import { getRightPanelWidthStorageKey } from "./app-shell-state";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";

export const SidePanelTabId = {
  BROWSER: "browser",
  DIFF: "diff",
  MCP_APP: "mcp-app",
  PLAN: "plan",
  SANDBOX: "sandbox",
  TIMELINE: "timeline",
} as const;

export const SidePanelTabKind = SidePanelTabId;
export const sidePanelTabController = rightAppShellTabController;

export function initSidePanelRuntimeChunk(): void {
  void SidePanelTabId;
  void SidePanelTabKind;
  void sidePanelTabController;
}

type SidePanelTarget = "bottom" | "right";

export function getSidePanelTabControllerForTarget(
  target: string | null | undefined,
): AppShellTabController {
  return target === "bottom"
    ? bottomAppShellTabController
    : rightAppShellTabController;
}

function normalizeSidePanelTarget(
  target: string | null | undefined,
): SidePanelTarget {
  return target === "bottom" ? "bottom" : "right";
}

function resolvePanelTabId(panel: unknown): string | null {
  if (typeof panel === "string" && panel.length > 0) return panel;
  if (panel == null || typeof panel !== "object") return null;
  const record = panel as Record<string, unknown>;
  const tabId = record.tabId ?? record.id ?? record.kind;
  return typeof tabId === "string" && tabId.length > 0 ? tabId : null;
}

export function getDefaultRightPanelStorageKey(routeTemplate: string): string {
  return getRightPanelWidthStorageKey(routeTemplate);
}

export function focusSidePanelLayout(
  store: AppShellStore,
  target: string | null | undefined = "right",
): boolean {
  return openThreadPanel(store, normalizeSidePanelTarget(target), {
    activateFallbackTab: true,
    allowEmpty: true,
  });
}

export function collapseSidePanelLayout(
  store: AppShellStore,
  target: string | null | undefined = "right",
): void {
  closeThreadPanel(store, normalizeSidePanelTarget(target));
}

export function setSidebarPanelForSide(
  store: AppShellStore,
  side: string | null | undefined,
  panel: unknown,
): boolean {
  const target = normalizeSidePanelTarget(side);
  const tabId = resolvePanelTabId(panel);
  return tabId == null
    ? focusSidePanelLayout(store, target)
    : activateThreadPanelTab(store, target, tabId) ||
        focusSidePanelLayout(store, target);
}

export function focusSidePanelTab(
  store: AppShellStore,
  target: string | null | undefined,
  tabId: string,
): boolean {
  const controller = getSidePanelTabControllerForTarget(target);
  const tab = store.get<AppShellTabRecord | null>(controller.tabById$, tabId);
  if (tab == null) return false;
  controller.activateTab(store, tabId);
  return true;
}

export function focusBrowserSidePanelPanel(
  store: AppShellStore,
  target: string | null | undefined,
): void {
  const controller = getSidePanelTabControllerForTarget(target);
  const activeTab = store.get<AppShellTabRecord | null>(controller.activeTab$);
  if (activeTab != null) controller.activateTab(store, activeTab.tabId);
}
