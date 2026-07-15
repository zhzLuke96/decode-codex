// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Cubic Bezier geometry helpers used by the browser-use cursor animation.

import type {
  Point,
  SpringConfig,
  ViewportSize,
} from "./browser-agent-cursor-types";

export interface BrowserAgentBezierPath {
  control1: Point;
  control2: Point;
  end: Point;
  length: number;
  start: Point;
}

export interface BrowserAgentBezierSample {
  point: Point;
  tangent: Point;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function pointDistance(left: Point, right: Point): number {
  return Math.hypot(right.x - left.x, right.y - left.y);
}

export function buildBezierPath({
  bounds,
  end,
  start,
}: {
  bounds: ViewportSize;
  end: Point;
  start: Point;
}): BrowserAgentBezierPath {
  const delta = {
    x: end.x - start.x,
    y: end.y - start.y,
  };
  const distance = pointDistance(start, end);
  if (distance < 0.001) {
    return {
      control1: start,
      control2: end,
      end,
      length: 0,
      start,
    };
  }

  const normal = {
    x: -delta.y / distance,
    y: delta.x / distance,
  };
  const viewportScale = Math.max(bounds.width, bounds.height);
  const bend = clamp(distance * 0.22, 24, Math.max(24, viewportScale * 0.18));
  const path = {
    control1: {
      x: start.x + delta.x * 0.34 + normal.x * bend,
      y: start.y + delta.y * 0.34 + normal.y * bend,
    },
    control2: {
      x: start.x + delta.x * 0.68 - normal.x * bend * 0.55,
      y: start.y + delta.y * 0.68 - normal.y * bend * 0.55,
    },
    end,
    length: distance,
    start,
  };
  return {
    ...path,
    length: approximateBezierLength(path),
  };
}

export function bezierPathSpringConfig(path: unknown): SpringConfig {
  const length = isBezierPath(path) ? path.length : 0;
  return {
    dampingFraction: 0.86,
    response: clamp(length / 1400, 0.2, 0.55),
  };
}

export function sampleBezierPath(
  path: unknown,
  progress: number,
): BrowserAgentBezierSample {
  const bezierPath = isBezierPath(path)
    ? path
    : buildBezierPath({
        bounds: { height: 1, width: 1 },
        end: { x: 0, y: 0 },
        start: { x: 0, y: 0 },
      });
  const t = clamp(progress, 0, 1);
  return {
    point: cubicPoint(bezierPath, t),
    tangent: cubicTangent(bezierPath, t),
  };
}

export function tangentToAngleDeg(tangent: Point): number {
  if (pointDistance({ x: 0, y: 0 }, tangent) < 0.001) return 0;
  return (Math.atan2(tangent.y, tangent.x) * 180) / Math.PI;
}

function cubicPoint(path: BrowserAgentBezierPath, t: number): Point {
  const inverse = 1 - t;
  const inverse2 = inverse * inverse;
  const t2 = t * t;
  return {
    x:
      inverse2 * inverse * path.start.x +
      3 * inverse2 * t * path.control1.x +
      3 * inverse * t2 * path.control2.x +
      t2 * t * path.end.x,
    y:
      inverse2 * inverse * path.start.y +
      3 * inverse2 * t * path.control1.y +
      3 * inverse * t2 * path.control2.y +
      t2 * t * path.end.y,
  };
}

function cubicTangent(path: BrowserAgentBezierPath, t: number): Point {
  const inverse = 1 - t;
  return {
    x:
      3 * inverse * inverse * (path.control1.x - path.start.x) +
      6 * inverse * t * (path.control2.x - path.control1.x) +
      3 * t * t * (path.end.x - path.control2.x),
    y:
      3 * inverse * inverse * (path.control1.y - path.start.y) +
      6 * inverse * t * (path.control2.y - path.control1.y) +
      3 * t * t * (path.end.y - path.control2.y),
  };
}

function approximateBezierLength(path: BrowserAgentBezierPath): number {
  let length = 0;
  let previous = path.start;
  for (let index = 1; index <= 24; index += 1) {
    const point = cubicPoint(path, index / 24);
    length += pointDistance(previous, point);
    previous = point;
  }
  return length;
}

function isBezierPath(path: unknown): path is BrowserAgentBezierPath {
  if (typeof path !== "object" || path == null) return false;
  const candidate = path as Partial<BrowserAgentBezierPath>;
  return (
    isPoint(candidate.start) &&
    isPoint(candidate.control1) &&
    isPoint(candidate.control2) &&
    isPoint(candidate.end)
  );
}

function isPoint(point: unknown): point is Point {
  return (
    typeof point === "object" &&
    point != null &&
    typeof (point as Point).x === "number" &&
    typeof (point as Point).y === "number"
  );
}
