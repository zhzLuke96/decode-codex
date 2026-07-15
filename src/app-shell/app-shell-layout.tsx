// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Top-level app-shell layout: composes the docked/floating left panel, header,
// main content viewport, right panel and bottom panel, wires up the live width
// and height motion values that drive the panel animations, and tracks the
// active/hovered focus area as focus moves between panels.
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { AppShellTabDragAndDropContext } from "./app-shell-tab-dnd";
import { floatingLeftPanelVisibleAtom } from "./app-shell-floating-panel-reveal";
import { LeftPanel } from "./left-panel";
import { AppShellHeader } from "./app-shell-header";
import { RightPanel, useRightPanelWidth } from "./right-panel";
import { BottomPanel } from "./bottom-panel";
import { ResizeHandle } from "./resize-handle";
import { WindowsMenuBar } from "./windows-menu-bar";
import { usePanelAnimation } from "./panel-animation";
import {
  clampBottomPanelHeight,
  readBottomPanelHeight,
} from "./bottom-panel-height";
import { bottomAppShellTabController } from "./app-shell-tab-controller";
import { AppShellTabs } from "./app-shell-tabs";
import { appShellElementContext, appShellRefContext } from "./app-shell-ref";
import { useResizeObserverRef } from "../utils/use-resize-observer";
import { useMotionValueEvent } from "../utils/use-motion-value-event";
import {
  useMotionValue,
  useTransform as useMotionTransform,
  type MotionValue,
} from "../utils/use-transform";
import {
  activeAppShellFocusAreaSignal,
  reviewFileTreeOpenSignal,
  setActiveAppShellFocusArea,
  setReviewFileTreeOpen,
  setSidebarOpen,
  sidebarOpenAnimationSignal,
  sidebarOpenSignal,
} from "./app-shell-state";
import { appShellBottomPanelHeightSubscriberContext } from "./bottom-panel-height-subscriber-context";
import {
  AnimatePresence,
  AppHeaderSidebarBrand,
  AppShellPortalRoot,
  APP_SHELL_FOCUS_AREA_ATTR,
  appRouteScope,
  appShellLayoutContext,
  appStoreScope,
  bottomPanelAfterListSignal,
  bottomPanelAfterListStickySignal,
  bottomPanelFallbackContentSignal,
  bottomPanelHeightRatioSignal,
  computeMainContentTargetWidth,
  floatingLeftPanelTransition,
  getInitialLeftPanelWidth,
  leftPanelWidthSignal,
  mainContentLayoutSignal,
  mainContentMeasurementSignal,
  measureElementSize,
  motion as Motion,
  motionTemplate,
  persistLeftPanelWidth,
  prefersReducedMotionSignal,
  rightPanelMaximizedSignal,
  roundLeftPanelWidth,
  serializeMainContentMeasurement,
  setHoveredAppShellFocusArea,
  setTerminalFocused,
  useApplicationMenuBarEnabled,
  useAppScope,
  useEventCallback,
  useSignalValue,
  useTitleBarSafeAreaInsets,
  useWindowZoom,
} from "../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "./app-shell-tab-controller/types";

const NARROW_SHELL_WIDTH = 960;
const VERY_NARROW_SHELL_WIDTH = 720;
const HEADER_EDGE_SCROLL_REM_THRESHOLD = 96;
const FALLBACK_ROOT_FONT_SIZE = 16;
const FLOATING_LEFT_PANEL_INSET = 0;

type AppShellFocusArea = "main" | "right-panel" | "bottom-panel";

function resolveFocusAreaFromElement(
  target: EventTarget | null,
): AppShellFocusArea {
  if (!(target instanceof HTMLElement)) return "main";
  const area = target
    .closest(`[${APP_SHELL_FOCUS_AREA_ATTR}]`)
    ?.getAttribute(APP_SHELL_FOCUS_AREA_ATTR);
  return area === "right-panel" || area === "bottom-panel" ? area : "main";
}

function isTerminalElement(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    target.closest("[data-codex-terminal]") != null
  );
}

function getHeaderEdgeScrollThreshold(): number {
  const rootFontSize = Number.parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return Number.isFinite(rootFontSize)
    ? HEADER_EDGE_SCROLL_REM_THRESHOLD * rootFontSize
    : HEADER_EDGE_SCROLL_REM_THRESHOLD * FALLBACK_ROOT_FONT_SIZE;
}

function ApplicationMenuTopBar() {
  return (
    <div className="app-header-tint draggable group/application-menu-top-bar z-40 flex h-toolbar-sm items-center ps-(--spacing-token-safe-header-left) pe-(--spacing-token-safe-header-right)">
      <AppHeaderSidebarBrand />
      <WindowsMenuBar />
    </div>
  );
}

function persistFloatingLeftPanelWidth(size: number): void {
  persistLeftPanelWidth(roundLeftPanelWidth(size));
}

interface FloatingLeftPanelProps {
  floatingLeftPanelWidth: MotionValue<string>;
  isApplicationMenuBarEnabled: boolean;
  isVisible: boolean;
  leftPanel: ReactNode;
  leftPanelWidth: MotionValue<number>;
  shouldUseReducedMotion: boolean;
  onOpenSidebar: () => void;
}

function FloatingLeftPanel({
  floatingLeftPanelWidth,
  isApplicationMenuBarEnabled,
  isVisible,
  leftPanel,
  leftPanelWidth,
  shouldUseReducedMotion,
  onOpenSidebar,
}: FloatingLeftPanelProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const [isResizing, setIsResizing] = useState(false);
  const shouldRender = isVisible || isResizing;
  const transition = shouldUseReducedMotion
    ? { duration: 0 }
    : floatingLeftPanelTransition;
  const panel = shouldRender ? (
    <Motion.div
      data-pip-obstacle="app-shell-floating-left-panel"
      className={clsx(
        "pointer-events-auto fixed bottom-0 left-0 z-[42] min-h-0",
        isResizing && "cursor-col-resize",
        isApplicationMenuBarEnabled ? "top-(--height-toolbar-sm)" : "top-0",
      )}
      initial={shouldUseReducedMotion ? false : { opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: shouldUseReducedMotion ? 0 : -8 }}
      style={{ width: floatingLeftPanelWidth }}
      transition={transition}
    >
      <aside
        data-testid="app-shell-floating-left-panel"
        className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-token-main-surface-primary electron:elevation-prominent extension:shadow-[0.5px_0_0_0_var(--color-token-border-default),0_20px_25px_-5px_rgb(0_0_0/0.1),0_8px_10px_-6px_rgb(0_0_0/0.1)]"
      >
        <Motion.div
          initial={shouldUseReducedMotion ? false : { x: 8 }}
          animate={{ x: 0 }}
          exit={{ x: shouldUseReducedMotion ? 0 : 8 }}
          transition={transition}
          className="app-header-tint flex h-toolbar shrink-0 items-center ps-[max(var(--spacing-token-safe-header-left),0.5rem)] pe-2"
        >
          <AppHeaderSidebarBrand
            hideUnreadBadge
            onToggleSidebar={onOpenSidebar}
          />
        </Motion.div>
        <div className="min-h-0 flex-1 overflow-hidden">{leftPanel}</div>
      </aside>
      <ResizeHandle
        defaultSize={300}
        getCurrentSize={() => leftPanelWidth.get()}
        onResizingChange={setIsResizing}
        setSize={(size) => {
          const rounded = roundLeftPanelWidth(size);
          store.set(leftPanelWidthSignal, rounded);
          leftPanelWidth.set(rounded);
        }}
        onResizeEnd={persistFloatingLeftPanelWidth}
      />
    </Motion.div>
  ) : null;
  return <AnimatePresence initial={false}>{panel}</AnimatePresence>;
}

function BottomPanelOutletContent() {
  const activeTab = useSignalValue(bottomAppShellTabController.activeTab$);
  const fallbackContent = useSignalValue(bottomPanelFallbackContentSignal);
  const afterList = useSignalValue<ReactNode>(bottomPanelAfterListSignal);
  const afterListSticky = useSignalValue<ReactNode>(
    bottomPanelAfterListStickySignal,
  );
  if (activeTab != null) {
    return (
      <AppShellTabs
        headerHeight="pane"
        afterList={afterList}
        afterListSticky={afterListSticky}
        controller={bottomAppShellTabController}
      />
    );
  }
  return fallbackContent == null ? null : <>{fallbackContent}</>;
}

interface AppShellPanelSlot {
  children?: ReactNode;
}

export interface AppShellLayoutProps {
  bottomPanelSlot?: AppShellPanelSlot;
  children?: ReactNode;
  leftPanelSlot?: AppShellPanelSlot;
  rightPanelSlot?: AppShellPanelSlot;
}

export function AppShellLayout({
  bottomPanelSlot,
  children,
  leftPanelSlot,
  rightPanelSlot,
}: AppShellLayoutProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const route = useAppScope(appRouteScope) as {
    value: { clientThreadId: string };
  };
  const shellElementRef = useRef<HTMLDivElement | null>(null);
  const [mainElement, setMainElement] = useState<HTMLElement | null>(null);
  const [isLeftPanelResizing, setLeftPanelResizing] = useState(false);
  const leftPanelSlotRef = useRef(leftPanelSlot);
  if (leftPanelSlot != null) leftPanelSlotRef.current = leftPanelSlot;
  const leftPanelContent = (
    leftPanelSlot ??
    (isLeftPanelResizing ? leftPanelSlotRef.current : undefined)
  )?.children;
  const hasLeftPanel = leftPanelContent != null;
  const hasBottomPanel = bottomPanelSlot != null;
  const hasRightPanel = rightPanelSlot != null;
  const wasNarrowRef = useRef(false);
  const wasVeryNarrowRef = useRef(false);
  const isRightPanelFullWidth = useSignalValue<boolean>(
    rightPanelMaximizedSignal,
  );
  const mainContentLayout = useSignalValue<string>(mainContentLayoutSignal);
  const windowZoom = useWindowZoom();
  const safeAreaInsets = useTitleBarSafeAreaInsets();
  const isApplicationMenuBarEnabled = useApplicationMenuBarEnabled();
  const [isHeaderEdgeScrollWide, setHeaderEdgeScrollWide] = useState(false);
  const isSidebarOpen = useSignalValue<boolean>(sidebarOpenSignal);
  const shouldUseReducedMotion = useSignalValue<boolean>(
    prefersReducedMotionSignal,
  );
  const isFloatingLeftPanelVisible = useSignalValue<boolean>(
    floatingLeftPanelVisibleAtom,
  );
  const isEdgeScrollLayout = mainContentLayout === "thread-edge-scroll";
  const isLeftPanelDocked = hasLeftPanel && isSidebarOpen;
  const isHeaderEdgeScroll =
    isEdgeScrollLayout && isHeaderEdgeScrollWide && !isRightPanelFullWidth;
  const isFullBleed = mainContentLayout === "full-bleed";
  let topFadeMode = "visible";
  if (isFullBleed) topFadeMode = "hidden";
  else if (isEdgeScrollLayout) topFadeMode = "full-bleed";
  else if (hasRightPanel) topFadeMode = "hidden";

  const leftPanelWidth = useMotionValue(getInitialLeftPanelWidth());
  const floatingLeftPanelWidth = useMotionTransform(
    leftPanelWidth,
    (width: number) =>
      `${Math.max(0, width - FLOATING_LEFT_PANEL_INSET * 2)}px`,
  );
  const { isMounted, animatedSize: leftPanelAnimatedWidth } = usePanelAnimation(
    {
      animation: useSignalValue<MotionValue<number>>(
        sidebarOpenAnimationSignal,
      ),
      size: leftPanelWidth,
      isVisible: isLeftPanelDocked,
    },
  );
  const shellWidth = useMotionValue(window.innerWidth);
  const mainContentHeight = useMotionValue(window.innerHeight - 46);
  const bottomPanelHeight = useMotionValue(
    readBottomPanelHeight(mainContentHeight.get()),
  );
  const bottomPanelHeightRatio = useSignalValue<number>(
    bottomPanelHeightRatioSignal,
  );
  const clampedBottomPanelHeight = useMotionTransform(
    [bottomPanelHeight, mainContentHeight],
    ([height, available]: [number, number]) =>
      clampBottomPanelHeight(height, available),
  );
  const bottomPanelEffectiveHeight = useMotionTransform(
    [bottomPanelHeightRatio, clampedBottomPanelHeight],
    ([ratio, height]: [number, number]) => ratio * height,
  );
  const bottomPanelHeightTemplate = motionTemplate`${bottomPanelEffectiveHeight}px`;
  const rightPanelLayoutTick = useMotionValue(0);
  const headerLeftWidth = useMotionValue(0);
  const headerRightWidth = useMotionValue(0);
  const mainContentWidth = useMotionTransform(
    [shellWidth, leftPanelAnimatedWidth],
    ([width, panelWidth]: [number, number]) => Math.max(0, width - panelWidth),
  );
  const {
    rightPanelAnimatedWidth,
    rightPanelWidth,
    rightPanelWidthRatio,
    widthMode,
  } = useRightPanelWidth({
    isFullWidth: isRightPanelFullWidth,
    mainContentWidth,
  });
  const mainContentTargetWidthCollapsed = useMotionTransform(
    [shellWidth, rightPanelWidthRatio],
    ([width, ratio]: [number, number]) =>
      computeMainContentTargetWidth({
        isRightPanelOpen: hasRightPanel,
        mainContentWidth: width,
        rightPanelWidthMode: widthMode,
        rightPanelWidthRatio: ratio,
      }),
  );
  const mainContentTargetWidthDocked = useMotionTransform(
    [shellWidth, leftPanelWidth, rightPanelWidthRatio],
    ([width, panelWidth, ratio]: [number, number, number]) =>
      computeMainContentTargetWidth({
        isRightPanelOpen: hasRightPanel,
        mainContentWidth: Math.max(0, width - panelWidth),
        rightPanelWidthMode: widthMode,
        rightPanelWidthRatio: ratio,
      }),
  );
  const mainContentTargetWidth = isLeftPanelDocked
    ? mainContentTargetWidthDocked
    : mainContentTargetWidthCollapsed;
  const previousBottomPanelHeightRef = useRef(bottomPanelEffectiveHeight.get());
  const bottomPanelHeightSubscribersRef = useRef(
    new Set<(delta: number) => void>(),
  );
  const shellStyle: CSSProperties = {
    "--spacing-token-safe-header-left": `${safeAreaInsets.left / windowZoom}px`,
    "--spacing-token-safe-header-right": `${safeAreaInsets.right / windowZoom}px`,
    width: "calc(100vw / var(--codex-window-zoom))",
    height: "calc(100vh / var(--codex-window-zoom))",
    zoom: "var(--codex-window-zoom)",
    "--app-shell-bottom-panel-height": bottomPanelHeightTemplate,
  } as CSSProperties;
  const layoutValue = useMemo(
    () => ({
      headerLeftWidth,
      headerRightWidth,
      leftPanelWidth,
      leftPanelAnimatedWidth,
      mainContentTargetWidth,
      mainContentWidth,
      shellWidth,
      rightPanelAnimatedWidth,
      rightPanelLayoutTick,
    }),
    [
      headerLeftWidth,
      headerRightWidth,
      leftPanelAnimatedWidth,
      leftPanelWidth,
      mainContentTargetWidth,
      mainContentWidth,
      rightPanelAnimatedWidth,
      rightPanelLayoutTick,
      shellWidth,
    ],
  );
  const subscribeBottomPanelHeight = useCallback(
    (subscriber: (delta: number) => void) => {
      bottomPanelHeightSubscribersRef.current.add(subscriber);
      return () => {
        bottomPanelHeightSubscribersRef.current.delete(subscriber);
      };
    },
    [],
  );
  const handleShellResize = useEventCallback(({ width }: { width: number }) => {
    shellWidth.set(width);
    const isNarrow = width <= NARROW_SHELL_WIDTH;
    const isVeryNarrow = width <= VERY_NARROW_SHELL_WIDTH;
    const narrowChanged = isNarrow !== wasNarrowRef.current;
    const veryNarrowChanged = isVeryNarrow !== wasVeryNarrowRef.current;
    if (!narrowChanged && !veryNarrowChanged) return;
    wasNarrowRef.current = isNarrow;
    wasVeryNarrowRef.current = isVeryNarrow;
    if (
      (narrowChanged && isLeftPanelDocked && hasRightPanel && isNarrow) ||
      (veryNarrowChanged && isVeryNarrow)
    ) {
      if (store.get(activeAppShellFocusAreaSignal) === "right-panel") {
        setActiveAppShellFocusArea(store, "main");
      }
      if (store.get(rightPanelMaximizedSignal)) {
        store.set(rightPanelMaximizedSignal, false);
      }
      if (store.get(reviewFileTreeOpenSignal)) {
        setReviewFileTreeOpen(store, false);
      }
    }
    if (veryNarrowChanged && isVeryNarrow && store.get(sidebarOpenSignal)) {
      setSidebarOpen(store, false);
    }
  });
  const shellResizeRef = useResizeObserverRef((element: HTMLElement | null) => {
    const { width } = measureElementSize(element);
    handleShellResize({ width });
  });
  const mainContentResizeRef = useResizeObserverRef(
    (element: HTMLElement | null) => {
      const { width } = measureElementSize(element);
      setHeaderEdgeScrollWide(width >= getHeaderEdgeScrollThreshold());
    },
  );
  const mainContentHeightResizeRef = useResizeObserverRef(
    (element: HTMLElement | null, entry?: ResizeObserverEntry) => {
      const { height } = measureElementSize(element);
      mainContentHeight.set(height);
      store.set(
        mainContentMeasurementSignal,
        serializeMainContentMeasurement(entry),
      );
    },
  );
  const mainElementRef = useCallback(
    (element: HTMLElement | null) => {
      setMainElement(element);
      mainContentHeightResizeRef(element);
      if (element == null) store.set(mainContentMeasurementSignal, null);
    },
    [mainContentHeightResizeRef, store],
  );

  useMotionValueEvent(bottomPanelEffectiveHeight, "change", (value: number) => {
    const delta = value - previousBottomPanelHeightRef.current;
    previousBottomPanelHeightRef.current = value;
    if (delta === 0) return;
    for (const subscriber of bottomPanelHeightSubscribersRef.current) {
      subscriber(delta);
    }
  });

  return (
    <appShellRefContext.Provider value={shellElementRef}>
      <appShellElementContext.Provider value={mainElement}>
        <appShellBottomPanelHeightSubscriberContext.Provider
          value={subscribeBottomPanelHeight}
        >
          <appShellLayoutContext.Provider value={layoutValue}>
            <AppShellPortalRoot />
            <Motion.div
              ref={shellElementRef}
              style={shellStyle}
              className="relative flex flex-col"
              onBlurCapture={(event) => {
                const stayedInside =
                  event.relatedTarget instanceof Node &&
                  event.currentTarget.contains(event.relatedTarget);
                if (stayedInside) return;
                if (event.relatedTarget != null) {
                  setActiveAppShellFocusArea(
                    store,
                    resolveFocusAreaFromElement(event.relatedTarget),
                  );
                }
                setTerminalFocused(store, false);
              }}
              onFocusCapture={(event) => {
                setActiveAppShellFocusArea(
                  store,
                  resolveFocusAreaFromElement(event.target),
                );
                setTerminalFocused(store, isTerminalElement(event.target));
              }}
              onPointerOverCapture={(event) => {
                setHoveredAppShellFocusArea(
                  store,
                  resolveFocusAreaFromElement(event.target),
                );
              }}
            >
              {isApplicationMenuBarEnabled && <ApplicationMenuTopBar />}
              {hasLeftPanel &&
                !isSidebarOpen &&
                !isLeftPanelResizing &&
                !isMounted && (
                  <FloatingLeftPanel
                    floatingLeftPanelWidth={floatingLeftPanelWidth}
                    isApplicationMenuBarEnabled={isApplicationMenuBarEnabled}
                    isVisible={
                      isFloatingLeftPanelVisible && !isSidebarOpen && !isMounted
                    }
                    leftPanelWidth={leftPanelWidth}
                    leftPanel={leftPanelContent}
                    shouldUseReducedMotion={shouldUseReducedMotion}
                    onOpenSidebar={() => {
                      setSidebarOpen(store, true, { animate: false });
                    }}
                  />
                )}
              <div
                ref={shellResizeRef}
                className="relative isolate flex max-h-full min-h-0 w-full flex-1"
              >
                <AnimatePresence initial={false}>
                  {hasLeftPanel &&
                    (isLeftPanelDocked || isMounted || isLeftPanelResizing) && (
                      <LeftPanel
                        key="app-shell-left-panel"
                        isResizing={isLeftPanelResizing}
                        onResizingChange={setLeftPanelResizing}
                        paddingTop={
                          isApplicationMenuBarEnabled
                            ? "0px"
                            : "var(--height-toolbar)"
                        }
                      >
                        {leftPanelContent}
                      </LeftPanel>
                    )}
                </AnimatePresence>
                <main
                  ref={mainElementRef}
                  className={clsx(
                    "relative isolate flex min-h-0 flex-1 flex-col",
                    "main-surface",
                  )}
                >
                  <AppShellTabDragAndDropContext>
                    <AppShellHeader
                      isHeaderEdgeScroll={isHeaderEdgeScroll}
                      isApplicationMenuBarEnabled={isApplicationMenuBarEnabled}
                    />
                    <div className="relative isolate flex min-h-0 flex-1 overflow-hidden">
                      <div
                        data-app-shell-main-content-layout={mainContentLayout}
                        ref={mainContentResizeRef}
                        className={clsx(
                          "app-shell-main-content-viewport relative flex min-h-0 min-w-0 flex-col",
                          isRightPanelFullWidth
                            ? "w-0 flex-none overflow-hidden"
                            : "flex-1",
                        )}
                      >
                        <div
                          className={clsx(
                            "app-shell-main-content-frame relative mt-(--app-shell-main-content-frame-top-offset) flex min-h-0 flex-1 flex-col border-t-[0.5px]",
                            hasRightPanel ||
                              (isEdgeScrollLayout && !isHeaderEdgeScroll)
                              ? "border-token-border-light"
                              : "border-transparent",
                          )}
                        >
                          <div className="relative flex min-h-0 flex-1">
                            <div
                              aria-hidden
                              data-app-shell-main-content-top-fade={topFadeMode}
                              className="app-shell-main-content-top-fade pointer-events-none absolute inset-x-0 top-0 z-20 h-4 bg-gradient-to-b from-token-main-surface-primary opacity-0 transition-opacity duration-200 browser:hidden"
                            />
                            <div className="h-full min-h-0 min-w-0 flex-1">
                              {children}
                            </div>
                          </div>
                        </div>
                      </div>
                      <RightPanel
                        key={`right-panel:${route.value.clientThreadId}`}
                        isRightPanelOpen={hasRightPanel}
                        mainContentWidth={mainContentWidth}
                        rightPanelWidth={rightPanelWidth}
                        rightPanelWidthRatio={rightPanelWidthRatio}
                        widthMode={widthMode}
                      >
                        {rightPanelSlot?.children}
                      </RightPanel>
                    </div>
                    <BottomPanel
                      bottomPanelHeight={bottomPanelHeight}
                      clampedBottomPanelHeight={clampedBottomPanelHeight}
                      mainContentHeight={mainContentHeight}
                      isVisible={hasBottomPanel}
                    >
                      <BottomPanelOutletContent />
                    </BottomPanel>
                  </AppShellTabDragAndDropContext>
                </main>
              </div>
            </Motion.div>
          </appShellLayoutContext.Provider>
        </appShellBottomPanelHeightSubscriberContext.Provider>
      </appShellElementContext.Provider>
    </appShellRefContext.Provider>
  );
}
