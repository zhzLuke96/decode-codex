// Restored from ref/webview/assets/string-CKccV857.js
// npm-backed D3 color and interpolation compatibility aliases.
export {
  color as stringL,
  color as stringS,
  rgb as stringC,
  rgb as stringU,
} from "d3-color";
export type {
  Color,
  ColorCommonInstance,
  ColorFactory,
  RGBColor,
  RGBColorFactory,
} from "d3-color";
export {
  interpolateNumber as stringN,
  interpolateRgb as stringR,
  interpolateString as stringT,
} from "d3-interpolate";

type NumericLike = number | { valueOf(): number };
type NumericInterpolator = (t: number) => number;
type PrototypeConstructor<Prototype extends object> = {
  prototype: Prototype;
};

export function stringD<Prototype extends object>(
  derivedConstructor: PrototypeConstructor<Prototype>,
  baseConstructor: PrototypeConstructor<Prototype>,
  prototype: Prototype,
): void {
  derivedConstructor.prototype = prototype;
  baseConstructor.prototype = prototype;
  (
    prototype as Prototype & {
      constructor: PrototypeConstructor<Prototype>;
    }
  ).constructor = derivedConstructor;
}

export function stringF<BasePrototype extends object, Extension extends object>(
  baseConstructor: PrototypeConstructor<BasePrototype>,
  extension: Extension,
): BasePrototype & Extension {
  return Object.assign(
    Object.create(baseConstructor.prototype) as BasePrototype,
    extension,
  );
}

export function stringO<Value>(value: Value): () => Value {
  return () => value;
}

function interpolateLinear(start: number, delta: number): NumericInterpolator {
  return (t: number) => start + t * delta;
}

export function stringA(
  start: NumericLike,
  end: NumericLike,
): NumericInterpolator {
  const numericStart = +start;
  const numericEnd = +end;
  const delta = numericEnd - numericStart;
  return delta
    ? interpolateLinear(numericStart, delta)
    : stringO(Number.isNaN(numericStart) ? numericEnd : numericStart);
}

export function stringI(
  start: NumericLike,
  end: NumericLike,
): NumericInterpolator {
  const numericStart = +start;
  const numericEnd = +end;
  const delta = numericEnd - numericStart;
  return delta
    ? interpolateLinear(
        numericStart,
        delta > 180 || delta < -180
          ? delta - 360 * Math.round(delta / 360)
          : delta,
      )
    : stringO(Number.isNaN(numericStart) ? numericEnd : numericStart);
}
