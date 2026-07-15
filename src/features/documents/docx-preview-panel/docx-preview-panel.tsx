// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import React, { type ReactElement } from "react";

import { ArtifactPreviewStatus } from "../../../utils/artifact-preview-status";
import { composeRefs } from "../../../utils/compose-refs";

import {
  docxPreviewCommentsForPath,
  nextDocxPreviewCommentLine,
  removeDocxPreviewCommentsForPath,
} from "./docx-preview-comment-state";
import { DocxPreviewBody, DocxPreviewStyleMount } from "./docx-preview-body";
import {
  useDocxPageNavigation,
  useDocxPreviewRenderState,
  useDocxPreviewZoom,
} from "./docx-preview-hooks";
import type {
  DocxPreviewChromeMode,
  DocxPreviewPanelProps,
} from "./docx-preview-panel-types";
import { DocxPreviewPageAnnotationPortals } from "./docx-preview-page-portals";
import { DocxPreviewToolbar } from "./docx-preview-toolbar";

export function DocxPreviewPanel({
  bytes,
  chromeMode = "default",
  commentSource,
  conversationId,
  disableAnnotations = false,
  disableFileActions = false,
  hostId,
  hostMessageBridge,
  onBeforeOpen,
  onCommentsChange,
  pageNavigationZoomScale,
  path,
  productLoggerScope,
  ref,
  renderAsync,
  runtimeComponents,
  styleText,
  tabId,
  threadId,
  title,
  zoomTools,
}: DocxPreviewPanelProps): ReactElement {
  const {
    bodyContainerElementRef,
    cancelPageScroll,
    flushPendingPageScroll,
    navigateToPage,
  } = useDocxPageNavigation({ zoomScale: pageNavigationZoomScale });
  const {
    bodyContainerElementRef: renderedBodyContainerElementRef,
    bodyContainerRef,
    loadState,
    pageElements,
    styleContainerRef,
    totalPages,
  } = useDocxPreviewRenderState({
    bodyContainerElementRef,
    bytes,
    onPagesRendered: flushPendingPageScroll,
    renderAsync,
    styleText,
  });
  const comments = React.useMemo(
    () => docxPreviewCommentsForPath(commentSource, path),
    [commentSource, path],
  );
  const nextCommentNumber = React.useMemo(
    () => nextDocxPreviewCommentLine(comments),
    [comments],
  );
  const zoomState = useDocxPreviewZoom({
    bodyContainerElementRef: renderedBodyContainerElementRef,
    computePinchZoomPercent: zoomTools.computePinchZoomPercent,
    computeWheelZoomPercent: zoomTools.computeWheelZoomPercent,
    measureTouchDistance: zoomTools.measureTouchDistance,
    normalizeZoomPercent: zoomTools.normalizeZoomPercent,
    useResizeObserverRef: zoomTools.useResizeObserverRef,
  });
  const isReady = loadState === "ready";

  React.useImperativeHandle(
    ref,
    () => ({
      navigateToPage,
    }),
    [navigateToPage],
  );

  React.useEffect(() => {
    return () => {
      cancelPageScroll();
      onCommentsChange((currentComments) =>
        removeDocxPreviewCommentsForPath(currentComments, path),
      );
    };
  }, [cancelPageScroll, onCommentsChange, path]);

  const mergedBodyContainerRef = React.useMemo(
    () => composeRefs(bodyContainerRef, zoomState.resizeRef),
    [bodyContainerRef, zoomState.resizeRef],
  );

  return (
    <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
      <DocxPreviewStyleMount styleContainerRef={styleContainerRef} />
      <DocxPreviewToolbar
        chromeMode={chromeMode as DocxPreviewChromeMode}
        disableFileActions={disableFileActions}
        hostId={hostId}
        isReady={isReady}
        onBeforeOpen={onBeforeOpen}
        path={path}
        runtimeComponents={runtimeComponents}
        title={title}
        zoomOptions={zoomTools.zoomOptions}
        zoomState={zoomState}
      />
      <DocxPreviewBody
        bodyContainerRef={mergedBodyContainerRef}
        isReady={isReady}
        onTouchCancel={zoomState.handleTouchCancel}
        onTouchEnd={zoomState.handleTouchEnd}
        onTouchMove={zoomState.handleTouchMove}
        onTouchStart={zoomState.handleTouchStart}
        onWheel={zoomState.handleWheel}
        previewStyle={zoomState.previewStyle}
        title={title}
      />
      <DocxPreviewPageAnnotationPortals
        comments={comments}
        conversationId={conversationId}
        disableAnnotations={disableAnnotations}
        hostMessageBridge={hostMessageBridge}
        isReady={isReady}
        nextCommentNumber={nextCommentNumber}
        onCommentsChange={onCommentsChange}
        onTouchCancel={zoomState.handleTouchCancel}
        onTouchEnd={zoomState.handleTouchEnd}
        onTouchMove={zoomState.handleTouchMove}
        onTouchStart={zoomState.handleTouchStart}
        onWheel={zoomState.handleWheel}
        pageElements={pageElements}
        path={path}
        productLoggerScope={productLoggerScope}
        tabId={tabId}
        threadId={threadId}
        title={title}
        totalPages={totalPages}
        zoomPercent={zoomState.zoomPercent}
      />
      {ArtifactPreviewStatus(loadState)}
    </section>
  );
}
