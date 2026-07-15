// Restored from ref/webview/assets/chunk-AGHRB4JF-DVNPU_Qo.js
// Console binding for Mermaid log levels.
import dayjs from "dayjs";

import { logLevelPriority } from "./mermaid-log-levels";
import { mermaidLogger } from "./mermaid-logger-state";
import { defineName } from "./object-helpers";
import type { MermaidLogLevel, MermaidLogLevelName } from "./types";

const formatLogPrefix = defineName(
  (level: string): string => `%c${dayjs().format("ss.SSS")} : ${level} : `,
  "format",
);

function resolveLogLevel(level: MermaidLogLevel = "fatal"): number {
  if (typeof level === "number") return level;

  const normalizedLevel = level.toLowerCase() as MermaidLogLevelName;
  return logLevelPriority[normalizedLevel] ?? logLevelPriority.fatal;
}

function bindConsoleMethod(
  method: "debug" | "error" | "info" | "log" | "warn",
  level: string,
  cssColor: string,
  terminalColor: string,
): (...args: unknown[]) => void {
  const consoleMethod = console[method] ?? console.log;
  return consoleMethod
    ? consoleMethod.bind(console, formatLogPrefix(level), cssColor)
    : console.log.bind(console, terminalColor, formatLogPrefix(level));
}

export const setMermaidLogLevel = defineName(
  (level: MermaidLogLevel = "fatal"): void => {
    const priority = resolveLogLevel(level);

    mermaidLogger.trace = () => {};
    mermaidLogger.debug = () => {};
    mermaidLogger.info = () => {};
    mermaidLogger.warn = () => {};
    mermaidLogger.error = () => {};
    mermaidLogger.fatal = () => {};

    if (priority <= logLevelPriority.fatal) {
      mermaidLogger.fatal = bindConsoleMethod(
        "error",
        "FATAL",
        "color: orange",
        "\x1B[35m",
      );
    }
    if (priority <= logLevelPriority.error) {
      mermaidLogger.error = bindConsoleMethod(
        "error",
        "ERROR",
        "color: orange",
        "\x1B[31m",
      );
    }
    if (priority <= logLevelPriority.warn) {
      mermaidLogger.warn = bindConsoleMethod(
        "warn",
        "WARN",
        "color: orange",
        "\x1B[33m",
      );
    }
    if (priority <= logLevelPriority.info) {
      mermaidLogger.info = bindConsoleMethod(
        "info",
        "INFO",
        "color: lightblue",
        "\x1B[34m",
      );
    }
    if (priority <= logLevelPriority.debug) {
      mermaidLogger.debug = bindConsoleMethod(
        "debug",
        "DEBUG",
        "color: lightgreen",
        "\x1B[32m",
      );
    }
    if (priority <= logLevelPriority.trace) {
      mermaidLogger.trace = bindConsoleMethod(
        "debug",
        "TRACE",
        "color: lightgreen",
        "\x1B[32m",
      );
    }
  },
  "setLogLevel",
);
