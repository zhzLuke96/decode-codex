// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Presentational zoom banner for the in-app browser sidebar: shows the current
// zoom percentage with zoom-out / zoom-in / reset controls.
import type { ReactNode } from "react";
import { classNames } from "../utils/class-names";
import { Button } from "../ui/button";
import { MinusIcon } from "../icons/minus-icon";
import { PlusIcon } from "../icons/plus-icon";

export type BrowserSidebarZoomBannerProps = {
  className?: string;
  isResetDisabled?: boolean;
  onZoomInAnimationEnd?: () => void;
  onZoomOutAnimationEnd?: () => void;
  onReset?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  resetLabel: ReactNode;
  zoomInLabel: string;
  zoomInAnimationKey?: number | null;
  zoomOutLabel: string;
  zoomOutAnimationKey?: number | null;
  zoomPercentLabel: ReactNode;
};

export function BrowserSidebarZoomBanner({
  className,
  isResetDisabled = false,
  onZoomInAnimationEnd,
  onZoomOutAnimationEnd,
  onReset,
  onMouseEnter,
  onMouseLeave,
  onZoomIn,
  onZoomOut,
  resetLabel,
  zoomInLabel,
  zoomInAnimationKey = null,
  zoomOutLabel,
  zoomOutAnimationKey = null,
  zoomPercentLabel,
}: BrowserSidebarZoomBannerProps) {
  const bannerClassName = classNames(
    "pointer-events-auto inline-flex items-center rounded-[12px] border border-token-border bg-token-dropdown-background/90 py-2 pr-2 pl-4 text-token-foreground shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)] ring-[0.5px] ring-token-border backdrop-blur-sm",
    className,
  );

  const zoomPercent = (
    <span className="w-10 text-center text-sm font-semibold tabular-nums">
      {zoomPercentLabel}
    </span>
  );

  const zoomOutIconKey = `browser-sidebar-zoom-out-icon-${zoomOutAnimationKey ?? 0}`;
  const zoomOutIconClassName = classNames(
    "inline-flex items-center justify-center",
    zoomOutAnimationKey != null && "browser-sidebar-zoom-icon-click",
  );
  const zoomOutButton = (
    <Button
      aria-label={zoomOutLabel}
      className="!rounded-none !rounded-l-md text-token-text-primary"
      color="ghostActive"
      onClick={onZoomOut}
      size="toolbar"
      uniform
    >
      <span
        key={zoomOutIconKey}
        data-testid="browser-sidebar-zoom-out-icon"
        className={zoomOutIconClassName}
        onAnimationEnd={onZoomOutAnimationEnd}
      >
        <MinusIcon className="icon-xs" />
      </span>
    </Button>
  );

  const divider = <div className="h-4 w-px bg-token-border/60" />;

  const zoomInIconKey = `browser-sidebar-zoom-in-icon-${zoomInAnimationKey ?? 0}`;
  const zoomInIconClassName = classNames(
    "inline-flex items-center justify-center",
    zoomInAnimationKey != null && "browser-sidebar-zoom-icon-click",
  );
  const zoomInButton = (
    <Button
      aria-label={zoomInLabel}
      className="!rounded-none !rounded-r-md text-token-text-primary"
      color="ghostActive"
      onClick={onZoomIn}
      size="toolbar"
      uniform
    >
      <span
        key={zoomInIconKey}
        data-testid="browser-sidebar-zoom-in-icon"
        className={zoomInIconClassName}
        onAnimationEnd={onZoomInAnimationEnd}
      >
        <PlusIcon className="icon-xs" />
      </span>
    </Button>
  );

  const zoomControls = (
    <div className="ml-3 flex items-center overflow-hidden rounded-md bg-token-foreground/5">
      {zoomOutButton}
      {divider}
      {zoomInButton}
    </div>
  );

  const resetButton = (
    <Button
      className="ml-2"
      color="ghost"
      disabled={isResetDisabled}
      onClick={onReset}
      size="toolbar"
    >
      {resetLabel}
    </Button>
  );

  return (
    <div
      data-testid="browser-sidebar-zoom-banner"
      className={bannerClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {zoomPercent}
      {zoomControls}
      {resetButton}
    </div>
  );
}
