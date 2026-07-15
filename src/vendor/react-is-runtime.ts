// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// react-is is a stock React package; keep this boundary as an npm re-export shim.

import { isFragment } from "react-is";

export const reactIsRuntime = {
  isFragment,
};

export function requireReactIsRuntime(): typeof reactIsRuntime {
  return reactIsRuntime;
}

export { isFragment } from "react-is";
