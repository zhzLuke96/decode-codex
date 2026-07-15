// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Span that middle-truncates text (head…tail) to fit a single line, wrapped in a
// tooltip that reveals the full text only when truncation actually occurs.
import { classNames } from "../utils/class-names";
import { Tooltip } from "../ui/tooltip-b";
import {
  useTextMeasurement,
  measureTextLayout,
  measureTextLineCount,
} from "../boundaries/onboarding-commons-externals.facade";

const ELLIPSIS = "…";
const SINGLE_LINE = 1;

export function initMiddleTruncatedTextChunk(): void {}

export function fitsInSingleLine(
  text: string,
  font: string,
  maxWidthPx: number,
): boolean {
  return (
    measureTextLineCount(
      measureTextLayout(text, font, { whiteSpace: "pre-wrap" }),
      maxWidthPx,
      SINGLE_LINE,
    ).lineCount <= 1
  );
}

export function computeMiddleTruncation(
  text: string,
  font: string,
  maxWidthPx: number,
): string {
  if (
    text.length === 0 ||
    maxWidthPx <= 0 ||
    fitsInSingleLine(text, font, maxWidthPx)
  ) {
    return text;
  }
  const chars = Array.from(text);
  let low = 0;
  let high = chars.length - 1;
  let best = ELLIPSIS;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const headCount = Math.ceil(mid / 2);
    const tailCount = Math.floor(mid / 2);
    const candidate = `${chars.slice(0, headCount).join("")}${ELLIPSIS}${chars
      .slice(chars.length - tailCount)
      .join("")}`;
    if (fitsInSingleLine(candidate, font, maxWidthPx)) {
      best = candidate;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return best;
}

export interface MiddleTruncatedTextProps {
  text: string;
  className?: string;
}

export function MiddleTruncatedText({
  text,
  className,
}: MiddleTruncatedTextProps) {
  const { setTextMeasurementRef, textMeasurement } = useTextMeasurement({
    fallbackFontSizePx: 12,
  });

  let displayText: string;
  if (textMeasurement == null) {
    displayText = text;
  } else {
    displayText = computeMiddleTruncation(
      text,
      textMeasurement.font,
      textMeasurement.maxWidthPx,
    );
  }

  const isUntruncated = displayText === text;
  const spanClassName = classNames(
    "block min-w-0 overflow-hidden whitespace-nowrap",
    className,
  );

  return (
    <Tooltip tooltipContent={text} disabled={isUntruncated}>
      <span ref={setTextMeasurementRef} className={spanClassName}>
        {displayText}
      </span>
    </Tooltip>
  );
}
