// Restored from ref/webview/assets/global-dictation-orb-D5sxKQB_.js
// global-dictation-orb-D5sxKQB_ chunk restored from the Codex webview bundle.
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useIntl } from "react-intl";
import {
  vscodeApiF as vscodeMessageBus,
  vscodeApiP as useVscodeMessage,
} from "../../boundaries/vscode-api";
import { useRecordingWaveform } from "../../utils/use-recording-waveform";
import { dictationErrorMessage } from "../../utils/dictation-error-message";
import {
  retryGlobalDictation,
  startGlobalDictation,
  stopGlobalDictation,
} from "./session-controller";
import { GlobalDictationOrbButton } from "./orb-button";
type GlobalDictationOrbStatus = "idle" | "listening" | "transcribing" | "error";
type GlobalDictationEvent = {
  sessionId: string;
};
export type GlobalDictationOrbProps = {
  cleanupEnabled: boolean;
  onActiveSessionIdChange?: (sessionId: string | null) => void;
  onVisibilityChange?: (isVisible: boolean) => void;
  registerNativePetRenderer?: boolean;
  streamingEnabled: boolean;
};
export function GlobalDictationOrb({
  cleanupEnabled,
  streamingEnabled,
  onActiveSessionIdChange,
  registerNativePetRenderer = true,
  onVisibilityChange,
}: GlobalDictationOrbProps) {
  const intl = useIntl();
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [status, setStatus] = useState<GlobalDictationOrbStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [canRetryError, setCanRetryError] = useState(false);
  const activeSessionIdRef = useRef<string | null>(null);
  const {
    waveformCanvasRef,
    startWaveformCapture,
    stopWaveformCapture,
    resetWaveformDisplay,
  } = useRecordingWaveform({
    variant: "orb",
  });
  const showError = (stage: string, error: unknown) => {
    const errorState = dictationErrorMessage(intl, stage, error);
    setErrorMessage(errorState.message);
    setCanRetryError(errorState.canRetry);
    setStatus("error");
  };
  const retryDictation = () => {
    if (activeSessionId == null) {
      return;
    }
    setErrorMessage(null);
    setCanRetryError(false);
    setStatus("transcribing");
    retryGlobalDictation(activeSessionId, cleanupEnabled).catch((error) => {
      showError("transcription", error);
    });
  };
  const resetToIdle = () => {
    activeSessionIdRef.current = null;
    setActiveSessionId(null);
    onActiveSessionIdChange?.(null);
    setErrorMessage(null);
    setCanRetryError(false);
    setStatus("idle");
    onVisibilityChange?.(false);
  };
  useVscodeMessage("global-dictation-idle", resetToIdle, []);
  useVscodeMessage(
    "global-dictation-start",
    (event: GlobalDictationEvent) => {
      activeSessionIdRef.current = event.sessionId;
      setActiveSessionId(event.sessionId);
      onActiveSessionIdChange?.(event.sessionId);
      setErrorMessage(null);
      setCanRetryError(false);
      setStatus("listening");
      onVisibilityChange?.(true);
      startGlobalDictation(
        event.sessionId,
        {
          startWaveformCapture,
          stopWaveformCapture,
          resetWaveformDisplay,
          onTranscriptionFailed: (error) => {
            showError("transcription", error);
          },
        },
        cleanupEnabled,
        streamingEnabled,
      ).catch((error) => {
        showError("start", error);
      });
    },
    [],
  );
  useVscodeMessage(
    "global-dictation-stop",
    (event: GlobalDictationEvent) => {
      setErrorMessage(null);
      setCanRetryError(false);
      setStatus("transcribing");
      stopGlobalDictation(event.sessionId);
    },
    [],
  );
  useEffect(() => {
    let isMounted = true;
    if (registerNativePetRenderer) {
      queueMicrotask(() => {
        if (isMounted) {
          vscodeMessageBus.dispatchMessage(
            "global-dictation-pet-renderer-ready",
            {
              ready: true,
            },
          );
        }
      });
    }
    return () => {
      isMounted = false;
      const currentSessionId = activeSessionIdRef.current;
      if (currentSessionId != null) {
        stopGlobalDictation(currentSessionId);
      }
      onActiveSessionIdChange?.(null);
      onVisibilityChange?.(false);
      if (registerNativePetRenderer) {
        vscodeMessageBus.dispatchMessage(
          "global-dictation-pet-renderer-ready",
          {
            ready: false,
          },
        );
      }
    };
  }, [onActiveSessionIdChange, onVisibilityChange, registerNativePetRenderer]);
  const shouldRetryOnError = status === "error" && canRetryError;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (status === "listening" && activeSessionId != null) {
      vscodeMessageBus.dispatchMessage("global-dictation-stop-requested", {
        sessionId: activeSessionId,
      });
      return;
    }
    if (shouldRetryOnError) {
      retryDictation();
      return;
    }
    if (status === "error" && activeSessionId != null) {
      vscodeMessageBus.dispatchMessage("global-dictation-dismiss", {
        sessionId: activeSessionId,
      });
    }
  };
  if (status === "idle") {
    return null;
  }
  return (
    <GlobalDictationOrbButton
      canRetryError={canRetryError}
      errorMessage={errorMessage}
      onClick={handleClick}
      status={status}
      waveformCanvasRef={waveformCanvasRef}
    />
  );
}
