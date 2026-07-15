// Restored from ref/.vite/build/comment-preload.js
// Element and region anchor builders for browser sidebar comments.

import {
  type BrowserSidebarElementAnchor,
  type BrowserSidebarRegionAnchor,
} from "./anchors";
import { BrowserSidebarDocumentContextResolver } from "./document-context-resolver";
import {
  getElementOwnerWindow,
  isBrowserSidebarElement,
} from "./element-geometry";
import {
  getBrowserSidebarElementAccessibleName,
  getBrowserSidebarElementImmediateText,
  getBrowserSidebarElementPath,
  getBrowserSidebarElementTitle,
  getBrowserSidebarNearbyElementText,
} from "./element-text";
import { getBrowserSidebarElementSelector } from "./element-selectors";
import {
  getBrowserSidebarFramePathForElement,
  getBrowserSidebarFrameWindow,
  getBrowserSidebarWindowFrameOffset,
} from "./frame-path";
import type { BrowserSidebarPoint, BrowserSidebarRect } from "./geometry";
import { getBrowserSidebarScrollContainerSnapshotsAtPoint } from "./scroll-containers";

export function buildBrowserSidebarElementAnchor(
  element: Element,
  viewportRect: BrowserSidebarRect,
  viewportPoint: BrowserSidebarPoint,
  isFixed?: boolean,
  viewportWidth?: number,
  rootWindow: Window = window,
): BrowserSidebarElementAnchor {
  const anchorIsFixed =
    isFixed ?? isBrowserSidebarElementFixedToRoot(element, rootWindow);
  const anchorViewportWidth = viewportWidth ?? rootWindow.innerWidth;
  const elementWindow = getElementOwnerWindow(element);
  const framePath = getBrowserSidebarFramePathForElement(element, rootWindow);
  const selector =
    framePath == null ? null : getBrowserSidebarElementSelector(element);
  const frameOffset = getBrowserSidebarWindowFrameOffset(
    elementWindow,
    rootWindow,
  );
  const localViewportPoint = {
    x: viewportPoint.x - frameOffset.x,
    y: viewportPoint.y - frameOffset.y,
  };
  const scrollContainers = getBrowserSidebarScrollContainerSnapshotsAtPoint(
    elementWindow,
    localViewportPoint,
  );
  const pageUrl = getBrowserSidebarPageUrl(rootWindow);
  const documentContext = new BrowserSidebarDocumentContextResolver(
    pageUrl,
  ).getElementDocumentContext({
    documentTitle: rootWindow.document.title,
    elementWindow,
    fallbackWindow: rootWindow,
  });

  return {
    kind: "element",
    pageUrl,
    frameUrl: getBrowserSidebarFrameUrl(elementWindow, framePath, rootWindow),
    title: getBrowserSidebarElementTitle(element),
    elementPath: getBrowserSidebarElementPath(element),
    point: {
      xPercent: (viewportPoint.x / anchorViewportWidth) * 100,
      y: anchorIsFixed ? viewportPoint.y : viewportPoint.y + rootWindow.scrollY,
    },
    rect: {
      x: viewportRect.x,
      y: anchorIsFixed ? viewportRect.y : viewportRect.y + rootWindow.scrollY,
      width: viewportRect.width,
      height: viewportRect.height,
    },
    isFixed: anchorIsFixed,
    role: element.getAttribute("role"),
    name: getBrowserSidebarElementAccessibleName(element),
    selector,
    framePath: framePath ?? [],
    nearbyText: getBrowserSidebarNearbyElementText(element),
    immediateText: getBrowserSidebarElementImmediateText(element),
    documentContext,
    ...(scrollContainers.length === 0 ? {} : { scrollContainers }),
  };
}

export function buildBrowserSidebarRegionAnchor(
  viewportRect: BrowserSidebarRect,
  viewportPoint: BrowserSidebarPoint,
  {
    framePath = [],
    frameUrl = null,
    rootWindow = window,
  }: {
    framePath?: readonly string[];
    frameUrl?: string | null;
    rootWindow?: Window;
  } = {},
): BrowserSidebarRegionAnchor {
  const frameWindow =
    getBrowserSidebarFrameWindow(framePath, rootWindow) ?? rootWindow;
  const frameOffset = getBrowserSidebarWindowFrameOffset(
    frameWindow,
    rootWindow,
  );
  const localViewportPoint = {
    x: viewportPoint.x - frameOffset.x,
    y: viewportPoint.y - frameOffset.y,
  };
  const localViewportRect = {
    x: viewportRect.x - frameOffset.x,
    y: viewportRect.y - frameOffset.y,
    width: viewportRect.width,
    height: viewportRect.height,
  };
  const scrollContainers = getBrowserSidebarScrollContainerSnapshotsAtPoint(
    frameWindow,
    localViewportPoint,
  );
  const pageUrl = getBrowserSidebarPageUrl(rootWindow);
  const documentContext = new BrowserSidebarDocumentContextResolver(
    pageUrl,
  ).getRegionDocumentContext({
    documentTitle: rootWindow.document.title,
    fallbackWindow: rootWindow,
    frameWindow,
    viewportRect: localViewportRect,
  });

  return {
    kind: "region",
    pageUrl,
    frameUrl,
    title: "Selected browser region",
    elementPath: "browser region",
    point: {
      xPercent: (localViewportPoint.x / frameWindow.innerWidth) * 100,
      y: localViewportPoint.y + frameWindow.scrollY,
    },
    rect: {
      x: localViewportRect.x,
      y: localViewportRect.y + frameWindow.scrollY,
      width: localViewportRect.width,
      height: localViewportRect.height,
    },
    isFixed: false,
    role: null,
    name: null,
    selector: null,
    framePath,
    nearbyText: null,
    documentContext,
    ...(scrollContainers.length === 0 ? {} : { scrollContainers }),
  };
}

export function isBrowserSidebarElementFixedToRoot(
  element: Element,
  rootWindow: Window = window,
): boolean {
  const elementWindow = getElementOwnerWindow(element);
  if (elementWindow !== rootWindow) return false;

  let currentElement: Element | null = element;
  while (
    currentElement != null &&
    currentElement !== elementWindow.document.body
  ) {
    const position = elementWindow.getComputedStyle(currentElement).position;
    if (position === "fixed" || position === "sticky") return true;
    currentElement = currentElement.parentElement;
  }

  return false;
}

function getBrowserSidebarPageUrl(rootWindow: Window): string {
  return rootWindow.location.href;
}

function getBrowserSidebarFrameUrl(
  frameWindow: Window,
  framePath: readonly string[] | null,
  rootWindow: Window,
): string | null {
  if (framePath == null || framePath.length === 0) return null;

  const frameHref = frameWindow.location.href;
  if (frameHref !== getBrowserSidebarPageUrl(rootWindow)) return frameHref;

  const frameElement = getSafeFrameElement(frameWindow);
  return isBrowserSidebarElement(frameElement) &&
    frameElement.tagName.toLowerCase() === "iframe" &&
    "src" in frameElement &&
    typeof frameElement.src === "string" &&
    frameElement.src !== ""
    ? frameElement.src
    : frameHref;
}

function getSafeFrameElement(frameWindow: Window): Element | null {
  try {
    return frameWindow.frameElement;
  } catch {
    return null;
  }
}
