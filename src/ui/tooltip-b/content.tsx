// Restored from ref/webview/assets/tooltip-B-u9JAuV.js

import React from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useFloating,
} from "@floating-ui/react-dom";
import { useWindowZoom } from "../../utils/window-zoom-context";
import { emptyDomRect, floatingPlacement, sideFromPlacement } from "./geometry";
import type { TooltipContentProps } from "./types";
import { assignRef } from "./refs";
export function TooltipFloatingContent({
  align,
  alignOffset,
  children,
  className,
  contentRef,
  disablePadding,
  id,
  maxWidth,
  open,
  onPointerEnter,
  onPointerLeave,
  placementSideRef,
  portalContainer,
  referenceElementRef,
  side,
  sideOffset,
  variant,
}: TooltipContentProps) {
  const zoom = useWindowZoom();
  const [virtualReference] = React.useState(() => ({
    get contextElement() {
      return referenceElementRef.current ?? undefined;
    },
    getBoundingClientRect() {
      return (
        referenceElementRef.current?.getBoundingClientRect() ?? emptyDomRect
      );
    },
  }));
  const floating = useFloating({
    elements: {
      reference: virtualReference,
    },
    open: true,
    placement: floatingPlacement(side, align),
    middleware: [
      offset({
        mainAxis: sideOffset,
        crossAxis: alignOffset,
      }),
      flip({
        padding: 8,
      }),
      shift({
        padding: 8,
      }),
      size({
        padding: 8,
        apply({ availableWidth, availableHeight, elements, rects }) {
          elements.floating.style.setProperty(
            "--radix-tooltip-trigger-width",
            `${Math.max(0, rects.reference.width)}px`,
          );
          elements.floating.style.setProperty(
            "--radix-tooltip-content-available-width",
            `${Math.max(0, availableWidth)}px`,
          );
          elements.floating.style.setProperty(
            "--radix-tooltip-content-available-height",
            `${Math.max(0, availableHeight)}px`,
          );
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const placementSide = sideFromPlacement(floating.placement);
  const needsZoomWrapper = portalContainer == null && zoom !== 1;
  if (typeof document === "undefined") {
    return null;
  }
  const content = (
    <div
      id={id}
      ref={(node) => {
        if (!needsZoomWrapper) {
          floating.refs.setFloating(node);
        }
        assignRef(contentRef, node);
        if (node != null) {
          placementSideRef.current = placementSide;
        }
      }}
      data-side={placementSide}
      aria-hidden={open ? undefined : "true"}
      hidden={!open && variant !== "unstyled"}
      role="tooltip"
      className={clsx(
        "z-50 w-fit select-none text-sm whitespace-normal break-words",
        variant !== "tooltip" && "m-px flex flex-col",
        variant === "rich" &&
          "bg-token-dropdown-background/90 text-token-foreground ring-token-border rounded-xl shadow-xl-spread ring-[0.5px] backdrop-blur-sm",
        variant === "tooltip" &&
          "bg-token-dropdown-background text-token-foreground border-token-border rounded-lg border",
        variant === "tooltip" && !disablePadding && "px-2 py-1",
        !open && "pointer-events-none",
        className,
      )}
      style={{
        ...(needsZoomWrapper ? undefined : floating.floatingStyles),
        zoom: needsZoomWrapper ? zoom : undefined,
        maxWidth:
          maxWidth ??
          "min(20rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
        maxHeight:
          "min(var(--radix-tooltip-content-available-height), calc(100vh - 16px))",
      }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
  return createPortal(
    needsZoomWrapper ? (
      <div
        ref={(node) => {
          floating.refs.setFloating(node);
          if (node?.firstElementChild != null) {
            node.style.pointerEvents = "auto";
            node.style.pointerEvents = getComputedStyle(
              node.firstElementChild,
            ).pointerEvents;
          }
        }}
        className="z-50"
        style={floating.floatingStyles}
      >
        {content}
      </div>
    ) : (
      content
    ),
    portalContainer ?? document.body,
  );
}
