// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser agent cursor: spring-driven DOM animation controller + React overlay that
// renders and animates the simulated mouse cursor for browser-use agent sessions.

import * as React from "react";

import type {
  CursorElements,
  CursorState,
  Point,
  Spring,
  SpringConfig,
  ViewportSize,
} from "./browser-agent-cursor-types";
import { vscodeApiF } from "../boundaries/vscode-api";
import {
  // Geometry / spring helpers live in the shared `hee()` module of this chunk
  // (not restored). Imported through the boundary facade with semantic aliases.
  buildBezierPath,
  bezierPathSpringConfig,
  sampleBezierPath,
  tangentToAngleDeg,
  pointDistance,
  clamp,
} from "../boundaries/onboarding-commons-externals.facade";

export interface BrowserAgentCursorInput {
  animateMovement?: boolean;
  moveSequence?: string | number;
  visible?: boolean;
  x?: number;
  y?: number;
}

export interface BrowserAgentCursorStateInput {
  cursor?: BrowserAgentCursorInput | null;
  isVisible?: boolean;
  turnKey?: string;
  viewportSize: ViewportSize;
}

export interface CreateBrowserAgentCursorOptions {
  assetUrl: string;
  dataTestId?: string;
  glowColor: string;
  onArrived?: (moveSequence: string | number) => void;
}

export interface BrowserAgentCursorController {
  destroy(): void;
  setState(state: BrowserAgentCursorStateInput): void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CURSOR_SIZE_PX = 24;
const CURSOR_HALF_SIZE_PX = CURSOR_SIZE_PX / 2;
const ASSET_WIDTH_PX = 23;
const ASSET_HEIGHT_PX = 24;
const ASSET_OFFSET_X_PX = 12;
const ASSET_OFFSET_Y_PX = -2.5;
const ASSET_ROTATION_DEG = 44;
const GLOW_COLOR_CSS_VAR = "--browser-agent-cursor-glow-color";
const GLOW_FILTER = `drop-shadow(0 0 6px color-mix(in srgb, var(${GLOW_COLOR_CSS_VAR}) 90%, transparent)) drop-shadow(0 0 15px color-mix(in srgb, var(${GLOW_COLOR_CSS_VAR}) 48%, transparent))`;
const MAX_BLUR_PX = 5;
const MIN_VISIBILITY_SCALE = 0.4;
const THINK_DELAY_SECONDS = 0;
const THINK_DURATION_SECONDS = 1.41;
const THINK_OSCILLATION_PERIOD_SECONDS = 0.66;
const THINK_ROTATION_AMPLITUDE_DEG = 12.5;
const DEFAULT_CURSOR_X_FRACTION = 0.58;
const DEFAULT_CURSOR_Y_FRACTION = 0.55;
const FRAME_TIME_SECONDS = 1 / 60;
const ARRIVAL_DISTANCE_THRESHOLD_PX = 0.85;
const ARRIVAL_VELOCITY_THRESHOLD = 12;
const SCOOT_DISTANCE_THRESHOLD_PX = 196;
const SCOOT_ROTATION_MAX_DEG = 70;
const SCOOT_STRETCH_BLEND = 0.15;
const MIN_SCOOT_STRETCH = 0;
const SPRING_TIMESTEP_SECONDS = 1 / 240;
const MAX_SPRING_CATCHUP_SECONDS = 1;
const SPRING_REST_VELOCITY_THRESHOLD = 0.06;

const STRETCH_SPRING_CONFIG: SpringConfig = {
  dampingFraction: 0.85,
  response: 0.2,
};
const VISIBILITY_SPRING_CONFIG: SpringConfig = {
  dampingFraction: 0.86,
  response: 0.42,
};
const SCOOT_PROGRESS_SPRING_CONFIG: SpringConfig = {
  dampingFraction: 0.94,
  response: 0.19,
};
const POSITION_SPRING_CONFIG: SpringConfig = {
  dampingFraction: 0.9,
  response: 0.19,
};
const ROTATION_SPRING_CONFIG: SpringConfig = {
  dampingFraction: 0.9,
  response: 0.12,
};
const SCOOT_ROTATION_SPRING_CONFIG: SpringConfig = {
  dampingFraction: 0.82,
  response: 0.055,
};
const SCOOT_STRETCH_SPRING_CONFIG: SpringConfig = {
  dampingFraction: 0.86,
  response: 0.12,
};

const CURSOR_ASSET_DATA_URL =
  "data:image/png;base64,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";

// ---------------------------------------------------------------------------
// Math / angle helpers
// ---------------------------------------------------------------------------

function lerp(from: number, to: number, ratio: number): number {
  return from + (to - from) * ratio;
}

function normalizeAngle(degrees: number): number {
  const wrapped = degrees % 360;
  return wrapped < 0 ? wrapped + 360 : wrapped;
}

function roundTo3(value: number): number {
  return Math.round(value * 1e3) / 1e3;
}

function shortestAngleDelta(from: number, to: number): number {
  let delta = to - from;
  for (; delta > 180; ) delta -= 360;
  for (; delta < -180; ) delta += 360;
  return delta;
}

function normalizeVector(vector: Point): Point {
  const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  return length < 0.001
    ? { x: 1, y: 0 }
    : { x: vector.x / length, y: vector.y / length };
}

function now(): number {
  return typeof performance > "u" ? Date.now() : performance.now();
}

function requestAnimationFrameSafe(
  callback: (timestamp: number) => void,
): number {
  if (typeof window < "u" && window.requestAnimationFrame != null) {
    return window.requestAnimationFrame(callback);
  }
  if (typeof window < "u") {
    return window.setTimeout(() => callback(now()), FRAME_TIME_SECONDS * 1e3);
  }
  callback(now());
  return 0;
}

function cancelAnimationFrameSafe(handle: number): void {
  if (typeof window < "u" && window.cancelAnimationFrame != null) {
    window.cancelAnimationFrame(handle);
    return;
  }
  if (typeof window < "u") window.clearTimeout(handle);
}

// ---------------------------------------------------------------------------
// Spring primitives
// ---------------------------------------------------------------------------

function createSpring(
  value: number,
  target: number,
  config: SpringConfig,
): Spring {
  return {
    dampingFraction: config.dampingFraction,
    force: 0,
    response: config.response,
    simulationTime: 0,
    scriptTime: 0,
    target,
    value,
    velocity: 0,
  };
}

function snapSpring(spring: Spring, value: number): void {
  spring.force = 0;
  spring.simulationTime = 0;
  spring.scriptTime = 0;
  spring.target = value;
  spring.value = value;
  spring.velocity = 0;
}

function integrateSpring(
  spring: Spring,
  stiffness: number,
  damping: number,
): void {
  const halfStep = SPRING_TIMESTEP_SECONDS / 2;
  const midVelocity = spring.velocity + spring.force * halfStep;
  spring.value += midVelocity * SPRING_TIMESTEP_SECONDS;
  spring.force =
    midVelocity * -damping + (spring.target - spring.value) * stiffness;
  spring.velocity = midVelocity + spring.force * halfStep;
}

function isSpringAtRest(spring: Spring): boolean {
  if (
    Math.max(spring.velocity * spring.velocity, spring.force * spring.force) >
    SPRING_REST_VELOCITY_THRESHOLD * SPRING_REST_VELOCITY_THRESHOLD
  ) {
    return false;
  }
  const tolerance = spring.target * 0.01;
  const remaining = spring.target - spring.value;
  return tolerance === 0 || remaining * remaining <= tolerance * tolerance;
}

function stepSpring(spring: Spring, deltaSeconds: number): void {
  const response = Math.max(0.001, spring.response);
  const maxStiffness = 1 / (2 * SPRING_TIMESTEP_SECONDS ** 2);
  const stiffness = Math.min((Math.PI * 2) ** 2 / response ** 2, maxStiffness);
  const damping = Math.sqrt(stiffness) * 2 * spring.dampingFraction;
  spring.scriptTime += Math.max(0, deltaSeconds);
  if (spring.scriptTime - spring.simulationTime > MAX_SPRING_CATCHUP_SECONDS) {
    spring.simulationTime = spring.scriptTime - FRAME_TIME_SECONDS;
  }
  for (; spring.simulationTime < spring.scriptTime; ) {
    integrateSpring(spring, stiffness, damping);
    spring.simulationTime += SPRING_TIMESTEP_SECONDS;
  }
  if (isSpringAtRest(spring)) spring.value = spring.target;
}

function isSpringSettled(spring: Spring): boolean {
  return spring.value === spring.target && isSpringAtRest(spring);
}

function setRotationSpringTarget(spring: Spring, target: number): void {
  spring.target = spring.value + shortestAngleDelta(spring.value, target);
}

function setPositionSpringConfig(
  state: CursorState,
  response: number,
  dampingFraction: number,
): void {
  state.positionXSpring.response = response;
  state.positionYSpring.response = response;
  state.positionXSpring.dampingFraction = dampingFraction;
  state.positionYSpring.dampingFraction = dampingFraction;
}

// ---------------------------------------------------------------------------
// Cursor DOM elements
// ---------------------------------------------------------------------------

function buildCursorElements(
  container: HTMLElement,
  assetUrl: string,
  dataTestId: string,
  glowColor: string,
): CursorElements {
  const layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.style.inset = "0";
  layer.style.overflow = "hidden";
  layer.style.pointerEvents = "none";
  layer.style.position = "absolute";
  layer.style.zIndex = "20";

  const cursor = document.createElement("div");
  cursor.dataset.testid = dataTestId;
  cursor.style.height = `${CURSOR_SIZE_PX}px`;
  cursor.style.left = "0";
  cursor.style.position = "absolute";
  cursor.style.top = "0";
  cursor.style.transformOrigin = `${CURSOR_HALF_SIZE_PX}px ${CURSOR_HALF_SIZE_PX}px`;
  cursor.style.willChange = "transform";
  cursor.style.width = `${CURSOR_SIZE_PX}px`;

  const assetWrapper = document.createElement("div");
  assetWrapper.style.transform = `translate3d(${ASSET_OFFSET_X_PX}px, ${ASSET_OFFSET_Y_PX}px, 0)`;

  const asset = document.createElement("img");
  asset.alt = "";
  asset.dataset.browserAgentCursorAsset = "";
  asset.dataset.testid = `${dataTestId}-asset`;
  asset.draggable = false;
  asset.height = ASSET_HEIGHT_PX;
  asset.src = assetUrl;
  asset.style.display = "block";
  asset.style.setProperty(GLOW_COLOR_CSS_VAR, glowColor);
  asset.style.filter = GLOW_FILTER;
  asset.style.transform = `rotate(${ASSET_ROTATION_DEG}deg) scale(1)`;
  asset.style.transformOrigin = "0 0";
  asset.width = ASSET_WIDTH_PX;

  assetWrapper.appendChild(asset);
  cursor.appendChild(assetWrapper);
  layer.appendChild(cursor);
  container.appendChild(layer);

  return { cursor, layer };
}

// ---------------------------------------------------------------------------
// Cursor state construction
// ---------------------------------------------------------------------------

function createCursorAnimationState(
  point: Point,
  visible: boolean,
): CursorState {
  const visibility = visible ? 1 : 0;
  const initialRotation = normalizeAngle(-44);
  return {
    motion: null,
    point,
    positionXSpring: createSpring(point.x, point.x, POSITION_SPRING_CONFIG),
    positionYSpring: createSpring(point.y, point.y, POSITION_SPRING_CONFIG),
    rotation: initialRotation,
    rotationSpring: createSpring(
      initialRotation,
      initialRotation,
      ROTATION_SPRING_CONFIG,
    ),
    scootAxisRotation: 0,
    scootAxisSpring: createSpring(0, 0, ROTATION_SPRING_CONFIG),
    scootRotationSpring: createSpring(0, 0, SCOOT_ROTATION_SPRING_CONFIG),
    scootStretchSpring: createSpring(1, 1, SCOOT_STRETCH_SPRING_CONFIG),
    stretchSpring: createSpring(1, 1, STRETCH_SPRING_CONFIG),
    thinkStartedAt: null,
    visibilitySpring: createSpring(
      visibility,
      visibility,
      VISIBILITY_SPRING_CONFIG,
    ),
  };
}

function clampCursorTarget({
  cursorX,
  cursorY,
  viewportHeight,
  viewportWidth,
}: {
  cursorX?: number;
  cursorY?: number;
  viewportHeight: number;
  viewportWidth: number;
}): Point {
  return {
    x: clamp(
      cursorX ?? Math.round(viewportWidth * DEFAULT_CURSOR_X_FRACTION),
      0,
      viewportWidth,
    ),
    y: clamp(
      cursorY ?? Math.round(viewportHeight * DEFAULT_CURSOR_Y_FRACTION),
      0,
      viewportHeight,
    ),
  };
}

// ---------------------------------------------------------------------------
// Position helpers
// ---------------------------------------------------------------------------

function snapPositionTo(state: CursorState, point: Point): void {
  state.point = point;
  snapSpring(state.positionXSpring, point.x);
  snapSpring(state.positionYSpring, point.y);
}

function resetScootSprings(state: CursorState): void {
  snapSpring(state.scootAxisSpring, 0);
  snapSpring(state.scootRotationSpring, 0);
  snapSpring(state.scootStretchSpring, 1);
  state.scootAxisRotation = 0;
}

function resetCursorToPoint(state: CursorState, point: Point): void {
  state.motion = null;
  snapPositionTo(state, point);
  snapSpring(state.rotationSpring, normalizeAngle(-44));
  state.rotation = state.rotationSpring.value;
  resetScootSprings(state);
  snapSpring(state.stretchSpring, 1);
}

function isNearTarget(state: CursorState, target: Point): boolean {
  return (
    pointDistance(state.point, target) <= ARRIVAL_DISTANCE_THRESHOLD_PX &&
    Math.abs(state.positionXSpring.velocity) <= ARRIVAL_VELOCITY_THRESHOLD &&
    Math.abs(state.positionYSpring.velocity) <= ARRIVAL_VELOCITY_THRESHOLD
  );
}

function stepPositionSprings(
  state: CursorState,
  deltaSeconds: number,
): { point: Point; speed: number } {
  const previous = state.point;
  stepSpring(state.positionXSpring, deltaSeconds);
  stepSpring(state.positionYSpring, deltaSeconds);
  stepSpring(state.rotationSpring, deltaSeconds);
  stepSpring(state.scootAxisSpring, deltaSeconds);
  const point = {
    x: state.positionXSpring.value,
    y: state.positionYSpring.value,
  };
  const speed =
    pointDistance(previous, point) /
    Math.max(deltaSeconds, FRAME_TIME_SECONDS / 4);
  state.point = point;
  state.rotation = state.rotationSpring.value;
  state.scootAxisRotation = state.scootAxisSpring.value;
  return { point, speed };
}

function projectOntoSegment(point: Point, start: Point, end: Point): number {
  const segment = { x: end.x - start.x, y: end.y - start.y };
  const lengthSquared = segment.x * segment.x + segment.y * segment.y;
  if (lengthSquared < 0.001) return 1;
  return clamp(
    ((point.x - start.x) * segment.x + (point.y - start.y) * segment.y) /
      lengthSquared,
    0,
    1,
  );
}

// ---------------------------------------------------------------------------
// Motion shaping helpers
// ---------------------------------------------------------------------------

function stretchFromSpeed(speed: number): number {
  return clamp(1 - speed / 5500, 0.65, 1);
}

function scootStretchFromProgress(progress: number): number {
  return lerp(
    1,
    lerp(1, MIN_SCOOT_STRETCH, Math.sin(clamp(progress, 0, 1) * Math.PI)),
    SCOOT_STRETCH_BLEND,
  );
}

function responseFromBezierSpeed(response: number): number {
  return clamp(response * 0.18, 0.035, 0.12);
}

function vectorToAxisRotation(direction: Point): number {
  return pointDistance({ x: 0, y: 0 }, direction) < 0.001
    ? 0
    : Math.atan2(direction.y, direction.x) * (180 / Math.PI);
}

function computeScootRotationTarget(direction: Point): number {
  return (
    clamp(direction.x * 0.75 + -direction.y * 0.62, -1, 1) *
    SCOOT_ROTATION_MAX_DEG
  );
}

function computeScootGeometry(
  start: Point,
  end: Point,
): { axisRotation: number; rotationTarget: number } {
  const direction = normalizeVector({ x: end.x - start.x, y: end.y - start.y });
  return {
    axisRotation: vectorToAxisRotation(direction),
    rotationTarget: computeScootRotationTarget(direction),
  };
}

function computeThinkRotation(state: CursorState, timestamp: number): number {
  if (state.thinkStartedAt == null) return state.rotation;
  const elapsed =
    (timestamp - state.thinkStartedAt) / 1e3 - THINK_DELAY_SECONDS;
  if (elapsed < 0) return state.rotation;
  const envelopeProgress = Math.min(1, elapsed / THINK_DURATION_SECONDS);
  const envelope = Math.sin(envelopeProgress * Math.PI);
  const oscillation =
    Math.sin((elapsed / THINK_OSCILLATION_PERIOD_SECONDS) * Math.PI * 2) *
    envelope;
  if (envelopeProgress >= 1) {
    state.thinkStartedAt = null;
    return state.rotation;
  }
  return state.rotation + oscillation * THINK_ROTATION_AMPLITUDE_DEG;
}

// ---------------------------------------------------------------------------
// Begin a move (bezier or scoot)
// ---------------------------------------------------------------------------

function beginCursorScoot(state: CursorState, start: Point, end: Point): void {
  const geometry = computeScootGeometry(start, end);
  setPositionSpringConfig(
    state,
    POSITION_SPRING_CONFIG.response,
    POSITION_SPRING_CONFIG.dampingFraction,
  );
  state.positionXSpring.target = end.x;
  state.positionYSpring.target = end.y;
  setRotationSpringTarget(state.rotationSpring, normalizeAngle(-44));
  setRotationSpringTarget(state.scootAxisSpring, geometry.axisRotation);
  state.motion = {
    axisRotation: geometry.axisRotation,
    end,
    mode: "scoot",
    progressSpring: createSpring(0, 1, SCOOT_PROGRESS_SPRING_CONFIG),
    rotationTarget: geometry.rotationTarget,
    start,
  };
}

function beginCursorMove(
  state: CursorState,
  target: Point,
  viewportSize: ViewportSize,
): void {
  state.thinkStartedAt = null;
  const start = { x: state.point.x, y: state.point.y };
  if (pointDistance(start, target) <= SCOOT_DISTANCE_THRESHOLD_PX) {
    beginCursorScoot(state, start, target);
    return;
  }
  const path = buildBezierPath({ bounds: viewportSize, end: target, start });
  const springConfig: SpringConfig = bezierPathSpringConfig(path);
  setPositionSpringConfig(
    state,
    responseFromBezierSpeed(springConfig.response),
    springConfig.dampingFraction,
  );
  state.motion = {
    mode: "bezier",
    path,
    progressSpring: createSpring(0, 1, springConfig),
  };
}

// ---------------------------------------------------------------------------
// Advance motion / springs each frame
// ---------------------------------------------------------------------------

function advanceBezierMotion(
  state: CursorState,
  deltaSeconds: number,
  timestamp: number,
): boolean {
  const motion = state.motion;
  if (motion?.mode !== "bezier") return false;
  state.scootStretchSpring.target = 1;
  state.scootRotationSpring.target = 0;
  stepSpring(motion.progressSpring, deltaSeconds);
  const progress = clamp(motion.progressSpring.value, 0, 1);
  const sample = sampleBezierPath(motion.path, progress);
  const angle = tangentToAngleDeg(sample.tangent);
  state.positionXSpring.target = sample.point.x;
  state.positionYSpring.target = sample.point.y;
  setRotationSpringTarget(state.rotationSpring, angle);
  setRotationSpringTarget(state.scootAxisSpring, 0);
  const step = stepPositionSprings(state, deltaSeconds);
  state.stretchSpring.target = stretchFromSpeed(step.speed);
  if (
    progress >= 0.999 &&
    Math.abs(motion.progressSpring.velocity) < 0.01 &&
    isNearTarget(state, sample.point)
  ) {
    const endSample = sampleBezierPath(motion.path, 1);
    const endAngle = tangentToAngleDeg(endSample.tangent);
    snapPositionTo(state, endSample.point);
    snapSpring(state.rotationSpring, endAngle);
    state.rotation = endAngle;
    snapSpring(state.scootAxisSpring, 0);
    state.scootAxisRotation = 0;
    snapSpring(state.stretchSpring, 1);
    state.motion = null;
    state.thinkStartedAt = timestamp;
    return true;
  }
  return false;
}

function advanceScootMotion(
  state: CursorState,
  deltaSeconds: number,
  timestamp: number,
): boolean {
  const motion = state.motion;
  if (motion?.mode !== "scoot") return false;
  stepSpring(motion.progressSpring, deltaSeconds);
  state.positionXSpring.target = motion.end.x;
  state.positionYSpring.target = motion.end.y;
  setRotationSpringTarget(state.scootAxisSpring, motion.axisRotation);
  setRotationSpringTarget(state.rotationSpring, normalizeAngle(-44));
  const progress = projectOntoSegment(
    stepPositionSprings(state, deltaSeconds).point,
    motion.start,
    motion.end,
  );
  const arc = Math.sin(Math.min(1, progress) * Math.PI);
  state.stretchSpring.target = 1;
  state.scootStretchSpring.target = scootStretchFromProgress(progress);
  state.scootRotationSpring.target = motion.rotationTarget * arc;
  if (
    progress >= 0.999 &&
    Math.abs(motion.progressSpring.velocity) < 0.01 &&
    isNearTarget(state, motion.end)
  ) {
    snapPositionTo(state, motion.end);
    snapSpring(state.rotationSpring, normalizeAngle(-44));
    state.rotation = state.rotationSpring.value;
    resetScootSprings(state);
    snapSpring(state.stretchSpring, 1);
    state.motion = null;
    state.thinkStartedAt = timestamp;
    return true;
  }
  return false;
}

function advanceMotion(
  state: CursorState,
  deltaSeconds: number,
  timestamp: number,
): boolean {
  if (state.motion == null) {
    state.stretchSpring.target = 1;
    state.scootStretchSpring.target = 1;
    state.scootRotationSpring.target = 0;
    return false;
  }
  const clampedDelta = Math.max(0, deltaSeconds);
  state.thinkStartedAt = null;
  return state.motion.mode === "scoot"
    ? advanceScootMotion(state, clampedDelta, timestamp)
    : advanceBezierMotion(state, clampedDelta, timestamp);
}

function advanceCursorState(
  state: CursorState,
  deltaSeconds: number,
  timestamp: number,
): boolean {
  const arrived = advanceMotion(state, deltaSeconds, timestamp);
  stepSpring(state.visibilitySpring, deltaSeconds);
  stepSpring(state.stretchSpring, deltaSeconds);
  stepSpring(state.scootStretchSpring, deltaSeconds);
  stepSpring(state.scootRotationSpring, deltaSeconds);
  return arrived;
}

function isCursorAnimating(state: CursorState): boolean {
  return (
    state.motion != null ||
    state.thinkStartedAt != null ||
    !isSpringSettled(state.positionXSpring) ||
    !isSpringSettled(state.positionYSpring) ||
    !isSpringSettled(state.rotationSpring) ||
    !isSpringSettled(state.scootAxisSpring) ||
    !isSpringSettled(state.scootRotationSpring) ||
    !isSpringSettled(state.scootStretchSpring) ||
    !isSpringSettled(state.stretchSpring) ||
    !isSpringSettled(state.visibilitySpring)
  );
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function computeCursorStyle({
  point,
  rotation,
  scootAxisRotation,
  scootRotation,
  scootStretch,
  stretch,
  visibility,
}: {
  point: Point;
  rotation: number;
  scootAxisRotation: number;
  scootRotation: number;
  scootStretch: number;
  stretch: number;
  visibility: number;
}): { filter: string; opacity: number; transform: string } {
  const clampedVisibility = clamp(visibility, 0, 1);
  const scale = lerp(MIN_VISIBILITY_SCALE, 1, clampedVisibility);
  const blur = lerp(MAX_BLUR_PX, 0, clampedVisibility);
  const clampedScootStretch = clamp(scootStretch, MIN_SCOOT_STRETCH, 1);
  const transforms = [
    `translate3d(${roundTo3(point.x - CURSOR_HALF_SIZE_PX)}px, ${roundTo3(point.y - CURSOR_HALF_SIZE_PX)}px, 0)`,
  ];
  if (
    Math.abs(shortestAngleDelta(0, scootAxisRotation)) > 0.001 ||
    Math.abs(clampedScootStretch - 1) > 0.001
  ) {
    transforms.push(
      `rotate(${roundTo3(scootAxisRotation)}deg)`,
      `scale(1, ${roundTo3(clampedScootStretch)})`,
      `rotate(${roundTo3(-scootAxisRotation)}deg)`,
    );
  }
  transforms.push(
    `rotate(${roundTo3(normalizeAngle(rotation + scootRotation))}deg)`,
    `scale(${roundTo3(stretch * scale)}, ${roundTo3(scale)})`,
  );
  return {
    filter: `blur(${roundTo3(blur)}px)`,
    opacity: roundTo3(clampedVisibility),
    transform: transforms.join(" "),
  };
}

function applyCursorStyle(
  cursor: HTMLElement,
  values: {
    point: Point;
    rotation: number;
    scootAxisRotation: number;
    scootRotation: number;
    scootStretch: number;
    stretch: number;
    visibility: number;
  },
): void {
  const style = computeCursorStyle(values);
  cursor.style.transform = style.transform;
  cursor.style.opacity = `${style.opacity}`;
  cursor.style.filter = style.filter;
}

function renderCursorState(elements: CursorElements, state: CursorState): void {
  const rotation = computeThinkRotation(state, now());
  applyCursorStyle(elements.cursor, {
    point: state.point,
    rotation,
    scootAxisRotation: state.scootAxisRotation,
    scootRotation: state.scootRotationSpring.value,
    scootStretch: state.scootStretchSpring.value,
    stretch: state.stretchSpring.value,
    visibility: state.visibilitySpring.value,
  });
}

// ---------------------------------------------------------------------------
// Controller factory
// ---------------------------------------------------------------------------

export function createBrowserAgentCursor(
  container: HTMLElement,
  {
    assetUrl,
    dataTestId = "browser-agent-cursor",
    glowColor,
    onArrived,
  }: CreateBrowserAgentCursorOptions,
): BrowserAgentCursorController {
  const elements = buildCursorElements(
    container,
    assetUrl,
    dataTestId,
    glowColor,
  );
  let animationFrameHandle: number | null = null;
  let lastFrameTime = now();
  let state: CursorState | null = null;
  let currentMoveKey: string | null = null;
  let currentMoveSequence: string | number | null = null;
  let lastThinkTurnKey: string | null = null;
  let lastArrivedMoveKey: string | null = null;
  let lastShowTurnKey: string | null = null;
  let justBeganMove = false;
  let destroyed = false;

  const notifyArrived = (): void => {
    if (
      currentMoveSequence == null ||
      currentMoveKey == null ||
      lastArrivedMoveKey === currentMoveKey
    ) {
      return;
    }
    lastArrivedMoveKey = currentMoveKey;
    onArrived?.(currentMoveSequence);
  };

  const scheduleFrame = (): void => {
    if (animationFrameHandle != null || state == null || destroyed) return;
    animationFrameHandle = requestAnimationFrameSafe((timestamp) => {
      animationFrameHandle = null;
      const activeState = state;
      if (activeState == null) return;
      const deltaSeconds = justBeganMove
        ? FRAME_TIME_SECONDS
        : Math.max(FRAME_TIME_SECONDS, (timestamp - lastFrameTime) / 1e3);
      justBeganMove = false;
      lastFrameTime = timestamp;
      const arrived = advanceCursorState(activeState, deltaSeconds, timestamp);
      renderCursorState(elements, activeState);
      if (arrived) notifyArrived();
      if (isCursorAnimating(activeState)) scheduleFrame();
    });
  };

  return {
    destroy: () => {
      destroyed = true;
      if (animationFrameHandle != null) {
        cancelAnimationFrameSafe(animationFrameHandle);
        animationFrameHandle = null;
      }
      elements.layer.remove();
    },
    setState: (input) => {
      const turnKey = input.turnKey ?? "";
      const hasCursor = input.cursor != null;
      const target = clampCursorTarget({
        cursorX: input.cursor?.x,
        cursorY: input.cursor?.y,
        viewportHeight: input.viewportSize.height,
        viewportWidth: input.viewportSize.width,
      });
      const visible =
        input.isVisible !== false && input.cursor?.visible !== false;
      const animateMovement = input.cursor?.animateMovement !== false;
      const thinkingWithoutCursor = visible && !hasCursor;

      currentMoveSequence = input.cursor?.moveSequence ?? null;
      currentMoveKey =
        currentMoveSequence == null
          ? null
          : `${turnKey}:${currentMoveSequence}`;

      state ??= createCursorAnimationState(target, visible);
      state.visibilitySpring.target = visible ? 1 : 0;

      if (thinkingWithoutCursor && lastThinkTurnKey !== turnKey) {
        lastThinkTurnKey = turnKey;
        snapSpring(state.visibilitySpring, 1);
        state.thinkStartedAt = now();
      }

      if (!hasCursor) {
        resetCursorToPoint(state, target);
        renderCursorState(elements, state);
        scheduleFrame();
        return;
      }

      const beginShow =
        input.cursor?.moveSequence != null &&
        visible &&
        state.visibilitySpring.value <= 0.001 &&
        lastShowTurnKey !== turnKey;

      state.thinkStartedAt = null;
      const distanceToTarget = pointDistance(state.point, target);

      if (!animateMovement || beginShow || distanceToTarget < 0.5) {
        if (beginShow) {
          lastShowTurnKey = turnKey;
          snapSpring(state.visibilitySpring, 1);
        }
        resetCursorToPoint(state, target);
        if (!animateMovement) {
          state.stretchSpring.force = 0;
          state.stretchSpring.value = 1;
          state.stretchSpring.velocity = 0;
        }
        renderCursorState(elements, state);
        notifyArrived();
        scheduleFrame();
        return;
      }

      beginCursorMove(state, target, input.viewportSize);
      justBeganMove = true;
      renderCursorState(elements, state);
      scheduleFrame();
    },
  };
}

// ---------------------------------------------------------------------------
// React overlay
// ---------------------------------------------------------------------------

export interface BrowserAgentCursorOverlayProps {
  conversationId: string;
  cursor?: BrowserAgentCursorInput | null;
  isVisible?: boolean;
  viewportSize?: ViewportSize | null;
}

interface BrowserAgentCursorRendererProps {
  conversationId: string;
  cursor?: BrowserAgentCursorInput | null;
  isVisible: boolean;
  viewportSize: ViewportSize;
}

function BrowserAgentCursorRenderer(props: BrowserAgentCursorRendererProps) {
  const { conversationId, cursor, isVisible, viewportSize } = props;
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const controllerRef = React.useRef<BrowserAgentCursorController | null>(null);

  React.useEffect(() => {
    if (overlayRef.current == null) return;
    const controller = createBrowserAgentCursor(overlayRef.current, {
      assetUrl: CURSOR_ASSET_DATA_URL,
      glowColor: "var(--color-accent-blue)",
      onArrived: (moveSequence) => {
        vscodeApiF.dispatchMessage("browser-use-cursor-arrived", {
          conversationId,
          moveSequence,
        });
      },
    });
    controllerRef.current = controller;
    return () => {
      controllerRef.current = null;
      controller.destroy();
    };
  }, [conversationId]);

  React.useEffect(() => {
    controllerRef.current?.setState({
      cursor,
      isVisible,
      turnKey: `${conversationId}:${isVisible ? "active" : "inactive"}`,
      viewportSize,
    });
  }, [conversationId, cursor, isVisible, viewportSize]);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      data-testid="browser-agent-cursor-overlay"
    />
  );
}

export function BrowserAgentCursorOverlay(
  props: BrowserAgentCursorOverlayProps,
) {
  const { conversationId, cursor, isVisible = true, viewportSize } = props;
  if (viewportSize == null) return null;
  return (
    <BrowserAgentCursorRenderer
      conversationId={conversationId}
      cursor={cursor}
      isVisible={isVisible}
      viewportSize={viewportSize}
    />
  );
}
