// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review diff metrics state: branch mode can use summary counts directly, while
// index/commit modes fall back to the lighter diff-stats query.
import {
  createComputedAtom,
  threadAtomScope,
} from "../boundaries/onboarding-commons-externals.facade";
import { reviewDiffFilterAtom } from "./review-diff-model";
import {
  isReviewDiffEnabledAtom,
  reviewLocationKindAtom,
} from "./review-diff-mode-atoms";
import {
  reviewDiffStatsAtom,
  reviewSummaryAtom,
} from "./review-summary-query-atoms";
import { reviewDiffTargetParsedAtom } from "./review-file-diff-query";
import type {
  ComputedAtomContext,
  ReviewDiffMetrics,
  ReviewDiffMetricsState,
} from "./review-diff-store-types";

interface ReviewSummarySuccess {
  type: "success";
  files: Array<{
    additions?: number;
    deletions?: number;
  }>;
}

interface ReviewDiffStatsData {
  additions: number;
  deletions: number;
  fileCount: number;
}

interface ReviewSelectedDiff {
  diff?: Array<{
    additions?: number;
    deletions?: number;
  }> | null;
  diffText?: string | null;
}

export function buildReviewDiffMetrics(
  additions: number,
  deletions: number,
  fileCount: number,
  bytesEstimate: number = 0,
): ReviewDiffMetrics {
  return {
    additions,
    bytesEstimate,
    deletions,
    fileCount,
    lineCount: additions + deletions,
  };
}

export function buildMetricsFromReviewSummary(
  summary: ReviewSummarySuccess,
): ReviewDiffMetrics {
  let additions = 0;
  let deletions = 0;
  for (const file of summary.files) {
    additions += file.additions ?? 0;
    deletions += file.deletions ?? 0;
  }
  return buildReviewDiffMetrics(additions, deletions, summary.files.length);
}

export function buildMetricsFromDiffStats(
  stats: ReviewDiffStatsData | null | undefined,
): ReviewDiffMetrics | null {
  return stats == null
    ? null
    : buildReviewDiffMetrics(stats.additions, stats.deletions, stats.fileCount);
}

export function buildMetricsFromSelectedDiff(
  selectedDiff: ReviewSelectedDiff,
): ReviewDiffMetrics {
  const diffFiles = selectedDiff.diff ?? [];
  let additions = 0;
  let deletions = 0;
  for (const file of diffFiles) {
    additions += file.additions ?? 0;
    deletions += file.deletions ?? 0;
  }
  return buildReviewDiffMetrics(
    additions,
    deletions,
    diffFiles.length,
    selectedDiff.diffText?.length ?? 0,
  );
}

export function buildReviewSnapshotMetrics({
  reviewSummary,
  selectedDiff,
  shouldFetchReviewSummary,
}: {
  reviewSummary: unknown;
  selectedDiff: ReviewSelectedDiff;
  shouldFetchReviewSummary: boolean;
}): ReviewDiffMetrics {
  if (
    shouldFetchReviewSummary &&
    (reviewSummary as ReviewSummarySuccess | null | undefined)?.type ===
      "success"
  ) {
    return buildMetricsFromReviewSummary(reviewSummary as ReviewSummarySuccess);
  }
  return buildMetricsFromSelectedDiff(selectedDiff);
}

export const reviewDiffMetricsAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): ReviewDiffMetricsState => {
    if (get(reviewLocationKindAtom) === "cloud")
      return { isLoading: false, metrics: null };

    if (get(reviewDiffFilterAtom) === "branch") {
      const summaryQuery = get(reviewSummaryAtom);
      const summary = summaryQuery.data;
      if (summary?.type === "success") {
        return {
          isLoading: false,
          metrics: buildMetricsFromReviewSummary(summary),
        };
      }
      if (
        get(isReviewDiffEnabledAtom) &&
        !summaryQuery.isError &&
        (summaryQuery.isFetching || summaryQuery.isPending)
      ) {
        return { isLoading: true, metrics: null };
      }
    }

    const statsQuery = get(reviewDiffStatsAtom);
    const metrics = buildMetricsFromDiffStats(statsQuery.data);
    return metrics == null
      ? { isLoading: statsQuery.isFetching, metrics: null }
      : { isLoading: false, metrics };
  },
);

export const reviewSnapshotMetricsAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): ReviewDiffMetrics => {
    if (
      get(reviewLocationKindAtom) !== "cloud" &&
      get(reviewDiffFilterAtom) === "branch"
    ) {
      const metricsState = get(reviewDiffMetricsAtom);
      if (metricsState.metrics != null) return metricsState.metrics;
    }

    const shouldFetchReviewSummary = get(isReviewDiffEnabledAtom);
    return buildReviewSnapshotMetrics({
      reviewSummary: get(reviewSummaryAtom).data,
      selectedDiff: shouldFetchReviewSummary
        ? { diff: null, diffText: null }
        : get(reviewDiffTargetParsedAtom),
      shouldFetchReviewSummary,
    });
  },
);

export function initReviewDiffMetricsChunk(): void {
  void reviewDiffMetricsAtom;
  void reviewSnapshotMetricsAtom;
}
