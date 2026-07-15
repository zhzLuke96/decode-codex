// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Localized tooltip text explaining why a commit / push / create-PR git action is
// currently disabled, plus a dispatcher that renders the tooltip for a blocked step.

import { FormattedMessage } from "../vendor/react-intl";
import type {
  CommitBlockedReason,
  CreatePullRequestBlockedReason,
  GitActionBlockedStep,
  PushBlockedReason,
} from "./git-action-blocked-reasons";

export interface CommitBlockedReasonTooltipProps {
  reason: CommitBlockedReason | null;
}

export function CommitBlockedReasonTooltip({
  reason,
}: CommitBlockedReasonTooltipProps) {
  if (reason == null) {
    return null;
  }
  switch (reason) {
    case "changes-loading":
      return (
        <FormattedMessage
          id="review.commit.disabled.loadingDiff"
          defaultMessage="Loading diff…"
          description="Tooltip shown on the commit button while changes are loading"
        />
      );
    case "changes-unavailable":
      return (
        <FormattedMessage
          id="review.commit.disabled.unavailable"
          defaultMessage="Commit is unavailable right now"
          description="Fallback tooltip shown when commit is disabled for an unknown reason"
        />
      );
    case "no-changes":
      return (
        <FormattedMessage
          id="review.commit.disabled.noChanges"
          defaultMessage="No changes to commit"
          description="Tooltip shown when there are no changes to commit"
        />
      );
  }
}

export interface PushBlockedReasonTooltipProps {
  reason: PushBlockedReason | null;
}

export function PushBlockedReasonTooltip({
  reason,
}: PushBlockedReasonTooltipProps) {
  if (reason == null) {
    return null;
  }
  switch (reason) {
    case "branch-missing":
      return (
        <FormattedMessage
          id="localConversationPage.pushBranchMissing"
          defaultMessage="Branch information unavailable"
          description="Tooltip shown when branch info cannot be resolved"
        />
      );
    case "nothing-to-push":
      return (
        <FormattedMessage
          id="localConversationPage.pushNothingToPush"
          defaultMessage="No new commits to push"
          description="Tooltip shown when there are no commits ahead of the remote"
        />
      );
    case "push-status-loading":
      return (
        <FormattedMessage
          id="localConversationPage.pushStatusMissing"
          defaultMessage="Loading push status…"
          description="Tooltip shown when push status is loading"
        />
      );
  }
}

export interface CreatePullRequestBlockedReasonTooltipProps {
  reason: CreatePullRequestBlockedReason | null;
}

export function CreatePullRequestBlockedReasonTooltip({
  reason,
}: CreatePullRequestBlockedReasonTooltipProps) {
  if (reason == null) {
    return null;
  }
  switch (reason) {
    case "branch-missing":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestBranchMissing"
          defaultMessage="Branch information unavailable"
          description="Tooltip shown when create PR is disabled because the current branch cannot be determined"
        />
      );
    case "checking-existing-pr":
      return (
        <FormattedMessage
          id="localConversationPage.viewPullRequestButtonLabel.loading"
          defaultMessage="Loading pull request…"
          description="Tooltip shown while the pull request URL is loading"
        />
      );
    case "default-branch-checked-out":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestSwitchBranch"
          defaultMessage="Checkout a feature branch before creating a PR"
          description="Tooltip shown when create PR is disabled because the default branch is active"
        />
      );
    case "default-branch-missing":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestDefaultBranchMissing"
          defaultMessage="Default branch information unavailable"
          description="Tooltip shown when create PR is disabled because the default branch cannot be determined"
        />
      );
    case "gh-auth-required":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestAuthGh"
          defaultMessage="Authenticate GitHub CLI: run `gh auth login`"
          description="Tooltip shown when create PR is disabled because GitHub CLI is not authenticated"
        />
      );
    case "gh-cli-missing":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestInstallGh"
          defaultMessage="Install GitHub CLI (gh) to create PRs"
          description="Tooltip shown when create PR is disabled because GitHub CLI is missing"
        />
      );
    case "gh-status-loading":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestGhStatusMissing"
          defaultMessage="Loading GitHub CLI status…"
          description="Tooltip shown when create PR is disabled because the GitHub CLI status is loading"
        />
      );
    case "no-git-repository":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestNoRepo"
          defaultMessage="No git repository found"
          description="Tooltip shown when create PR is disabled because no git repository is detected"
        />
      );
    case "pull-request-exists":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestExistingPullRequest"
          defaultMessage="A pull request already exists for this branch"
          description="Tooltip shown when create PR is disabled because a PR already exists"
        />
      );
    case "push-status-loading":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestPushStatusMissing"
          defaultMessage="Loading push status…"
          description="Tooltip shown when create PR is disabled because the push status is loading"
        />
      );
    case "upstream-missing":
      return (
        <FormattedMessage
          id="localConversationPage.createPullRequestSetUpstream"
          defaultMessage="Push this branch before creating a PR"
          description="Tooltip shown when create PR is disabled because the branch has no upstream"
        />
      );
  }
}

export interface GitActionBlockedStepTooltipProps {
  blockedStep: GitActionBlockedStep | null;
}

export function GitActionBlockedStepTooltip({
  blockedStep,
}: GitActionBlockedStepTooltipProps) {
  if (blockedStep == null) {
    return null;
  }
  switch (blockedStep.kind) {
    case "commit":
      return <CommitBlockedReasonTooltip reason={blockedStep.reason} />;
    case "push":
      return <PushBlockedReasonTooltip reason={blockedStep.reason} />;
    case "create-pr":
      return (
        <CreatePullRequestBlockedReasonTooltip reason={blockedStep.reason} />
      );
  }
}
