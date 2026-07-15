// Restored from ref/webview/assets/tooltip-B-u9JAuV.js

import type { TooltipAlign, TooltipSide } from "./types";
type Point = {
  x: number;
  y: number;
};
type SafePointerTriangle = {
  start: Point;
  endA: Point;
  endB: Point;
};
type TrackSafePointerAreaOptions = {
  destinationElement: HTMLElement;
  destinationSide: TooltipSide;
  onEnterDestination(): void;
  onMoveInsideTriangle(): void;
  onMoveOutsideTriangle(): void;
  pointer: Point;
  sourceElement: HTMLElement;
};
export const emptyDomRect: DOMRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON() {
    return {};
  },
};
export function trackSafePointerArea({
  destinationElement,
  destinationSide,
  onEnterDestination,
  onMoveInsideTriangle,
  onMoveOutsideTriangle,
  pointer,
  sourceElement,
}: TrackSafePointerAreaOptions): (() => void) | null {
  const triangle = createSafePointerTriangle({
    destinationRect: destinationElement.getBoundingClientRect(),
    destinationSide,
    pointer,
    sourceRect: sourceElement.getBoundingClientRect(),
  });
  if (triangle == null) {
    return null;
  }
  const ownerDocument = sourceElement.ownerDocument;
  const handlePointerMove = (event: PointerEvent) => {
    const nextPointer = {
      x: event.clientX,
      y: event.clientY,
    };
    if (
      isPointInsideRect(nextPointer, destinationElement.getBoundingClientRect())
    ) {
      onEnterDestination();
      return;
    }
    if (isPointInsideTriangle(nextPointer, triangle)) {
      onMoveInsideTriangle();
      return;
    }
    onMoveOutsideTriangle();
  };
  ownerDocument.addEventListener("pointermove", handlePointerMove, true);
  return () => {
    ownerDocument.removeEventListener("pointermove", handlePointerMove, true);
  };
}
function createSafePointerTriangle({
  destinationRect,
  destinationSide,
  pointer,
  sourceRect,
}: {
  destinationRect: DOMRect;
  destinationSide: TooltipSide;
  pointer: Point;
  sourceRect: DOMRect;
}): SafePointerTriangle | null {
  if (isEmptyRect(destinationRect) || isEmptyRect(sourceRect)) {
    return null;
  }
  if (destinationSide === "left" || destinationSide === "right") {
    const edgeX =
      destinationSide === "right"
        ? destinationRect.left
        : destinationRect.right;
    return {
      start: pointer,
      endA: {
        x: edgeX,
        y: destinationRect.top - 8,
      },
      endB: {
        x: edgeX,
        y: destinationRect.bottom + 8,
      },
    };
  }
  const edgeY =
    destinationSide === "bottom" ? destinationRect.top : destinationRect.bottom;
  return {
    start: pointer,
    endA: {
      x: destinationRect.left - 8,
      y: edgeY,
    },
    endB: {
      x: destinationRect.right + 8,
      y: edgeY,
    },
  };
}
function isPointInsideTriangle(
  point: Point,
  triangle: SafePointerTriangle,
): boolean {
  const sideA = triangleSide(point, triangle.start, triangle.endA);
  const sideB = triangleSide(point, triangle.endA, triangle.endB);
  const sideC = triangleSide(point, triangle.endB, triangle.start);
  return !(
    (sideA < 0 || sideB < 0 || sideC < 0) &&
    (sideA > 0 || sideB > 0 || sideC > 0)
  );
}
function triangleSide(point: Point, start: Point, end: Point): number {
  return (
    (point.x - end.x) * (start.y - end.y) -
    (start.x - end.x) * (point.y - end.y)
  );
}
function isPointInsideRect(point: Point, rect: DOMRect): boolean {
  return (
    point.x >= rect.left &&
    point.x <= rect.right &&
    point.y >= rect.top &&
    point.y <= rect.bottom
  );
}
function isEmptyRect(rect: DOMRect): boolean {
  return rect.width <= 0 || rect.height <= 0;
}
export function floatingPlacement(
  side: TooltipSide,
  align?: TooltipAlign,
): TooltipSide | `${TooltipSide}-${TooltipAlign}` {
  return align == null || align === "center" ? side : `${side}-${align}`;
}
export function sideFromPlacement(placement: string): TooltipSide {
  return placement === "top" || placement.startsWith("top-")
    ? "top"
    : placement === "right" || placement.startsWith("right-")
      ? "right"
      : placement === "bottom" || placement.startsWith("bottom-")
        ? "bottom"
        : "left";
}
export function oppositeSide(side: TooltipSide): TooltipSide {
  switch (side) {
    case "top":
      return "bottom";
    case "right":
      return "left";
    case "bottom":
      return "top";
    case "left":
      return "right";
  }
}
