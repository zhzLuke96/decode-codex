// Restored from ref/webview/assets/app-CAW031s_.js
// app-CAW031s_ chunk restored from the Codex webview bundle.
export type QueryClientConfig = {
  queryCache?: QueryCacheLike;
  mutationCache?: MutationCacheLike;
  defaultOptions?: {
    queries?: Record<string, any>;
    mutations?: Record<string, any>;
  };
};
export type QueryCacheLike = {
  build(client: QueryClientLike, options: any, state?: any): any;
  clear(): void;
  findAll(filters?: any): any[];
  get(queryHash: string): any;
  remove(query: any): void;
  onFocus(): void;
  onOnline(): void;
};
export type MutationCacheLike = {
  build(client: QueryClientLike, options: any, state?: any): any;
  clear(): void;
  findAll(filters?: any): any[];
  resumePausedMutations(): Promise<unknown>;
};
export type QueryClientLike = {
  defaultMutationOptions(options?: any): any;
  defaultQueryOptions(options: any): any;
  fetchQuery(options: any): Promise<unknown>;
  getMutationDefaults(mutationKey: unknown): Record<string, any>;
  getQueryDefaults(queryKey: unknown): Record<string, any>;
};
