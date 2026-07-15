// Restored from ref/webview/assets/chunk-AGHRB4JF-DVNPU_Qo.js
// Small object helper aliases shared by Mermaid vendor chunks.
import type { GetterMap, NamedTarget } from "./types";

export function defineName<TTarget extends NamedTarget>(
  target: TTarget,
  name: string,
): TTarget {
  return Object.defineProperty(target, "name", {
    value: name,
    configurable: true,
  });
}

export function defineExportGetters(
  target: Record<PropertyKey, unknown>,
  getters: GetterMap,
): void {
  for (const key in getters) {
    Object.defineProperty(target, key, {
      get: getters[key],
      enumerable: true,
    });
  }
}
