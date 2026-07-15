// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Current browser-route side-panel hooks are disabled stubs.

type RouteLikeStore = {
  value: {
    routeKind?: unknown;
  };
};

export interface BrowserRouteSidePanelOptions {
  activate?: boolean;
  initialView?: unknown;
  target?: string;
}

export function openBrowserRouteSidePanelTabUnavailable(
  store: RouteLikeStore,
  route: unknown,
  _options: BrowserRouteSidePanelOptions = {},
): false {
  if (route != null) {
    void store.value.routeKind;
  }
  return false;
}

export function openExistingBrowserRouteSidePanelTabUnavailable(
  store: RouteLikeStore,
  route: unknown,
  _activate: boolean = true,
): false {
  if (route != null) {
    void store.value.routeKind;
  }
  return false;
}
