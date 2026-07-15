// Restored from ref/webview/assets/infinite-scroll-pagination-spinner-CqKOYMC4.js
// Also matches ref/webview/assets/infinite-scroll-pagination-spinner-iQsEdPrJ.js.
// Also matches ref/webview/assets/infinite-scroll-pagination-spinner-DKk_zYlO.js.
// Current DKk_zYlO source rechecked against IntersectionObserver pagination loading.
import React from "react";
import { once } from "../runtime/commonjs-interop";
import { Spinner } from "../ui/spinner";
type UseEffectEvent = <Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
) => (...args: Args) => Return;
type InfiniteScrollPaginationSpinnerProps = {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onLoadNextPage: () => void;
};
const useEffectEvent = (
  React as typeof React & {
    useEffectEvent: UseEffectEvent;
  }
).useEffectEvent;
export const initInfiniteScrollPaginationSpinnerChunk = once(() => {});
function InfiniteScrollPaginationSpinner({
  hasNextPage,
  isFetchingNextPage,
  onLoadNextPage,
}: InfiniteScrollPaginationSpinnerProps) {
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);
  const loadNextPage = useEffectEvent(() => {
    if (hasNextPage && !isFetchingNextPage) onLoadNextPage();
  });
  React.useEffect(() => {
    const sentinel = sentinelRef.current;
    if (sentinel == null || !hasNextPage || isFetchingNextPage) return;
    if (typeof IntersectionObserver === "undefined") {
      loadNextPage();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(isIntersectingEntry)) {
        observer.disconnect();
        loadNextPage();
      }
    });
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage]);
  if (!hasNextPage && !isFetchingNextPage) return null;
  return (
    <div ref={sentinelRef} className="flex justify-center py-3">
      <Spinner className="icon-xs text-token-text-secondary" />
    </div>
  );
}
function isIntersectingEntry(entry: IntersectionObserverEntry) {
  return entry.isIntersecting;
}
export { InfiniteScrollPaginationSpinner };
