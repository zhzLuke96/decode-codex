// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js
// Status summary and recent branch query hooks for the git branch switcher.

import { once } from "../../runtime/commonjs-interop";
import {
  getChunkModuleExports,
  initGitBranchQueryRuntime,
  initIntlMessageRuntime,
  initQueryDurationConstants,
  normalizeWorkspacePath,
  queryDurations,
  useGitOperationQuery,
} from "../../runtime/git-branch-switcher-runtime";
import { selectBranches } from "./branch-query-shared";
import type { GitOperationResult, HostConfig, QueryOptions } from "./types";

export const initGitStatusSummaryQuery = once(() => {
  getChunkModuleExports();
  initIntlMessageRuntime();
  initQueryDurationConstants();
  initGitBranchQueryRuntime();
});

export function useGitStatusSummaryQuery(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  options: QueryOptions = {},
): GitOperationResult {
  const { staleTime, ...restOptions } = options;
  const normalizedCwd = normalizeWorkspacePath(String(cwd));
  const request = {
    cwd: normalizedCwd,
    operationSource,
  };

  return useGitOperationQuery(
    cwd,
    hostConfig,
    "status-summary",
    request,
    operationSource,
    {
      staleTime: staleTime ?? queryDurations.FIVE_SECONDS,
      ...restOptions,
    },
  ) as GitOperationResult;
}

export const initGitRecentBranchesQuery = once(() => {
  getChunkModuleExports();
  initQueryDurationConstants();
  initGitBranchQueryRuntime();
});

export function useGitRecentBranchesQuery(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  options: QueryOptions = {},
): GitOperationResult<string[]> {
  const buildRecentBranchesRequest = ({ root }: { root: string }) => ({
    operationSource,
    root,
    limit: 100,
  });

  return useGitOperationQuery(
    cwd,
    hostConfig,
    "recent-branches",
    buildRecentBranchesRequest,
    operationSource,
    {
      select: selectBranches,
      staleTime: queryDurations.FIVE_SECONDS,
      ...options,
    },
  ) as GitOperationResult<string[]>;
}
