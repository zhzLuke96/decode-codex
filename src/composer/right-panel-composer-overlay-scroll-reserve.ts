// Restored from ref/webview/assets/right-panel-composer-overlay-scroll-reserve-Bv3fhxvQ.js
// right-panel-composer-overlay-scroll-reserve-Bv3fhxvQ chunk restored from the Codex webview bundle.
import { createAppScopeSignal } from "../boundaries/app-scope";
import { routeScope } from "../runtime/persisted-signal";
type OverlayVisibilityState = "entering" | "exiting" | "hidden" | "visible";
type ScopedStore = {
  get<TValue>(signal: unknown): TValue;
  node: object;
  set<TValue>(signal: unknown, value: TValue): void;
};
type ToggleOptions = {
  prefersReducedMotion?: boolean;
};
type ReserveAnimationOptions = {
  direction?: "enter" | "exit";
  shouldAnimate?: boolean;
};
const overlayReserveCssVariable = "--right-panel-composer-overlay-reserve";
const defaultOverlayReservePx = getOverlayReservePx();
const overlayAnimationDurationMs = 120;
const overlayAnimationTimers = new WeakMap<object, number>();
const overlayAnimatedReserveSignal = createAppScopeSignal(routeScope, 0);
const overlayRightInsetSignal = createAppScopeSignal(routeScope, 0);
const overlayVisibilityStateSignal = createAppScopeSignal(
  routeScope,
  getVisibilityState(true),
);
const overlayVisibleSignal = createAppScopeSignal(routeScope, true);
const overlayHeightCssVariable = "--right-panel-composer-overlay-height";
const overlayReserveCssValue = `var(${overlayReserveCssVariable}, 1.5rem)`;
function getOverlayReservePx(baseComposerHeightPx = 102): number {
  return baseComposerHeightPx + 16;
}
function toggleRightPanelComposerOverlay(
  store: ScopedStore,
  { prefersReducedMotion = false }: ToggleOptions = {},
): void {
  const nextVisible = !store.get<boolean>(overlayVisibleSignal);
  store.set(overlayVisibleSignal, nextVisible);
  store.set(
    overlayVisibilityStateSignal,
    prefersReducedMotion
      ? getVisibilityState(nextVisible)
      : nextVisible
        ? "entering"
        : "exiting",
  );
  setAnimatedOverlayReserve(store, nextVisible ? defaultOverlayReservePx : 0, {
    direction: nextVisible ? "enter" : "exit",
    shouldAnimate: !prefersReducedMotion,
  });
}
function completeOverlayVisibilityTransition(
  store: ScopedStore,
  expectedState: OverlayVisibilityState,
): void {
  if (store.get(overlayVisibilityStateSignal) !== expectedState) {
    return;
  }
  store.set(
    overlayVisibilityStateSignal,
    expectedState === "entering" ? "visible" : "hidden",
  );
}
function setAnimatedOverlayReserve(
  store: ScopedStore,
  targetReservePx: number,
  { direction = "enter", shouldAnimate = false }: ReserveAnimationOptions = {},
): void {
  cancelOverlayReserveAnimation(store);
  const currentReservePx = store.get<number>(overlayAnimatedReserveSignal);
  if (!shouldAnimate || currentReservePx === targetReservePx) {
    setOverlayReserve(store, targetReservePx);
    return;
  }
  const startedAtMs = performance.now();
  const tick = (nowMs: number) => {
    const progress = Math.max(
      0,
      Math.min((nowMs - startedAtMs) / overlayAnimationDurationMs, 1),
    );
    const easedProgress =
      direction === "enter" ? progress * progress : 1 - (1 - progress) ** 2;
    setOverlayReserve(
      store,
      Math.round(
        currentReservePx + (targetReservePx - currentReservePx) * easedProgress,
      ),
    );
    if (progress < 1) {
      overlayAnimationTimers.set(
        store.node,
        window.setTimeout(() => tick(performance.now()), 16),
      );
      return;
    }
    overlayAnimationTimers.delete(store.node);
  };
  overlayAnimationTimers.set(
    store.node,
    window.setTimeout(() => tick(performance.now()), 16),
  );
}
function cancelOverlayReserveAnimation(store: ScopedStore): void {
  const timerId = overlayAnimationTimers.get(store.node);
  if (timerId == null) return;
  window.clearTimeout(timerId);
  overlayAnimationTimers.delete(store.node);
}
function getVisibilityState(isVisible: boolean): OverlayVisibilityState {
  return isVisible ? "visible" : "hidden";
}
function setOverlayReserve(store: ScopedStore, reservePx: number): void {
  if (store.get(overlayAnimatedReserveSignal) !== reservePx) {
    store.set(overlayAnimatedReserveSignal, reservePx);
  }
}
function initRightPanelComposerOverlayScrollReserveChunk(): void {
  void overlayReserveCssVariable;
  void overlayHeightCssVariable;
  void overlayReserveCssValue;
  void overlayAnimatedReserveSignal;
  void overlayRightInsetSignal;
  void overlayVisibilityStateSignal;
  void overlayVisibleSignal;
}
export {
  cancelOverlayReserveAnimation,
  completeOverlayVisibilityTransition,
  getOverlayReservePx,
  initRightPanelComposerOverlayScrollReserveChunk,
  overlayAnimatedReserveSignal,
  overlayHeightCssVariable,
  overlayReserveCssValue,
  overlayReserveCssVariable,
  overlayRightInsetSignal,
  overlayVisibilityStateSignal,
  overlayVisibleSignal,
  setAnimatedOverlayReserve,
  toggleRightPanelComposerOverlay,
};
