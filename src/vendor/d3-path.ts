// Restored from ref/webview/assets/path-DSoH76MG.js
// D3 path helpers restored as npm-backed legacy aliases.
import { path as createD3Path } from "d3-path";
import type { Path } from "d3-path";

export { path } from "d3-path";
export type { Path } from "d3-path";

export type PathFactory = () => Path;

export type DigitConfigurableShape<TShape extends object> = TShape & {
  digits: {
    (): number | null;
    (digits: number | null): TShape;
  };
};

export function constantAccessor<Value>(value: Value): () => Value {
  return function constantValue(): Value {
    return value;
  };
}

class RoundedPath implements Path {
  private readonly innerPath: Path = createD3Path();
  private readonly scale: number;

  constructor(digits: number) {
    this.scale = 10 ** digits;
  }

  moveTo(x: number, y: number): void {
    this.innerPath.moveTo(this.round(x), this.round(y));
  }

  closePath(): void {
    this.innerPath.closePath();
  }

  lineTo(x: number, y: number): void {
    this.innerPath.lineTo(this.round(x), this.round(y));
  }

  quadraticCurveTo(
    controlX: number,
    controlY: number,
    x: number,
    y: number,
  ): void {
    this.innerPath.quadraticCurveTo(
      this.round(controlX),
      this.round(controlY),
      this.round(x),
      this.round(y),
    );
  }

  bezierCurveTo(
    controlX1: number,
    controlY1: number,
    controlX2: number,
    controlY2: number,
    x: number,
    y: number,
  ): void {
    this.innerPath.bezierCurveTo(
      this.round(controlX1),
      this.round(controlY1),
      this.round(controlX2),
      this.round(controlY2),
      this.round(x),
      this.round(y),
    );
  }

  arcTo(
    tangentX1: number,
    tangentY1: number,
    tangentX2: number,
    tangentY2: number,
    radius: number,
  ): void {
    this.innerPath.arcTo(
      this.round(tangentX1),
      this.round(tangentY1),
      this.round(tangentX2),
      this.round(tangentY2),
      this.round(radius),
    );
  }

  arc(
    centerX: number,
    centerY: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void {
    this.innerPath.arc(
      this.round(centerX),
      this.round(centerY),
      this.round(radius),
      startAngle,
      endAngle,
      counterclockwise,
    );
  }

  rect(x: number, y: number, width: number, height: number): void {
    this.innerPath.rect(
      this.round(x),
      this.round(y),
      this.round(width),
      this.round(height),
    );
  }

  toString(): string {
    return this.innerPath.toString();
  }

  private round(value: number): number {
    return Math.round(Number(value) * this.scale) / this.scale;
  }
}

function createPathWithDigits(digits: number | null): Path {
  return digits == null || digits > 15
    ? createD3Path()
    : new RoundedPath(digits);
}

export function withPathDigits<TShape extends object>(
  shape: TShape,
): PathFactory {
  let digits: number | null = 3;
  const configurableShape = shape as DigitConfigurableShape<TShape>;
  configurableShape.digits = function pathDigits(nextDigits?: number | null) {
    if (!arguments.length) return digits;
    if (nextDigits == null) {
      digits = null;
    } else {
      const roundedDigits = Math.floor(nextDigits);
      if (!(roundedDigits >= 0)) {
        throw RangeError(`invalid digits: ${nextDigits}`);
      }
      digits = roundedDigits;
    }
    return shape;
  } as DigitConfigurableShape<TShape>["digits"];
  return () => createPathWithDigits(digits);
}

export const pathN = constantAccessor;
export const pathT = withPathDigits;
