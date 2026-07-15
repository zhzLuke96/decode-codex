// Restored from ref/.vite/build/comment-preload.js
// DOM element text, label, and path helpers for browser sidebar anchors.

import {
  getElementOwnerWindow,
  isBrowserSidebarElement,
} from "./element-geometry";

export type BrowserSidebarTextDraft = {
  previousValue: string;
  value: string;
};

type BrowserSidebarTextElement = Element & {
  innerText?: string | null;
};

export function getBrowserSidebarElementAccessibleName(
  element: Element,
): string | null {
  return (
    element.getAttribute("aria-label") ?? getBrowserSidebarElementText(element)
  );
}

export function getBrowserSidebarElementTitle(element: Element): string {
  return (
    element.getAttribute("aria-label") ||
    getBrowserSidebarElementText(element) ||
    element.tagName.toLowerCase()
  );
}

export function getBrowserSidebarNearbyElementText(
  element: Element,
): string | null {
  const ownText = getBrowserSidebarElementText(element);
  if (ownText != null) return ownText;

  const sectionElement = element.closest(
    "section,article,main,form,nav,aside,header,footer",
  );
  return isBrowserSidebarElement(sectionElement)
    ? getBrowserSidebarElementText(sectionElement)
    : null;
}

export function getBrowserSidebarElementPath(element: Element): string {
  const tagPath: string[] = [];
  let currentElement: Element | null = element;
  let depth = 0;

  while (currentElement != null && depth < 4) {
    const tagName = currentElement.tagName.toLowerCase();
    if (tagName === "html" || tagName === "body") {
      if (tagPath.length === 0) tagPath.unshift(tagName);
      break;
    }

    tagPath.unshift(tagName);
    currentElement = currentElement.parentElement;
    depth += 1;
  }

  return tagPath.join(" > ");
}

export function getBrowserSidebarElementImmediateText(
  element: Element,
): string | null {
  const textNodeType = getElementOwnerWindow(element).Node.TEXT_NODE;
  const immediateText = Array.from(element.childNodes)
    .filter((childNode) => childNode.nodeType === textNodeType)
    .map(
      (childNode) => childNode.textContent?.replace(/\s+/g, " ").trim() ?? "",
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return immediateText.length === 0 ? null : immediateText.slice(0, 80);
}

export function readBrowserSidebarElementTextDraft(
  element: Element,
): BrowserSidebarTextDraft | undefined {
  const text = getOwnTextContentWithoutTextChildren(element);
  return text == null
    ? undefined
    : {
        previousValue: text,
        value: text,
      };
}

export function getBrowserSidebarElementTargetLabel(element: Element): string {
  const tagName = element.tagName.toLowerCase();
  const accessibleName = getBrowserSidebarElementAccessibleName(element);
  return accessibleName == null ? tagName : `${tagName}: ${accessibleName}`;
}

function getBrowserSidebarElementText(element: Element): string | null {
  if (isRuntimeDocumentRoot(element)) return element.tagName.toLowerCase();

  const textElement = element as BrowserSidebarTextElement;
  const text = (textElement.innerText || element.textContent || "")
    .replace(/\s+/g, " ")
    .trim();

  return text.length === 0 ? null : text.slice(0, 80);
}

function getOwnTextContentWithoutTextChildren(element: Element): string | null {
  const textNodeType = getElementOwnerWindow(element).Node.TEXT_NODE;
  const text = Array.from(element.childNodes)
    .filter((childNode) => childNode.nodeType === textNodeType)
    .map(
      (childNode) => childNode.textContent?.replace(/\s+/g, " ").trim() ?? "",
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  const hasChildText = Array.from(element.children).some(
    (childElement) =>
      (childElement.textContent?.replace(/\s+/g, " ").trim().length ?? 0) > 0,
  );

  return text.length === 0 || hasChildText ? null : text;
}

function isRuntimeDocumentRoot(element: Element): boolean {
  const runtimeDocument =
    typeof document === "undefined" ? element.ownerDocument : document;
  return (
    element === runtimeDocument.documentElement ||
    element === runtimeDocument.body
  );
}
