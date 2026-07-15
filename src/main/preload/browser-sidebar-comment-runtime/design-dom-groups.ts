// Restored from ref/.vite/build/comment-preload.js
// Design draft group attribute helpers for browser sidebar DOM application.

import { DEFAULT_DESIGN_GROUP_ATTRIBUTE } from "./design-css";
import { isBrowserSidebarElement } from "./element-geometry";
import type {
  BrowserSidebarDesignDomDraft,
  BrowserSidebarDesignDomOptions,
  BrowserSidebarDesignDraftElementResolver,
} from "./design-dom-types";

export function syncBrowserSidebarDesignDraftElements<
  TDraft extends BrowserSidebarDesignDomDraft,
>(
  root: ParentNode,
  drafts: readonly TDraft[],
  resolveDraftElement: BrowserSidebarDesignDraftElementResolver<TDraft>,
  options: BrowserSidebarDesignDomOptions = {},
): void {
  const designGroupAttribute =
    options.designGroupAttribute ?? DEFAULT_DESIGN_GROUP_ATTRIBUTE;
  const draftAttributesByElement = new Map<Element, Set<string>>();

  for (const draft of drafts) {
    const element = resolveDraftElement(draft);
    if (element == null) continue;

    const draftAttributes =
      draftAttributesByElement.get(element) ?? new Set<string>();
    draftAttributes.add(draft.draftAttribute);
    draftAttributesByElement.set(element, draftAttributes);
  }

  for (const element of root.querySelectorAll(`[${designGroupAttribute}]`)) {
    if (!isBrowserSidebarElement(element)) continue;

    setBrowserSidebarElementDesignGroups(
      element,
      draftAttributesByElement.get(element),
      designGroupAttribute,
    );
    draftAttributesByElement.delete(element);
  }

  for (const [element, draftAttributes] of draftAttributesByElement) {
    setBrowserSidebarElementDesignGroups(
      element,
      draftAttributes,
      designGroupAttribute,
    );
  }
}

export function addBrowserSidebarElementDesignGroup(
  element: Element,
  draftAttribute: string,
  designGroupAttribute: string = DEFAULT_DESIGN_GROUP_ATTRIBUTE,
): void {
  const draftAttributes = new Set(
    readBrowserSidebarElementDesignGroups(element, designGroupAttribute),
  );
  draftAttributes.add(draftAttribute);
  element.setAttribute(
    designGroupAttribute,
    Array.from(draftAttributes).join(" "),
  );
}

export function setBrowserSidebarElementDesignGroups(
  element: Element,
  draftAttributes: Iterable<string> | null | undefined,
  designGroupAttribute: string = DEFAULT_DESIGN_GROUP_ATTRIBUTE,
): void {
  const attributeValue =
    draftAttributes == null ? "" : Array.from(draftAttributes).join(" ");

  if (attributeValue.length === 0) {
    element.removeAttribute(designGroupAttribute);
    return;
  }

  if (element.getAttribute(designGroupAttribute) !== attributeValue) {
    element.setAttribute(designGroupAttribute, attributeValue);
  }
}

export function readBrowserSidebarElementDesignGroups(
  element: Element,
  designGroupAttribute: string = DEFAULT_DESIGN_GROUP_ATTRIBUTE,
): string[] {
  return (element.getAttribute(designGroupAttribute) ?? "")
    .split(/\s+/)
    .filter((draftAttribute) => draftAttribute.length > 0);
}
