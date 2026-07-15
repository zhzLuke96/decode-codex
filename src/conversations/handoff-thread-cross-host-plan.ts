// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Cross-host worktree handoff planner.

import type { HandoffHostConfig } from "./available-handoff-hosts";
import { moveThreadToHostWorktree } from "./move-thread-to-host-worktree";
import { callCodexVscodeApi } from "../boundaries/vscode-api";
import {
  buildInitialHandoffProgress,
  buildPendingSteps,
  resolveHandoffBranchName,
  setHandoffDestinationCwd,
  setHandoffDestinationThreadId,
  updateHandoffStep,
} from "./thread-handoff-progress";
import {
  intlAtom,
  matchSavedProjectForHandoff,
  setSharedObjectValue,
  toWorkspaceRootPath,
} from "../boundaries/onboarding-commons-externals.facade";
import { transferBrowserState } from "./handoff-thread-local-plan";
import {
  HANDOFF_OPERATION_SOURCE,
  type HandoffContext,
  type HandoffPlan,
} from "./handoff-thread-types";

export async function planCrossHostHandoff(
  context: HandoffContext,
  destinationHost: HandoffHostConfig,
): Promise<HandoffPlan> {
  if (context.conversation.rolloutPath.trim().length === 0) {
    throw Error("This chat does not have a rollout file to move");
  }
  const sourceBranch = resolveHandoffBranchName(context, context.currentBranch);
  const [{ roots: destinationWorkspaceRoots }, { origins: sourceGitOrigins }] =
    await Promise.all([
      callCodexVscodeApi("workspace-root-options", {
        params: { hostId: destinationHost.id },
      }),
      callCodexVscodeApi("git-origins", {
        params: { hostId: context.hostConfig.id, dirs: [context.cwd] },
        source: HANDOFF_OPERATION_SOURCE,
      }),
    ]);
  const { origins: destinationGitOrigins } = await callCodexVscodeApi(
    "git-origins",
    {
      params: { hostId: destinationHost.id, dirs: destinationWorkspaceRoots },
      source: HANDOFF_OPERATION_SOURCE,
    },
  );
  const destinationWorkspaceRoot = matchSavedProjectForHandoff({
    sourceWorkspaceRoot: context.cwd,
    sourceGitRoot: context.gitRoot,
    sourceGitOrigins,
    destinationWorkspaceRoots,
    destinationGitOrigins,
  });
  if (destinationWorkspaceRoot == null) {
    throw Error(
      `No matching saved project was found on ${destinationHost.display_name}.`,
    );
  }
  return {
    destinationHostId: destinationHost.id,
    progress: buildInitialHandoffProgress(context, {
      destinationHostDisplayName: destinationHost.display_name,
      destinationHostId: destinationHost.id,
      destinationCwd: toWorkspaceRootPath(destinationWorkspaceRoot),
      direction: "to-host-worktree",
      localBranch: null,
      sourceBranch,
      steps: buildPendingSteps([
        "prepare-host-transfer",
        "transfer-host-artifacts",
        "apply-changes-to-worktree",
        "switching-thread",
      ]),
      worktreeBranch: null,
    }),
    run: () =>
      moveThreadToHostWorktree({
        conversationId: context.threadId,
        sourceBranch,
        cwd: context.cwd,
        destinationWorkspaceRoot: toWorkspaceRootPath(destinationWorkspaceRoot),
        intl: context.scope.get(intlAtom),
        appServerManager: context.manager,
        sourceHostConfig: context.hostConfig,
        destinationHostConfig: destinationHost,
        transferBrowserState,
        setDiffComments: (updater) =>
          setSharedObjectValue(context.scope, "diff_comments", updater),
        queryClient: context.queryClient,
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
        onStepStatus: (step, status) =>
          updateHandoffStep(context, step, status),
      }),
  };
}
