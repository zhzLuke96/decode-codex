// Restored from ref/.vite/build/comment-preload.js
// Anchor-state conversion helpers for browser sidebar comment editor flows.

import type {
  BrowserSidebarCommentAnchor,
  BrowserSidebarElementAnchor,
} from "./anchors";
import { getBrowserSidebarAnchorViewportRect } from "./anchor-rects";
import { buildBrowserSidebarElementAnchor } from "./element-anchor-builders";
import { reprojectBrowserSidebarElementAnchor } from "./element-anchor-reprojection";
import { getVisibleElementViewportRect } from "./element-geometry";
import type {
  BrowserSidebarPoint,
  BrowserSidebarRect,
  BrowserSidebarSize,
} from "./geometry";
import { getBrowserSidebarClampedMarkerPoint } from "./marker-positioning";
import {
  computeBrowserSidebarEditorOverlayRect,
  getBrowserSidebarThemeVariant,
  getBrowserSidebarViewportSize,
  getBrowserSidebarViewportScrollState,
  type BrowserSidebarThemeVariant,
} from "./overlay-layout";
import { restoreBrowserSidebarTextAnchorState } from "./text-anchor-state";

export type BrowserSidebarAnchorState = {
  anchor: BrowserSidebarCommentAnchor;
  cardViewportRect?: BrowserSidebarRect;
  themeVariant?: BrowserSidebarThemeVariant;
  viewportPoint: BrowserSidebarPoint;
  viewportRect: BrowserSidebarRect | null;
  viewportSize: BrowserSidebarSize;
};

export type BrowserSidebarCommentItem = {
  anchor: BrowserSidebarCommentAnchor;
  id?: string;
  markerViewportPoint?: BrowserSidebarPoint | null;
  themeVariant?: BrowserSidebarThemeVariant;
};

export type BrowserSidebarStoredEditorAnchor =
  | {
      themeVariant?: BrowserSidebarThemeVariant;
      type: "region" | "text";
      value: BrowserSidebarCommentAnchor;
    }
  | {
      cardViewportRect?: BrowserSidebarRect;
      element?: Element | null;
      themeVariant?: BrowserSidebarThemeVariant;
      type: "element";
      value: BrowserSidebarElementAnchor;
      viewportSize?: BrowserSidebarSize | null;
    };

export type BrowserSidebarEditorAnchorEvent = {
  anchor: BrowserSidebarStoredEditorAnchor;
  target: {
    commentId?: string;
    mode: "create" | "design" | "edit";
  };
};

export type BrowserSidebarSerializedEditorAnchor = {
  anchor: BrowserSidebarStoredEditorAnchor;
  target: BrowserSidebarEditorAnchorEvent["target"];
};

export function createBrowserSidebarElementAnchorState(
  element: Element,
  x: number,
  y: number,
  rootWindow: Window = window,
): BrowserSidebarAnchorState {
  const viewportSize = getBrowserSidebarViewportSize(rootWindow);
  const viewportRect = getVisibleElementViewportRect(element);
  const viewportPoint = { x, y };

  return {
    anchor: buildBrowserSidebarElementAnchor(
      element,
      viewportRect ?? { x, y, width: 0, height: 0 },
      viewportPoint,
      viewportRect == null ? false : undefined,
      viewportSize.width,
      rootWindow,
    ),
    themeVariant: getBrowserSidebarThemeVariant(rootWindow),
    viewportPoint,
    viewportRect,
    viewportSize,
  };
}

export function createBrowserSidebarAnchorStateForComment(
  comment: BrowserSidebarCommentItem,
  element: Element | null,
  zoomFactor: number,
  rootWindow: Window = window,
): BrowserSidebarAnchorState {
  if (comment.anchor.kind === "text") {
    return (
      restoreBrowserSidebarTextAnchorState(comment.anchor, rootWindow) ??
      createBrowserSidebarAnchorStateForAnchor(
        comment.anchor,
        zoomFactor,
        comment.themeVariant,
        rootWindow,
      )
    );
  }

  if (comment.anchor.kind === "region") {
    return createBrowserSidebarAnchorStateForAnchor(
      comment.anchor,
      zoomFactor,
      comment.themeVariant,
      rootWindow,
    );
  }

  const viewportSize = getBrowserSidebarViewportSize(rootWindow);
  const anchor =
    element == null
      ? comment.anchor
      : reprojectBrowserSidebarElementAnchor(
          element,
          comment.anchor,
          viewportSize,
          comment.markerViewportPoint,
          rootWindow,
        );

  return {
    anchor,
    themeVariant:
      comment.themeVariant ?? getBrowserSidebarThemeVariant(rootWindow),
    viewportRect:
      element == null
        ? getBrowserSidebarAnchorViewportRect(comment.anchor, rootWindow)
        : getVisibleElementViewportRect(element),
    viewportPoint: getBrowserSidebarClampedMarkerPoint(anchor, zoomFactor, {
      rootWindow,
      viewportSize,
    }),
    viewportSize,
  };
}

export function createBrowserSidebarAnchorStateForAnchor(
  anchor: BrowserSidebarCommentAnchor,
  zoomFactor: number,
  themeVariant?: BrowserSidebarThemeVariant,
  rootWindow: Window = window,
): BrowserSidebarAnchorState {
  const viewport = getBrowserSidebarViewportScrollState(rootWindow);
  return {
    anchor,
    themeVariant: themeVariant ?? getBrowserSidebarThemeVariant(rootWindow),
    viewportRect: getBrowserSidebarAnchorViewportRect(anchor, rootWindow),
    viewportPoint: getBrowserSidebarClampedMarkerPoint(anchor, zoomFactor, {
      rootWindow,
      viewportSize: {
        width: viewport.width,
        height: viewport.height,
      },
    }),
    viewportSize: {
      width: viewport.width,
      height: viewport.height,
    },
  };
}

export function createBrowserSidebarAnchorStateForEditorEvent(
  event: BrowserSidebarEditorAnchorEvent,
  zoomFactor: number,
  viewportScale: number,
  rootWindow: Window = window,
): BrowserSidebarAnchorState {
  if (event.anchor.type === "text") {
    return (
      restoreBrowserSidebarTextAnchorState(event.anchor.value, rootWindow) ??
      createBrowserSidebarAnchorStateForAnchor(
        event.anchor.value,
        zoomFactor,
        event.anchor.themeVariant,
        rootWindow,
      )
    );
  }

  if (event.anchor.type === "region") {
    return createBrowserSidebarAnchorStateForAnchor(
      event.anchor.value,
      zoomFactor,
      event.anchor.themeVariant,
      rootWindow,
    );
  }

  const elementRect =
    event.anchor.element == null || !event.anchor.element.isConnected
      ? null
      : getVisibleElementViewportRect(event.anchor.element);
  const viewportSize = getBrowserSidebarViewportSize(rootWindow);
  const anchor =
    event.anchor.element == null || !event.anchor.element.isConnected
      ? event.anchor.value
      : reprojectBrowserSidebarElementAnchor(
          event.anchor.element,
          event.anchor.value,
          viewportSize,
          undefined,
          rootWindow,
        );

  return {
    anchor,
    cardViewportRect:
      event.target.mode === "design"
        ? (event.anchor.cardViewportRect ??
          (elementRect == null
            ? undefined
            : computeBrowserSidebarEditorOverlayRect(elementRect, {
                viewportScale,
                zoomFactor,
              })))
        : undefined,
    themeVariant:
      event.anchor.themeVariant ?? getBrowserSidebarThemeVariant(rootWindow),
    viewportRect: elementRect,
    viewportPoint: getBrowserSidebarClampedMarkerPoint(anchor, zoomFactor, {
      rootWindow,
      viewportSize,
    }),
    viewportSize,
  };
}

export function serializeBrowserSidebarEditorAnchor(
  event: {
    anchorState: BrowserSidebarAnchorState;
    target: BrowserSidebarEditorAnchorEvent["target"];
  },
  resolvedElement: Element | null = null,
): BrowserSidebarSerializedEditorAnchor {
  const anchor = event.anchorState.anchor;
  if (anchor.kind === "text") {
    return {
      target: event.target,
      anchor: {
        type: "text",
        ...(event.anchorState.themeVariant == null
          ? {}
          : { themeVariant: event.anchorState.themeVariant }),
        value: anchor,
      },
    };
  }

  if (anchor.kind === "region") {
    return {
      target: event.target,
      anchor: {
        type: "region",
        themeVariant: event.anchorState.themeVariant,
        value: anchor,
      },
    };
  }

  return {
    target: event.target,
    anchor: {
      type: "element",
      cardViewportRect: event.anchorState.cardViewportRect,
      element: resolvedElement,
      themeVariant: event.anchorState.themeVariant,
      viewportSize: event.anchorState.viewportSize,
      value: anchor,
    },
  };
}
