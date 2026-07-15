// Restored from ref/webview/assets/tooltip-B-u9JAuV.js

import type React from "react";
export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";
export type TooltipVariant = "tooltip" | "rich" | "unstyled" | string;
export type TooltipOpenWhen = "always" | "trigger-overflows";
export interface TooltipShortcutProps {
  keysLabel: React.ReactNode;
  variant?: "default" | "button";
  className?: string;
}
export interface TooltipProviderProps {
  delayDuration?: number;
  skipDelayDuration?: number;
  children: React.ReactNode;
}
export interface TooltipContextValue {
  activeSkipDelayKey: string | null;
  activeTooltipId: string | null;
  activeTooltipVariant: TooltipVariant | null;
  clearActiveTooltipId(tooltipId: string): void;
  clearHoverHandoffLock(tooltipId: string): void;
  isHoverOpenBlocked(tooltipId: string): boolean;
  setActiveTooltipId(
    tooltipId: string | null,
    skipDelayKey?: string,
    variant?: TooltipVariant | null,
  ): void;
  setHoverHandoffLockTooltipId(tooltipId: string): void;
  skipDelayActive: boolean;
}
export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "content"> {
  tooltipContent?: React.ReactNode;
  shortcut?: React.ReactNode;
  disabled?: boolean;
  delayDuration?: number;
  delayOpen?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disableHoverOpen?: boolean;
  sideOffset?: number;
  side?: TooltipSide;
  variant?: TooltipVariant;
  align?: TooltipAlign;
  alignOffset?: number;
  disablePadding?: boolean;
  forceMount?: boolean;
  triggerAsChild?: boolean;
  triggerRef?: React.Ref<HTMLButtonElement>;
  positioningElement?: HTMLElement | null;
  tooltipId?: string;
  closeOnTriggerBlur?: boolean;
  getDelayDuration?: (
    event: React.PointerEvent<HTMLElement>,
    delayDuration: number,
  ) => number;
  ignoreHoverHandoffLock?: boolean;
  interactive?: boolean;
  tooltipClassName?: string;
  tooltipBodyClassName?: string;
  tooltipMaxWidth?: string | number;
  skipDelayKey?: string;
  openWhen?: TooltipOpenWhen;
  portalContainer?: HTMLElement | null;
  ref?: React.Ref<HTMLElement>;
}
export interface TooltipContentProps {
  align: TooltipAlign;
  alignOffset?: number;
  children: React.ReactNode;
  className?: string;
  contentRef: React.Ref<HTMLDivElement>;
  disablePadding: boolean;
  id: string;
  maxWidth?: string | number;
  open: boolean;
  onPointerEnter?: React.PointerEventHandler<HTMLDivElement>;
  onPointerLeave?: React.PointerEventHandler<HTMLDivElement>;
  placementSideRef: React.MutableRefObject<TooltipSide>;
  portalContainer?: HTMLElement | null;
  referenceElementRef: React.RefObject<HTMLElement | null>;
  side: TooltipSide;
  sideOffset: number;
  variant: TooltipVariant;
}
