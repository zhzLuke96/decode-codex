// Restored from ref/.vite/build/comment-preload.js
// Shared types for browser sidebar design draft DOM application.

import type { BrowserSidebarDesignStyleDraft } from "./design-css";
import type { BrowserSidebarTextDraft } from "./element-text";

export type BrowserSidebarDesignDomDraft = BrowserSidebarDesignStyleDraft & {
  text?: BrowserSidebarTextDraft | null;
};

export type BrowserSidebarDesignDraftElementResolver<
  TDraft extends BrowserSidebarDesignDomDraft = BrowserSidebarDesignDomDraft,
> = (draft: TDraft) => Element | null;

export type BrowserSidebarDesignDomOptions = {
  designGroupAttribute?: string;
  originalTextAttribute?: string;
  styleElementId?: string;
  mutationObserverInit?: MutationObserverInit;
};
