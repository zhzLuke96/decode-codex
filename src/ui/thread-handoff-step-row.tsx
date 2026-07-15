// Restored from ref/webview/assets/thread-handoff-step-row-DiTyoHg3.js
// thread-handoff-step-row-DiTyoHg3 chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { ProgressStepRow } from "../ui/progress-step-row";
type ThreadHandoffDirection = "to-worktree" | "to-host-worktree" | "to-local";
type ThreadHandoffStepStatus = "running" | "done" | "failed" | "pending";
type ThreadHandoffStepId =
  | "rolling-back-changes"
  | "prepare-host-transfer"
  | "transfer-host-artifacts"
  | "create-new-worktree"
  | "reuse-existing-worktree"
  | "stash-source-changes"
  | "checkout-local-branch"
  | "stash-target-worktree-changes"
  | "checkout-worktree-branch"
  | "detach-worktree-branch"
  | "apply-changes-to-worktree"
  | "apply-changes-to-local"
  | "switching-thread";
type ThreadHandoffStep = {
  id: ThreadHandoffStepId;
  status: ThreadHandoffStepStatus;
};
export const THREAD_HANDOFF_STEP_IDS: readonly ThreadHandoffStepId[] = [
  "prepare-host-transfer",
  "transfer-host-artifacts",
  "create-new-worktree",
  "reuse-existing-worktree",
  "stash-source-changes",
  "detach-worktree-branch",
  "checkout-local-branch",
  "stash-target-worktree-changes",
  "checkout-worktree-branch",
  "apply-changes-to-worktree",
  "apply-changes-to-local",
  "switching-thread",
];

export function initThreadHandoffStepIdsChunk(): void {
  void THREAD_HANDOFF_STEP_IDS;
}

export function initThreadHandoffStepRowChunk(): void {}

type ThreadHandoffStepRowProps = {
  compact?: boolean;
  direction: ThreadHandoffDirection;
  localBranch?: string | null;
  sourceBranch?: string | null;
  step: ThreadHandoffStep;
  worktreeBranch?: string | null;
};
function ThreadHandoffStepRow({
  compact = false,
  direction,
  localBranch,
  sourceBranch,
  step,
  worktreeBranch,
}: ThreadHandoffStepRowProps) {
  return (
    <ProgressStepRow compact={compact} status={step.status}>
      {getThreadHandoffStepLabel(
        step.id,
        direction,
        localBranch,
        sourceBranch,
        worktreeBranch,
      )}
    </ProgressStepRow>
  );
}
function getThreadHandoffStepLabel(
  stepId: ThreadHandoffStepId,
  direction: ThreadHandoffDirection,
  localBranch?: string | null,
  sourceBranch?: string | null,
  worktreeBranch?: string | null,
): ReactNode {
  if (stepId === "rolling-back-changes") {
    return (
      <FormattedMessage
        id="localConversation.threadHandoff.step.rollingBackChanges"
        defaultMessage="Rolling back changes"
        description="Progress step shown after a thread handoff step fails while cleanup is still in progress"
      />
    );
  }
  switch (stepId) {
    case "prepare-host-transfer":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.prepareHostTransfer"
          defaultMessage="Preparing files for transfer"
          description="Progress step shown while preparing cross-host git and rollout artifacts"
        />
      );
    case "transfer-host-artifacts":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.transferHostArtifacts"
          defaultMessage="Copying files to the destination host"
          description="Progress step shown while copying cross-host git and rollout artifacts"
        />
      );
    case "create-new-worktree":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.createNewWorktree"
          defaultMessage="Creating a new worktree"
          description="Progress step shown while creating a new worktree during thread handoff"
        />
      );
    case "reuse-existing-worktree":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.reuseExistingWorktree"
          defaultMessage="Reusing the existing worktree"
          description="Progress step shown while reusing an existing worktree during thread handoff"
        />
      );
    case "stash-source-changes":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.stashSourceChanges"
          defaultMessage="Stashing uncommitted changes"
          description="Progress step shown while stashing source changes during thread handoff"
        />
      );
    case "checkout-local-branch":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.checkoutLocalBranch"
          defaultMessage="Checking out {branch} locally"
          description="Progress step shown while checking out a branch locally during thread handoff"
          values={{
            branch: localBranch ?? sourceBranch,
          }}
        />
      );
    case "stash-target-worktree-changes":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.stashTargetWorktreeChanges"
          defaultMessage="Stashing worktree changes"
          description="Progress step shown while stashing pre-existing worktree changes during thread handoff"
        />
      );
    case "checkout-worktree-branch":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.checkoutWorktreeBranch"
          defaultMessage="Checking out {branch} in worktree"
          description="Progress step shown while checking out a branch in the worktree during thread handoff"
          values={{
            branch: worktreeBranch ?? sourceBranch,
          }}
        />
      );
    case "detach-worktree-branch":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.detachWorktreeBranch"
          defaultMessage="Detaching branch from worktree"
          description="Progress step shown while detaching the worktree branch during handoff back to local"
        />
      );
    case "apply-changes-to-worktree":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.applyChangesToWorktree"
          defaultMessage="Applying uncommitted changes to worktree"
          description="Progress step shown while applying changes to the worktree during thread handoff"
        />
      );
    case "apply-changes-to-local":
      return (
        <FormattedMessage
          id="localConversation.threadHandoff.step.applyChangesToLocal"
          defaultMessage="Applying uncommitted changes locally"
          description="Progress step shown while applying changes locally during thread handoff"
        />
      );
    case "switching-thread":
      return direction === "to-worktree" ? (
        <FormattedMessage
          id="localConversation.threadHandoff.step.moveThreadToWorktree"
          defaultMessage="Moving chat to worktree"
          description="Progress step shown while moving the thread to a worktree after the git handoff"
        />
      ) : direction === "to-host-worktree" ? (
        <FormattedMessage
          id="localConversation.threadHandoff.step.moveThreadToHostWorktree"
          defaultMessage="Moving chat to the destination worktree"
          description="Progress step shown while moving the thread to a destination-host worktree after transfer"
        />
      ) : (
        <FormattedMessage
          id="localConversation.threadHandoff.step.moveThreadToLocal"
          defaultMessage="Moving chat to local"
          description="Progress step shown while moving the thread to local after the git handoff"
        />
      );
  }
}
export { ThreadHandoffStepRow };
