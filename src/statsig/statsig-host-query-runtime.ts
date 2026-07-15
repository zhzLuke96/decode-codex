// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Host query helpers used by the Statsig provider.
import {
  queryDurations,
  useHostQuery,
  type HostQueryOptions,
} from "../runtime/host-query-runtime";
import type { QueryResult } from "../runtime/query-client/react-query-runtime";

export interface HostAppInfo {
  buildFlavor?: string;
  systemVersion?: string;
  version?: string;
}

export interface HostPlatformInfo {
  osVersion?: string;
  platform?: string;
}

export type NamedHostQueryOptions<TData> = HostQueryOptions<
  unknown,
  unknown,
  TData
> & {
  queryName: string;
  readonly __dataType?: TData;
};

export const hostAppInfoQueryOptions: NamedHostQueryOptions<HostAppInfo> = {
  queryName: "app-info",
  queryConfig: { staleTime: queryDurations.INFINITE },
};

export const hostPlatformInfoQueryOptions: NamedHostQueryOptions<HostPlatformInfo> =
  {
    queryName: "os-info",
    queryConfig: { staleTime: queryDurations.INFINITE },
  };

export function useHostInfoQuery<TData>(
  options: NamedHostQueryOptions<TData>,
): QueryResult<TData>;
export function useHostInfoQuery<TData = unknown>(
  queryName: string,
  options?: HostQueryOptions<unknown, unknown, TData>,
): QueryResult<TData>;
export function useHostInfoQuery<TData = unknown>(
  queryNameOrOptions: string | NamedHostQueryOptions<TData>,
  options: HostQueryOptions<unknown, unknown, TData> = {},
): QueryResult<TData> {
  if (typeof queryNameOrOptions === "string") {
    return useHostQuery<TData>(queryNameOrOptions, options);
  }
  const {
    queryName,
    __dataType: _dataType,
    ...hostQueryOptions
  } = queryNameOrOptions;
  void _dataType;
  return useHostQuery<TData>(queryName, hostQueryOptions);
}

export function useHostResourceQuery<TData = unknown>(
  queryName: string,
  options: HostQueryOptions<unknown, unknown, TData> = {},
): QueryResult<TData> {
  return useHostQuery<TData>(queryName, options);
}

export interface CurrentAccountInfo {
  account_user_id?: string | null;
  id?: string | null;
  plan_type?: string | null;
  structure?: unknown;
}

export function useCurrentAccountQuery(): QueryResult<CurrentAccountInfo | null> & {
  hasEverErrored: boolean;
} {
  const result = useHostResourceQuery<CurrentAccountInfo | null>(
    "account-info",
    {
      queryConfig: {
        enabled: true,
        staleTime: queryDurations.FIVE_MINUTES,
      },
    },
  );
  return {
    ...result,
    hasEverErrored: result.isError,
  };
}
