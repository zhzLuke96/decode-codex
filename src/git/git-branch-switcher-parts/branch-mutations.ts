// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js
// Branch checkout and branch creation mutations for the git branch switcher.

import { once } from "../../runtime/commonjs-interop";
import {
  getChunkModuleExports,
  getHostCacheKey,
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  initGitRootQueryRuntime,
  initReactQueryRuntime,
  initVscodeApiBridge,
  updateGitMetadataCache,
  useAppServerMutation,
  useGitAvailabilityQuery,
  useQueryClient,
} from "../../runtime/git-branch-switcher-runtime";
import type { GitAvailability } from "./branch-query-shared";
import type {
  CheckoutBranchPayload,
  CreateBranchPayload,
  GitMutationResponse,
  GitOperationResult,
  HostConfig,
  MutationCallbacks,
  MutationResult,
} from "./types";

export const initCheckoutBranchMutation = once(() => {
  getChunkModuleExports();
  initReactQueryRuntime();
  initGitBranchQueryRuntime();
  initGitRootQueryRuntime();
  initGitQueryKeyHelpers();
  initVscodeApiBridge();
});

export function useCheckoutBranchMutation(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  callbacks?: MutationCallbacks<CheckoutBranchPayload, GitMutationResponse>,
): MutationResult<CheckoutBranchPayload, GitMutationResponse> {
  const queryClient = useQueryClient();
  const { data: availability } = useGitAvailabilityQuery(
    cwd,
    hostConfig,
    operationSource,
  ) as GitOperationResult<GitAvailability>;
  const hostKey = getHostCacheKey(hostConfig);
  const mutationKey = [
    "vscode",
    "git-checkout-branch",
    cwd ?? null,
    hostConfig.id,
  ];

  const onSettled = async (
    result: GitMutationResponse,
    error: unknown,
    variables: CheckoutBranchPayload | undefined,
    context: unknown,
    mutation: unknown,
  ) => {
    if (availability != null && result?.status === "success") {
      updateGitMetadataCache(
        queryClient,
        {
          commonDir: availability.commonDir,
          root: availability.root,
        },
        {
          changeType: "head",
          hostKey,
        },
      );
    }

    await callbacks?.onSettled?.(result, error, variables, context, mutation);
  };

  const mutation = useAppServerMutation("git-checkout-branch", {
    source: operationSource,
    mutationKey,
    ...callbacks,
    onSettled,
  }) as MutationResult<CheckoutBranchPayload, GitMutationResponse>;

  return {
    ...mutation,
    mutate(payload: CheckoutBranchPayload, options?: unknown) {
      mutation.mutate(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
    mutateAsync(payload: CheckoutBranchPayload, options?: unknown) {
      return mutation.mutateAsync(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
  };
}

export const initCreateBranchMutation = once(() => {
  getChunkModuleExports();
  initReactQueryRuntime();
  initGitBranchQueryRuntime();
  initGitRootQueryRuntime();
  initGitQueryKeyHelpers();
  initVscodeApiBridge();
});

export function useCreateBranchMutation(
  cwd: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  callbacks?: MutationCallbacks<CreateBranchPayload, GitMutationResponse>,
): MutationResult<CreateBranchPayload, GitMutationResponse> {
  const queryClient = useQueryClient();
  const { data: availability } = useGitAvailabilityQuery(
    cwd,
    hostConfig,
    operationSource,
  ) as GitOperationResult<GitAvailability>;
  const hostKey = getHostCacheKey(hostConfig);
  const mutationKey = [
    "vscode",
    "git-create-branch",
    cwd ?? null,
    hostConfig.id,
  ];

  const onSettled = async (
    result: GitMutationResponse,
    error: unknown,
    variables: CreateBranchPayload | undefined,
    context: unknown,
    mutation: unknown,
  ) => {
    if (availability != null) {
      updateGitMetadataCache(queryClient, availability, {
        changeType: variables?.mode === "synced" ? "synced-branch" : "head",
        hostKey,
      });
    }

    await callbacks?.onSettled?.(result, error, variables, context, mutation);
  };

  const mutation = useAppServerMutation("git-create-branch", {
    source: operationSource,
    mutationKey,
    ...callbacks,
    onSettled,
  }) as MutationResult<CreateBranchPayload, GitMutationResponse>;

  return {
    ...mutation,
    mutate(payload: CreateBranchPayload, options?: unknown) {
      mutation.mutate(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
    mutateAsync(payload: CreateBranchPayload, options?: unknown) {
      return mutation.mutateAsync(
        {
          ...payload,
          hostId: hostConfig.id,
        },
        options,
      );
    },
  };
}
