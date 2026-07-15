// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// Dictation controls and recording/transcription state for composer surfaces.
import {
  ComposerContextButton,
  initComposerContextButtonChunk,
} from "./context-button";
import { DictationButton, initDictationButtonChunk } from "./dictation-button";
import { dictationMessages } from "./messages";
import {
  DictationRecordingFooter,
  initDictationRecordingFooterChunk,
} from "./recording-footer";
import { RealtimeVoiceFooter } from "./realtime-footer";
import { initUseDictationRuntimeChunk } from "./runtime-init";
import { useDictation, useDictationCore } from "./use-dictation";

export function initUseDictationUiRuntimeChunk(): void {
  initComposerContextButtonChunk();
  initDictationButtonChunk();
  initDictationRecordingFooterChunk();
  void dictationMessages;
}

export {
  RealtimeVoiceFooter,
  DictationRecordingFooter,
  initComposerContextButtonChunk,
  initDictationButtonChunk,
  initDictationRecordingFooterChunk,
  initUseDictationRuntimeChunk,
  useDictationCore,
  ComposerContextButton,
  DictationButton,
  useDictation,
};
