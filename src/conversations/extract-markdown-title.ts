// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Extracts a leading title from markdown: a top heading, or a paragraph that is a single bold run.

import {
  parseMarkdown,
  mdastToText,
} from "../boundaries/onboarding-commons-externals.facade";

export function extractMarkdownTitle(markdown: string): string | null {
  try {
    const [firstNode] = parseMarkdown(markdown).children;
    if (firstNode?.type === "heading") {
      return mdastToText(firstNode).trim() || null;
    }
    if (
      firstNode?.type === "paragraph" &&
      firstNode.children.length === 1 &&
      firstNode.children[0]?.type === "strong"
    ) {
      const boldText = mdastToText(firstNode.children[0]).trim();
      return extractMarkdownTitle(boldText) ?? (boldText || null);
    }
  } catch {
    return null;
  }
  return null;
}
