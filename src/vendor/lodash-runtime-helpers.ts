// Restored from ref/webview/assets/use-element-in-view-CZGmoMvk.js
// Lodash helper factories shared by small vendored lodash modules.
const MAX_SAFE_INTEGER = 9007199254740991;
const unsignedIntegerPattern = /^(?:0|[1-9]\d*)$/;
const objectToString = Object.prototype.toString;
const plainPropertyPattern = /^\w*$/;
const deepPropertyPattern = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const propertyNamePattern =
  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const escapedCharacterPattern = /\\(\\)?/g;

type BaseAt = (
  object: unknown,
  paths: ArrayLike<unknown>,
  result?: unknown[],
) => unknown[];
type DefineProperty = <TObject extends object>(
  object: TObject,
  key: PropertyKey,
  descriptor: PropertyDescriptor,
) => TObject;

function isLength(value: unknown): value is number {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}

function isKey(value: unknown, object?: unknown): boolean {
  if (Array.isArray(value)) return false;
  let valueType = typeof value;
  if (
    valueType === "number" ||
    valueType === "symbol" ||
    valueType === "boolean" ||
    value == null
  ) {
    return true;
  }
  let property = String(value);
  return (
    plainPropertyPattern.test(property) ||
    !deepPropertyPattern.test(property) ||
    (object != null && property in Object(object))
  );
}

function toKey(value: unknown): PropertyKey {
  if (typeof value === "symbol") return value;
  let key = `${value}`;
  return key === "0" && 1 / (value as number) === -Infinity ? "-0" : key;
}

function stringToPath(path: string): string[] {
  let result: string[] = [];
  if (path.charCodeAt(0) === 46) result.push("");
  path.replace(
    propertyNamePattern,
    (match: string, number: string, quote: string, subString: string) => {
      result.push(
        quote
          ? subString.replace(escapedCharacterPattern, "$1")
          : (number ?? match),
      );
      return "";
    },
  );
  return result;
}

function castPath(path: unknown, object?: unknown): readonly unknown[] {
  if (Array.isArray(path)) return path;
  return isKey(path, object) ? [path] : stringToPath(`${path}`);
}

function getPathValue(object: unknown, path: readonly unknown[]): unknown {
  let index = 0;
  let current = object;
  while (current != null && index < path.length) {
    current = Object(current)[toKey(path[index])];
    index += 1;
  }
  return index === path.length ? current : undefined;
}

export function createSymbolConstructor(): SymbolConstructor | undefined {
  return typeof Symbol === "function" ? Symbol : undefined;
}

export function createDefineProperty(): DefineProperty | undefined {
  return typeof Object.defineProperty === "function"
    ? Object.defineProperty
    : undefined;
}

export function createBaseAt(): BaseAt {
  return function baseAt(
    object: unknown,
    paths: ArrayLike<unknown>,
    result: unknown[] = [],
  ): unknown[] {
    for (let index = 0; index < paths.length; index += 1) {
      result[index] = getPathValue(object, castPath(paths[index], object));
    }
    return result;
  };
}

export function createArrayPush() {
  return function arrayPush<TValue>(
    array: TValue[],
    values: ArrayLike<TValue>,
  ): TValue[] {
    for (let index = 0; index < values.length; index += 1) {
      array[array.length] = values[index];
    }
    return array;
  };
}

export function createIsObject() {
  return function isObject(value: unknown): boolean {
    let valueType = typeof value;
    return (
      value != null && (valueType === "object" || valueType === "function")
    );
  };
}

export function createIsArray() {
  return Array.isArray;
}

export function createEq() {
  return function eq(value: unknown, other: unknown): boolean {
    return value === other || (value !== value && other !== other);
  };
}

export function createIdentity() {
  return function identity<TValue>(value: TValue): TValue {
    return value;
  };
}

export function createIsArrayLike() {
  return function isArrayLike(value: unknown): value is ArrayLike<unknown> {
    return (
      value != null &&
      typeof value !== "function" &&
      isLength((value as ArrayLike<unknown>).length)
    );
  };
}

export function createIsIndex() {
  return function isIndex(
    value: unknown,
    length: number | null = MAX_SAFE_INTEGER,
  ): boolean {
    let normalizedLength = length == null ? MAX_SAFE_INTEGER : length;
    let valueType = typeof value;
    let index =
      valueType === "number"
        ? (value as number)
        : valueType !== "symbol" && unsignedIntegerPattern.test(String(value))
          ? Number(value)
          : NaN;
    return (
      normalizedLength > 0 &&
      index > -1 &&
      index % 1 === 0 &&
      index < normalizedLength
    );
  };
}

export function createIsArguments() {
  return function isArguments(value: unknown): value is IArguments {
    return objectToString.call(value) === "[object Arguments]";
  };
}
