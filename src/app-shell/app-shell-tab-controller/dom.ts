// Restored from ref/webview/assets/app-shell-tab-controller-CVKUvgYM.js
// DOM helpers for app shell tab focus, ordering, and fullscreen behavior.
import type {
  AppShellPanelId,
  AppShellTabDirection,
  AppShellTabInsertionPlacement,
  AppShellTabRecord,
  AppShellStore,
} from "./types";
let generatedTabDndId = 0;
const componentTabIds = new WeakMap<object, string>();
export function getNeighborTabId(
  tabIds: string[],
  removedIndex: number,
): string | null {
  return tabIds[removedIndex - 1] ?? tabIds[removedIndex] ?? null;
}
export function createTabDndId(): string {
  generatedTabDndId += 1;
  return `app-shell-tab:${generatedTabDndId}`;
}
export function filterActivationHistory(
  store: AppShellStore,
  activationHistorySignal: unknown,
  remainingTabIds: string[],
): string[] {
  return store
    .get<string[]>(activationHistorySignal)
    .filter((tabId) => remainingTabIds.includes(tabId));
}
export function getAdjacentTabId(
  tabIds: string[],
  activeTabId: string | null,
  direction: AppShellTabDirection,
): string | null {
  if (tabIds.length < 2) return null;
  const activeIndex = activeTabId == null ? -1 : tabIds.indexOf(activeTabId);
  if (activeIndex === -1) {
    return direction === "next" ? (tabIds[0] ?? null) : (tabIds.at(-1) ?? null);
  }
  return direction === "next"
    ? (tabIds[(activeIndex + 1) % tabIds.length] ?? null)
    : (tabIds[(activeIndex - 1 + tabIds.length) % tabIds.length] ?? null);
}
export function getTabInsertionIndex(
  tabIds: string[],
  anchorTabId: string | null | undefined,
  placement: AppShellTabInsertionPlacement,
): number {
  const anchorIndex = anchorTabId == null ? -1 : tabIds.indexOf(anchorTabId);
  return anchorIndex === -1
    ? tabIds.length
    : anchorIndex + (placement === "after" ? 1 : 0);
}
export function scrollTabButtonIntoView(
  panelId: AppShellPanelId,
  tabId: string | null,
): void {
  if (tabId == null) return;
  for (const element of document.querySelectorAll(
    `[data-app-shell-tab-controller="${panelId}"]`,
  )) {
    if (
      element instanceof HTMLElement &&
      element.dataset.tabId === tabId &&
      typeof element.scrollIntoView === "function"
    ) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
      return;
    }
  }
}
export function focusTabPanel(
  panelId: AppShellPanelId,
  tabId: string | null,
): void {
  if (tabId == null) return;
  const panelElement = getTabPanelElement(panelId, tabId);
  const alreadyContainsFocus =
    panelElement?.contains(document.activeElement) ?? false;
  if (panelElement != null && !alreadyContainsFocus) {
    panelElement.focus({
      preventScroll: true,
    });
  }
}
export function tabStillOwnsFocus(
  panelId: AppShellPanelId,
  tab: AppShellTabRecord | null | undefined,
): boolean {
  const tabId = tab?.tabId ?? null;
  return tabId == null
    ? false
    : getTabPanelElement(panelId, tabId)?.contains(document.activeElement) ===
        true ||
        (tab?.hasExternalFocus?.() ?? false);
}
export function getTabPanelElement(
  panelId: AppShellPanelId,
  tabId: string,
): Element | null {
  return document.querySelector(
    `[role="tabpanel"][data-app-shell-tab-panel-controller="${panelId}"][data-tab-id="${tabId}"]`,
  );
}
export function exitFullscreenForTabPanel(
  panelId: AppShellPanelId,
  tabId: string,
): void {
  const fullscreenElement = document.fullscreenElement;
  if (fullscreenElement == null) return;
  for (const element of document.querySelectorAll(
    `[data-app-shell-tab-panel-controller="${panelId}"]`,
  )) {
    if (
      element instanceof HTMLElement &&
      element.dataset.tabId === tabId &&
      element.contains(fullscreenElement)
    ) {
      document.exitFullscreen().catch(() => undefined);
      return;
    }
  }
}
export function resolveComponentTabId(
  Component: object,
  explicitId: string | null | undefined,
): string {
  if (explicitId != null) return explicitId;
  const existingId = componentTabIds.get(Component);
  if (existingId != null) return existingId;
  const generatedId = `component:${crypto.randomUUID()}`;
  componentTabIds.set(Component, generatedId);
  return generatedId;
}
