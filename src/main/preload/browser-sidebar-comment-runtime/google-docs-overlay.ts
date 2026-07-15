// Restored from ref/.vite/build/comment-preload.js
// Google Docs specific overlay class helpers for browser sidebar annotations.

import { BrowserSidebarDocumentContextResolver } from "./document-context-resolver";
import { isGoogleWorkspaceDocumentUrl } from "./google-workspace-urls";
import type { BrowserSidebarRect } from "./geometry";
import type { BrowserSidebarAnchorLike } from "./types";

const GOOGLE_DOCS_MIN_REGION_WIDTH_RATIO = 0.45;
const GOOGLE_DOCS_MIN_REGION_HEIGHT_RATIO = 0.3;

export function getGoogleDocsRegionHoverClassName(
  anchor: BrowserSidebarAnchorLike | null | undefined,
  rect: BrowserSidebarRect | null | undefined,
  viewportWidth: number,
  viewportHeight: number,
  currentPageUrl: string = getCurrentPageUrl(),
): string {
  return isGoogleDocsAnnotationOverlay(
    anchor,
    rect,
    viewportWidth,
    viewportHeight,
    currentPageUrl,
  )
    ? "hover-box region-box google-docs-annotation-box google-docs-region-box"
    : "hover-box region-box";
}

export function getGoogleDocsPostedRegionClassName(
  anchor: BrowserSidebarAnchorLike | null | undefined,
  rect: BrowserSidebarRect | null | undefined,
  viewportWidth: number,
  viewportHeight: number,
  currentPageUrl: string = getCurrentPageUrl(),
): string {
  return isGoogleDocsAnnotationOverlay(
    anchor,
    rect,
    viewportWidth,
    viewportHeight,
    currentPageUrl,
  )
    ? "posted-region-highlight google-docs-annotation-box google-docs-region-box"
    : "posted-region-highlight";
}

export function getGoogleDocsElementHoverClassName(
  anchor: BrowserSidebarAnchorLike | null | undefined,
  rect: BrowserSidebarRect | null | undefined,
  viewportWidth: number,
  viewportHeight: number,
  currentPageUrl: string = getCurrentPageUrl(),
): string {
  return isGoogleDocsAnnotationOverlay(
    anchor,
    rect,
    viewportWidth,
    viewportHeight,
    currentPageUrl,
  )
    ? "hover-box google-docs-annotation-box google-docs-element-box"
    : "hover-box";
}

export function isGoogleDocsAnnotationOverlay(
  anchor: BrowserSidebarAnchorLike | null | undefined,
  rect: BrowserSidebarRect | null | undefined,
  viewportWidth: number,
  viewportHeight: number,
  currentPageUrl: string = getCurrentPageUrl(),
): boolean {
  return (
    isGoogleDocsAnnotationTarget(anchor, currentPageUrl) &&
    isLargeEnoughForGoogleDocsAnnotation(rect, viewportWidth, viewportHeight)
  );
}

export function isGoogleDocsAnnotationTarget(
  anchor: BrowserSidebarAnchorLike | null | undefined,
  currentPageUrl: string = getCurrentPageUrl(),
): boolean {
  return anchor == null
    ? isGoogleWorkspaceDocumentUrl(currentPageUrl)
    : BrowserSidebarDocumentContextResolver.isGoogleDocsAnchor(anchor) ||
        isGoogleWorkspaceDocumentUrl(anchor.pageUrl ?? "");
}

export function isLargeEnoughForGoogleDocsAnnotation(
  rect: BrowserSidebarRect | null | undefined,
  viewportWidth: number,
  viewportHeight: number,
): boolean {
  return rect == null || viewportWidth <= 0 || viewportHeight <= 0
    ? false
    : rect.width >= viewportWidth * GOOGLE_DOCS_MIN_REGION_WIDTH_RATIO &&
        rect.height >= viewportHeight * GOOGLE_DOCS_MIN_REGION_HEIGHT_RATIO;
}

function getCurrentPageUrl(): string {
  return typeof window === "undefined" ? "" : window.location.href;
}
