// Restored from ref/webview/assets/browser-sidebar-open-source-b3Nf5F2n.js
// browser-sidebar-open-source-b3Nf5F2n chunk restored from the Codex webview bundle.
import type {
  BrowserSidebarContextId,
  BrowserSidebarOpenSourcePayload,
} from "./types";

const sourceByContextAndTab = new Map<string, unknown>();
const initiatorByContextAndTab = new Map<string, unknown>();
const initialUrlByContextAndTab = new Map<string, string>();
const adoptionLeaseByContextAndTab = new Map<string, unknown>();
const adoptedWebContentsIdByContextAndTab = new Map<string, unknown>();

function makeBrowserSidebarOpenSourceKey(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  return `${contextId}\0${tabId}`;
}

function deleteBrowserSidebarOpenSourceEntries(
  valuesByKey: Map<string, unknown>,
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  if (tabId != null) {
    valuesByKey.delete(makeBrowserSidebarOpenSourceKey(contextId, tabId));
    return;
  }

  const keyPrefix = `${contextId}\0`;
  for (const key of valuesByKey.keys()) {
    if (key.startsWith(keyPrefix)) valuesByKey.delete(key);
  }
}

function consumeBrowserSidebarSource(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  const key = makeBrowserSidebarOpenSourceKey(contextId, tabId);
  const source = sourceByContextAndTab.get(key);
  return source == null ? null : (sourceByContextAndTab.delete(key), source);
}

function peekBrowserSidebarSource(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  return (
    sourceByContextAndTab.get(
      makeBrowserSidebarOpenSourceKey(contextId, tabId),
    ) ?? null
  );
}

function consumeBrowserSidebarInitiator(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  const key = makeBrowserSidebarOpenSourceKey(contextId, tabId);
  const initiator = initiatorByContextAndTab.get(key);
  return initiator == null
    ? null
    : (initiatorByContextAndTab.delete(key), initiator);
}

function getBrowserSidebarInitiator(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  return (
    initiatorByContextAndTab.get(
      makeBrowserSidebarOpenSourceKey(contextId, tabId),
    ) ?? null
  );
}

function setBrowserSidebarSource(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
  source: unknown,
) {
  sourceByContextAndTab.set(
    makeBrowserSidebarOpenSourceKey(contextId, tabId),
    source,
  );
}

function setBrowserSidebarInitiator(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
  initiator: unknown,
) {
  initiatorByContextAndTab.set(
    makeBrowserSidebarOpenSourceKey(contextId, tabId),
    initiator,
  );
}

function getBrowserSidebarInitialUrl(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  return (
    initialUrlByContextAndTab.get(
      makeBrowserSidebarOpenSourceKey(contextId, tabId),
    ) ?? null
  );
}

function setBrowserSidebarInitialUrl(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
  initialUrl: string,
) {
  initialUrlByContextAndTab.set(
    makeBrowserSidebarOpenSourceKey(contextId, tabId),
    initialUrl,
  );
}

function getBrowserSidebarAdoptionLease(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  return (
    adoptionLeaseByContextAndTab.get(
      makeBrowserSidebarOpenSourceKey(contextId, tabId),
    ) ?? null
  );
}

function setBrowserSidebarAdoptionLease(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
  adoptionLease: unknown,
) {
  adoptionLeaseByContextAndTab.set(
    makeBrowserSidebarOpenSourceKey(contextId, tabId),
    adoptionLease,
  );
}

function getAdoptedWebContentsId(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  return (
    adoptedWebContentsIdByContextAndTab.get(
      makeBrowserSidebarOpenSourceKey(contextId, tabId),
    ) ?? null
  );
}

function setAdoptedWebContentsId(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
  adoptedWebContentsId: unknown,
) {
  adoptedWebContentsIdByContextAndTab.set(
    makeBrowserSidebarOpenSourceKey(contextId, tabId),
    adoptedWebContentsId,
  );
}

function clearBrowserSidebarSource(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  deleteBrowserSidebarOpenSourceEntries(
    sourceByContextAndTab,
    contextId,
    tabId,
  );
}

function clearBrowserSidebarInitiator(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  deleteBrowserSidebarOpenSourceEntries(
    initiatorByContextAndTab,
    contextId,
    tabId,
  );
}

function clearBrowserSidebarInitialUrl(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  deleteBrowserSidebarOpenSourceEntries(
    initialUrlByContextAndTab,
    contextId,
    tabId,
  );
}

function clearBrowserSidebarAdoptionLease(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  deleteBrowserSidebarOpenSourceEntries(
    adoptionLeaseByContextAndTab,
    contextId,
    tabId,
  );
}

function clearAdoptedWebContentsId(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  deleteBrowserSidebarOpenSourceEntries(
    adoptedWebContentsIdByContextAndTab,
    contextId,
    tabId,
  );
}

function clearBrowserSidebarOpenSource(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
) {
  clearBrowserSidebarInitiator(contextId, tabId);
  clearBrowserSidebarSource(contextId, tabId);
  clearBrowserSidebarInitialUrl(contextId, tabId);
  clearBrowserSidebarAdoptionLease(contextId, tabId);
  clearAdoptedWebContentsId(contextId, tabId);
}

function rememberBrowserSidebarOpenSource(
  contextId: BrowserSidebarContextId,
  tabId: unknown,
  {
    adoptionLease,
    adoptedWebContentsId,
    initialUrl,
    initiator,
    source,
  }: BrowserSidebarOpenSourcePayload,
) {
  if (source != null) setBrowserSidebarSource(contextId, tabId, source);
  if (initiator != null)
    setBrowserSidebarInitiator(contextId, tabId, initiator);
  if (initialUrl == null) {
    clearBrowserSidebarInitialUrl(contextId, tabId);
  } else {
    setBrowserSidebarInitialUrl(contextId, tabId, initialUrl);
  }

  if (adoptionLease != null && adoptedWebContentsId != null) {
    setBrowserSidebarAdoptionLease(contextId, tabId, adoptionLease);
    setAdoptedWebContentsId(contextId, tabId, adoptedWebContentsId);
    return;
  }

  clearBrowserSidebarAdoptionLease(contextId, tabId);
  clearAdoptedWebContentsId(contextId, tabId);
}

export {
  clearAdoptedWebContentsId,
  clearBrowserSidebarAdoptionLease,
  clearBrowserSidebarInitialUrl,
  clearBrowserSidebarOpenSource,
  consumeBrowserSidebarInitiator,
  consumeBrowserSidebarSource,
  getAdoptedWebContentsId,
  getBrowserSidebarAdoptionLease,
  getBrowserSidebarInitialUrl,
  getBrowserSidebarInitiator,
  peekBrowserSidebarSource,
  rememberBrowserSidebarOpenSource,
};
