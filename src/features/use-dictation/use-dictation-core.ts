// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import React from "react";
import { appServices } from "../../boundaries/rpc.facade";
import {
  vscodeApiD as vscodeBridge,
  vscodeApiH as logger,
} from "../../boundaries/vscode-api";
import { getMicrophoneInputStream } from "../../utils/microphone-input";
import {
  cleanupDictationTranscript,
  StreamingDictationTranscriber,
  transcribeAudio,
} from "../../utils/transcribe-audio";
import { useRecordingWaveform } from "../../utils/use-recording-waveform";
import { useStableCallback } from "../../utils/use-stable-callback";
import type {
  DictationAction,
  DictationHandlers,
  PendingTranscription,
  UseDictationCoreOptions,
  UseDictationResult,
} from "./types";
const MIN_DICTATION_DURATION_MS = 250;
export function useDictationCore({
  cleanupEnabled,
  enabled,
  getSurroundingText,
  onStartError,
  onTranscriptInsert,
  onTranscriptSend,
  onTranscribeError,
  onUnsupported,
  streamingEnabled,
}: UseDictationCoreOptions): UseDictationResult {
  const [isDictating, setIsDictating] = React.useState(false);
  const [isTranscribing, setIsTranscribing] = React.useState(false);
  const [canRetryDictation, setCanRetryDictation] = React.useState(false);
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const mediaStreamRef = React.useRef<MediaStream | null>(null);
  const streamingTranscriberRef =
    React.useRef<StreamingDictationTranscriber | null>(null);
  const startingStreamingTranscriberRef =
    React.useRef<StreamingDictationTranscriber | null>(null);
  const recordedChunksRef = React.useRef<Blob[]>([]);
  const pendingActionRef = React.useRef<DictationAction | null>(null);
  const startingRef = React.useRef(false);
  const pendingTranscriptionRef = React.useRef<PendingTranscription | null>(
    null,
  );
  const mountedRef = React.useRef(true);
  const enabledRef = React.useRef(enabled);
  const recordingStartedAtRef = React.useRef<number | null>(null);
  const handlersRef = React.useRef<DictationHandlers>({
    onTranscriptInsert,
    onTranscriptSend,
    onStartError,
    onTranscribeError,
    onUnsupported,
    getSurroundingText,
  });
  const {
    recordingDurationMs,
    waveformCanvasRef,
    startWaveformCapture,
    stopWaveformCapture,
    resetWaveformDisplay,
  } = useRecordingWaveform();
  handlersRef.current = {
    onTranscriptInsert,
    onTranscriptSend,
    onStartError,
    onTranscribeError,
    onUnsupported,
    getSurroundingText,
  };
  enabledRef.current = enabled;
  const closeStreamingTranscribers = () => {
    startingStreamingTranscriberRef.current?.close();
    startingStreamingTranscriberRef.current = null;
    streamingTranscriberRef.current?.close();
    streamingTranscriberRef.current = null;
  };
  const finishStreamingOrTranscribe = async (audio: Blob) => {
    startingStreamingTranscriberRef.current?.close();
    startingStreamingTranscriberRef.current = null;
    const streamingTranscriber = streamingTranscriberRef.current;
    streamingTranscriberRef.current = null;
    if (streamingTranscriber == null) return transcribeAudio(audio);
    try {
      const streamedTranscript = await streamingTranscriber.finish();
      if (streamedTranscript.trim().length > 0) return streamedTranscript;
    } catch (error) {
      logger.warning("[Composer] streaming dictation failed", {
        safe: {},
        sensitive: {
          error,
        },
      });
    }
    return transcribeAudio(audio);
  };
  const transcribeRecordedAudio = async ({
    action,
    audio,
    handlers,
  }: PendingTranscription) => {
    if (mountedRef.current) setIsTranscribing(true);
    try {
      const cleanedTranscript = await cleanupDictationTranscript({
        transcript: await finishStreamingOrTranscribe(audio),
        surroundingText: handlers.getSurroundingText?.() ?? null,
        cleanupEnabled,
      });
      pendingTranscriptionRef.current = null;
      if (mountedRef.current) setCanRetryDictation(false);
      const transcript = cleanedTranscript.trim();
      if (transcript.length > 0) {
        vscodeBridge
          .getInstance()
          .dispatchMessage("global-dictation-record-history-item", {
            text: transcript,
          });
        if (action === "send") {
          handlers.onTranscriptSend(transcript);
        } else {
          handlers.onTranscriptInsert(transcript);
        }
      }
    } catch (error) {
      logger.error("[Composer] dictation failed", {
        safe: {},
        sensitive: {
          error,
        },
      });
      if (mountedRef.current) {
        pendingTranscriptionRef.current = {
          action,
          audio,
          handlers,
        };
        setCanRetryDictation(true);
      }
      handlers.onTranscribeError(error);
    } finally {
      if (mountedRef.current) setIsTranscribing(false);
    }
  };
  const finishRecording = async () => {
    const action = pendingActionRef.current ?? "insert";
    const handlers = handlersRef.current;
    pendingActionRef.current = null;
    const elapsedMs = Math.max(
      recordingDurationMs,
      recordingStartedAtRef.current == null
        ? 0
        : performance.now() - recordingStartedAtRef.current,
    );
    recordingStartedAtRef.current = null;
    const mediaRecorder = mediaRecorderRef.current;
    const recordedChunks = recordedChunksRef.current;
    recordedChunksRef.current = [];
    if (mediaRecorder != null) {
      mediaRecorder.ondataavailable = null;
      mediaRecorder.onstop = null;
    }
    mediaRecorderRef.current = null;
    stopWaveformCapture();
    const mediaStream = mediaStreamRef.current;
    if (mediaStream != null) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    mediaStreamRef.current = null;
    if (mountedRef.current) {
      setIsDictating(false);
      resetWaveformDisplay();
    }
    if (action === "abort" || recordedChunks.length === 0) {
      closeStreamingTranscribers();
      return;
    }
    if (elapsedMs < MIN_DICTATION_DURATION_MS) {
      closeStreamingTranscribers();
      return;
    }
    const mimeType =
      mediaRecorder?.mimeType || recordedChunks[0]?.type || "audio/webm";
    await transcribeRecordedAudio({
      action,
      audio: new Blob(recordedChunks, {
        type: mimeType,
      }),
      handlers,
    });
  };
  const retryDictation = useStableCallback(async () => {
    if (isDictating || isTranscribing) return;
    const pendingTranscription = pendingTranscriptionRef.current;
    if (pendingTranscription != null) {
      await transcribeRecordedAudio(pendingTranscription);
    }
  });
  const stopDictation = useStableCallback((action: DictationAction) => {
    if (pendingActionRef.current != null) {
      pendingActionRef.current =
        action === "send" ? "send" : pendingActionRef.current;
      return;
    }
    pendingActionRef.current = action;
    if (startingRef.current) return;
    const mediaRecorder = mediaRecorderRef.current;
    if (!mediaRecorder || mediaRecorder.state === "inactive") {
      finishRecording();
      return;
    }
    mediaRecorder.stop();
  });
  const abortDictation = useStableCallback(() => {
    stopDictation("abort");
  });
  const startDictation = useStableCallback(async () => {
    if (isDictating || isTranscribing || startingRef.current) return;
    if (!enabledRef.current) {
      handlersRef.current.onUnsupported();
      return;
    }
    startingRef.current = true;
    pendingActionRef.current = null;
    try {
      pendingTranscriptionRef.current = null;
      setCanRetryDictation(false);
      stopWaveformCapture();
      await appServices.systemPermissions
        ?.requestMicrophoneAccess()
        .catch(() => {});
      const mediaStream = await getMicrophoneInputStream({
        channelCount: 1,
      });
      if (!mountedRef.current || !enabledRef.current) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
        return;
      }
      recordingStartedAtRef.current = performance.now();
      mediaStreamRef.current = mediaStream;
      startWaveformCapture(mediaStream);
      const mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorderRef.current = mediaRecorder;
      recordedChunksRef.current = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) recordedChunksRef.current.push(event.data);
      };
      mediaRecorder.onstop = () => {
        finishRecording();
      };
      mediaRecorder.start();
      setIsDictating(true);
      if (pendingActionRef.current != null) {
        mediaRecorder.stop();
        return;
      }
      if (streamingEnabled) {
        const streamingTranscriber = new StreamingDictationTranscriber();
        startingStreamingTranscriberRef.current = streamingTranscriber;
        streamingTranscriber.start(mediaStream).then(
          () => {
            if (
              startingStreamingTranscriberRef.current !== streamingTranscriber
            ) {
              return;
            }
            startingStreamingTranscriberRef.current = null;
            if (
              !mountedRef.current ||
              !enabledRef.current ||
              mediaStreamRef.current !== mediaStream
            ) {
              streamingTranscriber.close();
              return;
            }
            streamingTranscriberRef.current = streamingTranscriber;
          },
          (error) => {
            if (
              startingStreamingTranscriberRef.current === streamingTranscriber
            ) {
              startingStreamingTranscriberRef.current = null;
              streamingTranscriber.close();
              logger.warning("[Composer] unable to start streaming dictation", {
                safe: {},
                sensitive: {
                  error,
                },
              });
            }
          },
        );
      }
    } catch (error) {
      logger.error("[Composer] unable to start dictation", {
        safe: {},
        sensitive: {
          error,
        },
      });
      if (mountedRef.current) handlersRef.current.onStartError(error);
      const mediaRecorder = mediaRecorderRef.current;
      if (mediaRecorder != null) {
        mediaRecorder.ondataavailable = null;
        mediaRecorder.onstop = null;
      }
      mediaRecorderRef.current = null;
      closeStreamingTranscribers();
      stopWaveformCapture();
      resetWaveformDisplay();
      const mediaStream = mediaStreamRef.current;
      if (mediaStream != null) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      mediaStreamRef.current = null;
      recordedChunksRef.current = [];
      recordingStartedAtRef.current = null;
      pendingActionRef.current = null;
    } finally {
      startingRef.current = false;
    }
  });
  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      const mediaRecorder = mediaRecorderRef.current;
      if (mediaRecorder != null && mediaRecorder.state !== "inactive") {
        pendingActionRef.current ??= "insert";
        mediaRecorder.stop();
      }
    };
  }, []);
  return {
    abortDictation,
    isDictating,
    isTranscribing,
    canRetryDictation,
    recordingDurationMs,
    waveformCanvasRef,
    retryDictation,
    startDictation,
    stopDictation,
  };
}
