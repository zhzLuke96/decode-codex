// Restored from ref/webview/assets/dialog-layout-BUsOXjxz.js
// High-level Codex dialog layout wrapper.

import React, {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import clsx from "clsx";
import { XIcon } from "../../icons/x-icon";
import { dismissTooltips } from "../../utils/tooltip-dismiss";
import { useWindowZoom } from "../../utils/window-zoom-context";
import {
  DIALOG_CONTENT_CLASS,
  DIALOG_OVERLAY_CLASS_NAME,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from "./primitives";
type DialogSize =
  | "narrow"
  | "feature"
  | "compact"
  | "wide"
  | "xwide"
  | "xxwide"
  | "editor"
  | "default";
type DialogContentProps = ComponentPropsWithoutRef<typeof DialogContent>;
type DialogRootProps = ComponentPropsWithoutRef<typeof DialogRoot>;
type DialogLayoutProps = DialogRootProps & {
  children?: ReactNode;
  contentClassName?: string;
  contentProps?: DialogContentProps;
  dialogCloseClassName?: string;
  dialogCloseLabel?: string;
  overlayClassName?: string;
  portalContainer?: HTMLElement | null;
  shouldIgnoreClickOutside?: boolean;
  showDialogClose?: boolean;
  size?: DialogSize;
  triggerAsChild?: boolean;
  triggerContent?: ReactNode;
  triggerRef?: Ref<HTMLButtonElement>;
  unstyledContent?: boolean;
  viewportSized?: boolean;
};
function DialogLayout({
  children,
  triggerContent,
  triggerAsChild = true,
  triggerRef,
  contentClassName,
  contentProps,
  dialogCloseClassName,
  dialogCloseLabel,
  overlayClassName,
  portalContainer,
  showDialogClose = true,
  shouldIgnoreClickOutside = false,
  unstyledContent = false,
  viewportSized = false,
  size = "default",
  onOpenChange,
  ...rootProps
}: DialogLayoutProps) {
  const handleOpenChange = (open: boolean) => {
    if (open) dismissTooltips();
    onOpenChange?.(open);
  };
  return (
    <DialogRoot {...rootProps} onOpenChange={handleOpenChange}>
      {triggerContent ? (
        <DialogTrigger ref={triggerRef} asChild={triggerAsChild}>
          {triggerContent}
        </DialogTrigger>
      ) : null}
      <DialogLayoutContent
        contentClassName={contentClassName}
        dialogCloseClassName={dialogCloseClassName}
        dialogCloseLabel={dialogCloseLabel}
        overlayClassName={overlayClassName}
        portalContainer={portalContainer}
        showDialogClose={showDialogClose}
        shouldIgnoreClickOutside={shouldIgnoreClickOutside}
        unstyledContent={unstyledContent}
        viewportSized={viewportSized}
        size={size}
        {...contentProps}
      >
        {children}
      </DialogLayoutContent>
    </DialogRoot>
  );
}
function DialogLayoutContent({
  children,
  contentClassName,
  dialogCloseClassName,
  dialogCloseLabel,
  overlayClassName,
  portalContainer,
  showDialogClose = true,
  shouldIgnoreClickOutside = false,
  unstyledContent = false,
  viewportSized = false,
  size = "default",
  className,
  onPointerDown,
  onPointerDownOutside,
  style,
  ...contentProps
}: DialogContentProps & Omit<DialogLayoutProps, keyof DialogRootProps>) {
  const zoom = useWindowZoom();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const measuredContentRef = React.useRef<HTMLDivElement>(null);
  const hasExplicitHeight =
    style?.height != null ||
    /\bh-(?!auto\b)[^\s]+/.test(contentClassName ?? "") ||
    /\bh-(?!auto\b)[^\s]+/.test(className ?? "");
  const shouldMeasureHeight =
    !unstyledContent && size !== "editor" && !hasExplicitHeight;
  React.useLayoutEffect(() => {
    if (!shouldMeasureHeight || typeof ResizeObserver > "u") return;
    const contentElement = contentRef.current;
    const measuredElement = measuredContentRef.current;
    if (!contentElement || !measuredElement) return;
    let frameId: number | null = null;
    let readyFrameId: number | null = null;
    let lastHeight = -1;
    let ready = false;
    const setHeight = (height: number) => {
      if (!Number.isFinite(height) || Math.abs(height - lastHeight) < 0.5) {
        return;
      }
      lastHeight = height;
      contentElement.style.setProperty(
        "--dialog-content-height",
        `${height}px`,
      );
      contentElement.style.height = "var(--dialog-content-height)";
      if (!ready) {
        if (readyFrameId != null) cancelAnimationFrame(readyFrameId);
        readyFrameId = requestAnimationFrame(() => {
          ready = true;
          contentElement.dataset.dialogHeightReady = "true";
        });
      }
    };
    const measure = () =>
      setHeight(measuredElement.offsetHeight || measuredElement.scrollHeight);
    const scheduleMeasure = () => {
      frameId ??= requestAnimationFrame(() => {
        frameId = null;
        measure();
      });
    };
    scheduleMeasure();
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(measuredElement);
    return () => {
      observer.disconnect();
      if (frameId != null) cancelAnimationFrame(frameId);
      if (readyFrameId != null) cancelAnimationFrame(readyFrameId);
      contentElement.style.removeProperty("--dialog-content-height");
      contentElement.style.height = "";
      delete contentElement.dataset.dialogHeightReady;
    };
  }, [shouldMeasureHeight]);
  const zoomStyle =
    portalContainer == null && zoom !== 1
      ? ({
          zoom,
        } as CSSProperties)
      : {};
  const viewportStyle =
    viewportSized && portalContainer == null
      ? {
          height: `calc(100dvh / ${zoom})`,
          width: `calc(100vw / ${zoom})`,
        }
      : {};
  const contentStyle = {
    ...zoomStyle,
    ...viewportStyle,
    ...style,
  };
  const content = shouldMeasureHeight ? (
    <div ref={measuredContentRef}>{children}</div>
  ) : (
    children
  );
  return (
    <DialogPortal container={portalContainer ?? undefined}>
      <DialogOverlay
        className={clsx(DIALOG_OVERLAY_CLASS_NAME, overlayClassName)}
      />
      <DialogContent
        ref={contentRef}
        className={clsx(
          "codex-dialog left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none",
          DIALOG_CONTENT_CLASS,
          portalContainer == null ? "fixed" : "absolute",
          !unstyledContent &&
            "bg-token-dropdown-background/90 text-token-foreground ring-token-border max-w-[92vw] overflow-hidden rounded-3xl ring-[0.5px] ring-token-border shadow-lg backdrop-blur-xl",
          !unstyledContent && getDialogSizeClass(size),
          shouldMeasureHeight &&
            "data-[dialog-height-ready=true]:transition-[height] data-[dialog-height-ready=true]:duration-200 data-[dialog-height-ready=true]:ease-out",
          contentClassName,
          className,
        )}
        style={contentStyle}
        onPointerDownOutside={(event) => {
          if (shouldIgnoreClickOutside) event.preventDefault();
          onPointerDownOutside?.(event);
        }}
        onPointerDown={(event) => {
          event.stopPropagation();
          onPointerDown?.(event);
        }}
        {...contentProps}
      >
        {content}
        {showDialogClose ? (
          <DialogClose
            className={clsx(
              "no-drag absolute top-4 right-4 cursor-interaction rounded p-1 leading-none text-token-foreground/80 hover:bg-token-toolbar-hover-background focus:ring-1 focus:ring-token-focus-border focus:outline-none",
              dialogCloseClassName,
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <XIcon aria-hidden className="icon-xs" />
            {dialogCloseLabel ? (
              <span className="sr-only">{dialogCloseLabel}</span>
            ) : null}
          </DialogClose>
        ) : null}
      </DialogContent>
    </DialogPortal>
  );
}
function getDialogSizeClass(size: DialogSize): string {
  return size === "narrow"
    ? "w-[380px]"
    : size === "feature"
      ? "w-[400px]"
      : size === "compact"
        ? "w-[420px]"
        : size === "wide"
          ? "w-[600px]"
          : size === "xwide"
            ? "w-[680px]"
            : size === "xxwide"
              ? "w-[800px]"
              : size === "editor"
                ? "w-[600px] h-[720px] max-w-full max-h-full"
                : "w-[520px]";
}
export { DialogLayout };
