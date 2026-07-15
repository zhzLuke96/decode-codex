// Restored from ref/webview/assets/uniq-CdTw0qC4.js
export function uniq<T>(values: ArrayLike<T> | null | undefined): T[] {
  if (!values?.length) {
    return [];
  }
  const result: T[] = [];
  outer: for (let index = 0; index < values.length; index += 1) {
    const value = normalizeZero(values[index]);
    for (const existing of result) {
      if (isSameValueZero(existing, value)) {
        continue outer;
      }
    }
    result.push(value);
  }
  return result;
}
function normalizeZero<T>(value: T): T {
  return value === 0 ? (0 as T) : value;
}
function isSameValueZero<T>(left: T, right: T): boolean {
  return left === right || (left !== left && right !== right);
}
