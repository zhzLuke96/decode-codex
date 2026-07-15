// Restored from ref/webview/assets/tooltip-B-u9JAuV.js

import React from "react";
import clsx from "clsx";
import { TOOLTIP_DISMISS_EVENT } from "../../utils/tooltip-dismiss";
import { TooltipFloatingContent } from "./content";
import { oppositeSide, trackSafePointerArea } from "./geometry";
import {
  TooltipContext,
  TooltipDelayContext,
  TooltipRerenderContext,
  TooltipProvider,
} from "./provider";
import {
  assignButtonRef,
  assignRef,
  isFocusVisible,
  isHtmlElement,
  mergeDescribedBy,
  triggerHasOverflow,
} from "./refs";
import type { TooltipProps, TooltipShortcutProps, TooltipSide } from "./types";
function TooltipShortcut({
  keysLabel,
  variant,
  className,
}: TooltipShortcutProps) {
  const sizeClassName =
    (variant === undefined ? "default" : variant) === "button"
      ? "h-4 min-w-4 items-center justify-center !px-1.5 !py-0 !leading-4"
      : "!px-1.5 !py-0.5 !leading-none";
  return (
    <kbd
      className={clsx(
        "inline-flex !rounded-md !border-0 !bg-current/10 !font-sans !text-xs !text-current !shadow-none",
        sizeClassName,
        className,
      )}
    >
      {keysLabel}
    </kbd>
  );
}
function Tooltip(props: TooltipProps) {
  React.useContext(TooltipRerenderContext);
  const providerDelayDuration = React.useContext(TooltipDelayContext);
  if (props.disabled || props.tooltipContent == null) {
    return <>{props.children}</>;
  }
  return (
    <TooltipInner
      {...props}
      delayDuration={props.delayDuration ?? providerDelayDuration ?? 700}
    />
  );
}
function TooltipInner({
  children,
  delayOpen,
  open,
  defaultOpen,
  disableHoverOpen = false,
  onOpenChange,
  tooltipContent,
  shortcut,
  sideOffset = 2,
  side = "top",
  variant = "tooltip",
  align = "center",
  alignOffset,
  disablePadding = false,
  forceMount = false,
  triggerAsChild = true,
  triggerRef,
  positioningElement,
  tooltipId: tooltipIdProp,
  closeOnTriggerBlur = true,
  delayDuration,
  getDelayDuration,
  ignoreHoverHandoffLock = false,
  interactive = false,
  tooltipClassName,
  tooltipBodyClassName,
  tooltipMaxWidth,
  skipDelayKey = "default",
  openWhen = "always",
  portalContainer,
  className,
  ref,
  ...rest
}: TooltipProps) {
  const generatedTooltipId = React.useId();
  const tooltipId = tooltipIdProp ?? generatedTooltipId;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
    defaultOpen === true,
  );
  const triggerElementRef = React.useRef<HTMLElement | null>(null);
  const positioningElementRef = React.useRef<HTMLElement | null>(null);
  const contentElementRef = React.useRef<HTMLDivElement | null>(null);
  const placementSideRef = React.useRef<TooltipSide>(side);
  const openTimeoutRef = React.useRef<number | null>(null);
  const closeTimeoutRef = React.useRef<number | null>(null);
  const safePointerCleanupRef = React.useRef<(() => void) | null>(null);
  const context = React.useContext(TooltipContext);
  const clearActiveTooltipId = context?.clearActiveTooltipId;
  const clearHoverHandoffLock = context?.clearHoverHandoffLock;
  const controlled = open !== undefined;
  const isOpen = open ?? uncontrolledOpen;
  const clearSafePointerTracking = React.useCallback(() => {
    safePointerCleanupRef.current?.();
    safePointerCleanupRef.current = null;
  }, []);
  React.useEffect(
    () => () => {
      if (typeof window !== "undefined") {
        if (openTimeoutRef.current != null) {
          window.clearTimeout(openTimeoutRef.current);
          openTimeoutRef.current = null;
        }
        if (closeTimeoutRef.current != null) {
          window.clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
      }
      clearSafePointerTracking();
      clearHoverHandoffLock?.(tooltipId);
      clearActiveTooltipId?.(tooltipId);
    },
    [
      clearActiveTooltipId,
      clearHoverHandoffLock,
      clearSafePointerTracking,
      tooltipId,
    ],
  );
  const setTooltipOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!controlled) {
        setUncontrolledOpen(nextOpen);
      }
      if (nextOpen) {
        context?.setActiveTooltipId(tooltipId, skipDelayKey, variant);
      } else {
        context?.clearHoverHandoffLock(tooltipId);
        context?.clearActiveTooltipId(tooltipId);
      }
      onOpenChange?.(nextOpen);
    },
    [context, controlled, onOpenChange, skipDelayKey, tooltipId, variant],
  );
  const clearOpenTimeout = React.useCallback(() => {
    if (openTimeoutRef.current != null && typeof window !== "undefined") {
      window.clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
  }, []);
  const clearCloseTimeout = React.useCallback(() => {
    if (closeTimeoutRef.current != null && typeof window !== "undefined") {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);
  const openTooltipAfterDelay = (delayMs: number) => {
    clearCloseTimeout();
    clearSafePointerTracking();
    if (
      isOpen ||
      openTimeoutRef.current != null ||
      (openWhen === "trigger-overflows" &&
        !triggerHasOverflow(triggerElementRef.current))
    ) {
      return;
    }
    if (delayMs === 0 || typeof window === "undefined") {
      setTooltipOpen(true);
      return;
    }
    openTimeoutRef.current = window.setTimeout(() => {
      openTimeoutRef.current = null;
      if (
        !(
          openWhen === "trigger-overflows" &&
          !triggerHasOverflow(triggerElementRef.current)
        )
      ) {
        setTooltipOpen(true);
      }
    }, delayMs);
  };
  const closeTooltip = React.useCallback(() => {
    clearOpenTimeout();
    clearCloseTimeout();
    clearSafePointerTracking();
    if (isOpen) {
      setTooltipOpen(false);
    }
  }, [
    clearCloseTimeout,
    clearOpenTimeout,
    clearSafePointerTracking,
    isOpen,
    setTooltipOpen,
  ]);
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleTooltipDismiss = () => {
      closeTooltip();
    };
    window.addEventListener(TOOLTIP_DISMISS_EVENT, handleTooltipDismiss);
    return () => {
      window.removeEventListener(TOOLTIP_DISMISS_EVENT, handleTooltipDismiss);
    };
  }, [closeTooltip]);
  const clearInteractiveHandoff = () => {
    context?.clearHoverHandoffLock(tooltipId);
    clearCloseTimeout();
    clearSafePointerTracking();
  };
  const scheduleInteractiveClose = (
    event: React.PointerEvent<HTMLElement>,
    destination: "content" | "reference" = "content",
  ) => {
    clearOpenTimeout();
    clearCloseTimeout();
    clearSafePointerTracking();
    if (typeof window === "undefined") {
      closeTooltip();
      return;
    }
    const scheduleClose = () => {
      clearCloseTimeout();
      closeTimeoutRef.current = window.setTimeout(() => {
        closeTimeoutRef.current = null;
        closeTooltip();
      }, 100);
    };
    const contentElement = contentElementRef.current;
    const triggerElement = triggerElementRef.current;
    if (contentElement == null || triggerElement == null) {
      scheduleClose();
      return;
    }
    const movingTowardReference = destination === "reference";
    const cleanup = trackSafePointerArea({
      destinationElement: movingTowardReference
        ? triggerElement
        : contentElement,
      destinationSide: movingTowardReference
        ? oppositeSide(placementSideRef.current)
        : placementSideRef.current,
      onEnterDestination: clearInteractiveHandoff,
      onMoveInsideTriangle: scheduleClose,
      onMoveOutsideTriangle: closeTooltip,
      pointer: {
        x: event.clientX,
        y: event.clientY,
      },
      sourceElement: movingTowardReference ? contentElement : triggerElement,
    });
    if (cleanup != null) {
      context?.setHoverHandoffLockTooltipId(tooltipId);
      safePointerCleanupRef.current = cleanup;
    }
    scheduleClose();
  };
  React.useEffect(() => {
    if (
      context?.activeTooltipId != null &&
      context.activeTooltipId !== tooltipId &&
      isOpen &&
      !(variant !== "tooltip" && context.activeTooltipVariant === "tooltip")
    ) {
      closeTooltip();
    }
  }, [
    closeTooltip,
    context?.activeTooltipId,
    context?.activeTooltipVariant,
    isOpen,
    tooltipId,
    variant,
  ]);
  const handlePointerOpen = (event: React.PointerEvent<HTMLElement>) => {
    if (
      disableHoverOpen ||
      event.pointerType === "touch" ||
      (!ignoreHoverHandoffLock &&
        context?.isHoverOpenBlocked(tooltipId) === true)
    ) {
      return;
    }
    context?.clearHoverHandoffLock(tooltipId);
    let nextDelayDuration = delayDuration ?? 0;
    if (delayOpen) {
      nextDelayDuration = 250;
    }
    if (
      context?.skipDelayActive === true &&
      context.activeSkipDelayKey === skipDelayKey
    ) {
      nextDelayDuration = 0;
    }
    nextDelayDuration =
      getDelayDuration?.(event, nextDelayDuration) ?? nextDelayDuration;
    openTooltipAfterDelay(nextDelayDuration);
  };
  const triggerState = isOpen ? "delayed-open" : "closed";
  const triggerHandlers: React.HTMLAttributes<HTMLElement> = {
    "aria-describedby": isOpen ? tooltipId : undefined,
    "data-state": triggerState,
    onBlur() {
      if (closeOnTriggerBlur) {
        closeTooltip();
      }
    },
    onContextMenu() {
      clearOpenTimeout();
      closeTooltip();
    },
    onFocus(event) {
      if (isFocusVisible(event)) {
        openTooltipAfterDelay(0);
      }
    },
    onKeyDown(event) {
      if (event.key === "Escape") {
        closeTooltip();
      }
    },
    onPointerEnter(event) {
      handlePointerOpen(event);
    },
    onPointerLeave(event) {
      clearOpenTimeout();
      if (interactive) {
        scheduleInteractiveClose(event);
        return;
      }
      closeTooltip();
    },
    onPointerMove(event) {
      handlePointerOpen(event);
    },
  };
  const triggerProps: React.HTMLAttributes<HTMLElement> = {
    ...rest,
    ...triggerHandlers,
    className,
    onBlur(event) {
      rest.onBlur?.(event);
      triggerHandlers.onBlur?.(event);
    },
    onContextMenu(event) {
      rest.onContextMenu?.(event);
      triggerHandlers.onContextMenu?.(event);
    },
    onFocus(event) {
      rest.onFocus?.(event);
      triggerHandlers.onFocus?.(event);
    },
    onKeyDown(event) {
      rest.onKeyDown?.(event);
      triggerHandlers.onKeyDown?.(event);
    },
    onPointerEnter(event) {
      rest.onPointerEnter?.(event);
      triggerHandlers.onPointerEnter?.(event);
    },
    onPointerLeave(event) {
      rest.onPointerLeave?.(event);
      triggerHandlers.onPointerLeave?.(event);
    },
    onPointerMove(event) {
      rest.onPointerMove?.(event);
      triggerHandlers.onPointerMove?.(event);
    },
  };
  const setTriggerElement = (element: HTMLElement | null) => {
    triggerElementRef.current = element;
  };
  const setTriggerAndForwardRef = (element: HTMLElement | null) => {
    setTriggerElement(element);
    assignRef(ref, element);
  };
  positioningElementRef.current = positioningElement ?? null;
  const referenceElementRef =
    positioningElement == null ? triggerElementRef : positioningElementRef;
  const trigger = renderTrigger({
    children,
    className,
    triggerAsChild,
    triggerProps,
    setTriggerAndForwardRef,
    setTriggerElement,
    triggerRef,
  });
  return (
    <>
      {trigger}
      {isOpen || forceMount ? (
        <TooltipFloatingContent
          id={tooltipId}
          align={align}
          alignOffset={alignOffset}
          className={tooltipClassName}
          contentRef={contentElementRef}
          disablePadding={disablePadding}
          maxWidth={tooltipMaxWidth}
          open={isOpen}
          onPointerEnter={interactive ? clearInteractiveHandoff : undefined}
          onPointerLeave={
            interactive
              ? (event) => {
                  scheduleInteractiveClose(event, "reference");
                }
              : undefined
          }
          placementSideRef={placementSideRef}
          portalContainer={portalContainer}
          referenceElementRef={referenceElementRef}
          side={side}
          sideOffset={sideOffset}
          variant={variant}
        >
          <div
            className={clsx(
              "flex items-center gap-2",
              variant !== "tooltip" && "min-h-0 flex-1",
            )}
          >
            <div
              className={clsx(
                "min-w-0",
                variant !== "tooltip" && "flex min-h-0 w-full",
                tooltipBodyClassName,
              )}
            >
              {tooltipContent}
            </div>
            {shortcut ? <TooltipShortcut keysLabel={shortcut} /> : null}
          </div>
        </TooltipFloatingContent>
      ) : null}
    </>
  );
}

export function initTooltipPrimitives(): void {}

function renderTrigger({
  children,
  className,
  triggerAsChild,
  triggerProps,
  setTriggerAndForwardRef,
  setTriggerElement,
  triggerRef,
}: {
  children: React.ReactNode;
  className?: string;
  triggerAsChild: boolean;
  triggerProps: React.HTMLAttributes<HTMLElement>;
  setTriggerAndForwardRef(element: HTMLElement | null): void;
  setTriggerElement(element: HTMLElement | null): void;
  triggerRef?: React.Ref<HTMLButtonElement>;
}) {
  if (!triggerAsChild) {
    return (
      <button
        ref={(element) => {
          setTriggerAndForwardRef(element);
          assignButtonRef(triggerRef, element);
        }}
        type="button"
        {...(triggerProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
  if (!React.isValidElement(children)) {
    return (
      <span ref={setTriggerAndForwardRef} {...triggerProps}>
        {children}
      </span>
    );
  }
  if (typeof children.type !== "string") {
    return (
      <span
        ref={(element) => {
          const firstChild = element?.firstElementChild ?? null;
          setTriggerElement(isHtmlElement(firstChild) ? firstChild : element);
        }}
        {...triggerProps}
        className={clsx("contents", className)}
      >
        {children}
      </span>
    );
  }
  const child = children as React.ReactElement<
    React.HTMLAttributes<HTMLElement> & {
      ref?: React.Ref<HTMLElement>;
    }
  >;
  return React.cloneElement(child, {
    ...triggerProps,
    "aria-describedby": mergeDescribedBy(
      child.props["aria-describedby"],
      triggerProps["aria-describedby"],
    ),
    className: clsx(child.props.className, className),
    ref: (element: HTMLElement | null) => {
      setTriggerAndForwardRef(element);
      assignRef(child.props.ref, element);
      assignButtonRef(triggerRef, element);
    },
    onBlur: (event: React.FocusEvent<HTMLElement>) => {
      child.props.onBlur?.(event);
      triggerProps.onBlur?.(event);
    },
    onContextMenu: (event: React.MouseEvent<HTMLElement>) => {
      child.props.onContextMenu?.(event);
      triggerProps.onContextMenu?.(event);
    },
    onFocus: (event: React.FocusEvent<HTMLElement>) => {
      child.props.onFocus?.(event);
      triggerProps.onFocus?.(event);
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
      child.props.onKeyDown?.(event);
      triggerProps.onKeyDown?.(event);
    },
    onPointerEnter: (event: React.PointerEvent<HTMLElement>) => {
      child.props.onPointerEnter?.(event);
      triggerProps.onPointerEnter?.(event);
    },
    onPointerLeave: (event: React.PointerEvent<HTMLElement>) => {
      child.props.onPointerLeave?.(event);
      triggerProps.onPointerLeave?.(event);
    },
    onPointerMove: (event: React.PointerEvent<HTMLElement>) => {
      child.props.onPointerMove?.(event);
      triggerProps.onPointerMove?.(event);
    },
  });
}

function initTooltipRuntimeChunk(): void {}

export { TooltipProvider, TooltipShortcut, Tooltip, initTooltipRuntimeChunk };
