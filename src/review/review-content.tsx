// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Top-level review panel content switch: chooses between error, loading, the live diffs
// view, the staged/unstaged empty state, or the generic empty state, and offers a
// "View branch diff" shortcut when a branch diff is available.

import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  useStore,
  useAtomValue,
  routeAtom,
  reviewBranchDiffAvailableAtom,
  reviewHasDiffsAtom,
  isReviewLoadingAtom,
  reviewErrorAtom,
  reviewGitActionsAllowedAtom,
  ReviewErrorState,
  ReviewLoadingState,
  ReviewStagedEmptyState,
  ReviewEmptyState,
} from "../boundaries/onboarding-commons-externals.facade";
import { reviewDiffFilterAtom, setReviewDiffFilter } from "./review-diff-model";
import { ReviewDiffsView } from "./review-diffs-view";

interface ReviewTabState {
  scrollTop?: number | null;
}

export interface ReviewContentProps {
  diffMode: "split" | "unified" | string;
  setTabState: (updater: (state: ReviewTabState) => ReviewTabState) => void;
  tabState: ReviewTabState;
}

export function ReviewContent({
  diffMode,
  setTabState,
  tabState,
}: ReviewContentProps) {
  const store = useStore(routeAtom);
  const reviewFilter = useAtomValue<string>(reviewDiffFilterAtom);
  const canViewBranchDiff = useAtomValue<boolean>(
    reviewBranchDiffAvailableAtom,
  );
  const hasReviewDiffs = useAtomValue<boolean>(reviewHasDiffsAtom);
  const isLoading = useAtomValue<boolean>(isReviewLoadingAtom);
  const isError = useAtomValue<boolean>(reviewErrorAtom);
  const gitActionsAllowed = useAtomValue<boolean>(reviewGitActionsAllowedAtom);

  const branchDiffAction = canViewBranchDiff ? (
    <Button
      color="secondary"
      size="toolbar"
      onClick={() => setReviewDiffFilter(store, "branch")}
    >
      <FormattedMessage
        id="codex.review.emptyState.viewBranchDiff"
        defaultMessage="View branch diff"
        description="Button label shown in review empty states when a branch diff is available"
      />
    </Button>
  ) : null;

  if (isError) {
    return <ReviewErrorState />;
  }
  if (isLoading) {
    return <ReviewLoadingState className="flex-1" />;
  }
  if (hasReviewDiffs) {
    return (
      <ReviewDiffsView
        diffMode={diffMode}
        setTabState={setTabState}
        tabState={tabState}
      />
    );
  }
  if (gitActionsAllowed) {
    const stageFilter = reviewFilter === "staged" ? "staged" : "unstaged";
    return (
      <ReviewStagedEmptyState
        actions={branchDiffAction}
        stageFilter={stageFilter}
      />
    );
  }
  return <ReviewEmptyState className="flex-1" actions={branchDiffAction} />;
}
