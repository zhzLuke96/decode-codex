// Restored from ref/webview/assets/merge-Baqijoc_.js
// Deep merge implementation behind the lodash merge compatibility barrel.
import {
  baseAssignValue,
  baseRestWithToString,
  copyObject,
  eq,
  isArguments,
  isArrayLikeObject,
  isFunction,
  isObject,
  isObjectLike,
  isIterateeCall,
  keysIn,
  safeGet,
} from "./helpers";
import {
  cloneBuffer,
  cloneTypedArray,
  copyArrayLikeObject,
  initCloneObject,
  isBuffer,
  isTypedArray,
} from "./clone";

import type { AnyRecord } from "./helpers";

type MergeCustomizer = (
  destinationValue: unknown,
  sourceValue: unknown,
  key: string,
  destination: AnyRecord,
  source: AnyRecord,
  stack: Map<unknown, unknown>,
) => unknown;

function isPlainObject(value: unknown): boolean {
  if (
    !isObjectLike(value) ||
    Object.prototype.toString.call(value) !== "[object Object]"
  ) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype === null) return true;
  const constructor =
    Object.prototype.hasOwnProperty.call(prototype, "constructor") &&
    prototype.constructor;
  return (
    typeof constructor === "function" &&
    constructor instanceof constructor &&
    Function.prototype.toString.call(constructor) ===
      Function.prototype.toString.call(Object)
  );
}

function assignMergeValue(
  object: AnyRecord,
  key: string | symbol,
  value: unknown,
): void {
  if (
    (value !== undefined && !eq(object[key], value)) ||
    (value === undefined && !(key in object))
  ) {
    baseAssignValue(object, key, value);
  }
}

function cloneMergeSource(
  destinationValue: unknown,
  sourceValue: unknown,
): { shouldRecurse: boolean; value: unknown } {
  const sourceIsArray = Array.isArray(sourceValue);
  const sourceIsBuffer = !sourceIsArray && isBuffer(sourceValue);
  const sourceIsTypedArray =
    !sourceIsArray && !sourceIsBuffer && isTypedArray(sourceValue);

  if (sourceIsArray || sourceIsBuffer || sourceIsTypedArray) {
    if (Array.isArray(destinationValue)) {
      return { shouldRecurse: true, value: destinationValue };
    }
    if (isArrayLikeObject(destinationValue)) {
      return {
        shouldRecurse: true,
        value: copyArrayLikeObject(destinationValue),
      };
    }
    if (sourceIsBuffer) {
      return { shouldRecurse: false, value: cloneBuffer(sourceValue, true) };
    }
    if (sourceIsTypedArray) {
      return {
        shouldRecurse: false,
        value: cloneTypedArray(sourceValue, true),
      };
    }
    return { shouldRecurse: true, value: [] };
  }

  if (isPlainObject(sourceValue) || isArguments(sourceValue)) {
    let result = destinationValue;
    if (isArguments(destinationValue)) {
      result = copyObject(
        Object(destinationValue) as AnyRecord,
        keysIn(destinationValue),
      );
    } else if (!isObject(destinationValue) || isFunction(destinationValue)) {
      result = initCloneObject(sourceValue);
    }
    return { shouldRecurse: true, value: result };
  }

  return { shouldRecurse: false, value: sourceValue };
}

function baseMergeDeep(
  destination: AnyRecord,
  source: AnyRecord,
  key: string | symbol,
  sourceIndex: number,
  mergeFunc: typeof baseMerge,
  customizer: MergeCustomizer | undefined,
  stack: Map<unknown, unknown>,
): void {
  const destinationValue = safeGet(destination, key);
  const sourceValue = safeGet(source, key);
  if (stack.has(sourceValue)) {
    assignMergeValue(destination, key, stack.get(sourceValue));
    return;
  }

  const customValue = customizer?.(
    destinationValue,
    sourceValue,
    `${String(key)}`,
    destination,
    source,
    stack,
  );
  let shouldRecurse = customValue === undefined;
  let newValue = customValue;

  if (shouldRecurse) {
    const clone = cloneMergeSource(destinationValue, sourceValue);
    shouldRecurse = clone.shouldRecurse;
    newValue = clone.value;
  }

  if (shouldRecurse) {
    stack.set(sourceValue, newValue);
    mergeFunc(
      Object(newValue) as AnyRecord,
      Object(sourceValue) as AnyRecord,
      sourceIndex,
      customizer,
      stack,
    );
    stack.delete(sourceValue);
  }

  assignMergeValue(destination, key, newValue);
}

function baseMerge(
  destination: AnyRecord,
  source: AnyRecord,
  sourceIndex = 0,
  customizer?: MergeCustomizer,
  stack = new Map<unknown, unknown>(),
): void {
  if (destination === source) return;
  for (const key of keysIn(source)) {
    const sourceValue = source[key];
    if (isObject(sourceValue)) {
      baseMergeDeep(
        destination,
        source,
        key,
        sourceIndex,
        baseMerge,
        customizer,
        stack,
      );
    } else {
      const customValue = customizer?.(
        safeGet(destination, key),
        sourceValue,
        `${String(key)}`,
        destination,
        source,
        stack,
      );
      assignMergeValue(
        destination,
        key,
        customValue === undefined ? sourceValue : customValue,
      );
    }
  }
}

function createAssigner(
  assigner: (
    object: AnyRecord,
    source: AnyRecord,
    index: number,
    customizer?: MergeCustomizer,
  ) => void,
): (...args: unknown[]) => unknown {
  return baseRestWithToString((object: unknown, sources: unknown[]) => {
    let sourcesLength = sources.length;
    const guard = sourcesLength > 2 ? sources[2] : undefined;
    let customizer = sourcesLength > 1 ? sources[sourcesLength - 1] : undefined;
    if (assigner.length > 3 && typeof customizer === "function") {
      sourcesLength -= 1;
    } else {
      customizer = undefined;
    }
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = sourcesLength < 3 ? undefined : customizer;
      sourcesLength = 1;
    }
    const result = Object(object);
    for (let index = 0; index < sourcesLength; index += 1) {
      const source = sources[index];
      if (source) {
        assigner(
          result as AnyRecord,
          Object(source) as AnyRecord,
          index,
          customizer as MergeCustomizer | undefined,
        );
      }
    }
    return result;
  });
}

export const merge = createAssigner((object, source, sourceIndex) => {
  baseMerge(object, source, sourceIndex);
});

export function initLodashMergeChunk(): void {}
