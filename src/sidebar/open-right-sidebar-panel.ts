// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Opens the right-hand sidebar to the given panel for the provided app scope.
import { setSidebarPanelForSide } from "../boundaries/onboarding-commons-externals.facade";

interface AppScope {
  get(signal: unknown, key?: string): unknown;
}

export function openRightSidebarPanel(scope: AppScope, panel: unknown) {
  return setSidebarPanelForSide(scope, "right", panel);
}
