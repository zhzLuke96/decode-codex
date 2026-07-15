// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// OS information query used to gate Windows sandbox setup prompts.
import {
  initAppServerRequestRuntime,
  sendAppServerRequest,
} from "../../runtime/app-server-request";
import { createAppScopedSignal } from "../../runtime/app-scope-runtime";
import { queryDurations } from "../../runtime/host-query-runtime";
import {
  initReactQueryRuntimeChunk,
  useQuery,
  type QueryResult,
} from "../../runtime/query-client/react-query-runtime";

export type WindowsOsInfo = {
  isVsCodeRunningInsideWsl?: boolean;
  platform?: string;
  windowsAccountType?: string;
};

export const osInfoQuerySignal = createAppScopedSignal<
  QueryResult<WindowsOsInfo>
>({
  data: undefined,
  error: undefined,
  fetchStatus: "idle",
  isError: false,
  isFetching: false,
  isLoading: true,
  isPending: true,
  isSuccess: false,
  promise: Promise.resolve(undefined),
  refetch: async () => ({ data: undefined }),
  status: "pending",
});

export function useOsInfoQuery(): QueryResult<WindowsOsInfo> {
  return useQuery<WindowsOsInfo>({
    queryFn: () => sendAppServerRequest<WindowsOsInfo>("os-info"),
    queryKey: ["os-info"],
    staleTime: queryDurations.INFINITE,
  });
}

export function initOsInfoRuntimeChunk(): void {
  initAppServerRequestRuntime();
  initReactQueryRuntimeChunk();
}
