// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import {
  topRightCorner,
  type Point,
  type Rect,
  type Size,
} from "../../../image-side-panel/paged-annotation-overlays";

import { annotationMarkerPoint } from "./annotation-geometry";
import type {
  DocxAnnotationAnchor,
  DocxAnnotationComment,
  DocxAnnotationMetadata,
  DocxAnnotationTarget,
  DocxCommentPayload,
} from "./annotation-types";

export function createDocxCommentPayload({
  anchor,
  body,
  conversationId,
  pageNumber,
  pageSize,
  path,
  target,
  title,
}: {
  anchor: DocxAnnotationAnchor;
  body: string;
  conversationId: string;
  pageNumber: number;
  pageSize: Size;
  path: string;
  target: DocxAnnotationTarget;
  title: string;
}): DocxCommentPayload {
  const viewportRect =
    anchor.kind === "region"
      ? anchor.rect
      : { x: anchor.point.x, y: anchor.point.y, width: 1, height: 1 };
  const viewportPoint =
    anchor.kind === "region"
      ? anchor.selectionKind == null
        ? topRightCorner(anchor.rect)
        : annotationMarkerPoint(anchor)
      : anchor.point;

  return {
    sessionId:
      target.mode === "edit"
        ? `docx-comment-edit:${target.commentId}`
        : anchor.kind === "region"
          ? [
              "docx-comment",
              pageNumber,
              "region",
              anchor.rect.x,
              anchor.rect.y,
              anchor.rect.width,
              anchor.rect.height,
            ].join(":")
          : [
              "docx-comment",
              pageNumber,
              "point",
              anchor.point.x,
              anchor.point.y,
            ].join(":"),
    conversationId,
    target,
    anchorState: {
      anchor: {
        kind: "region",
        pageUrl: path,
        frameUrl: null,
        title,
        elementPath: `docx-page-${pageNumber}`,
        point: {
          xPercent:
            pageSize.width === 0 ? 0 : (viewportPoint.x / pageSize.width) * 100,
          y: viewportPoint.y,
        },
        rect: viewportRect,
        isFixed: false,
        role: null,
        name: null,
        selector: null,
        framePath: [],
        nearbyText: null,
      },
      viewportRect,
      viewportPoint,
      viewportSize: pageSize,
    },
    body,
    cwd: null,
    placementStrategy: "anchored",
    previewAlignment: "end",
    surfaceMode: "editor",
  };
}

export function createDocxAnnotationMetadata({
  anchor,
  pageCount,
  pageNumber,
  pageSize,
}: {
  anchor: DocxAnnotationAnchor;
  pageCount: number;
  pageNumber: number;
  pageSize: Size;
}): DocxAnnotationMetadata {
  return anchor.kind === "region"
    ? anchor.selectionKind == null
      ? {
          target: {
            type: "document-page-region",
            anchorPoint: topRightCorner(anchor.rect),
            pageCount,
            pageNumber,
            pageSize,
            rect: anchor.rect,
          },
        }
      : {
          contentPreview: anchor.contentPreview,
          target: {
            type: "document-element-selection",
            selectionKind: anchor.selectionKind,
            anchorPoint: annotationMarkerPoint(anchor),
            pageCount,
            pageNumber,
            pageSize,
            rect: anchor.rect,
            selectionRects: anchor.selectionRects,
            selectedText: anchor.selectedText,
            nearbyText: anchor.nearbyText,
          },
        }
    : {
        target: {
          type: "document-page-point",
          pageCount,
          pageNumber,
          pageSize,
          point: anchor.point,
        },
      };
}

export function describeDocxAnnotationAnchor(
  anchor: DocxAnnotationAnchor,
  pageNumber: number,
): string {
  return anchor.kind === "region" && anchor.selectionKind != null
    ? `Page ${pageNumber} ${anchor.selectionKind}`
    : anchor.kind === "region"
      ? `Page ${pageNumber} region`
      : `Page ${pageNumber} point`;
}

export function docxCommentPageNumber(
  comment: DocxAnnotationComment,
): number | null {
  const target = comment.localArtifactAnnotationMetadata?.target;
  return target?.type === "document-page-point" ||
    target?.type === "document-page-region" ||
    target?.type === "document-element-selection"
    ? target.pageNumber
    : null;
}

export function docxCommentPageSize(
  comment: DocxAnnotationComment,
): Size | null {
  const target = comment.localArtifactAnnotationMetadata?.target;
  return target?.type === "document-page-point" ||
    target?.type === "document-page-region" ||
    target?.type === "document-element-selection"
    ? target.pageSize
    : null;
}

export function anchorFromDocxComment(
  comment: DocxAnnotationComment,
): DocxAnnotationAnchor | null {
  const target = comment.localArtifactAnnotationMetadata?.target;
  return target?.type === "document-page-region"
    ? { kind: "region", rect: target.rect }
    : target?.type === "document-element-selection"
      ? {
          kind: "region",
          ...(target.selectionKind === "text"
            ? {
                askForEditAnchor: {
                  placement: "above" as const,
                  point: target.anchorPoint,
                },
              }
            : {}),
          rect: target.rect,
          contentPreview:
            comment.localArtifactAnnotationMetadata?.contentPreview,
          selectionRects: target.selectionRects,
          selectionKind: target.selectionKind,
          selectedText: target.selectedText,
          nearbyText: target.nearbyText,
        }
      : target?.type === "document-page-point"
        ? { kind: "point", point: target.point }
        : null;
}

export function docxCommentText(comment: DocxAnnotationComment): string {
  return comment.content
    .flatMap((part) => (part.content_type === "text" ? [part.text] : []))
    .join("\n");
}

export function docxCommentKey(comment: DocxAnnotationComment): string {
  return [
    comment.position.path,
    comment.position.line,
    comment.localArtifactAnnotationContext?.label ?? "",
  ].join(":");
}

export function isDocumentArtifactAnnotationForPath(
  comment: unknown,
  path: string,
): comment is DocxAnnotationComment {
  return (
    isDocumentArtifactAnnotation(comment) &&
    comment.localArtifactAnnotationContext?.path === path
  );
}

export function isDocumentArtifactAnnotation(
  comment: unknown,
): comment is DocxAnnotationComment {
  return (
    isRecord(comment) &&
    isRecord(comment.localArtifactAnnotationContext) &&
    comment.localArtifactAnnotationContext.artifactKind === "document" &&
    typeof comment.position === "object" &&
    comment.position !== null
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
