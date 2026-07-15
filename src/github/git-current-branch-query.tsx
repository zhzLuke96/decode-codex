// Restored from ref/webview/assets/git-current-branch-query-CFP8_GIA.js
// git-current-branch-query-CFP8_GIA chunk restored from the Codex webview bundle.
import {
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import { gitQuerySignal } from "../utils/git-query-signal";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type GitCurrentBranchParams = {
  operationSource: string;
  refetchOnWindowFocus?: boolean;
  root: string;
  staleTime?: number | null;
};
type GitCurrentBranchResponse = {
  branch: string | null;
};
const gitCurrentBranchQuery = gitQuerySignal({
  method: "current-branch",
  getParams: (params: GitCurrentBranchParams) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: (params: GitCurrentBranchParams) => ({
    refetchOnWindowFocus: params.refetchOnWindowFocus,
    select: (response: GitCurrentBranchResponse) => response.branch,
    ...(params.staleTime == null
      ? {}
      : {
          staleTime: params.staleTime,
        }),
  }),
});

export function initGitCurrentBranchQueryRuntimeChunk(): void {}

export function initGitCurrentBranchQueryChunk(): void {
  initGitCurrentBranchQueryRuntimeChunk();
}

export const gitCurrentBranchQuerySignal = gitCurrentBranchQuery.fromCwd$;
export const gitCurrentBranchSignal = createComputedSignalFamily(
  appScopeRoot,
  (params: unknown, { get }: AppScopeGetter) =>
    get<{
      data?: string | null;
    }>(gitCurrentBranchQuerySignal, params).data ?? null,
);
export const gitCurrentBranchByMetadataQuerySignal =
  gitCurrentBranchQuery.fromMetadata$;
