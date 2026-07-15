// Restored from ref/webview/assets/chunk-BSJP7CBP-CrJpo2xF.js
// Vendored Mermaid marker geometry helpers restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";

type PointTuple = [number, number];
type PointObject = {
  x: number;
  y: number;
};
type PointLike = PointTuple | PointObject;

type MarkerArrowType =
  | "aggregation"
  | "extension"
  | "composition"
  | "dependency"
  | "lollipop"
  | "arrow_point"
  | "arrow_barb"
  | "arrow_barb_neo";

type NeoMarkerArrowType = "arrow_point" | "arrow_cross" | "arrow_circle";

type MarkerConfig = {
  arrowTypeStart?: string;
  arrowTypeEnd?: string;
};

type DeltaAndAngle = {
  angle: number;
  deltaX: number;
  deltaY: number;
};

type LabelBounds = {
  x?: number | null;
  y?: number | null;
  width: number;
  height: number;
};

type OffsetLineAccessors = {
  x(point: PointLike, index: number, points: PointLike[]): number;
  y(point: PointLike, index: number, points: PointLike[]): number;
};

export const relationMarkerOffsets: Record<MarkerArrowType, number> = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
  arrow_barb: 0,
  arrow_barb_neo: 5.5,
};

export const neoMarkerOffsets: Record<NeoMarkerArrowType, number> = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5,
};

export const computeLabelTransform = chunkAGHRB4JFN(
  (bounds: LabelBounds, centerOnly?: boolean): string => {
    if (centerOnly) {
      return `translate(${-bounds.width / 2}, ${-bounds.height / 2})`;
    }
    const x = bounds.x ?? 0;
    const y = bounds.y ?? 0;
    return `translate(${-(x + bounds.width / 2)}, ${-(y + bounds.height / 2)})`;
  },
  "computeLabelTransform",
);

function hasMarkerOffset(
  arrowType: string | undefined,
): arrowType is MarkerArrowType {
  return (
    arrowType !== undefined && Object.hasOwn(relationMarkerOffsets, arrowType)
  );
}

const toPoint = chunkAGHRB4JFN((point: PointLike): PointObject => {
  return Array.isArray(point)
    ? {
        x: point[0],
        y: point[1],
      }
    : point;
}, "pointTransformer");

const calculateDeltaAndAngle = chunkAGHRB4JFN(
  (fromPoint?: PointLike, toPointInput?: PointLike): DeltaAndAngle => {
    if (fromPoint === undefined || toPointInput === undefined) {
      return {
        angle: 0,
        deltaX: 0,
        deltaY: 0,
      };
    }

    const from = toPoint(fromPoint);
    const to = toPoint(toPointInput);
    const deltaX = to.x - from.x;
    const deltaY = to.y - from.y;

    return {
      angle: Math.atan(deltaY / deltaX),
      deltaX,
      deltaY,
    };
  },
  "calculateDeltaAndAngle",
);

export const getLineFunctionsWithOffset = chunkAGHRB4JFN(
  (markerConfig: MarkerConfig): OffsetLineAccessors => ({
    x(point: PointLike, index: number, points: PointLike[]): number {
      let offset = 0;
      const firstPoint = toPoint(points[0]);
      const lastPoint = toPoint(points[points.length - 1]);
      const horizontalDirection = firstPoint.x < lastPoint.x ? "left" : "right";

      if (index === 0 && hasMarkerOffset(markerConfig.arrowTypeStart)) {
        const { angle, deltaX } = calculateDeltaAndAngle(points[0], points[1]);
        offset =
          relationMarkerOffsets[markerConfig.arrowTypeStart] *
          Math.cos(angle) *
          (deltaX >= 0 ? 1 : -1);
      } else if (
        index === points.length - 1 &&
        hasMarkerOffset(markerConfig.arrowTypeEnd)
      ) {
        const { angle, deltaX } = calculateDeltaAndAngle(
          points[points.length - 1],
          points[points.length - 2],
        );
        offset =
          relationMarkerOffsets[markerConfig.arrowTypeEnd] *
          Math.cos(angle) *
          (deltaX >= 0 ? 1 : -1);
      }

      const currentPoint = toPoint(point);
      const distanceToEndX = Math.abs(currentPoint.x - lastPoint.x);
      const distanceToEndY = Math.abs(currentPoint.y - lastPoint.y);
      const distanceToStartX = Math.abs(currentPoint.x - firstPoint.x);
      const distanceToStartY = Math.abs(currentPoint.y - firstPoint.y);
      const startMarkerOffset =
        relationMarkerOffsets[markerConfig.arrowTypeStart as MarkerArrowType];
      const endMarkerOffset =
        relationMarkerOffsets[markerConfig.arrowTypeEnd as MarkerArrowType];

      if (
        distanceToEndX < endMarkerOffset &&
        distanceToEndX > 0 &&
        distanceToEndY < endMarkerOffset
      ) {
        let overlapOffset = endMarkerOffset + 1 - distanceToEndX;
        overlapOffset *= horizontalDirection === "right" ? -1 : 1;
        offset -= overlapOffset;
      }

      if (
        distanceToStartX < startMarkerOffset &&
        distanceToStartX > 0 &&
        distanceToStartY < startMarkerOffset
      ) {
        let overlapOffset = startMarkerOffset + 1 - distanceToStartX;
        overlapOffset *= horizontalDirection === "right" ? -1 : 1;
        offset += overlapOffset;
      }

      return currentPoint.x + offset;
    },
    y(point: PointLike, index: number, points: PointLike[]): number {
      let offset = 0;
      const firstPoint = toPoint(points[0]);
      const lastPoint = toPoint(points[points.length - 1]);
      const verticalDirection = firstPoint.y < lastPoint.y ? "down" : "up";

      if (index === 0 && hasMarkerOffset(markerConfig.arrowTypeStart)) {
        const { angle, deltaY } = calculateDeltaAndAngle(points[0], points[1]);
        offset =
          relationMarkerOffsets[markerConfig.arrowTypeStart] *
          Math.abs(Math.sin(angle)) *
          (deltaY >= 0 ? 1 : -1);
      } else if (
        index === points.length - 1 &&
        hasMarkerOffset(markerConfig.arrowTypeEnd)
      ) {
        const { angle, deltaY } = calculateDeltaAndAngle(
          points[points.length - 1],
          points[points.length - 2],
        );
        offset =
          relationMarkerOffsets[markerConfig.arrowTypeEnd] *
          Math.abs(Math.sin(angle)) *
          (deltaY >= 0 ? 1 : -1);
      }

      const currentPoint = toPoint(point);
      const distanceToEndY = Math.abs(currentPoint.y - lastPoint.y);
      const distanceToEndX = Math.abs(currentPoint.x - lastPoint.x);
      const distanceToStartY = Math.abs(currentPoint.y - firstPoint.y);
      const distanceToStartX = Math.abs(currentPoint.x - firstPoint.x);
      const startMarkerOffset =
        relationMarkerOffsets[markerConfig.arrowTypeStart as MarkerArrowType];
      const endMarkerOffset =
        relationMarkerOffsets[markerConfig.arrowTypeEnd as MarkerArrowType];

      if (
        distanceToEndY < endMarkerOffset &&
        distanceToEndY > 0 &&
        distanceToEndX < endMarkerOffset
      ) {
        let overlapOffset = endMarkerOffset + 1 - distanceToEndY;
        overlapOffset *= verticalDirection === "up" ? -1 : 1;
        offset -= overlapOffset;
      }

      if (
        distanceToStartY < startMarkerOffset &&
        distanceToStartY > 0 &&
        distanceToStartX < startMarkerOffset
      ) {
        let overlapOffset = startMarkerOffset + 1 - distanceToStartY;
        overlapOffset *= verticalDirection === "up" ? -1 : 1;
        offset += overlapOffset;
      }

      return currentPoint.y + offset;
    },
  }),
  "getLineFunctionsWithOffset",
);

export function initChunkBSJP7CBP(): void {}

export const chunkBSJP7CBPR = relationMarkerOffsets;
export const chunkBSJP7CBPI = neoMarkerOffsets;
export const chunkBSJP7CBPN = getLineFunctionsWithOffset;
export const chunkBSJP7CBPT = computeLabelTransform;
