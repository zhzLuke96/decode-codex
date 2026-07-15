// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type { ReactElement, ReactNode } from "react";

import type { Size } from "../../../image-side-panel/paged-annotation-overlays";

import { rectFromPoints, type PointerDragState } from "./annotation-geometry";
import { docxCommentKey } from "./annotation-metadata";
import type {
  DocxAnnotationAnchor,
  DocxAnnotationComment,
  DocxRegionAnchor,
} from "./annotation-types";
import {
  DocxAnnotationHighlightRect,
  DocxAnnotationSelectionRect,
  DocxAskForEditOverlay,
  DocxCommentMarkerOverlay,
  DocxCommentPreviewOverlay,
  DocxDraftCommentMarkerOverlay,
} from "./docx-annotation-overlays";

export interface DocxPageAnnotationLayerContentProps {
  askForEditAnchor: DocxRegionAnchor | null;
  askForEditLabel: string;
  comments: readonly DocxAnnotationComment[];
  draftAnchor: DocxAnnotationAnchor | null;
  draftPageSize: Size | null;
  editingCommentKey: string | null;
  editorOverlay: ReactNode;
  hoverAnchor: DocxRegionAnchor | null;
  layerElement: HTMLElement | null;
  nextCommentNumber: string | number;
  pageSize: Size;
  pointerDragState: Pick<PointerDragState, "start" | "current"> | null;
  previewComment: DocxAnnotationComment | null;
  zoomScale: number;
  onAskForEdit: (anchor: DocxRegionAnchor) => void;
  onEditComment: (commentKey: string) => void;
  onPreviewCommentChange: (commentKey: string | null) => void;
}

export function DocxPageAnnotationLayerContent({
  askForEditAnchor,
  askForEditLabel,
  comments,
  draftAnchor,
  draftPageSize,
  editingCommentKey,
  editorOverlay,
  hoverAnchor,
  layerElement,
  nextCommentNumber,
  pageSize,
  pointerDragState,
  previewComment,
  zoomScale,
  onAskForEdit,
  onEditComment,
  onPreviewCommentChange,
}: DocxPageAnnotationLayerContentProps): ReactElement {
  return (
    <>
      {comments.map((comment) => (
        <DocxCommentMarkerOverlay
          key={docxCommentKey(comment)}
          comment={comment}
          isSelected={docxCommentKey(comment) === editingCommentKey}
          onEdit={onEditComment}
          onPreviewChange={onPreviewCommentChange}
          zoomScale={zoomScale}
        />
      ))}
      {previewComment == null || editingCommentKey != null ? null : (
        <DocxCommentPreviewOverlay
          comment={previewComment}
          layer={layerElement}
        />
      )}
      {hoverAnchor != null &&
      draftAnchor == null &&
      editingCommentKey == null ? (
        <DocxAnnotationHighlightRect
          paddingPx={4}
          pageSize={pageSize}
          rect={hoverAnchor.rect}
          testId="artifact-docx-element-hover-highlight"
        />
      ) : null}
      {askForEditAnchor != null && draftAnchor == null ? (
        <DocxAskForEditOverlay
          anchor={askForEditAnchor}
          label={askForEditLabel}
          pageSize={pageSize}
          zoomScale={zoomScale}
          onAskForEdit={onAskForEdit}
        />
      ) : null}
      {pointerDragState == null ? null : (
        <DocxAnnotationSelectionRect
          pageSize={pageSize}
          rect={rectFromPoints(
            pointerDragState.start,
            pointerDragState.current,
          )}
          testId="artifact-docx-comment-region-outline"
        />
      )}
      {draftAnchor == null ? null : (
        <DocxDraftCommentMarkerOverlay
          anchor={draftAnchor}
          label={nextCommentNumber}
          pageSize={draftPageSize ?? pageSize}
          zoomScale={zoomScale}
        />
      )}
      {editorOverlay}
    </>
  );
}
