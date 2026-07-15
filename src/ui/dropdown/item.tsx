// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import clsx from "clsx";
import { dropdownItemClasses, iconSizeClasses } from "./constants";
import { DropdownMenuItemPrimitive } from "./primitives";
import { DropdownTooltip } from "./tooltip-wrapper";
import type {
  DropdownIconSize,
  DropdownTooltipAlign,
  DropdownTooltipSide,
  IconComponent,
} from "./types";
export type DropdownItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuItemPrimitive
> & {
  LeftIcon?: IconComponent;
  RightIcon?: IconComponent;
  SubText?: ReactNode;
  allowWrap?: boolean;
  href?: string;
  keyboardShortcut?: ReactNode;
  leftIconClassName?: string;
  rightIcon?: ReactNode;
  rightIconClassName?: string;
  subTextAllowWrap?: boolean;
  tooltipAlign?: DropdownTooltipAlign;
  tooltipDisabled?: boolean;
  tooltipInteractive?: boolean;
  tooltipOpenWhen?: string;
  tooltipSide?: DropdownTooltipSide;
  tooltipText?: ReactNode;
  tooltipTextClassName?: string;
};
export function DropdownItem({
  children,
  LeftIcon,
  keyboardShortcut,
  leftIconClassName,
  RightIcon,
  rightIcon,
  rightIconClassName = "icon-xs",
  className,
  onClick,
  onSelect,
  disabled,
  href,
  SubText,
  tooltipText,
  tooltipDisabled,
  tooltipTextClassName,
  tooltipInteractive,
  tooltipSide,
  tooltipAlign,
  tooltipOpenWhen,
  allowWrap = false,
  subTextAllowWrap = false,
  ...itemProps
}: DropdownItemProps) {
  const childArray = React.Children.toArray(children);
  const childIcon =
    React.isValidElement(childArray[0]) &&
    childArray[0].type === DropdownItemIcon
      ? childArray[0]
      : null;
  const itemChildren = childIcon ? childArray.slice(1) : children;
  const leftIconSize = SubText == null ? "icon-xs" : "icon-sm";
  const leftIcon =
    childIcon ??
    (LeftIcon ? (
      <LeftIcon
        className={clsx(
          leftIconClassName ?? leftIconSize,
          dropdownItemClasses.icon,
        )}
      />
    ) : null);
  const rightIconNode =
    rightIcon ??
    (RightIcon ? (
      <RightIcon
        className={clsx(rightIconClassName, dropdownItemClasses.icon)}
      />
    ) : null);
  const trailingContent =
    keyboardShortcut || rightIconNode ? (
      <>
        {keyboardShortcut ? (
          <span className="ml-2 shrink-0 text-xs text-token-description-foreground">
            {keyboardShortcut}
          </span>
        ) : null}
        {rightIconNode}
      </>
    ) : null;
  const label = (
    <span
      data-tooltip-overflow-target={
        tooltipOpenWhen === "trigger-overflows" ? "" : undefined
      }
      className={clsx("min-w-0", allowWrap ? "whitespace-normal" : "truncate")}
    >
      {itemChildren}
    </span>
  );
  const itemContent =
    SubText == null ? (
      <div className={dropdownItemClasses.content}>
        {leftIcon}
        <span
          className={clsx(
            "flex-1 min-w-0",
            allowWrap ? "whitespace-normal" : "truncate",
          )}
        >
          {label}
        </span>
        {trailingContent}
      </div>
    ) : (
      <div
        className={
          leftIcon == null
            ? dropdownItemClasses.content
            : dropdownItemClasses.contentWithIconAndSubText
        }
      >
        {leftIcon}
        <div className="flex min-w-0 flex-1 flex-col">
          {label}
          <span
            className={clsx(
              "min-w-0",
              subTextAllowWrap ? "whitespace-normal" : "truncate",
            )}
          >
            {SubText}
          </span>
        </div>
        {trailingContent}
      </div>
    );
  const itemIsInteractive = !disabled && Boolean(href || onClick || onSelect);
  const itemClassName = clsx(
    "no-drag",
    dropdownItemClasses.itemBase,
    disabled
      ? "cursor-default opacity-50"
      : itemIsInteractive && dropdownItemClasses.itemInteractive,
    className,
  );
  const innerElement = React.createElement(
    href ? "a" : "div",
    {
      href,
      className: clsx(
        href && "!text-token-foreground focus:!outline-none",
        "flex flex-col",
      ),
    },
    itemContent,
  );
  return (
    <DropdownTooltip
      text={tooltipText}
      disabled={tooltipDisabled}
      textClassName={tooltipTextClassName}
      interactive={tooltipInteractive}
      side={tooltipSide}
      align={tooltipAlign}
      openWhen={tooltipOpenWhen}
    >
      <DropdownMenuItemPrimitive
        asChild={true}
        className={itemClassName}
        onClick={disabled ? undefined : onClick}
        onSelect={disabled ? undefined : onSelect}
        disabled={disabled}
        {...itemProps}
      >
        {innerElement}
      </DropdownMenuItemPrimitive>
    </DropdownTooltip>
  );
}
type DropdownItemIconProps = {
  children: ReactNode;
  className?: string;
  size?: DropdownIconSize;
};
export function DropdownItemIcon({
  children,
  className,
  size = "sm",
}: DropdownItemIconProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center leading-none",
        iconSizeClasses[size],
        dropdownItemClasses.icon,
        className,
      )}
    >
      {children}
    </span>
  );
}
