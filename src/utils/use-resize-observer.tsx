// Restored from ref/webview/assets/use-resize-observer-Dtew4DIP.js
// Also covers ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~kyb0i2zb-B27VQcu6.js.

import { createContext, useContext, useRef, useState } from "react";
import { getResizeObserverEntrySize } from "./get-resize-observer-entry-size";
import { useStableCallback } from "./use-stable-callback";
type ResizeObserverElement<TElement extends Element = Element> = TElement & {
  [resizeObserverCallbacksSymbol]?: Set<(entry: ResizeObserverEntry) => void>;
  [resizeObserverLastEntrySymbol]?: ResizeObserverEntry;
};
const ResizeObserverContext = createContext<ResizeObserver | null>(null);
const resizeObserverCallbacksSymbol = Symbol("resizeObserverCallbacks");
const resizeObserverLastEntrySymbol = Symbol("resizeObserverLastEntry");
function createSharedResizeObserver() {
  return typeof ResizeObserver > "u"
    ? null
    : new ResizeObserver((entries) => {
        for (const entry of entries) {
          const target = entry.target as ResizeObserverElement;
          target[resizeObserverLastEntrySymbol] = entry;
          target[resizeObserverCallbacksSymbol]?.forEach((callback) =>
            callback(entry),
          );
        }
      });
}
function observeElementResize({
  callback,
  element,
  observer,
}: {
  callback: (entry: ResizeObserverEntry) => void;
  element: ResizeObserverElement;
  observer: ResizeObserver | null;
}) {
  const callbacks = element[resizeObserverCallbacksSymbol];
  if (callbacks != null) {
    callbacks.add(callback);
    const lastEntry = element[resizeObserverLastEntrySymbol];
    if (lastEntry != null) callback(lastEntry);
    return;
  }
  element[resizeObserverCallbacksSymbol] = new Set([callback]);
  observer?.observe(element);
}
function unobserveElementResize({
  callback,
  element,
  observer,
}: {
  callback: (entry: ResizeObserverEntry) => void;
  element: ResizeObserverElement;
  observer: ResizeObserver | null;
}) {
  const callbacks = element[resizeObserverCallbacksSymbol];
  if (callbacks == null) return;
  callbacks.delete(callback);
  if (callbacks.size > 0) return;
  element[resizeObserverCallbacksSymbol] = undefined;
  element[resizeObserverLastEntrySymbol] = undefined;
  observer?.unobserve(element);
}
function useResizeObserverRef<TElement extends Element = Element>(
  onResize: (entry: ResizeObserverEntry, element: TElement) => void,
) {
  const observer = useContext(ResizeObserverContext);
  const currentElementRef = useRef<ResizeObserverElement<TElement> | null>(
    null,
  );
  const handleResize = useStableCallback((entry: ResizeObserverEntry) => {
    const element = currentElementRef.current;
    if (element != null) onResize(entry, element);
  });
  return useStableCallback(
    (element: ResizeObserverElement<TElement> | null) => {
      if (observer == null) {
        throw Error(
          "useResizeObserver must be used within ResizeObserverProvider.",
        );
      }
      if (currentElementRef.current != null) {
        unobserveElementResize({
          callback: handleResize,
          element: currentElementRef.current,
          observer,
        });
      }
      currentElementRef.current = element;
      if (element != null) {
        observeElementResize({
          callback: handleResize,
          element,
          observer,
        });
      }
    },
  );
}
function useElementSize() {
  const [size, setSize] = useState<{
    height: number | null;
    width: number | null;
  }>({
    width: null,
    height: null,
  });
  const ref = useResizeObserverRef((entry) => {
    const { width, height } = entry.contentRect;
    setSize({
      width,
      height,
    });
  });
  return [ref, size] as const;
}
function useElementWidth() {
  const [width, setWidth] = useState<number | null>(null);
  const ref = useResizeObserverRef((entry) => {
    setWidth(getResizeObserverEntrySize(entry).width);
  });
  return [ref, width] as const;
}
function initResizeObserverEntrySizeChunk(): void {}
function initResizeObserverContextChunk(): void {}
function initResizeObserverSymbolsChunk(): void {}
function initResizeObserverHooksChunk(): void {}
function initUseResizeObserverChunk(): void {}

export {
  ResizeObserverContext,
  createSharedResizeObserver,
  getResizeObserverEntrySize,
  initResizeObserverContextChunk,
  initResizeObserverEntrySizeChunk,
  initResizeObserverHooksChunk,
  initResizeObserverSymbolsChunk,
  initUseResizeObserverChunk,
  useElementSize,
  useElementWidth,
  useResizeObserverRef,
};
