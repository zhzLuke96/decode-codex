// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Electron window focus signal used by local conversation read-state effects.
import {
  _appScopeO as getAppScopeStore,
  appScopeRoot,
  createAppScopeSignal,
} from "../boundaries/app-scope";
import { vscodeApiF } from "../boundaries/vscode-api";
import { once } from "./commonjs-interop";

type FocusMessage = {
  focused?: boolean;
  isFocused?: boolean;
  type?: string;
};

export const windowVisibleSignal = createAppScopeSignal<boolean | null>(
  appScopeRoot,
  null,
);

function readBrowserFocusState(): boolean {
  if (
    typeof document !== "undefined" &&
    document.visibilityState === "hidden"
  ) {
    return false;
  }
  return typeof document === "undefined" ||
    typeof document.hasFocus !== "function"
    ? true
    : document.hasFocus();
}

function getFocusStateFromMessage(message: unknown): boolean | null {
  if (typeof message !== "object" || message == null) return null;
  const focusMessage = message as FocusMessage;
  if (focusMessage.type !== "electron-window-focus-changed") return null;
  if (typeof focusMessage.isFocused === "boolean") {
    return focusMessage.isFocused;
  }
  return typeof focusMessage.focused === "boolean"
    ? focusMessage.focused
    : null;
}

function setWindowFocusState(isFocused: boolean): void {
  getAppScopeStore().set(windowVisibleSignal, isFocused);
}

export const initWindowVisibilitySignal = once(() => {
  if (typeof window === "undefined") return;

  const updateFromBrowser = () => {
    setWindowFocusState(readBrowserFocusState());
  };
  const updateFromHostMessage = (event: MessageEvent) => {
    const isFocused = getFocusStateFromMessage(event.data);
    if (isFocused != null) setWindowFocusState(isFocused);
  };

  updateFromBrowser();
  window.addEventListener("focus", updateFromBrowser);
  window.addEventListener("blur", updateFromBrowser);
  window.addEventListener("message", updateFromHostMessage);
  document.addEventListener("visibilitychange", updateFromBrowser);
  vscodeApiF.dispatchMessage("electron-window-focus-request", {});
});
