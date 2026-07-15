// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Thin RPC query helpers backed by the restored host-query runtime.
import {
  QUERY_DURATIONS,
  useHostQuery,
} from "./host-query-runtime";

export const rpcClient = {};
export const rpcTimeConstants = QUERY_DURATIONS;

export interface RpcQueryResult<TResult> {
  data?: TResult;
  error?: unknown;
  isError?: boolean;
  isLoading?: boolean;
  isPending?: boolean;
}

export interface RpcQueryOptions<TParams, TData, TResult> {
  cacheKey?: readonly unknown[];
  enabled?: boolean;
  params?: TParams;
  refetchOnWindowFocus?: boolean | "always";
  select?: (data: TData) => TResult;
  staleTime?: number;
}

export interface RpcQueryDefinition<TInput, TParams, TData, TResult> {
  getOptions: (input: TInput) => RpcQueryOptions<TParams, TData, TResult>;
  queryName: string;
}

export function defineRpcQuery<TInput, TParams, TData, TResult = TData>(
  _client: unknown,
  queryName: string,
  getOptions: (
    input: TInput,
  ) => RpcQueryOptions<TParams, TData, TResult>,
): RpcQueryDefinition<TInput, TParams, TData, TResult> {
  return { getOptions, queryName };
}

export function useRpcQuery<TInput, TParams, TData, TResult = TData>(
  query: RpcQueryDefinition<TInput, TParams, TData, TResult>,
  input: TInput,
): RpcQueryResult<TResult> {
  const { params, select, ...queryConfig } = query.getOptions(input);
  return useHostQuery<TResult>(query.queryName, {
    params,
    select: select as ((data: unknown) => TResult) | undefined,
    queryConfig,
  });
}
