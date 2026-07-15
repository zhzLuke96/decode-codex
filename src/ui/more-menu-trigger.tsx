// Restored from ref/webview/assets/more-menu-trigger-DFDAIIbe.js
// more-menu-trigger-DFDAIIbe chunk restored from the Codex webview bundle.
import type { ComponentProps, MouseEventHandler } from "react";
import { ThreeDotsIcon } from "../icons/three-dots-icon";
import { Button } from "../ui/button";
type MoreMenuTriggerProps = Omit<
  ComponentProps<typeof Button>,
  "children" | "color" | "aria-label" | "onClick"
> & {
  iconClassName?: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
function MoreMenuTrigger({
  label,
  onClick,
  size = "toolbar",
  iconClassName = "icon-xs",
  uniform = true,
  ...buttonProps
}: MoreMenuTriggerProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
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
      <ThreeDotsIcon className={iconClassName} />
    </Button>
  );
}
export { MoreMenuTrigger };
