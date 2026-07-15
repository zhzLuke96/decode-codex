// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Thumbnail button that opens generated images in the side panel or lightbox fallback.
import React from "react";
import { classNames } from "../../../utils/class-names";
import { useIntl } from "../../../vendor/react-intl";
import { openImagePreviewTab } from "../../../image-side-panel/open-image-preview-tab";
import type { ImageAssetResolver } from "../../../image-side-panel/use-image-asset-download";
import {
  threadAtomScope as threadScope,
  useResolvedImageSrc,
  useStore,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { formatGeneratedImageAlt } from "./image-alt";
import type { SidePanelImage } from "./types";

export type GeneratedImagePreviewButtonProps = {
  fullSrc: string;
  src: string;
  conversationId: string;
  heightPx: number;
  imageAssetResolver?: ImageAssetResolver;
  imageNumber: number;
  intrinsicHeight: number | null;
  intrinsicWidth: number | null;
  imageAspectRatio: number | null;
  square: boolean;
  hiddenInCarousel: boolean;
  sidePanelImages: SidePanelImage[];
  sidePanelImageId: string;
  onAspectRatioChange: (aspectRatio: number) => void;
  onOpenPreview: () => void;
};

export function GeneratedImagePreviewButton(
  props: GeneratedImagePreviewButtonProps,
) {
  const {
    fullSrc,
    src,
    conversationId,
    heightPx,
    imageAssetResolver,
    imageNumber,
    intrinsicHeight,
    intrinsicWidth,
    imageAspectRatio,
    square,
    hiddenInCarousel,
    sidePanelImages,
    sidePanelImageId,
    onAspectRatioChange,
    onOpenPreview,
  } = props;
  const intl = useIntl();
  const store = useStore(threadScope);

  const { previewSrc } = useResolvedImageSrc({
    src,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });
  const { previewSrc: fullPreviewSrc, downloadSrc } = useResolvedImageSrc({
    src: fullSrc,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });

  const altText = formatGeneratedImageAlt(intl, imageNumber);
  const aspectWidthPx =
    square || imageAspectRatio == null
      ? undefined
      : imageAspectRatio * heightPx;
  const hasIntrinsicSize =
    intrinsicWidth != null &&
    intrinsicHeight != null &&
    intrinsicWidth > 0 &&
    intrinsicHeight > 0;

  if (previewSrc == null) {
    const placeholderWidth = aspectWidthPx ?? heightPx;
    return (
      <div
        className="generated-image-placeholder-pulse shrink-0 rounded-[16px]"
        style={{ height: heightPx, width: placeholderWidth }}
      />
    );
  }

  const imageWidth = square ? heightPx : aspectWidthPx;
  const buttonStyle = { height: heightPx, width: imageWidth };
  const tabIndex = hiddenInCarousel ? -1 : undefined;

  const handleClick = () => {
    const opened = openImagePreviewTab(store, {
      alt: altText,
      attachmentSrc: fullSrc,
      downloadSrc: downloadSrc ?? fullPreviewSrc ?? previewSrc,
      generatedImages: sidePanelImages,
      imageAssetResolver,
      initialImageId: sidePanelImageId,
      referrerPolicy: "no-referrer",
      src: fullPreviewSrc ?? previewSrc,
      title:
        sidePanelImages.find((item) => item.id === sidePanelImageId)
          ?.tabTitle ?? formatGeneratedImageAlt(intl, imageNumber),
    });
    if (!opened) onOpenPreview();
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth <= 0 || naturalHeight <= 0) return;
    if (imageAspectRatio == null) {
      onAspectRatioChange(naturalWidth / naturalHeight);
    }
  };

  const imageClassName = classNames(
    "block h-full",
    square ? "w-full object-cover" : "w-auto object-contain",
  );

  return (
    <button
      type="button"
      className="shrink-0 cursor-interaction overflow-hidden rounded-[16px] bg-token-main-surface-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
      data-testid="generated-image-preview"
      style={buttonStyle}
      aria-label={altText}
      aria-hidden={hiddenInCarousel}
      tabIndex={tabIndex}
      onClick={handleClick}
    >
      <img
        src={previewSrc}
        alt={altText}
        width={hasIntrinsicSize ? (intrinsicWidth ?? undefined) : undefined}
        height={hasIntrinsicSize ? (intrinsicHeight ?? undefined) : undefined}
        className={imageClassName}
        referrerPolicy="no-referrer"
        onLoad={handleImageLoad}
      />
    </button>
  );
}
