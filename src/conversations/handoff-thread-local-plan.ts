// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Local/worktree thread handoff planning and browser-state transfer.

import { moveThreadToLocal } from "./move-thread-to-local";
import { moveThreadToWorktree } from "./move-thread-to-worktree";
import { callCodexVscodeApi } from "../boundaries/vscode-api";
import { serviceClientForHost } from "../boundaries/thread-context-inputs.facade";
import {
  buildInitialHandoffProgress,
  buildPendingSteps,
  resolveHandoffBranchName,
  setHandoffDestinationCwd,
  setHandoffDestinationThreadId,
  updateHandoffStep,
} from "./thread-handoff-progress";
import {
  canonicalizeRootPath,
  hostMessageBridge,
  intlAtom,
  isPathWithin,
  selectLocalCheckoutsForWorktree,
  setSharedObjectValue,
  toWorkspaceRootPath,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  HANDOFF_OPERATION_SOURCE,
  type HandoffContext,
  type HandoffPlan,
} from "./handoff-thread-types";

export async function planLocalHandoff(
  context: HandoffContext,
): Promise<HandoffPlan> {
  const { codexHome } = await callCodexVscodeApi("codex-home", {
    params: { hostId: context.hostConfig.id },
  });
  if (isPathWithin(context.cwd, codexHome)) {
    const localCheckout = await findLocalCheckout(context, codexHome);
    const localBranch = resolveHandoffBranchName(
      context,
      context.currentBranch,
    );
    return {
      destinationHostId: context.hostConfig.id,
      progress: buildInitialHandoffProgress(context, {
        destinationHostDisplayName: context.hostConfig.display_name,
        destinationHostId: context.hostConfig.id,
        destinationCwd: toWorkspaceRootPath(localCheckout.workspaceRoot),
        direction: "to-local",
        localBranch,
        sourceBranch: localBranch,
        steps: buildPendingSteps([
          "stash-source-changes",
          "detach-worktree-branch",
          "checkout-local-branch",
          "apply-changes-to-local",
          "switching-thread",
        ]),
        worktreeBranch: null,
      }),
      run: () =>
        moveThreadToLocal({
          conversationId: context.threadId,
          currentBranch: localBranch,
          cwd: context.cwd,
          localGitRoot: localCheckout.gitRoot,
          localWorkspaceRoot: localCheckout.workspaceRoot,
          worktreeRoot: context.gitRoot,
          branchCheckedOutElsewhere: false,
          intl: context.scope.get(intlAtom),
          appServerManager: context.manager,
          transferBrowserState,
          setDiffComments: (updater) =>
            setSharedObjectValue(context.scope, "diff_comments", updater),
          hostConfig: context.hostConfig,
          operationId: context.operationId,
          onSwitchingThreadStart: () =>
            updateHandoffStep(context, "switching-thread", "running"),
          onSwitchingThreadDone: () =>
            updateHandoffStep(context, "switching-thread", "done"),
          onSwitchingThreadFailed: () =>
            updateHandoffStep(context, "switching-thread", "failed"),
          onTargetConversationId: (conversationId) =>
            setHandoffDestinationThreadId(context, conversationId),
          onTargetCwd: (cwd) => setHandoffDestinationCwd(context, cwd),
        }),
    };
  }
  const currentBranch = context.currentBranch?.trim() ?? "";
  if (currentBranch.length === 0) {
    throw Error(
      "The source checkout is detached. Check out a branch before handing it off to a worktree.",
    );
  }
  const { branch: defaultBranch } = await serviceClientForHost("git").request({
    method: "default-branch",
    params: {
      root: context.gitRoot,
      hostConfig: context.hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  const worktreeCheckoutBranch =
    currentBranch === defaultBranch
      ? resolveHandoffBranchName(context, null)
      : currentBranch;
  const selectedLocalCheckoutBranch =
    currentBranch === defaultBranch
      ? null
      : await findAlternateBranch(context, currentBranch, defaultBranch);
  return {
    destinationHostId: context.hostConfig.id,
    progress: buildInitialHandoffProgress(context, {
      destinationHostDisplayName: context.hostConfig.display_name,
      destinationHostId: context.hostConfig.id,
      destinationCwd: null,
      direction: "to-worktree",
      localBranch: selectedLocalCheckoutBranch,
      sourceBranch: currentBranch,
      steps: buildPendingSteps([
        "stash-source-changes",
        "checkout-local-branch",
        "stash-target-worktree-changes",
        "checkout-worktree-branch",
        "apply-changes-to-worktree",
        "switching-thread",
      ]),
      worktreeBranch: worktreeCheckoutBranch,
    }),
    run: () =>
      moveThreadToWorktree({
        conversationId: context.threadId,
        currentBranch,
        cwd: context.cwd,
        worktreeCheckoutBranch,
        selectedLocalCheckoutBranch,
        intl: context.scope.get(intlAtom),
        appServerManager: context.manager,
        defaultBranch,
        transferBrowserState,
        setDiffComments: (updater) =>
          setSharedObjectValue(context.scope, "diff_comments", updater),
        hostConfig: context.hostConfig,
        queryClient: context.queryClient,
        operationId: context.operationId,
        onStepStatus: (step, status) =>
          updateHandoffStep(context, step, status),
        onTargetConversationId: (conversationId) =>
          setHandoffDestinationThreadId(context, conversationId),
        onTargetCwd: (cwd) => setHandoffDestinationCwd(context, cwd),
      }),
  };
}

type LocalCheckout = { workspaceRoot: string; gitRoot: string };

async function findLocalCheckout(
  context: HandoffContext,
  codexHome: string,
): Promise<LocalCheckout> {
  const [{ worktrees: repoWorktrees }, { worktrees: codexWorktrees }] =
    await Promise.all([
      serviceClientForHost("git").request({
        method: "list-worktrees",
        params: {
          cwd: context.cwd,
          hostConfig: context.hostConfig,
          operationSource: HANDOFF_OPERATION_SOURCE,
        },
      }),
      serviceClientForHost("git").request({
        method: "codex-worktrees",
        params: {
          hostConfig: context.hostConfig,
          operationSource: HANDOFF_OPERATION_SOURCE,
        },
      }),
    ]);
  const codexWorktreeDirs = new Set(
    codexWorktrees.map(({ dir }: { dir: string }) => canonicalizeRootPath(dir)),
  );
  const checkout = selectLocalCheckoutsForWorktree({
    cwd: context.cwd,
    sourceWorktreeRoot: toWorkspaceRootPath(context.gitRoot),
    repoWorktreeEntries: repoWorktrees.filter(
      ({ root }: { root: string }) =>
        !codexWorktreeDirs.has(canonicalizeRootPath(root)) &&
        !isPathWithin(root, codexHome),
    ),
  })[0];
  if (checkout == null) {
    throw Error("No checkout was found for the source worktree.");
  }
  return checkout;
}

async function findAlternateBranch(
  context: HandoffContext,
  currentBranch: string,
  defaultBranch: string,
): Promise<string> {
  const { branches } = await serviceClientForHost("git").request({
    method: "recent-branches",
    params: {
      root: context.gitRoot,
      hostConfig: context.hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  const alternateBranch = [defaultBranch, ...branches].find(
    (candidate: string | null) =>
      candidate != null && candidate !== currentBranch,
  );
  if (alternateBranch == null) {
    throw Error(
      "No other checkout branch is available before handing this thread off to a worktree.",
    );
  }
  return alternateBranch;
}

export function transferBrowserState(
  sourceConversationId: string,
  targetConversationId: string,
): void {
  hostMessageBridge.dispatchMessage("browser-sidebar-command", {
    conversationId: sourceConversationId,
    command: { type: "transfer-conversation", targetConversationId },
  });
}
