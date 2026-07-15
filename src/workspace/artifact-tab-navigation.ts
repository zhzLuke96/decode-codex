// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Per-tab artifact navigation registry: lets an opened artifact tab register a
// navigation handler and flushes any navigation target that arrived before the
// handler was ready.
export type ArtifactNavigationTarget = unknown;

export type ArtifactNavigationHandler = (
  target: ArtifactNavigationTarget,
) => boolean;

interface ArtifactNavigationEntry {
  handler: ArtifactNavigationHandler | null;
  pendingTarget: ArtifactNavigationTarget | null;
}

const navigationEntriesByTabId = new Map<string, ArtifactNavigationEntry>();

export function initArtifactTabNavigationChunk(): void {}

function getOrCreateNavigationEntry(tabId: string): ArtifactNavigationEntry {
  const existing = navigationEntriesByTabId.get(tabId);
  if (existing != null) return existing;
  const entry: ArtifactNavigationEntry = {
    handler: null,
    pendingTarget: null,
  };
  navigationEntriesByTabId.set(tabId, entry);
  return entry;
}

export function flushPendingArtifactNavigation(tabId: string) {
  const entry = navigationEntriesByTabId.get(tabId);
  if (entry?.pendingTarget == null || entry.handler == null) return;
  const target = entry.pendingTarget;
  if (entry.handler(target)) entry.pendingTarget = null;
}

export function navigateArtifactTab(
  tabId: string,
  target: ArtifactNavigationTarget,
) {
  const entry = getOrCreateNavigationEntry(tabId);
  if (entry.handler?.(target)) {
    entry.pendingTarget = null;
    return;
  }
  entry.pendingTarget = target;
}

export function registerArtifactNavigationHandler(
  tabId: string,
  handler: ArtifactNavigationHandler,
) {
  const entry = getOrCreateNavigationEntry(tabId);
  entry.handler = handler;
  flushPendingArtifactNavigation(tabId);
  return () => {
    if (entry.handler === handler) entry.handler = null;
  };
}

export function deleteArtifactNavigation(tabId: string) {
  navigationEntriesByTabId.delete(tabId);
}

export function createArtifactNavigator(tabId: string) {
  return {
    navigateTo: (target: ArtifactNavigationTarget) => {
      navigateArtifactTab(tabId, target);
    },
  };
}
