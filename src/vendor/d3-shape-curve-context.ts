// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared D3 curve types backed by d3-shape.
import type { Path } from "d3-path";

export type {
  CurveFactory,
  CurveGenerator as Curve,
  CurveGeneratorLineOnly,
} from "d3-shape";

export type CurveContext = CanvasRenderingContext2D | Path;
