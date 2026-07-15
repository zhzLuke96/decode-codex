// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// React markdown view used by conversation rows, plan summaries, and comment previews.

import * as React from "react";
import { marked } from "marked";
import { classNames } from "../utils/class-names";

export type ConversationMarkdownComponents = Record<
  string,
  React.ComponentType<{ children?: React.ReactNode }>
>;

export type ConversationMarkdownProps = React.HTMLAttributes<HTMLDivElement> & {
  allowBasicHtml?: boolean;
  components?: ConversationMarkdownComponents;
  conversationId?: string | null;
  cwd?: string | null;
  hideCodeBlocks?: boolean;
  hostId?: string | null;
  isStreaming?: boolean;
  markdown?: string | null;
};

export function ConversationMarkdown({
  allowBasicHtml = false,
  children,
  className,
  components: _components,
  conversationId: _conversationId,
  cwd: _cwd,
  hideCodeBlocks = false,
  hostId: _hostId,
  isStreaming = false,
  markdown,
  ...divProps
}: ConversationMarkdownProps) {
  const source = markdown ?? reactNodeToMarkdown(children);
  const html = React.useMemo(() => {
    const filteredSource = hideCodeBlocks
      ? removeFencedCodeBlocks(source)
      : source;
    const markdownSource = allowBasicHtml
      ? filteredSource
      : escapeRawHtml(filteredSource);
    return marked.parse(markdownSource, {
      async: false,
      breaks: true,
      gfm: true,
    }) as string;
  }, [allowBasicHtml, hideCodeBlocks, source]);

  return (
    <div
      {...divProps}
      className={classNames(
        "markdown-content",
        isStreaming && "streaming-markdown",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function parseCommentMarkdown(markdown: string): string {
  return markdown;
}

export function initConversationMarkdownViewChunk(): void {}

function reactNodeToMarkdown(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToMarkdown).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return reactNodeToMarkdown(node.props.children);
  }
  return "";
}

function removeFencedCodeBlocks(markdown: string): string {
  return markdown.replace(/```[\s\S]*?```/g, "").trim();
}

function escapeRawHtml(markdown: string): string {
  return markdown.replace(/[<&]/g, (character) =>
    character === "<" ? "&lt;" : "&amp;",
  );
}
