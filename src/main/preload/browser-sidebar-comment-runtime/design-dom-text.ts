// Restored from ref/.vite/build/comment-preload.js
// Design draft text replacement helpers for browser sidebar DOM application.

import { DEFAULT_DESIGN_GROUP_ATTRIBUTE } from "./design-css";
import { readBrowserSidebarElementDesignGroups } from "./design-dom-groups";
import { isBrowserSidebarElement } from "./element-geometry";
import type { BrowserSidebarTextDraft } from "./element-text";
import type {
  BrowserSidebarDesignDomDraft,
  BrowserSidebarDesignDomOptions,
} from "./design-dom-types";

export const DEFAULT_DESIGN_ORIGINAL_TEXT_ATTRIBUTE =
  "data-codex-browser-design-original-text";

export function applyBrowserSidebarDesignTextDrafts(
  root: ParentNode,
  drafts: readonly BrowserSidebarDesignDomDraft[],
  options: BrowserSidebarDesignDomOptions = {},
): void {
  const designGroupAttribute =
    options.designGroupAttribute ?? DEFAULT_DESIGN_GROUP_ATTRIBUTE;
  const originalTextAttribute =
    options.originalTextAttribute ?? DEFAULT_DESIGN_ORIGINAL_TEXT_ATTRIBUTE;
  const draftByAttribute = new Map(
    drafts.map((draft) => [draft.draftAttribute, draft]),
  );

  for (const element of root.querySelectorAll(
    `[${designGroupAttribute}], [${originalTextAttribute}]`,
  )) {
    if (!isBrowserSidebarElement(element)) continue;

    const textDraft = selectLatestChangedTextDraft(
      readBrowserSidebarElementDesignGroups(element, designGroupAttribute)
        .map((draftAttribute) => draftByAttribute.get(draftAttribute))
        .filter((draft) => draft != null),
    );

    if (textDraft == null) {
      restoreElementDesignText(element, originalTextAttribute);
      continue;
    }

    if (!element.hasAttribute(originalTextAttribute)) {
      element.setAttribute(originalTextAttribute, textDraft.previousValue);
    }
    setElementTextContent(element, textDraft.value);
  }
}

export function restoreBrowserSidebarDesignTextDrafts(
  root: ParentNode,
  options: BrowserSidebarDesignDomOptions = {},
): void {
  const originalTextAttribute =
    options.originalTextAttribute ?? DEFAULT_DESIGN_ORIGINAL_TEXT_ATTRIBUTE;

  for (const element of root.querySelectorAll(`[${originalTextAttribute}]`)) {
    if (isBrowserSidebarElement(element)) {
      restoreElementDesignText(element, originalTextAttribute);
    }
  }
}

function selectLatestChangedTextDraft(
  drafts: readonly BrowserSidebarDesignDomDraft[],
): BrowserSidebarTextDraft | null {
  for (let index = drafts.length - 1; index >= 0; --index) {
    const textDraft = drafts[index]?.text;
    if (textDraft != null && textDraft.value !== textDraft.previousValue) {
      return textDraft;
    }
  }

  return null;
}

function restoreElementDesignText(
  element: Element,
  originalTextAttribute: string,
): void {
  const originalText = element.getAttribute(originalTextAttribute);
  if (originalText != null) {
    setElementTextContent(element, originalText);
    element.removeAttribute(originalTextAttribute);
  }
}

function setElementTextContent(element: Element, text: string): void {
  if (element.textContent !== text) {
    element.textContent = text;
  }
}
