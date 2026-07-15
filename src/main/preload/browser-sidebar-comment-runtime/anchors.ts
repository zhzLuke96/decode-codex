// Restored from ref/.vite/build/comment-preload.js
// Anchor equality helpers for browser sidebar comments and text selections.

import type { BrowserSidebarRect } from "./geometry";
import type { BrowserSidebarGoogleDocsDocumentContext } from "./types";

export type BrowserSidebarScrollContainerSnapshot = {
  selector: string;
  scrollLeft: number;
  scrollTop: number;
};

export type BrowserSidebarAnchorPoint = {
  xPercent: number;
  y: number;
};

export type BrowserSidebarTextLocator = {
  kind: "dom" | "form-control";
  direction: string | null;
  selector: string | null;
  shadowHosts: readonly string[];
  startOffset: number;
  endOffset: number;
  rangeText?: string | null;
};

type BrowserSidebarAnchorBase = {
  pageUrl: string;
  frameUrl: string | null;
  title: string;
  elementPath: string;
  framePath: readonly string[];
  scrollContainers?: readonly BrowserSidebarScrollContainerSnapshot[] | null;
  isFixed: boolean;
  point: BrowserSidebarAnchorPoint;
  rect: BrowserSidebarRect;
  role: string | null;
  name: string | null;
  selector: string | null;
  nearbyText: string | null;
  documentContext?: BrowserSidebarGoogleDocsDocumentContext;
  immediateText?: string | null;
};

export type BrowserSidebarElementAnchor = BrowserSidebarAnchorBase & {
  kind: "element";
};

export type BrowserSidebarRegionAnchor = BrowserSidebarAnchorBase & {
  kind: "region";
};

export type BrowserSidebarTextAnchor = BrowserSidebarAnchorBase & {
  kind: "text";
  selectedText: string;
  selectionRects: readonly BrowserSidebarRect[];
  textLocator: BrowserSidebarTextLocator;
};

export type BrowserSidebarCommentAnchor =
  | BrowserSidebarElementAnchor
  | BrowserSidebarRegionAnchor
  | BrowserSidebarTextAnchor;

export function areScrollContainerSnapshotsEqual(
  first: readonly BrowserSidebarScrollContainerSnapshot[] | null | undefined,
  second: readonly BrowserSidebarScrollContainerSnapshot[] | null | undefined,
): boolean {
  const firstSnapshots = first ?? [];
  const secondSnapshots = second ?? [];
  return (
    firstSnapshots.length === secondSnapshots.length &&
    firstSnapshots.every((snapshot, index) => {
      const secondSnapshot = secondSnapshots[index];
      return (
        secondSnapshot != null &&
        snapshot.selector === secondSnapshot.selector &&
        snapshot.scrollLeft === secondSnapshot.scrollLeft &&
        snapshot.scrollTop === secondSnapshot.scrollTop
      );
    })
  );
}

export function areBrowserSidebarAnchorsEqual(
  first: BrowserSidebarCommentAnchor,
  second: BrowserSidebarCommentAnchor,
): boolean {
  if (first.kind !== second.kind || !haveEqualAnchorBase(first, second)) {
    return false;
  }

  switch (first.kind) {
    case "element":
    case "region":
      return true;
    case "text":
      return (
        second.kind === "text" &&
        first.selectedText === second.selectedText &&
        areTextLocatorsEqual(first.textLocator, second.textLocator) &&
        areRectsEqual(first.selectionRects, second.selectionRects)
      );
  }
}

function haveEqualAnchorBase(
  first: BrowserSidebarCommentAnchor,
  second: BrowserSidebarCommentAnchor,
): boolean {
  return (
    first.pageUrl === second.pageUrl &&
    first.title === second.title &&
    first.elementPath === second.elementPath &&
    first.frameUrl === second.frameUrl &&
    areStringArraysEqual(first.framePath, second.framePath) &&
    areScrollContainerSnapshotsEqual(
      first.scrollContainers,
      second.scrollContainers,
    ) &&
    first.isFixed === second.isFixed &&
    first.point.xPercent === second.point.xPercent &&
    first.point.y === second.point.y &&
    first.rect.x === second.rect.x &&
    first.rect.y === second.rect.y &&
    first.rect.width === second.rect.width &&
    first.rect.height === second.rect.height &&
    first.role === second.role &&
    first.name === second.name &&
    first.selector === second.selector &&
    first.nearbyText === second.nearbyText
  );
}

function areTextLocatorsEqual(
  first: BrowserSidebarTextLocator,
  second: BrowserSidebarTextLocator,
): boolean {
  return (
    first.kind === second.kind &&
    first.direction === second.direction &&
    (first.kind === "form-control" ||
      (second.kind === "dom" && first.rangeText === second.rangeText)) &&
    first.selector === second.selector &&
    areStringArraysEqual(first.shadowHosts, second.shadowHosts) &&
    first.startOffset === second.startOffset &&
    first.endOffset === second.endOffset
  );
}

function areRectsEqual(
  firstRects: readonly BrowserSidebarRect[],
  secondRects: readonly BrowserSidebarRect[],
): boolean {
  return (
    firstRects.length === secondRects.length &&
    firstRects.every((rect, index) => {
      const secondRect = secondRects[index];
      return (
        secondRect != null &&
        rect.x === secondRect.x &&
        rect.y === secondRect.y &&
        rect.width === secondRect.width &&
        rect.height === secondRect.height
      );
    })
  );
}

function areStringArraysEqual(
  first: readonly string[],
  second: readonly string[],
): boolean {
  return (
    first.length === second.length &&
    first.every((item, index) => item === second[index])
  );
}
