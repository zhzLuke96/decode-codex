// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Highlight and selection rectangles for paged annotation overlays.

import type { CSSProperties } from "react";

import {
  ACCENT_BORDER_COLOR,
  ACCENT_FILL_COLOR,
  HIGHLIGHT_TRANSITION,
} from "./paged-annotation-overlay-constants";
import type { Rect, Size } from "./paged-annotation-overlay-geometry";

export interface AnnotationHighlightRectProps {
  bordered?: boolean;
  borderWidth?: number;
  paddingPx?: number;
  paddingX?: number;
  paddingY?: number;
  pageSize: Size;
  rect: Rect;
  testId?: string;
}

export function AnnotationHighlightRect({
  bordered,
  borderWidth,
  paddingPx = 0,
  paddingX,
  paddingY,
  pageSize,
  rect,
  testId,
}: AnnotationHighlightRectProps) {
  const resolvedBorderWidth =
    borderWidth === undefined ? (bordered ? 1 : 0) : borderWidth;
  const horizontalPadding = paddingX === undefined ? paddingPx : paddingX;
  const verticalPadding = paddingY === undefined ? paddingPx : paddingY;

  const heightPercent = (rect.height / pageSize.height) * 100;
  const leftPercent = (rect.x / pageSize.width) * 100;
  const topPercent = (rect.y / pageSize.height) * 100;
  const widthPercent = (rect.width / pageSize.width) * 100;

  const style: CSSProperties = {
    backgroundColor: ACCENT_FILL_COLOR,
    borderColor: ACCENT_BORDER_COLOR,
    borderStyle: "dashed",
    borderWidth: resolvedBorderWidth,
    height:
      verticalPadding === 0
        ? `${heightPercent}%`
        : `calc(${heightPercent}% + ${verticalPadding * 2}px)`,
    left:
      horizontalPadding === 0
        ? `${leftPercent}%`
        : `calc(${leftPercent}% - ${horizontalPadding}px)`,
    top:
      verticalPadding === 0
        ? `${topPercent}%`
        : `calc(${topPercent}% - ${verticalPadding}px)`,
    transition: HIGHLIGHT_TRANSITION,
    width:
      horizontalPadding === 0
        ? `${widthPercent}%`
        : `calc(${widthPercent}% + ${horizontalPadding * 2}px)`,
  };

  return (
    <div
      className="pointer-events-none absolute box-border rounded-[4px]"
      data-testid={testId}
      style={style}
    />
  );
}

export interface AnnotationSelectionRectProps {
  pageSize: Size;
  rect: Rect;
  testId?: string;
}

export function AnnotationSelectionRect({
  pageSize,
  rect,
  testId,
}: AnnotationSelectionRectProps) {
  const style: CSSProperties = {
    backgroundColor: ACCENT_FILL_COLOR,
    borderColor: ACCENT_BORDER_COLOR,
    borderStyle: "dashed",
    borderWidth: 2,
    height: `${(rect.height / pageSize.height) * 100}%`,
    left: `${(rect.x / pageSize.width) * 100}%`,
    top: `${(rect.y / pageSize.height) * 100}%`,
    width: `${(rect.width / pageSize.width) * 100}%`,
  };

  return (
    <div
      className="pointer-events-none absolute box-border shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]"
      data-testid={testId}
      style={style}
    />
  );
}
