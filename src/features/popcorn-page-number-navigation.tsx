// Restored from ref/webview/assets/PopcornPageNumberNavigation-2i17P54k.js
// Also matches ref/webview/assets/PopcornPageNumberNavigation-VRpKM1l8.js.
// Also matches ref/webview/assets/PopcornPageNumberNavigation-Cr5rDVih.js.
import React from "react";
import {
  remoteTextEditSessionC as ChevronLeftIcon,
  remoteTextEditSessionW as ChevronRightIcon,
} from "../runtime/current-app-initial/remote-text-edit-session-current-runtime";
import { once } from "../runtime/commonjs-interop";
type PopcornPageNumberNavigationProps = {
  currentIndex: number;
  totalCount: number;
  itemLabel: string;
  onChangeIndex: (index: number) => void;
  disabled?: boolean;
  testId?: string;
};
const iconStyle: React.CSSProperties = {
  height: "18px",
  width: "18px",
};
export const initPopcornPageNumberNavigationChunk = once(() => {});
export function PopcornPageNumberNavigation({
  currentIndex,
  totalCount,
  itemLabel,
  onChangeIndex,
  disabled = false,
  testId = "popcorn-page-number-navigation",
}: PopcornPageNumberNavigationProps) {
  const displayIndex = totalCount > 0 ? currentIndex + 1 : 0;
  const canNavigatePrevious = !disabled && totalCount > 0 && currentIndex > 0;
  const canNavigateNext =
    !disabled && totalCount > 0 && currentIndex < totalCount - 1;
  return (
    <div
      className="flex items-center gap-0.5 text-sm tabular-nums"
      data-testid={testId}
    >
      <button
        type="button"
        aria-label={`Go to previous ${itemLabel}`}
        data-testid={`${testId}-previous`}
        className="text-token-text-secondary inline-flex h-8 w-8 cursor-interaction items-center justify-center rounded-md border border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!canNavigatePrevious}
        onClick={() => onChangeIndex(currentIndex - 1)}
      >
        <ChevronLeftIcon style={iconStyle} />
      </button>
      <span
        className="min-w-12 px-1 text-center text-token-text-primary"
        data-testid={`${testId}-indicator`}
      >
        {displayIndex}/{Math.max(0, totalCount)}
      </span>
      <button
        type="button"
        aria-label={`Go to next ${itemLabel}`}
        data-testid={`${testId}-next`}
        className="text-token-text-secondary inline-flex h-8 w-8 cursor-interaction items-center justify-center rounded-md border border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!canNavigateNext}
        onClick={() => onChangeIndex(currentIndex + 1)}
      >
        <ChevronRightIcon style={iconStyle} />
      </button>
    </div>
  );
}
