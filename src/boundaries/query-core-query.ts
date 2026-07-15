// Restored from ref/webview/assets/app-CAW031s_.js
// Lightweight Query primitive used by the restored QueryClient runtime.
import {
  queryCoreResolveStaleTime,
  queryCoreSkipToken,
} from "./query-core-runtime";

export class QueryCoreQuery {
  queryKey: unknown;
  queryHash: string;
  options: Record<string, any>;
  state: Record<string, any>;

  constructor({
    queryKey,
    queryHash,
    options,
    state,
  }: {
    client: unknown;
    defaultOptions?: Record<string, any>;
    options: Record<string, any>;
    queryHash: string;
    queryKey: unknown;
    state?: Record<string, any>;
  }) {
    this.queryKey = queryKey;
    this.queryHash = queryHash;
    this.options = options;
    this.state = {
      data: options.initialData,
      dataUpdatedAt: options.initialData === undefined ? 0 : Date.now(),
      error: null,
      fetchStatus: "idle",
      isInvalidated: false,
      status: options.initialData === undefined ? "pending" : "success",
      ...state,
    };
  }

  destroy(): void {}

  getObserversCount(): number {
    return 0;
  }

  isDisabled(): boolean {
    return (
      this.options.enabled === false ||
      this.options.queryFn === queryCoreSkipToken
    );
  }

  isStatic(): boolean {
    return queryCoreResolveStaleTime(this.options.staleTime, this) === "static";
  }

  isStale(): boolean {
    return this.isStaleByTime(
      queryCoreResolveStaleTime(this.options.staleTime, this),
    );
  }

  isStaleByTime(staleTime: number | "static" | undefined): boolean {
    if (staleTime === "static") return false;
    if (this.state.isInvalidated || this.state.data === undefined) return true;
    if (staleTime === Infinity) return false;
    const maxAge = staleTime ?? 0;
    return Date.now() - (this.state.dataUpdatedAt ?? 0) > maxAge;
  }

  setData(data: unknown): unknown {
    this.state = {
      ...this.state,
      data,
      dataUpdatedAt: Date.now(),
      error: null,
      fetchStatus: "idle",
      isInvalidated: false,
      status: "success",
    };
    return data;
  }

  async fetch(options?: Record<string, any>): Promise<unknown> {
    this.options = { ...this.options, ...options };
    if (!this.options.queryFn || this.options.queryFn === queryCoreSkipToken) {
      return this.state.data;
    }
    this.state = { ...this.state, fetchStatus: "fetching" };
    try {
      const data = await this.options.queryFn({ queryKey: this.queryKey });
      return this.setData(data);
    } catch (error) {
      this.state = {
        ...this.state,
        error,
        fetchStatus: "idle",
        status: "error",
      };
      throw error;
    }
  }

  async cancel(): Promise<void> {
    this.state = { ...this.state, fetchStatus: "idle" };
  }

  invalidate(): void {
    this.state = { ...this.state, isInvalidated: true };
  }

  reset(): void {
    this.state = {
      data: this.options.initialData,
      dataUpdatedAt: this.options.initialData === undefined ? 0 : Date.now(),
      error: null,
      fetchStatus: "idle",
      isInvalidated: false,
      status: this.options.initialData === undefined ? "pending" : "success",
    };
  }

  onFocus(): void {}

  onOnline(): void {}
}
