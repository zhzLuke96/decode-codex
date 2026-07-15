// Restored from ref/webview/assets/merge-Baqijoc_.js
// Rest-argument wrappers and iteratee-call detection for lodash merge.
import { eq, isArrayLike, isIndex, isObject } from "./guards";
import { nativeDefineProperty } from "./native";

import type { AnyRecord } from "./types";

function applyWithShortArgList(
  func: (...args: unknown[]) => unknown,
  thisArg: unknown,
  args: unknown[],
): unknown {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
    default:
      return func.apply(thisArg, args);
  }
}

function shortOut<TValue extends (...args: unknown[]) => unknown>(
  func: TValue,
): TValue {
  let count = 0;
  let lastCalled = 0;
  return function shorted(this: unknown, ...args: unknown[]) {
    const stamp = Date.now();
    const remaining = 16 - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      count += 1;
      if (count >= 800) return args[0];
    } else {
      count = 0;
    }
    return func.apply(this, args);
  } as TValue;
}

export function constant<TValue>(value: TValue): () => TValue {
  return () => value;
}

export const setToString = shortOut(
  nativeDefineProperty
    ? function setFunctionSource(
        func: (...args: unknown[]) => unknown,
        source: string,
      ) {
        return nativeDefineProperty(func, "toString", {
          configurable: true,
          enumerable: false,
          value: constant(source),
          writable: true,
        });
      }
    : function identity<TValue>(value: TValue): TValue {
        return value;
      },
);

export function baseRest(
  func: (...args: unknown[]) => unknown,
  start: number = Math.max(func.length - 1, 0),
  transformRest: (rest: unknown[]) => unknown = (rest) => rest,
): (...args: unknown[]) => unknown {
  return function restWrapper(this: unknown, ...args: unknown[]) {
    const rest = args.slice(start);
    const leading = args.slice(0, start);
    leading[start] = transformRest(rest);
    return applyWithShortArgList(func, this, leading);
  };
}

export function baseRestWithToString(
  func: (...args: unknown[]) => unknown,
  start?: number,
): (...args: unknown[]) => unknown {
  return setToString(baseRest(func, start), `${func}`);
}

export function isIterateeCall(
  value: unknown,
  index: unknown,
  object: unknown,
): boolean {
  if (!isObject(object)) return false;
  const indexType = typeof index;
  const isKey =
    indexType === "number"
      ? isArrayLike(object) && isIndex(index, object.length)
      : indexType === "string" && index in Object(object);
  return isKey
    ? eq((object as AnyRecord)[index as keyof AnyRecord], value)
    : false;
}

export function initLodashMergeHelpersChunk(): void {}
