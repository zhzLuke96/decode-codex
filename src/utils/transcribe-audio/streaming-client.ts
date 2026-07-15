// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
import { vscodeApiL as VscodeFetchBridge } from "../../boundaries/vscode-api";
import { encodeBase64Bytes } from "../base64";
import { parseDictationStreamingEvent } from "./schemas";
import type {
  AudioAppendMessage,
  DictationClientMessage,
  DictationStreamConnectInfo,
  DictationStreamingEvent,
} from "./types";
const SESSION_START_TIMEOUT_MS = 10000;
const SESSION_FINISH_TIMEOUT_MS = 8000;
export class DictationStreamingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DictationStreamingError";
  }
}
export class DictationStreamClient {
  private websocket: WebSocket | null = null;
  private pendingStartupAudioAppends: AudioAppendMessage[] | null = [];
  private finishPromise: Promise<void> | null = null;
  private resolveFinish: (() => void) | null = null;
  private rejectFinish: ((error: Error) => void) | null = null;
  private rejectConnectBeforeWebsocket: ((error: Error) => void) | null = null;
  private sessionClosed = false;
  private terminalError: Error | null = null;
  constructor(
    private readonly onEvent: (event: DictationStreamingEvent) => void,
  ) {}
  async connect(sampleRateHz: number) {
    this.terminalError = null;
    this.sessionClosed = false;
    const closedBeforeConnect = new Promise<never>((_resolve, reject) => {
      this.rejectConnectBeforeWebsocket = reject;
    });
    let connectInfo: DictationStreamConnectInfo;
    try {
      connectInfo = await Promise.race([
        requestDictationStreamConnectInfo(),
        closedBeforeConnect,
      ]);
    } finally {
      this.rejectConnectBeforeWebsocket = null;
    }
    const { websocketUrl, protocols } = connectInfo;
    return new Promise<void>((resolve, reject) => {
      const websocket = new WebSocket(websocketUrl, protocols);
      this.websocket = websocket;
      let sessionStarted = false;
      let connectSettled = false;
      let closeError: Error | null = null;
      const rejectConnect = (error: Error) => {
        if (connectSettled) return;
        connectSettled = true;
        reject(error);
      };
      const resolveConnect = () => {
        if (connectSettled) return;
        connectSettled = true;
        resolve();
      };
      const startupTimeout = window.setTimeout(() => {
        const error = new DictationStreamingError(
          "Dictation stream timed out before session.start completed.",
        );
        closeError = error;
        websocket.close();
        rejectConnect(error);
      }, SESSION_START_TIMEOUT_MS);
      websocket.addEventListener(
        "open",
        () => {
          this.send(createSessionStartMessage(sampleRateHz));
        },
        {
          once: true,
        },
      );
      websocket.addEventListener("message", (messageEvent) => {
        const event = parseDictationStreamingEvent(messageEvent.data);
        if (event == null) {
          const error = new DictationStreamingError(
            "Dictation stream returned an invalid event payload.",
          );
          closeError = error;
          rejectConnect(error);
          websocket.close();
          return;
        }
        this.onEvent(event);
        if (event.type === "session.started") {
          sessionStarted = true;
          window.clearTimeout(startupTimeout);
          this.drainPendingStartupAudioAppends();
          resolveConnect();
          return;
        }
        if (
          event.type === "session.updated" &&
          event.session.status === "closed"
        ) {
          this.sessionClosed = true;
          websocket.close();
          this.resolveFinish?.();
          return;
        }
        if (event.type === "transcript.failed") {
          const error = new DictationStreamingError(event.error.message);
          closeError = error;
          this.rejectFinish?.(error);
          rejectConnect(error);
          websocket.close();
          return;
        }
        if (event.type === "session.error" && event.fatal) {
          const error = new DictationStreamingError(event.error.message);
          closeError = error;
          this.rejectFinish?.(error);
          rejectConnect(error);
          websocket.close();
        }
      });
      websocket.addEventListener(
        "error",
        () => {
          closeError ??= new DictationStreamingError(
            "Dictation stream websocket failed.",
          );
        },
        {
          once: true,
        },
      );
      websocket.addEventListener(
        "close",
        (event) => {
          window.clearTimeout(startupTimeout);
          this.websocket = null;
          const error = closeError ?? getCloseError(event, sessionStarted);
          if (this.finishPromise) {
            if (error && !this.sessionClosed) this.rejectFinish?.(error);
            else this.resolveFinish?.();
          } else if (error && !this.sessionClosed) {
            this.terminalError = error;
          }
          if (!sessionStarted && error) rejectConnect(error);
          this.finishPromise = null;
          this.resolveFinish = null;
          this.rejectFinish = null;
        },
        {
          once: true,
        },
      );
    });
  }
  appendPCM16(bytes: Uint8Array) {
    const audioAppend: AudioAppendMessage = {
      type: "audio.append",
      audio: encodeBase64Bytes(bytes),
    };
    if (!this.sessionClosed && this.pendingStartupAudioAppends != null) {
      this.pendingStartupAudioAppends.push(audioAppend);
      return;
    }
    this.send(audioAppend);
  }
  finish() {
    if (!this.websocket) {
      return this.terminalError == null
        ? Promise.resolve()
        : Promise.reject(this.terminalError);
    }
    if (this.finishPromise) return this.finishPromise;
    this.finishPromise = new Promise<void>((resolve, reject) => {
      const finishTimeout = window.setTimeout(() => {
        const error = new DictationStreamingError(
          "Dictation stream timed out while closing the session.",
        );
        this.websocket?.close();
        reject(error);
      }, SESSION_FINISH_TIMEOUT_MS);
      this.resolveFinish = () => {
        window.clearTimeout(finishTimeout);
        resolve();
      };
      this.rejectFinish = (error) => {
        window.clearTimeout(finishTimeout);
        reject(error);
      };
    });
    this.send({
      type: "audio.flush",
      reason: "client",
    });
    this.send({
      type: "session.close",
    });
    return this.finishPromise;
  }
  close() {
    this.pendingStartupAudioAppends = null;
    this.rejectConnectBeforeWebsocket?.(
      new DictationStreamingError(
        "Dictation stream closed before websocket connection started.",
      ),
    );
    this.rejectConnectBeforeWebsocket = null;
    this.websocket?.close();
    this.websocket = null;
  }
  private drainPendingStartupAudioAppends() {
    const pendingAppends = this.pendingStartupAudioAppends ?? [];
    this.pendingStartupAudioAppends = null;
    for (const appendMessage of pendingAppends) this.send(appendMessage);
  }
  private send(message: DictationClientMessage) {
    if (this.websocket?.readyState === WebSocket.OPEN) {
      this.websocket.send(JSON.stringify(message));
    }
  }
}
async function requestDictationStreamConnectInfo() {
  return (
    await VscodeFetchBridge.getInstance().post(
      "/codex/dictation-stream-connect-info",
      undefined,
    )
  ).body as DictationStreamConnectInfo;
}
function createSessionStartMessage(
  sampleRateHz: number,
): DictationClientMessage {
  return {
    type: "session.start",
    config: {
      input_audio_format: "pcm16",
      sample_rate_hz: sampleRateHz,
      num_channels: 1,
      max_buffer_size_bytes: 4 * 1024 * 1024,
      max_utterance_duration_ms: 30000,
      session_ttl_ms: 300000,
      provider_mode: "streaming_sse",
      transcript_delivery_mode: "final_only",
      vad: {
        type: "server_vad",
        threshold: 0.5,
        prefix_padding_ms: 300,
        silence_duration_ms: 500,
      },
    },
  };
}
function getCloseError(event: CloseEvent, sessionStarted: boolean) {
  if (sessionStarted && event.code === 1000) return null;
  if (event.reason.length > 0) {
    return new DictationStreamingError(
      sessionStarted
        ? `Dictation stream closed with reason '${event.reason}' and code ${event.code}.`
        : `Dictation stream closed before session.start completed with reason '${event.reason}' and code ${event.code}.`,
    );
  }
  return new DictationStreamingError(
    sessionStarted
      ? `Dictation stream closed unexpectedly with code ${event.code}.`
      : `Dictation stream closed before session.start completed with code ${event.code}.`,
  );
}
