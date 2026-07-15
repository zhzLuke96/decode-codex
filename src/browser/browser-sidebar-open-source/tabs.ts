// Restored from ref/webview/assets/browser-sidebar-open-source-b3Nf5F2n.js
// browser-sidebar-open-source-b3Nf5F2n chunk restored from the Codex webview bundle.
import { clearBrowserSidebarOpenSource } from "./metadata";
import type { BrowserSidebarContextId, BrowserSidebarTabSource } from "./types";

const tabSourcesByContext = new Map<
  BrowserSidebarContextId,
  BrowserSidebarTabSource[]
>();
const queuedBrowserTabIdsByContext = new Map<
  BrowserSidebarContextId,
  Set<unknown>
>();
const adoptedBrowserTabIdsByContext = new Map<
  BrowserSidebarContextId,
  Set<unknown>
>();

function consumeBrowserSidebarTabSources(contextId: BrowserSidebarContextId) {
  const sources = tabSourcesByContext.get(contextId) ?? [];
  tabSourcesByContext.delete(contextId);
  return sources;
}

function clearBrowserSidebarTabSources(contextId: BrowserSidebarContextId) {
  tabSourcesByContext.delete(contextId);
}

function getBrowserSidebarTabIds(contextId: BrowserSidebarContextId) {
  return (
    tabSourcesByContext.get(contextId)?.map((source) => source.browserTabId) ??
    []
  );
}

function consumeQueuedBrowserTabIds(contextId: BrowserSidebarContextId) {
  const tabIds = queuedBrowserTabIdsByContext.get(contextId) ?? new Set();
  queuedBrowserTabIdsByContext.delete(contextId);
  return [...tabIds];
}

function queueBrowserSidebarTab(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  clearBrowserSidebarOpenSource(contextId, tabId);
  removeBrowserSidebarTabSource(contextId, tabId);

  const tabIds = queuedBrowserTabIdsByContext.get(contextId);
  if (tabIds == null) {
    queuedBrowserTabIdsByContext.set(contextId, new Set([tabId]));
    return;
  }
  tabIds.add(tabId);
}

function clearQueuedBrowserSidebarTab(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  if (tabId == null) {
    clearBrowserSidebarTabSources(contextId);
    queuedBrowserTabIdsByContext.delete(contextId);
    return;
  }

  queuedBrowserTabIdsByContext.get(contextId)?.delete(tabId);
  removeBrowserSidebarTabSource(contextId, tabId);
}

function removeBrowserSidebarTabSource(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  const sources = tabSourcesByContext.get(contextId);
  if (sources == null) return;

  const remainingSources = sources.filter(
    (source) => source.browserTabId !== tabId,
  );
  if (remainingSources.length === 0) {
    tabSourcesByContext.delete(contextId);
    return;
  }
  tabSourcesByContext.set(contextId, remainingSources);
}

function upsertBrowserSidebarTabSource(
  contextId: BrowserSidebarContextId,
  source: BrowserSidebarTabSource,
) {
  queuedBrowserTabIdsByContext.get(contextId)?.delete(source.browserTabId);

  const sources = tabSourcesByContext.get(contextId);
  if (sources == null) {
    tabSourcesByContext.set(contextId, [source]);
    return;
  }

  const sourceIndex = sources.findIndex(
    (item) => item.browserTabId === source.browserTabId,
  );
  if (sourceIndex === -1) {
    sources.push(source);
    return;
  }
  sources[sourceIndex] = source;
}

function queueAdoptedBrowserTabId(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  const tabIds = adoptedBrowserTabIdsByContext.get(contextId);
  if (tabIds == null) {
    adoptedBrowserTabIdsByContext.set(contextId, new Set([tabId]));
    return;
  }
  tabIds.add(tabId);
}

function consumeAdoptedBrowserTabIds(contextId: BrowserSidebarContextId) {
  const tabIds = adoptedBrowserTabIdsByContext.get(contextId);
  return tabIds == null
    ? []
    : (adoptedBrowserTabIdsByContext.delete(contextId), [...tabIds]);
}

export {
  clearQueuedBrowserSidebarTab,
  consumeAdoptedBrowserTabIds,
  consumeBrowserSidebarTabSources,
  consumeQueuedBrowserTabIds,
  getBrowserSidebarTabIds,
  queueAdoptedBrowserTabId,
  queueBrowserSidebarTab,
  upsertBrowserSidebarTabSource,
};
