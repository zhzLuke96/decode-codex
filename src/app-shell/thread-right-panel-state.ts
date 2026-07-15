// Restored from ref/webview/assets/thread-right-panel-state-kOix6M9C.js
// thread-right-panel-state-kOix6M9C chunk restored from the Codex webview bundle.
import { closeThreadPanel, openThreadPanel } from "./thread-panel-state";
import type { AppShellStore } from "./app-shell-tab-controller/types";
type OpenRightThreadPanelOptions = {
  activateFallbackTab?: boolean;
  allowEmpty?: boolean;
};
function openRightThreadPanel(
  store: AppShellStore,
  options?: OpenRightThreadPanelOptions,
): boolean {
  return openThreadPanel(store, "right", options);
}
function closeRightThreadPanel(store: AppShellStore): void {
  closeThreadPanel(store, "right");
}
export { openRightThreadPanel, closeRightThreadPanel };
