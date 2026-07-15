// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// Semantic implementation for app shell state signals.
import React from "react";
import {
  _appScopeC as appScopeC,
  appScopeRoot as appScopeT,
  createAppScopeSignal as appScopeG,
} from "../../boundaries/app-scope";
import {
  createPersistedSignal as persistedSignalT,
  routeScope as persistedSignalF,
  threadScope as persistedSignalG,
} from "../../runtime/persisted-signal";
import {
  getPersistedAtomValue as persistedAtomStoreA,
  setPersistedAtomItem as persistedAtomStoreL,
} from "../../utils/persisted-atom-store";
import { shouldReduceMotionSignal as reducedMotionPreferenceR } from "../../utils/reduced-motion-preference";
import {
  motionValue,
  type FramerMotionValue,
} from "../../vendor/framer-motion-single-value";
import {
  centerHeaderActionsSignal,
  headerActionRegistries,
  leftHeaderActionsSignal,
  panelLauncherActionRegistry,
  panelLauncherActionsSignal,
  rightHeaderActionsSignal,
} from "./action-registries";
import { appShellStateMtState } from "./motion-sequence-impl";
type RightPanelWidthMode = "regular" | "full";
type AppShellFocusArea = "main" | "right-panel" | "bottom-panel" | string;
type MotionValueLike = FramerMotionValue<number>;
type AppScopeStore = {
  get<T = unknown>(signal: unknown, ...args: unknown[]): T;
  set(signal: unknown, value: unknown): void;
  watch(
    callback: (accessors: { get<T = unknown>(signal: unknown): T }) => void,
  ): () => void;
};
type RightPanelWidthConfig = {
  defaultWidth: number;
  mainContentWidth: number;
  storageKey: string;
  widthMode?: RightPanelWidthMode;
};
type RightPanelLayoutState = {
  isRightPanelOpen: boolean;
  mainContentWidth: number;
  rightPanelWidthMode?: RightPanelWidthMode;
  rightPanelWidthRatio: number;
};
type PanelAnimationOptions = { animate?: boolean };
type SidebarOpenOptions = PanelAnimationOptions & {
  suppressHoverOpen?: boolean;
};
type RightPanelOpenOptions = PanelAnimationOptions & {
  restoreFullWidthOnNextOpen?: boolean;
};
type AppShellLayoutMotionContext = unknown;
var rightPanelWidthStorageKeyPrefix = `app-shell:right-panel-width:v2`,
  rightPanelReservedWidth = 352;
function getRightPanelWidthStorageKey(routeTemplate) {
  return `${rightPanelWidthStorageKeyPrefix}:${routeTemplate}`;
}
function clampRightPanelWidth(
  rawWidth,
  mainContentWidth,
  widthMode = `regular`,
) {
  let resolvedWidth = Number.isFinite(rawWidth) ? rawWidth : 600,
    availableWidth = getAvailableRightPanelWidth(mainContentWidth, widthMode);
  return Math.max(
    Math.min(320, availableWidth),
    Math.min(resolvedWidth, availableWidth),
  );
}
function readStoredRightPanelWidthRatio({
  defaultWidth: defaultWidth,
  mainContentWidth: mainContentWidth,
  storageKey: storageKey,
  widthMode: widthMode,
}: RightPanelWidthConfig): number {
  let storedWidthOrRatio = persistedAtomStoreA(storageKey, null);
  return storedWidthOrRatio == null || !Number.isFinite(storedWidthOrRatio)
    ? widthToRightPanelWidthRatio(defaultWidth, mainContentWidth, widthMode)
    : storedWidthOrRatio <= 1
      ? clamp01(storedWidthOrRatio)
      : widthToRightPanelWidthRatio(
          storedWidthOrRatio,
          mainContentWidth,
          widthMode,
        );
}
function persistRightPanelWidthRatio({
  mainContentWidth: mainContentWidth,
  storageKey: storageKey,
  width: width,
  widthMode: widthMode,
}: Omit<RightPanelWidthConfig, "defaultWidth"> & { width: number }): void {
  persistedAtomStoreL(
    storageKey,
    widthToRightPanelWidthRatio(width, mainContentWidth, widthMode),
  );
}
function widthToRightPanelWidthRatio(
  width: number,
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = `regular`,
): number {
  let widthRange = getRightPanelWidthRange(mainContentWidth, widthMode),
    rangeSpan = widthRange.maximum - widthRange.minimum;
  return rangeSpan === 0
    ? 0
    : clamp01(
        (clampRightPanelWidth(width, mainContentWidth, widthMode) -
          widthRange.minimum) /
          rangeSpan,
      );
}
function rightPanelWidthRatioToPixels(
  ratio: number,
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = `regular`,
): number {
  let widthRange = getRightPanelWidthRange(mainContentWidth, widthMode);
  return clampRightPanelWidth(
    widthRange.minimum +
      clamp01(ratio) * (widthRange.maximum - widthRange.minimum),
    mainContentWidth,
    widthMode,
  );
}
function getAvailableRightPanelWidth(
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = `regular`,
): number {
  return widthMode === `full`
    ? Math.max(320, mainContentWidth)
    : Math.max(320, mainContentWidth - rightPanelReservedWidth);
}
function getRightPanelWidthRange(
  mainContentWidth: number,
  widthMode: RightPanelWidthMode = `regular`,
): { maximum: number; minimum: number } {
  let availableWidth = getAvailableRightPanelWidth(mainContentWidth, widthMode);
  return {
    maximum: availableWidth,
    minimum: Math.min(320, availableWidth),
  };
}
function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}
var appShellPanelSpringTransition = {
    type: `spring`,
    duration: 0.5,
    bounce: 0.1,
  },
  sidebarWidthScaleFactor = 0.5;
function scaleSidebarWidthForCollapsedPreview(value: number): number {
  return value * sidebarWidthScaleFactor;
}
function computeMainContentWidthWithRightPanel({
  isRightPanelOpen: isRightPanelOpen,
  mainContentWidth: mainContentWidth,
  rightPanelWidthMode: rightPanelWidthMode,
  rightPanelWidthRatio: rightPanelWidthRatio,
}: RightPanelLayoutState): number {
  return isRightPanelOpen
    ? Math.max(
        0,
        mainContentWidth -
          rightPanelWidthRatioToPixels(
            rightPanelWidthRatio,
            mainContentWidth,
            rightPanelWidthMode,
          ),
      )
    : mainContentWidth;
}
var appShellLayoutMotionContext =
  React.createContext<AppShellLayoutMotionContext | null>(null);
function useAppShellLayoutMotionContext(): AppShellLayoutMotionContext {
  let motionContext = React.useContext(appShellLayoutMotionContext);
  if (motionContext == null)
    throw Error(`AppShellLayoutMotionContext is missing`);
  return motionContext;
}
var defaultAppShellFocusArea = `main`,
  rightPanelFullscreenSignal = appScopeG(persistedSignalG, !1),
  rightPanelWidthConfigOverrideSignal = appScopeG(persistedSignalF, null),
  activeAppShellFocusAreaSignal = appScopeG(persistedSignalG, `main`),
  appShellFocusTrapEnabledSignal = appScopeG(persistedSignalG, !1),
  appShellFocusPayloadSignal = appScopeG(persistedSignalG, null);
const rightPanelFallbackContentSignal = appScopeG(persistedSignalF, null);
const appShellFocusAreaAttribute = `data-app-shell-focus-area`;
const rightPanelAfterListSignal = appScopeG(persistedSignalF, null);
const rightPanelBeforeListSignal = appScopeG(persistedSignalF, null);
const rightPanelAfterListStickySignal = appScopeG(persistedSignalF, null);
const rightPanelEmptyStateSignal = appScopeG(persistedSignalF, null);
const rightPanelStoredWidthSignal = appScopeG(persistedSignalF, null);
const bottomPanelFallbackContentSignal = appScopeG(persistedSignalF, null);
const bottomPanelAfterListSignal = appScopeG(persistedSignalF, null);
const bottomPanelAfterListStickySignal = appScopeG(persistedSignalF, null);
const bottomPanelEmptyStateSignal = appScopeG(persistedSignalF, null);
const appShellHeaderContextMenuSurfaceSignal = appScopeG(
  persistedSignalF,
  null,
);
const mainContentLayoutSignal = appScopeG(persistedSignalF, `default`);
const bottomPanelPreviousFocusAreaSignal = appScopeG(
  persistedSignalG,
  defaultAppShellFocusArea,
);
const rightPanelWidthConfigSignal = appScopeC(
  persistedSignalF,
  ({ get: get, scope: scope }) =>
    get(rightPanelWidthConfigOverrideSignal) ?? {
      defaultWidth: 600,
      storageKey: getRightPanelWidthStorageKey(scope.value.routeTemplate),
    },
);
function setActiveAppShellFocusArea(
  appScope: AppScopeStore,
  focusArea: AppShellFocusArea,
): void {
  appScope.get(activeAppShellFocusAreaSignal) !== focusArea &&
    appScope.set(activeAppShellFocusAreaSignal, focusArea);
}
function setAppShellFocusTrapEnabled(
  appScope: AppScopeStore,
  isEnabled: boolean,
): void {
  appScope.get(appShellFocusTrapEnabledSignal) !== isEnabled &&
    appScope.set(appShellFocusTrapEnabledSignal, isEnabled);
}
function setAppShellFocusPayload(
  appScope: AppScopeStore,
  value: unknown,
): void {
  appScope.get(appShellFocusPayloadSignal) !== value &&
    appScope.set(appShellFocusPayloadSignal, value);
}
var maxSidebarWidth = 520,
  sidebarWidthStorageKey = `sidebar-width`;
function readInitialSidebarWidth() {
  return clampSidebarWidth(persistedAtomStoreA(sidebarWidthStorageKey, 300));
}
function persistSidebarWidth(width: number): void {
  persistedAtomStoreL(sidebarWidthStorageKey, clampSidebarWidth(width));
}
function clampSidebarWidth(width) {
  return Number.isFinite(width)
    ? Math.min(Math.max(width, 240), maxSidebarWidth)
    : 300;
}
var bottomPanelLauncherVisibleStorageKey = `app-shell-bottom-panel-launcher-visible`,
  sidebarHoverLauncherDelayMs = 100,
  sidebarOpenSignal = appScopeG(appScopeT, !0),
  sidebarHoverSignal = appScopeG(appScopeT, !1),
  sidebarHoverOpenSuppressedSignal = appScopeG(appScopeT, !1),
  sidebarAnimatingSignal = appScopeG(appScopeT, !1),
  sidebarAnimationSequenceSignal = appScopeG(appScopeT, 0),
  sidebarOpenAnimationSignal = appScopeG(appScopeT, () => motionValue(1)),
  bottomPanelLauncherVisibleSignal = persistedSignalT(
    bottomPanelLauncherVisibleStorageKey,
    !0,
  ),
  bottomPanelOpenSignal = appScopeG(persistedSignalG, !1),
  bottomPanelAnimationSignal = appScopeG(persistedSignalG, () =>
    motionValue(0),
  ),
  rightPanelExpandedSignal = appScopeG(persistedSignalG, !1),
  rightPanelAnimationSignal = appScopeG(persistedSignalG, () => motionValue(0)),
  rightPanelOpenSignal = appScopeG(persistedSignalG, !1),
  pendingRestoreRightPanelFullWidthSignal = appScopeG(persistedSignalG, !1),
  reviewFileTreeOpenSignal = appScopeG(appScopeT, !1),
  reviewFileTreeOpenAnimationSignal = appScopeG(appScopeT, () =>
    motionValue(0),
  );
const sidebarWidthSignal = appScopeG(appScopeT, readInitialSidebarWidth);
const sidebarHoverLauncherVisibleSignal = appScopeG(appScopeT, !1, {
  onMount: (setHoverLauncherVisible, sidebarScope) => {
    let hoverLauncherTimerId: ReturnType<typeof window.setTimeout> | null =
        null,
      clearHoverLauncherTimer = () => {
        hoverLauncherTimerId != null &&
          (window.clearTimeout(hoverLauncherTimerId),
          (hoverLauncherTimerId = null));
      },
      unsubscribe = sidebarScope.watch(({ get: get }) => {
        if (get(sidebarOpenSignal) || !get(sidebarHoverSignal)) {
          (clearHoverLauncherTimer(), setHoverLauncherVisible(!1));
          return;
        }
        hoverLauncherTimerId ??= window.setTimeout(() => {
          ((hoverLauncherTimerId = null), setHoverLauncherVisible(!0));
        }, sidebarHoverLauncherDelayMs);
      });
    return () => {
      (clearHoverLauncherTimer(), unsubscribe());
    };
  },
});
const sidebarFloatingPanelPinnedSignal = appScopeG(appScopeT, !1);
const sidebarCollapsedPreviewWidthSignal = appScopeG(appScopeT, 250);
const sidebarFloatingPanelEnabledSignal = appScopeG(appScopeT, !0);
function setSidebarOpen(
  appScope: AppScopeStore,
  isOpen: boolean,
  options: SidebarOpenOptions = {},
): void {
  let openMotionValue = appScope.get<MotionValueLike>(
      sidebarOpenAnimationSignal,
    ),
    targetValue = isOpen ? 1 : 0,
    shouldSuppressHoverOpen = !isOpen && options.suppressHoverOpen !== !1;
  if (
    appScope.get(sidebarOpenSignal) === isOpen &&
    openMotionValue.get() === targetValue
  ) {
    (appScope.set(sidebarHoverSignal, !1),
      appScope.set(sidebarHoverOpenSuppressedSignal, shouldSuppressHoverOpen),
      appScope.set(sidebarAnimatingSignal, !1));
    return;
  }
  let shouldAnimate =
      options.animate !== !1 &&
      !appScope.get<boolean>(reducedMotionPreferenceR),
    animationSequence =
      appScope.get<number>(sidebarAnimationSequenceSignal) + 1;
  if (
    (appScope.set(sidebarAnimationSequenceSignal, animationSequence),
    appScope.set(sidebarHoverSignal, !1),
    appScope.set(sidebarHoverOpenSuppressedSignal, shouldSuppressHoverOpen),
    appScope.set(sidebarAnimatingSignal, shouldAnimate),
    appScope.set(sidebarOpenSignal, isOpen),
    openMotionValue.stop(),
    !shouldAnimate)
  ) {
    openMotionValue.set(targetValue);
    return;
  }
  let openAnimation = appShellStateMtState(
      openMotionValue,
      targetValue,
      appShellPanelSpringTransition,
    ),
    clearAnimatingIfCurrent = () => {
      appScope.get(sidebarAnimationSequenceSignal) === animationSequence &&
        appScope.set(sidebarAnimatingSignal, !1);
    };
  openAnimation.then(clearAnimatingIfCurrent, clearAnimatingIfCurrent);
}
function setBottomPanelLauncherVisible(
  appScope: AppScopeStore,
  isVisible: boolean,
): void {
  appScope.set(bottomPanelLauncherVisibleSignal, isVisible);
}
function ensureBottomPanelLauncherVisibilityDefault(): void {
  persistedAtomStoreA(`app-shell-bottom-panel-launcher-visible`, void 0) ??
    persistedAtomStoreL(bottomPanelLauncherVisibleStorageKey, !1);
}
function setBottomPanelOpen(appScope: AppScopeStore, isOpen: boolean): void {
  (appScope.set(bottomPanelOpenSignal, isOpen),
    setOrAnimateBooleanMotionValue(
      appScope.get<MotionValueLike>(bottomPanelAnimationSignal),
      isOpen,
      appScope.get<boolean>(reducedMotionPreferenceR),
    ));
}
function setRightPanelExpanded(
  appScope: AppScopeStore,
  isOpen: boolean,
  options: RightPanelOpenOptions = {},
): void {
  appScope.set(rightPanelExpandedSignal, isOpen);
  let rightPanelMotionValue = appScope.get<MotionValueLike>(
    rightPanelAnimationSignal,
  );
  if (
    (rightPanelMotionValue.stop(),
    setOrAnimateBooleanMotionValue(
      rightPanelMotionValue,
      isOpen,
      appScope.get<boolean>(reducedMotionPreferenceR),
    ),
    isOpen)
  ) {
    appScope.get(pendingRestoreRightPanelFullWidthSignal) &&
      (appScope.set(rightPanelFullscreenSignal, !0),
      appScope.set(pendingRestoreRightPanelFullWidthSignal, !1));
    return;
  }
  (appScope.set(rightPanelOpenSignal, !1),
    appScope.set(
      pendingRestoreRightPanelFullWidthSignal,
      options.restoreFullWidthOnNextOpen === !0 &&
        appScope.get<boolean>(rightPanelFullscreenSignal),
    ),
    appScope.set(rightPanelFullscreenSignal, !1));
}
function setRightPanelOpen(appScope: AppScopeStore, isOpen: boolean): void {
  if (isOpen) {
    (appScope.set(rightPanelOpenSignal, !0),
      setRightPanelExpanded(appScope, !0));
    return;
  }
  setRightPanelExpanded(appScope, !1);
}
function setReviewFileTreeOpen(
  appScope: AppScopeStore,
  isOpen: boolean,
  options: PanelAnimationOptions = {},
): void {
  (appScope.set(reviewFileTreeOpenSignal, isOpen),
    animateBooleanMotionValue(
      appScope.get<MotionValueLike>(reviewFileTreeOpenAnimationSignal),
      isOpen,
      appScope.get<boolean>(reducedMotionPreferenceR),
      options,
    ));
}
function animateBooleanMotionValue(
  motionValue: MotionValueLike,
  enabled: boolean,
  shouldReduceMotion: boolean,
  options: PanelAnimationOptions,
): void {
  if ((motionValue.stop(), options.animate === !1 || shouldReduceMotion)) {
    motionValue.set(enabled ? 1 : 0);
    return;
  }
  appShellStateMtState(
    motionValue,
    enabled ? 1 : 0,
    appShellPanelSpringTransition,
  );
}
function setOrAnimateBooleanMotionValue(
  motionValue: MotionValueLike,
  enabled: boolean,
  shouldReduceMotion: boolean,
): void {
  let targetValue = enabled ? 1 : 0;
  if (shouldReduceMotion) {
    motionValue.set(targetValue);
    return;
  }
  appShellStateMtState(motionValue, targetValue, appShellPanelSpringTransition);
}
export {
  rightPanelWidthConfigSignal,
  rightPanelWidthConfigSignal as appShellStateDollarState,
  bottomPanelPreviousFocusAreaSignal,
  bottomPanelPreviousFocusAreaSignal as appShellStateAState,
  centerHeaderActionsSignal as appShellStateBState,
  sidebarOpenAnimationSignal as appShellStateCState,
  clampSidebarWidth,
  clampSidebarWidth as appShellStateDState,
  readInitialSidebarWidth,
  readInitialSidebarWidth as appShellStateEState,
  bottomPanelAfterListSignal,
  bottomPanelAfterListSignal as appShellStateFState,
  rightPanelFullscreenSignal,
  rightPanelFullscreenSignal as appShellStateGState,
  rightPanelFullscreenSignal as rightPanelMaximizedSignal,
  panelLauncherActionsSignal as appShellStateHState,
  bottomPanelAfterListStickySignal,
  bottomPanelAfterListStickySignal as appShellStateIState,
  rightPanelStoredWidthSignal,
  rightPanelStoredWidthSignal as appShellStateJState,
  mainContentLayoutSignal,
  mainContentLayoutSignal as appShellStateKState,
  bottomPanelEmptyStateSignal,
  bottomPanelEmptyStateSignal as appShellStateLState,
  appShellFocusPayloadSignal as appShellStateMState,
  appShellFocusTrapEnabledSignal as appShellStateNState,
  persistSidebarWidth,
  persistSidebarWidth as appShellStateOState,
  bottomPanelFallbackContentSignal,
  bottomPanelFallbackContentSignal as appShellStatePState,
  rightPanelEmptyStateSignal,
  rightPanelEmptyStateSignal as appShellStateQState,
  appShellHeaderContextMenuSurfaceSignal,
  appShellHeaderContextMenuSurfaceSignal as appShellStateRState,
  sidebarAnimatingSignal as appShellStateSState,
  sidebarFloatingPanelEnabledSignal as appShellStateTState,
  leftHeaderActionsSignal as appShellStateUState,
  panelLauncherActionRegistry as appShellStateVState,
  rightHeaderActionsSignal as appShellStateWState,
  rightPanelAfterListStickySignal,
  rightPanelAfterListStickySignal as appShellStateXState,
  rightPanelAfterListSignal,
  rightPanelAfterListSignal as appShellStateYState,
  rightPanelBeforeListSignal,
  rightPanelBeforeListSignal as appShellStateZState,
  sidebarCollapsedPreviewWidthSignal,
  sidebarCollapsedPreviewWidthSignal as appShellStateUnderscoreState,
  appShellLayoutMotionContext,
  appShellLayoutMotionContext as appShellStateAtState,
  useAppShellLayoutMotionContext,
  useAppShellLayoutMotionContext as appShellStateCtState,
  rightPanelWidthRatioToPixels,
  rightPanelWidthRatioToPixels as appShellStateDtState,
  rightPanelWidthConfigOverrideSignal,
  rightPanelWidthConfigOverrideSignal as appShellStateEtState,
  widthToRightPanelWidthRatio,
  widthToRightPanelWidthRatio as appShellStateFtState,
  appShellPanelSpringTransition,
  appShellPanelSpringTransition as appShellStateItState,
  getRightPanelWidthStorageKey,
  getRightPanelWidthStorageKey as appShellStateLtState,
  setAppShellFocusPayload,
  setAppShellFocusPayload as appShellStateNtState,
  computeMainContentWidthWithRightPanel,
  computeMainContentWidthWithRightPanel as appShellStateOtState,
  persistRightPanelWidthRatio,
  persistRightPanelWidthRatio as appShellStatePtState,
  setAppShellFocusTrapEnabled,
  setAppShellFocusTrapEnabled as appShellStateRtState,
  scaleSidebarWidthForCollapsedPreview,
  scaleSidebarWidthForCollapsedPreview as appShellStateStState,
  setActiveAppShellFocusArea,
  setActiveAppShellFocusArea as appShellStateTtState,
  readStoredRightPanelWidthRatio,
  readStoredRightPanelWidthRatio as appShellStateUtState,
  sidebarFloatingPanelPinnedSignal,
  sidebarFloatingPanelPinnedSignal as appShellStateDSignal,
  rightPanelAnimationSignal,
  rightPanelAnimationSignal as appShellStateISignal,
  appShellFocusAreaAttribute as appShellStateKSignal,
  bottomPanelLauncherVisibleSignal as appShellStateNSignal,
  sidebarWidthSignal,
  sidebarWidthSignal as appShellStatePSignal,
  rightPanelFallbackContentSignal,
  rightPanelFallbackContentSignal as appShellStateQSignal,
  bottomPanelAnimationSignal,
  bottomPanelAnimationSignal as appShellStateTSignal,
  ensureBottomPanelLauncherVisibilityDefault as appShellStateVSignal,
  setBottomPanelLauncherVisible,
  setBottomPanelLauncherVisible as appShellStateYSignal,
  headerActionRegistries as appShellStateZSignal,
  setBottomPanelOpen,
  ensureBottomPanelLauncherVisibilityDefault,
  ensureBottomPanelLauncherVisibilityDefault as _appShellStateVState,
  bottomPanelOpenSignal as bottomPanelOpenSignal,
  setRightPanelOpen,
  rightPanelOpenSignal as rightPanelOpenSignal,
  activeAppShellFocusAreaSignal as activeAppShellFocusAreaSignal,
  setRightPanelExpanded,
  setRightPanelExpanded as setRightPanelOpenWithOptions,
  rightPanelExpandedSignal as rightPanelExpandedSignal,
  setSidebarOpen,
  sidebarOpenSignal,
  sidebarOpenAnimationSignal,
  sidebarHoverSignal,
  sidebarHoverOpenSuppressedSignal,
  sidebarHoverLauncherVisibleSignal,
  sidebarAnimatingSignal,
  reviewFileTreeOpenSignal,
  reviewFileTreeOpenAnimationSignal,
  setReviewFileTreeOpen,
};
