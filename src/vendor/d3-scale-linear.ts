// Restored from ref/webview/assets/linear-C3CxBvdt.js
// npm-backed D3 linear scale compatibility aliases.
import { tickIncrement, ticks } from "d3-array";
import { scaleLinear as createScaleLinear, tickFormat } from "d3-scale";
import type { NumberValue, ScaleLinear } from "d3-scale";

export { bisector as linearL, tickStep as linearS } from "d3-array";
export { scaleLinear as linearT } from "d3-scale";
export type { NumberValue, ScaleLinear } from "d3-scale";

type TransformFunction = (value: number) => number;
type LinearScaleFactory = (
  transform?: TransformFunction,
  untransform?: TransformFunction,
) => ScaleLinear<number, number, never>;
type TickFormatter = (value: NumberValue) => string;

type ContinuousScaleLike = {
  domain(): number[];
  domain(values: Iterable<NumberValue>): ContinuousScaleLike;
  range(): unknown[];
  range(values: Iterable<unknown>): ContinuousScaleLike;
  interpolate(): (start: unknown, end: unknown) => (t: number) => unknown;
  interpolate(
    factory: (start: unknown, end: unknown) => (t: number) => unknown,
  ): ContinuousScaleLike;
  clamp(): boolean;
  clamp(value: boolean): ContinuousScaleLike;
  unknown(): unknown;
  unknown(value: unknown): ContinuousScaleLike;
};

type LinearishScale = {
  domain(): number[];
  domain(values: Iterable<NumberValue>): LinearishScale;
};

type LinearTickMethods<Scale> = {
  ticks(count?: number): number[];
  tickFormat(count?: number, specifier?: string): TickFormatter;
  nice(count?: number): Scale;
};

export function linearA<Value>(value: Value): Value {
  return value;
}

export function linearC(value: NumberValue | null | undefined): number {
  return value == null ? NaN : +value;
}

export function linearI<Scale extends ContinuousScaleLike>(
  source: ContinuousScaleLike,
  target: Scale,
): Scale {
  target.domain(source.domain());
  target.range(source.range());
  target.interpolate(source.interpolate());
  target.clamp(source.clamp());
  target.unknown(source.unknown());
  return target;
}

export function linearO(): LinearScaleFactory {
  return function createLinearScale(
    transform: TransformFunction = linearA,
    untransform: TransformFunction = linearA,
  ): ScaleLinear<number, number, never> {
    void transform;
    void untransform;
    return createScaleLinear();
  };
}

export function linearR(): ScaleLinear<number, number, never> {
  return createScaleLinear();
}

export function linearN<Scale extends LinearishScale>(
  scale: Scale,
): Scale & LinearTickMethods<Scale> {
  const linearishScale = scale as Scale & LinearTickMethods<Scale>;

  linearishScale.ticks = function createTicks(count = 10): number[] {
    const domain = scale.domain();
    const start = domain[0] ?? 0;
    const stop = domain[domain.length - 1] ?? start;
    return ticks(start, stop, count);
  };

  linearishScale.tickFormat = function createTickFormat(
    count = 10,
    specifier?: string,
  ): TickFormatter {
    const domain = scale.domain();
    const start = domain[0] ?? 0;
    const stop = domain[domain.length - 1] ?? start;
    return tickFormat(start, stop, count, specifier);
  };

  linearishScale.nice = function nice(count = 10): Scale {
    const domain = scale.domain();
    let startIndex = 0;
    let stopIndex = domain.length - 1;
    let start = domain[startIndex] ?? 0;
    let stop = domain[stopIndex] ?? start;
    let previousStep: number | undefined;
    let maxIterations = 10;

    if (stop < start) {
      [start, stop] = [stop, start];
      [startIndex, stopIndex] = [stopIndex, startIndex];
    }

    while (maxIterations-- > 0) {
      const step = tickIncrement(start, stop, count);
      if (step === previousStep) {
        domain[startIndex] = start;
        domain[stopIndex] = stop;
        scale.domain(domain);
        return scale;
      }

      if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      previousStep = step;
    }

    return scale;
  };

  return linearishScale;
}
