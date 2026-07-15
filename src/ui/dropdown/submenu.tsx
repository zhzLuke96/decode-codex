// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
import React, {
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "../../icons/chevron-right-icon";
import { animations } from "../../utils/animations";
import { useWindowZoom } from "../../utils/window-zoom-context";
import {
  contentViewportStyle,
  dropdownAnimationClasses,
  dropdownItemClasses,
  parentBottomAlignedContentStyle,
} from "./constants";
import type { DropdownItemProps } from "./item";
import {
  DropdownMenuPortalPrimitive,
  DropdownMenuSubContentPrimitive,
  DropdownMenuSubPrimitive,
  DropdownMenuSubTriggerPrimitive,
} from "./primitives";
import { DropdownTooltip } from "./tooltip-wrapper";
import type {
  DropdownSurface,
  DropdownTooltipAlign,
  DropdownTooltipSide,
  IconComponent,
} from "./types";
export type DropdownSubmenuItemProps = {
  children: ReactNode;
  isDefaultOpen?: boolean;
  trigger: ReactElement<DropdownItemProps>;
};
export function DropdownSubmenuItem({
  trigger,
  children,
  isDefaultOpen = false,
}: DropdownSubmenuItemProps) {
  const disabled = trigger.props.disabled ?? false;
  const [open, setOpen] = React.useState(disabled ? false : isDefaultOpen);
  const isOpen = open && !disabled;
  function handleSelect(event: Event) {
    trigger.props.onSelect?.(event);
    if (!event.defaultPrevented) {
      event.preventDefault();
      event.stopPropagation();
      if (!disabled) setOpen((currentOpen) => !currentOpen);
    }
  }
  const triggerWithChevron = React.cloneElement(trigger, {
    onSelect: handleSelect,
    rightIcon: (
      <motion.span
        aria-hidden={true}
        className="inline-flex items-center justify-center text-token-input-placeholder-foreground"
        initial={false}
        animate={{
          rotate: isOpen ? 90 : 0,
        }}
        transition={animations}
      >
        <ChevronRightIcon
          className={clsx(
            trigger.props.rightIconClassName ?? "icon-xs",
            dropdownItemClasses.icon,
          )}
        />
      </motion.span>
    ),
  });
  return (
    <div className="flex flex-col" data-state={isOpen ? "open" : "closed"}>
      {triggerWithChevron}
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="dropdown-submenu"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={animations}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
type DropdownFlyoutSubmenuItemProps = {
  LeftIcon?: IconComponent;
  alignToParentBottom?: boolean;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  contentSurface?: DropdownSurface;
  disabled?: boolean;
  label: ReactNode;
  leftIconClassName?: string;
  onOpenChange?: (open: boolean) => void;
  onSelect?: () => void;
  tooltipAlign?: DropdownTooltipAlign;
  tooltipDisabled?: boolean;
  tooltipOpenWhen?: string;
  tooltipSide?: DropdownTooltipSide;
  tooltipText?: ReactNode;
  tooltipTextClassName?: string;
  triggerContent?: ReactNode;
};
export function DropdownFlyoutSubmenuItem({
  label,
  children,
  LeftIcon,
  leftIconClassName,
  className,
  disabled = false,
  alignToParentBottom,
  contentClassName,
  contentSurface = "menu",
  onSelect,
  triggerContent,
  tooltipText,
  tooltipDisabled,
  tooltipTextClassName,
  tooltipSide = "right",
  tooltipAlign,
  tooltipOpenWhen,
  onOpenChange,
}: DropdownFlyoutSubmenuItemProps) {
  const windowZoom = useWindowZoom();
  const baseContentClassName =
    contentSurface === "bare"
      ? clsx(
          dropdownAnimationClasses.content,
          "z-50 m-0 flex min-w-[180px] select-none flex-col overflow-y-auto p-0",
        )
      : clsx(
          dropdownAnimationClasses.content,
          "bg-token-dropdown-background/90 text-token-foreground ring-token-border z-50 m-px flex min-w-[180px] select-none flex-col overflow-y-auto rounded-xl px-1 py-1 shadow-xl-spread ring-[0.5px] backdrop-blur-sm",
        );
  const triggerClassName = clsx(
    dropdownItemClasses.itemBase,
    "flex w-full items-center",
    disabled
      ? "cursor-default opacity-50"
      : dropdownItemClasses.itemInteractive,
    className,
  );
  const trigger = (
    <DropdownMenuSubTriggerPrimitive
      className={triggerClassName}
      disabled={disabled}
      onClick={(event: MouseEvent) => {
        if (!disabled && onSelect != null) {
          event.preventDefault();
          event.stopPropagation();
          onSelect();
        }
      }}
    >
      {triggerContent ?? (
        <div className={dropdownItemClasses.content}>
          {LeftIcon ? (
            <LeftIcon
              className={clsx(
                leftIconClassName ?? "icon-xs",
                dropdownItemClasses.icon,
              )}
            />
          ) : null}
          <span className="min-w-0 flex-1 truncate">{label}</span>
          <ChevronRightIcon
            className={clsx(
              "icon-xs text-token-input-placeholder-foreground",
              dropdownItemClasses.icon,
            )}
          />
        </div>
      )}
    </DropdownMenuSubTriggerPrimitive>
  );
  return (
    <DropdownMenuSubPrimitive onOpenChange={onOpenChange}>
      <DropdownTooltip
        text={tooltipText}
        disabled={tooltipDisabled}
        textClassName={tooltipTextClassName}
        side={tooltipSide}
        align={tooltipAlign}
        openWhen={tooltipOpenWhen}
      >
        {trigger}
      </DropdownTooltip>
      <DropdownMenuPortalPrimitive>
        <DropdownMenuSubContentPrimitive
          className={clsx(
            baseContentClassName,
            alignToParentBottom &&
              dropdownAnimationClasses.parentBottomAlignedContent,
            contentClassName,
          )}
          collisionPadding={6}
          avoidCollisions={!alignToParentBottom}
          sideOffset={4}
          alignOffset={-4}
          style={{
            ...(alignToParentBottom
              ? parentBottomAlignedContentStyle
              : contentViewportStyle),
            zoom: windowZoom === 1 ? undefined : windowZoom,
          }}
        >
          <div dir="ltr">{children}</div>
        </DropdownMenuSubContentPrimitive>
      </DropdownMenuPortalPrimitive>
    </DropdownMenuSubPrimitive>
  );
}
