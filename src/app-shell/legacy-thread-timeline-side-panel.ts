// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Legacy BUw builds exposed a timeline side-panel opener, but the implementation
// intentionally stayed inert and reported that no panel was opened.
export type LegacyThreadTimelineSidePanelOptions = {
  activate?: boolean;
  initialView?: unknown;
  target?: unknown;
};

export type LegacyThreadTimelineRouteScope = {
  value: {
    routeKind: unknown;
  };
};

export function openLegacyThreadTimelineSidePanel(
  scope: LegacyThreadTimelineRouteScope,
  conversationId: unknown,
  {
    activate = true,
    initialView,
    target = "right",
  }: LegacyThreadTimelineSidePanelOptions = {},
): false {
  void activate;
  void initialView;
  void target;

  if (conversationId != null) {
    void scope.value.routeKind;
  }

  return false;
}

export { openLegacyThreadTimelineSidePanel as openThreadTimelineSidePanel };
