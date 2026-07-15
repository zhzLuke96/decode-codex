// Restored from ref/webview/assets/web-search-favicon-icon-B_3yd7Lz.js
import clsx from "clsx";
import React from "react";
import { GlobeIcon } from "../icons/globe-icon";
type Capability = {
  enabled?: boolean;
  name?: string;
};
type WebSearchFaviconIconProps = {
  className?: string;
  showFallbackWhileLoading?: boolean;
  src: string;
};
export function hasWorkspaceDependenciesCapability(
  capabilities: Capability[] | null | undefined,
) {
  return (
    capabilities?.some(
      (capability) =>
        capability.name === "workspace_dependencies" &&
        capability.enabled === true,
    ) ?? false
  );
}
export function WebSearchFaviconIcon({
  className,
  showFallbackWhileLoading = true,
  src,
}: WebSearchFaviconIconProps) {
  const [loadedSrc, setLoadedSrc] = React.useState<string | null>(null);
  const [failedSrc, setFailedSrc] = React.useState<string | null>(null);
  const rootClassName = clsx(
    "relative flex shrink-0 items-center justify-center",
    className,
  );
  const shouldShowFallback =
    failedSrc === src || (showFallbackWhileLoading && loadedSrc !== src);
  const shouldShowImage = failedSrc !== src;
  return (
    <span className={rootClassName}>
      {shouldShowFallback ? (
        <GlobeIcon aria-hidden className="h-full w-full" />
      ) : null}
      {shouldShowImage ? (
        <img
          alt=""
          className={clsx(
            "absolute h-full w-full rounded-2xs object-contain",
            loadedSrc === src ? "opacity-100" : "opacity-0",
          )}
          decoding="async"
          draggable={false}
          onError={() => {
            setFailedSrc(src);
          }}
          onLoad={() => {
            setLoadedSrc(src);
          }}
          referrerPolicy="no-referrer"
          src={src}
        />
      ) : null}
    </span>
  );
}
