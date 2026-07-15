// Restored from ref/webview/assets/metric-helpers-DG5zp00d.js
// Browser connection state helpers for Segment retry queues.
export function isOnline(): boolean {
  if (typeof window === "undefined") return true;
  return window.navigator.onLine;
}

export function isOffline(): boolean {
  return !isOnline();
}
