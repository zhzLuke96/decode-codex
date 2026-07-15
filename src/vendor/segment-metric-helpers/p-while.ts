// Restored from ref/webview/assets/metric-helpers-DG5zp00d.js
// Promise loop helper preserved for legacy Segment metric helper aliases.
export async function runWhile<T>(
  shouldContinue: (value: T | undefined) => boolean,
  task: () => T | Promise<T>,
): Promise<T | undefined> {
  let currentValue: T | undefined;

  while (shouldContinue(currentValue)) {
    currentValue = await task();
  }

  return currentValue;
}
