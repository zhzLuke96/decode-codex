// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
import React from "react";

export interface UsePdfPageNavigationOptions {
  containerRef: React.MutableRefObject<HTMLElement | null>;
  pageSelector: string;
  totalPages: number;
}

export interface PdfPageNavigationState {
  currentPage: number;
  goToNextPage: () => void;
  goToPage: (pageNumber: number) => void;
  goToPreviousPage: () => void;
}

export const PDF_PAGE_VISIBILITY_THRESHOLDS = [0, 0.25, 0.5, 0.75, 1] as const;

export const PDF_SCROLL_SETTLE_DELAY_MS = 100;

export function usePdfPageNavigation({
  containerRef,
  pageSelector,
  totalPages,
}: UsePdfPageNavigationOptions): PdfPageNavigationState {
  const [trackedPage, setTrackedPage] = React.useState(1);
  const pendingScrollPageRef = React.useRef<number | null>(null);
  const clearPendingScrollSettlementRef = React.useRef<(() => void) | null>(
    null,
  );
  const currentPage = clampPdfPageNumber(trackedPage, totalPages);

  React.useEffect(() => {
    const container = containerRef.current;
    if (
      container == null ||
      totalPages < 1 ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const pageElements = queryPdfPageElements(container, pageSelector);
    if (pageElements.length === 0) return;

    const pageVisibilityByElement = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          pageVisibilityByElement.set(entry.target, entry.intersectionRatio);
        }

        const nextPage = visiblePdfPageNumber({
          container,
          pageElements,
          pageVisibilityByElement,
        });
        if (nextPage == null) return;

        if (
          pendingScrollPageRef.current == null ||
          nextPage !== pendingScrollPageRef.current
        ) {
          setTrackedPage(nextPage);
          return;
        }

        pendingScrollPageRef.current = null;
        clearPendingScrollSettlementRef.current?.();
        clearPendingScrollSettlementRef.current = null;
        setTrackedPage(nextPage);
      },
      { root: container, threshold: PDF_PAGE_VISIBILITY_THRESHOLDS },
    );

    for (const pageElement of pageElements) {
      pageVisibilityByElement.set(pageElement, 0);
      observer.observe(pageElement);
    }

    const initialPage = visiblePdfPageNumber({
      container,
      pageElements,
      pageVisibilityByElement,
    });
    if (initialPage != null) setTrackedPage(initialPage);

    return () => {
      observer.disconnect();
      pendingScrollPageRef.current = null;
      clearPendingScrollSettlementRef.current?.();
      clearPendingScrollSettlementRef.current = null;
    };
  }, [containerRef, pageSelector, totalPages]);

  const goToPage = React.useCallback(
    (pageNumber: number): void => {
      const container = containerRef.current;
      if (container == null) return;

      const pageElement = queryPdfPageElements(container, pageSelector).at(
        pageNumber - 1,
      );
      if (pageElement == null) return;

      clearPendingScrollSettlementRef.current?.();
      clearPendingScrollSettlementRef.current = null;
      pendingScrollPageRef.current = pageNumber;

      let settleTimeout: ReturnType<typeof setTimeout> | null = null;
      const clearScrollListener = () => {
        if (settleTimeout != null) {
          clearTimeout(settleTimeout);
          settleTimeout = null;
        }
        container.removeEventListener("scroll", handleScroll);
      };
      const settleCurrentPage = () => {
        if (pendingScrollPageRef.current !== pageNumber) return;

        pendingScrollPageRef.current = null;
        clearScrollListener();
        const nextPage = visiblePdfPageNumber({
          container,
          pageElements: queryPdfPageElements(container, pageSelector),
          pageVisibilityByElement: new Map(),
        });
        if (nextPage != null) setTrackedPage(nextPage);
      };
      const handleScroll = () => {
        if (settleTimeout != null) clearTimeout(settleTimeout);
        settleTimeout = setTimeout(
          settleCurrentPage,
          PDF_SCROLL_SETTLE_DELAY_MS,
        );
      };

      clearPendingScrollSettlementRef.current = clearScrollListener;
      pageElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setTrackedPage(pageNumber);
      handleScroll();
      container.addEventListener("scroll", handleScroll);
    },
    [containerRef, pageSelector],
  );

  const goToPreviousPage = React.useCallback((): void => {
    const previousPage = currentPage - 1;
    if (previousPage >= 1) goToPage(previousPage);
  }, [currentPage, goToPage]);

  const goToNextPage = React.useCallback((): void => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) goToPage(nextPage);
  }, [currentPage, goToPage, totalPages]);

  return {
    currentPage,
    goToNextPage,
    goToPage,
    goToPreviousPage,
  };
}

export function queryPdfPageElements(
  container: HTMLElement,
  pageSelector: string,
): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(pageSelector));
}

export function clampPdfPageNumber(
  pageNumber: number,
  totalPages: number,
): number {
  return Math.min(Math.max(pageNumber, 1), Math.max(totalPages, 1));
}

export function visiblePdfPageNumber({
  container,
  pageElements,
  pageVisibilityByElement,
}: {
  container: HTMLElement;
  pageElements: readonly HTMLElement[];
  pageVisibilityByElement: ReadonlyMap<Element, number>;
}): number | null {
  if (pageElements.length === 0) return null;

  let visiblePageIndex = 0;
  let greatestVisibility = -1;
  for (const [pageIndex, pageElement] of pageElements.entries()) {
    const visibility = pageVisibilityByElement.get(pageElement) ?? 0;
    if (visibility > greatestVisibility) {
      greatestVisibility = visibility;
      visiblePageIndex = pageIndex;
    }
  }
  if (greatestVisibility > 0) return visiblePageIndex + 1;

  const containerTop = container.getBoundingClientRect().top;
  let closestPageIndex = 0;
  let closestTopDistance = Infinity;
  for (const [pageIndex, pageElement] of pageElements.entries()) {
    const topDistance = Math.abs(
      pageElement.getBoundingClientRect().top - containerTop,
    );
    if (topDistance < closestTopDistance) {
      closestTopDistance = topDistance;
      closestPageIndex = pageIndex;
    }
  }

  return closestPageIndex + 1;
}
