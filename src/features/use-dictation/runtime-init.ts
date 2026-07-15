// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Runtime initializer for the current use-dictation aggregator bindings.
import { initMicrophoneInputChunk } from "../../utils/microphone-input";
import {
  initDictationStreamingTranscriberRuntimeChunk,
  initDictationStreamingUploadHeaderChunk,
  initDictationTranscriptCleanupChunk,
  initTranscribeAudioMultipartChunk,
} from "../../utils/transcribe-audio";
import { initUseRecordingWaveformChunk } from "../../utils/use-recording-waveform";
import { useDictation, useDictationCore } from "./use-dictation";

export function initUseDictationRuntimeChunk(): void {
  initDictationStreamingUploadHeaderChunk();
  initDictationStreamingTranscriberRuntimeChunk();
  initMicrophoneInputChunk();
  initDictationTranscriptCleanupChunk();
  initTranscribeAudioMultipartChunk();
  initUseRecordingWaveformChunk();
  void useDictation;
  void useDictationCore;
}
