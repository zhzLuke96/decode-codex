// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js
// Shared request shapes and selectors for git branch switcher queries.

import type { GitOperationResult, HostConfig } from "./types";

export type GitRootQueryRequest = {
  cwd?: string | null;
  enabled: boolean;
  hostConfig: HostConfig;
  operationSource: string;
};

export type BranchSearchQueryRequest = GitRootQueryRequest & {
  query: string;
};

export type QuerySignalContext = {
  get: (
    querySignal: unknown,
    request: GitRootQueryRequest,
  ) => GitOperationResult<{ root: string }>;
};

export type BranchListResponse = {
  branches: string[];
};

export type GitAvailability = {
  commonDir: string;
  root: string;
};

export function serializeGitRootQueryKey({
  cwd,
  enabled,
  hostConfig,
  operationSource,
}: GitRootQueryRequest): string {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
  });
}

export function serializeBranchSearchQueryKey({
  cwd,
  enabled,
  hostConfig,
  operationSource,
  query,
}: BranchSearchQueryRequest): string {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
    query,
  });
}

export function selectBranches(response: BranchListResponse): string[] {
  return response.branches;
}
