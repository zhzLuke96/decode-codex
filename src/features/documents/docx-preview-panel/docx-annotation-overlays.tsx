// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type { ReactElement } from "react";

import {
  AnnotationHighlightRect,
  type AnnotationHighlightRectProps,
  AnnotationSelectionRect,
  type AnnotationSelectionRectProps,
  AskForEditButton,
  CommentPreview,
  PagedAnnotationMarker,
  type Point,
  type Size,
  topRightCorner,
} from "../../../image-side-panel/paged-annotation-overlays";
import { useIntl } from "../../../vendor/react-intl";

import {
  anchorFromDocxComment,
  docxCommentKey,
  docxCommentPageSize,
  docxCommentText,
} from "./annotation-metadata";
import type {
  DocxAnnotationAnchor,
  DocxAnnotationComment,
  DocxRegionAnchor,
} from "./annotation-types";

export type DocxAnnotationHighlightRectProps = AnnotationHighlightRectProps;
export type DocxAnnotationSelectionRectProps = AnnotationSelectionRectProps;

export interface DocxAnnotationSelectionOutlineProps {
  anchor: DocxRegionAnchor;
  bordered?: boolean;
  pageSize: Size;
  testId?: string;
}

export interface DocxCommentMarkerOverlayProps {
  comment: DocxAnnotationComment;
  isSelected: boolean;
  onEdit: (commentKey: string) => void;
  onPreviewChange: (commentKey: string | null) => void;
  zoomScale: number;
}

export interface DocxCommentPreviewOverlayProps {
  comment: DocxAnnotationComment;
  layer: HTMLElement | null;
}

export interface DocxDraftCommentMarkerOverlayProps {
  anchor: DocxAnnotationAnchor;
  label: string | number;
  pageSize: Size;
  zoomScale: number;
}

export interface DocxAskForEditOverlayProps {
  anchor: DocxRegionAnchor | null;
  label: string;
  onAskForEdit: (anchor: DocxRegionAnchor) => void;
  pageSize: Size;
  zoomScale: number;
}

export function DocxAnnotationHighlightRect(
  props: DocxAnnotationHighlightRectProps,
): ReactElement {
  return <AnnotationHighlightRect {...props} />;
}

export function DocxAnnotationSelectionRect(
  props: DocxAnnotationSelectionRectProps,
): ReactElement {
  return <AnnotationSelectionRect {...props} />;
}

export function DocxAnnotationSelectionOutline({
  anchor,
  bordered = false,
  pageSize,
  testId,
}: DocxAnnotationSelectionOutlineProps): ReactElement {
  if (anchor.selectionKind === "text") {
    const selectionRects =
      anchor.selectionRects == null || anchor.selectionRects.length === 0
        ? [anchor.rect]
        : anchor.selectionRects;

    return (
      <>
        {selectionRects.map((selectionRect, index) => (
          <AnnotationHighlightRect
            key={`${selectionRect.x}:${selectionRect.y}:${selectionRect.width}:${selectionRect.height}:${index}`}
            paddingX={4}
            paddingY={0}
            pageSize={pageSize}
            rect={selectionRect}
            testId={testId}
          />
        ))}
      </>
    );
  }

  const borderWidth = bordered
    ? anchor.selectionKind === "paragraph"
      ? 2
      : 1
    : 0;

  return (
    <AnnotationHighlightRect
      bordered={bordered}
      borderWidth={borderWidth}
      paddingPx={4}
      pageSize={pageSize}
      rect={anchor.rect}
      testId={testId}
    />
  );
}

export function DocxAskForEditOverlay({
  anchor,
  label,
  onAskForEdit,
  pageSize,
  zoomScale,
}: DocxAskForEditOverlayProps): ReactElement | null {
  if (anchor == null) return null;

  return (
    <>
      {anchor.selectionKind === "text" ? null : (
        <AnnotationHighlightRect
          bordered={true}
          paddingPx={4}
          pageSize={pageSize}
          rect={anchor.rect}
          testId="artifact-docx-selection-outline"
        />
      )}
      <AskForEditButton
        anchor={anchor.askForEditAnchor}
        label={label}
        pageSize={pageSize}
        rect={anchor.rect}
        testId="artifact-docx-ask-for-edit-button"
        zoomScale={zoomScale}
        onClick={() => {
          onAskForEdit(anchor);
        }}
      />
    </>
  );
}

export function DocxCommentMarkerOverlay({
  comment,
  isSelected,
  onEdit,
  onPreviewChange,
  zoomScale,
}: DocxCommentMarkerOverlayProps): ReactElement | null {
  const intl = useIntl();
  const anchor = anchorFromDocxComment(comment);
  const pageSize = docxCommentPageSize(comment);
  if (anchor == null || pageSize == null) return null;

  const commentKey = docxCommentKey(comment);
  const label = intl.formatMessage(
    {
      id: "artifactDocxPreview.commentMarkerLabel",
      defaultMessage: "Document annotation {commentNumber}",
      description: "Accessible label for a placed DOCX annotation marker",
    },
    { commentNumber: comment.position.line },
  );
  const markerPoint = markerPointFromAnchor(anchor);

  return (
    <>
      {anchor.kind !== "region" ? null : anchor.selectionKind == null ? (
        <AnnotationSelectionRect
          pageSize={pageSize}
          rect={anchor.rect}
          testId="artifact-docx-comment-region-outline"
        />
      ) : (
        <DocxAnnotationSelectionOutline
          bordered={true}
          pageSize={pageSize}
          anchor={anchor}
          testId="artifact-docx-comment-region-outline"
        />
      )}
      <PagedAnnotationMarker
        ariaLabel={label}
        isSelected={isSelected}
        label={comment.position.line}
        pageSize={pageSize}
        point={markerPoint}
        testId="artifact-docx-comment-marker"
        zoomScale={zoomScale}
        onClick={() => {
          onEdit(commentKey);
        }}
        onPreviewHide={() => {
          onPreviewChange(null);
        }}
        onPreviewShow={() => {
          onPreviewChange(commentKey);
        }}
      />
    </>
  );
}

export function DocxCommentPreviewOverlay({
  comment,
  layer,
}: DocxCommentPreviewOverlayProps): ReactElement | null {
  const anchor = anchorFromDocxComment(comment);
  const pageSize = docxCommentPageSize(comment);
  if (anchor == null || pageSize == null) return null;

  return (
    <CommentPreview
      body={docxCommentText(comment)}
      layer={layer}
      pageSize={pageSize}
      point={markerPointFromAnchor(anchor)}
      testId="artifact-docx-comment-preview"
    />
  );
}

export function DocxDraftCommentMarkerOverlay({
  anchor,
  label,
  pageSize,
  zoomScale,
}: DocxDraftCommentMarkerOverlayProps): ReactElement {
  const markerPoint = markerPointFromAnchor(anchor);

  return (
    <>
      {anchor.kind !== "region" ? null : anchor.selectionKind == null ? (
        <AnnotationSelectionRect
          pageSize={pageSize}
          rect={anchor.rect}
          testId="artifact-docx-comment-region-outline"
        />
      ) : (
        <DocxAnnotationSelectionOutline
          bordered={true}
          pageSize={pageSize}
          anchor={anchor}
          testId="artifact-docx-comment-region-outline"
        />
      )}
      <PagedAnnotationMarker
        draft={true}
        draftTestId="artifact-docx-comment-draft-marker"
        label={label}
        pageSize={pageSize}
        point={markerPoint}
        testId="artifact-docx-comment-marker"
        zoomScale={zoomScale}
      />
    </>
  );
}

function markerPointFromAnchor(anchor: DocxAnnotationAnchor): Point {
  return anchor.kind === "region" ? topRightCorner(anchor.rect) : anchor.point;
}
