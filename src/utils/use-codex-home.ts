// Restored from ref/webview/assets/use-codex-home-CG1itsCv.js
// use-codex-home-CG1itsCv chunk restored from the Codex webview bundle.
import { _appScopeA as useScopedSignalValue } from "../boundaries/app-scope";
import { codexHomeQuery } from "../boundaries/thread-context-inputs.facade";
export function useCodexHomeQuery(hostId?: string | null) {
  const queryParams =
    hostId == null
      ? undefined
      : {
          hostId,
        };
  return useScopedSignalValue(codexHomeQuery, queryParams);
}
export function useCodexHome(hostId?: string | null) {
  return useCodexHomeQuery(hostId).data?.codexHome;
}
