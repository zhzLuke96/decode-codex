// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Watches the browser Keyboard Map API, stores the current physical->logical key
// layout, and forwards it to the host via a `keyboard-layout-map-changed` message
// whenever it changes (so native menus/shortcuts stay in sync with the layout).
import { useEffect } from "react";
import { vscodeApiF as hostMessageBridge } from "../boundaries/vscode-api";
import { setKeyboardLayoutMap } from "../boundaries/onboarding-commons-externals.facade";

interface KeyboardLayoutApi {
  getLayoutMap?: () => Promise<Map<string, string>>;
  addEventListener?: (type: string, listener: (event: Event) => void) => void;
  removeEventListener?: (
    type: string,
    listener: (event: Event) => void,
  ) => void;
  onlayoutchange?: ((event: Event) => void) | null;
}

export function KeyboardLayoutMapListener(): null {
  useEffect(subscribeToKeyboardLayoutChanges, []);
  return null;
}

function subscribeToKeyboardLayoutChanges(): (() => void) | undefined {
  const keyboard = getKeyboard();
  if (typeof keyboard?.getLayoutMap !== "function") return;

  let cancelled = false;
  let lastSerialized: string | null = null;

  const publishLayoutMap = async () => {
    const layoutMap = await keyboard.getLayoutMap?.();
    if (cancelled || layoutMap == null) return;
    const layout = layoutMapToObject(layoutMap);
    const serialized = JSON.stringify(layout);
    if (serialized === lastSerialized) return;
    lastSerialized = serialized;
    setKeyboardLayoutMap(layout);
    hostMessageBridge.dispatchMessage("keyboard-layout-map-changed", {
      keyboardLayoutMap: layout,
    });
  };

  const refreshLayoutMap = () => {
    publishLayoutMap().catch(ignoreLayoutMapError);
  };

  refreshLayoutMap();
  const unsubscribe = subscribeLayoutChange(keyboard, refreshLayoutMap);
  return () => {
    cancelled = true;
    unsubscribe?.();
  };
}

function ignoreLayoutMapError() {}

function getKeyboard(): KeyboardLayoutApi | null {
  return "keyboard" in navigator
    ? ((navigator as Navigator & { keyboard?: KeyboardLayoutApi }).keyboard ??
        null)
    : null;
}

function subscribeLayoutChange(
  keyboard: KeyboardLayoutApi,
  onChange: () => void,
): (() => void) | null {
  if (
    typeof keyboard.addEventListener === "function" &&
    typeof keyboard.removeEventListener === "function"
  ) {
    keyboard.addEventListener("layoutchange", onChange);
    return () => {
      keyboard.removeEventListener?.("layoutchange", onChange);
    };
  }
  if (!("onlayoutchange" in keyboard)) return null;
  const previous = keyboard.onlayoutchange ?? null;
  const listener = (event: Event) => {
    previous?.(event);
    onChange();
  };
  keyboard.onlayoutchange = listener;
  return () => {
    if (keyboard.onlayoutchange === listener) {
      keyboard.onlayoutchange = previous;
    }
  };
}

function layoutMapToObject(
  layoutMap: Map<string, string>,
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of layoutMap) result[key] = value;
  return result;
}
