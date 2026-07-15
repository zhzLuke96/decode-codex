// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Parses a browser comment preview string into plain-text and mention segments by
// recognizing markdown links that point at known mention URIs (app://, agent://,
// plugin://, subagent://, SKILL.md, or filesystem paths).
import {
  _commentPreviewDecodeMentionTarget as decodeMentionTarget,
  _commentPreviewMatchKnownMentionUri as matchKnownMentionUri,
  _commentPreviewResolveMentionAttachment as resolveMentionAttachment,
  _commentPreviewUnescapeMarkdownText as unescapeMarkdownText,
} from "../boundaries/onboarding-commons-externals.facade";

export type CommentPreviewSegment =
  | { type: "text"; text: string }
  | { type: "mention"; label: string };

const MARKDOWN_LINK_PATTERN = /\[((?:\\.|[^\]\n])+)\]\(((?:\\.|[^)\n])+)\)/g;

export function parseCommentPreviewSegments(
  text: string,
): CommentPreviewSegment[] {
  const segments: CommentPreviewSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  MARKDOWN_LINK_PATTERN.lastIndex = 0;
  while ((match = MARKDOWN_LINK_PATTERN.exec(text)) != null) {
    const segment = parseLinkSegment(match[1], match[2]);
    if (segment != null) {
      if (match.index > lastIndex) {
        segments.push({
          type: "text",
          text: text.slice(lastIndex, match.index),
        });
      }
      segments.push(segment);
      lastIndex = match.index + match[0].length;
    }
  }
  if (segments.length === 0) {
    return [{ type: "text", text }];
  }
  if (lastIndex < text.length) {
    segments.push({ type: "text", text: text.slice(lastIndex) });
  }
  return segments;
}

function parseLinkSegment(
  label: string,
  url: string,
): CommentPreviewSegment | null {
  const mentionLabel = parseMentionLabel(label, url);
  if (mentionLabel == null) {
    return resolveMentionAttachment(decodeMentionTarget(url)) == null
      ? null
      : { type: "text", text: unescapeMarkdownText(label) };
  }
  return { type: "mention", label: mentionLabel };
}

function parseMentionLabel(label: string, url: string): string | null {
  const normalizedLabel = unescapeMarkdownText(label).trim();
  if (!isMentionUri(decodeMentionTarget(url), normalizedLabel)) {
    return null;
  }
  if (
    (normalizedLabel.startsWith("$[") || normalizedLabel.startsWith("@[")) &&
    normalizedLabel.endsWith("]")
  ) {
    return normalizedLabel.slice(2, -1);
  }
  if (normalizedLabel.startsWith("$") || normalizedLabel.startsWith("@")) {
    return normalizedLabel.slice(1);
  }
  return normalizedLabel;
}

function isMentionUri(uri: string, label: string): boolean {
  return uri.startsWith("app://") ||
    uri.startsWith("agent://") ||
    uri.startsWith("plugin://") ||
    uri.startsWith("subagent://") ||
    matchKnownMentionUri(uri) != null ||
    uri.includes("SKILL.md")
    ? true
    : (label.startsWith("@") || label.startsWith("$")) &&
        (uri.startsWith("/") ||
          /^[A-Za-z]:\\/.test(uri) ||
          uri.startsWith("\\\\"));
}
