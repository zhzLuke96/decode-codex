// Restored from ref/.vite/build/comment-preload.js
// Design draft style element helpers for browser sidebar DOM application.

import {
  DEFAULT_DESIGN_GROUP_ATTRIBUTE,
  serializeDesignDraftStyles,
  type BrowserSidebarDesignStyleDraft,
} from "./design-css";
import type { BrowserSidebarDesignDomOptions } from "./design-dom-types";

export const DEFAULT_DESIGN_DRAFT_STYLE_ELEMENT_ID =
  "codex-browser-design-draft-style";

export function syncBrowserSidebarDesignDraftStyleElement(
  rootDocument: Document,
  drafts: readonly BrowserSidebarDesignStyleDraft[],
  options: BrowserSidebarDesignDomOptions = {},
): void {
  const styleElementId =
    options.styleElementId ?? DEFAULT_DESIGN_DRAFT_STYLE_ELEMENT_ID;
  const styleText = serializeDesignDraftStyles(
    drafts,
    options.designGroupAttribute ?? DEFAULT_DESIGN_GROUP_ATTRIBUTE,
  );
  const existingStyleElement = rootDocument.getElementById(styleElementId);

  if (styleText.length === 0) {
    existingStyleElement?.remove();
    return;
  }

  const styleElement =
    isStyleElement(existingStyleElement) &&
    existingStyleElement.id === styleElementId
      ? existingStyleElement
      : rootDocument.createElement("style");
  styleElement.id = styleElementId;

  if (styleElement.textContent !== styleText) {
    styleElement.textContent = styleText;
  }

  styleElement.parentElement ??
    (rootDocument.head ?? rootDocument.documentElement).append(styleElement);
}

function isStyleElement(value: Element | null): value is HTMLStyleElement {
  if (value == null) return false;

  const StyleElementCtor =
    value.ownerDocument.defaultView?.HTMLStyleElement ??
    (typeof HTMLStyleElement === "undefined" ? null : HTMLStyleElement);
  return StyleElementCtor != null && value instanceof StyleElementCtor;
}
