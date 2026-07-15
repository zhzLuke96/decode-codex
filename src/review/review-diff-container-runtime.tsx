// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared review-diff container helpers: capped-mode footer, diff measurement
// aliases, metrics observer context, and the no-match placeholder.

import * as React from "react";
import { FormattedMessage } from "../vendor/react-intl";
import {
  LargeDiffBanner,
  LARGE_DIFF_BANNER_BOTTOM_INSET,
  computeReviewBottomInset,
  type ReviewBottomInsetParams,
} from "./large-diff-banner";
import {
  areDiffVirtualizationMetricsEqual,
  defaultDiffVirtualizationMetrics,
  readDiffVirtualizationMetrics,
  type DiffVirtualizationMetrics,
} from "./diff-virtualization-metrics";

export type ReviewDiffMetrics = DiffVirtualizationMetrics;

export const SECTION_ACTIONS_FEATURE_GATE = "2882842607";
export const reviewCollapsedBottomInset = LARGE_DIFF_BANNER_BOTTOM_INSET;

export const defaultReviewDiffMetrics = defaultDiffVirtualizationMetrics;
export const measureReviewDiffMetrics = readDiffVirtualizationMetrics;
export const areReviewDiffMetricsEqual = areDiffVirtualizationMetricsEqual;

export const reviewDiffStylesheet = `<style>
:host,.codex-review-diff-card{--diffs-font-fallback:"SF Mono",Monaco,Consolas,"Ubuntu Mono","Liberation Mono","Courier New",monospace;--diffs-header-font-fallback:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif;--diffs-font-family:var(--diffs-font-fallback);--diffs-header-font-family:var(--diffs-header-font-fallback);--diffs-font-size:13px;--diffs-line-height:20px;--diffs-gap-block:8px;--diffs-gap-inline:8px;color-scheme:light dark;}
[data-review-diff-metrics-probe]{font-family:var(--diffs-font-family);font-size:var(--diffs-font-size);line-height:var(--diffs-line-height);}
</style>`;

export type ReviewMetricsObserverListener = (
  element: HTMLElement | null,
) => void;

export class ReviewMetricsObserver {
  private scrollElement: HTMLElement | null = null;
  private readonly listeners = new Set<ReviewMetricsObserverListener>();

  setup(element: HTMLElement): void {
    this.scrollElement = element;
    this.emit();
  }

  cleanUp(): void {
    this.scrollElement = null;
    this.emit();
  }

  getScrollElement(): HTMLElement | null {
    return this.scrollElement;
  }

  subscribe(listener: ReviewMetricsObserverListener): () => void {
    this.listeners.add(listener);
    listener(this.scrollElement);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private emit(): void {
    for (const listener of this.listeners) {
      listener(this.scrollElement);
    }
  }
}

export const ReviewMetricsContext =
  React.createContext<ReviewMetricsObserver | null>(null);

export interface ReviewCappedFooterBarProps {
  bottomInset?: string;
}

export function ReviewCappedFooterBar({
  bottomInset,
}: ReviewCappedFooterBarProps): React.ReactElement {
  return <LargeDiffBanner bottomInset={bottomInset} />;
}

export function ReviewNoMatchesPlaceholder(): React.ReactElement {
  return (
    <div className="py-2 ps-2 pe-2 text-left text-base text-token-description-foreground">
      <FormattedMessage
        id="codex.review.fileSearch.empty"
        defaultMessage="No matching files"
        description="Empty state shown when the file filter hides all files in review"
      />
    </div>
  );
}

export function useReviewBottomPadding({
  isCappedMode,
  isReviewExpanded,
  showSectionActionButtons,
}: ReviewBottomInsetParams): string | undefined {
  return React.useMemo(
    () =>
      computeReviewBottomInset({
        isCappedMode,
        isReviewExpanded,
        showSectionActionButtons,
      }),
    [isCappedMode, isReviewExpanded, showSectionActionButtons],
  );
}
