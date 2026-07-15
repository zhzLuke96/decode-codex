// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Converts browser CSS-pixel measurements into app coordinates under Electron window zoom.
export function scaleCssPxByWindowZoom(
  valuePx: number,
  windowZoom: number,
): number {
  return valuePx / windowZoom;
}
