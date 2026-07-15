// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightweight local git-action state and command runtime used by the commons facade.
import {
  appStoreScope,
  createComputedAtom,
  createParametricAtom,
  createParametricStateAtom,
  defineScope,
} from "../runtime/onboarding-scope-runtime";
import { disabledQueryResult } from "../runtime/query-result-runtime";
import { hostConfigByIdAtom } from "./review-route-runtime";

type GitActionContext = {
  codexWorktree?: unknown;
  conversationId?: string | null;
  cwd: string | null;
  hostConfig: { id: string };
};

type StoreLike = {
  get?<TValue = unknown>(atom: unknown, key?: unknown): TValue;
  set?(atom: unknown, keyOrValue: unknown, value?: unknown): void;
  queryClient?: {
    invalidateQueries?(filters?: unknown): Promise<unknown> | unknown;
  };
};

export const gitActionsParentScope = defineScope("GitActionsParentScope");
export const localConversationGitActionsScope = defineScope(
  "LocalGitActionsScope",
);

export const activeGitWorkflowAtom = createParametricStateAtom(
  appStoreScope,
  () => null,
);

export const analyticsAttributionAtom = createParametricStateAtom(
  appStoreScope,
  () => null,
);

export const commitAttributionConfigAtom = createParametricStateAtom(
  appStoreScope,
  () => disabledQueryResult(null),
);

export const activeGitDialogAtom = createParametricStateAtom(
  localConversationGitActionsScope,
  () => null,
);

export const gitActionsContextAtom = createComputedAtom(
  localConversationGitActionsScope,
  ({ get, scope }): GitActionContext => {
    const value = (scope.value ?? {}) as {
      codexWorktree?: unknown;
      conversationId?: string | null;
      cwd?: string | null;
      hostId?: string | null;
    };
    const hostId = value.hostId ?? "local";
    return {
      codexWorktree: value.codexWorktree,
      conversationId: value.conversationId,
      cwd: value.cwd ?? null,
      hostConfig: get(hostConfigByIdAtom, hostId),
    };
  },
);

export const commitBlockedReasonAtom = createParametricAtom(
  appStoreScope,
  () => null,
);

export const pushBlockedReasonAtom = createParametricAtom(
  appStoreScope,
  () => null,
);

export const isPushActionHiddenAtom = createParametricAtom(
  appStoreScope,
  () => false,
);

export const isDetachedHeadAtom = createParametricAtom(
  appStoreScope,
  () => false,
);

export const hasOpenPullRequestAtom = createParametricAtom(
  appStoreScope,
  () => false,
);

export const diffSelectionSummaryAtom = createParametricStateAtom(
  appStoreScope,
  () => null,
);

export const conversationHeadBranchAtom = createParametricAtom(
  appStoreScope,
  () => null,
);

export const pullRequestStatusAtom = createParametricAtom(appStoreScope, () =>
  disabledQueryResult(null),
);

export function openCreateBranchDialog(store: StoreLike): void {
  store.set?.(activeGitDialogAtom, "worktree-branch-setup");
}

export function openCreatePullRequestDialog(store: StoreLike): void {
  store.set?.(activeGitDialogAtom, "create-pr");
}

export function triggerPushFlow(store: StoreLike): void {
  store.set?.(activeGitWorkflowAtom, { cwd: null, hostId: "local" }, {
    workflow: "push",
    phase: "queued",
  });
}

export function cancelActiveGitWorkflow(params: {
  cwd?: string | null;
  hostId?: string | null;
  store?: StoreLike;
} = {}): void {
  params.store?.set?.(
    activeGitWorkflowAtom,
    { cwd: params.cwd ?? null, hostId: params.hostId ?? "local" },
    null,
  );
}

export async function refreshPushStatus(
  store?: StoreLike,
  params?: { cwd?: string | null; hostConfig?: unknown },
): Promise<void> {
  await store?.queryClient?.invalidateQueries?.({
    queryKey: ["git-push-status", params?.cwd, params?.hostConfig],
  });
}

export function refetchReviewGitChanges(store?: StoreLike): void {
  void store?.queryClient?.invalidateQueries?.({ queryKey: ["git"] });
}

export async function invalidateReviewDiffQueries(
  queryClientOrOptions?: {
    invalidateQueries?(filters?: unknown): Promise<unknown> | unknown;
  } | Record<string, unknown>,
): Promise<void> {
  await queryClientOrOptions?.invalidateQueries?.({ queryKey: ["review"] });
}

export async function setConversationBranch(
  _conversationId?: string | null,
  _branch?: string | null,
): Promise<void> {}
