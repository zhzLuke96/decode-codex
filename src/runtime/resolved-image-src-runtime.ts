// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility hook for image asset pointers and generated-image preview URLs.
import {
  isImageAssetPointer,
  useImageAssetDownload,
  type ImageAssetResolver,
} from "../image-side-panel/use-image-asset-download";
import {
  useImagePreviewSources,
  type ImagePreviewSources,
} from "../image-side-panel/use-image-preview-sources";

type LegacyImageResolver = ImageAssetResolver | ((src: string) => string);

type ObjectImageSrcArgs = {
  conversationId: string;
  imageAssetResolver?: ImageAssetResolver | null;
  shouldLoadFileDataUrl?: boolean;
  src: string;
};

type LegacyResolvedImageSrc = {
  isError: boolean;
  isLoading: boolean;
  src: string | null;
};

export function useResolvedImageSrc(
  args: ObjectImageSrcArgs,
): ImagePreviewSources;
export function useResolvedImageSrc(
  src: string,
  resolver?: LegacyImageResolver | null,
): LegacyResolvedImageSrc;
export function useResolvedImageSrc(
  input: ObjectImageSrcArgs | string,
  resolver?: LegacyImageResolver | null,
): ImagePreviewSources | LegacyResolvedImageSrc {
  if (typeof input !== "string") {
    return useImagePreviewSources({
      conversationId: input.conversationId,
      imageAssetResolver: input.imageAssetResolver ?? null,
      shouldLoadFileDataUrl: input.shouldLoadFileDataUrl ?? false,
      src: input.src,
    });
  }

  const src = input.trim();
  const resolvedByCallback =
    typeof resolver === "function" && src.length > 0 ? resolver(src) : null;
  const assetResolver =
    typeof resolver === "object" && resolver != null ? resolver : undefined;
  const assetPointer =
    resolvedByCallback == null && isImageAssetPointer(src) ? src : "";
  const asset = useImageAssetDownload(assetPointer, assetResolver);

  return {
    isError: asset.isError,
    isLoading: asset.isLoading,
    src: resolvedByCallback ?? asset.src ?? (assetPointer ? null : src || null),
  };
}
