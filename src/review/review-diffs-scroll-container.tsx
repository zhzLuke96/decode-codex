// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scrollable container for the review diff list: owns the scroll element, syncs its
// scrollTop with persisted tab state, measures per-line diff metrics via a hidden
// probe + resize observer, provides them through context, and renders the diff list
// (or capped/empty placeholders) plus the capped-mode footer bar.

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { MutableRefObject } from "react";
import { classNames } from "../utils/class-names";
import {
  useAtomValue,
  useFeatureGate,
  useUniqueId,
  useResizeObserver,
  reviewSelectedPathAtom,
  reviewFindActiveAtom,
  reviewCappedModeAtom,
  reviewHasDiffsAtom,
  reviewGitActionsAllowedAtom,
  reviewTestIds,
  reviewDiffStylesheet,
  defaultReviewDiffMetrics,
  reviewExpandedBottomInset,
  reviewCollapsedBottomInset,
  measureReviewDiffMetrics,
  areReviewDiffMetricsEqual,
  useReviewBottomPadding,
  ReviewMetricsContext,
  ReviewMetricsObserver,
  ReviewNoMatchesPlaceholder,
  ReviewCappedFooterBar,
  SECTION_ACTIONS_FEATURE_GATE,
} from "../boundaries/onboarding-commons-externals.facade";
import { ReviewDiffList } from "./review-diff-list";

interface ReviewTabState {
  scrollTop?: number | null;
}

export interface ReviewDiffsScrollContainerProps {
  diffMode: "split" | "unified" | string;
  diffRefs: MutableRefObject<Map<string, Element>>;
  isFileTreeOpen: boolean;
  isReviewExpanded: boolean;
  setTabState: (updater: (state: ReviewTabState) => ReviewTabState) => void;
  setScrollContainerRef: (element: HTMLElement | null) => void;
  tabState: ReviewTabState;
}

export function ReviewDiffsScrollContainer({
  diffMode,
  diffRefs,
  isFileTreeOpen,
  isReviewExpanded,
  setTabState,
  setScrollContainerRef,
  tabState,
}: ReviewDiffsScrollContainerProps) {
  const sectionActionsGateEnabled = useFeatureGate(
    SECTION_ACTIONS_FEATURE_GATE,
  );
  const selectedPath = useAtomValue<string | null>(reviewSelectedPathAtom);
  const isFindActive = useAtomValue<boolean>(reviewFindActiveAtom);
  const isCappedMode = useAtomValue<boolean>(reviewCappedModeAtom);
  const hasReviewDiffs = useAtomValue<boolean>(reviewHasDiffsAtom);
  const gitActionsAllowed = useAtomValue<boolean>(reviewGitActionsAllowedAtom);
  const [metricsObserver] = useState(() => new ReviewMetricsObserver());
  const probeKey = useUniqueId();
  const [reviewDiffMetrics, setReviewDiffMetrics] = useState(
    defaultReviewDiffMetrics,
  );
  const showReviewGitActions = sectionActionsGateEnabled && gitActionsAllowed;
  const showSectionActionButtons = showReviewGitActions && hasReviewDiffs;
  const bottomInset = isReviewExpanded
    ? reviewExpandedBottomInset
    : reviewCollapsedBottomInset;
  const bottomPadding = useReviewBottomPadding({
    isCappedMode,
    isReviewExpanded,
    showSectionActionButtons,
  });
  const appliedScrollElementRef = useRef<HTMLElement | null>(null);
  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);

  const measureMetrics = useCallback((element: Element | null) => {
    if (element == null) return;
    const measured = measureReviewDiffMetrics(element);
    setReviewDiffMetrics((previous) =>
      areReviewDiffMetricsEqual(previous, measured) ? previous : measured,
    );
  }, []);

  const observeProbe = useResizeObserver(
    (_entry: unknown, element: Element) => {
      measureMetrics(element);
    },
  );

  const assignProbeRef = useCallback(
    (element: Element | null) => {
      observeProbe(element);
      measureMetrics(element);
    },
    [observeProbe, measureMetrics],
  );

  const assignScrollRef = useCallback(
    (element: HTMLElement | null) => {
      setScrollContainerRef(element);
      setScrollElement(element);
      if (element != null) {
        metricsObserver.setup(element);
        return;
      }
      metricsObserver.cleanUp();
    },
    [setScrollContainerRef, metricsObserver],
  );

  useLayoutEffect(() => {
    if (
      scrollElement == null ||
      tabState.scrollTop == null ||
      appliedScrollElementRef.current === scrollElement
    ) {
      return;
    }
    scrollElement.scrollTop = tabState.scrollTop;
    appliedScrollElementRef.current = scrollElement;
  }, [scrollElement, tabState.scrollTop]);

  useEffect(() => {
    if (scrollElement == null) return;
    const handleScroll = () => {
      const scrollTop = scrollElement.scrollTop;
      setTabState((state) =>
        Object.is(state.scrollTop, scrollTop) ? state : { ...state, scrollTop },
      );
    };
    scrollElement.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [scrollElement, setTabState]);

  return (
    <ReviewMetricsContext.Provider value={metricsObserver}>
      <div className="relative flex h-full min-w-0 flex-1">
        <span
          aria-hidden={true}
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: reviewDiffStylesheet }}
        />
        <div
          id={`review-diffs-${isFileTreeOpen ? "open" : "collapsed"}`}
          ref={assignScrollRef}
          {...reviewTestIds.reviewScroll}
          data-thread-find-target="review"
          className={classNames(
            "electron:bg-token-main-surface-primary flex h-full min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto",
            bottomPadding == null &&
              (showSectionActionButtons ? "pb-8" : "pb-3"),
          )}
          style={
            bottomPadding == null ? undefined : { paddingBottom: bottomPadding }
          }
        >
          <div
            className={classNames(
              "flex w-full flex-col extension:pl-4",
              isFileTreeOpen ? "extension:pr-1" : "extension:pr-3",
            )}
          >
            <span
              key={probeKey}
              ref={assignProbeRef}
              aria-hidden={true}
              data-review-diff-metrics-probe=""
              className="pointer-events-none invisible absolute top-0 left-0 block whitespace-pre"
              style={{
                fontFamily: "var(--diffs-font-family)",
                fontSize: "var(--diffs-font-size)",
                height: "var(--diffs-line-height)",
                lineHeight: "var(--diffs-line-height)",
              }}
            />
            <div className="flex flex-col extension:gap-2">
              {isCappedMode && !isFindActive && selectedPath == null ? (
                <ReviewNoMatchesPlaceholder />
              ) : (
                <ReviewDiffList
                  diffRefs={diffRefs}
                  diffMode={diffMode}
                  isCappedMode={isCappedMode}
                  reviewDiffMetrics={reviewDiffMetrics}
                  showReviewGitActions={showReviewGitActions}
                />
              )}
            </div>
          </div>
        </div>
        {isCappedMode ? (
          <ReviewCappedFooterBar bottomInset={bottomInset} />
        ) : null}
      </div>
    </ReviewMetricsContext.Provider>
  );
}
