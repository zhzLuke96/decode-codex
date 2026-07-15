// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Composes the review diffs surface: wires scroll-sync (disabled while find is active),
// mounts the headless search controller, and renders the scrollable diff container.

import { useAtomValue } from "../boundaries/onboarding-commons-externals.facade";
import {
  reviewVisibleFileEntriesAtom,
  reviewFindStateAtom,
  fileTreeOpenAtom,
  reviewExpandedAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { useReviewScrollSync } from "./use-review-scroll-sync";
import { ReviewSearchController } from "./review-search-controller";
import { ReviewDiffsScrollContainer } from "./review-diffs-scroll-container";

interface ReviewTabState {
  scrollTop?: number | null;
}

export interface ReviewDiffsViewProps {
  diffMode: "split" | "unified" | string;
  setTabState: (updater: (state: ReviewTabState) => ReviewTabState) => void;
  tabState: ReviewTabState;
}

export function ReviewDiffsView({
  diffMode,
  setTabState,
  tabState,
}: ReviewDiffsViewProps) {
  const fileEntries = useAtomValue<{ path: string }[]>(
    reviewVisibleFileEntriesAtom,
  );
  const findState = useAtomValue<{ active: boolean }>(reviewFindStateAtom);
  const isFileTreeOpen = useAtomValue<boolean>(fileTreeOpenAtom);
  const scrollSyncEnabled = !findState.active;

  const { diffRefs, scrollContainerRef, setSelectedPathWithoutScroll } =
    useReviewScrollSync({ fileEntries, scrollSyncEnabled });
  const isReviewExpanded = useAtomValue<boolean>(reviewExpandedAtom);

  const setScrollContainerRef = (element: HTMLElement | null) => {
    scrollContainerRef.current = element;
  };

  return (
    <>
      <ReviewSearchController
        diffRefs={diffRefs}
        scrollContainerRef={scrollContainerRef}
        setSelectedPathWithoutScroll={setSelectedPathWithoutScroll}
      />
      <ReviewDiffsScrollContainer
        diffMode={diffMode}
        diffRefs={diffRefs}
        isFileTreeOpen={isFileTreeOpen}
        isReviewExpanded={isReviewExpanded}
        setTabState={setTabState}
        setScrollContainerRef={setScrollContainerRef}
        tabState={tabState}
      />
    </>
  );
}
