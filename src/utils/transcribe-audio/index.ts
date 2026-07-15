// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
import {
  initTranscribeAudioMultipartChunk,
  transcribeAudio,
} from "./multipart";
import {
  cleanupDictationTranscript,
  initDictationTranscriptCleanupChunk,
} from "./responses-cleanup";
import { StreamingDictationTranscriber } from "./streaming-transcriber";
import {
  dictationStreamingUploadHeaderValue,
  initDictationStreamingUploadHeaderChunk,
} from "./types";

function initDictationStreamingTranscriberRuntimeChunk(): void {
  initDictationStreamingUploadHeaderChunk();
  void StreamingDictationTranscriber;
}

export {
  dictationStreamingUploadHeaderValue,
  initDictationTranscriptCleanupChunk,
  initDictationStreamingUploadHeaderChunk,
  initDictationStreamingTranscriberRuntimeChunk,
  initTranscribeAudioMultipartChunk,
  cleanupDictationTranscript,
  StreamingDictationTranscriber,
  transcribeAudio,
};
