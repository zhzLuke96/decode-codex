// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Register/unregister browser-sidebar tab sources and notify subscribers when the
// retained-tab registry changes. This onboarding-commons build adds a change-generation
// counter + listener set on top of the base browser-sidebar-open-source registry.
import { clearBrowserSidebarOpenSource } from "./metadata";
import {
  clearQueuedBrowserSidebarTab,
  upsertBrowserSidebarTabSource,
} from "./tabs";
import type { BrowserSidebarContextId, BrowserSidebarTabSource } from "./types";

let tabRegistryGeneration = 0;
const tabRegistryChangeListeners = new Set<() => void>();

export function getBrowserSidebarTabRegistryGeneration(): number {
  return tabRegistryGeneration;
}

export function subscribeToBrowserSidebarTabRegistry(
  listener: () => void,
): () => void {
  tabRegistryChangeListeners.add(listener);
  return () => {
    tabRegistryChangeListeners.delete(listener);
  };
}

export function unregisterBrowserSidebarTab(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
): void {
  clearBrowserSidebarOpenSource(contextId, tabId);
  clearQueuedBrowserSidebarTab(contextId, tabId);
}

export function registerAndNotifyBrowserSidebarTab(
  contextId: BrowserSidebarContextId,
  source: BrowserSidebarTabSource,
): void {
  upsertBrowserSidebarTabSource(contextId, source);
  tabRegistryGeneration += 1;
  for (const listener of tabRegistryChangeListeners) listener();
}
