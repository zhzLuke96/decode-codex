// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Geometry metrics used to estimate rendered diff heights for the review
// virtualizer: reads line-height / block spacing from a mounted diff element and
// compares metric snapshots for cheap memoization.

const DIFF_LINE_FONT_SIZE = 12;
const DIFF_LINE_HEIGHT_RATIO = 1.8;

export interface DiffVirtualizationMetrics {
  hunkLineCount: number;
  lineHeight: number;
  diffHeaderHeight: number;
  hunkSeparatorHeight: number;
  spacing: number;
  paddingTop?: number;
  paddingBottom?: number;
}

export const defaultDiffVirtualizationMetrics: DiffVirtualizationMetrics = {
  hunkLineCount: 50,
  lineHeight: DIFF_LINE_FONT_SIZE * DIFF_LINE_HEIGHT_RATIO,
  diffHeaderHeight: 0,
  hunkSeparatorHeight: 32,
  spacing: 0,
};

export function initDiffVirtualizationMetricsChunk(): void {}

export function readDiffVirtualizationMetrics(
  element: Element,
): DiffVirtualizationMetrics {
  const style = window.getComputedStyle(element);
  return {
    ...defaultDiffVirtualizationMetrics,
    lineHeight: parsePixelValue(
      style.lineHeight,
      defaultDiffVirtualizationMetrics.lineHeight,
    ),
    spacing: parsePixelValue(
      style.getPropertyValue("--diffs-gap-block"),
      defaultDiffVirtualizationMetrics.spacing,
    ),
  };
}

export function areDiffVirtualizationMetricsEqual(
  a: DiffVirtualizationMetrics,
  b: DiffVirtualizationMetrics,
): boolean {
  return (
    a.hunkLineCount === b.hunkLineCount &&
    a.lineHeight === b.lineHeight &&
    a.diffHeaderHeight === b.diffHeaderHeight &&
    a.hunkSeparatorHeight === b.hunkSeparatorHeight &&
    a.spacing === b.spacing &&
    a.paddingTop === b.paddingTop &&
    a.paddingBottom === b.paddingBottom
  );
}

export function parsePixelValue(value: string, fallback: number): number {
  const trimmed = value.trim();
  if (trimmed === "0") return 0;
  if (!trimmed.endsWith("px")) return fallback;
  const parsed = Number.parseFloat(trimmed.slice(0, -2));
  return Number.isFinite(parsed) ? parsed : fallback;
}
