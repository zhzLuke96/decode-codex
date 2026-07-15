// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Clamps the rendered height of an MCP app inline frame between a sensible
// minimum and maximum, preferring the app's reported intrinsic height.

const DEFAULT_FRAME_HEIGHT = 240;
const MIN_FRAME_HEIGHT = 200;
const MAX_FRAME_HEIGHT = 720;

export function clampMcpFrameHeight(
  intrinsicHeight: number | null,
  heightHint: number | null,
  minFrameHeight: number | null,
): number {
  const preferred =
    intrinsicHeight == null
      ? (heightHint ?? DEFAULT_FRAME_HEIGHT)
      : Math.max(intrinsicHeight, heightHint ?? 0);
  return Math.min(
    Math.max(preferred, minFrameHeight ?? MIN_FRAME_HEIGHT),
    MAX_FRAME_HEIGHT,
  );
}

export function resolveMcpFrameHeight(
  heightHint: number | null,
  minFrameHeight: number | null,
): number {
  return clampMcpFrameHeight(null, heightHint, minFrameHeight);
}
