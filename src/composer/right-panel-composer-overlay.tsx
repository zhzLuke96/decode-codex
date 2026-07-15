// Restored from ref/webview/assets/right-panel-composer-overlay-DMF22kzH.js
// right-panel-composer-overlay-DMF22kzH chunk restored from the Codex webview bundle.
import React from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import {
  _appScopeO as useScopedStore,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { rightPanelFullscreenSignal } from "../app-shell/app-shell-state";
import { rightAppShellTabController } from "../app-shell/app-shell-tab-controller";
import {
  isBrowserPanelLocation,
  routeScope,
} from "../runtime/persisted-signal";
import { appShellElementContext } from "../app-shell/app-shell-ref";
import { threadContentClassName } from "../threads/thread-layout";
import {
  cancelOverlayReserveAnimation,
  completeOverlayVisibilityTransition,
  getOverlayReservePx,
  overlayAnimatedReserveSignal,
  overlayHeightCssVariable,
  overlayReserveCssVariable,
  overlayRightInsetSignal,
  overlayVisibilityStateSignal,
  overlayVisibleSignal,
  setAnimatedOverlayReserve,
} from "./right-panel-composer-overlay-scroll-reserve";
type OverlayVisibilityState = "entering" | "exiting" | "hidden" | "visible";
type ScopedStore = {
  get<TValue>(signal: unknown): TValue;
  node: object;
  set<TValue>(signal: unknown, value: TValue): void;
};
export type RightPanelComposerOverlayProps = {
  children: React.ReactNode;
  onPointerDownOutside?: () => void;
};
const MIN_COMPOSER_OVERLAY_HEIGHT_PX = 102;
export function RightPanelComposerOverlay({
  children,
  onPointerDownOutside,
}: RightPanelComposerOverlayProps): React.ReactNode {
  const routeStore = useScopedStore(routeScope) as ScopedStore;
  const appShellElement = React.useContext(appShellElementContext);
  const activeRightPanelTab = useAppScopeValue(
    rightAppShellTabController.activeTab$,
  );
  const isRightPanelFullscreen = useAppScopeValue(rightPanelFullscreenSignal);
  const isOverlayVisible = useAppScopeValue(overlayVisibleSignal);
  const persistedVisibilityState = useAppScopeValue(
    overlayVisibilityStateSignal,
  ) as OverlayVisibilityState;
  const animatedReservePx = useAppScopeValue(overlayAnimatedReserveSignal);
  const overlayContentRef = React.useRef<HTMLDivElement | null>(null);
  const pointerBoundaryRef = React.useRef<HTMLDivElement | null>(null);
  const currentReservePxRef = React.useRef(0);
  const [overlayHeightPx, setOverlayHeightPx] = React.useState(
    MIN_COMPOSER_OVERLAY_HEIGHT_PX,
  );
  const shouldShowOverlay =
    !isBrowserPanelLocation(activeRightPanelTab) ||
    !isRightPanelFullscreen ||
    isOverlayVisible;
  const visibilityState = resolveOverlayVisibility(
    shouldShowOverlay,
    persistedVisibilityState,
  );
  const targetReservePx = shouldShowOverlay
    ? getOverlayReservePx(overlayHeightPx)
    : 0;
  const isMounted = visibilityState !== "hidden";
  const isInteractive = visibilityState === "visible";
  const isTransitioning =
    visibilityState === "entering" || visibilityState === "exiting";
  const reservePx = isTransitioning ? animatedReservePx : targetReservePx;
  currentReservePxRef.current = reservePx;
  const handlePointerDownOutside = React.useEffectEvent(() => {
    onPointerDownOutside?.();
  });
  const measureOverlay = React.useCallback(() => {
    const overlayContent = overlayContentRef.current;
    const measuredHeight = Math.max(
      MIN_COMPOSER_OVERLAY_HEIGHT_PX,
      overlayContent?.offsetHeight ?? 0,
    );
    setOverlayHeightPx((currentHeight) =>
      currentHeight === measuredHeight ? currentHeight : measuredHeight,
    );
    const rightInset =
      appShellElement == null || overlayContent == null
        ? 0
        : Math.max(
            0,
            appShellElement.offsetWidth -
              overlayContent.offsetLeft -
              overlayContent.offsetWidth,
          );
    if (routeStore.get(overlayRightInsetSignal) !== rightInset) {
      routeStore.set(overlayRightInsetSignal, rightInset);
    }
  }, [appShellElement, routeStore]);
  React.useLayoutEffect(
    () => () => {
      cancelOverlayReserveAnimation(routeStore);
      if (routeStore.get(overlayAnimatedReserveSignal) !== 0) {
        routeStore.set(overlayAnimatedReserveSignal, 0);
      }
      if (routeStore.get(overlayRightInsetSignal) !== 0) {
        routeStore.set(overlayRightInsetSignal, 0);
      }
    },
    [routeStore],
  );
  React.useLayoutEffect(() => {
    if (!isMounted) {
      if (routeStore.get(overlayRightInsetSignal) !== 0) {
        routeStore.set(overlayRightInsetSignal, 0);
      }
      return;
    }
    measureOverlay();
    const overlayContent = overlayContentRef.current;
    if (overlayContent == null || typeof ResizeObserver === "undefined") return;
    const resizeObserver = new ResizeObserver(measureOverlay);
    resizeObserver.observe(overlayContent);
    if (appShellElement != null) resizeObserver.observe(appShellElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [appShellElement, measureOverlay, routeStore, isMounted]);
  React.useLayoutEffect(() => {
    if (!isMounted || appShellElement == null) return;
    appShellElement.style.setProperty(
      overlayHeightCssVariable,
      `${overlayHeightPx}px`,
    );
    appShellElement.style.setProperty(
      overlayReserveCssVariable,
      `${currentReservePxRef.current}px`,
    );
    return () => {
      appShellElement.style.removeProperty(overlayHeightCssVariable);
      appShellElement.style.removeProperty(overlayReserveCssVariable);
    };
  }, [appShellElement, overlayHeightPx, isMounted]);
  React.useLayoutEffect(() => {
    if (visibilityState === "entering") {
      setAnimatedOverlayReserve(routeStore, targetReservePx, {
        direction: "enter",
        shouldAnimate: true,
      });
      return;
    }
    if (!isTransitioning) {
      setAnimatedOverlayReserve(routeStore, targetReservePx);
    }
  }, [visibilityState, isTransitioning, routeStore, targetReservePx]);
  React.useLayoutEffect(() => {
    if (!isMounted || appShellElement == null) return;
    appShellElement.style.setProperty(
      overlayReserveCssVariable,
      `${reservePx}px`,
    );
  }, [appShellElement, isMounted, reservePx]);
  React.useEffect(() => {
    if (onPointerDownOutside == null || !isInteractive) return;
    const handleDocumentPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        !pointerBoundaryRef.current?.contains(target)
      ) {
        handlePointerDownOutside();
      }
    };
    document.addEventListener("pointerdown", handleDocumentPointerDown, true);
    return () => {
      document.removeEventListener(
        "pointerdown",
        handleDocumentPointerDown,
        true,
      );
    };
  }, [onPointerDownOutside, isInteractive]);
  if (!isMounted) return null;
  const overlay = (
    <div
      aria-hidden={!isInteractive}
      data-testid="right-panel-composer-overlay"
      onAnimationEnd={(event) => {
        if (
          event.currentTarget === event.target &&
          visibilityState === "entering"
        ) {
          completeOverlayVisibilityTransition(routeStore, "entering");
        }
      }}
      onTransitionEnd={(event) => {
        if (
          event.currentTarget === event.target &&
          visibilityState === "exiting"
        ) {
          completeOverlayVisibilityTransition(routeStore, "exiting");
        }
      }}
      className={clsx(
        "pointer-events-none absolute inset-x-0 z-[42] transition-opacity duration-[120ms] motion-reduce:transition-none",
        visibilityState === "entering" &&
          "right-panel-composer-overlay-enter opacity-100",
        visibilityState === "visible" && "opacity-100 ease-in",
        visibilityState === "exiting" && "opacity-0 ease-out",
      )}
      style={{
        bottom: "var(--app-shell-bottom-panel-height, 0px)",
        transform: `translateY(calc(${getOverlayReservePx(overlayHeightPx)}px - var(${overlayReserveCssVariable}, 0px)))`,
      }}
    >
      <div
        ref={overlayContentRef}
        data-right-panel-composer-overlay-content="true"
        className={clsx(threadContentClassName, "pb-6")}
      >
        <div
          ref={pointerBoundaryRef}
          className={
            isInteractive ? "pointer-events-auto" : "pointer-events-none"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
  return appShellElement == null
    ? overlay
    : createPortal(overlay, appShellElement);
}

export function initRightPanelComposerOverlayChunk(): void {}

function resolveOverlayVisibility(
  shouldShowOverlay: boolean,
  persistedVisibilityState: OverlayVisibilityState,
): OverlayVisibilityState {
  if (shouldShowOverlay) {
    return persistedVisibilityState === "entering" ? "entering" : "visible";
  }
  return persistedVisibilityState === "exiting" ? "exiting" : "hidden";
}
