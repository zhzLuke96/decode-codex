// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// App logger facade used by restored conversation modules.
import {
  appMainLogger as appLogger,
  initAppLoggingChunk,
} from "./app-main-host-runtime";

export type AppLogger = {
  debug(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  error(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  warning(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  info(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
};

export function initAppLoggerRuntime(): void {
  initAppLoggingChunk();
}

export function serializeError(error: unknown): unknown {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause,
    };
  }

  return error;
}

export { appLogger };
