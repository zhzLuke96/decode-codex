// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// DOM text highlighting for content search.
import { contentSearchMatchClassName } from "./constants";
import { collectSearchRoots } from "./roots";
import type {
  ContentSearchOptions,
  ContentSearchResult,
  ContentSearchRootOptions,
} from "./types";

export function clearContentSearchHighlights(
  target: ParentNode,
  options: ContentSearchRootOptions,
): void {
  collectSearchRoots(target, options).forEach((root) => {
    root
      .querySelectorAll(`mark.${contentSearchMatchClassName}`)
      .forEach((mark) => {
        const parent = mark.parentNode;
        if (parent != null) {
          while (mark.firstChild) {
            parent.insertBefore(mark.firstChild, mark);
          }
          parent.removeChild(mark);
        }
      });
  });
}

export function searchContentForMatches({
  target,
  query,
  maxMatches,
  includeShadowRoots,
}: ContentSearchOptions): ContentSearchResult {
  if (maxMatches <= 0) {
    return { matches: [], isCapped: false };
  }
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) {
    return { matches: [], isCapped: false };
  }
  const matches: HTMLElement[] = [];
  const roots = collectSearchRoots(target, { includeShadowRoots });
  let isCapped = false;
  for (const root of roots) {
    const remaining = maxMatches - matches.length;
    if (remaining <= 0) {
      isCapped = true;
      break;
    }
    const rootResult = highlightMatchesInRoot({
      root,
      query: trimmedQuery,
      maxMatches: remaining,
    });
    matches.push(...rootResult.matches);
    if (rootResult.isCapped) {
      isCapped = true;
      break;
    }
  }
  return { matches, isCapped };
}

function collectSearchableTextNodes(root: Node): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!(node instanceof Text)) {
        return NodeFilter.FILTER_REJECT;
      }
      const parent = node.parentElement;
      if (
        parent == null ||
        parent.closest(
          "script, style, textarea, [contenteditable='true'], [data-thread-find-skip]",
        ) != null ||
        parent.matches(
          "[data-column-number], [data-line-number-content], [data-line-num], [data-line-old-num], [data-line-new-num]",
        )
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes: Text[] = [];
  let node = walker.nextNode();
  while (node != null) {
    if (node instanceof Text) {
      textNodes.push(node);
    }
    node = walker.nextNode();
  }
  return textNodes;
}

type TextNodeSpan = {
  node: Text;
  start: number;
  end: number;
};

function highlightMatchesInRoot({
  root,
  query,
  maxMatches,
}: {
  root: Node;
  query: string;
  maxMatches: number;
}): ContentSearchResult {
  if (maxMatches <= 0) {
    return { matches: [], isCapped: false };
  }
  const textNodes = collectSearchableTextNodes(root);
  if (textNodes.length === 0) {
    return { matches: [], isCapped: false };
  }
  const spans: TextNodeSpan[] = [];
  let cursor = 0;
  textNodes.forEach((node) => {
    const text = node.textContent ?? "";
    const end = cursor + text.length;
    spans.push({ node, start: cursor, end });
    cursor = end;
  });
  const haystack = spans
    .map((span) => span.node.textContent ?? "")
    .join("")
    .toLowerCase();
  const needle = query.toLowerCase();
  const ranges: { start: number; end: number }[] = [];
  let searchFrom = 0;
  while (searchFrom < haystack.length && ranges.length < maxMatches) {
    const index = haystack.indexOf(needle, searchFrom);
    if (index === -1) {
      break;
    }
    ranges.push({ start: index, end: index + query.length });
    searchFrom = index + query.length;
  }
  const isCapped =
    ranges.length === maxMatches && haystack.indexOf(needle, searchFrom) !== -1;
  const marks: HTMLElement[] = [];
  for (let i = ranges.length - 1; i >= 0; --i) {
    const range = ranges[i];
    const startSpan = findTextNodeSpanAtOffset(spans, range.start);
    const endSpan = findTextNodeSpanAtOffset(spans, range.end - 1);
    if (startSpan == null || endSpan == null) {
      continue;
    }
    const domRange = document.createRange();
    domRange.setStart(startSpan.node, range.start - startSpan.start);
    domRange.setEnd(endSpan.node, range.end - endSpan.start);
    const mark = document.createElement("mark");
    mark.className = contentSearchMatchClassName;
    mark.append(domRange.extractContents());
    domRange.insertNode(mark);
    marks.push(mark);
  }
  return { matches: marks.reverse(), isCapped };
}

function findTextNodeSpanAtOffset(
  spans: TextNodeSpan[],
  offset: number,
): { node: Text; start: number } | null {
  for (const span of spans) {
    if (offset >= span.start && offset < span.end) {
      return { node: span.node, start: span.start };
    }
  }
  return null;
}
