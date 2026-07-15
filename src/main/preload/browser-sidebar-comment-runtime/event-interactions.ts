// Restored from ref/.vite/build/comment-preload.js
// Event and overlay-root interaction helpers for browser sidebar comments.

export const BROWSER_SIDEBAR_COMMENTS_ROOT_ID =
  "codex-browser-sidebar-comments-root";
export const BROWSER_SIDEBAR_INTERACTION_BLOCKER_ATTRIBUTE =
  "data-browser-comment-interaction-blocker";

export type BrowserSidebarComposedPathEvent = {
  composedPath(): EventTarget[];
};

export type BrowserSidebarStoppableEvent = BrowserSidebarComposedPathEvent & {
  preventDefault(): void;
  stopImmediatePropagation?: () => void;
  stopPropagation(): void;
};

export type BrowserSidebarStopEventOptions = {
  preventDefault?: boolean;
};

export function eventComposedPathIncludes(
  event: BrowserSidebarComposedPathEvent,
  target: EventTarget,
): boolean {
  return event.composedPath().includes(target);
}

export function isBrowserSidebarRootEvent(
  event: BrowserSidebarComposedPathEvent,
  rootElement: EventTarget,
): boolean {
  return (
    eventComposedPathIncludes(event, rootElement) &&
    !eventHasBrowserSidebarInteractionBlocker(event)
  );
}

export function eventHasBrowserSidebarInteractionBlocker(
  event: BrowserSidebarComposedPathEvent,
  interactionBlockerAttribute: string = BROWSER_SIDEBAR_INTERACTION_BLOCKER_ATTRIBUTE,
): boolean {
  return event
    .composedPath()
    .some(
      (pathItem) =>
        isHtmlElement(pathItem) &&
        pathItem.hasAttribute(interactionBlockerAttribute),
    );
}

export function stopBrowserSidebarEvent(
  event: BrowserSidebarStoppableEvent,
  { preventDefault = true }: BrowserSidebarStopEventOptions = {},
): void {
  if (preventDefault) event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation?.();
}

export function isBrowserSidebarOverlayElement(
  element: Element,
  rootId: string = BROWSER_SIDEBAR_COMMENTS_ROOT_ID,
): boolean {
  if (element.id === rootId || element.closest(`#${rootId}`) != null) {
    return true;
  }

  const rootNode = element.getRootNode();
  return (
    isShadowRoot(rootNode) &&
    isHtmlElement(rootNode.host) &&
    rootNode.host.id === rootId
  );
}

function isHtmlElement(value: unknown): value is HTMLElement {
  if (typeof value !== "object" || value == null) return false;

  const element = value as Partial<HTMLElement>;
  const HtmlElementCtor =
    element.ownerDocument?.defaultView?.HTMLElement ??
    (typeof HTMLElement === "undefined" ? null : HTMLElement);
  return HtmlElementCtor != null && value instanceof HtmlElementCtor;
}

function isShadowRoot(value: unknown): value is ShadowRoot {
  if (typeof value !== "object" || value == null) return false;

  const ShadowRootCtor = typeof ShadowRoot === "undefined" ? null : ShadowRoot;
  return ShadowRootCtor != null && value instanceof ShadowRootCtor;
}
