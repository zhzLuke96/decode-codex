// Restored from ref/webview/assets/settings-back-route-BfYwS6rz.js
// settings-back-route-BfYwS6rz chunk restored from the Codex webview bundle.
import React from "react";
import { _appScopeO, appScopeRoot } from "../../boundaries/app-scope";
import { vscodeApiP } from "../../boundaries/vscode-api";
import {
  appShellStateExportC as setAppShellState,
  appShellStateExportUAlias as sidebarCollapsedSignal,
} from "../../app-shell/app-shell-state";
import { useRegisterCommand } from "../../utils/use-register-command";
type AppScopeStore = {
  get: (signal: unknown) => boolean;
};
export function useRegisterToggleSidebarCommand(): void {
  const appScopeStore = _appScopeO(appScopeRoot) as AppScopeStore;
  const toggleSidebar = React.useCallback(() => {
    setAppShellState(appScopeStore, !appScopeStore.get(sidebarCollapsedSignal));
  }, [appScopeStore]);
  useRegisterCommand("toggleSidebar", toggleSidebar);
  vscodeApiP("toggle-sidebar", toggleSidebar, [appScopeStore]);
}

export function initToggleSidebarCommandChunk(): void {}
