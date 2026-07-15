// Restored from ref/webview/assets/annotation-mode-button-BOJdaPpg.js
// annotation-mode-button-BOJdaPpg chunk restored from the Codex webview bundle.
import type {
  ComponentProps,
  CSSProperties,
  MouseEventHandler,
  PointerEventHandler,
} from "react";
import { useState } from "react";
import clsx from "clsx";
import { AnnotateIcon } from "../icons/annotate-icon";
import { Button } from "../ui/button";
type AnnotationModeButtonProps = Omit<
  ComponentProps<typeof Button>,
  | "aria-label"
  | "aria-pressed"
  | "children"
  | "color"
  | "onClick"
  | "onPointerLeave"
  | "size"
  | "style"
> & {
  active: boolean;
  activeHoverSuppressed?: boolean;
  activeLabel: string;
  direction?: "ltr" | "rtl";
  label: string;
  onActiveHoverSuppressedChange?: (isSuppressed: boolean) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onPointerLeave?: PointerEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
};
const COLLAPSED_HOVER_MIX_PERCENT = 10;
const EXPANDED_HOVER_MIX_PERCENT = 15;
const ACTIVE_ANNOTATION_CLASS_NAME =
  "border-token-charts-blue/40 bg-[var(--annotation-mode-button-annotation-background)] !text-token-text-link-foreground enabled:hover:bg-[var(--annotation-mode-button-annotation-hover-background)]";
function AnnotationModeButton({
  active,
  activeHoverSuppressed,
  activeLabel,
  className,
  direction,
  disabled,
  label,
  onActiveHoverSuppressedChange,
  onClick,
  onPointerLeave,
  style,
  ...buttonProps
}: AnnotationModeButtonProps) {
  const [internalHoverSuppressed, setInternalHoverSuppressed] = useState(false);
  const isRtl = (direction ?? getDocumentDirection()) === "rtl";
  const isHoverSuppressed = activeHoverSuppressed ?? internalHoverSuppressed;
  const setHoverSuppressed =
    onActiveHoverSuppressedChange ?? setInternalHoverSuppressed;
  const hoverMixPercent = isHoverSuppressed
    ? COLLAPSED_HOVER_MIX_PERCENT
    : EXPANDED_HOVER_MIX_PERCENT;
  const iconOffsetClassName = active
    ? isRtl
      ? "translate-x-0.5"
      : "-translate-x-0.5"
    : "translate-x-0";
  const ariaLabel = active ? activeLabel : label;
  const activeStyle = active
    ? {
        "--annotation-mode-button-annotation-background": colorMixToken(
          "charts-blue",
          COLLAPSED_HOVER_MIX_PERCENT,
        ),
        "--annotation-mode-button-annotation-hover-background": colorMixToken(
          "charts-blue",
          hoverMixPercent,
        ),
      }
    : {};
  const mergedStyle = {
    ...style,
    ...activeStyle,
  } as CSSProperties;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setHoverSuppressed(!active);
    onClick(event);
  };
  const handlePointerLeave: PointerEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    setHoverSuppressed(false);
    onPointerLeave?.(event);
  };
  return (
    <Button
      {...buttonProps}
      color="ghost"
      size="toolbar"
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={active}
      style={mergedStyle}
      className={clsx(
        "ease-basic relative isolate min-w-8 overflow-hidden transition-[max-width,padding-inline,background-color,background-size,border-color,color] duration-relaxed [will-change:max-width,background-size] motion-reduce:transition-none disabled:opacity-100",
        active
          ? "max-w-40 justify-start px-2.5"
          : "max-w-8 justify-center px-0",
        active && ACTIVE_ANNOTATION_CLASS_NAME,
        className,
      )}
      onClick={handleClick}
      onPointerLeave={handlePointerLeave}
    >
      <span
        className={clsx(
          "flex min-w-0 items-center",
          active ? "justify-start" : "w-full justify-center",
        )}
      >
        <span
          className={clsx(
            "icon-sm relative shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none",
            iconOffsetClassName,
          )}
        >
          <AnnotateIcon className="absolute inset-0 size-full rotate-0 scale-100 opacity-100" />
        </span>
        <span
          className={clsx(
            "ease-basic min-w-0 overflow-hidden whitespace-nowrap text-sm transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none",
            active ? "ms-1 max-w-32 opacity-100" : "ms-0 max-w-0 opacity-0",
          )}
        >
          {activeLabel}
        </span>
      </span>
    </Button>
  );
}
function colorMixToken(tokenName: string, percent: number) {
  return `color-mix(in srgb, var(--color-token-main-surface-primary) ${100 - percent}%, var(--color-token-${tokenName}) ${percent}%)`;
}
function getDocumentDirection() {
  return typeof document === "undefined"
    ? "ltr"
    : window.getComputedStyle(document.documentElement).direction === "rtl"
      ? "rtl"
      : "ltr";
}
function initAnnotationModeButtonChunk(): void {}
export { AnnotationModeButton, initAnnotationModeButtonChunk };
