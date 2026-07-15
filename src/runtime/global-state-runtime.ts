// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Global-state query helpers backed by the host request/query runtime.
import { useEffect, useMemo, useState } from "react";
import {
  _appScopeL as createComputedSignalFamily,
  _appScopeP as createQuerySignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import { globalSettingKeys as GLOBAL_STATE_KEYS } from "../boundaries/src-l0hb-mz-p";
import {
  vscodeApiF as hostFallbackMessageBridge,
  initVscodeApiRuntime,
} from "../boundaries/vscode-api";
import {
  initHostRequestRuntime,
  sendHostRequest,
} from "./host-request-runtime";
import {
  isRecord,
  normalizeGlobalStateQueryResult,
  normalizeGlobalStateValue,
  unwrapGlobalStateHostResponse,
  type GlobalStateHostResponse,
  type GlobalStateQueryResult,
} from "./global-state-values";

export { GLOBAL_STATE_KEYS };
export type { GlobalStateQueryResult } from "./global-state-values";

const GLOBAL_STATE_STALE_TIME_MS = 5_000;

type GlobalStateSetResponse = {
  success?: boolean;
};

type QuerySnapshot<TData = unknown> = {
  cancel?: () => Promise<unknown>;
  getData?: () => TData | undefined;
  invalidate?: () => Promise<unknown>;
  queryKey?: readonly unknown[];
  setData?: (data: TData | undefined) => void;
};

type AppScopeWithQuery = {
  query?: {
    snapshot?: (
      signal: unknown,
      key?: unknown,
    ) => QuerySnapshot<GlobalStateHostResponse> | undefined;
  };
};

function buildGlobalStateQueryOptions(key: unknown) {
  return {
    params: { key },
    staleTime: GLOBAL_STATE_STALE_TIME_MS,
  };
}

export const globalStateQueryRequestSignal = createQuerySignalFamily(
  appScopeRoot,
  (key: unknown) => ({
    queryFn: () =>
      sendHostRequest<GlobalStateHostResponse>("get-global-state", {
        params: { key },
      }),
    queryKey: createGlobalStateQueryKey(key),
    staleTime: GLOBAL_STATE_STALE_TIME_MS,
  }),
);

export const globalStateQuerySignal = createComputedSignalFamily(
  appScopeRoot,
  (
    key: unknown,
    {
      get,
    }: {
      get: <TValue = unknown>(signal: unknown, key?: unknown) => TValue;
    },
  ) =>
    normalizeGlobalStateQueryResult(
      key,
      get<GlobalStateQueryResult<GlobalStateHostResponse>>(
        globalStateQueryRequestSignal,
        key,
      ),
    ),
);

function createGlobalStateQueryKey(key: unknown): readonly unknown[] {
  return ["vscode", "get-global-state", JSON.stringify({ key })];
}

function getGlobalStateSnapshot(
  scope: unknown,
  key: unknown,
): QuerySnapshot<GlobalStateHostResponse> | undefined {
  return (scope as AppScopeWithQuery | null | undefined)?.query?.snapshot?.(
    globalStateQueryRequestSignal,
    key,
  );
}

function getThrowOnFailure(options: unknown): boolean {
  return isRecord(options) && options.throwOnFailure === true;
}

function getQueryConfig(options: unknown): Record<string, unknown> {
  if (!isRecord(options)) return {};
  return isRecord(options.queryConfig) ? options.queryConfig : options;
}

function getQuerySource(options: unknown): string | undefined {
  return isRecord(options) && typeof options.source === "string"
    ? options.source
    : undefined;
}

function getQueryDependency(value: unknown): string {
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function dispatchQueryCacheInvalidated(queryKey: readonly unknown[]): void {
  hostFallbackMessageBridge.dispatchMessage("query-cache-invalidate", {
    queryKey,
  });
}

export function initGlobalStateQueryRuntime(): void {
  initVscodeApiRuntime();
  initHostRequestRuntime();
}

export function getGlobalStateValue<TData = unknown>(
  get: unknown,
  key: unknown,
): TData | undefined {
  const queryResult = (get as (signal: unknown, key: unknown) => unknown)(
    globalStateQuerySignal,
    key,
  );

  if (isRecord(queryResult) && "data" in queryResult) {
    return queryResult.data as TData | undefined;
  }

  return normalizeGlobalStateValue<TData>(
    key,
    unwrapGlobalStateHostResponse(queryResult),
  );
}

export async function setGlobalStateValue(
  scope: unknown,
  key: unknown,
  value: unknown,
  options?: unknown,
): Promise<void> {
  const snapshot = getGlobalStateSnapshot(scope, key);
  await snapshot?.cancel?.();

  const previousData = snapshot?.getData?.();
  snapshot?.setData?.({ value });

  try {
    const { success } = await sendHostRequest<GlobalStateSetResponse>(
      "set-global-state",
      {
        params: { key, value },
      },
    );

    if (!success) {
      if (getThrowOnFailure(options)) {
        throw Error("Failed to set global setting");
      }
      snapshot?.setData?.(previousData);
    }
  } catch (error) {
    snapshot?.setData?.(previousData);
    throw error;
  } finally {
    await snapshot?.invalidate?.();
    dispatchQueryCacheInvalidated(
      snapshot?.queryKey ?? createGlobalStateQueryKey(key),
    );
  }
}

export function useGlobalStateQuery<TData = unknown>(
  key: unknown,
  options?: unknown,
): GlobalStateQueryResult<TData> {
  const queryConfig = getQueryConfig(options);
  const queryKeyDependency = useMemo(() => getQueryDependency(key), [key]);
  const queryParams = useMemo(
    () => buildGlobalStateQueryOptions(key).params,
    [queryKeyDependency],
  );
  const source = getQuerySource(options);
  const enabled = queryConfig.enabled !== false;
  const [queryResult, setQueryResult] = useState<
    GlobalStateQueryResult<GlobalStateHostResponse>
  >({
    isFetching: enabled,
    isLoading: enabled,
  });

  useEffect(() => {
    if (!enabled) {
      setQueryResult((currentResult) => ({
        ...currentResult,
        isFetching: false,
        isLoading: false,
      }));
      return;
    }

    let isActive = true;
    setQueryResult((currentResult) => ({
      ...currentResult,
      isFetching: true,
      isLoading: currentResult.data === undefined,
    }));

    sendHostRequest<GlobalStateHostResponse>("get-global-state", {
      params: queryParams,
      source,
    }).then(
      (data) => {
        if (!isActive) return;
        setQueryResult({
          data,
          error: undefined,
          isFetching: false,
          isLoading: false,
        });
      },
      (error) => {
        if (!isActive) return;
        setQueryResult((currentResult) => ({
          ...currentResult,
          error,
          isFetching: false,
          isLoading: false,
        }));
      },
    );

    return () => {
      isActive = false;
    };
  }, [enabled, queryKeyDependency, source, queryParams]);

  return normalizeGlobalStateQueryResult<TData>(key, queryResult);
}
