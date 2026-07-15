// Restored from ref/webview/assets/browser-sidebar-manager-DZM0wpKX.js
// browser-sidebar-manager-DZM0wpKX chunk restored from the Codex webview bundle.
export type BrowserSidebarHostKind =
  | "bottom-panel"
  | "hidden-browser-use"
  | "right-panel";
export type BrowserSidebarBounds = {
  height: number;
  width: number;
  x: number;
  y: number;
};
export type BrowserSidebarSize = {
  height: number;
  width: number;
};
export type BrowserSidebarSnapshot = {
  faviconUrl?: string | null;
  tabType?: string | null;
  title?: string | null;
  url?: string | null;
  [key: string]: unknown;
};
export type BrowserUseCursorState = {
  animateMovement?: boolean;
  moveSequence?: number;
  visible: boolean;
  x: number;
  y: number;
};
export type BrowserSidebarWebviewRef = {
  current: BrowserSidebarWebviewElement | null;
};
export type BrowserSidebarWebviewElement = HTMLElement & {
  destroy?: () => void;
  isLoading?: () => boolean;
};
export type BrowserSidebarWebviewState = {
  bounds: BrowserSidebarBounds | null;
  isVisible: boolean;
  mountGeneration?: number;
  scale: number;
  shouldBootstrap?: boolean;
  shouldPaint?: boolean;
  windowZoom?: number;
};
export type BrowserSidebarMountState = {
  claimKeys: Set<string>;
  generation: number;
};
export type BrowserSidebarPendingElectronTransfer = {
  sourceBrowserTabId: string;
  sourceConversationId: string;
};
export type BrowserSidebarDevicePreset = {
  height: number;
  id: string;
  width: number;
};
export type BrowserSidebarDeviceToolbarState = {
  height: number;
  isEnabled: boolean;
  presetId: string;
  width: number;
};
export type BrowserSidebarDeviceToolbarTabState = {
  responsiveViewportSize: BrowserSidebarSize | null;
  toolbarState: BrowserSidebarDeviceToolbarState;
};
export type BrowserSidebarDeviceToolbarLayout = {
  fitHeight: number;
  fitWidth: number;
  scale: number;
  stageBounds: BrowserSidebarBounds;
  visualBounds: BrowserSidebarBounds;
  webviewBounds: BrowserSidebarBounds;
};
export type BrowserSidebarResizeEdge =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right";
export type BrowserSidebarResizeDrag = {
  edge: BrowserSidebarResizeEdge;
  startHeight: number;
  startPointerX: number;
  startPointerY: number;
  startWidth: number;
};
export type BrowserSidebarWebviewHost = {
  blockInteraction?: () => void;
  detach: (
    webviewRef: BrowserSidebarWebviewRef,
    mountGeneration?: number,
  ) => void;
  dispose: () => void;
  getBrowserTabId: () => string;
  getConversationId: () => string;
  getCursorOverlayHost: () => HTMLElement | null;
  getMountGeneration: () => number;
  isConnected: () => boolean;
  isPainted: () => boolean;
  listenForDidAttach: (listener: () => void) => () => void;
  releaseBrowserUse: () => void;
  releaseRef?: (
    webviewRef: BrowserSidebarWebviewRef,
    mountGeneration?: number,
  ) => void;
  resync: () => void;
  restoreInteraction?: () => void;
  reveal: (webviewRef: BrowserSidebarWebviewRef) => void;
  setAdoptionAttributes?: (
    adoptionLease: string | null,
    adoptedWebContentsId: number | null,
    initialUrl: string,
  ) => void;
  setBrowserUseActive?: (isActive: boolean) => void;
  setBrowserUseCaptureSurfaceSize: (size: BrowserSidebarSize | null) => void;
  setBrowserUseViewportSize?: (size: BrowserSidebarSize | null) => void;
  setHostKind: (hostKind: BrowserSidebarHostKind) => void;
  setTabCaptureActive: (isActive: boolean) => void;
  shouldDestroyForHostRequest: (request: {
    mountGeneration?: number;
    reason: string;
  }) => boolean;
  stage: (
    state: BrowserSidebarWebviewState,
    webviewRef: BrowserSidebarWebviewRef,
  ) => void;
  sync: (
    state: BrowserSidebarWebviewState,
    webviewRef: BrowserSidebarWebviewRef,
  ) => void;
  transfer: (options: {
    browserTabId: string;
    conversationId: string;
    elementKey: string;
    partition: string;
  }) => void;
};
export type BrowserSidebarWebviewCreateOptions = {
  adoptionLease?: string | null;
  adoptedWebContentsId?: number | null;
  browserTabId: string;
  conversationId: string;
  elementKey: string;
  hostKind: BrowserSidebarHostKind;
  initialUrl: string;
  partition: string;
};
export type BrowserSidebarRetainedWebviewCreateOptions = {
  browserTabId: string;
  browserUseCaptureSurfaceSize: BrowserSidebarSize | null;
  browserUseViewportSize: BrowserSidebarSize | null;
  conversationId: string;
  elementKey: string;
  hostKind: BrowserSidebarHostKind;
  initialUrl: string;
  isBrowserUseActive: boolean;
  partition: string;
};
