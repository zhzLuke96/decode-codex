// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Move a worktree-backed conversation back into the local checkout: run the
// git move-to-local worker, fork the conversation locally, then transfer
// ownership, browser state, title, diff comments and pinned-thread order.

import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { callCodexVscodeApi } from "../boundaries/vscode-api";
import {
  serviceClientForHost,
  Wn as resolveLocalWorkspaceRoot,
} from "../boundaries/thread-context-inputs.facade";
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

type MoveToLocalErrorCode =
  | "invalid-params"
  | "branch-checked-out-elsewhere"
  | "source-detach-failed"
  | "local-status-check-failed"
  | "local-destination-has-tracked-changes"
  | "local-branch-head-mismatch"
  | "checkout-local-failed"
  | "apply-source-stash-failed"
  | "rollback-failed"
  | "unexpected-error";

type MoveThreadToLocalOptions = {
  conversationId: string;
  currentBranch: string;
  cwd: string;
  localGitRoot: string | null;
  localWorkspaceRoot: string | null;
  worktreeRoot: string | null;
  branchCheckedOutElsewhere: boolean;
  intl: IntlShape;
  appServerManager: AppServerManager;
  transferBrowserState(
    sourceConversationId: string,
    targetConversationId: string,
  ): Promise<void> | void;
  setDiffComments(updater: (previous: unknown) => unknown): void;
  hostConfig: HostConfig;
  operationId: string;
  onSwitchingThreadStart?: () => void;
  onSwitchingThreadDone?: () => void;
  onSwitchingThreadFailed?: () => void;
  onTargetCwd?: (cwd: string) => void;
  onTargetConversationId?: (conversationId: string) => void;
};

type MoveThreadResult =
  | { status: "success"; conversationId: string }
  | { status: "error"; message: string; execOutput?: unknown };

export function initMoveThreadToLocalChunk(): void {}

export async function moveThreadToLocal({
  conversationId,
  currentBranch,
  cwd,
  localGitRoot,
  localWorkspaceRoot,
  worktreeRoot,
  branchCheckedOutElsewhere,
  intl,
  appServerManager,
  transferBrowserState,
  setDiffComments,
  hostConfig,
  operationId,
  onSwitchingThreadStart,
  onSwitchingThreadDone,
  onSwitchingThreadFailed,
  onTargetCwd,
  onTargetConversationId,
}: MoveThreadToLocalOptions): Promise<MoveThreadResult> {
  if (
    localGitRoot == null ||
    localWorkspaceRoot == null ||
    worktreeRoot == null ||
    branchCheckedOutElsewhere
  ) {
    return {
      status: "error",
      message: intl.formatMessage({
        id: "localConversation.moveToLocal.error.prerequisites",
        defaultMessage:
          "Unable to move right now. Check local workspace state and retry.",
        description:
          "Error shown when move-to-local cannot start due to missing prerequisites",
      }),
    };
  }

  const resolvedLocalWorkspaceRoot =
    resolveLocalWorkspaceRoot(localWorkspaceRoot);
  if (resolvedLocalWorkspaceRoot == null) {
    return {
      status: "error",
      message: intl.formatMessage(
        {
          id: "localConversation.moveToLocal.error.fork",
          defaultMessage: "{message}",
          description: "Error shown when Move to local fails",
        },
        { message: "Invalid local workspace root" },
      ),
    };
  }

  const moveResult = await serviceClientForHost("git").request({
    method: "move-thread-to-local",
    params: {
      operationId,
      hostConfig,
      operationSource: "move_to_local_dialog",
      sourceWorktreeCwd: cwd,
      sourceWorktreeRoot: worktreeRoot,
      localGitRoot,
      sourceBranch: currentBranch,
    },
  });
  if (moveResult.status === "error") {
    const rollbackSuffix =
      moveResult.rollbackErrors.length > 0
        ? intl.formatMessage({
            id: "localConversation.moveToLocal.error.rollbackIssues",
            defaultMessage: " Some cleanup steps could not be completed",
            description:
              "Suffix appended to move-to-local error message when rollback has issues",
          })
        : "";
    return {
      status: "error",
      message: `${formatMoveToLocalError({
        branch: currentBranch,
        error: moveResult.error,
        intl,
      })}${rollbackSuffix}`,
      execOutput: moveResult.execOutput,
    };
  }

  if (moveResult.warnings.includes("drop-source-stash-failed")) {
    logger.warning("Move to local succeeded, but source stash cleanup failed");
  }
  onSwitchingThreadStart?.();

  let targetConversationId: string;
  try {
    targetConversationId = await sendAppServerRequest(
      "fork-conversation-from-latest",
      {
        hostId: appServerManager.getHostId(),
        conversationId,
        cwd: resolvedLocalWorkspaceRoot,
        workspaceRoots: [resolvedLocalWorkspaceRoot],
        addForkedSyntheticItem: false,
      },
    );
  } catch (error) {
    logger.warning(
      "Move to local git operations succeeded, but conversation fork failed: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
    onSwitchingThreadFailed?.();
    return { status: "success", conversationId };
  }

  onTargetConversationId?.(targetConversationId);
  onTargetCwd?.(resolvedLocalWorkspaceRoot);

  try {
    await callCodexVscodeApi("worktree-set-owner-thread", {
      params: {
        hostId: hostConfig.id,
        worktree: worktreeRoot,
        conversationId: targetConversationId,
      },
    });
  } catch (error) {
    logger.warning(
      "Move to local succeeded, but worktree ownership metadata could not be updated: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  try {
    transferBrowserState(conversationId, targetConversationId);
  } catch (error) {
    logger.warning(
      "Move to local succeeded, but browser state could not be transferred: {}",
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
      "Move to local succeeded, but thread title could not be transferred: {}",
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
      "Move to local succeeded, but saved diff comments could not be transferred: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  try {
    await transferPinnedThreadOrder({
      sourceConversationId: conversationId,
      targetConversationId,
    });
  } catch (error) {
    logger.warning(
      "Move to local succeeded, but pinned-thread state could not be transferred: {}",
      { sensitive: { error: serializeError(error) }, safe: {} },
    );
  }

  onSwitchingThreadDone?.();
  return { status: "success", conversationId: targetConversationId };
}

function formatMoveToLocalError({
  branch,
  error,
  intl,
}: {
  branch: string;
  error: MoveToLocalErrorCode;
  intl: IntlShape;
}): string {
  switch (error) {
    case "invalid-params":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.invalidParams",
        defaultMessage:
          "Unable to move right now. Check local workspace state and retry",
        description:
          "Error shown when move-to-local receives invalid worker parameters",
      });
    case "branch-checked-out-elsewhere":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.branchCheckedOutElsewhere",
        defaultMessage: "Branch is already checked out in another worktree",
        description:
          "Error shown when move-to-local cannot use a branch that is checked out in another worktree",
      });
    case "source-detach-failed":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.sourceDetachFailed",
        defaultMessage: "Failed to detach the worktree branch",
        description:
          "Error shown when move-to-local cannot detach the source worktree",
      });
    case "local-status-check-failed":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.localStatusCheckFailed",
        defaultMessage:
          "Unable to determine whether the local workspace is clean",
        description:
          "Error shown when move-to-local cannot read the destination workspace status",
      });
    case "local-destination-has-tracked-changes":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.localDestinationHasTrackedChanges",
        defaultMessage: "Stash or commit your local changes to hand off",
        description:
          "Error shown when move-to-local is blocked by local workspace changes",
      });
    case "local-branch-head-mismatch":
      return intl.formatMessage(
        {
          id: "localConversation.moveToLocal.error.localBranchHeadMismatch",
          defaultMessage:
            "Branch “{branch}” already exists at a different commit",
          description:
            "Error shown when move-to-local finds that the requested local branch points at a different commit",
        },
        { branch },
      );
    case "checkout-local-failed":
      return intl.formatMessage(
        {
          id: "localConversation.moveToLocal.error.checkoutLocalFailed",
          defaultMessage: "Failed to check out branch “{branch}” locally",
          description:
            "Error shown when move-to-local cannot check out the destination branch",
        },
        { branch },
      );
    case "apply-source-stash-failed":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.applySourceStashFailed",
        defaultMessage: "Failed to apply worktree changes locally",
        description:
          "Error shown when move-to-local cannot apply the source worktree changes",
      });
    case "rollback-failed":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.rollbackFailed",
        defaultMessage: "Failed to restore state after the handoff failed",
        description:
          "Error shown when move-to-local cannot restore state after a failed operation",
      });
    case "unexpected-error":
      return intl.formatMessage({
        id: "localConversation.moveToLocal.error.unexpected",
        defaultMessage: "Failed to move to local",
        description: "Fallback error shown when move-to-local fails",
      });
  }
}
