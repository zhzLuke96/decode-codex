// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Deep inequality helper used to detect changed form state.
import { createIsEqualFunction } from "../vendor/lodash-is-equal/deep-equality";

const isEqual = createIsEqualFunction();

export function isDeeplyDifferent(left: unknown, right: unknown): boolean {
  return !isEqual(left, right);
}
