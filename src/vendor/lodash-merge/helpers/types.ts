// Restored from ref/webview/assets/merge-Baqijoc_.js
// Shared structural types for lodash merge helper modules.

export type AnyRecord = Record<PropertyKey, unknown>;
export type KeyList = Array<string | symbol>;
export type CopyCustomizer = (
  destinationValue: unknown,
  sourceValue: unknown,
  key: string | symbol,
  destination: AnyRecord,
  source: AnyRecord,
) => unknown;
