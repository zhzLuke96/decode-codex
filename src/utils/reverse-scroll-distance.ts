// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Also matches ref/webview/assets/thread-scroll-layout-BNp7nttn.js.
// Shared distance helpers for column-reverse thread scroll containers.
export function initReverseScrollUtilities(): void {}

export function getScrollDistanceFromBottomPx(element: HTMLElement): number {
  return Math.max(0, -element.scrollTop);
}

export function setScrollDistanceFromBottomPx(
  element: HTMLElement,
  distanceFromBottomPx: number,
): void {
  const normalizedDistanceFromBottomPx = Math.max(0, distanceFromBottomPx);
  element.scrollTop =
    normalizedDistanceFromBottomPx === 0 ? 0 : -normalizedDistanceFromBottomPx;
}
