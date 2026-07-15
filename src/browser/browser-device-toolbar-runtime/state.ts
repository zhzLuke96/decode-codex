// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser device toolbar state transforms.
import {
  DEVICE_TOOLBAR_CHROME_HEIGHT,
  DEVICE_TOOLBAR_HORIZONTAL_PADDING,
  RESPONSIVE_PRESET_ID,
} from "./constants";
import { clampBrowserDeviceHeight, clampBrowserDeviceWidth } from "./clamp";
import {
  defaultBrowserDeviceToolbarState,
  parseBrowserDevicePreset,
} from "./presets";
import type {
  BrowserDeviceSize,
  BrowserDeviceToolbarState,
  PanelBounds,
} from "./types";

function getToolbarStageBounds(panelBounds: PanelBounds): PanelBounds {
  return {
    x: panelBounds.x,
    y: panelBounds.y + DEVICE_TOOLBAR_CHROME_HEIGHT,
    width: panelBounds.width,
    height: Math.max(0, panelBounds.height - DEVICE_TOOLBAR_CHROME_HEIGHT),
  };
}

function getFitSize(stageBounds: PanelBounds): BrowserDeviceSize {
  return {
    width: Math.max(
      0,
      stageBounds.width - DEVICE_TOOLBAR_HORIZONTAL_PADDING * 2,
    ),
    height: Math.max(0, stageBounds.height - DEVICE_TOOLBAR_HORIZONTAL_PADDING),
  };
}

export function rotateDeviceToolbarState(
  state: BrowserDeviceToolbarState,
): BrowserDeviceToolbarState {
  const rotated = {
    width: clampBrowserDeviceWidth(state.height),
    height: clampBrowserDeviceHeight(state.width),
  };
  const preset = parseBrowserDevicePreset(state.presetId);
  const keepsPreset =
    preset != null &&
    ((preset.width === state.width && preset.height === state.height) ||
      (preset.width === state.height && preset.height === state.width));
  return {
    ...state,
    ...rotated,
    presetId: keepsPreset ? state.presetId : RESPONSIVE_PRESET_ID,
  };
}

export function getResponsiveViewportSize(
  panelBounds: PanelBounds | null | undefined,
): BrowserDeviceSize {
  if (panelBounds == null) {
    return {
      width: defaultBrowserDeviceToolbarState.width,
      height: defaultBrowserDeviceToolbarState.height,
    };
  }
  const fitSize = getFitSize(getToolbarStageBounds(panelBounds));
  return {
    width: clampBrowserDeviceWidth(fitSize.width),
    height: clampBrowserDeviceHeight(fitSize.height),
  };
}
