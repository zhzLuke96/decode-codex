// Restored from ref/webview/assets/isEmpty-CTfqpukK.js
// Lodash isEmpty helper chunk restored from the Codex webview bundle.
import {
  _isArrayLikeObjectB as isArguments,
  _isArrayLikeObjectF as nativeMap,
  _isArrayLikeObjectG as isTypedArray,
  _isArrayLikeObjectM as overArg,
  _isArrayLikeObjectW as isArrayLike,
  isArrayLikeObjectG as rootObject,
  isArrayLikeObjectI as getNative,
  isArrayLikeObjectL as toSource,
  isArrayLikeObjectU as baseGetTag,
  isArrayLikeObjectV as isArray,
  isArrayLikeObjectX as isPrototype,
  isArrayLikeObjectY as isBuffer,
} from "./lodash-array-like-object";

type DataViewConstructorLike = new (buffer: ArrayBuffer) => DataView;
type MapConstructorLike = new () => Map<unknown, unknown>;
type PromiseConstructorLike = {
  resolve(value?: unknown): Promise<unknown>;
};
type SetConstructorLike = new (
  values?: Iterable<unknown> | null,
) => Set<unknown>;
type WeakMapConstructorLike = new () => WeakMap<object, unknown>;

const mapTag = "[object Map]";
const objectTag = "[object Object]";
const promiseTag = "[object Promise]";
const setTag = "[object Set]";
const weakMapTag = "[object WeakMap]";
const dataViewTag = "[object DataView]";

const nativeWeakMap = getNative(rootObject, "WeakMap") as
  | WeakMapConstructorLike
  | undefined;
const nativeKeys = overArg(Object.keys, Object) as (value: unknown) => string[];
const hasOwnProperty = Object.prototype.hasOwnProperty;

export function isEmptyI(value: unknown): string[] {
  if (!isPrototype(value)) {
    return nativeKeys(value);
  }

  const keys: string[] = [];
  for (const key in Object(value)) {
    if (hasOwnProperty.call(value, key) && key !== "constructor") {
      keys.push(key);
    }
  }

  return keys;
}

const nativeDataView = getNative(rootObject, "DataView") as
  | DataViewConstructorLike
  | undefined;
const nativePromise = getNative(rootObject, "Promise") as
  | PromiseConstructorLike
  | undefined;
export const isEmptyR = getNative(rootObject, "Set") as
  | SetConstructorLike
  | undefined;

const dataViewCtorSource = toSource(nativeDataView);
const mapCtorSource = toSource(nativeMap as MapConstructorLike | undefined);
const promiseCtorSource = toSource(nativePromise);
const setCtorSource = toSource(isEmptyR);
const weakMapCtorSource = toSource(nativeWeakMap);

let getTag = baseGetTag as (value: unknown) => string;

if (
  (nativeDataView &&
    getTag(new nativeDataView(new ArrayBuffer(1))) !== dataViewTag) ||
  (nativeMap && getTag(new (nativeMap as MapConstructorLike)()) !== mapTag) ||
  (nativePromise && getTag(nativePromise.resolve()) !== promiseTag) ||
  (isEmptyR && getTag(new isEmptyR()) !== setTag) ||
  (nativeWeakMap && getTag(new nativeWeakMap()) !== weakMapTag)
) {
  getTag = function getTagByConstructorSource(value: unknown): string {
    const tag = baseGetTag(value);
    const constructorValue =
      tag === objectTag
        ? (value as { constructor?: unknown }).constructor
        : undefined;
    const constructorSource = constructorValue
      ? toSource(constructorValue)
      : "";

    switch (constructorSource) {
      case dataViewCtorSource:
        return dataViewTag;
      case mapCtorSource:
        return mapTag;
      case promiseCtorSource:
        return promiseTag;
      case setCtorSource:
        return setTag;
      case weakMapCtorSource:
        return weakMapTag;
      default:
        return tag;
    }
  };
}

export const isEmptyN = getTag;

export function isEmptyT(value: unknown): boolean {
  if (value == null) {
    return true;
  }

  if (
    isArrayLike(value) &&
    (isArray(value) ||
      typeof value === "string" ||
      typeof (value as { splice?: unknown }).splice === "function" ||
      isBuffer(value) ||
      isTypedArray(value) ||
      isArguments(value))
  ) {
    return !(value as { length: number }).length;
  }

  const tag = isEmptyN(value);
  if (tag === mapTag || tag === setTag) {
    return !(value as { size: number }).size;
  }

  if (isPrototype(value)) {
    return isEmptyI(value).length === 0;
  }

  for (const key in Object(value)) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}
