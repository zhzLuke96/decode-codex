// Restored from ref/webview/assets/global-dictation-orb-D5sxKQB_.js
// global-dictation-orb-D5sxKQB_ chunk restored from the Codex webview bundle.
import { appServices } from "../../boundaries/rpc.facade";
import { vscodeApiF as vscodeMessageBus } from "../../boundaries/vscode-api";
import {
  cleanupDictationTranscript,
  StreamingDictationTranscriber,
  transcribeAudio,
} from "../../utils/transcribe-audio";
import { getMicrophoneInputStream } from "../../utils/microphone-input";
type WaveformControls = {
  onTranscriptionFailed(error: unknown): void;
  resetWaveformDisplay(): void;
  startWaveformCapture(stream: MediaStream): void;
  stopWaveformCapture(): void;
};
type PendingDictationAudio = {
  audio: Blob;
  onTranscriptionFailed(error: unknown): void;
  sessionId: string;
};
type ActiveDictationSession = {
  chunks: Blob[];
  cleanupEnabled: boolean;
  controls: WaveformControls;
  isStopping: boolean;
  pendingStreamingSession: StreamingDictationTranscriber | null;
  recorder: MediaRecorder;
  sessionId: string;
  startedAtMs: number;
  stream: MediaStream;
  streamingSession: StreamingDictationTranscriber | null;
};
const MIN_RECORDING_DURATION_MS = 250;
let activeSession: ActiveDictationSession | null = null;
let pendingRetryAudio: PendingDictationAudio | null = null;
let startingSessionId: string | null = null;
let queuedStopSessionId: string | null = null;
let retryingSessionId: string | null = null;
export async function startGlobalDictation(
  sessionId: string,
  controls: WaveformControls,
  cleanupEnabled: boolean,
  streamingEnabled: boolean,
) {
  if (
    activeSession?.sessionId === sessionId ||
    startingSessionId === sessionId
  ) {
    return;
  }
  pendingRetryAudio = null;
  if (activeSession != null) {
    stopGlobalDictation(activeSession.sessionId);
  }
  let stream: MediaStream | null = null;
  try {
    startingSessionId = sessionId;
    await appServices.systemPermissions
      ?.requestMicrophoneAccess()
      .catch(() => {});
    stream = await getMicrophoneInputStream({
      channelCount: 1,
    });
    controls.startWaveformCapture(stream);
    const recorder = new MediaRecorder(stream);
    const session: ActiveDictationSession = {
      sessionId,
      recorder,
      stream,
      chunks: [],
      startedAtMs: Date.now(),
      isStopping: false,
      cleanupEnabled,
      pendingStreamingSession: null,
      streamingSession: null,
      controls,
    };
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        session.chunks.push(event.data);
      }
    });
    recorder.start();
    activeSession = session;
    if (startingSessionId === sessionId) {
      startingSessionId = null;
    }
    if (queuedStopSessionId === sessionId) {
      queuedStopSessionId = null;
      stopGlobalDictation(sessionId);
    }
    if (streamingEnabled && !session.isStopping) {
      const streamingSession = new StreamingDictationTranscriber();
      session.pendingStreamingSession = streamingSession;
      try {
        await streamingSession.start(stream);
        if (session.pendingStreamingSession !== streamingSession) {
          return;
        }
        session.pendingStreamingSession = null;
        if (activeSession === session && !session.isStopping) {
          session.streamingSession = streamingSession;
        } else {
          streamingSession.close();
        }
      } catch {
        if (session.pendingStreamingSession === streamingSession) {
          session.pendingStreamingSession = null;
          streamingSession.close();
        }
      }
    }
  } catch (error) {
    stream?.getTracks().forEach((track) => {
      track.stop();
    });
    controls.stopWaveformCapture();
    controls.resetWaveformDisplay();
    if (startingSessionId === sessionId) {
      startingSessionId = null;
    }
    if (queuedStopSessionId === sessionId) {
      queuedStopSessionId = null;
    }
    vscodeMessageBus.dispatchMessage("global-dictation-failed", {
      sessionId,
      stage: "recording",
    });
    throw error;
  }
}
export function stopGlobalDictation(sessionId: string) {
  const session = activeSession;
  if (session == null || session.sessionId !== sessionId) {
    queuedStopSessionId = sessionId;
    return;
  }
  if (session.isStopping) {
    return;
  }
  session.isStopping = true;
  session.pendingStreamingSession?.close();
  session.pendingStreamingSession = null;
  vscodeMessageBus.dispatchMessage("global-dictation-recording-stopped", {
    sessionId,
  });
  void finalizeRecording(session);
}
export async function retryGlobalDictation(
  sessionId: string,
  cleanupEnabled: boolean,
) {
  if (retryingSessionId === sessionId) {
    return;
  }
  const pendingAudio = pendingRetryAudio;
  if (pendingAudio == null || pendingAudio.sessionId !== sessionId) {
    throw Error("No dictation audio to retry");
  }
  retryingSessionId = sessionId;
  try {
    await transcribePendingAudio(pendingAudio, cleanupEnabled);
  } catch (error) {
    handleTranscriptionFailure(
      sessionId,
      pendingAudio.onTranscriptionFailed,
      error,
      pendingAudio,
    );
    throw error;
  } finally {
    if (retryingSessionId === sessionId) {
      retryingSessionId = null;
    }
  }
}
async function finalizeRecording(session: ActiveDictationSession) {
  let pendingAudio: PendingDictationAudio | null = null;
  try {
    try {
      await stopMediaRecorder(session.recorder);
    } finally {
      session.stream.getTracks().forEach((track) => {
        track.stop();
      });
      session.controls.stopWaveformCapture();
      session.controls.resetWaveformDisplay();
      if (activeSession === session) {
        activeSession = null;
      }
    }
    if (
      session.chunks.length === 0 ||
      Date.now() - session.startedAtMs < MIN_RECORDING_DURATION_MS
    ) {
      session.streamingSession?.close();
      vscodeMessageBus.dispatchMessage("global-dictation-completed", {
        sessionId: session.sessionId,
        text: "",
      });
      return;
    }
    pendingAudio = {
      sessionId: session.sessionId,
      audio: new Blob(session.chunks),
      onTranscriptionFailed: session.controls.onTranscriptionFailed,
    };
    await transcribePendingAudio(
      pendingAudio,
      session.cleanupEnabled,
      session.streamingSession,
    );
  } catch (error) {
    handleTranscriptionFailure(
      session.sessionId,
      session.controls.onTranscriptionFailed,
      error,
      pendingAudio,
    );
  }
}
async function transcribePendingAudio(
  pendingAudio: PendingDictationAudio,
  cleanupEnabled: boolean,
  streamingSession: StreamingDictationTranscriber | null = null,
) {
  const rawTranscript =
    streamingSession == null
      ? await transcribeAudio(pendingAudio.audio)
      : await finishStreamingTranscriptOrFallback(
          streamingSession,
          pendingAudio.audio,
        );
  const text = await cleanupDictationTranscript({
    transcript: rawTranscript,
    cleanupEnabled,
  });
  if (pendingRetryAudio === pendingAudio) {
    pendingRetryAudio = null;
  }
  vscodeMessageBus.dispatchMessage("global-dictation-completed", {
    sessionId: pendingAudio.sessionId,
    text,
  });
}
async function finishStreamingTranscriptOrFallback(
  streamingSession: StreamingDictationTranscriber,
  audio: Blob,
) {
  try {
    const transcript = await streamingSession.finish();
    if (transcript.trim().length > 0) {
      return transcript;
    }
  } catch {
    // Fall through to the non-streaming endpoint.
  }
  return transcribeAudio(audio);
}
function handleTranscriptionFailure(
  sessionId: string,
  onTranscriptionFailed: (error: unknown) => void,
  error: unknown,
  pendingAudio: PendingDictationAudio | null,
) {
  pendingRetryAudio = pendingAudio;
  onTranscriptionFailed(error);
  vscodeMessageBus.dispatchMessage("global-dictation-failed", {
    sessionId,
    stage: "transcription",
  });
}
function stopMediaRecorder(recorder: MediaRecorder) {
  return recorder.state === "inactive"
    ? Promise.resolve()
    : new Promise<void>((resolve) => {
        recorder.addEventListener(
          "stop",
          () => {
            resolve();
          },
          {
            once: true,
          },
        );
        recorder.stop();
      });
}
