// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Panel tab snapshot helpers used when moving or forking conversations.
import {
  isAbsoluteFilesystemPath,
  normalizeFilesystemPath,
} from "../boundaries/rpc.facade";
import {
  browserTabSnapshotStore,
  terminalSessionManager,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  getConversationBrowserTabIdsForTransfer,
  getLastFocusedBrowserTabId,
} from "../app-shell/thread-browser-panel-tabs";
import {
  getBrowserTabConversationKey,
  getBrowserTabLegacyKey,
  type BrowserPanelLocation,
} from "../runtime/persisted-signal";

export {
  activeAppShellFocusAreaSignal as focusAreaStateKey,
  bottomPanelOpenSignal as bottomPanelOpenStateKey,
  rightPanelFullscreenSignal as rightPanelFullWidthStateKey,
  rightPanelOpenSignal as rightPanelOpenStateKey,
} from "../app-shell/app-shell-state";

export {
  bottomPanelTabsStore as bottomPanelTabsDescriptor,
  rightPanelTabsStore as rightPanelTabsDescriptor,
} from "../app-shell/thread-panel-tabs-store";

type PanelStore = {
  get<TValue>(atom: unknown, key?: unknown): TValue;
};

type PanelTabLocation = {
  kind?: string | null;
  tabId?: string | number | null;
} | null;

export { browserTabSnapshotStore };
export { normalizeFilesystemPath };
export const terminalSessionSnapshotStore = terminalSessionManager;

export function browserTabIdForConversation(conversationId: string): string {
  return getBrowserTabLegacyKey(conversationId);
}

export function deriveBrowserConversationId(
  _scope: unknown,
  conversationId: string,
): string {
  return conversationId;
}

export function getConversationPanelLayoutSnapshot<TScope extends PanelStore>(
  scope: TScope | null | undefined,
  _conversationId: string,
): TScope | null {
  return typeof scope?.get === "function" ? scope : null;
}

export function getActiveBrowserTabId(
  store: PanelStore,
  conversationId: string,
): string | null {
  return getLastFocusedBrowserTabId(store, conversationId);
}

export function getAllBrowserTabIdsForConversation(
  store: PanelStore,
  conversationId: string,
): string[] {
  return getConversationBrowserTabIdsForTransfer(store, conversationId);
}

export function getBrowserTabIdForPanelTab(
  panelTab: PanelTabLocation,
  fallbackBrowserTabId?: string | null,
): string | null {
  if (panelTab == null || typeof panelTab.tabId !== "string") {
    return null;
  }
  return getBrowserTabConversationKey(
    panelTab as BrowserPanelLocation,
    fallbackBrowserTabId,
  );
}

export function isWindowsStyleAbsolutePath(path: string): boolean {
  return /^[a-z]:[\\/]/i.test(path);
}

export function isUncPath(path: string): boolean {
  return /^[/\\]{2}[^/\\]+[/\\]/.test(path);
}

export function isWorkspaceFilePath(path: string): boolean {
  return isAbsoluteFilesystemPath(path);
}

export function terminalTabIdForSession(sessionId: unknown): string {
  return `terminal:${String(sessionId)}`;
}
