// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Centered loading surface with the shimmering app brand logo.
import { useState } from "react";
import clsx from "clsx";
import { AppBrandLogo } from "./app-brand-logo";

export type AppLoadingScreenProps = {
  debugName?: string;
  fillParent?: boolean;
  overlay?: boolean;
  showLogo?: boolean;
};

export function initAppLoadingScreenChunk(): void {}

export function AppLoadingScreen({
  overlay = false,
  fillParent = false,
  showLogo = true,
}: AppLoadingScreenProps) {
  useState(false);
  const positionClassName = overlay
    ? "absolute inset-0 z-10 bg-token-bg-primary/70"
    : fillParent
      ? "absolute inset-0 bg-transparent"
      : "relative size-full bg-transparent";
  return (
    <div
      className={clsx("flex items-center justify-center", positionClassName)}
      onClick={() => {}}
    >
      {overlay || fillParent ? null : (
        <div className="draggable absolute inset-x-0 top-0 electron:h-toolbar extension:h-toolbar-sm" />
      )}
      <div className="flex flex-col items-center gap-2">
        {showLogo ? <AppBrandLogo className="size-14" /> : null}
        {null}
      </div>
    </div>
  );
}
