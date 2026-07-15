// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the cache key for a conversation: prefers the local-conversation id
// encoding when present, otherwise encodes the (remote) conversation id.
import {
  encodeConversationId,
  encodeLocalConversationId,
} from "../boundaries/onboarding-commons-externals.facade";

export function resolveConversationCacheKey(
  conversationId: unknown,
  localConversationId?: unknown,
): string {
  return localConversationId == null
    ? encodeConversationId(conversationId)
    : encodeLocalConversationId(localConversationId);
}
