// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Localized message descriptors for the local conversation git actions (commit /
// push / create-PR success + error toasts and in-progress phase labels), plus
// helpers to resolve a branch label and the descriptor for a workflow phase.

import { defineMessages } from "../vendor/react-intl";

interface IntlController {
  formatMessage(
    descriptor: { id: string; defaultMessage: string; description?: string },
    values?: Record<string, unknown>,
  ): string;
}

export type GitWorkflowPhase =
  | "committing"
  | "generating-commit-message"
  | "generating-pr-message"
  | "creating-branch"
  | "creating-pr"
  | "pushing";

export const gitActionMessages = defineMessages({
  commitErrorTitle: {
    id: "review.commit.error",
    defaultMessage: "Failed to commit changes",
    description: "Toast shown when a commit fails",
  },
  commitSuccess: {
    id: "review.commit.successToast",
    defaultMessage: "Committed to {branch}",
    description: "Toast shown when a commit succeeds",
  },
  commitMessageEmpty: {
    id: "review.commit.generate.emptyResponse",
    defaultMessage: "Couldn't generate a commit message",
    description: "Toast shown when commit message generation returns no result",
  },
  createBranchErrorTitle: {
    id: "review.commit.createBranchError",
    defaultMessage: "Failed to create branch",
    description:
      "Title for the error toast shown when creating a branch from a git action modal fails",
  },
  checkoutBranchErrorTitle: {
    id: "review.commit.checkoutBranchError",
    defaultMessage: "Failed to check out branch",
    description:
      "Title for the error toast shown when checking out a branch from a git action modal fails",
  },
  forcePushErrorTitle: {
    id: "localConversationPage.forcePushError",
    defaultMessage: "Failed to force push",
    description: "Error message when force push fails",
  },
  pushErrorTitle: {
    id: "localConversationPage.pushError",
    defaultMessage: "Failed to push changes",
    description: "Error message when git push fails",
  },
  createPullRequestErrorTitle: {
    id: "localConversationPage.createPullRequestError",
    defaultMessage: "Failed to create pull request",
    description: "Error message when creating a pull request fails",
  },
  pullRequestGenerationError: {
    id: "localConversationPage.generatePullRequestMessageError",
    defaultMessage: "Failed to generate pull request title and body",
    description:
      "Error message shown when pull request generation fails in commit modal",
  },
  pushSuccess: {
    id: "localConversationPage.commitAndPushToast",
    defaultMessage: "Pushed {branch}",
    description: "Toast shown when commit and push succeeds",
  },
  unknownBranch: {
    id: "localConversationPage.gitAction.unknownBranch",
    defaultMessage: "your branch",
    description: "Fallback branch name for git action success toasts",
  },
  committing: {
    id: "review.commit.disabled.committing",
    defaultMessage: "Committing…",
    description: "Tooltip shown on the commit button while committing",
  },
  generatingMessages: {
    id: "localConversation.gitActions.generatingMessages",
    defaultMessage: "Generating messages…",
    description: "Label for a git action while generating messages",
  },
  creatingBranch: {
    id: "localConversation.gitActions.creatingBranch",
    defaultMessage: "Creating branch…",
    description: "Label for a git action while creating a branch",
  },
  creatingPullRequest: {
    id: "localConversationPage.createPullRequestButtonLabel.loading",
    defaultMessage: "Creating PR…",
    description: "Label for create pull request action while it is running",
  },
  pushing: {
    id: "localConversationPage.pushButtonLabel.loading",
    defaultMessage: "Pushing changes…",
    description: "Label for git push action while a push is running",
  },
});

export function resolveBranchLabel(
  intl: IntlController,
  branch: string | null | undefined,
): string {
  const trimmed = branch?.trim() ?? "";
  return trimmed.length > 0
    ? trimmed
    : intl.formatMessage(gitActionMessages.unknownBranch);
}

export function getGitWorkflowPhaseMessageDescriptor(phase: GitWorkflowPhase) {
  switch (phase) {
    case "committing":
      return gitActionMessages.committing;
    case "generating-commit-message":
    case "generating-pr-message":
      return gitActionMessages.generatingMessages;
    case "creating-branch":
      return gitActionMessages.creatingBranch;
    case "creating-pr":
      return gitActionMessages.creatingPullRequest;
    case "pushing":
      return gitActionMessages.pushing;
  }
}
