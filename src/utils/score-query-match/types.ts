// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// Shared score-query-match types restored from the Codex webview bundle.

export type ScoreQueryMatchMode = "MATCH_CASE" | "FIRST_LETTER" | "IGNORE_CASE";

export type ScoreQueryMatchRange = {
  startOffset: number;
  endOffset: number;
};

export type ScoreQueryMatchRanges = ScoreQueryMatchRange[];

export const NO_MATCH_SCORE = -2147483648;
export const MAX_WILDCARD_PATTERN_LENGTH = 100;
export const LEADING_MATCH_SCORE_BOOST = 1e4;
