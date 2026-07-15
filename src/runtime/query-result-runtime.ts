// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Query-state helpers shared by review/worktree atoms.

export type LightweightQueryResult<TData = unknown> = {
  data?: TData;
  dataUpdatedAt: number;
  error: unknown;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isPending: boolean;
  refetch(options?: unknown): Promise<LightweightQueryResult<TData>>;
};

function buildQueryResult<TData>(
  state: Partial<LightweightQueryResult<TData>>,
): LightweightQueryResult<TData> {
  const result: LightweightQueryResult<TData> = {
    data: state.data,
    dataUpdatedAt: state.dataUpdatedAt ?? 0,
    error: state.error ?? null,
    isError: state.isError ?? false,
    isFetching: state.isFetching ?? false,
    isLoading: state.isLoading ?? false,
    isPending: state.isPending ?? false,
    refetch: async () => result,
  };
  return result;
}

export function pendingQueryResult<TData = unknown>(
  source?: Partial<LightweightQueryResult<TData>> | null,
): LightweightQueryResult<TData> {
  return buildQueryResult<TData>({
    dataUpdatedAt: source?.dataUpdatedAt ?? 0,
    error: source?.error ?? null,
    isError: source?.isError ?? false,
    isFetching: true,
    isLoading: true,
    isPending: true,
  });
}

export function disabledQueryResult<TData = unknown>(
  data?: TData,
): LightweightQueryResult<TData> {
  return buildQueryResult<TData>({
    data,
    isFetching: false,
    isLoading: false,
    isPending: false,
  });
}
