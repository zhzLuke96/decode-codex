// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless effect that tells the host whenever the webview window regains focus.
import { useEffect } from "react";
import { hostMessageBridge } from "../runtime/app-main-host-runtime";

export function dispatchViewFocused(): void {
  hostMessageBridge.dispatchMessage("view-focused", {});
}

function subscribeViewFocused(): () => void {
  window.addEventListener("focus", dispatchViewFocused);
  if (document.hasFocus()) dispatchViewFocused();
  return () => {
    window.removeEventListener("focus", dispatchViewFocused);
  };
}

export function ViewFocusedEffect(): null {
  useEffect(subscribeViewFocused, []);
  return null;
}
