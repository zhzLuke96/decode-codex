// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Plain-text find helpers: case-insensitive offset scanning and contextual
// slicing used to render find-result previews.

const MATCH_CONTEXT_LENGTH = 24;

export type MatchContext = {
  before: string;
  match: string;
  after: string;
};

export type MatchOffset = {
  start: number;
  end: number;
};

export type MatchOffsetsResult = {
  offsets: MatchOffset[];
  totalMatches: number;
  isCapped: boolean;
};

export function sliceMatchWithContext(
  text: string,
  start: number,
  end: number,
): MatchContext {
  const contextStart = Math.max(0, start - MATCH_CONTEXT_LENGTH);
  const contextEnd = Math.min(text.length, end + MATCH_CONTEXT_LENGTH);
  return {
    before: text.slice(contextStart, start),
    match: text.slice(start, end),
    after: text.slice(end, contextEnd),
  };
}

export function findCaseInsensitiveMatchOffsets(
  text: string,
  query: string,
  maxOffsets: number,
): MatchOffsetsResult {
  const needle = query.toLowerCase();
  const haystack = text.toLowerCase();
  const offsets: MatchOffset[] = [];
  let totalMatches = 0;
  let isCapped = false;
  let cursor = 0;
  while (cursor < haystack.length) {
    const index = haystack.indexOf(needle, cursor);
    if (index === -1) {
      break;
    }
    const end = index + query.length;
    totalMatches += 1;
    if (offsets.length < maxOffsets) {
      offsets.push({ start: index, end });
    } else {
      isCapped = true;
    }
    cursor = end;
  }
  return { offsets, totalMatches, isCapped };
}
