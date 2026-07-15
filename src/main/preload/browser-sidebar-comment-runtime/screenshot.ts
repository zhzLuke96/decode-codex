// Restored from ref/.vite/build/comment-preload.js
// Comment screenshot coordination helpers for browser sidebar annotations.

import type { BrowserSidebarCommentAnchor } from "./anchors";
import {
  getBrowserSidebarBoundingRect,
  getBrowserSidebarTextSelectionViewportRects,
} from "./anchor-rects";
import type {
  BrowserSidebarPoint,
  BrowserSidebarRect,
  BrowserSidebarSize,
} from "./geometry";
import { isGoogleWorkspaceDocumentUrl } from "./google-workspace-urls";
import type { BrowserSidebarThemeVariant } from "./overlay-layout";

export type BrowserSidebarScreenshotAnnotationBase = {
  anchor: BrowserSidebarCommentAnchor;
  id: string;
  markerViewportPoint?: BrowserSidebarPoint | null;
  markerViewportSize?: BrowserSidebarSize | null;
  themeVariant?: BrowserSidebarThemeVariant;
  viewportSize?: BrowserSidebarSize | null;
};

export type BrowserSidebarScreenshotAnnotation<
  TComment extends
    BrowserSidebarScreenshotAnnotationBase = BrowserSidebarScreenshotAnnotationBase,
  TDesign extends
    BrowserSidebarScreenshotAnnotationBase = BrowserSidebarScreenshotAnnotationBase,
> =
  | {
      annotation: TComment;
      kind: "comment";
    }
  | {
      annotation: TDesign;
      kind: "design";
    };

export type BrowserSidebarCommentScreenshotReadyMessage = {
  annotationViewportRect: BrowserSidebarRect | null;
  commentId: string;
  markerViewportPoint?: BrowserSidebarPoint;
  skipScreenshotCapture?: true;
  type: "browser-sidebar-runtime-comment-screenshot-ready";
};

export function resolveBrowserSidebarScreenshotAnnotation<
  TComment extends BrowserSidebarScreenshotAnnotationBase,
  TDesign extends BrowserSidebarScreenshotAnnotationBase,
>(
  preparedCommentId: string | null | undefined,
  commentAnnotations: readonly TComment[],
  designAnnotations: readonly TDesign[],
): BrowserSidebarScreenshotAnnotation<TComment, TDesign> | null {
  if (preparedCommentId == null) return null;

  const commentAnnotation =
    commentAnnotations.find(
      (annotation) => annotation.id === preparedCommentId,
    ) ?? null;
  if (commentAnnotation != null) {
    return {
      annotation: commentAnnotation,
      kind: "comment",
    };
  }

  const designAnnotation =
    designAnnotations.find(
      (annotation) => annotation.id === preparedCommentId,
    ) ?? null;
  return designAnnotation == null
    ? null
    : {
        annotation: designAnnotation,
        kind: "design",
      };
}

export function getBrowserSidebarScreenshotAnnotationId(
  screenshotAnnotation: BrowserSidebarScreenshotAnnotation | null | undefined,
): string | null {
  return screenshotAnnotation?.annotation.id ?? null;
}

export function retainPreparedBrowserSidebarScreenshotId<
  TComment extends { id: string },
>(
  preparedCommentId: string | null | undefined,
  comments: readonly TComment[],
): string | null {
  return preparedCommentId != null &&
    !comments.some((comment) => comment.id === preparedCommentId)
    ? null
    : (preparedCommentId ?? null);
}

export function getBrowserSidebarScreenshotViewportRect(
  screenshotAnnotation: BrowserSidebarScreenshotAnnotation | null | undefined,
  fallbackViewportRect: BrowserSidebarRect | null,
  rootWindow: Window = window,
): BrowserSidebarRect | null {
  if (screenshotAnnotation == null) return null;

  const anchor = screenshotAnnotation.annotation.anchor;
  return anchor.kind === "text"
    ? (getBrowserSidebarBoundingRect(
        getBrowserSidebarTextSelectionViewportRects(anchor, rootWindow),
      ) ?? fallbackViewportRect)
    : fallbackViewportRect;
}

export function shouldSkipBrowserSidebarScreenshotCapture(
  screenshotAnnotation: BrowserSidebarScreenshotAnnotation | null | undefined,
  elementTarget: Element | null | undefined,
): boolean {
  return (
    screenshotAnnotation?.kind === "comment" &&
    screenshotAnnotation.annotation.anchor.kind === "element" &&
    elementTarget == null &&
    !isGoogleWorkspaceDocumentUrl(
      screenshotAnnotation.annotation.anchor.pageUrl,
    )
  );
}

export function createBrowserSidebarCommentScreenshotReadyMessage(
  commentId: string,
  annotationViewportRect: BrowserSidebarRect | null,
  markerViewportPoint: BrowserSidebarPoint | undefined,
  skipScreenshotCapture: boolean,
): BrowserSidebarCommentScreenshotReadyMessage {
  return {
    type: "browser-sidebar-runtime-comment-screenshot-ready",
    commentId,
    annotationViewportRect,
    markerViewportPoint,
    ...(skipScreenshotCapture
      ? {
          skipScreenshotCapture: true,
        }
      : {}),
  };
}

export function shouldSendBrowserSidebarScreenshotReady(
  preparedCommentId: string | null | undefined,
  annotationId: string | null | undefined,
  lastReadyAnnotationId: string | null | undefined,
): boolean {
  return (
    preparedCommentId != null &&
    annotationId != null &&
    lastReadyAnnotationId !== annotationId
  );
}
