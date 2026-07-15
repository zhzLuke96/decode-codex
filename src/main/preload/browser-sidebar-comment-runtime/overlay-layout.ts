// Restored from ref/.vite/build/comment-preload.js
// Overlay viewport, marker, and rect style helpers for browser sidebar comments.

import {
  computeCommentEditorRect,
  scaleRect,
  type BrowserSidebarCommentEditorLayoutOptions,
  type BrowserSidebarPoint,
  type BrowserSidebarRect,
  type BrowserSidebarSize,
} from "./geometry";
import type { BrowserSidebarCommentAnchor } from "./anchors";

export type BrowserSidebarViewportScrollState = BrowserSidebarSize & {
  scrollY: number;
};

export type BrowserSidebarThemeVariant = "dark" | "light";

export type BrowserSidebarOverlayRectStyle = {
  borderRadius?: string;
  height: number;
  left: number;
  top: number;
  width: number;
};

export type BrowserSidebarViewportWindow = {
  innerHeight: number;
  innerWidth: number;
  matchMedia?: Window["matchMedia"];
  scrollY: number;
};

export type BrowserSidebarMarkerViewportSizeInput = {
  anchor: Pick<BrowserSidebarCommentAnchor, "point" | "rect">;
  markerViewportPoint?: BrowserSidebarPoint | null;
  viewportSize?: BrowserSidebarSize | null;
};

export type BrowserSidebarMetadataTooltipRectOptions = {
  viewportScale: number;
  zoomFactor: number;
  tooltipSelector?: string;
};

export const BROWSER_SIDEBAR_MARKER_POINT_INSET = 29;

export function getBrowserSidebarViewportScrollState(
  viewportWindow: BrowserSidebarViewportWindow = window,
): BrowserSidebarViewportScrollState {
  return {
    height: viewportWindow.innerHeight,
    scrollY: viewportWindow.scrollY,
    width: viewportWindow.innerWidth,
  };
}

export function getBrowserSidebarViewportSize(
  viewportWindow: Pick<
    BrowserSidebarViewportWindow,
    "innerHeight" | "innerWidth"
  > = window,
): BrowserSidebarSize {
  return {
    height: viewportWindow.innerHeight,
    width: viewportWindow.innerWidth,
  };
}

export function getBrowserSidebarThemeVariant(
  viewportWindow: Pick<BrowserSidebarViewportWindow, "matchMedia"> = window,
): BrowserSidebarThemeVariant {
  return viewportWindow.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

export function computeBrowserSidebarMarkerViewportSize(
  anchor: Pick<BrowserSidebarCommentAnchor, "point" | "rect">,
  markerViewportPoint: BrowserSidebarPoint | null | undefined,
  viewportWindow: Pick<
    BrowserSidebarViewportWindow,
    "innerHeight" | "innerWidth"
  > = window,
): BrowserSidebarSize | undefined {
  if (markerViewportPoint == null) return undefined;

  const inferredViewportWidth =
    anchor.point.xPercent <= 0
      ? 0
      : markerViewportPoint.x / (anchor.point.xPercent / 100);

  return {
    height: Math.max(
      viewportWindow.innerHeight,
      markerViewportPoint.y + BROWSER_SIDEBAR_MARKER_POINT_INSET,
    ),
    width: Math.max(
      viewportWindow.innerWidth,
      inferredViewportWidth,
      markerViewportPoint.x + BROWSER_SIDEBAR_MARKER_POINT_INSET,
      anchor.rect.x + anchor.rect.width,
    ),
  };
}

export function mergeBrowserSidebarMarkerViewportSize(
  input: BrowserSidebarMarkerViewportSizeInput,
  viewportWindow: Pick<
    BrowserSidebarViewportWindow,
    "innerHeight" | "innerWidth"
  > = window,
): BrowserSidebarSize | undefined {
  const markerViewportSize = computeBrowserSidebarMarkerViewportSize(
    input.anchor,
    input.markerViewportPoint,
    viewportWindow,
  );

  return input.viewportSize == null
    ? markerViewportSize
    : markerViewportSize == null
      ? input.viewportSize
      : {
          height: Math.max(
            input.viewportSize.height,
            markerViewportSize.height,
          ),
          width: Math.max(input.viewportSize.width, markerViewportSize.width),
        };
}

export function applyBrowserSidebarViewportSizeOverride<
  TViewport extends BrowserSidebarSize,
>(
  viewport: TViewport,
  viewportSize: BrowserSidebarSize | null | undefined,
): TViewport {
  return viewportSize == null
    ? viewport
    : {
        ...viewport,
        height: viewportSize.height,
        width: viewportSize.width,
      };
}

export function computeBrowserSidebarEditorOverlayRect(
  anchorRect: BrowserSidebarRect,
  {
    viewport = getBrowserSidebarViewportSize(),
    viewportScale,
    zoomFactor = 1,
  }: Partial<BrowserSidebarCommentEditorLayoutOptions> &
    Pick<BrowserSidebarCommentEditorLayoutOptions, "viewportScale">,
): BrowserSidebarRect {
  return computeCommentEditorRect(anchorRect, {
    viewport,
    viewportScale,
    zoomFactor,
  });
}

export function getElementMetadataTooltipViewportRect(
  hostElement: Element,
  anchorRect: BrowserSidebarRect,
  {
    tooltipSelector = ".element-metadata-tooltip",
    viewportScale,
    zoomFactor,
  }: BrowserSidebarMetadataTooltipRectOptions,
): BrowserSidebarRect {
  const fallbackRect = computeBrowserSidebarEditorOverlayRect(anchorRect, {
    viewportScale,
    zoomFactor,
  });
  const tooltipElement = hostElement.shadowRoot?.querySelector(tooltipSelector);

  if (
    isHtmlElement(tooltipElement) &&
    Number.parseFloat(tooltipElement.style.left) === fallbackRect.x &&
    Number.parseFloat(tooltipElement.style.top) === fallbackRect.y
  ) {
    const tooltipRect = tooltipElement.getBoundingClientRect();
    return {
      x: tooltipRect.x,
      y: tooltipRect.y,
      width: tooltipRect.width,
      height: tooltipRect.height,
    };
  }

  return fallbackRect;
}

export function scaleBrowserSidebarOverlayRect(
  rect: BrowserSidebarRect,
  zoomFactor: number,
): BrowserSidebarRect {
  return scaleRect(rect, zoomFactor);
}

export function browserSidebarRectToOverlayStyle(
  rect: BrowserSidebarRect,
  zoomFactor: number,
  borderRadius?: string,
): BrowserSidebarOverlayRectStyle {
  const scaledRect = scaleBrowserSidebarOverlayRect(rect, zoomFactor);
  return {
    borderRadius,
    height: scaledRect.height,
    left: scaledRect.x,
    top: scaledRect.y,
    width: scaledRect.width,
  };
}

function isHtmlElement(
  value: Element | null | undefined,
): value is HTMLElement {
  if (value == null) return false;

  const HtmlElementCtor =
    value.ownerDocument.defaultView?.HTMLElement ??
    (typeof HTMLElement === "undefined" ? null : HTMLElement);
  return HtmlElementCtor != null && value instanceof HtmlElementCtor;
}
