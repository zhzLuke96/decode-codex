// Restored from ref/.vite/build/comment-preload.js
// Text locator root and offset helpers for browser sidebar text anchors.

import type { BrowserSidebarTextLocator } from "./anchors";
import { isBrowserSidebarElement } from "./element-geometry";
import { getBrowserSidebarElementSelector } from "./element-selectors";
import {
  getFrameElementContentWindow,
  resolveBrowserSidebarFrameElement,
} from "./frame-path";

export type BrowserSidebarTextLocatorRoot = Pick<
  BrowserSidebarTextLocator,
  "selector" | "shadowHosts"
>;

export type BrowserSidebarTextPosition = {
  node: Node;
  offset: number;
};

export function isBrowserSidebarDocumentOrShadowRoot(root: Node): boolean {
  const NodeCtor =
    root.ownerDocument?.defaultView?.Node ??
    (typeof Node === "undefined" ? null : Node);
  return (
    NodeCtor != null &&
    (root.nodeType === NodeCtor.DOCUMENT_NODE ||
      (root.nodeType === NodeCtor.DOCUMENT_FRAGMENT_NODE && "host" in root))
  );
}

export function getBrowserSidebarTextLocatorRoot(
  node: Node,
): Element | ShadowRoot | null {
  if (isBrowserSidebarShadowRoot(node)) return node;

  let currentElement =
    node.nodeType === getNodeElementType(node)
      ? (node as Element)
      : node.parentElement;

  while (isBrowserSidebarElement(currentElement)) {
    if (getBrowserSidebarElementSelector(currentElement) != null) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }

  return null;
}

export function getBrowserSidebarTextLocatorRootDescriptor(
  root: Element | ShadowRoot,
): BrowserSidebarTextLocatorRoot | null {
  const selector = isBrowserSidebarElement(root)
    ? getBrowserSidebarElementSelector(root, { requireUnique: true })
    : null;
  if (isBrowserSidebarElement(root) && selector == null) return null;

  const shadowHosts: string[] = [];
  let currentRoot = root.getRootNode();
  while (currentRoot !== root.ownerDocument) {
    const host = getBrowserSidebarShadowHost(currentRoot);
    if (host == null || host.shadowRoot !== currentRoot) return null;

    const hostSelector = getBrowserSidebarElementSelector(host, {
      requireUnique: true,
    });
    if (hostSelector == null) return null;
    shadowHosts.unshift(hostSelector);
    currentRoot = host.getRootNode();
  }

  return { selector, shadowHosts };
}

export function resolveBrowserSidebarTextLocatorTarget(
  frameWindow: Window,
  locator: BrowserSidebarTextLocator,
): Element | ShadowRoot | null {
  let root: Document | ShadowRoot = frameWindow.document;

  for (const shadowHostSelector of locator.shadowHosts) {
    const shadowHost = root.querySelector(shadowHostSelector);
    if (!isBrowserSidebarElement(shadowHost) || shadowHost.shadowRoot == null) {
      return null;
    }
    root = shadowHost.shadowRoot;
  }

  if (locator.kind === "dom" && locator.selector == null) {
    return isBrowserSidebarShadowRoot(root) ? root : null;
  }
  if (locator.selector == null) return null;

  const element = root.querySelector(locator.selector);
  return isBrowserSidebarElement(element) ? element : null;
}

export function getBrowserSidebarFrameDocumentsUntilPath(
  framePath: readonly string[],
  rootWindow: Window = window,
): Document[] {
  let currentWindow = rootWindow;
  const documents = [currentWindow.document];

  for (const frameSelector of framePath) {
    const frameElement = resolveBrowserSidebarFrameElement(
      currentWindow.document,
      frameSelector,
    );
    if (frameElement == null) break;

    const childWindow = getFrameElementContentWindow(frameElement);
    if (childWindow == null) break;

    currentWindow = childWindow;
    documents.push(currentWindow.document);
  }

  return documents;
}

export function getBrowserSidebarTextLocatorFallbackRoot(
  frameWindow: Window,
  locator: BrowserSidebarTextLocator,
): Document | ShadowRoot {
  let root: Document | ShadowRoot = frameWindow.document;

  for (const shadowHostSelector of locator.shadowHosts) {
    const shadowHost = root.querySelector(shadowHostSelector);
    if (!isBrowserSidebarElement(shadowHost) || shadowHost.shadowRoot == null) {
      return root;
    }
    root = shadowHost.shadowRoot;
  }

  return root;
}

export function getBrowserSidebarShadowHost(root: Node): Element | null {
  return isBrowserSidebarShadowRoot(root) ? root.host : null;
}

export function isBrowserSidebarShadowRoot(
  root: Node,
): root is ShadowRoot & { host: Element } {
  const NodeCtor =
    root.ownerDocument?.defaultView?.Node ??
    (typeof Node === "undefined" ? null : Node);
  return (
    NodeCtor != null &&
    root.nodeType === NodeCtor.DOCUMENT_FRAGMENT_NODE &&
    "host" in root &&
    isBrowserSidebarElement(root.host)
  );
}

export function getBrowserSidebarTextOffsetWithinRoot(
  root: Element | ShadowRoot,
  container: Node,
  offset: number,
): number | null {
  const range = root.ownerDocument.createRange();
  try {
    range.selectNodeContents(root);
    range.setEnd(container, offset);
    return range.toString().length;
  } catch {
    return null;
  }
}

export function resolveBrowserSidebarTextPositionAtOffset(
  root: Element | ShadowRoot,
  targetOffset: number,
): BrowserSidebarTextPosition | null {
  const textWalker = root.ownerDocument.createTreeWalker(root, 4);
  let consumedLength = 0;
  let textNode = textWalker.nextNode();

  while (textNode != null) {
    const text = textNode.textContent ?? "";
    if (consumedLength + text.length >= targetOffset) {
      return {
        node: textNode,
        offset: targetOffset - consumedLength,
      };
    }

    consumedLength += text.length;
    textNode = textWalker.nextNode();
  }

  return null;
}

function getNodeElementType(node: Node): number {
  const NodeCtor =
    node.ownerDocument?.defaultView?.Node ??
    (typeof Node === "undefined" ? null : Node);
  return NodeCtor?.ELEMENT_NODE ?? 1;
}
