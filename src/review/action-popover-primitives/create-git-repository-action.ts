// Restored from ref/webview/assets/action-popover-primitives-BriXOYq-.js
// action-popover-primitives-BriXOYq- chunk restored from the Codex webview bundle.
import { useIntl } from "react-intl";
import {
  _appScopeO as useAppScopeStore,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { normalizeFilesystemPath } from "../../boundaries/rpc.facade";
import {
  normalizeHostConfigForWorktreeKey,
  serviceClientForHost,
} from "../../boundaries/thread-context-inputs.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiR as createVscodeQueryKey,
  vscodeApiUnderscore as useMutation,
} from "../../boundaries/vscode-api";
import { toastApiSignal } from "../../ui/toast-signal";
type QueryClientLike = {
  invalidateQueries(options: { queryKey: unknown }): Promise<unknown> | unknown;
};
type MutationResult = {
  isPending: boolean;
  mutateAsync(): Promise<unknown>;
};
export type CreateGitRepositoryActionOptions = {
  cwd?: string | null;
  hostConfig: unknown;
  onErrorMessage?: (message: string) => void;
  showErrorToast?: boolean;
};
export function useCreateGitRepositoryAction({
  cwd,
  hostConfig,
  onErrorMessage,
  showErrorToast = false,
}: CreateGitRepositoryActionOptions) {
  const appScopeStore = useAppScopeStore(appScopeRoot);
  const queryClient = useQueryClient() as QueryClientLike;
  const intl = useIntl();
  const normalizedHostKey = normalizeHostConfigForWorktreeKey(hostConfig);
  const mutationKey = ["git", "init-repo", normalizedHostKey, cwd ?? ""];
  const mutation = useMutation({
    mutationKey,
    mutationFn: async () => {
      if (cwd == null) {
        throw Error("Missing git context");
      }
      await serviceClientForHost("git").request({
        method: "git-init-repo",
        params: {
          cwd: normalizeFilesystemPath(cwd),
          hostConfig,
          operationSource: "review_model",
        },
      });
    },
    onSuccess: async () => {
      appScopeStore.get(toastApiSignal).success(
        intl.formatMessage({
          id: "codex.review.noDiff.gitInit.success",
          defaultMessage: "Git repository created",
          description:
            "Toast shown after creating a git repository from the diff empty state",
        }),
      );
      const invalidations = [
        queryClient.invalidateQueries({
          queryKey: createVscodeQueryKey("git-origins"),
        }),
      ];
      if (cwd != null) {
        invalidations.push(
          queryClient.invalidateQueries({
            queryKey: ["git", "metadata", normalizedHostKey, cwd],
          }),
        );
      }
      await Promise.all(invalidations);
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      if (showErrorToast) {
        appScopeStore.get(toastApiSignal).danger(
          intl.formatMessage(
            {
              id: "codex.review.noDiff.gitInit.error",
              defaultMessage: "Git init failed: {message}",
              description:
                "Error text shown when git initialization fails from the diff empty state",
            },
            {
              message,
            },
          ),
        );
      }
      onErrorMessage?.(message);
    },
  }) as MutationResult;
  const createGitRepository = async () => {
    if (cwd == null || mutation.isPending) {
      return;
    }
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
