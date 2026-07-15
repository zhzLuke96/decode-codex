// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Image preview lightbox shared by message attachments, appshots, and generated images.
import {
  useEffect,
  useState,
  type ImgHTMLAttributes,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { ArrowRightIcon } from "../icons/arrow-right-icon";
import { DownloadIcon } from "../icons/download-icon";
import { XIcon } from "../icons/x-icon";

export interface ImagePreviewToolbarAction {
  active?: boolean;
  ariaLabel: string;
  label: ReactNode;
  onClick: () => void;
}

export interface ImagePreviewLightboxProps {
  alt: string;
  closeAriaLabel?: string;
  disableOpenAnimation?: boolean;
  downloadSrc?: string;
  imageDraggable?: boolean;
  imageReferrerPolicy?: ImgHTMLAttributes<HTMLImageElement>["referrerPolicy"];
  onCloseAutoFocus?: (event: Event) => void;
  onNextImage?: () => void;
  onOpenChange?: (open: boolean) => void;
  onPreviousImage?: () => void;
  open?: boolean;
  portalContainer?: Element | null;
  previewContent?: ReactNode;
  showZoomControls?: boolean;
  src: string;
  toolbarLeadingAction?: ImagePreviewToolbarAction;
  triggerContent?: ReactNode;
}

function IconButton({
  "aria-label": ariaLabel,
  children,
  className,
  disabled,
  onClick,
}: {
  "aria-label": string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={clsx(
        "flex size-9 shrink-0 cursor-interaction items-center justify-center rounded-md text-token-foreground hover:bg-token-list-hover-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ImagePreviewLightbox({
  alt,
  closeAriaLabel = "Close image preview",
  downloadSrc,
  imageDraggable,
  imageReferrerPolicy,
  onCloseAutoFocus,
  onNextImage,
  onOpenChange,
  onPreviousImage,
  open = false,
  portalContainer,
  previewContent,
  showZoomControls = true,
  src,
  toolbarLeadingAction,
  triggerContent,
}: ImagePreviewLightboxProps) {
  const [scale, setScale] = useState(1);

  const close = () => {
    onOpenChange?.(false);
    if (typeof Event !== "undefined") {
      onCloseAutoFocus?.(new Event("closeAutoFocus", { cancelable: true }));
    }
  };

  useEffect(() => {
    if (open) setScale(1);
  }, [open, src]);

  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowLeft" && onPreviousImage != null) {
        event.preventDefault();
        onPreviousImage();
      } else if (event.key === "ArrowRight" && onNextImage != null) {
        event.preventDefault();
        onNextImage();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onNextImage, onPreviousImage]);

  const trigger =
    triggerContent == null ? null : (
      <span
        className="contents"
        onClick={() => onOpenChange?.(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpenChange?.(true);
          }
        }}
      >
        {triggerContent}
      </span>
    );

  if (!open || typeof document === "undefined") return trigger;

  const target = portalContainer ?? document.body;
  const content = (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/80 text-white"
      role="dialog"
      aria-modal={true}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="flex h-12 shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-black/40 px-3">
        <div className="flex min-w-0 items-center gap-2">
          {toolbarLeadingAction == null ? null : (
            <button
              type="button"
              aria-label={toolbarLeadingAction.ariaLabel}
              aria-pressed={toolbarLeadingAction.active}
              className={clsx(
                "h-8 cursor-interaction rounded-md px-3 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70",
                toolbarLeadingAction.active && "bg-white/10",
              )}
              onClick={toolbarLeadingAction.onClick}
            >
              {toolbarLeadingAction.label}
            </button>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {showZoomControls ? (
            <>
              <button
                type="button"
                className="h-8 min-w-8 cursor-interaction rounded-md px-2 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
                onClick={() =>
                  setScale((value) => Math.max(0.25, value - 0.25))
                }
              >
                -
              </button>
              <button
                type="button"
                className="h-8 min-w-12 cursor-interaction rounded-md px-2 text-sm tabular-nums hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
                onClick={() => setScale(1)}
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                type="button"
                className="h-8 min-w-8 cursor-interaction rounded-md px-2 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
                onClick={() => setScale((value) => Math.min(4, value + 0.25))}
              >
                +
              </button>
            </>
          ) : null}
          {downloadSrc == null ? null : (
            <a
              href={downloadSrc}
              download
              aria-label="Download image"
              className="flex size-9 items-center justify-center rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
            >
              <DownloadIcon className="icon-sm" />
            </a>
          )}
          <IconButton aria-label={closeAriaLabel} onClick={close}>
            <XIcon className="icon-sm" />
          </IconButton>
        </div>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
        {onPreviousImage == null ? null : (
          <IconButton
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-black/35 text-white hover:bg-black/55"
            onClick={onPreviousImage}
          >
            <ArrowLeftIcon className="icon-sm" />
          </IconButton>
        )}
        {previewContent ?? (
          <img
            src={src}
            alt={alt}
            draggable={imageDraggable}
            referrerPolicy={imageReferrerPolicy}
            className="max-h-full max-w-full object-contain"
            style={{ transform: `scale(${scale})` }}
          />
        )}
        {onNextImage == null ? null : (
          <IconButton
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-black/35 text-white hover:bg-black/55"
            onClick={onNextImage}
          >
            <ArrowRightIcon className="icon-sm" />
          </IconButton>
        )}
      </div>
    </div>
  );

  return (
    <>
      {trigger}
      {createPortal(content, target)}
    </>
  );
}
