// Restored from ref/.vite/build/comment-preload.js
// CSS selector helpers for browser sidebar anchor reattachment.

import { isBrowserSidebarElement } from "./element-geometry";

export type BrowserSidebarElementSelectorOptions = {
  requireUnique?: boolean;
};

export function getBrowserSidebarElementSelector(
  element: Element,
  { requireUnique = false }: BrowserSidebarElementSelectorOptions = {},
): string | null {
  const path: string[] = [];
  let currentElement: Element | null = element;
  let depth = 0;

  while (currentElement != null && (requireUnique || depth < 4)) {
    let selector = currentElement.tagName.toLowerCase();
    const tagName = currentElement.tagName;

    if (currentElement.id) {
      selector += `#${escapeBrowserSidebarCssIdentifier(currentElement.id)}`;
      const candidate = [selector, ...path].join(" > ");
      if (
        !requireUnique ||
        isUniqueBrowserSidebarSelectorForElement(element, candidate)
      ) {
        return candidate;
      }
    }

    const classNames = Array.from(currentElement.classList)
      .filter((className) => /^[a-zA-Z0-9_-]+$/.test(className))
      .slice(0, 2);
    if (classNames.length > 0) {
      selector += `.${classNames
        .map(escapeBrowserSidebarCssIdentifier)
        .join(".")}`;
    }

    const parentElement = currentElement.parentElement;
    if (parentElement != null) {
      const sameTagSiblings = Array.from(parentElement.children).filter(
        (childElement) =>
          isBrowserSidebarElement(childElement) &&
          childElement.tagName === tagName,
      );
      if (sameTagSiblings.length > 1) {
        selector += `:nth-of-type(${
          sameTagSiblings.indexOf(currentElement) + 1
        })`;
      }
    }

    path.unshift(selector);
    const candidate = path.join(" > ");
    if (
      requireUnique &&
      isUniqueBrowserSidebarSelectorForElement(element, candidate)
    ) {
      return candidate;
    }

    currentElement = parentElement;
    depth += 1;
  }

  return requireUnique || path.length === 0 ? null : path.join(" > ");
}

export function escapeBrowserSidebarCssIdentifier(value: string): string {
  return typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(value)
    : value.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

function isUniqueBrowserSidebarSelectorForElement(
  element: Element,
  selector: string,
): boolean {
  const root = element.getRootNode();
  if (!isBrowserSidebarQueryableRoot(root)) return false;

  const matches = root.querySelectorAll(selector);
  return matches.length === 1 && matches[0] === element;
}

function isBrowserSidebarQueryableRoot(
  root: Node,
): root is Document | ShadowRoot {
  const NodeCtor =
    root.ownerDocument?.defaultView?.Node ??
    (typeof Node === "undefined" ? null : Node);
  return (
    NodeCtor != null &&
    (root.nodeType === NodeCtor.DOCUMENT_NODE ||
      (root.nodeType === NodeCtor.DOCUMENT_FRAGMENT_NODE &&
        "querySelectorAll" in root))
  );
}
