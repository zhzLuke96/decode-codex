// Restored from ref/webview/assets/union-8iT5ANuG.js
// Lodash union/values/isUndefined/baseClone helpers restored from the Codex webview bundle.

type CloneStack = WeakMap<object, unknown>;

const CLONE_DEEP_FLAG = 1;
const CLONE_FLAT_FLAG = 2;
const CLONE_SYMBOLS_FLAG = 4;
const objectToString = Object.prototype.toString;

function isObjectLike(value: unknown): value is object {
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

function sameValueZeroIncludes(values: unknown[], candidate: unknown): boolean {
  return values.some(
    (value) =>
      value === candidate || (value !== value && candidate !== candidate),
  );
}

function enumerableKeys(
  value: object,
  includeInherited: boolean,
): PropertyKey[] {
  const keys: PropertyKey[] = includeInherited ? [] : Object.keys(value);

  if (includeInherited) {
    for (const key in value) {
      keys.push(key);
    }
  }

  return keys;
}

function enumerableSymbols(value: object, includeInherited: boolean): symbol[] {
  const symbols: symbol[] = [];
  let current: object | null = value;

  while (current) {
    symbols.push(
      ...Object.getOwnPropertySymbols(current).filter((symbol) =>
        Object.prototype.propertyIsEnumerable.call(current, symbol),
      ),
    );

    if (!includeInherited) {
      break;
    }

    current = Object.getPrototypeOf(current);
  }

  return symbols;
}

function cloneArrayBuffer(buffer: ArrayBuffer): ArrayBuffer {
  return buffer.slice(0);
}

function cloneTypedArray<T extends ArrayBufferView>(
  value: T,
  isDeep: boolean,
): T {
  const ctor = value.constructor as {
    new (buffer: ArrayBuffer, byteOffset: number, length?: number): T;
  };
  const buffer = isDeep ? cloneArrayBuffer(value.buffer) : value.buffer;
  const length =
    "length" in value ? (value as { length: number }).length : undefined;
  return new ctor(buffer, value.byteOffset, length);
}

function initCloneByTag(value: object, tag: string, isDeep: boolean): unknown {
  const ctor = value.constructor as new (...args: unknown[]) => unknown;

  switch (tag) {
    case "[object ArrayBuffer]":
      return cloneArrayBuffer(value as ArrayBuffer);
    case "[object Boolean]":
    case "[object Date]":
      return new ctor(+(value as Date));
    case "[object DataView]": {
      const view = value as DataView;
      const buffer = isDeep ? cloneArrayBuffer(view.buffer) : view.buffer;
      return new DataView(buffer, view.byteOffset, view.byteLength);
    }
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return cloneTypedArray(value as ArrayBufferView, isDeep);
    case "[object Map]":
      return new Map();
    case "[object Number]":
    case "[object String]":
      return new ctor(value.valueOf());
    case "[object RegExp]": {
      const regexp = value as RegExp;
      const clone = new RegExp(regexp.source, /\w*$/.exec(String(regexp))?.[0]);
      clone.lastIndex = regexp.lastIndex;
      return clone;
    }
    case "[object Set]":
      return new Set();
    case "[object Symbol]":
      return Object((value as { valueOf(): symbol }).valueOf());
    default:
      return undefined;
  }
}

function initObjectClone(value: object, isFlat: boolean): object {
  if (isFlat || objectToString.call(value) === "[object Function]") {
    return {};
  }

  return Object.create(Object.getPrototypeOf(value));
}

export function unionI<T>(
  value: T,
  bitmask: number = 0,
  customizer?: (
    value: unknown,
    key?: PropertyKey,
    object?: unknown,
    stack?: CloneStack,
  ) => unknown,
  key?: PropertyKey,
  object?: unknown,
  stack: CloneStack = new WeakMap(),
): T {
  const customClone = customizer?.(value, key, object, stack);

  if (customClone !== undefined) {
    return customClone as T;
  }

  if (!isObjectLike(value)) {
    return value;
  }

  const isDeep = Boolean(bitmask & CLONE_DEEP_FLAG);
  const isFlat = Boolean(bitmask & CLONE_FLAT_FLAG);
  const includeSymbols = Boolean(bitmask & CLONE_SYMBOLS_FLAG);
  const tag = objectToString.call(value);
  const source = value as object;
  let clone: unknown;

  if (Array.isArray(value)) {
    clone = new Array(value.length);
    if (!isDeep) {
      return value.slice() as T;
    }
  } else if (tag === "[object Object]" || tag === "[object Arguments]") {
    clone = initObjectClone(source, isFlat);
  } else {
    clone = initCloneByTag(source, tag, isDeep);
    if (clone === undefined) {
      return object ? value : ({} as T);
    }
  }

  const cloneObject = clone as Record<PropertyKey, unknown>;
  const stackedClone = stack.get(source);

  if (stackedClone) {
    return stackedClone as T;
  }

  stack.set(source, clone);

  if (value instanceof Set) {
    value.forEach((item) => {
      (clone as Set<unknown>).add(
        unionI(item, bitmask, customizer, item, value, stack),
      );
    });
    return clone as T;
  }

  if (value instanceof Map) {
    value.forEach((item, mapKey) => {
      (clone as Map<unknown, unknown>).set(
        mapKey,
        unionI(item, bitmask, customizer, mapKey, value, stack),
      );
    });
    return clone as T;
  }

  const keys = enumerableKeys(source, isFlat);
  const symbols = includeSymbols ? enumerableSymbols(source, isFlat) : [];

  for (const propertyKey of [...keys, ...symbols]) {
    cloneObject[propertyKey] = isDeep
      ? unionI(
          (source as Record<PropertyKey, unknown>)[propertyKey],
          bitmask,
          customizer,
          propertyKey,
          value,
          stack,
        )
      : (source as Record<PropertyKey, unknown>)[propertyKey];
  }

  return clone as T;
}

export function unionN(value: unknown): value is undefined {
  return value === undefined;
}

export function unionR(value: unknown): unknown[];
export function unionR<T>(value: T, bitmask: number): T;
export function unionR<T>(value: T, bitmask?: number): T | unknown[] {
  if (bitmask !== undefined) {
    return unionI(value, bitmask);
  }

  if (value == null) {
    return [];
  }

  const objectValue = Object(value) as Record<string, unknown>;
  return Object.keys(objectValue).map((key) => objectValue[key]);
}

export function unionT(
  ...arrays: Array<Iterable<unknown> | ArrayLike<unknown> | null | undefined>
): unknown[] {
  const result: unknown[] = [];

  for (const arrayLike of arrays) {
    if (arrayLike == null) {
      continue;
    }

    for (const value of Array.from(arrayLike)) {
      if (!sameValueZeroIncludes(result, value)) {
        result.push(value);
      }
    }
  }

  return result;
}
