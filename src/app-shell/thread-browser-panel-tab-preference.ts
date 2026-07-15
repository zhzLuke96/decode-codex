// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Per-conversation "preferred browser panel tab" signal + setter. This commons-chunk
// variant of the browser-panel-tab module keeps a sticky preference (read back by
// getLastFocusedBrowserTabId in this same chunk version) that the dedicated, newer
// thread-browser-panel-tabs chunk (canonical) no longer carries. Restored here so the
// chunk barrel export (Y_) stays intact without mutating the canonical file.
//
// Cross-slice deps resolved by role (see report.crossSliceDeps):
//  - createConversationKeyedSignal: writable conversation-keyed signal family factory
//    (chunk-local `_e` -> orig `Os`, dv5z3ftk chunk).
//  - activeConversationScopeKey: conversation-id scope/key atom
//    (chunk-local `Pa` -> orig `Qs`, bj5tp28r chunk).
import { createConversationKeyedSignal } from "../boundaries/app-scope-signal-family.facade";
import { activeConversationScopeKey } from "../boundaries/thread-context-inputs.facade";
import type { AppShellStore } from "./app-shell-tab-controller/types";

export const activeBrowserPanelTabPreferenceSignal =
  createConversationKeyedSignal<string | null>(
    activeConversationScopeKey,
    () => null,
  );

export function setActiveBrowserPanelTabPreference(
  store: AppShellStore,
  conversationId: string,
  browserTabId: string | null,
): void {
  store.set(
    activeBrowserPanelTabPreferenceSignal,
    conversationId,
    browserTabId,
  );
}
