// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Appshot (screenshot) attachment card with composer/thread variants and an
// accessibility-text-aware preview lightbox.
import { useState } from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  ImagePreviewLightbox,
  RemoveAppshotAttachmentButton,
} from "../boundaries/onboarding-commons-externals.facade";

const SCREENSHOT_WIDTH = 232;
const THREAD_SCREENSHOT_HEIGHT = 140;

export function initAppshotAttachmentChunk(): void {}

export function initAppshotAttachmentRuntimeChunk(): void {}

export function computeComposerSnapshotHeight(height?: number | null): number {
  return (height ?? THREAD_SCREENSHOT_HEIGHT) + 8;
}

export function stripTrailingPageRangeFromTitle(
  title: string,
  enabled: boolean,
): string {
  return enabled
    ? title.replace(/(?:\s+\(\s*\d+(?:-\d+)?\s*\)|\s+\d+(?:-\d+)?)(\s*)$/, "")
    : title;
}

export type AppshotAttachmentVariant = "composer" | "thread";

export interface AppshotPreviewItem {
  alt: string;
  accessibilityText?: string | null;
  src: string;
}

export interface AppshotAttachmentProps {
  appIconSrc?: string | null;
  appName: string;
  accessibilityText?: string | null;
  previewEnabled?: boolean;
  previewIndex?: number;
  previewItems?: AppshotPreviewItem[];
  screenshotAlt?: string | null;
  screenshotSrc: string;
  transitionSnapshotHeight?: number;
  transitionSnapshotSrc?: string | null;
  variant?: AppshotAttachmentVariant;
  windowTitle?: string | null;
  onRemove?: () => void;
}

export function AppshotAttachment({
  appIconSrc,
  appName,
  accessibilityText,
  previewEnabled = true,
  previewIndex = 0,
  previewItems,
  screenshotAlt,
  screenshotSrc,
  transitionSnapshotHeight = THREAD_SCREENSHOT_HEIGHT,
  transitionSnapshotSrc,
  variant = "composer",
  windowTitle,
  onRemove,
}: AppshotAttachmentProps) {
  const intl = useIntl();
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [showAccessibilityText, setShowAccessibilityText] = useState(false);
  const [activeIndex, setActiveIndex] = useState(previewIndex);

  const displayTitle = resolveAppshotTitle({ appName, windowTitle });
  const fallbackItem: AppshotPreviewItem = {
    alt: screenshotAlt ?? "",
    accessibilityText,
    src: screenshotSrc,
  };
  const items = previewItems ?? [fallbackItem];
  const activeItem = items[activeIndex] ?? fallbackItem;
  const activeAccessibilityText = activeItem.accessibilityText?.trim() ?? "";
  const hasAccessibilityText = activeAccessibilityText.length > 0;
  const showAxInLightbox = showAccessibilityText && hasAccessibilityText;
  const previousIndex = activeIndex > 0 ? activeIndex - 1 : null;
  const nextIndex = activeIndex + 1 < items.length ? activeIndex + 1 : null;
  const hasTransitionSnapshot =
    transitionSnapshotSrc != null && transitionSnapshotSrc.length > 0;
  const composerSnapshotHeight =
    variant === "composer"
      ? computeComposerSnapshotHeight(transitionSnapshotHeight)
      : undefined;

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setActiveIndex(previewIndex);
    }
    setShowAccessibilityText(false);
    setLightboxOpen(open);
  };

  const snapshotNode =
    variant === "thread" ? (
      <ThreadVariantSnapshot
        appIconSrc={appIconSrc}
        screenshotAlt={screenshotAlt ?? ""}
        screenshotSrc={screenshotSrc}
      />
    ) : (
      <ComposerVariantSnapshot
        hasTransitionSnapshot={hasTransitionSnapshot}
        renderedSnapshotHeight={composerSnapshotHeight}
        transitionSnapshotSrc={transitionSnapshotSrc}
      />
    );

  const containerClassName = clsx(
    "composer-attachment-surface group/appshot relative flex w-[232px] flex-shrink-0 flex-col items-center overflow-visible rounded-2xl pb-2 hover:bg-token-bg-appshot focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:ring-inset",
    variant === "thread" && "pt-[10px]",
    previewEnabled ? "cursor-interaction" : "cursor-default",
  );

  const titleNode =
    variant === "thread" ? (
      <div className="mt-1 w-full truncate text-center text-[13px] leading-[17px] font-medium text-token-text-primary">
        {displayTitle}
      </div>
    ) : null;

  const removeNode = onRemove ? (
    <RemoveAppshotAttachmentButton
      className="pointer-events-none top-1.5 right-1.5 z-20 opacity-0 group-hover/appshot:pointer-events-auto group-hover/appshot:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100"
      ariaLabel={intl.formatMessage(
        {
          id: "appshotAttachment.removeAriaLabel",
          defaultMessage: "Remove {title}",
          description: "Aria label for the remove appshot attachment button",
        },
        { title: displayTitle },
      )}
      onRemove={onRemove}
    />
  ) : null;

  const trigger = (
    <div
      className={containerClassName}
      style={
        composerSnapshotHeight == null
          ? undefined
          : { height: composerSnapshotHeight }
      }
      role={previewEnabled ? "button" : undefined}
      aria-label={previewEnabled ? displayTitle : undefined}
      tabIndex={previewEnabled ? 0 : undefined}
      onKeyDown={
        previewEnabled
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleOpenChange(true);
              }
            }
          : undefined
      }
    >
      {snapshotNode}
      {titleNode}
      {removeNode}
    </div>
  );

  if (!previewEnabled) {
    return trigger;
  }

  const previewContent = showAxInLightbox ? (
    <AccessibilityTextPreview accessibilityText={activeAccessibilityText} />
  ) : undefined;

  const toolbarLeadingAction = hasAccessibilityText
    ? {
        active: showAxInLightbox,
        ariaLabel: showAxInLightbox
          ? intl.formatMessage({
              id: "appshotAttachment.showVisualPreview",
              defaultMessage: "Show screenshot",
              description:
                "Aria label for switching the appshot lightbox from accessibility text back to the screenshot",
            })
          : intl.formatMessage({
              id: "appshotAttachment.showAccessibilityText",
              defaultMessage: "Show accessibility text",
              description:
                "Aria label for switching the appshot lightbox from the screenshot to accessibility text",
            }),
        label: (
          <FormattedMessage
            id="appshotAttachment.viewAccessibilityText"
            defaultMessage="View text"
            description="Label for the appshot lightbox button that toggles the accessibility text preview"
          />
        ),
        onClick: () => {
          setShowAccessibilityText(toggle);
        },
      }
    : undefined;

  const onPreviousImage =
    previousIndex == null
      ? undefined
      : () => {
          setActiveIndex(previousIndex);
          setShowAccessibilityText(false);
        };
  const onNextImage =
    nextIndex == null
      ? undefined
      : () => {
          setActiveIndex(nextIndex);
          setShowAccessibilityText(false);
        };

  return (
    <ImagePreviewLightbox
      src={activeItem.src}
      alt={activeItem.alt}
      open={isLightboxOpen}
      onOpenChange={handleOpenChange}
      downloadSrc={activeItem.src}
      imageDraggable={false}
      previewContent={previewContent}
      showZoomControls={!showAxInLightbox}
      toolbarLeadingAction={toolbarLeadingAction}
      onPreviousImage={onPreviousImage}
      onNextImage={onNextImage}
      triggerContent={trigger}
    />
  );
}

function toggle(value: boolean): boolean {
  return !value;
}

interface AccessibilityTextPreviewProps {
  accessibilityText: string;
}

function AccessibilityTextPreview({
  accessibilityText,
}: AccessibilityTextPreviewProps) {
  return (
    <div className="m-auto flex h-[min(72vh,44rem)] w-[min(78vw,56rem)] max-w-full flex-col overflow-hidden rounded-3xl border border-token-border bg-token-dropdown-background/95 text-token-foreground shadow-2xl ring-[0.5px] ring-token-border backdrop-blur-xl">
      <div className="flex items-center border-b border-token-border px-5 py-3 font-sans text-sm text-token-description-foreground select-none">
        <div className="min-w-0 truncate">
          <FormattedMessage
            id="appshotAttachment.accessibilityTextPreviewTitle"
            defaultMessage="plaintext"
            description="Title shown above accessibility text in the appshot lightbox"
          />
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto bg-token-main-surface-primary px-5 py-4">
        <pre className="text-size-chat m-0 font-sans leading-relaxed break-words whitespace-pre-wrap text-token-text-primary extension:leading-normal">
          {accessibilityText}
        </pre>
      </div>
    </div>
  );
}

interface ComposerVariantSnapshotProps {
  hasTransitionSnapshot: boolean;
  renderedSnapshotHeight?: number;
  transitionSnapshotSrc?: string | null;
}

function ComposerVariantSnapshot({
  hasTransitionSnapshot,
  renderedSnapshotHeight,
  transitionSnapshotSrc,
}: ComposerVariantSnapshotProps) {
  return (
    <div
      className="relative flex w-full items-center justify-center"
      style={{ height: renderedSnapshotHeight }}
    >
      {hasTransitionSnapshot ? (
        <img
          src={transitionSnapshotSrc ?? undefined}
          alt=""
          aria-hidden={true}
          className="object-contain"
          style={{ height: renderedSnapshotHeight, width: SCREENSHOT_WIDTH }}
          draggable={false}
        />
      ) : (
        <span
          aria-hidden={true}
          className="block"
          style={{ height: renderedSnapshotHeight, width: SCREENSHOT_WIDTH }}
        />
      )}
    </div>
  );
}

interface ThreadVariantSnapshotProps {
  appIconSrc?: string | null;
  screenshotAlt?: string;
  screenshotSrc: string;
}

function ThreadVariantSnapshot({
  appIconSrc,
  screenshotAlt = "",
  screenshotSrc,
}: ThreadVariantSnapshotProps) {
  const [naturalSize, setNaturalSize] = useState<{
    height: number;
    width: number;
  } | null>(null);
  const scaledHeight = computeScaledScreenshotHeight(naturalSize);

  return (
    <div
      className="relative flex items-end justify-center"
      style={{ height: THREAD_SCREENSHOT_HEIGHT, width: SCREENSHOT_WIDTH }}
    >
      <div
        className="flex items-end justify-center"
        style={{
          filter: "drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.3))",
          height: scaledHeight,
          paddingInline: 12,
          width: 256,
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.21) 79%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.21) 79%, rgba(0,0,0,0) 100%)",
        }}
      >
        <img
          src={screenshotSrc}
          alt={screenshotAlt}
          className="max-h-full max-w-full object-contain"
          draggable={false}
          onLoad={(event) => {
            const target = event.currentTarget;
            setNaturalSize({
              height: target.naturalHeight,
              width: target.naturalWidth,
            });
          }}
        />
      </div>
      {appIconSrc != null && appIconSrc.length > 0 ? (
        <img
          src={appIconSrc}
          alt=""
          aria-hidden={true}
          className="absolute bottom-0 left-1/2 size-6 -translate-x-1/2 object-contain"
          draggable={false}
        />
      ) : null}
    </div>
  );
}

function computeScaledScreenshotHeight(
  size: { height: number; width: number } | null,
): number {
  if (size == null || size.height <= 0 || size.width <= 0) {
    return THREAD_SCREENSHOT_HEIGHT;
  }
  const scale = Math.min(
    SCREENSHOT_WIDTH / size.width,
    THREAD_SCREENSHOT_HEIGHT / size.height,
  );
  return size.height * scale;
}

function resolveAppshotTitle({
  appName,
  windowTitle,
}: {
  appName: string;
  windowTitle?: string | null;
}): string {
  const trimmed = windowTitle?.trim();
  return trimmed != null && trimmed.length > 0 ? trimmed : appName;
}
