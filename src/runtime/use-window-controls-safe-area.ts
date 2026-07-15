// Restored from ref/webview/assets/use-window-controls-safe-area-KZMmRJgn.js
// Computes horizontal safe areas reserved for native window controls.
import React from "react";
import { vscodeApiP } from "../boundaries/vscode-api";
type RuntimeKind = "electron" | string;
type HostPlatform = "win32" | "linux" | "darwin" | "unknown" | string;
type WindowChromeMode = "native" | "application-menu";
type HorizontalSafeArea = Readonly<{
  left: number;
  right: number;
}>;
type WindowFullscreenChangedEvent = {
  isFullScreen: boolean;
};
type WindowControlsOverlayLike = EventTarget & {
  getTitlebarAreaRect(): DOMRect;
  visible: boolean;
};
type NavigatorWithWindowControls = Navigator & {
  userAgentData?: {
    platform?: string;
  };
  windowControlsOverlay?: WindowControlsOverlayLike;
};
const WINDOW_CONTROLS_OFFSET = 16;
const WINDOW_CONTROLS_SAFE_AREAS = Object.freeze({
  default: Object.freeze({
    left: 0,
    right: 0,
  }),
  mac: Object.freeze({
    legacy: Object.freeze({
      left: 66 + WINDOW_CONTROLS_OFFSET,
      right: 0,
    }),
    modern: Object.freeze({
      left: 76 + WINDOW_CONTROLS_OFFSET,
      right: 0,
    }),
  }),
  applicationMenu: Object.freeze({
    left: 0,
    right: 0,
  }),
});
const MAC_OS_VERSION_RE = /mac os x (\d+)[_.](\d+)/i;
function getWindowChromeMode(
  runtimeKind: RuntimeKind,
  platform: HostPlatform,
): WindowChromeMode {
  if (runtimeKind !== "electron") return "native";
  switch (platform) {
    case "win32":
    case "linux":
      return "application-menu";
    case "darwin":
    case "unknown":
    default:
      return "native";
  }
}
function isApplicationMenuWindowChrome() {
  return (
    typeof document !== "undefined" &&
    document.documentElement.dataset.codexWindowChrome === "application-menu"
  );
}
function getMacWindowControlsSafeArea(userAgent: string): HorizontalSafeArea {
  const match = MAC_OS_VERSION_RE.exec(userAgent);
  if (!match) return WINDOW_CONTROLS_SAFE_AREAS.mac.modern;
  const major = Number.parseInt(match[1] ?? "", 10);
  const minor = Number.parseInt(match[2] ?? "", 10);
  if (Number.isNaN(major) || Number.isNaN(minor)) {
    return WINDOW_CONTROLS_SAFE_AREAS.mac.modern;
  }
  return major === 10 && minor <= 15
    ? WINDOW_CONTROLS_SAFE_AREAS.mac.legacy
    : WINDOW_CONTROLS_SAFE_AREAS.mac.modern;
}
function getWindowControlsOverlaySafeArea(): HorizontalSafeArea | null {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return null;
  }
  const overlay = (navigator as NavigatorWithWindowControls)
    .windowControlsOverlay;
  if (!overlay?.visible) return null;
  const titlebarRect = overlay.getTitlebarAreaRect();
  return {
    left: Math.max(0, Math.round(titlebarRect.x)),
    right: Math.max(
      0,
      Math.round(window.innerWidth - (titlebarRect.x + titlebarRect.width)),
    ),
  };
}
function resolveWindowControlsSafeArea(
  isFullScreen: boolean,
  overlaySafeArea: HorizontalSafeArea | null,
) {
  if (isFullScreen) return WINDOW_CONTROLS_SAFE_AREAS.default;
  if (isApplicationMenuWindowChrome()) {
    return overlaySafeArea ?? WINDOW_CONTROLS_SAFE_AREAS.applicationMenu;
  }
  if (typeof navigator === "undefined") {
    return WINDOW_CONTROLS_SAFE_AREAS.default;
  }
  const currentNavigator = navigator as NavigatorWithWindowControls;
  const userAgent = (currentNavigator.userAgent ?? "").toLowerCase();
  const platform =
    currentNavigator.userAgentData?.platform?.toLowerCase() ??
    currentNavigator.platform?.toLowerCase() ??
    userAgent;
  if (
    platform.includes("darwin") ||
    platform.includes("mac") ||
    userAgent.includes("mac os x") ||
    userAgent.includes("macintosh")
  ) {
    return getMacWindowControlsSafeArea(userAgent);
  }
  return platform.includes("win") ||
    userAgent.includes("windows") ||
    platform.includes("linux")
    ? (overlaySafeArea ?? WINDOW_CONTROLS_SAFE_AREAS.applicationMenu)
    : WINDOW_CONTROLS_SAFE_AREAS.default;
}
function useWindowControlsSafeArea() {
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [overlaySafeArea, setOverlaySafeArea] = React.useState(
    getWindowControlsOverlaySafeArea,
  );
  vscodeApiP(
    "window-fullscreen-changed",
    (event: WindowFullscreenChangedEvent) => {
      setIsFullScreen(event.isFullScreen);
    },
    [],
  );
  React.useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      setOverlaySafeArea(null);
      return;
    }
    const overlay = (navigator as NavigatorWithWindowControls)
      .windowControlsOverlay;
    if (!overlay) {
      setOverlaySafeArea(null);
      return;
    }
    const updateOverlaySafeArea = () => {
      setOverlaySafeArea(getWindowControlsOverlaySafeArea());
    };
    updateOverlaySafeArea();
    overlay.addEventListener("geometrychange", updateOverlaySafeArea);
    window.addEventListener("resize", updateOverlaySafeArea);
    return () => {
      overlay.removeEventListener("geometrychange", updateOverlaySafeArea);
      window.removeEventListener("resize", updateOverlaySafeArea);
    };
  }, []);
  React.useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return;
    }
    const fullscreenMediaQuery = window.matchMedia(
      "(display-mode: fullscreen)",
    );
    setIsFullScreen(fullscreenMediaQuery.matches);
    const updateFullScreenState = (event: MediaQueryListEvent) => {
      setIsFullScreen(event.matches);
    };
    fullscreenMediaQuery.addEventListener("change", updateFullScreenState);
    return () => {
      fullscreenMediaQuery.removeEventListener("change", updateFullScreenState);
    };
  }, []);
  return resolveWindowControlsSafeArea(isFullScreen, overlaySafeArea);
}

function initWindowControlsSafeAreaRuntime(): void {
  void getWindowChromeMode;
  void isApplicationMenuWindowChrome;
  void useWindowControlsSafeArea;
}

export {
  getWindowChromeMode,
  initWindowControlsSafeAreaRuntime,
  isApplicationMenuWindowChrome,
  useWindowControlsSafeArea,
};
