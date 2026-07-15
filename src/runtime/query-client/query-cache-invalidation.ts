// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js
// Query-cache invalidation helper split from the current pull-request runtime.
import {
  initInvalidateQueriesAndBroadcastChunk,
  invalidateQueriesAndBroadcast,
  type QueryKey,
} from "../../utils/invalidate-queries-and-broadcast";

export type QueryCacheInvalidationKey = QueryKey;
export type QueryCacheInvalidator = (
  queryKey: QueryCacheInvalidationKey,
) => Promise<void>;

export function initQueryCacheInvalidationRuntime(): void {
  initInvalidateQueriesAndBroadcastChunk();
}

export function useQueryCacheInvalidator(): QueryCacheInvalidator {
  return invalidateQueriesAndBroadcast();
}
