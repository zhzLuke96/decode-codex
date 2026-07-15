// Restored from ref/webview/assets/_defineProperty-CjRaK4yh.js
// DefineProperty chunk restored from the Codex webview bundle.
import { createCommonJsModule } from "../runtime/commonjs-interop";
import { isEqualW as createGetNativeProperty } from "./lodash-is-equal";

export const defineProperty = createCommonJsModule((_exports, module) => {
  const getNativeProperty = createGetNativeProperty();
  module.exports = (() => {
    try {
      const objectDefineProperty = getNativeProperty(Object, "defineProperty");
      objectDefineProperty({}, "", {});
      return objectDefineProperty;
    } catch {}
  })();
});
