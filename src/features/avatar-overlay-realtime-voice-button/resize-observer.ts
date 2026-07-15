// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
import { getResizeObserverEntrySize } from "../../utils/get-resize-observer-entry-size";
export type ObserveElementSizeAxis = "width" | "height" | "both";
export type ObserveElementSizeChange = {
  width: number;
  height: number;
  previousWidth: number | null;
  previousHeight: number | null;
};
export type ObserveElementSizeOptions = {
  axis: ObserveElementSizeAxis;
  debounce?: boolean;
  initialSize?: boolean;
  onChange(size: ObserveElementSizeChange, entry: ResizeObserverEntry): void;
  target?: Element | null;
};
export function observeElementSize({
  axis,
  debounce,
  initialSize = true,
  onChange,
  target,
}: ObserveElementSizeOptions) {
  if (!target || typeof ResizeObserver > "u") return;
  let abortController = new AbortController();
  let lastWidth: number | null = null;
  let lastHeight: number | null = null;
  let shouldReportInitialSize = initialSize;
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { width, height } = getResizeObserverEntrySize(entry);
      let changed = false;
      if (axis === "width") {
        const widthChanged =
          (shouldReportInitialSize || lastWidth != null) && lastWidth !== width;
        lastWidth = width;
        if (widthChanged) changed = true;
      } else if (axis === "height") {
        const heightChanged =
          (shouldReportInitialSize || lastHeight != null) &&
          lastHeight !== height;
        lastHeight = height;
        if (heightChanged) changed = true;
      } else if (axis === "both") {
        const widthChanged =
          (shouldReportInitialSize || lastWidth != null) && lastWidth !== width;
        const heightChanged =
          (shouldReportInitialSize || lastHeight != null) &&
          lastHeight !== height;
        lastWidth = width;
        lastHeight = height;
        if (widthChanged || heightChanged) changed = true;
      }
      shouldReportInitialSize = false;
      if (!changed) return;
      const size = {
        width,
        height,
        previousWidth: lastWidth,
        previousHeight: lastHeight,
      };
      if (!debounce) {
        onChange(size, entry);
        return;
      }
      abortController.abort();
      abortController = new AbortController();
      const { signal } = abortController;
      requestAnimationFrame(() => {
        if (!signal.aborted) onChange(size, entry);
      });
    });
  });
  function disconnect() {
    try {
      observer.disconnect();
    } catch {}
  }
  observer.observe(target);
  return disconnect;
}
