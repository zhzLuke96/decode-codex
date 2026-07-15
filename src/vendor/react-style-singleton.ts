// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// npm-backed shim for the bundled react-style-singleton style tag runtime.
import {
  styleHookSingleton,
  styleSingleton,
  stylesheetSingleton,
} from "react-style-singleton";

export {
  styleHookSingleton,
  styleSingleton,
  stylesheetSingleton,
} from "react-style-singleton";

export function initStyleSingletonRuntime(): void {
  void styleHookSingleton;
  void styleSingleton;
  void stylesheetSingleton;
}
