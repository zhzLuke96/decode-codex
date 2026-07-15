// Restored from ref/.vite/build/comment-preload.js
// Mutation observer lifecycle for browser sidebar design draft DOM application.

import { DEFAULT_DESIGN_GROUP_ATTRIBUTE } from "./design-css";
import { syncBrowserSidebarDesignDraftElements } from "./design-dom-groups";
import {
  DEFAULT_DESIGN_DRAFT_STYLE_ELEMENT_ID,
  syncBrowserSidebarDesignDraftStyleElement,
} from "./design-dom-style";
import {
  applyBrowserSidebarDesignTextDrafts,
  restoreBrowserSidebarDesignTextDrafts,
} from "./design-dom-text";
import type {
  BrowserSidebarDesignDomDraft,
  BrowserSidebarDesignDomOptions,
  BrowserSidebarDesignDraftElementResolver,
} from "./design-dom-types";

const DEFAULT_DESIGN_DOM_MUTATION_OBSERVER_INIT: MutationObserverInit = {
  attributeFilter: [
    "aria-hidden",
    "aria-expanded",
    "class",
    "data-state",
    "hidden",
    "inert",
    "open",
    "popover",
    "style",
  ],
  attributes: true,
  childList: true,
  subtree: true,
};

export function observeBrowserSidebarDesignDraftDom<
  TDraft extends BrowserSidebarDesignDomDraft,
>(
  rootDocument: Document,
  drafts: readonly TDraft[],
  resolveDraftElement: BrowserSidebarDesignDraftElementResolver<TDraft>,
  options: BrowserSidebarDesignDomOptions = {},
): () => void {
  const syncDesignDraftDom = () => {
    syncBrowserSidebarDesignDraftElements(
      rootDocument,
      drafts,
      resolveDraftElement,
      options,
    );
    applyBrowserSidebarDesignTextDrafts(rootDocument, drafts, options);
    syncBrowserSidebarDesignDraftStyleElement(rootDocument, drafts, options);
  };

  syncDesignDraftDom();

  const MutationObserverCtor =
    rootDocument.defaultView?.MutationObserver ??
    (typeof MutationObserver === "undefined" ? null : MutationObserver);
  const observer =
    MutationObserverCtor == null
      ? null
      : new MutationObserverCtor(syncDesignDraftDom);
  observer?.observe(
    rootDocument.documentElement,
    options.mutationObserverInit ?? DEFAULT_DESIGN_DOM_MUTATION_OBSERVER_INIT,
  );

  return () => {
    observer?.disconnect();
    restoreBrowserSidebarDesignTextDrafts(rootDocument, options);
    rootDocument
      .getElementById(
        options.styleElementId ?? DEFAULT_DESIGN_DRAFT_STYLE_ELEMENT_ID,
      )
      ?.remove();
    for (const element of rootDocument.querySelectorAll(
      `[${options.designGroupAttribute ?? DEFAULT_DESIGN_GROUP_ATTRIBUTE}]`,
    )) {
      element.removeAttribute(
        options.designGroupAttribute ?? DEFAULT_DESIGN_GROUP_ATTRIBUTE,
      );
    }
  };
}
