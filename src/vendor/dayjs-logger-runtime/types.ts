// Restored from ref/webview/assets/chunk-AGHRB4JF-DVNPU_Qo.js
// Shared types for the Day.js + Mermaid logger runtime.
import type dayjs from "dayjs";

export type DayjsCommonJsModule = typeof dayjs;
export type NamedTarget = object;
export type GetterMap = Record<string, () => unknown>;
export type MermaidLogLevelName =
  | "trace"
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";
export type MermaidLogLevel = MermaidLogLevelName | number;
export type MermaidLogger = Record<
  MermaidLogLevelName,
  (...args: unknown[]) => void
>;
