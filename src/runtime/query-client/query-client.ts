// Restored from ref/webview/assets/app-CAW031s_.js
// app-CAW031s_ chunk restored from the Codex webview bundle.
import {
  queryCoreFocusManager as focusManager,
  queryCoreFunctionalUpdate as functionalUpdate,
  queryCoreHashKey as hashKey,
  queryCoreHashQueryKeyByOptions as hashQueryKeyByOptions,
  queryCoreMatchMutation as matchMutation,
  queryCoreMatchQuery as matchQuery,
  queryCoreNoop as noop,
  queryCoreNotifyManager as notifyManager,
  queryCoreOnlineManager as onlineManager,
  queryCoreResolveStaleTime as resolveStaleTime,
  QueryCoreSubscribable as Subscribable,
  queryCorePartialMatchKey as partialMatchKey,
  queryCoreSkipToken as skipToken,
} from "../../boundaries/query-core-runtime";
import { QueryCoreQuery as Query } from "../../boundaries/query-core-query";
import { infiniteQueryBehavior } from "../../boundaries/use-host-config.facade";
import { VscodeApiMutation as Mutation } from "../../boundaries/vscode-api-mutation";
import type {
  MutationCacheLike,
  QueryCacheLike,
  QueryClientConfig,
} from "./types";
class MutationCache extends Subscribable {
  config: Record<string, any>;
  #mutations = new Set<any>();
  #scopes = new Map<string, any[]>();
  #mutationId = 0;
  constructor(config: Record<string, any> = {}) {
    super();
    this.config = config;
  }
  build(client: QueryClient, options: any, state?: any) {
    const mutation = new Mutation({
      client,
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state,
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation: any) {
    this.#mutations.add(mutation);
    const scopeId = getMutationScopeId(mutation);
    if (typeof scopeId === "string") {
      const scopedMutations = this.#scopes.get(scopeId);
      if (scopedMutations) scopedMutations.push(mutation);
      else this.#scopes.set(scopeId, [mutation]);
    }
    this.notify({
      type: "added",
      mutation,
    });
  }
  remove(mutation: any) {
    if (this.#mutations.delete(mutation)) {
      const scopeId = getMutationScopeId(mutation);
      if (typeof scopeId === "string") {
        const scopedMutations = this.#scopes.get(scopeId);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const mutationIndex = scopedMutations.indexOf(mutation);
            if (mutationIndex !== -1) scopedMutations.splice(mutationIndex, 1);
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scopeId);
          }
        }
      }
    }
    this.notify({
      type: "removed",
      mutation,
    });
  }
  canRun(mutation: any) {
    const scopeId = getMutationScopeId(mutation);
    if (typeof scopeId !== "string") return true;
    const firstPendingMutation = this.#scopes
      .get(scopeId)
      ?.find((candidate) => candidate.state.status === "pending");
    return !firstPendingMutation || firstPendingMutation === mutation;
  }
  runNext(mutation: any) {
    const scopeId = getMutationScopeId(mutation);
    return typeof scopeId === "string"
      ? (this.#scopes
          .get(scopeId)
          ?.find(
            (candidate) => candidate !== mutation && candidate.state.isPaused,
          )
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({
          type: "removed",
          mutation,
        });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters: any) {
    const exactFilters = {
      exact: true,
      ...filters,
    };
    return this.getAll().find((mutation) =>
      matchMutation(exactFilters, mutation),
    );
  }
  findAll(filters: any = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event: any) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener: (event: any) => void) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter(
      (mutation) => mutation.state.isPaused,
    );
    return notifyManager.batch(() =>
      Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop)),
      ),
    );
  }
}
function getMutationScopeId(mutation: any) {
  return mutation.options.scope?.id;
}
class QueryCache extends Subscribable {
  config: Record<string, any>;
  #queries = new Map<string, any>();
  constructor(config: Record<string, any> = {}) {
    super();
    this.config = config;
  }
  build(client: QueryClient, options: any, state?: any) {
    const queryKey = options.queryKey;
    const queryHash =
      options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey),
      });
      this.add(query);
    }
    return query;
  }
  add(query: any) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query,
      });
    }
  }
  remove(query: any) {
    const cachedQuery = this.#queries.get(query.queryHash);
    if (cachedQuery) {
      query.destroy();
      if (cachedQuery === query) this.#queries.delete(query.queryHash);
      this.notify({
        type: "removed",
        query,
      });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash: string) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters: any) {
    const exactFilters = {
      exact: true,
      ...filters,
    };
    return this.getAll().find((query) => matchQuery(exactFilters, query));
  }
  findAll(filters: any = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0
      ? queries.filter((query) => matchQuery(filters, query))
      : queries;
  }
  notify(event: any) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener: (event: any) => void) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
}
export class QueryClient {
  #queryCache: QueryCacheLike;
  #mutationCache: MutationCacheLike;
  #defaultOptions: Record<string, any>;
  #queryDefaults = new Map<string, any>();
  #mutationDefaults = new Map<string, any>();
  #mountCount = 0;
  #unsubscribeFocus?: () => void;
  #unsubscribeOnline?: () => void;
  constructor(config: QueryClientConfig = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount === 1) {
      this.#unsubscribeFocus = focusManager.subscribe(
        async (focused: boolean) => {
          if (focused) {
            await this.resumePausedMutations();
            this.#queryCache.onFocus();
          }
        },
      );
      this.#unsubscribeOnline = onlineManager.subscribe(
        async (online: boolean) => {
          if (online) {
            await this.resumePausedMutations();
            this.#queryCache.onOnline();
          }
        },
      );
    }
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount === 0) {
      this.#unsubscribeFocus?.();
      this.#unsubscribeFocus = undefined;
      this.#unsubscribeOnline?.();
      this.#unsubscribeOnline = undefined;
    }
  }
  isFetching(filters?: any) {
    return this.#queryCache.findAll({
      ...filters,
      fetchStatus: "fetching",
    }).length;
  }
  isMutating(filters?: any) {
    return this.#mutationCache.findAll({
      ...filters,
      status: "pending",
    }).length;
  }
  getQueryData(queryKey: unknown) {
    const options = this.defaultQueryOptions({
      queryKey,
    });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options: any) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    return cachedData === undefined
      ? this.fetchQuery(options)
      : (options.revalidateIfStale &&
          query.isStaleByTime(
            resolveStaleTime(defaultedOptions.staleTime, query),
          ) &&
          this.prefetchQuery(defaultedOptions),
        Promise.resolve(cachedData));
  }
  getQueriesData(filters: any) {
    return this.#queryCache
      .findAll(filters)
      .map(({ queryKey, state }: any) => [queryKey, state.data]);
  }
  setQueryData(queryKey: unknown, updater: any, options?: any) {
    const defaultedOptions = this.defaultQueryOptions({
      queryKey,
    });
    const previousData = this.#queryCache.get(defaultedOptions.queryHash)?.state
      .data;
    const data = functionalUpdate(updater, previousData);
    if (data !== undefined) {
      return this.#queryCache.build(this, defaultedOptions).setData(data, {
        ...options,
        manual: true,
      });
    }
  }
  setQueriesData(filters: any, updater: any, options?: any) {
    return notifyManager.batch(() =>
      this.#queryCache
        .findAll(filters)
        .map(({ queryKey }: any) => [
          queryKey,
          this.setQueryData(queryKey, updater, options),
        ]),
    );
  }
  getQueryState(queryKey: unknown) {
    const options = this.defaultQueryOptions({
      queryKey,
    });
    return this.#queryCache.get(options.queryHash)?.state;
  }
  removeQueries(filters?: any) {
    const queryCache = this.#queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters?: any, options?: any) {
    const queryCache = this.#queryCache;
    return notifyManager.batch(
      () => (
        queryCache.findAll(filters).forEach((query) => {
          query.reset();
        }),
        this.refetchQueries(
          {
            type: "active",
            ...filters,
          },
          options,
        )
      ),
    );
  }
  cancelQueries(filters?: any, options: any = {}) {
    const cancelOptions = {
      revert: true,
      ...options,
    };
    const promises = notifyManager.batch(() =>
      this.#queryCache
        .findAll(filters)
        .map((query) => query.cancel(cancelOptions)),
    );
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(filters?: any, options: any = {}) {
    return notifyManager.batch(
      () => (
        this.#queryCache.findAll(filters).forEach((query) => {
          query.invalidate();
        }),
        filters?.refetchType === "none"
          ? Promise.resolve()
          : this.refetchQueries(
              {
                ...filters,
                type: filters?.refetchType ?? filters?.type ?? "active",
              },
              options,
            )
      ),
    );
  }
  refetchQueries(filters?: any, options: any = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true,
    };
    const promises = notifyManager.batch(() =>
      this.#queryCache
        .findAll(filters)
        .filter((query) => !query.isDisabled() && !query.isStatic())
        .map((query) => {
          let promise = query.fetch(undefined, fetchOptions);
          if (!fetchOptions.throwOnError) promise = promise.catch(noop);
          return query.state.fetchStatus === "paused"
            ? Promise.resolve()
            : promise;
        }),
    );
    return Promise.all(promises).then(noop);
  }
  fetchQuery(options: any) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === undefined) defaultedOptions.retry = false;
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query),
    )
      ? query.fetch(defaultedOptions)
      : Promise.resolve(query.state.data);
  }
  prefetchQuery(options: any) {
    return this.fetchQuery(options).then(noop).catch(noop);
  }
  fetchInfiniteQuery(options: any) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options: any) {
    return this.fetchInfiniteQuery(options).then(noop).catch(noop);
  }
  ensureInfiniteQueryData(options: any) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    return onlineManager.isOnline()
      ? this.#mutationCache.resumePausedMutations()
      : Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options: Record<string, any>) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey: unknown, options: Record<string, any>) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options,
    });
  }
  getQueryDefaults(queryKey: unknown) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey: unknown, options: Record<string, any>) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options,
    });
  }
  getMutationDefaults(mutationKey: unknown) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((mutationDefault) => {
      if (partialMatchKey(mutationKey, mutationDefault.mutationKey)) {
        Object.assign(result, mutationDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options: any) {
    if (options._defaulted) return options;
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true,
    };
    defaultedOptions.queryHash ||= hashQueryKeyByOptions(
      defaultedOptions.queryKey,
      defaultedOptions,
    );
    if (defaultedOptions.refetchOnReconnect === undefined) {
      defaultedOptions.refetchOnReconnect =
        defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === undefined) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken)
      defaultedOptions.enabled = false;
    return defaultedOptions;
  }
  defaultMutationOptions(options?: any) {
    return options?._defaulted
      ? options
      : {
          ...this.#defaultOptions.mutations,
          ...(options?.mutationKey &&
            this.getMutationDefaults(options.mutationKey)),
          ...options,
          _defaulted: true,
        };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
}
