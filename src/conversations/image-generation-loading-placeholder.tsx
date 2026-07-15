// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Loading placeholder shown while an image is being generated, with an animated canvas dot field.

import { useEffect, useRef } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { useReducedMotion } from "../utils/use-reduced-motion";
import { useIsDark } from "../utils/use-is-dark";
import { ShimmerText } from "../boundaries/onboarding-commons-externals.facade";

const dotFieldStyles = {
  dots: "_dots_15bw4_1",
  "dot-field-opacity": "_dot-field-opacity_15bw4_1",
  reducedMotion: "_reducedMotion_15bw4_19",
} as const;

const GRID_SPACING_BASE = 27;
const DOT_SCALE = 1.35;
const MIN_DOT_RADIUS = 0.55;
const MIN_DOT_ALPHA = 0.03;
const FIELD_SCALE = 0.78;
const FIELD_WEIGHT_PRIMARY = 1.2;
const FIELD_WEIGHT_SECONDARY = 0.82;
const FIELD_EXPONENT = 1.18;
const DURATION_SCALE = 1.2;
const BASE_DURATIONS = {
  offsetX1: 4500,
  offsetY1: 6330,
  offsetX2: 5600,
  offsetY2: 5750,
  dotSize: 2250,
  fieldSize1: 3600,
  fieldSize2: 2400,
};
const FRAME_INTERVAL_MS = 1000 / 30;

export function ImageGenerationLoadingPlaceholder() {
  const intl = useIntl();
  const ariaLabel = intl.formatMessage({
    id: "codex.chatGptConversation.imageGeneration.loadingLabel",
    defaultMessage: "Generating image...",
    description: "Aria label for the image generation loading placeholder",
  });
  return (
    <div
      aria-busy={true}
      aria-label={ariaLabel}
      className="electron-dark:text-white/70 relative my-1 aspect-square w-full max-w-[400px] overflow-clip rounded-[36px] bg-token-bg-tertiary/70 text-token-text-secondary dark:text-white/70"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 p-6">
        <div className="max-w-[70%] text-base leading-5 font-semibold">
          <ShimmerText>
            <FormattedMessage
              id="codex.chatGptConversation.imageGeneration.loadingHeadline"
              defaultMessage="Creating image"
              description="Headline shown on the image generation loading placeholder"
            />
          </ShimmerText>
        </div>
      </div>
      <DotFieldCanvas />
    </div>
  );
}

type DotFieldGrid = {
  width: number;
  height: number;
  dpr: number;
  spacing: number;
  xPositions: Float32Array;
  yPositions: Float32Array;
  xNormals: Float32Array;
  yNormals: Float32Array;
};

function DotFieldCanvas() {
  const reducedMotion = useReducedMotion();
  const isDark = useIsDark();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (container == null || canvas == null || context == null) {
      return;
    }

    const TAU = Math.PI * 2;
    const fillColor =
      getComputedStyle(container).color || (isDark ? "white" : "black");
    const scaleDuration = (base: number) =>
      base * DURATION_SCALE * randomInRange(1, 1.35);
    const config = {
      durations: {
        offsetX1: scaleDuration(BASE_DURATIONS.offsetX1),
        offsetY1: scaleDuration(BASE_DURATIONS.offsetY1),
        offsetX2: scaleDuration(BASE_DURATIONS.offsetX2),
        offsetY2: scaleDuration(BASE_DURATIONS.offsetY2),
        dotSize: scaleDuration(BASE_DURATIONS.dotSize),
        fieldSize1: scaleDuration(BASE_DURATIONS.fieldSize1),
        fieldSize2: scaleDuration(BASE_DURATIONS.fieldSize2),
      },
      phases: {
        offsetX1: Math.random(),
        offsetY1: Math.random(),
        offsetX2: Math.random(),
        offsetY2: Math.random(),
        dotSize: Math.random(),
        fieldSize1: Math.random(),
        fieldSize2: Math.random(),
      },
      bounds: {
        x1Start: randomInRange(0.1, 0.32),
        x1End: randomInRange(0.68, 0.9),
        y1Start: randomInRange(0.1, 0.32),
        y1End: randomInRange(0.68, 0.9),
        x2Start: randomInRange(0.68, 0.9),
        x2End: randomInRange(0.1, 0.32),
        y2Start: randomInRange(0.68, 0.9),
        y2End: randomInRange(0.1, 0.32),
      },
      dotSizeRange: {
        start: randomInRange(0.08, 0.11),
        end: randomInRange(0.2, 0.25),
      },
      fieldSizeRange: {
        firstStart: randomInRange(0.42, 0.52),
        firstEnd: randomInRange(0.62, 0.75),
        secondStart: randomInRange(0.5, 0.62),
        secondEnd: randomInRange(0.74, 0.9),
      },
    };

    let animationFrameId: number | null = null;
    let lastFrameTime = 0;
    let grid: DotFieldGrid | null = null;
    let needsResize = true;
    let startTime: number | null = null;

    const measureGrid = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(0, Math.floor(rect.width));
      const height = Math.max(0, Math.floor(rect.height));
      if (width === 0 || height === 0) {
        grid = null;
        needsResize = false;
        return;
      }
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const pixelWidth = Math.floor(width * dpr);
      const pixelHeight = Math.floor(height * dpr);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      const spacing = Math.max(1, GRID_SPACING_BASE / dpr);
      const columns = Math.max(1, Math.floor(width / spacing));
      const rows = Math.max(1, Math.floor(height / spacing));
      const offsetX = (width - (columns - 1) * spacing) * 0.5;
      const offsetY = (height - (rows - 1) * spacing) * 0.5;
      const xPositions = new Float32Array(columns);
      const yPositions = new Float32Array(rows);
      const xNormals = new Float32Array(columns);
      const yNormals = new Float32Array(rows);
      for (let col = 0; col < columns; col += 1) {
        xPositions[col] = offsetX + col * spacing;
        xNormals[col] = columns === 1 ? 0.5 : col / (columns - 1);
      }
      for (let row = 0; row < rows; row += 1) {
        yPositions[row] = offsetY + row * spacing;
        yNormals[row] = rows === 1 ? 0.5 : row / (rows - 1);
      }
      grid = {
        width,
        height,
        dpr,
        spacing,
        xPositions,
        yPositions,
        xNormals,
        yNormals,
      };
      needsResize = false;
    };

    const renderFrame = (timestamp: number) => {
      if (
        !reducedMotion &&
        lastFrameTime !== 0 &&
        timestamp - lastFrameTime < FRAME_INTERVAL_MS
      ) {
        animationFrameId = requestAnimationFrame(renderFrame);
        return;
      }
      lastFrameTime = timestamp;
      startTime ??= timestamp;
      if (needsResize || grid == null) {
        measureGrid();
      }
      if (grid == null) {
        animationFrameId = null;
        return;
      }
      const elapsed = timestamp - startTime;
      const phaseFor = (duration: number, phase: number) =>
        triangleWave(elapsed / duration + phase);
      const centerX1 = lerp(
        config.bounds.x1Start,
        config.bounds.x1End,
        easeInOutCubic(
          phaseFor(config.durations.offsetX1, config.phases.offsetX1),
        ),
      );
      const centerY1 = lerp(
        config.bounds.y1Start,
        config.bounds.y1End,
        smoothstep(phaseFor(config.durations.offsetY1, config.phases.offsetY1)),
      );
      const centerX2 = lerp(
        config.bounds.x2Start,
        config.bounds.x2End,
        easeInOutCubic(
          phaseFor(config.durations.offsetX2, config.phases.offsetX2),
        ),
      );
      const centerY2 = lerp(
        config.bounds.y2Start,
        config.bounds.y2End,
        smoothstep(phaseFor(config.durations.offsetY2, config.phases.offsetY2)),
      );
      const fieldSize1 =
        FIELD_SCALE *
        lerp(
          config.fieldSizeRange.firstStart,
          config.fieldSizeRange.firstEnd,
          smoothstep(
            phaseFor(config.durations.fieldSize1, config.phases.fieldSize1),
          ),
        );
      const fieldSize2 =
        FIELD_SCALE *
        lerp(
          config.fieldSizeRange.secondStart,
          config.fieldSizeRange.secondEnd,
          smoothstep(
            phaseFor(config.durations.fieldSize2, config.phases.fieldSize2),
          ),
        );
      const dotSizeRatio = lerp(
        config.dotSizeRange.start,
        config.dotSizeRange.end,
        smoothstep(phaseFor(config.durations.dotSize, config.phases.dotSize)),
      );

      context.save();
      context.setTransform(grid.dpr, 0, 0, grid.dpr, 0, 0);
      context.clearRect(0, 0, grid.width, grid.height);
      context.fillStyle = fillColor;
      context.beginPath();
      for (let row = 0; row < grid.yPositions.length; row += 1) {
        const y = grid.yPositions[row];
        const normalY = grid.yNormals[row];
        for (let col = 0; col < grid.xPositions.length; col += 1) {
          const x = grid.xPositions[col];
          const normalX = grid.xNormals[col];
          const intensity =
            ((1 -
              smoothstep01(
                0,
                fieldSize1,
                Math.hypot(normalX - centerX1, normalY - centerY1),
              )) *
              FIELD_WEIGHT_PRIMARY +
              (1 -
                smoothstep01(
                  0,
                  fieldSize2,
                  Math.hypot(normalX - centerX2, normalY - centerY2),
                )) *
                FIELD_WEIGHT_SECONDARY) **
            +FIELD_EXPONENT;
          if (intensity <= MIN_DOT_ALPHA) {
            continue;
          }
          const radius = Math.max(
            MIN_DOT_RADIUS,
            grid.spacing * 0.5 * DOT_SCALE * intensity * dotSizeRatio,
          );
          context.moveTo(x + radius, y);
          context.arc(x, y, radius, 0, TAU);
        }
      }
      context.fill();
      context.restore();
      animationFrameId = reducedMotion
        ? null
        : requestAnimationFrame(renderFrame);
    };

    const resizeObserver = new ResizeObserver(() => {
      needsResize = true;
      animationFrameId ??= requestAnimationFrame(renderFrame);
    });
    resizeObserver.observe(container);
    animationFrameId = requestAnimationFrame(renderFrame);
    return () => {
      if (animationFrameId != null) {
        cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
    };
  }, [isDark, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={classNames(
        dotFieldStyles.dots,
        reducedMotion && dotFieldStyles.reducedMotion,
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden={true}
        className="block h-full w-full"
      />
    </div>
  );
}

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function smoothstep01(edge0: number, edge1: number, value: number): number {
  const t = clamp01((value - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function triangleWave(value: number): number {
  const fraction = value % 1;
  return fraction <= 0.5 ? fraction * 2 : 2 - fraction * 2;
}

function smoothstep(value: number): number {
  return value * value * (3 - 2 * value);
}

function easeInOutCubic(value: number): number {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - (-2 * value + 2) ** 3 / 2;
}

function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

function randomInRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}
