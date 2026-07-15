// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scroll helpers for bringing a review search match into view, waiting for layout
// to settle across double animation frames.

import { findContentSearchMatchElement } from "../find/dom-content-search";

export function waitForDoubleAnimationFrame(): Promise<void> {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export interface ScrollMatchIntoViewOptions {
  container: Element;
  matchId: string;
  includeShadowRoots: boolean;
  scrollBehavior?: ScrollBehavior;
  signal?: AbortSignal;
  timeoutMs?: number;
}

export function scrollMatchIntoView({
  container,
  matchId,
  includeShadowRoots,
  scrollBehavior = "smooth",
  signal,
  timeoutMs = 1500,
}: ScrollMatchIntoViewOptions): Promise<void> {
  const findMatch = (): Element | null =>
    findContentSearchMatchElement({ container, matchId, includeShadowRoots });

  if (signal?.aborted) return Promise.resolve();

  const existing = findMatch();
  if (existing != null) {
    existing.scrollIntoView({ block: "center", behavior: scrollBehavior });
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let frameHandle: number | null = null;
    let timeoutHandle: number | null = null;

    function cleanup() {
      if (frameHandle != null) {
        window.cancelAnimationFrame(frameHandle);
        frameHandle = null;
      }
      if (timeoutHandle != null) {
        window.clearTimeout(timeoutHandle);
        timeoutHandle = null;
      }
      signal?.removeEventListener("abort", onAbort);
    }

    function finish(element?: Element | null) {
      cleanup();
      element?.scrollIntoView({ block: "center", behavior: scrollBehavior });
      resolve();
    }

    function onAbort() {
      finish();
    }

    function poll() {
      if (signal?.aborted) {
        finish();
        return;
      }
      const found = findMatch();
      if (found != null) {
        finish(found);
        return;
      }
      frameHandle = window.requestAnimationFrame(poll);
    }

    signal?.addEventListener("abort", onAbort, { once: true });
    timeoutHandle = window.setTimeout(() => {
      finish();
    }, timeoutMs);
    frameHandle = window.requestAnimationFrame(poll);
  });
}
