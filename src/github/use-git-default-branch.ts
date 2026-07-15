// Restored from ref/webview/assets/use-git-default-branch-mDzZlpy3.js
// use-git-default-branch-mDzZlpy3 chunk restored from the Codex webview bundle.
import { useMemo } from "react";
import { _appScopeA as useScopedSignalValue } from "../boundaries/app-scope";
import { resolveGitQueryOptions } from "../boundaries/thread-context-inputs.facade";
import { gitQuerySignal } from "../utils/git-query-signal";
type GitQueryOptions = {
  enabled?: boolean;
  refetchOnMount?: "always" | unknown;
  refetchOnWindowFocus?: boolean;
  staleTime?: number | null;
};
type GitDefaultBranchParams = {
  operationSource: string;
  refetchOnWindowFocus?: boolean;
  root: string;
  staleTime?: number | null;
};
type GitDefaultBranchResponse = {
  branch: string | null;
};
export const gitDefaultBranchQuerySignal = gitQuerySignal({
  method: "default-branch",
  getParams: (params: GitDefaultBranchParams) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: (params: GitDefaultBranchParams) => ({
    refetchOnWindowFocus: params.refetchOnWindowFocus,
    select: (response: GitDefaultBranchResponse) => response.branch,
    ...(params.staleTime == null
      ? {}
      : {
          staleTime: params.staleTime,
        }),
  }),
}).fromCwd$;
export function useGitDefaultBranch(
  cwd: string | null | undefined,
  hostConfig: unknown,
  operationSource: string,
  options?: GitQueryOptions,
) {
  const cwdOrNull = cwd ?? null;
  const resolvedQueryOptions = useMemo(
    () => resolveGitQueryOptions(options, null),
    [options],
  );
  const queryParams = useMemo(
    () => ({
      cwd: cwdOrNull,
      hostConfig,
      operationSource,
      ...resolvedQueryOptions,
    }),
    [cwdOrNull, hostConfig, operationSource, resolvedQueryOptions],
  );
  return useScopedSignalValue(gitDefaultBranchQuerySignal, queryParams);
}
