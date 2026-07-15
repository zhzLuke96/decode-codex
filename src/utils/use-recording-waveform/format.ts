// Restored from ref/webview/assets/use-recording-waveform-Cfd-Ecbb.js
// use-recording-waveform-Cfd-Ecbb chunk restored from the Codex webview bundle.
export function formatRecordingDuration(durationMs: number) {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
