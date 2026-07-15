// Restored from ref/webview/assets/dist-CD74BDfk.js
// URL sanitizer restored as a typed npm-backed CommonJS compatibility shim.
import { sanitizeUrl } from "@braintree/sanitize-url";

import { createCommonJsModule } from "../runtime/commonjs-interop";

export { sanitizeUrl } from "@braintree/sanitize-url";

export type SanitizedUrlModule = {
  __esModule?: true;
  sanitizeUrl?: typeof sanitizeUrl;
};

export const dist = createCommonJsModule<SanitizedUrlModule>((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  exports.sanitizeUrl = sanitizeUrl;
});
