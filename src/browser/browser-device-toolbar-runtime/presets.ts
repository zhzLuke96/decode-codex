// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser device toolbar viewport presets.
import { RESPONSIVE_PRESET_ID } from "./constants";
import type { BrowserDevicePreset, BrowserDeviceToolbarState } from "./types";

const RESPONSIVE_PRESET: BrowserDevicePreset = {
  id: RESPONSIVE_PRESET_ID,
  width: 390,
  height: 844,
};

const BROWSER_DEVICE_PRESETS: readonly BrowserDevicePreset[] = [
  RESPONSIVE_PRESET,
  { id: "4k", width: 2560, height: 1440 },
  { id: "laptop-l", width: 1440, height: 900 },
  { id: "laptop", width: 1024, height: 768 },
  { id: "surface-pro-7", width: 912, height: 1368 },
  { id: "ipad-air", width: 820, height: 1180 },
  { id: "ipad-mini", width: 768, height: 1024 },
  { id: "surface-duo", width: 540, height: 720 },
  { id: "iphone-15-pro-max", width: 430, height: 932 },
  { id: "pixel-8", width: 412, height: 915 },
  { id: "iphone-15-pro", width: 393, height: 852 },
  { id: "samsung-galaxy-s24-ultra", width: 384, height: 824 },
  { id: "iphone-se", width: 375, height: 667 },
];

const DEFAULT_BROWSER_DEVICE_TOOLBAR_STATE: BrowserDeviceToolbarState = {
  isEnabled: false,
  presetId: RESPONSIVE_PRESET.id,
  width: RESPONSIVE_PRESET.width,
  height: RESPONSIVE_PRESET.height,
};

export const browserDevicePresets = BROWSER_DEVICE_PRESETS;

export const defaultBrowserDeviceToolbarState =
  DEFAULT_BROWSER_DEVICE_TOOLBAR_STATE;

export function parseBrowserDevicePreset(
  presetId: string,
): BrowserDevicePreset | null {
  return browserDevicePresets.find((preset) => preset.id === presetId) ?? null;
}
