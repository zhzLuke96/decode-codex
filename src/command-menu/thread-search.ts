// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Command-menu thread-search query key + cache invalidation helper.
export const THREAD_SEARCH_QUERY_KEY = "command-menu-thread-search";

interface QueryInvalidator {
  invalidateQueries: (options: { queryKey: unknown[] }) => void;
}

export function invalidateThreadSearchResults(
  queryClient: QueryInvalidator,
): void {
  queryClient.invalidateQueries({ queryKey: [THREAD_SEARCH_QUERY_KEY] });
}
