// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
export const dictationStreamingUploadHeaderValue = [
  "codex-app",
  "dictation",
  "streaming",
].join("-");

export function initDictationStreamingUploadHeaderChunk(): void {
  void dictationStreamingUploadHeaderValue;
}

export type DictationStreamErrorPayload = {
  code: string;
  message: string;
  retryable: boolean;
};
export type DictationSession = {
  session_id: string;
  status: "active" | "closed";
  config: {
    provider_mode: "buffered" | "streaming_sse";
    transcript_delivery_mode: "final_only" | "segment" | "delta";
  };
};
export type DictationStreamingEvent =
  | {
      type: "session.started" | "session.updated";
      sequence_no: number;
      session: DictationSession;
    }
  | {
      type: "speech.started" | "speech.stopped";
      sequence_no: number;
      utterance_id: string;
    }
  | {
      type: "transcript.delta" | "transcript.segment" | "transcript.final";
      sequence_no: number;
      utterance_id: string;
      revision: number;
      text: string;
    }
  | {
      type: "transcript.failed";
      sequence_no: number;
      utterance_id?: string | null;
      error: DictationStreamErrorPayload;
    }
  | {
      type: "session.error";
      sequence_no: number;
      fatal: boolean;
      error: DictationStreamErrorPayload;
    };
export type AudioAppendMessage = {
  type: "audio.append";
  audio: string;
};
export type DictationClientMessage =
  | AudioAppendMessage
  | {
      type: "session.start";
      config: {
        input_audio_format: "pcm16";
        sample_rate_hz: number;
        num_channels: 1;
        max_buffer_size_bytes: number;
        max_utterance_duration_ms: number;
        session_ttl_ms: number;
        provider_mode: "streaming_sse";
        transcript_delivery_mode: "final_only";
        vad: {
          type: "server_vad";
          threshold: number;
          prefix_padding_ms: number;
          silence_duration_ms: number;
        };
      };
    }
  | {
      type: "audio.flush";
      reason: "client";
    }
  | {
      type: "session.close";
    };
export type DictationStreamConnectInfo = {
  websocketUrl: string;
  protocols?: string | string[];
};
export type TranscriptState = {
  orderedUtteranceIds: string[];
  finalTextByUtteranceId: Record<string, string>;
};
export type CleanupDictationTranscriptOptions = {
  transcript: string;
  surroundingText?: string | null;
  cleanupEnabled: boolean;
};
export type TranscribeAudioOptions = {
  contentType?: string;
  filename?: string;
  language?: string;
};
export type ResponseOutput = {
  output: Array<{
    type: string;
    content?: Array<{
      type: string;
      text?: string;
    }>;
  }>;
};
export type ResponseStreamEventPayload = {
  type?: string;
  delta?: string;
  text?: string;
  response?: ResponseOutput;
  error?:
    | string
    | {
        message?: string;
      };
};
export type ParsedResponseStreamEvent = {
  delta: string | null;
  completedText: string | null;
  error: string | null;
};
