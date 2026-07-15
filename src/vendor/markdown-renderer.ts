// Restored from ref/webview/assets/lib-CqEvD6Nn.js
// Small markdown AST/text compatibility layer used by markdown-to-search-text.
type MarkdownNode = {
  alt?: string;
  children?: MarkdownNode[];
  type: string;
  value?: string;
};

type TextOptions = {
  includeHtml?: boolean;
  includeImageAlt?: boolean;
};

type CharacterClass = 1 | 2 | undefined;

const punctuationOrSymbolPattern = /\p{P}|\p{S}/u;
const whitespacePattern = /\s/;

function matchesCharacterClass(
  code: number | null | undefined,
  pattern: RegExp,
) {
  return (
    code !== null &&
    typeof code === "number" &&
    code > -1 &&
    pattern.test(String.fromCharCode(code))
  );
}

function isMicromarkWhitespace(code: number | null | undefined) {
  return code !== null && typeof code === "number" && (code < 0 || code === 32);
}

function stripInlineMarkdown(markdown: string) {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_~>#]/g, "")
    .trim();
}

function textNode(value: string): MarkdownNode {
  return {
    type: "text",
    value,
  };
}

function paragraphFromLine(line: string): MarkdownNode {
  return {
    type: "paragraph",
    children: [textNode(stripInlineMarkdown(line))],
  };
}

function listItemFromLine(line: string): MarkdownNode {
  let value = line.replace(/^\s*(?:[-*+]|\d+\.)\s+/, "");
  return {
    type: "listItem",
    children: [paragraphFromLine(value)],
  };
}

export function libT(markdown: string): MarkdownNode {
  let children: MarkdownNode[] = [];
  let pendingListItems: MarkdownNode[] = [];

  function flushList() {
    if (pendingListItems.length > 0) {
      children.push({
        type: "list",
        children: pendingListItems,
      });
      pendingListItems = [];
    }
  }

  for (let line of markdown.split(/\r?\n/)) {
    let trimmedLine = line.trim();
    if (!trimmedLine) {
      flushList();
      continue;
    }
    if (/^(?:[-*+]|\d+\.)\s+/.test(trimmedLine)) {
      pendingListItems.push(listItemFromLine(trimmedLine));
      continue;
    }
    flushList();
    children.push(paragraphFromLine(trimmedLine.replace(/^#{1,6}\s+/, "")));
  }
  flushList();

  return {
    type: "root",
    children,
  };
}

export function libO(code: number | null | undefined): CharacterClass {
  if (
    code === null ||
    isMicromarkWhitespace(code) ||
    matchesCharacterClass(code, whitespacePattern)
  )
    return 1;
  if (matchesCharacterClass(code, punctuationOrSymbolPattern)) return 2;
  return undefined;
}

export const classifyMarkdownCharacterCode = libO;

export function libY(
  node: MarkdownNode | MarkdownNode[],
  options?: TextOptions,
): string {
  let textOptions = options ?? {};
  if (Array.isArray(node))
    return node.map((child) => libY(child, textOptions)).join("");
  if (node.type === "html" && textOptions.includeHtml === false) return "";
  if (node.value != null) return node.value;
  if (textOptions.includeImageAlt !== false && node.alt) return node.alt;
  return (node.children ?? [])
    .map((child) => libY(child, textOptions))
    .join("");
}

export const markdownNodeToText = libY;
