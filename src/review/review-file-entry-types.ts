// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared review file-entry model types.

export type ReviewDiffLoadStatus = "loading" | "loaded" | "error";

export interface ReviewSummaryFile {
  path: string;
  revision?: string | null;
  additions?: number;
  deletions?: number;
  changeKind?: string;
  previousPath?: string | null;
  [key: string]: unknown;
}

export interface ReviewSummarySuccess {
  type: "success";
  files: ReviewSummaryFile[];
}

export interface ParsedReviewDiffMetadata {
  name: string;
  prevName?: string;
  type?: string;
  [key: string]: unknown;
}

export interface ParsedReviewDiffFile {
  metadata: ParsedReviewDiffMetadata;
  oldPath: string;
  newPath: string;
  additions?: number;
  deletions?: number;
  changedBytes?: number;
  [key: string]: unknown;
}

export interface ReviewFileEntry {
  canApplyPatchActions: boolean;
  displayPath: string;
  diff: ParsedReviewDiffFile | null;
  diffRevision: string | null;
  diffLoadStatus: ReviewDiffLoadStatus;
  gitPath: string;
  path: string;
  summary: ReviewSummaryFile | null;
}

export interface ReviewDiffQuerySuccess {
  type: "success";
  diff: string;
}

export interface ReviewDiffQueryError {
  type: "error";
}

export type ReviewDiffQueryData = ReviewDiffQuerySuccess | ReviewDiffQueryError;

export interface ReviewDiffQueryResult {
  data?: ReviewDiffQueryData;
  error?: unknown;
  isError?: boolean;
  isFetching: boolean;
  isPlaceholderData?: boolean;
}
