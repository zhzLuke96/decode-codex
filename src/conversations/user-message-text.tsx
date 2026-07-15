// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders raw user message text: splits out fenced/inline code, trims blank
// lines around code blocks, and turns skill references, file mentions and links
// into interactive chips.
import {
  type ClipboardEvent as ReactClipboardEvent,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import clsx from "clsx";
// Producer imports still being restored from sibling chunks.
import {
  markdownStyles,
  handleCopyEvent,
  isSkillReference,
  SkillReferenceChip,
  renderStreamingText,
  matchSkillReferences,
  isFileReference,
  parseFileReference,
  FileMention,
  matchNextLink,
  normalizeLinkLabel,
  normalizeLinkPath,
  renderInlineLink,
  ExternalLinkContextMenuLink,
} from "../boundaries/user-message-text.facade";

const CODE_SEGMENT_PATTERN =
  /(```[\s\S]*?```|`[^`\n]+`|```[\s\S]*|`[^`\n]*\n|`[^`\n]*$)/g;

const wordSegmenter: Intl.Segmenter | null = (() => {
  try {
    return new Intl.Segmenter(undefined, { granularity: "word" });
  } catch {
    return null;
  }
})();

type TextSegment =
  | { kind: "code-block"; content: string }
  | { kind: "inline-code"; content: string }
  | { kind: "text"; content: string };

export interface UserMessageTextProps {
  text: string;
  ref?: Ref<HTMLDivElement>;
  className?: string;
  externalLinkContextMenuConversationId?: string;
  style?: CSSProperties;
  cwd?: string | null;
  hostId?: string;
  isStreaming?: boolean;
}

export function UserMessageText({
  text,
  ref,
  className,
  externalLinkContextMenuConversationId,
  style,
  cwd,
  hostId,
  isStreaming = false,
}: UserMessageTextProps) {
  const rawSegments: TextSegment[] = [];
  for (const token of text.split(CODE_SEGMENT_PATTERN).filter(isNonEmpty)) {
    if (token.startsWith("```")) {
      const content = token.endsWith("```")
        ? token.slice(3, -3).trim()
        : token.slice(3).trim();
      rawSegments.push({ kind: "code-block", content });
      continue;
    }
    if (token.startsWith("`")) {
      const content = token.endsWith("`") ? token.slice(1, -1) : token.slice(1);
      rawSegments.push({ kind: "inline-code", content });
      continue;
    }
    rawSegments.push({ kind: "text", content: token });
  }

  const segments: TextSegment[] = [];
  for (let index = 0; index < rawSegments.length; index += 1) {
    const segment = rawSegments[index];
    if (segment.kind === "text") {
      let content = segment.content;
      const previous = index > 0 ? rawSegments[index - 1] : null;
      const next =
        index + 1 < rawSegments.length ? rawSegments[index + 1] : null;
      if (previous?.kind === "code-block")
        content = content.replace(/^\n{2,}/, "\n");
      if (next?.kind === "code-block")
        content = content.replace(/\n{2,}$/, "\n");
      segments.push({ kind: "text", content });
      continue;
    }
    segments.push(segment);
  }

  const wrapperClassName = clsx(
    "text-size-chat whitespace-pre-wrap",
    isStreaming && markdownStyles.markdownRoot,
    className,
  );

  return (
    <div
      ref={ref}
      className={wrapperClassName}
      style={style}
      onCopy={handleUserTextCopy}
    >
      {segments.map((segment, index) => {
        if (segment.kind === "code-block") {
          return (
            <pre
              key={`user-code-block-${index}`}
              className="m-0 max-w-full overflow-x-auto font-mono whitespace-pre"
            >
              <code>{segment.content}</code>
            </pre>
          );
        }
        if (segment.kind === "inline-code") {
          const content = segment.content;
          return isSkillReference(content) ? (
            <SkillReferenceChip
              key={`user-inline-code-${index}`}
              label={stripSkillLabelPrefix(content)}
            />
          ) : (
            <code key={`user-inline-code-${index}`} className="font-mono">
              {segment.content}
            </code>
          );
        }
        return isStreaming ? (
          <span key={`user-text-${index}`}>
            {renderStreamingText({
              cwd,
              fadeText: true,
              hostId,
              keyPrefix: `user-text-${index}`,
              segmenter: wordSegmenter,
              text: segment.content,
            })}
          </span>
        ) : (
          <span key={`user-text-${index}`}>
            {renderTextWithLinks(
              segment.content,
              `user-text-${index}`,
              cwd,
              hostId,
              externalLinkContextMenuConversationId,
            )}
          </span>
        );
      })}
    </div>
  );
}

export const MessageTextRenderer = UserMessageText;

export function initMessageTextRendererRuntime(): void {}

function handleUserTextCopy(event: ReactClipboardEvent<HTMLDivElement>) {
  handleCopyEvent(event.nativeEvent, event.currentTarget);
}

function isNonEmpty(value: string): boolean {
  return value.length > 0;
}

function stripSkillLabelPrefix(label: string): string {
  if (!label.startsWith("$")) return label;
  return label.startsWith("$[") && label.endsWith("]")
    ? label.slice(2, -1)
    : label.slice(1);
}

function renderSkillAndFileMentions(
  text: string,
  keyPrefix: string,
  cwd: string | null | undefined,
  hostId: string | undefined,
): ReactNode[] {
  const matches = matchSkillReferences(text);
  if (matches == null) return [text];
  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const [matchIndex, match] of matches.entries()) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    if (isSkillReference(match.content)) {
      nodes.push(
        <SkillReferenceChip
          key={`${keyPrefix}-skill-${matchIndex}`}
          label={stripSkillLabelPrefix(match.content)}
        />,
      );
    } else if (match.content.startsWith("@")) {
      const reference = match.content.slice(1);
      if (isFileReference(reference)) {
        nodes.push(
          <FileMention
            key={`${keyPrefix}-file-${matchIndex}`}
            reference={parseFileReference(reference)}
            cwd={cwd}
            hostId={hostId}
          />,
        );
      } else {
        nodes.push(match.content);
      }
    } else {
      nodes.push(match.content);
    }
    cursor = match.index + match.content.length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function renderTextWithLinks(
  text: string,
  keyPrefix: string,
  cwd: string | null | undefined,
  hostId: string | undefined,
  conversationId: string | undefined,
): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let linkIndex = 0;
  let match = matchNextLink(text, cursor);
  while (match != null) {
    if (match.start > cursor) {
      nodes.push(
        ...renderSkillAndFileMentions(
          text.slice(cursor, match.start),
          `${keyPrefix}-text-${linkIndex}`,
          cwd,
          hostId,
        ),
      );
    }
    const label = normalizeLinkLabel(match.label);
    const href = normalizeLinkPath(match.path);
    const inlineLink = renderInlineLink({
      cwd,
      elementKey: `${keyPrefix}-link-${linkIndex}`,
      hostId,
      href,
      label,
      openFileLinksInSidePanel: label.trim().startsWith("$"),
    });
    if (inlineLink == null) {
      nodes.push(
        <ExternalLinkContextMenuLink
          key={`${keyPrefix}-link-${linkIndex}`}
          conversationId={conversationId}
          href={href}
          isBrowserSidebarEnabled={conversationId != null}
          originHostId={hostId}
        >
          {label}
        </ExternalLinkContextMenuLink>,
      );
    } else {
      nodes.push(inlineLink);
    }
    cursor = match.end;
    linkIndex += 1;
    match = matchNextLink(text, cursor);
  }
  if (cursor < text.length) {
    nodes.push(
      ...renderSkillAndFileMentions(
        text.slice(cursor),
        `${keyPrefix}-text-${linkIndex}`,
        cwd,
        hostId,
      ),
    );
  }
  return nodes;
}
