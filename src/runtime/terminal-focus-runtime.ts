// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// App-shell focus state for terminal-specific shortcuts.

import {
  appScopeRoot,
  createAppScopeSignal,
} from "../boundaries/app-scope";

type AppScopeSetter = {
  set(signal: unknown, value: unknown): void;
};

export const terminalFocusedSignal = createAppScopeSignal<boolean>(
  appScopeRoot,
  false,
);

export function setTerminalFocused(
  store: AppScopeSetter,
  focused: boolean,
): void {
  store.set(terminalFocusedSignal, focused);
}
