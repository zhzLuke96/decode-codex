// Restored from ref/webview/assets/useQueries-DP7bSAX2.js
import React from "react";
import {
  _appScopeJ,
  appScopeG,
  appScopeQ,
  appScopeT,
  appScopeU,
  appScopeX,
} from "../boundaries/app-scope";
import {
  vscodeApiA,
  vscodeApiB,
  vscodeApiC,
  vscodeApiE,
  vscodeApiO,
  vscodeApiS,
  vscodeApiW,
  vscodeApiX,
  vscodeQueryErrorResetBoundary,
  vscodeShouldThrowError,
} from "../boundaries/vscode-api";
type QueryOptions = Record<string, any>;
type QueryResult = Record<string, any>;
type QueryObserver = InstanceType<typeof appScopeT>;
type UseQueriesOptions = {
  combine?: (results: QueryResult[]) => any;
  queries: QueryOptions[];
  subscribed?: boolean;
  [key: string]: any;
};
function difference<T>(left: T[], right: T[]) {
  const rightSet = new Set(right);
  return left.filter((item) => !rightSet.has(item));
}
function replaceAt<T>(items: T[], index: number, value: T) {
  const nextItems = items.slice(0);
  nextItems[index] = value;
  return nextItems;
}
class QueriesObserver extends appScopeX {
  #client: any;
  #queries: QueryOptions[];
  #result: QueryResult[];
  #options: Omit<UseQueriesOptions, "queries"> | undefined;
  #observers: QueryObserver[];
  #observerMatches: Array<{
    defaultedQueryOptions: QueryOptions;
    observer: QueryObserver;
  }> = [];
  #combinedResult: any;
  #lastResult: QueryResult[] | undefined;
  #lastCombine: UseQueriesOptions["combine"] | undefined;
  constructor(
    client: any,
    queries: QueryOptions[],
    options: Omit<UseQueriesOptions, "queries"> | undefined,
  ) {
    super();
    this.#client = client;
    this.#options = options;
    this.#queries = [];
    this.#observers = [];
    this.#result = [];
    this.setQueries(queries);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#observers.forEach((observer) => {
        observer.subscribe((result: QueryResult) => {
          this.#onUpdate(observer, result);
        });
      });
    }
  }
  onUnsubscribe() {
    if (!this.listeners.size) {
      this.destroy();
    }
  }
  destroy() {
    this.listeners = new Set();
    this.#observers.forEach((observer) => {
      observer.destroy();
    });
  }
  setQueries(
    queries: QueryOptions[],
    options?: Omit<UseQueriesOptions, "queries">,
  ) {
    this.#queries = queries;
    this.#options = options;
    _appScopeJ.batch(() => {
      const previousObservers = this.#observers;
      const observerMatches = this.#findMatchingObservers(this.#queries);
      this.#observerMatches = observerMatches;
      observerMatches.forEach((match) => {
        match.observer.setOptions(match.defaultedQueryOptions);
      });
      const nextObservers = observerMatches.map((match) => match.observer);
      const nextResult = nextObservers.map((observer) =>
        observer.getCurrentResult(),
      );
      const hasObserverCountChanged =
        previousObservers.length !== nextObservers.length;
      const hasObserverOrderChanged = nextObservers.some(
        (observer, index) => observer !== previousObservers[index],
      );
      const hasObserverChange =
        hasObserverCountChanged || hasObserverOrderChanged;
      const hasResultChange = hasObserverChange
        ? true
        : nextResult.some((result, index) => {
            const previousResult = this.#result[index];
            return !previousResult || !appScopeQ(result, previousResult);
          });
      if (!hasObserverChange && !hasResultChange) {
        return;
      }
      if (hasObserverChange) {
        this.#observers = nextObservers;
      }
      this.#result = nextResult;
      if (!this.hasListeners()) {
        return;
      }
      if (hasObserverChange) {
        difference(previousObservers, nextObservers).forEach((observer) => {
          observer.destroy();
        });
        difference(nextObservers, previousObservers).forEach((observer) => {
          observer.subscribe((result: QueryResult) => {
            this.#onUpdate(observer, result);
          });
        });
      }
      this.#notify();
    });
  }
  getCurrentResult() {
    return this.#result;
  }
  getQueries() {
    return this.#observers.map((observer) => observer.getCurrentQuery());
  }
  getObservers() {
    return this.#observers;
  }
  getOptimisticResult(
    queries: QueryOptions[],
    combine: UseQueriesOptions["combine"],
  ) {
    const observerMatches = this.#findMatchingObservers(queries);
    const optimisticResult = observerMatches.map((match) =>
      match.observer.getOptimisticResult(match.defaultedQueryOptions),
    );
    return [
      optimisticResult,
      (result?: QueryResult[]) =>
        this.#combineResult(result ?? optimisticResult, combine),
      () => this.#trackResult(optimisticResult, observerMatches),
    ] as const;
  }
  #trackResult(
    result: QueryResult[],
    observerMatches: Array<{
      defaultedQueryOptions: QueryOptions;
      observer: QueryObserver;
    }>,
  ) {
    return observerMatches.map((match, index) => {
      const queryResult = result[index];
      return match.defaultedQueryOptions.notifyOnChangeProps
        ? queryResult
        : match.observer.trackResult(queryResult, (trackedProp: string) => {
            observerMatches.forEach((observerMatch) => {
              observerMatch.observer.trackProp(trackedProp);
            });
          });
    });
  }
  #combineResult(result: QueryResult[], combine: UseQueriesOptions["combine"]) {
    if (!combine) {
      return result;
    }
    if (
      !this.#combinedResult ||
      this.#result !== this.#lastResult ||
      combine !== this.#lastCombine
    ) {
      this.#lastCombine = combine;
      this.#lastResult = this.#result;
      this.#combinedResult = appScopeG(this.#combinedResult, combine(result));
    }
    return this.#combinedResult;
  }
  #findMatchingObservers(queries: QueryOptions[]) {
    const previousObservers = new Map(
      this.#observers.map((observer) => [observer.options.queryHash, observer]),
    );
    const observerMatches: Array<{
      defaultedQueryOptions: QueryOptions;
      observer: QueryObserver;
    }> = [];
    queries.forEach((queryOptions) => {
      const defaultedQueryOptions =
        this.#client.defaultQueryOptions(queryOptions);
      const previousObserver = previousObservers.get(
        defaultedQueryOptions.queryHash,
      );
      observerMatches.push({
        defaultedQueryOptions,
        observer:
          previousObserver ??
          new appScopeT(this.#client, defaultedQueryOptions),
      });
    });
    return observerMatches;
  }
  #onUpdate(observer: QueryObserver, result: QueryResult) {
    const index = this.#observers.indexOf(observer);
    if (index !== -1) {
      this.#result = replaceAt(this.#result, index, result);
      this.#notify();
    }
  }
  #notify() {
    if (!this.hasListeners()) {
      return;
    }
    const previousCombinedResult = this.#combinedResult;
    const trackedResult = this.#trackResult(
      this.#result,
      this.#observerMatches,
    );
    if (
      previousCombinedResult !==
      this.#combineResult(trackedResult, this.#options?.combine)
    ) {
      _appScopeJ.batch(() => {
        this.listeners.forEach((listener: (result: QueryResult[]) => void) => {
          listener(this.#result);
        });
      });
    }
  }
}
export function UseQueries(
  { queries, ...options }: UseQueriesOptions,
  queryClient?: any,
) {
  const client = vscodeApiA(queryClient);
  const isRestoring = vscodeApiO();
  const errorResetBoundary = vscodeQueryErrorResetBoundary();
  const defaultedQueries = React.useMemo(
    () =>
      queries.map((queryOptions) => {
        const defaultedQueryOptions = client.defaultQueryOptions(queryOptions);
        defaultedQueryOptions._optimisticResults = isRestoring
          ? "isRestoring"
          : "optimistic";
        return defaultedQueryOptions;
      }),
    [queries, client, isRestoring],
  );
  defaultedQueries.forEach((queryOptions) => {
    vscodeApiB(queryOptions);
    vscodeApiW(queryOptions, errorResetBoundary);
  });
  vscodeApiE(errorResetBoundary);
  const [observer] = React.useState(
    () => new QueriesObserver(client, defaultedQueries, options),
  );
  const [optimisticResult, getCombinedResult, trackResult] =
    observer.getOptimisticResult(defaultedQueries, options.combine);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  React.useSyncExternalStore(
    React.useCallback(
      (listener) =>
        shouldSubscribe
          ? observer.subscribe(_appScopeJ.batchCalls(listener))
          : appScopeU,
      [observer, shouldSubscribe],
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult(),
  );
  React.useEffect(() => {
    observer.setQueries(defaultedQueries, options);
  }, [defaultedQueries, options, observer]);
  const suspensePromises = optimisticResult.some((result, index) =>
    vscodeApiS(defaultedQueries[index], result),
  )
    ? optimisticResult.flatMap((result, index) => {
        const defaultedQuery = defaultedQueries[index];
        if (defaultedQuery) {
          const queryObserver = new appScopeT(client, defaultedQuery);
          if (vscodeApiS(defaultedQuery, result)) {
            return vscodeApiX(
              defaultedQuery,
              queryObserver,
              errorResetBoundary,
            );
          }
          if (vscodeApiC(result, isRestoring)) {
            return vscodeApiX(
              defaultedQuery,
              queryObserver,
              errorResetBoundary,
            );
          }
        }
        return [];
      })
    : [];
  if (suspensePromises.length > 0) {
    throw Promise.all(suspensePromises);
  }
  const firstErrorResult = optimisticResult.find((result, index) => {
    const defaultedQuery = defaultedQueries[index];
    return (
      defaultedQuery &&
      vscodeShouldThrowError({
        result,
        errorResetBoundary,
        throwOnError: defaultedQuery.throwOnError,
        query: client.getQueryCache().get(defaultedQuery.queryHash),
        suspense: defaultedQuery.suspense,
      })
    );
  });
  if (firstErrorResult?.error) {
    throw firstErrorResult.error;
  }
  return getCombinedResult(trackResult());
}
