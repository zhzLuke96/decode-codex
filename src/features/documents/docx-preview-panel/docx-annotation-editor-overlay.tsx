// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type {
  PointerEvent,
  ReactElement,
  RefObject,
  TouchEvent,
  WheelEvent,
} from "react";

import { BrowserSidebarCommentOverlay } from "../../../browser/browser-sidebar-comment-overlay";
import type {
  BrowserSidebarCommentOverlayProps,
  SubmitPayload,
} from "../../../browser/browser-comment-overlay-types";
import type { Point } from "../../../image-side-panel/paged-annotation-overlays";
import {
  ANNOTATION_EDITOR_ENTER_CLASS,
  PREVIEW_MAX_WIDTH,
} from "../../../image-side-panel/paged-annotation-overlay-constants";

import type {
  DocxAnnotationComment,
  DocxCommentPayload,
} from "./annotation-types";
import { docxCommentKey } from "./annotation-metadata";

export interface DocxAnnotationEditorOverlayProps {
  editorRef: RefObject<HTMLDivElement | null>;
  inputAriaLabel: string;
  onBodyChange?: (body: string) => void;
  onCancel: () => void;
  onCommentsChange: (
    updater: (comments: DocxAnnotationComment[]) => DocxAnnotationComment[],
  ) => void;
  onDirectSubmit: (payload: SubmitPayload) => void;
  onLightDismissibilityChange: BrowserSidebarCommentOverlayProps["onLightDismissibilityChange"];
  onMounted: BrowserSidebarCommentOverlayProps["onMounted"];
  onSubmit: (payload: SubmitPayload) => void;
  onTouchCancel?: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchEnd?: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchMove?: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchStart?: (event: TouchEvent<HTMLDivElement>) => void;
  onWheel?: (event: WheelEvent<HTMLDivElement>) => void;
  placeholder: string;
  position: Point | null;
  scale: number;
  session: DocxCommentPayload | null;
  windowHeight: BrowserSidebarCommentOverlayProps["windowHeight"] | string;
}

export function DocxAnnotationEditorOverlay({
  editorRef,
  inputAriaLabel,
  onBodyChange,
  onCancel,
  onCommentsChange,
  onDirectSubmit,
  onLightDismissibilityChange,
  onMounted,
  onSubmit,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  onWheel,
  placeholder,
  position,
  scale,
  session,
  windowHeight,
}: DocxAnnotationEditorOverlayProps): ReactElement | null {
  if (position == null || session == null) return null;

  return (
    <div
      ref={editorRef}
      className={ANNOTATION_EDITOR_ENTER_CLASS}
      style={{
        scale: `${scale}`,
        transformOrigin: "top left",
        left: position.x,
        top: position.y,
        height: windowHeight,
        width: PREVIEW_MAX_WIDTH,
      }}
      onPointerDown={stopEditorEventPropagation}
      onTouchCancel={(event) => {
        event.stopPropagation();
        onTouchCancel?.(event);
      }}
      onTouchEnd={(event) => {
        event.stopPropagation();
        onTouchEnd?.(event);
      }}
      onTouchMove={(event) => {
        event.stopPropagation();
        onTouchMove?.(event);
      }}
      onTouchStart={(event) => {
        event.stopPropagation();
        onTouchStart?.(event);
      }}
      onWheel={(event) => {
        event.stopPropagation();
        onWheel?.(event);
      }}
    >
      <BrowserSidebarCommentOverlay
        key={session.sessionId}
        allowImageAttachments={false}
        defaultCreateSubmitMode="direct"
        inputAriaLabel={inputAriaLabel}
        keyboardEventTarget={typeof window > "u" ? undefined : window}
        placeholder={placeholder}
        session={session}
        windowHeight={
          windowHeight as BrowserSidebarCommentOverlayProps["windowHeight"]
        }
        onBodyChange={onBodyChange}
        onCancel={onCancel}
        onDelete={(commentKey) => {
          onCommentsChange((comments) =>
            comments.filter(
              (comment) => docxCommentKey(comment) !== commentKey,
            ),
          );
          onCancel();
        }}
        onDirectSubmit={onDirectSubmit}
        onEscape={onCancel}
        onLightDismissibilityChange={onLightDismissibilityChange}
        onMounted={onMounted}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function stopEditorEventPropagation(event: PointerEvent<HTMLDivElement>): void {
  event.stopPropagation();
}
