// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import clsx from "clsx";
import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
  type TouchEvent,
  type WheelEvent,
} from "react";

import type { SubmitPayload } from "../../../browser/browser-comment-overlay-types";
import { applyBrowserCommentPopupShake } from "../../../browser/browser-comment-popup-shake";
import {
  ANNOTATION_CROSSHAIR_CURSOR,
  applyAbsolutePosition,
  FONT_FAMILY,
  isToggleImageCommentShortcut,
  type Size,
} from "../../../image-side-panel/paged-annotation-overlays";
import { useIntl } from "../../../vendor/react-intl";
import {
  trackArtifactAnnotationStarted,
  trackArtifactAnnotationSubmitted,
} from "../../artifact-analytics";

import {
  anchorFromPointerDrag,
  computeDocxAskForEditPosition,
  pagePointFromPointerEvent,
  pointerDragMoved,
  type PointerDragState,
} from "./annotation-geometry";
import {
  createDocxAnnotationMetadata,
  describeDocxAnnotationAnchor,
  docxCommentKey,
} from "./annotation-metadata";
import type {
  DocxAnnotationAnchor,
  DocxAnnotationComment,
  DocxRegionAnchor,
} from "./annotation-types";
import { createDocxArtifactAnnotationComment } from "./docx-artifact-comment";
import { DocxAnnotationEditorOverlay } from "./docx-annotation-editor-overlay";
import { DocxPageAnnotationLayerContent } from "./docx-page-annotation-layer-content";
import {
  docxPageAnnotationComments,
  findDocxCommentByKey,
  isDocxElementAnnotationSelectionKind,
  resolveDocxAnnotationSessionState,
} from "./docx-annotation-state";
import {
  readDocxElementAnnotationAnchorAtPoint,
  readDocxTextSelectionAnchor,
} from "./dom-selection";

export type DocxAnnotationStartSource =
  | "annotation_mode_pointer"
  | "ask_codex_button"
  | "ask_codex_shortcut";

export interface DocxPageAnnotationLayerProps {
  comments: readonly DocxAnnotationComment[];
  conversationId: string;
  hostMessageBridge: DocxAnnotationHostMessageBridge;
  isCommentMode: boolean;
  nextCommentNumber: number;
  onCommentsChange: (
    updater: (comments: DocxAnnotationComment[]) => DocxAnnotationComment[],
  ) => void;
  onTouchCancel?: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchEnd?: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchMove?: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchStart?: (event: TouchEvent<HTMLDivElement>) => void;
  onWheel?: (event: WheelEvent<HTMLDivElement>) => void;
  pageCount: number;
  pageNumber: number;
  pageSize: Size;
  path: string;
  productLoggerScope: ProductLoggerScope;
  tabId: string;
  threadId?: string | null;
  title: string;
  zoomScale?: number;
}

export type ProductLoggerScope = Parameters<
  typeof trackArtifactAnnotationStarted
>[0];

export interface ArtifactDirectCommentMessage {
  type: "artifact-direct-comment";
  body: string;
  comment: DocxAnnotationComment;
  conversationId: string;
  sessionId: string;
}

export interface DocxAnnotationHostMessageBridge {
  dispatchHostMessage(message: ArtifactDirectCommentMessage): void;
}

const editorLightDismissNoop = () => {};

export function DocxPageAnnotationLayer({
  comments,
  conversationId,
  hostMessageBridge,
  isCommentMode,
  nextCommentNumber,
  onCommentsChange,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  onWheel,
  pageCount,
  pageNumber,
  pageSize,
  path,
  productLoggerScope,
  tabId,
  threadId,
  title,
  zoomScale = 1,
}: DocxPageAnnotationLayerProps): ReactElement {
  const intl = useIntl();
  const [layerElement, setLayerElement] = useState<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const suppressNextLayerClickRef = useRef(false);
  const [draftAnchor, setDraftAnchor] = useState<DocxAnnotationAnchor | null>(
    null,
  );
  const [draftPageSize, setDraftPageSize] = useState<Size | null>(null);
  const [askForEditAnchor, setAskForEditAnchor] =
    useState<DocxRegionAnchor | null>(null);
  const [hoverAnchor, setHoverAnchor] = useState<DocxRegionAnchor | null>(null);
  const [draftBody, setDraftBody] = useState("");
  const [pointerDragState, setPointerDragState] =
    useState<PointerDragState | null>(null);
  const [editingCommentKey, setEditingCommentKey] = useState<string | null>(
    null,
  );
  const [previewCommentKey, setPreviewCommentKey] = useState<string | null>(
    null,
  );
  const [directSubmitConfirmed, setDirectSubmitConfirmed] = useState(false);

  const editorScale = 1 / (Math.max(zoomScale, Number.EPSILON) / 0.9);
  const pageComments = docxPageAnnotationComments({
    comments,
    pageNumber,
    path,
  });
  const previewComment = findDocxCommentByKey(pageComments, previewCommentKey);
  const {
    activeAnchor,
    pageSize: activePageSize,
    session,
  } = resolveDocxAnnotationSessionState({
    comments: pageComments,
    conversationId,
    draftAnchor,
    draftBody,
    draftPageSize,
    editingCommentKey,
    pageNumber,
    pageSize,
    path,
    title,
  });
  const editorPosition =
    activeAnchor == null
      ? null
      : computeDocxAskForEditPosition({
          anchor: activeAnchor,
          editorScale,
          layer: layerElement,
          pageSize: activePageSize,
        });
  const hasActiveAnnotationSession = activeAnchor != null;

  const inputAriaLabel = intl.formatMessage({
    id: "artifactDocxPreview.commentInput",
    defaultMessage: "Document annotation comment",
    description: "Aria label for the DOCX annotation comment input",
  });
  const placeholder = intl.formatMessage({
    id: "artifactAnnotationComment.placeholder",
    defaultMessage: "Describe a change or ask a question",
    description: "Placeholder text for an artifact annotation comment editor",
  });
  const askForEditLabel = intl.formatMessage({
    id: "artifactDocxPreview.askCodex",
    defaultMessage: "Ask Codex",
    description:
      "Button label for starting a contextual DOCX annotation from the selected document element",
  });

  const clearAnnotationSession = () => {
    setDraftAnchor(null);
    setDraftPageSize(null);
    setAskForEditAnchor(null);
    setHoverAnchor(null);
    setDraftBody("");
    setEditingCommentKey(null);
    setDirectSubmitConfirmed(false);
  };
  const handleDraftBodyChange = (body: string) => {
    setDraftBody(body);
    setDirectSubmitConfirmed(false);
  };
  const shakeEditor = () => {
    if (typeof window === "undefined") return;
    applyBrowserCommentPopupShake({
      animationFrameRef,
      animationWindow: window,
      editorWrapper: editorRef.current,
    });
  };

  const handleEditorCancel = () => {
    if (session == null) return false;
    if (session.target.mode === "create" && draftBody.trim().length > 0) {
      if (directSubmitConfirmed) {
        clearAnnotationSession();
        return true;
      }
      setDirectSubmitConfirmed(true);
      shakeEditor();
      return false;
    }
    clearAnnotationSession();
    return true;
  };

  const repositionEditor = useEffectEvent(() => {
    if (activeAnchor == null) return;
    const nextPosition = computeDocxAskForEditPosition({
      anchor: activeAnchor,
      editorScale,
      layer: layerElement,
      pageSize: activePageSize,
    });
    if (nextPosition != null) {
      applyAbsolutePosition(editorRef.current, nextPosition);
    }
  });

  useEffect(() => {
    if (!hasActiveAnnotationSession || layerElement == null) return;
    const ownerDocument = layerElement.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    const reposition = () => {
      repositionEditor();
    };
    ownerDocument.addEventListener("scroll", reposition, { capture: true });
    ownerWindow?.addEventListener("resize", reposition);
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(reposition);
    resizeObserver?.observe(layerElement);
    reposition();
    return () => {
      ownerDocument.removeEventListener("scroll", reposition, {
        capture: true,
      });
      ownerWindow?.removeEventListener("resize", reposition);
      resizeObserver?.disconnect();
    };
  }, [
    activePageSize.height,
    activePageSize.width,
    editorScale,
    hasActiveAnnotationSession,
    layerElement,
  ]);

  const handleDocumentPointerDown = useEffectEvent(
    (event: globalThis.PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && editorRef.current?.contains(target)) return;
      event.preventDefault();
      event.stopPropagation();
      if (handleEditorCancel()) {
        const ownerDocument =
          target instanceof Node
            ? target.ownerDocument
            : layerElement?.ownerDocument;
        ownerDocument?.getSelection()?.removeAllRanges();
      }
    },
  );

  useEffect(() => {
    if (
      isCommentMode ||
      session?.target.mode !== "create" ||
      layerElement == null
    ) {
      return;
    }
    const ownerDocument = layerElement.ownerDocument;
    const pointerDown = (event: globalThis.PointerEvent) => {
      handleDocumentPointerDown(event);
    };
    ownerDocument.addEventListener("pointerdown", pointerDown, {
      capture: true,
    });
    return () => {
      ownerDocument.removeEventListener("pointerdown", pointerDown, {
        capture: true,
      });
    };
  }, [isCommentMode, layerElement, session?.target.mode]);

  const syncTextSelectionAnchor = useEffectEvent(() => {
    if (isCommentMode || layerElement == null) return;
    const pageElement = layerElement.parentElement;
    if (pageElement == null) return;
    const selectionAnchor = readDocxTextSelectionAnchor({
      pageElement,
      pageSize,
    });
    if (selectionAnchor == null) {
      setAskForEditAnchor(null);
      return;
    }
    if (
      (draftAnchor != null || editingCommentKey != null) &&
      !handleEditorCancel()
    ) {
      return;
    }
    setAskForEditAnchor(asRegionAnchor(selectionAnchor));
    setDraftAnchor(null);
    setDraftPageSize(null);
    setDraftBody("");
    setEditingCommentKey(null);
    setPreviewCommentKey(null);
    setDirectSubmitConfirmed(false);
  });

  useEffect(() => {
    if (layerElement == null || isCommentMode) return;
    const pageElement = layerElement.parentElement;
    if (pageElement == null) return;
    const updateSelection = () => {
      syncTextSelectionAnchor();
    };
    pageElement.addEventListener("mouseup", updateSelection);
    pageElement.addEventListener("keyup", updateSelection);
    return () => {
      pageElement.removeEventListener("mouseup", updateSelection);
      pageElement.removeEventListener("keyup", updateSelection);
    };
  }, [isCommentMode, layerElement]);

  const handlePageClickOutsideLayer = useEffectEvent((event: MouseEvent) => {
    if (isCommentMode || layerElement == null || event.defaultPrevented) {
      return;
    }
    const target = event.target;
    if (target instanceof Node && layerElement.contains(target)) return;
    const pageElement = layerElement.parentElement;
    if (pageElement == null) return;
    const elementAnchor = readDocxElementAnnotationAnchorAtPoint({
      clientX: event.clientX,
      clientY: event.clientY,
      includePreviewMetadata: true,
      layerElement,
      pageElement,
      pageSize,
      selectionKindFilter: isDocxElementAnnotationSelectionKind,
    });
    const regionAnchor = asRegionAnchor(elementAnchor);
    if (regionAnchor == null) return;
    event.preventDefault();
    event.stopPropagation();
    if (
      (draftAnchor != null || editingCommentKey != null) &&
      !handleEditorCancel()
    ) {
      return;
    }
    pageElement.ownerDocument.getSelection()?.removeAllRanges();
    setAskForEditAnchor(regionAnchor);
    setDraftAnchor(null);
    setDraftPageSize(null);
    setDraftBody("");
    setEditingCommentKey(null);
    setPreviewCommentKey(null);
    setDirectSubmitConfirmed(false);
  });

  useEffect(() => {
    if (layerElement == null || isCommentMode) return;
    const pageElement = layerElement.parentElement;
    if (pageElement == null) return;
    const handleClick = (event: MouseEvent) => {
      handlePageClickOutsideLayer(event);
    };
    pageElement.addEventListener("click", handleClick);
    return () => {
      pageElement.removeEventListener("click", handleClick);
    };
  }, [isCommentMode, layerElement]);

  const readElementAnchorAtPoint = (
    clientX: number,
    clientY: number,
    includePreviewMetadata: boolean,
  ): DocxRegionAnchor | null => {
    if (!isCommentMode || layerElement == null) return null;
    const pageElement = layerElement.parentElement;
    if (pageElement == null) return null;
    return asRegionAnchor(
      readDocxElementAnnotationAnchorAtPoint({
        clientX,
        clientY,
        includePreviewMetadata,
        layerElement,
        pageElement,
        pageSize,
      }),
    );
  };

  const startAnnotationSession = (
    anchor: DocxAnnotationAnchor,
    startSource: DocxAnnotationStartSource,
  ) => {
    trackArtifactAnnotationStarted(
      productLoggerScope,
      {
        artifactTabId: tabId,
        artifactType: "document",
        importKind: "docx",
        threadId,
      },
      { annotationModeEnabled: isCommentMode, startSource },
    );
    setDraftAnchor(anchor);
    setDraftPageSize(pageSize);
    setAskForEditAnchor(null);
    setHoverAnchor(null);
    setDraftBody("");
    setEditingCommentKey(null);
    setPreviewCommentKey(null);
    setDirectSubmitConfirmed(false);
  };

  const handleAskForEditShortcut = useEffectEvent(
    (event: KeyboardEvent, pageElement: HTMLElement) => {
      if (
        draftAnchor != null ||
        editingCommentKey != null ||
        !isToggleImageCommentShortcut(event)
      ) {
        return;
      }
      const selectedAnchor =
        readDocxTextSelectionAnchor({ pageElement, pageSize }) ??
        (askForEditAnchor?.selectionKind === "text" ? null : askForEditAnchor);
      if (selectedAnchor != null) {
        event.preventDefault();
        event.stopPropagation();
        startAnnotationSession(selectedAnchor, "ask_codex_shortcut");
      }
    },
  );

  useEffect(() => {
    if (layerElement == null || isCommentMode) return;
    const pageElement = layerElement.parentElement;
    if (pageElement == null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      handleAskForEditShortcut(event, pageElement);
    };
    pageElement.ownerDocument.addEventListener("keydown", handleKeyDown, {
      capture: true,
    });
    return () => {
      pageElement.ownerDocument.removeEventListener("keydown", handleKeyDown, {
        capture: true,
      });
    };
  }, [isCommentMode, layerElement]);

  const startAnnotationSessionUnlessBlocked = (
    anchor: DocxAnnotationAnchor,
  ) => {
    if (
      (draftAnchor != null || editingCommentKey != null) &&
      !handleEditorCancel()
    ) {
      return;
    }
    startAnnotationSession(anchor, "annotation_mode_pointer");
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      !isCommentMode ||
      !event.isPrimary ||
      event.pointerType === "touch" ||
      event.button !== 0
    ) {
      return;
    }
    const pointerPagePoint = pagePointFromPointerEvent(event, pageSize);
    if (pointerPagePoint == null) return;
    suppressNextLayerClickRef.current = false;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    setAskForEditAnchor(null);
    setHoverAnchor(null);
    setPreviewCommentKey(null);
    setPointerDragState({
      pointerId: event.pointerId,
      start: pointerPagePoint,
      current: pointerPagePoint,
      clientStart: { x: event.clientX, y: event.clientY },
      clientCurrent: { x: event.clientX, y: event.clientY },
    });
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerDragState == null) {
      if (draftAnchor != null || editingCommentKey != null) {
        setHoverAnchor(null);
        return;
      }
      setHoverAnchor(
        readElementAnchorAtPoint(event.clientX, event.clientY, false),
      );
      return;
    }
    if (event.pointerId !== pointerDragState.pointerId) return;
    const pointerPagePoint = pagePointFromPointerEvent(event, pageSize);
    if (pointerPagePoint == null) return;
    event.preventDefault();
    event.stopPropagation();
    setPointerDragState((currentState) =>
      currentState == null || currentState.pointerId !== event.pointerId
        ? currentState
        : {
            ...currentState,
            current: pointerPagePoint,
            clientCurrent: { x: event.clientX, y: event.clientY },
          },
    );
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      pointerDragState == null ||
      event.pointerId !== pointerDragState.pointerId
    ) {
      return;
    }
    const pointerPagePoint =
      pagePointFromPointerEvent(event, pageSize) ?? pointerDragState.current;
    event.preventDefault();
    event.stopPropagation();
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    const nextDragState = {
      ...pointerDragState,
      current: pointerPagePoint,
      clientCurrent: { x: event.clientX, y: event.clientY },
    };
    const moved = pointerDragMoved(nextDragState);
    const dragAnchor = anchorFromPointerDrag(nextDragState, moved);
    suppressNextLayerClickRef.current = moved;
    if (!moved) {
      const elementAnchor = readElementAnchorAtPoint(
        event.clientX,
        event.clientY,
        true,
      );
      if (elementAnchor != null) {
        suppressNextLayerClickRef.current = true;
        setPointerDragState(null);
        startAnnotationSessionUnlessBlocked(elementAnchor);
        return;
      }
    }
    if (draftAnchor != null && dragAnchor.kind === "point") {
      handleEditorCancel();
      setPointerDragState(null);
      return;
    }
    startAnnotationSession(dragAnchor, "annotation_mode_pointer");
    setPointerDragState(null);
  };

  const handleLayerClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (suppressNextLayerClickRef.current) {
      suppressNextLayerClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const elementAnchor = readElementAnchorAtPoint(
      event.clientX,
      event.clientY,
      true,
    );
    if (elementAnchor != null) {
      event.preventDefault();
      event.stopPropagation();
      startAnnotationSessionUnlessBlocked(elementAnchor);
    }
  };

  const submitComment = (
    payload: SubmitPayload,
    options: { submitDirectly?: boolean } = {},
  ) => {
    const submitDirectly = options.submitDirectly ?? false;
    const body = payload.body.trim();
    if (editingCommentKey != null) {
      if (body.length === 0) return;
      onCommentsChange((currentComments) =>
        currentComments.map((comment) =>
          docxCommentKey(comment) === editingCommentKey
            ? { ...comment, content: [{ content_type: "text", text: body }] }
            : comment,
        ),
      );
      clearAnnotationSession();
      return;
    }
    if (draftAnchor == null || body.length === 0) return;
    const metadata = createDocxAnnotationMetadata({
      anchor: draftAnchor,
      pageCount,
      pageNumber,
      pageSize: draftPageSize ?? pageSize,
    });
    const comment = createDocxArtifactAnnotationComment({
      artifactKind: "document",
      body,
      label: describeDocxAnnotationAnchor(draftAnchor, pageNumber),
      line: nextCommentNumber,
      metadata,
      path,
      title,
    });
    trackArtifactAnnotationSubmitted(
      productLoggerScope,
      {
        artifactTabId: tabId,
        artifactType: "document",
        importKind: "docx",
        threadId,
      },
      {
        annotationModeEnabled: isCommentMode,
        annotationTargetKind: metadata.target?.type ?? null,
        submitMode: submitDirectly ? "direct" : "saved",
        submitSource: payload.submitSource,
      },
    );
    if (submitDirectly) {
      hostMessageBridge.dispatchHostMessage({
        type: "artifact-direct-comment",
        body,
        comment,
        conversationId,
        sessionId: crypto.randomUUID(),
      } satisfies ArtifactDirectCommentMessage);
    } else {
      onCommentsChange((currentComments) => [...currentComments, comment]);
    }
    clearAnnotationSession();
  };

  const handlePointerCancel = () => {
    setPointerDragState(null);
    setHoverAnchor(null);
  };
  const handlePointerLeave = () => {
    setHoverAnchor(null);
  };
  const handleEditComment = (commentKey: string) => {
    setDraftAnchor(null);
    setDraftPageSize(null);
    setDraftBody("");
    setDirectSubmitConfirmed(false);
    setPreviewCommentKey(null);
    setHoverAnchor(null);
    setEditingCommentKey(commentKey);
  };

  return (
    <div
      ref={setLayerElement}
      className={clsx(
        "absolute inset-0 z-[3]",
        isCommentMode ? "pointer-events-auto" : "pointer-events-none",
      )}
      data-testid="artifact-docx-comment-layer"
      style={
        isCommentMode ? { cursor: ANNOTATION_CROSSHAIR_CURSOR } : undefined
      }
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerLeave}
      onClick={handleLayerClick}
      onTouchCancel={onTouchCancel}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      onWheel={onWheel}
    >
      <DocxPageAnnotationLayerContent
        askForEditAnchor={askForEditAnchor}
        askForEditLabel={askForEditLabel}
        comments={pageComments}
        draftAnchor={draftAnchor}
        draftPageSize={draftPageSize}
        editingCommentKey={editingCommentKey}
        editorOverlay={
          <DocxAnnotationEditorOverlay
            editorRef={editorRef}
            inputAriaLabel={inputAriaLabel}
            placeholder={placeholder}
            position={editorPosition}
            scale={editorScale}
            session={session}
            windowHeight={FONT_FAMILY}
            onBodyChange={
              session?.target.mode === "create"
                ? handleDraftBodyChange
                : undefined
            }
            onCancel={clearAnnotationSession}
            onCommentsChange={onCommentsChange}
            onDirectSubmit={(payload) => {
              submitComment(payload, { submitDirectly: true });
            }}
            onLightDismissibilityChange={editorLightDismissNoop}
            onMounted={editorLightDismissNoop}
            onSubmit={submitComment}
            onTouchCancel={onTouchCancel}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            onTouchStart={onTouchStart}
            onWheel={onWheel}
          />
        }
        hoverAnchor={hoverAnchor}
        layerElement={layerElement}
        nextCommentNumber={nextCommentNumber}
        pageSize={pageSize}
        pointerDragState={pointerDragState}
        previewComment={previewComment}
        zoomScale={zoomScale}
        onAskForEdit={(anchor) => {
          startAnnotationSession(anchor, "ask_codex_button");
        }}
        onEditComment={handleEditComment}
        onPreviewCommentChange={setPreviewCommentKey}
      />
    </div>
  );
}

function asRegionAnchor(
  anchor: DocxAnnotationAnchor | null,
): DocxRegionAnchor | null {
  return anchor?.kind === "region" ? anchor : null;
}
