// Restored from ref/webview/assets/chunk-AGHRB4JF-DVNPU_Qo.js
// Mutable Mermaid logger dispatch table.
import { defineName } from "./object-helpers";
import type { MermaidLogger, MermaidLogLevelName } from "./types";

const noop = (name: MermaidLogLevelName) =>
  defineName((..._args: unknown[]) => {}, name);

const logger = {} as MermaidLogger;

logger.trace = noop("trace");
logger.debug = noop("debug");
logger.info = noop("info");
logger.warn = noop("warn");
logger.error = noop("error");
logger.fatal = noop("fatal");

export const mermaidLogger: MermaidLogger = logger;
