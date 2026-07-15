// Restored from ref/webview/assets/isEmpty-CKN2Jii3.js
// Also matches current ref asset ref/webview/assets/isEmpty-BJ4mdsaY.js.
// Lodash isEmpty chunk restored from the Codex webview bundle.
import {
  _baseForC,
  _baseForO,
  baseForA,
  baseForB,
  baseForD,
  baseForG,
  baseForI,
  baseForM,
  baseForP,
  baseForS,
  baseForT,
  baseForX,
} from "./lodash-base-for";

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

const nativeKeys = baseForA(Object.keys, Object) as (
  value: unknown,
) => string[];
const hasOwnProperty = Object.prototype.hasOwnProperty;
const isPrototype = _baseForO as (value: unknown) => boolean;
const isTypedArray = _baseForC as (value: unknown) => boolean;

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

const nativeDataView = baseForX(baseForD, "DataView") as
  | DataViewConstructorLike
  | undefined;
const nativePromise = baseForX(baseForD, "Promise") as
  | PromiseConstructorLike
  | undefined;
export const isEmptyR = baseForX(baseForD, "Set") as
  | SetConstructorLike
  | undefined;
const nativeWeakMap = baseForX(baseForD, "WeakMap") as
  | WeakMapConstructorLike
  | undefined;

const dataViewCtorSource = baseForS(nativeDataView);
const mapCtorSource = baseForS(baseForB as MapConstructorLike | undefined);
const promiseCtorSource = baseForS(nativePromise);
const setCtorSource = baseForS(isEmptyR);
const weakMapCtorSource = baseForS(nativeWeakMap);

let getTag = baseForT as (value: unknown) => string;

if (
  (nativeDataView &&
    getTag(new nativeDataView(new ArrayBuffer(1))) !== dataViewTag) ||
  (baseForB && getTag(new (baseForB as MapConstructorLike)()) !== mapTag) ||
  (nativePromise && getTag(nativePromise.resolve()) !== promiseTag) ||
  (isEmptyR && getTag(new isEmptyR()) !== setTag) ||
  (nativeWeakMap && getTag(new nativeWeakMap()) !== weakMapTag)
) {
  getTag = function getTagByConstructorSource(value: unknown): string {
    const tag = baseForT(value);
    const constructorValue =
      tag === objectTag
        ? (value as { constructor?: unknown }).constructor
        : undefined;
    const constructorSource = constructorValue
      ? baseForS(constructorValue)
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
    baseForI(value) &&
    (baseForG(value) ||
      typeof value === "string" ||
      typeof (value as { splice?: unknown }).splice === "function" ||
      baseForP(value) ||
      isTypedArray(value) ||
      baseForM(value))
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

export function initLodashIsEmptyChunk(): void {}
