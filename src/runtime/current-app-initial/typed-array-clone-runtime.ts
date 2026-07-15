// Restored from ref/webview/assets/app-initial~app-main~page-CMEx4JDW.js
// app-initial~app-main~page-CMEx4JDW chunk restored from the Codex webview bundle.
type MutableRecord = Record<PropertyKey, unknown>;
type CopyObjectCustomizer = (
  objectValue: unknown,
  sourceValue: unknown,
  key: PropertyKey,
  object: MutableRecord,
  source: MutableRecord,
) => unknown;
type BufferLike = Uint8Array & {
  copy?(target: Uint8Array): void;
  slice(): BufferLike;
};
type BufferConstructorLike = {
  allocUnsafe?(length: number): Uint8Array;
};
type TypedArrayLike = {
  readonly buffer: ArrayBuffer;
  readonly byteOffset: number;
  readonly length: number;
  readonly byteLength: number;
  constructor: {
    new (
      buffer: ArrayBuffer,
      byteOffset: number,
      length: number,
    ): TypedArrayLike;
  };
};
const hasOwn = Object.prototype.hasOwnProperty;
const nativeObjectCreate = Object.create;
function sameValue(left: unknown, right: unknown): boolean {
  return left === right || (left !== left && right !== right);
}
function baseAssignValue(
  object: MutableRecord,
  key: PropertyKey,
  value: unknown,
): void {
  if (key === "__proto__" && Object.defineProperty != null) {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value,
      writable: true,
    });
    return;
  }
  object[key] = value;
}
function assignValue(
  object: MutableRecord,
  key: PropertyKey,
  value: unknown,
): void {
  const currentValue = object[key];
  if (
    !(hasOwn.call(object, key) && sameValue(currentValue, value)) ||
    (value === undefined && !(key in object))
  ) {
    baseAssignValue(object, key, value);
  }
}
function copyObject<TObject extends MutableRecord>(
  source: MutableRecord,
  propertyNames: readonly PropertyKey[],
  object?: TObject,
  customizer?: CopyObjectCustomizer,
): TObject {
  const result = object ?? ({} as TObject);
  const shouldAssignDirectly = object == null;
  for (const key of propertyNames) {
    let newValue =
      customizer?.(result[key], source[key], key, result, source) ??
      source[key];
    if (shouldAssignDirectly) {
      baseAssignValue(result, key, newValue);
    } else {
      assignValue(result, key, newValue);
    }
  }
  return result;
}
function getNativeKeysIn(value: unknown): string[] {
  const result: string[] = [];
  if (value != null) {
    for (const key in Object(value)) result.push(key);
  }
  return result;
}
function isPrototype(value: unknown): boolean {
  if (value == null || typeof value !== "object") return false;
  const constructor = (
    value as {
      constructor?: unknown;
    }
  ).constructor;
  const prototype =
    typeof constructor === "function"
      ? constructor.prototype
      : Object.prototype;
  return value === prototype;
}
function getBaseKeysIn(value: unknown): string[] {
  if (
    value == null ||
    (typeof value !== "object" && typeof value !== "function")
  ) {
    return getNativeKeysIn(value);
  }
  const isProto = isPrototype(value);
  const result: string[] = [];
  for (const key in Object(value)) {
    if (
      key !== "constructor" ||
      (!isProto && hasOwn.call(Object(value), key))
    ) {
      result.push(key);
    }
  }
  return result;
}
function isArrayLike(value: unknown): value is {
  readonly length: number;
} {
  return (
    value != null &&
    typeof value !== "function" &&
    Number.isInteger(
      (
        value as {
          length?: unknown;
        }
      ).length,
    ) &&
    ((
      value as {
        length: number;
      }
    ).length ?? -1) >= 0 &&
    (
      value as {
        length: number;
      }
    ).length <= Number.MAX_SAFE_INTEGER
  );
}
function getArrayLikeKeys(value: { readonly length: number }): string[] {
  const result = Array.from(
    {
      length: value.length,
    },
    (_, index) => String(index),
  );
  for (const key in Object(value)) {
    if (!/^(?:0|[1-9]\d*)$/.test(key) || Number(key) >= value.length) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(value: unknown): string[] {
  return isArrayLike(value) ? getArrayLikeKeys(value) : getBaseKeysIn(value);
}
function getBufferConstructor(): BufferConstructorLike | undefined {
  return (
    globalThis as {
      Buffer?: BufferConstructorLike;
    }
  ).Buffer;
}
function cloneBuffer(buffer: BufferLike, isDeep?: boolean): BufferLike {
  if (isDeep) return buffer.slice();
  const result =
    getBufferConstructor()?.allocUnsafe?.(buffer.length) ??
    new (buffer.constructor as {
      new (length: number): Uint8Array;
    })(buffer.length);
  if (typeof buffer.copy === "function") buffer.copy(result);
  else result.set(buffer);
  return result as BufferLike;
}
function copyArray<TValue>(
  source: readonly TValue[],
  array: TValue[] = Array(source.length),
): TValue[] {
  for (let index = 0; index < source.length; index += 1) {
    array[index] = source[index];
  }
  return array;
}
function cloneArrayBuffer(arrayBuffer: ArrayBuffer): ArrayBuffer {
  const result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneTypedArray<TArray extends TypedArrayLike>(
  typedArray: TArray,
  isDeep?: boolean,
): TArray {
  const buffer = isDeep
    ? cloneArrayBuffer(typedArray.buffer)
    : typedArray.buffer;
  return new typedArray.constructor(
    buffer,
    typedArray.byteOffset,
    typedArray.length,
  ) as TArray;
}
function baseCreate(prototype: object | null): object {
  if (prototype == null || typeof prototype !== "object") return {};
  if (nativeObjectCreate != null) return nativeObjectCreate(prototype);
  function TemporaryConstructor() {}
  TemporaryConstructor.prototype = prototype;
  const result = new (TemporaryConstructor as {
    new (): object;
  })();
  TemporaryConstructor.prototype = undefined;
  return result;
}
function initCloneObject<TObject extends object>(object: TObject): object {
  const constructor = (
    object as {
      constructor?: unknown;
    }
  ).constructor;
  return typeof constructor === "function" && !isPrototype(object)
    ? baseCreate(constructor.prototype)
    : {};
}
export {
  cloneBuffer,
  assignValue,
  copyArray,
  cloneTypedArray,
  keysIn,
  cloneArrayBuffer,
  copyObject,
  initCloneObject,
};
