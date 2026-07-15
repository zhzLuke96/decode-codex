// Restored from ref/webview/assets/merge-Baqijoc_.js
// Key enumeration and array-copy helpers for lodash merge.
import { hasOwn } from "./native";
import { isArrayLike, isIndex, isObject, isPrototype } from "./guards";

import type { AnyRecord } from "./types";

function baseKeysIn(value: unknown): string[] {
  if (value == null) return [];
  const result: string[] = [];
  for (const key in Object(value)) result.push(key);
  return result;
}

function nativeKeysIn(value: unknown): string[] {
  if (!isObject(value)) return baseKeysIn(value);
  const isProto = isPrototype(value);
  const result: string[] = [];
  for (const key in value as AnyRecord) {
    if (key !== "constructor" || (!isProto && hasOwn.call(value, key))) {
      result.push(key);
    }
  }
  return result;
}

export function keysIn(value: unknown): string[] {
  if (!isArrayLike(value)) return nativeKeysIn(value);
  const result = Array.from({ length: value.length }, (_item, index) =>
    String(index),
  );
  for (const key in Object(value)) {
    if (key !== "length" && !isIndex(key, result.length)) result.push(key);
  }
  return result;
}

export function copyArray<TValue>(
  source: ArrayLike<TValue>,
  destination: TValue[] = Array(source.length),
): TValue[] {
  for (let index = 0; index < source.length; index += 1) {
    destination[index] = source[index];
  }
  return destination;
}
