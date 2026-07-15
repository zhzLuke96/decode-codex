// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for DOM content-search helpers.
export type ContentSearchRootOptions = {
  includeShadowRoots: boolean;
};

export type ContentSearchOptions = {
  target: ParentNode;
  query: string;
  maxMatches: number;
  includeShadowRoots: boolean;
};

export type ContentSearchResult = {
  matches: HTMLElement[];
  isCapped: boolean;
};
