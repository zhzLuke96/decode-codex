// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Conversation search, highlight, and lazy navigation rail helpers.
import type { ComponentType } from "react";
import {
  activeContentSearchMatchClassName,
  clearContentSearchHighlights as clearDomContentSearchHighlights,
  joinContentSearchKey,
  searchContentForMatches,
  setContentSearchMatchId,
  shouldRefreshSearchHighlightMutations as shouldRefreshDomSearchHighlightMutations,
} from "../find/dom-content-search";
import {
  findCaseInsensitiveMatchOffsets,
  sliceMatchWithContext,
} from "../find/find-match-offsets";
import {
  Bo as conversationSearchResultSignal,
  Ho as activeConversationSearchMatchSignal,
  Oi as initContentSearchMatchAttributeRuntimeRaw,
  Ss as initContentSearchRuntimeRaw,
  cn as initConversationSearchMatcherRaw,
  gs as initConversationSearchSnippetBuilderRaw,
  ln as scrollToConversationSearchMatchRaw,
  ts as initConversationSearchSignalsRaw,
} from "../vendor/projects-app-shared-runtime";
import {
  createLazyNavigationRailComponent as createLazyNavigationRailComponentRaw,
  initLazyNavigationRailRuntime as initLazyNavigationRailRuntimeRaw,
} from "../threads/lazy-navigation-rail";

export type ContentSearchMatch = {
  id: string;
  location: {
    domain: string;
    turnKey?: string;
    unitId?: string;
  };
};

export type ContentSearchHighlightResult = {
  matches: Element[];
  isCapped: boolean;
};

export type ConversationSearchLocationLike = {
  contextId: string;
  domain: "conversation";
  end: number;
  start: number;
  turnKey: string;
  unitId: string;
};

export type ConversationTextMatchResult = {
  isCapped: boolean;
  offsets: Array<{ end: number; start: number }>;
  totalMatches: number;
};

export {
  activeContentSearchMatchClassName,
  activeConversationSearchMatchSignal,
  conversationSearchResultSignal,
};

export function initConversationContentSearchRuntime(): void {
  initContentSearchRuntimeRaw();
  initConversationSearchSignalsRaw();
  initContentSearchMatchAttributeRuntimeRaw();
}

export function initContentSearchRuntime(): void {
  initContentSearchRuntimeRaw();
}

export function initConversationSearchSnippetBuilderRuntime(): void {
  initConversationSearchSnippetBuilderRaw();
}

export function initLocalConversationSearchRuntime(): void {
  initContentSearchRuntimeRaw();
  initConversationSearchMatcherRaw();
  initConversationSearchSnippetBuilderRaw();
}

export function initLazyNavigationRailRuntime(): void {
  initLazyNavigationRailRuntimeRaw();
}

export function initThreadFindItemIdRuntime(): void {
  initContentSearchRuntimeRaw();
}

export function clearContentSearchHighlights(
  target: Element,
  options: { includeShadowRoots: boolean },
): void {
  clearDomContentSearchHighlights(target, options);
}

export function groupConversationSearchMatchesByContentUnitKey(
  matches: readonly ContentSearchMatch[],
): Map<string, ContentSearchMatch[]> {
  const matchesByContentUnitKey = new Map<string, ContentSearchMatch[]>();
  for (const match of matches) {
    const { location } = match;
    if (
      location.domain !== "conversation" ||
      location.turnKey == null ||
      location.unitId == null
    ) {
      continue;
    }
    const contentUnitKey = `${location.turnKey}:${location.unitId}`;
    const unitMatches = matchesByContentUnitKey.get(contentUnitKey) ?? [];
    unitMatches.push(match);
    matchesByContentUnitKey.set(contentUnitKey, unitMatches);
  }
  return matchesByContentUnitKey;
}

export function highlightContentSearchMatches(options: {
  includeShadowRoots: boolean;
  maxMatches: number;
  query: string;
  target: Element;
}): ContentSearchHighlightResult {
  return searchContentForMatches(options);
}

export function setContentSearchMatchIdAttribute(options: {
  element: Element;
  matchId: string;
}): void {
  setContentSearchMatchId(options);
}

export function shouldRefreshSearchHighlightMutations(
  mutationRecords: readonly MutationRecord[],
): boolean {
  return shouldRefreshDomSearchHighlightMutations(mutationRecords);
}

export function createLazyNavigationRailComponent<TProps>(
  loader: () => Promise<ComponentType<TProps>>,
): ComponentType<TProps> {
  return createLazyNavigationRailComponentRaw(loader) as ComponentType<TProps>;
}

export function findLocalConversationTextMatches(
  text: string,
  query: string,
  maxMatches: number,
): ConversationTextMatchResult {
  return findCaseInsensitiveMatchOffsets(text, query, maxMatches);
}

export function buildLocalConversationSearchSnippet(
  text: string,
  start: number,
  end: number,
): unknown {
  return sliceMatchWithContext(text, start, end);
}

export function getLocalConversationSearchMatchId(
  location: ConversationSearchLocationLike,
): string {
  return `conversation:${location.turnKey}:${location.unitId}:${location.start}`;
}

export function scrollToLocalConversationSearchMatch(options: {
  container: Element;
  includeShadowRoots: boolean;
  matchId: string;
  signal?: AbortSignal | null;
}): Promise<unknown> | unknown {
  return scrollToConversationSearchMatchRaw(options);
}

export function joinThreadFindItemId(
  turnSearchKey: string,
  itemKey: string,
): string {
  return joinContentSearchKey(turnSearchKey, itemKey);
}
