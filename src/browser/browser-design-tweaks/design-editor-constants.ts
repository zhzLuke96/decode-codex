// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared class names, option lists, and scrub tuning for the browser design-tweaks editor.
import { dataUrlFromSvg } from "../../utils/data-url-from";

const numericInput = "_numericInput_dz8fh_1";
const colorInput = "_colorInput_dz8fh_19";

export const designEditorInputClasses = {
  numericInput,
  colorInput,
} as const;

export type SuggestionOption = {
  label?: string;
  value: string;
};

export const FONT_FAMILY_OPTIONS: SuggestionOption[] = [
  { label: "Inter", value: '"Inter Variable", Arial, sans-serif' },
  { label: "System", value: "system-ui, sans-serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Serif", value: 'Georgia, "Times New Roman", serif' },
  {
    label: "Mono",
    value:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },
];

export const FONT_WEIGHT_OPTIONS: string[] = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export const SPACING_SIDES = ["top", "bottom", "left", "right"] as const;
export const SPACING_SIDE_ORDER = ["top", "right", "bottom", "left"] as const;

export const DECLARATION_ORDER: string[] = [
  "color",
  "background-color",
  "opacity",
  "font-family",
  "font-size",
  "font-weight",
  "border-radius",
  "border-color",
  "border-width",
  "flex-direction",
  "justify-content",
  "align-items",
  "gap",
  "column-gap",
  "row-gap",
];

export const INPUT_FRAME_CLASS =
  "min-w-0 rounded-lg border border-token-input-border bg-token-input-background text-token-input-foreground shadow-sm outline-none transition-colors focus-within:border-token-focus-border focus-within:ring-1 focus-within:ring-token-focus-border";

export const INPUT_TEXT_CLASS =
  "min-w-0 appearance-none border-0 bg-transparent font-mono text-xs text-token-input-foreground outline-none ring-0 placeholder:text-token-input-placeholder-foreground focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0";

export const COLOR_INPUT_CLASS = designEditorInputClasses.colorInput;
export const NUMERIC_INPUT_CLASS = designEditorInputClasses.numericInput;

export const INPUT_WIDTH_LG = "w-[192px] max-w-full";
export const INPUT_WIDTH_MD = "w-[168px] max-w-full";
export const INPUT_WIDTH_SM = "w-[112px]";

export const SCRUB_CURSOR = `url("${dataUrlFromSvg(
  "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 1 11 4H9v4H7V4H5l3-3Z' fill='#475569'/><path d='M8 15 5 12h2V8h2v4h2l-3 3Z' fill='#475569'/></svg>",
)}") 8 8, ns-resize`;

export const SCRUB_PIXELS_PER_STEP = 4;
export const SCRUB_ACTIVATION_THRESHOLD = SCRUB_PIXELS_PER_STEP;
