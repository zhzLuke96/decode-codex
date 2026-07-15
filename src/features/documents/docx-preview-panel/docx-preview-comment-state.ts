// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import { isDocumentArtifactAnnotationForPath } from "./annotation-metadata";
import type { DocxAnnotationComment } from "./annotation-types";

export function docxPreviewCommentsForPath(
  comments: readonly unknown[],
  path: string,
): DocxAnnotationComment[] {
  return comments.filter((comment): comment is DocxAnnotationComment =>
    isDocumentArtifactAnnotationForPath(comment, path),
  );
}

export function nextDocxPreviewCommentLine(
  comments: readonly DocxAnnotationComment[],
): number {
  return Math.max(0, ...comments.map((comment) => comment.position.line)) + 1;
}

export function removeDocxPreviewCommentsForPath(
  comments: DocxAnnotationComment[],
  path: string,
): DocxAnnotationComment[] {
  const filteredComments = comments.filter(
    (comment) => !isDocumentArtifactAnnotationForPath(comment, path),
  );
  return filteredComments.length === comments.length
    ? comments
    : filteredComments;
}
