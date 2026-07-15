// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Cross-host thread handoff: move a local conversation's rollout and git state
// onto a worktree on another host, fork the conversation there, then transfer
// browser state, title, diff comments and pinned-thread order to the new thread.

import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { callCodexVscodeApi } from "../boundaries/vscode-api";
import {
  serviceClientForHost,
  normalizeHostConfigForWorktreeKey,
} from "../boundaries/thread-context-inputs.facade";
import { codexWorktreesQueryKey } from "../utils/worktree-query-keys";
import { remapDiffCommentsForHandoff } from "./remap-diff-comments-for-handoff";
import { transferPinnedThreadOrder } from "./transfer-pinned-thread-order";
import { transferThreadTitle } from "./transfer-thread-title";

import { appLogger as logger, serializeError } from "../runtime/app-logger";
import { setConversationBranchOverride } from "../runtime/git-query/conversation-branch-override";

type HostConfig = { id: string };

type AppServerConversation = {
  rolloutPath?: string | null;
  forkedFromId?: string | null;
  title?: string | null;
};

type AppServerManager = {
  getConversation(conversationId: string): AppServerConversation | null;
};

type IntlShape = {
  formatMessage(
    descriptor: { id: string; defaultMessage: string; description?: string },
    values?: Record<string, unknown>,
  ): string;
};

type StepStatus = "running" | "done" | "failed";

type MoveThreadToHostWorktreeOptions = {
  conversationId: string;
  sourceBranch: string;
  cwd: string;
  destinationWorkspaceRoot: string;
  intl: IntlShape;
  appServerManager: AppServerManager;
  sourceHostConfig: HostConfig;
  destinationHostConfig: HostConfig;
  transferBrowserState(
    sourceConversationId: string,
    targetConversationId: string,
  ): Promise<void> | void;
  setDiffComments(updater: (previous: unknown) => unknown): void;
  queryClient: { invalidateQueries(options: { queryKey: unknown }): void };
  operationId: string;
  onSwitchingThreadStart?: () => void;
  onSwitchingThreadDone?: () => void;
  onSwitchingThreadFailed?: () => void;
  onTargetCwd?: (cwd: string) => void;
  onTargetConversationId?: (conversationId: string) => void;
  onStepStatus?: (step: string, status: StepStatus) => void;
};

type MoveThreadResult =
  | { status: "success"; conversationId: string }
  | { status: "error"; message: string; execOutput?: unknown };

export function initMoveThreadToHostWorktreeChunk(): void {}

export async function moveThreadToHostWorktree({
  conversationId,
  sourceBranch,
  cwd,
  destinationWorkspaceRoot,
  intl,
  appServerManager,
  sourceHostConfig,
  destinationHostConfig,
  transferBrowserState,
  setDiffComments,
  queryClient,
  operationId,
  onSwitchingThreadStart,
  onSwitchingThreadDone,
  onSwitchingThreadFailed,
  onTargetCwd,
  onTargetConversationId,
  onStepStatus,
}: MoveThreadToHostWorktreeOptions): Promise<MoveThreadResult> {
  const sourceConversation = appServerManager.getConversation(conversationId);
  const sourceRolloutPath = sourceConversation?.rolloutPath ?? null;
  if (sourceRolloutPath == null || sourceRolloutPath.trim().length === 0) {
    return {
      status: "error",
      message: intl.formatMessage({
        id: "localConversation.moveToHostWorktree.error.rolloutMissing",
        defaultMessage: "This chat does not have a rollout file to move",
        description:
          "Error shown when cross-host handoff cannot find the source rollout file",
      }),
      execOutput: null,
    };
  }

  let reusableWorktreeGitRoot: string | null = null;
  let reusableWorktreeWorkspaceRoot: string | null = null;
  let reusableWorktreeHasUncommittedChanges = false;
  if (sourceConversation?.forkedFromId != null) {
    try {
      const resolvedWorktree = await serviceClientForHost("git").request({
        method: "resolve-worktree-for-thread",
        params: {
          cwd: destinationWorkspaceRoot,
          conversationId: sourceConversation.forkedFromId,
          hostConfig: destinationHostConfig,
          operationSource: "move_to_host_worktree",
        },
      });
      reusableWorktreeGitRoot = resolvedWorktree.worktreeGitRoot;
      reusableWorktreeWorkspaceRoot = resolvedWorktree.worktreeWorkspaceRoot;
      reusableWorktreeHasUncommittedChanges =
        resolvedWorktree.hasUncommittedChanges;
    } catch {
      logger.warning(
        "Failed to resolve a reusable cross-host worktree. Falling back to creating a new worktree.",
      );
    }
  }
  if (
    reusableWorktreeGitRoot != null &&
    reusableWorktreeWorkspaceRoot != null
  ) {
    onStepStatus?.("reuse-existing-worktree", "running");
    onStepStatus?.("reuse-existing-worktree", "done");
  }

  const moveResult = await serviceClientForHost("git").request({
    method: "move-thread-to-host-worktree",
    params: {
      operationId,
      hostConfig: sourceHostConfig,
      operationSource: "move_to_host_worktree",
      sourceCwd: cwd,
      sourceBranch,
      sourceRolloutPath,
      destinationHostConfig,
      destinationWorkspaceRoot,
      destinationWorktreeGitRoot: reusableWorktreeGitRoot,
      destinationWorktreeWorkspaceRoot: reusableWorktreeWorkspaceRoot,
      stashDestinationWorktree: reusableWorktreeHasUncommittedChanges,
    },
  });
  if (moveResult.status === "error") {
    return {
      status: "error",
      message: intl.formatMessage(
        {
          id: "localConversation.moveToHostWorktree.error.move",
          defaultMessage: "Failed to continue on another host: {message}",
          description:
            "Error shown when cross-host handoff git or artifact transfer fails",
        },
        { message: moveResult.message },
      ),
      execOutput: moveResult.execOutput ?? null,
    };
  }

  queryClient.invalidateQueries({
    queryKey: codexWorktreesQueryKey(
      normalizeHostConfigForWorktreeKey(destinationHostConfig),
    ),
  });
  onSwitchingThreadStart?.();

  let targetConversationId: string;
  try {
    targetConversationId = await sendAppServerRequest(
      "fork-conversation-from-rollout-path",
      {
        hostId: destinationHostConfig.id,
        conversationId,
        rolloutPath: moveResult.rolloutPath,
        cwd: moveResult.worktreeWorkspaceRoot,
        workspaceRoots: [moveResult.worktreeWorkspaceRoot],
        addForkedSyntheticItem: false,
      },
    );
  } catch (error) {
    try {
      await callCodexVscodeApi("worktree-set-owner-thread", {
        params: {
          hostId: destinationHostConfig.id,
          worktree: moveResult.worktreeGitRoot,
          conversationId,
        },
      });
    } catch {}
    logger.warning(
      "Cross-host handoff moved git state, but conversation fork failed: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
    onSwitchingThreadFailed?.();
    return { status: "success", conversationId };
  } finally {
    await runTransferStep(
      "Cross-host handoff copied rollout cleanup failed: {}",
      () =>
        serviceClientForHost("git").request({
          method: "cleanup-host-handoff-transfer",
          params: {
            hostConfig: destinationHostConfig,
            operationSource: "move_to_host_worktree",
            rolloutPath: moveResult.rolloutPath,
          },
        }),
    );
  }

  onTargetConversationId?.(targetConversationId);
  onTargetCwd?.(moveResult.worktreeWorkspaceRoot);
  await setConversationBranchOverride(targetConversationId, sourceBranch);
  await runTransferStep(
    "Cross-host handoff succeeded, but worktree ownership metadata could not be updated: {}",
    () =>
      callCodexVscodeApi("worktree-set-owner-thread", {
        params: {
          hostId: destinationHostConfig.id,
          worktree: moveResult.worktreeGitRoot,
          conversationId: targetConversationId,
        },
      }),
  );
  await runTransferStep(
    "Cross-host handoff succeeded, but browser state could not be transferred: {}",
    () => transferBrowserState(conversationId, targetConversationId),
  );
  await runTransferStep(
    "Cross-host handoff succeeded, but thread title could not be transferred: {}",
    () =>
      transferThreadTitle({
        sourceConversationId: conversationId,
        targetConversationId,
        getTitle: (id: string) =>
          appServerManager.getConversation(id)?.title ?? null,
        setTitle: (id: string, title: string) =>
          sendAppServerRequest("set-thread-title", {
            conversationId: id,
            title,
          }),
      }),
  );
  await runTransferStep(
    "Cross-host handoff succeeded, but saved diff comments could not be transferred: {}",
    () => {
      setDiffComments((previous) =>
        remapDiffCommentsForHandoff({
          sourceConversationId: conversationId,
          targetConversationId,
          diffComments: previous as Record<string, unknown>,
        }),
      );
    },
  );
  await runTransferStep(
    "Cross-host handoff succeeded, but pinned-thread state could not be transferred: {}",
    () =>
      transferPinnedThreadOrder({
        sourceConversationId: conversationId,
        targetConversationId,
      }),
  );
  onSwitchingThreadDone?.();
  return { status: "success", conversationId: targetConversationId };
}

async function runTransferStep(
  warningMessage: string,
  step: () => Promise<unknown> | unknown,
): Promise<void> {
  try {
    await step();
  } catch (error) {
    logger.warning(warningMessage, {
      sensitive: { error: serializeError(error) },
      safe: {},
    });
  }
}
