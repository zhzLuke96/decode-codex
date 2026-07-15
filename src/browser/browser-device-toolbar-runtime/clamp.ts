// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Numeric clamps used by the browser device toolbar.
import {
  MAX_BROWSER_DEVICE_HEIGHT,
  MAX_BROWSER_DEVICE_WIDTH,
  MIN_BROWSER_DEVICE_HEIGHT,
  MIN_BROWSER_DEVICE_WIDTH,
} from "./constants";

function clampRoundedValue(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(value)));
}

export function clampBrowserDeviceWidth(width: number): number {
  return clampRoundedValue(
    width,
    MIN_BROWSER_DEVICE_WIDTH,
    MAX_BROWSER_DEVICE_WIDTH,
  );
}

export function clampBrowserDeviceHeight(height: number): number {
  return clampRoundedValue(
    height,
    MIN_BROWSER_DEVICE_HEIGHT,
    MAX_BROWSER_DEVICE_HEIGHT,
  );
}
