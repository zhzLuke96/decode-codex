// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders a favicon image with a globe fallback shown while the image loads or
// when it fails to load.
import { useState } from "react";
import clsx from "clsx";
import { GlobeFallbackIcon } from "../boundaries/onboarding-commons-externals.facade";

export interface FaviconImageProps {
  src: string;
  className?: string;
  showFallbackWhileLoading?: boolean;
}

export function FaviconImage({
  src,
  className,
  showFallbackWhileLoading = true,
}: FaviconImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [erroredSrc, setErroredSrc] = useState<string | null>(null);

  const showFallback =
    erroredSrc === src || (showFallbackWhileLoading && loadedSrc !== src);

  return (
    <span
      className={clsx(
        "relative flex shrink-0 items-center justify-center",
        className,
      )}
    >
      {showFallback ? (
        <GlobeFallbackIcon aria-hidden={true} className="h-full w-full" />
      ) : null}
      {erroredSrc === src ? null : (
        <img
          alt=""
          className={clsx(
            "absolute h-full w-full rounded-2xs object-contain",
            loadedSrc === src ? "opacity-100" : "opacity-0",
          )}
          decoding="async"
          draggable={false}
          onError={() => setErroredSrc(src)}
          onLoad={() => setLoadedSrc(src)}
          referrerPolicy="no-referrer"
          src={src}
        />
      )}
    </span>
  );
}

export function initFaviconImageChunk(): void {}
