// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// score-query-match-DS2pZf_b chunk restored from the Codex webview bundle.
import { CompositeMatcher, WildcardPatternMatcher } from "./matcher";
import { NO_MATCH_SCORE } from "./types";

const PATH_SEPARATORS = ["/", "\\"] as const;
const PATH_SEPARATOR_SENTINEL = "\0";

export type {
  ScoreQueryMatchMode,
  ScoreQueryMatchRange,
  ScoreQueryMatchRanges,
} from "./types";

export function initScoreQueryMatchRuntime(): void {}

export function scoreQueryMatch(candidate: string, query: string): number {
  let trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) return 0;
  let matcher = createMatcher(trimmedQuery),
    normalizedCandidate = containsPathSeparator(trimmedQuery)
      ? normalizePathSeparators(candidate)
      : candidate,
    rawScore = matcher.matchingDegree(normalizedCandidate);
  if (rawScore === NO_MATCH_SCORE) return 0;
  let scoreDelta = rawScore * 10 - candidate.length;
  return scoreDelta <= 0 ? 1 : scoreDelta;
}

function createMatcher(query: string): CompositeMatcher {
  let hasPathSeparator = containsPathSeparator(query),
    wildcardPattern = hasPathSeparator
      ? buildPathWildcardPattern(query)
      : `*${query}`,
    basename = basenameAfterLastSeparator(query);
  return new CompositeMatcher(
    new WildcardPatternMatcher(
      wildcardPattern,
      "IGNORE_CASE",
      PATH_SEPARATORS.join(""),
    ),
    hasPathSeparator && query !== basename
      ? new WildcardPatternMatcher(
          basename,
          "IGNORE_CASE",
          PATH_SEPARATORS.join(""),
        )
      : null,
  );
}

function buildPathWildcardPattern(query: string): string {
  let pattern = `*${query}`;
  for (let separator of PATH_SEPARATORS)
    pattern = pattern.split(separator).join(`*${PATH_SEPARATOR_SENTINEL}*`);
  return pattern;
}

function basenameAfterLastSeparator(query: string): string {
  let lastSeparatorIndex = -1;
  for (let separator of PATH_SEPARATORS) {
    let separatorIndex = query.lastIndexOf(separator);
    separatorIndex >= 0 &&
      separatorIndex < query.length - 1 &&
      (lastSeparatorIndex = Math.max(lastSeparatorIndex, separatorIndex));
  }
  return query.slice(lastSeparatorIndex + 1);
}

function normalizePathSeparators(value: string): string {
  let normalized = value;
  for (let separator of PATH_SEPARATORS)
    normalized = normalized.split(separator).join(PATH_SEPARATOR_SENTINEL);
  return normalized;
}

function containsPathSeparator(value: string): boolean {
  for (let separator of PATH_SEPARATORS)
    if (value.includes(separator)) return true;
  return false;
}
