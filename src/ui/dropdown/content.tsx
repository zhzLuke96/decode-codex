// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import {
  contentViewportStyle,
  dropdownAnimationClasses,
  dropdownMessageClasses,
} from "./constants";
import {
  DropdownMenuContentPrimitive,
  DropdownMenuTriggerPrimitive,
} from "./primitives";
import { getSurfaceClassName, type DropdownSurface } from "./types";
export type DropdownTriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuTriggerPrimitive
> & {
  disabled?: boolean;
};
export function DropdownTrigger({
  disabled,
  className,
  ...triggerProps
}: DropdownTriggerProps) {
  return (
    <DropdownMenuTriggerPrimitive
      aria-disabled={disabled || undefined}
      className={clsx(
        "outline-hidden",
        disabled ? "cursor-default opacity-25" : "cursor-interaction",
        className,
      )}
      {...triggerProps}
    />
  );
}
export type DropdownContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuContentPrimitive
> & {
  surface?: DropdownSurface;
};
export function DropdownContent({
  children,
  className,
  align = "start",
  sideOffset = 1,
  surface = "menu",
  style,
  ...contentProps
}: DropdownContentProps) {
  return (
    <DropdownMenuContentPrimitive
      className={clsx(
        dropdownAnimationClasses.content,
        "no-drag bg-token-dropdown-background/90 text-token-foreground ring-token-border z-50 m-px flex select-none flex-col overflow-y-auto rounded-xl ring-[0.5px] px-1 py-1 shadow-xl-spread backdrop-blur-sm",
        getSurfaceClassName(surface),
        className,
      )}
      align={align}
      collisionPadding={6}
      sideOffset={sideOffset}
      style={{
        ...contentViewportStyle,
        ...style,
      }}
      {...contentProps}
    >
      {children}
    </DropdownMenuContentPrimitive>
  );
}
export type DropdownSeparatorProps = {
  className?: string;
  paddingClassName?: string;
};
export function DropdownSeparator({
  className,
  paddingClassName = "py-1",
}: DropdownSeparatorProps) {
  return (
    <div
      className={clsx(
        "w-full px-[var(--padding-row-x)]",
        paddingClassName,
        className,
      )}
    >
      <div className="h-[1px] w-full bg-token-menu-border" />
    </div>
  );
}
type DropdownSectionLabelProps = {
  children: ReactNode;
  className?: string;
};
export function DropdownSectionLabel({
  children,
  className,
}: DropdownSectionLabelProps) {
  return (
    <div className={clsx(dropdownMessageClasses.sectionLabel, className)}>
      {children}
    </div>
  );
}
type DropdownMessageProps = {
  centered?: boolean;
  children: ReactNode;
  className?: string;
  compact?: boolean;
  tone?: "error" | "muted";
};
export function DropdownMessage({
  children,
  className,
  tone = "muted",
  compact = false,
  centered = false,
}: DropdownMessageProps) {
  return (
    <div
      className={clsx(
        dropdownMessageClasses.messageBase,
        compact ? "py-2" : "py-3",
        tone === "error"
          ? "text-token-error-foreground"
          : "text-token-description-foreground",
        centered && "self-center text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
type DropdownTitleProps = {
  children: ReactNode;
  className?: string;
};
export function DropdownTitle({ children, className }: DropdownTitleProps) {
  return (
    <div
      className={clsx(
        "text-token-description-foreground flex min-h-6 items-center truncate px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-sm leading-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
type DropdownSectionProps = {
  children: ReactNode;
  className?: string;
};
export function DropdownSection({ children, className }: DropdownSectionProps) {
  return <div className={className}>{children}</div>;
}
