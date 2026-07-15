// Restored from ref/webview/assets/dictation-error-message-D58vnHhR.js
// dictation-error-message-D58vnHhR chunk restored from the Codex webview bundle.
import { parseCodexApiErrorDetail } from "./codex-api-error";
type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description: string;
};
type IntlFormatter = {
  formatMessage(descriptor: MessageDescriptor): string;
};
type DictationErrorResult = {
  message: string;
  canRetry: boolean;
};
type HttpErrorLike = Error & {
  status: number;
};
const dictationErrorMessages = {
  connectionError: {
    id: "dictation.error.connection",
    defaultMessage: "Check your connection and try again",
    description:
      "Toast text shown when dictation audio transcription fails because of a connection problem",
  },
  microphoneMissing: {
    id: "dictation.error.microphoneMissing",
    defaultMessage: "Connect a microphone to use dictation",
    description:
      "Toast text shown when dictation cannot find an available microphone",
  },
  microphonePermissionDenied: {
    id: "dictation.error.microphonePermissionDenied",
    defaultMessage: "Allow microphone access to use dictation",
    description:
      "Toast text shown when dictation cannot start because microphone permission was denied",
  },
  microphoneUnavailable: {
    id: "dictation.error.microphoneUnavailable",
    defaultMessage: "Close other apps using the microphone",
    description:
      "Toast text shown when dictation cannot start because the microphone is unavailable",
  },
  startError: {
    id: "composer.dictation.startError",
    defaultMessage: "Unable to start dictation",
    description: "Toast text shown when dictation could not be started",
  },
  transcribeError: {
    id: "composer.dictation.transcribeError",
    defaultMessage: "Unable to transcribe audio",
    description: "Toast text shown when dictation audio transcription fails",
  },
  unsupported: {
    id: "dictation.error.unsupported",
    defaultMessage: "Dictation is not available on this device",
    description:
      "Toast text shown when dictation is not supported on the current device",
  },
} satisfies Record<string, MessageDescriptor>;
export function dictationErrorMessage(
  intl: IntlFormatter,
  errorType: string,
  error: unknown,
): DictationErrorResult {
  if (errorType === "transcription") {
    const httpError = asHttpError(error);
    if (httpError != null) {
      if (httpError.status === 429) {
        const apiDetail = parseCodexApiErrorDetail(httpError);
        if (apiDetail != null) {
          return {
            message: apiDetail.message,
            canRetry: false,
          };
        }
      }
      const message = httpError.message.toLowerCase();
      if (
        httpError.status === 0 ||
        message.includes("fetch failed") ||
        message.includes("failed to fetch") ||
        message.includes("network")
      ) {
        return {
          message: intl.formatMessage(dictationErrorMessages.connectionError),
          canRetry: true,
        };
      }
    }
    return {
      message: intl.formatMessage(dictationErrorMessages.transcribeError),
      canRetry: true,
    };
  }
  switch (getErrorName(error)) {
    case "NotAllowedError":
    case "SecurityError":
      return {
        message: intl.formatMessage(
          dictationErrorMessages.microphonePermissionDenied,
        ),
        canRetry: false,
      };
    case "NotFoundError":
    case "DevicesNotFoundError":
    case "OverconstrainedError":
    case "ConstraintNotSatisfiedError":
      return {
        message: intl.formatMessage(dictationErrorMessages.microphoneMissing),
        canRetry: false,
      };
    case "NotReadableError":
    case "TrackStartError":
      return {
        message: intl.formatMessage(
          dictationErrorMessages.microphoneUnavailable,
        ),
        canRetry: false,
      };
    case "NotSupportedError":
    case "TypeError":
      return {
        message: intl.formatMessage(dictationErrorMessages.unsupported),
        canRetry: false,
      };
    default:
      return {
        message: intl.formatMessage(dictationErrorMessages.startError),
        canRetry: false,
      };
  }
}
function asHttpError(error: unknown): HttpErrorLike | null {
  if (!(error instanceof Error)) return null;
  if (!("status" in error) || typeof error.status !== "number") return null;
  return error as HttpErrorLike;
}
function getErrorName(error: unknown) {
  if (error instanceof Error) return error.name;
  if (typeof DOMException !== "undefined" && error instanceof DOMException) {
    return error.name;
  }
  return null;
}
