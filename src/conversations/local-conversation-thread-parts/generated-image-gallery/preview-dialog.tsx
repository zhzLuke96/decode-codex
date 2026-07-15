// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightbox fallback for generated image previews.
import React from "react";
import { useIntl } from "../../../vendor/react-intl";
import type { ImageAssetResolver } from "../../../image-side-panel/use-image-asset-download";
import {
  ImagePreviewLightbox,
  useResolvedImageSrc,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { TRANSPARENT_GIF_DATA_URL } from "./constants";
import { formatGeneratedImageAlt } from "./image-alt";

export type GeneratedImagePreviewDialogProps = {
  src: string;
  conversationId: string;
  imageAssetResolver?: ImageAssetResolver;
  imageNumber: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNextImage?: () => void;
  onPreviousImage?: () => void;
};

export function GeneratedImagePreviewDialog(
  props: GeneratedImagePreviewDialogProps,
) {
  const {
    src,
    conversationId,
    imageAssetResolver,
    imageNumber,
    open,
    onOpenChange,
    onNextImage,
    onPreviousImage,
  } = props;
  const intl = useIntl();
  const { previewSrc, downloadSrc } = useResolvedImageSrc({
    src,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: open,
  });
  const altText = formatGeneratedImageAlt(intl, imageNumber);
  const closeAriaLabel = intl.formatMessage({
    id: "codex.localConversation.closeGeneratedImagePreview",
    defaultMessage: "Close image preview",
    description:
      "Aria label for closing the image preview dialog for a generated image",
  });

  return (
    <ImagePreviewLightbox
      src={previewSrc ?? TRANSPARENT_GIF_DATA_URL}
      downloadSrc={downloadSrc ?? TRANSPARENT_GIF_DATA_URL}
      alt={altText}
      open={open}
      onOpenChange={onOpenChange}
      onNextImage={onNextImage}
      onPreviousImage={onPreviousImage}
      closeAriaLabel={closeAriaLabel}
      imageReferrerPolicy="no-referrer"
    />
  );
}
