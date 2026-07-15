// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the list of comment/annotation attachments shown inside a sent user
// message tooltip (diff comments, browser selections, PDF/artifact annotations).
import type { ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  parseCommentDisplay,
  commentAttachmentToComment,
  buildFileReference,
  parseCommentMarkdown,
  relativizePath,
  normalizePath,
  FileReferenceLink,
  ConversationMarkdown,
} from "../boundaries/onboarding-commons-externals.facade";
import { AnnotationReferenceLink } from "./sent-comment-annotation-reference-link";

const DESIGN_TWEAK_ARROW = "→";

export function initSentCommentAttachmentsChunk(): void {}

type ContentPreview =
  | { type: "image"; src: string; alt?: string | null }
  | { type: "text"; text: string };

interface DesignTweakChange {
  property: string;
  previousValue: string;
  nextValue: string;
}

export interface CommentAttachment {
  origin: string;
  path: string;
  side?: "left" | "right" | null;
  lineRange?: string | null;
  artifactAnnotationFilePath?: string | null;
  pdfAnnotationFilePath?: string | null;
  artifactAnnotationContentPreview?: ContentPreview | null;
  pdfAnnotationContentPreview?: ContentPreview | null;
  artifactAnnotationRangeLabel?: string | null;
  designTweak?: boolean;
  designTweakChanges?: DesignTweakChange[] | null;
  body: string;
}

interface CommentDisplay {
  type: string;
  pathLabel?: string | null;
  browserElementPreview?: {
    tagName: string;
    immediateText?: string | null;
  } | null;
  side?: "left" | "right" | null;
  lineRange?: string | null;
}

interface FileReference {
  path: string;
}

export interface SentCommentAttachmentListProps {
  cwd?: string | null;
  hostId?: string | null;
  comments?: CommentAttachment[];
  commentAttachments?: RawCommentAttachment[] | null;
  screenshotThumbnailSrcs?: Array<string | null>;
}

interface RawCommentAttachment {
  localBrowserScreenshot?: { dataUrl?: string | null } | null;
  localPdfScreenshot?: { dataUrl?: string | null } | null;
}

export function SentCommentAttachmentList({
  cwd,
  hostId,
  comments: commentsProp,
  commentAttachments,
  screenshotThumbnailSrcs,
}: SentCommentAttachmentListProps) {
  const intl = useIntl();

  const comments: CommentAttachment[] =
    commentAttachments == null
      ? (commentsProp ?? [])
      : commentAttachments.map(commentAttachmentToComment);
  const screenshotSrcs: Array<string | null> | undefined =
    commentAttachments == null
      ? screenshotThumbnailSrcs
      : commentAttachments.map(extractScreenshotDataUrl);

  const screenshotAttachedLabel = intl.formatMessage({
    id: "codex.localConversation.comment.screenshotAttached",
    defaultMessage: "Screenshot attached",
    description:
      "Accessible label for a thumbnail shown when a user comment attachment includes a screenshot",
  });
  const selectedContentLabel = intl.formatMessage({
    id: "codex.localConversation.annotation.selectedContent",
    defaultMessage: "Selected annotation content",
    description:
      "Accessible label for an image preview of selected document or PDF content in an annotation tooltip",
  });

  const rows = comments.map((comment, index) => {
    const display: CommentDisplay = parseCommentDisplay(comment);
    let pathLabel: string | null = null;
    let reference: FileReference | null = null;
    const annotationFilePath =
      comment.artifactAnnotationFilePath ?? comment.pdfAnnotationFilePath;
    const isAnnotationOrigin =
      comment.origin === "artifact_annotation" || comment.origin === "pdf";

    if (display.type === "details") {
      pathLabel = display.pathLabel ?? null;
      if (pathLabel != null && comment.origin === "diff") {
        pathLabel = formatDiffPathLabel(comment.path, cwd);
        reference = buildDiffReference(comment, cwd);
      } else if (
        pathLabel != null &&
        isAnnotationOrigin &&
        annotationFilePath != null
      ) {
        reference = buildFileReference(annotationFilePath);
      }
    }

    const tooltipText = isAnnotationOrigin
      ? (annotationFilePath ?? pathLabel ?? undefined)
      : (pathLabel ?? undefined);
    const thumbnailSrc = screenshotSrcs?.[index];
    const inlinePdfPreview: ContentPreview | null =
      comment.origin === "pdf" &&
      thumbnailSrc != null &&
      comment.pdfAnnotationContentPreview == null
        ? { type: "image", src: thumbnailSrc }
        : null;
    const thumbnailNode: ReactNode =
      thumbnailSrc == null || comment.origin === "pdf" ? null : (
        <CommentThumbnail alt={screenshotAttachedLabel} src={thumbnailSrc} />
      );
    const contentPreview: ContentPreview | null =
      comment.artifactAnnotationContentPreview ??
      comment.pdfAnnotationContentPreview ??
      inlinePdfPreview;
    const imagePreview =
      contentPreview?.type === "image" ? contentPreview : null;
    const hasImagePreview = imagePreview != null;

    return (
      <div
        key={`${comment.path}-${comment.lineRange ?? "unknown"}-${index}`}
        className={clsx(
          "min-w-0 px-2.5 py-2",
          hasImagePreview ? "flex items-start gap-2" : "flex flex-col gap-1.5",
        )}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          {display.type === "selected-browser-text" ? (
            <div className="flex items-center gap-1 text-xs leading-4 text-token-description-foreground">
              {thumbnailNode}
              <FormattedMessage
                id="codex.localConversation.browserComment.selectedText"
                defaultMessage="Selected text"
                description="Metadata label shown in a sent user comment attachment created from selected browser text"
              />
            </div>
          ) : display.type === "selected-browser-element" ? (
            <div className="flex items-center gap-1 text-xs leading-4 text-token-description-foreground">
              {thumbnailNode}
              <FormattedMessage
                id="codex.localConversation.browserComment.selectedElement"
                defaultMessage="Selected page element"
                description="Metadata label shown in a sent user comment attachment when the selected browser element has no readable label"
              />
            </div>
          ) : display.type === "selected-browser-region" ? (
            <div className="flex items-center gap-1 text-xs leading-4 text-token-description-foreground">
              {thumbnailNode}
              <FormattedMessage
                id="codex.localConversation.browserComment.selectedRegionAttached"
                defaultMessage="Selected region attached"
                description="Metadata label shown in a sent user comment attachment when a screenshot of a selected browser region was attached"
              />
            </div>
          ) : display.type === "details" ? (
            <div
              className={clsx(
                "text-xs leading-4 text-token-description-foreground",
                hasImagePreview
                  ? "flex min-w-0 items-center gap-1"
                  : "flex flex-wrap items-center gap-x-2 gap-y-1",
              )}
            >
              {thumbnailNode}
              {display.browserElementPreview == null ? (
                pathLabel ? (
                  reference == null ? (
                    <span className="break-all">{pathLabel}</span>
                  ) : isAnnotationOrigin ? (
                    <AnnotationReferenceLink
                      cwd={cwd}
                      hostId={hostId}
                      label={pathLabel}
                      reference={reference}
                      tooltipText={tooltipText}
                    />
                  ) : (
                    <FileReferenceLink
                      className="text-xs leading-4 break-all"
                      reference={reference}
                      label={pathLabel}
                      tooltipText={tooltipText}
                      cwd={cwd}
                      hostId={hostId}
                      openInSidePanel={true}
                    />
                  )
                ) : null
              ) : (
                <span className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 break-words">
                  <span className="inline-flex shrink-0 items-center rounded-sm border border-token-border-default bg-token-foreground/5 px-1.5 py-px font-mono text-[11px] leading-[14px] font-medium text-token-text-secondary">
                    {display.browserElementPreview.tagName}
                  </span>
                  {display.browserElementPreview.immediateText ==
                  null ? null : (
                    <span className="min-w-0 break-words text-token-description-foreground">
                      {display.browserElementPreview.immediateText}
                    </span>
                  )}
                </span>
              )}
              {display.side == null ? null : (
                <span className="font-medium text-token-foreground">
                  {display.side === "left" ? (
                    <FormattedMessage
                      id="codex.localConversation.diffCommentLeftSide"
                      defaultMessage="L"
                      description="Short label for the left side of a diff on a sent local user comment"
                    />
                  ) : (
                    <FormattedMessage
                      id="codex.localConversation.diffCommentRightSide"
                      defaultMessage="R"
                      description="Short label for the right side of a diff on a sent local user comment"
                    />
                  )}
                </span>
              )}
              {display.lineRange == null ? null : (
                <span>{display.lineRange}</span>
              )}
              {comment.artifactAnnotationRangeLabel == null ? null : (
                <span className="min-w-0 font-medium break-all text-token-foreground">
                  <FormattedMessage
                    id="codex.localConversation.artifactAnnotation.range"
                    defaultMessage="Range: {range}"
                    description="Range label shown in a user message annotation tooltip for a spreadsheet artifact annotation"
                    values={{ range: comment.artifactAnnotationRangeLabel }}
                  />
                </span>
              )}
            </div>
          ) : null}
          {contentPreview?.type === "text" ? (
            <div
              className="min-w-0 truncate text-xs leading-4 text-token-description-foreground"
              title={contentPreview.text}
            >
              {contentPreview.text}
            </div>
          ) : null}
          <CommentBody comment={comment} cwd={cwd} hostId={hostId} />
        </div>
        {imagePreview == null ? null : (
          <CommentImagePreview
            alt={imagePreview.alt?.trim() || selectedContentLabel}
            src={imagePreview.src}
          />
        )}
      </div>
    );
  });

  return (
    <div className="flex flex-col divide-y divide-token-border">{rows}</div>
  );
}

interface CommentImagePreviewProps {
  alt: string;
  src: string;
}

function CommentImagePreview({ alt, src }: CommentImagePreviewProps) {
  return (
    <img
      alt={alt}
      className="h-12 w-12 shrink-0 rounded border border-token-border-default object-cover"
      src={src}
    />
  );
}

function extractScreenshotDataUrl(
  attachment: RawCommentAttachment,
): string | null {
  return (
    attachment.localBrowserScreenshot?.dataUrl ??
    attachment.localPdfScreenshot?.dataUrl ??
    null
  );
}

interface CommentBodyProps {
  comment: CommentAttachment;
  cwd?: string | null;
  hostId?: string | null;
}

function CommentBody({ comment, cwd, hostId }: CommentBodyProps) {
  if (comment.designTweak && comment.designTweakChanges != null) {
    return (
      <div className="text-sm leading-5 break-words whitespace-pre-wrap text-token-foreground">
        {renderDesignTweakDiff(comment.body, comment.designTweakChanges)}
      </div>
    );
  }
  return (
    <ConversationMarkdown
      allowBasicHtml={true}
      className="text-sm leading-5 break-words text-token-foreground [&_p]:leading-5"
      cwd={cwd}
      hostId={hostId}
    >
      {parseCommentMarkdown(comment.body)}
    </ConversationMarkdown>
  );
}

function renderDesignTweakDiff(body: string, changes: DesignTweakChange[]) {
  const changeByLine = new Map(
    changes.map((change) => [designTweakKey(change), change]),
  );
  return (
    <span className="flex flex-col gap-0.5 whitespace-pre-wrap">
      {body.split("\n").map((line, index) => {
        const change = changeByLine.get(line);
        if (change == null) {
          return <span key={index}>{line}</span>;
        }
        const prefix = `${change.property}: `;
        const arrow = ` ${DESIGN_TWEAK_ARROW} `;
        const ariaLabel = `${change.property}: ${change.previousValue} ${DESIGN_TWEAK_ARROW} ${change.nextValue}`;
        return (
          <span
            key={index}
            aria-label={ariaLabel}
            className="inline-flex flex-wrap items-center gap-x-1 break-words"
          >
            <span className="text-token-text-secondary">{prefix}</span>
            <span>{change.previousValue}</span>
            <span
              aria-hidden="true"
              className="text-token-description-foreground"
            >
              {arrow}
            </span>
            <span>{change.nextValue}</span>
          </span>
        );
      })}
    </span>
  );
}

interface CommentThumbnailProps {
  alt: string;
  src: string;
}

function CommentThumbnail({ alt, src }: CommentThumbnailProps) {
  return (
    <img
      alt={alt}
      className="h-5 w-7 shrink-0 rounded-sm border border-token-border object-cover"
      src={src}
    />
  );
}

function buildDiffReference(
  comment: CommentAttachment,
  cwd?: string | null,
): FileReference {
  const pathLabel = formatDiffPathLabel(comment.path, cwd);
  const lineRange = comment.lineRange;
  if (lineRange == null) {
    return buildFileReference(pathLabel);
  }
  const line =
    lineRange.match(comment.side === "left" ? /L(\d+)/ : /R(\d+)/)?.[1] ??
    (/^\d+(?:-\d+)?$/.test(lineRange) ? lineRange : null);
  return buildFileReference(line == null ? pathLabel : `${pathLabel}:${line}`);
}

function formatDiffPathLabel(path: string, cwd?: string | null): string {
  return cwd == null ? path : normalizePath(relativizePath(path, cwd));
}

function designTweakKey(change: DesignTweakChange): string {
  return `${change.property}: ${change.previousValue} -> ${change.nextValue}`;
}
