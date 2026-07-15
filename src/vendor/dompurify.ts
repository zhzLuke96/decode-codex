// Restored from ref/webview/assets/chunk-AGHRB4JF-DNCNxfKz.js
// Historical filename retained for imports, but this chunk is the Day.js core
// plus Mermaid logger wrapper. Older hashes used `a` for defineName; current
// hashes use it for the Day.js loader, so chunkAGHRB4JFA supports both calls.

import {
  defineExportGetters,
  defineName,
  loadDayjsCommonJsModule,
  mermaidLogger,
  setMermaidLogLevel,
  type DayjsCommonJsModule,
  type NamedTarget,
} from "./dayjs-logger-runtime";

export function chunkAGHRB4JFA(): DayjsCommonJsModule;
export function chunkAGHRB4JFA<TTarget extends NamedTarget>(
  target: TTarget,
  name: string,
): TTarget;
export function chunkAGHRB4JFA<TTarget extends NamedTarget>(
  target?: TTarget,
  name?: string,
): DayjsCommonJsModule | TTarget {
  if (target != null && name != null) return defineName(target, name);
  return loadDayjsCommonJsModule();
}

export const chunkAGHRB4JFI = setMermaidLogLevel;
export const chunkAGHRB4JFN = defineName;
export const chunkAGHRB4JFR = mermaidLogger;
export const chunkAGHRB4JFT = defineExportGetters;

export type {
  DayjsCommonJsModule,
  GetterMap,
  MermaidLogger,
  MermaidLogLevel,
  MermaidLogLevelName,
} from "./dayjs-logger-runtime";
