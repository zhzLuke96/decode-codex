// Restored from ref/webview/assets/isEqual-DoHfXEc2.js
// CommonJS-shaped lodash helper exports used by older bundled consumers.
import { createCommonJsModule } from "../../runtime/commonjs-interop";
import { createIsEqualFunction } from "./deep-equality";

function commonJsValue<T>(value: T) {
  return createCommonJsModule((_exports, module) => {
    module.exports = value as Record<PropertyKey, any>;
  });
}

function getNative(object: unknown, key: PropertyKey) {
  let value =
    object == null ? undefined : (object as Record<PropertyKey, unknown>)[key];
  return typeof value === "function" ? value : undefined;
}

const sharedIsEqual = createIsEqualFunction();

export const isEqualT = commonJsValue(sharedIsEqual);
export const _isEqualT = commonJsValue(sharedIsEqual);
export const isEqualW = commonJsValue(getNative);
