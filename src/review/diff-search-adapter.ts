// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// In-page search provider for the "diff" domain: scans hunk text for query
// matches, builds match descriptors with line ranges + snippets, and scrolls a
// requested match into view through a host-supplied scroll adapter.
import { scrollMatchIntoView } from "./review-scroll-into-view";
import {
  findSearchMatchElement,
  diffSearchMatchId,
  findTextMatchOffsets,
  buildSearchSnippet,
} from "../boundaries/onboarding-commons-externals.facade";

const DIFF_SEARCH_MATCH_CAP = 250;

export function initDiffSearchAdapterChunk(): void {}

interface DiffHunkText {
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
}

interface DiffSearchFile {
  path: string;
  hunks: DiffHunkText[];
}

interface DiffSearchRequest {
  domain: string;
  contextId: string;
  query: string;
}

interface DiffSearchLocation {
  domain: "diff";
  contextId: string;
  path: string;
  hunkId: string;
  side?: string;
  lineStart: number;
  lineEnd: number;
  start: number;
  end: number;
}

export interface DiffScrollAdapter {
  getFileContainer: (path: string) => Element | null;
  scrollToFile: (
    path: string,
    options?: { signal?: AbortSignal },
  ) => Promise<void>;
  scrollToLocation?: (
    location: DiffSearchLocation,
    options?: { signal?: AbortSignal },
  ) => Promise<void>;
}

export interface CreateDiffSearchProviderOptions {
  contextId: string;
  getFiles: () => DiffSearchFile[];
  preserveScrollBeforeResultClear?: boolean;
  scrollAdapter: DiffScrollAdapter;
}

export function createDiffSearchProvider({
  contextId,
  getFiles,
  preserveScrollBeforeResultClear,
  scrollAdapter,
}: CreateDiffSearchProviderOptions) {
  return {
    domain: "diff" as const,
    contextId,
    preserveScrollBeforeResultClear,
    async search(request: DiffSearchRequest) {
      return request.query.trim().length === 0
        ? searchDiffFiles(request, [])
        : searchDiffFiles(request, getFiles());
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
              matchId,
              includeShadowRoots: true,
            });
      if (alreadyVisible == null) {
        if (options?.signal?.aborted) return;
        if (options?.signal == null)
          await scrollAdapter.scrollToFile(location.path);
        else
          await scrollAdapter.scrollToFile(location.path, {
            signal: options.signal,
          });
        if (options?.signal?.aborted) return;
        if (scrollAdapter.scrollToLocation != null) {
          if (options?.signal == null)
            await scrollAdapter.scrollToLocation(location);
          else
            await scrollAdapter.scrollToLocation(location, {
              signal: options.signal,
            });
        }
        if (options?.signal?.aborted) return;
        container = scrollAdapter.getFileContainer(location.path);
      }
      if (container != null) {
        await scrollMatchIntoView({
          container,
          matchId,
          includeShadowRoots: true,
          scrollBehavior: "auto",
          signal: options?.signal,
        });
      }
    },
  };
}

function searchDiffFiles(request: DiffSearchRequest, files: DiffSearchFile[]) {
  const query = request.query.trim();
  if (query.length === 0) {
    return {
      domain: request.domain,
      contextId: request.contextId,
      query,
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };
  }
  const matches: unknown[] = [];
  let totalMatches = 0;
  let ordinal = 0;
  let isCapped = false;
  for (const file of files) {
    for (const hunk of file.hunks) {
      const text = hunk.text;
      if (text.length === 0) continue;
      const {
        offsets,
        totalMatches: hunkTotal,
        isCapped: hunkCapped,
      } = findTextMatchOffsets(
        text,
        query,
        DIFF_SEARCH_MATCH_CAP - matches.length,
      );
      totalMatches += hunkTotal;
      if (hunkCapped) isCapped = true;
      for (const { start, end } of offsets) {
        const range = resolveMatchLineRange(hunk, start, end);
        ordinal += 1;
        matches.push({
          id: `diff:${file.path}:${hunk.hunkId}:${start}`,
          ordinal,
          location: {
            domain: "diff",
            contextId: request.contextId,
            path: file.path,
            hunkId: hunk.hunkId,
            side: range.side,
            lineStart: range.lineStart,
            lineEnd: range.lineEnd,
            start,
            end,
          },
          snippet: buildSearchSnippet(text, start, end),
        });
      }
    }
  }
  return {
    domain: request.domain,
    contextId: request.contextId,
    query,
    matches,
    totalMatches,
    isCapped,
  };
}

function resolveMatchLineRange(hunk: DiffHunkText, start: number, end: number) {
  const fromSpans = resolveLineSpanRange(hunk.lineSpans, start, end);
  if (fromSpans != null) return fromSpans;
  if (hunk.lineMapping !== "contiguous") {
    return { lineStart: hunk.lineStart, lineEnd: hunk.lineEnd };
  }
  const lineStart = hunk.lineStart + countNewlines(hunk.text.slice(0, start));
  return {
    lineStart,
    lineEnd: lineStart + countNewlines(hunk.text.slice(start, end)),
  };
}

function resolveLineSpanRange(
  lineSpans: DiffHunkText["lineSpans"],
  start: number,
  end: number,
) {
  if (lineSpans == null) return null;
  const startSpan = lineSpans.find(
    (span) => start >= span.start && start < span.end,
  );
  if (startSpan == null) return null;
  const endOffset = Math.max(start, end - 1);
  const endSpan =
    lineSpans.find((span) => endOffset >= span.start && endOffset < span.end) ??
    startSpan;
  return {
    lineStart: startSpan.lineStart,
    lineEnd: endSpan.lineEnd,
    ...(startSpan.side != null && startSpan.side === endSpan.side
      ? { side: startSpan.side }
      : {}),
  };
}

function countNewlines(text: string): number {
  let count = 0;
  for (const char of text) if (char === "\n") count += 1;
  return count;
}
