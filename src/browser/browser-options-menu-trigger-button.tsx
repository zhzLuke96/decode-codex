// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Trigger button used by the in-app browser options menu.
import * as React from "react";
import type { ComponentProps } from "react";

import { BrowserOptionsIcon } from "../boundaries/onboarding-commons-externals.facade";
import { Button } from "../ui/button";

export type BrowserOptionsMenuTriggerButtonProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ComponentProps<typeof Button>["size"];
  iconClassName?: string;
  uniform?: boolean;
} & Omit<ComponentProps<typeof Button>, "size" | "onClick" | "children">;

export function BrowserOptionsMenuTriggerButton(
  props: BrowserOptionsMenuTriggerButtonProps,
) {
  const {
    label,
    onClick,
    size = "toolbar",
    iconClassName = "icon-xs",
    uniform = true,
    ...rest
  } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick?.(event);
  };
  return (
    <Button
      color="ghost"
      size={size}
      uniform={uniform}
      aria-label={label}
      {...rest}
      onClick={handleClick}
    >
      <BrowserOptionsIcon className={iconClassName} />
    </Button>
  );
}

export function initBrowserOptionsMenuTriggerButtonChunk(): void {
  void BrowserOptionsMenuTriggerButton;
}
