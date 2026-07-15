// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js
// Branch search query signal setup for the git branch switcher.

import { once } from "../../runtime/commonjs-interop";
import {
  appScope,
  createGitRootQueryOptions,
  createHostQueryOptions,
  createQuerySignalFamily,
  getHostCacheKey,
  initAppScope,
  initGitBranchQueryRuntime,
  initGitRootQueryRuntime,
  initHostQueryRuntime,
  initQueryDurationConstants,
  initScopeRuntime,
  queryDurations,
} from "../../runtime/git-branch-switcher-runtime";
import {
  selectBranches,
  serializeBranchSearchQueryKey,
  serializeGitRootQueryKey,
  type BranchSearchQueryRequest,
  type GitRootQueryRequest,
  type QuerySignalContext,
} from "./branch-query-shared";

let currentGitRootQuery: unknown;
export let gitBranchSearchQuery: unknown;

export const initGitBranchSearchQuery = once(() => {
  initScopeRuntime();
  initAppScope();
  initQueryDurationConstants();
  initGitBranchQueryRuntime();
  initHostQueryRuntime();
  initGitRootQueryRuntime();

  currentGitRootQuery = createQuerySignalFamily(
    appScope,
    ({ cwd, enabled, hostConfig, operationSource }: GitRootQueryRequest) =>
      createGitRootQueryOptions(
        cwd,
        getHostCacheKey(hostConfig),
        hostConfig,
        operationSource,
        {
          enabled,
        },
      ),
    {
      key: serializeGitRootQueryKey,
    },
  );

  gitBranchSearchQuery = createQuerySignalFamily(
    appScope,
    (
      {
        cwd,
        enabled,
        hostConfig,
        operationSource,
        query,
      }: BranchSearchQueryRequest,
      { get }: QuerySignalContext,
    ) => {
      const gitRoot = get(currentGitRootQuery, {
        cwd,
        enabled,
        hostConfig,
        operationSource,
      }).data;

      return createHostQueryOptions(
        "search-branches",
        gitRoot,
        gitRoot == null
          ? null
          : {
              root: gitRoot.root,
              operationSource,
              query,
              limit: 20,
            },
        getHostCacheKey(hostConfig),
        hostConfig,
        {
          enabled,
          select: selectBranches,
          staleTime: queryDurations.FIVE_SECONDS,
        },
      );
    },
    {
      key: serializeBranchSearchQueryKey,
    },
  );
});
