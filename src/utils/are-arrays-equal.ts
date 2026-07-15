// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js

export function areArraysEqual<T>(
  left: readonly T[],
  right: readonly T[],
): boolean {
  return (
    left.length === right.length &&
    left.every((leftValue, index) => leftValue === right[index])
  );
}
