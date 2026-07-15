// Restored from ref/webview/assets/pull-request-check-rows-B2iGS9CB.js
// GitHub pull request merge/update mutation hooks.
import { once } from "../../runtime/commonjs-interop";
import {
  initReactQueryRuntime,
  initVscodeApiBridge,
  queryKey,
  useAppServerMutation,
  useQueryClient,
} from "../../runtime/pull-request-actions-runtime";

type MutationOptions = {
  cwd?: string | null;
  headBranch?: string | null;
  hostId?: string | null;
  operationSource?: string;
  onSuccess?: (result: any, variables: any) => void;
};

function pullRequestMergeMutationKey(
  cwd?: string | null,
  headBranch?: string | null,
  hostId?: string | null,
) {
  return [
    "vscode",
    "gh-pr-merge",
    cwd ?? null,
    headBranch ?? null,
    hostId ?? null,
  ];
}

function pullRequestUpdateMutationKey({
  cwd,
  headBranch,
  hostId,
}: MutationOptions) {
  return [
    "vscode",
    "gh-pr-update",
    cwd ?? null,
    headBranch ?? null,
    hostId ?? null,
  ];
}

export function usePullRequestMergeMutation({
  cwd,
  headBranch,
  hostId,
  operationSource,
  onSuccess,
}: MutationOptions) {
  const queryClient = useQueryClient();
  const mutation = useAppServerMutation("gh-pr-merge", {
    source: operationSource,
    mutationKey: pullRequestMergeMutationKey(cwd, headBranch, hostId),
    onSuccess: (result: any, variables: any) => {
      if (result.status === "success" && headBranch != null) {
        resetStatusCacheAfterMerge(queryClient, variables, headBranch);
        Promise.all([
          queryClient.invalidateQueries({ queryKey: queryKey("gh-pr-body") }),
          queryClient.invalidateQueries({ queryKey: queryKey("gh-pr-checks") }),
          queryClient.invalidateQueries({
            queryKey: queryKey("gh-pr-comments"),
          }),
          queryClient.invalidateQueries({
            queryKey: queryKey("gh-pr-status", {
              cwd: variables.cwd,
              headBranch,
              hostId: variables.hostId,
            }),
          }),
          queryClient.invalidateQueries({
            queryKey: queryKey("gh-pr-status", {
              cwd: variables.cwd,
              headBranch,
              hostId: variables.hostId,
              number: variables.number,
              repo: variables.repo,
            }),
          }),
        ]);
      }
      onSuccess?.(result, variables);
    },
  });
  return wrapHostIdMutation(mutation, hostId);
}

export function usePullRequestUpdateMutation({
  cwd,
  headBranch,
  hostId,
  operationSource,
  onSuccess,
}: MutationOptions) {
  const queryClient = useQueryClient();
  const mutation = useAppServerMutation("gh-pr-update", {
    source: operationSource,
    mutationKey: pullRequestUpdateMutationKey({ cwd, headBranch, hostId }),
    onSuccess: (result: any, variables: any) => {
      if (result.status === "success" && headBranch != null) {
        queryClient.invalidateQueries({ queryKey: queryKey("gh-pr-comments") });
        if (variables.action !== "request-reviewers") {
          updateBodyAndStatusCaches(queryClient, variables, headBranch);
        }
      }
      onSuccess?.(result, variables);
    },
  });
  return wrapHostIdMutation(mutation, hostId);
}

function wrapHostIdMutation(mutation: any, hostId?: string | null) {
  return {
    ...mutation,
    mutate: (variables: any, options?: any) =>
      mutation.mutate({ ...variables, hostId }, options),
    mutateAsync: (variables: any, options?: any) =>
      mutation.mutateAsync({ ...variables, hostId }, options),
  };
}

function resetStatusCacheAfterMerge(
  queryClient: any,
  variables: any,
  headBranch: string,
) {
  const resetStatus = (params: Record<string, unknown>) => {
    queryClient.setQueryData(queryKey("gh-pr-status", params), (data: any) =>
      data?.status !== "success"
        ? data
        : {
            ...data,
            canMerge: false,
            checks: [],
            ciStatus: "none",
            commentAttachments: [],
            hasOpenPr: false,
            isDraft: false,
            mergeBlocker: null,
            reviewers: {
              approved: [],
              commentCounts: [],
              commented: [],
              changesRequested: [],
              requested: [],
              requestedTeams: [],
              unresolvedCommentCount: 0,
            },
          },
    );
  };
  resetStatus({ cwd: variables.cwd, headBranch, hostId: variables.hostId });
  resetStatus({
    cwd: variables.cwd,
    headBranch,
    hostId: variables.hostId,
    number: variables.number,
    repo: variables.repo,
  });
}

function updateBodyAndStatusCaches(
  queryClient: any,
  variables: any,
  headBranch: string,
) {
  const applyUpdate = (data: any) => {
    if (data?.status !== "success") return data;
    switch (variables.action) {
      case "toggle-auto-merge":
        return { ...data, isAutoMergeEnabled: variables.enabled };
      case "mark-draft":
        return { ...data, isDraft: true };
      case "mark-ready":
        return { ...data, isDraft: false };
      default:
        return data;
    }
  };
  queryClient.setQueryData(
    queryKey("gh-pr-body", {
      cwd: variables.cwd,
      headBranch,
      hostId: variables.hostId,
      number: variables.number,
      repo: variables.repo,
    }),
    applyUpdate,
  );
  for (const params of [
    { cwd: variables.cwd, headBranch, hostId: variables.hostId },
    {
      cwd: variables.cwd,
      headBranch,
      hostId: variables.hostId,
      number: variables.number,
      repo: variables.repo,
    },
  ]) {
    queryClient.setQueryData(queryKey("gh-pr-status", params), applyUpdate);
  }
  Promise.all([
    queryClient.invalidateQueries({ queryKey: queryKey("gh-pr-body") }),
    queryClient.invalidateQueries({ queryKey: queryKey("gh-pr-checks") }),
    queryClient.invalidateQueries({
      queryKey: queryKey("gh-pr-status", {
        cwd: variables.cwd,
        headBranch,
        hostId: variables.hostId,
      }),
    }),
    queryClient.invalidateQueries({
      queryKey: queryKey("gh-pr-status", {
        cwd: variables.cwd,
        headBranch,
        hostId: variables.hostId,
        number: variables.number,
        repo: variables.repo,
      }),
    }),
  ]);
}

export const initPullRequestMergeMutationChunk = once(() => {
  initReactQueryRuntime();
  initVscodeApiBridge();
});

export const initPullRequestUpdateMutationChunk = once(() => {
  initReactQueryRuntime();
  initVscodeApiBridge();
});
