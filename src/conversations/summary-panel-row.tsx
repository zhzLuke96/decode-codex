// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Generic clickable row used inside conversation summary panels. Supports an
// optional leading icon, a label, hover/focus-revealed action and trailing
// slots, and keyboard activation when interaction handlers are provided.

import type {
  HTMLAttributes,
  KeyboardEvent,
  PointerEvent,
  ReactNode,
  Ref,
} from "react";
import clsx from "clsx";

type SummaryPanelRowDensity = "compact" | "comfortable";

export interface SummaryPanelRowProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onClick"> {
  "aria-expanded"?: boolean;
  ariaExpanded?: boolean;
  className?: string;
  disabled?: boolean;
  density?: SummaryPanelRowDensity;
  icon?: ReactNode;
  interactive?: boolean;
  label?: ReactNode;
  labelClassName?: string;
  ref?: Ref<HTMLDivElement>;
  actions?: ReactNode;
  actionsAlwaysFocusable?: boolean;
  actionsVisible?: boolean;
  trailing?: ReactNode;
  trailingVisible?: boolean;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
  onPointerDown?: (event: PointerEvent<HTMLDivElement>) => void;
}

function stopRowEventPropagation(event: React.SyntheticEvent) {
  return event.stopPropagation();
}

export function SummaryPanelRow({
  "aria-expanded": ariaExpandedAttr,
  ariaExpanded,
  className,
  disabled,
  density = "compact",
  icon,
  interactive = false,
  label,
  labelClassName = "truncate",
  ref,
  actions,
  actionsAlwaysFocusable = false,
  actionsVisible = false,
  trailing,
  trailingVisible = false,
  title,
  onClick,
  onKeyDown,
  onPointerDown,
  ...rest
}: SummaryPanelRowProps) {
  const hasInteractionHandlers =
    onClick != null || onPointerDown != null || onKeyDown != null;
  const isClickable = !disabled && hasInteractionHandlers;
  const isInteractive = !disabled && (interactive || hasInteractionHandlers);

  const densityClassName =
    density === "comfortable" ? "min-h-8 py-1.5" : "h-7 py-1";
  const toneClassName = isInteractive
    ? "cursor-interaction text-token-foreground"
    : "text-token-text-secondary";
  const hoverBackgroundClassName =
    isInteractive &&
    "before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-token-list-hover-background";
  const disabledClassName = disabled && "cursor-not-allowed";
  const rowClassName = clsx(
    "group/summary-panel-row relative isolate flex w-full min-w-0 items-center gap-2 rounded-sm border-0 bg-transparent px-0 text-left",
    densityClassName,
    toneClassName,
    hoverBackgroundClassName,
    disabledClassName,
    className,
  );

  const labelNode = (
    <span className={clsx("text-base", labelClassName)}>{label}</span>
  );

  const actionsNode =
    actions == null ? null : (
      <span
        className={clsx(
          "shrink-0 items-center",
          (actionsVisible || !actionsAlwaysFocusable) && "ms-auto",
          actionsVisible
            ? "flex"
            : actionsAlwaysFocusable
              ? "pointer-events-none absolute inset-y-0 end-0 flex opacity-0 group-focus-within/summary-panel-row:pointer-events-auto group-focus-within/summary-panel-row:opacity-100 group-hover/summary-panel-row:pointer-events-auto group-hover/summary-panel-row:opacity-100"
              : "hidden group-focus-within/summary-panel-row:flex group-hover/summary-panel-row:flex",
        )}
        onClick={stopRowEventPropagation}
        onKeyDown={stopRowEventPropagation}
      >
        {actions}
      </span>
    );

  const trailingNode =
    trailing == null ? null : (
      <span
        className={clsx(
          "shrink-0 leading-none opacity-0 group-focus-visible/summary-panel-row:opacity-100 group-focus-within/summary-panel-row:opacity-100 group-hover/summary-panel-row:opacity-100",
          (actions == null || !actionsVisible || trailingVisible) && "ms-auto",
          actions != null &&
            !actionsVisible &&
            "group-focus-within/summary-panel-row:ms-0 group-hover/summary-panel-row:ms-0",
          trailingVisible && "opacity-100",
        )}
      >
        {trailing}
      </span>
    );

  const content = (
    <>
      {icon}
      <span className="flex min-w-0 flex-1 items-center gap-2">
        {labelNode}
        {actionsNode}
        {trailingNode}
      </span>
    </>
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!disabled) {
      onKeyDown?.(event);
    }
    if (
      isClickable &&
      onClick != null &&
      !event.defaultPrevented &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <div
      {...rest}
      aria-disabled={disabled || undefined}
      aria-expanded={ariaExpanded ?? ariaExpandedAttr}
      className={rowClassName}
      onClick={isClickable ? onClick : undefined}
      onKeyDown={handleKeyDown}
      onPointerDown={isClickable ? onPointerDown : undefined}
      ref={ref}
      role={hasInteractionHandlers ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      title={title}
    >
      {content}
    </div>
  );
}
