// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Move a local conversation into a git worktree: reuse or create a managed
// worktree, prepare its branch, run the git move-to-worktree worker, fork the
// conversation there, then transfer browser/title/diff/pinned state.

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

type HostConfig = { id: string };

type AppServerManager = {
  getHostId(): string;
  getConversation(conversationId: string): { title?: string | null } | null;
};

type IntlShape = {
  formatMessage(
    descriptor: { id: string; defaultMessage: string; description?: string },
    values?: Record<string, unknown>,
  ): string;
};

type StepStatus = "running" | "done" | "failed";

type MoveThreadToWorktreeOptions = {
  conversationId: string;
  currentBranch: string;
  cwd: string;
  worktreeCheckoutBranch: string;
  selectedLocalCheckoutBranch: string;
  intl: IntlShape;
  appServerManager: AppServerManager;
  defaultBranch: string;
  transferBrowserState(
    sourceConversationId: string,
    targetConversationId: string,
  ): Promise<void> | void;
  setDiffComments(updater: (previous: unknown) => unknown): void;
  hostConfig: HostConfig;
  queryClient: { invalidateQueries(options: { queryKey: unknown }): void };
  operationId: string;
  onStepStatus?: (step: string, status: StepStatus) => void;
  onTargetCwd?: (cwd: string) => void;
  onTargetConversationId?: (conversationId: string) => void;
};

type MoveThreadResult =
  | { status: "success"; conversationId: string }
  | { status: "error"; message: string; execOutput?: unknown };

function createStreamId(): string {
  return crypto.randomUUID();
}

export function initMoveThreadToWorktreeChunk(): void {}

export async function moveThreadToWorktree({
  conversationId,
  currentBranch,
  cwd,
  worktreeCheckoutBranch,
  selectedLocalCheckoutBranch,
  intl,
  appServerManager,
  defaultBranch,
  transferBrowserState,
  setDiffComments,
  hostConfig,
  queryClient,
  operationId,
  onStepStatus,
  onTargetCwd,
  onTargetConversationId,
}: MoveThreadToWorktreeOptions): Promise<MoveThreadResult> {
  const trimmedWorktreeBranch = worktreeCheckoutBranch.trim();
  if (trimmedWorktreeBranch.length === 0) {
    return {
      status: "error",
      message: intl.formatMessage({
        id: "localConversation.moveToWorktree.error.branchRequired",
        defaultMessage: "Worktree branch name is required",
        description:
          "Error shown when move-to-worktree is attempted without a target worktree branch name",
      }),
      execOutput: null,
    };
  }

  let worktreeGitRoot: string | null = null;
  let worktreeWorkspaceRoot: string | null = null;
  let createdWorktree = false;
  let stashTargetWorktree = false;
  let worktreeStep = "create-new-worktree";
  try {
    const resolvedWorktree = await serviceClientForHost("git").request({
      method: "resolve-worktree-for-thread",
      params: {
        cwd,
        conversationId,
        hostConfig,
        operationSource: "move_to_worktree_dialog",
      },
    });
    worktreeGitRoot = resolvedWorktree.worktreeGitRoot;
    worktreeWorkspaceRoot = resolvedWorktree.worktreeWorkspaceRoot;
    stashTargetWorktree = resolvedWorktree.hasUncommittedChanges;
  } catch {
    logger.warning(
      "Failed to resolve an existing worktree for thread. Falling back to creating a new worktree.",
    );
  }

  if (worktreeGitRoot != null && worktreeWorkspaceRoot != null) {
    worktreeStep = "reuse-existing-worktree";
    onStepStatus?.(worktreeStep, "running");
    onStepStatus?.(worktreeStep, "done");
  } else {
    onStepStatus?.(worktreeStep, "running");
    try {
      const createdWorktreeResult = await callCodexVscodeApi(
        "worktree-create-managed",
        {
          params: {
            hostId: hostConfig.id,
            cwd,
            startingState: {
              type: "branch",
              branchName: currentBranch,
            },
            localEnvironmentConfigPath: null,
            streamId: createStreamId(),
          },
        },
      );
      worktreeGitRoot = createdWorktreeResult.worktreeGitRoot;
      worktreeWorkspaceRoot = createdWorktreeResult.worktreeWorkspaceRoot;
      createdWorktree = true;
      stashTargetWorktree = false;
      onStepStatus?.(worktreeStep, "done");
      queryClient.invalidateQueries({
        queryKey: codexWorktreesQueryKey(
          normalizeHostConfigForWorktreeKey(hostConfig),
        ),
      });
    } catch (error) {
      onStepStatus?.(worktreeStep, "failed");
      return {
        status: "error",
        message: intl.formatMessage(
          {
            id: "localConversation.moveToWorktree.error.createWorktree",
            defaultMessage: "Failed to create worktree: {message}",
            description:
              "Error shown when Move to worktree fails to create a worktree",
          },
          { message: serializeError(error) },
        ),
        execOutput: null,
      };
    }
  }

  if (worktreeGitRoot == null || worktreeWorkspaceRoot == null) {
    return {
      status: "error",
      message: intl.formatMessage({
        id: "localConversation.moveToWorktree.error.unknown",
        defaultMessage: "Failed to move to worktree. Please retry.",
        description: "Fallback error shown when move-to-worktree fails",
      }),
      execOutput: null,
    };
  }

  const branchResult = await callCodexVscodeApi("git-create-branch", {
    source: "move_to_worktree_dialog",
    params: {
      cwd: worktreeWorkspaceRoot,
      branch: trimmedWorktreeBranch,
      hostId: hostConfig.id,
      mode: "worktree",
    },
  });
  if (branchResult.status === "error") {
    if (createdWorktree) {
      try {
        await callCodexVscodeApi("worktree-delete", {
          params: {
            hostId: hostConfig.id,
            worktree: worktreeGitRoot,
            reason: "new-branch-cleanup",
          },
        });
      } catch (error) {
        logger.warning("Failed to clean up the newly created worktree: {}", {
          sensitive: { error: serializeError(error) },
          safe: {},
        });
      } finally {
        queryClient.invalidateQueries({
          queryKey: codexWorktreesQueryKey(
            normalizeHostConfigForWorktreeKey(hostConfig),
          ),
        });
      }
    }
    return {
      status: "error",
      message: intl.formatMessage(
        {
          id: "localConversation.moveToWorktree.error.prepareBranch",
          defaultMessage:
            "Failed to prepare worktree branch “{branch}”: {message}",
          description:
            "Error shown when move-to-worktree cannot create or resolve the target worktree branch",
        },
        { branch: trimmedWorktreeBranch, message: branchResult.error },
      ),
      execOutput: branchResult.execOutput,
    };
  }

  const moveResult = await serviceClientForHost("git").request({
    method: "move-thread-to-worktree",
    params: {
      operationId,
      hostConfig,
      operationSource: "move_to_worktree_dialog",
      localCwd: cwd,
      sourceBranch: currentBranch,
      defaultBranch,
      localCheckoutBranch: selectedLocalCheckoutBranch,
      worktreeCheckoutBranch: trimmedWorktreeBranch,
      worktreeGitRoot,
      worktreeWorkspaceRoot,
      stashTargetWorktree,
      createdWorktree,
    },
  });
  if (moveResult.status === "error") {
    const rollbackSuffix =
      moveResult.rollbackErrors.length > 0
        ? intl.formatMessage(
            {
              id: "localConversation.moveToWorktree.error.rollbackIssues",
              defaultMessage: " Rollback issues: {issues}",
              description:
                "Suffix appended to move-to-worktree error message when rollback has issues",
            },
            { issues: moveResult.rollbackErrors.join(", ") },
          )
        : "";
    return {
      status: "error",
      message:
        (moveResult.execOutput?.output.length ?? 0) > 0
          ? `${intl.formatMessage({
              id: "localConversation.moveToWorktree.error.moveWithTerminalOutput",
              defaultMessage: "Failed to move to worktree",
              description:
                "Error shown when Move to worktree git operations fail with command output shown separately",
            })}${rollbackSuffix}`
          : intl.formatMessage(
              {
                id: "localConversation.moveToWorktree.error.move",
                defaultMessage: "Failed to move to worktree: {message}",
                description:
                  "Error shown when Move to worktree git operations fail in the worker",
              },
              { message: `${moveResult.message}${rollbackSuffix}` },
            ),
      execOutput: moveResult.execOutput,
    };
  }

  onStepStatus?.("switching-thread", "running");
  let targetConversationId: string;
  try {
    targetConversationId = await sendAppServerRequest(
      "fork-conversation-from-latest",
      {
        hostId: appServerManager.getHostId(),
        conversationId,
        cwd: worktreeWorkspaceRoot,
        workspaceRoots: [worktreeWorkspaceRoot],
        addForkedSyntheticItem: false,
      },
    );
  } catch (error) {
    try {
      await callCodexVscodeApi("worktree-set-owner-thread", {
        params: {
          hostId: hostConfig.id,
          worktree: worktreeGitRoot,
          conversationId,
        },
      });
    } catch {}
    logger.warning(
      "Move to worktree git operations succeeded, but conversation fork failed: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
    onStepStatus?.("switching-thread", "failed");
    return { status: "success", conversationId };
  }

  onTargetConversationId?.(targetConversationId);
  onTargetCwd?.(worktreeWorkspaceRoot);

  try {
    await callCodexVscodeApi("worktree-set-owner-thread", {
      params: {
        hostId: hostConfig.id,
        worktree: worktreeGitRoot,
        conversationId: targetConversationId,
      },
    });
  } catch (error) {
    logger.warning(
      "Move to worktree succeeded, but worktree ownership metadata could not be updated: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  try {
    transferBrowserState(conversationId, targetConversationId);
  } catch (error) {
    logger.warning(
      "Move to worktree succeeded, but browser state could not be transferred: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  try {
    await transferThreadTitle({
      sourceConversationId: conversationId,
      targetConversationId,
      getTitle: (id: string) =>
        appServerManager.getConversation(id)?.title ?? null,
      setTitle: (id: string, title: string) =>
        sendAppServerRequest("set-thread-title", {
          conversationId: id,
          title,
        }),
    });
  } catch (error) {
    logger.warning(
      "Move to worktree succeeded, but thread title could not be transferred: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  try {
    setDiffComments((previous) =>
      remapDiffCommentsForHandoff({
        sourceConversationId: conversationId,
        targetConversationId,
        diffComments: previous as Record<string, unknown>,
      }),
    );
  } catch (error) {
    logger.warning(
      "Move to worktree succeeded, but saved diff comments could not be transferred: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  if (moveResult.warnings.includes("stashed-target-worktree-changes")) {
    logger.warning(
      "Move to worktree stashed uncommitted changes in the reused worktree",
    );
  }
  if (moveResult.warnings.includes("drop-source-stash-failed")) {
    logger.warning(
      "Move to worktree succeeded, but source stash cleanup failed",
    );
  }
  if (moveResult.warnings.includes("drop-target-stash-failed")) {
    logger.warning(
      "Move to worktree succeeded, but target stash cleanup failed",
    );
  }

  try {
    await transferPinnedThreadOrder({
      sourceConversationId: conversationId,
      targetConversationId,
    });
  } catch (error) {
    logger.warning(
      "Move to worktree succeeded, but pinned-thread state could not be transferred: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  onStepStatus?.("switching-thread", "done");
  return { status: "success", conversationId: targetConversationId };
}
