// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Search controller for review unified-diff text.
import {
  buildSearchSnippet,
  diffSearchMatchId,
  findSearchMatchElement,
  findTextMatchOffsets,
} from "../find/review-find-runtime";
import { scrollMatchIntoView } from "./review-scroll-into-view";

const DIFF_SEARCH_MATCH_CAP = 250;

type DiffHunkText = {
  hunkId: string;
  lineMapping: "contiguous" | string;
  lineStart: number;
  lineEnd: number;
  text: string;
  side?: string;
  lineSpans?: {
    start: number;
    end: number;
    lineStart: number;
    lineEnd: number;
    side?: string;
  }[];
};

type DiffSearchFile = {
  hunks: DiffHunkText[];
  path: string;
};

type DiffSearchRequest = {
  contextId: string;
  domain: string;
  query: string;
};

type DiffSearchLocation = {
  contextId: string;
  domain: "diff";
  end: number;
  hunkId: string;
  lineEnd: number;
  lineStart: number;
  path: string;
  side?: string;
  start: number;
};

type DiffScrollAdapter = {
  getFileContainer: (path: string) => Element | null;
  scrollToFile: (
    path: string,
    options?: { signal?: AbortSignal },
  ) => Promise<void>;
  scrollToLocation?: (
    location: DiffSearchLocation,
    options?: { signal?: AbortSignal },
  ) => Promise<void>;
};

export function createDiffSearchController({
  contextId,
  getFiles,
  preserveScrollBeforeResultClear,
  scrollAdapter,
}: {
  contextId: string;
  getFiles: () => DiffSearchFile[];
  preserveScrollBeforeResultClear?: unknown;
  scrollAdapter: DiffScrollAdapter;
}) {
  return {
    contextId,
    domain: "diff" as const,
    preserveScrollBeforeResultClear,
    async search(request: DiffSearchRequest) {
      return searchDiffFiles(
        request,
        request.query.trim().length === 0 ? [] : getFiles(),
      );
    },
    async ensureVisible(
      location: DiffSearchLocation,
      options?: { signal?: AbortSignal },
    ) {
      if (location.domain !== "diff" || location.contextId !== contextId)
        return;
      let container = scrollAdapter.getFileContainer(location.path);
      const matchId = diffSearchMatchId(location);
      const alreadyVisible =
        container == null
          ? null
          : findSearchMatchElement({
              container,
              includeShadowRoots: true,
              matchId,
            });
      if (alreadyVisible == null) {
        if (options?.signal?.aborted) return;
        await scrollAdapter.scrollToFile(location.path, options);
        if (options?.signal?.aborted) return;
        await scrollAdapter.scrollToLocation?.(location, options);
        if (options?.signal?.aborted) return;
        container = scrollAdapter.getFileContainer(location.path);
      }
      if (container != null) {
        await scrollMatchIntoView({
          container,
          includeShadowRoots: true,
          matchId,
          scrollBehavior: "auto",
          signal: options?.signal,
        });
      }
    },
  };
}

function searchDiffFiles(request: DiffSearchRequest, files: DiffSearchFile[]) {
  const query = request.query.trim();
  const matches: unknown[] = [];
  let totalMatches = 0;
  let ordinal = 0;
  let isCapped = false;
  if (query.length === 0) {
    return {
      contextId: request.contextId,
      domain: request.domain,
      isCapped,
      matches,
      query,
      totalMatches,
    };
  }

  for (const file of files) {
    for (const hunk of file.hunks) {
      const remaining = DIFF_SEARCH_MATCH_CAP - matches.length;
      if (remaining <= 0) {
        isCapped = true;
        break;
      }
      const result = findTextMatchOffsets(hunk.text, query, remaining);
      totalMatches += result.totalMatches;
      if (result.isCapped) isCapped = true;
      for (const { start, end } of result.offsets) {
        const range = resolveMatchLineRange(hunk, start, end);
        const location: DiffSearchLocation = {
          contextId: request.contextId,
          domain: "diff",
          end,
          hunkId: hunk.hunkId,
          lineEnd: range.lineEnd,
          lineStart: range.lineStart,
          path: file.path,
          side: range.side,
          start,
        };
        ordinal += 1;
        matches.push({
          id: diffSearchMatchId(location),
          location,
          ordinal,
          snippet: buildSearchSnippet(hunk.text, start, end),
        });
      }
    }
  }
  return {
    contextId: request.contextId,
    domain: request.domain,
    isCapped,
    matches,
    query,
    totalMatches,
  };
}

function resolveMatchLineRange(
  hunk: DiffHunkText,
  start: number,
  end: number,
): { lineEnd: number; lineStart: number; side?: string } {
  const fromSpans = resolveLineSpanRange(hunk.lineSpans, start, end);
  if (fromSpans != null) return fromSpans;
  if (hunk.lineMapping !== "contiguous") {
    return { lineEnd: hunk.lineEnd, lineStart: hunk.lineStart };
  }
  const lineStart = hunk.lineStart + countNewlines(hunk.text.slice(0, start));
  return {
    lineEnd: lineStart + countNewlines(hunk.text.slice(start, end)),
    lineStart,
  };
}

function resolveLineSpanRange(
  lineSpans: DiffHunkText["lineSpans"],
  start: number,
  end: number,
): { lineEnd: number; lineStart: number; side?: string } | null {
  const spans = lineSpans?.filter(
    (span) => span.end > start && span.start < end,
  );
  if (spans == null || spans.length === 0) return null;
  return {
    lineEnd: spans.at(-1)?.lineEnd ?? spans[0]!.lineEnd,
    lineStart: spans[0]!.lineStart,
    side: spans[0]!.side,
  };
}

function countNewlines(value: string): number {
  return value.split("\n").length - 1;
}
