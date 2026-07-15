// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Signals shared by the sidebar navigation controls and app-shell layout.
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";

export interface AppShellElementRect {
  height: number;
  width: number;
  x: number;
  y: number;
}

export const canNavigateSidebarBackSignal = createAppScopeSignal(
  appScopeRoot,
  false,
);
export const canNavigateSidebarForwardSignal = createAppScopeSignal(
  appScopeRoot,
  false,
);
export const appShellContentRectSignal =
  createAppScopeSignal<AppShellElementRect | null>(appScopeRoot, null);

export function initSidebarNavigationSignalsChunk(): void {
  void canNavigateSidebarBackSignal;
  void canNavigateSidebarForwardSignal;
  void appShellContentRectSignal;
}
