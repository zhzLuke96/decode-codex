// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds a diff-search provider for a single workspace file preview, treating the
// whole file as one "source" hunk and implementing scroll-to-line against the
// embedded <diffs-container> shadow DOM.
import { createDiffSearchProvider } from "./diff-search-adapter";
import { waitForDoubleAnimationFrame } from "./review-scroll-into-view";

const DEFAULT_LINE_HEIGHT = 20;
const MAX_SCROLL_ATTEMPTS = 8;

export function initFileSourceSearchAdapterChunk(): void {}

export interface CreateFileSourceSearchProviderOptions {
  contents: string;
  getFileContainer: () => HTMLElement | null;
  path: string;
  windowZoom: number;
}

export function createFileSourceSearchProvider({
  contents,
  getFileContainer,
  path,
  windowZoom,
}: CreateFileSourceSearchProviderOptions) {
  return createDiffSearchProvider({
    contextId: `file:${path}`,
    getFiles: () => [
      {
        path,
        hunks: [
          {
            hunkId: "source",
            lineMapping: "contiguous",
            lineEnd: countContentLines(contents),
            lineStart: 1,
            text: contents,
          },
        ],
      },
    ],
    scrollAdapter: {
      getFileContainer: (requestedPath) =>
        requestedPath === path ? getFileContainer() : null,
      scrollToFile: async (requestedPath, options) => {
        if (requestedPath !== path || options?.signal?.aborted) return;
        getFileContainer()?.scrollIntoView({
          behavior: "auto",
          block: "nearest",
        });
      },
      scrollToLocation: async (location, options) => {
        if (
          location.path !== path ||
          options?.signal?.aborted ||
          location.lineStart < 1
        )
          return;
        const container = getFileContainer();
        if (container != null) {
          await scrollToLineWithRetry(
            container,
            location.lineStart,
            windowZoom,
            options,
          );
        }
      },
    },
  });
}

function countContentLines(contents: string): number {
  return Math.max(1, contents.split("\n").length);
}

async function scrollToLineWithRetry(
  container: HTMLElement,
  line: number,
  windowZoom: number,
  options?: { signal?: AbortSignal },
): Promise<void> {
  for (let attempt = 0; attempt < MAX_SCROLL_ATTEMPTS; attempt++) {
    if (
      options?.signal?.aborted ||
      !scrollToLineInContainer(container, line, windowZoom)
    )
      return;
    await waitForDoubleAnimationFrame();
  }
}

function scrollToLineInContainer(
  container: HTMLElement,
  line: number,
  windowZoom: number,
): boolean {
  const shadowRoot =
    container.querySelector("diffs-container")?.shadowRoot ?? null;
  if (shadowRoot == null) return false;
  const exact = shadowRoot.querySelector(`[data-line="${line}"]`);
  if (exact != null) {
    exact.scrollIntoView({ block: "center", behavior: "instant" });
    return false;
  }
  const nearest = findNearestLineElement(shadowRoot, line);
  if (nearest == null) return false;
  const nearestLine = Number(nearest.dataset.line);
  if (!Number.isFinite(nearestLine)) return false;
  const zoom = windowZoom > 0 ? windowZoom : 1;
  const lineHeight = estimateLineHeight(nearest, zoom);
  const containerRect = container.getBoundingClientRect();
  const offsetWithinContainer =
    (nearest.getBoundingClientRect().top - containerRect.top) / zoom;
  const target =
    container.scrollTop +
    offsetWithinContainer +
    (line - nearestLine) * lineHeight;
  container.scrollTo({
    top: Math.max(0, target - (container.clientHeight - lineHeight) / 2),
    behavior: "auto",
  });
  return true;
}

function findNearestLineElement(
  shadowRoot: ShadowRoot,
  line: number,
): HTMLElement | null {
  let nearest: HTMLElement | null = null;
  let smallestDistance = Infinity;
  for (const element of shadowRoot.querySelectorAll<HTMLElement>(
    "[data-line]",
  )) {
    const elementLine = Number(element.dataset.line);
    if (!Number.isFinite(elementLine)) continue;
    const distance = Math.abs(line - elementLine);
    if (distance < smallestDistance) {
      nearest = element;
      smallestDistance = distance;
    }
  }
  return nearest;
}

function estimateLineHeight(element: HTMLElement, zoom: number): number {
  const height = element.getBoundingClientRect().height;
  if (height > 0) return height / zoom;
  const computed = Number.parseFloat(
    window.getComputedStyle(element).lineHeight,
  );
  return Number.isFinite(computed) ? computed : DEFAULT_LINE_HEIGHT;
}
