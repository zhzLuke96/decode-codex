// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Extension home header: lazily loads the chrome-extension Header chrome so the
// home surface only pays for it inside the extension shell.
import { lazy } from "react";

export const HomeHeader = lazy(async () => {
  const { Header } = await import("../browser/chrome-extension-header");
  return { default: Header };
});
