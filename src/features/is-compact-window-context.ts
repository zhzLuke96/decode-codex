// Restored from ref/webview/assets/is-compact-window-context-CVCwwVNh.js
// Route helpers for surfaces that should render in compact-window mode.
import { matchPath } from "../vendor/react-router";
const COMPACT_WINDOW_ROUTE_PATTERNS = [
  "/global-dictation",
  "/global-dictation/*",
  "/hotkey-window",
  "/hotkey-window/*",
];
type WindowRouteState = {
  pathname: string;
  initialRoute: string | null;
};
let initialRouteSnapshot: string | null = null;

export function initInitialRouteRuntime(): void {
  initialRouteSnapshot = readInitialRoute();
}

export function getInitialRouteSnapshot(): string | null {
  return initialRouteSnapshot;
}

function readInitialRoute(): string | null {
  if (typeof window === "undefined") return null;
  const initialRouteMeta = document.querySelector<HTMLMetaElement>(
    'meta[name="initial-route"]',
  );
  const initialRouteFromMeta = initialRouteMeta?.content.trim();
  if (initialRouteFromMeta) return initialRouteFromMeta;
  return new URL(window.location.href).searchParams.get("initialRoute");
}

export function isCompactWindowRoute(pathname: string | null): boolean {
  return pathname
    ? pathname === "/avatar-overlay" || matchesCompactRoutePattern(pathname)
    : false;
}
function matchesCompactRoutePattern(pathname: string | null): boolean {
  return pathname
    ? COMPACT_WINDOW_ROUTE_PATTERNS.some(
        (pattern) =>
          matchPath(
            {
              path: pattern,
              end: true,
            },
            pathname,
          ) != null,
      )
    : false;
}
function isCompactWindowState({
  pathname,
  initialRoute,
}: WindowRouteState): boolean {
  return (
    isAvatarOverlayRoute({
      pathname,
      initialRoute,
    }) ||
    matchesCompactRoutePattern(pathname) ||
    matchesCompactRoutePattern(initialRoute)
  );
}
export function isCurrentCompactWindow(): boolean {
  return isCompactWindowState(readWindowRouteState());
}
function isAvatarOverlayRoute({
  pathname,
  initialRoute,
}: WindowRouteState): boolean {
  return (
    pathname === "/avatar-overlay" ||
    initialRoute?.split("?")[0] === "/avatar-overlay"
  );
}
export function isCurrentAvatarOverlayWindow(): boolean {
  return isAvatarOverlayRoute(readWindowRouteState());
}
function readWindowRouteState(): WindowRouteState {
  if (typeof window === "undefined") {
    return {
      pathname: "",
      initialRoute: null,
    };
  }
  const currentUrl = new URL(window.location.href);
  return {
    pathname: currentUrl.pathname,
    initialRoute: currentUrl.searchParams.get("initialRoute"),
  };
}
