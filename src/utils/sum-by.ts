// Restored from ref/webview/assets/sumBy-CSgbzDRq.js
// sumBy-CSgbzDRq chunk restored from the Codex webview bundle.
import { baseIteratee } from "./markdown-to-search-text";
function baseSum<T>(
  array: ArrayLike<T>,
  iteratee: (value: T) => number | string | undefined,
) {
  let result: number | string | undefined;
  for (let index = 0; index < array.length; index += 1) {
    const current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result as number) + current;
    }
  }
  return result;
}
function sumBy<T>(array: ArrayLike<T> | null | undefined, iteratee?: unknown) {
  return array && array.length
    ? baseSum(array, baseIteratee(iteratee) as (value: T) => number | undefined)
    : 0;
}
export { sumBy };
