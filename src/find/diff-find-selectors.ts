// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derived app-scope selectors for the diff-domain find feature: summarizes the
// active diff find result (matching file paths + totals) and exposes the
// currently-active diff match.
import { findActiveMatchIndexAtom } from "./thread-find-atoms";
import {
  appScopeAtom,
  deriveAppScopeAtom,
  diffFindResultAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export type FindMatchLocation = {
  domain: "conversation" | "diff" | "browser";
  path?: string;
};

export type FindMatch = {
  location: FindMatchLocation;
};

export type FindResult = {
  domain: "conversation" | "diff" | "browser";
  contextId: string;
  query: string;
  matches: FindMatch[];
  totalMatches: number;
  isCapped: boolean;
  runId: number;
};

export type DiffFindSummary = {
  active: boolean;
  totalMatches: number;
  matchingPaths: string[];
};

export function summarizeDiffFind(
  result: FindResult | null | undefined,
): DiffFindSummary {
  if (result == null || result.domain !== "diff") {
    return { active: false, totalMatches: 0, matchingPaths: [] };
  }
  const paths = new Set<string>();
  for (const match of result.matches) {
    const location = match.location;
    if (location.domain === "diff" && location.path != null) {
      paths.add(location.path);
    }
  }
  return {
    active: result.query.length > 0,
    totalMatches: result.totalMatches,
    matchingPaths: Array.from(paths),
  };
}

function getMatchAtIndex(
  result: FindResult | null,
  index: number | null,
): FindMatch | null {
  return result == null || index == null
    ? null
    : (result.matches[index] ?? null);
}

export const diffFindSummaryAtom = deriveAppScopeAtom(
  appScopeAtom,
  ({ get }: { get: <TValue>(atom: unknown) => TValue }) =>
    summarizeDiffFind(get<FindResult | null>(diffFindResultAtom)),
);

export const activeDiffFindMatchAtom = deriveAppScopeAtom(
  appScopeAtom,
  ({ get }: { get: <TValue>(atom: unknown) => TValue }) =>
    getMatchAtIndex(
      get<FindResult | null>(diffFindResultAtom),
      get<number | null>(findActiveMatchIndexAtom),
    ),
);
