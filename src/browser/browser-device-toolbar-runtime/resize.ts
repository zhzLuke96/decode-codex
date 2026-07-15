// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resize math for dragging browser device toolbar handles.
import { clampBrowserDeviceHeight, clampBrowserDeviceWidth } from "./clamp";
import type { BrowserDeviceResizeInput, BrowserDeviceSize } from "./types";

function fitRawSize({
  fitSize,
  rawSize,
  scale,
}: {
  fitSize: number;
  rawSize: number;
  scale: number;
}): number {
  return fitSize <= 0 ? rawSize : Math.min(rawSize, fitSize / scale);
}

export function computeBrowserDeviceResize({
  drag,
  fitHeight,
  fitWidth,
  pointerX,
  pointerY,
  scale,
}: BrowserDeviceResizeInput): BrowserDeviceSize {
  const resizesHeight =
    drag.edge === "bottom" ||
    drag.edge === "bottom-left" ||
    drag.edge === "bottom-right";
  const resizesWidth = drag.edge !== "bottom";
  const horizontalDirection =
    drag.edge === "left" || drag.edge === "bottom-left" ? -1 : 1;
  return {
    width: resizesWidth
      ? clampBrowserDeviceWidth(
          fitRawSize({
            fitSize: fitWidth,
            rawSize:
              drag.startWidth +
              ((pointerX - drag.startPointerX) * horizontalDirection * 2) /
                scale,
            scale,
          }),
        )
      : drag.startWidth,
    height: resizesHeight
      ? clampBrowserDeviceHeight(
          fitRawSize({
            fitSize: fitHeight,
            rawSize: drag.startHeight + (pointerY - drag.startPointerY) / scale,
            scale,
          }),
        )
      : drag.startHeight,
  };
}
