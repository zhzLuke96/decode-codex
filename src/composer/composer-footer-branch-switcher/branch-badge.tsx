// Restored from ref/webview/assets/composer-footer-branch-switcher-GaN7fzcq.js
// Branch badge and small glyphs used by composer footer branch controls.
import React from "react";
import clsx from "clsx";
import type { ComposerFooterBranchBadgeProps, IconProps } from "./types";

export function ComposerFooterBranchBadge({
  children,
  color = "bg-token-text-link-active-foreground",
  borderColor,
  badgeEnabled = true,
}: ComposerFooterBranchBadgeProps) {
  if (!badgeEnabled) return <>{children}</>;

  return (
    <span className="relative inline-flex">
      {children}
      <span
        className={clsx(
          "border-token-bg-primary absolute right-0 top-0 size-[7px] translate-x-[2px] translate-y-[-2px] rounded-full border-[1px]",
          color,
          borderColor,
        )}
      />
    </span>
  );
}

export function BranchIcon({ className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "inline-block rounded-full border border-current",
        className,
      )}
    />
  );
}

export function LocalChangesBranchIcon({ className }: IconProps) {
  return (
    <ComposerFooterBranchBadge borderColor="border-token-side-bar-background">
      <BranchIcon className={className} />
    </ComposerFooterBranchBadge>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx("inline-block rounded-full bg-current", className)}
    />
  );
}

export function SpinnerIcon({ className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "inline-block rounded-full border border-current border-t-transparent",
        className,
      )}
    />
  );
}

export function initComposerFooterBranchBadgeChunk() {}
