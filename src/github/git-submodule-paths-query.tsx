// Restored from ref/webview/assets/git-submodule-paths-query-CONsZjeg.js
// Also matches ref/webview/assets/git-submodule-paths-query-DIo47mr-.js.
import {
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import { once } from "../runtime/commonjs-interop";
import { gitQuerySignal } from "../utils/git-query-signal";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type GitSubmodulePathsParams = {
  operationSource: string;
  refetchOnWindowFocus?: boolean;
  root: string;
  staleTime?: number;
};
type GitSubmodulePathsResponse = {
  paths: unknown[] | null;
};
const gitSubmodulePathsQuerySignal = gitQuerySignal({
  method: "submodule-paths",
  getParams: (params: GitSubmodulePathsParams) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: (params: GitSubmodulePathsParams) => ({
    refetchOnWindowFocus: params.refetchOnWindowFocus,
    select: (response: GitSubmodulePathsResponse) => response.paths,
    staleTime: params.staleTime,
  }),
}).fromCwd$;
export const gitSubmodulePathsSignal = createComputedSignalFamily(
  appScopeRoot,
  (params: unknown, { get }: AppScopeGetter) =>
    get<{
      data?: unknown[] | null;
    }>(gitSubmodulePathsQuerySignal, params).data ?? null,
);
export const initGitSubmodulePathsQueryChunk = once(() => {});
export { gitSubmodulePathsQuerySignal };
