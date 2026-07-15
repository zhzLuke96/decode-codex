// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for browser device toolbar viewport state.

export interface BrowserDevicePreset {
  id: string;
  width: number;
  height: number;
}

export interface BrowserDeviceToolbarState {
  isEnabled: boolean;
  presetId: string;
  width: number;
  height: number;
}

export interface PanelBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type BrowserDeviceResizeEdge =
  | "left"
  | "right"
  | "bottom"
  | "bottom-left"
  | "bottom-right";

export interface BrowserDeviceResizeDragState {
  edge: BrowserDeviceResizeEdge;
  startHeight: number;
  startPointerX: number;
  startPointerY: number;
  startWidth: number;
}

export interface BrowserDeviceResizeInput {
  drag: BrowserDeviceResizeDragState;
  fitHeight: number;
  fitWidth: number;
  pointerX: number;
  pointerY: number;
  scale: number;
}

export interface BrowserDeviceSize {
  width: number;
  height: number;
}
