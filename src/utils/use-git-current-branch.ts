// Restored from ref/webview/assets/use-git-current-branch-Nkmrrr5P.js
// use-git-current-branch-Nkmrrr5P chunk restored from the Codex webview bundle.
import { useMemo } from "react";
import { _appScopeA as useScopedSignalValue } from "../boundaries/app-scope";
import { resolveGitQueryOptions } from "../boundaries/thread-context-inputs.facade";
import { gitCurrentBranchQuerySignal } from "../github/git-current-branch-query";
type GitQueryOptions = {
  enabled?: boolean;
  refetchOnMount?: "always" | unknown;
  refetchOnWindowFocus?: boolean;
  staleTime?: number | null;
};
export function useGitCurrentBranch(
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
  return useScopedSignalValue(gitCurrentBranchQuerySignal, queryParams);
}
