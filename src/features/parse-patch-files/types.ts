// Restored from ref/webview/assets/parsePatchFiles-Dm7PKlLE.js
// parsePatchFiles-Dm7PKlLE chunk restored from the Codex webview bundle.
export type PatchFileType =
  | "change"
  | "deleted"
  | "new"
  | "rename-changed"
  | "rename-pure";

export type ParsedHunkSpec = {
  additionCount: number;
  additionStart: number;
  deletionCount: number;
  deletionStart: number;
  hunkContext?: string;
};

export type PatchLineBlock =
  | {
      additionLineIndex: number;
      additions: number;
      deletionLineIndex: number;
      deletions: number;
      type: "change";
    }
  | {
      additionLineIndex: number;
      deletionLineIndex: number;
      lines: number;
      type: "context";
    };

export type PatchHunk = {
  additionCount: number;
  additionLineIndex: number;
  additionLines: number;
  additionStart: number;
  collapsedBefore: number;
  deletionCount: number;
  deletionLineIndex: number;
  deletionLines: number;
  deletionStart: number;
  hunkContent: PatchLineBlock[];
  hunkContext?: string;
  hunkSpecs: string;
  noEOFCRAdditions: boolean;
  noEOFCRDeletions: boolean;
  splitLineCount: number;
  splitLineStart: number;
  unifiedLineCount: number;
  unifiedLineStart: number;
};

export type PatchFileSnapshot = {
  contents: string;
};

export type ParsedPatchFile = {
  additionLines: string[];
  cacheKey?: string;
  deletionLines: string[];
  hunks: PatchHunk[];
  isPartial: boolean;
  mode?: string;
  name: string;
  newObjectId?: string;
  prevMode?: string;
  prevName?: string;
  prevObjectId?: string;
  splitLineCount: number;
  type: PatchFileType;
  unifiedLineCount: number;
};

export type ParsePatchFileOptions = {
  cacheKey?: string;
  isGitDiff?: boolean;
  newFile?: PatchFileSnapshot | null;
  oldFile?: PatchFileSnapshot | null;
  throwOnError?: boolean;
};

export type ParsedPatchContent = {
  files: ParsedPatchFile[];
  patchMetadata?: string;
};
