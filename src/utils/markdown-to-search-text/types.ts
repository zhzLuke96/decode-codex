// Restored from ref/webview/assets/markdown-to-search-text-D4gbAqkt.js
// markdown-to-search-text-D4gbAqkt chunk restored from the Codex webview bundle.
export type PathSegment = string | number | symbol;
export type PropertyPath = PathSegment | PathSegment[];
export type Predicate<T = unknown> = (
  value: T,
  index?: number | string | symbol,
  collection?: unknown,
) => boolean;
export type MatchData = [
  key: string,
  value: unknown,
  isStrictComparable: boolean,
];
