// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Interactive overlay that lets the user drop, edit, and delete numbered comments
// on top of an image in the image side panel.
import { useState } from "react";
import type {
  CSSProperties,
  HTMLAttributeReferrerPolicy,
  PointerEvent as ReactPointerEvent,
} from "react";
import { useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { PagedAnnotationMarker } from "./paged-annotation-marker";
import {
  Button,
  CommentSendIcon,
  DeleteCommentIcon,
  ImageCommentEditorPositioner,
  COMMENT_EDITOR_SURFACE_CLASS,
  COMMENT_EDITOR_INPUT_CLASS,
  COMMENT_EDITOR_FOOTER_CLASS,
} from "../boundaries/onboarding-commons-externals.facade";

const SURFACE_INSET = 8;
const MARKER_OFFSET = 12;

export interface ImageComment {
  id: string;
  text: string;
  x: number;
  y: number;
}

interface EditorBounds {
  editorMaxX: number;
  editorMaxY: number;
  editorMinX: number;
  editorMinY: number;
  surfaceHeight: number;
  surfaceWidth: number;
}

type EditorMarker = Partial<ImageComment> & {
  x: number;
  y: number;
} & EditorBounds;

interface SurfacePoint extends EditorBounds {
  x: number;
  y: number;
}

function getEditorBounds(surface: HTMLElement): EditorBounds {
  const parent = surface.parentElement;
  return {
    editorMaxX:
      (parent?.clientWidth ?? surface.clientWidth) -
      surface.offsetLeft -
      SURFACE_INSET,
    editorMaxY:
      (parent?.clientHeight ?? surface.clientHeight) -
      surface.offsetTop -
      SURFACE_INSET,
    editorMinX: SURFACE_INSET - surface.offsetLeft,
    editorMinY: SURFACE_INSET - surface.offsetTop,
    surfaceHeight: surface.clientHeight,
    surfaceWidth: surface.clientWidth,
  };
}

function pointerEventToSurfacePoint(
  event:
    | ReactPointerEvent<HTMLButtonElement>
    | { currentTarget: HTMLElement; clientX: number; clientY: number },
): SurfacePoint | null {
  const target = event.currentTarget as HTMLElement;
  const bounds = target.getBoundingClientRect();
  const parent = target.parentElement;
  if (parent == null || bounds.width <= 0 || bounds.height <= 0) return null;
  return {
    ...getEditorBounds(parent),
    x: (event.clientX - bounds.left) / bounds.width,
    y: (event.clientY - bounds.top) / bounds.height,
  };
}

function getEditorBoxStyle(
  marker: EditorMarker,
  isEditing: boolean,
): CSSProperties {
  const anchorX = marker.x * marker.surfaceWidth;
  const anchorY = marker.y * marker.surfaceHeight;
  const gap = 15 + MARKER_OFFSET;
  const boxWidth = Math.min(294, marker.editorMaxX - marker.editorMinX);
  const boxHeight = isEditing ? 120 : 44;
  const maxLeft = marker.editorMaxX - boxWidth;
  const maxTop = marker.editorMaxY - boxHeight;
  const clampedTop = Math.min(
    Math.max(anchorY - boxHeight / 2, marker.editorMinY),
    maxTop,
  );

  const rightLeft = anchorX + gap;
  if (rightLeft <= maxLeft) {
    return {
      height: boxHeight,
      left: rightLeft,
      top: clampedTop,
      width: boxWidth,
    };
  }

  const leftLeft = anchorX - gap - boxWidth;
  if (leftLeft >= marker.editorMinX) {
    return {
      height: boxHeight,
      left: leftLeft,
      top: clampedTop,
      width: boxWidth,
    };
  }

  const centeredLeft = Math.min(
    Math.max(anchorX - boxWidth / 2, marker.editorMinX),
    maxLeft,
  );
  const belowTop = anchorY + gap;
  return belowTop <= maxTop
    ? { height: boxHeight, left: centeredLeft, top: belowTop, width: boxWidth }
    : {
        height: boxHeight,
        left: centeredLeft,
        top: Math.max(anchorY - gap - boxHeight, marker.editorMinY),
        width: boxWidth,
      };
}

export interface ImageCommentSurfaceProps {
  alt: string;
  comments: ImageComment[];
  onDeleteComment: (commentId: string) => void;
  onSubmitComment: (comment: {
    id?: string;
    text: string;
    x: number;
    y: number;
  }) => void;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  src: string;
}

export function ImageCommentSurface({
  alt,
  comments,
  onDeleteComment,
  onSubmitComment,
  referrerPolicy,
  src,
}: ImageCommentSurfaceProps) {
  const intl = useIntl();
  const [editingMarker, setEditingMarker] = useState<EditorMarker | null>(null);
  const [hoverPoint, setHoverPoint] = useState<SurfacePoint | null>(null);
  const [draftText, setDraftText] = useState("");

  const editingIndex =
    editingMarker?.id == null
      ? -1
      : comments.findIndex((comment) => comment.id === editingMarker.id);
  const editingComment = editingIndex === -1 ? null : comments[editingIndex];

  const resetEditing = () => {
    setEditingMarker(null);
    setDraftText("");
  };

  const submitComment = () => {
    const text = draftText.trim();
    if (editingMarker == null || text.length === 0) return;
    onSubmitComment({
      id: editingMarker.id,
      text,
      x: editingMarker.x,
      y: editingMarker.y,
    });
    resetEditing();
  };

  const image = (
    <img
      alt={alt}
      className="block !max-h-[100cqh] max-w-full rounded-xl object-contain"
      referrerPolicy={referrerPolicy}
      src={src}
    />
  );

  const surfaceClassName = classNames(
    "absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border",
    hoverPoint == null ? "cursor-interaction" : "cursor-none",
  );
  const surfaceLabel = intl.formatMessage({
    id: "imageSidePanel.commentSurface",
    defaultMessage: "Image comment surface",
    description:
      "Accessible label for the image surface where users can place comments.",
  });

  const surfaceButton = (
    <button
      type="button"
      className={surfaceClassName}
      aria-label={surfaceLabel}
      onClick={(event) => {
        if (event.detail === 0) return;
        const point = pointerEventToSurfacePoint(event);
        if (point != null) {
          setHoverPoint(null);
          setEditingMarker(point);
          setDraftText("");
        }
      }}
      onPointerMove={(event) => {
        if (editingMarker == null)
          setHoverPoint(pointerEventToSurfacePoint(event));
      }}
      onPointerLeave={() => {
        setHoverPoint(null);
      }}
    />
  );

  const markers = comments.map((comment, index) =>
    comment.id === editingMarker?.id ? null : (
      <PagedAnnotationMarker
        key={comment.id}
        ariaLabel={intl.formatMessage(
          {
            id: "imageSidePanel.editComment",
            defaultMessage: "Edit comment {number}",
            description:
              "Accessible label for editing a numbered image comment.",
          },
          { number: index + 1 },
        )}
        label={index + 1}
        pageSize={{ height: 1, width: 1 }}
        point={{ x: comment.x, y: comment.y }}
        testId="image-comment-marker"
        onClick={(event) => {
          const surface = event.currentTarget.parentElement;
          if (
            surface == null ||
            surface.clientHeight <= 0 ||
            surface.clientWidth <= 0
          ) {
            return;
          }
          setEditingMarker({ ...comment, ...getEditorBounds(surface) });
          setDraftText(comment.text);
        }}
      />
    ),
  );

  const editor =
    editingMarker == null ? null : (
      <>
        <PagedAnnotationMarker
          draft
          draftTestId="image-comment-draft-marker"
          label={(editingIndex === -1 ? comments.length : editingIndex) + 1}
          pageSize={{ height: 1, width: 1 }}
          point={{ x: editingMarker.x, y: editingMarker.y }}
          testId="image-comment-marker"
        />
        <ImageCommentEditorPositioner
          className="absolute"
          style={getEditorBoxStyle(editingMarker, editingComment != null)}
        >
          {editingComment == null ? (
            <>
              <div
                className={classNames(
                  COMMENT_EDITOR_SURFACE_CLASS,
                  "top-2 bottom-2",
                  draftText.trim().length === 0 ? "right-4" : "right-12",
                )}
              >
                <div className="h-full min-h-0 translate-y-0.5">
                  <input
                    autoFocus
                    className={classNames(
                      COMMENT_EDITOR_INPUT_CLASS,
                      "h-full border-0 bg-transparent !outline-none placeholder:text-token-text-tertiary",
                    )}
                    name="image-comment-instruction"
                    placeholder={intl.formatMessage({
                      id: "imageSidePanel.addCommentPlaceholder",
                      defaultMessage: "Add a comment…",
                      description:
                        "Placeholder for adding a comment to an image.",
                    })}
                    value={draftText}
                    onChange={(event) => {
                      setDraftText(event.target.value);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        submitComment();
                      }
                      if (event.key === "Escape") {
                        event.preventDefault();
                        resetEditing();
                      }
                    }}
                  />
                </div>
              </div>
              {draftText.trim().length > 0 ? (
                <Button
                  aria-label={intl.formatMessage({
                    id: "imageSidePanel.addComment",
                    defaultMessage: "Add comment",
                    description:
                      "Accessible label for adding a comment to an image.",
                  })}
                  color="primary"
                  className="absolute right-2 bottom-2"
                  size="composer"
                  uniform
                  onClick={submitComment}
                >
                  <CommentSendIcon className="icon-sm" />
                </Button>
              ) : null}
            </>
          ) : (
            <>
              <div
                className={classNames(
                  COMMENT_EDITOR_SURFACE_CLASS,
                  "top-2 right-4 bottom-[52px]",
                )}
              >
                <div className="h-full min-h-0 translate-y-0.5">
                  <textarea
                    autoFocus
                    className={classNames(
                      COMMENT_EDITOR_INPUT_CLASS,
                      "h-full resize-none border-0 bg-transparent !outline-none",
                    )}
                    name="image-comment-instruction"
                    value={draftText}
                    onChange={(event) => {
                      setDraftText(event.target.value);
                    }}
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" &&
                        (event.metaKey || event.ctrlKey)
                      ) {
                        event.preventDefault();
                        submitComment();
                      }
                      if (event.key === "Escape") {
                        event.preventDefault();
                        resetEditing();
                      }
                    }}
                  />
                </div>
              </div>
              <div
                className={classNames(
                  COMMENT_EDITOR_FOOTER_CLASS,
                  "justify-between",
                )}
              >
                <Button
                  aria-label={intl.formatMessage({
                    id: "imageSidePanel.deleteComment",
                    defaultMessage: "Delete comment",
                    description:
                      "Accessible label for deleting a saved image comment.",
                  })}
                  color="ghostMuted"
                  size="composer"
                  uniform
                  onClick={() => {
                    onDeleteComment(editingComment.id);
                    resetEditing();
                  }}
                >
                  <DeleteCommentIcon className="icon-sm" />
                </Button>
                <div className="flex items-center gap-1.5">
                  <Button
                    color="outline"
                    size="composer"
                    onClick={resetEditing}
                  >
                    {intl.formatMessage({
                      id: "imageSidePanel.cancelCommentEdit",
                      defaultMessage: "Cancel",
                      description:
                        "Button label for canceling an image comment edit.",
                    })}
                  </Button>
                  <Button
                    color="primary"
                    disabled={draftText.trim().length === 0}
                    size="composer"
                    onClick={submitComment}
                  >
                    {intl.formatMessage({
                      id: "imageSidePanel.saveCommentEdit",
                      defaultMessage: "Save",
                      description:
                        "Button label for saving an image comment edit.",
                    })}
                  </Button>
                </div>
              </div>
            </>
          )}
        </ImageCommentEditorPositioner>
      </>
    );

  const hoverMarker =
    hoverPoint == null ? null : (
      <PagedAnnotationMarker
        draft
        draftTestId="image-comment-hover-marker"
        label=""
        pageSize={{ height: 1, width: 1 }}
        point={{ x: hoverPoint.x, y: hoverPoint.y }}
        testId="image-comment-marker"
      />
    );

  return (
    <div className="[container-type:size] relative flex h-0 min-h-0 flex-1 items-center justify-center overflow-hidden p-4">
      <div className="relative max-h-[100cqh] max-w-full">
        {image}
        {surfaceButton}
        {markers}
        {editor}
        {hoverMarker}
      </div>
    </div>
  );
}
