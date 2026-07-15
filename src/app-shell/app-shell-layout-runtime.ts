// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightweight app-shell layout signals and sizing helpers.
import * as React from "react";
import { useMotionValue } from "../utils/use-transform";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";

export const appShellLayoutContext = React.createContext(null);

export const leftPanelWidthSignal = appScopeUnderscore(appScopeRoot, () => 280);
export const bottomPanelHeightRatioSignal = appScopeUnderscore(
  appScopeRoot,
  () => 0.35,
);
export const mainContentMeasurementSignal = appScopeUnderscore(
  appScopeRoot,
  () => ({ height: 0, width: 0 }),
);
export const prefersReducedMotionSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const devicePixelRatioSignal = appScopeUnderscore(appScopeRoot, () =>
  typeof window === "undefined" ? 1 : window.devicePixelRatio || 1,
);
export const pointerPositionSignals = {
  px$: appScopeUnderscore(appScopeRoot, () => null as number | null),
  py$: appScopeUnderscore(appScopeRoot, () => null as number | null),
};
export const sidebarPeekActiveSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const sidebarVisibleSignal = appScopeUnderscore(
  appScopeRoot,
  () => true,
);
export const leftPanelOpacitySignal = appScopeUnderscore(appScopeRoot, () => 1);

export function scalePx(value: number): number {
  return Math.round(value);
}

export function roundLeftPanelWidth(value: number): number {
  return Math.max(0, Math.round(value));
}

export function roundToDevicePixels(
  value: number,
  pixelRatio: number = 1,
): number {
  const ratio = Number.isFinite(pixelRatio) && pixelRatio > 0 ? pixelRatio : 1;
  return Math.round(value * ratio) / ratio;
}

export function useDevicePixelRatio(): number {
  const [pixelRatio, setPixelRatio] = React.useState(readDevicePixelRatio);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrame: number | null = null;
    let resolutionQuery: MediaQueryList | null = null;

    function scheduleUpdate(): void {
      if (animationFrame != null) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null;
        setPixelRatio(readDevicePixelRatio());
      });
    }

    function handleChange(): void {
      scheduleUpdate();
      updateResolutionQuery();
    }

    function updateResolutionQuery(): void {
      resolutionQuery?.removeEventListener?.("change", handleChange);
      resolutionQuery =
        typeof window.matchMedia === "function"
          ? window.matchMedia(`(resolution: ${readDevicePixelRatio()}dppx)`)
          : null;
      resolutionQuery?.addEventListener?.("change", handleChange);
    }

    updateResolutionQuery();
    window.addEventListener("resize", handleChange);
    window.addEventListener("orientationchange", handleChange);
    return () => {
      if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
      resolutionQuery?.removeEventListener?.("change", handleChange);
      window.removeEventListener("resize", handleChange);
      window.removeEventListener("orientationchange", handleChange);
    };
  }, []);

  return pixelRatio;
}

function readDevicePixelRatio(): number {
  return typeof window === "undefined"
    ? 1
    : Math.max(1, window.devicePixelRatio || 1);
}

export function getInitialLeftPanelWidth(): number {
  return 280;
}

export function persistLeftPanelWidth(
  store: { set?: (signal: unknown, value: unknown) => void } | null | undefined,
  width: number,
): void {
  store?.set?.(leftPanelWidthSignal, roundLeftPanelWidth(width));
}

export function measureElementSize(element: Element): {
  height: number;
  width: number;
} {
  const rect = element.getBoundingClientRect();
  return { height: rect.height, width: rect.width };
}

export function measureVisibleElementRect(element: Element): {
  height: number;
  width: number;
  x: number;
  y: number;
} | null {
  const { x, y, width, height } = element.getBoundingClientRect();
  return width > 0 && height > 0 ? { x, y, width, height } : null;
}

export function computeMainContentTargetWidth({
  leftPanelWidth = 0,
  rightPanelWidth = 0,
  viewportWidth = 0,
}: {
  leftPanelWidth?: number;
  rightPanelWidth?: number;
  viewportWidth?: number;
} = {}): number {
  return Math.max(0, viewportWidth - leftPanelWidth - rightPanelWidth);
}

export function serializeMainContentMeasurement(value: unknown): unknown {
  return value;
}

export function setHoveredAppShellFocusArea(
  store: { set?: (signal: unknown, value: unknown) => void } | null | undefined,
  area: string | null,
): void {
  store?.set?.(sidebarPeekActiveSignal, area != null);
}

export const floatingLeftPanelTransition = {
  type: "spring",
  duration: 0.2,
  bounce: 0,
};

export function useApplicationMenuBarEnabled(): boolean {
  return false;
}

export function useTitleBarSafeAreaInsets(): {
  left: number;
  right: number;
} {
  return { left: 0, right: 0 };
}

export function useAppShellLayout() {
  const leftPanelWidth = useMotionValue(280);
  const rightPanelWidth = useMotionValue(420);
  const headerLeftWidth = useMotionValue(280);
  const headerRightWidth = useMotionValue(420);
  const layoutTick = useMotionValue(0);
  return {
    headerLeftWidth,
    headerRightWidth,
    leftPanelAnimatedWidth: leftPanelWidth,
    leftPanelWidth,
    rightPanelAnimatedWidth: rightPanelWidth,
    rightPanelLayoutTick: layoutTick,
    rightPanelWidth,
  };
}
