// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scroll-position preservation for review find: locates a file's container element,
// measures its offset within the scroll container, and keeps the anchored file
// visually stable while search results are cleared/rebuilt (across a few frames).

import type { MutableRefObject } from "react";

const SCROLL_RESTORE_MAX_FRAMES = 12;

interface FileContainerLookup {
  diffRefs: MutableRefObject<Map<string, Element>>;
  path: string;
  scrollContainerRef: MutableRefObject<HTMLElement | null>;
}

export function findFileContainer({
  diffRefs,
  path,
  scrollContainerRef,
}: FileContainerLookup): Element | null {
  const tracked = diffRefs.current.get(path);
  if (tracked != null) return tracked;
  const scrollContainer = scrollContainerRef.current;
  if (scrollContainer == null) return null;
  for (const element of scrollContainer.querySelectorAll<HTMLElement>(
    "[data-review-path]",
  )) {
    if (element.dataset.reviewPath === path) return element;
  }
  return null;
}

interface RelativeTopArgs {
  element: Element;
  scrollContainer: Element;
}

export function getRelativeTop({
  element,
  scrollContainer,
}: RelativeTopArgs): number {
  return (
    element.getBoundingClientRect().top -
    scrollContainer.getBoundingClientRect().top
  );
}

interface PreserveScrollArgs {
  diffRefs: MutableRefObject<Map<string, Element>>;
  location: { domain?: string; path: string } | null | undefined;
  scrollContainerRef: MutableRefObject<HTMLElement | null>;
}

export function preserveScrollBeforeResultClear({
  diffRefs,
  location,
  scrollContainerRef,
}: PreserveScrollArgs): (() => void) | null {
  if (location?.domain !== "diff") return null;
  const scrollContainer = scrollContainerRef.current;
  const container = findFileContainer({
    diffRefs,
    path: location.path,
    scrollContainerRef,
  });
  if (scrollContainer == null || container == null) return null;
  const originalTop = getRelativeTop({ element: container, scrollContainer });
  return () => {
    const currentScrollContainer = scrollContainerRef.current;
    const currentContainer = findFileContainer({
      diffRefs,
      path: location.path,
      scrollContainerRef,
    });
    if (currentScrollContainer == null || currentContainer == null) return;
    const currentTop = getRelativeTop({
      element: currentContainer,
      scrollContainer: currentScrollContainer,
    });
    currentScrollContainer.scrollTop += currentTop - originalTop;
  };
}

interface ScheduleScrollRestoreArgs {
  restoreSearchScroll: () => void;
}

export function scheduleScrollRestore({
  restoreSearchScroll,
}: ScheduleScrollRestoreArgs): () => void {
  let frameCount = 0;
  let rafId: number | null = null;
  let cancelled = false;

  const cancel = () => {
    cancelled = true;
    if (rafId != null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const step = () => {
    if (cancelled) return;
    restoreSearchScroll();
    frameCount += 1;
    if (frameCount >= SCROLL_RESTORE_MAX_FRAMES) {
      cancel();
      return;
    }
    rafId = window.requestAnimationFrame(step);
  };

  step();
  return cancel;
}
