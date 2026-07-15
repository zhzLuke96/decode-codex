// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Git branch status query families for review: branch-exists, upstream branch,
// branch-ahead count, and default branch, combined into a single derived branch
// status atom (loading / error / success) keyed by cwd.

import {
  createCwdQueryAtomFamily,
  createParametricAtom,
  gitMetadataFromCwdQuery,
  gitCwdParamsAtom,
  normalizePath,
  DURATIONS,
} from "../boundaries/onboarding-commons-externals.facade";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
};

export function initBranchStatusRuntimePreludeChunk(): void {}

interface CwdQueryParams {
  operationSource: string;
  root: string;
  branch?: string;
  enabled?: boolean;
}

interface QueryState<TData> {
  isError: boolean;
  isSuccess: boolean;
  data?: TData;
  refetch: () => Promise<unknown>;
}

export const branchExistsQueryFamily = createCwdQueryAtomFamily({
  method: "branch-exists",
  getParams: (params: CwdQueryParams & { branch: string }) => ({
    branch: params.branch,
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: () => ({
    select: (response: { exists: boolean }) => response.exists,
    staleTime: DURATIONS.FIVE_SECONDS,
  }),
});

export const branchExistsAtom = branchExistsQueryFamily.fromCwd$;

export const upstreamBranchQueryFamily = createCwdQueryAtomFamily({
  method: "upstream-branch",
  getParams: (params: CwdQueryParams) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: () => ({
    refetchOnWindowFocus: true,
    staleTime: 3e4,
  }),
});

export const branchAheadCountQueryFamily = createCwdQueryAtomFamily({
  method: "branch-ahead-count",
  getParams: (params: CwdQueryParams) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: () => ({
    refetchOnWindowFocus: true,
    staleTime: 3e4,
  }),
});

export const defaultBranchQueryFamily = createCwdQueryAtomFamily({
  method: "default-branch",
  getParams: (params: CwdQueryParams) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: () => ({
    refetchOnWindowFocus: true,
    select: (response: { branch: string | null }) => response.branch,
    staleTime: 3e4,
  }),
});

export const defaultBranchQueryAtom = defaultBranchQueryFamily.fromCwd$;

export function refetchBranchReviewInfo(
  scope: AppScope,
  params: CwdQueryParams,
): Promise<unknown[]> {
  const enabledParams = { ...params, enabled: true };
  return Promise.all([
    scope
      .get<
        QueryState<unknown>
      >(upstreamBranchQueryFamily.fromCwd$, enabledParams)
      .refetch(),
    scope
      .get<
        QueryState<unknown>
      >(branchAheadCountQueryFamily.fromCwd$, enabledParams)
      .refetch(),
  ]);
}

interface GitRootInfo {
  root: string;
  commonDir: string;
}

export function isMainWorktree(info: GitRootInfo): boolean {
  const root = normalizePath(info.root).replace(/\/+$/, "");
  const commonDir = normalizePath(info.commonDir).replace(/\/+$/, "");
  return commonDir === root ? true : commonDir === `${root}/.git`;
}

export const BRANCH_STATUS_LOADING = { type: "loading" } as const;
export const BRANCH_STATUS_ERROR = { type: "error" } as const;

export type BranchStatus =
  | typeof BRANCH_STATUS_LOADING
  | typeof BRANCH_STATUS_ERROR
  | {
      type: "success";
      data: {
        gitRoot: string;
        branch: string | null;
        defaultBranch: string | null;
        commitsAhead: number;
        upstreamRef: string | null;
        isMainWorktree: boolean;
      };
    };

export const branchReviewStatusAtom = createParametricAtom(
  gitCwdParamsAtom,
  (params: CwdQueryParams, { get }: { get: AppScope["get"] }): BranchStatus => {
    const enabledParams = { ...params, enabled: true };
    const metadata = get<QueryState<GitRootInfo> & { data?: GitRootInfo }>(
      gitMetadataFromCwdQuery,
      { ...enabledParams, watchForGitInit: false },
    );
    const upstream = get<
      QueryState<{
        branch?: string | null;
        upstream?: { branch?: string | null };
      }>
    >(upstreamBranchQueryFamily.fromCwd$, enabledParams);
    const aheadCount = get<QueryState<{ commitsAhead: number }>>(
      branchAheadCountQueryFamily.fromCwd$,
      enabledParams,
    );
    const defaultBranch = get<QueryState<string | null>>(
      defaultBranchQueryFamily.fromCwd$,
      enabledParams,
    );

    if (
      metadata.isError ||
      upstream.isError ||
      aheadCount.isError ||
      defaultBranch.isError
    ) {
      return BRANCH_STATUS_ERROR;
    }
    if (
      !metadata.isSuccess ||
      !upstream.isSuccess ||
      !aheadCount.isSuccess ||
      !defaultBranch.isSuccess
    ) {
      return BRANCH_STATUS_LOADING;
    }

    const metadataData = metadata.data;
    const upstreamData = upstream.data;
    const aheadData = aheadCount.data;
    if (metadataData == null || upstreamData == null || aheadData == null) {
      return BRANCH_STATUS_ERROR;
    }

    return {
      type: "success",
      data: {
        gitRoot: metadataData.root,
        branch: upstreamData.branch ?? null,
        defaultBranch: defaultBranch.data ?? null,
        commitsAhead: aheadData.commitsAhead,
        upstreamRef: upstreamData.upstream?.branch ?? null,
        isMainWorktree: isMainWorktree(metadataData),
      },
    };
  },
  { excludeFieldsFromKey: ["operationSource"] },
);
