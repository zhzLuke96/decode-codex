// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the ordered list of review diff cards (one per changed file), honoring
// capped/find modes and per-file generated-path collapsing, plus the "load more
// matches" button shown when a capped find result is truncated.

import type { MutableRefObject } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  useStore,
  useAtomValue,
  routeAtom,
  workspaceRootAtom,
  reviewHostIdAtom,
  reviewSelectedPathAtom,
  reviewFindActiveAtom,
  reviewVisibleFileEntriesAtom,
  reviewCappedVisibleCountAtom,
  reviewGitMetadataQueryAtom,
  useReviewGeneratedPaths,
  loadMoreReviewMatches,
} from "../boundaries/onboarding-commons-externals.facade";
import { ReviewDiffCard } from "./review-diff-card";
import { reviewFileEntriesAtom } from "./review-file-entries";
import { useReviewExpandedDiffs } from "./review-expanded-diffs-provider";

export interface LoadMoreMatchesButtonProps {
  onClick: () => void;
}

export function LoadMoreMatchesButton({ onClick }: LoadMoreMatchesButtonProps) {
  return (
    <div className="flex items-center justify-center py-2">
      <Button color="secondary" size="default" onClick={onClick}>
        <FormattedMessage
          id="codex.review.find.loadMore"
          defaultMessage="Load more matches"
          description="Button to load more matching diffs while find is active in capped review mode"
        />
      </Button>
    </div>
  );
}

interface ReviewFileEntry {
  path: string;
  gitPath: string;
}

export interface ReviewDiffListProps {
  diffRefs: MutableRefObject<Map<string, Element>>;
  diffMode: "split" | "unified" | string;
  isCappedMode: boolean;
  reviewDiffMetrics: unknown;
  showReviewGitActions: boolean;
}

export function ReviewDiffList({
  diffRefs,
  diffMode,
  isCappedMode,
  reviewDiffMetrics,
  showReviewGitActions,
}: ReviewDiffListProps) {
  const store = useStore(routeAtom);
  const cwd = useAtomValue<string | null>(workspaceRootAtom);
  const hostId = useAtomValue<string>(reviewHostIdAtom);
  const selectedPath = useAtomValue<string | null>(reviewSelectedPathAtom);
  const isFindActive = useAtomValue<boolean>(reviewFindActiveAtom);
  const visibleEntries = useAtomValue<ReviewFileEntry[]>(
    reviewVisibleFileEntriesAtom,
  );
  const cappedVisibleCount = useAtomValue<number>(reviewCappedVisibleCountAtom);
  const { expandedDiffs } = useReviewExpandedDiffs();
  const allEntries = useAtomValue<ReviewFileEntry[]>(reviewFileEntriesAtom);
  const gitMetadata = useAtomValue<{
    data?: { commonDir?: string | null; root?: string | null };
  }>(reviewGitMetadataQueryAtom);
  const gitCommonDir = gitMetadata.data?.commonDir ?? null;
  const gitRoot = gitMetadata.data?.root ?? null;
  const gitPaths = allEntries.map(getGitPath);

  const { paths: generatedPaths } = useReviewGeneratedPaths({
    cwd,
    gitCommonDir,
    gitRoot,
    hostId,
    paths: gitPaths,
  });

  let entries = visibleEntries;
  if (isCappedMode && !isFindActive) {
    entries = [];
    if (selectedPath != null) {
      entries = allEntries.filter((entry) => entry.path === selectedPath);
    }
  }
  if (entries.length === 0) return null;

  const cards = entries.map((entry) => {
    const isCollapsedByGeneratedPath = generatedPaths.has(entry.gitPath);
    return (
      <ReviewDiffCard
        key={`${entry.path}:${isCollapsedByGeneratedPath ? "collapsed" : "open"}`}
        defaultOpen={expandedDiffs && !isCollapsedByGeneratedPath}
        diffMode={diffMode}
        diffRefs={diffRefs}
        isCappedMode={isCappedMode}
        path={entry.path}
        reviewDiffMetrics={reviewDiffMetrics}
        showReviewGitActions={showReviewGitActions}
        skipFindHighlight={isFindActive && selectedPath !== entry.path}
      />
    );
  });

  const loadMore =
    isCappedMode && isFindActive && entries.length < cappedVisibleCount ? (
      <LoadMoreMatchesButton onClick={() => loadMoreReviewMatches(store)} />
    ) : null;

  return (
    <>
      {cards}
      {loadMore}
    </>
  );
}

function getGitPath(entry: ReviewFileEntry): string {
  return entry.gitPath;
}
