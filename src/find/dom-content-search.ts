// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Barrel for DOM content-search primitives used by thread find and review search.
export { activeContentSearchMatchClassName } from "./dom-content-search/constants";
export type {
  ContentSearchOptions,
  ContentSearchResult,
  ContentSearchRootOptions,
} from "./dom-content-search/types";
export {
  findContentSearchMatchElement,
  joinContentSearchKey,
  setContentSearchMatchId,
} from "./dom-content-search/match-id";
export {
  clearContentSearchHighlights,
  searchContentForMatches,
} from "./dom-content-search/highlight";
export { shouldRefreshSearchHighlightMutations } from "./dom-content-search/mutation-refresh";
