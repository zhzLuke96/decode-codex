// Restored from ref/webview/assets/app-CAW031s_.js
// Lightweight query-core primitives used by the restored QueryClient runtime.
type QueryCoreFilter = {
  exact?: boolean;
  fetchStatus?: string;
  predicate?: (item: unknown) => boolean;
  queryKey?: unknown;
  stale?: boolean;
  status?: string;
  type?: "active" | "inactive" | "all";
};

export function queryCoreNoop(): void {}

export const queryCoreSkipToken = Symbol("queryCoreSkipToken");

export const queryCoreNotifyManager = {
  batch<T>(callback: () => T): T {
    return callback();
  },
  batchCalls<T extends (...args: never[]) => unknown>(callback: T): T {
    return ((...args: Parameters<T>) => callback(...args)) as T;
  },
};

export class QueryCoreSubscribable {
  listeners = new Set<(...args: never[]) => void>();

  subscribe(listener: (...args: never[]) => void): () => void {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }

  hasListeners(): boolean {
    return this.listeners.size > 0;
  }

  protected onSubscribe(): void {}

  protected onUnsubscribe(): void {}
}

class QueryCoreManager extends QueryCoreSubscribable {
  constructor(private currentValue: boolean) {
    super();
  }

  isFocused(): boolean {
    return this.currentValue;
  }

  isOnline(): boolean {
    return this.currentValue;
  }

  setValue(value: boolean): void {
    if (this.currentValue === value) return;
    this.currentValue = value;
    this.listeners.forEach((listener) => {
      listener(value as never);
    });
  }
}

export const queryCoreFocusManager = new QueryCoreManager(true);
export const queryCoreOnlineManager = new QueryCoreManager(true);

export function queryCoreFunctionalUpdate<T>(
  updater: T | ((value: T | undefined) => T),
  value: T | undefined,
): T {
  return typeof updater === "function"
    ? (updater as (value: T | undefined) => T)(value)
    : updater;
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }
  if (value && typeof value === "object") {
    return `{${Object.keys(value as Record<string, unknown>)
      .sort()
      .map(
        (key) =>
          `${JSON.stringify(key)}:${stableStringify(
            (value as Record<string, unknown>)[key],
          )}`,
      )
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

export function queryCoreHashKey(queryKey: unknown): string {
  return stableStringify(queryKey ?? []);
}

export function queryCoreHashQueryKeyByOptions(
  queryKey: unknown,
  options: { queryKeyHashFn?: (queryKey: unknown) => string } = {},
): string {
  return (options.queryKeyHashFn ?? queryCoreHashKey)(queryKey);
}

export function queryCorePartialMatchKey(
  left: unknown,
  right: unknown,
): boolean {
  if (left === right) return true;
  if (Array.isArray(left) && Array.isArray(right)) {
    return right.every((value, index) =>
      queryCorePartialMatchKey(left[index], value),
    );
  }
  if (left && right && typeof left === "object" && typeof right === "object") {
    return Object.keys(right as Record<string, unknown>).every((key) =>
      queryCorePartialMatchKey(
        (left as Record<string, unknown>)[key],
        (right as Record<string, unknown>)[key],
      ),
    );
  }
  return false;
}

export function queryCoreResolveStaleTime(
  staleTime: unknown,
  query: unknown,
): number | "static" | undefined {
  return typeof staleTime === "function"
    ? (staleTime as (query: unknown) => number | "static" | undefined)(query)
    : (staleTime as number | "static" | undefined);
}

export function queryCoreMatchQuery(
  filters: QueryCoreFilter = {},
  query: unknown,
): boolean {
  const candidate = query as {
    getObserversCount?: () => number;
    isStale?: () => boolean;
    queryKey?: unknown;
    state?: { fetchStatus?: string; status?: string };
  };
  if (filters.queryKey !== undefined) {
    const matches = filters.exact
      ? queryCoreHashKey(candidate.queryKey) ===
        queryCoreHashKey(filters.queryKey)
      : queryCorePartialMatchKey(candidate.queryKey, filters.queryKey);
    if (!matches) return false;
  }
  if (
    filters.type &&
    filters.type !== "all" &&
    (candidate.getObserversCount?.() ?? 0) > 0 !== (filters.type === "active")
  ) {
    return false;
  }
  if (
    filters.stale !== undefined &&
    (candidate.isStale?.() ?? false) !== filters.stale
  ) {
    return false;
  }
  if (
    filters.fetchStatus &&
    candidate.state?.fetchStatus !== filters.fetchStatus
  ) {
    return false;
  }
  if (filters.status && candidate.state?.status !== filters.status) {
    return false;
  }
  return filters.predicate ? filters.predicate(query) : true;
}

export function queryCoreMatchMutation(
  filters: QueryCoreFilter & { mutationKey?: unknown } = {},
  mutation: unknown,
): boolean {
  const candidate = mutation as {
    options?: { mutationKey?: unknown };
    state?: { status?: string };
  };
  if (filters.mutationKey !== undefined) {
    const matches = filters.exact
      ? queryCoreHashKey(candidate.options?.mutationKey) ===
        queryCoreHashKey(filters.mutationKey)
      : queryCorePartialMatchKey(
          candidate.options?.mutationKey,
          filters.mutationKey,
        );
    if (!matches) return false;
  }
  if (filters.status && candidate.state?.status !== filters.status) {
    return false;
  }
  return filters.predicate ? filters.predicate(mutation) : true;
}
