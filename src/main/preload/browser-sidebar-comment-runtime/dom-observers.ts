// Restored from ref/.vite/build/comment-preload.js
// Scroll-container and external DOM mutation observers for browser sidebar comments.

import type { BrowserSidebarScrollContainerSnapshot } from "./anchors";
import { isBrowserSidebarElement } from "./element-geometry";

export type BrowserSidebarScrollContainerAnchor = {
  framePath: readonly string[];
  scrollContainers?: readonly BrowserSidebarScrollContainerSnapshot[] | null;
};

export type BrowserSidebarFrameWindowResolver = (
  framePath: readonly string[],
) => Window | null;

export const BROWSER_SIDEBAR_DOM_OBSERVER_INIT: MutationObserverInit = {
  attributeFilter: [
    "aria-hidden",
    "aria-expanded",
    "class",
    "data-state",
    "hidden",
    "inert",
    "open",
    "popover",
    "style",
  ],
  attributes: true,
  childList: true,
  subtree: true,
};

export function subscribeToBrowserSidebarScrollContainers(
  frameWindow: Window,
  anchors: readonly BrowserSidebarScrollContainerAnchor[],
  onScroll: EventListener,
  resolveFrameWindow: BrowserSidebarFrameWindowResolver = (framePath) =>
    framePath.length === 0 ? frameWindow : null,
): () => void {
  const scrollContainerElements = new Set<Element>();

  for (const anchor of anchors) {
    if (
      anchor.scrollContainers == null ||
      resolveFrameWindow(anchor.framePath) !== frameWindow
    ) {
      continue;
    }

    for (const scrollContainer of anchor.scrollContainers) {
      const element = frameWindow.document.querySelector(
        scrollContainer.selector,
      );
      if (isBrowserSidebarElement(element)) {
        scrollContainerElements.add(element);
      }
    }
  }

  for (const element of scrollContainerElements) {
    element.addEventListener("scroll", onScroll);
  }

  return () => {
    for (const element of scrollContainerElements) {
      element.removeEventListener("scroll", onScroll);
    }
  };
}

export function observeBrowserSidebarExternalDomMutations(
  rootDocument: Document,
  ignoredRoot: Node,
  onExternalMutation: () => void,
  observerInit: MutationObserverInit = BROWSER_SIDEBAR_DOM_OBSERVER_INIT,
): () => void {
  const MutationObserverCtor =
    rootDocument.defaultView?.MutationObserver ??
    (typeof MutationObserver === "undefined" ? null : MutationObserver);
  if (MutationObserverCtor == null) return () => {};

  const observer = new MutationObserverCtor((mutationRecords) => {
    const allMutationsAreInsideIgnoredRoot = mutationRecords.every(
      (mutationRecord) =>
        isNodeForDocument(mutationRecord.target, rootDocument) &&
        ignoredRoot.contains(mutationRecord.target),
    );
    if (!allMutationsAreInsideIgnoredRoot) onExternalMutation();
  });

  observer.observe(rootDocument.documentElement, observerInit);
  return () => {
    observer.disconnect();
  };
}

function isNodeForDocument(
  value: unknown,
  rootDocument: Document,
): value is Node {
  const NodeCtor =
    rootDocument.defaultView?.Node ??
    (typeof Node === "undefined" ? null : Node);
  return NodeCtor != null && value instanceof NodeCtor;
}
