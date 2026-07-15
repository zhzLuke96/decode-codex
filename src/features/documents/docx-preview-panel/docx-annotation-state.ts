// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type { Size } from "../../../image-side-panel/paged-annotation-overlays";

import {
  anchorFromDocxComment,
  createDocxCommentPayload,
  docxCommentKey,
  docxCommentPageNumber,
  docxCommentPageSize,
  docxCommentText,
} from "./annotation-metadata";
import type {
  DocxAnnotationAnchor,
  DocxAnnotationComment,
  DocxAnnotationSelectionKind,
  DocxCommentPayload,
} from "./annotation-types";

export interface DocxPageAnnotationCommentsOptions {
  comments: readonly DocxAnnotationComment[];
  pageNumber: number;
  path: string;
}

export interface ResolveDocxAnnotationSessionOptions {
  comments: readonly DocxAnnotationComment[];
  conversationId: string;
  draftAnchor: DocxAnnotationAnchor | null;
  draftBody: string;
  draftPageSize: Size | null;
  editingCommentKey: string | null;
  pageNumber: number;
  pageSize: Size;
  path: string;
  title: string;
}

export interface ResolvedDocxAnnotationSessionState {
  activeAnchor: DocxAnnotationAnchor | null;
  editingAnchor: DocxAnnotationAnchor | null;
  editingComment: DocxAnnotationComment | null;
  pageSize: Size;
  session: DocxCommentPayload | null;
}

export function docxPageAnnotationComments({
  comments,
  pageNumber,
  path,
}: DocxPageAnnotationCommentsOptions): DocxAnnotationComment[] {
  return comments.filter(
    (comment) =>
      comment.localArtifactAnnotationContext?.path === path &&
      docxCommentPageNumber(comment) === pageNumber,
  );
}

export function findDocxCommentByKey(
  comments: readonly DocxAnnotationComment[],
  commentKey: string | null,
): DocxAnnotationComment | null {
  return commentKey == null
    ? null
    : (comments.find((comment) => docxCommentKey(comment) === commentKey) ??
        null);
}

export function resolveDocxAnnotationSessionState({
  comments,
  conversationId,
  draftAnchor,
  draftBody,
  draftPageSize,
  editingCommentKey,
  pageNumber,
  pageSize,
  path,
  title,
}: ResolveDocxAnnotationSessionOptions): ResolvedDocxAnnotationSessionState {
  const editingComment = findDocxCommentByKey(comments, editingCommentKey);
  const editingAnchor =
    editingComment == null ? null : anchorFromDocxComment(editingComment);
  const activeAnchor = draftAnchor ?? editingAnchor;
  const activePageSize =
    draftAnchor == null
      ? ((editingComment == null
          ? null
          : docxCommentPageSize(editingComment)) ?? pageSize)
      : (draftPageSize ?? pageSize);

  if (draftAnchor != null) {
    return {
      activeAnchor,
      editingAnchor,
      editingComment,
      pageSize: activePageSize,
      session: createDocxCommentPayload({
        anchor: draftAnchor,
        body: draftBody,
        conversationId,
        pageNumber,
        pageSize: activePageSize,
        path,
        target: { mode: "create" },
        title,
      }),
    };
  }

  if (
    editingAnchor == null ||
    editingComment == null ||
    editingCommentKey == null
  ) {
    return {
      activeAnchor,
      editingAnchor,
      editingComment,
      pageSize: activePageSize,
      session: null,
    };
  }

  return {
    activeAnchor,
    editingAnchor,
    editingComment,
    pageSize: activePageSize,
    session: createDocxCommentPayload({
      anchor: editingAnchor,
      body: docxCommentText(editingComment),
      conversationId,
      pageNumber,
      pageSize: activePageSize,
      path,
      target: { mode: "edit", commentId: editingCommentKey },
      title,
    }),
  };
}

export function isDocxElementAnnotationSelectionKind(
  selectionKind: DocxAnnotationSelectionKind | string | null | undefined,
): boolean {
  return selectionKind === "image" || selectionKind === "drawing";
}
