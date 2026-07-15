// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser profile import dialog open state.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";

export const browserProfileImportDialogOpenAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);

export function initBrowserProfileImportDialogState(): void {}
