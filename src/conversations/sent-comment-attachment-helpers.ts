// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Normalizers for user comment attachments shown in local conversation tooltips.

type ContentPreview =
  | { alt?: string | null; src: string; type: "image" }
  | { text: string; type: "text" };

export interface NormalizedCommentAttachment {
  artifactAnnotationContentPreview?: ContentPreview | null;
  artifactAnnotationFilePath?: string | null;
  artifactAnnotationRangeLabel?: string | null;
  body: string;
  designTweak?: boolean;
  designTweakChanges?: unknown[] | null;
  lineRange?: string | null;
  origin: string;
  path: string;
  pdfAnnotationContentPreview?: ContentPreview | null;
  pdfAnnotationFilePath?: string | null;
  pdfAnnotationRangeLabel?: string | null;
  side?: "left" | "right" | null;
}

export interface CommentDisplay {
  browserElementPreview?: {
    immediateText?: string | null;
    tagName: string;
  } | null;
  lineRange?: string | null;
  pathLabel?: string | null;
  side?: "left" | "right" | null;
  type: string;
}

export function commentAttachmentToComment(
  attachment: Record<string, any>,
): NormalizedCommentAttachment {
  const annotationFilePath =
    attachment.artifactAnnotationFilePath ??
    attachment.pdfAnnotationFilePath ??
    attachment.filePath ??
    attachment.path ??
    null;
  return {
    artifactAnnotationContentPreview:
      attachment.artifactAnnotationContentPreview ?? null,
    artifactAnnotationFilePath: attachment.artifactAnnotationFilePath ?? null,
    artifactAnnotationRangeLabel:
      attachment.artifactAnnotationRangeLabel ?? null,
    body:
      attachment.body ??
      attachment.text ??
      attachment.comment ??
      attachment.message ??
      "",
    designTweak: Boolean(attachment.designTweak),
    designTweakChanges: attachment.designTweakChanges ?? null,
    lineRange: attachment.lineRange ?? attachment.rangeLabel ?? null,
    origin:
      attachment.origin ??
      attachment.kind ??
      (attachment.localBrowserScreenshot != null ? "browser" : "diff"),
    path: annotationFilePath ?? "",
    pdfAnnotationContentPreview: attachment.pdfAnnotationContentPreview ?? null,
    pdfAnnotationFilePath: attachment.pdfAnnotationFilePath ?? null,
    pdfAnnotationRangeLabel: attachment.pdfAnnotationRangeLabel ?? null,
    side:
      attachment.side === "left" || attachment.side === "right"
        ? attachment.side
        : null,
  };
}

export function parseCommentDisplay(
  comment: NormalizedCommentAttachment,
): CommentDisplay {
  if (comment.origin === "browser_selected_text") {
    return { type: "selected-browser-text" };
  }
  if (comment.origin === "browser_selected_region") {
    return { type: "selected-browser-region" };
  }
  if (comment.origin === "browser_selected_element") {
    return {
      browserElementPreview: parseBrowserElementPreview(comment.path),
      type: "selected-browser-element",
    };
  }
  return {
    browserElementPreview:
      comment.origin === "browser"
        ? parseBrowserElementPreview(comment.path)
        : null,
    lineRange: comment.lineRange,
    pathLabel: pathLabelForComment(comment),
    side: comment.side,
    type: "details",
  };
}

export function initSentCommentAttachmentHelpersChunk(): void {}

function pathLabelForComment(
  comment: NormalizedCommentAttachment,
): string | null {
  if (comment.origin === "artifact_annotation") {
    return (
      comment.artifactAnnotationRangeLabel ??
      comment.artifactAnnotationFilePath ??
      comment.path
    );
  }
  if (comment.origin === "pdf") {
    return (
      comment.pdfAnnotationRangeLabel ??
      comment.pdfAnnotationFilePath ??
      comment.path
    );
  }
  return comment.path || null;
}

function parseBrowserElementPreview(value: string | null | undefined) {
  if (value == null || value.trim().length === 0) return null;
  const match = value.match(/^([a-z][\w-]*)(?::\s*(.*))?$/i);
  if (!match) return null;
  return {
    immediateText: match[2] ?? null,
    tagName: match[1].toLowerCase(),
  };
}
