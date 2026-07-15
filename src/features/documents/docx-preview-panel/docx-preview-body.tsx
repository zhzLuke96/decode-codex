// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type {
  CSSProperties,
  ReactElement,
  RefCallback,
  TouchEventHandler,
  WheelEventHandler,
} from "react";

import { DOCX_PREVIEW_SCROLL_CLASS } from "./docx-preview-rendering";
import type { DocxPreviewStyleMountProps } from "./docx-preview-panel-types";

export interface DocxPreviewBodyProps {
  bodyContainerRef: RefCallback<HTMLElement>;
  isReady: boolean;
  onTouchCancel: TouchEventHandler<HTMLElement>;
  onTouchEnd: TouchEventHandler<HTMLElement>;
  onTouchMove: TouchEventHandler<HTMLElement>;
  onTouchStart: TouchEventHandler<HTMLElement>;
  onWheel: WheelEventHandler<HTMLElement>;
  previewStyle: CSSProperties & {
    "--codex-docx-preview-zoom": string;
  };
  title: string;
}

export function DocxPreviewStyleMount({
  styleContainerRef,
}: DocxPreviewStyleMountProps): ReactElement {
  return <div ref={styleContainerRef} aria-hidden={true} className="hidden" />;
}

export function DocxPreviewBody({
  bodyContainerRef,
  isReady,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  onWheel,
  previewStyle,
  title,
}: DocxPreviewBodyProps): ReactElement {
  return (
    <div
      ref={bodyContainerRef}
      aria-label={title}
      className={isReady ? DOCX_PREVIEW_SCROLL_CLASS : "hidden"}
      data-testid="docx-preview-panel"
      onTouchCancel={onTouchCancel}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      onWheel={onWheel}
      style={previewStyle}
    />
  );
}
