// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import clsx from "clsx";
import { dropdownAnimationClasses } from "./constants";
import { DropdownContent, DropdownTrigger } from "./content";
import {
  DropdownMenuContentPrimitive,
  DropdownMenuPortalPrimitive,
  DropdownMenuRootPrimitive,
} from "./primitives";
import {
  getContentMaxHeightClassName,
  getContentWidthClassName,
  type DropdownContentMaxHeight,
  type DropdownContentWidth,
  type DropdownSurface,
} from "./types";
import { dismissTooltips } from "../../utils/tooltip-dismiss";
import { useWindowZoom } from "../../utils/window-zoom-context";
export type DropdownMenuProps = {
  align?: ComponentPropsWithoutRef<
    typeof DropdownMenuContentPrimitive
  >["align"];
  alignOffset?: ComponentPropsWithoutRef<
    typeof DropdownMenuContentPrimitive
  >["alignOffset"];
  animateExit?: boolean;
  children: ReactNode;
  contentClassName?: string;
  contentMaxHeight?: DropdownContentMaxHeight;
  contentWidth?: DropdownContentWidth;
  dir?: ComponentPropsWithoutRef<typeof DropdownMenuRootPrimitive>["dir"];
  disabled?: boolean;
  fadeExitAnimation?: boolean;
  onCloseAutoFocus?: ComponentPropsWithoutRef<
    typeof DropdownMenuContentPrimitive
  >["onCloseAutoFocus"];
  onEscapeKeyDown?: ComponentPropsWithoutRef<
    typeof DropdownMenuContentPrimitive
  >["onEscapeKeyDown"];
  onExitAnimationEnd?: () => void;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  portalContainer?: HTMLElement | null;
  side?: ComponentPropsWithoutRef<typeof DropdownMenuContentPrimitive>["side"];
  sideOffset?: ComponentPropsWithoutRef<
    typeof DropdownMenuContentPrimitive
  >["sideOffset"];
  surface?: DropdownSurface;
  triggerButton: ReactNode;
};
export function DropdownMenu({
  triggerButton,
  disabled,
  children,
  open,
  onOpenChange,
  dir,
  side,
  align,
  sideOffset,
  alignOffset,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onExitAnimationEnd,
  contentClassName,
  animateExit = true,
  fadeExitAnimation = false,
  surface = "menu",
  contentWidth,
  contentMaxHeight,
  portalContainer,
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const contentWidthClassName = getContentWidthClassName(contentWidth);
  const contentMaxHeightClassName =
    getContentMaxHeightClassName(contentMaxHeight);
  const windowZoom = useWindowZoom();
  const currentOpen = open ?? uncontrolledOpen;
  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) dismissTooltips();
    if (!isControlled) setUncontrolledOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }
  return (
    <DropdownMenuRootPrimitive
      dir={dir}
      modal={false}
      open={currentOpen}
      onOpenChange={handleOpenChange}
    >
      <DropdownTrigger asChild={true} disabled={disabled}>
        {triggerButton}
      </DropdownTrigger>
      {!disabled ? (
        <DropdownMenuPortalPrimitive container={portalContainer ?? undefined}>
          <DropdownContent
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            onCloseAutoFocus={onCloseAutoFocus}
            onEscapeKeyDown={onEscapeKeyDown}
            onAnimationEnd={(event) => {
              if (
                event.target === event.currentTarget &&
                event.currentTarget.dataset.state === "closed"
              ) {
                onExitAnimationEnd?.();
              }
            }}
            surface={surface}
            className={clsx(
              contentWidthClassName,
              contentMaxHeightClassName,
              !animateExit &&
                dropdownAnimationClasses.contentWithoutExitAnimation,
              fadeExitAnimation &&
                dropdownAnimationClasses.contentWithFadeExitAnimation,
              contentClassName,
            )}
            style={{
              zoom:
                portalContainer == null && windowZoom !== 1
                  ? windowZoom
                  : undefined,
            }}
          >
            {children}
          </DropdownContent>
        </DropdownMenuPortalPrimitive>
      ) : null}
    </DropdownMenuRootPrimitive>
  );
}
