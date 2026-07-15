// Restored from ref/webview/assets/_baseEach-D1JYswpe.js
// Minimal lodash baseEach helper used by the restored order-by implementation.
import { createCommonJsModule } from "../runtime/commonjs-interop";

type Iteratee = (
  value: unknown,
  key: number | string,
  collection: object,
) => boolean | void;

function isArrayLike(value: unknown): value is ArrayLike<unknown> {
  if (value == null || typeof value === "function") return false;
  let length = (value as { length?: unknown }).length;
  return (
    typeof length === "number" &&
    Number.isInteger(length) &&
    length >= 0 &&
    length <= Number.MAX_SAFE_INTEGER
  );
}

function baseEachImpl<TCollection>(
  collection: TCollection,
  iteratee: Iteratee,
): TCollection {
  if (collection == null) return collection;

  let boxedCollection = Object(collection) as Record<string | number, unknown>;
  if (isArrayLike(collection)) {
    for (let index = 0; index < collection.length; index++)
      if (iteratee(boxedCollection[index], index, boxedCollection) === false)
        break;
    return collection;
  }

  for (let key of Object.keys(boxedCollection))
    if (iteratee(boxedCollection[key], key, boxedCollection) === false) break;
  return collection;
}

export const baseEach = createCommonJsModule((_exports, module) => {
  module.exports = baseEachImpl as Record<PropertyKey, any>;
});
