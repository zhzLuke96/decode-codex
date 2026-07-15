// Restored from ref/webview/assets/settings-back-route-BfYwS6rz.js
// settings-back-route-BfYwS6rz chunk restored from the Codex webview bundle.
import type {
  ButtonHTMLAttributes,
  ComponentType,
  ReactElement,
  ReactNode,
} from "react";
import React from "react";
import clsx from "clsx";
import { Badge } from "../../utils/badge";
type SettingsNavIcon =
  | ReactElement
  | ComponentType<{
      className?: string;
    }>;
export interface SettingsNavRowProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  badge?: number | ReactNode;
  fullWidth?: boolean;
  hideLabel?: boolean;
  hoverBackground?: boolean;
  icon: SettingsNavIcon;
  iconClassName?: string;
  interactiveTrailing?: ReactNode;
  isActive?: boolean;
  label: ReactNode;
  trailing?: ReactNode;
  weightClassName?: string;
}
export function SettingsNavRow({
  badge,
  className,
  disabled = false,
  fullWidth = true,
  hideLabel,
  hoverBackground = true,
  icon,
  iconClassName = "icon-xs",
  interactiveTrailing,
  isActive = false,
  label,
  onClick,
  trailing,
  weightClassName,
  ...buttonProps
}: SettingsNavRowProps) {
  const hasNumericBadge = typeof badge === "number";
  const rowClassName = clsx(
    "focus-visible:outline-token-border relative h-[var(--height-token-row)] px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y cursor-interaction shrink-0 items-center overflow-hidden rounded-[var(--radius-token-row)] text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 gap-2",
    fullWidth ? "flex w-full" : "inline-flex w-auto",
    isActive
      ? "bg-token-list-hover-background"
      : hoverBackground && "hover:bg-token-list-hover-background",
    hasNumericBadge && "pr-10",
    weightClassName,
    className,
  );
  const labelClassName = clsx(
    "flex min-w-0 items-center text-base gap-2",
    fullWidth && "flex-1",
    hideLabel !== undefined && "min-h-6",
    isActive
      ? "text-token-list-active-selection-foreground"
      : "text-token-foreground",
  );
  const iconElement = React.isValidElement(icon)
    ? icon
    : React.createElement(icon, {
        className: clsx(
          iconClassName,
          isActive && "text-token-list-active-selection-icon-foreground",
        ),
      });
  const rowContent = (
    <div className={labelClassName}>
      {iconElement}
      {hideLabel ? null : <span className="truncate">{label}</span>}
    </div>
  );
  const badgeElement = hasNumericBadge ? (
    <Badge className="disambiguated-digits absolute top-1/2 right-[var(--padding-row-cell-x,var(--padding-row-x))] -translate-y-1/2">
      {badge}
    </Badge>
  ) : null;
  const ariaCurrent = isActive ? "page" : undefined;
  if (interactiveTrailing != null) {
    return (
      <div className={rowClassName}>
        <button
          type="button"
          className="flex min-w-0 flex-1 cursor-interaction items-center text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border disabled:cursor-not-allowed"
          onClick={onClick}
          aria-current={ariaCurrent}
          disabled={disabled}
          {...buttonProps}
        >
          {rowContent}
        </button>
        {interactiveTrailing}
        {badgeElement}
      </div>
    );
  }
  return (
    <button
      type="button"
      className={rowClassName}
      onClick={onClick}
      aria-current={ariaCurrent}
      disabled={disabled}
      {...buttonProps}
    >
      {rowContent}
      {trailing}
      {badgeElement}
    </button>
  );
}
