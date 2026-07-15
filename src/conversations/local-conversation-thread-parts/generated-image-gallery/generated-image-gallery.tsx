// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Responsive carousel for assistant-generated images with side-panel and lightbox preview entrypoints.
import React, { useState } from "react";
import { classNames } from "../../../utils/class-names";
import { useIntl } from "../../../vendor/react-intl";
import { useResizeObserverRef } from "../../../utils/use-resize-observer";
import type { ImageAssetResolver } from "../../../image-side-panel/use-image-asset-download";
import {
  conversationTitleAtom,
  useScopedAtomValue,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { IMAGE_GAP_PX } from "./constants";
import { formatGeneratedImageAlt } from "./image-alt";
import { aspectRatioFromDimensions, computeGalleryLayout } from "./layout";
import { GalleryOverflowControls } from "./overflow-controls";
import { GeneratedImagePreviewButton } from "./preview-button";
import { GeneratedImagePreviewDialog } from "./preview-dialog";
import type { GeneratedImage, SidePanelImage } from "./types";

export type GeneratedImageGalleryProps = {
  images: GeneratedImage[];
  conversationImages?: GeneratedImage[];
  conversationId: string;
  imageAssetResolver?: ImageAssetResolver;
};

export function GeneratedImageGallery(props: GeneratedImageGalleryProps) {
  const { images, conversationImages, conversationId, imageAssetResolver } =
    props;
  const sidePanelSource =
    conversationImages === undefined ? images : conversationImages;
  const intl = useIntl();
  const conversationTitle = useScopedAtomValue(
    conversationTitleAtom,
    conversationId,
  );
  const [openImageId, setOpenImageId] = useState<string | null>(null);
  const [containerWidthPx, setContainerWidthPx] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [measuredAspectRatios, setMeasuredAspectRatios] = useState<
    Record<string, number>
  >({});

  const openIndex = images.findIndex((image) => image.id === openImageId);
  const openImage = openIndex === -1 ? null : images[openIndex];
  const previousImage = openIndex > 0 ? images[openIndex - 1] : null;
  const nextImage = openIndex >= 0 ? images[openIndex + 1] : null;

  const layout = computeGalleryLayout({
    containerWidthPx,
    imageAspectRatios: images.map(
      (image) =>
        measuredAspectRatios[image.id] ?? aspectRatioFromDimensions(image) ?? 1,
    ),
  });

  const clampedStartIndex = Math.min(startIndex, layout.maxStartIndex);
  const canGoToPreviousImages = clampedStartIndex > 0;
  const canGoToNextImages = clampedStartIndex < layout.maxStartIndex;
  const translateOffsetPx =
    clampedStartIndex * (layout.heightPx + IMAGE_GAP_PX);

  const containerRef = useResizeObserverRef((entry: ResizeObserverEntry) => {
    const nextWidth = Math.floor(entry.contentRect.width);
    setContainerWidthPx((current) =>
      current === nextWidth ? current : nextWidth,
    );
  });

  const sidePanelImages: SidePanelImage[] = sidePanelSource.map(
    (image, index) => {
      const imageNumber = index + 1;
      return {
        alt: formatGeneratedImageAlt(intl, imageNumber),
        id: image.id,
        previewSrc: image.previewSrc ?? image.src ?? "",
        src: image.src ?? image.previewSrc ?? "",
        tabTitle:
          conversationTitle == null
            ? formatGeneratedImageAlt(intl, imageNumber)
            : intl.formatMessage(
                {
                  id: "codex.localConversation.generatedImageTabTitle",
                  defaultMessage:
                    "{conversationTitle} - Generated image {imageNumber}",
                  description:
                    "Title for a generated image preview tab, prefixed by the conversation title",
                },
                { conversationTitle, imageNumber },
              ),
      };
    },
  );

  const handleAspectRatioChange = (id: string, aspectRatio: number) => {
    setMeasuredAspectRatios((current) =>
      current[id] === aspectRatio ? current : { ...current, [id]: aspectRatio },
    );
  };

  const singleImageWidthClass = images.length === 1 && "w-full max-w-[400px]";
  const containerClassName = classNames(
    "group/generated-image-gallery-controls relative overflow-hidden",
    singleImageWidthClass,
  );
  const containerStyle = { height: layout.heightPx };
  const trackStyle = {
    height: layout.heightPx,
    transform:
      layout.aspectRatio === "square"
        ? `translateX(-${translateOffsetPx}px)`
        : undefined,
  };

  const imageButtons = images.map((image, index) => {
    const hiddenInCarousel =
      layout.aspectRatio === "square" &&
      (index < clampedStartIndex ||
        index >= clampedStartIndex + layout.visibleCount);
    return (
      <div key={image.id} className="relative shrink-0">
        <GeneratedImagePreviewButton
          fullSrc={image.src ?? image.previewSrc ?? ""}
          src={image.previewSrc ?? image.src ?? ""}
          conversationId={conversationId}
          heightPx={layout.heightPx}
          imageAssetResolver={imageAssetResolver}
          imageNumber={index + 1}
          intrinsicHeight={image.height ?? null}
          intrinsicWidth={image.width ?? null}
          imageAspectRatio={aspectRatioFromDimensions(image)}
          square={layout.aspectRatio === "square"}
          hiddenInCarousel={hiddenInCarousel}
          sidePanelImages={sidePanelImages}
          sidePanelImageId={image.id}
          onAspectRatioChange={(aspectRatio) => {
            handleAspectRatioChange(image.id, aspectRatio);
          }}
          onOpenPreview={() => {
            setOpenImageId(image.id);
          }}
        />
      </div>
    );
  });

  const track = (
    <div
      className="flex gap-2 transition-transform duration-200 ease-out motion-reduce:transition-none"
      style={trackStyle}
    >
      {imageButtons}
    </div>
  );

  const overflowControls =
    layout.aspectRatio === "square" && layout.overflowCount > 0 ? (
      <GalleryOverflowControls
        overflowCount={layout.overflowCount}
        canGoToPreviousImages={canGoToPreviousImages}
        canGoToNextImages={canGoToNextImages}
        onPreviousImages={() => {
          setStartIndex(Math.max(clampedStartIndex - 1, 0));
        }}
        onNextImages={() => {
          setStartIndex(Math.min(clampedStartIndex + 1, layout.maxStartIndex));
        }}
      />
    ) : null;

  const galleryElement = (
    <div
      ref={containerRef}
      className={containerClassName}
      data-testid="generated-image-gallery"
      style={containerStyle}
    >
      {track}
      {overflowControls}
    </div>
  );

  const previewDialog =
    openImage == null ? null : (
      <GeneratedImagePreviewDialog
        src={openImage.src ?? openImage.previewSrc ?? ""}
        conversationId={conversationId}
        imageAssetResolver={imageAssetResolver}
        imageNumber={openIndex + 1}
        open
        onOpenChange={(open) => {
          if (!open) setOpenImageId(null);
        }}
        onPreviousImage={
          previousImage == null
            ? undefined
            : () => {
                setOpenImageId(previousImage.id);
              }
        }
        onNextImage={
          nextImage == null
            ? undefined
            : () => {
                setOpenImageId(nextImage.id);
              }
        }
      />
    );

  return (
    <>
      {galleryElement}
      {previewDialog}
    </>
  );
}
