// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Turn artifact bridge: generated image output, web-search source chips,
// model-authored review comments, and the local turn diff card.
import type { MouseEvent } from "react";
import clsx from "clsx";

import { GlobeIcon } from "../icons/globe-icon";
import { openInBrowserFromEvent } from "../runtime/resource-open-runtime";
import { ThreadResourceCard } from "../ui/thread-resource-card";
import { TurnDiff as TurnDiffView } from "./local-conversation-thread-parts/turn-diff-card";
import { GeneratedImageGallery as GeneratedImagesGrid } from "./local-conversation-thread-parts/generated-image-gallery";
import { parseCodeCommentDirectives } from "../github/diff-comments/use-diff-comment-sources/directive-comments";
import type { ReviewComment } from "./navigate-to-review-comments";
import {
  computeEndResources,
  getEndResourcePaths,
  shouldHideTurnDiff,
} from "../runtime/conversation-artifact-runtime";

export { GeneratedImagesGrid, TurnDiffView };
export { computeEndResources, getEndResourcePaths, shouldHideTurnDiff };

type WebSearchSource = {
  title?: unknown;
  url?: unknown;
  [key: string]: unknown;
};

type StoreLike = {
  set?: (atom: unknown, value: unknown) => void;
};

export function GeneratedImagePlaceholder() {
  return (
    <div
      aria-hidden={true}
      className="generated-image-placeholder-pulse h-[200px] w-full max-w-[400px] shrink-0 rounded-[16px]"
    />
  );
}

export function WebSearchSources({
  className,
  sources,
}: {
  className?: string;
  sources: readonly WebSearchSource[];
}) {
  const visibleSources = sources.map(normalizeWebSearchSource).filter(Boolean);
  if (visibleSources.length === 0) return null;

  return (
    <ThreadResourceCard
      className={clsx("w-full max-w-[640px] px-3 py-2", className)}
    >
      <div className="flex flex-wrap gap-2">
        {visibleSources.map((source) => (
          <WebSearchSourceButton key={source.url} source={source} />
        ))}
      </div>
    </ThreadResourceCard>
  );
}

function WebSearchSourceButton({
  source,
}: {
  source: { label: string; url: string };
}) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    openInBrowserFromEvent({
      event,
      href: source.url,
      initiator: "markdown_link_click",
    });
  };

  return (
    <a
      className="text-size-chat-sm flex min-w-0 max-w-full cursor-interaction items-center gap-1.5 rounded-sm px-1.5 py-1 text-token-text-secondary hover:bg-token-list-hover-background/30 hover:text-token-foreground focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none"
      href={source.url}
      title={source.url}
      onClick={onClick}
    >
      <GlobeIcon aria-hidden={true} className="icon-xs shrink-0" />
      <span className="truncate">{source.label}</span>
    </a>
  );
}

function normalizeWebSearchSource(
  source: WebSearchSource,
): { label: string; url: string } | null {
  const url =
    typeof source.url === "string" && source.url.length > 0 ? source.url : null;
  if (url == null) return null;
  const title =
    typeof source.title === "string" && source.title.trim().length > 0
      ? source.title.trim()
      : null;
  return {
    label: title ?? formatWebSearchUrlLabel(url),
    url,
  };
}

function formatWebSearchUrlLabel(url: string): string {
  try {
    const parsed = new URL(url);
    return `${parsed.host.replace(/^www\./u, "")}${parsed.pathname}`;
  } catch {
    return url;
  }
}

export function extractReviewComments(
  assistantContent: string | null | undefined,
  workspaceRoot?: string | null,
): ReviewComment[] {
  if (assistantContent == null || assistantContent.trim().length === 0) {
    return [];
  }
  return parseCodeCommentDirectives(assistantContent, workspaceRoot).filter(
    (comment) => getReviewCommentBody(comment).length > 0,
  ) as ReviewComment[];
}

export function getReviewCommentBody(comment: ReviewComment): string {
  const content = (comment as { content?: unknown }).content;
  if (!Array.isArray(content)) return "";
  return content
    .flatMap((block) => (isTextCommentBlock(block) ? [block.text ?? ""] : []))
    .join("\n\n")
    .trim();
}

export function getReviewCommentKey(comment: ReviewComment): string {
  return [
    comment.position.path,
    comment.position.line,
    comment.position.start_line ?? "",
    (comment.position as { side?: unknown }).side ?? "",
    (comment.position as { start_side?: unknown }).start_side ?? "",
    getReviewCommentBody(comment),
  ].join("|");
}

export function getReviewCommentLineLabel(comment: ReviewComment): string {
  const { line, start_line: startLine } = comment.position;
  return startLine == null || startLine === line
    ? String(line)
    : `${startLine}-${line}`;
}

export function focusReviewSidePanel(store: StoreLike): void {
  void import("../review/review-side-panel-tab-commands").then(
    ({ openReviewTab }) => {
      openReviewTab(store as never, true, "right");
    },
  );
}

function isTextCommentBlock(
  block: unknown,
): block is { content_type: "text"; text?: string } {
  return (
    typeof block === "object" &&
    block != null &&
    (block as { content_type?: unknown }).content_type === "text"
  );
}
