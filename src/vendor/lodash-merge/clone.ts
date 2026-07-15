// Restored from ref/webview/assets/merge-Baqijoc_.js
// Clone helpers used by the lodash merge compatibility implementation.
import { copyArray, getPrototype, isObject, isPrototype } from "./helpers";

import type { AnyRecord } from "./helpers";

type BufferConstructorLike = {
  allocUnsafe?: (length: number) => unknown;
  isBuffer?: (value: unknown) => boolean;
};

const NodeBuffer = (
  globalThis as typeof globalThis & {
    Buffer?: BufferConstructorLike;
  }
).Buffer;

function bufferCopy(source: unknown, destination: unknown): void {
  (source as { copy?: (target: unknown) => void }).copy?.(destination);
}

export function cloneBuffer(buffer: unknown, isDeep: boolean = false): unknown {
  if (isDeep) return (buffer as { slice: () => unknown }).slice();
  const length = (buffer as { length: number }).length;
  const result =
    NodeBuffer?.allocUnsafe?.(length) ??
    new (
      buffer as { constructor: new (length: number) => unknown }
    ).constructor(length);
  bufferCopy(buffer, result);
  return result;
}

export function cloneArrayBuffer(arrayBuffer: ArrayBuffer): ArrayBuffer {
  if (typeof arrayBuffer.slice === "function") return arrayBuffer.slice(0);
  const result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

export function cloneTypedArray<TTypedArray extends ArrayBufferView>(
  typedArray: TTypedArray,
  isDeep: boolean = false,
): TTypedArray {
  const buffer = isDeep
    ? cloneArrayBuffer(typedArray.buffer)
    : typedArray.buffer;
  return new (typedArray.constructor as {
    new (
      buffer: ArrayBufferLike,
      byteOffset: number,
      length?: number,
    ): TTypedArray;
  })(
    buffer,
    typedArray.byteOffset,
    (typedArray as unknown as { length?: number }).length,
  );
}

export function initCloneObject(source: unknown): AnyRecord {
  if (
    typeof (source as { constructor?: unknown }).constructor === "function" &&
    !isPrototype(source)
  ) {
    const prototype = getPrototype(source);
    if (isObject(prototype)) return Object.create(prototype) as AnyRecord;
  }
  return {};
}

export function isBuffer(value: unknown): boolean {
  return Boolean(NodeBuffer?.isBuffer?.(value));
}

export function isTypedArray(value: unknown): value is ArrayBufferView {
  return (
    ArrayBuffer.isView(value) &&
    !(value instanceof DataView) &&
    !isBuffer(value)
  );
}

export function copyArrayLikeObject(value: ArrayLike<unknown>): unknown[] {
  return copyArray(value);
}
