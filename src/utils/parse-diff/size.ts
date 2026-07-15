// Restored from ref/webview/assets/parse-diff-C81j2HIg.js
// parse-diff-C81j2HIg chunk restored from the Codex webview bundle.
import type { DiffSizeSummary, ParsedPatchFile } from "./types";
const diffSizeCache = new WeakMap<ParsedPatchFile, DiffSizeSummary>();
export function initPatchFileSizeSummaryChunk(): void {}

export function getPatchFileSizeSummary(
  file: ParsedPatchFile,
): DiffSizeSummary {
  const cached = diffSizeCache.get(file);
  if (cached != null) return cached;
  let changedBytes = 0;
  let maxChangedLineBytes = 0;
  for (const hunk of file.hunks) {
    for (const block of hunk.hunkContent) {
      if (block.type === "context") continue;
      const deletionEnd = block.deletionLineIndex + block.deletions;
      for (
        let lineIndex = block.deletionLineIndex;
        lineIndex < deletionEnd;
        lineIndex += 1
      ) {
        const lineBytes = file.deletionLines[lineIndex]?.length ?? 0;
        changedBytes += lineBytes;
        maxChangedLineBytes = Math.max(maxChangedLineBytes, lineBytes);
      }
      const additionEnd = block.additionLineIndex + block.additions;
      for (
        let lineIndex = block.additionLineIndex;
        lineIndex < additionEnd;
        lineIndex += 1
      ) {
        const lineBytes = file.additionLines[lineIndex]?.length ?? 0;
        changedBytes += lineBytes;
        maxChangedLineBytes = Math.max(maxChangedLineBytes, lineBytes);
      }
    }
  }
  const summary = {
    changedBytes,
    maxChangedLineBytes,
  };
  diffSizeCache.set(file, summary);
  return summary;
}
export function createLazyPatchFileSizeSummary(file: ParsedPatchFile) {
  let summary: DiffSizeSummary | null = null;
  return () => {
    summary ??= getPatchFileSizeSummary(file);
    return summary;
  };
}
