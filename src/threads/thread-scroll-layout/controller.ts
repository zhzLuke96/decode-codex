// Restored from ref/webview/assets/thread-scroll-layout-BNp7nttn.js
// Controller hook for the thread scroll layout restored from the Codex webview bundle.
import React from "react";
import { AppShellBottomPanelScrollSync } from "../../app-shell/app-shell-bottom-panel-scroll-sync";
import { getResizeObserverEntrySize } from "../../utils/get-resize-observer-entry-size";
import type {
  ScrollDistanceListener,
  ThreadScrollController,
  UserScrollListener,
} from "./scroll-controller-context";
import type {
  BottomPanelScrollSync,
  PendingScrollPreservation,
  ThreadScrollLayoutProps,
} from "./types";
import {
  getDistanceFromBottom,
  getDistanceToTop,
  isAtTopLoadMoreThreshold,
  isScrolledToBottom,
  normalizeWheelDelta,
  SCROLL_TO_BOTTOM_DURATION_MS,
  SCROLLED_FROM_BOTTOM_THRESHOLD_PX,
  setDistanceFromBottom,
  USER_SCROLL_LISTENER_WINDOW_MS,
} from "./utils";
import { useResizeObserverRef } from "../../utils/use-resize-observer";
import { useStableCallback } from "../../utils/use-stable-callback";

type UseThreadScrollLayoutControllerOptions = Pick<
  ThreadScrollLayoutProps,
  "onScroll" | "onUserScrollToTop" | "ref"
> & {
  initialOffset: number;
};

type UseThreadScrollLayoutControllerResult = {
  controller: ThreadScrollController;
  footerResizeRef: (element: HTMLDivElement | null) => void;
  setScrollElement: (element: HTMLDivElement | null) => void | (() => void);
};

export function useThreadScrollLayoutController({
  initialOffset,
  onScroll,
  onUserScrollToTop,
  ref,
}: UseThreadScrollLayoutControllerOptions): UseThreadScrollLayoutControllerResult {
  const scrollElementRef = React.useRef<HTMLDivElement | null>(null);
  const footerHeightRef = React.useRef<number | null>(null);
  const lastDistanceFromBottomRef = React.useRef(initialOffset ?? 0);
  const scrollListenersRef = React.useRef(new Set<ScrollDistanceListener>());
  const userScrollListenersRef = React.useRef(new Set<UserScrollListener>());
  const userScrollStartedAtRef = React.useRef<number | null>(null);
  const scrollTopLoadRunningRef = React.useRef(false);
  const programmaticScrollRef = React.useRef(false);
  const footerResizeViewportPreserveDisabledRef = React.useRef(false);
  const pendingScrollPreservationRef =
    React.useRef<PendingScrollPreservation | null>(null);
  const scrollAnimationFrameRef = React.useRef<number | null>(null);
  const [isScrolledFromBottom, setIsScrolledFromBottom] = React.useState(false);
  const bottomPanelScrollSync = React.useContext(
    AppShellBottomPanelScrollSync,
  ) as BottomPanelScrollSync | null;

  const setScrollElement = React.useCallback(
    (element: HTMLDivElement | null) => {
      scrollElementRef.current = element;
      if (element == null || bottomPanelScrollSync == null) return undefined;
      return bottomPanelScrollSync((deltaPx) => {
        if (!programmaticScrollRef.current && !isScrolledToBottom(element)) {
          setDistanceFromBottom(
            element,
            getDistanceFromBottom(element) + deltaPx,
          );
        }
      });
    },
    [bottomPanelScrollSync],
  );

  const getScrollElement = useStableCallback(() => scrollElementRef.current);

  const getLastScrollDistanceFromBottomPx = useStableCallback(
    () => lastDistanceFromBottomRef.current,
  );

  const addScrollListener = useStableCallback(
    (listener: ScrollDistanceListener) => {
      scrollListenersRef.current.add(listener);
      listener(lastDistanceFromBottomRef.current);
      return () => {
        scrollListenersRef.current.delete(listener);
      };
    },
  );

  const addUserScrollListener = useStableCallback(
    (listener: UserScrollListener) => {
      userScrollListenersRef.current.add(listener);
      return () => {
        userScrollListenersRef.current.delete(listener);
      };
    },
  );

  const updateDistanceFromBottom = useStableCallback(
    (distanceFromBottomPx: number) => {
      lastDistanceFromBottomRef.current = distanceFromBottomPx;
      const isAtBottom =
        distanceFromBottomPx <= SCROLLED_FROM_BOTTOM_THRESHOLD_PX;
      onScroll?.(distanceFromBottomPx, isAtBottom);
      for (const listener of scrollListenersRef.current) {
        listener(distanceFromBottomPx);
      }
      setIsScrolledFromBottom(!isAtBottom);
    },
  );

  const cancelProgrammaticScroll = useStableCallback(() => {
    programmaticScrollRef.current = false;
    if (scrollAnimationFrameRef.current != null) {
      window.cancelAnimationFrame(scrollAnimationFrameRef.current);
      scrollAnimationFrameRef.current = null;
    }
  });

  const startProgrammaticScroll = useStableCallback(() => {
    programmaticScrollRef.current = true;
    if (scrollAnimationFrameRef.current != null) {
      window.cancelAnimationFrame(scrollAnimationFrameRef.current);
      scrollAnimationFrameRef.current = null;
    }
  });

  const clearPendingScrollPreservation = useStableCallback(() => {
    pendingScrollPreservationRef.current = null;
  });

  const scrollToResolvedDistanceFromBottom = useStableCallback(
    (
      behavior: ScrollBehavior,
      resolveDistance: (element: HTMLDivElement) => number,
    ) => {
      const element = scrollElementRef.current;
      if (element == null) return;
      clearPendingScrollPreservation();
      const distanceFromBottomPx = Math.max(0, resolveDistance(element));
      element.scrollTo({
        behavior,
        top: distanceFromBottomPx === 0 ? 0 : -distanceFromBottomPx,
      });
      updateDistanceFromBottom(distanceFromBottomPx);
    },
  );

  const scrollToDistanceFromBottomPx = useStableCallback(
    (distanceFromBottomPx: number, behavior: ScrollBehavior) => {
      if (distanceFromBottomPx > SCROLLED_FROM_BOTTOM_THRESHOLD_PX) {
        cancelProgrammaticScroll();
      }
      scrollToResolvedDistanceFromBottom(behavior, () => distanceFromBottomPx);
    },
  );

  const setFooterResizeViewportPreserveDisabled = useStableCallback(
    (disabled: boolean) => {
      footerResizeViewportPreserveDisabledRef.current = disabled;
    },
  );

  const preserveScrollPositionForNextLayout = useStableCallback(() => {
    const element = scrollElementRef.current;
    if (element == null || pendingScrollPreservationRef.current != null) return;

    const preservation: PendingScrollPreservation = {
      distanceFromBottomPx: lastDistanceFromBottomRef.current,
      scrollHeightPx: element.scrollHeight,
      wheelDistanceFromBottomPx: 0,
    };
    pendingScrollPreservationRef.current = preservation;

    window.requestAnimationFrame(() => {
      if (pendingScrollPreservationRef.current !== preservation) return;
      if (scrollElementRef.current !== element) {
        clearPendingScrollPreservation();
        return;
      }
      if (element.scrollHeight === preservation.scrollHeightPx) {
        clearPendingScrollPreservation();
        return;
      }
      scrollToResolvedDistanceFromBottom(
        "instant",
        () =>
          preservation.distanceFromBottomPx +
          preservation.wheelDistanceFromBottomPx,
      );
    });
  });

  const loadMoreFromTop = useStableCallback(async () => {
    if (scrollTopLoadRunningRef.current || onUserScrollToTop == null) return;
    scrollTopLoadRunningRef.current = true;
    try {
      while (
        scrollElementRef.current != null &&
        isAtTopLoadMoreThreshold(scrollElementRef.current)
      ) {
        const result = await onUserScrollToTop();
        if (result === "stop") break;
      }
    } catch {
      // The bundle deliberately ignores load-more failures here; callers own
      // their retry or error presentation.
    } finally {
      scrollTopLoadRunningRef.current = false;
    }
  });

  const scrollToBottom = useStableCallback(() => {
    const element = scrollElementRef.current;
    if (element == null) return;
    clearPendingScrollPreservation();
    const startDistance = getDistanceFromBottom(element);
    if (startDistance <= SCROLLED_FROM_BOTTOM_THRESHOLD_PX) {
      scrollToResolvedDistanceFromBottom("instant", () => 0);
      cancelProgrammaticScroll();
      return;
    }
    startProgrammaticScroll();
    const startedAt = performance.now();
    const tick = (now: number) => {
      const currentElement = scrollElementRef.current;
      if (currentElement == null) {
        cancelProgrammaticScroll();
        return;
      }
      const progress = Math.min(
        1,
        (now - startedAt) / SCROLL_TO_BOTTOM_DURATION_MS,
      );
      setDistanceFromBottom(
        currentElement,
        startDistance * (1 - (1 - progress) ** 3),
      );
      if (progress < 1 && !isScrolledToBottom(currentElement)) {
        scrollAnimationFrameRef.current = window.requestAnimationFrame(tick);
        return;
      }
      setDistanceFromBottom(currentElement, 0);
      cancelProgrammaticScroll();
    };
    scrollAnimationFrameRef.current = window.requestAnimationFrame(tick);
  });

  React.useLayoutEffect(() => {
    const element = scrollElementRef.current;
    if (element == null) return;
    const distanceFromBottomPx = initialOffset ?? 0;
    setDistanceFromBottom(element, distanceFromBottomPx);
    updateDistanceFromBottom(distanceFromBottomPx);
  }, [initialOffset, updateDistanceFromBottom]);

  React.useEffect(() => {
    const element = scrollElementRef.current;
    if (element == null) return;

    const syncScrollDistance = () => {
      const distanceFromBottomPx = getDistanceFromBottom(element);
      if (distanceFromBottomPx <= SCROLLED_FROM_BOTTOM_THRESHOLD_PX) {
        cancelProgrammaticScroll();
      }
      updateDistanceFromBottom(distanceFromBottomPx);
    };

    const restorePendingPreservationIfNeeded = () => {
      const preservation = pendingScrollPreservationRef.current;
      if (
        preservation == null ||
        element.scrollHeight === preservation.scrollHeightPx
      ) {
        return;
      }
      clearPendingScrollPreservation();
      setDistanceFromBottom(
        element,
        preservation.distanceFromBottomPx +
          preservation.wheelDistanceFromBottomPx,
      );
    };

    const notifyUserScroll = () => {
      restorePendingPreservationIfNeeded();
      const previousDistance = lastDistanceFromBottomRef.current;
      const lastUserScrollAt = userScrollStartedAtRef.current;

      if (lastUserScrollAt == null) {
        syncScrollDistance();
        return;
      }

      const now = performance.now();
      if (now - lastUserScrollAt > USER_SCROLL_LISTENER_WINDOW_MS) {
        userScrollStartedAtRef.current = null;
        syncScrollDistance();
        return;
      }

      syncScrollDistance();
      userScrollStartedAtRef.current = now;
      const distanceFromBottomPx = getDistanceFromBottom(element);
      if (
        distanceFromBottomPx > previousDistance &&
        isAtTopLoadMoreThreshold(element)
      ) {
        loadMoreFromTop();
      }
      for (const listener of userScrollListenersRef.current) {
        listener(distanceFromBottomPx, previousDistance);
      }
    };

    const markUserScrollStarted = (event: WheelEvent | PointerEvent) => {
      const preservation = pendingScrollPreservationRef.current;
      if (preservation != null && "deltaY" in event) {
        preservation.wheelDistanceFromBottomPx -= normalizeWheelDelta(
          event,
          element.clientHeight,
        );
      } else {
        clearPendingScrollPreservation();
      }

      if (
        "deltaY" in event &&
        event.deltaY < 0 &&
        getDistanceToTop(element) <= 0
      ) {
        loadMoreFromTop();
      }

      userScrollStartedAtRef.current = performance.now();
      cancelProgrammaticScroll();
    };

    element.addEventListener("pointerdown", markUserScrollStarted, {
      passive: true,
    });
    element.addEventListener("wheel", markUserScrollStarted, {
      passive: true,
    });
    element.addEventListener("scroll", notifyUserScroll, {
      passive: true,
    });
    return () => {
      element.removeEventListener("pointerdown", markUserScrollStarted);
      element.removeEventListener("wheel", markUserScrollStarted);
      element.removeEventListener("scroll", notifyUserScroll);
    };
  }, [
    cancelProgrammaticScroll,
    clearPendingScrollPreservation,
    loadMoreFromTop,
    updateDistanceFromBottom,
  ]);

  React.useEffect(
    () => () => {
      cancelProgrammaticScroll();
    },
    [cancelProgrammaticScroll],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      scrollToBottom,
    }),
    [scrollToBottom],
  );

  const controller = React.useMemo<ThreadScrollController>(
    () => ({
      addScrollListener,
      addUserScrollListener,
      getLastScrollDistanceFromBottomPx,
      getScrollElement,
      isScrolledFromBottom,
      preserveScrollPositionForNextLayout,
      scrollToBottom,
      scrollToDistanceFromBottomPx,
      setFooterResizeViewportPreserveDisabled,
    }),
    [
      addScrollListener,
      addUserScrollListener,
      getLastScrollDistanceFromBottomPx,
      getScrollElement,
      isScrolledFromBottom,
      preserveScrollPositionForNextLayout,
      scrollToBottom,
      scrollToDistanceFromBottomPx,
      setFooterResizeViewportPreserveDisabled,
    ],
  );

  const footerResizeRef = useResizeObserverRef((entry) => {
    const { height } = getResizeObserverEntrySize(entry);
    const element = scrollElementRef.current;
    if (element == null) return;
    const previousHeight = footerHeightRef.current;
    if (previousHeight === height) return;
    element.style.setProperty(
      "--thread-scroll-padding-bottom",
      `${height + 16}px`,
    );
    footerHeightRef.current = height;
    if (
      !programmaticScrollRef.current &&
      !footerResizeViewportPreserveDisabledRef.current &&
      previousHeight != null &&
      !isScrolledToBottom(element)
    ) {
      scrollToResolvedDistanceFromBottom(
        "instant",
        (currentElement) =>
          getDistanceFromBottom(currentElement) + height - previousHeight,
      );
    }
  });

  return {
    controller,
    footerResizeRef,
    setScrollElement,
  };
}
