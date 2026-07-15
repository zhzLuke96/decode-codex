// Restored from ref/webview/assets/action-popover-primitives-BriXOYq-.js
// action-popover-primitives-BriXOYq- chunk restored from the Codex webview bundle.
import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
type ClassNameProps = {
  className?: string;
};
type ActionPopoverRowProps = ClassNameProps & {
  label: ReactNode;
  left: ReactNode;
  right?: ReactNode;
};
type ActionPopoverKeyValueRowProps = ClassNameProps & {
  label: ReactNode;
  left: ReactNode;
  value: ReactNode;
  valueClassName?: string;
};
type ActionPopoverIconButtonProps = ClassNameProps & {
  ariaLabel: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};
export function Row({ left, label, right, className }: ActionPopoverRowProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
          {left}
        </span>
        <span className="min-w-0">{label}</span>
      </div>
      {right ?? <span />}
    </div>
  );
}
export function KeyValueRow({
  left,
  label,
  value,
  valueClassName,
  className,
}: ActionPopoverKeyValueRowProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6",
        className,
      )}
    >
      <span className="flex items-center gap-2 whitespace-nowrap">
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
          {left}
        </span>
        {label}
      </span>
      <div className={clsx("min-w-0 truncate text-right", valueClassName)}>
        {value}
      </div>
    </div>
  );
}
export function IconButton({
  children,
  ariaLabel,
  onClick,
  disabled,
  className,
}: ActionPopoverIconButtonProps) {
  return (
    <Button
      color="secondary"
      size="icon"
      aria-label={ariaLabel}
      disabled={disabled}
      className={clsx("rounded-lg p-2", className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
