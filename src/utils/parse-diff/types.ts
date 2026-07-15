// Restored from ref/webview/assets/parse-diff-C81j2HIg.js
// parse-diff-C81j2HIg chunk restored from the Codex webview bundle.
import type {
  ParsedPatchFile,
  PatchHunk,
} from "../../features/parse-patch-files/types";
export type DiffSizeSummary = {
  changedBytes: number;
  maxChangedLineBytes: number;
};
export type DiffScaleSummary = {
  fileCount: number;
  totalChangedBytes: number;
  totalChangedLines: number;
};
export type ParsedGitPath = {
  nextIndex: number;
  path: string;
  pathForUnquotedDiffHeader: string;
};
export type GitHeaderPaths = {
  newPath: string;
  oldPath: string;
};
export type NormalizedDiff = {
  diff: string;
  pathsByFileIndex: Map<number, GitHeaderPaths>;
};
export type ParsedDiffFile = {
  additions: number;
  changedBytes: number;
  deletions: number;
  firstAdditionLine: number | undefined;
  firstDeletionLine: number | undefined;
  isBinary: boolean;
  isGitlink: boolean;
  maxChangedLineBytes: number;
  metadata: ParsedPatchFile;
  newPath: string;
  oldPath: string;
};
export type ParseDiffOptions = {
  maxFiles?: number;
};
export type { ParsedPatchFile, PatchHunk };
