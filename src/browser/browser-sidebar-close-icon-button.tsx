// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small close-icon button used by browser sidebar toolbar and panels.
import type { ComponentProps, MouseEvent } from "react";
import { XIcon } from "../icons/x-icon";
import { Button } from "../ui/button";

type ButtonProps = ComponentProps<typeof Button>;

export interface BrowserSidebarCloseIconButtonProps
  extends Omit<
    ButtonProps,
    "aria-label" | "children" | "color" | "size" | "uniform"
  > {
  iconClassName?: string;
  label: string;
  size?: ButtonProps["size"];
  uniform?: boolean;
}

export function initBrowserSidebarCloseIconButtonChunk(): void {}

export function BrowserSidebarCloseIconButton({
  iconClassName = "icon-xs",
  label,
  onClick,
  size = "toolbar",
  uniform = true,
  ...buttonProps
}: BrowserSidebarCloseIconButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick?.(event);
  };

  return (
    <Button
      color="ghost"
      size={size}
      uniform={uniform}
      aria-label={label}
      {...buttonProps}
      onClick={handleClick}
    >
      <XIcon className={iconClassName} />
    </Button>
  );
}
