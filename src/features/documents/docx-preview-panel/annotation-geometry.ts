// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import {
  computeAskForEditButtonPosition,
  computeRectAskForEditPosition,
  topRightCorner,
  type Point,
  type Rect,
  type Size,
} from "../../../image-side-panel/paged-annotation-overlays";
import { clamp } from "../../../image-side-panel/paged-annotation-overlay-geometry";

import type { DocxAnnotationAnchor } from "./annotation-types";

export type ClientRectLike = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

export type PointerDragState = {
  pointerId: number;
  start: Point;
  current: Point;
  clientStart: Point;
  clientCurrent: Point;
};

export function computeDocxAskForEditPosition({
  anchor,
  editorScale,
  layer,
  pageSize,
}: {
  anchor: DocxAnnotationAnchor;
  editorScale: number;
  layer: HTMLElement | null;
  pageSize: Size;
}): Point | null {
  return anchor.kind === "region" && anchor.selectionKind != null
    ? computeRectAskForEditPosition({
        editorScale,
        layer,
        pageSize,
        rect: anchor.rect,
      })
    : computeAskForEditButtonPosition({
        editorScale,
        layer,
        markerPoint:
          anchor.kind === "region" ? topRightCorner(anchor.rect) : anchor.point,
        pageSize,
      });
}

export function pagePointFromPointerEvent(
  event: Pick<PointerEvent, "clientX" | "clientY" | "currentTarget">,
  pageSize: Size,
): Point | null {
  const target =
    event.currentTarget instanceof Element ? event.currentTarget : null;
  if (target == null) return null;
  const bounds = target.getBoundingClientRect();
  return bounds.width <= 0 || bounds.height <= 0
    ? null
    : {
        x: clamp(
          ((event.clientX - bounds.left) / bounds.width) * pageSize.width,
          0,
          pageSize.width,
        ),
        y: clamp(
          ((event.clientY - bounds.top) / bounds.height) * pageSize.height,
          0,
          pageSize.height,
        ),
      };
}

export function rectFromClientRects({
  clientRects,
  pageElement,
  pageSize,
}: {
  clientRects: readonly ClientRectLike[];
  pageElement: Element;
  pageSize: Size;
}): Rect | null {
  const pageBounds = pageElement.getBoundingClientRect();
  if (pageBounds.width <= 0 || pageBounds.height <= 0) return null;
  const bounds = boundingClientRect(clientRects);
  if (bounds == null) return null;

  const x = clamp(
    ((bounds.left - pageBounds.left) / pageBounds.width) * pageSize.width,
    0,
    pageSize.width,
  );
  const y = clamp(
    ((bounds.top - pageBounds.top) / pageBounds.height) * pageSize.height,
    0,
    pageSize.height,
  );
  const right = clamp(
    ((bounds.right - pageBounds.left) / pageBounds.width) * pageSize.width,
    0,
    pageSize.width,
  );
  const bottom = clamp(
    ((bounds.bottom - pageBounds.top) / pageBounds.height) * pageSize.height,
    0,
    pageSize.height,
  );

  return right <= x || bottom <= y
    ? null
    : { x, y, width: right - x, height: bottom - y };
}

export function rectsFromSelectionClientRects({
  clientRects,
  pageElement,
  pageSize,
}: {
  clientRects: readonly ClientRectLike[];
  pageElement: Element;
  pageSize: Size;
}): Rect[] {
  const rects: Rect[] = [];
  for (const lineRect of mergeClientRectsByLine(clientRects)) {
    const pageRect = rectFromClientRects({
      clientRects: [lineRect],
      pageElement,
      pageSize,
    });
    if (pageRect != null) rects.push(pageRect);
  }
  return rects;
}

export function annotationMarkerPoint(anchor: DocxAnnotationAnchor): Point {
  return anchor.kind === "region"
    ? (anchor.askForEditAnchor?.point ?? topCenterPoint(anchor.rect))
    : anchor.point;
}

export function selectionAskForEditAnchor({
  clientRects,
  pageElement,
  pageSize,
  selection,
}: {
  clientRects: readonly ClientRectLike[];
  pageElement: Element;
  pageSize: Size;
  selection: Selection;
}): { placement: "above" | "below"; point: Point } | null {
  const pageBounds = pageElement.getBoundingClientRect();
  if (
    pageBounds.width <= 0 ||
    pageBounds.height <= 0 ||
    clientRects.length === 0
  ) {
    return null;
  }
  const bounds = boundingClientRect(clientRects);
  if (bounds == null) return null;

  const forward = selectionIsForward(selection);
  const terminalRect = forward
    ? clientRects[clientRects.length - 1]
    : clientRects[0];
  if (terminalRect == null) return null;

  const terminalCenterY = terminalRect.top + terminalRect.height / 2;
  const selectionCenterY = bounds.top + bounds.height / 2;
  const hasRoomAbove = terminalRect.top - 6 - 28 >= pageBounds.top;
  const hasRoomBelow = terminalRect.bottom + 6 + 28 <= pageBounds.bottom;
  const placement =
    terminalCenterY > selectionCenterY && hasRoomBelow
      ? "below"
      : hasRoomAbove
        ? "above"
        : "below";

  return {
    placement,
    point: pagePointFromClientCoordinates({
      clientX: forward ? terminalRect.right : terminalRect.left,
      clientY: placement === "above" ? terminalRect.top : terminalRect.bottom,
      pageElement,
      pageSize,
    }),
  };
}

export function pagePointFromClientCoordinates({
  clientX,
  clientY,
  pageElement,
  pageSize,
}: {
  clientX: number;
  clientY: number;
  pageElement: Element;
  pageSize: Size;
}): Point {
  const bounds = pageElement.getBoundingClientRect();
  return {
    x: clamp(
      ((clientX - bounds.left) / bounds.width) * pageSize.width,
      0,
      pageSize.width,
    ),
    y: clamp(
      ((clientY - bounds.top) / bounds.height) * pageSize.height,
      0,
      pageSize.height,
    ),
  };
}

export function pointerDragMoved(dragState: PointerDragState): boolean {
  return (
    Math.abs(dragState.clientCurrent.x - dragState.clientStart.x) >= 3 ||
    Math.abs(dragState.clientCurrent.y - dragState.clientStart.y) >= 3
  );
}

export function anchorFromPointerDrag(
  dragState: Pick<PointerDragState, "start" | "current">,
  forceRegion: boolean = false,
): DocxAnnotationAnchor {
  const rect = rectFromPoints(dragState.start, dragState.current);
  return !forceRegion && rect.width < 8 && rect.height < 8
    ? { kind: "point", point: dragState.current }
    : { kind: "region", rect };
}

export function rectFromPoints(start: Point, current: Point): Rect {
  return {
    x: Math.min(start.x, current.x),
    y: Math.min(start.y, current.y),
    width: Math.abs(start.x - current.x),
    height: Math.abs(start.y - current.y),
  };
}

export function clampToRange(value: number, min: number, max: number): number {
  return clamp(value, min, max);
}

export function mergeClientRectsByLine(
  clientRects: readonly ClientRectLike[],
): ClientRectLike[] {
  const mergedRects: ClientRectLike[] = [];
  const sortedRects = clientRects
    .filter((rect) => rect.width > 0 && rect.height > 0)
    .sort((left, right) => left.top - right.top || left.left - right.left);

  for (const rect of sortedRects) {
    const target = mergedRects.find((lineRect) =>
      clientRectsShareLine(lineRect, rect),
    );
    if (target == null) {
      mergedRects.push({ ...rect });
      continue;
    }
    target.left = Math.min(target.left, rect.left);
    target.top = Math.min(target.top, rect.top);
    target.right = Math.max(target.right, rect.right);
    target.bottom = Math.max(target.bottom, rect.bottom);
    target.width = target.right - target.left;
    target.height = target.bottom - target.top;
  }

  return mergedRects;
}

export function clientRectsShareLine(
  left: ClientRectLike,
  right: ClientRectLike,
): boolean {
  return (
    Math.min(left.bottom, right.bottom) - Math.max(left.top, right.top) >=
    Math.min(left.height, right.height) * 0.5
  );
}

export function topCenterPoint(rect: Rect): Point {
  return { x: rect.x + rect.width / 2, y: rect.y };
}

export function boundingClientRect(
  clientRects: readonly ClientRectLike[],
): ClientRectLike | null {
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;

  for (const rect of clientRects) {
    if (rect.width <= 0 || rect.height <= 0) continue;
    left = Math.min(left, rect.left);
    top = Math.min(top, rect.top);
    right = Math.max(right, rect.right);
    bottom = Math.max(bottom, rect.bottom);
  }

  return !Number.isFinite(left) ||
    !Number.isFinite(top) ||
    !Number.isFinite(right) ||
    !Number.isFinite(bottom)
    ? null
    : { bottom, height: bottom - top, left, right, top, width: right - left };
}

export function selectionIsForward(selection: Selection): boolean {
  if (selection.anchorNode == null || selection.focusNode == null) return true;
  if (selection.anchorNode === selection.focusNode) {
    return selection.focusOffset >= selection.anchorOffset;
  }
  const relation = selection.anchorNode.compareDocumentPosition(
    selection.focusNode,
  );
  return relation === Node.DOCUMENT_POSITION_FOLLOWING
    ? true
    : relation !== Node.DOCUMENT_POSITION_PRECEDING;
}
