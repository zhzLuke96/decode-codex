// Restored from ref/.vite/build/comment-preload.js
// Google Docs selection and visible-text capture for comment anchors.

import {
  createGoogleDocsDocumentContext,
  parseGoogleDocsDocumentUrl,
} from "./google-workspace-urls";
import { MAX_CONTEXT_TEXT_LENGTH, normalizeCapturedContextText } from "./text";
import type {
  BrowserSidebarAnchorLike,
  BrowserSidebarGoogleDocsDocumentContext,
  BrowserSidebarViewportRect,
} from "./types";

type BrowserSidebarElementContextOptions = {
  documentTitle?: string | null;
  elementWindow: Window;
  fallbackWindow: Window;
};

type BrowserSidebarRegionContextOptions = {
  documentTitle?: string | null;
  fallbackWindow: Window;
  frameWindow: Window;
  viewportRect: BrowserSidebarViewportRect;
};

const TREE_WALKER_SHOW_TEXT = 4;
const TREE_WALKER_ACCEPT = 1;
const TREE_WALKER_REJECT = 2;
const INVISIBLE_ANCESTOR_SELECTOR =
  "script,style,noscript,template,[hidden],[aria-hidden='true']";

export class BrowserSidebarDocumentContextResolver {
  constructor(public readonly pageUrl: string) {}

  isGoogleDocsPage(): boolean {
    return parseGoogleDocsDocumentUrl(this.pageUrl) != null;
  }

  getDocumentContext({
    documentTitle,
    selectedText,
    visibleText,
  }: {
    documentTitle?: string | null;
    selectedText?: string | null;
    visibleText?: string | null;
  }): BrowserSidebarGoogleDocsDocumentContext | undefined {
    return createGoogleDocsDocumentContext({
      documentTitle,
      pageUrl: this.pageUrl,
      selectedText,
      visibleText,
    });
  }

  getElementDocumentContext({
    documentTitle,
    elementWindow,
    fallbackWindow,
  }: BrowserSidebarElementContextOptions):
    | BrowserSidebarGoogleDocsDocumentContext
    | undefined {
    return this.getDocumentContext({
      documentTitle,
      selectedText:
        this.getWindowSelectionText(elementWindow) ??
        this.getWindowSelectionText(fallbackWindow),
    });
  }

  getRegionDocumentContext({
    documentTitle,
    fallbackWindow,
    frameWindow,
    viewportRect,
  }: BrowserSidebarRegionContextOptions):
    | BrowserSidebarGoogleDocsDocumentContext
    | undefined {
    if (!this.isGoogleDocsPage()) return undefined;
    return this.getDocumentContext({
      documentTitle,
      selectedText:
        this.getWindowSelectionText(frameWindow) ??
        this.getWindowSelectionText(fallbackWindow),
      visibleText: this.getVisibleTextInViewportRect(frameWindow, viewportRect),
    });
  }

  static isGoogleDocsAnchor(anchor: BrowserSidebarAnchorLike): boolean {
    return (
      anchor.documentContext?.kind === "google-docs" ||
      parseGoogleDocsDocumentUrl(anchor.pageUrl ?? "") != null
    );
  }

  getWindowSelectionText(frameWindow: Window): string | null {
    try {
      return (
        normalizeCapturedContextText(frameWindow.getSelection()?.toString()) ??
        this.getActiveElementSelectionText(frameWindow)
      );
    } catch {
      return null;
    }
  }

  getActiveElementSelectionText(frameWindow: Window): string | null {
    const activeElement = frameWindow.document.activeElement;
    if (!isTextInputElement(activeElement)) return null;

    const selectionStart = activeElement.selectionStart;
    const selectionEnd = activeElement.selectionEnd;
    return selectionStart == null ||
      selectionEnd == null ||
      selectionEnd <= selectionStart
      ? null
      : normalizeCapturedContextText(
          activeElement.value.slice(selectionStart, selectionEnd),
        );
  }

  getVisibleTextInViewportRect(
    frameWindow: Window,
    viewportRect: BrowserSidebarViewportRect,
  ): string | null {
    const frameDocument = safeDocumentForWindow(frameWindow);
    const body = frameDocument?.body;
    if (frameDocument == null || body == null) return null;

    let visibleText = "";
    const textWalker = frameDocument.createTreeWalker(
      body,
      TREE_WALKER_SHOW_TEXT,
      {
        acceptNode: (textNode) => {
          if (normalizeCapturedContextText(textNode.textContent) == null) {
            return TREE_WALKER_REJECT;
          }
          const parentElement = textNode.parentElement;
          return !isHtmlElement(parentElement) ||
            !isVisibleElement(parentElement)
            ? TREE_WALKER_REJECT
            : TREE_WALKER_ACCEPT;
        },
      },
    );

    let textNode = textWalker.nextNode();
    while (textNode != null) {
      const nodeText = normalizeCapturedContextText(textNode.textContent);
      if (
        nodeText != null &&
        textNodeIntersectsViewport(frameDocument, textNode, viewportRect)
      ) {
        visibleText =
          visibleText.length === 0 ? nodeText : `${visibleText} ${nodeText}`;
        if (visibleText.length >= MAX_CONTEXT_TEXT_LENGTH) break;
      }
      textNode = textWalker.nextNode();
    }
    return normalizeCapturedContextText(visibleText);
  }
}

function safeDocumentForWindow(frameWindow: Window): Document | null {
  try {
    return frameWindow.document;
  } catch {
    return null;
  }
}

function isTextInputElement(
  value: unknown,
): value is HTMLInputElement | HTMLTextAreaElement {
  if (!isHtmlElement(value)) return false;
  const frameWindow = value.ownerDocument.defaultView;
  const InputElement = frameWindow?.HTMLInputElement;
  const TextAreaElement = frameWindow?.HTMLTextAreaElement;
  return (
    (InputElement != null && value instanceof InputElement) ||
    (TextAreaElement != null && value instanceof TextAreaElement)
  );
}

function isVisibleElement(element: HTMLElement): boolean {
  if (element.closest(INVISIBLE_ANCESTOR_SELECTOR) != null) return false;

  const elementStyle = getElementWindow(element).getComputedStyle(element);
  return (
    elementStyle.display !== "none" &&
    elementStyle.visibility !== "hidden" &&
    elementStyle.opacity !== "0"
  );
}

function getElementWindow(element: HTMLElement): Window {
  return element.ownerDocument.defaultView ?? window;
}

function isHtmlElement(value: unknown): value is HTMLElement {
  if (value == null || typeof value !== "object") return false;
  const ownerDocument = (value as { ownerDocument?: Document | null })
    .ownerDocument;
  const HtmlElement =
    ownerDocument?.defaultView?.HTMLElement ?? globalThis.HTMLElement;
  return typeof HtmlElement === "function" && value instanceof HtmlElement;
}

function textNodeIntersectsViewport(
  frameDocument: Document,
  textNode: Node,
  viewportRect: BrowserSidebarViewportRect,
): boolean {
  const textRange = frameDocument.createRange();
  try {
    textRange.selectNodeContents(textNode);
    return Array.from(textRange.getClientRects()).some((textRect) =>
      domRectIntersectsViewport(textRect, viewportRect),
    );
  } finally {
    (textRange as Range & { detach?: () => void }).detach?.();
  }
}

function domRectIntersectsViewport(
  elementRect: DOMRect,
  viewportRect: BrowserSidebarViewportRect,
): boolean {
  return (
    elementRect.right >= viewportRect.x &&
    elementRect.left <= viewportRect.x + viewportRect.width &&
    elementRect.bottom >= viewportRect.y &&
    elementRect.top <= viewportRect.y + viewportRect.height
  );
}
