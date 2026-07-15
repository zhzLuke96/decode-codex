// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  createFileBasedLogger,
  type LoggerSink,
  type NonFatalReporter,
} from "./file-based-logger";
import {
  DesktopStructuredLogger,
  StructuredLogDetails,
} from "../workspace/desktop-runtime-types";

export function ignoreConsolePipeErrors(
  streams: Array<
    NodeJS.WriteStream & {
      __codexIgnoreConsoleWriteErrors?: boolean;
    }
  > = [process.stdout, process.stderr],
): void {
  for (const stream of streams) {
    if (stream.__codexIgnoreConsoleWriteErrors) continue;
    stream.__codexIgnoreConsoleWriteErrors = true;
    stream.on("error", (error) => {
      if (!isIgnoredConsoleWriteError(error)) throw error;
    });
  }
}

export function installDesktopLogBridge(
  nonFatalReporter: NonFatalReporter,
  structuredLogger: DesktopStructuredLogger,
  appSessionId: string,
  enabledLevels: Iterable<string>,
): void {
  const fileLogger = createFileBasedLogger({
    appSessionId,
    nonFatalReporter,
  });
  const consoleLog = createConsoleLogWriter();
  const enabledLevelSet = new Set(enabledLevels);
  const shouldLog = (level: string) => {
    const runtimeShouldLog = sharedRuntime.isLogLevelEnabled as
      | ((level: string, enabled: Iterable<string>) => boolean)
      | undefined;
    return typeof runtimeShouldLog === "function"
      ? runtimeShouldLog(level, enabledLevels)
      : enabledLevelSet.has(level);
  };
  const logAtLevel = (
    level: string,
    message: string,
    details?: StructuredLogDetails,
  ) => {
    if (!shouldLog(level)) return;
    const normalizedDetails = normalizeStructuredLogDetails(details);
    const flatDetails = {
      ...normalizedDetails.safe,
      ...normalizedDetails.sensitive,
    };
    const printableMessage =
      Object.keys(flatDetails).length === 0
        ? message
        : `${message} ${formatStructuredLogDetails(flatDetails)}`;
    consoleLog(level, printableMessage);
    writeFileLoggerLine(fileLogger, level, printableMessage);
    structuredLogger.log(level, message, normalizedDetails.safe);
  };
  const registeredLogger = {
    trace: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("trace", message, details),
    debug: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("debug", message, details),
    info: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("info", message, details),
    warning: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("warning", message, details),
    error: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("error", message, details),
    log: (level: string, message: string, details?: StructuredLogDetails) =>
      logAtLevel(level, message, details),
    dispose() {},
  };
  const registerLogger = sharedRuntime.registerRootStructuredLogger as
    | ((logger: typeof registeredLogger) => void)
    | undefined;
  registerLogger?.(registeredLogger);
}

function isIgnoredConsoleWriteError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    (error.code === "EPIPE" ||
      error.code === "ERR_STREAM_DESTROYED" ||
      error.code === "EBADF")
  );
}

function createConsoleLogWriter(): (level: string, message: string) => void {
  let consoleIsClosed = false;
  return (level, message) => {
    if (consoleIsClosed) return;
    try {
      switch (level) {
        case "error":
          console.error(message);
          break;
        case "warning":
          console.warn(message);
          break;
        case "info":
          console.info(message);
          break;
        case "debug":
          console.debug(message);
          break;
        default:
          console.log(message);
      }
    } catch (error) {
      if (!isIgnoredConsoleWriteError(error)) throw error;
      consoleIsClosed = true;
    }
  };
}

function normalizeStructuredLogDetails(
  details: StructuredLogDetails | null | undefined,
): Required<StructuredLogDetails> {
  return {
    safe: details?.safe ?? {},
    sensitive: details?.sensitive ?? {},
  };
}

function formatStructuredLogDetails(details: Record<string, unknown>): string {
  const runtimeFormatter = sharedRuntime.formatStructuredLogDetails as
    | ((details: Record<string, unknown>) => string)
    | undefined;
  if (typeof runtimeFormatter === "function") return runtimeFormatter(details);
  return JSON.stringify(details);
}

function writeFileLoggerLine(
  fileLogger: LoggerSink,
  level: string,
  message: string,
): void {
  fileLogger.logLine(`${new Date().toISOString()} ${level} ${message}`);
}
