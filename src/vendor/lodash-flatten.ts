// Restored from ref/webview/assets/flatten-CdNmRCTf.js
// Lodash map/min/flatten helpers restored from the Codex webview bundle.
import {
  reduceD as toIteratee,
  reduceE as arrayMap,
  reduceFlattenOne,
  reduceY as isSymbol,
} from "./lodash-reduce";
import {
  baseForG as isArray,
  baseForI as isArrayLike,
} from "./lodash-base-for";

type Collection<T> = ArrayLike<T> | Record<string, T> | null | undefined;
type CollectionKey = number | string;
type CollectionIteratee<T, R> = (
  value: T,
  key: CollectionKey,
  collection: Collection<T>,
) => R;
type ExtremumIteratee<T, R> = (value: T) => R;
type ExtremumComparator<T> = (current: T, computed: T) => boolean;

export function flattenO<T, R>(
  collection: Collection<T>,
  iteratee: CollectionIteratee<T, R>,
): R[] {
  if (collection == null) return [];

  if (isArrayLike(collection)) {
    const source = collection as ArrayLike<T>;
    const result: R[] = Array(source.length);
    for (let index = 0; index < source.length; index += 1) {
      result[index] = iteratee(source[index], index, collection);
    }
    return result;
  }

  const source = Object(collection) as Record<string, T>;
  return Object.keys(source).map((key) =>
    iteratee(source[key], key, collection),
  );
}

export function flattenA<T, R>(
  collection: Collection<T>,
  iteratee: unknown,
): R[] {
  const mapper = toIteratee(iteratee, 3) as CollectionIteratee<T, R>;
  const mapCollection = isArray(collection) ? arrayMap : flattenO;
  return mapCollection(collection, mapper);
}

export function flattenI<T, R>(
  values: ArrayLike<T>,
  iteratee: ExtremumIteratee<T, R>,
  comparator: ExtremumComparator<R>,
): T | undefined {
  let bestComputed: R | undefined;
  let bestValue: T | undefined;

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    const computed = iteratee(value);

    if (
      computed != null &&
      (bestComputed === undefined
        ? computed === computed && !isSymbol(computed)
        : comparator(computed, bestComputed))
    ) {
      bestComputed = computed;
      bestValue = value;
    }
  }

  return bestValue;
}

export function flattenR<T>(current: T, computed: T): boolean {
  return current < computed;
}

export function flattenN<T>(
  values: ArrayLike<T> | null | undefined,
): T | undefined {
  return values && values.length
    ? flattenI(values, (value) => value, flattenR)
    : undefined;
}

export function flattenT<T>(values: ArrayLike<T> | null | undefined): T[] {
  return values != null && values.length ? reduceFlattenOne(values) : [];
}
