// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Layout math for the generated image carousel.
import { IMAGE_GAP_PX, MAX_VISIBLE_IMAGES } from "./constants";

export type GalleryLayout = {
  heightPx: number;
  aspectRatio: "natural" | "square";
  maxStartIndex: number;
  overflowCount: number;
  visibleCount: number;
};

export function computeGalleryLayout({
  containerWidthPx,
  imageAspectRatios,
}: {
  containerWidthPx: number | null;
  imageAspectRatios: number[];
}): GalleryLayout {
  const count = imageAspectRatios.length;
  const singleAspectRatio = count === 1 ? imageAspectRatios[0] : null;
  let heightPx = 0;
  if (containerWidthPx != null) {
    heightPx =
      singleAspectRatio == null
        ? Math.max((containerWidthPx - 24) / MAX_VISIBLE_IMAGES, 0)
        : containerWidthPx / singleAspectRatio;
  }
  const naturalWidth =
    imageAspectRatios.reduce(
      (total, aspectRatio) => total + aspectRatio * heightPx,
      0,
    ) +
    Math.max(count - 1, 0) * IMAGE_GAP_PX;
  if (containerWidthPx == null || naturalWidth <= containerWidthPx) {
    return {
      heightPx,
      aspectRatio: "natural",
      maxStartIndex: 0,
      overflowCount: 0,
      visibleCount: count,
    };
  }
  const visibleCount = Math.min(count, MAX_VISIBLE_IMAGES);
  const overflowCount = Math.max(count - visibleCount, 0);
  return {
    heightPx,
    aspectRatio: "square",
    maxStartIndex: overflowCount,
    overflowCount,
    visibleCount,
  };
}

export function aspectRatioFromDimensions(image: {
  width?: number | null;
  height?: number | null;
}): number | null {
  if (
    image.width == null ||
    image.height == null ||
    image.width <= 0 ||
    image.height <= 0
  ) {
    return null;
  }
  return image.width / image.height;
}
