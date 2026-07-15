// Restored from ref/webview/assets/merge-Baqijoc_.js
// Native object primitives shared by the lodash merge helpers.

export const objectPrototype = Object.prototype;
export const hasOwn = objectPrototype.hasOwnProperty;
export const objectToString = objectPrototype.toString;

export const nativeDefineProperty = (() => {
  try {
    const defineProperty = Object.defineProperty;
    defineProperty({}, "", {});
    return defineProperty;
  } catch {
    return undefined;
  }
})();
