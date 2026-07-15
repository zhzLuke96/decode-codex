// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Match-id helpers for tagging and finding DOM content-search highlights.
import { contentSearchMatchIdAttribute } from "./constants";
import { collectSearchRoots, escapeCssSelectorValue } from "./roots";

export function joinContentSearchKey(prefix: string, suffix: string): string {
  return `${prefix}:${suffix}`;
}

export function setContentSearchMatchId({
  element,
  matchId,
}: {
  element: Element;
  matchId: string;
}): void {
  element.setAttribute(contentSearchMatchIdAttribute, matchId);
}

export function findContentSearchMatchElement({
  container,
  matchId,
  includeShadowRoots,
}: {
  container: ParentNode;
  matchId: string;
  includeShadowRoots: boolean;
}): Element | null {
  const escapedMatchId = escapeCssSelectorValue(matchId);
  for (const root of collectSearchRoots(container, { includeShadowRoots })) {
    const match = root.querySelector(
      `[${contentSearchMatchIdAttribute}="${escapedMatchId}"]`,
    );
    if (match != null) {
      return match;
    }
  }
  return null;
}
