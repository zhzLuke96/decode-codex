// Restored from ref/webview/assets/global-dictation-orb-D5sxKQB_.js
// global-dictation-orb-D5sxKQB_ chunk restored from the Codex webview bundle.
import type { MouseEventHandler, RefObject } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import clsx from "clsx";
import { RegenerateIcon } from "../../icons/regenerate-icon";
import { XIcon } from "../../icons/x-icon";
import { Spinner } from "../../ui/spinner";
type GlobalDictationOrbStatus = "idle" | "listening" | "transcribing" | "error";
type GlobalDictationOrbButtonProps = {
  canRetryError: boolean;
  errorMessage: string | null;
  onClick: MouseEventHandler<HTMLButtonElement>;
  status: GlobalDictationOrbStatus;
  waveformCanvasRef: RefObject<HTMLCanvasElement>;
};
const styles = {
  recordingOrb: "_recordingOrb_1csnm_1",
};
export function GlobalDictationOrbButton({
  canRetryError,
  errorMessage,
  onClick,
  status,
  waveformCanvasRef,
}: GlobalDictationOrbButtonProps) {
  const intl = useIntl();
  const isTranscribing = status === "transcribing";
  const canRetry = status === "error" && canRetryError;
  const ariaLabel = getAriaLabel({
    canRetry,
    errorMessage,
    intl,
    status,
  });
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={clsx(
        "no-drag pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25",
        status === "listening"
          ? clsx("cursor-interaction text-white", styles.recordingOrb)
          : "bg-token-dropdown-background text-token-text-secondary",
        status === "error" && "cursor-interaction",
      )}
      disabled={isTranscribing}
      onClick={onClick}
    >
      {status === "listening" ? (
        <canvas
          ref={waveformCanvasRef}
          className="size-10 text-white"
          aria-hidden="true"
        />
      ) : null}
      {isTranscribing ? <Spinner className="icon-sm" /> : null}
      {canRetry ? <RegenerateIcon className="icon-sm" /> : null}
      {status === "error" && !canRetryError ? (
        <XIcon className="icon-sm" />
      ) : null}
      <span className="sr-only">
        {status === "listening" ? (
          <FormattedMessage
            id="globalDictation.orb.listening"
            defaultMessage="Listening"
            description="Status text for the floating dictation orb while system-wide dictation is listening"
          />
        ) : null}
        {isTranscribing ? (
          <FormattedMessage
            id="globalDictation.orb.transcribingStatus"
            defaultMessage="Transcribing"
            description="Status text for the floating dictation orb while system-wide dictation is transcribing"
          />
        ) : null}
        {status === "error" && errorMessage != null ? errorMessage : null}
      </span>
    </button>
  );
}
function getAriaLabel({
  canRetry,
  errorMessage,
  intl,
  status,
}: {
  canRetry: boolean;
  errorMessage: string | null;
  intl: ReturnType<typeof useIntl>;
  status: GlobalDictationOrbStatus;
}) {
  if (canRetry) {
    return errorMessage == null
      ? intl.formatMessage({
          id: "globalDictation.orb.retry",
          defaultMessage: "Retry dictation",
          description:
            "Accessible label for retrying system-wide dictation from the floating dictation orb",
        })
      : intl.formatMessage(
          {
            id: "globalDictation.orb.retryWithError",
            defaultMessage: "Retry dictation: {errorMessage}",
            description:
              "Accessible label for retrying system-wide dictation from the floating dictation orb after an error",
          },
          {
            errorMessage,
          },
        );
  }
  if (status === "error") {
    return errorMessage == null
      ? intl.formatMessage({
          id: "globalDictation.orb.dismiss",
          defaultMessage: "Dismiss dictation",
          description:
            "Accessible label for dismissing a system-wide dictation error from the floating dictation orb",
        })
      : intl.formatMessage(
          {
            id: "globalDictation.orb.dismissWithError",
            defaultMessage: "Dismiss dictation: {errorMessage}",
            description:
              "Accessible label for dismissing a system-wide dictation error from the floating dictation orb after an error",
          },
          {
            errorMessage,
          },
        );
  }
  if (status === "transcribing") {
    return intl.formatMessage({
      id: "globalDictation.orb.transcribing",
      defaultMessage: "Transcribing",
      description:
        "Accessible label for the floating dictation orb while system-wide dictation is transcribing",
    });
  }
  return intl.formatMessage({
    id: "globalDictation.orb.stop",
    defaultMessage: "Stop dictation",
    description:
      "Accessible label for stopping system-wide dictation from the floating dictation orb",
  });
}
