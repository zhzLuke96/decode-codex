// Restored from ref/webview/assets/get-resize-observer-entry-size-DrKQ-0pS.js
// get-resize-observer-entry-size-DrKQ-0pS chunk restored from the Codex webview bundle.
type ResizeObserverEntrySize = {
  inlineSize: number;
  blockSize: number;
};

type ResizeObserverEntryLike = {
  borderBoxSize?: ResizeObserverEntrySize | ResizeObserverEntrySize[];
  contentRect: {
    width: number;
    height: number;
  };
};

type ElementSize = {
  width: number;
  height: number;
};

export function getResizeObserverEntrySize(
  entry: ResizeObserverEntryLike,
): ElementSize {
  if (entry.borderBoxSize) {
    const borderBoxSize = Array.isArray(entry.borderBoxSize)
      ? entry.borderBoxSize[0]
      : entry.borderBoxSize;
    return {
      width: borderBoxSize.inlineSize,
      height: borderBoxSize.blockSize,
    };
  }
  return {
    width: entry.contentRect.width,
    height: entry.contentRect.height,
  };
}
