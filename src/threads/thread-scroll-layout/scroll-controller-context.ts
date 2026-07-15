// Restored from ref/webview/assets/thread-scroll-controller-context-value-C-Inw11x.js
// Thread scroll controller context restored from the current Codex webview bundle.
import React from "react";
export type ScrollDistanceListener = (distanceFromBottomPx: number) => void;
export type UserScrollListener = (
  distanceFromBottomPx: number,
  previousDistanceFromBottomPx: number,
) => void;
export type ThreadScrollController = {
  addScrollListener(listener: ScrollDistanceListener): () => void;
  addUserScrollListener(listener: UserScrollListener): () => void;
  getLastScrollDistanceFromBottomPx(): number;
  getScrollElement(): HTMLDivElement | null;
  isScrolledFromBottom: boolean;
  preserveScrollPositionForNextLayout(): void;
  scrollToBottom(): void;
  scrollToDistanceFromBottomPx(
    distanceFromBottomPx: number,
    behavior: ScrollBehavior,
  ): void;
  setFooterResizeViewportPreserveDisabled(disabled: boolean): void;
};
export const threadScrollControllerContext =
  React.createContext<ThreadScrollController | null>(null);
export function initThreadScrollControllerContextChunk(): void {}
export function useThreadScrollController(): ThreadScrollController {
  const controller = React.use(threadScrollControllerContext);
  if (controller == null) {
    throw new Error(
      "useThreadScrollController must be used within ThreadScrollLayout",
    );
  }
  return controller;
}
