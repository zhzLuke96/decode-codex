// Restored from ref/webview/assets/sortBy-DqLANIE5.js
// sortBy-DqLANIE5 chunk restored from the Codex webview bundle.
import { baseOrderBy } from "./base-order-by";
type Collection<T> = ArrayLike<T> | Record<PropertyKey, T> | null | undefined;
type SortIteratee<T> =
  | ((value: T) => unknown)
  | string
  | number
  | symbol
  | unknown[];
const MAX_SAFE_INTEGER = 9007199254740991;
const objectToString = Object.prototype.toString;
const spreadableSymbol = Symbol.isConcatSpreadable;
function eq(value: unknown, other: unknown) {
  return value === other || (value !== value && other !== other);
}
function isObject(
  value: unknown,
): value is Record<PropertyKey, unknown> | Function {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
function isLength(value: unknown) {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}
function isArrayLike(value: unknown): value is ArrayLike<unknown> {
  return (
    value != null &&
    typeof value !== "function" &&
    isLength(
      (
        value as {
          length?: unknown;
        }
      ).length,
    )
  );
}
function isIndex(value: unknown, length: number) {
  return (
    length > 0 &&
    (typeof value === "number" ||
      (typeof value !== "symbol" && /^(?:0|[1-9]\d*)$/.test(`${value}`))) &&
    (value as number) > -1 &&
    (value as number) % 1 === 0 &&
    (value as number) < length
  );
}
function isArguments(value: unknown) {
  return objectToString.call(value) === "[object Arguments]";
}
function isFlattenable(value: unknown) {
  return (
    Array.isArray(value) ||
    isArguments(value) ||
    !!(
      spreadableSymbol &&
      value &&
      (value as Record<PropertyKey, unknown>)[spreadableSymbol]
    )
  );
}
function arrayPush(array: unknown[], values: ArrayLike<unknown>) {
  for (let index = 0; index < values.length; index += 1) {
    array[array.length] = values[index];
  }
  return array;
}
function baseFlatten(
  array: unknown[],
  depth: number,
  predicate = isFlattenable,
  isStrict = false,
  result: unknown[] = [],
) {
  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value as unknown[], depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value as ArrayLike<unknown>);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function isIterateeCall(value: unknown, index: unknown, object: unknown) {
  if (!isObject(object)) return false;
  const indexType = typeof index;
  const isValidIndex =
    indexType === "number"
      ? isArrayLike(object) && isIndex(index, object.length)
      : indexType === "string" && (index as string) in object;
  return isValidIndex
    ? eq((object as Record<PropertyKey, unknown>)[index as PropertyKey], value)
    : false;
}
function sortBy<T>(
  collection: Collection<T>,
  ...iteratees: SortIteratee<T>[]
): T[] {
  if (collection == null) return [];
  let normalizedIteratees: unknown[] = iteratees;
  const iterateeCount = normalizedIteratees.length;
  if (
    iterateeCount > 1 &&
    isIterateeCall(collection, normalizedIteratees[0], normalizedIteratees[1])
  ) {
    normalizedIteratees = [];
  } else if (
    iterateeCount > 2 &&
    isIterateeCall(
      normalizedIteratees[0],
      normalizedIteratees[1],
      normalizedIteratees[2],
    )
  ) {
    normalizedIteratees = [normalizedIteratees[0]];
  }
  return baseOrderBy(
    collection,
    baseFlatten(normalizedIteratees, 1) as never[],
    [],
  ) as T[];
}
export { sortBy };
