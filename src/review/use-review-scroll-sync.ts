// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hook that tracks which review file is "active" based on scroll position: keeps a
// map of per-file container refs, computes the most-visible file on scroll (debounced),
// and exposes selectFile (scrolls into view) + setSelectedPathWithoutScroll.

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useEffectEvent } from "../boundaries/onboarding-commons-externals.facade";

const SCROLL_SETTLE_DELAY_MS = 160;

interface ReviewScrollSyncFileEntry {
  path: string;
}

export interface UseReviewScrollSyncArgs {
  fileEntries: ReviewScrollSyncFileEntry[];
  scrollSyncEnabled: boolean;
}

export interface UseReviewScrollSyncResult {
  scrollContainerRef: React.MutableRefObject<HTMLElement | null>;
  diffRefs: React.MutableRefObject<Map<string, Element>>;
  selectedFilePath: string | undefined;
  activeFilePath: string | undefined;
  selectFile: (path: string) => void;
  setSelectedPathWithoutScroll: (path: string) => void;
}

export function useReviewScrollSync({
  fileEntries,
  scrollSyncEnabled,
}: UseReviewScrollSyncArgs): UseReviewScrollSyncResult {
  const [selectedFilePath, setSelectedFilePath] = useState<string | undefined>(
    () => fileEntries[0]?.path,
  );
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const diffRefs = useRef<Map<string, Element>>(new Map());
  const scrollTimeoutRef = useRef<number | null>(null);
  const pendingPathRef = useRef<string | undefined>(undefined);
  const fileEntriesRef = useRef(fileEntries);

  useLayoutEffect(() => {
    fileEntriesRef.current = fileEntries;
  }, [fileEntries]);

  let activeFilePath: string | undefined;
  if (fileEntries.length > 0) {
    activeFilePath = selectedFilePath;
    if (
      activeFilePath == null ||
      !fileEntries.some((entry) => entry.path === activeFilePath)
    ) {
      activeFilePath = fileEntries[0].path;
    }
  }

  const computeVisibleFilePath = (): string | undefined => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || fileEntries.length === 0) return;
    const containerRect = scrollContainer.getBoundingClientRect();
    const firstEntry = fileEntries[0];
    const lastEntry = fileEntries[fileEntries.length - 1];
    const firstElement = firstEntry
      ? diffRefs.current.get(firstEntry.path)
      : undefined;
    const lastElement = lastEntry
      ? diffRefs.current.get(lastEntry.path)
      : undefined;
    const isFullyVisible = (rect: DOMRect) =>
      rect.top >= containerRect.top && rect.bottom <= containerRect.bottom;

    if (
      firstEntry &&
      firstElement &&
      isFullyVisible(firstElement.getBoundingClientRect())
    ) {
      return firstEntry.path;
    }
    if (
      lastEntry &&
      lastElement &&
      isFullyVisible(lastElement.getBoundingClientRect())
    ) {
      return lastEntry.path;
    }

    let bestPath: string | undefined;
    let bestVisibleRatio = -1;
    let bestOverlap = 0;
    for (const entry of fileEntries) {
      const element = diffRefs.current.get(entry.path);
      if (!element) continue;
      const rect = element.getBoundingClientRect();
      const top = Math.max(rect.top, containerRect.top);
      const bottom = Math.min(rect.bottom, containerRect.bottom);
      const overlap = Math.max(0, bottom - top);
      if (overlap === 0) continue;
      const visibleRatio = overlap / Math.max(1, rect.height);
      if (
        visibleRatio > bestVisibleRatio ||
        (visibleRatio === bestVisibleRatio && overlap > bestOverlap)
      ) {
        bestPath = entry.path;
        bestVisibleRatio = visibleRatio;
        bestOverlap = overlap;
      }
    }
    if (bestPath) return bestPath;
  };

  const computeVisibleFilePathEvent = useEffectEvent(computeVisibleFilePath);

  const syncSelectedPath = () => {
    const next = pendingPathRef.current ?? computeVisibleFilePathEvent();
    if (next && selectedFilePath !== next) setSelectedFilePath(next);
  };

  const syncSelectedPathEvent = useEffectEvent(syncSelectedPath);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const handleScroll = () => {
      if (scrollTimeoutRef.current != null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      pendingPathRef.current = undefined;
      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollTimeoutRef.current = null;
        if (scrollSyncEnabled) syncSelectedPathEvent();
      }, SCROLL_SETTLE_DELAY_MS);
    };
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollTimeoutRef.current != null) {
        window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [fileEntries, scrollSyncEnabled]);

  useEffect(() => {
    if (scrollSyncEnabled) {
      pendingPathRef.current = computeVisibleFilePathEvent();
      syncSelectedPathEvent();
    }
  }, [fileEntries, scrollSyncEnabled]);

  const setSelectedPathWithoutScroll = (path: string) => {
    if (fileEntriesRef.current.some((entry) => entry.path === path)) {
      setSelectedFilePath(path);
    }
  };

  const selectFile = (path: string) => {
    if (!fileEntries.some((entry) => entry.path === path)) return;
    setSelectedFilePath(path);
    const element = diffRefs.current.get(path);
    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return {
    scrollContainerRef,
    diffRefs,
    selectedFilePath,
    activeFilePath,
    selectFile,
    setSelectedPathWithoutScroll,
  };
}
