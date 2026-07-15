// Restored from ref/webview/assets/merge-Baqijoc_.js
// Property assignment helpers that preserve lodash merge edge cases.
import { eq } from "./guards";
import { hasOwn, nativeDefineProperty } from "./native";

import type { AnyRecord, CopyCustomizer, KeyList } from "./types";

export function baseAssignValue(
  object: AnyRecord,
  key: string | symbol,
  value: unknown,
): void {
  if (key === "__proto__" && nativeDefineProperty) {
    nativeDefineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value,
      writable: true,
    });
    return;
  }
  object[key] = value;
}

export function assignValue(
  object: AnyRecord,
  key: string | symbol,
  value: unknown,
): void {
  const currentValue = object[key];
  if (
    !(hasOwn.call(object, key) && eq(currentValue, value)) ||
    (value === undefined && !(key in object))
  ) {
    baseAssignValue(object, key, value);
  }
}

export function copyObject<TObject extends AnyRecord>(
  source: AnyRecord,
  props: KeyList,
  destination: TObject = {} as TObject,
  customizer?: CopyCustomizer,
): TObject {
  const isNewDestination = destination == null;
  const result = destination ?? ({} as TObject);
  for (const key of props) {
    const newValue = customizer
      ? customizer(result[key], source[key], key, result, source)
      : undefined;
    const value = newValue === undefined ? source[key] : newValue;
    if (isNewDestination) baseAssignValue(result, key, value);
    else assignValue(result, key, value);
  }
  return result;
}

export function safeGet(object: AnyRecord, key: string | symbol): unknown {
  if (
    key === "__proto__" ||
    (key === "constructor" && typeof object[key] === "function")
  ) {
    return undefined;
  }
  return object[key];
}
