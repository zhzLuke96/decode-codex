// Restored from ref/webview/assets/use-os-info-C5UGPaac.js
// UseOsInfo chunk restored from the Codex webview bundle.
import { _appScopeS } from "../boundaries/app-scope";
import { osInfoQuery } from "../runtime/platform";

export type OsInfo = {
  platform?: string | null;
  osVersion?: string | null;
};

export type UseOsInfoResult = {
  data: OsInfo | null | undefined;
  isLoading: boolean | undefined;
};

export function initUseOsInfoRuntime(): void {}

export function useOsInfo(): UseOsInfoResult {
  let _useOsInfo = _appScopeS(osInfoQuery) as UseOsInfoResult;
  return {
    data: _useOsInfo.data,
    isLoading: _useOsInfo.isLoading,
  };
}
