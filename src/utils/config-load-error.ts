// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Config-load error parsing and generic error-message formatting helpers.

const CONFIG_LOAD_REASON = "configLoad";
const CONFIG_LOAD_MESSAGE_PREFIX = "failed to load configuration";
const CONFIG_LOAD_PATH_PATTERN = /^(.*config\.toml)(?::(\d+):(\d+))?:\s*(.+)$/;

export type ConfigLoadErrorDetails = {
  reason: typeof CONFIG_LOAD_REASON;
  filePath: string | null;
  line: number | null;
  column: number | null;
  detail: string;
};

export type ConfigLoadErrorParser = (
  error: unknown,
) => ConfigLoadErrorDetails | null;

const CONFIG_LOAD_ERROR_PARSERS: readonly ConfigLoadErrorParser[] = [
  parseStructuredConfigLoadError,
  parseConfigLoadErrorMessage,
];

export function parseConfigLoadError(
  error: unknown,
  parsers: readonly ConfigLoadErrorParser[] = CONFIG_LOAD_ERROR_PARSERS,
): ConfigLoadErrorDetails | null {
  for (const parser of parsers) {
    const parsedError = parser(error);
    if (parsedError != null) {
      return parsedError;
    }
  }
  return null;
}

function parseStructuredConfigLoadError(
  error: unknown,
): ConfigLoadErrorDetails | null {
  if (!isRecord(error) || !("data" in error) || !isRecord(error.data)) {
    return null;
  }

  const { data } = error;
  if (data.reason !== CONFIG_LOAD_REASON || typeof data.detail !== "string") {
    return null;
  }

  const filePath = readNullableString(data.filePath);
  const line = readNullablePositiveInteger(data.line);
  const column = readNullablePositiveInteger(data.column);
  if (filePath === undefined || line === undefined || column === undefined) {
    return null;
  }

  return {
    reason: CONFIG_LOAD_REASON,
    filePath,
    line,
    column,
    detail: data.detail,
  };
}

function parseConfigLoadErrorMessage(
  error: unknown,
): ConfigLoadErrorDetails | null {
  const message =
    typeof error === "string"
      ? error
      : isRecord(error) && typeof error.message === "string"
        ? error.message
        : null;

  if (
    message == null ||
    (message !== CONFIG_LOAD_MESSAGE_PREFIX &&
      !message.startsWith(`${CONFIG_LOAD_MESSAGE_PREFIX}:`))
  ) {
    return null;
  }

  const detailText = message.replace(/^failed to load configuration:?\s*/, "");
  if (detailText.length === 0) {
    return {
      reason: CONFIG_LOAD_REASON,
      filePath: null,
      line: null,
      column: null,
      detail: "the file contains invalid configuration",
    };
  }

  const pathMatch = CONFIG_LOAD_PATH_PATTERN.exec(detailText);
  if (pathMatch == null) {
    return {
      reason: CONFIG_LOAD_REASON,
      filePath: null,
      line: null,
      column: null,
      detail: detailText,
    };
  }

  return {
    reason: CONFIG_LOAD_REASON,
    filePath: pathMatch[1],
    line: pathMatch[2] == null ? null : Number(pathMatch[2]),
    column: pathMatch[3] == null ? null : Number(pathMatch[3]),
    detail: pathMatch[4],
  };
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (isRecord(error)) {
    const { message } = error;
    if (typeof message === "string" && message.length > 0) {
      return message;
    }
  }
  try {
    const stringifiedError = JSON.stringify(error);
    return stringifiedError === undefined ? String(error) : stringifiedError;
  } catch {
    return String(error);
  }
}

function readNullableString(value: unknown): string | null | undefined {
  return value == null ? null : typeof value === "string" ? value : undefined;
}

function readNullablePositiveInteger(
  value: unknown,
): number | null | undefined {
  return value == null
    ? null
    : typeof value === "number" &&
        Number.isInteger(value) &&
        value > 0 &&
        Number.isFinite(value)
      ? value
      : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
