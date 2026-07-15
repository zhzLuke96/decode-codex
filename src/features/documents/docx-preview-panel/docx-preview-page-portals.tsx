// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type { ReactNode, TouchEventHandler, WheelEventHandler } from "react";
import { createPortal } from "react-dom";

import type { DocxAnnotationComment } from "./annotation-types";
import {
  DocxPageAnnotationLayer,
  type DocxAnnotationHostMessageBridge,
  type ProductLoggerScope,
} from "./docx-page-annotation-layer";
import type { DocxPreviewCommentsChangeHandler } from "./docx-preview-panel-types";
import { measureDocxPage } from "./docx-preview-rendering";

export interface DocxPreviewPageAnnotationPortalsProps {
  comments: readonly DocxAnnotationComment[];
  conversationId: string;
  disableAnnotations: boolean;
  hostMessageBridge: DocxAnnotationHostMessageBridge;
  isReady: boolean;
  nextCommentNumber: number;
  onCommentsChange: DocxPreviewCommentsChangeHandler;
  onTouchCancel: TouchEventHandler<HTMLDivElement>;
  onTouchEnd: TouchEventHandler<HTMLDivElement>;
  onTouchMove: TouchEventHandler<HTMLDivElement>;
  onTouchStart: TouchEventHandler<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLDivElement>;
  pageElements: readonly HTMLElement[];
  path: string;
  productLoggerScope: ProductLoggerScope;
  tabId: string;
  threadId?: string | null;
  title: string;
  totalPages: number;
  zoomPercent: number;
}

export function DocxPreviewPageAnnotationPortals({
  comments,
  conversationId,
  disableAnnotations,
  hostMessageBridge,
  isReady,
  nextCommentNumber,
  onCommentsChange,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  onWheel,
  pageElements,
  path,
  productLoggerScope,
  tabId,
  threadId,
  title,
  totalPages,
  zoomPercent,
}: DocxPreviewPageAnnotationPortalsProps): ReactNode {
  if (!isReady || disableAnnotations) return null;

  return pageElements.map((pageElement, pageIndex) => {
    const pageNumber = pageIndex + 1;

    return createPortal(
      <DocxPageAnnotationLayer
        comments={comments}
        conversationId={conversationId}
        hostMessageBridge={hostMessageBridge}
        isCommentMode={false}
        nextCommentNumber={nextCommentNumber}
        onCommentsChange={onCommentsChange}
        onTouchCancel={onTouchCancel}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        onWheel={onWheel}
        pageCount={totalPages}
        pageNumber={pageNumber}
        pageSize={measureDocxPage(pageElement, zoomPercent)}
        path={path}
        productLoggerScope={productLoggerScope}
        tabId={tabId}
        threadId={threadId}
        title={title}
        zoomScale={zoomPercent / 100}
      />,
      pageElement,
      `${path}:${pageNumber}:browse`,
    );
  });
}
