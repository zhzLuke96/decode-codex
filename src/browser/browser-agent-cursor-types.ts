// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for the browser-use agent cursor controller and React overlay.

export interface Point {
  x: number;
  y: number;
}

export interface SpringConfig {
  dampingFraction: number;
  response: number;
}

export interface Spring {
  dampingFraction: number;
  force: number;
  response: number;
  simulationTime: number;
  scriptTime: number;
  target: number;
  value: number;
  velocity: number;
}

export interface BezierMotion {
  mode: "bezier";
  path: unknown;
  progressSpring: Spring;
}

export interface ScootMotion {
  mode: "scoot";
  axisRotation: number;
  end: Point;
  progressSpring: Spring;
  rotationTarget: number;
  start: Point;
}

export type CursorMotion = BezierMotion | ScootMotion | null;

export interface CursorState {
  motion: CursorMotion;
  point: Point;
  positionXSpring: Spring;
  positionYSpring: Spring;
  rotation: number;
  rotationSpring: Spring;
  scootAxisRotation: number;
  scootAxisSpring: Spring;
  scootRotationSpring: Spring;
  scootStretchSpring: Spring;
  stretchSpring: Spring;
  thinkStartedAt: number | null;
  visibilitySpring: Spring;
}

export interface CursorElements {
  cursor: HTMLDivElement;
  layer: HTMLDivElement;
}

export interface ViewportSize {
  height: number;
  width: number;
}
