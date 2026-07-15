// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Ask-for-edit button rendered beside a paged annotation anchor.

import type { CSSProperties, MouseEvent, PointerEvent } from "react";

import { EPSILON, FONT_FAMILY } from "./paged-annotation-overlay-constants";
import {
  defaultAskForEditAnchor,
  type AskForEditAlignment,
  type AskForEditAnchor,
  type Rect,
  type Size,
} from "./paged-annotation-overlay-geometry";

function suppressPointerDown(event: PointerEvent<HTMLElement>): void {
  event.preventDefault();
  event.stopPropagation();
}

function getShortcutLabel(): string {
  return typeof navigator !== "undefined" &&
    /Win|Linux/.test(navigator.platform)
    ? "Ctrl I"
    : "⌘I";
}

export interface AskForEditButtonProps {
  anchor?: AskForEditAnchor;
  label: string;
  onClick: () => void;
  pageSize: Size;
  rect: Rect;
  testId?: string;
  zoomScale?: number;
}

export function AskForEditButton({
  anchor,
  label,
  onClick,
  pageSize,
  rect,
  testId,
  zoomScale = 1,
}: AskForEditButtonProps) {
  const resolvedAnchor = anchor ?? defaultAskForEditAnchor(rect);
  const horizontalPercent = (resolvedAnchor.point.x / pageSize.width) * 100;
  const alignment: AskForEditAlignment =
    resolvedAnchor.alignment ??
    (horizontalPercent < 20
      ? "start"
      : horizontalPercent > 80
        ? "end"
        : "center");

  let originX = "center";
  let translateX = "-50%";
  if (alignment === "start") {
    originX = "left";
    translateX = "0";
  } else if (alignment === "end") {
    originX = "right";
    translateX = "-100%";
  }

  const inverseZoom = 1 / Math.max(zoomScale, EPSILON);
  const offset = 6 * inverseZoom;
  const scaleSuffix = inverseZoom === 1 ? "" : ` scale(${inverseZoom})`;
  const left = `${horizontalPercent}%`;
  const top = `${(resolvedAnchor.point.y / pageSize.height) * 100}%`;
  const transform =
    resolvedAnchor.placement === "above"
      ? `translate(${translateX}, calc(-100% - ${offset}px))${scaleSuffix}`
      : `translate(${translateX}, ${offset}px)${scaleSuffix}`;
  const transformOrigin = `${originX} ${resolvedAnchor.placement === "above" ? "bottom" : "top"}`;
  const style: CSSProperties = {
    fontFamily: FONT_FAMILY,
    left,
    top,
    transform,
    transformOrigin,
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };

  return (
    <button
      type="button"
      aria-label={label}
      className="pointer-events-auto absolute z-40 inline-flex h-6 min-w-max cursor-interaction items-center gap-2 rounded-full border-0 bg-white py-[3px] pr-[3px] pl-2 text-[12px] leading-[18px] font-normal tracking-[-0.3px] whitespace-nowrap text-black shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-black/10 hover:bg-[color-mix(in_srgb,white_92%,var(--color-token-foreground)_8%)]"
      data-paged-annotation-ask-for-edit="true"
      data-testid={testId}
      style={style}
      onPointerDown={suppressPointerDown}
      onClick={handleClick}
    >
      <span
        className="inline-flex h-[18px] items-center text-[12px] leading-[18px] font-[400] tracking-[-0.3px]"
        data-paged-annotation-ask-for-edit-label="true"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-[18px] items-center rounded-full bg-[#efefef] px-[6px] text-[12px] leading-[18px] font-[500] tracking-[-0.3px] text-[#6b6b6b]"
        data-paged-annotation-ask-for-edit-shortcut="true"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {getShortcutLabel()}
      </span>
    </button>
  );
}
