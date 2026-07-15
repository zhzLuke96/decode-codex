// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared constants for the browser sidebar comment overlay.

import type { CSSProperties } from "react";
import clsx from "clsx";

export const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif';

export const COMMENT_SURFACE_STYLE_VARS: CSSProperties = {
  "--codex-chat-font-size": "13px",
  "--composer-top-tray-background": "var(--color-token-main-surface-primary)",
  "--composer-top-tray-border": "transparent",
  "--font-sans": FONT_STACK,
  "--vscode-font-family": FONT_STACK,
  fontFamily: FONT_STACK,
} as CSSProperties;

export const PROSE_CLASS = clsx(
  "text-token-text-primary min-h-0 w-full p-0 leading-normal !font-sans",
  "[&_.ProseMirror]:w-full",
  "[&_.ProseMirror]:!text-token-foreground",
  "[&_.ProseMirror]:!font-sans",
  "[&_.ProseMirror]:px-0",
  "[&_.ProseMirror]:py-0",
  "[&_.ProseMirror]:!leading-6",
  "[&_.ProseMirror_p]:!font-sans",
  "[&_.ProseMirror_p]:!leading-6",
  "[&_.ProseMirror_p_*]:!font-sans",
  "[&_.ProseMirror_span]:!font-sans",
  "!min-h-0 text-base",
  "[&_.ProseMirror]:min-h-6",
);

export const INPUT_ABSOLUTE_CLASS =
  "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none";
export const FOOTER_CLASS =
  "absolute inset-x-0 bottom-0 flex h-12 items-center pl-2 pr-3 origin-bottom-left transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none";
export const TOP_TRAY_CLASS =
  "pointer-events-none absolute inset-x-0 top-0 flex flex-col justify-end pb-2";
export const CARD_AREA_CLASS =
  "pointer-events-none absolute inset-x-0 flex flex-col overflow-visible bg-transparent";
export const MEASURE_SPAN_CLASS =
  "pointer-events-none absolute top-0 left-0 whitespace-pre text-base leading-normal font-sans opacity-0";
export const PREVIEW_INNER_CLASS =
  "box-border flex h-full w-fit max-w-full overflow-hidden rounded-[22px] bg-token-dropdown-background px-4 shadow-md ring-1 ring-token-border-light";
export const PREVIEW_TEXT_CLASS =
  "min-w-0 max-w-full text-base leading-6 font-sans text-token-foreground";
export const MENTION_CLASS = "font-semibold";
export const INPUT_MAX_HEIGHT_180 = "!max-h-[180px] overflow-y-auto";
export const INPUT_MAX_HEIGHT_FULL = "!max-h-full overflow-y-auto";
export const ATTACHMENT_ROW_TOP_3 = "top-3";
export const ATTACHMENT_ROW_TOP_24 = "top-24";
export const ATTACHMENT_TOP_PADDING = "pt-24";
export const INPUT_RIGHT_PADDING_52 = "pr-[52px]";
export const DESIGN_PROMPT_EXPANDED =
  "max-h-[84px] min-h-[48px] overflow-hidden";
export const DESIGN_PROMPT_SCROLL =
  "!h-auto !max-h-[84px] overflow-y-auto pb-2";
export const DESIGN_STACK_CLASS = "flex min-h-0 flex-col px-4 pb-12";

export const SUBMIT_BUTTON_WIDTH = 28;
export const INPUT_RIGHT_INSET = 8;
export const DESIGN_TOGGLE_WIDTH = 32;
export const INPUT_LEFT_INSET = 16;
export const INPUT_GAP = 8;
export const COMPOSER_EXPAND_THRESHOLD = 12;
export const COMPOSER_EXPAND_FALLBACK_LENGTH = 40;
export const DESIGN_PROMPT_EXPAND_THRESHOLD = 4;
export const DRAG_MARGIN = 8;
export const ADJUST_HINT_DURATION_MS = 90;
export const SCRUB_HIDE_DELAY_MS = 150;
