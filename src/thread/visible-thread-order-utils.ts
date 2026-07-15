// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shallow equality helper for ordered thread-key lists (drag/reorder bookkeeping).

export function areThreadKeysShallowEqual(
  first: readonly string[],
  second: readonly string[],
): boolean {
  return first.length === second.length
    ? first.every((key, index) => key === second[index])
    : false;
}
