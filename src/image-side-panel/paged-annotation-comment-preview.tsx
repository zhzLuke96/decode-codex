// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Comment preview bubble for paged annotation overlays.

import { useState } from "react";
import type { CSSProperties } from "react";

import { parseCommentBody } from "../boundaries/onboarding-commons-externals.facade";
import {
  MARKER_SIZE,
  PREVIEW_BACKGROUND,
  PREVIEW_BORDER,
  PREVIEW_FOREGROUND,
  PREVIEW_HEIGHT,
  PREVIEW_MAX_WIDTH,
} from "./paged-annotation-overlay-constants";
import {
  clamp,
  measureElement,
  type Point,
  type Size,
} from "./paged-annotation-overlay-geometry";

interface CommentPreviewPositionArgs {
  layer: HTMLElement | null;
  pageSize: Size;
  point: Point;
  previewWidth: number;
}

function computeCommentPreviewPosition({
  layer,
  pageSize,
  point,
  previewWidth,
}: CommentPreviewPositionArgs): CSSProperties | null {
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const { height, width } = measureElement(layer);
  const anchorX = (point.x / pageSize.width) * width;
  const anchorY = (point.y / pageSize.height) * height;
  const maxWidth = Math.min(PREVIEW_MAX_WIDTH, Math.max(1, width - 32));
  const verticalGap = MARKER_SIZE / 2 + 12;
  const halfWidth =
    (previewWidth === 0 ? maxWidth : Math.min(previewWidth, maxWidth)) / 2;
  const left = clamp(
    anchorX,
    16 + halfWidth,
    Math.max(16 + halfWidth, width - 16 - halfWidth),
  );
  const aboveTop = anchorY - verticalGap - PREVIEW_HEIGHT;

  if (aboveTop >= 16) {
    return { left, maxWidth, top: aboveTop, transform: "translateX(-50%)" };
  }

  const belowTop = anchorY + verticalGap;
  return belowTop + PREVIEW_HEIGHT <= height - 16
    ? { left, maxWidth, top: belowTop, transform: "translateX(-50%)" }
    : {
        left,
        maxWidth,
        top: clamp(aboveTop, 16, Math.max(16, height - PREVIEW_HEIGHT - 16)),
        transform: "translateX(-50%)",
      };
}

function renderCommentPreviewBody(body: string) {
  return parseCommentBody(body).map(
    (
      segment: { type: string; text?: string; label?: string },
      index: number,
    ) => {
      switch (segment.type) {
        case "text":
          return segment.text;
        case "mention":
          return (
            <strong
              key={`paged-annotation-comment-preview-mention-${index}`}
              className="font-semibold"
            >
              {segment.label}
            </strong>
          );
        default:
          return null;
      }
    },
  );
}

export interface CommentPreviewProps {
  body: string;
  layer: HTMLElement | null;
  pageSize: Size;
  point: Point;
  testId?: string;
}

export function CommentPreview({
  body,
  layer,
  pageSize,
  point,
  testId,
}: CommentPreviewProps) {
  const [previewWidth, setPreviewWidth] = useState(0);
  const measureRef = (element: HTMLDivElement | null) => {
    if (element == null) return;
    const nextWidth = element.offsetWidth;
    setPreviewWidth((current) => (current === nextWidth ? current : nextWidth));
  };

  const position = computeCommentPreviewPosition({
    layer,
    pageSize,
    point,
    previewWidth,
  });
  if (position == null) return null;

  const style: CSSProperties = {
    ...position,
    backgroundColor: PREVIEW_BACKGROUND,
    borderColor: PREVIEW_BORDER,
    color: PREVIEW_FOREGROUND,
    height: PREVIEW_HEIGHT,
    width: "fit-content",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  return (
    <div
      ref={measureRef}
      className="pointer-events-none absolute z-[5] flex items-center overflow-hidden rounded-lg border px-2 py-1 font-sans text-sm shadow-lg select-none"
      data-testid={testId}
      style={style}
    >
      <div className="min-w-0 overflow-hidden leading-5 text-ellipsis whitespace-nowrap text-inherit">
        {renderCommentPreviewBody(body)}
      </div>
    </div>
  );
}
