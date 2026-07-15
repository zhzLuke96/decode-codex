// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Determines which generated-image outputs are visible alongside end resources.

type GeneratedImageOutputOptions<TImage> = {
  completedGeneratedImages: readonly TImage[];
  endResourcePaths: readonly string[];
  hasPendingGeneratedImages: boolean;
};

type GeneratedImageOutputResult<TImage> = {
  visibleCompletedGeneratedImages: readonly TImage[];
  shouldRenderGeneratedImageOutputs: boolean;
};

export function computeGeneratedImageOutputs<TImage>({
  completedGeneratedImages,
  endResourcePaths,
  hasPendingGeneratedImages,
}: GeneratedImageOutputOptions<TImage>): GeneratedImageOutputResult<TImage> {
  const visibleCompletedGeneratedImages = endResourcePaths.some(
    (resourcePath) => getPathExtension(resourcePath) === "pptx",
  )
    ? []
    : completedGeneratedImages;

  return {
    visibleCompletedGeneratedImages,
    shouldRenderGeneratedImageOutputs:
      visibleCompletedGeneratedImages.length > 0 || hasPendingGeneratedImages,
  };
}

function getPathExtension(resourcePath: string): string | null {
  const match = /(?:^|[/\\])[^/\\.][^/\\]*\.([^./\\?#]+)(?:[?#].*)?$/.exec(
    resourcePath,
  );
  return match?.[1]?.toLowerCase() ?? null;
}

export function initGeneratedImageOutputsChunk(): void {}
