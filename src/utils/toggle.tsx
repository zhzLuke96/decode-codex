// Restored from ref/webview/assets/toggle-BxO06ikn.js
// toggle-BxO06ikn chunk restored from the Codex webview bundle.
import clsx from "clsx";
import type { ButtonHTMLAttributes, MouseEvent } from "react";
const TRACK_SIZE_CLASS = {
  default: "h-5 w-8",
  sm: "h-4 w-7",
} as const;
const THUMB_SIZE_CLASS = {
  default:
    "h-4 w-4 data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[14px]",
  sm: "h-3 w-3 data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[14px]",
} as const;
type ToggleSize = keyof typeof TRACK_SIZE_CLASS;
type ToggleProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "onChange"
> & {
  ariaLabel: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: ToggleSize;
  thumbClassName?: string;
  trackClassName?: string;
};
export function Toggle({
  checked,
  onChange,
  disabled = false,
  className,
  id,
  ariaLabel,
  size = "default",
  trackClassName,
  thumbClassName,
  onClick,
  ...rest
}: ToggleProps) {
  const state = checked ? "checked" : "unchecked";
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented && !disabled) onChange(!checked);
  };
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      id={id}
      className={clsx(
        "inline-flex items-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:rounded-full",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-interaction",
        className,
      )}
      data-state={state}
      {...rest}
      onClick={handleClick}
      disabled={disabled}
    >
      <span
        className={clsx(
          "relative inline-flex shrink-0 items-center rounded-full transition-colors duration-200 ease-out",
          checked ? "bg-token-charts-blue" : "bg-token-foreground/10",
          TRACK_SIZE_CLASS[size],
          trackClassName,
        )}
        data-state={state}
      >
        <span
          className={clsx(
            "rounded-full border border-[color:var(--gray-0)] bg-[color:var(--gray-0)] shadow-sm transition-transform duration-200 ease-out data-[state=unchecked]:translate-x-0",
            THUMB_SIZE_CLASS[size],
            thumbClassName,
          )}
          data-state={state}
        />
      </span>
    </button>
  );
}
