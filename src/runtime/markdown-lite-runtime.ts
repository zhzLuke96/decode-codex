// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightweight markdown AST helpers used by reasoning-title extraction.

export type MarkdownNode = {
  children?: MarkdownNode[];
  depth?: number;
  type: string;
  value?: string;
};

export function parseMarkdown(markdown: string): MarkdownNode {
  const blocks = markdown.replace(/\r\n/g, "\n").split(/\n{2,}/);
  return {
    type: "root",
    children: blocks
      .map((block) => parseBlock(block.trim()))
      .filter((node): node is MarkdownNode => node != null),
  };
}

export function mdastToText(node: MarkdownNode | null | undefined): string {
  if (node == null) return "";
  if (typeof node.value === "string") return node.value;
  return (node.children ?? []).map(mdastToText).join("");
}

export function stringifyMarkdown(node: MarkdownNode): string {
  switch (node.type) {
    case "root":
      return (node.children ?? []).map(stringifyMarkdown).join("\n\n");
    case "heading":
      return `${"#".repeat(node.depth ?? 1)} ${mdastToText(node)}`;
    case "paragraph":
      return (node.children ?? []).map(stringifyMarkdown).join("");
    case "strong":
      return `**${mdastToText(node)}**`;
    case "text":
      return node.value ?? "";
    default:
      return mdastToText(node);
  }
}

function parseBlock(block: string): MarkdownNode | null {
  if (block.length === 0) return null;
  const heading = block.match(/^(#{1,6})\s+(.+)$/s);
  if (heading != null) {
    return {
      type: "heading",
      depth: heading[1].length,
      children: parseInline(heading[2].trim()),
    };
  }
  return {
    type: "paragraph",
    children: parseInline(block),
  };
}

function parseInline(text: string): MarkdownNode[] {
  const strong = text.match(/^\*\*([\s\S]*?)\*\*$/);
  if (strong != null) {
    return [
      {
        type: "strong",
        children: [{ type: "text", value: strong[1] }],
      },
    ];
  }
  return [{ type: "text", value: text }];
}
