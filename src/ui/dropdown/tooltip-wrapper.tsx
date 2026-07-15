// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
import { Tooltip } from "../tooltip-b";
import type { DropdownTooltipProps } from "./types";
type DropdownTooltipWrapperProps = DropdownTooltipProps & {
  children: ReactNode;
};
export function DropdownTooltip({
  children,
  text,
  disabled,
  textClassName,
  interactive,
  side = "right",
  align,
  openWhen,
}: DropdownTooltipWrapperProps) {
  if (!text) return <>{children}</>;
  return (
    <Tooltip
      disabled={disabled}
      tooltipContent={
        <div className={clsx("max-w-64 text-pretty", textClassName)}>
          {text}
        </div>
      }
      closeOnTriggerBlur={!interactive}
      interactive={interactive}
      side={side}
      align={align}
      openWhen={openWhen}
    >
      {children}
    </Tooltip>
  );
}
