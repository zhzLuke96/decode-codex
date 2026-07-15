// Restored from ref/webview/assets/step-K6tEdR0Q.js
// Mermaid's legacy bump curves are not public d3-shape exports, so keep the
// small curve factory wrapper while the rest of the D3 curve bundle re-exports
// upstream d3-shape.
import type { CurveFactory, CurveGenerator } from "d3-shape";

type BumpCurveAxis = "x" | "y";

interface BumpCurveContext {
  moveTo(x: number, y: number): void;
  lineTo(x: number, y: number): void;
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void;
  closePath(): void;
}

class BumpCurve implements CurveGenerator {
  private lineState = Number.NaN;
  private pointState = 0;
  private previousX = Number.NaN;
  private previousY = Number.NaN;

  constructor(
    private readonly context: BumpCurveContext,
    private readonly axis: BumpCurveAxis,
  ) {}

  areaStart(): void {
    this.lineState = 0;
  }

  areaEnd(): void {
    this.lineState = Number.NaN;
  }

  lineStart(): void {
    this.pointState = 0;
  }

  lineEnd(): void {
    if (this.lineState || (this.lineState !== 0 && this.pointState === 1)) {
      this.context.closePath();
    }
    this.lineState = 1 - this.lineState;
  }

  point(x: number, y: number): void {
    const pointX = +x;
    const pointY = +y;

    switch (this.pointState) {
      case 0:
        this.pointState = 1;
        if (this.lineState) {
          this.context.lineTo(pointX, pointY);
        } else {
          this.context.moveTo(pointX, pointY);
        }
        break;
      case 1:
        this.pointState = 2;
        this.drawBump(pointX, pointY);
        break;
      default:
        this.drawBump(pointX, pointY);
        break;
    }

    this.previousX = pointX;
    this.previousY = pointY;
  }

  private drawBump(pointX: number, pointY: number): void {
    if (this.axis === "x") {
      const controlX = (this.previousX + pointX) / 2;
      this.context.bezierCurveTo(
        controlX,
        this.previousY,
        controlX,
        pointY,
        pointX,
        pointY,
      );
      return;
    }

    const controlY = (this.previousY + pointY) / 2;
    this.context.bezierCurveTo(
      this.previousX,
      controlY,
      pointX,
      controlY,
      pointX,
      pointY,
    );
  }
}

function createBumpCurveFactory(axis: BumpCurveAxis): CurveFactory {
  return (context) => new BumpCurve(context, axis);
}

export const curveBumpX: CurveFactory = createBumpCurveFactory("x");
export const curveBumpY: CurveFactory = createBumpCurveFactory("y");
