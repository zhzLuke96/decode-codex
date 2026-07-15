// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hook exposing whether a git repository can be created for the current review
// working directory plus a mutation that initializes one via the host bridge.
import { useIntl } from "../vendor/react-intl";
import {
  appStoreScope,
  toastControllerAtom,
  useScopedStore,
  useQueryClient,
  useMutation,
  resolveHostConfigId,
  getRpcRequester,
  normalizePath,
  buildQueryKey,
} from "../boundaries/onboarding-commons-externals.facade";

export interface CreateGitRepositoryOptions {
  cwd?: string;
  hostConfig: unknown;
  onErrorMessage?: (message: string) => void;
  showErrorToast?: boolean;
}

export interface CreateGitRepositoryResult {
  canCreateGitRepository: boolean;
  createGitRepository: () => Promise<void>;
  isCreatingGitRepository: boolean;
}

export function initUseCreateGitRepositoryChunk(): void {}

export function useCreateGitRepository(
  options: CreateGitRepositoryOptions,
): CreateGitRepositoryResult {
  const {
    cwd = "",
    hostConfig,
    onErrorMessage,
    showErrorToast = false,
  } = options;

  const store = useScopedStore(appStoreScope);
  const queryClient = useQueryClient();
  const intl = useIntl();
  const hostConfigId = resolveHostConfigId(hostConfig);
  const mutationKey = ["git", "init-repo", hostConfigId, cwd];

  const mutationFn = async () => {
    if (cwd == null) throw Error("Missing git context");
    await getRpcRequester("git").request({
      method: "git-init-repo",
      params: {
        cwd: normalizePath(cwd),
        hostConfig,
        operationSource: "review_model",
      },
    });
  };

  const onSuccess = async () => {
    store.get(toastControllerAtom).success(
      intl.formatMessage({
        id: "codex.review.noDiff.gitInit.success",
        defaultMessage: "Git repository created",
        description:
          "Toast shown after creating a git repository from the diff empty state",
      }),
    );
    const invalidations = [
      queryClient.invalidateQueries({ queryKey: buildQueryKey("git-origins") }),
    ];
    if (cwd != null) {
      invalidations.push(
        queryClient.invalidateQueries({
          queryKey: ["git", "metadata", hostConfigId, cwd],
        }),
      );
    }
    await Promise.all(invalidations);
  };

  const onError = (error: unknown) => {
    const message = error instanceof Error ? error.message : String(error);
    if (showErrorToast) {
      store.get(toastControllerAtom).danger(
        intl.formatMessage(
          {
            id: "codex.review.noDiff.gitInit.error",
            defaultMessage: "Git init failed: {message}",
            description:
              "Error text shown when git initialization fails from the diff empty state",
          },
          { message },
        ),
      );
    }
    onErrorMessage?.(message);
  };

  const mutation = useMutation({ mutationKey, mutationFn, onSuccess, onError });

  const createGitRepository = async () => {
    if (cwd == null || mutation.isPending) return;
    try {
      await mutation.mutateAsync();
    } catch {
      return;
    }
  };

  return {
    canCreateGitRepository: cwd != null,
    createGitRepository,
    isCreatingGitRepository: mutation.isPending,
  };
}
