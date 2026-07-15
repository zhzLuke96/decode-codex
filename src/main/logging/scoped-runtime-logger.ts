// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";

export const loggerFactory = sharedRuntime.createLazyScopedStructuredLogger as (
  scope: string,
) => () => {
  error(message: string, details?: unknown): void;
  debug?(message: string, details?: unknown): void;
  info?(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
  log?(level: string, message: string, details?: unknown): void;
};

export const runtimeLogger = loggerFactory("workspace-root-boundary");

export const sparkleLogger = loggerFactory("sparkle");

export const windowsUpdaterLogger = loggerFactory("windows-updater");

export const windowsStoreUpdaterLogger = loggerFactory("windows-store-updater");

export function logScopedMessage(
  logger: ReturnType<ReturnType<typeof loggerFactory>>,
  level: string,
  message: string,
  details?: unknown,
): void {
  if (typeof logger.log === "function") {
    logger.log(level, message, details);
    return;
  }
  if (level === "error") {
    logger.error(message, details);
    return;
  }
  if (level === "warning") {
    logger.warning(message, details);
    return;
  }
  if (typeof logger.info === "function") {
    logger.info(message, details);
    return;
  }
  logger.debug?.(message, details);
}
