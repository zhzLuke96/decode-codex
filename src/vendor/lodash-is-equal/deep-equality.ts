// Restored from ref/webview/assets/isEqual-DoHfXEc2.js
// Deep-equality implementation used by Codex's bundled lodash compatibility layer.
import type { EqualityCustomizer, IsEqualFunction, SeenPairs } from "./types";

const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;
const objectToString = Object.prototype.toString;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

function sameValueZero(leftValue: unknown, rightValue: unknown) {
  return (
    leftValue === rightValue ||
    (leftValue !== leftValue && rightValue !== rightValue)
  );
}

function isObjectLike(value: unknown): value is object {
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

function getTag(value: unknown) {
  return objectToString.call(value);
}

function enumerableKeys(value: object): PropertyKey[] {
  let keys: PropertyKey[] = Object.keys(value);
  for (let symbol of Object.getOwnPropertySymbols(value))
    if (propertyIsEnumerable.call(value, symbol)) keys.push(symbol);
  return keys;
}

function hasSeenPair(
  stack: SeenPairs,
  leftObject: object,
  rightObject: object,
) {
  return stack.get(leftObject)?.get(rightObject) === true;
}

function rememberPair(
  stack: SeenPairs,
  leftObject: object,
  rightObject: object,
) {
  let rightObjects = stack.get(leftObject);
  if (!rightObjects) {
    rightObjects = new WeakMap();
    stack.set(leftObject, rightObjects);
  }
  rightObjects.set(rightObject, true);
}

function bytesFor(value: ArrayBuffer | ArrayBufferView) {
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
}

function equalBytes(
  leftValue: ArrayBuffer | ArrayBufferView,
  rightValue: ArrayBuffer | ArrayBufferView,
) {
  let leftBytes = bytesFor(leftValue);
  let rightBytes = bytesFor(rightValue);
  if (leftBytes.length !== rightBytes.length) return false;
  for (let index = 0; index < leftBytes.length; index++)
    if (leftBytes[index] !== rightBytes[index]) return false;
  return true;
}

function equalUnordered(
  leftValues: readonly unknown[],
  rightValues: readonly unknown[],
  bitmask: number,
  customizer: EqualityCustomizer | undefined,
  stack: SeenPairs,
) {
  if (leftValues.length > rightValues.length) return false;
  if (
    !(bitmask & COMPARE_PARTIAL_FLAG) &&
    leftValues.length !== rightValues.length
  )
    return false;

  let matchedRightIndexes = new Set<number>();
  for (let leftIndex = 0; leftIndex < leftValues.length; leftIndex++) {
    let matched = false;
    for (let rightIndex = 0; rightIndex < rightValues.length; rightIndex++) {
      if (matchedRightIndexes.has(rightIndex)) continue;
      if (
        isEqualN(
          leftValues[leftIndex],
          rightValues[rightIndex],
          bitmask,
          customizer,
          stack,
        )
      ) {
        matchedRightIndexes.add(rightIndex);
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}

function equalArrayLike(
  leftArray: ArrayLike<unknown>,
  rightArray: ArrayLike<unknown>,
  bitmask: number,
  customizer: EqualityCustomizer | undefined,
  stack: SeenPairs,
) {
  if (leftArray.length > rightArray.length) return false;
  if (
    !(bitmask & COMPARE_PARTIAL_FLAG) &&
    leftArray.length !== rightArray.length
  )
    return false;

  let leftValues = Array.from(leftArray);
  let rightValues = Array.from(rightArray);
  if (bitmask & COMPARE_UNORDERED_FLAG)
    return equalUnordered(leftValues, rightValues, bitmask, customizer, stack);

  for (let index = 0; index < leftValues.length; index++) {
    let customized = customizer?.(
      leftValues[index],
      rightValues[index],
      index,
      leftArray,
      rightArray,
      stack,
    );
    if (
      customized === undefined
        ? !isEqualN(
            leftValues[index],
            rightValues[index],
            bitmask,
            customizer,
            stack,
          )
        : !customized
    )
      return false;
  }
  return true;
}

function equalObjects(
  leftObject: object,
  rightObject: object,
  bitmask: number,
  customizer: EqualityCustomizer | undefined,
  stack: SeenPairs,
) {
  let leftKeys = enumerableKeys(leftObject);
  let rightKeys = enumerableKeys(rightObject);
  if (leftKeys.length > rightKeys.length) return false;
  if (!(bitmask & COMPARE_PARTIAL_FLAG) && leftKeys.length !== rightKeys.length)
    return false;

  let rightKeySet = new Set(rightKeys);
  for (let key of leftKeys) if (!rightKeySet.has(key)) return false;
  for (let key of leftKeys) {
    let leftValue = (leftObject as Record<PropertyKey, unknown>)[key];
    let rightValue = (rightObject as Record<PropertyKey, unknown>)[key];
    let customized = customizer?.(
      leftValue,
      rightValue,
      key,
      leftObject,
      rightObject,
      stack,
    );
    if (
      customized === undefined
        ? !isEqualN(leftValue, rightValue, bitmask, customizer, stack)
        : !customized
    )
      return false;
  }
  return true;
}

export function isEqualN(
  leftValue: unknown,
  rightValue: unknown,
  bitmask: number = 0,
  customizer?: EqualityCustomizer,
  stack: SeenPairs = new WeakMap(),
): boolean {
  if (sameValueZero(leftValue, rightValue)) return true;

  let customized = customizer?.(
    leftValue,
    rightValue,
    undefined,
    undefined,
    undefined,
    stack,
  );
  if (customized !== undefined) return !!customized;
  if (!isObjectLike(leftValue) || !isObjectLike(rightValue)) return false;

  let leftObject = leftValue as object;
  let rightObject = rightValue as object;
  if (hasSeenPair(stack, leftObject, rightObject)) return true;
  rememberPair(stack, leftObject, rightObject);

  let leftTag = getTag(leftValue);
  if (leftTag !== getTag(rightValue)) return false;
  if (leftTag === "[object Array]" || leftTag === "[object Arguments]")
    return equalArrayLike(
      leftValue as ArrayLike<unknown>,
      rightValue as ArrayLike<unknown>,
      bitmask,
      customizer,
      stack,
    );
  if (leftTag === "[object ArrayBuffer]")
    return equalBytes(leftValue as ArrayBuffer, rightValue as ArrayBuffer);
  if (leftTag === "[object Boolean]" || leftTag === "[object Date]")
    return Number(leftValue) === Number(rightValue);
  if (leftTag === "[object DataView]")
    return equalBytes(leftValue as DataView, rightValue as DataView);
  if (leftTag === "[object Error]")
    return (
      (leftValue as Error).name === (rightValue as Error).name &&
      (leftValue as Error).message === (rightValue as Error).message
    );
  if (leftTag === "[object Map]")
    return equalUnordered(
      Array.from((leftValue as Map<unknown, unknown>).entries()),
      Array.from((rightValue as Map<unknown, unknown>).entries()),
      bitmask | COMPARE_UNORDERED_FLAG,
      customizer,
      stack,
    );
  if (leftTag === "[object Number]")
    return sameValueZero(Number(leftValue), Number(rightValue));
  if (leftTag === "[object RegExp]" || leftTag === "[object String]")
    return String(leftValue) === String(rightValue);
  if (leftTag === "[object Set]")
    return equalUnordered(
      Array.from((leftValue as Set<unknown>).values()),
      Array.from((rightValue as Set<unknown>).values()),
      bitmask | COMPARE_UNORDERED_FLAG,
      customizer,
      stack,
    );
  if (leftTag === "[object Symbol]")
    return (
      Symbol.prototype.valueOf.call(leftValue) ===
      Symbol.prototype.valueOf.call(rightValue)
    );
  if (ArrayBuffer.isView(leftValue) && ArrayBuffer.isView(rightValue))
    return equalBytes(leftValue, rightValue);
  return equalObjects(leftObject, rightObject, bitmask, customizer, stack);
}

export function createIsEqualFunction(): IsEqualFunction {
  let isEqual = ((leftValue: unknown, rightValue: unknown) =>
    isEqualN(leftValue, rightValue)) as IsEqualFunction;
  Object.defineProperty(isEqual, "default", {
    value: isEqual,
    enumerable: true,
  });
  return isEqual;
}
