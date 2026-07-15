// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Quick-chat command-menu result helpers: id prefix, search planning and fuzzy scoring.
import { fuzzyMatchScore } from "../boundaries/onboarding-commons-externals.facade";

export const QUICK_CHAT_RESULT_ID_PREFIX = "command-menu-quick-chat-result:";

const ROOT_MIN_QUERY_LENGTH = 2;
const ROOT_CONTENT_MIN_QUERY_LENGTH = 3;
const ROOT_MAX_RESULTS = 9;
const CHATS_MAX_RESULTS = 9;

export type ChatSearchScope = "root" | "chats" | "files";

export interface ChatSearchPlan {
  includeContentResults: boolean;
  maxResults: number;
}

export function getChatSearchPlan(
  scope: ChatSearchScope,
  query: string,
): ChatSearchPlan | null {
  const trimmed = query.trim();
  switch (scope) {
    case "root":
      return trimmed.length < ROOT_MIN_QUERY_LENGTH
        ? null
        : {
            includeContentResults:
              trimmed.length >= ROOT_CONTENT_MIN_QUERY_LENGTH,
            maxResults: ROOT_MAX_RESULTS,
          };
    case "chats":
      return {
        includeContentResults: trimmed.length > 0,
        maxResults: CHATS_MAX_RESULTS,
      };
    case "files":
      return null;
  }
}

export function buildQuickChatResultId(suffix: string): string {
  return `${QUICK_CHAT_RESULT_ID_PREFIX}${suffix}`;
}

export function scoreQuickChatResult(
  value: string,
  search: string,
  keywords?: string[],
): number {
  if (value.startsWith(QUICK_CHAT_RESULT_ID_PREFIX)) return Number.MIN_VALUE;
  const trimmed = search.trim();
  if (trimmed.length === 0) return 1;
  let score = fuzzyMatchScore(value, trimmed);
  for (const keyword of keywords ?? []) {
    score = Math.max(score, fuzzyMatchScore(keyword, trimmed));
  }
  return score;
}
