// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-shell panel/tab interaction state and right-panel sizing helpers.
import * as React from "react";
import {
  appScopeRoot,
  appScopeS as useAppScopeValue,
  appScopeUnderscore,
} from "../boundaries/app-scope";
import {
  rightPanelMaximizedSignal,
  setRightPanelOpen,
} from "./app-shell-state";

export const appShellPanelDragContext = React.createContext<{
  dragState: unknown;
} | null>(null);

export const sidebarPeekHoverSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const sidebarPeekLockedSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const sidebarTriggerHoveredSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const showMultiTabCloseMenuSignal = appScopeUnderscore(
  appScopeRoot,
  () => true,
);
export const workspaceProvisioningStateSignal = appScopeUnderscore(
  appScopeRoot,
  () => "ready",
);

type AppShellStoreLike = {
  set?: (signal: unknown, keyOrValue: unknown, value?: unknown) => void;
};
type RightPanelWidthMode = "full" | "regular";
type RightPanelWidthConfig = {
  defaultWidth: number;
  mainContentWidth: number;
  storageKey: string;
  widthMode: RightPanelWidthMode;
};
type TabPanelErrorBoundaryProps = {
  children?: React.ReactNode;
  fallback?: (boundary: { resetError: () => void }) => React.ReactNode;
  name?: string;
  resetKey?: unknown;
};
type TabPanelErrorBoundaryState = {
  error: unknown;
  resetKey: unknown;
};

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
}

function getRightPanelWidthRange(
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = "regular",
): { maximum: number; minimum: number } {
  const availableWidth = Math.max(0, mainContentWidth);
  if (widthMode === "full") {
    return { minimum: availableWidth, maximum: availableWidth };
  }
  const minimum = Math.min(availableWidth, 320);
  const maximum = Math.max(minimum, Math.min(availableWidth, 960));
  return { minimum, maximum };
}

function clampRightPanelWidth(
  width: number,
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = "regular",
): number {
  const { minimum, maximum } = getRightPanelWidthRange(
    mainContentWidth,
    widthMode,
  );
  return Math.min(maximum, Math.max(minimum, width));
}

function widthToRightPanelWidthRatio(
  width: number,
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = "regular",
): number {
  const { minimum, maximum } = getRightPanelWidthRange(
    mainContentWidth,
    widthMode,
  );
  const span = maximum - minimum;
  return span === 0
    ? 0
    : clamp01(
        (clampRightPanelWidth(width, mainContentWidth, widthMode) - minimum) /
          span,
      );
}

export const panelSpringTransition = {
  type: "spring",
  duration: 0.22,
  bounce: 0,
};

export function computeRightPanelWidth(
  ratio: number,
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = "regular",
): number {
  const { minimum, maximum } = getRightPanelWidthRange(
    mainContentWidth,
    widthMode,
  );
  return clampRightPanelWidth(
    minimum + clamp01(ratio) * (maximum - minimum),
    mainContentWidth,
    widthMode,
  );
}

export function computeRightPanelWidthRatio(
  width: number,
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = "regular",
): number {
  return widthToRightPanelWidthRatio(width, mainContentWidth, widthMode);
}

export function computeStoredRightPanelWidthRatio({
  defaultWidth,
  mainContentWidth,
  widthMode,
}: RightPanelWidthConfig): number {
  return widthToRightPanelWidthRatio(defaultWidth, mainContentWidth, widthMode);
}

export function persistRightPanelWidth({
  mainContentWidth,
  width,
  widthMode,
}: Omit<RightPanelWidthConfig, "defaultWidth"> & { width: number }): void {
  void widthToRightPanelWidthRatio(width, mainContentWidth, widthMode);
}

export function setRightPanelOpenPreservingMaximized(
  store: AppShellStoreLike,
  isOpen: boolean,
): void {
  setRightPanelOpen(store as Parameters<typeof setRightPanelOpen>[0], isOpen);
  if (isOpen) store.set?.(rightPanelMaximizedSignal, true);
}

export function useAppShellTabState<TValue = unknown>(
  signal: unknown,
  key?: unknown,
): TValue {
  return useAppScopeValue<TValue>(signal, key);
}

export class TabPanelErrorBoundary extends React.Component<
  TabPanelErrorBoundaryProps,
  TabPanelErrorBoundaryState
> {
  state: TabPanelErrorBoundaryState = {
    error: null,
    resetKey: this.props.resetKey,
  };

  static getDerivedStateFromError(
    error: unknown,
  ): Partial<TabPanelErrorBoundaryState> {
    return { error };
  }

  static getDerivedStateFromProps(
    props: TabPanelErrorBoundaryProps,
    state: TabPanelErrorBoundaryState,
  ): Partial<TabPanelErrorBoundaryState> | null {
    return Object.is(props.resetKey, state.resetKey)
      ? null
      : { error: null, resetKey: props.resetKey };
  }

  resetError = (): void => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error != null) {
      return this.props.fallback?.({ resetError: this.resetError }) ?? null;
    }
    return this.props.children;
  }
}
