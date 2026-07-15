// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Toast signal and controller initialization helpers.
import { toastApiSignal } from "../ui/toast-signal";
import { initAppScopeSignalRuntime } from "./app-scope-runtime";

export const toastSignal = toastApiSignal;

export function initToastRuntime(): void {
  initAppScopeSignalRuntime();
}
