// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
import type { DictationStreamingEvent, TranscriptState } from "./types";
export function createTranscriptState(): TranscriptState {
  return {
    orderedUtteranceIds: [],
    finalTextByUtteranceId: {},
  };
}
export function applyDictationEventToTranscriptState(
  transcriptState: TranscriptState,
  event: DictationStreamingEvent,
) {
  switch (event.type) {
    case "session.started":
    case "session.updated":
      return;
    case "speech.started":
    case "speech.stopped":
      ensureUtterance(transcriptState, event.utterance_id);
      return;
    case "transcript.delta":
    case "transcript.segment":
      return;
    case "transcript.final":
      ensureUtterance(transcriptState, event.utterance_id);
      transcriptState.finalTextByUtteranceId[event.utterance_id] = event.text;
      return;
    case "transcript.failed":
      return;
    case "session.error":
      return;
  }
}
function ensureUtterance(
  transcriptState: TranscriptState,
  utteranceId: string,
) {
  if (utteranceId in transcriptState.finalTextByUtteranceId) return;
  transcriptState.finalTextByUtteranceId[utteranceId] = "";
  transcriptState.orderedUtteranceIds.push(utteranceId);
}
export function readFinalTranscript(transcriptState: TranscriptState) {
  return transcriptState.orderedUtteranceIds
    .map(
      (utteranceId) =>
        transcriptState.finalTextByUtteranceId[utteranceId] ?? "",
    )
    .filter(Boolean)
    .join(" ")
    .trim();
}
