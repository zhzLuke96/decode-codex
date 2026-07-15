// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Geometry helpers for positioning paged annotation controls over a scaled layer.

import { annotationViewportBaseHeight } from "../boundaries/onboarding-commons-externals.facade";
import {
  EPSILON,
  PREVIEW_MAX_WIDTH,
  RECT_GAP,
} from "./paged-annotation-overlay-constants";

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect extends Point, Size {}

export type AskForEditAlignment = "start" | "center" | "end";

export interface AskForEditAnchor {
  placement: "above" | "below";
  point: Point;
  alignment?: AskForEditAlignment;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function isToggleImageCommentShortcut(
  event:
    | KeyboardEvent
    | {
        key: string;
        metaKey: boolean;
        ctrlKey: boolean;
        altKey: boolean;
        shiftKey: boolean;
      },
): boolean {
  return (
    event.key.toLowerCase() === "i" &&
    (event.metaKey || event.ctrlKey) &&
    !event.altKey &&
    !event.shiftKey
  );
}

export function topRightCorner(rect: Rect): Point {
  return { x: rect.x + rect.width, y: rect.y };
}

function topCenterPoint(rect: Rect): Point {
  return { x: rect.x + rect.width / 2, y: rect.y };
}

export function defaultAskForEditAnchor(rect: Rect): AskForEditAnchor {
  return { placement: "above", point: topCenterPoint(rect) };
}

export function measureElement(element: HTMLElement): Size {
  const bounds = element.getBoundingClientRect();
  return {
    height: element.offsetHeight || bounds.height,
    width: element.offsetWidth || bounds.width,
  };
}

export function applyAbsolutePosition(
  element: HTMLElement | null,
  position: Point,
): void {
  if (element != null) {
    element.style.left = `${position.x}px`;
    element.style.top = `${position.y}px`;
  }
}

function maxButtonX(layerWidth: number, scale: number): number {
  return Math.max(16, layerWidth - PREVIEW_MAX_WIDTH * scale - 16);
}

function maxButtonY(layerHeight: number, scale: number): number {
  return Math.max(16, layerHeight - 120 * scale - 16);
}

function adjustButtonY(value: number, scale: number): number {
  const lift = (annotationViewportBaseHeight - 120) * scale;
  return value - Math.min(lift, Math.max(value - 16, 0));
}

export interface ComputeAskForEditPositionArgs {
  editorScale?: number;
  layer: HTMLElement | null;
  markerPoint: Point;
  pageSize: Size;
}

export function computeAskForEditButtonPosition({
  editorScale = 1,
  layer,
  markerPoint,
  pageSize,
}: ComputeAskForEditPositionArgs): Point | null {
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const layerSize = measureElement(layer);
  if (layerSize.width <= 0 || layerSize.height <= 0) return null;

  const anchorX = (markerPoint.x / pageSize.width) * layerSize.width;
  const anchorY = (markerPoint.y / pageSize.height) * layerSize.height;
  const scale = Math.max(editorScale, EPSILON);
  const boundX = maxButtonX(layerSize.width, scale);
  const boundY = maxButtonY(layerSize.height, scale);
  const clampedY = clamp(anchorY - (44 * scale) / 2, 16, boundY);
  const rightX = anchorX + 27;
  const leftX = anchorX - 27 - PREVIEW_MAX_WIDTH * scale;

  for (const candidateX of [rightX, leftX]) {
    if (candidateX >= 16 && candidateX <= boundX) {
      return { x: candidateX, y: adjustButtonY(clampedY, scale) };
    }
  }

  const centeredX = clamp(
    anchorX - (PREVIEW_MAX_WIDTH * scale) / 2,
    16,
    boundX,
  );
  const belowY = anchorY + 27;
  return belowY <= boundY
    ? { x: centeredX, y: adjustButtonY(belowY, scale) }
    : {
        x: centeredX,
        y: adjustButtonY(clamp(anchorY - 27 - 120 * scale, 16, boundY), scale),
      };
}

export interface ComputeRectAskForEditPositionArgs {
  editorScale?: number;
  layer: HTMLElement | null;
  pageSize: Size;
  rect: Rect;
}

export function computeRectAskForEditPosition({
  editorScale = 1,
  layer,
  pageSize,
  rect,
}: ComputeRectAskForEditPositionArgs): Point | null {
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const layerSize = measureElement(layer);
  if (layerSize.width <= 0 || layerSize.height <= 0) return null;

  const topY = (rect.y / pageSize.height) * layerSize.height;
  const rightX = ((rect.x + rect.width) / pageSize.width) * layerSize.width;
  const bottomY = ((rect.y + rect.height) / pageSize.height) * layerSize.height;
  const scale = Math.max(editorScale, EPSILON);
  const boundX = maxButtonX(layerSize.width, scale);
  const boundY = maxButtonY(layerSize.height, scale);
  const belowRect = bottomY + RECT_GAP;
  const aboveRect = topY - RECT_GAP - 120 * scale;
  const positionY =
    belowRect <= boundY ? belowRect : clamp(aboveRect, 16, boundY);

  return {
    x: clamp(rightX - PREVIEW_MAX_WIDTH * scale, 16, boundX),
    y: adjustButtonY(positionY, scale),
  };
}
