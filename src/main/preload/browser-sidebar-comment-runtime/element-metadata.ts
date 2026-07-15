// Restored from ref/.vite/build/comment-preload.js
// DOM element style snapshot helpers for browser sidebar design anchors.

import { normalizeCssColorValue } from "./colors";
import {
  readDesignStyleDeclarations,
  type BrowserSidebarDesignStyleDeclaration,
} from "./design-css";
import {
  getElementOwnerWindow,
  getVisibleElementViewportRect,
} from "./element-geometry";
import type { BrowserSidebarRect } from "./geometry";

export type BrowserSidebarElementSnapshot = {
  borderRadius: string;
  color: string;
  font: string;
  styles: BrowserSidebarDesignStyleDeclaration[];
  rect: BrowserSidebarRect;
  size: string;
  tagName: string;
};

export const BROWSER_SIDEBAR_BASE_DESIGN_STYLE_PROPERTIES = [
  "color",
  "background-color",
  "font-size",
  "font-family",
  "font-weight",
  "border-radius",
  "border-color",
  "border-width",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "width",
  "height",
  "opacity",
] as const;

export const BROWSER_SIDEBAR_FLEX_DESIGN_STYLE_PROPERTIES = [
  "flex-direction",
  "justify-content",
  "align-items",
  "gap",
  "row-gap",
  "column-gap",
] as const;

export function getBrowserSidebarElementSnapshot(
  element: Element,
): BrowserSidebarElementSnapshot | null {
  const rect = getVisibleElementViewportRect(element);
  if (rect == null) return null;

  const style = getElementOwnerWindow(element).getComputedStyle(element);
  const borderRadius =
    style.borderRadius.length === 0 ? "0px" : style.borderRadius;

  return {
    borderRadius,
    color: normalizeCssColorValue(style.color),
    font: `${style.fontSize} ${style.fontFamily}`.trim(),
    styles: readBrowserSidebarElementDesignStyleDeclarations(element),
    rect,
    size: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
    tagName: element.tagName.toLowerCase(),
  };
}

export function readBrowserSidebarElementDesignStyleDeclarations(
  element: Element,
): BrowserSidebarDesignStyleDeclaration[] {
  const style = getElementOwnerWindow(element).getComputedStyle(element);
  const properties =
    style.display === "flex" || style.display === "inline-flex"
      ? [
          ...BROWSER_SIDEBAR_BASE_DESIGN_STYLE_PROPERTIES,
          ...BROWSER_SIDEBAR_FLEX_DESIGN_STYLE_PROPERTIES,
        ]
      : BROWSER_SIDEBAR_BASE_DESIGN_STYLE_PROPERTIES;

  return readDesignStyleDeclarations(style, properties);
}
