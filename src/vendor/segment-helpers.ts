// Restored from ref/webview/assets/helpers-BDwSRLlu.js
// Helpers chunk restored from the Codex webview bundle.
export function helpersA(value: unknown): value is string {
  return typeof value == "string";
}
export function helpersR(value: unknown): value is number {
  return typeof value == "number";
}
export function helpersN(
  value: unknown,
): value is (...args: Array<unknown>) => unknown {
  return typeof value == "function";
}
export function helpersT<T>(
  value: T | null | undefined,
): value is NonNullable<T> {
  return value != null;
}
export function helpersI(
  value: unknown,
): value is Record<PropertyKey, unknown> {
  return (
    Object.prototype.toString.call(value).slice(8, -1).toLowerCase() ===
    "object"
  );
}
