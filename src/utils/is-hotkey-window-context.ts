// Restored from ref/webview/assets/is-hotkey-window-context-BeMnvcLR.js
// is-hotkey-window-context-BeMnvcLR chunk restored from the Codex webview bundle.
const HOTKEY_WINDOW_PATH = "/hotkey-window";

export function initHotkeyWindowContextChunk(): void {}

export function isHotkeyWindowContext() {
  const { pathname, initialRoute } = getCurrentRouteLocation();
  return isHotkeyWindowRoute(pathname) || isHotkeyWindowRoute(initialRoute);
}
function getCurrentRouteLocation() {
  if (typeof window === "undefined") {
    return {
      pathname: "",
      initialRoute: null,
    };
  }
  const url = new URL(window.location.href);
  return {
    pathname: url.pathname,
    initialRoute: url.searchParams.get("initialRoute"),
  };
}
function isHotkeyWindowRoute(route: string | null) {
  const pathname = route?.split("?")[0] ?? "";
  return (
    pathname === HOTKEY_WINDOW_PATH ||
    pathname.startsWith(`${HOTKEY_WINDOW_PATH}/`)
  );
}
