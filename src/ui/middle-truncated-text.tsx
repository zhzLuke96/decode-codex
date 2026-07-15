// Restored from ref/webview/assets/middle-truncated-text-jFgfXPZs.js
// middle-truncated-text-jFgfXPZs chunk restored from the Codex webview bundle.
import clsx from "clsx";
import { Tooltip } from "./tooltip-b";
import { useMeasuredTextMeasurement } from "../utils/use-measured-text-collapse";
type MiddleTruncatedTextProps = {
  text: string;
  className?: string;
};
let measurementCanvasContext: CanvasRenderingContext2D | null = null;
function getMeasurementCanvasContext() {
  if (typeof document === "undefined") return null;
  if (measurementCanvasContext == null) {
    measurementCanvasContext = document
      .createElement("canvas")
      .getContext("2d");
  }
  return measurementCanvasContext;
}
function measureTextWidth(text: string, font: string) {
  const context = getMeasurementCanvasContext();
  if (context == null) return Number.POSITIVE_INFINITY;
  context.font = font;
  return context.measureText(text).width;
}
function fitsOnSingleLine(text: string, font: string, maxWidthPx: number) {
  return measureTextWidth(text, font) <= maxWidthPx;
}
function middleTruncateText(text: string, font: string, maxWidthPx: number) {
  if (
    text.length === 0 ||
    maxWidthPx <= 0 ||
    fitsOnSingleLine(text, font, maxWidthPx)
  ) {
    return text;
  }
  const characters = Array.from(text);
  let best = "…";
  let low = 0;
  let high = characters.length - 1;
  while (low <= high) {
    const retainedCharacterCount = Math.floor((low + high) / 2);
    const prefixLength = Math.ceil(retainedCharacterCount / 2);
    const suffixLength = Math.floor(retainedCharacterCount / 2);
    const candidate = `${characters.slice(0, prefixLength).join("")}…${characters.slice(characters.length - suffixLength).join("")}`;
    if (fitsOnSingleLine(candidate, font, maxWidthPx)) {
      best = candidate;
      low = retainedCharacterCount + 1;
    } else {
      high = retainedCharacterCount - 1;
    }
  }
  return best;
}
export function MiddleTruncatedText({
  text,
  className,
}: MiddleTruncatedTextProps) {
  const { setTextMeasurementRef, textMeasurement } = useMeasuredTextMeasurement(
    {
      fallbackFontSizePx: 12,
    },
  );
  const displayedText =
    textMeasurement == null
      ? text
      : middleTruncateText(
          text,
          textMeasurement.font,
          textMeasurement.maxWidthPx,
        );
  const textClassName = clsx(
    "block min-w-0 overflow-hidden whitespace-nowrap",
    className,
  );
  const isUntruncated = displayedText === text;
  return (
    <Tooltip tooltipContent={text} disabled={isUntruncated}>
      <span ref={setTextMeasurementRef} className={textClassName}>
        {displayedText}
      </span>
    </Tooltip>
  );
}
