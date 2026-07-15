// Restored from ref/webview/assets/browser-sidebar-manager-DZM0wpKX.js
// browser-sidebar-manager-DZM0wpKX chunk restored from the Codex webview bundle.
import type {
  BrowserSidebarBounds,
  BrowserSidebarDevicePreset,
  BrowserSidebarDeviceToolbarLayout,
  BrowserSidebarDeviceToolbarState,
  BrowserSidebarResizeDrag,
  BrowserSidebarSize,
} from "../types";
export const RESPONSIVE_DEVICE_PRESET_ID = "responsive";
export const MAX_DEVICE_VIEWPORT_WIDTH = 4096;
export const MAX_DEVICE_VIEWPORT_HEIGHT = 4096;
export const DEVICE_TOOLBAR_FRAME_COLOR = "var(--gray-700)";
const RESPONSIVE_DEVICE_PRESET: BrowserSidebarDevicePreset = {
  id: RESPONSIVE_DEVICE_PRESET_ID,
  width: 390,
  height: 844,
};
const DEVICE_TOOLBAR_MARGIN_PX = 20;
const DEVICE_TOOLBAR_HEADER_HEIGHT_PX = 34;
export const DEVICE_TOOLBAR_PRESETS: BrowserSidebarDevicePreset[] = [
  RESPONSIVE_DEVICE_PRESET,
  {
    id: "4k",
    width: 2560,
    height: 1440,
  },
  {
    id: "laptop-l",
    width: 1440,
    height: 900,
  },
  {
    id: "laptop",
    width: 1024,
    height: 768,
  },
  {
    id: "surface-pro-7",
    width: 912,
    height: 1368,
  },
  {
    id: "ipad-air",
    width: 820,
    height: 1180,
  },
  {
    id: "ipad-mini",
    width: 768,
    height: 1024,
  },
  {
    id: "surface-duo",
    width: 540,
    height: 720,
  },
  {
    id: "iphone-15-pro-max",
    width: 430,
    height: 932,
  },
  {
    id: "pixel-8",
    width: 412,
    height: 915,
  },
  {
    id: "iphone-15-pro",
    width: 393,
    height: 852,
  },
  {
    id: "samsung-galaxy-s24-ultra",
    width: 384,
    height: 824,
  },
  {
    id: "iphone-se",
    width: 375,
    height: 667,
  },
];
export const DEFAULT_DEVICE_TOOLBAR_STATE: BrowserSidebarDeviceToolbarState = {
  isEnabled: false,
  presetId: RESPONSIVE_DEVICE_PRESET.id,
  width: RESPONSIVE_DEVICE_PRESET.width,
  height: RESPONSIVE_DEVICE_PRESET.height,
};
export function initBrowserSidebarDeviceToolbarChunk(): void {}
export function computeDeviceToolbarLayout(
  hostBounds: BrowserSidebarBounds | null,
  toolbarState: BrowserSidebarDeviceToolbarState,
): BrowserSidebarDeviceToolbarLayout | null {
  if (!toolbarState.isEnabled || hostBounds == null) return null;
  const stageBounds = getDeviceToolbarStageBounds(hostBounds);
  const fitBounds = getDeviceToolbarFitBounds(stageBounds);
  const scale = getDeviceToolbarScale(fitBounds, toolbarState);
  const visualWidth = Math.round(toolbarState.width * scale);
  const visualHeight = Math.round(toolbarState.height * scale);
  const visualBounds = {
    x: Math.round(
      stageBounds.x +
        Math.max(
          DEVICE_TOOLBAR_MARGIN_PX,
          (stageBounds.width - visualWidth) / 2,
        ),
    ),
    y: stageBounds.y,
    width: visualWidth,
    height: visualHeight,
  };
  return {
    fitHeight: fitBounds.height,
    fitWidth: fitBounds.width,
    scale,
    stageBounds,
    visualBounds,
    webviewBounds: {
      x: visualBounds.x,
      y: visualBounds.y,
      width: toolbarState.width,
      height: toolbarState.height,
    },
  };
}
export function getDefaultDeviceToolbarSize(
  hostBounds: BrowserSidebarBounds | null,
): BrowserSidebarSize {
  if (hostBounds == null) {
    return {
      width: DEFAULT_DEVICE_TOOLBAR_STATE.width,
      height: DEFAULT_DEVICE_TOOLBAR_STATE.height,
    };
  }
  const fitBounds = getDeviceToolbarFitBounds(
    getDeviceToolbarStageBounds(hostBounds),
  );
  return {
    width: clampDeviceViewportWidth(fitBounds.width),
    height: clampDeviceViewportHeight(fitBounds.height),
  };
}
export function getDeviceToolbarOuterWidth({
  fitHeight,
  height,
  width,
}: {
  fitHeight: number;
  height: number;
  width: number;
}): number {
  return addDeviceToolbarHorizontalMargin(
    width * Math.min(1, fitHeight / height),
  );
}
export function resizeDeviceToolbarViewport({
  drag,
  fitHeight,
  fitWidth,
  pointerX,
  pointerY,
  scale,
}: {
  drag: BrowserSidebarResizeDrag;
  fitHeight: number;
  fitWidth: number;
  pointerX: number;
  pointerY: number;
  scale: number;
}): BrowserSidebarSize {
  const resizesHeight =
    drag.edge === "bottom" ||
    drag.edge === "bottom-left" ||
    drag.edge === "bottom-right";
  const resizesWidth = drag.edge !== "bottom";
  const horizontalDirection =
    drag.edge === "left" || drag.edge === "bottom-left" ? -1 : 1;
  return {
    width: resizesWidth
      ? clampDeviceViewportWidth(
          clampRawDeviceToolbarSize({
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
      ? clampDeviceViewportHeight(
          clampRawDeviceToolbarSize({
            fitSize: fitHeight,
            rawSize: drag.startHeight + (pointerY - drag.startPointerY) / scale,
            scale,
          }),
        )
      : drag.startHeight,
  };
}
export function rotateDeviceToolbarViewport(
  toolbarState: BrowserSidebarDeviceToolbarState,
): BrowserSidebarDeviceToolbarState {
  const preset = findDeviceToolbarPreset(toolbarState.presetId);
  const rotatedPresetStillMatches =
    preset != null &&
    ((preset.width === toolbarState.width &&
      preset.height === toolbarState.height) ||
      (preset.width === toolbarState.height &&
        preset.height === toolbarState.width));
  return {
    ...toolbarState,
    ...swapDeviceToolbarDimensions(toolbarState),
    presetId: rotatedPresetStillMatches
      ? toolbarState.presetId
      : RESPONSIVE_DEVICE_PRESET_ID,
  };
}
export function findDeviceToolbarPreset(
  presetId: string,
): BrowserSidebarDevicePreset | null {
  return (
    DEVICE_TOOLBAR_PRESETS.find((preset) => preset.id === presetId) ?? null
  );
}
export function clampDeviceViewportWidth(width: number): number {
  return clampRoundedSize(width, 240, MAX_DEVICE_VIEWPORT_WIDTH);
}
export function clampDeviceViewportHeight(height: number): number {
  return clampRoundedSize(height, 160, MAX_DEVICE_VIEWPORT_HEIGHT);
}
function addDeviceToolbarHorizontalMargin(width: number): number {
  return width + DEVICE_TOOLBAR_MARGIN_PX * 2;
}
function getDeviceToolbarStageBounds(
  hostBounds: BrowserSidebarBounds,
): BrowserSidebarBounds {
  return {
    x: hostBounds.x,
    y: hostBounds.y + DEVICE_TOOLBAR_HEADER_HEIGHT_PX,
    width: hostBounds.width,
    height: Math.max(0, hostBounds.height - DEVICE_TOOLBAR_HEADER_HEIGHT_PX),
  };
}
function getDeviceToolbarFitBounds(
  stageBounds: BrowserSidebarBounds,
): BrowserSidebarSize {
  return {
    width: Math.max(0, stageBounds.width - DEVICE_TOOLBAR_MARGIN_PX * 2),
    height: Math.max(0, stageBounds.height - DEVICE_TOOLBAR_MARGIN_PX),
  };
}
function getDeviceToolbarScale(
  fitBounds: BrowserSidebarSize,
  toolbarState: BrowserSidebarDeviceToolbarState,
): number {
  return Math.min(
    1,
    fitBounds.width / toolbarState.width,
    fitBounds.height / toolbarState.height,
  );
}
function swapDeviceToolbarDimensions({
  height,
  width,
}: BrowserSidebarSize): BrowserSidebarSize {
  return {
    width: clampDeviceViewportWidth(height),
    height: clampDeviceViewportHeight(width),
  };
}
function clampRawDeviceToolbarSize({
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
function clampRoundedSize(
  value: number,
  minSize: number,
  maxSize: number,
): number {
  return Math.min(maxSize, Math.max(minSize, Math.round(value)));
}
