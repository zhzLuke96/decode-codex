// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
import type { ComponentType, ReactNode } from "react";
export type IconComponent = ComponentType<{
  className?: string;
}>;
export type DropdownSurface = "bare" | "menu" | "panel";
export type DropdownContentWidth =
  | "icon"
  | "xs"
  | "sm"
  | "menuNarrow"
  | "menu"
  | "menuFixed"
  | "menuBounded"
  | "menuWide"
  | "sidebar"
  | "workspace"
  | "panel"
  | "panelWide";
export type DropdownContentMaxHeight = "list" | "tall";
export type DropdownIconSize = "xs" | "sm" | "md";
export type DropdownTooltipSide = "top" | "right" | "bottom" | "left";
export type DropdownTooltipAlign = "start" | "center" | "end";
export type DropdownTooltipProps = {
  align?: DropdownTooltipAlign;
  disabled?: boolean;
  interactive?: boolean;
  openWhen?: string;
  side?: DropdownTooltipSide;
  text?: ReactNode;
  textClassName?: string;
};
export function getSurfaceClassName(surface: DropdownSurface | undefined) {
  if (surface === "panel") return "rounded-2xl p-4 shadow-2xl backdrop-blur-lg";
}
export function getContentWidthClassName(
  width: DropdownContentWidth | undefined,
) {
  if (width === "icon") return "min-w-[120px]";
  if (width === "xs") return "min-w-[160px]";
  if (width === "sm") return "min-w-[180px]";
  if (width === "menuNarrow") return "w-52";
  if (width === "menu") return "min-w-[220px]";
  if (width === "menuFixed") return "w-[220px]";
  if (width === "menuBounded") return "min-w-[200px] max-w-[320px]";
  if (width === "menuWide") return "w-[240px]";
  if (width === "sidebar") return "min-w-[172px] max-w-[240px]";
  if (width === "workspace") return "min-w-[260px]";
  if (width === "panel") return "w-[280px]";
  if (width === "panelWide") return "w-[360px]";
}
export function getContentMaxHeightClassName(
  maxHeight: DropdownContentMaxHeight | undefined,
) {
  if (maxHeight === "list") return "max-h-[250px]";
  if (maxHeight === "tall") return "max-h-[350px]";
}
