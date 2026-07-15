// Restored from ref/webview/assets/merge-Baqijoc_.js
// Type and shape checks used by the lodash merge implementation.
import { objectPrototype, objectToString } from "./native";

export function isObject(value: unknown): value is object {
  const valueType = typeof value;
  return value != null && (valueType === "object" || valueType === "function");
}

export function isObjectLike(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

export function isFunction(
  value: unknown,
): value is (...args: unknown[]) => unknown {
  if (!isObject(value)) return false;
  const tag = objectToString.call(value);
  return (
    tag === "[object Function]" ||
    tag === "[object GeneratorFunction]" ||
    tag === "[object AsyncFunction]" ||
    tag === "[object Proxy]"
  );
}

export function eq(left: unknown, right: unknown): boolean {
  return left === right || (left !== left && right !== right);
}

export function isLength(value: unknown): value is number {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
}

export function isArrayLike(value: unknown): value is ArrayLike<unknown> {
  return (
    value != null &&
    isLength((value as { length?: unknown }).length) &&
    !isFunction(value)
  );
}

export function isArrayLikeObject(value: unknown): value is ArrayLike<unknown> {
  return isObjectLike(value) && isArrayLike(value);
}

export function isIndex(
  value: unknown,
  length: number = Number.MAX_SAFE_INTEGER,
): boolean {
  const valueType = typeof value;
  return (
    !!length &&
    (valueType === "number" ||
      (valueType !== "symbol" && /^(?:0|[1-9]\d*)$/.test(String(value)))) &&
    Number(value) > -1 &&
    Number(value) % 1 === 0 &&
    Number(value) < length
  );
}

export function isArguments(value: unknown): boolean {
  return (
    isObjectLike(value) && objectToString.call(value) === "[object Arguments]"
  );
}

export function isPrototype(value: unknown): boolean {
  const constructor = value && (value as { constructor?: unknown }).constructor;
  const prototype =
    (typeof constructor === "function" &&
      (constructor as { prototype?: unknown }).prototype) ||
    objectPrototype;
  return value === prototype;
}

export const getPrototype = Object.getPrototypeOf
  ? function getObjectPrototype(value: unknown): unknown {
      return Object.getPrototypeOf(Object(value));
    }
  : function noPrototype(): unknown {
      return null;
    };
