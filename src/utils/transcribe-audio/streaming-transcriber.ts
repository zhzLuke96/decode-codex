// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
import { float32ToPcm16Bytes } from "./pcm";
import {
  DictationStreamClient,
  DictationStreamingError,
} from "./streaming-client";
import {
  applyDictationEventToTranscriptState,
  createTranscriptState,
  readFinalTranscript,
} from "./transcript";
export class StreamingDictationTranscriber {
  private transcriptState = createTranscriptState();
  private client = new DictationStreamClient((event) => {
    applyDictationEventToTranscriptState(this.transcriptState, event);
  });
  private audioContext: AudioContext | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  async start(mediaStream: MediaStream) {
    const AudioContextConstructor = window.AudioContext;
    if (AudioContextConstructor == null) {
      throw new DictationStreamingError(
        "AudioContext is not available for streaming dictation.",
      );
    }
    const audioContext = new AudioContextConstructor();
    this.audioContext = audioContext;
    this.source = audioContext.createMediaStreamSource(mediaStream);
    this.processor = audioContext.createScriptProcessor(2048, 1, 1);
    this.processor.onaudioprocess = (event) => {
      const samples = event.inputBuffer.getChannelData(0);
      this.client.appendPCM16(float32ToPcm16Bytes(samples));
    };
    this.source.connect(this.processor);
    this.processor.connect(audioContext.destination);
    await this.client.connect(audioContext.sampleRate);
  }
  async finish() {
    this.stopAudioCapture();
    await this.client.finish();
    return readFinalTranscript(this.transcriptState);
  }
  close() {
    this.stopAudioCapture();
    this.client.close();
  }
  private stopAudioCapture() {
    this.processor?.disconnect();
    this.source?.disconnect();
    this.processor = null;
    this.source = null;
    this.audioContext?.close().catch(() => {});
    this.audioContext = null;
  }
}
