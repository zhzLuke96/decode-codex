// Restored from ref/.vite/build/comment-preload.js
// Geometry helpers for browser sidebar comment and design overlays.

export type BrowserSidebarPoint = {
  x: number;
  y: number;
};

export type BrowserSidebarSize = {
  width: number;
  height: number;
};

export type BrowserSidebarRect = BrowserSidebarPoint & BrowserSidebarSize;

export type BrowserSidebarCommentEditorLayoutOptions = {
  viewport: BrowserSidebarSize;
  viewportScale: number;
  zoomFactor?: number;
};

const COMMENT_EDITOR_MAX_WIDTH = 240;
const COMMENT_EDITOR_HEIGHT = 72;
const COMMENT_EDITOR_GAP = 8;
const OVERLAY_EDGE_INSET = 16;
const COMMENT_MARKER_DIAMETER = 25;
const COMMENT_MARKER_SPREAD_DISTANCE = COMMENT_MARKER_DIAMETER / 2;
const DEFAULT_DRAG_DISTANCE_THRESHOLD = 4;

export function inverseViewportScale(viewportScale: number | null): number {
  return viewportScale == null || viewportScale <= 0 ? 1 : 1 / viewportScale;
}

export function computeCommentEditorRect(
  anchorRect: BrowserSidebarRect,
  {
    viewport,
    viewportScale,
    zoomFactor = 1,
  }: BrowserSidebarCommentEditorLayoutOptions,
): BrowserSidebarRect {
  const scale = inverseViewportScale(viewportScale);
  const scaledAnchorRect = scaleRect(anchorRect, zoomFactor);
  const viewportWidth = viewport.width * zoomFactor;
  const viewportHeight = viewport.height * zoomFactor;
  const edgeInset = OVERLAY_EDGE_INSET * scale;
  const editorHeight = COMMENT_EDITOR_HEIGHT * scale;
  const editorWidth = Math.min(
    COMMENT_EDITOR_MAX_WIDTH * scale,
    viewportWidth - edgeInset * 2,
  );
  const x = clampNumber(
    scaledAnchorRect.x,
    edgeInset,
    viewportWidth - editorWidth - edgeInset,
  );
  const yAbove = scaledAnchorRect.y - editorHeight - COMMENT_EDITOR_GAP * scale;
  const yBelow =
    scaledAnchorRect.y + scaledAnchorRect.height + COMMENT_EDITOR_GAP * scale;

  return {
    x,
    y:
      yAbove >= edgeInset
        ? yAbove
        : clampNumber(
            yBelow,
            edgeInset,
            viewportHeight - editorHeight - edgeInset,
          ),
    width: editorWidth,
    height: editorHeight,
  };
}

export function spreadCoincidentMarkerPoints(
  points: ReadonlyArray<BrowserSidebarPoint>,
  viewportWidth: number,
): BrowserSidebarPoint[] {
  if (points.length < 2) return [...points];

  const minMarkerX = OVERLAY_EDGE_INSET + COMMENT_MARKER_DIAMETER / 2;
  const maxMarkerX =
    viewportWidth - OVERLAY_EDGE_INSET - COMMENT_MARKER_DIAMETER / 2;
  const groupedPointIndexes = new Map<string, number[]>();

  points.forEach((point, index) => {
    const roundedPointKey = `${Math.round(point.x)}:${Math.round(point.y)}`;
    const groupIndexes = groupedPointIndexes.get(roundedPointKey);
    if (groupIndexes == null) {
      groupedPointIndexes.set(roundedPointKey, [index]);
      return;
    }
    groupIndexes.push(index);
  });

  const spreadPoints = points.map((point) => ({ ...point }));
  for (const pointIndexes of groupedPointIndexes.values()) {
    if (pointIndexes.length < 2) continue;

    const groupStartX =
      pointIndexes.reduce((sum, pointIndex) => sum + points[pointIndex].x, 0) /
        pointIndexes.length -
      ((pointIndexes.length - 1) * COMMENT_MARKER_SPREAD_DISTANCE) / 2;
    const groupEndX =
      groupStartX + (pointIndexes.length - 1) * COMMENT_MARKER_SPREAD_DISTANCE;
    const viewportCorrection =
      groupStartX < minMarkerX
        ? minMarkerX - groupStartX
        : groupEndX > maxMarkerX
          ? maxMarkerX - groupEndX
          : 0;

    pointIndexes.forEach((pointIndex, indexWithinGroup) => {
      spreadPoints[pointIndex] = {
        x: clampNumber(
          groupStartX +
            indexWithinGroup * COMMENT_MARKER_SPREAD_DISTANCE +
            viewportCorrection,
          minMarkerX,
          maxMarkerX,
        ),
        y: points[pointIndex].y,
      };
    });
  }

  return spreadPoints;
}

export function scaleRect(
  rect: BrowserSidebarRect,
  scale: number,
): BrowserSidebarRect {
  return {
    x: rect.x * scale,
    y: rect.y * scale,
    width: rect.width * scale,
    height: rect.height * scale,
  };
}

export function isPointInsideViewportSize(
  point: BrowserSidebarPoint,
  viewportSize: BrowserSidebarSize,
): boolean {
  return (
    point.x >= 0 &&
    point.y >= 0 &&
    point.x < viewportSize.width &&
    point.y < viewportSize.height
  );
}

export function hasPointMovedPastThreshold(
  origin: BrowserSidebarPoint,
  current: BrowserSidebarPoint,
  threshold: number = DEFAULT_DRAG_DISTANCE_THRESHOLD,
): boolean {
  return (
    Math.abs(current.x - origin.x) >= threshold ||
    Math.abs(current.y - origin.y) >= threshold
  );
}

export function rectBetweenPoints(
  startPoint: BrowserSidebarPoint,
  endPoint: BrowserSidebarPoint,
): BrowserSidebarRect {
  return {
    x: Math.min(startPoint.x, endPoint.x),
    y: Math.min(startPoint.y, endPoint.y),
    width: Math.abs(endPoint.x - startPoint.x),
    height: Math.abs(endPoint.y - startPoint.y),
  };
}

export function clampNumber(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
